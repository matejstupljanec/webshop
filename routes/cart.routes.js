var express = require('express');
var router = express.Router();

// ruta /cart automatski preusmjerava na /cart/getAll
router.get('/', (req, res) => {
    res.redirect('/cart/getAll');
});


router.get('/getAll', (req, res) => {
    res.render('cart', {
        cart: req.session.cart,
        cartCount: req.session.cartCount
    });
});


router.post('/add/:id', (req, res) => {
    // povecaj broj proizvoda id u kosarici
    const productId = req.params.id;
    if(req.session.cart[productId])
        req.session.cart[productId] += 1;
    else {
        req.session.cart[productId] = 1;
    }

    // povecaj ukupan broj proizvoda u kosarici
    req.session.cartCount += 1;

    res.status(200).json({
        productQuantity: req.session.cart[productId],
        cartCount: req.session.cartCount
    });
});


router.delete('/remove/:id', (req, res) => {
    // smanji broj proizvoda id u kosarici
    const product_id = req.params.id;
    if(req.session.cart[product_id] && req.session.cart[product_id] > 1) {
        req.session.cart[product_id] -= 1;
    } else {
        delete req.session.cart[product_id];
    }

    // smanji ukupan broj proizvoda u kosarici
    req.session.cartCount -= 1;

    res.status(200).json({
        productQuantity: req.session.cart[product_id],
        cartCount: req.session.cartCount
    });
});


module.exports = router;
