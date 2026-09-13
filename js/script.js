/**
 * Taquería La Hacienda - Script Principal
 * Carrito de compras, menú dinámico, WhatsApp y validaciones
 */

// ===== PRODUCTOS DEL MENÚ =====
const products = [
    // TACOS
    {
        id: 'taco-trompo-orden',
        category: 'tacos',
        name: 'Trompo - Orden',
        price: 75,
        emoji: '🌮',
        image: 'images/tacos-trompo.jpg',
        hasVariants: false
    },
    {
        id: 'taco-trompo-ind',
        category: 'tacos',
        name: 'Trompo - Taco individual',
        price: 17,
        emoji: '🌮',
        image: 'images/tacotrompoind.jpg',
        hasVariants: false
    },
    {
        id: 'taco-trompo-queso-orden',
        category: 'tacos',
        name: 'Trompo con Queso - Orden',
        price: 85,
        emoji: '🌮',
        image: 'images/gringa-queso.jpg',
        hasVariants: false
    },
    {
        id: 'taco-trompo-queso-ind',
        category: 'tacos',
        name: 'Trompo con Queso - Taco individual',
        price: 20,
        emoji: '🌮',
        image: 'images/tacoquesoind.jpg',
        hasVariants: false
    },
    {
        id: 'taco-bistek-orden',
        category: 'tacos',
        name: 'Bistek - Orden',
        price: 85,
        emoji: '🌮',
        image: 'images/orden-bistek.jpg',
        hasVariants: false
    },
    {
        id: 'taco-bistek-ind',
        category: 'tacos',
        name: 'Bistek - Taco individual',
        price: 19,
        emoji: '🌮',
        image: 'images/tacobistek.jpg',
        hasVariants: false
    },
    {
        id: 'taco-bistek-queso-orden',
        category: 'tacos',
        name: 'Bistek con Queso - Orden',
        price: 95,
        emoji: '🌮',
        image: 'images/gringa-queso.jpg',
        hasVariants: false
    },
    {
        id: 'taco-bistek-queso-ind',
        category: 'tacos',
        name: 'Bistek con Queso - Taco individual',
        price: 22,
        emoji: '🌮',
        image: 'images/gringa-queso.jpg',
        hasVariants: false
    },
    {
        id: 'taco-campechana',
        category: 'tacos',
        name: 'Campechana',
        price: 0,
        emoji: '🌮',
        image: 'images/campechana.jpg',
        hasVariants: true,
        variants: [
            { id: 'chica', label: 'Chica', price: 68 },
            { id: 'grande', label: 'Grande', price: 85 }
        ]
    },
    {
        id: 'taco-gringa',
        category: 'tacos',
        name: 'Gringa',
        price: 0,
        emoji: '🌮',
        image: 'images/gringa.jpg',
        hasVariants: true,
        variants: [
            { id: 'chica', label: 'Chica', price: 65 },
            { id: 'grande', label: 'Grande', price: 80 }
        ]
    },
    {
        id: 'taco-piarata',
        category: 'tacos',
        name: 'Pirata',
        price: 0,
        emoji: '🌮',
        image: 'images/pirata.jpg',
        hasVariants: true,
        variants: [
            { id: 'chico', label: 'Chico', price: 80 },
            { id: 'grande', label: 'Grande', price: 90 }
        ]
    },

    // HAMBURGUESAS
    {
        id: 'hamb-especial',
        category: 'hamburguesas',
        name: 'Hamburguesa Especial',
        price: 70,
        emoji: '🍔',
        image: 'images/especial.jpg',
        hasVariants: false
    },
    {
        id: 'hamb-doble',
        category: 'hamburguesas',
        name: 'Hamburguesa Doble',
        price: 85,
        emoji: '🍔',
        image: 'images/hamburguesa-2.jpg',
        hasVariants: false
    },
    {
        id: 'hamb-trompo',
        category: 'hamburguesas',
        name: 'Trompoburguer',
        price: 85,
        emoji: '🍔',
        image: 'images/hamburguesa-trompo.jpg',
        hasVariants: false
    },
    {
        id: 'hamb-salchi',
        category: 'hamburguesas',
        name: 'Salchiburguer',
        price: 85,
        emoji: '🍔',
        image: 'images/salchiburger.jpg',
        hasVariants: false
    },
    {
        id: 'hamb-bistek',
        category: 'hamburguesas',
        name: 'Hamburguesa con Bistek',
        price: 90,
        emoji: '🍔',
        image: 'images/hamburguesa-3.jpg',
        hasVariants: false
    },

    // PAPAS ASADAS
    {
        id: 'papa-asada-sin',
        category: 'papas',
        name: 'Papa Asada sin Queso',
        price: 70,
        emoji: '🥔',
        image: 'images/papa-asada.jpg',
        hasVariants: false
    },
    {
        id: 'papa-asada-queso',
        category: 'papas',
        name: 'Papa Asada con Queso',
        price: 80,
        emoji: '🥔',
        image: 'images/papa-asada.jpg',
        hasVariants: false
    },
    {
        id: 'papa-asada-carne',
        category: 'papas',
        name: 'Papa Asada con Carne',
        price: 95,
        emoji: '🥔',
        image: 'images/papa-mixta.jpg',
        hasVariants: true,
        variants: [
            { id: 'trompo', label: 'Trompo', price: 95 },
            { id: 'bistek', label: 'Bistek', price: 95 },
            { id: 'mixta', label: 'Mixta', price: 95 }
        ],
        variantLabel: 'Elige tu carne'
    },
    {
        id: 'papa-galeana',
        category: 'papas',
        name: 'Papa Galeana',
        price: 0,
        emoji: '🥔',
        image: 'images/papa-asada.jpg',
        hasVariants: true,
        variants: [
            { id: 'chica', label: 'Chica', price: 40 },
            { id: 'grande', label: 'Grande', price: 60 }
        ]
    },
    {
        id: 'papa-galeana-queso',
        category: 'papas',
        name: 'Papa Galeana con Queso',
        price: 0,
        emoji: '🥔',
        image: 'images/papa-asada.jpg',
        hasVariants: true,
        variants: [
            { id: 'chica', label: 'Chica', price: 45 },
            { id: 'grande', label: 'Grande', price: 65 }
        ]
    },
    {
        id: 'papa-galeana-carne',
        category: 'papas',
        name: 'Papa Galeana con Carne',
        price: 0,
        emoji: '🥔',
        image: 'images/papa-mixta.jpg',
        hasVariants: true,
        variants: [
            { id: 'chica', label: 'Chica', price: 60 },
            { id: 'grande', label: 'Grande', price: 80 }
        ]
    },
    {
        id: 'papas-francesa',
        category: 'papas',
        name: 'Papas a la Francesa',
        price: 45,
        emoji: '🍟',
        image: 'images/papasfrancesa.jpg',
        hasVariants: false
    },
    {
        id: 'papas-francesa-queso',
        category: 'papas',
        name: 'Papas a la Francesa con Queso',
        price: 55,
        emoji: '🍟',
        image: 'images/papasqueso.jpg',
        hasVariants: false
    },

    // TORTAS
    {
        id: 'torta',
        category: 'tortas',
        name: 'Torta de Bistek, Trompo o Mixta',
        price: 110,
        emoji: '🥪',
        image: 'images/torta.jpg',
        hasVariants: true,
        variants: [
            { id: 'bistek', label: 'Bistek', price: 110 },
            { id: 'trompo', label: 'Trompo', price: 110 },
            { id: 'mixta', label: 'Mixta', price: 110 }
        ],
        variantLabel: 'Elige tu carne'
    },

    // FRIJOLES CHARROS
    {
        id: 'frijoles-sencillos',
        category: 'frijoles',
        name: 'Frijoles Charros Sencillos (1/2 Litro)',
        price: 35,
        emoji: '🫘',
        image: 'images/frijoles.jpg',
        hasVariants: false
    },
    {
        id: 'frijoles-preparados',
        category: 'frijoles',
        name: 'Frijoles Charros Preparados (1/2 Litro)',
        price: 47,
        emoji: '🫘',
        image: 'images/frijoles-2.jpg',
        hasVariants: true,
        variants: [
            { id: 'bistek', label: 'Bistek', price: 47 },
            { id: 'trompo', label: 'Trompo', price: 47 }
        ],
        variantLabel: 'Elige tu carne'
    },

    // REFRESCOS
    {
        id: 'refresco-600',
        category: 'refrescos',
        name: 'Refresco 600 ml',
        price: 28,
        emoji: '🥤',
        image: 'images/600ml.jpg',
        hasVariants: false
    },
    {
        id: 'pepsi-15',
        category: 'refrescos',
        name: 'Pepsi 1.5 L',
        price: 35,
        emoji: '🥤',
        image: 'images/pepsi.jpg',
        hasVariants: false
    }
];

