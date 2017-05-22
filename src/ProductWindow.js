import React from 'react'

class ProductWindow extends React.Component {
  state = {
    price: null,
    photo: null,
    id: null,
    value1: null,
    value2: null,
    value3: null,
    name: null,
    partName: null
  };

  componentWillMount() {
    const modelIdFromURL = this.props.match.params.model;
    console.log('###',this.props.match.params);
    const productIdFromURL = this.props.match.params.id;   //TODO

    fetch(
      // process.env.PUBLIC_URL + '/data/brands/opel/corsa/opel-corsa-1/index.json'    //TODO

      process.env.PUBLIC_URL + '/data/brands/opel/corsa/opel-corsa-1/zderzak .json'    //TODO
      ).then(
        response => response.json()
      ).then(
      data => this.setState({
        price: data.price,
        photo: data.photo,
        id: data.id,
        name: data.name,
        value1: data.value1,
        value2: data.value2,
        value3: data.value3
      })
    )
  }


  render() {
    return (
      <div>
        <h>ID: {
          this.state.id
        }
        </h>
        <h4>nazwa produktu: {
          this.state.name
        }
        <p>{this.state.value1}</p>
        <p>{this.state.value2}</p>
        <p>{this.state.value3}</p>

        </h4>
        <h4>Cena: {
          this.state.price
          }
        </h4>

        <h1>Miejsce na zdjecie: </h1>
           <img src={this.state.photo}/>


      </div>
    )
  }

//WSTAWIC INFORMACJE O PRODUKCIE

}
export  default ProductWindow