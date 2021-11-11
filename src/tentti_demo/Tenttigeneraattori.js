import giveNewID from './newID';
import giveRandomAnswerOption from './giveRandomAnswerOption';
import giveRandomQuestions from './giveRandomQuestions';

let minAmountOfOptionsPerQuestion = 4
let maxAmountOfOptionsPerQuestion = 4
let minAmountOfQuestionsPerExam = 20
let maxAmountOfQuestionsPerExam = 20
let howManyExams = 20


const createOptions = (questionID, examID) => {
  let options = []
  let optionList = []
    for (let i = 0; i < giveRandomNumber(minAmountOfOptionsPerQuestion, maxAmountOfOptionsPerQuestion); i++) {
      let o = giveRandomAnswerOption(optionList)
      optionList.push(o)
      options.push({id: giveNewID(), txt: o, checkboxState: false, editMode: false, questionID: questionID, examID: examID})
    }
    return options
}

const giveRandomNumber = (min=0, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const createQuestions = (examID) => {
  let questions = []
  let questionList = []
  let options = []
    for (let i = 0; i < giveRandomNumber(minAmountOfQuestionsPerExam , maxAmountOfQuestionsPerExam); i++) {
      let o = giveRandomQuestions(questionList)
      questionList.push(o)
      let questionID = giveNewID()
      questions.push({id: questionID, txt: o,  editMode: false, correctAnswer: 0,  examID: examID})
      options = options.concat(createOptions(questionID, examID))     
    }
    return {questions: questions, options: options}
}

const Tenttigeneraattori = () => {
  let exams = []
  let questions = []
  let options = []
  for (let i = 0; i < howManyExams; i++) {
    let title = "Tentti Nº" + (i + 1)
    let examID = giveNewID()
    let exam = {id: examID, txt: title}
    let questionNOptions = createQuestions(examID)
    questions = questions.concat(questionNOptions.questions)
    options = options.concat(questionNOptions.options)
    exams.push(exam)
  }  
  return {exams: exams, questions: questions, options: options}
}

export default Tenttigeneraattori 