let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function renderCartItems() {
    const cartItemsSection = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsSection.innerHTML = ''; 
    
    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <h4>${item.name}</h4>
            <p>RS.${item.price}</p>
        `;
        cartItemsSection.appendChild(itemElement);
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

if (document.getElementById('cart-items')) {
    cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    renderCartItems();
}
if (document.getElementById('cart-count')) {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}
