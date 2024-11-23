import React from 'react';
import car1 from '../assets/images/car1.png';
import car3 from '../assets/images/car3.png';
import car4 from '../assets/images/car4.png';
import car5 from '../assets/images/car5.png';
import car7 from '../assets/images/car7.png';
import car8 from '../assets/images/car8.png';
import { useTranslation } from 'react-i18next';


const Products = () => {
  const {t} = useTranslation();
  const { descEVS1001, descEVMiniC02, descEVMiniC11, descEVEll, descEVSUVAC, descEVSUVAA, buttonProducts  } = t("productsContent");

  return (
    <>
        <div class='container mt-5 mb-5 products' id='products'>
            <div class='text-center'>
                <h1>{t("ourProducts")}</h1>
            </div>
            <div class='row row-cols-2 row-cols-md-3 g-4'>
                <div class='col'>
                    <div class='card p-2'>
                        <img src={car1} card-img-top />
                        <div class='card-body'>
                            <h5 class='card-title'>EV-S1001</h5>
                            <p class='card-text'> {descEVS1001} </p>
                        </div>
                        <button type='button' class='btn btn-success'>{buttonProducts}</button>
                    </div>
                </div>
                <div class='col'>
                    <div class='card p-2'>
                        <img src={car3} card-img-top />
                        <div class='card-body'>
                            <h5 class='card-title'>EV Mini C02</h5>
                            <p class='card-text'>{descEVMiniC02}</p>
                        </div>
                        <button type='button' class='btn btn-success'>{buttonProducts}</button>
                    </div>
                </div>
                <div class='col'>
                    <div class='card p-2'>
                        <img src={car4} card-img-top />
                        <div class='card-body'>
                            <h5 class='card-title'>EV Mini C11</h5>
                            <p class='card-text'>{descEVMiniC11}</p>
                        </div>
                        <button type='button' class='btn btn-success'>{buttonProducts}</button>
                    </div>
                </div>
                <div class='col'>
                    <div class='card p-2'>
                        <img src={car5} card-img-top />
                        <div class='card-body'>
                            <h5 class='card-title'>EV Ell Turbo</h5>
                            <p class='card-text'>{descEVEll}</p>
                        </div>
                        <button type='button' class='btn btn-success'>{buttonProducts}</button>
                    </div>
                </div>
                <div class='col'>
                    <div class='card p-2'>
                        <img src={car7} card-img-top />
                        <div class='card-body'>
                            <h5 class='card-title'>EV SUV-AC</h5>
                            <p class='card-text'>{descEVSUVAC}</p>
                        </div>
                        <button type='button' class='btn btn-success'>{buttonProducts}</button>
                    </div>
                </div>
                <div class='col'>
                    <div class='card p-2'>
                        <img src={car8} card-img-top />
                        <div class='card-body'>
                            <h5 class='card-title'>EV SUV-AA</h5>
                            <p class='card-text'>{descEVSUVAA}</p>
                        </div>
                        <button type='button' class='btn btn-success'>{buttonProducts}</button>
                    </div>
                </div>
                
                

            </div>
        </div>
    </>
  )
}

export default Products