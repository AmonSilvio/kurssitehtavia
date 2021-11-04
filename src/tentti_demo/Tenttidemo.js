import './App.css';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Kysymykset  from './Kysymykset'
import giveNewID from './newID';

const giveRandomAnswerOption = (options) => {
  let optionString = ["Kyllä", "Joo", "Ei", "Ehkä", "Mitä se sulle kuuluu?", "No jaa", "En kyllä osaa sanoa", "Jaa-a kuule", "No tuota niin niin...", "Kysy joltain muulta", "Että mitä?", "Nyt äijä kuule...", "Jätä mut rauhaan!", "Upeaa!!!"]
  let nameFound = false
  let w = optionString[0]  
    while (nameFound === false) {
      let foundSameOption = 0
      let i = giveRandomNumber(0, optionString.length - 1)
      w = optionString[i]  
      for (let o of options) {
        if (o === w) {
          foundSameOption++
       }
      }
      if (foundSameOption === 0) {
        nameFound = true  
      }
    }      
  return w
}


const createOptions = () => {
  let options = {}
  let optionList = []
  let id = 10
    for (let i = 0; i < giveRandomNumber(3, 6); i++) {
      id = giveNewID(id)
      let o = giveRandomAnswerOption(optionList)
      optionList.push(o)
      options[id] = {option: o, checkboxState: false}
     // options = Object.assign({ [id]: {option: giveRandomAnswerOption(), checkboxState: false}}, options)
    }
    return options
}

const giveRandomNumber = (min=0, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


let questions = {[giveNewID(10, 100)] : {question: "Onko JavaScript kivaa?", correctAnswer: 0, options: createOptions()},
                  [giveNewID(200, 1000)] : {question:  "Onko React kivaa?", correctAnswer: 0, options: createOptions()},
                  [giveNewID(300, 3000)] : {question: "Onko Reactin hookit vaikeita", correctAnswer: 0, options: createOptions()},
                  [giveNewID(400, 4000)] : {question: "Sirittääkö päässäsi?", correctAnswer: 0, options: createOptions()}}

             


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
    //return bool ? questions : data
    return questions
  });

  console.log("render")
  
  useEffect(() => {    
  let avain = "localStorageAvain"
  localStorage.setItem(avain, JSON.stringify(mainState))
  console.log("useEffect")
  },[mainState]); //makes the effect run if changed


  const addQuestion = () => {
    let m = JSON.parse(JSON.stringify(mainState))
    let previousID = findTheLastUsedID(m)
    let newQID = giveNewID(previousID)
    m = Object.assign({ [newQID]: {question: "Onko tämä uusi kysymys?", correctAnswer: 0, options: createOptions()}}, m)
    console.log(m)
    setMainState(m)
  }


  const findTheLastUsedID = (options) => {
    let l = Object.keys(options)
    return l[l.length - 1]
  }

  return (    
    <Container>   
        <> 
        <Kysymykset questions={questions} setMainState={setMainState} giveNewID={giveNewID} mainState={mainState} findTheLastUsedID={findTheLastUsedID} />
        </>      
      <br></br>
      <br></br>
             <button onClick={() => addQuestion()}>Lisää kysymys</button>     
    </Container>
  );
}


export default Tenttidemo;