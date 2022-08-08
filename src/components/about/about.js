import './about.scss';
import React from 'react';
import Picture from '../../assets/images/portfolio-pic.png';
import LinkedIn from '../../assets/logo/linkedin.png';
import GitHub from '../../assets/logo/github.png';


function About() {
    return (
        <section>
            <div className="about">
                <h1 className="about__clover">&#x2618;</h1>
                <div className="about__me" >
                    <h1 className="about__me--title" >Hello</h1>
                    <h3 className="about__me--subtitle">I'm Chelsia! A Web Developer, and an Analytical Chemist </h3>
                    <p className="about__me--description">Join me on this journey as I find my new path in life</p>
                </div>
                <div className="about__profile" >
                    <img className="about__profile--picture" src={Picture} alt="profile-pic"></img>
                </div>
                <h1 className="about__clover">&#x2618;</h1>
            </div>
            <div className="about__links" >
                <a href="https://www.linkedin.com/in/chelsia-tong/">
                    <img className="about__links--linkedin" src={LinkedIn} alt="LinkedIn-Logo" /></a>
                <a href="https://github.com/chelsiatong">
                    <img className="about__links--github" src={GitHub} alt="GitHub-Logo" /></a>
            </div>
            <p className="about__connect" >&#8594; connect with me &#8592;</p>
        </section>
    );
}

export default About;