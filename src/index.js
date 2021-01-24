import React from 'react'
import ReactDOM from 'react-dom'
// REDUX
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App/App'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
