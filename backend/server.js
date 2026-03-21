require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const Firebird = require("node-firebird");

const app = express();
const PORT = process.env.PORT || 3000;

/* =========================
   FIREBIRD CONFIG
========================= */

const dbOptions = {
  host: process.env.FIREBIRD_HOST || "192.168.88.247",
  port: Number(process.env.FIREBIRD_PORT || 3050),
  database: process.env.FIREBIRD_DATABASE || "/opt/firebird/bancos/MIAUTOMEC.FDB",
  user: process.env.FIREBIRD_USER || "SYSDBA",
  password: process.env.FIREBIRD_PASSWORD || "masterkey",
  lowercase_keys: true
};

/* =========================
   CONFIG
========================= */

const REUTILIZAR_MESMO_VENDEDOR = false;

const allowedOrigins = [
  "http://localhost:5500",
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://site-original-nu.vercel.app",
  "https://sitecondebonfim.onrender.com"
];

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin) || /\.vercel\.app$/.test(new URL(origin).hostname)) {
      return callback(null, true);
    }

    return callback(null, true);
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

/* =========================
   ARQUIVOS ESTÁTICOS
========================= */

app.use("/assets", express.static(path.join(__dirname, "assets")));

const vendedoresFile = path.join(__dirname, "vendedores.json");
const leadsFile = path.join(__dirname, "leads.json");
const filaFile = path.join(__dirname, "fila.json");
const productsFile = path.join(__dirname, "products.json");

/* =========================
   UTILITÁRIOS
========================= */

function ensureFile(filePath, fallbackData) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(fallbackData, null, 2), "utf-8");
  }
}

function readJson(filePath, fallbackData) {
  try {
    ensureFile(filePath, fallbackData);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    console.error(`Erro ao ler ${filePath}:`, error);
    return fallbackData;
  }
}

function writeJson(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(`Erro ao escrever ${filePath}:`, error);
  }
}

function normalizePhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits) return "";
  return digits.startsWith("55") ? digits : `55${digits}`;
}

function sanitizeItems(items) {
  if (!Array.isArray(items)) return [];

  return items
    .filter((item) => item && Number(item.qty) > 0 && Number(item.price) > 0)
    .map((item) => ({
      id: item.id,
      nome: String(item.name || "").trim(),
      quantidade: Number(item.qty),
      preco_unitario: Number(item.price),
      subtotal: Number((Number(item.qty) * Number(item.price)).toFixed(2))
    }));
}

function getBaseUrl(req) {
  const envBaseUrl = process.env.BASE_URL;
  if (envBaseUrl) {
    return envBaseUrl.replace(/\/$/, "");
  }

  return `${req.protocol}://${req.get("host")}`;
}

function safeFileName(filePathValue) {
  return String(filePathValue || "").split(/[/\\]/).pop();
}

