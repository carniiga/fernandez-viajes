import  * as yup from "yup"

const passwordRegx = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
export const registerSchema =  yup.object().shape({
    userName : yup.string()
    .required("*Ingrese usuario por favor"),
    email : yup.string()
    .email("*Email invalido")
    .required("*Ingrese el email por favor "),
    password : yup.string()
    .matches(passwordRegx,"1 mayuscula, 1 miniscula y  1 numero"),
    repeatPassword : yup.string()
    .oneOf([yup.ref("password")] , "las contraseñas no coinciden")
    .required("*Repita la contraseña")
})

export const registerUserFetch  =  async (data) => {
    const response = await fetch("https://integrador-wd4g.onrender.com/register",{
        method : "POST",
        body: JSON.stringify(data),
        headers : {"content-type" : "application/json"}
    }
    ) 
    if(response.status === 400){
        return false
    }
    else if(response.status === 200){
        return true
    }

    console.log(response.status)

}
