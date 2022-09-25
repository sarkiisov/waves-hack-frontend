/* eslint-disable react/destructuring-assignment */
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  useState,
  VFC,
} from "react";

import { TextField } from "@material-ui/core";
import clsx from "clsx";
import { omit } from "lodash";
import { useStyles } from "../TextArea/TextArea.styles";
import { Select } from "../Select";
import { SelectValue } from "../../types/components";

export interface TextAreaProps {
  selectValue: string;
  values: string[];
  onSelectChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  className?: string;
  name?: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label?: string;
  error?: boolean;
  placeholder?: string;
  adornment?: any;
  
}

const filterValues: SelectValue[] = ["WEST", "HACK1", "HACK2"].map((label) => ({
  value: label,
  label,
}));

const parseValues = (values: string[]) => {
  return values.map((label) => ({
    value: label,
    label,
  }));
}

export const InputAdornment: VFC<TextAreaProps> = (props) => {
  const classes = useStyles();
  
  return (
    <TextField
      {...omit({ ...props }, "className", "selectValue")}
      autoComplete="off"
      multiline
      className={clsx(classes.inputAdornment, props.className)}
      InputLabelProps={{ className: classes.label }}
      InputProps={{
        endAdornment: (
          <Select
            values={parseValues(props.values)}
            size="small"
            value={props.selectValue}
            onChange={props.onSelectChange}
          />
        ),
      }}
    />
  );
};
