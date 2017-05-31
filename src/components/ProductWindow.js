import React from 'react'

const API_URL = "http://cors-proxy.htmldriven.com/?url=http://infoshareacademycom.2find.ru";

import {Tabs, Tab, Table, Button, Col, Row} from 'react-bootstrap'

import * as firebase from 'firebase'

class ProductWindow extends React.Component {
    state = {
        stock: null,
        favorites: []
    };

    componentWillMount() {
        fetch(
            API_URL + this.props.match.params.link
        ).then((response) => {
            return response.json();
        }).then((data) => {
            return JSON.parse(data.body).data;
        }).then((data) => {
                console.log('STOCK DATA POBRANE - ', data);
                this.setState({
                    stock: data
                });
            }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('/').child('userData').child(userId).child('favorites').once('value')
                    .then((snapshot) => {
                        console.log('FAV FETCHED FROM FB - ', snapshot.val());
                        this.setState({
                                favorites: snapshot.val()
                            }
                        )
                        ;
                    });
            }
        })

    }

    handleAddToFavorites = () => {
        if (this.state.favorites.indexOf(this.state.stock) === -1) { // TODO deep comparin objects


            /*{
                link: {}
            }*/


            this.state.favorites.push(this.state.stock);
            var userId = firebase.auth().currentUser.uid;
            if (firebase.auth().currentUser) {
                firebase.database().ref('/').child('userData').child(userId).child('favorites').set(this.state.favorites)
                    .then(() => {
                        console.log('DATA SENT TO FB!');
                    });
            }
            console.log('NOT IN FAV SO ADDED');
        }else{
            console.log('ALREADY IN FAV');
        }
        console.log('Dodane do favorites', this.state.favorites);
    };


    render() {
        return (
            <div >

                <h2 className="text-center">Informacje o produkcie</h2>

                <Row>
                    <Col xs={12} md={6}>
                        <Tabs defaultActiveKey={1} id="page1">
                            <Tab eventKey={1} title="Szczegółowe informacje ">
                                {
                                    this.state.stock === null ? <p>'Pobieranie danych…' </p> :

                                        <Row>
                                            <Col xs={6} className="text-center">
                                                <Table striped bordered condensed hover>
                                                    <thead>

                                                    </thead>

                                                    <tbody>
                                                    <tr>
                                                        <th>Nazwa</th>
                                                        <td><p>{this.state.stock.part.data.brand}</p></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Model</th>
                                                        <td><p>{this.state.stock.part.data.number}</p></td>
                                                    </tr>
                                                    <tr>
                                                        <th>Photo</th>
                                                        <td>
                                                            <img src={this.state.stock.part.jpg[0]} alt="No data"/>
                                                        </td>
                                                    </tr>
                                                    </tbody>

                                                </Table>
                                            </Col>
                                        </Row>
                                }

                            </Tab>
                            <Tab eventKey={2} title="Dostawa i płatność">
                                <ul>

                                    <li>
                                        <h3 >Darmowa wysyłka od 150 zł!</h3>
                                        UWAGA! Dla zamówień powyżej 150 zł nie musisz u nas płacić za wysyłkę!
                                    </li>

                                    <li>
                                        <h3 >Aż 30 dni na zwrot</h3>
                                        Korzystając z oferowanego przez nas przedłużonego prawa do zwrotu, możesz
                                        zwrócić produkt nawet do
                                        30 dni po zakupie.
                                    </li>

                                    <li>
                                        <h3>Bezpłatny zwrot</h3>
                                        My płacimy za zwroty. W związku z tym konieczność odesłania produktu nie oznacza
                                        dla Ciebie
                                        dodatkowych kosztów.
                                    </li>
                                </ul>
                            </Tab>

                            <Tab eventKey={3} title="Skontaktuj sie z nami">
                                <ul>
                                    <li>
                                        <h3>Porada konsultanta</h3>
                                        Nie jesteś pewien czy któraś z części pasuje do Twojego auta? Nie przejmuj się!
                                        Dzwoń do nas.
                                        <p>Nasz konsultant czeka na Twój telefon.
                                            <strong>(45) 123-45-67 </strong></p>
                                    </li>
                                </ul>
                            </Tab>

                        </Tabs>
                    </Col>

                    <Col xs={12} md={6}>
                        <tr>
                            <td>
                                <a href="https://allegro.pl/">
                                    <Button>
                                        <h4>KUP TERAZ</h4>
                                    </Button>
                                </a>
                                <Button onClick={this.handleAddToFavorites}>
                                    <h4>Dodaj do ulubionych</h4>
                                </Button>
                            </td>
                            <td>
                                <h5>Już teraz możesz zamówić wybrany produkt</h5>
                            </td>
                        </tr>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProductWindow