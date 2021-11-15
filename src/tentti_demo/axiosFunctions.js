const axios = require('axios');
  
  const get = async (url) => {    
    let stuff = []
    try {
      console.log(url)
      let response = await axios.get(url)
      console.log("Vain response: ", response)
      stuff = response.data
      console.log("Response data: ", url)
    }
    catch (error) {
      console.log(error)
    }
    return stuff
    }

    const remove = async (url) => {    
      try {
        console.log(url)
        await axios.delete(url)
        return true
      }
      catch (error) {
        console.log(error)
        return false
      }
      }

    let axiosFunctions = {get, remove}
    
  export default axiosFunctions