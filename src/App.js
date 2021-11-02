

import React, {useState} from "react";
import Lists from './listahässäkkä/Lists';
import Arrows from "./listahässäkkä/Arrows";
import CreateLists from "./listahässäkkä/nameObjects"

function App() {
  const [list1, setList1] = useState(CreateLists("Disney"))
  const [list2, setList2] = useState(CreateLists("Horror"))
  const [selectedID, setSelectedID] = useState()
  console.log("name id " + selectedID + " is selected")

  const setSelected = (obj) => {
    obj.selected = !obj.selected
    changeCorrectList(obj)
  }

  const changeCorrectList = (obj) =>{
    let targetList = []
    if (obj.listID === 1) {
      targetList = [].concat(list1)      
    } else {
      targetList = [].concat(list2)  
    }    
    targetList.splice(findIndex(obj, targetList), 1, obj)
    if (obj.listID === 1) {
      setLists(targetList, list2)      
    } else {
      setLists(list1, targetList)    
    }    
  }

  const findIndex = (obj, list) => {
    return list.indexOf(obj)
  }

  const setLists = (lista1 = list1, lista2 = list2) => {
    setList1(lista1)
    setList2(lista2)
  }
  

  const moveItemBetweenLists = (fromLeftToRight) => {
                              
      let srcList = []
      let targetList = []
    
      if (fromLeftToRight) {        //tekee listoista kopion sen mukaan onko lista lähettävä vai vastaanottava
        srcList = [].concat(list1)
        targetList = [].concat(list2)
      } else {
        srcList = [].concat(list2)
        targetList = [].concat(list1)    
      }
      let listCopy = [].concat(srcList)  //tekee vielä toisen kopion lähdelistasta. Tämä siksi että alla oleva metodi mahdollistaa useamman vaihtoehdon siirtämisen kerralla
      for (let n of listCopy) {
        if (n.selected) {
          n.selected = !n.selected
          targetList.push(n)
          srcList.splice(findIndex(n, srcList), 1)
        }
      }
      //listCopy.map(n => n.selected ? (n.selected = !n.selected, targetList.push(n), srcList.splice(findIndex(n, srcList), 1)) : console.log("nope"))
          
        if (fromLeftToRight) { //asettaa kopiot tiloihin
          setLists(srcList, targetList)
        } else {      
          setLists(targetList, srcList)
        }
  }


    return (
    <div class="lists">
        <Lists list={list1} setSelected={setSelected}></Lists>
        <Arrows moveItemBetweenLists ={moveItemBetweenLists}></Arrows>
        <Lists list={list2} setSelected={setSelected}></Lists>
    </div>
    )  
}
export default App;