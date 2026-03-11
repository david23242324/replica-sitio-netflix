import React, { useState } from "react";
import "./MatiasRamirez.css";

const faqData = [
  {
    question: "¿Qué es Netflix?",
    answer:
      "Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, documentales y más en miles de dispositivos conectados a internet.",
  },
  {
    question: "¿Cuánto cuesta Netflix?",
    answer:
      "Netflix ofrece varios planes de suscripción que varían según el país. Puedes elegir el plan que mejor se adapte a tus necesidades.",
  },
  {
    question: "¿Dónde puedo ver Netflix?",
    answer:
      "Puedes ver Netflix en cualquier dispositivo conectado a internet que tenga la aplicación de Netflix, como televisores inteligentes, consolas, celulares, tablets y computadoras.",
  },
  {
    question: "¿Cómo cancelo?",
    answer:
      "Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. No hay contratos ni cargos por cancelación.",
  },
  {
    question: "¿Qué puedo ver en Netflix?",
    answer:
      "Netflix tiene un catálogo extenso que incluye películas, series, documentales, anime y contenido original.",
  },
  {
    question: "¿Es bueno Netflix para los niños?",
    answer:
      "Netflix tiene una sección especial para niños con controles parentales para que los padres puedan administrar el contenido que ven sus hijos.",
  },
];

const MatiasRamirez = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Preguntas Frecuentes</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className={`faq-icon ${activeIndex === index ? "open" : ""}`}>
                +
              </span>
            </button>

            <div
              className={`faq-answer ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MatiasRamirez;