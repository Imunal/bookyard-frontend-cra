import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
