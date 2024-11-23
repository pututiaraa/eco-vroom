import { React, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import translate from "../assets/images/translate.png";
import flagUK from "../assets/images/flagUK.png";
import flagID from "../assets/images/flagID.png";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", lang: "English", flag: flagUK },
    { code: "id", lang: "Indonesia", flag: flagID },
  ];

  const changeLanguage = (lng) => {
    console.log("Selected language object: ", lng);
    if (lng && lng.code) {
      i18n.changeLanguage(lng.code);
    } else {
      console.error("Invalid language object:", lng);
    }
  };

  return (
    <>
      <NavDropdown
        title={<img src={translate} width="20px" />}
        id="basic-nav-dropdown"
      >
        {languages.map((lng) => {
          return (
            <NavDropdown.Item
              className={lng.code === i18n.language ? "selected" : ""}
              key={lng.code}
              onClick={() => changeLanguage(lng)}
            >
              <img class='mr-1 mr-md-5' src={lng.flag} width="20px" alt={lng.lang} />
              {lng.lang}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    </>
  );
};

export default LanguageSelector;
