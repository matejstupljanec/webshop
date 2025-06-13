var express = require('express');
var router = express.Router();

// ruta /home automatski preusmjerava na /home/getCategories
router.get('/', (req, res) => {
    res.redirect('/home/getCategories');
})


router.get('/getCategories', (req, res) => {
    const { data } = require('../data/mydata.js');
    let categoriesData = data.categories;

    // dohvati imena kategorija iz podataka
    let categories = [];
    categoriesData.forEach(element => {
        categories.push(element.name);
    });

    res.render('home', {
        welcomeText: 'Dobrodošli u Igraonicu - svijet igre i zabave!',
        categories: categories,
        products: [],
        cartCount: req.session.cartCount
    });
});


router.get('/getProducts/:id', (req, res) => {
    const { data } = require('../data/mydata.js');
    let categoriesData = data.categories;

    // dohvati imena kategorija iz podataka
    let categories = [];
    categoriesData.forEach(element => {
        categories.push(element.name);
    });
    
    // dohvati proizvode za id kategoriju
    const categoryName = req.params.id;
    let products = categoriesData.find(category => category.name === categoryName);
    products = products.products

    res.render('home', {
        welcomeText: categoryName.toUpperCase() + " (trenutno otvoreno)",
        categories: categories,
        products: products,
        category_name: categoryName,
        cart: req.session.cart,
        cartCount: req.session.cartCount
    });
});


module.exports = router;
