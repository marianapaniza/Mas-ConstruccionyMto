/**
 * LÓGICA INTEGRAL DEL CARRITO - MAS+ CONSTRUCCIÓN
 */

// 1. Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// 2. Añadir al carrito (Corregido: captura el precio)
function addToCart(id) {
    const card = document.querySelector(`.card[data-id="${id}"]`);
    if (!card) {
        console.error("No se encontró la tarjeta con id:", id);
        return;
    }

    // Obtenemos el precio del elemento .card-price y lo limpiamos
    const priceText = card.querySelector('.card-price').innerText;
    const price = parseFloat(priceText.replace(/[^0-9]/g, '')) || 0;

    const service = {
        id: id,
        name: card.querySelector('.card-name').innerText,
        price: price
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar si ya existe
    if (!cart.find(item => item.id == id)) {
        cart.push(service);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(service.name + " agregado a la solicitud.");
    } else {
        alert("Este servicio ya está en tu lista.");
    }
}

// 3. Renderizar el Sidebar
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cartItems');
    const totalElement = document.getElementById('cartTotal');
    
    container.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price; // Ahora item.price existe
        container.innerHTML += `
            <div class="cart-item">
                <p><strong>${item.name}</strong></p>
                <p>Precio: $${item.price.toLocaleString()}</p>
                <button onclick="removeFromCart('${item.id}')">Eliminar</button>
            </div>
        `;
    });

    if (totalElement) totalElement.innerText = '$' + total.toLocaleString();
}

// 4. Funciones de Control
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const badge = document.getElementById('cartBadge');
    if (badge) badge.innerText = cart.length;
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id != id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    renderCart();
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
}

// 5. Envío de Solicitud (Formspree)
function sendSolicitud() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    const listaServicios = cart.map(item => item.name).join(', ');
    const total = document.getElementById('cartTotal').innerText;

    document.getElementById('cartDataInput').value = listaServicios;
    document.getElementById('totalDataInput').value = total;

    document.getElementById('cartForm').submit();
}
// Función para añadir al carrito
function addToCart(id) {
    const card = document.querySelector(`.card[data-id="${id}"]`);
    const name = card.querySelector('.card-name').innerText;
    // Captura el valor numérico del precio
    const price = parseFloat(card.querySelector('.price').innerText);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (!cart.find(item => item.id == id)) {
        cart.push({ id, name, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(name + " agregado a la solicitud.");
    } else {
        alert("Este servicio ya está en tu lista.");
    }
}

// Función para enviar solicitud a Formspree
function sendSolicitud() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert("Tu solicitud está vacía.");
        return;
    }

    // Calcula el total sumando los precios
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const nombres = cart.map(item => item.name).join(', ');

    // Asigna los valores a los inputs ocultos del formulario
    document.getElementById('cartDataInput').value = nombres;
    document.getElementById('totalDataInput').value = '$' + total.toLocaleString();

    // Envía el formulario
    document.getElementById('cartForm').submit();
}
