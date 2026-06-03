'use strict';

(function () {

  /* ── Catálogo ─────────────────────────────── */

  var COLLECTIONS = [
    { key: 'all',     label: 'Todas as coleções' },
    { key: 'blossom', label: 'Blossom' },
    { key: 'ocean',   label: 'Ocean'   },
    { key: 'calm',    label: 'Calm'    },
    { key: 'love',    label: 'Love'    },
    { key: 'encanto', label: 'Encanto' },
    { key: 'golden',  label: 'Golden'  },
    { key: 'latte',   label: 'Latte'   }
  ];

  var AROMAS = ['Bergamota', 'Cereja Avelã', 'Jasmin Floral', 'Lavanda', 'Morango'];

  var PRODUCTS = [
    /* Blossom */
    { id: 'blossom',        name: 'Vela Blossom',   collection: 'blossom', image: 'assets/collections/blossom/vela-blossom.webp',       desc: 'Flor esculpida em cera, tons pastéis suaves.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 30  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 290 } ] },
    { id: 'buque-cia',      name: 'Buquê e Cia',    collection: 'blossom', image: 'assets/collections/blossom/vela-buque-e-cia.webp',    desc: 'Buquê de velas floridas para presentear.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 15  }, { id: 'kit5',  label: 'Kit 5 und',                   price: 90  } ] },
    { id: 'mini-rosa',      name: 'Mini Rosa',      collection: 'blossom', image: 'assets/collections/blossom/vela-mini-rosa.webp',      desc: 'Rosinha em cera com acabamento artesanal.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 25  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 240 } ] },

    /* Ocean */
    { id: 'mini-margarida', name: 'Mini Margarida', collection: 'ocean',   image: 'assets/collections/ocean/vela-mini-margarida.webp',  desc: 'Margaridinha delicada, perfeita para lembrancinhas.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 9   }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 160 } ] },
    { id: 'mini-ocean',     name: 'Mini Ocean',     collection: 'ocean',   image: 'assets/collections/ocean/vela-mini-ocean.webp',      desc: 'Mini vela gel com conchas e areia real.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 16  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 150 } ] },
    { id: 'ocean-premium',  name: 'Ocean Premium',  collection: 'ocean',   image: 'assets/collections/ocean/vela-ocean-premium.webp',   desc: 'Vela gel premium, disponível em três gramaturas.',
      variants: [ { id: 'g70',   label: '70G',  price: 35 }, { id: 'g150', label: '150G', price: 48 }, { id: 'g250', label: '250G', price: 55 } ] },

    /* Calm */
    { id: 'calm',           name: 'Vela Calm',      collection: 'calm',    image: 'assets/collections/calm/vela-calm.webp',             desc: 'Aroma relaxante para momentos de paz.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 26  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 270 } ] },
    { id: 'mini-calm',      name: 'Mini Calm',      collection: 'calm',    image: 'assets/collections/calm/vela-mini-calm.webp',        desc: 'Versão mini da linha relaxante.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 13  }, { id: 'kit20', label: 'Kit 20 und + personalização', price: 250 } ] },

    /* Love */
    { id: 'love',           name: 'Vela Love',      collection: 'love',    image: 'assets/collections/love/vela-love.webp',             desc: 'Aroma envolvente para momentos especiais.',
      variants: [ { id: 'g150', label: '150G', price: 35 }, { id: 'g250', label: '250G', price: 47 } ] },
    { id: 'dois-coracoes',  name: 'Dois Corações',  collection: 'love',    image: 'assets/collections/love/vela-dois-coracoes.webp',    desc: 'Dois corações de cera que derretem ao calor.',
      variants: [ { id: 'g150', label: '150G', price: 25 }, { id: 'g250', label: '250G', price: 47 } ] },
    { id: 'buque-premium',  name: 'Buquê Premium',  collection: 'love',    image: 'assets/collections/love/vela-buque-premium.webp',    desc: 'Buquê premium em gramaturas especiais.',
      variants: [ { id: 'g150', label: '150G', price: 33 }, { id: 'g250', label: '250G', price: 45 } ] },

    /* Encanto */
    { id: 'leao',           name: 'Leãozinho',      collection: 'encanto', image: 'assets/collections/encanto/vela-leao.webp',          desc: 'Lembrancinha colorida para festas infantis.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 12  }, { id: 'kit30', label: 'Kit 30 und',                 price: 300 } ] },
    { id: 'urso-premium',   name: 'Urso Premium',   collection: 'encanto', image: 'assets/collections/encanto/vela-urso-premium.webp',  desc: 'Ursinho premium em copo de vidro personalizado.',
      variants: [ { id: 'unid',  label: 'Unidade',                     price: 30  }, { id: 'kit10', label: 'Kit 10 und + personalização', price: 290 } ] },

    /* Golden */
    { id: 'golden',         name: 'Vela Golden',    collection: 'golden',  image: 'assets/collections/golden/vela-golden.webp',         desc: 'Acabamento metálico em tons âmbar.',
      variants: [ { id: 'g150', label: '150G', price: 36 } ] },

    /* Latte */
    { id: 'latte',          name: 'Vela Latte',     collection: 'latte',   image: 'assets/collections/latte/vela-latte.webp',           desc: 'Camadas inspiradas em café especial.',
      variants: [ { id: 'g250', label: '250G', price: 48 } ] }
  ];

  var WHATSAPP_NUMBER = '5592994365884';
  var STORAGE_KEY     = 'allume-fleur-cart';
  var KEY_SEP         = '|'; /* formato da chave: "productId|variantId|Aroma" */


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


  /* ── Formatadores BRL ───────────────────────── */

  var BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  var NUM = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function formatBRL(v) { return BRL.format(v); }
  function formatNum(v) { return NUM.format(v); }


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

  function buildKey(productId, variantId, aroma) {
    return [productId, variantId, aroma].join(KEY_SEP);
  }

  function parseKey(key) {
    var p = String(key).split(KEY_SEP);
    return { productId: p[0], variantId: p[1], aroma: p[2] };
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

  function escapeHtml(str) { /* XSS prevention */
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* Remove entradas do localStorage incompatíveis com o catálogo atual */
  function sanitizeCart() {
    var changed = false;
    Object.keys(state.cart).forEach(function (key) {
      var k = parseKey(key);
      var p = getProductById(k.productId);
      var v = p ? getVariantById(p, k.variantId) : null;
      if (!p || !v || AROMAS.indexOf(k.aroma) === -1 || !(state.cart[key] > 0)) {
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


  /* ── Grade de Produtos ───────────────────────── */

  function renderProducts() {
    var filtered = state.activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(function (p) { return p.collection === state.activeCategory; });

    var label = filtered.length === 1 ? 'produto' : 'produtos';
    els.shopResult.innerHTML = '<strong>' + filtered.length + '</strong> ' + label
      + (state.activeCategory === 'all'
          ? ''
          : ' na coleção <strong>' + getCollectionLabel(state.activeCategory) + '</strong>');

    if (filtered.length === 0) {
      els.productGrid.innerHTML = '';
      els.productEmpty.hidden = false;
      return;
    }
    els.productEmpty.hidden = true;

    var aromaOptions = AROMAS.map(function (a) {
      return '<option value="' + escapeHtml(a) + '">' + escapeHtml(a) + '</option>';
    }).join('');

    var html = filtered.map(function (p) {
      var defaultVariant = p.variants[0];
      var variantOptions = p.variants.map(function (v) {
        return '<option value="' + escapeHtml(v.id) + '">'
          + escapeHtml(v.label) + ' — ' + formatBRL(v.price) + '</option>';
      }).join('');
      var qty = state.cart[buildKey(p.id, defaultVariant.id, AROMAS[0])] || 0;

      return '<article class="product-card" data-product-id="' + p.id + '">'
        + '<div class="product-image">'
        +   '<img src="' + p.image + '" alt="' + escapeHtml(p.name) + '" loading="lazy" />'
        +   '<span class="product-collection">' + getCollectionLabel(p.collection) + '</span>'
        + '</div>'
        + '<div class="product-body">'
        +   '<h3 class="product-name">' + escapeHtml(p.name) + '</h3>'
        +   '<p class="product-desc">' + escapeHtml(p.desc) + '</p>'
        +   '<div class="product-variants">'
        +     '<label class="variant-field">'
        +       '<span class="variant-label-text">Aroma</span>'
        +       '<select class="aroma-select" aria-label="Escolha o aroma">' + aromaOptions + '</select>'
        +     '</label>'
        +     '<label class="variant-field">'
        +       '<span class="variant-label-text">Tamanho / Kit</span>'
        +       '<select class="variant-select" aria-label="Escolha o tamanho ou kit">' + variantOptions + '</select>'
        +     '</label>'
        +   '</div>'
        +   '<div class="product-action' + (qty > 0 ? ' is-adding' : '') + '">'
        +     '<button class="btn-add" type="button" data-action="add">'
        +       '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>'
        +       'Adicionar'
        +     '</button>'
        +     '<div class="qty-stepper" role="group" aria-label="Quantidade">'
        +       '<button type="button" data-action="dec" aria-label="Diminuir">−</button>'
        +       '<span class="qty-value">' + qty + '</span>'
        +       '<button type="button" data-action="inc" aria-label="Aumentar">+</button>'
        +     '</div>'
        +   '</div>'
        + '</div>'
        + '</article>';
    }).join('');

    els.productGrid.innerHTML = html;
  }

  function getCardKey(card) {
    return buildKey(
      card.getAttribute('data-product-id'),
      card.querySelector('.variant-select').value,
      card.querySelector('.aroma-select').value
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
        if (!p) return '';
        var v = getVariantById(p, k.variantId);
        if (!v) return '';
        var qty = state.cart[key];
        return '<li class="cart-item" data-cart-key="' + escapeHtml(key) + '">'
          + '<div class="cart-item-image"><img src="' + p.image + '" alt="' + escapeHtml(p.name) + '" /></div>'
          + '<div class="cart-item-info">'
          +   '<div class="cart-item-name">'    + escapeHtml(p.name)  + '</div>'
          +   '<div class="cart-item-variant">' + escapeHtml(v.label) + ' · Aroma: ' + escapeHtml(k.aroma) + '</div>'
          +   '<div class="cart-item-price">'   + formatBRL(v.price)  + '</div>'
          + '</div>'
          + '<div class="cart-item-controls">'
          +   '<div class="cart-stepper">'
          +     '<button type="button" data-cart-action="dec" aria-label="Diminuir">−</button>'
          +     '<span class="qty-value">' + qty + '</span>'
          +     '<button type="button" data-cart-action="inc" aria-label="Aumentar">+</button>'
          +   '</div>'
          +   '<button type="button" class="cart-item-remove" data-cart-action="remove">Remover</button>'
          + '</div>'
          + '</li>';
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
      var qty      = state.cart[key];
      var subtotal = v.price * qty;
      total += subtotal;
      lines.push(p.name + ' - ' + v.label + ' (' + k.aroma + ')');
      lines.push(qty + ' un. × R$ ' + formatNum(v.price) + ' = R$ ' + formatNum(subtotal));
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
