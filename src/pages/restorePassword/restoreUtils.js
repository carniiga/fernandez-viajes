export const restorePass = async (password, userId) => {
    console.log(userId)
    const response = await fetch(`https://integrador-wd4g.onrender.com/restore-password/${userId}`, {
    method: "POST",
    mode : "cors",
    body : JSON.stringify({password : password}),
    headers : {"content-type":"application/json"}
    })
   
}