import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

class SearchRemember extends React.Component {
    render() {
        return (

                    <Row className="text-center">
                        <Col xs={12}>
                          <h4>
                            Dodane do zapamiętanych z wyszukiwania
                          </h4>
                        </Col>
                        <Col xs={6} md={3} className="center-image">
                          <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                            <p>Pierwsza część</p>
                        </Col>
                        <Col xs={6} md={3} className="center-image">
                          <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                            <p>Druga część</p>
                        </Col>
                        <Col xs={6} md={3} className="center-image">
                          <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                            <p>Trzecia część</p>
                        </Col>
                        <Col xs={6} md={3} className="center-image">
                          <Image className="image-size" responsive src={process.env.PUBLIC_URL + '/images/search_placeholder.png'}/>
                          <p>Czwarta część</p>
                        </Col>
                    </Row>

        )
    }
}

export default SearchRemember
