import React, { Component } from 'react'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp  extends Component {
  constructor() {
    super()
    this.state = {
      commentList: [
        { username: '测试',content: '这是内容'}
      ]
    }
  }
  handleSubmitComment = (comment) => {
    let oldCommentList = this.state.commentList
    oldCommentList.push(comment)
    this.setState({commentList: oldCommentList})
  }
  render() {
    const { commentList } = this.state
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList list={commentList}/>
      </div>
    )
  }
}
export default CommentApp