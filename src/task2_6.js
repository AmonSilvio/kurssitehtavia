import './App.css';
import React, {useState} from "react";

function Task6() {
    const [lista1, setLista1] = useState([1, 4, 100, 2, 5, 4])
    const [lista2, setLista2] = useState(["1", "4", "100", "2", "5", "4"])
  
  
   
    const jarjestaNumerot = () => {
    let sortedList1 = lista1.sort()
    setLista1([...sortedList1])
    }

    const jarjestaMerkkiJonot = () => {
    let sortedList2 = lista2.sort()
    setLista2([...sortedList2])
    }



    return (<div>
    <div>Numerot: 
      {lista1.map(item=><div>{item}</div>)}</div>
      <button onClick = {jarjestaNumerot}>Järjestä numerot</button>
        <div>Merkkijonot: 
      {lista2.map(item=><div>{item}</div>)}</div>
      <button onClick = {jarjestaMerkkiJonot }>Järjestä merkkijonot</button>
    </div>


    )  
}

export default Task6;

