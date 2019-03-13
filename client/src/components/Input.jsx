import React from 'react';
import { FormGroup, InputGroup } from "@blueprintjs/core";
import { Button } from 'react-bootstrap';


const Input = (props) => (
  <div>
    <h2>Add a cookie</h2>
    <FormGroup 
        helperText="Helper text with details..."
        label="Rating"
        labelFor="text-input"
        labelInfo="(required)"
        >
      <InputGroup id="text-input" placeholder="1-10" style="width: 200px" />
    </FormGroup>
    <FormGroup 
        helperText="Helper text with details..."
        label="Type"
        labelFor="text-input"
        labelInfo="(required)"
        >
      <InputGroup id="text-input" placeholder="Chocolate Chip" style="width: 200px" />
    </FormGroup>
    <FormGroup 
        helperText="Helper text with details..."
        label="Size"
        labelFor="text-input"
        labelInfo="(required)"
        >
      <InputGroup id="text-input" placeholder="Sm, Md, Lg" style="width: 200px" />
    </FormGroup>
    <FormGroup 
        helperText="Helper text with details..."
        label="Location"
        labelFor="text-input"
        labelInfo="(required)"
        >
      <InputGroup id="text-input" placeholder="Central Market" style="width: 200px" />
    </FormGroup>
    <FormGroup 
        helperText="Helper text with details..."
        label="Address"
        labelFor="text-input"
        labelInfo="(required)"
        >
      <InputGroup id="text-input" placeholder="123 Main St." style="width: 200px" />
    </FormGroup>
    <Button as="input" type="submit" value="Submit" />
  </div>
)

export default Input;