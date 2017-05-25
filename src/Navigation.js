import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  Grid,
  Col,
  Row,
  Glyphicon
} from 'react-bootstrap'

import ProductList from './ProductList' //by RC
import Dashboard from './Dashboard' // by Adrian
import TopBar from './TopBar'
import BurgerMenuWrapper from './BurgerMenuWrapper'
import YourFavoriteList from './YourFavoriteList'
import UserPanel from './UserPanel'
import ProductWindow from './ProductWindow.js'

const links = [
    { path: '/dashboard', label: <div><Glyphicon glyph="home"></Glyphicon><span> Dashboard</span></div> },
    { path: '/userPanel', label: <div><Glyphicon glyph="user"></Glyphicon><span> Panel użytkownika</span></div> },
    { path: '/favoriteList', label: <div><Glyphicon glyph="star"></Glyphicon><span> Ulubione</span></div> },
    { path: '/ProductWindow', label: <div><Glyphicon glyph="search"></Glyphicon><span> Okno wybranego produktu</span></div> },
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
            <Grid fluid className="main-grid-padding">
              <TopBar toggleSidebar={this.toggleSidebar}/>
              <Row>
                <Col md={12}>
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/ProductWindow/:model/:id" component={ProductWindow}/>
                  <Route path="/favoriteList" component={YourFavoriteList}/>
                  <Route path="/userPanel" component={UserPanel}/>

                </Col>
              </Row>
            </Grid>
          </BurgerMenuWrapper>
        </Router>
    )
}

export default Navigation;