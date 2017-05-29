import React from 'react'
import { FormGroup, FormControl, Button, Col } from 'react-bootstrap'

class RegisterForm extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <h4 className="text-center">Formularz rejestracji</h4>
                </div>
                <hr className="register-hr"/>
                <Col md={6} className="change-padding-right">
                    <FormGroup>
                        <FormControl type="email" placeholder="Twój email"/>
                    </FormGroup>
                </Col>
                <Col md={6} className="change-padding-left">
                    <FormGroup>
                        <FormControl type="password" placeholder="Twoje hasło"/>
                    </FormGroup>
                </Col>
                <div className="text-center">
                    <Button type="submit" className="text-center login-button-width">Zarejestruj się</Button>
                </div>
            </form>
        );
    }
}

export default RegisterForm
