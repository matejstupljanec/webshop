var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/home/getCategories');
})

router.get('/getCategories', (req, res) => {
    const { data } = require('../data/mydata.js');
    let categories_data = data.categories;

    let categories = [];
    categories_data.forEach(element => {
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
    let categories_data = data.categories;

    let categories = [];
    categories_data.forEach(element => {
        categories.push(element.name);
    });
    
    const category_name = req.params.id;
    let products = categories_data.find(category => category.name === category_name);
    products = products.products

    res.render('home', {
        welcomeText: category_name.toUpperCase() + " (trenutno otvoreno)",
        categories: categories,
        products: products,
        category_name: category_name,
        cart: req.session.cart,
        cartCount: req.session.cartCount
    });
});


module.exports = router;