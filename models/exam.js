const mongoose = require('mongoose');
const studentModel = require('./student');

const examSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subject : String,
    grade : Number,
    student : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student'
    }
}, {collection : 'exams'});

const examModel = mongoose.model('Exam', examSchema);

module.exports.getExamsByUsername = async function (username) {
    const id = await studentModel.getIdByUsername(username);
    const exams = await examModel.find({student : id}).populate('student', 'username name surname').sort({grade: -1, subject: 1}).exec();

    return exams;
}