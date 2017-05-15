import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  Grid,
  Col,
  Row,
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap'
import {
  IndexLinkContainer,
  LinkContainer
} from 'react-router-bootstrap'

import ProductList from './ProductList' //by RC
import Dashboard from './Dashboard' // by Adrian


const Navigation = () => (
  <Router>
    <Grid fluid>
      <Row>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">3plus1 project</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <IndexLinkContainer to="/dashboard">
              <NavItem href="#">Dashboard</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/productList">
              <NavItem href="#">Product list</NavItem>
            </LinkContainer>

          </Nav>
          <Nav pullRight>
            <LinkContainer to="#">
              <NavItem href="#">Zaloguj się</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Row>
      <Row>
        <Col md={12}>
          <Route path="/productList" component={ProductList}/>
          <Route path="/dashboard" component={Dashboard}/>

        </Col>
      </Row>


    </Grid>
  </Router>
);
export default Navigation;