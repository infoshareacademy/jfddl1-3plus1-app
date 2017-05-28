import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid, Col, Row, Glyphicon } from 'react-bootstrap'

import TopBar from './TopBar'
import Footer from './Footer'
import BurgerMenuWrapper from './BurgerMenuWrapper'
import Dashboard from './Dashboard'
import YourFavoriteList from './YourFavoriteList'
import UserPanel from './UserPanel'
import ProductWindow from './ProductWindow.js'

const links = [
    { path: '/', label: <div className="nav-item-color"><Glyphicon glyph="home"></Glyphicon><span> Dashboard</span></div> },
    { path: '/userPanel', label: <div className="nav-item-color"><Glyphicon glyph="user"></Glyphicon><span> Panel użytkownika</span></div> },
    { path: '/favoriteList', label: <div className="nav-item-color"><Glyphicon glyph="star"></Glyphicon><span> Ulubione</span></div> },
    { path: '/productWindow', label: <div className="nav-item-color"><Glyphicon glyph="search"></Glyphicon><span> Okno wybranego produktu</span></div> },
];

class Navigation extends React.Component {

    state = {
        sidebarOpen: false
    };

    toggleSidebar = (shouldBecomeOpen) => this.setState({
        sidebarOpen: shouldBecomeOpen
    });

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
                  <Route exact path="/" component={Dashboard}/>
                  <Route path="/userPanel" component={UserPanel}/>
                  <Route path="/favoriteList" component={YourFavoriteList}/>
                  <Route path="/productWindow/:link" component={ProductWindow}/>
                </Col>
              </Row>
              <Footer/>
            </Grid>
          </BurgerMenuWrapper>
        </Router>
    )
}

export default Navigation;