import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col xs={12} md={6} className="logocol">
          <img src="images/Frame 1.png" alt="Logo" />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-none d-lg-flex 
          justify-content-end "
        >
          <Button href="/signin" className="btnkyqu">
            {" "}
            Kyçu këtu{" "}
          </Button>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mt-5 kujdesimj">
        <p>Kujdes mjeksor 👨🏻‍⚕️</p>
      </Row>

      <Row>
        <h1 className="menaxho">Menaxho pacientet tuaj</h1>
        <h1 className="d-none d-sm-block moshumb">Mos humb kohë</h1>
      </Row>

      <Row className="mt-5">
        {" "}
        <Col className="d-flex justify-content-center">
          <Link to="/signin">
            <Button className="btnkyquketu">Kyçu këtu</Button>
          </Link>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center phones">
        <img
          src="images/3phones.png"
          alt="Phones"
          className="img-fluid d-none d-lg-block"
        />

        {/* Small screen: Display the second image */}
        <img
          src="images/mobilePhone.png"
          alt="Phones"
          className="img-fluid d-block d-lg-none minitel"
        />
      </Row>

      <Row className="d-flex justify-content-center mt-5 thshs">
        <h1>Thjeshtë, Shpejtë & Sigurt</h1>
      </Row>

      <Row className="regjistrimi">
        <Col>
          {" "}
          <img src="images/RegjistrimiVizitave.png" alt="icon" />
          <h3>Regjistrimi i Vizitave</h3>
          <p>Vendosni dhe shikoni takimet me pacientët tuaj</p>
        </Col>
        <Col>
          {" "}
          <img src="images/ListaPacientave.png" alt="icon" />
          <h3>Listave e Pacientëve</h3>
          <p>Mbani evidencë të plotë të historisë mjekësore të pacientit</p>
        </Col>
        <Col>
          <img src="images/HistorikuMjeksor.png" alt="icon" />
          <h3>Historiku Mjekësor</h3>
          <p>Shikoni pacientet tuaj dhe gjeni informacionin që kërkoni</p>
        </Col>
      </Row>

      <Row className="menaxhotxt">
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-column align-items-center mt-1 "
        >
          <img src="images/Frame 1.png" alt="Foto" />
          <p style={{ fontWeight: "600", marginLeft: "1.5rem" }}>
            Menaxho Pacientet
          </p>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex justify-content-center mt-2"
        >
          {/* Contact Us */}
          <div className="d-inline-block">
            <h4>Contact us</h4>
            <p>+383 45 851 726</p>
            <p>info@pikpik.app</p>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex justify-content-center mt-2 "
        >
          {/* Legal */}
          <div
            className="d-inline-block legal"
            style={{ marginLeft: "2rem", marginRight: "1rem" }}
          >
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms of Use</p>
          </div>
        </Col>
      </Row>
      <Row style={{ textAlign: "center", fontWeight: "500" }}>
        <p>© 2024 Doktori App LLC. All rights reserved.</p>
      </Row>
    </Container>
  );
}
export default HomePage;
