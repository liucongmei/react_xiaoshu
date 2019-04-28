import React, { Component } from 'react'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp  extends Component {
  constructor() {
    super()
    this.state = {
      commentList: [
        // { username: '测试',content: '这是内容'}
      ]
    }
  }
  componentDidMount() {
    this._loadComments()
  }
  _loadComments() {
    let comments = localStorage.getItem('comments')
    if(comments) {
      comments = JSON.parse(comments)
      this.setState({commentList: comments})
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleSubmitComment = (comment) => {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    let oldCommentList = this.state.commentList
    oldCommentList.push(comment)
    this.setState({commentList: oldCommentList})
    this._saveComments(oldCommentList)
  }
  handleDelete(index) {
    let oldList = this.state.commentList
    oldList.splice(index, 1)
    this.setState({commentList: oldList})
    this._saveComments(oldList)
  }
  render() {
    const { commentList } = this.state
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList list={commentList} onDeleteComment={this.handleDelete.bind(this)}/>
      </div>
    )
  }
}
export default CommentApp