import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import SignInPage from "./container/SignInPage/SignInPage";
import HomePage from "./container/HomePage/HomePage";

function App() {

  const [user, setUser] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <LandingPage />} />
          <Route path="/signin-signup" element={<SignInPage setUser={setUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
