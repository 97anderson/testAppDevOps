const path       = require('path');
const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const mongoose   = require('mongoose');
const indexRoutes= require('./routes/index');

//configuraciones
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

// logs en el server
app.use(bodyParser.urlencoded({extended:false}));

// vistas
app.use('/', indexRoutes);

require('./db');

app.listen(3000, () =>{
    console.log('server started on port 3000');
});

module.exports = app;
