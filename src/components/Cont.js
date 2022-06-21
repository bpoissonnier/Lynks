import React from "react";
import ReactPlayer from "react-player";
import icon1 from "../assets/img/Fichier 9.svg"
import icon2 from "../assets/img/Fichier 7.svg";
import icon3 from "../assets/img/Fichier 8.svg";
import tr1 from "../assets/img/tr1-re.png";
import hlp from "../assets/img/Help_icon.png";
import fich1 from "../assets/img/Fichier 2.png";
import fich2 from "../assets/img/Fichier 3.png";
import shiseido from "../assets/img/Shiseido_logo.png"
import airl from "../assets/img/Air_Liquide_logo.png"
import sport from "../assets/img/Logo-sport2000.png"
import airbus from "../assets/img/airbus-logo.png"

const Cont = () => {
  return (
    <div className="Cont">
      <div className="expertises">
        <h1>
          Nos <br /> expertises
        </h1>
        <p>
          Nous vous accompagnons dans l'analyse <br /> de vos besoins afin de
          trouver les talents <br /> qui vous ressemblent.
        </p>
      </div>
      <div className="contain_card">
        <div className="card card1">
          <img src={icon1} alt="" />
          <p>
            Grande Distribution <br />
            Commerce <br />
            Retail
          </p>
        </div>
        <div className="card card2">
          <img src={icon2} alt="" />
          <p>
            Industrie <br />& Santé
          </p>
        </div>
        <div className="card card3">
          <img src={icon3} alt="" />
          <p>
            Banque <br />& Assurance
          </p>
        </div>
      </div>

      <div className="txtcont">
        <p>
          Notre <span>équipe</span> <br /> prendra en compte <br /> les données
          de <span>l'entreprise</span>,
        </p>
        <p>
          la culture, les effectifs, <br /> les services, l'organisation <br />{" "}
          interne
        </p>
      </div>

      <button>
        <p>
          Découvrez les
          <br />
          métiers recrutés
        </p>
      </button>

      <div className="travaille">
        <div>
          <div className="intro_t">
            <h1>
              Travailler avec <br /> Lynks Partner, c'est :
            </h1>
            <p>
              Un accompagnement personnalisé <br /> et une équipe dédiée
              <br />
            </p>
            <p>
              Une expertise poussée <br /> dans nos métiers
            </p>
            <p>
              Un lien étroit <br />
              avec nos candidats
            </p>          
            <div className="help-icon">
            <img src={hlp} alt="" />
            <p>En savoir <br />plus sur nous</p>
            </div>
          </div>

          <img src={tr1} alt="" className="imgtr" />
        </div>

        {/* <div className="nombre">
          <div>
            <h1>18</h1>
            <h3>ANNÉES</h3>
            <p>Experience</p>
          </div>
          <div>
            <h1>850</h1>
            <h3>ENTRETIENS</h3>
            <p>Par an</p>
          </div>
          <div>
            <h1>200</h1>
            <h3>NOMBRES</h3>
            <p>Clients</p>
          </div>
          <div>
            <h1>120</h1>
            <h3>MISSIONS</h3>
            <p>Effectués</p>
          </div>
        </div> */}
      </div>
        
      <div className="offre">
        <a href="/annonce">
          <img className="imgoffre1" src={fich1} alt="" />
          <div>
            <h1>
              Nos offres <br /> d'emploi
            </h1>
            <p>Consultez toutes nos offres</p>
          </div>
          <img className="imgoffre2" src={fich2} alt="" />
        </a>
      </div>
      <div>
        <div className="offrecli" style={{textAlign:"center"}}>
          <h2>Ils nous <br /> font confiance</h2>
          <p>Lynks Partner, plus de 800 clients depuis 18 ans</p>
        </div>
        <div className="client">
          <img className="logo" src={shiseido} alt="" />
          <img className="logo" src={airl} alt="" />
          <img className="logo" src={sport} alt="" />
          <img className="logo" src={airbus} alt="" />
        </div>
      </div>
      <div className="video">
        <ReactPlayer url="https://www.youtube.com/embed/YQHdnr-q7XI" />
      </div>
    </div>
  );
}

export default Cont;