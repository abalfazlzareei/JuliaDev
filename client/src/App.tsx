import { Routes, Route } from "react-router-dom";
import { getCalendarList, insertEvent, getTasksList, insertTask } from "./GoogleCalendarAPI2/helper-functions";

import "./index.css";
import Home from "./pages/Home";
import Login from './GoogleCalendarAPI2/Login.tsx'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Login/>
      <button onClick={insertEvent}>insert Event</button>
      <button onClick={insertTask}>insert Task</button>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
