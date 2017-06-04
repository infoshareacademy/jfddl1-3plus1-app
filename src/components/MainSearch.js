import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {Grid, Row, Col } from 'react-bootstrap'
import * as toastr from 'toastr'
import ProductList from './ProductList'

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
    selectedCategory: null,
    categorys: [],
    selectedSubcategory: null,
    subcategorys: [],
    selectedSubsubcategory: null,
    subsubcategorys: [],
    selectedSubsubsubcategory: null,
    subsubsubcategorys: [],
    productListVisible: false,
    productListLink: null
  };

  mapWhatIsSelectedSelectedToWhatShouldBeDownloaded = (whatIsSelected) => {
    const mapObject =
      {
        brands: "models",
        models: 'types',
        types: "categorys",
        categorys: "subcategorys",
        subcategorys: "subsubcategorys",
        subsubcategorys: "subsubsubcategorys"
      }
    return mapObject[whatIsSelected]
  }

  componentWillMount() {
    this.fetchBrands()
  }

  fetchBrands = () => {
    let url = API_URL + "/api/v2/"
    return fetch(
      url
    ).then((response) => {
      return response.json()
    }).then((data) => {
      return JSON.parse(data.body).data;
    }).then((data) => {
      console.log('BRANDS ARE FETCHED - ', data)
      data = data.filter((el, index) => {
        if (index < 400) {
          return true
        } else {
          return false
        }
      })
      this.setState({
        brands: data
      })
    }).catch((error) => {
      console.log('ERROR FETCHING DATA - ', error)
      setTimeout(() => {
        this.fetchBrands()
      }, 100)
    })
  }

  handleSelect = (data) => {
    const link = data.value
    const whatIsSelected = data.name;
    const magicHere = 'selected' + (whatIsSelected.substr(0, 1).toUpperCase()) + whatIsSelected.substr(1, whatIsSelected.length - 2)
    let state = {}
    state[magicHere] = link
    this.setState(state, this.handleSelectCallback(link, whatIsSelected, this.mapWhatIsSelectedSelectedToWhatShouldBeDownloaded(whatIsSelected)))
  }

  handleSelectCallback = (link, whatIsSelected, whatShouldBeDownloaded) => {
    let selectedObject = this.state[whatIsSelected].filter((element) => {
      if (element.link === link) return true;
    })[0]
    console.log('selectedObject', selectedObject);
    if (selectedObject && selectedObject.has_children === false) {
      console.log('NO CHILDREN', link);
      this.setState({
        productListVisible: true,
        productListLink: link
      })
    } else {
      let url = API_URL + link;
      console.log(url)
      fetch(
        url
      ).then((response) => {
        return response.json()
      }).then((data) => {
        return JSON.parse(data.body).data
      }).then((data) => {
          if (data.length !== 0) {
            console.log(whatShouldBeDownloaded + ' ARE FETCHED - ', data)
            let newState = {}
            newState[whatShouldBeDownloaded] = data
            console.log('newState', newState)
            this.setState(newState)
          } else {
            this.handleNoItemError()
          }
        }
      )
    }
  }

  handleNoItemError = () => {
    toastr.error('Brak danych dla wybranej pozycji!')
  }

  render() {
    return (
      <Grid>
        <Row>
        </Row>
        <Row>
          <h4 className="text-center">Wyszukiwarka części</h4>
          <hr className="register-hr"/>
          <Col xs={4} className="text-center">
            <h5>Marka</h5>
            <Select
              name="brands"
              value={this.state.selectedBrand}
              onChange={(value) => {
                this.handleSelect({...value, name: 'brands'})
              }}
              options={this.state.brands.map(
                brand => ({value: brand.link, label: brand.name})
              )}
            />
          </Col>

          <Col xs={4} className="text-center">
            <h5>Model</h5>
            <Select
              name="models"
              onChange={(value) => {
                this.handleSelect({...value, name: 'models'})
              }}
              value={this.state.selectedModel}
              options={this.state.models.map(
                model => ({value: model.link, label: model.name})
              )}
            />
          </Col>

          <Col xs={4} className="text-center">
            <h5>Typ pojazdu</h5>
            <Select
              name="types"
              onChange={(value) => {
                this.handleSelect({...value, name: 'types'})
              }}
              value={this.state.selectedType}
              options={this.state.types.map(
                type => ({value: type.link, label: type.name})
              )}
            />
          </Col>

        </Row>
        <Row>
          <Col xs={4} className="text-center">
            <h5>Kategoria części</h5>
            <Select
              name="categories"
              onChange={(value) => {
                this.handleSelect({...value, name: 'categorys'})
              }}
              value={this.state.selectedCategory}
              options={this.state.categorys.map(
                category => ({value: category.link, label: category.name})
              )}
            />
          </Col>

          <Col xs={4} className="text-center">
            <h5>Rodzaj części</h5>
            <Select
              name="subcategories"
              onChange={(value) => {
                this.handleSelect({...value, name: 'subcategorys'})
              }}
              value={this.state.selectedSubcategory}
              options={this.state.subcategorys.map(
                subcategory => ({value: subcategory.link, label: subcategory.name})
              )}
            />
          </Col>

          <Col xs={4} className="text-center">
            <h5>Typ części</h5>
            <Select
              name="subsubcategories"
              onChange={(value) => {
                this.handleSelect({...value, name: 'subsubcategorys'})
              }}
              value={this.state.selectedSubsubcategory}
              options={this.state.subsubcategorys.map(
                subsubcategory => ({value: subsubcategory.link, label: subsubcategory.name})
              )}
            />
          </Col>

          <Col xs={4} xsOffset={4} className="text-center">
            <h5>Podtyp</h5>
            <Select
                name="subsubsubcategories"
                onChange={(value) => {
                    this.handleSelect({...value, name: 'subsubsubcategorys'})
                }}
                value={this.state.selectedSubsubsubcategory}
                options={this.state.subsubsubcategorys.map(
                    subsubsubcategory => ({value: subsubsubcategory.link, label: subsubsubcategory.name})
                )}
            />
          </Col>

        </Row>
        <Row className="text-center">
          <h4>Wyszukane części</h4>
          <hr className="register-hr"/>

          <ProductList link={this.state.productListLink}/>

        </Row>
      </Grid>
    )
  }
}

export default MainSearch