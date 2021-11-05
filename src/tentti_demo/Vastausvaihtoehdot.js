import './App.css';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';



const Vastausvaihtoehdot = (p)  => {


    return (
      <div>
        {p.options.map(option => {
          return option.checkboxState === false ? (
          <> 
            <div class="answerlines">
              <div class="answerline">
                <input type="checkbox" onClick={() => p.update({type: "SAVE_CHECKBOX_STATE", data: {id: option.id}})}/> {option.option}
                <div class="deleteIcon"><DeleteIcon onClick={() => p.update({type: "REMOVE", data: {id: option.id}})}></DeleteIcon></div>
              </div>
            </div> 
        </>) 
        :
        <> 
        <div class="answerlines">
          <div class="answerline">
            <input type="checkbox" checked  onClick={() => p.update({type: "SAVE_CHECKBOX_STATE", data: {optionID: option.id}})}/> {option.option}
            <div class="deleteIcon"><DeleteIcon onClick={() => p.update({type: "REMOVE", data: {optionID: option.id}})}></DeleteIcon></div>
          </div>
        </div> 
      </>
        })}<AddIcon  onClick={() => p.update({type: "ADD_OPTION", data: {id: p.questionID}})}></AddIcon ></div>
   

  );
}

export default Vastausvaihtoehdot;