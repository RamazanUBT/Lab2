import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function DeletePatient() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="EditBtn" onClick={handleShow}>
        {" "}
        <img
          style={{
            width: "32px",
            height: "30px",
            marginRight: "8px",
          }}
          src="images/DeleteBtn.png"
          alt="Delete"
        />
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
            Fshini Pacientin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <p
            style={{
              fontWeight: "500",
            }}
          >
            A jeni i sigurt që dëshironi të e fshini këtë pacient?
          </p>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center mb-4"
          style={{ borderTop: "none" }}
        >
          <Button
            className="AddBtn"
            style={{ width: "350px" }}
            onClick={() => {
              // Set the patient ID to delete when the "Fshije" button is clicked
              //setPatientToDeleteId(patient._id);
              // Call the function to handle patient deletion
              //handleDeletePatient();
            }}
          >
            Fshije
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
            onClick={handleClose}
          >
            Fshije
          </Button>
          <Button
            className="AnuloBtnMobile"
            style={{ width: "350px" }}
            onClick={() => {
              // Set the patient ID to delete when the "Fshije" button is clicked
              //setPatientToDeleteId(patient._id);
              // Call the function to handle patient deletion
              //handleDeletePatient();
            }}
          >
            Anulo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeletePatient;
