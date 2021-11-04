import './App.css';
import Tenttidemo from "./tentti_demo/Tenttidemo"
import Listat from "./listahässäkkä/Listat"

import React, {useState} from "react";

function App() {
  const [sovellus, setSovellus] = useState(0)

  const nappula1Painettu = () => {
    setSovellus(0)
  }
  const nappula2Painettu = () => {
    setSovellus(1)
  }

  document.body.style = 'background: black;';
return (<div>
      <button class="Appbuttons" onClick ={nappula1Painettu}>Tenttidemo</button>
      <button class="Appbuttons" onClick ={nappula2Painettu}>Listahässäkkä</button>

      
      {sovellus == 0 &&
      <Tenttidemo></Tenttidemo>
    }     {sovellus == 1 &&
      <Listat></Listat>
    }
      


    </div>



    )  
}

export default App;