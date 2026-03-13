const STORE = {
  name: "Conde de Bonfim",
  whatsapp: "5521959039201"
};

const PAYMENT_CONFIG = {
  provider: "infinitepay",
  handle: "andrewadlm",
  checkoutLinkUrl: "https://api.infinitepay.io/invoices/public/checkout/links",
  paymentCheckUrl: "https://api.infinitepay.io/invoices/public/checkout/payment_check",
  redirectUrl: `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, "")}pagamento-sucesso.html`,
  webhookUrl: "",
  orderPrefix: "scdbinfinite"
};

const CATEGORIES = [
  { name: "Todos", icon: "🧩" },
  { name: "Materiais de Construção", icon: "🏗️" },
  { name: "Cimento e Concreto", icon: "🧱" },
  { name: "Blocos e Tijolos", icon: "🧱" },
  { name: "Ferragens", icon: "🔩" },
  { name: "Materiais Elétricos", icon: "⚡" },
  { name: "Materiais Hidráulicos", icon: "💧" },
  { name: "Tintas e Acessórios", icon: "🎨" },
  { name: "Ferramentas", icon: "🛠️" },
  { name: "Portas e Janelas", icon: "🚪" },
  { name: "Banheiros e Acessórios", icon: "🚽" }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Cimento Portland CP II 50kg",
    category: "Cimento e Concreto",
    price: 32.90,
    oldPrice: 39.90,
    offPct: 17,
    freeShip: true,
    image: "./assets/oferta-cimento.jpg",
    featured: true,
    description: "Cimento indicado para obras em geral, com excelente resistência e ótimo rendimento."
  },
  {
    id: 2,
    name: "Bloco de Concreto Estrutural 14x19x39",
    category: "Blocos e Tijolos",
    price: 4.90,
    oldPrice: null,
    offPct: null,
    freeShip: false,
    image: "./assets/bloco.jpg",
    featured: true,
    description: "Bloco estrutural de concreto para alvenaria, ideal para construções residenciais e comerciais."
  },
  {
    id: 3,
    name: "Vergalhão CA-50 10mm",
    category: "Ferragens",
    price: 89.90,
    oldPrice: null,
    offPct: null,
    freeShip: false,
    image: "./assets/vergalhao.jpg",
    featured: true,
    description: "Vergalhão de alta resistência para reforço estrutural em fundações, vigas e pilares."
  },
  {
    id: 4,
    name: "Interruptor Simples 10A Branco",
    category: "Materiais Elétricos",
    price: 8.90,
    oldPrice: null,
    offPct: null,
    freeShip: false,
    image: "./assets/prod-interruptor.jpg",
    featured: true,
    description: "Interruptor simples de acabamento clean, ideal para instalações residenciais."
  },
  {
    id: 5,
    name: "Torneira Monocomando Cromada",
    category: "Materiais Hidráulicos",
    price: 129.90,
    oldPrice: null,
    offPct: null,
    freeShip: false,
    image: "./assets/prod-torneira.jpg",
    featured: true,
    description: "Torneira monocomando cromada com design moderno e alta durabilidade."
  },
  {
    id: 6,
    name: "Tinta Acrílica Premium Branco 18L",
    category: "Tintas e Acessórios",
    price: 189.90,
    oldPrice: 229.90,
    offPct: 17,
    freeShip: true,
    image: "./assets/oferta-tinta.jpg",
    featured: true,
    description: "Tinta acrílica premium com excelente cobertura, acabamento fosco e alto rendimento."
  },
  {
    id: 7,
    name: "Furadeira de Impacto 650W",
    category: "Ferramentas",
    price: 249.90,
    oldPrice: 349.90,
    offPct: 28,
    freeShip: true,
    image: "./assets/oferta-furadeira.jpg",
    featured: true,
    description: "Ferramenta versátil para perfurações em madeira, metal e alvenaria."
  },
  {
    id: 8,
    name: "Porta de Madeira 80x210cm",
    category: "Portas e Janelas",
    price: 389.90,
    oldPrice: 459.90,
    offPct: 15,
    freeShip: true,
    image: "./assets/oferta-porta.jpg",
    featured: true,
    description: "Porta de madeira resistente, ideal para ambientes internos com ótimo acabamento."
  },
  {
    id: 9,
    name: "Vaso Sanitário com Caixa Acoplada",
    category: "Banheiros e Acessórios",
    price: 449.90,
    oldPrice: 549.90,
    offPct: 18,
    freeShip: true,
    image: "./assets/prod-vaso.jpg",
    featured: true,
    description: "Conjunto sanitário completo com design moderno e excelente custo-benefício."
  },
  {
    id: 10,
    name: "Areia Média Lavada 20kg",
    category: "Materiais de Construção",
    price: 7.90,
    oldPrice: null,
    offPct: null,
    freeShip: false,
    image: "./assets/areia.jpg",
    featured: true,
    description: "Areia média lavada para assentamento, reboco e preparo de argamassas."
  },
{
  id: 11,
  name: "Cimento Portland CP III 50kg",
  category: "Cimento e Concreto",
  price: 34.90,
  oldPrice: 39.90,
  offPct: 13,
  freeShip: false,
  image: "./assets/cimento-cp3.jpg",
  featured: false,
  description: "Cimento de alta resistência, ideal para concretagens e estruturas em geral."
},
{
  id: 12,
  name: "Cimento Portland CP V-ARI 50kg",
  category: "Cimento e Concreto",
  price: 38.90,
  oldPrice: 44.90,
  offPct: 13,
  freeShip: false,
  image: "./assets/cimento-cpv.jpg",
  featured: false,
  description: "Cimento de alta resistência inicial, indicado para obras que exigem rapidez na cura."
},
{
  id: 13,
  name: "Concreto Ensacado 20kg",
  category: "Cimento e Concreto",
  price: 18.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/concreto-ensacado.jpg",
  featured: false,
  description: "Concreto pronto para pequenas reformas, reparos e aplicações rápidas."
},
{
  id: 14,
  name: "Argamassa Estrutural 20kg",
  category: "Cimento e Concreto",
  price: 24.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/argamassa-estrutural.jpg",
  featured: false,
  description: "Argamassa para aplicações estruturais com excelente aderência e resistência."
},
{
  id: 15,
  name: "Massa de Concreto Usinado 25kg",
  category: "Cimento e Concreto",
  price: 21.90,
  oldPrice: 26.90,
  offPct: 19,
  freeShip: false,
  image: "./assets/concreto-usinado.jpg",
  featured: false,
  description: "Massa pronta para concretagem de calçadas, bases e pequenos reparos."
},
{
  id: 16,
  name: "Cimento Branco 1kg",
  category: "Cimento e Concreto",
  price: 9.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/cimento-branco.jpg",
  featured: false,
  description: "Cimento branco para acabamentos finos, rejuntes e pequenos detalhes decorativos."
},
{
  id: 17,
  name: "Argamassa AC-I 20kg",
  category: "Cimento e Concreto",
  price: 17.90,
  oldPrice: 21.90,
  offPct: 18,
  freeShip: false,
  image: "./assets/argamassa-aci.jpg",
  featured: false,
  description: "Argamassa colante para assentamento de revestimentos em áreas internas."
},
{
  id: 18,
  name: "Argamassa AC-II 20kg",
  category: "Cimento e Concreto",
  price: 24.90,
  oldPrice: 29.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/argamassa-acii.jpg",
  featured: false,
  description: "Argamassa colante com maior aderência, indicada para áreas internas e externas."
},
{
  id: 19,
  name: "Argamassa AC-III 20kg",
  category: "Cimento e Concreto",
  price: 32.90,
  oldPrice: 38.90,
  offPct: 15,
  freeShip: false,
  image: "./assets/argamassa-aciii.jpg",
  featured: false,
  description: "Argamassa de alto desempenho para porcelanatos e áreas de grande exigência."
},
{
  id: 20,
  name: "Rejunte Flexível Cinza 1kg",
  category: "Cimento e Concreto",
  price: 8.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/rejunte-cinza.jpg",
  featured: false,
  description: "Rejunte flexível para acabamento de pisos e revestimentos com ótima durabilidade."
},

