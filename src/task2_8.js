import './App.css';
import React, {useState} from "react";

function Task2_1_2_3() {

  const [list1, setlist1] = useState([{day: "ma", num: 44}, {day: "pe", num: 100}, {day: "ke", num: 21}, {day: "ti", num: 66}, {day: "la", num : 22}])
  const [list2, setlista2] = useState([])





    return (
      
        (<div>
            <div>Alkuperäinen lista: 
              {lista1.map(item=><div>{item}</div>)}</div>
              <button onClick = {jarjestaNumerot}>Järjestä numerot</button>
                <div>Valuen mukaan: 
              {lista2.map(item=><div>{item}</div>)}</div>
            </div>


    )  
}

export default Task8;
