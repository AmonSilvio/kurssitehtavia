import giveNewID from "./newID"

const remove= (list, id) => {    
    list = list.filter(t => t.id !== id)
    list.map(q => q.options = q.options.filter(t => t.id !== id))
    return list
  }

const dispatch = (o, mainState, setMainState)=> {
    let m = JSON.parse(JSON.stringify(mainState))

    switch (o.type) {
      case "REMOVE":    
        m = remove(m, o.data.id)
        break;
      case "ADD_OPTION":
        let newOption = {id: giveNewID(), txt: "", checkboxState: false, editMode: true}
        m.find(q => q.id === o.data.id).options.push(newOption)
        break;
      case "ADD_QUESTION":
        let newQ = {id: giveNewID(), txt: "", correctAnswer: 0, options: [], editMode: true}
        m.push(newQ)
        break;
      case "CHANGE":
        for (let question of m) {          
          if (question.id === o.data.id) {
            question.txt = o.data.txt  
            question.editMode = o.data.editMode          
            break;
          }
          for (let op of question.options) {
            if (op.id === o.data.id) {
              op.txt = o.data.txt
              op.editMode = o.data.editMode 
              break;
            }
          }
        } 
        break;
      case "SAVE_CHECKBOX_STATE":
        for (let question of m) {
          for (let op of question.options) {
            if (op.id === o.data.id) {
              console.log(op.checkboxState)
              op.checkboxState = !op.checkboxState
              break;
            }
          }
        }    
        break;

      default: throw "Error"
    }
    console.log(m)
    setMainState(m)
  }

  export default dispatch