import React from 'react'
import {
  FormGroup,
  FormControl,
  ButtonToolbar,
  ButtonGroup,
  Button
} from 'react-bootstrap'

const FilterControls = (props) => (
  <form>
    <FormGroup>
      <FormControl
        onChange={props.handleSearchPhraseUpdate}
      />
    </FormGroup>
  </form>
)

export default FilterControls