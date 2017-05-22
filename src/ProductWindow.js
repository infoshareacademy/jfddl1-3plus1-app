import React from 'react'

class ProductWindow extends React.Component {
  state = {
    price: null,
    photo: null
  }

  componentWillMount() {
    const productId = this.props.match.params.productId
    fetch(
      process.env.PUBLIC_URL + '/data/brands/opel/corsa/opel-corsa-1/index.json'
    )
      .then(
        response => response.json()
      ).then(
      data => this.setState({
        price: data.price,
        photo: data.photo
      })
    )
  }


  render() {
    return (
      <div>

        <h1>Cena: {
          this.state.price
        }
        </h1>
        <h1>Miejsce na zdjecie: </h1>
          <img src={this.state.photo}/>
      </div>
    )
  }

//WSTAWIC INFORMACJE O PRODUKCIE

}
export  default ProductWindow