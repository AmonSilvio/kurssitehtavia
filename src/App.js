import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Norris from "./norris/norris"
import Laskin_kotikutoinen from "./laskin/laskin_kotikutoinen"

import Tenttidemo from "./tentti_demo/Tenttidemo"
import Listat from "./listahässäkkä/Listat"

import React, {useState} from "react";

function App() {
  const [sovellus, setSovellus] = useState(0)

  const nappulaPainettu = () => {
    let num = (sovellus + 1)
    if (num > 3) {
      num = 0
    }
    setSovellus(num)
  }


return ( <div><Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>          
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}

        onClick={() => nappulaPainettu()}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
</Box>

{sovellus == 0 && <Tenttidemo></Tenttidemo>}     
{sovellus == 1 && <Listat></Listat>}
{sovellus == 2 && <Norris></Norris>}
{sovellus == 3 && <Laskin_kotikutoinen ></Laskin_kotikutoinen >}        


</div>




    )  
}

export default App;