// ===== ESTADO DEL CARRITO =====
let cart = [];
const SHIPPING_COST = 30;
const WHATSAPP_NUMBER = '528119047379';

/*
 * ============================================================
 *  BANNER DE TEMPORADA — edita aquí cada mes / evento
 *  months: array de meses (1 = enero … 12 = diciembre)
 *  Si varios coinciden, gana el primero de la lista.
 *  active: false → no se muestra aunque el mes coincida
 * ============================================================
 */
const SEASONAL_EVENTS = [
    {
        id: 'patrio',
        months: [9],
        active: true,
        theme: 'theme-patrio',
        emoji: '🇲🇽',
        title: '¡Mes Patrio!',
        message: 'Celebra septiembre con el sabor de la tradición mexicana. ¡Viva México!',
        cta: 'Ver menú especial',
        ctaLink: '#promociones'
    },
    {
        id: 'halloween',
        months: [10],
        active: true,
        theme: 'theme-halloween',
        emoji: '🎃',
        title: 'Halloween en La Hacienda',
        message: 'Pedidos con sabor de miedo… bueno, de antojo. ¡Aprovecha el mes!',
        cta: 'Pedir ahora',
        ctaLink: '#promociones'
    },
    {
        id: 'muertos',
        months: [11],
        // Día de Muertos suele ser inicio de noviembre; puedes dejarlo todo el mes
        active: true,
        theme: 'theme-muertos',
        emoji: '🕯️',
        title: 'Día de Muertos',
        message: 'Honramos la tradición con tacos que saben a casa y a México.',
        cta: 'Ver ofertas',
        ctaLink: '#promociones'
    },
    {
        id: 'navidad',
        months: [12],
        active: true,
        theme: 'theme-navidad',
        emoji: '🎄',
        title: 'Navidad en La Hacienda',
        message: 'Comparte la mesa con los tuyos. Pedidos para reuniones y cenas especiales.',
        cta: 'Armar pedido',
        ctaLink: '#promociones'
    },
    {
        id: 'anio-nuevo',
        months: [1],
        active: true,
        theme: 'theme-anio-nuevo',
        emoji: '🎆',
        title: 'Año Nuevo',
        message: 'Empieza el año con el mejor sabor. ¡Pedidos listos para celebrar!',
        cta: 'Ver menú',
        ctaLink: '#menu'
    },
    {
        id: 'amor',
        months: [2],
        active: true,
        theme: 'theme-amor',
        emoji: '💕',
        title: 'Día del Amor y la Amistad',
        message: 'El mejor regalo: tacos para dos (o para toda la familia).',
        cta: 'Pedir para compartir',
        ctaLink: '#promociones'
    },
    {
        id: 'madre',
        months: [5],
        active: true,
        theme: 'theme-madre',
        emoji: '💐',
        title: 'Día de las Madres',
        message: 'Este mes celebramos a mamá con el sabor de siempre.',
        cta: 'Regálale un pedido',
        ctaLink: '#promociones'
    },
    {
        id: 'padre',
        months: [6],
        active: true,
        theme: 'theme-padre',
        emoji: '👔',
        title: 'Día del Padre',
        message: 'Para el jefe de la casa: órdenes generosas y mucho sabor.',
        cta: 'Ver paquetes',
        ctaLink: '#promociones'
    }
    // Para forzar un aviso fuera de temporada, agrega months: [1,2,3...] y active: true
];

