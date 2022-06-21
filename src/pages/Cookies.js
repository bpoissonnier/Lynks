import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../assets/img/Logo_GLOBAL.png";
import IconLog1 from "../assets/img/connexion.png";
import IconLog2 from "../assets/img/inscription.png";

const Cookies = () => {
  return (
    <div className="cookies-page">
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
            <p>Politique de cookies</p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Politique de cookies (UE)</h1>
        <div>
          <p>
            Cette politique de cookies a été mise à jour pour la dernière fois
            le octobre 26, 2021 et s’applique aux citoyens et aux résidents
            permanents légaux de l’Espace Économique Européen et de la Suisse.
          </p>
          <h2>1. Introduction</h2>
          <p>
            Notre site web,{" "}
            <a href="https://www.lynks-partner.com">
              https://www.lynks-partner.com
            </a>{" "}
            (ci-après&nbsp;: «&nbsp;le site web&nbsp;») utilise des cookies et
            autres technologies liées (par simplification, toutes ces
            technologies sont désignées par le terme «&nbsp;cookies&nbsp;»). Des
            cookies sont également placés par des tierces parties que nous avons
            engagées. Dans le document ci-dessous, nous vous informons de
            l’utilisation des cookies sur notre site web.
          </p>
          <h2>2. Que sont les cookies&nbsp;?</h2>
          <p>
            Un cookie est un petit fichier simple envoyé avec les pages de ce
            site web et stocké par votre navigateur sur le disque dur de votre
            ordinateur ou d’un autre appareil. Les informations qui y sont
            stockées peuvent être renvoyées à nos serveurs ou aux serveurs des
            tierces parties concernées lors d’une visite ultérieure.
          </p>
          <h2>3. Que sont les scripts&nbsp;?</h2>
          <p>
            Un script est un élément de code utilisé pour que notre site web
            fonctionne correctement et de manière interactive. Ce code est
            exécuté sur notre serveur ou sur votre appareil.
          </p>
          <h2>4. Qu’est-ce qu’une balise invisible&nbsp;?</h2>
          <p>
            Une balise invisible (ou balise web) est un petit morceau de texte
            ou d’image invisible sur un site web, utilisé pour suivre le trafic
            sur un site web. Pour ce faire, diverses données vous concernant
            sont stockées à l’aide de balises invisibles.
          </p>
          <h2>5. Cookies</h2>
          <p>5.1 Cookies techniques ou fonctionnels</p>
          <p>
            Certains cookies assurent le fonctionnement correct de certaines
            parties du site web et la prise en compte de vos préférences en tant
            qu’utilisateur. En plaçant des cookies fonctionnels, nous vous
            facilitons la visite de notre site web. Ainsi, vous n’avez pas
            besoin de saisir à plusieurs reprises les mêmes informations lors de
            la visite de notre site web et, par exemple, les éléments restent
            dans votre panier jusqu’à votre paiement. Nous pouvons placer ces
            cookies sans votre consentement.
          </p>
          <p>5.2 Cookies statistiques</p>
          <p>
            Nous utilisons des cookies statistiques afin d’optimiser
            l’expérience des utilisateurs sur notre site web. Avec ces cookies
            statistiques, nous obtenons des observations sur l’utilisation de
            notre site web.&nbsp;Nous demandons votre permission pour placer des
            cookies statistiques.
          </p>
          <p>5.3 Cookies de marketing/suivi</p>
          <p>
            Les cookies de marketing/suivi sont des cookies ou toute autre forme
            de stockage local, utilisés pour créer des profils d’utilisateurs
            afin d’afficher de la publicité ou de suivre l’utilisateur sur ce
            site web ou sur plusieurs sites web dans des finalités marketing
            similaires.
          </p>
          <h2>7. Consentement</h2>
          <p>
            Lorsque vous visitez notre site web pour la première fois, nous vous
            montrerons une fenêtre contextuelle avec une explication sur les
            cookies. Dès que vous cliquez sur «&nbsp;Enregistrer les
            préférences&nbsp;» vous nous autorisez à utiliser les catégories de
            cookies et d’extensions que vous avez sélectionnés dans la fenêtre
            contextuelle, comme décrit dans la présente politique de cookies.
            Vous pouvez désactiver l’utilisation des cookies via votre
            navigateur, mais veuillez noter que notre site web pourrait ne plus
            fonctionner correctement.
          </p>
          <p>7.1 Gérez vos réglages de consentement</p>
          <h2>8. Vos droits concernant les données personnelles</h2>
          <p>
            Vous avez les droits suivants concernant vos données
            personnelles&nbsp;:
          </p>
          <ul>
            <li>
              Vous avez le droit de savoir pourquoi vos données personnelles
              sont nécessaires, ce qui leur arrivera et combien de temps elles
              seront conservées.
            </li>
            <li>
              Droit d’accès&nbsp;: vous avez le droit d’accéder à vos données
              personnelles que nous connaissons.
            </li>
            <li>
              Droit de rectification&nbsp;: vous avez le droit à tout moment de
              compléter, corriger, faire supprimer ou bloquer vos données
              personnelles.
            </li>
            <li>
              Si vous nous donnez votre consentement pour le traitement de vos
              données, vous avez le droit de révoquer ce consentement et de
              faire supprimer vos données personnelles.
            </li>
            <li>
              Droit de transférer vos données&nbsp;: vous avez le droit de
              demander toutes vos données personnelles au responsable du
              traitement et de les transférer dans leur intégralité à un autre
              responsable du traitement.
            </li>
            <li>
              Droit d’opposition&nbsp;: vous pouvez vous opposer au traitement
              de vos données. Nous obtempérerons, à moins que certaines raisons
              ne justifient ce traitement.
            </li>
          </ul>
          <p>
            Pour exercer ces droits, veuillez nous contacter. Veuillez vous
            référer aux coordonnées au bas de cette politique de cookies. Si
            vous avez une plainte concernant la façon dont nous traitons vos
            données, nous aimerions en être informés, mais vous avez également
            le droit de déposer une plainte auprès de l’autorité de contrôle
            (l’autorité chargée de la protection des données, comme le CEPD).
          </p>
          <h2>9. Activer/désactiver et supprimer les cookies</h2>
          <p>
            Vous pouvez utiliser votre navigateur internet pour supprimer
            automatiquement ou manuellement les cookies. Vous pouvez également
            spécifier que certains cookies ne peuvent pas être placés. Une autre
            option consiste à modifier les réglages de votre navigateur Internet
            afin que vous receviez un message à chaque fois qu’un cookie est
            placé. Pour plus d’informations sur ces options, reportez-vous aux
            instructions de la section Aide de votre navigateur.
          </p>
          <p>
            Veuillez noter que notre site web peut ne pas marcher correctement
            si tous les cookies sont désactivés. Si vous supprimez les cookies
            dans votre navigateur, ils seront de nouveau placés après votre
            consentement lorsque vous revisiterez nos sites web.
          </p>
          <h2>10. Coordonnées</h2>
          <p>
            Pour des questions et/ou des commentaires sur notre politique de
            cookies et cette déclaration, veuillez nous contacter en utilisant
            les coordonnées suivantes&nbsp;:
          </p>
          <p>Lynks Partner</p>
          <p>32 Rue de Mogador, 75009 Paris - 01 44 67 88 22</p>
          <p>contact@lynks-partner.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cookies;
