import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import CollectionForm from './components/collections/CollectionForm';
import CollectionShow from './components/collections/CollectionShow';
import Collections from './components/collections/Collections';
import Things from './components/things/Things';

const App = () => (
  <Fragment>
    <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/addcollection" component={CollectionForm} />
            <Route exact path='/collections/:id' component={CollectionShow} />
            <ProtectedRoute exact path="/collections" component={Collections} />
            <ProtectedRoute exact path="/things" component={Things} />

            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
  </Fragment>
)

export default App;