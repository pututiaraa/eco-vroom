import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import "../App.css";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  const {
    titleFaq1,
    answerFaq1,
    titleFaq2,
    answerFaq2,
    titleFaq3,
    answerFaq3,
    titleFaq4,
    answerFaq4,
    titleFaq5,
    answerFaq5,
    titleFaq6,
    answerFaq6,
  } = t("faqContent");

  return (
    <Container className="container-faq" id="faq">
      <div class="faq text-center">
        <h1>{t("faq")}</h1>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{titleFaq1}</Accordion.Header>
          <Accordion.Body>{answerFaq1}</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>{titleFaq2}</Accordion.Header>
          <Accordion.Body>{answerFaq2}</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>{titleFaq3}</Accordion.Header>
          <Accordion.Body>{answerFaq3}</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>{titleFaq4}</Accordion.Header>
          <Accordion.Body>{answerFaq4}</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>{titleFaq5}</Accordion.Header>
          <Accordion.Body>{answerFaq5}</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>{titleFaq6}</Accordion.Header>
          <Accordion.Body>{answerFaq6}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
