
const productsContainer = document.getElementById("products-container");

const headerCategoryDiv = document.getElementById("header_category");


function showProducts(category_name) {

    const category = data.categories.find(category => category.name === category_name);

    if (category) {

        productsContainer.innerHTML = ""; // Očisti prethodne proizvode

        headerCategoryDiv.innerHTML = "";
        const headerCategoryName = document.createElement("p");
        headerCategoryName.textContent = "Proizvodi iz kategorije: " + category.name.toUpperCase();
        headerCategoryDiv.appendChild(headerCategoryName);

        category.products.forEach(product => {
    
            const productDiv = document.createElement("div");
            productDiv.classList.add("product")
    
            const productImage = document.createElement("img");
            productImage.src = product.image;
    
            const productName = document.createElement("p");
            productName.textContent = product.name;
    
            const productCategory = document.createElement("p");
            productCategory.textContent = category.name;
    
            productDiv.appendChild(productImage);
            productDiv.appendChild(productName);
            productDiv.appendChild(productCategory);
    
            productsContainer.appendChild(productDiv);1
    
        })
    }
}