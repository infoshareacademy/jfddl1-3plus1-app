import React from 'react'
import LogInModal from './LogInModal'
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap'

class TopBar extends React.Component {
  render() {
    return (
      <Grid fluid className="text-center">
        <Row className="top-bar-padding">
          <Col md={4}  className="text-left">
            <Button onClick={event => {
              event.preventDefault()
              this.props.toggleSidebar(true)
            }}>
              MENU
            </Button>
          </Col>
          <Col md={4}>
            LOGO
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