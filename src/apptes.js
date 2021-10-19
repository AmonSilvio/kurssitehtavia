import './App.css';
import React, {useState} from "react";

function App() {
    const [lista1, setYkkönen] = useState([{etunimi: "Paavo", ikä:12}, {etunimi: "Tytti", ikä: 33}, {etunimi: "Ilkka", ikä: 44}, {etunimi: "Sauli", ikä: 23}, {etunimi: "Jouko", ikä: 67}, {etunimi: "Veikko", ikä: 4}, {etunimi: "Sinikka", ikä: 90}, {etunimi: "Hillevi", ikä: 16}, {etunimi: "Arto", ikä: 42}, {etunimi: "Jonna", ikä: 35}, {etunimi: "Heidi", ikä: 28}, {etunimi: "Kosti", ikä: 67}, {etunimi: "Jussi", ikä: 38}])
    const [lista2, setKakkonen] = useState([])
    const [lista3, setKolmonen] = useState([])
    let up1on = true
    let down1on = false
    let up2on = true
    let down2on = true

    const checkOutButtons = () => {
      if (lista2.length > 0) {
        up1on = false
        down2on = false
      } else {
        up1on = true
        down2on = true
      }
      if (lista3.length > 0) {
        up2on = false
      } else {
        up2on = true
      }
      if (lista1.length > 0) {
        down2on = true
      } else {
        down1on = false
      }
    }

    const alasPainettu1 = () => {
      let ylemmmänViimeinenAlkio = lista1[lista1.length - 1]
      setKakkonen([...lista2, ylemmmänViimeinenAlkio])
      lista1.pop()
      setYkkönen([...lista1])
      checkOutButtons()
    }

    const ylösPainettu1 = () => {
      let alemmanEkaAlkio = lista2[0]
      setYkkönen([...lista1, alemmanEkaAlkio])
      lista2.shift()
      setKakkonen([...lista2])
      checkOutButtons()
    }

    const alasPainettu2 = () => {
      let ylemmmänViimeinenAlkio = lista2[lista2.length - 1]
      setKolmonen([...lista3, ylemmmänViimeinenAlkio])
      lista2.pop()
      setKakkonen([...lista2])
      checkOutButtons()
    }

    const ylösPainettu2 = () => {
      let alemmanEkaAlkio = lista3[0]
      setKakkonen([...lista2, alemmanEkaAlkio])
      lista3.shift()
      setKolmonen([...lista3])
      checkOutButtons()
    }
    
    const jarjestaNimi = () => {
      let sortedList1 = lista1.sort(SortArrayByName)
      let sortedList2 = lista2.sort(SortArrayByName)
      let sortedList3 = lista3.sort(SortArrayByName)
      setYkkönen([...sortedList1])
      setKakkonen([...sortedList2])
      setKolmonen([...sortedList3])
    }

    const jarjestaIkä = () => {
      let sortedList1 = lista1.sort(SortArrayByAge)
      let sortedList2 = lista2.sort(SortArrayByAge)
      let sortedList3 = lista3.sort(SortArrayByAge)
      setYkkönen([...sortedList1])
      setKakkonen([...sortedList2])
      setKolmonen([...sortedList3])
    }

    const SortArrayByName = (x, y) => {
      if (x.etunimi < y.etunimi) {return -1;}
      if (x.etunimi > y.etunimi) {return 1;}
      return 0;
    }

    const SortArrayByAge = (x, y) => {
      if (x.ikä < y.ikä) {return -1;}
      if (x.ikä > y.ikä) {return 1;}
      return 0;
    }



    return (<div>
      {lista1.map(item=><div>{item.etunimi} {item.ikä}</div>)}
      <button disabled = {up1on} onClick = {ylösPainettu1} >ylös</button>
      <button disabled = {down1on} onClick = {alasPainettu1} >alas</button>
      {lista2.map(item=><div>{item.etunimi} {item.ikä}</div>)}
      <button disabled = {up2on} onClick = {ylösPainettu2} >ylös</button>
      <button disabled = {down2on} onClick = {alasPainettu2} >alas</button>
      {lista3.map(item=><div>{item.etunimi} {item.ikä}</div>)}
      <button onClick = {jarjestaNimi}>Järjestä nimen perusteella</button>
      <button onClick = {jarjestaIkä}>Järjestä iän perusteella</button>
    </div>


    )  
}

export default App;
