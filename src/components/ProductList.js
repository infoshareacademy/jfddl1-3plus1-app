import React from 'react'
import {Table, Button, Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const API_URL = "http://cors-proxy.htmldriven.com/?url=http://infoshareacademycom.2find.ru";

class ProductList extends React.Component {
  state = {
    list: []
  };

  render() {
    if (this.props.link && this.state.list.length === 0) {
      fetch(
        API_URL + this.props.link
      ).then((response) => {
        return response.json();
      }).then((data) => {
        return JSON.parse(data.body).data;
      }).then((data) => {
          console.log('LIST FETCHED - ', data);
          this.setState({
            list: data
          });
        }
      );
    }
    return (
      <div>
        {this.state.list.map((part) => {
          const path = 'productWindow/'+encodeURIComponent(part.link);
          return <div key={part.link}>
            <Link to={path}>
              {part.brand}
              {part.name}
            </Link>
          </div>
        })}
      </div>
    )
  }
}
export default ProductList