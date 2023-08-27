

import { Navbar } from "./components/navbar/navbar";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Routes";
import { GlobalStyle } from "./styles/createGlobalStyles";
import Routes from "./routes/Routes";
import { useDispatch } from "react-redux";
import { getProds } from "./redux/productsReducer/productsSlice";
import { useEffect } from "react";



export default function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getProds())
    
  },[getProds])
  
  return (
    <>
    <GlobalStyle/>
    <Routes/>
    
  
   
   
    </>
   
  );
}


