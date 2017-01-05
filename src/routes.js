import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './containers/Main';

import AboutPage from './containers/about/AboutPage';
import ResumePage from './containers/resume/ResumePage';
import ContactPage from './containers/contact/ContactPage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={AboutPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="resume" component={ResumePage}/>
        <Route path="contact" component={ContactPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);