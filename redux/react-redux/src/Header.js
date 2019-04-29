// import React, { Component } from 'react';
// import PropTypes from 'prop-types'
// class Header extends Component{
//   static contextTypes = {
//     store: PropTypes.object
//   }
//   constructor () {
//     super()
//     this.state = { themeColor: '' }
//   }
//   componentWillMount () {
//     const { store } = this.context
//     this._updateThemeColor()
//     store.subscribe(() => this._updateThemeColor())
//   }

//   _updateThemeColor () {
//     const { store } = this.context
//     console.log(store)
//     const state = store.getState()
//     this.setState({ themeColor: state.themeColor })
//   }

//   render() {
//     return(
//       <h1 style={{color: this.state.themeColor}}>react 小书</h1>
//     )
//   }
// } 
// export default Header 


// ------------------使用react-redux思想-----------------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from './ReactRedux'
class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  render() {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)
export default Header 