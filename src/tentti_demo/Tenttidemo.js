import './App.css';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Kysymykset  from './Kysymykset'
import giveNewID from './newID';
import giveRandomAnswerOption from './giveRandomAnswerOption';
import dispatch from './toiminnot';


const createOptions = () => {
  let options = []
  let optionList = []
    for (let i = 0; i < giveRandomNumber(3, 6); i++) {
      let o = giveRandomAnswerOption(optionList)
      optionList.push(o)
      options.push({id: giveNewID(), txt: o, checkboxState: false, editMode: false})
    }
    options.map(op => console.log(op))
    return options
}

const giveRandomNumber = (min=0, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


let questions = [{id: giveNewID(), txt: "Onko JavaScript kivaa?", editMode: false, correctAnswer: 0,  options: createOptions()},
                {id: giveNewID(), txt:  "Onko React kivaa?", editMode: false, correctAnswer: 0, options: createOptions()},
                {id: giveNewID(), txt: "Onko Reactin hookit vaikeita", editMode: false, correctAnswer: 0, options: createOptions()},
                {id: giveNewID(), txt: "Sirittääkö päässäsi?", editMode: false, correctAnswer: 0,options: createOptions()}]                  

                  
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
    dispatch(o, mainState, setMainState)
  }

  const clear = () => {
    localStorage.clear()
  }


  return (<body class="body1">   <br></br>
  <br></br>    
    <Container > 
   
        <>
        {mainState.map(question => (<Kysymykset update={update} question={question} mainState={mainState}  />
     ))} 
        
        </>   <br></br>
        <button onClick={() => update({type: "ADD_QUESTION"})}>Lisää kysymys</button>
             <button onClick={() => clear()}>Tyhjää muisti</button>  
   
             <br></br>
             <br></br>
    </Container>
    </body>);
}


export default Tenttidemo;