/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import {
  COLOR_WHITE_SEMI_25,
  COLOR_INDIGO_100,
  COLOR_INDIGO_600,
  COLOR_TRANSPARENT_100,
} from '../colors';

export const getMuiMenu = (theme: Theme): Overrides['MuiMenu'] => ({
  paper: {
    position: 'relative',
    background: COLOR_TRANSPARENT_100,
    backdropFilter: 'blur(12px)',
    borderRadius: '12px',
    boxShadow: `0px 4px 40px ${COLOR_WHITE_SEMI_25}`,
    border: `1px solid ${COLOR_INDIGO_600}`,
    width: 'fit-content',
  },
});

export const getMuiMenuItem = (theme: Theme): Overrides['MuiMenuItem'] => ({
  root: {
    transition: '200ms',
    height: '40px',
    '&:hover': {
      backgroundColor: COLOR_INDIGO_600,
      color: COLOR_INDIGO_100,
      '& > p': {
        color: COLOR_INDIGO_100,
      },
    },
    '&$selected': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: COLOR_INDIGO_600,
        color: COLOR_INDIGO_100,
        '& > p': {
          color: COLOR_INDIGO_100,
        },
      },
    },
  },
});

export const getMuiMenuDefaultProps = (): ComponentsProps['MuiMenu'] => ({
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
});
