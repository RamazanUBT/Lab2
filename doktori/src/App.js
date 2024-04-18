import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
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
          <Button
            className="btnkyqu"
            style={{
              width: "140px",
              height: "40px",
              background: "linear-gradient(270deg, #1b6be1 0%, #15cac4 100%)",
              borderRadius: "10px",
              border: "none",
              color: "white",
              fontSize: "15px",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "0.5rem",
              paddingTop: "8px",
            }}
          >
            Kyçu këtu
          </Button>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mt-5">
        <p
          style={{
            width: "170px",
            height: "40px",
            borderRadius: "10px",
            color: "#1b6be1",
            background:
              "linear-gradient(90deg, rgba(21, 202, 196, 0.06) 0%, rgba(27, 107, 225, 0.06) 100%)",
            fontSize: "15px",
            fontWeight: "500",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Kujdes mjeksor 👨🏻‍⚕️
        </p>
      </Row>

      <Row>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "700",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Menaxho pacientet tuaj
        </h1>
        <h1
          className="d-none d-sm-block"
          style={{
            fontSize: "64px",
            fontWeight: "700",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Mos humb kohë
        </h1>
      </Row>

      <Row className="d-flex justify-content-center mt-5">
        <Button
          className="btnkyqu "
          style={{
            width: "170px",
            height: "50px",
            background: "linear-gradient(270deg, #1b6be1 0%, #15cac4 100%)",
            borderRadius: "10px",
            border: "none",
            color: "white",
            fontSize: "16px",
            fontWeight: "500",
            boxShadow: "10px 10px 100px #1b6be1",
            marginTop: "2rem",
            alignItems: "center",
            paddingTop: "12px",
          }}
        >
          Kyçu këtu
        </Button>
      </Row>

      <Row className="d-flex justify-content-center">
        <img
          src="images/3phones.png"
          alt="Phones"
          className="img-fluid d-none d-lg-block"
          style={{
            width: "auto",
            height: "756px",
            marginTop: "10vh",
            zIndex: "-1",
          }}
        />

        {/* Small screen: Display the second image */}
        <img
          src="images/mobilePhone.png"
          alt="Phones"
          className="img-fluid d-block d-lg-none"
          style={{
            width: "380px",
            marginTop: "10vh",
            zIndex: "-1",
          }}
        />
      </Row>

      <Row className="d-flex justify-content-center mt-5">
        <h1
          style={{
            fontSize: "55px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Thjeshtë, Shpejtë & Sigurt
        </h1>
      </Row>

      <Row
        style={{
          textAlign: "center",
          fontWeight: "500",
          marginTop: "3rem",
        }}
      >
        <Col>
          {" "}
          <img
            src="images/RegjistrimiVizitave.png"
            alt="icon"
            style={{
              maxWidth: "20rem",
              height: "auto",
              marginBottom: "-2rem",
            }}
          />
          <h3>Regjistrimi i Vizitave</h3>
          <p>Vendosni dhe shikoni takimet me pacientët tuaj</p>
        </Col>
        <Col>
          {" "}
          <img
            src="images/ListaPacientave.png"
            alt="icon"
            style={{
              maxWidth: "20rem",
              height: "auto",
              marginBottom: "-2rem",
            }}
          />
          <h3>Listave e Pacientëve</h3>
          <p>Mbani evidencë të plotë të historisë mjekësore të pacientit</p>
        </Col>
        <Col>
          <img
            src="images/HistorikuMjeksor.png"
            alt="icon"
            style={{
              maxWidth: "20rem",
              height: "auto",
              marginBottom: "-2rem",
            }}
          />
          <h3>Historiku Mjekësor</h3>
          <p>Shikoni pacientet tuaj dhe gjeni informacionin që kërkoni</p>
        </Col>
      </Row>

      <Row
        style={{
          borderTop: "1px solid grey ",
          marginTop: "5rem",
          paddingTop: "1rem",
          width: "100vw",
        }}
      >
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
          className="d-flex justify-content-center mt-2"
        >
          {/* Legal */}
          <div
            className="d-inline-block"
            style={{ marginLeft: "2rem", marginRight: "1rem" }}
          >
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Terms of Use</p>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        <p>© 2023 Doktori App LLC. All rights reserved.</p>
      </Row>
    </Container>
  );
}

export default App;
