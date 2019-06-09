import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('views/Home/Home'));
const Contact = lazy(() => import('views/Contact/Contact'));

const routes = (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
  </Suspense>
);

export default routes;
