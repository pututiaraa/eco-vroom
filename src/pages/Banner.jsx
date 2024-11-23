import React from 'react';
import banner from '../assets/images/banner.png';
import '../App.css';
import { useTranslation } from "react-i18next";

const Banner = () => {
  const {t} = useTranslation()

  return (
    <div className='slogan text-center'>
        <h1>Drive Green, Drive Clean</h1>
        <p>{t("greetings")}</p>
        <img src={banner} className='img-fluid' alt='' />
    </div>
  )
}

export default Banner