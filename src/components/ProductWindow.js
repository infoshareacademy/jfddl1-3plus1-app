import React from 'react'

const API_URL = "http://cors-proxy.htmldriven.com/?url=http://infoshareacademycom.2find.ru";

class ProductWindow extends React.Component {
  state = {
    stock: null
  };

  componentWillMount(){
          fetch(
              API_URL + this.props.match.params.link
          ).then((response) => {
              return response.json();
          }).then((data) => {
              return JSON.parse(data.body).data;
          }).then((data) => {
                  console.log('STOCK DATA POBRANE - ', data);
                  this.setState({
                      stock: data
                  });
              }
          );
      }


    render() {
        return (
            <div>
                {
                  this.state.stock === null ? <p>'Pobieranie danych…' </p> :
                      <div>
                        <p>{this.state.stock.part.data.brand}</p>
                        <p>{this.state.stock.part.data.number}</p>
                        <img src={this.state.stock.part.jpg[0]} alt="No data"/>
                      </div>
                }
            </div>

        )
    }

}

export  default ProductWindow