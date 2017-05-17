import React from 'react'
import { FormGroup, FormControl, Button, Col } from 'react-bootstrap'

const RegisterForm = React.createClass({

    getInitialState() {
        return {
            value: '',
        };
    },

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 0) return 'error';
    },

    handleChange(e) {
        this.setState({ value: e.target.value });
    },

    render() {
        return (
            <form>
                <div>
                    <h4 className="text-center">Formularz rejestracji</h4>
                </div>
                <hr/>
                <Col md={6}>
                    <FormGroup>
                        <FormControl type="text" placeholder="Twój login"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormControl type="email" placeholder="Twój e-mail"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Twoje hasło"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormControl type="text" placeholder="Potwierdź hasło"/>
                    </FormGroup>
                </Col>
                <div className="text-center">
                    <Button type="submit" className="text-center login-button-width">Zarejestruj się</Button>
                </div>
            </form>
        );
    }
});

export default RegisterForm
