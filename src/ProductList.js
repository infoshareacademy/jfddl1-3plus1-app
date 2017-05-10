import React from 'react'

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



  render(){         //to sie zawsze powtarza
    return(
      <div>
        {
          this.state.products.map(
            product => (
              <ul key={product.id}>
                <li>{product.name}</li>
                <li>{product.studentIds}</li>
                <li>{product.city}</li>
                <li>{product.level}</li>

              </ul>
            )
          )
        }
      </div>
    )
  }

}
export default ProductList