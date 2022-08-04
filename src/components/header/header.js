import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './header.scss';
import NavLogo from '../../assets/logo/nav-logo.png';

// import React, { useState } from 'react';

function Header(props) {
    // const [setClick] = useState(false)
    // const closeMenu = () => setClick(false)

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={NavLogo} alt="nav-logo" ></img></Link>
            <div className="header__nav" >
                {/* <Link to="notes" className="header__logo--link" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} >Notes</Link> */}
                <NavLink to="/notes"
                    className="header__logo--link" activeClassName="header__logo--active" >Notes</NavLink>
                <NavLink to="/todo"
                    className="header__logo--link" activeClassName="header__logo--active" >ToDo</NavLink>
                <NavLink to="/about"
                    className="header__logo--link" activeClassName="header__logo--active" >About</NavLink>
            </div>
        </header>
    )
}

export default Header;
