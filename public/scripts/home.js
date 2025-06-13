import { displayCartCount, displayProductCartQuantity } from "/scripts/displayChanges.js";

document.querySelectorAll(".cart-overlay").forEach(cartOverlay => {
    cartOverlay.addEventListener("click", async function() {

        const productName = cartOverlay.getAttribute("productId");

        const response = await fetch(`/cart/add/${productName}`, {method: "POST"});
        const { productQuantity, cartCount } = await response.json();

        displayCartCount(cartCount);

        displayProductCartQuantity(productName, productQuantity);

    });
});