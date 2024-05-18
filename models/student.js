
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true 
    },
    password: String,
    name: String,
    surname: String,
    major: String,
    avg_grade: Number
}, {collection : 'students'});

const studentModel = mongoose.model('Student', studentSchema);

const studenti = [
    {username: 'mi18290', password: '1234', name: 'Jovana',  major: 'Informatika'},
    {username: 'mi17021', password: '1111', name: 'Maja',    major: 'Informatika'},
    {username: 'mr18101', password: 'abcd', name: 'Milica',  major: 'Racunarstvo'},
    {username: 'mr221001', password: '1212', name: 'Bogdan', major: 'Racunarstvo'}
];

async function getStudentByUsername(username){
    // for(let student of studenti){
    //     if(student.username == username){
    //         return student;
    //     }
    // }

    // return null;

    const students = await studentModel.find({username : username}).exec();

    if(students.length > 0){
        return students[0];
    }

    return null;
}

async function isPasswordCorrect(username, password){
    let student = await getStudentByUsername(username);
    return student.password == password;
}

async function updateInfo(student){
    // let s = getStudentByUsername(student.username);
    // s.name = student.namee;
    // s.major = student.major;
    // s.password = student.password;

    await studentModel.updateOne({username: student.username}, {
        $set : {
            password: student.password,
            name: student.name,
            surname: student.surname,
            major: student.major
        }
    }).exec();
}

async function deleteStudent(username){
    // let index = -1;
    // for(let i in studenti){
    //     if(studenti[i].username == username){
    //         index = i;
    //         break;
    //     }
    // }

    // if(index != -1){
    //     studenti.splice(index, 1);
    // }

    await studentModel.deleteOne({username : username}).exec();
}

async function getIdByUsername(username){
    const student = await getStudentByUsername(username);
    return student._id;
}

module.exports = {
    getStudentByUsername,
    isPasswordCorrect,
    updateInfo,
    deleteStudent,
    getIdByUsername
}