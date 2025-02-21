import { useState } from 'react';

import mascota from '../../assets/images/mascota-2.webp';
import icono1 from '../../assets/images/icono-section-1-lp-1.webp';
import icono2 from '../../assets/images/icono-section-1-lp-2.webp';

const scrollDown = () => {
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
};

export const Section1Lp = () => {
    const [textoVandalizada, setTextoVandalizada] = useState(false);
    const [textoHipotecada, setTextoHipotecada] = useState(false);

    const vandalizada = () => {
        setTextoVandalizada((prev) => !prev);
        setTextoHipotecada(false);
    };

    const hipotecada = () => {
        setTextoHipotecada((prev) => !prev);
        setTextoVandalizada(false);
    };

    return (
        <section className="section-1-lp-container">
            <header className="section-1-lp-header">
                <h1 className="bold-text">COMPRAMOS TU CASA</h1>
                <h2 className="light-text">Vende tu casa</h2>
            </header>

            <div className="section-1-lp-content-1">
                <div>
                    <p className="light-text">rápido y seguro</p>
                    <p className="light-text">¡Déjalo en nuestras manos!</p>
                </div>

                <div className="imagen-mascota">
                    <img src={mascota} alt="" />
                </div>
            </div>

            <div className="section-1-lp-content-2">
                <h3 className="light-text">¿Qué tipo de casa quieres vender?</h3>

                <div>
                    <div className="section-1-lp-content-2-cards">
                        <button className="section-1-lp-content-2-card" onClick={vandalizada} title="Haz clic para saber que es una casa vandalizada">
                            <img src={icono1} alt="" />
                            <p className="light-text">Vandalizada</p>
                        </button>

                        <button className="section-1-lp-content-2-card" onClick={hipotecada} title="Haz clic para saber que es una casa hipotecada">
                            <img src={icono2} alt="" />
                            <p className="light-text">Hipotecada</p>
                        </button>
                    </div>

                    <div>
                        {textoVandalizada && (
                            <div className="section-1-lp-cards-text">
                                <p className="light-text">
                                    Una casa vandalizada es aquella que ha sido dañada por actos de vandalismo, como pintura en las paredes, ventanas
                                    rotas, etc.
                                </p>
                            </div>
                        )}

                        {textoHipotecada && (
                            <div className="section-1-lp-cards-text">
                                <p className="light-text">
                                    Una casa hipotecada es aquella que tiene una deuda pendiente con el banco y/o en alguna institución financiera.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="section-1-lp-content-2-button">
                    <button className="bold-text" onClick={scrollDown} title="Haz clic para cotizar con un agente">
                        VENDE TU CASA
                    </button>
                </div>
            </div>
        </section>
    );
};
