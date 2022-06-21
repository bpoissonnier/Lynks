import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo_GLOBAL.png";
import dpcv from "../assets/img/Depos.png";
import IconLog1 from "../assets/img/connexion.png";
import IconLog2 from "../assets/img/inscription.png";
import postuler from "../assets/img/postuler.jpg";
import { NavDropdown } from "react-bootstrap";

const Deposer = () => {
  return (
    <div className="deposer-page">
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
              <NavDropdown.Item href="/travail-temporaire">
                Travail temporaire
              </NavDropdown.Item>
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
      </div>
      <div className="pres">
        <div>
          <h1>Postulez en 1 clic</h1>
          <p>
            «&nbsp;Parce que chacun est unique, nous attachons beaucoup
            d’importance à créer les bonnes connexions&nbsp;»
          </p>
        </div>
        <img src={postuler} alt="" />
      </div>
      <div className="formdepo">
        <form>
          <div className="contdp">
            <div className="dp">
              <input type="nom" name="nom" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Votre Nom"/>
              <input type="prenom" name="prenom" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Votre Prenom"/>       
              <input type="email" name="email-615" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Votre email"/>
            </div>
            <div>
              <input type="telephone" name="telephone" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Votre Téléphone"/>
              <input type="fonction" name="fonction" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Fonction"/>
            </div>
            <div className="dp2">
              <div className="tp">
                Type de poste recherché
                <select name="poste-recherche" aria-invalid="false">
                  <option value="CDD/CDI">CDD/CDI</option>
                  <option value="Travail temporaire">Travail temporaire</option>
                </select>
              </div>

              <div className="upcv">
                Uploadez votre CV
                <input type="file" name="file-668" size="40" accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv" aria-required="true" aria-invalid="false"/>
              </div>
            </div>
            <div>
              <textarea name="textarea-363" withd="96%" cols="0" rows="10" aria-required="true" aria-invalid="false" placeholder="Exprimez votre motivation, votre projet"></textarea>
            </div>

            <input className="btn" type="submit" value="Envoyer"></input>

          </div>  
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Deposer;
