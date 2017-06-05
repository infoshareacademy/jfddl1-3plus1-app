import React from 'react'
import { Row, Col, Image, Grid } from 'react-bootstrap'
import * as firebase from 'firebase'

class LastAddedFavoriteList extends React.Component {
    state = {
        loggedIn: false,
        favorites: []
    }

    componentWillMount(){
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('/').child('userData').child(userId).child('favorites').once('value')
            .then((snapshot) => {
                console.log('FAV FETCHED FROM FB - ', snapshot.val())
                this.setState({
                        favorites: snapshot.val()
                    }
                )
            })
    }

    render() {
        return (
            <Grid>
                <Row className="text-center">
                    <Col xs={12}>
                        <h4>
                            Ostatnio dodane do ulubionych
                        </h4>
                    </Col>
                </Row>
                <hr className="register-hr"/>
                <Row>
                    {this.state.favorites.map((favItem)=>{
                        return <Col xs={6} md={3} className="center-image item-body">
                            <Image className="image-size" responsive src={favItem.part.jpg[0]}/>
                            <p>{favItem.part.data.name}</p>
                        </Col>
                    })}
                </Row>
            </Grid>
        )
    }
}

export default LastAddedFavoriteList