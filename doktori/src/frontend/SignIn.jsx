import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignInStyle.css";

class SignIn extends React.Component {
  /* constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.data) {
          const { token, user } = data.data;

          if (token) {
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("loggedIn", true);
            window.localStorage.setItem("userData", JSON.stringify(user));
            window.location.href = "./listaepacienteve";
          } else {
            console.error("Token not found in the response data");
          }
        } else {
          console.error("Token not found in the response data");
        }
      } else {
        console.error("Failed to submit data");
        console.error("Response Status:", response.status);
        const responseData = await response.json();
        console.error("Response Data:", responseData);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
*/
  render() {
    /* const { email, password } = this.state;*/
    return (
      <Container className="d-flex justify-content-center">
        <Row className="MainRow">
          <Col className="LeftCol">
            {" "}
            <Link to="/">
              <img src="images/Frame 1.png" alt="Logo" />{" "}
            </Link>
            <h1>Menaxho pacientet tuaj</h1>
            <Form
              className="d-flex flex-column mt-5"
              /* onSubmit={this.handleSubmit}*/
            >
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
                  /*  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}*/
                />
              </Form.Group>

              <Button type="submit" className="SignInBtn">
                Kyçu
              </Button>

              <Button type="submit" className="regjistrohubtn" href="/SignUp">
                Regjistrohu
              </Button>
            </Form>
          </Col>

          <Col className="d-none d-lg-block ">
            <img src="images/BigLogo.png" className="BigLogo" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
