import React from 'react'
import {Tabs, Tab, Table, Button, Col, Row} from 'react-bootstrap'

import * as firebase from 'firebase'

import * as toastr from 'toastr'

const API_URL = "http://cors-proxy.htmldriven.com/?url=http://infoshareacademycom.2find.ru";

class ProductWindow extends React.Component {
    state = {
        stock: null,
        favorites: [],
        favoritesUrls: [],
        cart: [],
        cartUrls: []
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
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('/').child('userData').child(userId).child('cart').once('value')
                    .then((snapshot) => {
                        console.log('CART DATA FETCHED FROM FB - ', snapshot.val());
                        this.setState({
                                cart: snapshot.val()
                            }
                        )
                        ;
                    });
            }
        })

    }

    handleAddToFavorites = () => {
        console.log(this.state.favoritesUrls);
        console.log(this.state.stock.parts[0].link);
        if (this.state.favoritesUrls.indexOf(this.state.stock.parts[0].link) === -1) {// TODO deep comparin objects
            this.state.favoritesUrls.push(this.state.stock.parts[0].link);
            console.log('pierwszy', this.state.stock.parts.link);
            console.log('pierwszy', this.state.favoritesUrls);
            if (this.state.favorites === null) {
                this.state.favorites = [];
            }
            this.state.favorites.push(this.state.stock);
            var userId = firebase.auth().currentUser.uid;
            if (firebase.auth().currentUser) {
                firebase.database().ref('/').child('userData').child(userId).child('favorites').set(this.state.favorites)
                    .then(() => {
                        console.log('DATA SENT TO FB!');
                    });
            }
            console.log('NOT IN FAV SO ADDED');
            toastr.success('Dodano do ulubionych!')
        }else{
            console.log('ALREADY IN FAV');
            toastr.error('Produkt został już dodany!!')
        }
        console.log('Dodane do favorites', this.state.favorites);
    };

    handleAddToCart = () => {
        console.log(this.state.cartUrls);
        console.log(this.state.stock.parts[0].link);
        if (this.state.cartUrls.indexOf(this.state.stock.parts[0].link) === -1) {
            this.state.cartUrls.push(this.state.stock.parts[0].link);
            console.log('pierwszy', this.state.stock.parts.link);
            console.log('pierwszy', this.state.cartUrls);
            if (this.state.cart === null) {
                this.state.cart = [];
            }
            this.state.cart.push(this.state.stock);
            var userId = firebase.auth().currentUser.uid;
            if (firebase.auth().currentUser) {
                firebase.database().ref('/').child('userData').child(userId).child('cart').set(this.state.cart)
                    .then(() => {
                        console.log('DATA SENT TO FB!');
                    });
            }
            console.log('NOT IN CART SO ADDED');
            toastr.success('Dodano do koszyka!')
        }else{
            console.log('ALREADY IN CART');
            toastr.error('Produkt znajduje się już w koszyku!')
        }
        console.log('Dodane do cart', this.state.cart);
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
                                    <Button onClick={this.handleAddToCart}>
                                        <h4>Dodaj do koszyka</h4>
                                    </Button>
                                <Button onClick={this.handleAddToFavorites}>
                                    <h4>Dodaj do ulubionych</h4>
                                </Button>
                            </td>
                        </tr>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProductWindow