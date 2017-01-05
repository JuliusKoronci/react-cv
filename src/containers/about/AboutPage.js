import React, {PropTypes, Component} from 'react';
import About from '../../components/about/About';

class AboutPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: 'jk@web-solutions.sk'
        }
    }

    render() {
        return (
            <About {...this.state} />
    )
        ;
    }
}

AboutPage.propTypes = {
    'email': PropTypes.string.isRequired
};
AboutPage.defaultProps = {
    'email': 'jk@web-solutions.sk'
};


export default AboutPage;