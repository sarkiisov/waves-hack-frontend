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
  className?: string;
  name?: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  label?: string;
  error?: boolean;
  placeholder?: string;
  adornment?: any;
}

const filterValues: SelectValue[] = ["WEST", "HACK1", "HACK2"].map((label) => ({
  value: label,
  label,
}));

export const InputAdornment: VFC<TextAreaProps> = (props) => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState(filterValues[0].value);

  const getSelectHandler =
    (callback: {
      (value: React.SetStateAction<string>): void;
      (value: React.SetStateAction<string>): void;
      (arg0: any): void;
    }) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      callback(event.target.value);
    };

  const handleChangeFilter = getSelectHandler(setFilterValue);
  return (
    <TextField
      {...omit({ ...props }, "className")}
      autoComplete="off"
      multiline
      className={clsx(classes.inputAdornment, props.className)}
      InputLabelProps={{ className: classes.label }}
      InputProps={{
        endAdornment: (
          <Select
            values={filterValues}
            size="small"
            value={filterValue}
            onChange={handleChangeFilter}
          />
        ),
      }}
    />
  );
};
