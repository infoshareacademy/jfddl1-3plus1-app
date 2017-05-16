import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  Grid,
  Col,
  Row,
} from 'react-bootstrap'


import ProductList from './ProductList' //by RC
import Dashboard from './Dashboard' // by Adrian

import BurgerMenuWrapper from './BurgerMenuWrapper'

const links = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/productList', label: 'Product List' },
]

class Navigation extends React.Component {

    state = {
        sidebarOpen: false
    }

    toggleSidebar = (shouldBecomeOpen) => this.setState({
        sidebarOpen: shouldBecomeOpen
    })

    render = () => (
        <Router>
          <BurgerMenuWrapper
              isOpen={this.state.sidebarOpen}
              toggleSidebar={this.toggleSidebar}
              onStateChange={(state) => this.toggleSidebar(state.isOpen)}
              links={links}
          >
            <Grid fluid>
              <Row>
                <Col md={12}>
                  <Route path="/productList" component={ProductList}/>
                  <Route path="/dashboard" component={Dashboard}/>

                </Col>
              </Row>
            </Grid>
          </BurgerMenuWrapper>
        </Router>
    )
}

export default Navigation;