import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ArticalPage from './routes/ArticalPage';
import EnterprisePage from './routes/Enterprise';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/artical/:path" exact component={ArticalPage} />
        <Route paht="/enterprise" exact component={EnterprisePage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
