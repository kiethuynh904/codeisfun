import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeContainer from './container/HomeContainer';
import BlogContainer from './container/BlogContainer';
import ContactContainer from './container/ContactContainer';
import ResponsiveNavigation from './components/ResponsiveNavigation';
import { faHome,faBlog,faPhoneVolume } from "@fortawesome/free-solid-svg-icons";


function App() {
  const navLinks = [
    {
      text: 'Home',
      path: '/home',
      icon: faHome
    },
    {
      text: 'Blog',
      path: '/blog',
      icon: faBlog
    },
    {
      text: 'Contact',
      path: '/contact',
      icon: faPhoneVolume
    },
  ]

  return (
    <Router>
      <ResponsiveNavigation
        navLinks={navLinks}
        logo={logo}
      />

      <div className="App">
      
        <Switch>

          <Route path="/blog">
            <BlogContainer />
          </Route>

          <Route path="/contact">
            <ContactContainer />
          </Route>

          <Route path="/">
            <HomeContainer />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
