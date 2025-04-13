function addToCart(product_name) {
    // trenutni broj proizvoda u kosarici
    let count = localStorage.getItem(product_name);
    let new_count = 0;
    
    if (count) {
        new_count = Number(count) + 1;
    } else {
        new_count = 1;
    }
    localStorage.setItem(product_name, new_count);

    // Azuriraj prikaz broja proizvoda
    displayProductCartQuantity(product_name);

    // Azuriraj prikaz broja proizvoda u kosarici
    displayCartCount();
}


function displayProductCartQuantity(product_name) {

    const imageContainer = document.querySelector(`.image-container[id-product="${product_name}"]`)

    if (imageContainer) {

        let productCartCount = imageContainer.querySelector(".product-cart-count")
        
        if (productCartCount) {
            // Azuriraj broj proizvoda ako element postoji
            productCartCount.textContent = localStorage.getItem(product_name);
        } else {
            // Ako element ne postoji, kreiraj ga
            const productCartCount = document.createElement("p");
            productCartCount.id = "product-cart-count"
            productCartCount.classList.add("product-cart-count");
            productCartCount.textContent = localStorage.getItem(product_name);;
            imageContainer.appendChild(productCartCount);
        }
    }
}


