/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';
import { ChevronDownIcon } from '../icons';

export const getMuiPaper = (): Overrides['MuiPaper'] => ({
  root: {
    left: 0,
  },
});

export const getMuiSelect = (theme: Theme): Overrides['MuiSelect'] => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '&:focus': {
      background: 'none !important',
    },
  },
});

export const getMuiSelectDefaultProps = (): ComponentsProps['MuiSelect'] => ({
  IconComponent: ChevronDownIcon,
});
