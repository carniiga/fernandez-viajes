import * as yup from "yup"

export const loginSchema =  yup.object().shape({
    email : yup.string()
    .email("email invalido")
    .required("*completa este campo"),
    password : yup.string()
    .required("*complete este campo")
})



export const validationUser = async (values) => {
    const {email , password} = values
    const response = await fetch("https://integrador-wd4g.onrender.com/login",{
    method : "POST",
    headers: { "Content-Type":"application/json" },
    body : JSON.stringify({email : email , password : password})
    })
    const status = response.status
    const data = await response.json()
    if(status === 200){
        return data.message
    }
    else if(status === 400){
        return data.message
    }

   
   
    
}   