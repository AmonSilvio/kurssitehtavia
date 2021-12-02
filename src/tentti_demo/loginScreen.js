import './App.css';
import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Kysymys  from './Kysymys'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const https = require('https');




const LoginScreen = (p)  => {

    const [userName, setUserName] = useState("")
    const [pswd, setPswd] = useState("")
    const data = JSON.stringify({
            kayttajanimi: "Reiska", salasana: "napakymppiHerraB"
          })


    const options = {
        hostname: 'localhost',
        port: 3443,
        path: '/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length }
      };
    
      const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)
      })
      
      req.on('error', error => {
        console.error(error)
    })


    const register = async () => {               
        await req.write(data)
        req.end()    
    }

    const handleSubmit = event => {        
        event.preventDefault();
      };


  

  return (<div  class="bodyLogin">
  <div class="mainLogin">
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <div class="signup">
				 <form onSubmit={handleSubmit}>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" onChange={(event) => setUserName( event.target.value)} placeholder="User name" required=""/>
					<input type="password" name="pswd"  onChange={(event) => setPswd( event.target.value)} placeholder="Password" required=""/>
					<button onClick={()=> register()}>Sign up</button>
				 </form>
			</div>

            <div class="mainLogin">
                <form onSubmit={handleSubmit}>
					<label for="chk" aria-hidden="true">Login</label>
                    <input type="text" name="txt" placeholder="User name" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button onClick={()=> register()}>Login</button>
                        
                    </form>
			</div>                        
        </div></div>
  );
}




export default LoginScreen;