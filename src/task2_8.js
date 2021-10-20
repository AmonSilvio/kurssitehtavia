import './App.css';
import React, {useState} from "react";

function Task8() {

    const obj = {"ma":44, "pe":100, "ke":21, "ti": 66,"la":22}
  const [list1, setlist1] = useState([{day: "ma", num: 44, order: 1}, {day: "pe", num: 100, order: 5}, {day: "ke", num: 21, order: 3}, {day: "ti", num: 66, order: 2}, {day: "la", num : 22, order: 6}])
  const [list2, setlista2] = useState([])

  const list3 = []  
  Object.keys(obj).forEach(key => list3.push({[key] : list3[key]}))
  console.log(list3)

    const organizeValues = () => {
        let kopio = [].concat(list1)
        kopio = kopio.sort(function(a, b){
            return a.num-b.num
        })
        setlista2([...kopio])
    }

    const organizeDays = () => {
        let kopio = [].concat(list1)
        kopio = kopio.sort(function(a, b){
            return a.order-b.order
        })
        setlista2([...kopio])
    }

    const organizePairs = () => {
        let kopio = []
        for (let i of list1) {
            if (i.num % 2 === 0) {
                kopio.push(i)
            }
        }
        setlista2([...kopio])
    }

    const organizeE = () => {
        let kopio = []
        for (let i of list1) {
            if (i.day.substr(1,1) === "e") {
                kopio.push(i)
            }
        }
        setlista2([...kopio])
    }
    



    return (<div>
            Alkuperäinen lista:
            {list1.map(item=><div>{item.day} {item.num}</div>)}
            <button onClick = {organizeValues}>Järjestä valuen mukaan</button><br></br>
            <button onClick = {organizeDays}>Järjestä päivien mukaan</button><br></br>
            <button onClick = {organizePairs}>Luo parillisten lista</button><br></br>
            <button onClick = {organizeE}>Luo e-kirjaimillisten lista</button><br></br>
            {list2.map(item=><div>{item.day} {item.num}</div>)}
            </div>


    )  
}

export default Task8;
