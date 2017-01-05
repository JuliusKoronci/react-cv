import React, {PropTypes} from 'react';

const NotFoundPage = (props) => {
    return (
        <div>
            Page not found: {props.params.splat}
        </div>
    );
};

NotFoundPage.propTypes = {
    props: PropTypes.object.isRequired
};

export default NotFoundPage;