import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./frontend/pages/HomePage";
import SignIn from "./frontend/pages/SignIn";
import SignUp from "./frontend/pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
