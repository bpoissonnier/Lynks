import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo_GLOBAL.png";
import IconLog1 from "../assets/img/connexion.png";
import IconLog2 from "../assets/img/inscription.png";
import { NavDropdown } from "react-bootstrap";
import cv from "../assets/img/icon.cv.png";
import prec from "../assets/img/prec.png";


const Poste = () => {
  return (
    <div className="poste-page">
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
          <a className="logo" href="/">
            <img src={logo} alt="" href="/" />
          </a>

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
              to="/"
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
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>DEPOSER VOTRE CV</li>
            </NavLink>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>ESPACE RECRUTEUR</li>
            </NavLink>
          </ul>
        </nav>
        <a href="/annonce">
          <img src={prec} alt="" style={{ width: `10rem` }} />
        </a>
        <h1>Description du poste</h1>
      </div>

      <div className="poste">
        <div className="description">
          <h2>Traffic, Manager H/F</h2>
          <p>
            Nous recrutons un(e) Traffic Manager H/F pour un CDI. Le poste est
            basé à Clamart et est à pourvoir dès que possible avec une
            rémunération comprise entre 40 000€ et 45 000€ brut. Vous intégrerez
            un groupement spécialisé dans la distribution d'appareils médicaux
            et vous occuperez de faire fructifier les visites sur l'ensemble des
            sites du groupe ! Rattaché pôle Marketing Digital vous êtes en
            charge de la création et de l’optimisation de trafic sur l’ensemble
            des sites du groupement, vous définissez les stratégies SEA et SEO,
            media performance (CPL, CPA e-commerce…) de chaque site et
            coordonnez les agences en charge du déploiement opérationnel.
            Deplus, vous assurez le suivi statistique quotidien et proposez les
            optimisations nécessaires. Vos missions pour y parvenir : SEO　:
            Augmenter la visibilité des sites sur les moteurs　 Définition et
            mise en place de la stratégie SEO en collaboration avec l’équipe
            e-commerce et la DSI Recommandation balise title Analyse sémantique
            et éditoriale, recommandations et suivi des stratégies de contenu
            Maillage Analyse de popularité, recommandations et suivi des
            stratégies de netlinking Vous travaillez de manière proactive en
            collaboration avec l'agence, les équipes techniques et contenus pour
            l'intégration des optimisations SEO et SEA Tracking – tagage Mise en
            place du tracking et du tagage global media et hors media en
            collaboration avec la DSI Achat Media performance Définir un plan
            d’acquisition performance SEA et display performance en fonction du
            plan de communication global Suivi des campagnes menées par l’agence
            media: gestion des tags partenaires, des flux produits, création des
            trackings, brief créa, définition de la structure des campagnes et
            des audiences Mettre en place les optimisations au quotidien Gérer
            les budgets, l’optimisation du ROI en temps réel, le set up des
            campagnes (optimisation, tests, ciblages), et A/B test Reporting　:
            Analyse des indicateurs-clés de performance du trafic et formulez
            des recommandations d'optimisation Mise en place de reporting
            consolidés avec le e-commerce Proposer des modifications du site sur
            le contenu naturel Issu(e) d’une formation supérieure Bac +5 de type
            Master spécialisé en Marketing digital et/ou client ; vous disposez
            d'une expérience de 3 ans dans le pilotage de campagnes SEO/SEA
            aussi bien en régies, trading desk ou chez l'annonceur ! Vous
            maîtrisez totalement les outils techniques du webmarketing (GTM,
            Data Studio, Google Adwords/Analytics) Vous accompagnez cela de
            connaissances HTML et SEMRUSH. Enfin, vous savez faire preuve d'une
            certaine autonomie et de réactivité. Si vous vous reconnaissez,
            alors n'attendez plus et postulez ! Avez-vous déjà pensé à devenir
            consultant(e) en recrutement ? Deux fois Great Place to Work,
            Walters People a reçu 5 étoiles dans le classement des Meilleurs
            Cabinets de Recrutement du journal Les Echos (catégories: Travail
            Temporaire et Managers et Spécialistes).
          </p>
          <button className="postulez">Postulez</button>
          <a href="/annonce">
            <img src={prec} alt="" />
          </a>
        </div>
        <div className="infposte">
          <img className="logop" src={logo} alt="" />
          <div className="inf">
            <p>Fourchette de salaire: </p>
            <p>40000€ - 45000€ / an</p>
          </div>
          <div className="inf">
            <p>Location: </p>
            <p>Clamart</p>
          </div>
          <div className="inf">
            <p>Publié le: </p>
            <p>15 avril 2022</p>
          </div>
          <div className="inf">
            <p>Référence: </p>
            <p>1555312/001</p>
          </div>
          <div className="contactposte">
            <h4>Contact </h4>
            <p>Ayoub IDRISSI</p>
            <p>+33 1 40 76 05 05</p>
            <p>ayoub.idrissi@lynkspartner.com</p>
          </div>
          <div className="postule">
            <button className="heart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="ecurrentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
            <img src={cv} alt="" />
            <button className="postulez">Postulez</button>
          </div>
        </div>
      </div>
      <h1>Offre suggérées</h1>
      <div className="sugg">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
};

export default Poste;