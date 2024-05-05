
const studenti = [
    {username: 'mi18290', password: '1234', ime: 'Jovana', smer: 'Informatika'},
    {username: 'mi17021', password: '1111', ime: 'Maja', smer: 'Informatika'},
    {username: 'mr18101', password: 'abcd', ime: 'Milica', smer: 'Racunarstvo'},
    {username: 'mr221001', password: '1212', ime: 'Bogdan', smer: 'Racunarstvo'}
];

function getStudentByUsername(username){
    for(let student of studenti){
        if(student.username == username){
            return student;
        }
    }

    return null;
}

function isPasswordCorrect(username, password){
    let student = getStudentByUsername(username);
    return student.password == password;
}

function updateInfo(student){
    let s = getStudentByUsername(student.username);
    s.ime = student.ime;
    s.smer = student.smer;
    s.password = student.password;
}

function deleteStudent(username){
    let index = -1;
    for(let i in studenti){
        if(studenti[i].username == username){
            index = i;
            break;
        }
    }

    if(index != -1){
        studenti.splice(index, 1);
    }
}

module.exports = {
    getStudentByUsername,
    isPasswordCorrect,
    updateInfo,
    deleteStudent
}