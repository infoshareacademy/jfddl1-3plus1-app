import React from 'react'
import {FormGroup, FormControl, Button, Col} from 'react-bootstrap'
import * as firebase from 'firebase'


class RegisterForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    loginHandler = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                console.log('Zarejestrowano');
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
        return (
            <form onSubmit={this.loginHandler}>
                <div>
                    <h4 className="text-center">Formularz rejestracji</h4>
                </div>
                <hr className="register-hr"/>
                <Col md={6} className="change-padding-right">
                    <FormGroup>
                        <FormControl required id="txtEmail" type="email" placeholder="Twój email"
                                     onChange={this.emailChangeHandler} value={this.state.email}/>
                    </FormGroup>
                </Col>
                <Col md={6} className="change-padding-left">
                    <FormGroup>
                        <FormControl required id="txtPassword" type="password" placeholder="Twoje hasło"
                                     onChange={this.passwordChangeHandler} value={this.state.password}/>
                    </FormGroup>
                </Col>
                <div className="text-center">
                    <Button id="btnLogin" type="submit" className="text-center login-button-width">Zarejestruj się</Button>
                </div>
            </form>
        )
    }
}

export default RegisterForm
