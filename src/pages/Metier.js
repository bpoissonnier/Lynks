import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo_GLOBAL.png";
import IconLog1 from "../assets/img/connexion.png";
import IconLog2 from "../assets/img/inscription.png";
import { Accordion } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
// import Contact from "../components/Contact";

// import Header from "../components/Header";

const Metier = () => {
  return (
    <div className="metier-page">
      {/* <Header /> */}
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
        <h1>Les métiers recrutés (H/F)</h1>
      </div>
      <div className="metierAcc">
        <Accordion
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Marketing et communication</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Assistant(e) Chef de produit</li>
                <li>Chef de produit</li>
                <li>Chef de groupe / marché</li>
                <li>Chef de projet marketing</li>
                <li>Responsable Merchandising</li>
                <li>Responsable Trade Marketing</li>
                <li>Chargé(e) d’étude</li>
                <li>Category Manager</li>
                <li>Responsable communication</li>
                <li>Directeur(rice) Marketing</li>
                <li>Ingénieur Packaging</li>
                <li>Assistant(e) Communication</li>
                <li>Chef de projet e-commerce</li>
                <li>Chef de projet IT /</li>
                <li>ERP</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion
          className="acc2"
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="1">
            <Accordion.Header>Commercial / ventes</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Chargé(e) de clientèle</li>
                <li>Chef de secteur</li>
                <li>Key account manager</li>
                <li>Directeur(rice) des ventes</li>
                <li>Directeur(rice) magasin</li>
                <li>Directeur(rice) d’enseigne</li>
                <li>Directeur(rice) réseau</li>
                <li>Promoteur des ventes</li>
                <li>Responsable ADV</li>
                <li>Gestionnaire ADV</li>
                <li>Ingénieur commercial</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion
          className="acc3"
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="2">
            <Accordion.Header>Supply chain/Logistique</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Approvisionneur</li>
                <li>Responsable supply chain</li>
                <li>Responsable logistique</li>
                <li>Responsable Master Data</li>
                <li>Coordinateur(rice) flux</li>
                <li>Prévisionniste / Quota Planner</li>
                <li>Responsable méthode</li>
                <li>Responsable transport</li>
                <li>Responsable stock</li>
                <li>Ingénieur supply chain / logistique</li>
                <li>Directeur(rice) supply chain</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="metierAcc">
        <Accordion
          className="acc4"
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Achats</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Acheteur production</li>
                <li>Acheteur hors production</li>
                <li>Acheteur matières premières</li>
                <li>Acheteur commodités</li>
                <li>Acheteur projet</li>
                <li>Acheteur site</li>
                <li>Acheteur IT</li>
                <li>Acheteur famille de produits</li>
                <li>Sourcing Manager</li>
                <li>Directeur achats</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion
          className="acc5"
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="1">
            <Accordion.Header>Qualité</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Ingénieur qualité</li>
                <li>Auditeur qualité</li>
                <li>Ingénieur QSE</li>
                <li>Directeur(rice) Qualité</li>
                <li>Responsable Affaires Réglementaires</li>
                <li>Chargé(e) Vérifications Légales</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion
          className="acc6"
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="2">
            <Accordion.Header>Banque/Finance/Assurance</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Responsable d’agence</li>
                <li>Comptable (Client, Fournisseurs, Général…)</li>
                <li>Chargé(e) de recouvrement</li>
                <li>Responsable administratif et financier</li>
                <li>Directeur administratif et financier</li>
                <li>Responsable comptable / directeur comptable</li>
                <li>Gestionnaire paie</li>
                <li>Responsable paie</li>
                <li>Trésorier</li>
                <li>Contrôleur de gestion</li>
                <li>Responsable Contrôleur de gestion</li>
                <li>Crédit ManagerContrôleur Financier</li>
                <li>Contrôleur Financier</li>
                <li>Consolideur</li>
                <li>Auditeur interne / externe</li>
                <li>Chef de mission</li>
                <li>Actuaire</li>
                <li>Gestionnaire Risk</li>
                <li>Gestionnaire Rédacteur Assurance</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="metierAcc" style={{ marginBottom: `16rem` }}>
        <Accordion
          className="acc7"
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Assistanat</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Assistant(e) Direction</li>
                <li>Assistant(e) Commercial</li>
                <li>Assistant(e) Juridique</li>
                <li>Assistant(e) ADV / Export</li>
                <li>Assistant(e) Polyvalent</li>
                <li>Assistant(e) RH</li>
                <li>Assistant(e) ADP</li>
                <li>Assistant(e) Marketing</li>
                <li>Assistant(e) Achat</li>
                <li>Office Manager</li>
                <li>Assistant(e) de Gestion</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion
          className="acc8"
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="1">
            <Accordion.Header>Ressources Humaines</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Chargé(e) de RH</li>
                <li>Chargé(e) de recrutement</li>
                <li>Chargé(e) de formation</li>
                <li>Contrôleur de gestion sociale</li>
                <li>Responsable Ressources Humaines</li>
                <li>Responsable SIRH</li>
                <li>Responsable Rémunération et avantages sociaux</li>
                <li>Responsable Gestion sociale</li>
                <li>Directeur(rice) Ressources Humaines</li>
                <li>HRBP</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion
          className="acc9"
          style={{
            width: `17rem`,
            margin: `2rem 2rem`,
          }}
        >
          <Accordion.Item eventKey="2">
            <Accordion.Header>Juridique</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Juriste contrats</li>
                <li>Juriste Droit social</li>
                <li>Juriste Droit des Entreprises</li>
                <li>Juriste fiscalité</li>
                <li>Responsable juridique</li>
                <li>Juriste Propriété intellectuelle</li>
                <li>Chargé d’affaires règlementaires</li>
                <li>…</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

export default Metier;
