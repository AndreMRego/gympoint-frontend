import React, { useRef, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';
import { subYears } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({
  readOnly,
  maxDate,
  name,
  label,
  value,
  onChange,
  placeholder,
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <ReactDatePicker
        id={name}
        locale={pt}
        dateFormat="dd/MM/yyyy"
        maxDate={maxDate && subYears(new Date(), 16)}
        name={fieldName}
        selected={value || defaultValue}
        onChange={onChange}
        ref={ref}
        placeholderText={placeholder}
        showYearDropdown
        readOnly={readOnly}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  maxDate: PropTypes.bool,
};

DatePicker.defaultProps = {
  onChange: () => {},
  value: new Date(),
  readOnly: false,
  maxDate: false,
};
