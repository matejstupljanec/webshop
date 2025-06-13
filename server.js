const express = require('express');
const session = require('express-session');
var path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// session config
app.use(session({
    secret: 'tajni-kljuc',
    resave: false,
    saveUninitialized: true
}));

// middleware koji incijalizira session za korisnika ako je potrebno
app.use((req, res, next) => {
    if(!req.session.cart) {
        req.session.cart = {};
    }
    if(!req.session.cartCount) {
        req.session.cartCount = 0;
    }
    next();
});

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

app.use('/home', homeRouter);
app.use('/cart', cartRouter);

// preusmjeri root
app.get('/', (req, res) => {
    res.redirect('/home/getCategories');
});

app.listen(3000);
