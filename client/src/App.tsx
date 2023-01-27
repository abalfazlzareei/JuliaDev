
import {Routes, Route} from "react-router-dom"
import AuthRoute from "./Firebase/AuthRoute";

import './index.css'
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
