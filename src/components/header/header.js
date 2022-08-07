import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './header.scss';
import NavLogo from '../../assets/logo/nav-logo.png';


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
            <div className="header__toggle" >
                <button className="header__toggle--dark" onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)} >dark-mode</button>
            </div>
        </section>

    )
}

export default Header;
