import React from "react";
import logo from "../assets/images/logo.png";
import logoFB from "../assets/images/fb.png";
import logoIG from "../assets/images/ig.png";
import logoTWT from "../assets/images/twt.png";
import "../App.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  const { prod, choose, stylish, sustainability, cost, community, support, performance, follow, getin} = t("footer")
  return (
    <div>
      <footer class="footer text-center text-lg-start text-light">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <img src={logo} width="50%" height="auto" />
              <p>
                Drive Green, Drive Clean
                <br />
                Menteng, Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310
              </p>
            </div>
            <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
              <h5>{prod}</h5>
              <p>
                EV-S1001 <br />
                EV Mini C02 <br />
                EV Mini C11 <br />
                EV Ell Turbo <br />
                EV SUV-AC <br />
                EV SUV-AA <br />
              </p>
            </div>
            <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
              <h5>{choose}</h5>
              <p>
                {stylish} <br />
                {sustainability} <br />
                {cost} <br />
                {community} <br />
                {support} <br />
                {performance} <br />
              </p>
            </div>
            <div class="sosmed col-lg-2 col-md-12 mb-md-0">
              <h5>{follow}</h5>
              <p>{getin}</p>
              <img src={logoFB} alt=""></img>
              <img src={logoIG} alt=" "></img>
              <img src={logoTWT} alt=" "></img>
            </div>
          </div>
        </div>
        <hr />
        <div class="text-center p-3">© 2024 Copyright Eco Vroom</div>
      </footer>
    </div>
  );
};

export default Footer;
