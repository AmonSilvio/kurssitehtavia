import './App.css';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import giveNewID from './newID';


//let arr1 = [{vastaus: "ei", checkboxState: false, komponentinId: 1},{vastaus: "kyllä", checkboxState: false, komponentinId: 2},{vastaus: "ehkä", checkboxState: false, komponentinId: 3}]
//let arr2 = [{vastaus: "ei", checkboxState: false, komponentinId: 4},{vastaus: "kyllä", checkboxState: false, komponentinId: 5},{vastaus: "ehkä", checkboxState: false, komponentinId: 6}]
// {[id] : {option: giveNumberAnswer(), checkboxState: false}}

const Vastausvaihtoehdot = (p)  => {
  //const Vastausvaihtoehdot = ({questionID, options, setMainState, mainState, giveNewID})  => {
  
  //const [questionIDstate, setQuestionIDstate] = useState(questionID)
  //const [m, setMainState2] = useState(JSON.parse(JSON.stringify(mainState)))
  //const [vaihtoehdot, setVaihtoehdot] = useState(options)
  //const [vastaukset, setVastaukset] = useState([])


  const save = (id) => {
    let m = copy(p.mainState)
    m[p.questionID].options[id].checkboxState = !m[p.questionID].options[id].checkboxState
    p.setMainState(m)
  }

  const copy = (src) => {
    return JSON.parse(JSON.stringify(src))
  }

 

const addOption = () => {
  let m = copy(p.mainState)
  let previousID = p.findTheLastUsedID(m[p.questionID].options)
  let id = giveNewID(previousID)
  //m[p.questionID].options[id] = {option: "uusi vaihtoehto", checkboxState: false}  
  m[p.questionID].options = Object.assign({ [id]: {option: "uusi vaihtoehto", checkboxState: false}}, m[p.questionID].options)
  console.log(m[p.questionID].options) 
  p.setMainState(m)
}

const removeOption = (id) => {
  let m = copy(p.mainState)
  delete m[p.questionID].options[id]
  console.log(m[p.questionID].options)
  p.setMainState(m)
}


    return (
      <div>
        {Object.entries(p.options).map(([id, option]) => {
          return option.checkboxState === false ? (
          <> 
            <div class="answerlines">
              <div class="answerline">
                <input type="checkbox" id={id} onClick={() => save(id)}/> {option.option}
                <div class="deleteIcon"><DeleteIcon onClick={() => removeOption(id)}></DeleteIcon></div>
              </div>
            </div> 
        </>) 
        :
        <> 
        <div class="answerlines">
          <div class="answerline">
            <input type="checkbox" checked id={id} onClick={() => save(id)}/> {option.option}
            <div class="deleteIcon"><DeleteIcon onClick={() => removeOption(id)}></DeleteIcon></div>
          </div>
        </div> 
      </>
        })}<AddIcon  onClick={() => addOption()}></AddIcon ></div>
        
   

  );
}

export default Vastausvaihtoehdot;