import './App.css';
import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Kysymys  from './Kysymys'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Tentti = (p)  => {


    
  const [editMode, setEditMode] = useState(p.exam.editMode);

  const save = () => {
    p.update({type: "SAVE", data:{obj: p.exam, id: p.exam.id, definition: "exams"}} )
  }

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
          save()
          setEditMode(false)
      }
    }

    const editModeChange = () => {
      p.update({type: "CHANGE", data:{id: p.exam.id, txt: p.exam.txt, editMode: !editMode}})
      if (editMode === true) {
        save()
      }
      setEditMode(!editMode)
  }   
  

  

  return (<div> 
            <br></br>
            <Container>
                <div> 
                    <Box class="container">
                        <div class="box shadow">       
                            <Grid class="textbox">                           
                                <div class="examLine">                                 
                                    <ArrowBackIosNewIcon onClick = {() => p.update({type:"EXAM_BACKWARD"})} ></ArrowBackIosNewIcon>                               
                                    {!editMode ? <label onClick={() => editModeChange()}>{p.exam.txt}</label> :
                                <input class="tenttiInput" onBlur={() => editModeChange()} autoFocus={true} onKeyPress={handleKeyPress} type="text" onChange={(event) => p.update({type:"CHANGE", data: {id: p.exam.id, txt: event.target.value}})} value={p.exam.txt} />}
                                    <div class="nextExam" >
                                        <ArrowForwardIosIcon onClick = {() => p.update({type:"EXAM_FORWARD"})} ></ArrowForwardIosIcon>
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