// ===== DOM ELEMENTS =====
const menuGrid = document.getElementById('menuGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const toast = document.getElementById('toast');

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderMenu('all');
    renderModalMenu('all');
    setupEventListeners();
    updateOpenStatus();
    setInterval(updateOpenStatus, 60000); // cada minuto
    initScrollAnimations();
    initActiveNavOnScroll();
    initLightbox();
    initOrderTabs();
    initSeasonalBanner();
});

// ===== RENDER MENÚ =====
function renderMenu(category) {
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    menuGrid.innerHTML = filtered.map((product, index) => {
        const delay = Math.min(index * 0.06, 0.5);
        
        let variantsHTML = '';
        if (product.hasVariants) {
            const label = product.variantLabel || 'Tamaño';
            variantsHTML = `
                <div class="product-variants">
                    <label class="variant-label">${label}</label>
                    <select class="variant-select" data-product-id="${product.id}">
                        ${product.variants.map(v => 
                            `<option value="${v.id}" data-price="${v.price}">${v.label} — $${v.price}</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        }
        
        const displayPrice = product.hasVariants 
            ? `Desde $${Math.min(...product.variants.map(v => v.price))}`
            : `$${product.price}`;
        
        const imageHTML = product.image
            ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
            : product.emoji;
        
        return `
            <article class="product-card" style="animation-delay: ${delay}s" data-category="${product.category}">
                <div class="product-image">${imageHTML}</div>
                <div class="product-body">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${displayPrice}</div>
                    ${variantsHTML}
                    <div class="product-actions">
                        <button class="btn btn-primary btn-sm btn-block add-to-cart" 
                                data-id="${product.id}"
                                data-name="${product.name}"
                                data-price="${product.price}"
                                data-has-variants="${product.hasVariants}">
                            + Agregar
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
    
    // Attach add-to-cart listeners (menú + promociones)
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.removeEventListener('click', handleAddToCart);
        btn.addEventListener('click', handleAddToCart);
    });
}

// ===== ADD TO CART =====
function handleAddToCart(e) {
    const btn = e.currentTarget;
    const id = btn.dataset.id;
    const product = products.find(p => p.id === id);
    
    let name, price, variant = null, category = 'menu';
    
    if (product) {
        name = product.name;
        price = product.price;
        category = product.category;
        
        if (product.hasVariants) {
            const select = btn.closest('.product-body')?.querySelector('.variant-select');
            if (select) {
                const selectedOption = select.options[select.selectedIndex];
                variant = selectedOption.value;
                const variantData = product.variants.find(v => v.id === variant);
                price = variantData.price;
                name = `${product.name} (${variantData.label})`;
            }
        }
    } else if (btn.dataset.name && btn.dataset.price) {
        // Promociones u otros botones con data attributes
        name = btn.dataset.name;
        price = parseInt(btn.dataset.price, 10);
        category = btn.dataset.category || 'promociones';
    } else {
        return;
    }
    
    // Unique key for cart item (id + variant)
    const cartKey = variant ? `${id}-${variant}` : id;
    
    const existing = cart.find(item => item.cartKey === cartKey);
    
    if (existing) {
        existing.quantity += 1;
        existing.subtotal = existing.quantity * existing.price;
    } else {
        cart.push({
            cartKey,
            id,
            name,
            price,
            variant,
            quantity: 1,
            subtotal: price,
            category
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${name} agregado al carrito`);
    
    // Bounce animation
    cartBtn.classList.add('bounce');
    setTimeout(() => cartBtn.classList.remove('bounce'), 400);
}

// ===== CART OPERATIONS =====
function updateQuantity(cartKey, delta) {
    const item = cart.find(i => i.cartKey === cartKey);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(cartKey);
        return;
    }
    
    item.subtotal = item.quantity * item.price;
    saveCart();
    updateCartUI();
}

