import React from 'react'

import { Modal } from 'react-bootstrap'

class Popup extends React.Component {
    state = {
        showModal: true
    };

    close = () => this.setState({ showModal: false });

    // open = () => this.setState({ showModal: true })

    render() {
        return (
            <div>
                {/*<Button*/}
                 {/*bsStyle="primary"*/}
                 {/*bsSize="small"*/}
                 {/*onClick={this.open}*/}
                 {/*>*/}
                 {/*show popup*/}
                 {/*</Button>*/}

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center">Witaj w naszej aplikacji!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5 className="text-center">Podstawowe informacje</h5>

                        <hr />

                        <h5 className="text-center">Jak korzystać z aplikacji</h5>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Popup


