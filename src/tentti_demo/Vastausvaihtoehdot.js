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
                <input type="checkbox" id={id} onClick={() => p.checkBoxStateSave(p.questionID, id)}/> {option.option}
                <div class="deleteIcon"><DeleteIcon onClick={() => p.removeOption(p.questionID, id)}></DeleteIcon></div>
              </div>
            </div> 
        </>) 
        :
        <> 
        <div class="answerlines">
          <div class="answerline">
            <input type="checkbox" checked  onClick={() => p.checkBoxStateSave(p.questionID, id)}/> {option.option}
            <div class="deleteIcon"><DeleteIcon onClick={() => p.removeOption(p.questionID, id)}></DeleteIcon></div>
          </div>
        </div> 
      </>
        })}<AddIcon  onClick={() => p.addOption(p.questionID)}></AddIcon ></div>
   

  );
}

export default Vastausvaihtoehdot;