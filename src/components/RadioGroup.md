```js
initialState = {
    radioValue: null
};

const radioOptions = [
  { label: 'Label 1', value: 1 },
  { label: 'Label 2', value: 2 },
  { label: 'Label 3', value: 3 },
  { label: 'Label 4', value: 4 }
];

<RadioGroup options={radioOptions} 
            onRadioChange={(event) => setState({radioValue: event.target.value}) } 
            radioValue={state.radioValue} 
/>
```