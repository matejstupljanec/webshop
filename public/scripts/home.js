import { displayCartCount, displayProductCartQuantity } from "/scripts/displayChanges.js";


// postavi eventListener na svaku ikonu košarice koja se pojavi pri hoveru proizvoda
document.querySelectorAll(".cart-overlay").forEach(cartOverlay => {
    cartOverlay.addEventListener("click", async function() {

        const productName = cartOverlay.getAttribute("productId");

        // zahtjev serveru
        const response = await fetch(`/cart/add/${productName}`, {method: "POST"});
        const { productQuantity, cartCount } = await response.json();

        // azuriraj ukupan broj proizvoda koji je u kosarici
        displayCartCount(cartCount);

        // azuriraj broj pojedinog proizvoda koliko ih je u kosarici
        displayProductCartQuantity(productName, productQuantity);
    
    });
});