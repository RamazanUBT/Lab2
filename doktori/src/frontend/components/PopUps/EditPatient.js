import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EditPatient() {
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
          src="images/EditBtn.png"
          alt="Edit"
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
            Ndryshoni Pacientin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Form>
            <Row className="gap-3">
              {" "}
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
                  type="name"
                  placeholder="Filan"
                  autoFocus
                  style={{ height: "50px", width: "165px" }}
                  name="emri"
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
                  type="last name"
                  placeholder="Fisteku"
                  autoFocus
                  style={{ height: "50px", width: "165px" }}
                  name="mbiemri"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3 " controlId="FormBasicCity">
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
                type="city"
                placeholder="Prishtin"
                autoFocus
                style={{ width: "350px", height: "50px" }}
                name="komuna"
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
                type="address"
                placeholder="rr.Bekim Berisha"
                autoFocus
                style={{ width: "350px", height: "50px" }}
                name="adresa"
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
                autoFocus
                style={{ width: "350px", height: "50px" }}
                name="vitiLindjes"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center mb-4"
          style={{ borderTop: "none" }}
        >
          <Button className="AddBtn" style={{ width: "350px" }}>
            Ndryshoje
          </Button>

          <Button
            className="AnuloBtn"
            style={{ width: "350px" }}
            onClick={handleClose}
          >
            Anulo
          </Button>

          <Button className="AddBtnMobile" style={{ width: "350px" }} o>
            Ndryshoje
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

export default EditPatient;
