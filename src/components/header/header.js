import './header.scss';
import NavLogo from '../../assets/logo/nav-logo.png';

function Header() {
    return (
        <header className="header" >
            <img className="header__logo" src={NavLogo} alt="nav-logo" ></img>
        </header>
    )
}

export default Header;