{
  id: 21,
  name: "Bloco Cerâmico 9x19x19",
  category: "Blocos e Tijolos",
  price: 2.20,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/bloco-ceramico-9.jpg",
  featured: false,
  description: "Bloco cerâmico leve e resistente para alvenaria de vedação."
},
{
  id: 22,
  name: "Bloco Cerâmico 11,5x19x24",
  category: "Blocos e Tijolos",
  price: 2.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/bloco-ceramico-11.jpg",
  featured: false,
  description: "Bloco cerâmico ideal para paredes internas e externas com bom isolamento."
},
{
  id: 23,
  name: "Tijolo Baiano 8 Furos",
  category: "Blocos e Tijolos",
  price: 1.80,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/tijolo-baiano.jpg",
  featured: false,
  description: "Tijolo baiano tradicional para obras residenciais e comerciais."
},
{
  id: 24,
  name: "Bloco de Vedação 9x19x39",
  category: "Blocos e Tijolos",
  price: 3.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/bloco-vedacao.jpg",
  featured: false,
  description: "Bloco de vedação em concreto para paredes com ótimo acabamento."
},
{
  id: 25,
  name: "Canaleta de Concreto 14x19x39",
  category: "Blocos e Tijolos",
  price: 6.90,
  oldPrice: 7.90,
  offPct: 13,
  freeShip: false,
  image: "./assets/canaleta-concreto.jpg",
  featured: false,
  description: "Canaleta de concreto para vergas, cintas e reforços estruturais."
},
{
  id: 26,
  name: "Tijolo Maciço Cerâmico",
  category: "Blocos e Tijolos",
  price: 1.60,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/tijolo-macico.jpg",
  featured: false,
  description: "Tijolo maciço para acabamentos rústicos, churrasqueiras e alvenaria decorativa."
},
{
  id: 27,
  name: "Bloco Estrutural 19x19x39",
  category: "Blocos e Tijolos",
  price: 5.90,
  oldPrice: 6.50,
  offPct: 9,
  freeShip: false,
  image: "./assets/bloco-estrutural-19.jpg",
  featured: false,
  description: "Bloco estrutural reforçado para edificações com alta exigência de resistência."
},
{
  id: 28,
  name: "Meio Bloco de Concreto 14x19x19",
  category: "Blocos e Tijolos",
  price: 3.20,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/meio-bloco.jpg",
  featured: false,
  description: "Meio bloco de concreto para ajustes de paginação e encaixe em alvenaria."
},
{
  id: 29,
  name: "Bloco Celular Autoclavado",
  category: "Blocos e Tijolos",
  price: 12.90,
  oldPrice: 15.90,
  offPct: 19,
  freeShip: false,
  image: "./assets/bloco-celular.jpg",
  featured: false,
  description: "Bloco leve com bom desempenho térmico e acústico para construções modernas."
},
{
  id: 30,
  name: "Tijolo Ecológico Solo-Cimento",
  category: "Blocos e Tijolos",
  price: 3.40,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/tijolo-ecologico.jpg",
  featured: false,
  description: "Tijolo ecológico com encaixe preciso, ideal para obras sustentáveis."
},

{
  id: 31,
  name: "Vergalhão CA-50 8mm",
  category: "Ferragens",
  price: 59.90,
  oldPrice: 69.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/vergalhao-8mm.jpg",
  featured: false,
  description: "Vergalhão para armações estruturais com excelente resistência mecânica."
},
{
  id: 32,
  name: "Vergalhão CA-50 12,5mm",
  category: "Ferragens",
  price: 109.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/vergalhao-125mm.jpg",
  featured: false,
  description: "Vergalhão reforçado para vigas, pilares e fundações."
},
{
  id: 33,
  name: "Arame Recozido 1kg",
  category: "Ferragens",
  price: 19.90,
  oldPrice: 24.90,
  offPct: 20,
  freeShip: false,
  image: "./assets/arame-recozido.jpg",
  featured: false,
  description: "Arame recozido ideal para amarração de ferragens em estruturas de concreto."
},
{
  id: 34,
  name: "Tela Soldada Q-92",
  category: "Ferragens",
  price: 79.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/tela-soldada.jpg",
  featured: false,
  description: "Tela soldada para reforço de lajes, pisos e calçadas."
},
{
  id: 35,
  name: "Coluna Pronta 6m",
  category: "Ferragens",
  price: 64.90,
  oldPrice: 74.90,
  offPct: 13,
  freeShip: false,
  image: "./assets/coluna-pronta.jpg",
  featured: false,
  description: "Coluna armada pronta para pilares e estruturas verticais."
},
{
  id: 36,
  name: "Estribo 5.0 7x17",
  category: "Ferragens",
  price: 1.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/estribo.jpg",
  featured: false,
  description: "Estribo para reforço estrutural em vigas e colunas."
},
{
  id: 37,
  name: "Arame Galvanizado 18",
  category: "Ferragens",
  price: 22.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/arame-galvanizado.jpg",
  featured: false,
  description: "Arame galvanizado resistente à corrosão para cercamentos e fixações."
},
{
  id: 38,
  name: "Perfil Metálico U",
  category: "Ferragens",
  price: 44.90,
  oldPrice: 52.90,
  offPct: 15,
  freeShip: false,
  image: "./assets/perfil-u.jpg",
  featured: false,
  description: "Perfil metálico em U para estruturas, suportes e montagens diversas."
},
{
  id: 39,
  name: "Cantoneira de Aço 1m",
  category: "Ferragens",
  price: 27.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/cantoneira-aco.jpg",
  featured: false,
  description: "Cantoneira em aço para reforços e acabamentos estruturais."
},
{
  id: 40,
  name: "Barra Rosqueada 1/2",
  category: "Ferragens",
  price: 18.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/barra-rosqueada.jpg",
  featured: false,
  description: "Barra rosqueada para fixação e montagem de estruturas metálicas."
},

