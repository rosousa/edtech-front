import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Token from "../contexts/UserToken";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Checkout from "./Checkout/Checkout";

function App() {
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Token.Provider value={{ token, setToken }}>
        <GlobalStyle />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Token.Provider>
    </BrowserRouter>
  );
}

export default App;
