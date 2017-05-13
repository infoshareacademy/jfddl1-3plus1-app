import React from 'react'

import "./css/favouriteBrands.css"

import {Grid, Row, Col, Glyphicon} from 'react-bootstrap'

class FavouriteBrands extends React.Component {
    render() {
        return (
                <Grid>
                    <Row className="show-grid text-center background">
                        <Col xs={12}><h4>
                            Twoje ulubione marki</h4>
                        </Col>
                        <Col xs={6} md={4}>
                            <Glyphicon glyph="star" />
                            <p>Pierwsza marka</p>
                        </Col>
                        <Col xs={6} md={4}>
                            <Glyphicon glyph="star" />
                            <p>Druga marka</p>
                        </Col>
                        <Col xs={6} md={4}>
                            <Glyphicon glyph="star" />
                            <p>Trzecia marka</p>
                        </Col>
                    </Row>
                </Grid>
        )
    }
}

export default FavouriteBrands
