import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'

import * as toastr from 'toastr'

import * as firebase from 'firebase'

class LogOutButton extends React.Component {

    logout = () => {
        firebase.auth().signOut().then(function() {
            toastr.success('Wylogowano!')
        }).catch(function(error) {
            toastr.error('Wystąpił problem!')
        })
    }

    render() {
        return (
            <Grid fluid className="text-center">
                <Row className="top-bar-padding">
                    <Col>
                        <Button onClick={this.logout}>Wyloguj się</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default LogOutButton