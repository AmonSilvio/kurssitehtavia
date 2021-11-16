/* eslint-disable no-unused-expressions */
import './App.css';
import React, { useState, useEffect } from 'react';
import Tentti from "./Tentti"
import axiosFunctions from "./axiosFunctions"
import Tenttigeneraattori from "./Tenttigeneraattori"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import dispatch from './toiminnot';


/* json-server --watch db.json --port 3001
 */

/* 
let exams = Tenttigeneraattori()
console.log("Tässä näin:", exams) 
let avain = "objekti"
localStorage.setItem(avain, JSON.stringify(exams))
                   */
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
    if (currentExam !== undefined) {
      const fetchData = async () => {
        let examObj = {}
        let avain = "exam" + currentExam.id
        console.log("tää on avain: ", avain)
        let data = JSON.parse(localStorage.getItem(avain))
        if (data !== null) {
          console.log("tää data saatiin: ", data)
          examObj = data
          console.log("data got from local storage")          
        } else {               
          let url = urlBase + "questions?examId=" + currentExam.id
          let questions = await axiosFunctions.get(url)
          url = urlBase + "options?examId=" + currentExam.id
          let options = await axiosFunctions.get(url)
          for (let q of questions) {
            q.options = options.filter(o => o.questionId === q.id)
          }
          examObj = currentExam
          examObj.questions = questions
        }
      setDataFetched(true)     
      setCurrentExam(examObj)
      }
      if (!dataFetched) {
        fetchData()
     }
    }          
    }, [currentExam])

   /*  useEffect(() => {
      console.log("tää on nyt: ", currentExam)
      if (currentExam !== undefined) {
        let avain = "exam" + currentExam.id
        localStorage.setItem(avain, JSON.stringify(currentExam))
      }
      },[currentExam]);  *///makes the effect run if changed */
    

  return (<body class="body1">

<Container>
                <div> 
                    <Box class="container">
                        <div class="box shadow">       
                            <Grid class="textbox">                           
                            <button onClick={() => update({type: "REMOVE_EXAM"})}>Poista tentti</button>  <button onClick={() => update({type: "ADD_EXAM"})}>Lisää tentti</button> <button onClick={() => clear()}>Tyhjää local storage</button>
                            </Grid> 
                        </div>
                    </Box>
                </div>
            </Container>
              {dataFetched ? <div> 
                <Tentti exam={currentExam}  update={update} ></Tentti> 
             
   
  <br></br>
  <br></br> </div> : <div></div>}
    </body>);
}


export default Tentti_sovellus;