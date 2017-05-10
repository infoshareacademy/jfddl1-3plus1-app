import React from 'react'

import {Table, Button, Glyphicon} from 'react-bootstrap'


class ProductList extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

    fetch(
      process.env.PUBLIC_URL + '/data/products.json'
    ).then(
      response => response.json()
    ).then(
      products => this.setState({
        products: products
      })
    )
  }


  render() {         //to sie zawsze powtarza
    return (
      <div>
        <h1>Product List</h1>

          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th width={50}>number of item</th>
                <th>Photo</th>
                <th>Description</th>
                <th>Price</th>
                <th>options</th>
              </tr>
            </thead>

            <tbody>
            {
              this.state.products.map(
                product => (
                  <tr>
                      <td>{product.id}</td>
                      <td><img  width={250} height={150} src={process.env.PUBLIC_URL + '/images/'+product.image} /> </td>
                      <td>{product.name}</td>
                      <td>{product.city}</td>
                      <td><Button><Glyphicon glyph="star" color="red" /></Button></td>
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
export default ProductList