/* eslint-disable no-unused-expressions */
import './App.css';
import React, { useState, useEffect } from 'react';
import Tentti from "./Tentti"
import axiosFunctions from "./axiosFunctions"
import Tenttigeneraattori from "./Tenttigeneraattori"

import dispatch from './toiminnot';


/* json-server --watch db.json --port 3001
 */

/* 
let exams = Tenttigeneraattori()
console.log("Tässä näin:", exams) 
let avain = "objekti"
localStorage.setItem(avain, JSON.stringify(exams)) */
                  
function Tentti_sovellus() {

  const [dataFetched, setDataFetched] = useState(false)
  const [currentExam, setCurrentExam] = useState()
  const [urlBase] = useState("http://localhost:3001/")
  const [exams, setExams] = useState([])
  
  console.log("render")
  
  
  const update = (o)=> {
    dispatch(o, currentExam, setCurrentExam, exams, setExams, urlBase, setDataFetched)
  }

  const clear = () => {
    localStorage.clear()
  }



/*   const changeExam = (where) => {
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
    setDataFetched(false) 
    setCurrentExam(exams[i])
  } */

  const removeExam = async () => {
/*     console.log("remove")
    let key = "exam" + currentExam.id
    localStorage.removeItem(key);
    let dir = urlBase + "exams/" + currentExam.id
    let deleteAttempt = await axiosFunctions.remove(dir)
    if (deleteAttempt) {
      console.log("Poisto tapahtui")
      let i = exams.indexOf(currentExam)
      let examsCopy = [].concat(exams)
      examsCopy.splice(i, 1)    
      setExams(examsCopy)
      changeExam("forward") 
    } */
  }

  useEffect(() => {
    const fetchExams = async () => {
      let url = urlBase + "exams/"
      let examsHere = await axiosFunctions.get(url)
      setExams(examsHere)
      setCurrentExam(examsHere[0])        
    }
    fetchExams()
  
  }, [])
  
  useEffect(() => {
    console.log("Kuinka monta")
    if (currentExam !== undefined) {
      const fetchData = async () => {           
      let url = urlBase + "questions?examId=" + currentExam.id
      let questions = await axiosFunctions.get(url)
      url = urlBase + "options?examId=" + currentExam.id
      let options = await axiosFunctions.get(url)
      for (let q of questions) {
        q.options = options.filter(o => o.questionId === q.id)
      }
      let examObj = currentExam
      examObj.questions = questions
      setDataFetched(true)     
      setCurrentExam(examObj)
      }
      if (!dataFetched) {
        fetchData()
     }
    }
          
    }, [currentExam])

/*     useEffect(() => {
      let avain = "exam" + examNumber
      localStorage.setItem(avain, JSON.stringify(currentExam))
      },[currentExam]); */ //makes the effect run if changed */
    

  return (<body class="body1">  {dataFetched ? <div> <Tentti exam={currentExam}  update={update} ></Tentti> <button onClick={() => update({type: "REMOVE_EXAM"})}>Poista tentti</button>  <button onClick={() => update({type: "ADD_EXAM"})}>Lisää tentti</button> <button onClick={() => clear()}>Tyhjää local storage</button>
   
  <br></br>
  <br></br> </div> : <div>Haetaan dataa</div>}
    </body>);
}


export default Tentti_sovellus;