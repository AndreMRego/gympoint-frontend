import React, { useRef, useEffect } from 'react';

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
    return options.filter(i =>
      i.name.toLowerCase().includes(valueReceive.toLowerCase())
    );
  };

  const loadOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterItems(inputValue));
      }, 500);
    });

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.props.value;

    return selectValue ? selectValue.id : '';
  }

  function getDefaultValue() {
    if (!defaultValue) return null;

    return options.find(option => option.id === defaultValue);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
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
        loadOptions={inputValue => loadOptions(inputValue)}
        defaultOptions={options}
        ref={ref}
        value={getDefaultValue()}
        onChange={onChange}
        loadingMessage={() => 'Carregando...'}
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
