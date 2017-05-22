import React from 'react'

import {Table} from 'react-bootstrap'
import FilterControls from './FilterControlls'

class Brand extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brands: [],
      searchPhrase: ''
    };

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
  updateSearchPhrase=(event)=>{
    this.setState({searchPhrase: event.target.value})
}

  render() {
    return (
      <div>
        <h3>Napisz markę</h3>

        <FilterControls handleSearchPhraseUpdate={this.updateSearchPhrase}/>


        {/*<BrandsTable*/}
        {/*brands={*/}
        {/*this.state.brands.filter(*/}
        {/*brand => (*/}
        {/*this.state.searchPhrase === '' ?*/}
        {/*true :*/}
        {/*brand.name.toLowerCase().includes(this.state.searchPhrase.toLowerCase())*/}
        {/*)*/}
        {/*)*/}
        {/*}*/}
        {/*/>*/}


        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th><h3>Marka</h3></th>
          </tr>
          </thead>

          <tbody>
          {
            this.state.brands.filter(
              brand => (
                this.state.searchPhrase === '' ?
                  true :
                  brand.name.toLowerCase().includes(this.state.searchPhrase.toLowerCase())
              )
            ).map(
              brand => (
                <tr key={brand.id}>
                  <td>{brand.name}</td>
                </tr>
              )
            )
          }
          </tbody>
        </Table>
      </div>
    )
  }
}
export default Brand