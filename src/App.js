import React, { Component } from 'react';
import Header from './components/header'
// import logo from './logo.svg';
import './index.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import createBrowserHistory from 'history/createBrowserHistory'
import { TransitionGroup } from 'react-transition-group';
import Transition from './components/transition';

import { Redirect } from 'react-router';
import { Switch, Route, HashRouter } from 'react-router-dom'

const history = createBrowserHistory()



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <div className="content">
          <TransitionGroup enter exit>
            <Routes />
          </TransitionGroup>
          </div>
        </div>
      </HashRouter>
    );
  }
}

const   Routes = (props) =>
<Switch>
  <Route exact path="/" render={() => (
    <Transition {...props} key="home">
      <Home />
    </Transition>
  )}/>
  <Route path="/about" render={() => (
    <Transition {...props} key="about">
      <About />>
    </Transition>
  )}/>
  <Route path="/contact" render={() => (
    <Transition {...props} key="contact">
      <Contact />
    </Transition>
  )}/>
  <Route path="/*" render={() => (
    <Redirect to="/" />
  )}/>
</Switch>


export default App;
