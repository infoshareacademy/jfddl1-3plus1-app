import React from 'react'
import {FormGroup, FormControl, Button, Col} from 'react-bootstrap'
import * as firebase from 'firebase'
import * as toastr from 'toastr'

const provider = new firebase.auth.FacebookAuthProvider()

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    facebookLoginHandler = (e) => {
        e.preventDefault()
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken
            var user = result.user
            toastr.success('Zalogowano przez Facebook!')
            console.log(result)
            console.log('facebook user', user)
        }).catch(function(error) {
            var errorCode = error.code
            var errorMessage = error.message
            var email = error.email
            var credential = error.credential
            console.log(error)
        })
    }

    loginHandler = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                console.log('Zalogowano')
                toastr.success('Zalogowano!')
            }).catch((e => toastr.error('Nie ma takiego użytkownika, niepoprawny email lub hasło!')))
    }

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.loginHandler}>
                <Col md={6} className="change-padding-right">
                    <FormGroup>
                        <FormControl required id="txtEmail" type="email" placeholder="Email"
                                     onChange={this.emailChangeHandler} value={this.state.email}/>
                    </FormGroup>
                </Col>
                <Col md={6} className="change-padding-left">
                    <FormGroup>
                        <FormControl required id="txtPassword" type="password" placeholder="Hasło"
                                     onChange={this.passwordChangeHandler} value={this.state.password}/>
                    </FormGroup>
                </Col>
                <div className="text-center">
                    <Button id="btnLogin" type="submit" className="text-center login-button-width">Zaloguj się</Button>
                </div>
                <div className="text-center">
                    <p className="p-margin">lub</p>
                </div>
                <div className="text-center">
                    <Button type="submit" className="text-center login-button-width fb-button" onClick={this.facebookLoginHandler}>Zaloguj się przez
                        Facebook</Button>
                </div>
            </form>
        )
    }
}

export default LoginForm