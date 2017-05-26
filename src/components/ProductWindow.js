import React from 'react'
import {Grid, Row, Col, Table} from 'react-bootstrap'

class ProductWindow extends React.Component {
  state = {
  };

  componentWillMount(){
    alert(this.props.match.params.link);
    alert(decodeURIComponent(this.props.match.params.link));
  }


  render() {
    return (
      <Grid>

      </Grid>


    )
  }

}

export  default ProductWindow