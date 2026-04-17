require("dotenv").config();
const fs = require("fs");

const BASE_URL = process.env.PRODUCTS_DB_URL || "http://localhost:3000/api/products-db";
const API_KEY = process.env.INTERNAL_SECRET || "";
const LIMIT = Number(process.env.EXPORT_LIMIT || 1000);
const OUTPUT = process.env.EXPORT_OUTPUT || "./products.csv";

async function fetchPage(page) {
  const url = `${BASE_URL}?page=${page}&limit=${LIMIT}`;

  const res = await fetch(url, {
    headers: {
      "x-api-key": API_KEY
    }
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Erro HTTP ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data;
}

function escapeCsv(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function normalizeMoney(value) {
  if (value == null || value === "") return "";

  const cleaned = String(value)
    .trim()
    .replace(/^R\$\s*/i, "")
    .replace(/\s/g, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const num = Number(cleaned);
  return Number.isFinite(num) ? num.toFixed(2) : "";
}

function normalizeInteger(value, fallback = 0) {
  if (value == null || value === "") return fallback;

  const num = Number(String(value).replace(/[^\d-]/g, ""));
  return Number.isFinite(num) ? Math.trunc(num) : fallback;
}

function normalizeBoolean(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;

  const normalized = String(value ?? "").trim().toLowerCase();

  return ["true", "1", "sim", "yes"].includes(normalized);
}

function normalizeText(value, fallback = "") {
  if (value == null) return fallback;
  return String(value).trim();
}

function mapProduct(product) {
  return {
    id: product.id ?? product.CDPRODUTO ?? "",
    name: normalizeText(product.name ?? product.PRODUTO),
    category: normalizeText(product.category ?? product.GRUPOS),
    brand: normalizeText(product.brand),
    saleFormat: normalizeText(product.saleFormat ?? product.CDUNIDVENDA ?? "Unidade"),
    installmentsNoInterest: normalizeBoolean(product.installmentsNoInterest),
    flashOffer: normalizeBoolean(product.flashOffer),
    price: normalizeMoney(product.price ?? product.PADRAO),
    oldPrice: normalizeMoney(product.oldPrice ?? product.PROMOCAO),
    offPct: product.offPct ?? "",
    freeShip: normalizeBoolean(product.freeShip),
    image: normalizeText(product.image ?? product.FOTO),
    featured: normalizeBoolean(product.featured),
    description: normalizeText(product.description ?? product.DESCRICAO_PRODUTO ?? "Produto sem descrição."),
    stock: normalizeInteger(product.stock ?? product.QTDEATUAL, 0),
    location: normalizeText(product.location ?? product.LOCALIZACAO_DEPOSITO),
    barcode: normalizeText(product.barcode ?? product.CODBARRA),
    unit: normalizeText(product.unit ?? product.CDUNIDVENDA),
    cdsetor: normalizeInteger(product.cdsetor ?? product.CDSETOR, ""),
    cdsetdep: normalizeInteger(product.cdsetdep ?? product.CDSETDEP, "")
  };
}

function toCSV(products) {
  const headers = [
  "id",
  "name",
  "category",
  "brand",
  "saleFormat",
  "installmentsNoInterest",
  "flashOffer",
  "price",
  "oldPrice",
  "offPct",
  "freeShip",
  "image",
  "featured",
  "description",
  "stock",
  "location",
  "barcode",
  "unit",
  "cdsetor",
  "cdsetdep"
];

  const lines = products.map((raw) => {
    const p = mapProduct(raw);

    return [
  p.id,
  escapeCsv(p.name),
  escapeCsv(p.category),
  escapeCsv(p.brand),
  escapeCsv(p.saleFormat),
  p.installmentsNoInterest,
  p.flashOffer,
  p.price,
  p.oldPrice,
  p.offPct,
  p.freeShip,
  escapeCsv(p.image),
  p.featured,
  escapeCsv(p.description),
  p.stock,
  escapeCsv(p.location),
  escapeCsv(p.barcode),
  escapeCsv(p.unit),
  p.cdsetor,
  p.cdsetdep
].join(";");
  });

  return [headers.join(";"), ...lines].join("\n");
}

async function run() {
  if (!API_KEY) {
    throw new Error("INTERNAL_SECRET não definido no .env");
  }

  let page = 1;
  let allProducts = [];

  console.log("🚀 Iniciando exportação Firebird → CSV");

  while (true) {
    const data = await fetchPage(page);
    const products = Array.isArray(data.products) ? data.products : [];

    console.log(`📦 Página ${page} → ${products.length} produtos`);

    allProducts = allProducts.concat(products);

    if (!data.hasMore) break;
    page++;
  }

  console.log(`✅ Total coletado: ${allProducts.length}`);

  const csv = toCSV(allProducts);
  fs.writeFileSync(OUTPUT, csv, "utf8");

  console.log(`📁 CSV salvo em: ${OUTPUT}`);
}

run().catch((err) => {
  console.error("❌ Erro na exportação:", err.message);
  process.exit(1);
});