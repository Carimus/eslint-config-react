import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Violates rule(s): react/prop-types
function BadComponent({ undocumentedProp, propThatNeedsDefault }) {
    if (undocumentedProp) {
        // Violates rule(s): react-hooks/rules-of-hooks
        const { counter, setCounter } = useState(0);
        useEffect(
            () => {
                console.log(counter);
                setCounter(counter + 1);
            },
            // Violates rule(s): react-hooks/exhaustive-deps
            [],
        );
    }
    return (
        <div className={'test-class'}> {/* Violates rule(s): react/jsx-curly-brace-presence */}
            {undocumentedProp}
            {propThatNeedsDefault}
        </div>
    );
}

BadComponent.propTypes = {
    // Violates rule(s): react/require-default-props
    propThatNeedsDefault: PropTypes.bool,

    // Violates rule(s): react/no-unused-prop-types
    unusedProp: PropTypes.string,
};

BadComponent.defaultProps = {};

export default BadComponent;
