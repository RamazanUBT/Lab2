import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PLHeaderStyle.css";
import AddPatientPopUp from "./AddPatientPopUp";

export class PatientsListHeader extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <div>
            <h1>Lista Pacientave</h1>
          </div>
          {/**d-flex justify-content-end mt-1 */}
          <div className="d-flex mt-5">
            <InputGroup className="Searchbar">
              <FormControl
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
            </InputGroup>

            <AddPatientPopUp />
          </div>
        </div>
      </div>
    );
  }
}

export default PatientsListHeader;
