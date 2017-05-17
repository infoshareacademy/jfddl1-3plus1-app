import React from 'react'
import {Button, Grid, Row, Col} from 'react-bootstrap'

import Select from 'react-select';
import 'react-select/dist/react-select.css';

const getOptions = function (input, callback) {
  setTimeout(function () {
    callback(null, {
      options: [
        {value: 'Opel', label: 'Opel'},           //TU WSTAWIAM PETLE PO MARCE
        {value: 'Audi', label: 'Audi'},
        {value: 'Mercedes', label: 'Mercedes'},
        {value: 'Rover', label: 'Rover'}
      ],
      // CAREFUL! Only set this to true when there are no more options,
      // or more specific queries will not be sent to the server.
      complete: true
    });
  }, 500);
};

class MainSearch extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <h4 className="text-center">Wyszukiwarka</h4>
          <Col xs={4} className="text-center">
            <h5>Marka</h5>
            <Select.Async
              name="form-field-name"
              loadOptions={getOptions}
            />
          </Col>
          <Col xs={12} className="text-center">
            <Button>
              Szukaj
            </Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default MainSearch
