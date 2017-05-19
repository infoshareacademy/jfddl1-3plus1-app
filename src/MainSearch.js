import React from 'react'
import {Button, Grid, Row, Col} from 'react-bootstrap'

import Select from 'react-select';
import 'react-select/dist/react-select.css';

const getOptions = function (input, callback) {
  setTimeout(function () {
    callback(null, {
      options: [
        {value: 'Opel', label: 'Opel'},           //TU WSTAWIAM PETLE PO MARCE
        {value: 'Audi', label: 'Audi'},
        {value: 'Mercedes', label: 'Mercedes'},
        {value: 'Rover', label: 'Rover'}
      ],
      // CAREFUL! Only set this to true when there are no more options,
      // or more specific queries will not be sent to the server.
      complete: true
    });
  }, 500);
};

class MainSearch extends React.Component {
  state = {
    brands: [],
    selectedBrand: 'Wybierz marke',
    models: [],
    selectedModel: null,
    types: [],
    selectedType: null
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/brands.json'
    ).then(
      response => response.json()
    ).then(
      brands => this.setState({
        brands: brands.data
      })
    )
  }

  handleBrandSelect = (event) => {
    const link = event.target.value

    this.setState({
      selectedBrand: link
    }, () => {
      fetch(
        link
      ).then(
        response => response.json()
      ).then(
        models => this.setState({
          models: models.data
        })
      )
    })
  }



  render() {
    return (
      <Grid>
        <Row>
          <h4 className="text-center">Wyszukiwarka</h4>
          <Col xs={4} className="text-center">
            <h5>Marka</h5>
            <select
              name="brand"
              value={this.state.selectedBrand}
              onChange={this.handleBrandSelect}
            >
              <option>Wybierz</option>
              {
                this.state.brands.map(
                  brand => <option value={brand.link}>{brand.name}</option>
                )
              }

            </select>
          </Col>
          <Col xs={4} className="text-center">
            <h5>Model</h5>
            <select
              name="model"
              onChange={this.handleBrandSelect}
            >
              <option>Wybierz</option>
              {
                this.state.models.map(
                  model => <option value={model.link}>{model.name}</option>
                )
              }

            </select>
          </Col>

                    <Col xs={12} className="text-center">
                            <Button>
                                Szukaj
                            </Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default MainSearch
