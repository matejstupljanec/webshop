var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/cart/getAll');
});

router.get('/getAll', (req, res,) => {
    res.render('cart', {
        cart: req.session.cart,
        cartCount: req.session.cartCount
    });
});

router.post('/add/:id', (req, res) => {
    const product_id = req.params.id;
    if(req.session.cart[product_id])
        req.session.cart[product_id] += 1;
    else {
        req.session.cart[product_id] = 1;
    }
    req.session.cartCount += 1;
    res.status(200).json({
        productQuantity: req.session.cart[product_id],
        cartCount: req.session.cartCount
    });
});

router.post('/remove/:id', (req, res ) => {
const product_id = req.params.id;
    if(req.session.cart[product_id] && req.session.cart[product_id] > 1) {
        req.session.cart[product_id] -= 1;
    } else {
        delete req.session.cart[product_id];
    }
    req.session.cartCount -= 1;
    res.status(200).json({
        productQuantity: req.session.cart[product_id],
        cartCount: req.session.cartCount
    });
});


module.exports = router;