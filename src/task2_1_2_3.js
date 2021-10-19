import './App.css';
import React, {useState} from "react";

function Task2_1_2_3() {

  const [tuntiLista, settuntiLista] = useState([{day: "Maanantai", hours: 0}, {day: "Tiistai", hours: 0}, {day: "Keskiviikko", hours: 0}, {day: "Torstai", hours: 0}, {day: "Perjantai", hours : 0}, {day: "Lauantai", hours : 0}, {day: "Sunnuntai", hours: 0}])
  const [avNum, setavNum] = useState(0)
  const [amount, setamount] = useState(0)
  const [smallest, setsmallest] = useState(0)
  const [biggest, setbiggest] = useState(0)

  const changeValue = (i, v) => {
      if (isNaN(v)) {
        v = 0
      } else {
        v = parseInt(v)
      }
      console.log(tuntiLista)
      let kopio = [].concat(tuntiLista)
      let theDay = tuntiLista[i]
      theDay.hours = v
      kopio.splice(i, 1, theDay)
      settuntiLista(kopio)
      calculateAverage()
      let h = kopio[i].hours      
      if (smallest === 0 || kopio[i].hours < smallest) {
        setsmallest(h)
      }
      if (kopio[i].hours > biggest) {
        setbiggest(h)
      }
  }
  const countSum = () => {
      let sum = 0
      let a = 0
      for (let i = 0; i < tuntiLista.length; i++) {
        let h = tuntiLista[i].hours
        if (h > 0) {
          a++        
        }
        sum += h
      }
      setamount(a)
      console.log("En ymmärrä miksi edellinen rivi ei päivitä annettua muuttujaa heti vaan vasta ikään kuin seuraavalla kierroksella. Eli siis muuttujan amount arvo on tällä hetkellä: " + amount + ", vaikka sen pitäisi olla " + (amount + 1))
      return sum
  }

  const calculateAverage = () => {     
      let sum = countSum()
      let result = (sum / (amount + 1)).toFixed(0)
      setavNum(result)
  }



    return (
      
      <div>
      <br></br>
      <table>
        <tr>
        <th>Viikonpäivä</th>
        <th>Tunnit</th>
        </tr>
        <tr>
        <td>{tuntiLista[0].day}</td>
        <input onChange={event => changeValue(0, event.target.value)}></input>
        </tr>
        <tr>
        <td>{tuntiLista[1].day}</td>
        <input onChange={event => changeValue(1, event.target.value)}></input>
        </tr>
        <tr>
        <td>{tuntiLista[2].day}</td>
        <input onChange={event => changeValue(2, event.target.value)}></input>
        </tr>
        <tr>
        <td>{tuntiLista[3].day}</td>
        <input onChange={event => changeValue(3, event.target.value)}></input>
        </tr>
        <tr>
        <td>{tuntiLista[4].day}</td>
        <input onChange={event => changeValue(4, event.target.value)}></input>
        </tr>
        <tr>
        <td>{tuntiLista[5].day}</td>
        <input onChange={event => changeValue(5, event.target.value)}></input>
        </tr>
        <tr>
        <td>{tuntiLista[6].day}</td>
        <input onChange={event => changeValue(6, event.target.value)}></input>
        </tr>
        <br></br>
        <tr>
        <td>Keskiarvo</td>
        <input value={avNum}></input>
        </tr>
        <tr>
        <td>Pienin</td>
        <input value={smallest}></input>
        </tr>
        <tr>
        <td>Suurin</td>
        <input value={biggest}></input>
        </tr>
        
        
        
      </table>
      <br></br>
    </div>


    )  
}

export default Task2_1_2_3;
