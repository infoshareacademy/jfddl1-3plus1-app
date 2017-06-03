import React from 'react'
import { Modal, Button, Glyphicon } from 'react-bootstrap'
import LoginForm from "./LoginForm";
import ShowRegister from './ShowRegister'

class LogInModal extends React.Component {
    state = {
        showModal: false
    };

    close = () => this.setState({ showModal: false });

    open = () => this.setState({ showModal: true });

    render() {
        return (
            <div>
                <Button
                 onClick={this.open}
                 >
                    <Glyphicon glyph="user" /> ZALOGUJ SIĘ
                 </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center">Zaloguj się</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginForm/>
                        <ShowRegister/>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default LogInModal