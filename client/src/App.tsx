import { useState } from "react";
import {Routes, Route} from "react-router-dom"

import './index.css'
import Home from "./pages/Home";

function App() {

  return (
    <div className="overflow-x-hidden">
      <Home/>
    </div>

  )
}

export default App;
