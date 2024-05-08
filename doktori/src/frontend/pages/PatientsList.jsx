import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import PatientsListHeader from "../components/PatientsListHeader";
import PatientsListTable from "../components/PatientsListTable";

function PatientsList() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div>
        <PatientsListHeader />
        <PatientsListTable/>
      </div>
    </div>
  );
}
export default PatientsList;
