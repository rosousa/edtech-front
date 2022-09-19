import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Token from "../contexts/UserToken";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Home from "./Products/Home";
import OneProductPage from "./Products/OneProductPage";
import CartContext from "../contexts/CartContext";

function App() {
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Token.Provider value={{ token, setToken }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <GlobalStyle />
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<OneProductPage />} />
          </Routes>
        </CartContext.Provider>
      </Token.Provider>
    </BrowserRouter>
  );
}

export default App;
