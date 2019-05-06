import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput  from '../components/CommentInput'
import { addComment } from '../reducer/comments'
class CommentInputContainer  extends Component {
  static propTypes = {
    username: PropTypes.any,

  }
  constructor() {
    super()
    this.state = {username: ''}
  }
  componentWillMount () {
    // componentWillMount 生命周期中初始化评论
    this._loadUserName()
  }
  // 初始化数据
  _loadUserName () {
    // 从 LocalStorage 中加载用户名
    let username = localStorage.getItem('username')
    if(username) {
      this.setState({username: username})
    }
  }
  _saveUserName(username) {
    localStorage.setItem('username', username)
  }

  handleSubmit(comment) {
    if(!comment) return
    if(!comment.username) return alert('请输入用户名')
    if(!comment.content) return alert('请输入评论内容')
    // 新增评论保存到 LocalStorage 中
    const { comments } = this.props
    const newComments = [...comments, comment]
    // console.log([...comments, comment])
    localStorage.setItem('comments', JSON.stringify(newComments))
    // this.props.onSubmit 是 connect 传进来的
    // 会 dispatch 一个 action 去新增评论
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }
  render() {
    return (
      <CommentInput  
        username={this.state.username}
        onUserNameInputBlur = {this._saveUserName.bind(this)}
        onSubmit = {this.handleSubmit.bind(this)}
         />
    )
  }
}
const mapStateToProps = (state) => {
  return {comments: state.comments}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)