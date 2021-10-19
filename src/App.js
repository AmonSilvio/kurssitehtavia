import './App.css';
import Task2_1_2_3 from "./task2_1_2_3.js"
import Task2_4 from "./task2_4"
import Task2_5 from "./task2_5"
import Task2_6 from "./task2_6"

import React, {useState} from "react";

function App() {
  const [sovellus, setSovellus] = useState(0)

  const nappula1Painettu = () => {
    setSovellus(0)
  }
  const nappula2Painettu = () => {
    setSovellus(1)
  }
  const nappula3Painettu = () => {
    setSovellus(2)
  }
  const nappula4Painettu = () => {
    setSovellus(3)
  }
     //  {sovellus==0?<Task2_1_2_3/>:<Task2_4/>}
    //  {sovellus==0?<Task2_1_2_3/>:<Task2_4/>}

    return (<div>
      <button onClick ={nappula1Painettu}>Tehtävät 2.1, 2.2 ja 2.2</button>
      <button onClick ={nappula2Painettu}>Tehtävät 2.4</button>
      <button onClick ={nappula3Painettu}>Tehtävät 2.5</button>
      <button onClick ={nappula4Painettu}>Tehtävät 2.6</button>

      {sovellus == 0 &&
      <Task2_1_2_3 />
    }
    {sovellus == 1 &&
      <Task2_4/>
    }
     {sovellus == 2 &&
      <Task2_5/>
    }
     {sovellus == 3 &&
      <Task2_6/>
    }

    </div>



    )  
}

export default App;
