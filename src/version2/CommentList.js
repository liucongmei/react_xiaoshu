import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList  extends Component {
  static propsTypes = {
    list: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    list: []
  }
  handleDelete(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    const { list } = this.props
    return (
      <div className="comment-list">
        {list.map((item, index) => {
          return (
            <Comment comment={item} key={index} index={index} onDeleteComment={this.handleDelete.bind(this)}/>
          )
        })}
      </div>
    )
  }
}

export default CommentList