let createPrincessList = () => {
    let names = ["Snow White", "Cinderella", "Auroa", "Ariel", "Belle", "Pocahontas", "Mulan", "Tiana", "Rapunzel", "Merida", "Moana", "Esmeralda", "Jane Porter", "Tinker Bell"]
    let objs = []
    for (let i = 0; i < names.length; i++) {
        let obj = {id: (i + 1), name: names[i], selected: false, listID: 1}
        objs.push(obj)
    }
    return objs
  }
  
  
  let createHorrorList = () => {
      let names = ["Michael Myers", "Freddy Krueger", "Jason Voorhees", "Samara Morgan", "Norman Bates", "Hannibal Lecter", "Annie Wilkes", "Damien Thorn", "Regan MacNeil", "Kayako Saeki", "Patrick Bateman", "Daniel Robitaille", "Victor Frankenstein", "John Kramer"]
      let objs = []
      for (let i = 0; i < names.length; i++) {
          let obj = {id: (i + 666), name: names[i], selected: false, listID: 2}
          objs.push(obj)
      }
      return objs
  }

  const CreateLists =(theme) => {
    if (theme === "Disney") {
        return createPrincessList()
    } else {
        return createHorrorList()
    }
  }

  export default CreateLists