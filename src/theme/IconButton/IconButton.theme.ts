/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';

import { COLOR_INDIGO_100, COLOR_INDIGO_300, COLOR_INDIGO_600 } from '../colors';

export const getMuiIconButton = (theme: Theme): Overrides['MuiIconButton'] => ({
  root: {
    width: '40px',
    height: '40px',

    '& > .MuiIconButton-label': {
      width: 'auto',
    },

    '&:disabled': {
      opacity: 0.5,
    },
  },

  colorPrimary: {
    border: `1px solid ${COLOR_INDIGO_600}`,
    borderRadius: '50%',

    '& svg > *': {
      fill: COLOR_INDIGO_100,
    },

    '&:hover': {
      borderColor: COLOR_INDIGO_300,
    },
  },

  colorSecondary: {
    color: 'none',
    width: '32px',
    height: '32px',

    '& svg > *': {
      fill: COLOR_INDIGO_100,
    },

    '&:hover': {
      backgroundColor: COLOR_INDIGO_600,

      '& svg > *': {
        fill: COLOR_INDIGO_300,
      },
    },
  },
});
