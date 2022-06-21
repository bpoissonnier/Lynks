import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../assets/img/Logo_GLOBAL.png";
import IconLog1 from "../assets/img/connexion.png";
import IconLog2 from "../assets/img/inscription.png";

const Mention = () => {
  return (
    <div className="mention-page">
      <div
        className="header"
        style={{
          // BackgroundOpacity: "0.6",
          backgroundPosition: "center -981px",
          paddingBottom: "0rem",
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
        <div className="subheader">
          <div>
            <p>Mentions légales</p>
          </div>
        </div>
      </div>

      <div className="article">
        <h1>Mentions légales</h1>
        <div>
          <div className="row">
            <h1>Les informations légales</h1>
          </div>
          <div className="row">
            <p>
              LYNKS PARTNER&nbsp;est protégé par les dispositions du Code de la
              propriété intellectuelle, notamment par celles de ses dispositions
              relatives à la propriété littéraire et artistique, aux droits
              d’auteur et à la protection des bases de données.
            </p>
            <p>Ces droits sont la propriété exclusive de LYNKS PARTNER.</p>
            <p>
              Le Code de la propriété intellectuelle n’autorise aux termes de
              l’article L.122-5, d’une part, que les copies ou reproductions
              strictement réservées à l’usage privé du copiste et non destinées
              à une utilisation collective et, d’autre part, que les analyses et
              les courtes citations dans un but d’exemple et d’illustration.
            </p>
            <p>
              De même, l’article L.342-3 du Code de la propriété intellectuelle
              n’autorise que l’extraction ou la réutilisation d’une partie non
              substantielle du contenu d’une base de données mise à la
              disposition du public par son titulaire.
            </p>
            <p>
              Par conséquent, toute représentation ou reproduction non autorisée
              de LYNKS PARTNER, par quelque moyen que ce soit, est strictement
              interdite sous peine de poursuites judiciaires. Le contrevenant
              s’expose à des sanctions civiles et pénales et notamment aux
              peines prévues aux articles L.335-2 et L.343-1 du Code de la
              propriété intellectuelle.
            </p>
          </div>
          <div className="row">
            <p>
              <strong>
                ENREGISTREMENT D’INFORMATIONS SUR HTTP://WWW.LYNKS-PARTNER.FR
              </strong>
            </p>
            <p>
              Les informations que nous sollicitons de la part des utilisateurs
              dans les rubriques où ils enregistrent, notamment, leur CV, sont
              nécessaires à la mise en ligne de ces informations à destination
              des recruteurs.
            </p>
            <p>
              LYNKS PARTNER s’engage à ce que les informations saisies ou
              envoyées par mail ne soient pas traitées à d’autres fins que leur
              mise en ligne et leur utilisation par les clients du service LYNKS
              PARTNER.
            </p>
            <p>
              LYNKS PARTNER s’engage en outre à ce que ces informations ne
              soient pas cédées à des tiers, c’est-à-dire d’autres sociétés ,
              des organismes ou sociétés extérieures au groupe, ou encore des
              personnes physiques, à des fins autres que les problématiques
              liées au recrutement et à la sélection de candidats, étant entendu
              que les informations sur les utilisateurs, et notamment les CV mis
              en ligne sur LYNKS PARTNER, sont destinés à la consultation et à
              la sélection par des professionnels du recrutement, et que les
              utilisateurs utilisent les services de LYNKS PARTNER dans le but
              notamment de cette mise en relation.
            </p>
            <p>
              Nous attirons l’attention sur le fait que les informations
              communiquées par les utilisateurs seront diffusées sur notre site
              Internet, lequel est accessible par nos abonnés via le réseau
              Internet avec toutes les conséquences inhérentes à un réseau
              mondial.
            </p>
            <p>
              En vertu de l’article 27 de la loi n°78-17 du 6 janvier 1978
              relative à l’informatique, aux fichiers et aux libertés, les
              utilisateurs disposent, d’un droit d’accès, de modification, de
              rectification et de suppression des données qui les concernent.
              Pour exercer ce droit, ceux-ci peuvent exercer eux-mêmes ces
              modifications en ligne, en se connectant à » mon CV » à l’aide du
              nom d’utilisateur et du mot de passe qu’ils ont choisis.
            </p>
            <p>
              <strong>INFORMATIONS LÉGALES</strong>
            </p>
            <p>Lynks Partner</p>
            <p>32 Rue de Mogador, 75009 Paris - 01 44 67 88 22</p>
            <p>contact@lynks-partner.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mention;