{
  id: 41,
  name: "Tomada 2P+T 10A Branco",
  category: "Materiais Elétricos",
  price: 10.90,
  oldPrice: 12.90,
  offPct: 15,
  freeShip: false,
  image: "./assets/tomada-10a.jpg",
  featured: false,
  description: "Tomada padrão brasileiro com acabamento moderno e instalação prática."
},
{
  id: 42,
  name: "Tomada 2P+T 20A Branco",
  category: "Materiais Elétricos",
  price: 12.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/tomada-20a.jpg",
  featured: false,
  description: "Tomada 20A indicada para equipamentos de maior potência."
},
{
  id: 43,
  name: "Disjuntor Monopolar 20A",
  category: "Materiais Elétricos",
  price: 14.90,
  oldPrice: 17.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/disjuntor-20a.jpg",
  featured: false,
  description: "Disjuntor monopolar para proteção de circuitos residenciais."
},
{
  id: 44,
  name: "Disjuntor Bipolar 40A",
  category: "Materiais Elétricos",
  price: 34.90,
  oldPrice: 39.90,
  offPct: 13,
  freeShip: false,
  image: "./assets/disjuntor-40a.jpg",
  featured: false,
  description: "Disjuntor bipolar para circuitos de maior carga e segurança elétrica."
},
{
  id: 45,
  name: "Fio Flexível 2,5mm 100m",
  category: "Materiais Elétricos",
  price: 179.90,
  oldPrice: 209.90,
  offPct: 14,
  freeShip: true,
  image: "./assets/fio-25mm.jpg",
  featured: false,
  description: "Fio flexível indicado para instalações elétricas residenciais e comerciais."
},
{
  id: 46,
  name: 'Cabo Flexível 6mm 50m',
  category: "Materiais Elétricos",
  price: 229.90,
  oldPrice: 259.90,
  offPct: 11,
  freeShip: true,
  image: "./assets/cabo-6mm.jpg",
  featured: false,
  description: "Cabo flexível para circuitos de maior potência com alta durabilidade."
},
{
  id: 47,
  name: "Quadro de Distribuição 12 Disjuntores",
  category: "Materiais Elétricos",
  price: 89.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/quadro-distribuicao.jpg",
  featured: false,
  description: "Quadro de distribuição prático e seguro para organização elétrica."
},
{
  id: 48,
  name: "Lâmpada LED 12W Branco Frio",
  category: "Materiais Elétricos",
  price: 9.90,
  oldPrice: 12.90,
  offPct: 23,
  freeShip: false,
  image: "./assets/lampada-led.jpg",
  featured: false,
  description: "Lâmpada LED econômica com ótima iluminação e longa vida útil."
},
{
  id: 49,
  name: "Plafon LED Sobrepor 18W",
  category: "Materiais Elétricos",
  price: 39.90,
  oldPrice: 49.90,
  offPct: 20,
  freeShip: false,
  image: "./assets/plafon-led.jpg",
  featured: false,
  description: "Plafon LED de sobrepor com design moderno para ambientes internos."
},
{
  id: 50,
  name: "Extensão Elétrica 5m",
  category: "Materiais Elétricos",
  price: 29.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/extensao-eletrica.jpg",
  featured: false,
  description: "Extensão prática para uso doméstico e profissional com ótimo alcance."
},

{
  id: 51,
  name: "Tubo PVC Soldável 20mm 3m",
  category: "Materiais Hidráulicos",
  price: 18.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/tubo-pvc-20.jpg",
  featured: false,
  description: "Tubo soldável para condução de água fria em instalações residenciais."
},
{
  id: 52,
  name: "Tubo PVC Esgoto 100mm 3m",
  category: "Materiais Hidráulicos",
  price: 49.90,
  oldPrice: 57.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/tubo-esgoto-100.jpg",
  featured: false,
  description: "Tubo para sistemas de esgoto com excelente resistência e vedação."
},
{
  id: 53,
  name: "Joelho Soldável 20mm 90°",
  category: "Materiais Hidráulicos",
  price: 1.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/joelho-20.jpg",
  featured: false,
  description: "Conexão hidráulica para mudanças de direção em redes de água fria."
},
{
  id: 54,
  name: "Registro de Gaveta 3/4",
  category: "Materiais Hidráulicos",
  price: 34.90,
  oldPrice: 41.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/registro-gaveta.jpg",
  featured: false,
  description: "Registro de gaveta para controle de fluxo com vedação eficiente."
},
{
  id: 55,
  name: "Caixa d'Água 500L",
  category: "Materiais Hidráulicos",
  price: 329.90,
  oldPrice: 389.90,
  offPct: 15,
  freeShip: true,
  image: "./assets/caixa-agua-500.jpg",
  featured: false,
  description: "Reservatório resistente para armazenamento de água em residências."
},
{
  id: 56,
  name: "Sifão Sanfonado Universal",
  category: "Materiais Hidráulicos",
  price: 12.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/sifao-sanfonado.jpg",
  featured: false,
  description: "Sifão versátil e fácil de instalar para pias e lavatórios."
},
{
  id: 57,
  name: "Torneira para Tanque PVC",
  category: "Materiais Hidráulicos",
  price: 8.90,
  oldPrice: 10.90,
  offPct: 18,
  freeShip: false,
  image: "./assets/torneira-tanque.jpg",
  featured: false,
  description: "Torneira prática e econômica para áreas de serviço e tanque."
},
{
  id: 58,
  name: "Válvula para Lavatório 7/8",
  category: "Materiais Hidráulicos",
  price: 14.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/valvula-lavatorio.jpg",
  featured: false,
  description: "Válvula de acabamento resistente para lavatórios e cubas."
},
{
  id: 59,
  name: "Caixa Sifonada 100x100x50",
  category: "Materiais Hidráulicos",
  price: 17.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/caixa-sifonada.jpg",
  featured: false,
  description: "Caixa sifonada para drenagem eficiente em banheiros e áreas molhadas."
},
{
  id: 60,
  name: "Engate Flexível 40cm",
  category: "Materiais Hidráulicos",
  price: 9.90,
  oldPrice: 11.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/engate-flexivel.jpg",
  featured: false,
  description: "Engate flexível para ligação de torneiras e caixas acopladas."
},

