import LogoNavbar from '../../assets/images/logo navbar rojo 2.webp';

const scrollDown = () => {
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
    }
};

export const Section1Lp = () => {
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
                <div>
                    <img src={LogoNavbar} alt="" />
                </div>
            </div>

            <div className="section-1-lp-content-2">
                <h3 className="light-text">¿Qué tipo de casa quieres vender?</h3>

                <div className="section-1-lp-content-2-cards">
                    <button className="section-1-lp-content-2-card">
                        <img src={LogoNavbar} alt="" />
                        <p className="light-text">Vandalizada</p>
                    </button>

                    <button className="section-1-lp-content-2-card">
                        <img src={LogoNavbar} alt="" />
                        <p className="light-text">Hipotecada</p>
                    </button>
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
