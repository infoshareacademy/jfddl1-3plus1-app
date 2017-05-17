import React from 'react'

import {Table} from 'react-bootstrap'

class Brand extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      brands: []
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


  render() {
    return (
      <div>
        <h1>Marka</h1>

        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Marka</th>
          </tr>
          </thead>

          <tbody>
          {
            this.state.brands.map(
              brand => (
                <tr>
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