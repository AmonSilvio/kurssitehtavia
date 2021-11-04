import './App.css';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Kysymykset  from './Kysymykset'
import giveNewID from './newID';
import giveRandomAnswerOption from './giveRandomAnswerOption';


const createOptions = () => {
  let options = {}
  let optionList = []
  let id = 10
    for (let i = 0; i < giveRandomNumber(3, 6); i++) {
      id = giveNewID(id)
      let o = giveRandomAnswerOption(optionList)
      optionList.push(o)
      options[id] = {option: o, checkboxState: false}
    }
    return options
}

const giveRandomNumber = (min=0, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


let questions = {[giveNewID(10)] : {question: "Onko JavaScript kivaa?", correctAnswer: 0, options: createOptions()},
                  [giveNewID(200)] : {question:  "Onko React kivaa?", correctAnswer: 0, options: createOptions()},
                  [giveNewID(300)] : {question: "Onko Reactin hookit vaikeita", correctAnswer: 0, options: createOptions()},
                  [giveNewID(400)] : {question: "Sirittääkö päässäsi?", correctAnswer: 0, options: createOptions()}}

                  
function Tenttidemo() {

  const [mainState, setMainState] = useState(() => {
    let avain = "localStorageAvain"
    let data = localStorage.getItem(avain)
    data = JSON.parse(data)
    console.log("data: " + data)
    let bool = false
    if (data === null) {
      bool = true
    }
    return bool ? questions : data
  });

  console.log("render")
  console.log("main: "+ mainState)
  
  useEffect(() => {    
  let avain = "localStorageAvain"
  localStorage.setItem(avain, JSON.stringify(mainState))
  console.log("useEffect")
  },[mainState]); //makes the effect run if changed


  const addQuestion = () => {
    let m = JSON.parse(JSON.stringify(mainState))
    let previousID = findTheLastUsedID(m)
    let newQID = giveNewID(previousID)
    m[newQID]= {question: "Onko tämä uusi kysymys?", correctAnswer: 0, options: createOptions()}
    console.log(m)
    setMainState(m)
  }


  const findTheLastUsedID = (options) => {
    let l = Object.keys(options)
    return l[l.length - 1]
  }

  const copy = (src) => {
    return JSON.parse(JSON.stringify(src))
  }
 

const addOption = (questionID) => {
  let m = copy(mainState)
  let previousID = findTheLastUsedID(m[questionID].options)
  let id = giveNewID(previousID)
  m[questionID].options[id] = {option: giveRandomAnswerOption(), checkboxState: false}  
  console.log(m[questionID].options) 
  setMainState(m)
}

const removeOption = (questionID, id) => {
  let m = copy(mainState)
  delete m[questionID].options[id]
  console.log(m[questionID].options)
  console.log(m)
  setMainState(m)
}

const checkBoxStateSave = (questionID, id) => {
  let m = copy(mainState)
  m[questionID].options[id].checkboxState = !m[questionID].options[id].checkboxState
  setMainState(m)
}

const removeQuestion = (questionID) => { 
  let m = JSON.parse(JSON.stringify(mainState))
  delete m[questionID]
  console.log(m)
  setMainState(m)  
}


  return (<body class="body1">   <br></br>
  <br></br>    
    <Container >   
        <> 
        <Kysymykset setMainState={setMainState} addOption={addOption} removeQuestion={removeQuestion} checkBoxStateSave={checkBoxStateSave} removeOption={removeOption} giveNewID={giveNewID} mainState={mainState} findTheLastUsedID={findTheLastUsedID} />
        </>         
             <button onClick={() => addQuestion()}>Lisää kysymys</button>
    </Container>
    </body>);
}


export default Tenttidemo;