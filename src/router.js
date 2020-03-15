import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Live from './pages/Live';
import Test from './pages/test/test';

function RouterConfig ({ history }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/live" component={Live} />
                <Route path="/test" component={Test} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