function removeFromCart(cartKey) {
    cart = cart.filter(i => i.cartKey !== cartKey);
    saveCart();
    updateCartUI();
    showToast('Producto eliminado');
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
    showToast('Carrito vaciado');
}

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + item.subtotal, 0);
}

function calculateShipping() {
    const modality = document.querySelector('input[name="modality"]:checked');
    return (modality && modality.value === 'domicilio') ? SHIPPING_COST : 0;
}

function calculateTotal() {
    return calculateSubtotal() + calculateShipping();
}

// ===== UPDATE CART UI =====
function updateCartUI() {
    const count = cart.reduce((sum, i) => sum + i.quantity, 0);
    cartCount.textContent = count;
    
    const tabCount = document.getElementById('tabCartCount');
    if (tabCount) tabCount.textContent = count;
    
    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartItems) cartItems.innerHTML = '';
    } else {
        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartItems) {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
                        <div class="cart-item-price">$${item.price} c/u · $${item.subtotal}</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity('${item.cartKey}', -1)" aria-label="Disminuir">−</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity('${item.cartKey}', 1)" aria-label="Aumentar">+</button>
                        <button class="remove-btn" onclick="removeFromCart('${item.cartKey}')" aria-label="Eliminar">🗑️</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    updateSummary();
}

