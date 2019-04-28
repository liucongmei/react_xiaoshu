import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Comment  extends Component {
  static propsTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }
  constructor () {
    super()
    this.state = { timeString: '' }
  }
  _updateTimeString() {
    const comment = this.props.comment
    let createTime = new Date().getTime()
    if(comment.createdTime) {
      createTime = new Date(comment.createdTime).getTime()
    }
    const duration = (new Date().getTime() - createTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  _getProcessedContent(content) {
    return content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  deleteComment() {
    let { index } = this.props
    
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  
  componentDidMount() {
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }
  // 卸载
  componentWillUnmount() {
    clearInterval(this._timer)
  }
  render() {
    const { comment } = this.props
    return (
      <div className="comment">
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(comment.content)}}></p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className="comment-delete" onClick={this.deleteComment.bind(this)}>删除</span>
      </div>
    )
  }
}
export default Comment