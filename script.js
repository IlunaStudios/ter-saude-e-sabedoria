// ============================================
// JAVASCRIPT - FUNCIONALIDADES DO SITE
// Arquivo separado para organização
// ============================================

// Substitua YOUR_SHEET_ID pelo ID da planilha que você publicar no Google Sheets.
// O site carrega dados de múltiplas abas de plataforma (Amazon, Mercado Livre, etc)
const SHEET_ID = "1_q-q_pin_Uj2RSEa2FIKCvsuKoF80WLcMHtoyKn4qVA";

// Plataformas com seus IDs (gid) para evitar problemas com emojis
const PLATFORMS = {
  amazon: { name: "Amazon", gid: 5 },
  mercadolivre: { name: "Merc.Livre", gid: 6 },
  shopee: { name: "Shopee", gid: 7 },
  aliexpress: { name: "AliExpress", gid: 8 },
  hotmart: { name: "Hotmart", gid: 9 },
  eduzz: { name: "Eduzz", gid: 10 },
  kiwify: { name: "Kiwify", gid: 11 },
  monetizze: { name: "Monetizze", gid: 12 },
  kdp: { name: "KDP", gid: 13 },
  google: { name: "Google Play", gid: 14 },
  kobo: { name: "Kobo", gid: 15 },
};