function updateSummary() {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const total = subtotal + shipping;
    
    const subEl = document.getElementById('subtotalAmount');
    const totEl = document.getElementById('totalAmount');
    const footerTot = document.getElementById('footerTotal');
    
    if (subEl) subEl.textContent = `$${subtotal}`;
    if (totEl) totEl.textContent = `$${total}`;
    if (footerTot) footerTot.textContent = `$${total}`;
    
    const shippingRow = document.getElementById('shippingRow');
    if (shippingRow) {
        if (shipping > 0) {
            shippingRow.style.display = 'flex';
            const shipAmt = document.getElementById('shippingAmount');
            if (shipAmt) shipAmt.textContent = `$${shipping}`;
        } else {
            shippingRow.style.display = 'none';
        }
    }
    
    const summaryLines = document.getElementById('summaryLines');
    if (summaryLines) {
        summaryLines.innerHTML = cart.length
            ? cart.map(item => `
                <div class="summary-line">
                    <span>${item.quantity}x ${item.name}</span>
                    <span>$${item.subtotal}</span>
                </div>
            `).join('')
            : '<p style="color:var(--color-gray);font-size:0.85rem;">Sin productos aún</p>';
    }
}

// ===== LOCAL STORAGE =====
function saveCart() {
    localStorage.setItem('taqueria_cart', JSON.stringify(cart));
}

function loadCart() {
    try {
        const saved = localStorage.getItem('taqueria_cart');
        if (saved) {
            cart = JSON.parse(saved);
            updateCartUI();
        }
    } catch (e) {
        cart = [];
    }
}

// ===== WHATSAPP MESSAGE =====
function generateWhatsAppMessage() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const modality = document.querySelector('input[name="modality"]:checked');
    const payment = document.querySelector('input[name="payment"]:checked');
    
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const total = subtotal + shipping;
    
    let message = `¡Hola Taquería La Hacienda! 🌮\n\n`;
    message += `Quiero realizar el siguiente pedido:\n\n`;
    message += `*PEDIDO*\n`;
    
    cart.forEach(item => {
        message += `${item.quantity}x ${item.name} — $${item.subtotal}\n`;
    });
    
    message += `\n*Subtotal:* $${subtotal}\n`;
    
    if (shipping > 0) {
        message += `*Envío:* $${shipping}\n`;
    }
    
    message += `*TOTAL:* $${total}\n\n`;
    
    message += `*DATOS DEL CLIENTE*\n`;
    message += `Nombre: ${name}\n`;
    message += `Teléfono: ${phone}\n`;
    
    if (modality && modality.value === 'domicilio') {
        message += `Dirección: ${address}\n`;
        message += `Modalidad: A domicilio 🚚\n`;
    } else {
        message += `Modalidad: Pasar a recoger 🛍️\n`;
    }
    
    if (payment) {
        const payLabel = payment.value === 'efectivo' ? 'Efectivo 💵' : 'Transferencia 🏦';
        message += `Forma de pago: ${payLabel}\n`;
    }
    
    message += `\n¡Gracias!`;
    
    return message;
}

