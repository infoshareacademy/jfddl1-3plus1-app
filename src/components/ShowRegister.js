import React from 'react'
import { Collapse, Well } from 'react-bootstrap'
import RegisterForm from './RegisterForm'

class ShowRegister extends React.Component {

    constructor(...args) {
        super(...args)

        this.state = {}
    }

    render() {
        return (
            <div className="text-center">
                <a className="register-link" onClick={ ()=> this.setState({ open: !this.state.open })}>
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
        )
    }
}

export default ShowRegister