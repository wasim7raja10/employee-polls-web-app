const { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } = require('./_DATA.js')

function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

function saveQuestion(question) {
  return _saveQuestion(question)
}

function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}

export { getInitialData, saveQuestion, saveQuestionAnswer }