import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from "../assets/img/Logo_GLOBAL.png";
import IconLog1 from "../assets/img/connexion.png";
import IconLog2 from "../assets/img/inscription.png";
import cv from "../assets/img/icon.cv.png";
import Card from "../components/Card";

const Annonce = () => {
  return (
    <div className="annonce-page">
      <div
        className="header"
        style={{
          // BackgroundOpacity: "0.6",
          backgroundPosition: "center -981px",
          paddingBottom: "7rem",
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
            <p>
              Trouvez <span>L'offre ou</span>
            </p>
            <p>
              <span>Poste</span> qui vous correspond{" "}
            </p>
          </div>
        </div>

        <div className="form-component">
          <div className="form-container">
            <form>
              <input type="text" placeholder="Quoi ?"></input>
              <input type="text" placeholder="Où ?"></input>
              <input type="submit" value="Rechercher" />
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="filter col-2">
          <h1>Filtrer la recherche</h1>
          <div>
            <h3>Localisation</h3>
            <p>
              IDF-92 Haute de seine <input type="checkbox" />
            </p>
            <p>
              IDF-92 Haute de seine <input type="checkbox" />
            </p>
          </div>
          <div>
            <h3>Spécialisation</h3>
            <p>
              Life science <input type="checkbox" />
            </p>
            <p>
              Assurance
              <input type="checkbox" />
            </p>
            <p>
              Supply Chain
              <input type="checkbox" />
            </p>
            <p>
              Juridique
              <input type="checkbox" />
            </p>
            <p>
              Banque
              <input type="checkbox" />
            </p>
            <p>
              Finance
              <input type="checkbox" />
            </p>
            <p>
              Assistanat
              <input type="checkbox" />
            </p>
            <p>
              Postes à pourvoir en interne
              <input type="checkbox" />
            </p>
            <p>
              Sales
              <input type="checkbox" />
            </p>
            <p>
              Construction
              <input type="checkbox" />
            </p>
            <p>
              Ingé Tech
              <input type="checkbox" />
            </p>
          </div>
          <div>
            <h3>Secteur</h3>
            <p>Distribution/Logistique et</p>
            <p>
              chaien d'approvisionnement (..) <input type="checkbox" />
            </p>
            <p>
              Technologie de l'information (..) <input type="checkbox" />
            </p>
          </div>
          <div>
            <h3>Type de contrat</h3>
            <p>
              CDI <input type="checkbox" />
            </p>
            <p>
              CDI <input type="checkbox" />
            </p>
          </div>
          <div>
            <h3>FULL Remote Working</h3>
            <p>
              NON <input type="checkbox" />
            </p>
            <p>
              OUI <input type="checkbox" />
            </p>
          </div>
          <div>
            <h3>Fourchette Salaire</h3>
            <p className="salaire">
              <input type="text" />
            </p>
            <p className="salaire">
              <input type="text" />
            </p>
          </div>
          <button type="submit">Enregistrer les filtres</button>
        </div>
        <div className="lastoffre col-6">
          <h2>Nos dernières offres d'emploi</h2>
          <div className="row offre">
            <div className="col">
              <img src={logo} alt="" />
              <h3>Traffic Manager H/F</h3>
              <div className="inf">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="description">
                <p>
                  Traffic Manager H/F Nous recrutons un(e) Traffic Manager H/F
                  pour un CDI. Le Poste est basé à Clamart et est à pourvoir dès
                  que possible avec une rémunération comprise entre 40 000€ et
                  45000€ brut.
                </p>
              </div>
            </div>
            <div className="col btnoffre">
              <div>
                <img src={cv} alt="" />
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
                <button className="linkannonce">voir l'annonce</button>
              </div>
            </div>
          </div>
          <div className="row offre">
            <div className="col">
              <img src={logo} alt="" />
              <h3>Traffic Manager H/F</h3>
              <div className="inf">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="description">
                <p>
                  Traffic Manager H/F Nous recrutons un(e) Traffic Manager H/F
                  pour un CDI. Le Poste est basé à Clamart et est à pourvoir dès
                  que possible avec une rémunération comprise entre 40 000€ et
                  45000€ brut.
                </p>
              </div>
            </div>
            <div className="col btnoffre">
              <div>
                <img src={cv} alt="" />
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
                <button className="linkannonce">voir l'annonce</button>
              </div>
            </div>
          </div>
          <div className="row offre">
            <div className="col">
              <img src={logo} alt="" />
              <h3>Traffic Manager H/F</h3>
              <div className="inf">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="description">
                <p>
                  Traffic Manager H/F Nous recrutons un(e) Traffic Manager H/F
                  pour un CDI. Le Poste est basé à Clamart et est à pourvoir dès
                  que possible avec une rémunération comprise entre 40 000€ et
                  45000€ brut.
                </p>
              </div>
            </div>
            <div className="col btnoffre">
              <div>
                <img src={cv} alt="" />
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
                <button className="linkannonce">voir l'annonce</button>
              </div>
            </div>
          </div>

          <div className="cont-annonce">
            <div className="result">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="result">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        {/* <div class="cont-annonce">
          <div class="row">
            <div class="col-sm-3">
              <img src={logo} alt="" class="mb-5" style={{ width: "70%" }} />
              <h3>Traffic Manager H/F</h3>
              <div className="infA">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf infA">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf infA">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="inf infA">
                <button className="linkannonce">voir l'annonce</button>
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
              </div>
            </div>
            <div class="col-sm-3">
              <img src={logo} alt="" class="mb-5" style={{ width: "70%" }} />
              <h3>Traffic Manager H/F</h3>
              <div className="infA">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf infA">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf infA">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="inf infA">
                <button className="linkannonce">voir l'annonce</button>
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
              </div>
            </div>
            <div class="col-sm-3">
              <img src={logo} alt="" class="mb-5" style={{ width: "70%" }} />
              <h3>Traffic Manager H/F</h3>
              <div className="infA">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf infA">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf infA">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="inf infA">
                <button className="linkannonce">voir l'annonce</button>
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
              </div>
            </div>
            <div class="col-sm-3">
              <img src={logo} alt="" class="mb-5" style={{ width: "70%" }} />
              <h3>Traffic Manager H/F</h3>
              <div className="infA">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf infA">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf infA">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="inf infA">
                <button className="linkannonce">voir l'annonce</button>
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
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <img src={logo} alt="" class="mb-5" style={{ width: "70%" }} />
              <h3>Traffic Manager H/F</h3>
              <div className="infA">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf infA">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf infA">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="inf infA">
                <button className="linkannonce">voir l'annonce</button>
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
              </div>
            </div>
            <div class="col-sm-3">
              <img src={logo} alt="" class="mb-5" style={{ width: "70%" }} />
              <h3>Traffic Manager H/F</h3>
              <div className="infA">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf infA">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf infA">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="inf infA">
                <button className="linkannonce">voir l'annonce</button>
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
              </div>
            </div>
            <div class="col-sm-3">
              <img src={logo} alt="" class="mb-5" style={{ width: "70%" }} />
              <h3>Traffic Manager H/F</h3>
              <div className="infA">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf infA">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf infA">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="inf infA">
                <button className="linkannonce">voir l'annonce</button>
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
              </div>
            </div>
            <div class="col-sm-3">
              <img src={logo} alt="" class="mb-5" style={{ width: "70%" }} />
              <h3>Traffic Manager H/F</h3>
              <div className="infA">
                <p>Fourchette de salaire: </p>
                <p>40000€ - 45000€ / an</p>
              </div>
              <div className="inf infA">
                <p>Location: </p>
                <p>Clamart</p>
              </div>
              <div className="inf infA">
                <p>Date: </p>
                <p>15 avril 2022</p>
              </div>
              <div className="inf infA">
                <button className="linkannonce">voir l'annonce</button>
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
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="cont-annonce">
          <div className="result">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="result">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  ); 
};

export default Annonce;
