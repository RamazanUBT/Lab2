import React, { useState, useEffect } from "react";
import "./Profili.css";

function Profili() {
  const [doctor, setDoctor] = useState({ fullName: "", email: "", password: "" });

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/doctor/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setDoctor(data);
        } else {
          console.error("Failed to fetch doctor profile");
        }
      } catch (error) {
        console.error("Error fetching doctor profile:", error);
      }
    };

    fetchDoctorProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // Redirect to the homepage
  };

  return (
    <div>
      <div className="profilifirst">
        <h1>Profili</h1>
        <button onClick={handleLogout}>
          <img src="images/Shkyqu.png" alt="Shkyqu" />
          Shkycu
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div className="tedhenat">
          <h1>Te Dhenat</h1>
          <div className="profiliinp">
            {/* Profile input Emri */}
            <div>
              <label>Emri</label>
              <input type="text" value={doctor.fullName} readOnly />
            </div>
            {/* Profile input Email */}
            <div>
              <label>Email</label>
              <input type="email" value={doctor.email} readOnly />
            </div>
            {/* Profile input Password */}
            <div>
              <label>Password</label>
              <input type="text" value={doctor.password} readOnly />
            </div>
            <button>Ndryshoni</button>
          </div>
        </div>
        <div className="statistikat"></div>
      </div>
    </div>
  );
}

export default Profili;