{
  id: 61,
  name: "Tinta Acrílica Fosca Gelo 18L",
  category: "Tintas e Acessórios",
  price: 194.90,
  oldPrice: 229.90,
  offPct: 15,
  freeShip: true,
  image: "./assets/tinta-gelo.jpg",
  featured: false,
  description: "Tinta acrílica fosca com ótima cobertura e acabamento uniforme."
},
{
  id: 62,
  name: "Tinta Acrílica Semi Brilho 18L",
  category: "Tintas e Acessórios",
  price: 214.90,
  oldPrice: 249.90,
  offPct: 14,
  freeShip: true,
  image: "./assets/tinta-semibrilho.jpg",
  featured: false,
  description: "Tinta acrílica semi brilho para ambientes internos com toque sofisticado."
},
{
  id: 63,
  name: "Selador Acrílico 18L",
  category: "Tintas e Acessórios",
  price: 119.90,
  oldPrice: 139.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/selador-acrilico.jpg",
  featured: false,
  description: "Selador para preparação de superfícies e melhor rendimento da pintura."
},
{
  id: 64,
  name: "Massa Corrida PVA 25kg",
  category: "Tintas e Acessórios",
  price: 74.90,
  oldPrice: 89.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/massa-corrida.jpg",
  featured: false,
  description: "Massa corrida para nivelamento e acabamento de paredes internas."
},
{
  id: 65,
  name: "Textura Acrílica Rústica 25kg",
  category: "Tintas e Acessórios",
  price: 99.90,
  oldPrice: 119.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/textura-rustica.jpg",
  featured: false,
  description: "Textura acrílica com efeito decorativo para áreas internas e externas."
},
{
  id: 66,
  name: "Rolo de Pintura Antirrespingo 23cm",
  category: "Tintas e Acessórios",
  price: 22.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/rolo-pintura.jpg",
  featured: false,
  description: "Rolo antirrespingo para aplicação uniforme de tinta em paredes lisas."
},
{
  id: 67,
  name: "Pincel Trincha 2 Polegadas",
  category: "Tintas e Acessórios",
  price: 12.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/trincha-2.jpg",
  featured: false,
  description: "Pincel trincha para recortes, acabamentos e pintura detalhada."
},
{
  id: 68,
  name: "Fita Crepe 48mm x 50m",
  category: "Tintas e Acessórios",
  price: 9.90,
  oldPrice: 11.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/fita-crepe.jpg",
  featured: false,
  description: "Fita crepe para proteção e acabamento limpo durante a pintura."
},
{
  id: 69,
  name: "Bandeja para Pintura Grande",
  category: "Tintas e Acessórios",
  price: 14.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/bandeja-pintura.jpg",
  featured: false,
  description: "Bandeja resistente para facilitar a aplicação de tinta com rolos."
},
{
  id: 70,
  name: "Verniz Brilhante Madeira 3,6L",
  category: "Tintas e Acessórios",
  price: 89.90,
  oldPrice: 104.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/verniz-madeira.jpg",
  featured: false,
  description: "Verniz para proteção e realce da madeira com acabamento brilhante."
},

{
  id: 71,
  name: "Parafusadeira Furadeira 12V",
  category: "Ferramentas",
  price: 219.90,
  oldPrice: 259.90,
  offPct: 15,
  freeShip: true,
  image: "./assets/parafusadeira-12v.jpg",
  featured: false,
  description: "Ferramenta prática para perfuração e fixação em serviços diversos."
},
{
  id: 72,
  name: "Martelete Rompedor 800W",
  category: "Ferramentas",
  price: 399.90,
  oldPrice: 459.90,
  offPct: 13,
  freeShip: true,
  image: "./assets/martelete.jpg",
  featured: false,
  description: "Martelete de alto desempenho para perfurações em concreto e alvenaria."
},
{
  id: 73,
  name: "Serra Mármore 1400W",
  category: "Ferramentas",
  price: 289.90,
  oldPrice: 339.90,
  offPct: 15,
  freeShip: true,
  image: "./assets/serra-marmore.jpg",
  featured: false,
  description: "Serra mármore robusta para cortes precisos em pisos e revestimentos."
},
{
  id: 74,
  name: "Esmerilhadeira Angular 4 1/2",
  category: "Ferramentas",
  price: 199.90,
  oldPrice: 239.90,
  offPct: 17,
  freeShip: true,
  image: "./assets/esmerilhadeira.jpg",
  featured: false,
  description: "Ferramenta versátil para corte, desbaste e acabamento em metais e alvenaria."
},
{
  id: 75,
  name: "Trena Emborrachada 5m",
  category: "Ferramentas",
  price: 24.90,
  oldPrice: 29.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/trena-5m.jpg",
  featured: false,
  description: "Trena resistente para medições precisas em obras e reformas."
},
{
  id: 76,
  name: "Martelo Cabo de Fibra 27mm",
  category: "Ferramentas",
  price: 34.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/martelo-fibra.jpg",
  featured: false,
  description: "Martelo com cabo reforçado para uso profissional e doméstico."
},
{
  id: 77,
  name: "Jogo de Chaves de Fenda 6 Peças",
  category: "Ferramentas",
  price: 39.90,
  oldPrice: 49.90,
  offPct: 20,
  freeShip: false,
  image: "./assets/chaves-fenda.jpg",
  featured: false,
  description: "Kit com chaves de fenda e philips para manutenção e montagem."
},
{
  id: 78,
  name: "Alicate Universal 8 Polegadas",
  category: "Ferramentas",
  price: 29.90,
  oldPrice: 36.90,
  offPct: 19,
  freeShip: false,
  image: "./assets/alicate-universal.jpg",
  featured: false,
  description: "Alicate resistente para cortes, torções e ajustes em geral."
},
{
  id: 79,
  name: "Nível Alumínio 60cm",
  category: "Ferramentas",
  price: 32.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/nivel-60cm.jpg",
  featured: false,
  description: "Nível em alumínio para alinhamentos e medições com precisão."
},
{
  id: 80,
  name: "Caixa de Ferramentas 17 Polegadas",
  category: "Ferramentas",
  price: 54.90,
  oldPrice: 64.90,
  offPct: 15,
  freeShip: false,
  image: "./assets/caixa-ferramentas.jpg",
  featured: false,
  description: "Caixa organizadora resistente para transporte de ferramentas e acessórios."
},

{
  id: 81,
  name: "Janela de Alumínio 100x120cm",
  category: "Portas e Janelas",
  price: 429.90,
  oldPrice: 489.90,
  offPct: 12,
  freeShip: true,
  image: "./assets/janela-aluminio.jpg",
  featured: false,
  description: "Janela de alumínio com excelente durabilidade e acabamento moderno."
},
{
  id: 82,
  name: "Janela Veneziana 100x150cm",
  category: "Portas e Janelas",
  price: 499.90,
  oldPrice: 569.90,
  offPct: 12,
  freeShip: true,
  image: "./assets/janela-veneziana.jpg",
  featured: false,
  description: "Janela veneziana prática e resistente para dormitórios e áreas internas."
},
{
  id: 83,
  name: "Porta Sanfonada PVC 80x210cm",
  category: "Portas e Janelas",
  price: 149.90,
  oldPrice: 179.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/porta-sanfonada.jpg",
  featured: false,
  description: "Porta sanfonada em PVC ideal para otimização de espaços."
},
{
  id: 84,
  name: "Porta de Alumínio Branco 80x210cm",
  category: "Portas e Janelas",
  price: 479.90,
  oldPrice: 539.90,
  offPct: 11,
  freeShip: true,
  image: "./assets/porta-aluminio.jpg",
  featured: false,
  description: "Porta de alumínio com alta resistência e ótimo acabamento externo."
},
{
  id: 85,
  name: "Basculante Alumínio 60x60cm",
  category: "Portas e Janelas",
  price: 189.90,
  oldPrice: 219.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/basculante.jpg",
  featured: false,
  description: "Basculante funcional para banheiros e áreas de ventilação."
},
{
  id: 86,
  name: "Fechadura Externa Inox",
  category: "Portas e Janelas",
  price: 69.90,
  oldPrice: 79.90,
  offPct: 13,
  freeShip: false,
  image: "./assets/fechadura-externa.jpg",
  featured: false,
  description: "Fechadura externa com acabamento inox e alta durabilidade."
},
{
  id: 87,
  name: "Fechadura Interna Cromada",
  category: "Portas e Janelas",
  price: 54.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/fechadura-interna.jpg",
  featured: false,
  description: "Fechadura interna com design clean para ambientes residenciais."
},
{
  id: 88,
  name: "Dobradiça de Aço 3 Polegadas",
  category: "Portas e Janelas",
  price: 8.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/dobradica-aco.jpg",
  featured: false,
  description: "Dobradiça em aço para portas e janelas com ótima resistência."
},
{
  id: 89,
  name: "Kit Portal e Alizar 80cm",
  category: "Portas e Janelas",
  price: 139.90,
  oldPrice: 159.90,
  offPct: 13,
  freeShip: false,
  image: "./assets/kit-portal.jpg",
  featured: false,
  description: "Kit portal com alizar para acabamento elegante em portas internas."
},
{
  id: 90,
  name: "Janela Maxim-Ar 60x80cm",
  category: "Portas e Janelas",
  price: 239.90,
  oldPrice: 279.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/janela-maxim-ar.jpg",
  featured: false,
  description: "Janela maxim-ar com abertura prática e ventilação eficiente."
},

