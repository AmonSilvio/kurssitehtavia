const giveRandomQuestions = (questions=[]) => {
    let questionString = ["Onko JavaScript kivaa?", "Onko React kivaa?", "Onko Reactin Hookit vaikeita?", "Sirittääkö päässäsi?", "Saako keltaista lunta syödä?", "Onko ulkoavaruudessa älyllistä elämää?", "Mistä lapset tulevat?", "Oletko valmis?", "Missä vietät iäisyytesi?", "Maistuisiko olut?", "Saako olla kahvia?", "Maalataanko seinät?", "Miksi kone kaatui taas?", "Haluatko turpiin?", "Onko hauki kala?", "Kannatatko Tapparaa vai Ilvestä?", "Miksi?", "Onko sinulla jokin ongelma?", "Puhutko minulle?"]
    let nameFound = false
    let w = questionString[0] 
    let counter = 0
      while (nameFound === false) {        
        let foundSameQuestion = 0
        let i = giveRandomNumber(0, questionString.length - 1)
        w = questionString[i]
        for (let o of questions) {          
          if (o === w) {  
            foundSameQuestion++
            break;
         }
        }
        if (foundSameQuestion === 0 || counter > 100) {
          nameFound = true  
        }
        counter++
      }    
    return w
  }


  const giveRandomNumber = (min=0, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export default giveRandomQuestions