function escapeSql(value) {
  return String(value || "").replace(/'/g, "''");
}

/* =========================
   LEITURA / ESCRITA
========================= */

function getVendedoresData() {
  return readJson(vendedoresFile, { vendedores: [] });
}

function getLeadsData() {
  return readJson(leadsFile, { leads: [] });
}

function getFilaData() {
  return readJson(filaFile, { ultimo_vendedor_id: 0 });
}

function getProductsData() {
  return readJson(productsFile, []);
}

function saveLeadsData(data) {
  writeJson(leadsFile, data);
}

function saveFilaData(data) {
  writeJson(filaFile, data);
}

/* =========================
   VENDEDORES / FILA
========================= */

function getActiveVendedores() {
  return (getVendedoresData().vendedores || []).filter((v) => v.ativo);
}

function pickNextVendedor() {
  const vendedores = getActiveVendedores();
  const fila = getFilaData();

  if (!vendedores.length) return null;

  const index = vendedores.findIndex(
    (v) => Number(v.id) === Number(fila.ultimo_vendedor_id)
  );

  const next = index === -1
    ? vendedores[0]
    : vendedores[(index + 1) % vendedores.length];

  saveFilaData({ ultimo_vendedor_id: next.id });
  return next;
}

/* =========================
   FIREBIRD HELPERS
========================= */

function queryFirebird(sql) {
  return new Promise((resolve, reject) => {
    Firebird.attach(dbOptions, (attachError, db) => {
      if (attachError) {
        return reject(attachError);
      }

      db.query(sql, (queryError, result) => {
        db.detach();

        if (queryError) {
          return reject(queryError);
        }

        resolve(result);
      });
    });
  });
}

function mapDbProducts(rows, baseUrl) {
  return rows.map((row) => {
    const price = Number(row.price || 0);
    const promo = Number(row.promo_price || 0);

    let finalPrice = price;
    let oldPrice = null;
    let offPct = null;

    if (promo && promo > 0 && promo < price) {
      finalPrice = promo;
      oldPrice = price;
      offPct = Math.round(((price - promo) / price) * 100);
    }

    const imageFile = safeFileName(row.image);
    const imageUrl = imageFile
      ? `${baseUrl}/assets/produtos/${imageFile}`
      : `${baseUrl}/assets/no-image.jpg`;

    return {
      id: row.id,
      name: row.name || "Produto sem nome",
      category: row.category || "Sem categoria",
      brand: row.brand || "",
      saleFormat: row.sale_format || "Unidade",
      installmentsNoInterest: Boolean(row.installments_no_interest),
      flashOffer: Boolean(row.flash_offer),
      price: finalPrice,
      oldPrice,
      offPct,
      freeShip: false,
      image: imageUrl,
      featured: Number(offPct || 0) > 0,
      description: row.description || "Produto sem descrição.",
      stock: Number(row.stock || 0)
    };
  });
}

function normalizeJsonProducts(products, baseUrl) {
  return products.map((product) => {
    const imageFile = safeFileName(product.image);
    const isAbsolute = /^https?:\/\//i.test(String(product.image || ""));
    const price = Number(product.price || 0);
    const oldPrice = product.oldPrice != null ? Number(product.oldPrice) : null;
    const offPct = product.offPct != null
      ? Number(product.offPct)
      : oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null;

    return {
      id: product.id,
      name: product.name || "Produto sem nome",
      category: product.category || "Sem categoria",
      brand: product.brand || "",
      saleFormat: product.saleFormat || "Unidade",
      installmentsNoInterest: Boolean(product.installmentsNoInterest),
      flashOffer: Boolean(product.flashOffer),
      price,
      oldPrice,
      offPct,
      freeShip: Boolean(product.freeShip),
      image: isAbsolute
        ? product.image
        : imageFile
        ? `${baseUrl}/assets/produtos/${imageFile}`
        : `${baseUrl}/assets/no-image.jpg`,
      featured: Boolean(product.featured || Number(offPct || 0) > 0),
      description: product.description || "Produto sem descrição.",
      stock: Number(product.stock || 0)
    };
  });
}

/* =========================
   ROTAS
========================= */

app.get("/", (req, res) => {
  res.send("Backend rodando");
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "sitecondebonfim",
    timestamp: new Date().toISOString()
  });
});

app.get("/vendedores", (req, res) => {
  const data = getVendedoresData();

  res.json({
    success: true,
    vendedores: data.vendedores || []
  });
});

app.get("/leads", (req, res) => {
  const data = getLeadsData();

  res.json({
    success: true,
    leads: data.leads || []
  });
});

/* =========================
   PRODUTOS JSON
========================= */

app.get("/api/products", (req, res) => {
  try {
    const baseUrl = getBaseUrl(req);
    const products = normalizeJsonProducts(getProductsData(), baseUrl);

    res.json({
      success: true,
      source: "json",
      page: 1,
      limit: products.length,
      total: products.length,
      hasMore: false,
      products
    });
  } catch (error) {
    console.error("Erro em /api/products:", error);
    res.status(500).json({
      success: false,
      message: "Erro ao carregar produtos do JSON."
    });
  }
});

/* =========================
   PRODUTOS FIREBIRD / FALLBACK
========================= */

