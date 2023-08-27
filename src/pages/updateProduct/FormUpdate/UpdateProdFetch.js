

export const UpdateProd = async (prod , token , id  ) => {
    const {provincia , lugar , hotel , price , imgUrl , totalQuantity} = prod
    const response = await fetch(`https://integrador-wd4g.onrender.com/products/update/${id}`,{
    method: "PUT",
    headers : {
        "Content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
    },
    body : JSON.stringify({provincia : provincia , lugar : lugar , hotel : hotel ,  imgUrl : imgUrl , totalQuantity : totalQuantity , price : price }) ,
    })
    const data = await response.json()
   console.log(data)
}