import React from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Grid, Row, Col, Table} from 'react-bootstrap'
import * as toastr from 'toastr'

const API_URL = "http://cors-proxy.htmldriven.com/?url=http://infoshareacademycom.2find.ru";

class MainSearch extends React.Component {
  state = {
    brands: [],
    selectedBrand: 'Wybierz marke',
    models: [],
    selectedModel: null,
    types: [],
    selectedType: null,
    parts: [],
    selectedCategorie: null,
    categories: [],
    selectedSubcategorie: null,
    subcategories: [],
    selectedSubsubcategorie: null,
    subsubcategories: []
  };

  mapWhatIsSelectedSelectedToWhatShouldBeDownloaded = (whatIsSelected) => {
    const mapObject =
      {
        brands: "models",
        models: 'types',
        types: "categories",
        categories: "subcategories",
        subcategories: "subsubcategories"
      }
    return mapObject[whatIsSelected];
  }

  componentWillMount() {
    this.fetchBrands();
  }

  fetchBrands = () => {
    let url = API_URL + "/api/v2/";
    return fetch(
      url
    ).then((response) => {
      return response.json();
    }).then((data) => {
      return JSON.parse(data.body).data;
    }).then((data) => {
      console.log('BRANDS ARE FETCHED - ', data);
      data = data.filter((el, index) => {
        if (index < 100) {
          return true;
        } else {
          return false;
        }
      });
      this.setState({
        brands: data
      });
    }).catch((error) => {
      console.log('ERROR FETCHING DATA - ', error);
      setTimeout(() => {
        this.fetchBrands()
      }, 200);
    });
  };

  handleSelect = (data) => {
    const link = data.value;
    const whatIsSelected = data.name;
    const magicHere = 'selected'+(whatIsSelected.substr(0,1).toUpperCase())+whatIsSelected.substr(1,whatIsSelected.length-2);
    let state = {};
    state[magicHere] = link;
    this.setState(state, this.handleSelectCallback(link, whatIsSelected, this.mapWhatIsSelectedSelectedToWhatShouldBeDownloaded(whatIsSelected)));
  };

  handleSelectCallback = (link, whatIsSelected, whatShouldBeDownloaded) => {
    let selectedObject = this.state[whatIsSelected].filter((element) => {
      if (element.link === link) return true;
    })[0];
    console.log('selectedObject', selectedObject);
    if (selectedObject && selectedObject.has_children === false) {
      // TODO go to parts list view -> part viiew
      console.log('NO CHILDREN', link)
    }else {
      let url = API_URL + link;
      console.log(url);
      fetch(
        url
      ).then((response) => {
        return response.json();
      }).then((data) => {
        return JSON.parse(data.body).data;
      }).then((data) => {
          if (data.length !== 0) {
            console.log(whatShouldBeDownloaded + ' ARE FETCHED - ', data);
            let newState = {};
            newState[whatShouldBeDownloaded] = data;
            console.log('newState', newState);
            this.setState(newState);
          } else {
            this.handleNoItemError()
          }
        }
      );
    }
  };

  handleNoItemError = () => {
    toastr.error('Brak danych dla wybranej pozycji!');
  };

  render() {
    return (
      <Grid>
        <Row>
        </Row>
        <Row>
          <h4 className="text-center">Wyszukiwarka</h4>
          <Col xs={4} className="text-center">
            <h5>Marka</h5>
            <Select
              name="brands"
              value={this.state.selectedBrand}
              onChange={this.handleSelect}
              options={this.state.brands.map(
                brand => ({value: brand.link, label: brand.name})
              )}
            />
          </Col>

          <Col xs={4} className="text-center">
            <h5>Model</h5>

            <Select
              name="models"
              onChange={this.handleSelect}
              value={this.state.selectedModel}
              options={this.state.models.map(
                model => ({value: model.link, label: model.name})
              )}
            />

          </Col>

          <Col xs={4} className="text-center">
            <h5>Typ</h5>

            <Select
              name="types"
              onChange={this.handleSelect}
              value={this.state.selectedType}
              options={this.state.types.map(
                type => ({value: type.link, label: type.name})
              )}
            />

          </Col>


        </Row>
        <Row>

          <Col xs={4} className="text-center">
            <h5>Kategoria</h5>

            <Select
              name="categories"
              onChange={this.handleSelect}
              value={this.state.selectedCategorie}
              options={this.state.categories.map(
                category => ({value: category.link, label: category.name})
              )}
            />

          </Col>

          <Col xs={4} className="text-center">
            <h5>Subkateogria</h5>

            <Select
              name="subcategories"
              onChange={this.handleSelect}
              value={this.state.selectedSubcategorie}
              options={this.state.subcategories.map(
                subcategory => ({value: subcategory.link, label: subcategory.name})
              )}
            />

          </Col>

          <Col xs={4} className="text-center">
            <h5>Subkateogria</h5>

            <Select
              name="subsubcategories"
              onChange={this.handleSelect}
              value={this.state.selectedSubsubcategorie}
              options={this.state.subsubcategories.map(
                subsubcategory => ({value: subsubcategory.link, label: subsubcategory.name})
              )}
            />

          </Col>

        </Row>
        <Row>
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

                    {/*<td><Link to={'/ProductWindow/' + part.id}>{part.name}</Link></td>*/}

                    <td><Link to={'/productWindow/Corsa/' + part.id}>{part.name}</Link></td>

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
