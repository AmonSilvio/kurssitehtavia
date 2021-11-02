import './App.css';
import React, { useState, useEffect } from 'react';


//let arr1 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 1},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 2},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 3}]
//let arr2 = [{vastaus: "ei", booleanArvoVastaukselle: false, komponentinId: 4},{vastaus: "kyllä", booleanArvoVastaukselle: false, komponentinId: 5},{vastaus: "ehkä", booleanArvoVastaukselle: false, komponentinId: 6}]


const Komponentti = ({ vastausVaihtoehdot })  => {

console.log("vastausVaihtoehdot:", vastausVaihtoehdot)
    return (
  <>
    {vastausVaihtoehdot.map((vaihtoehto) => (
            <> 
            {console.log("vaihtoehto",vaihtoehto)}<div class="answerlines"><div class="answerline">
            <input type="checkbox"/>    {vaihtoehto.vastaus}</div></div> 
            </>
            ))}
  </>
  );
}

export default Komponentti;