import icono1 from '../../assets/images/icono-section-2-lp-1.webp';
import icono2 from '../../assets/images/icono-section-2-lp-2.webp';
import icono3 from '../../assets/images/icono-section-2-lp-3.webp';

export const Section2Lp = () => {
    return (
        <section className="section-2-lp-container">
            <header className="section-2-lp-header">
                <h2 className="bold-text">¡Rápido, fácil y seguro!</h2>
                <h3 className="light-text">Vende tu casa en 48 horas</h3>
            </header>

            <div className="section-2-lp-content-1">
                <div>
                    <p className="light-text">1.- Dejanos tus datos</p>
                    <img src={icono1} alt="" />
                </div>

                <div>
                    <p className="light-text">2.- Recibe una oferta</p>
                    <img src={icono2} alt="" />
                </div>

                <div>
                    <p className="light-text">3.- Conocemos tu casa</p>
                    <img src={icono3} alt="" />
                </div>
            </div>
        </section>
    );
};
