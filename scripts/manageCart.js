// Prilikom ucitavanja stranica pozovi funkcije
window.onload = function () {
    const cartIcon = document.getElementById("icon-cart");
    const cartItems = document.getElementById("cart-items");
    if (cartIcon) {
        displayCartCount();
    }
    if (cartItems) {
        showCartItems();
    }
}


// Funckija za prikaz broja proizvoda u kosarici uz ikonu kosarice
function displayCartCount() {

    // Zbroji sve proizvode dodane u kosaricu
    let sum = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let product_name = localStorage.key(i);
        sum += Number(localStorage.getItem(product_name));
    }

    const iconCart = document.getElementById("icon-cart");
    let cartCount = document.getElementById("icon-cart-count");

    // Prikazi broj uz ikonu kosarice
    if (sum > 0) {
        if (cartCount) {
            // Azuriraj broj proizvoda ako element postoji
            cartCount.textContent = sum;
        } else {
            // Ako element ne postoji, kreiraj ga
            cartCount = document.createElement("p");
            cartCount.classList.add("icon-cart-count");
            cartCount.id = "icon-cart-count";
            cartCount.textContent = sum;
            iconCart.appendChild(cartCount);
        }
    } else {
        // Ako suma postane nula, makni element
        if (cartCount) {
            cartCount.remove();
        }
    }
}


// Funkcija za prikaz svih proizvdoa koji su u kosarici
function showCartItems() {

    const cartTableBody = document.getElementById("cart-items");
    // Obrisi prethodne
    cartTableBody.innerHTML = ""

    for (let i = 0; i < localStorage.length; i++) {
        let product_name = localStorage.key(i);
        let product_quantity = Number(localStorage.getItem(product_name));

        // Red tablice
        const row = document.createElement("tr");

        // Ime proizvoda
        const productName = document.createElement("td");
        productName.textContent = product_name;
        row.appendChild(productName);


        // Kolicina s gumbima za smanjenje i povecanje
        const productQuantityTd = document.createElement("td");

        // Gumb smanji
        const reduceButton = document.createElement("button");
        reduceButton.classList.add("change-quantity-button")
        reduceButton.textContent = "-";
        reduceButton.onclick = () => updateQuantity(product_name, -1);
        productQuantityTd.appendChild(reduceButton);

        // Kolicina
        const quantitySpan = document.createElement("span");
        quantitySpan.classList.add("quantity-text-span");
        quantitySpan.textContent = product_quantity;
        productQuantityTd.appendChild(quantitySpan);

        // Gumb povecaj
        const increaseButton = document.createElement("button");
        increaseButton.classList.add("change-quantity-button");
        increaseButton.textContent = "+";
        increaseButton.onclick = () => updateQuantity(product_name, 1);
        productQuantityTd.appendChild(increaseButton);
        
        row.appendChild(productQuantityTd);


        cartTableBody.appendChild(row);
    }   
}


// Funkcija koja azurira broj proizvoda prilikom mijenjanja u kosarici s - i +
function updateQuantity(product_name, change) {

    let current = Number(localStorage.getItem(product_name));
    let newQuantity = current + change;

    if (newQuantity <= 0) {
        localStorage.removeItem(product_name);
    } else {
        localStorage.setItem(product_name, newQuantity);
    }

    // Ponovo prikazi azurirano stanje
    showCartItems();

    // Azuriraj prikaz broja proizvoda u kosarici
    displayCartCount();
}
