import React from "react";
import logo from "../assets/images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import LanguageSelector from "./LanguageSelector";
import "../App.css";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const {t} = useTranslation();
  const { home, about, products } = t("navs")
  return (
    <Navbar expand="xl" className=" navbar bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="d-inline-block align-top text-center"
            width="150px"
            height="40px"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link href="/">{home}</Nav.Link>
            <Nav.Link href="#about">{about}</Nav.Link>
            <Nav.Link href="#products">{products}</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <LanguageSelector />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
