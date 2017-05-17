import React from 'react'

import { Grid, Row, Col, Button, Jumbotron, FormGroup, FormControl, Image } from 'react-bootstrap'


class LoginPage extends React.Component {
    render() {
        return (
            <Grid fluid className="remove-padding">
                <Row className="add-border-bottom">
                    <Col md={4}>
                        <Button className="add-margin">Przejdź do aplikacji</Button>
                    </Col>
                    <Col md={4} className="logo-center">
                        <Image responsive src={process.env.PUBLIC_URL + 'images/logo_projekt.png'} className="logo"/>
                    </Col>
                    <Col md={4} className="text-right">
                        <Button className="add-margin">Zaloguj się</Button>
                    </Col>
                </Row>
                <Row className="main-login-container">
                    <Col md={8}>
                        <Jumbotron>
                            <h1>Nowe oblicze wyszukiwania części.</h1>
                            <p>Przedstawiamy wyszukiwarkę części – prostszy sposób na znalezienie części do Twojej maszyny.</p>
                        </Jumbotron>
                    </Col>
                    <Col md={4}>
                        <Row>
                            <Col md={6} className="padding-right-chagne">
                                <FormGroup controlId="formInlineName">
                                    {' '}
                                    <FormControl type="text" placeholder="Imię" />
                                </FormGroup>
                            </Col>
                            <Col md={6} className="padding-left-chagne">
                                <FormGroup controlId="formInlineName">
                                    {' '}
                                    <FormControl type="text" placeholder="Nazwisko" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className="padding-right-chagne">
                                <FormGroup controlId="formInlineName">
                                    {' '}
                                    <FormControl type="email" placeholder="E-mail" />
                                </FormGroup>
                            </Col>
                            <Col md={6} className="padding-left-chagne">
                                <FormGroup controlId="formInlineName">
                                    {' '}
                                    <FormControl type="text" placeholder="Hasło" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Button className="btn-width">Zarejestruj się</Button>
                            </Col>
                            <Col md={12} className="text-center">
                                LUB
                            </Col>
                            <Col md={12}>
                                <Button className="btn-width facebook-button">Zaloguj się przez Facebooka</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default LoginPage