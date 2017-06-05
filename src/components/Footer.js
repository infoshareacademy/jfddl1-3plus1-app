import React from 'react'
import { Grid, Row, Col, Glyphicon, Image } from 'react-bootstrap'

const backgroundStyle ={
    backgroundImage: `url('${process.env.PUBLIC_URL}/images/footer_lodyas.png')`
}

class Footer extends React.Component {
    render () {
        return (
            <Grid className="text-center container-fluid footer" style={backgroundStyle}>
                <Row>
                    <Col xs={12}>
                        <div>
                            <div className="footer-logo">
                                <Image responsive
                                       src={process.env.PUBLIC_URL + '/images/logo_projekt_smaller.png'} alt="logo"/>
                            </div>
                            <a className="change-link-color" href="">Polityka prywatności</a>
                            <span><Glyphicon className="glyphicon-one-dot" glyph=""></Glyphicon></span>
                            <a className="change-link-color" href="">Polityka Cookies </a>
                            <span><Glyphicon className="glyphicon-one-dot" glyph=""></Glyphicon></span>
                            <a className="change-link-color" href="">Regulamin</a>
                        </div>
                        <div id="changeLinkMargin">
                            <a target="_blank" href="https://pl-pl.facebook.com/"><img src="images/facebook_icon.png" alt="facebook"/></a>
                            <a target="_blank" href="https://twitter.com/?lang=pl"><img src="images/twitter_icon.png" alt="twitter"/></a>
                            <a target="_blank" href="https://plus.google.com/collections/featured"><img src="images/googleplus_icon.png" alt="google plus"/></a>
                            <a target="_blank" href="https://www.youtube.com/?hl=pl&gl=PL"><img src="images/youtube_icon.png" alt="youtube"/></a>
                        </div>
                    </Col>
                </Row>
                <Row id="remove-margin-p">
                    <p>Stworzone z <Glyphicon className="glyphicon-heart" glyph=""></Glyphicon> przez 3plus1.</p>
                    <p><Glyphicon className="glyphicon-copyright-mark" glyph=""></Glyphicon>2017 Wszelkie prawa zastrzeżone.</p>
                </Row>
            </Grid>
        )
    }
}

export default Footer