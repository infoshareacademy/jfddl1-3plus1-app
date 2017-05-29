import React from 'react'
import {FormGroup, FormControl, Button, Col} from 'react-bootstrap'
import * as firebase from 'firebase'


class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    loginHandler = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                console.log('Zalogowano');
            }).catch((e => console.log(e.message)))
    }

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {


        // const txtEmail = document.getElementById('txtEmail');
        // const txtPassword = document.getElementById('txtPassword');
        // const btnLogin = document.getElementById('btnLogin');


        // btnLogin.addEventListener('click',


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
                        <FormControl required id="txtPassword" type="password" placeholder="Pass"
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
                    <Button type="submit" className="text-center login-button-width fb-button">Zaloguj się przez
                        Facebook</Button>
                </div>
            </form>
        )
    }
}

export default LoginForm