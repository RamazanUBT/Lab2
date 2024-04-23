import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/doctor/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (response.ok) {
        console.log("Doctor registered successfully");
        <Link to="/signin"></Link>;
      } else {
        console.error("Failed to register doctor");
      }
    } catch (error) {
      console.error("Error registering doctor:", error);
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row className="MainRow">
        <Col className="LeftCol">
          {" "}
          <Link to="/">
            <img src="images/Frame 1.png" alt="Logo" />{" "}
          </Link>
          <h1>Regjistrohu</h1>
          <Form className="d-flex flex-column mt-5" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="FormGroup">
              <Form.Label className="FormLabel">Emri dhe Mbiemri</Form.Label>
              <Form.Control
                type="text"
                placeholder="Filan Fisteku"
                required
                style={{
                  height: "50px",
                }}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="FormGroup">
              <Form.Label className="FormLabel">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="filanfisteku@gmai.com"
                required
                style={{
                  height: "50px",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="FormGroup">
              <Form.Label className="FormLabel">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                required
                style={{
                  height: "50px",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" className="SignInBtn">
              Regjistrohu
            </Button>
            <Link to="/signin" className="regjistrohubtn">
              Kyçu
            </Link>
          </Form>
        </Col>

        <Col className="d-none d-lg-block">
          <img
            src="images/BigLogo.png"
            className="BigLogo"
            style={{ width: "550px", marginLeft: "0.5rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
