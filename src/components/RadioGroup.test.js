import React from 'react';
import ReactDOM from 'react-dom';
import RadioGroup from './RadioGroup';

//test component rendering
test('renders without crashing', () => {
  const div = document.createElement('div');
  const radioOptions = [
    { label: 'Label 1', value: 1 },
    { label: 'Label 2', value: 2 },
    { label: 'Label 3', value: 3 },
    { label: 'Label 4', value: 4 }
  ];

  ReactDOM.render(<RadioGroup options={radioOptions} />, div);
  ReactDOM.unmountComponentAtNode(div);
});