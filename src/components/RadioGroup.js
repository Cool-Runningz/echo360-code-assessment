import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RadioDisplay from './RadioDisplay';

class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '', 
            label: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = param => event => {
        this.setState({
            value: event.target.value,
            label: param
        });
    }

    render() {
        const { options } = this.props;
        const { value, label } = this.state;
        return (
        <>
            <form>
                {options.map((item) =>
                <label key={item.label}>
                    {item.label}
                    <input type="radio" name="radioGroup" value={item.value} onChange={this.handleChange(item.label)} />  <br />
                </label>
            )}
            </form>
            <RadioDisplay radioLabel={label} radioValue={value} />
        </>
        );
    }
}

RadioGroup.propTypes = {
   options: PropTypes.array.isRequired
};

export default RadioGroup;