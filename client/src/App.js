import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Header from './components/Header';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/articles" component={Home} />
        <Route exact path="/articles/:id" component={Saved} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>;

  
export default App;

// components needed-container to be used with 3 different props. Search, Results, Saved
// Header component
// Search button
// Save button
// Delete button
// Input