function buildSheetUrl(platformKey) {
  const plat = PLATFORMS[platformKey];
  if (!plat) return null;
  // Tentar método de publicação como página web
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/pub?output=csv&gid=${plat.gid}`;
}

const PRODUCT_GRID = document.getElementById("grade-principal");
const PRODUCT_LOADING = document.getElementById("produtos-carregando");
const CATEGORY_MENU = document.getElementById("categoria-menu");

// Estado dos filtros atuais
let currentCategoryFilter = "todos";
let currentPlatformFilter = "todos";
let currentDigitalFilter = "todos";

const CATEGORY_LABELS = {
  todos: "🏪 Todos",
  saude: "💊 Saúde",
  beleza: "💄 Beleza",
  fitness: "⚽ Fitness",
  casa: "🏠 Casa",
  alimentos: "🥗 Alimentos",
  livros: "📚 Livros",
  outros: "🧩 Outros",
};

const PLATFORM_INFO = {
  amazon: { label: "Compra via Amazon", className: "amazon" },
  shopee: { label: "Compra via Shopee", className: "shopee" },
  mercadolivre: {
    label: "Compra via Mercado Livre",
    className: "mercadolivre",
  },
  aliexpress: { label: "Compra via AliExpress", className: "aliexpress" },
  hotmart: { label: "Compra via Hotmart", className: "hotmart" },
  kiwify: { label: "Compra via Kiwify", className: "kiwify" },
  google: { label: "Compra via Google Play", className: "google" },
  kdp: { label: "Compra via Amazon KDP", className: "amazon" },
  kobo: { label: "Compra via Kobo", className: "kobo" },
  eduzz: { label: "Compra via Eduzz", className: "eduzz" },
  monetizze: { label: "Compra via Monetizze", className: "monetizze" },
};

window.addEventListener("DOMContentLoaded", () => {
  loadProductsFromSheet();
});

async function loadProductsFromSheet() {
  console.log("Iniciando carregamento de produtos...");
  try {
    const products = await fetchSheetData();
    console.log("Produtos carregados:", products);
    const items = products.length ? products : fallbackProducts();
    console.log("Itens finais para renderizar:", items);
    renderProducts(items);
    renderCategoryMenu(items);
  } catch (error) {
    console.warn("Não foi possível carregar a planilha:", error);
    const items = fallbackProducts();
    renderProducts(items);
    renderCategoryMenu(items);
  }
}

async function fetchSheetData() {
  if (window.location.protocol === "file:") {
    throw new Error(
      "Use um servidor HTTP para carregar a planilha ou exporte para um arquivo JSON/CSV disponível via URL.",
    );
  }

  const allProducts = [];

  // Carrega de cada plataforma
  for (const platformKey of Object.keys(PLATFORMS)) {
    try {
      const url = buildSheetUrl(platformKey);
      if (!url) continue;

      const response = await fetch(url);
      if (!response.ok) continue;

      const text = await response.text();
      const platformProducts = parseSheetCsv(text, platformKey);
      allProducts.push(...platformProducts);
    } catch (err) {
      console.log(`Aviso: não conseguiu carregar ${platformKey}`);
    }
  }

  // Se não conseguiu carregar nenhum produto, retorna produtos de exemplo
  if (allProducts.length === 0) {
    console.log("Nenhum produto carregado da planilha, usando exemplos");
    const examples = getExampleProducts();
    console.log("Produtos de exemplo:", examples);
    return examples;
  }

  return allProducts;
}

function getExampleProducts() {
  return [
    {
      id: "AMZ-0001",
      name: "Semente de Chia Natural Embalagem Premium Zip Lock - da VIDA (1Kg)",
      category: "saude",
      categoryLabel: "Saúde",
      price: "",
      priceOld: "",
      bestPlatform: "amazon",
      link: "https://amzn.to/3OJvixx",
      platformLabel: "Compra via Amazon",
      status: "ativo",
      badge: "",
      image:
        "https://via.placeholder.com/250x250/2d5f4c/ffffff?text=Semente+de+Chia",
      soldText: "",
      shippingTag: "✅ Frete Grátis",
    },
    {
      id: "ML-0001",
      name: "Integralmedica Creatina Carbo Fuel 300G – Energia e Força",
      category: "saude",
      categoryLabel: "Saúde",
      price: "",
      priceOld: "",
      bestPlatform: "mercadolivre",
      link: "https://meli.la/2KUDXm9",
      platformLabel: "Compra via Mercado Livre",
      status: "ativo",
      badge: "",
      image:
        "https://via.placeholder.com/250x250/2d5f4c/ffffff?text=Creatina+Carbo+Fuel",
      soldText: "",
      shippingTag: "✅ Frete Grátis",
    },
  ];
}

function parseSheetCsv(csvText, platformKey) {
  const rows = csvText
    .trim()
    .split(/\r?\n/)
    .map((line) => parseCsvLine(line));

  rows.forEach((row, rowIndex) => {
    const normalizedText = row.map((cell) =>
      String(cell || "")
        .trim()
        .toLowerCase(),
    );

    // Procura por headers: pode ser "produto base id" ou "produto"
    const hasProductCol = normalizedText.some(
      (cell) => cell.includes("produto") || cell.includes("id"),
    );
    const hasLinkCol = normalizedText.some(
      (cell) => cell.includes("link") && !cell.includes("status"),
    );
    const isHeaderRow = hasProductCol && hasLinkCol && !headerRowFound;

    if (isHeaderRow) {
      headers = row.map((cell) => String(cell || "").trim());
      headerRowFound = true;
      return;
    }

    if (!headerRowFound || !headers.length) {
      return;
    }

    // Pula linhas vazias
    if (!row.some((cell) => String(cell || "").trim())) {
      return;
    }

    const item = {};
    headers.forEach((header, index) => {
      if (header) {
        item[header] = String(row[index] || "").trim();
      }
    });

    const normalized = normalizeProductRow(item, platformKey);
    if (normalized) {
      products.push(normalized);
    }
  });

  return dedupeProducts(products);
}

function dedupeProducts(products) {
  const deduped = new Map();
  products.forEach((product) => {
    const key = String(product.id || product.name || product.link || "")
      .trim()
      .toLowerCase();
    if (!key) {
      return;
    }

    const existing = deduped.get(key);
    if (!existing) {
      deduped.set(key, product);
      return;
    }

    if (existing.status !== "ativo" && product.status === "ativo") {
      deduped.set(key, product);
      return;
    }

    if (existing.status === "ativo" && product.status !== "ativo") {
      return;
    }

    // keep the first candidate when both have same status
  });
  return Array.from(deduped.values());
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (quoted && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
}

function normalizeProductRow(row, platformKey) {
  const normalizeKey = (value) =>
    String(value || "")
      .toLowerCase()
      .replace(/[\s\.\-_\/]+/g, "")
      .replace(/ç/g, "c");

  const normalizedRow = {};
  Object.keys(row).forEach((key) => {
    if (!key) return;
    normalizedRow[String(key).trim().toLowerCase()] = String(
      row[key] || "",
    ).trim();
  });

  const get = (...names) => {
    for (const name of names) {
      const value = normalizedRow[name.toLowerCase()];
      if (value) {
        return value;
      }
    }
    return "";
  };

  const rawCategory = get("categoria", "categoria/tipo", "categoria/ tipo");
  const category = normalizeCategory(rawCategory);
  const rawPlatform = normalizeKey(get("plataforma", "platforma", "platform"));
  const bestPlatform = normalizeKey(
    get("melhor plataforma", "melhor plataforma"),
  );

  const platformLinks = {
    amazon: get("link amazon"),
    shopee: get("link shopee"),
    mercadolivre: get(
      "link mercado livre",
      "link mercadolivre",
      "link merc.livre",
    ),
    aliexpress: get("link aliexpress", "link ali express"),
    hotmart: get("link hotmart"),
    kiwify: get("link kiwify"),
    google: get("link google play", "link google"),
    kdp: get("link kdp"),
    kobo: get("link kobo"),
    eduzz: get("link eduzz"),
    monetizze: get("link monetizze"),
  };

  let platform = rawPlatform || bestPlatform;
  let link = get("link", "url", "🔗link afiliado");
  const hasPlatformLinks = Object.values(platformLinks).some((value) => value);

  if (!link) {
    if (bestPlatform && platformLinks[bestPlatform]) {
      platform = bestPlatform;
      link = platformLinks[bestPlatform];
    } else if (hasPlatformLinks) {
      if (bestPlatform) {
        return null;
      }
      for (const key of Object.keys(platformLinks)) {
        if (platformLinks[key]) {
          platform = platform || key;
          link = platformLinks[key];
          break;
        }
      }
    }
  }

  // Se não tem plataforma mas tem link, usa o platformKey passado (ex: amazon, mercadolivre)
  if (!platform && link && platformKey) {
    platform = platformKey;
  }

  if (!platform && link) {
    platform = "outros";
  }

  if (!link) {
    return null;
  }

  const status = String(get("status no site", "status")).toLowerCase();
  const rawName = get("produto", "produto/curso", "produto/curso ");

  return {
    id: get("produto base id", "id", "produto"),
    name: rawName || "Produto sem nome",
    category,
    categoryLabel: String(rawCategory).trim() || getCategoryLabel(category),
    price: get("preço", "preço menor r$", "preço menor"),
    priceOld: get("preço antigo"),
    bestPlatform: platform,
    link,
    platformLabel: PLATFORM_INFO[platform]?.label || "Compra agora",
    status,
    badge: badgeFromStatus(get("status no site", "status")),
    image: row["Imagem"] || placeholderImage(rawName || "Produto"),
    soldText: get("texto vendido"),
    shippingTag: get("frete") || "✅ Frete Grátis",
  };
}

function normalizeCategory(value) {
  const raw = String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
  if (!raw) return "outros";
  if (raw.includes("saude") || raw.includes("saúde")) return "saude";
  if (raw.includes("beleza")) return "beleza";
  if (raw.includes("fitness")) return "fitness";
  if (raw.includes("casa")) return "casa";
  if (raw.includes("alimentos") || raw.includes("nutri")) return "alimentos";
  if (raw.includes("livros") || raw.includes("ebook")) return "livros";
  return raw.replace(/\s+/g, "-");
}

function badgeFromStatus(value) {
  const status = String(value || "").toLowerCase();
  if (status.includes("novo")) {
    return "NOVO!";
  }
  if (
    status.includes("promo") ||
    status.includes("-%") ||
    status.includes("-")
  ) {
    return "-25%";
  }
  return "";
}

function placeholderImage(text) {
  return (
    "https://via.placeholder.com/250x250/2d5f4c/ffffff?text=" +
    encodeURIComponent(String(text).slice(0, 18))
  );
}

function renderProducts(products) {
  console.log("Renderizando produtos:", products.length, "produtos");
  PRODUCT_GRID.innerHTML = "";
  if (!products.length) {
    PRODUCT_GRID.innerHTML = `<p style=\"grid-column:1/-1;padding:24px 16px;text-align:center;color:var(--verde-medio);font-weight:700;\">Nenhum produto disponível na planilha.</p>`;
    return;
  }

  products.forEach((product) => {
    PRODUCT_GRID.insertAdjacentHTML(
      "beforeend",
      createProductCardHtml(product),
    );
  });
  console.log("Produtos renderizados com sucesso");
}

