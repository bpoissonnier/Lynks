import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo_GLOBAL.png";
import IconLog1 from "../assets/img/connexion.png";
import IconLog2 from "../assets/img/inscription.png";
import { NavDropdown } from "react-bootstrap";
import worker from "../assets/img/worker.jpg"

const Groupe = () => {
  return (
    <div className="groupe-page">
      <div
        className="header"
        style={{
          backgroundImage: `none`,
          paddingBottom: "4rem",
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
        <h1>Qui sommes nous ?</h1>
      </div>

      <div className="contgroup">
        <div className="description">
          <h1>Le cabinet Lynks Partner</h1>
          <p>
            Avec plus de <span>18 années d’existence</span>, LYNKS PARTNER est
            devenu aujourd’hui le cabinet de recrutement{" "}
            <span>
              expert sur les secteurs de l’industrie, de la finance et de la
              distribution.
            </span>
          </p>
          <ul>
            Notre métier :<li>le recrutement en CDI</li>
            <li>le recrutement en CDD</li>
            <li>travail temporaire</li>
            <li>le management transition</li>
          </ul>
          <p>
            Nous sommes reconnus pour nos principes <span>déontologiques</span>,
            nos domaines d’<span>expertise</span>, le <span>respect</span> de
            l’image de nos clients et la
            <span>confidentialité</span> des informations transmises.
          </p>
          <p>
            Notre <span>démarche humaine</span> (relations privilégiées) et <span>notre réactivité</span>
            nous permettent de répondre à des problématiques de recrutement dans
            <span>des délais courts</span> par rapport aux pratiques du marchés (du brief du
            client à la signature de contrat de travail du candidat).
          </p>
        </div>
        <div className="colimg">
            <img src={worker} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Groupe;
