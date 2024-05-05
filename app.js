const express = require('express');
const path = require('path');
const studentRoutes = require('./routes/student');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));

app.use('/student', studentRoutes);


app.use(function(err, req, res, next){
    console.log('Greska na serveru');
    console.log(err);
    // 500
})

module.exports = app;