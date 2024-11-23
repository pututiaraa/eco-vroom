import React from "react";
import community from "../assets/images/community.png";
import cost from "../assets/images/cost.png";
import design from "../assets/images/design.png";
import performance from "../assets/images/performance.png";
import support from "../assets/images/support.png";
import sustainability from "../assets/images/sustainability.png";
import { useTranslation } from "react-i18next";

const ChoosingUs = () => {
  const {t} = useTranslation();
  const { titleCEV1, descCEV1, titleCEV2, descCEV2, titleCEV3, descCEV3, titleCEV4, descCEV4, titleCEV5, descCEV5, titleCEV6, descCEV6, } = t("chooseEVContent");

  return (
    <>
      <div class=" choosing-us container mt-5">
        <div class="text-center">
          <h1>{t("chooseEV")}</h1>
        </div>
        <div class="row row-cols-2 row-cols-md-3 g-2">
          <div class="col">
            <div class="text-center choosing-us-card">
              <img src={sustainability} width="30%" height="auto" />
              <h3>{titleCEV1}</h3>
              <p>
               {descCEV1}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="text-center choosing-us-card">
              <img src={cost} width="30%" height="auto" />
              <h3>{titleCEV2}</h3>
              <p>
                {descCEV2}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="text-center choosing-us-card">
              <img src={support} width="30%" height="auto" />
              <h3>{titleCEV3}</h3>
              <p>
              {descCEV3}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="text-center choosing-us-card">
              <img src={design} width="30%" height="auto" />
              <h3>{titleCEV4}</h3>
              <p>
              {descCEV4}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="text-center choosing-us-card">
              <img src={community} width="30%" height="auto" />
              <h3>{titleCEV5}</h3>
              <p>
              {descCEV5}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="text-center choosing-us-card">
              <img src={performance} width="30%" height="auto" />
              <h3>{titleCEV6}</h3>
              <p>
              {descCEV6}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosingUs;
