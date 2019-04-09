import React, { Component } from 'react';
import RadioGroup from './components/RadioGroup';
import './App.css';

const radioOptions = [
  { label: 'Label 1', value: 1 },
  { label: 'Label 2', value: 2 },
  { label: 'Label 3', value: 3 },
  { label: 'Label 4', value: 4 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        radioValue: null
    };

    this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    radioValue: value
  });
}

  render() {
    return (
      <div className="App">
       <RadioGroup options={radioOptions} onRadioChange={this.handleChange} radioValue={this.state.radioValue} />
      </div>
    );
  }
}

export default App;
