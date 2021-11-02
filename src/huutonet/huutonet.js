

import React, { useState, useEffect } from 'react';

const axios = require('axios');
function App() {

  const [kategoriat, setKategoriat] = useState([])
  const [ladattu, setLadattu] = useState(false)
  const [kategoria, setKategoria] =useState(0)
  const [items, setItems] =useState([])
  const [tiedot, setTiedot] = useState([])

//  https://api.huuto.net/1.1/items?category=86

//  const [count, setCount] = useState(0);
  //https://api.huuto.net/1.1/categories

  useEffect(() => {
    /* async
    try {
    } catch {}
    finally{} */
    axios.get('https://api.huuto.net/1.1/categories')
      .then(function (response) {
        // handle success
        console.log(response.data.categories)
        setKategoriat(response.data.categories);
        setLadattu(true)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        console.log("Tämö suoritetaan aina")
        // always executed
      });
    console.log("kutsuttiin")
  }, []);

  useEffect(() => {

    /* async
    try {
    } catch {}
    finally{} */

    axios.get('https://api.huuto.net/1.1/items?category='+kategoria)
      .then(function (response) {
        // handle success
        console.log(response.data.items)
        setItems(response.data.items)
       // setKategoriat(response.data.categories);
       // setLadattu(true)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        console.log("Tämö suoritetaan aina")
        // always executed
      });


    console.log("kutsuttiin")
  }, [kategoria]);

  const kategoriaPainettu=(id)=>{
    setKategoria(id)
    console.log(id)
  }

  const tavaraPainettu=(id)=> {    
    for (let i of items) {
      if (i.id === id) {
        console.log(i)        
        setTiedot(i)
      }
    }
  }


  return (
    <div>
      <div >
      {!ladattu?"Dataa lataillaan....":kategoriat.map(kategoria=><button onClick={()=>kategoriaPainettu(kategoria.id)} key={kategoria.id}>{kategoria.title}</button>)}</div>

      <div class = "blockBackground">
        <div class="buttonBackground" >{items.map(item=><button onClick={()=>tavaraPainettu(item.id)} key={item.id}>{item.title} </button>)}</div>
        <div class="buttonBackground" >
        Nimi: {tiedot.title}<br></br>
        Hinta: {tiedot.currentPrice}€<br></br>
        Myyjä: {tiedot.seller}<br></br>
        Paikkakunta: {tiedot.location}
        </div>
      </div>
        
    </div>

  );

}
export default App;