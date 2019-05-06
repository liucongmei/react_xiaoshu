import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import commentsReducer from './version3/reducer/comments'
import './App.css';
import CommentApp1 from './CommentApp'
import CommentApp2 from './version2/CommentApp'
import CommentApp3 from './version3/containers/CommentApp'
const store = createStore(commentsReducer)
class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentApp1 />
        <h2>以下是第二版</h2>
        <CommentApp2 />
        <h2>以下是第3版，使用react-redux</h2>
        <Provider store={store}>
          <CommentApp3 />
        </Provider>,
        
      </div>
    );
  }
}

export default App;
