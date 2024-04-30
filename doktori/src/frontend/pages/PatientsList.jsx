import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import PatientsListHeader from "../components/PatientsListHeader";

function PatientsList() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div>
        <PatientsListHeader />
        <h1>Lista</h1>
      </div>
    </div>
  );
}
export default PatientsList;