{
  id: 91,
  name: "Lavatório com Coluna Branco",
  category: "Banheiros e Acessórios",
  price: 189.90,
  oldPrice: 219.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/lavatorio-coluna.jpg",
  featured: false,
  description: "Lavatório com coluna de design clássico para banheiros residenciais."
},
{
  id: 92,
  name: "Cuba de Apoio Oval Branca",
  category: "Banheiros e Acessórios",
  price: 139.90,
  oldPrice: 169.90,
  offPct: 18,
  freeShip: false,
  image: "./assets/cuba-oval.jpg",
  featured: false,
  description: "Cuba de apoio com acabamento elegante para bancadas modernas."
},
{
  id: 93,
  name: "Assento Sanitário Almofadado",
  category: "Banheiros e Acessórios",
  price: 49.90,
  oldPrice: 59.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/assento-almofadado.jpg",
  featured: false,
  description: "Assento sanitário confortável e resistente para uso diário."
},
{
  id: 94,
  name: "Chuveiro Elétrico 5500W",
  category: "Banheiros e Acessórios",
  price: 79.90,
  oldPrice: 94.90,
  offPct: 16,
  freeShip: false,
  image: "./assets/chuveiro-eletrico.jpg",
  featured: false,
  description: "Chuveiro elétrico com bom desempenho e aquecimento eficiente."
},
{
  id: 95,
  name: "Ducha Higiênica Completa",
  category: "Banheiros e Acessórios",
  price: 89.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/ducha-higienica.jpg",
  featured: false,
  description: "Ducha higiênica com gatilho metálico e instalação prática."
},
{
  id: 96,
  name: "Kit Acessórios para Banheiro 5 Peças",
  category: "Banheiros e Acessórios",
  price: 99.90,
  oldPrice: 119.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/kit-banheiro.jpg",
  featured: false,
  description: "Kit completo com acessórios funcionais para organização do banheiro."
},
{
  id: 97,
  name: "Espelho para Banheiro 60x80cm",
  category: "Banheiros e Acessórios",
  price: 119.90,
  oldPrice: 139.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/espelho-banheiro.jpg",
  featured: false,
  description: "Espelho com excelente acabamento para lavabos e banheiros."
},
{
  id: 98,
  name: "Gabinete para Banheiro 60cm",
  category: "Banheiros e Acessórios",
  price: 299.90,
  oldPrice: 349.90,
  offPct: 14,
  freeShip: true,
  image: "./assets/gabinete-banheiro.jpg",
  featured: false,
  description: "Gabinete compacto para organização com design moderno."
},
{
  id: 99,
  name: "Ralo Inox Quadrado 10x10",
  category: "Banheiros e Acessórios",
  price: 24.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/ralo-inox.jpg",
  featured: false,
  description: "Ralo inox com acabamento elegante e ótima vazão."
},
{
  id: 100,
  name: "Box para Banheiro 1,20m",
  category: "Banheiros e Acessórios",
  price: 699.90,
  oldPrice: 789.90,
  offPct: 11,
  freeShip: true,
  image: "./assets/box-banheiro.jpg",
  featured: false,
  description: "Box para banheiro com vidro resistente e acabamento sofisticado."
},

{
  id: 101,
  name: "Brita 1 20kg",
  category: "Materiais de Construção",
  price: 11.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/brita1.jpg",
  featured: false,
  description: "Brita ideal para concretagem, drenagem e obras em geral."
},
{
  id: 102,
  name: "Brita 0 20kg",
  category: "Materiais de Construção",
  price: 12.90,
  oldPrice: 14.90,
  offPct: 13,
  freeShip: false,
  image: "./assets/brita0.jpg",
  featured: false,
  description: "Brita fina para concretos, contrapiso e aplicações específicas."
},
{
  id: 103,
  name: "Pedra Rachão 20kg",
  category: "Materiais de Construção",
  price: 13.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/rachao.jpg",
  featured: false,
  description: "Pedra rachão para fundações, drenagens e contenções."
},
{
  id: 104,
  name: "Saibro 20kg",
  category: "Materiais de Construção",
  price: 6.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/saibro.jpg",
  featured: false,
  description: "Saibro para regularização de solo e preparação de base."
},
{
  id: 105,
  name: "Cal Hidratada 20kg",
  category: "Materiais de Construção",
  price: 18.90,
  oldPrice: 22.90,
  offPct: 17,
  freeShip: false,
  image: "./assets/cal-hidratada.jpg",
  featured: false,
  description: "Cal hidratada para preparo de argamassas e pinturas à base mineral."
},
{
  id: 106,
  name: "Gesso em Pó 1kg",
  category: "Materiais de Construção",
  price: 4.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/gesso-po.jpg",
  featured: false,
  description: "Gesso em pó para pequenos reparos e acabamentos internos."
},
{
  id: 107,
  name: "Pedrisco 20kg",
  category: "Materiais de Construção",
  price: 10.90,
  oldPrice: null,
  offPct: null,
  freeShip: false,
  image: "./assets/pedrisco.jpg",
  featured: false,
  description: "Pedrisco para concretos leves, drenagem e acabamento de pisos."
},
{
  id: 108,
  name: "Massa Asfáltica Fria 25kg",
  category: "Materiais de Construção",
  price: 54.90,
  oldPrice: 64.90,
  offPct: 15,
  freeShip: false,
  image: "./assets/massa-asfaltica.jpg",
  featured: false,
  description: "Massa asfáltica fria para reparos rápidos em pavimentos e calçadas."
},
{
  id: 109,
  name: "Impermeabilizante 18L",
  category: "Materiais de Construção",
  price: 149.90,
  oldPrice: 179.90,
  offPct: 17,
  freeShip: true,
  image: "./assets/impermeabilizante.jpg",
  featured: false,
  description: "Impermeabilizante para lajes, paredes e áreas sujeitas à umidade."
},
{
  id: 110,
  name: "Manta Asfáltica 10m",
  category: "Materiais de Construção",
  price: 119.90,
  oldPrice: 139.90,
  offPct: 14,
  freeShip: false,
  image: "./assets/manta-asfaltica.jpg",
  featured: false,
  description: "Manta asfáltica para impermeabilização com alta proteção e durabilidade."
}
];

