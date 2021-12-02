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


    let options = {
        hostname: 'localhost',
        port: 3443,
        path: '/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'/* ,
            'Content-Length': data.length */ }
      };
    
      

    const createData = () => {
        return JSON.stringify({
            kayttajanimi: userName, salasana: pswd
          })
    }


    const register = async () => {        
        await request('/register')
    }

    const request = async (path) => {
        options.path = path
        let req = await https.request(options, res => {
            console.log(options.path)
            console.log(`statusCode: ${res.statusCode}`)        
    
          res.on('data', (d) => {
            if (options.path === '/login') {
                let avain = "token"
                localStorage.setItem(avain, d.toString())
            }
            return d
          });
        });
        req.on('error', error => {
            console.error(error)
        })

        let d = req.write(createData())       
        req.end()
        return d
  
    }

    const login = async () => {
        await request('/login')
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
					<input type="text" name="txt" value={userName} onChange={(event) => setUserName( event.target.value)} placeholder="User name" required=""/>
					<input type="password" name="pswd"  value={pswd} onChange={(event) => setPswd( event.target.value)} placeholder="Password" required=""/>
					<button onClick={()=> register()}>Sign up</button>
				 </form>
			</div>

            <div class="mainLogin">
                <form onSubmit={handleSubmit}>
					<label for="chk" aria-hidden="true">Login</label>
                    <input type="text" name="txt" value={userName} onChange={(event) => setUserName( event.target.value)} placeholder="User name" required=""/>
					<input type="password" name="pswd" value={pswd} onChange={(event) => setPswd( event.target.value)} placeholder="Password" required=""/>
					<button onClick={()=> login()}>Login</button>
                        
                    </form>
			</div>                        
        </div></div>
  );
}




export default LoginScreen;