/* eslint-disable react/jsx-no-duplicate-props */
import React, { ChangeEventHandler, FocusEventHandler, FC } from 'react';

import { TextField } from '@material-ui/core';

import clsx from 'clsx';
import { useStyles } from './Input.styles';

export interface InputProps {
  className?: string;
  name?: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label?: string;
  error?: boolean;
  helperText?: string;
  adornment?: unknown;
}

export const Input: FC<InputProps> = ({
  className,
  name,
  value,
  onBlur,
  onChange,
  label,
  error,
  helperText,
  adornment,
}) => {
  const classes = useStyles();
  return (
    <TextField
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      label={label}
      error={error}
      helperText={helperText}
      autoComplete="off"
      className={clsx(classes.root, className)}
      inputProps={{ className: classes.input }}
      InputProps={{ endAdornment: adornment }}
      InputLabelProps={{ className: classes.label, shrink: (value !== '') }}
      FormHelperTextProps={{ className: classes.helperText }}
    />
  );
};