const BRANDS = [
  "Votorantim",
  "Tigre",
  "Suvinil",
  "Tramontina",
  "Deca",
  "Gerdau",
  "Portobello",
  "Atlas"
];

let activeCategory = "Todos";
let searchTerm = "";
let sortBy = "default";
let currentModalProduct = null;

const STORAGE_KEY = "cb_cart_v7";
const CUSTOMER_NAME_KEY = "cb_customer_name";
const CUSTOMER_PHONE_KEY = "cb_customer_phone";
const CUSTOMER_ADDRESS_KEY = "cb_customer_address";
const DELIVERY_TYPE_KEY = "cb_delivery_type";

const cart = new Map();

function brl(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function normalizePhoneBR(value) {
  const digits = onlyDigits(value);
  if (!digits) return "";
  if (digits.startsWith("55")) return `+${digits}`;
  return `+55${digits}`;
}

function priceToCents(value) {
  return Math.round(Number(value || 0) * 100);
}

function generateOrderNSU() {
  const now = Date.now();
  const rand = Math.floor(Math.random() * 100000);
  return `${PAYMENT_CONFIG.orderPrefix}-${now}-${rand}`;
}

function splitStreetAndNumber(fullAddress) {
  const value = String(fullAddress || "").trim();

  if (!value) {
    return { street: "", number: "" };
  }

  const match = value.match(/^(.*?)(?:,\s*|\s+)(\d+[A-Za-z0-9\-\/]*)$/);

  if (match) {
    return {
      street: match[1].trim(),
      number: match[2].trim()
    };
  }

  return {
    street: value,
    number: "S/N"
  };
}

function waLink(message) {
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;
}

function loadCart() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const data = JSON.parse(raw);
    Object.entries(data).forEach(([id, qty]) => {
      const parsedId = Number(id);
      const parsedQty = Number(qty);

      if (!Number.isNaN(parsedId) && !Number.isNaN(parsedQty) && parsedQty > 0) {
        cart.set(parsedId, parsedQty);
      }
    });
  } catch (error) {
    console.error("Erro ao carregar carrinho:", error);
  }
}

function saveCart() {
  const data = {};
  cart.forEach((qty, id) => {
    data[id] = qty;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function cartCount() {
  let total = 0;
  cart.forEach((qty) => {
    total += qty;
  });
  return total;
}

function cartSubtotal() {
  let total = 0;

  cart.forEach((qty, id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (product) total += product.price * qty;
  });

  return total;
}

function getCartItems() {
  const items = [];

  cart.forEach((qty, id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (product) items.push({ product, qty });
  });

  return items;
}

function addToCart(id, delta = 1) {
  const current = cart.get(id) || 0;
  const next = Math.max(0, current + delta);

  if (next === 0) {
    cart.delete(id);
  } else {
    cart.set(id, next);
  }

  saveCart();
  renderCart();
}

function setCartQuantity(id, quantity) {
  const newQty = Math.max(1, quantity);
  cart.set(id, newQty);
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart.delete(id);
  saveCart();
  renderCart();
}

function openDrawer() {
  const drawer = document.getElementById("drawer");
  if (!drawer) return;

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  const drawer = document.getElementById("drawer");
  if (!drawer) return;

  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");

  const modal = document.getElementById("productModal");
  if (!modal || !modal.classList.contains("is-open")) {
    document.body.style.overflow = "";
  }
}

function getFilteredProducts() {
  let result = [...PRODUCTS];

  if (activeCategory !== "Todos") {
    result = result.filter((product) => product.category === activeCategory);
  }

  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase();
    result = result.filter((product) =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  }

  switch (sortBy) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return result;
}

function getOfferProducts() {
  return getFilteredProducts().filter(
    (product) => typeof product.offPct === "number" && product.offPct > 0
  );
}

function getFeaturedProducts() {
  return getFilteredProducts().filter((product) => product.featured);
}

function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  grid.innerHTML = "";

  CATEGORIES.forEach((category) => {
    const card = document.createElement("button");
    card.className = "catCard" + (activeCategory === category.name ? " is-active" : "");
    card.type = "button";

    card.innerHTML = `
      <div class="catIcon">${category.icon}</div>
      <div class="catTitle">${category.name}</div>
    `;

    card.addEventListener("click", () => {
      activeCategory = category.name;
      renderAllSections();
      document.getElementById("ofertas")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    grid.appendChild(card);
  });
}

function productCard(product) {
  const hasOff = typeof product.offPct === "number" && product.offPct > 0;
  const hasOld = typeof product.oldPrice === "number" && product.oldPrice > product.price;

  const card = document.createElement("div");
  card.className = "pCard";

  card.innerHTML = `
    <div class="pImg" style="background-image:url('${product.image || "./assets/product-placeholder.jpg"}')">
      ${hasOff ? `<div class="badgeOff">${product.offPct}% OFF</div>` : ""}
    </div>

    <div class="pBody">
      <div class="pCategory">${product.category}</div>
      <p class="pName">${product.name}</p>

      <div class="pPrices">
        ${hasOld ? `<div class="oldPrice">${brl(product.oldPrice)}</div>` : `<div class="oldPrice"></div>`}
        <div class="newPrice">${brl(product.price)}</div>
      </div>

      ${
        product.freeShip
          ? `
          <div class="shipFree">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <circle cx="7" cy="19" r="1.5" fill="none" stroke="currentColor" stroke-width="2"/>
              <circle cx="17" cy="19" r="1.5" fill="none" stroke="currentColor" stroke-width="2"/>
            </svg>
            Frete Grátis
          </div>
        `
          : ""
      }

      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:auto;">
        <button class="btn btn--outline productDetailsBtn" type="button">Ver detalhes</button>
        <button class="addBtn" type="button">
          <span aria-hidden="true">🛒</span>
          Adicionar
        </button>
      </div>
    </div>
  `;

  const addBtn = card.querySelector(".addBtn");
  const detailsBtn = card.querySelector(".productDetailsBtn");

  addBtn.addEventListener("click", () => {
    addToCart(product.id, 1);
    openDrawer();
  });

  detailsBtn.addEventListener("click", () => {
    openProductModal(product.id);
  });

  return card;
}

function renderProductsInGrid(gridId, products, emptyMessage) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = "";

  if (!products.length) {
    grid.innerHTML = `<div class="emptyState">${emptyMessage}</div>`;
    return;
  }

  products.forEach((product) => {
    grid.appendChild(productCard(product));
  });
}

function renderOffers() {
  renderProductsInGrid(
    "offersGrid",
    getOfferProducts(),
    "Nenhuma oferta encontrada para esse filtro."
  );
}

function renderFeatured() {
  renderProductsInGrid(
    "featuredGrid",
    getFeaturedProducts(),
    "Nenhum produto encontrado para esse filtro."
  );
}

function renderBrands() {
  const row = document.getElementById("brandsRow");
  if (!row) return;

  row.innerHTML = "";

  BRANDS.forEach((brand) => {
    const item = document.createElement("div");
    item.className = "brandPill";
    item.textContent = brand;
    row.appendChild(item);
  });
}

function renderResultsCount() {
  const count = getFilteredProducts().length;
  const el = document.getElementById("resultsCount");
  if (el) el.textContent = String(count);
}

function renderCart() {
  const cartCountEl = document.getElementById("cartCount");
  const floatingCountEl = document.getElementById("floatingCartCount");
  const subtotalEl = document.getElementById("cartSubtotal");
  const list = document.getElementById("cartList");
  const empty = document.getElementById("cartEmpty");

  if (cartCountEl) cartCountEl.textContent = String(cartCount());
  if (floatingCountEl) floatingCountEl.textContent = String(cartCount());
  if (subtotalEl) subtotalEl.textContent = brl(cartSubtotal());
  if (!list || !empty) return;

  list.innerHTML = "";

  const items = getCartItems();
  empty.style.display = items.length ? "none" : "block";

  items.forEach(({ product, qty }) => {
    const item = document.createElement("div");
    item.className = "cartItem";

    item.innerHTML = `
      <div class="cartItem__info">
        <strong>${product.name}</strong>
        <span>${brl(product.price)} cada</span>
        <small class="cartItem__total">Total do item: ${brl(product.price * qty)}</small>
        <button type="button" class="removeItemBtn" aria-label="Remover produto">Remover</button>
      </div>

      <div class="qty">
        <button type="button" class="qtyBtn" aria-label="Diminuir">-</button>
        <input
          type="number"
          class="qtyInput"
          min="1"
          value="${qty}"
          aria-label="Quantidade"
        />
        <button type="button" class="qtyBtn" aria-label="Aumentar">+</button>
      </div>
    `;

    const qtyButtons = item.querySelectorAll(".qtyBtn");
    const minusBtn = qtyButtons[0];
    const plusBtn = qtyButtons[1];
    const qtyInput = item.querySelector(".qtyInput");
    const removeBtn = item.querySelector(".removeItemBtn");

    minusBtn.addEventListener("click", () => {
      addToCart(product.id, -1);
    });

    plusBtn.addEventListener("click", () => {
      addToCart(product.id, 1);
    });

    function applyManualQuantity() {
      let newQty = parseInt(qtyInput.value, 10);

      if (Number.isNaN(newQty) || newQty < 1) {
        newQty = 1;
      }

      setCartQuantity(product.id, newQty);
    }

    qtyInput.addEventListener("blur", applyManualQuantity);

    qtyInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        applyManualQuantity();
      }
    });

    removeBtn.addEventListener("click", () => {
      removeFromCart(product.id);
    });

    list.appendChild(item);
  });
}

