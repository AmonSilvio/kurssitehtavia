import './App.css';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';



const Vastausvaihtoehdot = (p)  => {

    return (
      <div>
        {Object.entries(p.options).map(([id, option]) => {
          return option.checkboxState === false ? (
          <> 
            <div class="answerlines">
              <div class="answerline">
                <input type="checkbox" id={id} onClick={() => p.update({type: "SAVE_CHECKBOX_STATE", data: {questionID: p.questionID, optionID: id}})}/> {option.option}
                <div class="deleteIcon"><DeleteIcon onClick={() => p.update({type: "REMOVE_STUDENT", data: {questionID: p.questionID, optionID: id}})}></DeleteIcon></div>
              </div>
            </div> 
        </>) 
        :
        <> 
        <div class="answerlines">
          <div class="answerline">
            <input type="checkbox" checked  onClick={() => p.update({type: "SAVE_CHECKBOX_STATE", data: {questionID: p.questionID, optionID: id}})}/> {option.option}
            <div class="deleteIcon"><DeleteIcon onClick={() => p.update({type: "REMOVE_STUDENT", data: {questionID: p.questionID, optionID: id}})}></DeleteIcon></div>
          </div>
        </div> 
      </>
        })}<AddIcon  onClick={() => p.update({type: "ADD_STUDENT", data: {questionID: p.questionID}})}></AddIcon ></div>
   

  );
}

export default Vastausvaihtoehdot;