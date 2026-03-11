import "./fotterNetflix.css";

const NetflixFooter = () => {
  const leftLinks = [
    "Preguntas frecuentes",
    "Cuenta",
    "Relaciones con inversionistas",
    "Canjear tarjetas de regalo",
    "Formas de ver",
    "Privacidad",
    "Información corporativa",
    "Prueba de velocidad",
    "Solo en Netflix",
  ];

  const rightLinks = [
    "Centro de ayuda",
    "Prensa",
    "Empleo",
    "Comprar tarjetas de regalo",
    "Términos de uso",
    "Preferencias de cookies",
    "Contáctanos",
    "Avisos legales",
  ];

  return (
    <footer className="netflix-footer">
      <div className="netflix-footer__container">
        <p className="netflix-footer__phone">
          ¿Preguntas? Llama al{" "}
          <a href="tel:018005191570" className="netflix-footer__phone-link">
            01 800 519 1570
          </a>
        </p>

        <div className="netflix-footer__links-grid">
          <div className="netflix-footer__links-column">
            {leftLinks.map((link) => (
              <a key={link} href="#" className="netflix-footer__link">
                {link}
              </a>
            ))}
          </div>
          <div className="netflix-footer__links-column">
            {rightLinks.map((link) => (
              <a key={link} href="#" className="netflix-footer__link">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="netflix-footer__language-wrapper">
          <button className="netflix-footer__language-btn">
            <span className="netflix-footer__lang-icon">🌐</span>
            <span>Español</span>
            <span className="netflix-footer__arrow">▾</span>
          </button>
        </div>

        <p className="netflix-footer__country">Netflix Colombia</p>

        <p className="netflix-footer__recaptcha">
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot.{" "}
          <a href="#" className="netflix-footer__recaptcha-link">
            Más info.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default NetflixFooter;