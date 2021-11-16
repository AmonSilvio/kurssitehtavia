import giveNewID from './newID';
import giveRandomAnswerOption from './giveRandomAnswerOption';
import giveRandomQuestions from './giveRandomQuestions';

let minAmountOfOptionsPerQuestion = 4
let maxAmountOfOptionsPerQuestion = 4
let minAmountOfQuestionsPerExam = 20
let maxAmountOfQuestionsPerExam = 20
let howManyExams = 20


const createOptions = (questionId, examId) => {
  let options = []
  let optionList = []
    for (let i = 0; i < giveRandomNumber(minAmountOfOptionsPerQuestion, maxAmountOfOptionsPerQuestion); i++) {
      let o = giveRandomAnswerOption(optionList)
      optionList.push(o)
      options.push({id: giveNewID(), txt: o, checkboxState: false, editMode: false, questionId: questionId, examId: examId})
    }
    return options
}

const giveRandomNumber = (min=0, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const createQuestions = (examId) => {
  let questions = []
  let questionList = []
  let options = []
    for (let i = 0; i < giveRandomNumber(minAmountOfQuestionsPerExam , maxAmountOfQuestionsPerExam); i++) {
      let o = giveRandomQuestions(questionList)
      questionList.push(o)
      let questionId = giveNewID()
      questions.push({id: questionId, txt: o,  editMode: false, correctAnswer: 0,  examId: examId})
      options = options.concat(createOptions(questionId, examId))     
    }
    return {questions: questions, options: options}
}

const Tenttigeneraattori = () => {
  let exams = []
  let questions = []
  let options = []
  let title = ""
  for (let i = 0; i < howManyExams; i++) {
    title = "Tentti Nº" + (i + 1)
    let examId = (giveNewID())
    let exam = {id: examId, txt: title, editMode: false}
    let questionNOptions = createQuestions(examId)
    questions = questions.concat(questionNOptions.questions)
    options = options.concat(questionNOptions.options)
    exams.push(exam)
  }  
  return {exams: exams, questions: questions, options: options}
}

export default Tenttigeneraattori 