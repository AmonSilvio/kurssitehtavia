import './App.css';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Kysymykset  from './Kysymykset'
import giveNewID from './newID';
import giveRandomAnswerOption from './giveRandomAnswerOption';


const createOptions = () => {
  let options = []
  let optionList = []
    for (let i = 0; i < giveRandomNumber(3, 6); i++) {
      let o = giveRandomAnswerOption(optionList)
      optionList.push(o)
      options.push({id: giveNewID(), option: o, checkboxState: false})
    }
    options.map(op => console.log(op))
    return options
}

const giveRandomNumber = (min=0, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


let questions = [{id: giveNewID(), question: "Onko JavaScript kivaa?", correctAnswer: 0, options: createOptions()},
                {id: giveNewID(), question:  "Onko React kivaa?", correctAnswer: 0, options: createOptions()},
                {id: giveNewID(), question: "Onko Reactin hookit vaikeita", correctAnswer: 0, options: createOptions()},
                {id: giveNewID(), question: "Sirittääkö päässäsi?", correctAnswer: 0, options: createOptions()}]                  

                  
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


  const remove= (list, id) => {    
    list = list.filter(t => t.id !== id)
    list.map(q => q.options = q.options.filter(t => t.id !== id))
    return list
  }
  
  const update = (o)=> {
    let m = JSON.parse(JSON.stringify(mainState))

    switch (o.type) {
      case "REMOVE":    
        m = remove(m, o.data.id)
        break;
      case "ADD_OPTION":
        let newOption = {id: giveNewID(), option: giveRandomAnswerOption(), checkboxState: false}
        m.find(q => q.id === o.data.id).options.push(newOption)
        break;
      case "ADD_QUESTION":
        let newQ = {id: giveNewID(), question: "Onko tämä uusi kysymys?", correctAnswer: 0, options: createOptions()}
        m.push(newQ)
        break;
      case "SAVE_CHECKBOX_STATE":
        for (let question of m) {
          for (let op of question.options) {
            if (op.id === o.data.id) {
              op.checkboxState = !op.checkboxState
            }
          }
        }    
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