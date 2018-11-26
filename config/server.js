let express = require('express'); 
let consign = require('consign');
let body_parser = require('body-parser');
let expressValidator = require('express-validator');
let expressSession = require('express-session');
let app = express();

app.set('view engine', 'ejs'); 
app.set('views', './app/views');
app.use(express.static('./app/public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use(expressValidator());

app.use(expressSession({
    secret: 'ViscondedeSabugosa', 
    resave: false,
    saveUninitialized: false 
}));

app.use(function(req,res,next){
    res.locals.session = req.session;
    next();
});

consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;
