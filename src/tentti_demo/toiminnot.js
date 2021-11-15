import giveNewID from "./newID"
import axiosFunctions from "./axiosFunctions"
/* const update = (o)=> {
  dispatch(o, currentExam, setCurrentExam, exams, setExams, urlBase)
} */

const axios = require('axios');

const remove= (list, id) => {    
    list = list.filter(t => t.id !== id)
    list.map(q => q.options = q.options.filter(t => t.id !== id))
    return list
  }


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

  const removeExam = async (currentExam, exams, setExams, urlBase, setDataFetched) => {
    let key = "exam" + currentExam.id
    localStorage.removeItem(key);
    let dir = urlBase + "exams/" + currentExam.id
    let deleteAttempt = await axiosFunctions.remove(dir)
    if (deleteAttempt) {
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
 
  const addExam = () =>{

  }

 

const dispatch = async (o, currentExam, setCurrentExam, exams, setExams, urlBase, setDataFetched)=> {

    let m = currentExam

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
        m = await addExam(currentExam,exams, setExams, urlBase, setDataFetched)
        break;
      case "REMOVE":    
        m = remove(m, o.data.id)
        break;
      case "ADD_OPTION":
        let newOption = {id: giveNewID(), txt: "", checkboxState: false, editMode: true}
        m.find(q => q.id === o.data.id).options.push(newOption)
        break;
      case "ADD_QUESTION":
        let newQ = {id: giveNewID(), txt: "", correctAnswer: 0, options: [], editMode: true}
        m.push(newQ)
        break;
      case "CHANGE":
        for (let question of m) {          
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
        break;
      case "SAVE_CHECKBOX_STATE":
        for (let question of m) {
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
    console.log("Tämä tulee: ", m)
    //m = JSON.parse(JSON.stringify(m))
    setCurrentExam(m)
  }

  export default dispatch