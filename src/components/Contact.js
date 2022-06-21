import React from "react";
import loc from "../assets/img/Fichier 4.png"
import phone from "../assets/img/phone.png"
import env from "../assets/img/ltr.png"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactinfo">
        <h2>LYNKS PARTNER</h2>
        <div>
          <img src={loc} alt="" />
          <a href="https://goo.gl/maps/MSg5R49dgb2RCX1w7" target="_map">
            32 rue de Mogador · <br /> 75009 PARIS · France
          </a>
        </div>
        <div>
          <img src={loc} alt="" />
          <a href="https://goo.gl/maps/GjaZ5sHds36nRkiP6" target="_map">
            55 Rue de la Chaussée d'Antin · <br /> 75009 PARIS · France
          </a>
        </div>
        <div>
          <img className="imgPhone" src={phone} alt="" />
          <p>+33 (0) 1 88 24 24 34</p>
        </div>
        <div>
          <img src={env} alt="" />
          <a
            href="mailto:contact@lynks-partner.com?subject=HTML link"
          >
            contact@lynks-partner.com
          </a>
        </div>
      </div>
      <div className="formcontact">
        <form action="get">
          <h2>Pour nous contacter</h2>
          <input type="text" placeholder="Votre nom" />
          <input type="text" placeholder="Votre email" />
          <textarea type="text" placeholder="Message" rows="5" />
          <button>Envoyer le Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
