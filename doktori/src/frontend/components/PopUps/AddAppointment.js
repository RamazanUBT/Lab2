import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AddAppointment() {
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
          src="images/treatment.png"
          alt="treatment"
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
            Shtoni Viziten
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Form>
            <Form.Group className="mb-3 " controlId="FormBasicComplaint">
              <Form.Label
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#00000099",
                }}
              >
                Ankesa
              </Form.Label>
              <Form.Control
                type="city"
                placeholder="Ankesat"
                autoFocus
                style={{ width: "350px", height: "50px" }}
                name="ankesa"
                //value={addDiagnosisData.ankesa}
                // onChange={handleAddVisit}
              />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="FormBasicTest">
              <Form.Label
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#00000099",
                }}
              >
                Ekzaminimi
              </Form.Label>
              <Form.Control
                type="city"
                placeholder="Ekzaminimi"
                autoFocus
                style={{ width: "350px", height: "50px" }}
                name="ekzaminimi"
                // value={addDiagnosisData.ekzaminimi}
                // onChange={handleAddVisit}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicDiagnosis">
              <Form.Label
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#00000099",
                }}
              >
                Diagnoza
              </Form.Label>
              <Form.Control
                type="address"
                placeholder="Diagnoza"
                autoFocus
                style={{ width: "350px", height: "50px" }}
                name="diagnoza"
                //value={addDiagnosisData.diagnoza}
                // onChange={handleAddVisit}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicTherapy">
              <Form.Label
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#00000099",
                }}
              >
                Terapia
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Terapia"
                autoFocus
                style={{ width: "350px", height: "50px" }}
                name="terapia"
                //value={addDiagnosisData.terapia}
                //onChange={handleAddVisit}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center mb-4"
          style={{ borderTop: "none" }}
        >
          <Button className="AddBtn" style={{ width: "350px" }}>
            Shtoje
          </Button>

          <Button
            className="AnuloBtn"
            style={{ width: "350px" }}
            onClick={handleClose}
          >
            Anulo
          </Button>

          <Button className="AddBtnMobile" style={{ width: "350px" }}>
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

export default AddAppointment;
