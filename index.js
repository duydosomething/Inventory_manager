const express   = require("express");
const mongoose  = require('mongoose');
const passport  = require('passport');
const flash     = require('connect-flash');

const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');
const keys = require("./config/keys")

const app = express();

mongoose.connect(keys.mongoURI)

// require('./config/passport')(passport); // pass passport for configuration


app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// required for passport
app.use(session({ secret: 'supercoolinventory' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require("./Routes/authRoutes")(app, passport);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
