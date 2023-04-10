import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./home";
import Projetos from "./projetos";



const Approuter = () =>{
    return(
    <BrowserRouter>
        <Route Component={Home} path="/" exact/>
        <Route Component={Projetos} path="/projetos" />
    </BrowserRouter>
    )
}

export default Approuter;