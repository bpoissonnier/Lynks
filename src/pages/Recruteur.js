import React from "react";
import Footer from "../components/Footer";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo_GLOBAL.png";
import IconLog1 from "../assets/img/connexion.png";
import IconLog2 from "../assets/img/inscription.png";
import { NavDropdown } from "react-bootstrap";

const Recruteur = () => {
  return (
    <div className="recruteur-page">
      <div
        className="header"
        style={{
          backgroundImage: `none`,
          paddingBottom: "2rem",
        }}
      >
        <div className="container_log">
          <ul className="log">
            <img src={IconLog1} alt="" />
            <a href="/">Se connecter</a>
            <img src={IconLog2} alt="" />
            <a href="/">S'inscrire</a>
          </ul>
        </div>

        <nav>
          <img src={logo} alt="" href="/" />

          <ul className="navig">
            <NavDropdown
              id="nav-dropdown"
              title="GROUPE"
              style={{ fontSize: `1.3rem` }}
            >
              <NavDropdown.Item href="#">Finance</NavDropdown.Item>
              <NavDropdown.Item href="#">Assurance</NavDropdown.Item>
              <NavDropdown.Item href="#">Business</NavDropdown.Item>
              <NavDropdown.Item href="#">Office</NavDropdown.Item>
              <NavDropdown.Item href="#">Santé</NavDropdown.Item>
              <NavDropdown.Item href="#">Banque</NavDropdown.Item>
              <NavDropdown.Item href="#">Executive</NavDropdown.Item>
              <NavDropdown.Item href="#">Supply</NavDropdown.Item>
              <NavDropdown.Item href="#">Human</NavDropdown.Item>
              <NavDropdown.Item href="#">Industrie</NavDropdown.Item>
              <NavDropdown.Item href="#">IT</NavDropdown.Item>
              <NavDropdown.Item href="#">Legal</NavDropdown.Item>
              <NavDropdown.Item href="#">Travail temporaire</NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to="/annonce"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>OFFRE D'EMPLOI</li>
            </NavLink>
            <NavLink
              to="/les-metiers"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>LES MÉTIERS</li>
            </NavLink>
            <NavLink
              to="/deposer-cv"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>DEPOSER VOTRE CV</li>
            </NavLink>
            <NavLink
              to="/espace-recruteur"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>ESPACE RECRUTEUR</li>
            </NavLink>
          </ul>
        </nav>
        <h1>Espace recruteur</h1>
      </div>

      <div className="log">
        <h2>Connexion</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Recruteur;
