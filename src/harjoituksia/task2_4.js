import './App.css';
import React, {useState} from "react";

function Task4() {

    const [year, setyear] = useState([{month: "Tammikuu", salary: 0, afterRise: 0}, {month: "Helmikuu", salary: 0, afterRise: 0}, {month: "Maaliskuu", salary: 0, afterRise: 0}, {month: "Helmikuu", salary: 0, afterRise: 0}, {month: "Toukokuu", salary : 0, afterRise: 0}, {month: "Kesäkuu", salary : 0, afterRise: 0}, {month: "Heinäkuu", salary: 0, afterRise: 0}, {month: "Elokuu", salary: 0, afterRise: 0}, {month: "Syyskuu", salary: 0, afterRise: 0}, {month: "Lokakuu", salary: 0, afterRise: 0}, {month: "Marraskuu", salary: 0, afterRise: 0}, {month: "Joulukuu", salary: 0, afterRise: 0}])
  
    const changeValue = (i, v) => {
        
        if (isNaN(v)) {
          v = 0
        } else {
            v = parseInt(v)
        }
        let kopio = [].concat(year)
        let theMonth = year[i]
        theMonth.salary = v
        theMonth.afterRise = riseUpSalary(v)
        kopio.splice(i, 1, theMonth)
        setyear(kopio)     
    }

    const riseUpSalary = (s) => {
        return s + (s / 100) * 50
    }

  
  
  
      return (
        
        <div>
        <br></br>
        <table>
          <tr>
          <th>Kuukausi</th>
          <th>Palkka</th>
          <th>Korotettu palkka</th>
          </tr>
          <tr>
          <td>{year[0].month}</td>
          <td><input onChange={event => changeValue(0, event.target.value)}></input></td>
          <td><input value = {year[0].afterRise} ></input></td>
          </tr>
          <tr>
          <td>{year[1].month}</td>
          <td><input onChange={event => changeValue(1, event.target.value)}></input></td>
          <td><input value = {year[1].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[2].month}</td>
          <td><input onChange={event => changeValue(2, event.target.value)}></input></td>
          <td><input value = {year[2].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[3].month}</td>
          <td><input onChange={event => changeValue(3, event.target.value)}></input></td>
          <td><input value = {year[3].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[4].month}</td>
          <td><input onChange={event => changeValue(4, event.target.value)}></input></td>
          <td><input value = {year[4].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[5].month}</td>
          <td><input onChange={event => changeValue(5, event.target.value)}></input></td>
          <td><input value = {year[5].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[6].month}</td>
          <td><input onChange={event => changeValue(6, event.target.value)}></input></td>
          <td><input value = {year[6].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[7].month}</td>
          <td><input onChange={event => changeValue(7, event.target.value)}></input></td>
          <td><input value = {year[7].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[8].month}</td>
          <td><input onChange={event => changeValue(8, event.target.value)}></input></td>
          <td><input value = {year[8].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[9].month}</td>
          <td><input onChange={event => changeValue(9, event.target.value)}></input></td>
          <td><input value = {year[9].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[10].month}</td>
          <td><input onChange={event => changeValue(10, event.target.value)}></input></td>
          <td><input value = {year[10].afterRise}></input></td>
          </tr>
          <tr>
          <td>{year[11].month}</td>
          <td><input onChange={event => changeValue(11, event.target.value)}></input></td>
          <td><input value = {year[11].afterRise}></input></td>
          </tr> 

          
          
          
        </table>
        <br></br>
      </div>
  
  
      )  
  }


export default Task4;
