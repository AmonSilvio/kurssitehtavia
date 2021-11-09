import './App.css';
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Vastausvaihtoehto = (p)  => {
    
    const [editMode, setEditMode] = useState(p.option.editMode);

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            setEditMode(false)
        }
      }
    
    const editModeChange = () => {
        p.update({type: "CHANGE", data:{id: p.option.id, txt: p.option.txt, editMode: !editMode}})
        setEditMode(!editMode)
    }   


    return (<div class="tenttiOption">
       {!editMode? <label class="text" onClick={() => editModeChange(!editMode)}>{p.option.txt}</label> :
                <input class="tenttiInput" onBlur={() => editModeChange(false)} autoFocus={true} onKeyPress={handleKeyPress} type="text" onChange={(event) => p.update({type: "CHANGE", data:{id: p.option.id, txt: event.target.value}})}
                value={p.option.txt}/>}
                   <div class="icons"><div class="glows"><EditIcon onClick={() => editModeChange(!editMode)}></EditIcon></div><div class="glows"> <DeleteIcon onClick={() => p.update({type: "REMOVE", data: {id: p.option.id}})}></DeleteIcon></div></div>
                </div>   
  );
}

export default Vastausvaihtoehto;