import React, {PropTypes} from 'react';

const About = (props) => {
    return (
        <section className="clearfix">
            <div className="g2">
                <div className="photo">
                    <img
                        src="https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-frc1/582546_344156198979857_678123957_n.jpg"
                        alt="Sunny Luthra"/>
                </div>
                <div className="info">
                    <h2>
                        Sunny Luthra
                    </h2>
                    <h4>
                        Animator / Photographer
                    </h4>
                    <p>
                        We are mRova, a Pune-based software development company. We love to develop
                        Websites, Desktop Softwares and Mobile Applications.
                    </p>
                </div>
            </div>
            <div className="g1">
                <div className="main-links sidebar">
                    <ul>
                        <li>
                            <a href="#resume">View My Resume</a>
                        </li>
                        <li>
                            <a href="#portfolio">My Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Hire me for your next project</a>
                        </li>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="break"></div>
            <div className="contact-info">
                <div className="g1">
                    <div className="item-box clearfix">
                        <i className="icon-envelope"/>
                        <div className="item-data">
                            <h3><a href="mailto:sunny@mrova.com">{props.email}</a></h3>
                            <p>Email Address</p>
                        </div>
                    </div>
                </div>
                <div className="g1">
                    <div className="item-box clearfix">
                        <i className="icon-facebook"/>
                        <div className="item-data">
                            <h3><a href="http://fb.me/luthra.sunny">luthra.sunny</a></h3>
                            <p>Facebook Profile</p>
                        </div>
                    </div>
                </div>
                <div className="g1">
                    <div className="item-box clearfix">
                        <i className="icon-twitter"/>
                        <div className="item-data">
                            <h3><a href="http://twitter.com/mRovaSolutions">@mRovaSolutions</a></h3>
                            <p>Twitter Handle</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

About.propTypes = {
    email: PropTypes.string.isRequired
};

export default About;