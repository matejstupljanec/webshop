// Funckija koja azurira prikaz broja proizvoda u kosarici uz ikonu kosarice
export function displayCartCount(cartCount) {

    const iconCartElement = document.getElementById("icon-cart");
    let cartCountElement = document.getElementById("icon-cart-count");

    // Prikazi broj uz ikonu kosarice
    if (cartCount > 0) {
        if (cartCountElement) {
            // Azuriraj broj proizvoda ako element postoji
            cartCountElement.textContent = cartCount;
        } else {
            // Ako element ne postoji, kreiraj ga
            cartCountElement = document.createElement("p");
            cartCountElement.classList.add("icon-cart-count");
            cartCountElement.id = "icon-cart-count";
            cartCountElement.textContent = cartCount;
            iconCartElement.appendChild(cartCountElement);
        }
    } else {
        // Ako suma postane nula, makni element
        if (cartCountElement) {
            cartCountElement.remove();
        }
    }
}

// Funkcija koja azurira broj proizvoda u kosarici uz sliku proizvoda
export function displayProductCartQuantity(productName, productQuantity) {

    const imageContainer = document.querySelector(`.image-container[productId="${productName}"]`)

    if (imageContainer) {

        let productCartCount = imageContainer.querySelector(".product-cart-count");
        
        if (productCartCount) {
            // Azuriraj broj proizvoda ako element postoji
            productCartCount.textContent = productQuantity;
        } else {
            // Ako element ne postoji, kreiraj ga
            const productCartCount = document.createElement("p");
            productCartCount.id = "product-cart-count"
            productCartCount.classList.add("product-cart-count");
            productCartCount.textContent = productQuantity;
            imageContainer.appendChild(productCartCount);
        }
    }
}