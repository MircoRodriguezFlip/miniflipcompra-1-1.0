import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logo navbar rojo 2.webp';

export const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <div className="img-logo-footer">
                    <NavLink to="/" aria-label="Ir a la página de inicio">
                        <img src={LogoNavbar} alt="Logo de Tamir en el pie de página" loading="lazy" decoding="async" />
                    </NavLink>
                </div>
            </section>

            <section className="poli-copy light-text">
                <p>© Flip Inmobiliaria</p>

                <NavLink to="/politica-privacidad" title="Ver la política de privacidad">
                    Política de privacidad
                </NavLink>
            </section>
        </footer>
    );
};
