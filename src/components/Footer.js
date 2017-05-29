import React from 'react'
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap'

const avatarStyle ={
    backgroundImage: "url('/public/images/footer_lodyas.png')"
};

class Footer extends React.Component {
    render () {
        return (
            <Grid className="text-center" style={avatarStyle}>
                <Row>
                    <Col xs={12}>
                        <div>
                            <p>logo</p>
                            <a href="">Polityka prywatności</a>
                            <a href="">Polityka Cookies </a>
                            <a href="">Regulamin</a>
                        </div>
                        <div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p>Stworzone z <Glyphicon className="glyphicon-heart" glyph=""></Glyphicon> przez 3plus1.</p>
                    <p><Glyphicon className="glyphicon-copyright-mark" glyph=""></Glyphicon>2017 Wszelkie prawa zastrzeżone.</p>
                </Row>
            </Grid>
        )
    }
}

export default Footer