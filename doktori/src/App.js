import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./frontend/pages/HomePage";
import SignIn from "./frontend/pages/SignIn";
import SignUp from "./frontend/pages/SignUp";
import AdminSignIn from "./frontend/pages/AdminSignIn";
import Sidebar from "./frontend/components/Sidebar";
import PatientsList from "./frontend/pages/PatientsList";
import PatientsListHeader from "./frontend/components/PatientsListHeader";
import Profiles from "./frontend/pages/Profiles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adminsignin" element={<AdminSignIn />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/patientslist" element={<PatientsList />} />
          <Route path="/patientslistheader" element={<PatientsListHeader />} />
          <Route path="/profiles" element={<Profiles/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
