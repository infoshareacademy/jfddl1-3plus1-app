import React from 'react'
import {Grid, Row, Col, Image, Button} from 'react-bootstrap'
import LogInModal from './LogInModal'
import LogOutButton from './LogOutButton'

class TopBar extends React.Component {
    componentWillMount() {
        console.log('TopBar Logged In', this.props.loggedIn);
    }

    render() {
        return (
            <Grid fluid className="text-center">
                <Row className="top-bar-padding">
                    <Col md={4} className="text-left">
                        <Button onClick={event => {
                            event.preventDefault();
                            this.props.toggleSidebar(true)
                        }}>
                            MENU
                        </Button>
                    </Col>
                    <Col md={4} className="top-bar-logo-center">
                        <Image className="top-bar-logo" responsive
                               src={process.env.PUBLIC_URL + '/images/logo_projekt.png'}/>
                    </Col>
                    <Col md={4} className="text-right">
                        {
                            (() => {
                                if (!this.props.loggedIn) {
                                    return <LogInModal/>
                                } else {
                                    return <LogOutButton/>
                                }
                            })()
                        }
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default TopBar