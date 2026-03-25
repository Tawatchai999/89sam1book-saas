import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Vercel Speed Insights
injectSpeedInsights();

const products = {
    bundle_set: { name: "89 LAWS Complete Set (6 เล่ม)", price: 5900 }
};

let cart = JSON.parse(localStorage.getItem('cartData')) || [];

function toggleMode() { document.body.classList.toggle("light"); }

function addToCart(id) {
    const item = products[id];
    const index = cart.findIndex(c => c.id === id);
    if (index > -1) cart[index].qty++;
    else cart.push({ ...item, id: id, qty: 1 });
    save();
}

function render() {
    const list = document.getElementById('cart-list');
    const total = document.getElementById('total-price');
    if(!list) return;
    list.innerHTML = '';
    let sum = 0;
    cart.forEach(i => {
        sum += i.price * i.qty;
        list.innerHTML += `<p>${i.name} x${i.qty} - ${(i.price*i.qty).toLocaleString()}.-</p>`;
    });
    total.innerText = sum.toLocaleString();
}

function save() {
    localStorage.setItem('cartData', JSON.stringify(cart));
    render();
}

render();

// Make functions available globally for onclick handlers
window.toggleMode = toggleMode;
window.addToCart = addToCart;
