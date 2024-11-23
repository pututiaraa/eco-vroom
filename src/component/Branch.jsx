import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const API_KEY = "6fb6bf804137a5e979c076d1cdfd1f13";

const Branch = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [availability, setAvailability] = useState("");

  const availableProvinces = [
    "1", //Bali
    "2", //Bangka Belitung
    "3", //Banten
    "4", //Bengkulu
  ];

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        console.log("Fetching provinces from:", "/api/province"); 
        const response = await axios.get("/api/province", {
          headers: { key: API_KEY },
        });
        console.log("Provinces response:", response.data); 
        setProvinces(response.data.rajaongkir.results);
      } catch (error) {
        console.error(
          "Error fetching provinces:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedProvince) {
        try {
          console.log(
            "Fetching cities from:",
            "/api/city",
            "with province:",
            selectedProvince
          );
          const response = await axios.get("/api/city", {
            headers: { key: API_KEY },
            params: { province: selectedProvince },
          });
          console.log("Cities response:", response.data);
          setCities(response.data.rajaongkir.results);
        } catch (error) {
          console.error(
            "Error fetching cities:",
            error.response ? error.response.data : error.message
          );
        }
      }
    };

    fetchCities();
  }, [selectedProvince]);

  const handleCheckAvailability = () => {
    if (availableProvinces.includes(selectedProvince)) {
      setAvailability("Available! Our branch is available on your region.");
    } else {
      setAvailability(
        "Not Available! Sorry, our branch isn't available on your region."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckAvailability();
  };

  const { t } = useTranslation();
  const {
    titleBranch,
    descBranch,
    optionValueProvince,
    optionValueCity,
    buttonBranch,
  } = t("branch");

  return (
    <>
      <div className="branch-title mt-xl-5">
        <h1>{titleBranch}</h1>
        <p>{descBranch}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <select
          id="province"
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
        >
          <option value="">{optionValueProvince}</option>
          {provinces.map((province) => (
            <option key={province.province_id} value={province.province_id}>
              {province.province}
            </option>
          ))}
        </select>
        <select
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">{optionValueCity}</option>
          {cities.map((city) => (
            <option key={city.city_id} value={city.city_id}>
              {city.city_name}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary">
          {buttonBranch}
        </button>
      </form>
      {availability && (
        <p
          className={
            availability === "Available! Our branch is available on your region." ? "available" : "not-available"
          }
        >
          {availability}
        </p>
      )}
    </>
  );
};

export default Branch;
