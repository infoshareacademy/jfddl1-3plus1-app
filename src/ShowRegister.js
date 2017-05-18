import React from 'react'
import RegisterForm from './RegisterForm'
import { Button, Collapse, Well } from 'react-bootstrap'

class ShowRegister extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {};
    }

    render() {
        return (
            <div className="text-center">
                <a onClick={ ()=> this.setState({ open: !this.state.open })}>
                    Nie masz konta? Zarejestruj się!
                </a>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <RegisterForm/>
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default ShowRegister