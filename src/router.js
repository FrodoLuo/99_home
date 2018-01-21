import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ArticalPage from './routes/ArticalPage';
import EnterprisePage from './routes/Enterprise';
import YoungPage from './routes/YoungPage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/enterprise" exact component={EnterprisePage} />
        <Route path="/artical/:path" exact component={ArticalPage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/young" exact component={YoungPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
