//import './App.css';
import Laskin_karvalakkimalli from './laskin_karvalakki';
import Laskin_eval from './laskin_eval';
import React, {useState} from "react";
function App() {
  const [sovellus, setSovellus] = useState(0)
  const nappula1Painettu = () => {
    setSovellus(0)
  }
  const nappula2Painettu = () => {
    setSovellus(1)
  }

  
  //  {sovellus==0?<Task2_1_2_3/>:<Task2_4/>}
    //  {sovellus==0?<Task2_1_2_3/>:<Task2_4/>}
    return (<div>
      <button onClick ={nappula1Painettu}>Laskin joka hyödyntää evalia</button>
      <button onClick ={nappula2Painettu}>Laskin joka on kova jätkä ja osaa melkein laskea itse</button>
      <br></br>
      <br></br>
      <br></br>

      {sovellus == 0 &&
      <Laskin_eval/>
    }
    {sovellus == 1 &&
      <Laskin_karvalakkimalli/>
    }
    </div>
    )  
}
export default App;