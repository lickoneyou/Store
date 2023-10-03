import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import data from './Components/Data/data.js'
import { Provider } from 'react-redux'

const reducer = (state = data, action) => {
  switch (action.type) {
    case 'laptops':
      return state

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
