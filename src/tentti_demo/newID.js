

const giveNewID = () => {
    let min = 0
    let max = 1000000
    let IDKey = "IDs"
    let IDlist = []
    let ID = 0    
    let data = JSON.parse(localStorage.getItem(IDKey))
      if (data !== null) {
        IDlist = data    
        let IDFound = false
        let counter = 0
        while (!IDFound) { 
            let sameIDFound = 0          
            ID = giveRandomNumber(min, max)
            for (let i of IDlist) {
                if (i === ID) {
                    sameIDFound++
                }
            }
            if (sameIDFound === 0 || counter === 100) {
                IDFound = true
            }
            counter++          
        }
    } else {  
        ID = giveRandomNumber(min, max)
     }    
    IDlist.push(ID)
    localStorage.setItem(IDKey, JSON.stringify(IDlist))
    return ID
}


const giveRandomNumber = (min=0, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


export default giveNewID

