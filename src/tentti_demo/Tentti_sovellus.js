import './App.css';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Kysymys  from './Kysymys'
import Tentti from "./Tentti"

import dispatch from './toiminnot';
import Tenttigeneraattori  from "./Tenttigeneraattori"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
const axios = require('axios');

/* json-server --watch db.json --port 3001
 */


let exams = Tenttigeneraattori()
console.log("Tässä näin:", exams)
                  
function Tentti_sovellus() {

  const [dataNoudettu, setDataNoudettu] = useState(false)
  const [mainState, setMainState] = useState()
  const [examNumber, setExamNumber] = useState(0)
  console.log("render")
  


  
  const update = (o)=> {
    dispatch(o, mainState, setMainState)
  }

  const clear = () => {
    localStorage.clear()
  }

  const nextExam = () => {
    setExamNumber(examNumber + 1)
  }
  
  useEffect(() => {    
    if (!dataNoudettu) {
        let avain = "localStorageAvain"
        let data = localStorage.getItem(avain)
        data = JSON.parse(data)
        if (data !== null) {
          console.log("Data haetaan local storagesta")
          setDataNoudettu(true)
          setMainState(data)
        } else {
        /*   setMainState(exams)
          setDataNoudettu(true)   */
           axios.get('http://localhost:3001/tentti')
            .then(function (response) {
            // handle success
            console.log("Tässä data: " + response.data);
            setMainState(response.data)
            setDataNoudettu(true)
            })
          .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
          }); }}        
    }, [])

    useEffect(() => {
      let avain = "localStorageAvain"
      localStorage.setItem(avain, JSON.stringify(mainState))
      },[mainState]); //makes the effect run if changed */
    

  return (<body class="body1">  {dataNoudettu ? <div> <Tentti exam={mainState[examNumber]}  update={update} nextExam={nextExam} ></Tentti> <button onClick={() => clear()}>Tyhjää muisti</button>  
   
  <br></br>
  <br></br> </div> : <div>Haetaan dataa</div>}
    </body>);
}


export default Tentti_sovellus;