import { reloadWindow } from "../../pages/CreateProduct/createProductsStyles"

export const deleteProdById = async (_id , token) => {
    
    const response = await fetch(`https://integrador-wd4g.onrender.com/products/delete/${_id}`,{
    method: "DELETE",
    headers : {Authorization :  `Bearer ${token}`}
    })
    return _id;
}   