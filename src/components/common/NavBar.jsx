import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logo navbar rojo 2.webp';

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Menú de navegación principal">
                <NavLink to="/" aria-label="Ir a la página principal">
                    <img src={LogoNavbar} alt="Logotipo de Algo" className="logo-navbar" />
                </NavLink>
            </nav>
        </header>
    );
};
