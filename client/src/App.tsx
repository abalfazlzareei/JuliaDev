import { useState } from "react";
import {Routes, Route} from "react-router-dom"

import './index.css'
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  return (


    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>

  )
}

export default App;
