import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput  extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  /*
    生命周期
   */
  componentDidMount() {
    this.textarea.focus()
    this._loadUsername()
  }
  // _ 开头的私有方法
  _loadUsername = () => {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }
  _saveUsername = (username) => {
    localStorage.setItem('username', username)
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
  
  handleUserBlur = (event) => {
    this._saveUsername(event.target.value)
  }
  handleSubmit = () => {
    if(this.props.onSubmit) {
      const { username, content } = this.state
      const createdTime = new Date()
      this.props.onSubmit({username, content, createdTime})
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
            <input type="text" value={username} 
              onChange={this.handleUsernameChange.bind(this)}
              onBlur={this.handleUserBlur.bind(this)}
            
            />
          </div>
        </div>
        <div className="comment-field">
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={content} ref={(textarea) => this.textarea = textarea} onChange={this.handleContentChange.bind(this)}/>
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