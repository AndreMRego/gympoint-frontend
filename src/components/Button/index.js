import React from 'react';
import * as FontAwesome from 'react-icons/fa';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({
  color,
  icon,
  padding,
  disabled,
  children,
  height,
  width,
  type,
  onClick,
}) {
  const Icon = FontAwesome[icon];

  return (
    <Container
      padding={padding}
      width={width}
      height={height}
      color={color}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Icon size={16} color="#FFF" />}
      {children && <span>{children}</span>}
    </Container>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  height: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: 'transparent',
  icon: '',
  children: '',
  height: 45,
  width: '100%',
  type: 'button',
  onClick: () => {},
  padding: false,
  disabled: false,
};
