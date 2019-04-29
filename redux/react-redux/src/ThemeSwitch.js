// import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// class SwitchTheme extends Component{
//   static contextTypes = {
//     store: PropTypes.object
//   }
//   // dispatch action 去改变颜色
//   handleSwitchColor (color) {
//     const { store } = this.context
//     console.log('改变')
//     store.dispatch({
//       type: 'CHANGE_COLOR',
//       color: color
//     })
//   }
//   render() {
//     return(
//       <div>
//         <button onClick={this.handleSwitchColor.bind(this, 'red')}>红色</button>
//         <button onClick={this.handleSwitchColor.bind(this, 'blue')}>蓝色</button>
//       </div>
//     )
//   }
// } 
// export default SwitchTheme 

// ----------------------- 使用react-redux思想-------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from './ReactRedux'
class SwitchTheme extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }
  handleSwitchColor(color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }
  render() {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', color: color })
    }
  }
}
SwitchTheme = connect(mapStateToProps, mapDispatchToProps)(SwitchTheme)
export default SwitchTheme 