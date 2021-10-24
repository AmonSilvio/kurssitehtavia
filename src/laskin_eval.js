//import './App.css';

import React, {useState} from "react";
import Nappula from "./Nappula.js"

function Laskin_eval() {
  const [kirjaimet, setKirjaimet] = useState(["@", "(", ")", "C", "7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "=", "+"])
  const [näyttö, setNäyttö] = useState("")
  const [result, setResult] = useState("")
  const [operatorIncluded, setoperatorIncluded] = useState(false)

  const isOperator = (cha) => {
    if (cha === "+" || cha === "-" || cha === "×" || cha==="÷") {
      return true
    } else {
      return false
    }
  }

  //Korvaa vanhan liiton kerto- ja jakolaskumerkit sellaisiin joita kone ymmärtää
  const replaceChas = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "×") {
        str = str.substring(0, i) + "*" + str.substring(i + 1)
      }
      if (str[i] === "÷") {
        str = str.substring(0, i) + "/" + str.substring(i + 1)
      }
    }
    return str
  }

  
  const lisääMerkki = (cha) => {

    let screen = näyttö
    if (cha !== "C") {                                  //Jos painetaan mitä tahansa muuta kuin C-nappia:
     
        if (isOperator(cha)) {                          //Taskistetaan ensin onko painettu nappi operaattori.
                                  
            if (!operatorIncluded) {                    //Jos on ja jos tämä on ensimmäinen kerta kun operaattoria painetaan, 
              setoperatorIncluded(true)                 //tehdään merkintä että operaattori on nyt mukana laskukaavassa 
                                                        //eli laskin voi tästä eteenpäin ruveta laskeskelemaan lopputulosta            
            
            } else if (isOperator(                      //Tarkistaa oliko edellinenkin merkki operaattori, jos oli, niin vaihtaa
              screen.substr(screen.length - 1, 1)) ){    //uuden operaattorin edellisen tilalle
              screen = screen.slice(0, -1)
            }
                        
        } else if (operatorIncluded) {                  //Jos painettu nappi ei ollut operaattori, niin:                         
            let res = replaceChas(screen)               //muutetaan kerto- ja jakomerkit sellaiseen muotoon että laskin ne ymmärtää                        
                                                        //(näytöllä ne säiyvät vanhassa muodossaan)

            if (cha !== "=") {                          //jos painettu nappi oli numero niin lisätään se laskukaavaan mukaan
              res = res + cha                          
            } else {                                    //vaan jos painettiin yhtäsuuruusmerkkiä niin lisätään laskun lopputulos näytön merkkijonon mukaan
              cha += (eval (res))
            }
            setResult(eval (res))
        }
      setNäyttö(screen + cha)            
    } else {                                             //Jos painettu nappi olikin C, niin sitten vaan nollataan kaikki
      setNäyttö("")
      setResult("")
      setoperatorIncluded(false)
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


export default Laskin_eval;
