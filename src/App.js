import React, { Component } from 'react';
import './App.css';

import { BlogPage } from './components/pages/BlogPage';
import { HeaderBar } from './components/molecules/HeaderBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <BlogPage />
      </div>
    );
  }
}

export default App;
