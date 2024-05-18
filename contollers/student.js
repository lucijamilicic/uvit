const studentModel = require('../models/student');


async function getStudentByUsername(req, res, next){
    try{    
        const username = req.body.username;
        const password = req.body.password;

        let student = await studentModel.getStudentByUsername(username);

        if(student == null){
            throw new Error("Ne postoji korisnik sa datim korisnickim imenom.");
        }

        if(! await studentModel.isPasswordCorrect(username, password)){
            throw new Error("Neispravna lozinka.");
        }

        res.render('student.ejs', {
            title: 'Dobrodosli, ' + student.name,
            student,
            ocene : [7, 8, 9, 7]    
        });
    }catch (err) {
        next(err);
    }
}

async function updateStudentInfo(req, res, next){
    const student = req.body;

    const findStudent = await studentModel.getStudentByUsername(student.username);
    if( findStudent == null){
        throw new Error("Ne postoji korisnik sa datim korisnickim imenom.");
    }

    await studentModel.updateInfo(student);

    next();
}

// localhost:3000/student/delete/:username
async function deleteStudent(req, res, next){
    const username = req.params.username;
    const password = req.body.password;

    if(! await studentModel.isPasswordCorrect(username, password)){
        throw new Error("Neispravna lozinka.");
    }

    await studentModel.deleteStudent(username);

    res.redirect('/index.html');
}

module.exports = {
    getStudentByUsername,
    updateStudentInfo,
    deleteStudent
}