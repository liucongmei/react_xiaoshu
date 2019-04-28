// const appState = {
//   title: {
//     text: 'react 小书',
//     color: 'blue'
//   },
//   content: {
//     text: '这是内容',
//     color: 'red'
//   }
// }
// function renderApp(appState) {
//   renderTitle(appState.title)
//   renderContent(appState.content)
// }

// function renderTitle(title) {
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = title.text
//   titleDOM.style.color = title.color
// }
// function renderContent(content) {
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = content.text
//   contentDOM.style.color = content.color
// }
// function stateChanger (state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       state.title.text = action.text
//       break
//     case 'UPDATE_TITLE_COLOR':
//       state.title.color = action.color
//       break
//     default:
//       break
//   }
// }
// function createStore(state, stateChanger) {
//   // 加入观察者模式
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     stateChanger(state, action)
//     listeners.forEach((listener) => listener())
//   }
//   return {getState, dispatch, subscribe }
// }
// const store = createStore(appState, stateChanger)
// store.subscribe(() => renderApp(store.getState()))
// renderApp(store.getState()) // 首次渲染页面
// setTimeout(() => {
//   store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '测试修改'})
  
// }, 2000)

// --------------新能优化 每次dispatch都更新了content------------------------------------
// const appState = {
//   title: {
//     text: 'react 小书',
//     color: 'blue'
//   },
//   content: {
//     text: '这是内容',
//     color: 'red'
//   }
// }
// function renderApp(appState, oldState = {}) {
//   if(appState === oldState) return
//   console.log('renderApp')
//   renderTitle(appState.title, oldState.title)
//   renderContent(appState.content, oldState.content)
// }

// function renderTitle(title, oldTitle = {} ) {
//   if(title === oldTitle ) return
//   console.log('renderTitle')
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = title.text
//   titleDOM.style.color = title.color
// }
// function renderContent(content, oldContent = {}) {
//   if(content === oldContent) return 
//   console.log('renderContent')
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = content.text
//   contentDOM.style.color = content.color
// }
// function stateChanger (state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       return {
//         ...state,
//         title: {
//           ...state.title,
//           text: action.text
//         }
//       }
//     case 'UPDATE_TITLE_COLOR':
//       return {
//         ...state,
//         title: {
//           ...state.title,
//           color: action.color
//         }
//       }
//     default:
//       return state
//   }
// }
// function createStore(state, stateChanger) {
//   // 加入观察者模式
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = stateChanger(state, action) // 覆盖原对象
//     listeners.forEach((listener) => listener())
//   }
//   return {getState, dispatch, subscribe }
 
// }
// const store = createStore(appState, stateChanger)
// let oldState = store.getState() // 缓存旧的 state
// store.subscribe(() => {
//   const newState = store.getState()
//   renderApp(newState, oldState)
//   oldState = newState
// })
// renderApp(store.getState()) // 首次渲染页面

// setTimeout(() => {
//   store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '测试修改'})
// }, 2000)
// ----------------产生reducer-----------------------------------------------------

  function renderApp(appState, oldState = {}) {
    if(appState === oldState) return
    console.log('renderApp')
    renderTitle(appState.title, oldState.title)
    renderContent(appState.content, oldState.content)
  }
  
  function renderTitle(title, oldTitle = {} ) {
    if(title === oldTitle ) return
    console.log('renderTitle')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
  }
  function renderContent(content, oldContent = {}) {
    if(content === oldContent) return 
    console.log('renderContent')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text 
    contentDOM.style.color = content.color
  }
  function stateChanger (state, action) {
    if(!state) {
      return {
        title: {
          text: 'React.js 小书',
          color: 'red',
        },
        content: {
          text: 'React.js 小书内容',
          color: 'blue'
        }
      }
    }
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        return {
          ...state,
          title: {
            ...state.title,
            text: action.text
          }
        }
      case 'UPDATE_TITLE_COLOR':
        return {
          ...state,
          title: {
            ...state.title,
            color: action.color
          }
        }
      default:
        return state
    }
  }
  function createStore(reducer) {
    let state = null
    // 加入观察者模式
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      state = reducer(state, action) // 覆盖原对象
      listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return {getState, dispatch, subscribe }
   
  }
  const store = createStore(stateChanger)
  let oldState = store.getState() // 缓存旧的 state
  store.subscribe(() => {
    const newState = store.getState()
    renderApp(newState, oldState)
    oldState = newState
  })
  renderApp(store.getState()) // 首次渲染页面
  
  setTimeout(() => {
    store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '测试修改'})
  }, 2000)