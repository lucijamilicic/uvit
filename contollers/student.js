const { use } = require('../app');
const studentModel = require('../models/student');


function getStudentByUsername(req, res, next){
    const username = req.body.username;
    const password = req.body.password;

    let student = studentModel.getStudentByUsername(username);

    if(student == null){
        res.render('error.ejs', {
            message : "Ne postoji korisnik sa datim korisnickim imenom."
        });
        return;
    }

    if(!studentModel.isPasswordCorrect(username, password)){
        res.render('error.ejs', {
            message : "Neispravna lozinka."
        });
        return;
    }

    res.render('student.ejs', {
        title: 'Dobrodosli, ' + student.ime,
        student,
        ocene : [7, 8, 9, 7]    
    });
}

function updateStudentInfo(req, res, next){
    const student = req.body;

    if(studentModel.getStudentByUsername(student.username) == null){
        res.render('error.ejs', {
            message : "Ne postoji korisnik sa datim korisnickim imenom."
        });
        return;
    }

    studentModel.updateInfo(student);

    next();
}

// localhost:3000/student/delete/:username
function deleteStudent(req, res, next){
    const username = req.params.username;
    // const password = req.body.password;

    // if(!studentModel.isPasswordCorrect(username, password)){
    //     res.render('error.ejs', {
    //         message : "Neispravna lozinka."
    //     });
    //     return;
    // }

    studentModel.deleteStudent(username);

    res.redirect('/index.html');
}

module.exports = {
    getStudentByUsername,
    updateStudentInfo,
    deleteStudent
}