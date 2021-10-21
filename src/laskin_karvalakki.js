//import './App.css';

import React, {useState} from "react";
import Nappula from "./Nappula.js"

function Laskin_karvalakkimalli() {
  const [kirjaimet, setKirjaimet] = useState(["%", "(", ")", "C", "7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"])
  const [näyttö, setNäyttö] = useState("")
  const [result, setResult] = useState("")
  const [lastOperator, setLastOperator] = useState("")
  const [operatorIncluded, setoperatorIncluded] = useState(false)
  const [resultHistory, setresultHistory] = useState([])

  
  //Tarkistaa onko merkki operaattori
  const isOperator = (cha) => {
    if (cha === "+" || cha === "-" || cha === "×" || cha==="÷" || cha==="%") {
      return true
    } else {
      return false
    }
  }

  //Etsii merkkijonosta viimeisimmän operaattorin indeksin
  const findIndexOfLastOperator = (str) => {
    for (let i = str.length; i > 0; i--) {
      console.log(i)
      if (isOperator(str[i])) {
        return i
      }
    }
    return 0
  }

  //Lisää tuloksen tuloshistoriaan
  const addNumberToResultHistory = (num) => {
    let resHistoryCopy = [].concat(resultHistory)
          resHistoryCopy.push(num)
          setresultHistory(resHistoryCopy)      
  }

  const karvalakkiEval = (cha) => {
    
    //etsii viimeksi annetun numeron kokonaisuudessaan
    let res = näyttö
    if (cha !== "%") {
        res += cha
    }
    let i = findIndexOfLastOperator(res)
    let l = res.substring(i + 1)
    let lastNum = parseFloat(l)
    
    //menee tuloshistoriassa niin monta pykälää taaksepäin kuin mitä viimeksi annetussa luvussa on merkkejä
    //ja valitsee sen tuloksen
    let lastRes = resultHistory[resultHistory.length - l.length]


    //Ja laskutoimitus tapahtuu täällä
    if (cha === "%") {                          //Jos operaattori on prosenttilasku niin sitten lasketaan vähän eri tavalla
        res = operators[cha](lastRes)
        setLastOperator("×")

    } else {
        res = operators[lastOperator](lastRes, lastNum)
    }
    console.log(lastRes + lastOperator + lastNum + "=" + res)
    addNumberToResultHistory(res)    
    return res
  }

  
  const operators = {
    "+": function(a, b) { return a + b },
    "-": function(a, b) { return a - b },
    "÷": function(a, b) { return a / b },
    "×": function(a, b) { return a * b },
    "%": function(a) { return 1 / 100 * a},
  }

 
  
  const lisääMerkki = (cha) => {
    var res = ""    
    let screen = näyttö
    if (cha !== "C") {    
        
        if (!operatorIncluded) {                    //Jos on ja jos tämä on ensimmäinen kerta kun operaattoria painetaan, 
                                                                
            addNumberToResultHistory(parseFloat(screen)) //Laittaa ennen operaattoria olevan luvun tuloslistalle ensimmäiseksi                   
                                                       //tehdään merkintä että operaattori on nyt mukana laskukaavassa 
        }                                            //eli laskin voi tästä eteenpäin ruveta laskeskelemaan lopputulosta 

     
        if (isOperator(cha)) {
            setoperatorIncluded(true)                           //Tarkistaa oliko annettu merkki operaattori
            if (näyttö.length === 0) {            //Tarkistaa oliko sitä ennen annettu lukua, jos ei niin antaa errorin
                screen = "Error!"
                cha = ""
            } else if (isOperator(                      //Tarkistaa oliko edellinenkin merkki operaattori, jos oli, niin vaihtaa
              screen.substr(screen.length - 1, 1)) ){    //uuden operaattorin edellisen tilalle
              screen = screen.slice(0, -1)
            } else {
             
              setLastOperator(cha)
            }
            if (cha === "%") {                      //Jos operaattori on % niin sitten lasketaankin koko juttuh heti
                res = karvalakkiEval(cha)                
            }
                        
        } else { 
          if (operatorIncluded) {               //Jos merkkijonossa oli mukana operaattori niin sitten tehdään laskutoimituksia              
            res = karvalakkiEval(cha)
            }
            if (cha === "=") {                  //Jos tuli painettua yhtäsuuruusmerkkiä niin se laitetaan mukaan näytölle
                cha += res
            }
        }

        setResult(res)                          //Asetetaan tulokset tulosnäytölle

        setNäyttö(screen + cha) 
        
           
   } else {                                             //Jos painettu nappi olikin C, niin sitten vaan nollataan kaikki
      setNäyttö("")
      setResult("")
      setoperatorIncluded(false)
      setresultHistory([])
    }
  }

  




return (<div class="background">
          <div class="resultBackground"><input STYLE="text-align: center;" class="screen" value={näyttö}></input>
          <input STYLE="text-align: center;" class="result" value={result}></input>
            </div>
          <div class="buttonBackground">{kirjaimet.map((kirjain, index) =><Nappula sisältö={kirjain} lisääMerkki={lisääMerkki}>  </Nappula>)}
          </div>
        </div>)

}


export default Laskin_karvalakkimalli;
