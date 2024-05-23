import React from "react";
import Sidebar from "../components/Sidebar";
import Profili from "../components/Profili";

function Profiles() {
    return (
        <div className="d-flex">
          <Sidebar />
          <Profili />
        </div>
      );
}
export default Profiles;