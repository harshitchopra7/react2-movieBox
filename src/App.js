import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";

function App() {

  const [user, setUser] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <p>User logged in</p> : <LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
