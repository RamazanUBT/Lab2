import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PLHeaderStyle.css";
import AddAppointment from "./PopUps/AddAppointment";
import EditPatient from "./PopUps/EditPatient";
import DeletePatient from "./PopUps/DeletePatient";

function PatientsListTable({ patients }) {
  return (
    <div>
      <div className="listaDok">
        <table>
          <thead>
            <tr>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Komuna</th>
              <th>Adresa</th>
              <th>Viti Lindjes</th>
              <th>
                <AddAppointment />
              </th>
              <th>
                <EditPatient />
              </th>
              <th>
                <DeletePatient />
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.city}</td>
                <td>{patient.address}</td>
                <td>{patient.birthYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientsListTable;