function renderAllSections() {
  renderCategories();
  renderOffers();
  renderFeatured();
  renderResultsCount();
}

function setupSearch() {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("searchInput");
  if (!form || !input) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    searchTerm = input.value.trim();
    renderAllSections();
    document.getElementById("ofertas")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  input.addEventListener("input", () => {
    searchTerm = input.value.trim();
    renderAllSections();
  });
}

function setupSort() {
  const select = document.getElementById("sortSelect");
  if (!select) return;

  select.addEventListener("change", () => {
    sortBy = select.value;
    renderAllSections();
  });
}

function getSelectedDeliveryType() {
  const selected = document.querySelector('input[name="deliveryType"]:checked');
  return selected ? selected.value : "Entrega";
}

function updateDeliveryUI() {
  const addressField = document.getElementById("addressField");
  const addressInput = document.getElementById("customerAddress");
  const deliveryType = getSelectedDeliveryType();

  if (!addressField || !addressInput) return;

  if (deliveryType === "Retirada") {
    addressField.style.display = "none";
    addressInput.removeAttribute("required");
  } else {
    addressField.style.display = "flex";
    addressInput.setAttribute("required", "required");
  }
}

function buildCartWhatsAppMessage() {
  const nameInput = document.getElementById("customerName");
  const phoneInput = document.getElementById("customerPhone");
  const addressInput = document.getElementById("customerAddress");

  const customerName = nameInput?.value.trim() || localStorage.getItem(CUSTOMER_NAME_KEY) || "";
  const customerPhone = phoneInput?.value.trim() || localStorage.getItem(CUSTOMER_PHONE_KEY) || "";
  const customerAddress = addressInput?.value.trim() || localStorage.getItem(CUSTOMER_ADDRESS_KEY) || "";
  const deliveryType = getSelectedDeliveryType();

  if (!cartCount()) {
    alert("Seu carrinho está vazio.");
    return null;
  }

  if (!customerName) {
    alert("Por favor, informe seu nome.");
    nameInput?.focus();
    return null;
  }

  if (deliveryType === "Entrega" && !customerAddress) {
    alert("Por favor, informe o endereço de entrega.");
    addressInput?.focus();
    return null;
  }

  const lines = getCartItems().map(({ product, qty }) =>
    `• ${qty}x ${product.name} — ${brl(product.price * qty)}`
  );

  return `Olá! Vim pelo site da ${STORE.name}.

Nome: ${customerName}
Telefone: ${customerPhone || "Não informado"}
Recebimento: ${deliveryType}
${deliveryType === "Entrega" ? `Endereço: ${customerAddress}\n` : ""}Itens do pedido:
${lines.join("\n")}

Subtotal: ${brl(cartSubtotal())}`;
}

function openCheckoutWhatsAppFromCart() {
  const message = buildCartWhatsAppMessage();
  if (!message) return;

  window.open(waLink(message), "_blank", "noreferrer");
}

function setupWhatsApp() {
  const waFloat = document.getElementById("waFloat");

  if (waFloat) {
    const defaultMessage = `Olá! Vim pelo site da ${STORE.name}. Quero um orçamento.`;
    waFloat.href = waLink(defaultMessage);
  }

  const nameInput = document.getElementById("customerName");
  const phoneInput = document.getElementById("customerPhone");
  const addressInput = document.getElementById("customerAddress");
  const deliveryTypeInputs = document.querySelectorAll('input[name="deliveryType"]');

  if (nameInput) {
    const savedName = localStorage.getItem(CUSTOMER_NAME_KEY);
    if (savedName) nameInput.value = savedName;

    nameInput.addEventListener("input", () => {
      localStorage.setItem(CUSTOMER_NAME_KEY, nameInput.value.trim());
    });
  }

  if (phoneInput) {
    const savedPhone = localStorage.getItem(CUSTOMER_PHONE_KEY);
    if (savedPhone) phoneInput.value = savedPhone;

    phoneInput.addEventListener("input", () => {
      localStorage.setItem(CUSTOMER_PHONE_KEY, phoneInput.value.trim());
    });
  }

  if (addressInput) {
    const savedAddress = localStorage.getItem(CUSTOMER_ADDRESS_KEY);
    if (savedAddress) addressInput.value = savedAddress;

    addressInput.addEventListener("input", () => {
      localStorage.setItem(CUSTOMER_ADDRESS_KEY, addressInput.value.trim());
    });
  }

  const savedDeliveryType = localStorage.getItem(DELIVERY_TYPE_KEY) || "Entrega";
  deliveryTypeInputs.forEach((input) => {
    input.checked = input.value === savedDeliveryType;

    input.addEventListener("change", () => {
      localStorage.setItem(DELIVERY_TYPE_KEY, input.value);
      updateDeliveryUI();
    });
  });

  updateDeliveryUI();
}

