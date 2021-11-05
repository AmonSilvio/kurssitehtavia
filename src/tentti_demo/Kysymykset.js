import './App.css';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Vastausvaihtoehdot from './Vastausvaihtoehdot'
import DeleteIcon from '@mui/icons-material/Delete';


const Kysymykset = (p)  => {
  

  return (<div>
    {Object.entries(p.mainState).map(([id, question]) => ( console.log(question), 
    <Box class="container">
      <div class="box shadow">       
            <Grid class="textbox"> 
             <div class="titleLine">
              <h1>{question.question}</h1><DeleteIcon onClick={() => p.update({type: "REMOVE_QUESTION", data: {questionID: id}})}></DeleteIcon></div>
              <Vastausvaihtoehdot update={p.update} questionID={id} options={question.options}/>                        
            </Grid>
                                     
       </div>
    </Box> ))}</div>
  );
}




export default Kysymykset;