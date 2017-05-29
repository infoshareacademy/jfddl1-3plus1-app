import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'

class LogOutButton extends React.Component {
    render() {
        return (
            <Grid fluid className="text-center">
                <Row className="top-bar-padding">
                    <Col>
                        <Button>Wyloguj się</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default LogOutButton