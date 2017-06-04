import React, {Component} from 'react'
import '../css/App.css'
import Navigation from './Navigation'
import * as firebase from 'firebase'

class App extends Component {
    state = {
        loggedIn: false
    }

    constructor() {
        super()
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true})
                console.log('Zalogowany', this.state)
                this.forceUpdate()
            }
            else {
                console.log('Nie zalogowany')
                this.setState({loggedIn: false})
            }
        })
    }

    render = () => {
        return (
            <div className="App">
                <Navigation loggedIn={this.state.loggedIn}/>
            </div>
        )
    }
}

export default App