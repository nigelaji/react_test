import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import NotFound from './components/pages/NotFound';

import Home from './views/ShowPage/Layout/layout';
import {Login, ForgotPassword} from './views/management/Login';
import Register from './components/ManagePage/Register/register';

const Page = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />  
            {/* render={() => <Redirect to="/app/dashboard/index" push />} */}
            {/* <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} /> */}
            <Route path="/login" component={Login} />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </Router>
);

export default Page;
