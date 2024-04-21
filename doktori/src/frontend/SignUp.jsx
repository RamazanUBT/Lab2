import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class SignUp extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password } = this.state;

    fetch("http://localhost:3000/SignUp", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ fullName, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          console.log("Doctor registered successfully");
          window.location.href = "/signin";
        } else if (data.error === "Doctor Exists") {
          console.error("Doctor already exists");
        } else {
          console.error("Failed to submit data");
        }
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };*/

  render() {
    /*const { fullName, email, password } = this.state;*/

    return (
      <Container className="d-flex justify-content-center">
        <Row className="MainRow">
          <Col className="LeftCol">
            {" "}
            <Link to="/">
              <img src="images/Frame 1.png" alt="Logo" />{" "}
            </Link>
            <h1>Regjistrohu</h1>
            <Form
              className="d-flex flex-column mt-5"
              /* onSubmit={this.handleSubmit}*/
            >
              <Form.Group controlId="formBasicEmail" className="FormGroup">
                <Form.Label className="FormLabel">Emri dhe Mbiemri</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Filan Fisteku"
                  required
                  style={{
                    height: "50px",
                  }}
                  /*value={fullName}
                  onChange={(e) => this.setState({ fullName: e.target.value })}*/
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
                  /* value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}*/
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
                  /* value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}*/
                />
              </Form.Group>

              <Button type="submit" className="SignInBtn">
                Regjistrohu
              </Button>
              <Button type="submit" href="/signin" className="regjistrohubtn">
                Kyçu
              </Button>
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
  }
}

export default SignUp;
