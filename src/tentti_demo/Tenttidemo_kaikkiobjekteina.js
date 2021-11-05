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
  
  useEffect(() => {    
  let avain = "localStorageAvain"
  localStorage.setItem(avain, JSON.stringify(mainState))
  console.log("useEffect")
  },[mainState]); //makes the effect run if changed


  const update = (o)=> {
    let m = JSON.parse(JSON.stringify(mainState))

    switch (o.type) {
      case "REMOVE_STUDENT":
        delete m[o.data.questionID].options[o.data.optionID]
        break;
      case "ADD_STUDENT":
        let previousID = findTheLastUsedID(m[o.data.questionID].options)
        let id = giveNewID(previousID)
        m[o.data.questionID].options[id] = {option: giveRandomAnswerOption(), checkboxState: false}  
        break;
      case "REMOVE_QUESTION":
        delete m[o.data.questionID]
        break;
      case "ADD_QUESTION":
      //  previousID = findTheLastUsedID(m)
        let newQID = giveNewID(6666)
        m[newQID]= {question: "Onko tämä uusi kysymys?", correctAnswer: 0, options: createOptions()}
        break;
      case "SAVE_CHECKBOX_STATE":
        m[o.data.questionID].options[o.data.optionID].checkboxState = !m[o.data.questionID].options[o.data.optionID].checkboxState
        break;

      default: throw "Error"
    }
    setMainState(m)

  }


  const findTheLastUsedID = (options) => {
    let l = Object.keys(options)
    return l[l.length - 1]
  }



  return (<body class="body1">   <br></br>
  <br></br>    
    <Container >   
        <> 
        <Kysymykset update={update} mainState={mainState}  />
        </>         
             <button onClick={() => update({type: "ADD_QUESTION"})}>Lisää kysymys</button>
    </Container>
    </body>);
}


export default Tenttidemo;