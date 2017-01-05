import React, {PropTypes, Component} from 'react';
import Header from '../components/includes/Header';
import Footer from '../components/includes/Footer';
import {Link} from 'react-router';

class Main extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Header/>
                <div id="tab-container" className="tab-container">
                    <ul className='etabs'>
                        <li className='tab' id="tab-about">
                            <Link to="about"><i className="icon-user"/><span> About Me</span></Link>
                        </li>
                        <li className='tab'>
                            <Link to="resume"><i className="icon-file-text"/><span> Resume</span></Link>
                        </li>
                        <li className='tab'>
                            <Link to="contact"><i className="icon-envelope"/><span> Contact</span></Link>
                        </li>
                    </ul>
                    <div id="tab-data-wrap">
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

Main.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default Main;