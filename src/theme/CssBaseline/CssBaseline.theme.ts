import { Theme } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { ComponentsProps } from '@material-ui/core/styles/props';

// @ts-expect-error: cant index module for some reason
import inter from '@fontsource/inter';

import { BACKGROUND_COLOR } from '../colors';

export const getMuiCssBaseline = (theme: Theme): Overrides['MuiCssBaseline'] => ({
  '@global': {
    '@font-face': [inter],
    body: {
      overflowX: 'hidden',
      margin: theme.spacing(0),
      backgroundColor: BACKGROUND_COLOR,
    },
  },
});

export const getMuiCssBaselineDefaultProps = (): ComponentsProps['MuiCssBaseline'] => ({});
