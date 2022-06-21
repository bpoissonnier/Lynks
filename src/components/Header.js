import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/Logo_GLOBAL.png';
import dpcv from '../assets/img/Depos.png'
import bg from '../assets/img/Img_header.png'
import Annonce from '../assets/img/Fichier_11.png'
import IconLog1 from '../assets/img/connexion.png'
import IconLog2 from '../assets/img/inscription.png'
import { NavDropdown } from "react-bootstrap";

const Header = () => {
    return (
      <div
        className="header"
        // style={{
        //   backgroundImage: `url(${bg})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "135%",
        //   backgroundPosition: "center -400px",
        // }}
      >
        <div></div>
        <div className="container_log">
          <ul className="log">
            <img src={IconLog1} alt="" />
            <a href="/">Se connecter</a>
            <img src={IconLog2} alt="" />
            <a href="/">S'inscrire</a>
          </ul>
        </div>

        <nav>
          <img src={logo} alt="" />

          <ul className="navig">
            {/* <NavLink
              to="/le-groupe"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li><li>LE GROUPE</li></li>
            </NavLink> */}
            <NavDropdown
              id="nav-dropdown"
              title="GROUPE"
              style={{ fontSize: `1.3rem` }}
            >
              <NavDropdown.Item href="/business">Business</NavDropdown.Item>
              <NavDropdown.Item href="/executive">Executive</NavDropdown.Item>
              <NavDropdown.Item href="/finance">Finance</NavDropdown.Item>
              <NavDropdown.Item href="/health">Health</NavDropdown.Item>
              <NavDropdown.Item href="/human">Human</NavDropdown.Item>
              <NavDropdown.Item href="industry">Industry</NavDropdown.Item>
              <NavDropdown.Item href="insurance">Insurance</NavDropdown.Item>
              <NavDropdown.Item href="legal">Legal</NavDropdown.Item>
              <NavDropdown.Item href="luxe">Luxe</NavDropdown.Item>
              <NavDropdown.Item href="office">Office</NavDropdown.Item>
              <NavDropdown.Item href="supply">Supply</NavDropdown.Item>
              <NavDropdown.Item href="/travail-temporaire">Travail temporaire</NavDropdown.Item>
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
        <div className="subheader">
          <div>
            <p>
              Votre <span>prochain</span>
            </p>
            <p>
              <span>poste</span> figure déjà{" "}
            </p>
            <p>
              parmi <span>nos offres</span> d'emploi...
            </p>
            <div className="subtext">
              <p>RECRUTEMENT CDD-CDI</p>
              <p>INTERIM & MANAGEMENT DE TRANSITION</p>
            </div>
          </div>
          <div>
            <img src={dpcv} alt="" />
          </div>
        </div>

        <div className="form-component">
          <div className="form-container">
            <form>
              <input type="text" placeholder="Fonction/domaine"></input>
              <input type="text" placeholder="Quoi / où ?"></input>
              <input type="submit" value="Rechercher" />
            </form>
          </div>
        </div>

        <div
          className="AnnonceTT"
          style={{
            backgroundImage: `url(${Annonce})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "70%",
            opacity: "0.9",
          }}
        >
          <div>
            <p>ADV & RELATION</p>
            <p>OFFRES</p>
          </div>
          <div className="achat">
            <p>ACHATS</p>
            <p>OFFRES</p>
          </div>
          <div className="supply">
            <p>SUPPLY CHAIN</p>
            <p>OFFRES</p>
          </div>
          <div>
            <p>IMPORT EXPORT</p>
            <p>OFFRES</p>
          </div>
        </div>

        <div className="LastAnnonce">
          <h2>ANNONCES RÉCENTES</h2>
          <div>
            <ul>
              <li>
                Acheteur anglais courant F/H - CDI{" "}
                <span>(94) Val-de-Marne 45.0K€ CDI </span>
              </li>
              <li>
                Acheteur anglais courant F/H - CDI{" "}
                <span>(94) Val-de-Marne 45.0K€ CDI </span>
              </li>
              <li>
                Acheteur anglais courant F/H - CDI{" "}
                <span>(94) Val-de-Marne 45.0K€ CDI </span>
              </li>
              <li>
                Acheteur anglais courant F/H - CDI{" "}
                <span>(94) Val-de-Marne 45.0K€ CDI </span>
              </li>
              <li>
                Acheteur anglais courant F/H - CDI{" "}
                <span>(94) Val-de-Marne 45.0K€ CDI </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;