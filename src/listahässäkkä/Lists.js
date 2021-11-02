import './App.css';
import React from 'react';


const Lists = (props)  => {

  const checkOutIfListHasItems = (list) => {
    if (list.length > 0) {
      return true
    } else {
      return false
    }

  }


  return (
    <div class="listBackground">
    <div class="textbox"> {checkOutIfListHasItems(props.list) ? props.list.map(n => 
    !n.selected ? <div class="selection" onClick={() => props.setSelected(n)}> {n.name} <br></br></div> 
    : <div class="selected" onClick={() => props.setSelected(n)}> {n.name} <br></br></div>  )         
        : "Lista tyhjä"}
    </div>
  </div>    
  );
}

export default Lists;