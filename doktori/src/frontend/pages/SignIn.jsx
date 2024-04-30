import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignStyles.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/doctor/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        if (token) {
          // Save token in local storage
          localStorage.setItem("token", token);
          // Redirect to dashboard or any other page
          window.location.href = "/patientslist";
        } else {
          console.error("Token not received");
        }
      } else {
        console.error("Failed to sign in doctor");
      }
    } catch (error) {
      console.error("Error signing in doctor:", error);
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
          <h1>Menaxho pacientet tuaj</h1>
          <Form className="d-flex flex-column mt-5" onSubmit={handleSubmit}>
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
              Kyçu
            </Button>

            <Button type="submit" className="regjistrohubtn" href="/SignUp">
              Regjistrohu
            </Button>

            <a className="AdminBtn" href="/AdminSignIn">
              Admin
            </a>
          </Form>
        </Col>

        <Col className="d-none d-lg-block ">
          <img src="images/BigLogo.png" className="BigLogo" alt="logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
