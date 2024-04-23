import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./frontend/pages/HomePage";
import SignIn from "./frontend/pages/SignIn";
import SignUp from "./frontend/pages/SignUp";
import AdminSignIn from "./frontend/pages/AdminSignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adminsignin" element={<AdminSignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
