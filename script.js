// ============================================
// JAVASCRIPT - FUNCIONALIDADES DO SITE
// Arquivo separado para organização
// ============================================

// Substitua pelo ID da planilha que você publicar no Google Sheets.
// O site carrega dados da aba VitrineSite (gid=2082836737)
const SHEET_ID = "1xpEKCC0mys0FEZqeAue0f_Q6ObMStz1S";

// Configuração de publicação da aba VitrineSite
const PLATFORMS = {
  vitrine: { name: "VitrineSite", gid: 2082836737 },
};

function buildSheetUrl(platformKey) {
  const plat = PLATFORMS[platformKey];
  if (!plat) return null;
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/pub?output=csv&gid=${plat.gid}`;
}

function buildAlternateSheetUrl(platformKey) {
  const plat = PLATFORMS[platformKey];
  if (!plat) return null;
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${plat.gid}`;
}

const PRODUCT_GRID = document.getElementById("grade-principal");
const PRODUCT_LOADING = document.getElementById("produtos-carregando");
const CATEGORY_MENU = document.getElementById("categoria-menu");
const DEBUG_PANEL = document.getElementById("debug-panel");
const DEBUG_CONTENT = document.getElementById("debug-content");

// Sistema de debug para diagnosticar problemas em celular
function debugLog(message) {
  const timestamp = new Date().toLocaleTimeString();
  const logEntry = `[${timestamp}] ${message}`;
  console.log(logEntry);

  if (DEBUG_CONTENT) {
    const line = document.createElement("div");
    line.textContent = message;
    line.style.color = message.includes("❌")
      ? "#f00"
      : message.includes("✅")
        ? "#0f0"
        : "#0f0";
    DEBUG_CONTENT.appendChild(line);
    DEBUG_CONTENT.scrollTop = DEBUG_CONTENT.scrollHeight;
  }
}

// Mostrar painel de debug com triplo-clique
document.addEventListener("click", (e) => {
  if (e.detail === 3 && DEBUG_PANEL) {
    DEBUG_PANEL.style.display =
      DEBUG_PANEL.style.display === "block" ? "none" : "block";
  }
});

// Estado dos filtros atuais
let currentCategoryFilter = "todos";
let currentPlatformFilter = "todos";
let currentDigitalFilter = "todos";

// Lista de nomes padrão para as categorias que aparecem no menu.
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

