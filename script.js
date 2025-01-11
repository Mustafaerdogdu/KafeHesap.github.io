// Sepeti güncellemek için kullanılan fonksiyon
let cart = [];
let totalPrice = 0;

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        const itemName = this.getAttribute("data-item");
        const itemPrice = parseFloat(this.getAttribute("data-price"));

        // Sepete ürün ekle
        cart.push({ name: itemName, price: itemPrice });
        totalPrice += itemPrice;

        // Sepet öğelerini güncelle
        updateCart();
    });
});

// Sepeti güncelleyen fonksiyon
function updateCart() {
    // Sepet öğelerini ekle
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} TL`;
        cartItems.appendChild(li);
    });

    // Sepet sayısını ve toplam fiyatı güncelle
    cartCount.textContent = cart.length;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

