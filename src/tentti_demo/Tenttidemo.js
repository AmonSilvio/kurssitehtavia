import './App.css';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Kysymykset  from './Kysymykset'
import giveNewID from './newID';

const giveNumberAnswer = () => {
  let optionString = ["Kyllä", "Joo", "Ei", "Ehkä", "Mitä se sulle kuuluu?", "No jaa", "En kyllä osaa sanoa", "Jaa-a kuule", "No tuota niin niin...", "Kysy joltain muulta", "Että mitä?"]
  let i = giveRandomNumber(0, optionString.length - 1)
  return optionString[i]
}


const createOptions = () => {
  let options = {}
    for (let i = 0; i < giveRandomNumber(3, 6); i++) {
      let id = giveNewID()
      options[id] = {option: giveNumberAnswer(), checkboxState: false}
     // options = Object.assign({ [id]: {option: giveNumberAnswer(), checkboxState: false}}, options)
    }
    return options
}

const giveRandomNumber = (min=0, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


let questions = {[giveRandomNumber(0, 10000000)] : {question: "Onko JavaScript kivaa?", correctAnswer: 0, options: createOptions()},
                  [giveRandomNumber(0, 10000000)] : {question:  "Onko React kivaa?", correctAnswer: 0, options: createOptions()},
                  [giveRandomNumber(0, 10000000)] : {question: "Onko Reactin hookit vaikeita", correctAnswer: 0, options: createOptions()},
                  [giveRandomNumber(0, 10000000)] : {question: "Sirittääkö päässäsi?", correctAnswer: 0, options: createOptions()}}

                  Object.entries(questions).map(([id, question]) => console.log(question))


function Tenttidemo() {

  const [mainState, setMainState] = useState(() => {
    let avain = "localStorageAvain"
    let data = localStorage.getItem(avain)
    data = JSON.parse(data)
    console.log(data,"data")
    let bool = false
    //if (data === null) {
      bool = true
    //}
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
    let newQID = giveRandomNumber(0, 10000000)
    let m = JSON.parse(JSON.stringify(mainState))
    m = Object.assign({ [newQID]: {question: "Onko tämä uusi kysymys?", correctAnswer: 0, options: createOptions()}}, m)
    console.log(m[newQID])
    setMainState(m)
  }


  return (    
    <Container> 
  
        <> 
        <Kysymykset questions={questions} setMainState={setMainState} giveNewID={giveNewID} mainState={mainState}/>
        </>
      
      <br></br>
      <br></br>
             <button onClick={() => addQuestion()}>Lisää kysymys</button>     
    </Container>
  );
}


export default Tenttidemo;