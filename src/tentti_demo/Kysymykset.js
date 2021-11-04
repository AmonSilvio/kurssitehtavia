import './App.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Vastausvaihtoehdot from './Vastausvaihtoehdot'
import DeleteIcon from '@mui/icons-material/Delete';


const Kysymykset = (p)  => {

  const removeQuestion = (id) => { 
    let m = JSON.parse(JSON.stringify(p.mainState))
    delete m[id]
    console.log(m)
    p.setMainState(m)  
  }
  console.log("Kysymykset: " + p.mainState)
  

  return (<div>
    {Object.entries(p.questions).map(([id, question]) => ( console.log(question), 
    <Box class="container">
      <div class="box shadow">       
            <Grid class="textbox"> 
             <div class="titleLine">
              <h1>{question.question}</h1><DeleteIcon onClick={() => removeQuestion(id)}></DeleteIcon></div>
              <Vastausvaihtoehdot questionID={id} options={question.options} setMainState={p.setMainState} mainState={p.mainState} findTheLastUsedID={p.findTheLastUsedID}/> 
                       
            </Grid>
                                     
       </div>
    </Box> ))}</div>
  );
}




export default Kysymykset;