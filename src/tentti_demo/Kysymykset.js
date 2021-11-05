import './App.css';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Vastausvaihtoehdot from './Vastausvaihtoehdot'
import DeleteIcon from '@mui/icons-material/Delete';


const Kysymykset = (p)  => {
  

  return (<div>
    {p.mainState.map(question => (
    <Box class="container">
      <div class="box shadow">       
            <Grid class="textbox"> 
             <div class="titleLine">
              <h1>{question.question}</h1><DeleteIcon onClick={() => p.update({type: "REMOVE", data: {id: question.id}})}></DeleteIcon></div>
              <Vastausvaihtoehdot update={p.update} questionID={question.id} options={question.options}/>                        
            </Grid>
                                     
       </div>
    </Box> ))}</div>
  );
}




export default Kysymykset;