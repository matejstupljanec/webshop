import { displayCartCount } from "/scripts/displayChanges.js";

document.querySelectorAll(".increaseQuantity").forEach(product => {
    product.addEventListener("click", async function() {

        const productName = product.getAttribute("productId"); 

        const response = await fetch(`/cart/add/${productName}`, {method: "POST"});
        const { productQuantity, cartCount } = await response.json();

        // azuriraj broj proizvoda u kosarici
        let quantitySpan = document.getElementById("span_" + productName);
        quantitySpan.textContent = productQuantity

        displayCartCount(cartCount);
    });
});


document.querySelectorAll(".decreaseQuantity").forEach(product => {
    product.addEventListener("click", async function() {

        const productName = product.getAttribute("productId"); 

        const response = await fetch(`/cart/remove/${productName}`, {method: "POST"});
        const { productQuantity, cartCount } = await response.json();


        if(productQuantity > 0) {
            // azuriraj broj proizvoda u kosarici
            let quantitySpan = document.getElementById("span_" + productName);
            quantitySpan.textContent = productQuantity
        } else {
            // ukloni proizvod iz kosarice
            const element = document.getElementById(productName);
            if (element) {
                element.remove();
            }
        }

        displayCartCount(cartCount);
    });
});
