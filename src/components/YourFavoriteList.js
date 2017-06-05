import React from 'react'
import { Row, Col, Image, Grid } from 'react-bootstrap'
import * as firebase from 'firebase'

class YourFavoriteList extends React.Component {
    state = {
        loggedIn: false,
        favorites: []
    }

    constructor() {
        super()
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true})
                console.log('Zalogowany', this.state)
                this.forceUpdate()
            }
            else {
                console.log('Nie zalogowany')
                this.setState({loggedIn: false})
            }
        })
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

    render () {
        return (
            <Grid>
                <Row className="text-center">
                    <Col xs={12}>
                        <h4>
                            Ulubione
                        </h4>
                        <hr className="register-hr"/>
                    </Col>
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

export default YourFavoriteList