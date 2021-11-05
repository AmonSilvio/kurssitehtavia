const giveRandomAnswerOption = (options=[]) => {
    let optionString = ["Kyllä", "Joo", "Ei", "Ehkä", "Mitä se sulle kuuluu?", "No jaa", "En kyllä osaa sanoa", "Jaa-a kuule", "No tuota niin niin...", "Kysy joltain muulta", "Että mitä?", "Nyt äijä kuule...", "Jätä mut rauhaan!", "Upeaa!!!"]
    let nameFound = false
    let w = optionString[0] 
      while (nameFound === false) {
        let foundSameOption = 0
        let i = giveRandomNumber(0, optionString.length - 1)
        w = optionString[i]  
        for (let o of options) {
          if (o === w) {
            foundSameOption++
         }
        }
        if (foundSameOption === 0) {
          nameFound = true  
        }
      }      
    return w
  }


  const giveRandomNumber = (min=0, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export default giveRandomAnswerOption 