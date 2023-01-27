import { Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
