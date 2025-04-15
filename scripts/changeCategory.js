function showProducts(category_name) {

    // Glavni DIV container koji sadrzi sve proizvode
    const productsContainer = document.getElementById("products-container");

    const headerCategoryDiv = document.getElementById("header-category");

    const category = data.categories.find(category => category.name === category_name);

    if (category) {

        // Ocisti prethodne proizvode
        productsContainer.innerHTML = "";

        headerCategoryDiv.innerHTML = "";
        const headerCategoryName = document.createElement("p");
        headerCategoryName.textContent = category.name.toUpperCase() + " (trenutno otvoreno)";
        headerCategoryDiv.appendChild(headerCategoryName);

        category.products.forEach(product => {
            let product_name = product.name
    
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
    
            // Div koji sadrzi sliku, kosaricu pri hoveru i broj odabranih proizvoda
            const imageContainer = document.createElement("div");
            imageContainer.id = "image-container";
            imageContainer.classList.add("image-container");
            imageContainer.setAttribute("id-product", product.name)
            
            const productImage = document.createElement("img");
            productImage.classList.add("product-image");
            productImage.src = product.image;
            imageContainer.appendChild(productImage);

            const productCartOverlay = document.createElement("img");
            productCartOverlay.classList.add("cart-overlay");
            productCartOverlay.src = "images/cart.png";
            // dodaj u kosaricu na klik
            productCartOverlay.onclick = () => addToCart(product_name);
            imageContainer.appendChild(productCartOverlay);

            // broj proizvoda u kosarici
            const productCartCount = document.createElement("p");
            productCartCount.classList.add("product-cart-count");
            const count = Number(localStorage.getItem(product_name));
            // ako je proizvod dodan u kosaricu prikazi broj, inace ne
            if (count > 0) {
                productCartCount.textContent = count;
                imageContainer.appendChild(productCartCount);
            }
    

            // ime proizvoda
            const productName = document.createElement("p");
            productName.textContent = product.name;
    
            // kategorija proizvoda
            const productCategory = document.createElement("p");
            productCategory.textContent = category.name;

            productDiv.appendChild(imageContainer);
            productDiv.appendChild(productName);
            productDiv.appendChild(productCategory);
    
            productsContainer.appendChild(productDiv);
    
        })
    }
}
