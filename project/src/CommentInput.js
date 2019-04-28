import React, { Component } from 'react'

class CommentInput  extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit = () => {
    if(this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({content: ''})
  }
  render() {
    const { username, content } = this.state 
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input type="text" value={username} onChange={this.handleUsernameChange.bind(this)}/>
          </div>
        </div>
        <div className="comment-field">
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={content} onChange={this.handleContentChange.bind(this)}/>
          </div>
        </div>
        <div className="comment-field-button">
          <button className="submit" onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
      </div>
    )
  }
}

export default CommentInput