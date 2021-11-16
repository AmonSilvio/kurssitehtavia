import giveNewID from "./newID"
import axiosFunctions from "./axiosFunctions"

  const changeExam = (where, currentExam, exams, setDataFetched) => {
    let i = exams.indexOf(currentExam)  
    if (where === "back") {      
      if (i - 1 < 0) {
        i = exams.length - 1
      } else {
        i--
      }       
    } else if (where === "forward") {
      if (i + 1 >= exams.length) {
        i = 0
      } else {
        i++
      }      
    }
    let exam = exams[i]
    setDataFetched(false) 
    return exam
  }
  
  const addExam = (setExams, setDataFetched, exams) =>{
    let newQuestions = []
    let newExam = {id: giveNewID(), txt: "", questions: newQuestions, editMode: true}
    let e = JSON.parse(JSON.stringify(exams))
    e.push(newExam)
    setDataFetched(false)
    setExams(e)
    return newExam
  }
  
  const remove = async (urlBase, definition, id) => {    
    let dir = urlBase + definition + "/" + id
    let deleteAttempt = await axiosFunctions.remove(dir)
    if (deleteAttempt) {
      console.log(definition + " " + id + " removed")
    }
    return deleteAttempt
  }
 

  const removeExam = async (currentExam, exams, setExams, urlBase, setDataFetched) => {  
    if (remove(urlBase, "exams", currentExam.id)) {
      let key = "exam" + currentExam.id
      localStorage.removeItem(key); 
      let m = changeExam("forward", currentExam, exams, setDataFetched)
      let i = exams.indexOf(currentExam)
      let examsCopy = [].concat(exams)
      examsCopy.splice(i, 1)    
      setExams(examsCopy)
      return m
    } else {
      return currentExam
    }
  } 
  
   
  const removeQuestionsNOptions = async (urlBase, list, id, definition) =>{
    if (await remove(urlBase, definition, id)) {
      return list.filter(q => q.id !== id)    
    } else {
      return list
    }

  }

  const updateExams = (setExams, exams, exam) =>{
    let examsCopy = [].concat(exams)
    let i = 0
    for (let e of examsCopy) {
      if (e.id === exam.id) {
        examsCopy.splice(i, 1, exam)
      }
      i++
    }
    setExams(examsCopy)
  }

 

const dispatch = async (o, currentExam, setCurrentExam, exams, setExams, urlBase, setDataFetched)=> {

    let m = JSON.parse(JSON.stringify(currentExam))
    switch (o.type) {
      case "EXAM_FORWARD":
        m = changeExam("forward", currentExam,  exams, setDataFetched)      
        break;
      case "EXAM_BACKWARD":
        m = changeExam("back", currentExam,  exams, setDataFetched)        
        break;
      case "REMOVE_EXAM":
        m = await removeExam(currentExam,exams, setExams, urlBase, setDataFetched)
        break;
      case "ADD_EXAM":
        m = addExam(setExams, setDataFetched, exams)
        break;
      case "REMOVE_OPTION":
        let op = m.questions.find(q => q.id === o.data.questionId).options  
        m.questions.find(q => q.id === o.data.questionId).options = await removeQuestionsNOptions(urlBase, op, o.data.id, "options")
        updateExams(setExams, exams, m)
        break;
      case "REMOVE_QUESTION":    
        m.questions = await removeQuestionsNOptions (urlBase, m.questions, o.data.id, "questions")
        updateExams(setExams, exams, m)
        break;        
      case "SAVE":
        if (o.data.txt !== "" || o.data.txt !== " " ) {
          let dir = urlBase + o.data.definition + "/"
          o.data.obj.editMode = false
          let saveAttempt = await axiosFunctions.save(dir, o.data.obj, o.data.id)
          if (saveAttempt) {
            console.log("object " + o.data.id + " saved")
          }
        }         
        updateExams(setExams, exams, m)
        break;  
      case "ADD_OPTION":
        let newOption = {id: giveNewID(), txt: "", checkboxState: false, editMode: true, questionId: o.data.id, examId: m.id}        
        m.questions.find(q => q.id === o.data.id).options.push(newOption)

        break;
      case "ADD_QUESTION":
        let newQ = {id: giveNewID(), txt: "", correctAnswer: 0, options: [], editMode: true, examId: m.id}
        m.questions.push(newQ)
        break;
      case "CHANGE":
        if (o.data.id === m.id) {
          m.txt = o.data.txt
          m.editMode = o.data.editMode
        } else {
          for (let question of m.questions) {          
            if (question.id === o.data.id) {
              question.txt = o.data.txt  
              question.editMode = o.data.editMode          
              break;
            }
            for (let op of question.options) {
              if (op.id === o.data.id) {
                op.txt = o.data.txt
                op.editMode = o.data.editMode 
                break;
              }
            }
          } 
        }
        updateExams(setExams, exams, m)
        break;
      case "SAVE_CHECKBOX_STATE":
        for (let question of m.questions) {
          for (let op of question.options) {
            if (op.id === o.data.id) {
              console.log(op.checkboxState)
              op.checkboxState = !op.checkboxState
              break;
            }
          }
        }    
        break;

      default: throw "Error"
    }
    console.log("exam: ", m)
    //updateExams(setExams, exams, m)
    setCurrentExam(m)
  }

  export default dispatch