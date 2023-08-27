
export const postProducts = async(values , img , token) => {

    const {provincia ,lugar , hotel ,precio , cantidadDisponible, descripcion} = values

      
    const response = await fetch("https://integrador-wd4g.onrender.com/products/create",{
      
        method : "POST",
        body :  JSON.stringify({provincia : provincia , description : descripcion , hotel : hotel , lugar : lugar, imgUrl : img , price : precio , totalQuantity : cantidadDisponible }),
        dataType : 'json',
        headers : {
            "Content-Type" : "application/json",
            Authorization: `bearer ${token}`,
           
        }
    })
    const data = await response.json()
    console.log(data)
}