function sendWhatsAppOrder() {
    // Validations
    if (cart.length === 0) {
        showToast('Agrega productos al carrito', true);
        return;
    }
    
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const modality = document.querySelector('input[name="modality"]:checked');
    const payment = document.querySelector('input[name="payment"]:checked');
    
    let hasError = false;
    
    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    
    if (!name) {
        document.getElementById('customerName').classList.add('error');
        hasError = true;
    }
    
    if (!phone || phone.replace(/\D/g, '').length < 10) {
        document.getElementById('customerPhone').classList.add('error');
        hasError = true;
    }
    
    if (!modality) {
        showToast('Selecciona cómo recibir tu pedido', true);
        hasError = true;
    }
    
    if (modality && modality.value === 'domicilio' && !address) {
        document.getElementById('customerAddress').classList.add('error');
        showToast('Ingresa tu dirección para domicilio', true);
        hasError = true;
    }
    
    if (!payment) {
        showToast('Selecciona forma de pago', true);
        hasError = true;
    }
    
    if (hasError) {
        if (!name || !phone) showToast('Completa los datos obligatorios', true);
        return;
    }
    
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    
    window.open(url, '_blank');
}

// ===== OPEN STATUS =====
function updateOpenStatus() {
    const badge = document.getElementById('statusBadge');
    const now = new Date();
    const day = now.getDay(); // 0=Dom, 1=Lun ... 6=Sab
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentMinutes = hours * 60 + minutes;
    
    // Horarios:
    // Dom-Jue (0-4): 17:00 - 01:00 (cierra después de medianoche)
    // Vie-Sab (5-6): 17:00 - 02:00
    
    let isOpen = false;
    
    // Convertir a minutos desde medianoche
    // Abre a las 17:00 = 1020 min
    // Cierra Dom-Jue a 01:00 = 60 min (del día siguiente)
    // Cierra Vie-Sab a 02:00 = 120 min
    
    if (day >= 0 && day <= 4) {
        // Dom-Jue: abierto de 17:00 a 01:00
        // Si es después de 17:00 del mismo día, o antes de 01:00
        if (currentMinutes >= 1020 || currentMinutes < 60) {
            isOpen = true;
        }
    } else {
        // Vie-Sab: 17:00 a 02:00
        if (currentMinutes >= 1020 || currentMinutes < 120) {
            isOpen = true;
        }
    }
    
    // Caso especial: si son las 00:xx - 01:xx de un día, el horario pertenece al día anterior
    // La lógica anterior ya lo contempla porque currentMinutes < 60 o < 120
    
    if (badge) {
        if (isOpen) {
            badge.className = 'status-badge open';
            badge.innerHTML = '<span class="status-dot"></span><span class="status-text">🟢 ABIERTO</span>';
        } else {
            badge.className = 'status-badge closed';
            badge.innerHTML = '<span class="status-dot"></span><span class="status-text">🔴 CERRADO</span>';
        }
    }

    // Banner dentro del modal de pedido
    const banner = document.getElementById('orderStatusBanner');
    if (banner) {
        if (isOpen) {
            banner.className = 'order-status-banner open';
            banner.textContent = '🟢 Estamos abiertos. Puedes armar y confirmar tu pedido ahora.';
        } else {
            banner.className = 'order-status-banner';
            banner.textContent = '😴 Estamos cerrados ahora mismo. Puedes armar tu pedido y lo confirmaremos al abrir (5:00 PM).';
        }
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.category);
        });
    });
    
    // Cart open/close
    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    // Mobile menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Modality change
    document.querySelectorAll('input[name="modality"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const addressGroup = document.getElementById('addressGroup');
            if (radio.value === 'domicilio') {
                addressGroup.style.display = 'block';
            } else {
                addressGroup.style.display = 'none';
            }
            updateSummary();
        });
    });
    
    // Payment change
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const note = document.getElementById('transferNote');
            if (note) note.style.display = radio.value === 'transferencia' ? 'block' : 'none';
        });
    });
    
    // Confirm order
    document.getElementById('confirmOrder')?.addEventListener('click', () => {
        // Si faltan datos, ir a pestaña Datos
        switchOrderTab('datos');
        sendWhatsAppOrder();
    });
    
    // Clear cart
    document.getElementById('clearCart')?.addEventListener('click', () => {
        if (confirm('¿Vaciar todo el pedido?')) {
            clearCart();
        }
    });
    
    // Botones de Tlaquepaque, Promociones y dentro del modal
    document.querySelectorAll('.tlaquepaque .add-to-cart, .promociones .add-to-cart, .order-modal .add-to-cart').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    // Filtros del menú dentro del modal
    document.querySelectorAll('.modal-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderModalMenu(btn.dataset.cat);
        });
    });
}

