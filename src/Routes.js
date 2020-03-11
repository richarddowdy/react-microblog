import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddPostForm from './AddPostForm';
import Post from './Post';
import NotFound from './NotFound';

function Routes() {

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/posts/:id">
        <Post />
      </Route>
      <Route exact path="/new">
        <AddPostForm />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )

}

export default Routes;