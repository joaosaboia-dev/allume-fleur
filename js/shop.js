'use strict';

(function () {

  /* ── Catálogo ─────────────────────────────────────────────────────────────
     Toda a loja é movida por estes dados. Cada produto tem `collection` (liga
     à sidebar), `image` (capa) e, opcionalmente, `images` (galeria de várias
     fotos). `variants` são os tamanhos/kits, cada um com seu próprio preço.
     Para mudar preços ou adicionar produtos, basta editar estas listas.       */

  var COLLECTIONS = [
    { key: 'all',     label: 'Todas as coleções' },
    { key: 'blossom', label: 'Blossom' },
    { key: 'ocean',   label: 'Ocean'   },
    { key: 'calm',    label: 'Calm'    },
    { key: 'love',    label: 'Love'    },
    { key: 'encanto', label: 'Encanto' },
    { key: 'golden',  label: 'Golden'  },
    { key: 'latte',   label: 'Latte'   },
    { key: 'happy-hour',   label: 'Happy Hour'   },
    { key: 'sweet-fruits', label: 'Sweet Fruits' }
  ];

  var AROMAS = ['Baunilha', 'Bergamota', 'Cereja Avelã', 'Erva Doce', 'Jasmin Floral', 'Lavanda', 'Maça com Canela', 'Menta', 'Morango', 'Verbena'];

  /* Coleções com aroma pré-determinado — o cliente NÃO escolhe o aroma */
  var NO_AROMA_COLLECTIONS = ['sweet-fruits', 'happy-hour'];

  var PRODUCTS = [
    /* Blossom */
    { id: 'blossom',        name: 'Vela Blossom',   collection: 'blossom', image: 'assets/collections/blossom/vela-blossom.webp',       desc: 'Flor esculpida em cera, tons pastéis suaves.',
      variants: [ { id: 'unid',  label: 'Unidade 150g',                     price: 30  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 290 } ] },
    { id: 'buque-cia',      name: 'Buquê e Cia',    collection: 'blossom', image: 'assets/collections/blossom/vela-buque-e-cia.webp',    desc: 'Buquê de velas floridas para presentear.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 20  }, { id: 'kit5',  label: 'Kit 5 und',                   price: 75  } ] },
    { id: 'mini-rosa',      name: 'Mini Rosa',      collection: 'blossom', image: 'assets/collections/blossom/vela-mini-rosa.webp',      desc: 'Rosinha em cera com acabamento artesanal.',
      variants: [ { id: 'unid',  label: 'Unidade 70g',                     price: 25  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 190 } ] },
    { id: 'margarida-premium', name: 'Margarida Premium', collection: 'blossom', image: 'assets/collections/blossom/vela-margarida-premium.webp',
      images: [ 'assets/collections/blossom/vela-margarida-premium.webp', 'assets/collections/blossom/vela-margarida-premium-superior.webp' ],
      desc: 'Margaridas premium em kit personalizável para presentear.',
      variants: [ { id: 'kit10', label: 'Kit 10 und + personalização', price: 240 } ] },

    /* Ocean */
    { id: 'flores-flutuantes', name: 'Flores Flutuantes', collection: 'ocean', image: 'assets/collections/ocean/vela-flores-flutuantes.webp', desc: 'Flores delicadas que flutuam na superfície — charme artesanal para mesas e eventos.',
      variants: [ { id: 'kit10', label: 'Kit 10 und + personalização', price: 60  }, { id: 'kit20', label: 'Kit 20 und + personalização', price: 110 } ] },
    { id: 'mini-ocean',     name: 'Mini Ocean',     collection: 'ocean',   image: 'assets/collections/ocean/vela-mini-ocean.webp',      desc: 'Mini vela gel com conchas e areia real.',
      variants: [ { id: 'unid',  label: 'Unidade 40g',                     price: 16  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 120 } ] },
    { id: 'ocean-premium',  name: 'Ocean Premium',  collection: 'ocean',   image: 'assets/collections/ocean/vela-ocean-premium.webp',   desc: 'Vela gel premium, disponível em duas gramaturas.',
      variants: [ { id: 'g70',   label: 'Unidade 70g',  price: 35 }, { id: 'g250', label: 'Unidade 250g', price: 55 } ] },

    /* Calm */
    { id: 'calm',           name: 'Vela Calm',      collection: 'calm',    image: 'assets/collections/calm/vela-calm.webp',             desc: 'Aroma relaxante para momentos de paz.',
      variants: [ { id: 'unid',  label: 'Unidade 150g',                     price: 26  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 250 } ] },
    { id: 'mini-calm',      name: 'Mini Calm',      collection: 'calm',    image: 'assets/collections/calm/vela-mini-calm.webp',        desc: 'Versão mini da linha relaxante.',
      variants: [ { id: 'unid',  label: 'Unidade 40g',                     price: 13  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 95  } ] },

    /* Love */
    { id: 'love',           name: 'Vela Love',      collection: 'love',    image: 'assets/collections/love/vela-love.webp',             desc: 'Aroma envolvente para momentos especiais.',
      variants: [ { id: 'g150', label: 'Unidade 150g', price: 35 }, { id: 'g250', label: 'Unidade 250g', price: 47 } ] },
    { id: 'dois-coracoes',  name: 'Dois Corações',  collection: 'love',    image: 'assets/collections/love/vela-dois-coracoes.webp',    desc: 'Dois corações de cera que derretem ao calor.',
      variants: [ { id: 'g150', label: 'Unidade 150g', price: 35 }, { id: 'g250', label: 'Unidade 250g', price: 47 } ] },
    { id: 'buque-premium',  name: 'Buquê Premium',  collection: 'love',    image: 'assets/collections/love/vela-buque-premium.webp',    desc: 'Buquê premium em gramaturas especiais.',
      variants: [ { id: 'g150', label: 'Unidade 150g', price: 33 }, { id: 'g250', label: 'Unidade 250g', price: 45 } ] },

    /* Encanto */
    { id: 'leao',           name: 'Leãozinho',      collection: 'encanto', image: 'assets/collections/encanto/vela-leao.webp',          desc: 'Lembrancinha colorida para festas infantis.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 12  }, { id: 'kit30', label: 'Kit 30 und',                 price: 280 } ] },
    { id: 'urso-premium',   name: 'Urso Premium',   collection: 'encanto', image: 'assets/collections/encanto/vela-urso-premium.webp',  desc: 'Ursinho premium em copo de vidro personalizado.',
      variants: [ { id: 'unid',  label: 'Unidade 150g',                     price: 30  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 290 } ] },
    { id: 'cubo',           name: 'Vela Cubo',      collection: 'encanto', image: 'assets/collections/encanto/vela-cubo.webp',
      images: [ 'assets/collections/encanto/vela-cubo.webp', 'assets/collections/encanto/vela-cubo-variante.webp' ],
      desc: 'Cubos de cera personalizáveis — lembrancinha elegante para presentear em grande quantidade.',
      variants: [ { id: 'kit50', label: 'Kit 50 und + personalização', price: 300 } ] },
    { id: 'afeto',          name: 'Vela Afeto',     collection: 'encanto', image: 'assets/collections/encanto/vela-afeto-aniversario.webp',
      images: [ 'assets/collections/encanto/vela-afeto-aniversario.webp', 'assets/collections/encanto/vela-afeto-casamento.webp' ],
      desc: 'Lembrancinhas afetivas para casamentos e aniversários.',
      variants: [ { id: 'kit50', label: 'Kit 50 und + personalização', price: 150 } ] },

    /* Golden */
    { id: 'golden',         name: 'Vela Golden',    collection: 'golden',  image: 'assets/collections/golden/vela-golden.webp',         desc: 'Acabamento metálico em tons âmbar.',
      variants: [ { id: 'g150', label: 'Unidade 150g', price: 36 } ] },
    { id: 'aura-golden',    name: 'Vela Aura Golden', collection: 'golden', image: 'assets/collections/golden/vela-golden-aura.webp',
      images: [ 'assets/collections/golden/vela-golden-aura.webp', 'assets/collections/golden/vela-golden-aura-superior.webp' ],
      desc: 'Brilho dourado intenso com acabamento premium.',
      variants: [ { id: 'g250', label: 'Unidade 250g', price: 52 } ] },

    /* Latte */
    { id: 'latte',          name: 'Vela Latte',     collection: 'latte',   image: 'assets/collections/latte/vela-latte.webp',
      images: [ 'assets/collections/latte/vela-latte.webp', 'assets/collections/latte/vela-latte-variante-caramelo.webp', 'assets/collections/latte/vela-latte-variante-mochi.webp', 'assets/collections/latte/vela-latte-variante-rosa.webp' ],
      desc: 'Camadas inspiradas em café especial.',
      variants: [ { id: 'g250', label: 'Unidade 250g', price: 48 } ] },

    /* Happy Hour (aroma pré-determinado) */
    { id: 'mojito',         name: 'Vela Mojito',    collection: 'happy-hour', image: 'assets/collections/happy-hour/vela-mojito.webp', desc: 'Inspirada no clássico drink, com aroma cítrico refrescante de hortelã e limão.',
      variants: [ { id: 'g250', label: 'Unidade 250g', price: 65 } ] },
    { id: 'strawberry-spritz', name: 'Vela Strawberry Spritz', collection: 'happy-hour', image: 'assets/collections/happy-hour/vela-strawberry-spritz.webp', desc: 'Aroma frutado de morango com toque efervescente, inspirada no spritz.',
      variants: [ { id: 'g250', label: 'Unidade 250g', price: 65 } ] },

    /* Sweet Fruits (aroma pré-determinado) */
    { id: 'doce-bergamota', name: 'Vela Doce Bergamota', collection: 'sweet-fruits', image: 'assets/collections/sweet-fruits/vela-doce-bergamota.webp', desc: 'Aroma cítrico e adocicado de bergamota, irresistível do visual ao perfume.',
      variants: [ { id: 'unid', label: 'Unidade 150g', price: 48 } ] },
    { id: 'merengue',       name: 'Vela Merengue',  collection: 'sweet-fruits', image: 'assets/collections/sweet-fruits/vela-merengue.webp', desc: 'Inspirada no merengue, com aroma frutado e adocicado.',
      variants: [ { id: 'unid', label: 'Unidade 150g', price: 48 } ] }
  ];

  var WHATSAPP_NUMBER = '5592994365884';   /* destino do pedido no checkout */
  var STORAGE_KEY     = 'allume-fleur-cart'; /* chave do carrinho no localStorage */

  /* Cada item do carrinho é identificado pela combinação produto + variação +
     aroma. Juntamos os três num texto separado por "|" para usar como chave do
     objeto `cart`. Ex.: "latte|g250|Baunilha" ou, sem aroma, "mojito|g250|". */
  var KEY_SEP = '|';


  /* ── Estado ────────────────────────────────── */

  var state = {
    cart: loadCart(),
    activeCategory: 'all'
  };


  /* ── Referências DOM ────────────────────────── */

  var els = {
    categoryList:     document.getElementById('category-list'),
    productGrid:      document.getElementById('product-grid'),
    productEmpty:     document.getElementById('product-empty'),
    shopResult:       document.getElementById('shop-result'),
    cartToggle:       document.getElementById('cart-toggle'),
    cartClose:        document.getElementById('cart-close'),
    cartDrawer:       document.getElementById('cart-drawer'),
    cartOverlay:      document.getElementById('cart-overlay'),
    cartCount:        document.getElementById('cart-count'),
    cartEmpty:        document.getElementById('cart-empty'),
    cartItems:        document.getElementById('cart-items'),
    cartSummaryCount: document.getElementById('cart-summary-count'),
    cartCheckout:     document.getElementById('cart-checkout')
  };


  /* ── Formatação de moeda (pt-BR) ─────────────────────────────────────────
     Intl.NumberFormat cuida da localização: símbolo R$, vírgula decimal e
     separador de milhar. `toNumber` é uma rede de segurança: se um preço vier
     ausente ou inválido do catálogo, exibimos R$ 0,00 em vez de "R$ NaN".    */

  var BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  var NUM = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function toNumber(value) { return Number.isFinite(value) ? value : 0; }
  function formatBRL(value) { return BRL.format(toNumber(value)); }
  function formatNum(value) { return NUM.format(toNumber(value)); }

  /* Preço seguro de uma variação — nunca retorna undefined/NaN, então o
     cálculo do total no checkout não quebra se faltar um preço. */
  function getPrice(variant) { return toNumber(variant && variant.price); }


  /* ── Utilidades ─────────────────────────────── */

  function loadCart() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveCart() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart)); }
    catch (e) {}
  }

  /* Monta a chave do carrinho a partir das três partes (ver KEY_SEP). */
  function buildKey(productId, variantId, aroma) {
    return [productId, variantId, aroma].join(KEY_SEP);
  }

  /* Caminho inverso: separa a chave de volta nas três partes. */
  function parseKey(key) {
    var parts = String(key).split(KEY_SEP);
    return { productId: parts[0], variantId: parts[1], aroma: parts[2] };
  }

  function getProductById(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
  }

  function getVariantById(product, variantId) {
    if (!product) return null;
    for (var i = 0; i < product.variants.length; i++) {
      if (product.variants[i].id === variantId) return product.variants[i];
    }
    return null;
  }

  /* Lista de imagens do produto: usa `images` quando há mais de uma; senão, a única `image` */
  function getImages(product) {
    return (product.images && product.images.length) ? product.images : [product.image];
  }

  /* Coleções como Sweet Fruits e Happy Hour têm aroma fixo — sem seleção pelo cliente */
  function productHasAroma(product) {
    return !!product && NO_AROMA_COLLECTIONS.indexOf(product.collection) === -1;
  }

  function getTotalCount() {
    var total = 0;
    for (var key in state.cart) {
      if (Object.prototype.hasOwnProperty.call(state.cart, key)) total += state.cart[key];
    }
    return total;
  }

  function getCollectionLabel(key) {
    for (var i = 0; i < COLLECTIONS.length; i++) {
      if (COLLECTIONS[i].key === key) return COLLECTIONS[i].label;
    }
    return key;
  }

  /* Escapa caracteres especiais antes de injetar texto via innerHTML.
     Como nomes/labels viram HTML, isso previne XSS e evita que um caractere
     como "<" quebre o markup. */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Limpa o carrinho salvo no localStorage de entradas que não batem mais com
     o catálogo atual — produto removido, variação que deixou de existir,
     quantidade inválida ou aroma incoerente com a regra da coleção. Roda no
     início para o carrinho nunca exibir item "fantasma" após uma atualização. */
  function sanitizeCart() {
    var changed = false;
    Object.keys(state.cart).forEach(function (key) {
      var k = parseKey(key);
      var p = getProductById(k.productId);
      var v = p ? getVariantById(p, k.variantId) : null;
      /* Com aroma: precisa ser um da lista. Sem aroma: a parte tem que vir vazia. */
      var aromaOk = p && (productHasAroma(p) ? AROMAS.indexOf(k.aroma) !== -1 : k.aroma === '');
      if (!p || !v || !aromaOk || !(state.cart[key] > 0)) {
        delete state.cart[key];
        changed = true;
      }
    });
    if (changed) saveCart();
  }


  /* ── Sidebar ─────────────────────────────────── */

  function renderSidebar() {
    var html = COLLECTIONS.map(function (c) {
      var count = c.key === 'all'
        ? PRODUCTS.length
        : PRODUCTS.filter(function (p) { return p.collection === c.key; }).length;
      var active = c.key === state.activeCategory ? ' is-active' : '';
      return '<li>'
        + '<button class="sidebar-item' + active + '" data-category="' + c.key + '">'
        + '<span>' + c.label + '</span>'
        + '<span class="sidebar-count">' + count + '</span>'
        + '</button></li>';
    }).join('');

    els.categoryList.innerHTML = html;

    els.categoryList.addEventListener('click', function (e) {
      var btn = e.target.closest('.sidebar-item');
      if (!btn) return;
      var cat = btn.getAttribute('data-category');
      if (cat === state.activeCategory) return;
      state.activeCategory = cat;
      updateActiveSidebar();
      renderProducts();
    });
  }

  function updateActiveSidebar() {
    els.categoryList.querySelectorAll('.sidebar-item').forEach(function (it) {
      it.classList.toggle('is-active', it.getAttribute('data-category') === state.activeCategory);
    });
  }


  /* ── Mini-galeria do card ─────────────────────────────────────────────────
     As imagens do produto ficam empilhadas (position:absolute no CSS) e só a
     `.is-active` aparece, com transição de fade. Produtos com mais de uma
     imagem ganham setas e indicadores (dots). Toda a navegação acontece na
     própria vitrine — não há página de detalhe. Os SVGs das setas ficam em
     constantes para não repetir o markup a cada render.                       */

  var CHEVRON_LEFT  = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
  var CHEVRON_RIGHT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';

  /* Se a imagem falhar (404, conexão ruim), marcamos o elemento com uma classe
     para o CSS mostrar um fundo neutro no lugar do ícone de imagem quebrada. */
  var IMG_FALLBACK = "this.classList.add('img-failed')";

  function renderGallery(product) {
    var images = getImages(product);
    var hasMultiple = images.length > 1;

    /* `loading="lazy"` em todas as imagens alivia a vitrine longa (o navegador
       só baixa o que está perto da tela); `decoding="async"` evita travar a
       renderização enquanto a imagem é decodificada. */
    var slides = images.map(function (src, index) {
      var isFirst = index === 0;
      var label = escapeHtml(product.name) + (hasMultiple ? ' — imagem ' + (index + 1) : '');
      return `<img class="product-slide${isFirst ? ' is-active' : ''}"
                   src="${src}" alt="${label}"
                   loading="lazy" decoding="async" onerror="${IMG_FALLBACK}" />`;
    }).join('');

    /* Setas e dots só existem quando há mais de uma imagem. */
    var controls = '';
    if (hasMultiple) {
      var dots = images.map(function (src, index) {
        return `<button type="button" class="gallery-dot${index === 0 ? ' is-active' : ''}"
                        data-index="${index}" aria-label="Ver imagem ${index + 1}"></button>`;
      }).join('');

      controls =
          `<button type="button" class="gallery-nav gallery-prev" data-gallery="prev" aria-label="Imagem anterior">${CHEVRON_LEFT}</button>`
        + `<button type="button" class="gallery-nav gallery-next" data-gallery="next" aria-label="Próxima imagem">${CHEVRON_RIGHT}</button>`
        + `<div class="gallery-dots" aria-label="Selecionar imagem">${dots}</div>`;
    }

    return `<div class="product-image${hasMultiple ? ' has-gallery' : ''}" data-active="0">
              <div class="product-media">${slides}</div>
              <span class="product-collection">${getCollectionLabel(product.collection)}</span>
              ${controls}
            </div>`;
  }


  /* ── Grade de produtos ────────────────────────────────────────────────────
     renderProducts() decide O QUE listar (filtro + resumo); renderProductCard()
     decide COMO desenhar um card. Separar os dois deixa cada função com uma
     responsabilidade só e bem mais fácil de ler.                              */

  /* As opções de aroma são iguais para todo produto que usa aroma e a lista
     não muda em runtime, então montamos o HTML uma única vez. */
  var AROMA_OPTIONS_HTML = AROMAS.map(function (aroma) {
    return `<option value="${escapeHtml(aroma)}">${escapeHtml(aroma)}</option>`;
  }).join('');

  function renderProductCard(product) {
    var defaultVariant = product.variants[0];
    var hasAroma = productHasAroma(product);

    var variantOptions = product.variants.map(function (variant) {
      return `<option value="${escapeHtml(variant.id)}">${escapeHtml(variant.label)} — ${formatBRL(variant.price)}</option>`;
    }).join('');

    /* Coleções de aroma fixo (Sweet Fruits, Happy Hour) não exibem o seletor;
       nesses casos a posição do aroma na chave do carrinho fica vazia. */
    var defaultAroma = hasAroma ? AROMAS[0] : '';
    var qty = state.cart[buildKey(product.id, defaultVariant.id, defaultAroma)] || 0;

    var aromaField = hasAroma
      ? `<label class="variant-field">
           <span class="variant-label-text">Aroma</span>
           <select class="aroma-select" aria-label="Escolha o aroma">${AROMA_OPTIONS_HTML}</select>
         </label>`
      : '';

    return `<article class="product-card" data-product-id="${product.id}">
              ${renderGallery(product)}
              <div class="product-body">
                <h3 class="product-name">${escapeHtml(product.name)}</h3>
                <p class="product-desc">${escapeHtml(product.desc)}</p>
                <div class="product-variants">
                  ${aromaField}
                  <label class="variant-field">
                    <span class="variant-label-text">Tamanho / Kit</span>
                    <select class="variant-select" aria-label="Escolha o tamanho ou kit">${variantOptions}</select>
                  </label>
                </div>
                <div class="product-action${qty > 0 ? ' is-adding' : ''}">
                  <button class="btn-add" type="button" data-action="add">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                    Adicionar
                  </button>
                  <div class="qty-stepper" role="group" aria-label="Quantidade">
                    <button type="button" data-action="dec" aria-label="Diminuir">−</button>
                    <span class="qty-value">${qty}</span>
                    <button type="button" data-action="inc" aria-label="Aumentar">+</button>
                  </div>
                </div>
              </div>
            </article>`;
  }

  function renderProducts() {
    /* "all" mostra tudo; senão, filtra pela coleção ativa na sidebar. */
    var filtered = state.activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(function (product) { return product.collection === state.activeCategory; });

    /* Resumo: "N produtos" (+ nome da coleção quando há filtro ativo). */
    var noun = filtered.length === 1 ? 'produto' : 'produtos';
    els.shopResult.innerHTML = `<strong>${filtered.length}</strong> ${noun}`
      + (state.activeCategory === 'all'
          ? ''
          : ` na coleção <strong>${getCollectionLabel(state.activeCategory)}</strong>`);

    /* Hoje nenhuma coleção fica vazia, mas a guarda evita um grid em branco
       caso isso mude no futuro. */
    if (filtered.length === 0) {
      els.productGrid.innerHTML = '';
      els.productEmpty.hidden = false;
      return;
    }
    els.productEmpty.hidden = true;

    els.productGrid.innerHTML = filtered.map(renderProductCard).join('');
  }

  function getCardKey(card) {
    var aromaSelect = card.querySelector('.aroma-select');
    return buildKey(
      card.getAttribute('data-product-id'),
      card.querySelector('.variant-select').value,
      aromaSelect ? aromaSelect.value : ''
    );
  }

  function updateCardAction(card) {
    var qty = state.cart[getCardKey(card)] || 0;
    var action = card.querySelector('.product-action');
    if (!action) return;
    action.classList.toggle('is-adding', qty > 0);
    var disp = action.querySelector('.qty-value');
    if (disp) disp.textContent = qty;
  }


  /* ── Eventos: cards ──────────────────────────── */

  els.productGrid.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-action]');
    if (!btn) return;
    var card = btn.closest('.product-card');
    if (!card) return;
    var action = btn.getAttribute('data-action');
    var key    = getCardKey(card);

    if (action === 'add') {
      state.cart[key] = 1;
    } else if (action === 'inc') {
      state.cart[key] = (state.cart[key] || 0) + 1;
    } else if (action === 'dec') {
      var cur = state.cart[key] || 0;
      if (cur <= 1) delete state.cart[key];
      else state.cart[key] = cur - 1;
    }

    updateCardAction(card);
    afterCartChange();
  });

  /* Troca de aroma/variação reflete a combinação nova no stepper */
  els.productGrid.addEventListener('change', function (e) {
    var select = e.target.closest('.aroma-select, .variant-select');
    if (!select) return;
    var card = select.closest('.product-card');
    if (card) updateCardAction(card);
  });


  /* ── Galeria: navegação (setas, dots, swipe) ─────
     Delegação no grid (persiste entre re-renders). Os botões da galeria não têm
     [data-action], então não disparam o handler de carrinho acima.            */

  function setGallerySlide(gallery, index) {
    var slides = gallery.querySelectorAll('.product-slide');
    var dots   = gallery.querySelectorAll('.gallery-dot');
    var n = slides.length;
    if (n <= 1) return;
    index = ((index % n) + n) % n; /* circular */
    for (var i = 0; i < n; i++) {
      slides[i].classList.toggle('is-active', i === index);
      if (dots[i]) dots[i].classList.toggle('is-active', i === index);
    }
    gallery.setAttribute('data-active', index);
  }

  els.productGrid.addEventListener('click', function (e) {
    var nav = e.target.closest('.gallery-nav');
    var dot = e.target.closest('.gallery-dot');
    if (!nav && !dot) return;
    var gallery = (nav || dot).closest('.product-image');
    if (!gallery) return;
    var current = parseInt(gallery.getAttribute('data-active'), 10) || 0;
    if (nav) {
      setGallerySlide(gallery, current + (nav.getAttribute('data-gallery') === 'next' ? 1 : -1));
    } else {
      setGallerySlide(gallery, parseInt(dot.getAttribute('data-index'), 10) || 0);
    }
  });

  /* Swipe horizontal em telas touch */
  var touchStartX = null, touchGallery = null;
  els.productGrid.addEventListener('touchstart', function (e) {
    var gallery = e.target.closest('.product-image.has-gallery');
    if (!gallery) { touchGallery = null; return; }
    touchStartX  = e.touches[0].clientX;
    touchGallery = gallery;
  }, { passive: true });
  els.productGrid.addEventListener('touchend', function (e) {
    if (!touchGallery || touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      var current = parseInt(touchGallery.getAttribute('data-active'), 10) || 0;
      setGallerySlide(touchGallery, current + (dx < 0 ? 1 : -1));
    }
    touchStartX = null; touchGallery = null;
  }, { passive: true });


  /* ── Renderização: drawer ─────────────────────── */

  function renderCart() {
    var keys = Object.keys(state.cart);

    if (keys.length === 0) {
      els.cartEmpty.style.display = '';
      els.cartItems.innerHTML     = '';
      els.cartCheckout.disabled   = true;
    } else {
      els.cartEmpty.style.display = 'none';
      els.cartCheckout.disabled   = false;

      els.cartItems.innerHTML = keys.map(function (key) {
        var k = parseKey(key);
        var p = getProductById(k.productId);
        if (!p) return '';                       /* item órfão: pula silenciosamente */
        var v = getVariantById(p, k.variantId);
        if (!v) return '';
        var qty = state.cart[key];
        /* O aroma só aparece para produtos que o usam (k.aroma vem vazio
           nas coleções de aroma fixo). */
        var aromaLabel = k.aroma ? ' · Aroma: ' + escapeHtml(k.aroma) : '';
        return `<li class="cart-item" data-cart-key="${escapeHtml(key)}">
                  <div class="cart-item-image">
                    <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="${IMG_FALLBACK}" />
                  </div>
                  <div class="cart-item-info">
                    <div class="cart-item-name">${escapeHtml(p.name)}</div>
                    <div class="cart-item-variant">${escapeHtml(v.label)}${aromaLabel}</div>
                    <div class="cart-item-price">${formatBRL(v.price)}</div>
                  </div>
                  <div class="cart-item-controls">
                    <div class="cart-stepper">
                      <button type="button" data-cart-action="dec" aria-label="Diminuir">−</button>
                      <span class="qty-value">${qty}</span>
                      <button type="button" data-cart-action="inc" aria-label="Aumentar">+</button>
                    </div>
                    <button type="button" class="cart-item-remove" data-cart-action="remove">Remover</button>
                  </div>
                </li>`;
      }).join('');
    }

    var total = getTotalCount();
    els.cartSummaryCount.textContent = total;
    els.cartCount.textContent        = total;
    els.cartCount.classList.toggle('is-visible', total > 0);
  }


  /* ── Eventos: drawer ──────────────────────────── */

  els.cartItems.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-cart-action]');
    if (!btn) return;
    var item = btn.closest('.cart-item');
    if (!item) return;
    var key    = item.getAttribute('data-cart-key');
    var action = btn.getAttribute('data-cart-action');

    if (action === 'inc') {
      state.cart[key] = (state.cart[key] || 0) + 1;
    } else if (action === 'dec') {
      var cur = state.cart[key] || 0;
      if (cur <= 1) delete state.cart[key];
      else state.cart[key] = cur - 1;
    } else if (action === 'remove') {
      delete state.cart[key];
    }

    syncProductCard(key);
    afterCartChange();
  });

  function syncProductCard(key) {
    var k    = parseKey(key);
    var card = els.productGrid.querySelector('.product-card[data-product-id="' + k.productId + '"]');
    if (card && getCardKey(card) === key) updateCardAction(card);
  }


  /* ── Drawer: abrir / fechar ──────────────────── */

  function openCart() {
    els.cartDrawer.classList.add('is-open');
    els.cartOverlay.classList.add('is-open');
    els.cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    els.cartDrawer.classList.remove('is-open');
    els.cartOverlay.classList.remove('is-open');
    els.cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  els.cartToggle.addEventListener('click', openCart);
  els.cartClose.addEventListener('click', closeCart);
  els.cartOverlay.addEventListener('click', closeCart);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && els.cartDrawer.classList.contains('is-open')) closeCart();
  });


  /* ── Checkout → WhatsApp ─────────────────────── */

  els.cartCheckout.addEventListener('click', function () {
    var keys = Object.keys(state.cart);
    if (!keys.length) return;

    var total = 0;
    var lines = ['Olá, Allume Fleur! 🌷', 'Gostaria de fazer o seguinte pedido:', ''];

    keys.forEach(function (key) {
      var k = parseKey(key);
      var p = getProductById(k.productId);
      if (!p) return;
      var v = getVariantById(p, k.variantId);
      if (!v) return;
      var qty       = state.cart[key];
      var unitPrice = getPrice(v);          /* protegido contra preço ausente */
      var subtotal  = unitPrice * qty;
      total += subtotal;
      lines.push(p.name + ' - ' + v.label + (k.aroma ? ' (' + k.aroma + ')' : ''));
      lines.push(qty + ' un. × R$ ' + formatNum(unitPrice) + ' = R$ ' + formatNum(subtotal));
      lines.push('');
    });

    lines.push('Total: R$ ' + formatNum(total));
    lines.push('');
    lines.push('Aguardo confirmação e instruções de pagamento. Obrigada!');

    window.open(
      'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n')),
      '_blank', 'noopener,noreferrer'
    );
  });


  /* ── Pós-mudança no carrinho ─────────────────── */

  function afterCartChange() {
    saveCart();
    renderCart();
  }


  /* ── Init ─────────────────────────────────────── */

  sanitizeCart();
  renderSidebar();
  renderProducts();
  renderCart();

})();