let _scrollLockY = 0;

function openCart() {
    _scrollLockY = window.scrollY || window.pageYOffset;
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    // Bloqueo de scroll robusto en iOS/Android
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${_scrollLockY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    const waFloat = document.querySelector('.whatsapp-float');
    if (waFloat) waFloat.style.visibility = 'hidden';
    updateOpenStatus();
    cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    window.scrollTo(0, _scrollLockY);
    const waFloat = document.querySelector('.whatsapp-float');
    if (waFloat) waFloat.style.visibility = '';
    cartDrawer.setAttribute('aria-hidden', 'true');
}

function showToast(message, isError = false) {
    toast.textContent = message;
    toast.className = 'toast show' + (isError ? ' error' : '');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// Make functions available globally for onclick
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

// ===== ANIMACIONES AL SCROLL (Intersection Observer) =====
function initScrollAnimations() {
    // Elementos que se animan al entrar en viewport
    const selectors = [
        '.section-header',
        '.stat-card',
        '.step',
        '.horario-card',
        '.contacto-item',
        '.tlaquepaque-card',
        '.promo-placeholder',
        '.nosotros-text',
        '.ubicacion',
        '.social-links',
        '.shipping-note'
    ];

    const elements = document.querySelectorAll(selectors.join(','));

    elements.forEach((el, i) => {
        el.classList.add('animate-on-scroll');
        // Alternar dirección para variedad visual
        if (el.classList.contains('stat-card') || el.classList.contains('step')) {
            // se maneja con stagger en el padre
        } else if (i % 3 === 1) {
            el.classList.add('from-left');
        } else if (i % 3 === 2) {
            el.classList.add('from-right');
        }
    });

    // Grupos con stagger
    document.querySelectorAll('.stats, .steps, .horarios-grid').forEach(group => {
        group.classList.add('stagger-children');
        group.querySelectorAll('.animate-on-scroll').forEach(child => {
            child.classList.remove('from-left', 'from-right');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: dejar de observar después de animar (mejor rendimiento)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===== NAV ACTIVO SEGÚN SCROLL =====
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: '-20% 0px -60% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

// ===== LIGHTBOX PROMOCIONES =====
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    if (!lightbox || !lightboxImg) return;

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || 'Promoción';
        lightbox.hidden = false;
        void lightbox.offsetWidth;
        lightbox.classList.add('active');
        // Solo bloquear body si el modal de pedido no está abierto
        if (!cartDrawer.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        if (!cartDrawer.classList.contains('active')) {
            document.body.style.overflow = '';
        }
        setTimeout(() => {
            if (!lightbox.classList.contains('active')) {
                lightbox.hidden = true;
                lightboxImg.src = '';
            }
        }, 300);
    }

    document.querySelectorAll('.lightbox-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const src = btn.dataset.full || btn.querySelector('img')?.src;
            const alt = btn.dataset.alt || btn.querySelector('img')?.alt || '';
            if (src) openLightbox(src, alt);
        });
    });

    lightboxClose?.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox.classList.contains('active')) {
                closeLightbox();
            } else if (cartDrawer.classList.contains('active')) {
                closeCart();
            }
        }
    });
}

// ===== TABS DEL MODAL DE PEDIDO =====
function initOrderTabs() {
    document.querySelectorAll('.order-tab').forEach(tab => {
        tab.addEventListener('click', () => switchOrderTab(tab.dataset.tab));
    });
    document.querySelectorAll('.switch-tab').forEach(btn => {
        btn.addEventListener('click', () => switchOrderTab(btn.dataset.tab));
    });
}

