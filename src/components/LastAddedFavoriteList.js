import React from 'react'
import { Row, Col, Image, Grid } from 'react-bootstrap'

class LastAddedFavoriteList extends React.Component {
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
                    <Col xs={6} md={3}>
                        <div className="center-image item-body">
                            <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                            <p>Pierwsza część</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="center-image item-body">
                            <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                            <p>Druga część</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="center-image item-body">
                            <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                            <p>Trzecia część</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="center-image item-body">
                            <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                            <p>Czwarta część</p>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default LastAddedFavoriteList