import React, { useState } from "react";
import { Button, Modal, Form, Row } from "react-bootstrap";
import "./PopUpStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AddPatientPopUp() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddPatient = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:3000/api/patient/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          city,
          address,
          birthYear,
        }),
      });

      if (response.ok) {
        console.log("Patient added successfully");
        handleClose();
      } else {
        console.error("Failed to add patient");
      }
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <>
      <Button className="AddBtn" onClick={handleShow}>
        <img
          style={{ width: "32px", marginRight: "8px" }}
          src="images/AddBtn.png"
          alt="icon"
        />
        Shtoni
      </Button>

      <Button className="AddBtnMobile" onClick={handleShow}>
        <img
          style={{ width: "32px", marginRight: "8px" }}
          src="images/AddBtn.png"
          alt="icon"
        />
        Shtoni
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          className="d-flex justify-content-center mt-2"
          style={{ borderBottom: "none" }}
        >
          <Modal.Title style={{ fontWeight: "500", fontSize: "32px" }}>
            Shtoni Pacientin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Form>
            <Row className="gap-3">
              <Form.Group
                className="mb-3"
                controlId="FormBasicName"
                style={{ width: "165px" }}
              >
                <Form.Label
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#00000099",
                  }}
                >
                  Emri
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Filan"
                  required
                  style={{ height: "50px", width: "165px" }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="FormBasicLastName"
                style={{ width: "165px" }}
              >
                <Form.Label
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#00000099",
                  }}
                >
                  Mbiemri
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fisteku"
                  required
                  style={{ height: "50px", width: "165px" }}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="FormBasicCity">
              <Form.Label
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#00000099",
                }}
              >
                Komuna
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Prishtin"
                required
                style={{ width: "350px", height: "50px" }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicAddress">
              <Form.Label
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#00000099",
                }}
              >
                Adresa
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="rr.Bekim Berisha"
                required
                style={{ width: "350px", height: "50px" }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicDate">
              <Form.Label
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#00000099",
                }}
              >
                Viti Lindjes
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="dd/mm/yyyy"
                required
                style={{ width: "350px", height: "50px" }}
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center mb-4"
          style={{ borderTop: "none" }}
        >
          <Button
            className="AddBtn"
            style={{ width: "350px" }}
            onClick={handleAddPatient}
          >
            Shtoje
          </Button>

          <Button
            className="AnuloBtn"
            style={{ width: "350px" }}
            onClick={handleClose}
          >
            Anulo
          </Button>

          <Button
            className="AddBtnMobile"
            style={{ width: "350px" }}
            onClick={handleAddPatient}
          >
            Shtoje
          </Button>

          <Button
            className="AnuloBtnMobile"
            style={{ width: "350px" }}
            onClick={handleClose}
          >
            Anulo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPatientPopUp;
