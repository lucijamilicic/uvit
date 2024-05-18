const express = require('express');
const path = require('path');
const studentRoutes = require('./routes/student');
const examsRoutes = require('./routes/exam');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost:27017/Fakultet');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));

app.use('/student', studentRoutes);
app.use('/exams', examsRoutes);


app.use(function(err, req, res, next){
    console.log('Greska na serveru');
    console.log(err);
    // 500
    res.render('error.ejs', {
        message : err.message
    });
})

module.exports = app;