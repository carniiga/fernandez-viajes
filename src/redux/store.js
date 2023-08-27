import { combineReducers, configureStore } from "@reduxjs/toolkit"
import productsReducer from "./productsReducer/productsSlice"
import  storage  from "redux-persist/lib/storage"
import {persistReducer , persistStore} from "redux-persist"
import thunk from "redux-thunk"
import { userReducer } from "./userReducer/userReducer"

const persistConfig = {
  key: 'root',
  storage,
}


const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

 export  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware : [thunk]
})


export const persistor = persistStore(store)
