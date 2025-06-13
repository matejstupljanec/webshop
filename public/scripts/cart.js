import { displayCartCount } from "/scripts/displayChanges.js";


// postavi eventListener na svaki plus u kosarici
document.querySelectorAll(".increaseQuantity").forEach(product => {
    product.addEventListener("click", async function() {

        const productName = product.getAttribute("productId"); 

        // zahtjev serveru
        const response = await fetch(`/cart/add/${productName}`, {method: "POST"});
        const { productQuantity, cartCount } = await response.json();

        // azuriraj broj proizvoda u kosarici
        let quantitySpan = document.getElementById("span_" + productName);
        quantitySpan.textContent = productQuantity

        // azuriraj ukupan broj proizvoda koji je u kosarici
        displayCartCount(cartCount);
    });
});


// postavi eventListener na svaki minus u kosarici
document.querySelectorAll(".decreaseQuantity").forEach(product => {
    product.addEventListener("click", async function() {

        const productName = product.getAttribute("productId"); 

        // zahtjev serveru
        const response = await fetch(`/cart/remove/${productName}`, {method: "DELETE"});
        const { productQuantity, cartCount } = await response.json();

        // azuriraj broj proizvoda u kosarici
        if(productQuantity > 0) {
            let quantitySpan = document.getElementById("span_" + productName);
            quantitySpan.textContent = productQuantity
        } else {
            // inace ukloni proizvod iz kosarice
            const element = document.getElementById(productName);
            if (element) {
                element.remove();
            }
        }

        // azuriraj ukupan broj proizvoda koji je u kosarici
        displayCartCount(cartCount);
    });
});
