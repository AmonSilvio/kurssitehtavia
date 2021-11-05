import React, { useState, useEffect } from 'react';
import Timer from "./timer"

const axios = require('axios');
function Norris() {

  const [joke, setJoke] = useState([""])
  const [seconds, setSeconds] = useState(20)
  const [jokeIDs, setJokeIDs] = useState([])
  const [jokeScreen, setJokeScreen] = useState([])
 // const [image, setImage] = useState([])


  const oldJokeCheckOut = (id) => {
    for (let i of jokeIDs) {
      if (i === id) {
        return true
      }
    }
    return false
  }

  const giveRandomJokeNumber = () => {
    return Math.floor(Math.random() * localStorage.length)
  }

  useEffect(() => {
    let j = ""
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(function (response) {

        // handle success
        j = response.data.value
        let id = response.data.id
     //   setImage(response.data.icon_url)
        if (!oldJokeCheckOut(id)) {
          setJoke(j)
          let jokeIDcopy = [].concat(joke)
          jokeIDcopy.push(id)
          setJokeIDs(jokeIDcopy)        
          localStorage.setItem(id, response.data)
        } else {
          gimmeSeconds(20)
        }
      })
      .catch(function (error) {        
        // handle error
        console.log(error);
        let r = giveRandomJokeNumber()
          j = localStorage.getItem(localStorage.key(r))
          if (!oldJokeCheckOut(j.id)) {
            setJoke(j)
          } else {
            gimmeSeconds(20)
          }
      })
      .then(function () {
        console.log("Tämö suoritetaan aina")
        // always executed
      });
    createJokeScreen(j)
    console.log("kutsuttiin")    
  }, [seconds === 0]);


 const createJokeScreen = (jo) => {
    if (jo.length > 1) {
      let howManyChas = (jo.length / 5) * (21 - seconds)  
      let sub = joke.substring(0, howManyChas.toFixed(0))
      setJokeScreen(sub)
      console.log(seconds + "sekuntia ja rivi on: " + sub)  
    }
 }


  const gimmeSeconds = (seconds) => {
    createJokeScreen(joke)
    setSeconds(seconds)
  }

  //<img src={image}></img> 
  return (<body class="bodyNorris">
    <div class="boxNorris">

        <div>{jokeScreen}</div>
        <br></br>
        <br></br>
        <div class="timer"><Timer gimmeSeconds={gimmeSeconds}  createJokeScreen={createJokeScreen}></Timer> </div> 
        <br></br>
        <br></br>       
    </div></body>

  );

}
export default Norris;