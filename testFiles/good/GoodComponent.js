import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function GoodComponent({ name, language }) {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('(no message)');
    useEffect(() => {
        setMessage(
            `Counter, message, or setMessage changed to: ${counter}, ${message}, ${setMessage}`,
        );
    }, [counter, message, setMessage]);

    return (
        <div className="test-class">
            {language === 'german' ? 'Hallo' : 'Hello'}, {name}
            <br />
            <button onClick={() => setCounter(counter + 1)}>
                Increment Counter
            </button>
            <br />
            <strong>Counter: </strong>
            <code>{counter}</code>
            <hr />
            <strong>Message:</strong>
            <br />
            <pre>{message}</pre>
        </div>
    );
}

GoodComponent.propTypes = {
    name: PropTypes.string.isRequired,
    language: PropTypes.oneOf(['english', 'german']),
};

GoodComponent.defaultProps = {
    language: 'english',
};
