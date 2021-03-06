import './App.css';
import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Vastausvaihtoehto from './Vastausvaihtoehto';
import Checkbox from './checkbox';



const Kysymys = (p)  => {


  const [editMode, setEditMode] = useState(p.question.editMode);

  const save = () => {
    p.update({type: "SAVE", data:{obj: p.question, id: p.question.id, definition: "questions"}} )
  }

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
          save()
          setEditMode(false)
      }
    }

    const editModeChange = () => {
      p.update({type: "CHANGE", data:{id: p.question.id, txt: p.question.txt, editMode: !editMode}})
      if (editMode === true) {
        save()
      }
      setEditMode(!editMode)
  }   
  

  return (<div  id="kysymys" data-testid="kysymys2">
    
    <Box class="container">
      <div class="box shadow">       
            <Grid class="textbox"> 
             <div class="titleLine">
               {!editMode ? <label class="tenttih1" onClick={() => editModeChange()}>{p.question.txt}</label> :
               <input class="tenttiInput" onBlur={() => editModeChange()} autoFocus={true} onKeyPress={handleKeyPress} type="text" onChange={(event) => p.update({type:"CHANGE", data: {id: p.question.id, txt: event.target.value}})} value={p.question.txt} />}
               <div class="titleSymbols">
               <div class="glows"> <EditIcon onClick={() => editModeChange()}></EditIcon></div>
               <div class="glows">
              <DeleteIcon onClick={() => p.update({type: "REMOVE_QUESTION", data: {id: p.question.id}})}></DeleteIcon></div></div>
              </div>            
              <div>
        {p.question.options.map(option => {return (         
           
            <div class="answerlines">
              <div class="answerline"> 
              <Checkbox id={option.id} checkboxState={option.checkboxState} update={p.update} />
              <Vastausvaihtoehto update={p.update} option={option}/>        
              </div>
            </div> 
         )
        
        })}<AddIcon  onClick={() => p.update({type: "ADD_OPTION", data: {id: p.question.id}})}></AddIcon ></div>
   
                       
            </Grid>
                                     
       </div>
    </Box></div>
  );
}




export default Kysymys;