import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import {
  COLOR_INDIGO_200, COLOR_INDIGO_400G, COLOR_INDIGO_600, COLOR_INDIGO_700,
} from '../colors';

export const getMuiSwitch = (theme: Theme): Overrides['MuiSwitch'] => {
  const trackSize = {
    width: '56px',
    height: '32px',
    padding: 0,
  };

  const switchBaseSize = {
    padding: 0,
    width: trackSize.height,
    height: trackSize.height,
    border: 'none',
  };

  return {
    root: {
      ...trackSize,
      boxSizing: 'content-box',
      margin: theme.spacing(1),
      overflow: 'visible',

      '&:hover': {
        background: 'transparent',
      },
    },
    track: {
      borderRadius: '64px',
      opacity: 1,
      boxSizing: 'border-box',
      border: `1px solid ${COLOR_INDIGO_600}`,
      backgroundColor: COLOR_INDIGO_700,

      '.MuiSwitch-switchBase$checked + &': {
        opacity: 1,
        backgroundColor: COLOR_INDIGO_600,
      },
    },
    switchBase: {
      ...switchBaseSize,

      '&, &:hover, &:active': {
        background: 'transparent',
      },

      '&.Mui-checked .MuiIconButton-label .MuiSwitch-thumb': {
        backgroundColor: COLOR_INDIGO_400G,
      },

      '&$checked': {
        transform: `translateX(calc(${trackSize.width} - 100%))`,
      },
    },
    thumb: {
      backgroundColor: COLOR_INDIGO_200,
      boxShadow: 'unset',
      width: '26px',
      height: '26px',
      border: 'none',
    },
  };
};

export const getMuiSwitchDefaultProps = (): ComponentsProps['MuiSwitch'] => ({
  color: 'default',
});
