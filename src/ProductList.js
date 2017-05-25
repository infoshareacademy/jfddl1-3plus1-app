import React from 'react'
import {Table, Button, Glyphicon} from 'react-bootstrap'

class ProductList extends React.Component {


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


  render() {         //to sie zawsze powtarza
    return (
      <div>
        <h1>Product List</h1>

          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th width={50}>id</th>
                <th>Photo</th>
                <th>name_clear</th>
                <th>Price</th>
                <th>Add to favourites</th>
                <th>Basket</th>
              </tr>
            </thead>

            <tbody>
            {
              this.state.brands.map(
                brand => (
                  <tr>
                      <td>{brand.id}</td>
                      <td><img className="img-responsive" width={80} height={50} src={process.env.PUBLIC_URL + '/images/'+brand.has_image} /> </td>
                      <td>{brand.name_clear}</td>
                      <td>CENA</td>
                      <td><Button><Glyphicon glyph="star" color="red" /> Add</Button></td>
                      <td><Button><Glyphicon glyph="shopping-cart" color="red" /> Add to the Basket</Button></td>
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