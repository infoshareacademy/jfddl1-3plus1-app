import React from 'react'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import LogInModal from './LogInModal'

class TopBar extends React.Component {
  render() {
    return (
      <Grid fluid className="text-center">
        <Row className="top-bar-padding">
          <Col md={4}  className="text-left">
            <Button onClick={event => {
              event.preventDefault();
              this.props.toggleSidebar(true)
            }}>
              MENU
            </Button>
          </Col>
          <Col md={4} className="top-bar-logo-center">
            <Image className="top-bar-logo" responsive src={process.env.PUBLIC_URL + '/images/logo_projekt.png'}/>
          </Col>
          <Col md={4} className="text-right">
            <LogInModal/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default TopBar