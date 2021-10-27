import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Komponentti from './Komponentti'

let arr1 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 1},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 2},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 3}]
let arr2 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 4},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 5},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 6}, {vastaus: "en osaa sanoa", booleanArvoVastaukselle: false, komponentinId: 7}]
let arr3 = [{vastaus: "no jaa", booleanArvoVastaukselle: false, komponentinId: 8},{vastaus: "kysytkin vielä!", booleanArvoVastaukselle: false, komponentinId: 9},{vastaus: "kyllä ne tästä...", booleanArvoVastaukselle: false, komponentinId: 10}]
let arr4 = [{vastaus: "johan nyt toki", booleanArvoVastaukselle: false, komponentinId: 11},{vastaus: "mitä?!", booleanArvoVastaukselle: false, komponentinId: 12},{vastaus: "AAAArrrrggh!!!!", booleanArvoVastaukselle: false, komponentinId: 13}]

let listaPääkysymyksiä1 = [{pääkysymys: "Onko JavaScript kivaa?", id: 1, vastausVaihtoehdot:arr1}]
let listaPääkysymyksiä2 = [{pääkysymys: "Onko React kivaa?", id: 1, vastausVaihtoehdot:arr2}]
let listaPääkysymyksiä3 = [{pääkysymys: "Onko Reactin hookit vaikeita?", id: 1, vastausVaihtoehdot:arr3}]
let listaPääkysymyksiä4 = [{pääkysymys: "Joko alkaa päässä sirittää?", id: 1, vastausVaihtoehdot:arr4}]

let kaikki = [listaPääkysymyksiä1,listaPääkysymyksiä2,listaPääkysymyksiä3, listaPääkysymyksiä4]

function App() {
  const [pääkysymykset, setPääkysymykset] = useState(kaikki)
  const [tämänHetkinen, setTämänhetkinen] = useState([])
  console.log(kaikki)
  return (    
    <Container> 
      {kaikki.map((setti) => (
        <> 
        {console.log("setti",setti)}
        <Komponentti pääkysymys={setti}/>
        </>
      ))}


    </Container>
  );
}


export default App;

