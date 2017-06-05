import React from 'react'
import {Grid, Row, Col, Image, Button, Glyphicon } from 'react-bootstrap'
import LogInModal from './LogInModal'
import LogOutButton from './LogOutButton'

const backgroundStyle ={
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/footer_lodyas.png')`
}

class TopBar extends React.Component {
    componentWillMount() {
        console.log('TopBar Logged In', this.props.loggedIn)
    }

    render() {
        return (
            <Grid fluid>
                <Row className="top-bar-padding row-eq-height" style={backgroundStyle}>
                    <Col md={4} className="text-left left-button-padding">
                        <Button onClick={event => {
                            event.preventDefault()
                            this.props.toggleSidebar(true)
                        }}>
                            <Glyphicon glyph="menu-hamburger" /> MENU
                        </Button>
                    </Col>
                    <Col md={4} className="top-bar-logo-center">
                        <Image className="top-bar-logo" responsive
                               src={process.env.PUBLIC_URL + '/images/logo_projekt.png'}/>
                    </Col>
                    <Col md={4} className="text-right right-button-padding">
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