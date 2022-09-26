

 module.exports; const postRequest = async (url:string, body: object) => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    try{
      const response = await fetch(url, settings)
      const data = await response.json()
      console.log(data)
      return data

    }catch(e){
      console.log(e)
    }
  }


  module.exports; const getRequest = async (url: string) => {
    const settings = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }
    try{
      const response = await fetch(url, settings)
      const data = await response.json()
      console.log(data)
      return data

    }catch(e){
      console.log(e)
    }
  }

  module.exports; const putRequest = async (url:string, body: object) => {
    const settings = {
      method: 'PUT',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    try{
      const response = await fetch(url, settings)
      const data = await response.json()
      console.log(data)
      return data

    }catch(e){
      console.log(e)
    }
  }

export {}