app.get("/api/products-db", async (req, res) => {
  const page = Math.max(1, Number(req.query.page || 1));
  const limit = Math.max(1, Number(req.query.limit || 100));
  const offset = (page - 1) * limit;
  const search = String(req.query.search || "").trim();
  const category = String(req.query.category || "").trim();
  const baseUrl = getBaseUrl(req);

  try {
    const where = [];

    if (search) {
      const safeSearch = escapeSql(search);
      where.push(`UPPER(NAME) CONTAINING UPPER('${safeSearch}')`);
    }

    if (category && category !== "Todos") {
      const safeCategory = escapeSql(category);
      where.push(`UPPER(CATEGORY) = UPPER('${safeCategory}')`);
    }

    const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

    const rows = await queryFirebird(`
      SELECT
        ID,
        NAME,
        IMAGE,
        DESCRIPTION,
        CATEGORY,
        STOCK,
        PRICE,
        PROMO_PRICE
      FROM BANCOSQL
      ${whereSql}
      ORDER BY NAME
      ROWS ${offset + 1} TO ${offset + limit}
    `);

    const countRows = await queryFirebird(`
      SELECT COUNT(*) AS TOTAL
      FROM BANCOSQL
      ${whereSql}
    `);

    const total = Number(countRows?.[0]?.total || 0);
    const products = mapDbProducts(rows, baseUrl);

    return res.json({
      success: true,
      source: "firebird",
      page,
      limit,
      total,
      hasMore: offset + products.length < total,
      search,
      category,
      products
    });
    
  } catch (error) {
    console.error("Erro no Firebird, usando fallback JSON:", error.message || error);

    try {
      let products = normalizeJsonProducts(getProductsData(), baseUrl);

      if (search) {
        const normalizedSearch = search.toLowerCase();
        products = products.filter((product) => {
          const name = String(product.name || "").toLowerCase();
          const categoryValue = String(product.category || "").toLowerCase();
          const brand = String(product.brand || "").toLowerCase();
          const description = String(product.description || "").toLowerCase();

          return (
            name.includes(normalizedSearch) ||
            categoryValue.includes(normalizedSearch) ||
            brand.includes(normalizedSearch) ||
            description.includes(normalizedSearch)
          );
        });
      }

      if (category && category !== "Todos") {
        const normalizedCategory = category.toLowerCase();
        products = products.filter(
          (product) => String(product.category || "").toLowerCase() === normalizedCategory
        );
      }

      const paginated = products.slice(offset, offset + limit);

      return res.json({
        success: true,
        source: "json-fallback",
        page,
        limit,
        total: products.length,
        hasMore: offset + paginated.length < products.length,
        search,
        category,
        products: paginated
      });
    } catch (jsonError) {
      console.error("Erro também no fallback JSON:", jsonError);

      return res.status(500).json({
        success: false,
        message: "Erro ao carregar produtos.",
        details: String(jsonError.message || jsonError)
      });
    }
  }
});

/* =========================
   LEADS
========================= */

app.post("/distribuir-lead", (req, res) => {
  try {
    const vendedor = pickNextVendedor();

    if (!vendedor) {
      return res.status(500).json({
        success: false,
        message: "Nenhum vendedor ativo disponível."
      });
    }

    const lead = {
      created_at: new Date().toISOString(),
      cliente: req.body.name,
      telefone: normalizePhone(req.body.phone),
      itens: sanitizeItems(req.body.items),
      vendedor,
      reutilizar_mesmo_vendedor: REUTILIZAR_MESMO_VENDEDOR
    };

    const leads = getLeadsData();
    leads.leads.push(lead);
    saveLeadsData(leads);

    res.json({
      success: true,
      vendedor
    });
  } catch (error) {
    console.error("Erro em /distribuir-lead:", error);
    res.status(500).json({
      success: false,
      message: "Erro ao distribuir lead."
    });
  }
});

/* =========================
   404
========================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Rota não encontrada: ${req.method} ${req.originalUrl}`
  });
});

/* =========================
   START
========================= */

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});