import React from 'react'
import { FormGroup, FormControl, Button, Col } from 'react-bootstrap'

class LoginForm extends React.Component {
    render() {
        return (
            <form>
                <Col md={6}>
                    <FormGroup>
                        <FormControl type="text" placeholder="Login"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormControl type="email" placeholder="Hasło"/>
                    </FormGroup>
                </Col>
                <div className="text-center">
                    <Button type="submit" className="text-center login-button-width">Zaloguj się</Button>
                </div>
                <div className="text-center">
                    <p className="p-margin">lub</p>
                </div>
                <div className="text-center">
                    <Button type="submit" className="text-center login-button-width fb-button">Zaloguj się przez Facebook</Button>
                </div>
            </form>
        )
    }
}

export default LoginForm