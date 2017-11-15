import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm'

export class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyAAQoBCyL-jq1xugyP1iDCbQDf18UAzO5U',
      authDomain: 'managerjv-c86b1.firebaseapp.com',
      databaseURL: 'https://managerjv-c86b1.firebaseio.com',
      projectId: 'managerjv-c86b1',
      storageBucket: 'managerjv-c86b1.appspot.com',
      messagingSenderId: '781406491035'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
