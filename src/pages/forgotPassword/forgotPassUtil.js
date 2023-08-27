

export const fetchEmailDb = async (email) => {
   const response = await fetch(`https://integrador-wd4g.onrender.com/forgot-password`, {
    
    method: "POST",
    body : JSON.stringify({email : email}),
    headers : {
        "Content-Type" : "application/json"
    }
   })
   const data = await response.json()
   console.log(data)
}  