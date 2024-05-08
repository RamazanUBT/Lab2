import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PLHeaderStyle.css";

export class PatientsListTable extends Component {
  render() {
    return (
      <div>
        <div className="listaDok">
          <table>
            <tr>
            <th>Emri</th>
            <th>Mbiemri</th>
            <th>Komuna</th>
            <th>Adresa</th>
            <th>Viti Lindjes</th>
            {/* Crud */}
            </tr>
            <tr>
              <td>Ramazan</td>
              <td>Morina</td>
              <td>Rahovec</td>
              <td>Gexhe</td>
              <td>12 Nov 2003</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default PatientsListTable;
