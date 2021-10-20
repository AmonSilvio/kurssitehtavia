//import './App.css';

import React, {useState} from "react";
import Nappula from "./Nappula.js"

function App() {
  const [kirjaimet, setKirjaimet] = useState(["@", "(", ")", "C", "7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"])
  const [näyttö, setNäyttö] = useState("")
  const [result, setResult] = useState("")
  const [lastNum, setlastNum] = useState(0)

  const lisääMerkki = (merkki) => {
    
    if (merkki!=="=" && merkki!== "C") {
      setNäyttö(näyttö+merkki)
      let parsed = parseInt(merkki) 
      if (!isNaN(parsed)) {
        setlastNum(parsed)
        let operator = näyttö.substr(näyttö.length - 1, 1)            
        if (operator === "+" || operator === "-" || operator === "×" || operator==="÷") {          
          let res = (operators[operator](lastNum, parsed))
          setlastNum(res)
          setResult(res)
        }                    
      }
    } else if (merkki === "C") {
      setNäyttö("")
      setResult("")
    } else if (merkki === "=") {
      setNäyttö("") 
    }
  }

  const operators = {
    "+": function(a, b) { return a + b },
    "-": function(a, b) { return a - b },
    "÷": function(a, b) { return a / b },
    "×": function(a, b) { return a * b },
  }



return (<div class="background">
          <div class="resultBackground"><input STYLE="text-align: center;" class="screen" value={näyttö}></input>
          <input STYLE="text-align: center;" class="result" value={result}></input>
            </div>
          <div class="buttonBackground">{kirjaimet.map((kirjain, index) =><Nappula sisältö={kirjain} lisääMerkki={lisääMerkki}>  </Nappula>)}
          </div>
        </div>)

}


export default App;
