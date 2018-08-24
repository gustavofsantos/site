import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import { BlogPage } from './components/pages/BlogPage';
import { StartPage } from "./components/pages/StartPage";
import { ResumePage } from "./components/pages/ResumePage";
import { HeaderBar } from './components/molecules/HeaderBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <HeaderBar />
            <Switch>
              <Route path="/" exact={true} component={StartPage} />
              <Route path="/blog" component={BlogPage} />
              <Route path="/resume" component={ResumePage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
