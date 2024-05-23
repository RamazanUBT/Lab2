// PatientsList.jsx

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";
import PatientsListHeader from "../components/PatientsListHeader";
import PatientsListTable from "../components/PatientsListTable";

function PatientsList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patients based on the currently logged-in doctor's ID
    const fetchPatients = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/patient", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setPatients(data);
        } else {
          console.error("Failed to fetch patients");
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div>
        <PatientsListHeader />
        <PatientsListTable patients={patients} />
      </div>
    </div>
  );
}

export default PatientsList;
