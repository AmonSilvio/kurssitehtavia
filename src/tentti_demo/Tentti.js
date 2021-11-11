import './App.css';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Kysymys  from './Kysymys'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Tentti = (p)  => {

  

  return (<div> 
            <br></br>
            <Container>
                <div> 
                    <Box class="container">
                        <div class="box shadow">       
                            <Grid class="textbox"> 
                                <div class="examLine">
                                    {p.exam.txt}
                                    <div class="nextExam" >
                                        <ArrowForwardIosIcon onClick = {() => p.nextExam()} ></ArrowForwardIosIcon>
                                    </div> 
                                </div>
                            </Grid> 
                        </div>
                    </Box>
                </div>
            </Container>
            <br></br>    
            <Container>    
                <>{p.exam.questions.map((question, id) => (
                    <Kysymys update={p.update} question={question} questionID={id} mainState={p.mainState} />
                ))}         
                </>   
                <br></br>
                <button onClick={() => p.update({type: "ADD_QUESTION"})}>Lisää kysymys</button>             
            </Container>
        </div>
  );
}




export default Tentti;