import React from 'react'
import { Button } from 'react-bootstrap'
import * as toastr from 'toastr'
import * as firebase from 'firebase'

class LogOutButton extends React.Component {

    logout = () => {
        firebase.auth().signOut().then(function() {
            toastr.success('Wylogowano!')
        }).catch(function(error) {
            toastr.error('Wystąpił problem!')
        })
    }

    render() {
        return (
            <Button onClick={this.logout}>Wyloguj się</Button>
        )
    }
}

export default LogOutButton