// Informações de cada plataforma. Usado para mostrar o nome certo no card.
// Agora só VitrineSite
const PLATFORM_INFO = {
  vitrine: { label: "Compra via Afiliado", className: "vitrine" },
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

function showLoading(message = "Carregando produtos da planilha...") {
  if (!PRODUCT_LOADING) return;
  PRODUCT_LOADING.textContent = message;
  PRODUCT_LOADING.style.display = "block";
}

function hideLoading() {
  if (!PRODUCT_LOADING) return;
  PRODUCT_LOADING.style.display = "none";
}

async function loadProductsFromSheet() {
  debugLog("🚀 Iniciando carregamento de produtos...");
  showLoading();
  try {
    const products = await fetchSheetData();
    const items = products.length ? products : fallbackProducts();
    debugLog(`✅ Produtos carregados: ${items.length}`);
    renderProducts(items);
    renderCategoryMenu(items);
  } catch (error) {
    debugLog(`❌ Erro ao carregar: ${error.message}`);
    showLoading("Erro ao carregar a planilha. Usando produtos padrão.");
    const items = fallbackProducts();
    debugLog(`📋 Usando produtos padrão: ${items.length}`);
    renderProducts(items);
    renderCategoryMenu(items);
  } finally {
    hideLoading();
  }
}

async function fetchSheetData() {
  if (window.location.protocol === "file:") {
    const error = "Protocolo file:// não permitido. Use um servidor HTTP.";
    debugLog(`❌ ${error}`);
    throw new Error(error);
  }

  debugLog(
    `📡 Conectando a Google Sheets... ID: ${SHEET_ID.substring(0, 10)}...`,
  );
  const allProducts = [];

  // Carregar apenas da aba VitrineSite
  const platformKey = "vitrine";
  try {
    let url = buildSheetUrl(platformKey);
    if (!url) throw new Error("URL da planilha não pôde ser construída");

    debugLog(`📊 Tentando pub CSV (gid=${PLATFORMS[platformKey].gid})...`);
    let response = await fetch(url);
    if (!response.ok) {
      debugLog(`⚠️ pub CSV falhou (${response.status}). Tentando gviz...`);
      url = buildAlternateSheetUrl(platformKey);
      response = await fetch(url);
    }

    if (!response.ok) {
      throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
    }

    const text = await response.text();
    debugLog(`📥 CSV recebido: ${text.length} bytes`);
    const platformProducts = parseSheetCsv(text, platformKey);
    allProducts.push(...platformProducts);
    debugLog(`✅ Produtos da ${platformKey}: ${platformProducts.length}`);
  } catch (err) {
    debugLog(`❌ Erro vitrine: ${err.message}`);
    throw err; // Re-throw para usar fallback
  }

  if (allProducts.length === 0) {
    debugLog("⚠️ Nenhum produto na planilha, usando padrão");
    return fallbackProducts();
  }

  return allProducts;
}

function parseSheetCsv(csvText, platformKey) {
  const delimiter = detectCsvDelimiter(csvText);
  debugLog(`🧾 Delimitador CSV detectado: ${delimiter}`);
  const rows = csvText
    .trim()
    .split(/\r?\n/)
    .map((line) => parseCsvLine(line, delimiter));

  let headerRowFound = false;
  let headers = [];
  const products = [];

  rows.forEach((row) => {
    const normalizedText = row.map((cell) =>
      String(cell || "")
        .trim()
        .toLowerCase(),
    );

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

function detectCsvDelimiter(csvText) {
  const sample = csvText.trim().split(/\r?\n/).slice(0, 5).join("\n");
  const commaCount = (sample.match(/,/g) || []).length;
  const semicolonCount = (sample.match(/;/g) || []).length;
  return semicolonCount > commaCount ? ";" : ",";
}

function parseCsvLine(line, delimiter = ",") {
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
    } else if (char === delimiter && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current);
  return values;
}

function dedupeProducts(products) {
  const deduped = new Map();
  products.forEach((product) => {
    const key = String(product.id || product.name || product.link || "")
      .trim()
      .toLowerCase();
    if (!key) return;

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

  if (!platform && link && platformKey) {
    platform = platformKey;
  }

  if (!platform && link) {
    platform = "vitrine"; // Padrão para produtos da vitrine
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
    priceOld: get(
      "preço original",
      "preco antigo",
      "preço antigo",
      "preco_antigo",
    ),
    bestPlatform: platform,
    link,
    platformLabel:
      PLATFORM_INFO[platform]?.label || get("plataforma") || "Compra agora",
    status,
    badge: badgeFromStatus(status),
    image:
      get("imagem", "image", "foto") || placeholderImage(rawName || "Produto"),
    soldText: get("texto vendido", "vendido", "vendidos"),
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
  if (raw.includes("saude") || raw.includes("saude")) return "saude";
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
    status.includes("-") ||
    status.includes("desconto")
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
  PRODUCT_GRID.innerHTML = "";
  // Esconder o elemento de carregamento
  if (PRODUCT_LOADING) {
    PRODUCT_LOADING.style.display = "none";
  }

  if (!products || products.length === 0) {
    PRODUCT_GRID.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #999; padding: 40px;">Nenhum produto carregado. Verifique sua planilha Google Sheets.</p>`;
    return;
  }

  console.log(`🎨 Renderizando ${products.length} produtos...`);
  products.forEach((product, index) => {
    PRODUCT_GRID.insertAdjacentHTML(
      "beforeend",
      createProductCardHtml(product),
    );
  });
  console.log(`✅ ${products.length} produtos renderizados com sucesso!`);
}

function renderCategoryMenu(products) {
  if (!CATEGORY_MENU) return;

  // Remove apenas botões de CATEGORIA (data-cat) que não sejam "todos"
  // NÃO remove botões de plataforma (.filtro-plataforma)
  CATEGORY_MENU.querySelectorAll(
    ".menu-item[data-cat]:not([data-plat])",
  ).forEach((button) => {
    if (button.dataset.cat !== "todos") {
      button.remove();
    }
  });

  // Coletar todas as categorias encontradas nos produtos
  const categories = new Map();
  products.forEach((product) => {
    if (!product.category) {
      console.warn("⚠️ Produto sem categoria:", product.name);
      return;
    }
    if (!categories.has(product.category)) {
      const label =
        CATEGORY_LABELS[product.category] ||
        product.categoryLabel ||
        getCategoryLabel(product.category);
      categories.set(product.category, label);
    }
  });

  console.log(
    "📂 Categorias encontradas:",
    Array.from(categories.entries()).map(([k, v]) => `${k}=${v}`),
  );
  console.log("📊 Total de categorias: ", categories.size);
  console.log("📊 Total de produtos: ", products.length);

  // Gerar HTML dos botões de categoria
  const buttonsHtml = Array.from(categories.entries())
    .sort(([a], [b]) => a.localeCompare(b, "pt-BR"))
    .map(
      ([key, label]) =>
        `<button type="button" class="menu-item" data-cat="${escapeHtml(key)}" onclick="filtrarProdutos('${escapeHtml(key)}')">\n      ${escapeHtml(label)}\n    </button>`,
    )
    .join("\n    ");

  // Inserir os botões de categoria APÓS o botão "Todos"
  const todosButton = CATEGORY_MENU.querySelector('[data-cat="todos"]');
  if (todosButton && buttonsHtml) {
    console.log("✅ Inserindo categorias após o botão Todos");
    todosButton.insertAdjacentHTML("afterend", buttonsHtml);
  } else {
    console.warn("⚠️ Botão Todos não encontrado, inserindo no final");
    CATEGORY_MENU.insertAdjacentHTML("beforeend", buttonsHtml);
  }

  // Aplicar filtro inicial
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
    ? `<span class="${product.badge === "NOVO!" ? "tag-novo" : "tag-off"}">${escapeHtml(product.badge)}</span>`
    : "";
  const priceOldHtml = product.priceOld
    ? `<span class="preco-antigo">${escapeHtml(product.priceOld)}</span>`
    : "";
  const parcelInfo = product.price
    ? `<span class="parcelamento">Parcelas sob consulta</span>`
    : "";

  return `
   <div class="card-produto" data-cat="${escapeHtml(product.category)}" data-plat="${escapeHtml(product.bestPlatform)}">
     ${badgeHtml}
     <button class="card-fav" onclick="toggleFav(this)">🤍</button>

     <div class="card-img-area">
       <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
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
         <span class="preco-atual">${escapeHtml(product.price || "Consulte")}</span>
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
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
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

function applyFilters() {
  let visibleCount = 0;
  document.querySelectorAll(".card-produto").forEach((card) => {
    const matchesCategory =
      currentCategoryFilter === "todos" ||
      card.dataset.cat === currentCategoryFilter;
    const matchesPlatform =
      currentPlatformFilter === "todos" ||
      card.dataset.plat === currentPlatformFilter;

    if (matchesCategory && matchesPlatform) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });
  console.log(
    `🔍 Filtros aplicados: categoria=${currentCategoryFilter}, plataforma=${currentPlatformFilter}. Visíveis: ${visibleCount}`,
  );
}

function applyDigitalFilters() {
  document.querySelectorAll(".card-digital").forEach((card) => {
    card.style.display =
      currentDigitalFilter === "todos" ||
      card.dataset.plat === currentDigitalFilter
        ? "block"
        : "none";
  });
}

function filtrarProdutos(categoria) {
  currentCategoryFilter = categoria;
  console.log(`📂 Filtrando por categoria: ${categoria}`);

  // Atualizar visual dos botões de categoria
  document
    .querySelectorAll(".menu-item[data-cat]:not([data-plat])")
    .forEach((b) => {
      b.classList.toggle("ativo", b.dataset.cat === categoria);
    });

  applyFilters();
}

function filtrarPorPlataforma(plataforma) {
  currentPlatformFilter = plataforma;
  console.log(`🛒 Filtrando por plataforma: ${plataforma}`);

  document.querySelectorAll(".filtro-plataforma").forEach((b) => {
    b.classList.toggle("ativo", b.dataset.plat === plataforma);
  });

  applyFilters();
}

function filtrarDigital(plataforma) {
  currentDigitalFilter = plataforma;
  document.querySelectorAll(".plat-btn").forEach((b) => {
    b.classList.toggle("ativo", b.dataset.plat === plataforma);
  });
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
