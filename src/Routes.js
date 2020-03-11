import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddPostForm from './AddPostForm';

function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/products/:id">
        <ProductDetail />
      </Route> */}
      <Route exact path="/new">
        <AddPostForm />
      </Route>
      {/* <Route>
        <NotFound />
      </Route> */}
    </Switch>
  )

}

export default Routes;