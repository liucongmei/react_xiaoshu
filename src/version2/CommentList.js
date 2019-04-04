import React, { Component } from 'react'
import Comment from './Comment'

class CommentList  extends Component {
  static defaultProps = {
    list: []
  }
  render() {
    const { list } = this.props
    return (
      <div className="comment-list">
        {list.map((item, index) => {
          return (
            <Comment comment={item} key={index}/>
          )
        })}
      </div>
    )
  }
}

export default CommentList