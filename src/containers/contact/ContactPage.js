import React, {PropTypes, Component} from 'react';

class ContactPage extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>Contact</div>
        );
    }
}

ContactPage.propTypes = {
    //myProp: PropTypes.string.isRequired
};


export default ContactPage;