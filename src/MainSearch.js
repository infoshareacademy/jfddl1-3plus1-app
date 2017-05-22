import React from 'react'
import {Button, Grid, Row, Col, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
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
    selectedType: null,
    parts: []
  }

  componentWillMount() {
    fetch(
      process.env.PUBLIC_URL + '/data/brands/brands.json'
    ).then(
      response => response.json()
    ).then(
      brands => this.setState({
        brands: brands
      })
    )
  }

  handleBrandSelect = (data) => {
    const link = data.value

    this.setState({
      selectedBrand: link
    }, () => {
      fetch(
        link
      ).then(
        response => response.json()
      ).then(
        models => this.setState({
          models: models
        })
      )
    })
  }

  handleModelSelect = (data) => {
    const link = data.value

    this.setState({
      selectedModel: link
    }, () => {
      fetch(
        link
      ).then(
        response => response.json()
      ).then(
        parts => this.setState({
          parts: parts
        })
      )
    })
  }


  render() {
    return (
      <Grid>
        <Row>
          <h4 className="text-center">Wyszukiwarka</h4>
          <Col xs={6} className="text-center">
            <h5>Marka</h5>
            <Select
              name="brand"
              value={this.state.selectedBrand}
              onChange={this.handleBrandSelect}
              options={this.state.brands.map(
                brand => ({value: brand.link, label: brand.name})
              )}
            />
          </Col>

          <Col xs={6} className="text-center">
            <h5>Model</h5>

            <Select
              name="model"
              onChange={this.handleModelSelect}
              value={this.state.selectedModel}
              options={this.state.models.map(
                model => ({value: model.link, label: model.name})
              )}
            />

          </Col>

          <Table striped bordered condensed hover>
            <thead>
            <tr>
              <th width={50}>searched</th>
            </tr>
            </thead>

            <tbody>
            {
              this.state.parts.map(
                part =>
                  <tr>
                    {/*<a href="">{part.name}</a>*/}
                    <td><Link to={'/product/' + part.id}>{part.name}</Link></td>
                  </tr>
              )
            }
            </tbody>
          </Table>

        </Row>
      </Grid>
    )
  }
}

export default MainSearch
