import React from 'react'

import { Popover, Tooltip, Button, Modal, } from 'react-bootstrap'

const Popup = React.createClass({
    getInitialState() {
        return { showModal: true };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

        return (
            <div>
                {/*<Button
                    bsStyle="primary"
                    bsSize="small"
                    onClick={this.open}
                >
                    show popup
                </Button>*/}

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
});

export default Popup