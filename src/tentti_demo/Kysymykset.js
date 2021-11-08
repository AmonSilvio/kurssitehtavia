import './App.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Vastausvaihtoehto from './Vastausvaihtoehto';
import Checkbox from './checkbox';



const Kysymykset = (p)  => {


  const [editMode, setEditMode] = useState(p.question.editMode);

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
          setEditMode(false)
      }
    }

    const editModeChange = () => {
      p.update({type: "CHANGE", data:{id: p.question.id, txt: p.question.txt, editMode: !editMode}})
      setEditMode(!editMode)
  }   
  

  return (<div>
    
    <Box class="container">
      <div class="box shadow">       
            <Grid class="textbox"> 
             <div class="titleLine">
               {!editMode ? <label class="tenttih1" onClick={() => editModeChange()}>{p.question.txt}</label> :
               <input class="tenttiInput" onBlur={() => editModeChange()} autoFocus={true} onKeyPress={handleKeyPress} type="text" onChange={(event) => p.update({type:"CHANGE", data: {id: p.question.id, txt: event.target.value}})} value={p.question.txt} />}
               <div class="titleSymbols">
               <EditIcon onClick={() => editModeChange()}></EditIcon>
              <DeleteIcon onClick={() => p.update({type: "REMOVE", data: {id: p.question.id}})}></DeleteIcon></div>
              </div>            
              <div>
        {p.question.options.map(option => {return (         
          <> 
            <div class="answerlines">
              <div class="answerline"> 
              <Checkbox id={option.id} checkboxState={option.checkboxState} update={p.update} />
              <Vastausvaihtoehto update={p.update} option={option}/>        
              </div>
            </div> 
        </> )
        
        })}<AddIcon  onClick={() => p.update({type: "ADD_OPTION", data: {id: p.question.id}})}></AddIcon ></div>
   
                       
            </Grid>
                                     
       </div>
    </Box></div>
  );
}




export default Kysymykset;