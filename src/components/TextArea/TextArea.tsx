/* eslint-disable react/destructuring-assignment */
import React, { ChangeEventHandler, FocusEventHandler, VFC } from 'react';

import { TextField } from '@material-ui/core';

import clsx from 'clsx';
import { omit } from 'lodash';
import { useStyles } from './TextArea.styles';

export interface TextAreaProps {
  className?: string;
  name?: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label?: string;
  error?: boolean;
  placeholder?: string;
}

export const TextArea: VFC<TextAreaProps> = (props) => {
  const classes = useStyles();
  return (
    <TextField
      {...omit({ ...props }, 'className')}
      autoComplete="off"
      multiline
      className={clsx(classes.root, props.className)}
      inputProps={{ className: classes.input }}
      InputLabelProps={{ className: classes.label }}
    />
  );
};
