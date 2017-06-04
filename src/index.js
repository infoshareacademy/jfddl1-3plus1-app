import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './css/index.css'
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD8jZrCVAk9GMw6IEjFwJc3peaXkauiP5Q",
    authDomain: "plus1-app.firebaseapp.com",
    databaseURL: "https://plus1-app.firebaseio.com",
    projectId: "plus1-app",
    storageBucket: "plus1-app.appspot.com",
    messagingSenderId: "867427255266"
}
firebase.initializeApp(config)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)