import React from "react";
import aboutimg from "../assets/images/aboutimg.png";
import ChoosingUs from "../component/ChoosingUs";
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t} = useTranslation()

  return (
    <>
      <div class="about container mt-5" id='about'>
        <div class="row mt-4">
          <div class="col-sm-1"></div>
          <div class="col-sm-5 text-center">
            <img
              src={aboutimg}
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="text-aboutus align-items-center justify-content-center col-sm-5 p-5">
            <div class="text-center">
              <h1>{t("aboutUs")}</h1>
            </div>
            <p>
              {t("descAboutUs")}
            </p>
          </div>
          <div class="col-sm-1"></div>
        </div>
        <ChoosingUs />
      </div>
    </>
  );
};

export default About;
