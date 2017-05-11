import React from 'react'
import "./css/FavouriteBrandsStyle.css"

import { Grid, Row, Col, Glyphicon} from 'react-bootstrap'

class FavouriteBrands extends React.Component {
    render() {
        return (

            <Grid className="background-color">

                <Row>
                    <h3>Twoje ulubione marki</h3>
                    <Col md={4}>
                        <Glyphicon className="glyphicon-color" glyph="star"/>
                        <p>Pierwsza marka</p>
                    </Col>
                    <Col md={4}>
                        <Glyphicon className="glyphicon-color" glyph="star"/>
                        <p>Druga marka</p>
                    </Col>
                    <Col md={4}>
                        <Glyphicon className="glyphicon-color" glyph="star"/>
                        <p>Trzecia marka</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default FavouriteBrands
