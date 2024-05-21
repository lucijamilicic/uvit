const examModel = require('../models/exam');

module.exports.getExamsByUsername = async function (req, res, next){
    const username = req.query.username;

    const exams =  await examModel.getExamsByUsername(username);

    console.log(exams);
    res.render('exam.ejs', {exams});
}