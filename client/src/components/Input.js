import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FormGroup, InputGroup, RadioGroup, Radio, TextArea, Intent } from "@blueprintjs/core";
import { Button } from 'react-bootstrap';

class Input extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      rating: 5,
      type: '',
      size: 'medium',
      description: '',
      location: '',
      address: ''
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  handleCookieSize(event) {
    this.setState({size: event.target.value});
  }

  handleTypeChange(event) {
    this.setState({type: event.target.value});
  }

  handleTextChange(event) {
    this.setState({description: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }
 
  render() {
    const { rating } = this.state;

    return (                
      <div>
        <h2>Submit a Cookie</h2>
        <StarRatingComponent 
          name="rating" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <FormGroup 
            helperText="Helper text with details..."
            label="Type"
            labelFor="text-input"
            labelInfo="(required)"
            >
            <InputGroup 
              id="text-input" 
              placeholder="Chocolate Chip" 
              onChange={this.handleTypeChange.bind(this)}
              />
        </FormGroup>
        <RadioGroup
            inline="true"
            label="Size"
            onChange={this.handleCookieSize.bind(this)}
            selectedValue={this.state.size}
        >
            <Radio label="Small" value="small" />
            <Radio label="Medium" value="medium" />
            <Radio label="Large" value="large" />
        </RadioGroup>
        <label>Additional Details:</label>
        <TextArea
            fill={true}
            large={true}
            intent={Intent.PRIMARY}
            onChange={this.handleTextChange.bind(this)}
            value={this.state.description}
            placeholder="soft/crumbly/etc."
        />
        <FormGroup 
            helperText="Helper text with details..."
            label="Location"
            labelFor="text-input"
            labelInfo="(required)"
            >
            <InputGroup 
              id="text-input" 
              placeholder="Central Market" 
              onChange={this.handleLocationChange.bind(this)} />
        </FormGroup>
        <FormGroup 
            helperText="Helper text with details..."
            label="Address"
            labelFor="text-input"
            labelInfo="(required)"
            >
            <InputGroup 
              id="text-input" 
              placeholder="123 Main St." 
              onChange={this.handleAddressChange.bind(this)} />
        </FormGroup>
        <Button as="input" type="submit" value="Submit" onClick={() => this.props.handleInput(this.state)}/>
      </div>
    );
  }
}

export default Input;