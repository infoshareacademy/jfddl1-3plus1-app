import React from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'

import Select from 'react-select';
import 'react-select/dist/react-select.css';

const getOptions = function(input, callback) {
    setTimeout(function() {
        callback(null, {
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
            ],
            // CAREFUL! Only set this to true when there are no more options,
            // or more specific queries will not be sent to the server.
            complete: true
        });
    }, 500);
};

class MainSearch extends React.Component {
  state = {
    selectValue: ''
  }

  render() {
    return (
      <Grid>
          <Row>
              <h4 className="text-center">Wyszukiwarka</h4>
              <Col xs={4} className="text-center">
                  <h5>Model</h5>
                  <Select.Async
                    name="form-field-name"
                    value={this.state.selectValue}
                    loadOptions={getOptions}
                    onChange={(value) => this.setState({selectValue: value})}
                  />
              </Col>
              <Col xs={4} className="text-center">
                  <h5>Marka</h5>
                  <Select.Async
                    name="form-field-name"
                    loadOptions={getOptions}
                    onChange={(value) => this.setState({selectValue: value})}
                    value={this.state.selectValue}
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
