import './App.css';
import React, {useState} from "react";

function Task5() {

    
    const [year, setyear] = useState([{month: "Tammikuu", gross: 0, net: 0}, {month: "Helmikuu", gross: 0, net: 0}, {month: "Maaliskuu", gross: 0, net: 0}, {month: "Helmikuu", gross: 0, net: 0}, {month: "Toukokuu", gross : 0, net: 0}, {month: "Kesäkuu", gross : 0, net: 0}, {month: "Heinäkuu", gross: 0, net: 0}, {month: "Elokuu", gross: 0, net: 0}, {month: "Syyskuu", gross: 0, net: 0}, {month: "Lokakuu", gross: 0, net: 0}, {month: "Marraskuu", gross: 0, net: 0}, {month: "Joulukuu", gross: 0, net: 0}])
    const [tax, setTax] = useState(0)
    
    const changeNan = (v) => {
        if (isNaN(v)) {
            return 0
        } else {
            return parseInt(v)
        }   
    }
    
    const changeValue = (i, v) => {  
        let n = changeNan(v)                
        let theMonth = year[i]
        theMonth.gross = n
        theMonth.net = countNet(n)
        replaceMonth(i, theMonth)
   
    }
    
    const replaceMonth = (i, month) => {
        let kopio = [].concat(year)
        kopio.splice(i, 1, month)
        setyear(kopio)  
    }


    const countNet = (s) => {
        let t = (s / 100) * tax
        return s - t
    }

    const changeTax = (v) => {
        let t = changeNan(v)
        setTax(t)
        for (let i = 0; i < year.length; i++) {
            let month = year[i]
            month.net = countNet(month.gross)
            replaceMonth(i, month)
        }
    }

    
  
      return (
        
        <div>
        <br></br>
        <table>
          <tr>
          <th>Kuukausi</th>
          <th>Bruttopalkka</th>
          <th>Nettopalkka</th>
          </tr>
          <tr>
          <td>{year[0].month}</td>
          <td><input onChange={event => changeValue(0, event.target.value)}></input></td>
          <td><input value = {year[0].net} ></input></td>
          </tr>
          <tr>
          <td>{year[1].month}</td>
          <td><input onChange={event => changeValue(1, event.target.value)}></input></td>
          <td><input value = {year[1].net}></input></td>
          </tr>
          <tr>
          <td>{year[2].month}</td>
          <td><input onChange={event => changeValue(2, event.target.value)}></input></td>
          <td><input value = {year[2].net}></input></td>
          </tr>
          <tr>
          <td>{year[3].month}</td>
          <td><input onChange={event => changeValue(3, event.target.value)}></input></td>
          <td><input value = {year[3].net}></input></td>
          </tr>
          <tr>
          <td>{year[4].month}</td>
          <td><input onChange={event => changeValue(4, event.target.value)}></input></td>
          <td><input value = {year[4].net}></input></td>
          </tr>
          <tr>
          <td>{year[5].month}</td>
          <td><input onChange={event => changeValue(5, event.target.value)}></input></td>
          <td><input value = {year[5].net}></input></td>
          </tr>
          <tr>
          <td>{year[6].month}</td>
          <td><input onChange={event => changeValue(6, event.target.value)}></input></td>
          <td><input value = {year[6].net}></input></td>
          </tr>
          <tr>
          <td>{year[7].month}</td>
          <td><input onChange={event => changeValue(7, event.target.value)}></input></td>
          <td><input value = {year[7].net}></input></td>
          </tr>
          <tr>
          <td>{year[8].month}</td>
          <td><input onChange={event => changeValue(8, event.target.value)}></input></td>
          <td><input value = {year[8].net}></input></td>
          </tr>
          <tr>
          <td>{year[9].month}</td>
          <td><input onChange={event => changeValue(9, event.target.value)}></input></td>
          <td><input value = {year[9].net}></input></td>
          </tr>
          <tr>
          <td>{year[10].month}</td>
          <td><input onChange={event => changeValue(10, event.target.value)}></input></td>
          <td><input value = {year[10].net}></input></td>
          </tr>
          <tr>
          <td>{year[11].month}</td>
          <td><input onChange={event => changeValue(11, event.target.value)}></input></td>
          <td><input value = {year[11].net}></input></td>
          </tr>
          <br></br>
        <tr>
        <td>Veroprosentti</td>
        <input onChange={event => changeTax(event.target.value)}></input>
        </tr> 

          
          
          
        </table>
        <br></br>
      </div>
  
  
      )  
  }


export default Task5;
