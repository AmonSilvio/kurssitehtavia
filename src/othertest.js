//import logo from './logo.svg';
//import './App.css';
import React, { useState} from 'react';

function App() {
  const days = ["ma", "ti", "ke", "to", "pe", "la", "su"]
  const [valittuPaiva, setvalittuPaiva] = useState("")
  //const [days, setDays] =  useState("ma", "ti", "ke", "to", "pe", "la", "su")
  const painike1 = () => {
    setvalittuPaiva(days[0])

  }
  const painike2 = () => {
    setvalittuPaiva(days[1])

  }
  const painike3 = () => {
    setvalittuPaiva(days[2])
  }
  const painike4 = () => {
    setvalittuPaiva(days[3])
  }
  const painike5 = () => {
    setvalittuPaiva(days[4])
  }
  const painike6 = () => {
    setvalittuPaiva(days[5])
  }
  const painike7 = () => {
    setvalittuPaiva(days[6])
  }

  return (<div>
      <button onClick = {painike1}>
        1
      </button>
      <button onClick = {painike2}>
        2
      </button>
      <button onClick = {painike3}>
        3
      </button>
      <button onClick = {painike4}>
        4
      </button>
      <button onClick = {painike5}>
        5
      </button>
      <button onClick = {painike6}>
        6
      </button>
      <button onClick = {painike7}>
        7
      </button>
      <p>Valitsit päivän: {valittuPaiva}</p>
    </div>
  );
}

export default App;