function renderCategoryMenu(products) {
  if (!CATEGORY_MENU) return;

  CATEGORY_MENU.querySelectorAll(".menu-item[data-cat]").forEach((button) => {
    if (button.dataset.cat !== "todos") {
      button.remove();
    }
  });

  const categories = new Map();
  products.forEach((product) => {
    if (!product.category) return;
    if (!categories.has(product.category)) {
      categories.set(
        product.category,
        product.categoryLabel || getCategoryLabel(product.category),
      );
    }
  });

  const buttonsHtml = Array.from(categories.entries())
    .sort(([a], [b]) => a.localeCompare(b, "pt-BR"))
    .map(
      ([key, label]) => `
    <button
      type="button"
      class="menu-item"
      data-cat="${escapeHtml(key)}"
      onclick="filtrarProdutos('${escapeHtml(key)}')"
    >
      ${escapeHtml(label)}
    </button>`,
    )
    .join("");

  const separator = CATEGORY_MENU.querySelector(".separador-plataformas");
  if (separator) {
    separator.insertAdjacentHTML("beforebegin", buttonsHtml);
  } else {
    CATEGORY_MENU.insertAdjacentHTML("beforeend", buttonsHtml);
  }

  filtrarProdutos("todos");
}

function getCategoryLabel(category) {
  return (
    CATEGORY_LABELS[category] ||
    category
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
}

function createProductCardHtml(product) {
  const badgeHtml = product.badge
    ? `<span class=\"${product.badge === "NOVO!" ? "tag-novo" : "tag-off"}\">${product.badge}</span>`
    : "";
  const priceOldHtml = product.priceOld
    ? `<span class=\"preco-antigo\">${product.priceOld}</span>`
    : "";
  const parcelInfo = product.price
    ? `<span class=\"parcelamento\">Parcelas sob consulta</span>`
    : "";

  return `
   <div class="card-produto" data-cat="${product.category}" data-plat="${product.bestPlatform}">
     ${badgeHtml}
     <button class="card-fav" onclick="toggleFav(this)">🤍</button>

     <div class="card-img-area">
       <img src="${product.image}" alt="${escapeHtml(product.name)}" />
     </div>

     <div class="barra-vendido-area">
       <div class="barra-progresso-pequena">
         <div class="barra-progresso-cheia" style="width: 60%"></div>
       </div>
       <span class="texto-vendido">${escapeHtml(product.soldText || "Mais vendidos")}</span>
     </div>

     <div class="card-info">
       <span class="marca-label">${escapeHtml(product.platformLabel)}</span>
       <h3 class="nome-produto">${escapeHtml(product.name)}</h3>

       <div class="avaliacao">
         <span class="estrelas-card">⭐⭐⭐⭐⭐</span>
         <span class="qtd-avis">(100+)</span>
       </div>

       <div class="preco-container">
         ${priceOldHtml}
         <span class="preco-atual">${product.price || "Consulte"}</span>
       </div>
       ${parcelInfo}
       <span class="frete-tag">${escapeHtml(product.shippingTag || "✅ Frete Grátis")}</span>

       <a href="${escapeHtml(product.link)}" target="_blank" class="btn-comprar-card">
         🛒 COMPRAR AGORA
       </a>
       <span class="platforma-mini">${escapeHtml(product.platformLabel)}</span>
     </div>
   </div>`;
}

function escapeHtml(text) {
  return String(text || "").replace(
    /[&<>'"]/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[char],
  );
}

function fallbackProducts() {
  return [
    {
      id: "P1",
      name: "Whey Protein Isolado 900g Chocolate",
      category: "saude",
      price: "R$ 99,90",
      priceOld: "R$ 149,90",
      link: "https://amzn.to/3OJvixx",
      bestPlatform: "amazon",
      platformLabel: "Compra via Amazon",
      badge: "-30%",
      image:
        "https://via.placeholder.com/250x250/2d5f4c/ffffff?text=Whey+Protein",
      soldText: "🔥 75% vendidos!",
      shippingTag: "✅ Frete Grátis",
    },
    {
      id: "P2",
      name: "Multivitamínico Premium 60 Cápsulas",
      category: "saude",
      price: "R$ 67,43",
      priceOld: "R$ 89,90",
      link: "https://shopee.com.br/s/multivitaminico",
      bestPlatform: "shopee",
      platformLabel: "Compra via Shopee",
      badge: "-25%",
      image:
        "https://via.placeholder.com/250x250/c9a227/ffffff?text=Multivitaminico",
      soldText: "60% vendidos",
      shippingTag: "✅ Frete Grátis",
    },
    {
      id: "P3",
      name: "Colágeno Hidrolisado Verisol 1000mg",
      category: "beleza",
      price: "R$ 129,35",
      priceOld: "R$ 199,00",
      link: "#",
      bestPlatform: "shopee",
      platformLabel: "Compra via Shopee",
      badge: "-35%",
      image: "https://via.placeholder.com/250x250/ec4899/ffffff?text=Colageno",
      soldText: "70% vendidos",
      shippingTag: "✅ Frete Grátis",
    },
    {
      id: "P4",
      name: "Ômega 3 EPA/DHA Premium 1000mg",
      category: "saude",
      price: "R$ 127,92",
      priceOld: "R$ 159,90",
      link: "#",
      bestPlatform: "amazon",
      platformLabel: "Compra via Amazon",
      badge: "-20%",
      image: "https://via.placeholder.com/250x250/1b4d3e/ffffff?text=Omega+3",
      soldText: "🔥 Quase esgotado!",
      shippingTag: "✅ Frete Grátis",
    },
    {
      id: "P5",
      name: "Creatina Monohidratada 300g Pura",
      category: "fitness",
      price: "R$ 79,90",
      link: "https://mercadolivre.com.br/s/creatina",
      bestPlatform: "mercadolivre",
      platformLabel: "Compra via Mercado Livre",
      badge: "NOVO!",
      image: "https://via.placeholder.com/250x250/d4af37/ffffff?text=Creatina",
      soldText: "Lançamento",
      shippingTag: "✅ Frete Grátis",
    },
    {
      id: "P6",
      name: "Fibras Solúveis Psyllium 100% Natural",
      category: "alimentos",
      price: "R$ 59,94",
      priceOld: "R$ 99,90",
      link: "#",
      bestPlatform: "mercadolivre",
      platformLabel: "Compra via Mercado Livre",
      badge: "-40%",
      image: "https://via.placeholder.com/250x250/fbbf24/ffffff?text=Fibras",
      soldText: "🔥 Últimas unidades!",
      shippingTag: "✅ Frete Grátis",
    },
  ];
}

// Função que aplica ambos os filtros simultaneamente
function applyFilters() {
  document.querySelectorAll(".card-produto").forEach((card) => {
    const matchesCategory =
      currentCategoryFilter === "todos" ||
      card.dataset.cat === currentCategoryFilter;
    const matchesPlatform =
      currentPlatformFilter === "todos" ||
      card.dataset.plat === currentPlatformFilter;

    if (matchesCategory && matchesPlatform) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Função que aplica o filtro digital
function applyDigitalFilters() {
  document.querySelectorAll(".card-digital").forEach((card) => {
    if (
      currentDigitalFilter === "todos" ||
      card.dataset.plat === currentDigitalFilter
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filtrarProdutos(categoria) {
  // Atualiza o filtro de categoria
  currentCategoryFilter = categoria;

  // Só afeta botões de categoria (não plataforma)
  document.querySelectorAll(".menu-item[data-cat]").forEach((b) => {
    b.classList.toggle("ativo", b.dataset.cat === categoria);
  });

  // Aplica ambos os filtros
  applyFilters();
}

function filtrarPorPlataforma(plataforma) {
  // Atualiza o filtro de plataforma
  currentPlatformFilter = plataforma;

  // Primeiro, remove a classe ativo de todos os filtros de plataforma
  document.querySelectorAll(".filtro-plataforma").forEach((b) => {
    b.classList.remove("ativo");
  });

  // Depois, adiciona ativo apenas no filtro clicado
  document.querySelectorAll(".filtro-plataforma").forEach((b) => {
    if (b.dataset.plat === plataforma) {
      b.classList.add("ativo");
    }
  });

  // Aplica ambos os filtros
  applyFilters();
}

function filtrarDigital(plataforma) {
  // Atualiza o filtro digital
  currentDigitalFilter = plataforma;

  document.querySelectorAll(".plat-btn").forEach((b) => {
    b.classList.toggle("ativo", b.dataset.plat === plataforma);
  });

  // Aplica o filtro digital
  applyDigitalFilters();
}

function toggleFav(btn) {
  if (btn.textContent === "🤍") {
    btn.textContent = "❤️";
    btn.style.background = "#fff0f0";
  } else {
    btn.textContent = "🤍";
    btn.style.background = "white";
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});
