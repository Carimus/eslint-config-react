import React from 'react';
import PropTypes from 'prop-types';

function GoodComponent({ name, language }) {
    return (
        <div className="test-class">
            {language === 'german' ? 'Hallo' : 'Hello'}, {name}
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
