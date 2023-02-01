import { FieldProps } from 'formik';
import React from 'react';
import Select, { Option, ReactSelectProps } from 'react-select';
import { selectCategories } from 'redux/selectors';
import { selectInputStyles } from './SelectInputStyles';

export const SelectField = ({ options, field, form }) => (
  <Select
    options={options}
    styles={selectInputStyles}
    name={field.name}
    value={options ? options.find(option => option.id === field.value) : ''}
    onChange={(option: Option) => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
  />
);
