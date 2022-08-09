import './home.scss';
import React, { useState } from 'react';
import Cat from '../assets/logo/cat.jpeg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="home">
            <img className="home__logo" src={Cat} alt="home-logo" ></img>
            <div className="home__menu" >
                <Link to="/notes">
                    <button className="home__menu--option">Notes</button></Link>
                <Link to="/calendar">
                    <button className="home__menu--option">Calendar</button></Link>
            </div>
        </section>
    );
}

export default Home;