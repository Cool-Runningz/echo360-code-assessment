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
  render() {
    return (
      <div className="App">
       <RadioGroup options={radioOptions} />
      </div>
    );
  }
}

export default App;
