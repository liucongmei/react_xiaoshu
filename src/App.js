import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentApp1 from './CommentApp'
import CommentApp2 from './version2/CommentApp'
class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentApp1 />
        <CommentApp2 />
      </div>
    );
  }
}

export default App;
