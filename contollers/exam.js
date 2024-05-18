const examModel = require('../models/exam');

module.exports.getExamsByUsername = async function (req, res, next){
    const username = req.query.username;

    const exams =  await examModel.getExamsByUsername(username);

    res.render('exam.ejs', {exams});
}