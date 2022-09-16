import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
