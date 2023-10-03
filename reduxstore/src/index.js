import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import data from './Components/Data/data.js'
import { Provider } from 'react-redux'

const defaultState = {
  goods: {},
}

const reducer = (state = defaultState.goods, action) => {
  switch (action.type) {
    case 'Smartphones':
      return Array.isArray(state.Smartphones)
        ? { ...state, Smartphones: '' }
        : { Smartphones: data.Smartphones }

    case 'TVs':
      return Array.isArray(state.TVs)
        ? { ...state, TVs: '' }
        : { ...state, TVs: data.TVs }
    case 'Laptops':
      return Array.isArray(state.Laptops)
        ? { ...state, Laptops: '' }
        : { ...state, Laptops: data.Laptops }
    case 'Fridges':
      return Array.isArray(state.Fridges)
        ? { ...state, Fridges: '' }
        : { ...state, Fridges: data.Fridges }
    case 'Wash Machine':
      return Array.isArray(state['Wash Machine'])
        ? { ...state, 'Wash Machine': '' }
        : { ...state, 'Wash Machine': data['Wash Machine'] }
    default:
      return state
  }
}

const store = configureStore({
  reducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
