import './home.scss';
import React, { useState } from 'react';
import MainLogo from '../assets/logo/main-logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const API_URL = 'https://api.unsplash.com/search/photos?orientation=landscape&color=white&query=rock&client_id=kqtyznMCRXQzQtY-fkSugNKhER2HYZKdb7gZunsdV8U'

function Home() {
    const [images, setImages] = useState("");

    const fetchAPI = () => {
        axios.get(`${API_URL}`)
            .then((response) => {
                console.log(response.data.results);
                const randomIndex = Math.floor(Math.random() * response.data.results.length);
                const data = response.data.results[randomIndex].urls.full;
                setImages(data);
            })
            .catch((error) => {
                console.log('Failed', error);
            });

    }
    return (
        <section>
            <div className="home" style={{ backgroundImage: `url(${images})` }}>
                <button className="home__custom" onClick={fetchAPI} >
                    <img className="home__logo" src={MainLogo} alt="home-logo" ></img>
                </button>
                <div className="home__menu" >
                    <Link to="/notes">
                        <button className="home__menu--option">Notes</button></Link>
                    <Link to="/todo">
                        <button className="home__menu--option">ToDo</button></Link>
                </div>
            </div>
        </section>
    );


}

export default Home;