/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import {
  COLOR_RED_ERROR,
  COLOR_INDIGO_100,
  COLOR_INDIGO_400G,
  COLOR_INDIGO_600,
  COLOR_TRANSPARENT_100,
} from '../colors';
import { FontWeights } from '../Typography/Typography.theme';

export const getMuiInputBase = (theme: Theme): Overrides['MuiInputBase'] => ({
  root: {
    background: COLOR_TRANSPARENT_100,
  },
  input: {
    lineHeight: '24px',
    '&::-webkit-input-placeholder': {
      fontWeight: FontWeights.fontWeightRegular,
    },
  },
});

export const getMuiOutlinedInput = (theme: Theme): Overrides['MuiOutlinedInput'] => ({
  root: {
    fontSize: '16px',
    color: COLOR_INDIGO_100,
    '&.transparent': {
      background: 'transparent',
    },
    '& legend': {
      maxWidth: 0,
    },
    '&$focused:not(&$error)': {
      color: COLOR_INDIGO_400G,
    },
    '&$focused:not(&$error) input': {
      color: COLOR_INDIGO_100,
    },
    '&$focused:not(&$error) svg:nth-last-child(2) > *': {
      fill: COLOR_INDIGO_400G,
    },
    '&$focused:not(&$error) fieldset': {
      borderWidth: '1px !important',
      borderColor: COLOR_INDIGO_400G,
      color: COLOR_INDIGO_400G,
    },
    '&$error $notchedOutline': {
      borderWidth: '1px',
      borderColor: COLOR_RED_ERROR,
    },
    '&$focused $notchedOutline': {
      borderWidth: '1px',
      borderColor: COLOR_INDIGO_400G,
    },
    '&:hover $notchedOutline': {
      borderWidth: '1px',
      borderColor: COLOR_INDIGO_400G,
    },
    '& fieldset': {
      borderWidth: 1,
      borderColor: COLOR_INDIGO_600,
      borderRadius: '14px',
    },
    '& svg:nth-last-child(2) > *': {
      fill: COLOR_INDIGO_100,
    },
  },
});

export const getMuiInputLabelDefaultProps = (): ComponentsProps['MuiInputLabel'] => ({
  shrink: true,
});

export const getMuiTextField = (theme: Theme): Overrides['MuiTextField'] => ({
  root: {
    '&.custom-select-medium': {
      '& > div': {
        height: '53px',
        borderRadius: '12px',
        '& > div': {
          fontWeight: FontWeights.fontWeightRegular,
          padding: '18px 16px !important',
        },
      },
      [theme.breakpoints.up('sm')]: {
        '& > div': {
          minWidth: '192px',
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    '&.custom-select-small': {
      '& > div': {
        width: '120px',
        height: '35px',
        borderRadius: '26px',
        '& > div': {
          display: 'block',
          fontWeight: FontWeights.fontWeightMedium,
          padding: '8px 20px 8px 16px !important',
        },
      },
    },
  },
});

export const getMuiTextFieldDefaultProps = (): ComponentsProps['MuiTextField'] => ({
  variant: 'outlined',
  SelectProps: {
    MenuProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      getContentAnchorEl: null,
    },
  },
});

export const getMuiFilledInputDefaultProps = (): ComponentsProps['MuiFilledInput'] => ({
  disableUnderline: true,
});