function setupDrawer() {
  const openBtn = document.getElementById("openCart");
  const closeBtn = document.getElementById("closeCart");
  const backdrop = document.getElementById("drawerBackdrop");
  const floatingCart = document.getElementById("floatingCart");
  const continueShoppingBtn = document.getElementById("continueShoppingBtn");
  const goCheckoutBtn = document.getElementById("goCheckoutBtn");

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);
  if (floatingCart) floatingCart.addEventListener("click", openDrawer);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener("click", closeDrawer);

  if (goCheckoutBtn) {
    goCheckoutBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("customerName");
      const phoneInput = document.getElementById("customerPhone");
      const addressInput = document.getElementById("customerAddress");
      const deliveryType = getSelectedDeliveryType();

      if (!cartCount()) {
        alert("Seu carrinho está vazio.");
        return;
      }

      if (nameInput?.value.trim()) {
        localStorage.setItem(CUSTOMER_NAME_KEY, nameInput.value.trim());
      }

      if (phoneInput?.value.trim()) {
        localStorage.setItem(CUSTOMER_PHONE_KEY, phoneInput.value.trim());
      }

      if (addressInput?.value.trim()) {
        localStorage.setItem(CUSTOMER_ADDRESS_KEY, addressInput.value.trim());
      }

      localStorage.setItem(DELIVERY_TYPE_KEY, deliveryType);
      window.location.href = "./checkout.html";
    });
  }
}

function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  const modal = document.getElementById("productModal");

  if (!product || !modal) return;

  currentModalProduct = product;

  document.getElementById("modalProductName").textContent = product.name;
  document.getElementById("modalProductCategory").textContent = product.category;
  document.getElementById("modalProductPrice").textContent = brl(product.price);
  document.getElementById("modalProductDescription").textContent =
    product.description || "Produto sem descrição.";
  document.getElementById("modalQtyInput").value = "1";

  const oldPriceEl = document.getElementById("modalProductOldPrice");
  if (typeof product.oldPrice === "number" && product.oldPrice > product.price) {
    oldPriceEl.textContent = brl(product.oldPrice);
  } else {
    oldPriceEl.textContent = "";
  }

  const imageEl = document.getElementById("modalProductImage");
  imageEl.style.backgroundImage = `url('${product.image || "./assets/product-placeholder.jpg"}')`;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  currentModalProduct = null;

  const drawer = document.getElementById("drawer");
  if (!drawer || !drawer.classList.contains("is-open")) {
    document.body.style.overflow = "";
  }
}

function updateModalTotal() {
  if (!currentModalProduct) return;

  const qtyInput = document.getElementById("modalQtyInput");
  const descriptionEl = document.getElementById("modalProductDescription");
  if (!qtyInput || !descriptionEl) return;

  let qty = parseInt(qtyInput.value, 10);
  if (Number.isNaN(qty) || qty < 1) qty = 1;

  const total = currentModalProduct.price * qty;

  descriptionEl.textContent =
    `${currentModalProduct.description || "Produto sem descrição."} Quantidade selecionada: ${qty}. Total: ${brl(total)}.`;
}

function setupProductModal() {
  const modal = document.getElementById("productModal");
  const closeBtn = document.getElementById("closeProductModal");
  const backdrop = document.getElementById("productModalBackdrop");
  const minusBtn = document.getElementById("modalQtyMinus");
  const plusBtn = document.getElementById("modalQtyPlus");
  const qtyInput = document.getElementById("modalQtyInput");
  const addBtn = document.getElementById("modalAddToCart");
  const buyNowBtn = document.getElementById("modalBuyNow");

  if (!modal || !qtyInput) return;

  if (closeBtn) closeBtn.addEventListener("click", closeProductModal);
  if (backdrop) backdrop.addEventListener("click", closeProductModal);

  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      let value = parseInt(qtyInput.value, 10) || 1;
      value = Math.max(1, value - 1);
      qtyInput.value = value;
      updateModalTotal();
    });
  }

  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      let value = parseInt(qtyInput.value, 10) || 1;
      value += 1;
      qtyInput.value = value;
      updateModalTotal();
    });
  }

  function normalizeModalQty() {
    let value = parseInt(qtyInput.value, 10);
    if (Number.isNaN(value) || value < 1) value = 1;
    qtyInput.value = value;
    updateModalTotal();
    return value;
  }

  qtyInput.addEventListener("blur", normalizeModalQty);

  qtyInput.addEventListener("input", () => {
    if (qtyInput.value.trim() === "") return;
    updateModalTotal();
  });

  qtyInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      normalizeModalQty();
    }
  });

  if (addBtn) {
    addBtn.addEventListener("click", () => {
      if (!currentModalProduct) return;

      const quantity = normalizeModalQty();
      addToCart(currentModalProduct.id, quantity);
      closeProductModal();
      openDrawer();
    });
  }

  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      if (!currentModalProduct) return;

      const quantity = normalizeModalQty();
      addToCart(currentModalProduct.id, quantity);
      closeProductModal();
      window.location.href = "./checkout.html";
    });
  }
}

function getCatalogFilteredProducts() {
  let products = [...PRODUCTS];

  const selectedCategory = document.querySelector('input[name="categoryFilter"]:checked')?.value;
  const selectedSort = document.getElementById("catalogSort")?.value || "default";

  if (selectedCategory && selectedCategory !== "Todos") {
    products = products.filter((product) => product.category === selectedCategory);
  }

  switch (selectedSort) {
    case "price-asc":
      products.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      products.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      products.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      products.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }

  return products;
}

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  const count = document.getElementById("catalogCount");

  if (!grid) return;

  const products = getCatalogFilteredProducts();

  grid.innerHTML = "";

  if (count) {
    count.textContent = String(products.length);
  }

  if (!products.length) {
    grid.innerHTML = `<div class="emptyState">Nenhum produto encontrado para esse filtro.</div>`;
    return;
  }

  products.forEach((product) => {
    grid.appendChild(productCard(product));
  });
}

function setupCatalog() {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  const categoryInputs = document.querySelectorAll('input[name="categoryFilter"]');
  const sortSelect = document.getElementById("catalogSort");

  categoryInputs.forEach((input) => {
    input.addEventListener("change", renderCatalog);
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", renderCatalog);
  }

  renderCatalog();
}

function init() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  loadCart();
  renderAllSections();
  renderBrands();
  renderCart();
  setupSearch();
  setupSort();
  setupWhatsApp();
  setupDrawer();
  setupProductModal();
  setupCatalog();
 
  if (localStorage.getItem("openCart") === "true") {
  openDrawer();
  localStorage.removeItem("openCart");
  }
}

init();
