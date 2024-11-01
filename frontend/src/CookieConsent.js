// src/CookieConsent.js
import React, { useState } from 'react';
import './CookieConsent.css';

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Guardar el consentimiento en el localStorage
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible || localStorage.getItem('cookieConsent') === 'true') {
    return null;
  }

  return (
    <div className="cookie-consent">
      <p>Este sitio web utiliza cookies para garantizar que obtengas la mejor experiencia. Al continuar, aceptas nuestra <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</p>
      <button onClick={handleAccept}>Aceptar</button>
    </div>
  );
}

export default CookieConsent;
