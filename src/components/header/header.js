import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './header.scss';
import NavLogo from '../../assets/logo/nav-logo.png';
import Day from '../../assets/logo/sun.png';
import Night from '../../assets/logo/moon.png';

function Header({ handleDarkMode }) {
    return (
        <section>
            <header className="header">
                <Link to="/">
                    <img className="header__logo" src={NavLogo} alt="nav-logo" ></img></Link>
                <div className="header__nav" >
                    <NavLink to="/notes"
                        className="header__logo--link" activeClassName="header__logo--active" >Notes</NavLink>
                    <NavLink to="/todo"
                        className="header__logo--link" activeClassName="header__logo--active" >ToDo</NavLink>
                    <NavLink to="/about"
                        className="header__logo--link" activeClassName="header__logo--active" >About</NavLink>
                </div>
            </header>
            <div className="header__toggle">
                <img className="header__toggle--logo" src={Day} alt="sun-logo" />
                <label className="header__toggle--switch"  >
                    <input className="header__toggle--input" type="checkbox" onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)} />
                    <span className="header__toggle--slide header__toggle--round"></span>
                </label>
                <img className="header__toggle--logo" src={Night} alt="moon-logo" />
            </div>
        </section>
    );
}

export default Header;
