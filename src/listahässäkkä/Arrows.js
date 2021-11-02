import './App.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';




const Arrows = (props)  => {

  return (
    <div class = "arrows">
    <button class="arrowbutton" onClick = {() => props.moveItemBetweenLists(true)}><ArrowForwardIcon></ArrowForwardIcon></button>
    <br></br>
    <br></br>
    <button class="arrowbutton" onClick = {() => props.moveItemBetweenLists(false)}><ArrowBackIcon></ArrowBackIcon></button>
  </div>   
  );
}

export default Arrows;