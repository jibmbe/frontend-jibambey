import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import EstablishmentList from './components/EstablishmentList';
import Discovery from './components/Discovery';
import Map from './components/Map';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/establishments" component={EstablishmentList} />
        <Route path="/discovery" component={Discovery} />
        <Route path="/map" component={Map} />
      </Switch>
    </Router>
  );
}

export default App;
