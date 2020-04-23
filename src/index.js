import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'; 

import Login from '@/containers/login/login'
import Main from '@/containers/main/main'
import Register from '@/containers/register/register'


ReactDOM.render(<div>
    <Router>
        <Switch>
            <Route component={Login} path="/login"></Route>
            <Route component={Register} path="/register"></Route>
            <Route component={Main} path="/"></Route>
        </Switch>
    </Router>
</div>, document.getElementById('root'));
