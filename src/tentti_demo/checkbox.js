import './App.css';

import React, { useState, useEffect } from 'react';

const Checkbox = (p)  => {
    
    const [checked, setChecked] = useState(p.checkboxState);

    const checkNUncheck = () => {
        p.update({type: "SAVE_CHECKBOX_STATE", data: {id: p.id}})
        setChecked(!checked)

    }

    return (<div class="tenttiOption" > {!checked ? 
        <input type="checkbox" onClick={() => checkNUncheck()}/> : <input type="checkbox" checked onClick={() => checkNUncheck()}/>
      }
  </div>);
}

export default Checkbox;