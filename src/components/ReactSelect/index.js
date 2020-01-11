import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { Container, AsyncWrapper } from './styles';

export default function ReactSelect({
  name,
  label,
  options,
  onChange,
  onInputChange,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const filterItems = valueReceive => {
    if (!valueReceive) return null;
    return options.filter(i =>
      i.name.toLowerCase().includes(valueReceive.toLowerCase())
    );
  };

  const loadOptions = (valueReceive, callback) => {
    callback(filterItems(valueReceive));
  };

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.state.value;

    return selectValue ? selectValue.id : '';
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <AsyncWrapper
        cacheOptions
        className="react-select"
        classNamePrefix="react-select"
        name={fieldName}
        aria-label={fieldName}
        loadOptions={loadOptions}
        defaultOptions
        ref={ref}
        value={defaultValue}
        onChange={onChange}
        noOptionsMessage={() => 'Digite para carregar...'}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.name}
        onInputChange={value => onInputChange(value)}
        {...rest}
      />

      {error && <span>{error}</span>}
    </Container>
  );
}

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
};

ReactSelect.defaultProps = {
  onChange: () => {},
  onInputChange: () => {},
};
