import React from 'react'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Profile = () => (
    <div>
        <h2>Profil</h2>
        <h4>Login:</h4>
        <h4>imię:</h4>
        <h4>info:</h4>
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
                  <Col md={12}>
                      <h1>Profil użytkownika</h1>
                  </Col>
                  <Col md={4}>
                      <Image className="image-size" circle responsive src={process.env.PUBLIC_URL + '/images/face.jpg'}/>
                      <ul>
                          <Button><Link to="/userPanel/profile">Profil</Link></Button>
                          <Button><Link to="/userPanel/settings">Ustawienia</Link></Button>
                          <Button>Dodaj photo</Button>
                      </ul>
                  </Col>

                  <Col md={8}>
                      <Route exact path="/userPanel/profile" component={Profile}/>
                      <Route path="/userPanel/settings" component={Settings}/>
                            </Col>

              </Row>
          </Grid>
      </Router>
    )
  }
}

export default UserPanel