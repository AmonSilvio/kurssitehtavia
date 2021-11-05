

const giveNewID = (previous=0) => {
    let min = previous * 2
    let max = previous * 3 
    let IDKey = "IDs"
    let IDlist = []
    let ID = 0    
    let data = JSON.parse(localStorage.getItem(IDKey))
/*      if (data !== null) {
        IDlist = data    
        let IDFound = false
        let counter = 0
        while (!IDFound || counter < 100) { 
            let sameIDFound = 0          
            ID = giveRandomNumber(min, max)
            for (let i of IDlist) {
                if (i === ID) {
                    sameIDFound++
                }
            }
            if (sameIDFound === 0) {
                IDFound = true
            }
            counter++          
        }
    } else {  */
        ID = giveRandomNumber(min, max)
  // }    
    IDlist.push(ID)
    localStorage.setItem(IDKey, JSON.stringify(IDlist))
    return ID
}


const giveRandomNumber = (min=0, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


export default giveNewID

