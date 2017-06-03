import React from 'react'
import { Row, Col, Image, Grid } from 'react-bootstrap'

class YourFavoriteList extends React.Component {
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
                    <Col xs={6} md={3} className="center-image item-body">
                        <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                        <p>Nazwa produktu</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default YourFavoriteList