import LogoNavbar from '../../assets/images/logo navbar rojo 2.webp';

export const Section2Lp = () => {
    return (
        <section>
            <header className="section-2-lp-header">
                <h2 className="bold-text">¡Rápido, fácil y seguro!</h2>
                <h3 className="light-text">Vende tu casa en 48 horas</h3>
            </header>

            <div className="section-2-lp-content-1">
                <div>
                    <p className="light-text">1.- Dejanos tus datos</p>
                    <img src={LogoNavbar} alt="" />
                </div>

                <div>
                    <p className="light-text">2.- Recibe una oferta</p>
                    <img src={LogoNavbar} alt="" />
                </div>

                <div>
                    <p className="light-text">3.- Conozcamos tu casa</p>
                    <img src={LogoNavbar} alt="" />
                </div>
            </div>

            <span className="div-pag">
                <hr />
            </span>
        </section>
    );
};
