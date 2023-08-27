import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";


const initialState = {
    loading : false ,
    prods : [],
    error : ""

}

export const getProds = createAsyncThunk("products/getProds" , async() => {
    return fetch("https://integrador-wd4g.onrender.com/products").then((res) =>  res.json())
}) 


export  const productsSlice = createSlice({
    name : "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProds.pending ,(state) => {
            state.loading =true;
        })
        builder.addCase(getProds.fulfilled ,(state , action ) => {
            state.loading =false;
            state.prods = action.payload
            state.error = ""
        })
        builder.addCase(getProds.rejected ,(state , action ) => {
            state.loading =false;
            state.prods = []
            state.error = action.error.message
        })
    }
  
})
export const {addProds} =  productsSlice.actions
export default productsSlice.reducer