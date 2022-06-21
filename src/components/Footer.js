import React from "react";
import Map from "./Maps";
import logo from "../assets/img/Logo_footer.png";
import map from "../assets/img/Map_area.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="cercle">
        <div>
          <img src={logo} className="logo" alt="" />
          <div className="test">
            <div>
              <ul>
                <li>
                  <a href="/">Le groupe</a>
                </li>
                <li>
                  <a href="/annonce">Offres d'emploi</a>
                </li>
                <li>
                  <a
                    href="https://lynkspatner-home.web.app/les-metiers"
                    target="_metier"
                  >
                    Les Métiers
                  </a>
                </li>
                <li>
                  <a href="/">Deposer votre cv</a>
                </li>
                <li>
                  <a href="/espace-recruteur">Espace recruteur</a>
                </li>
                <li>
                  <a href="/mentions-legales">Mentions légales</a>
                </li>
                <li>
                  <a href="/politique-de-cookies">Politique de cookies (UE)</a>
                </li>
              </ul>
            </div>

            <div className="map">
              <img src={map} alt="" />
              <div className="addinfo">
                <p>Nos coordonnées</p>
                <p>32 Rue de Mogador, 75009 Paris - 01 44 67 88 22</p>
                <p>contact@lynks-partner.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

