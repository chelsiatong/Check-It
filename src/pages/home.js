import './home.scss';
import React from 'react';
// import React, { useState } from 'react';
import MainLogo from '../assets/logo/main-logo.png';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <section>
                <div className="home">
                    <img className="home__logo" src={MainLogo} alt="home-logo" ></img>
                    <div className="home__menu" >
                        <Link to="/notes">
                            <button className="home__menu--option">Notes</button></Link>
                        <Link to="/calendar">
                            <button className="home__menu--option">Calendar</button></Link>
                    </div>
                </div>
                <div>
                    <h1>about me?</h1>
                </div>


            </section>


        );
    }

}

export default Home;