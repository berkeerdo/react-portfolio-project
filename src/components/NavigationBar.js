import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container className="themed-container" fluid="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          <h7 className="mx-3 title">Berke Erdoğan</h7>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">Hakkımda</Nav.Link>
            <Nav.Link href="#services">Hizmetler</Nav.Link>
            <Nav.Link href="#portfolio">Portfolyo</Nav.Link>
            <Nav.Link href="#contact">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
