import React from 'react'
import { Button, Grid, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as toastr from 'toastr'

const getOptions = function (input, callback) {
  setTimeout(function () {
    callback(null, {
      options: [
        { value: 'Opel', label: 'Opel' },           //TU WSTAWIAM PETLE PO MARCE
        { value: 'Audi', label: 'Audi' },
        { value: 'Mercedes', label: 'Mercedes' },
        { value: 'Rover', label: 'Rover' }
      ],
      // CAREFUL! Only set this to true when there are no more options,
      // or more specific queries will not be sent to the server.
      complete: true
    });
  }, 500);
};

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
    selectedCategories: null,
    categories: [],
    selectedSubcategory: null,
    subcategories: []
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
  }

  handleBrandSelect = (data) => {
    const link = data.value
    this.setState({
      selectedBrand: link
    }, this.handleSelectCallback(link, 'brands', 'models'));
  }

  handleSelectCallback = (link, whatIsSelected, whatShouldBeDownloaded) => {
    let selectedObject = this.state[whatIsSelected].filter((element) => {
      if (element.link === link) return true;
    })[0];
    console.log(selectedObject);
    if (selectedObject && selectedObject.has_children === false) { };

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
        console.log('newState',newState);
        this.setState(newState);
      } else {
        this.handleNoItemError()
      }
    }
      );
  }

  handleBrandSelectCallback = (link) => {
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
        console.log('MODELS ARE FETCHED - ', data);
        this.setState({
          models: data
        })
      } else {
        this.handleNoItemError()
      }
    }
      )
  }

  handleModelSelect = (data) => {
    const link = data.value
    this.setState({
      selectedModel: link
    }, this.handleModelSelectCallback(link));
  }

  handleModelSelectCallback = (link) => {
    let url = API_URL + link;
    fetch(
      url
    ).then((response) => {
      return response.json();
    }).then((data) => {
      return JSON.parse(data.body).data;
    }).then((data) => {
      if (data.length !== 0) {
        console.log('TYPES ARE FETCHED - ', data);
        this.setState({
          types: data
        });
      }
      else {
        this.handleNoItemError();
      }
    }
      )
  }

  handleTypeSelect = (data) => {
    const link = data.value
    this.setState({
      selectedType: link
    }, this.handleTypeSelectCallback(link));
  }

  handleTypeSelectCallback = (link) => {
    let url = API_URL + link;
    fetch(
      url
    ).then((response) => {
      return response.json();
    }).then((data) => {
      return JSON.parse(data.body).data;
    }).then((data) => {
      if (data.length !== 0) {
        console.log('CATEGORIES ARE FETCHED - ', data);
        this.setState({
          categories: data
        });
      }
      else {
        this.handleNoItemError();
      }
    }
      )
  }

  handleCategorySelect = (data) => {
    const link = data.value
    this.setState({
      selectedCategory: link
    }, this.handleCategorySelectCallback(link));
  }

  handleCategorySelectCallback = (link) => {
    let url = API_URL + link;
    fetch(
      url
    ).then((response) => {
      return response.json();
    }).then((data) => {
      return JSON.parse(data.body).data;
    }).then((data) => {
      if (data.length !== 0) {
        console.log('SUBCATEGORIES ARE FETCHED - ', data);
        this.setState({
          subcategories: data
        });
      }
      else {
        this.handleNoItemError();
      }
    }
      )
  }

  handleSubcategorySelect = (data) => {
    const link = data.value
    this.setState({
      selectedSubcategory: link
    }, this.handleSubcategorySelectCallback(link));
  }

  handleSubcategorySelectCallback = (link) => {
    let url = API_URL + link;
    console.log(url);
  }

  handleNoItemError = () => {
    toastr.error('Brak danych dla wybranej pozycji!');
  }

  addAlert() {
    this.refs.container.success(
      "Welcome welcome welcome!!",
      "You are now home my friend. Welcome home my friend.", {
        timeOut: 30000,
        extendedTimeOut: 10000
      });
    window.open("http://youtu.be/3SR75k7Oggg");
  }

  // handleModelSelect = (data) => {
  //   const link = data.value
  //
  //   this.setState({
  //     selectedModel: link
  //   }, () => {
  //     fetch(
  //       link
  //     ).then(
  //       response => response.json()
  //     ).then(
  //       parts => this.setState({
  //         parts: parts
  //       })
  //     )
  //   })
  // }


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
              name="brand"
              value={this.state.selectedBrand}
              onChange={this.handleBrandSelect}
              options={this.state.brands.map(
                brand => ({ value: brand.link, label: brand.name })
              )}
            />
          </Col>

          <Col xs={4} className="text-center">
            <h5>Model</h5>

            <Select
              name="model"
              onChange={this.handleModelSelect}
              value={this.state.selectedModel}
              options={this.state.models.map(
                model => ({ value: model.link, label: model.name })
              )}
            />

          </Col>

          <Col xs={4} className="text-center">
            <h5>Typ</h5>

            <Select
              name="type"
              onChange={this.handleTypeSelect}
              value={this.state.selectedType}
              options={this.state.types.map(
                type => ({ value: type.link, label: type.name })
              )}
            />

          </Col>


        </Row>
        <Row>

          <Col xs={6} className="text-center">
            <h5>Kategoria</h5>

            <Select
              name="category"
              onChange={this.handleCategorySelect}
              value={this.state.selectedCategory}
              options={this.state.categories.map(
                category => ({ value: category.link, label: category.name })
              )}
            />

          </Col>

          <Col xs={6} className="text-center">
            <h5>Subkateogria</h5>

            <Select
              name="subcategory"
              onChange={this.handleSubcategorySelect}
              value={this.state.selectedSubcategory}
              options={this.state.subcategories.map(
                subcategory => ({ value: subcategory.link, label: subcategory.name })
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

                      <td><Link to={'/ProductWindow/Corsa/' + part.id}>{part.name}</Link></td>

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
