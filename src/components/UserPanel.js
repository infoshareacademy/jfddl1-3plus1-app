import React from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Profile = () => (
    <div>
        <h2>Profil</h2>
    </div>
);

const Settings = () => (
    <div>
        <h2>Ustawienia</h2>
    </div>
);

const Saved = () => (
    <div>
        <h2>Zapisane</h2>
    </div>
);

class UserPanel extends React.Component {
    render() {
        return (
            <Router>
                <Grid>
                    <Row>
                        <Col md={4}>

                            <Image className="image-size" circle responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>

                            <ul>
                                <li><Link to="/userPanel/profile">Profil</Link></li>
                                <li><Link to="/userPanel/settings">Ustawienia</Link></li>
                                <li><Link to="/userPanel/saved">Zapisane</Link></li>
                            </ul>
                        </Col>

                        <Col md={8}>
                            <Route exact path="/userPanel/profile" component={Profile}/>
                            <Route path="/userPanel/settings" component={Settings}/>
                            <Route path="/userPanel/saved" component={Saved}/>
                        </Col>
                    </Row>
                </Grid>
            </Router>
        )
    }
}

export default UserPanel