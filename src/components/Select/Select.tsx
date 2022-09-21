import React, { ChangeEventHandler, VFC } from 'react';

import clsx from 'clsx';
import { TextField, MenuItem } from '@material-ui/core';
import { SelectValue } from '../../types/components';

export interface SelectProps {
  size: 'medium' | 'small';
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  values: SelectValue[];
  value: string;
  defaultValue?: string;
  className?: string;
}

const sizesClassMap = {
  medium: 'custom-select-medium',
  small: 'custom-select-small',
};

const getSelectOptions = (values: SelectValue[], size: 'medium' | 'small') => {
  switch (size) {
    case 'medium':
      return values.map(({ value, label, icon }) => (
        <MenuItem value={value} key={value}>
          {icon}
          &nbsp;
          {label}
        </MenuItem>
      ));
    default:
      return values.map(({ value, label }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      ));
  }
};

export const Select: VFC<SelectProps> = ({
  size,
  values,
  onChange,
  value,
  defaultValue,
  className,
}) => (
  <TextField
    value={value}
    onChange={onChange}
    className={clsx(className, sizesClassMap[size])}
    select
    defaultValue={defaultValue}
  >
    {getSelectOptions(values, size)}
  </TextField>
);
