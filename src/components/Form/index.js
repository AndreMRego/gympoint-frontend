import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Form({
  initialData,
  schema,
  onSubmit,
  children,
  ...rest
}) {
  return (
    <Wrapper
      initialData={initialData}
      schema={schema}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}

Form.propTypes = {
  initialData: PropTypes.object,
  schema: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.array,
};
