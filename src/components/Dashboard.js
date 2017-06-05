import React from 'react'
import MainSearch from './MainSearch'
import LastAddedFavoriteList from './LastAddedFavoriteList'
import {Grid, Row, Glyphicon } from 'react-bootstrap'
import * as firebase from 'firebase'

class Dashboard extends React.Component {
    state = {
        loggedIn: false
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

    render() {
        return (
            <div>
                <MainSearch />
                {
                    (() => {
                        if (!this.state.loggedIn) {
                            return <Grid className="text-center">
                                <Row>
                                    <h4>Zarejestruj się!</h4>
                                    <hr className="register-hr" />
                                    <p>Co możesz zyskać?</p>
                                </Row>
                                <Row>
                                    <p><Glyphicon className="glyphicon-ok" glyph=""></Glyphicon> Prywatny profil użytkownika</p>
                                    <p><Glyphicon className="glyphicon-ok" glyph=""></Glyphicon> Możliwość edycji profilu</p>
                                    <p><Glyphicon className="glyphicon-ok" glyph=""></Glyphicon> Lista ulubionych</p>
                                    <p>Wiele więcej wkrótce...</p>
                                </Row>
                            </Grid>
                        } else {
                            return <LastAddedFavoriteList/>
                        }
                    })()
                }
            </div>
        )
    }
}

export default Dashboard