import React from 'react';
import PropTypes from 'prop-types';

const RadioDisplay = (props) => {
    const { radioValue, radioLabel } = props;
       
    return (
        <pre>
            Label: { radioLabel }
            <br />
            Value: { radioValue }
        </pre>
    );
}

RadioDisplay.propTypes = {
  radioValue: PropTypes.string,
  radioLabel: PropTypes.string
};

export default RadioDisplay;