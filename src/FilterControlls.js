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
    <Button>OPEL</Button>
    <Button>AUDI</Button>
    <Button>BMW</Button>

  </form>
)

export default FilterControls