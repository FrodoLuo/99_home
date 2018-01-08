import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ArticalPage from './routes/ArticalPage';
import EnterprisePage from './routes/Enterprise';
import YoungPage from './routes/YoungPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route paht="/enterprise" exact component={EnterprisePage} />
        <Route path="/artical/:path" exact component={ArticalPage} />
        <Route path="/young" exact component={YoungPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
