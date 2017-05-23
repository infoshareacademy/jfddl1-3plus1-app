import React from 'react'
import {Grid, Row, Col, Table} from 'react-bootstrap'
class ProductWindow extends React.Component {
  state = {
    price: null,
    photo: null,
    id: null,
    value1: null,
    value2: null,
    value3: null,
    name: null,
    partName: null
  };

  componentWillMount() {
    const modelIdFromURL = this.props.match.params.model;
    console.log('###', this.props.match.params);
    const productIdFromURL = this.props.match.params.id;   //TODO

    fetch(
      // process.env.PUBLIC_URL + '/data/brands/opel/corsa/opel-corsa-1/index.json'    //TODO

      process.env.PUBLIC_URL + '/data/brands/opel/corsa/opel-corsa-1/zderzak .json'    //TODO
    ).then(
      response => response.json()
    ).then(
      data => this.setState({
        price: data.price,
        photo: data.photo,
        id: data.id,
        name: data.name,
        value1: data.value1,
        value2: data.value2,
        value3: data.value3
      })
    )
  }


  render() {
    return (
      <Grid>

        <h4 className="text-center"> informacje o produkcie</h4>
        <h5> dane techniczne</h5>
        <Row>
          <Col xs={6} className="text-center">
            <Table striped bordered condensed hover>
              <thead>

              </thead>

              <tbody>
              <tr>
                <th>id</th>
                <td>info 1</td>
              </tr>
              <tr>
                <th>nazwa</th>
                <td>info 2</td>
              </tr>
              <tr>
                <th>cena</th>
                <td>info 3</td>
              </tr>
              </tbody>

            </Table>
          </Col>

          <Col xs={6}>
            <tr>
              <h5>zdjęcie produktu</h5>
              <img src={this.state.photo}/>
            </tr>

          </Col>
        </Row>

        {/*/!*WCZESNIEJSZY KOD*!/*/}
        {/*<div>*/}
        {/*<h>ID: {*/}
        {/*this.state.id*/}
        {/*}*/}
        {/*</h>*/}
        {/*<h4>nazwa produktu: {*/}
        {/*this.state.name*/}
        {/*}*/}
        {/*<p>{this.state.value1}</p>*/}
        {/*<p>{this.state.value2}</p>*/}
        {/*<p>{this.state.value3}</p>*/}

        {/*</h4>*/}
        {/*<h4>Cena: {*/}
        {/*this.state.price*/}
        {/*}*/}
        {/*</h4>*/}

        {/*<h1>Miejsce na zdjecie: </h1>*/}
        {/*<img src={this.state.photo}/>*/}


        {/*</div>*/}

      </Grid>


    )
  }

//WSTAWIC INFORMACJE O PRODUKCIE

}
export  default ProductWindow