function switchOrderTab(tabId) {
    if (!tabId) return;

    document.querySelectorAll('.order-tab').forEach(tab => {
        const active = tab.dataset.tab === tabId;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        if (active) {
            // Centrar la pestaña activa en el scroll horizontal (móvil)
            tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });

    document.querySelectorAll('.order-panel').forEach(panel => {
        const active = panel.id === `panel-${tabId}`;
        panel.classList.toggle('active', active);
        if (active) {
            panel.hidden = false;
        } else {
            panel.hidden = true;
        }
    });

    // Volver arriba del contenido al cambiar de pestaña
    const body = document.querySelector('.order-modal-body');
    if (body) body.scrollTop = 0;
}

function renderModalMenu(category) {
    const list = document.getElementById('modalMenuList');
    if (!list) return;

    const filtered = category === 'all'
        ? products.filter(p => p.category !== 'refrescos')
        : products.filter(p => p.category === category);

    list.innerHTML = filtered.map(product => {
        let variantsHTML = '';
        if (product.hasVariants) {
            const label = product.variantLabel || 'Opción';
            variantsHTML = `
                <select class="modal-variant-select" data-product-id="${product.id}">
                    ${product.variants.map(v =>
                        `<option value="${v.id}" data-price="${v.price}">${v.label} — $${v.price}</option>`
                    ).join('')}
                </select>
            `;
        }

        const displayPrice = product.hasVariants
            ? `Desde $${Math.min(...product.variants.map(v => v.price))}`
            : `$${product.price}`;

        return `
            <div class="modal-product-row" data-id="${product.id}">
                <div class="modal-product-info">
                    <strong>${product.name}</strong>
                    <span class="modal-product-meta">${displayPrice}</span>
                    ${variantsHTML}
                </div>
                <span class="modal-product-price">${product.hasVariants ? '' : '$' + product.price}</span>
                <button class="btn btn-primary btn-sm modal-add-btn"
                        data-id="${product.id}"
                        data-name="${product.name}"
                        data-price="${product.price}"
                        data-has-variants="${product.hasVariants}">
                    ＋
                </button>
            </div>
        `;
    }).join('');

    list.querySelectorAll('.modal-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.id;
            const product = products.find(p => p.id === id);
            if (!product) return;

            let name = product.name;
            let price = product.price;
            let variant = null;

            if (product.hasVariants) {
                const select = btn.closest('.modal-product-row').querySelector('.modal-variant-select');
                if (select) {
                    const opt = select.options[select.selectedIndex];
                    variant = opt.value;
                    price = parseInt(opt.dataset.price, 10);
                    name = `${product.name} (${opt.textContent.split('—')[0].trim()})`;
                }
            }

            const cartKey = variant ? `${id}-${variant}` : id;
            const existing = cart.find(item => item.cartKey === cartKey);

            if (existing) {
                existing.quantity += 1;
                existing.subtotal = existing.quantity * existing.price;
            } else {
                cart.push({
                    cartKey,
                    id,
                    name,
                    price,
                    variant,
                    quantity: 1,
                    subtotal: price,
                    category: product.category
                });
            }

            saveCart();
            updateCartUI();
            showToast(`${name} agregado`);
            cartBtn.classList.add('bounce');
            setTimeout(() => cartBtn.classList.remove('bounce'), 400);
        });
    });
}

// ===== BANNER DE TEMPORADA =====
function initSeasonalBanner() {
    const banner = document.getElementById('seasonalBanner');
    if (!banner) return;

    const month = new Date().getMonth() + 1; // 1-12
    const event = SEASONAL_EVENTS.find(e => e.active && e.months.includes(month));

    // Si el usuario ya lo cerró este mes, no mostrar
    const dismissKey = event ? `seasonal_dismiss_${event.id}_${new Date().getFullYear()}_${month}` : null;
    if (event && dismissKey && localStorage.getItem(dismissKey) === '1') {
        banner.hidden = true;
        return;
    }

    if (!event) {
        banner.hidden = true;
        return;
    }

    banner.className = 'seasonal-banner ' + (event.theme || 'theme-default');
    document.getElementById('seasonalEmoji').textContent = event.emoji || '🎉';
    document.getElementById('seasonalTitle').textContent = event.title || '';
    document.getElementById('seasonalMessage').textContent = event.message || '';

    const cta = document.getElementById('seasonalCta');
    if (cta) {
        cta.textContent = event.cta || 'Ver ofertas';
        cta.href = event.ctaLink || '#promociones';
    }

    banner.hidden = false;

    document.getElementById('seasonalClose')?.addEventListener('click', () => {
        banner.hidden = true;
        if (dismissKey) localStorage.setItem(dismissKey, '1');
    });
}
