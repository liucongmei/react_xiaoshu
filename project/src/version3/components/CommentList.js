import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList  extends Component {
  static propsTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    comments: []
  }
  handleDelete(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    const { comments } = this.props
    return (
      <div className="comment-list">
        {comments.map((item, index) => {
          return (
            <Comment comment={item} key={index} index={index} onDeleteComment={this.handleDelete.bind(this)}/>
          )
        })}
      </div>
    )
  }
}

export default CommentList