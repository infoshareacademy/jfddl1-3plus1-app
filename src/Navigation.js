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

import ProductList from './ProductList'             //by RC
import FavouriteBrands from './FavouriteBrands'     // by Adrian

const Navigation = () => (
  <Router>
    <Grid>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>

          <IndexLinkContainer to="/favouriteBrands">
            <NavItem href="#">Home</NavItem>
          </IndexLinkContainer>

          <LinkContainer to="#">
            <NavItem href="#">About</NavItem>
          </LinkContainer>

          <LinkContainer to="#">
            <NavItem href="#">Topics</NavItem>
          </LinkContainer>

          <LinkContainer to="/productList">
            <NavItem href="#">ProductList</NavItem>
          </LinkContainer>

        </Nav>
      </Navbar>

      <Row>
        <Col md={12}>
          <Route path="/productList" component={ProductList}/>
          <Route path="/favouriteBrands" component={FavouriteBrands}/>

        </Col>
      </Row>
    </Grid>
  </Router>
)
export default Navigation;