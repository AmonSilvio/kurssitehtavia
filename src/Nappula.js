//import './App.css';

import React, {useState} from "react";


function Nappula(props) {


    return (<div class="buttonBackground"><button class="button" onClick={() => props.lisääMerkki(props.sisältö)}> {props.sisältö}</button></div>)

    }


export default Nappula;
