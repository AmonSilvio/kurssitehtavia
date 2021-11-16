const axios = require('axios');
  
  const get = async (url) => {    
    let stuff = []
    try {
      let response = await axios.get(url)
      stuff = response.data
    }
    catch (error) {
      console.log(error)
    }
    return stuff
    }

    const remove = async (url) => {    
      try {
        await axios.delete(url)
        return true
      }
      catch (error) {
        console.log(error)
        return false
      }
    }

    const save = async (url, stuff, definition) => {        
      try {
        await axios.put(url+definition, stuff)
        return true
      }
      catch (error) {
        console.log(error)
        try {
          await axios.post(url, stuff)
          return true
        }
        catch (error) {
          console.log(error)
          return false
        }
      }
    }

    let axiosFunctions = {get, remove, save}
    
  export default axiosFunctions