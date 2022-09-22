import { createTheme } from '@material-ui/core';

import { breakpointOptions } from './Grid/Grid.theme';

import { getMuiCssBaseline, getMuiCssBaselineDefaultProps } from './CssBaseline/CssBaseline.theme';
import { getMuiButton, getMuiButtonDefaultProps } from './Button/Button.theme';
import { getMuiSwitch, getMuiSwitchDefaultProps } from './Switch/Switch.theme';
import {
  getMuiInputLabelDefaultProps, getMuiInputBase, getMuiOutlinedInput, getMuiTextField, getMuiTextFieldDefaultProps, getMuiFilledInputDefaultProps,
} from './TextField/TextField.theme';
import { getMuiMenu, getMuiMenuDefaultProps, getMuiMenuItem } from './Menu/Menu.theme';
import { getTypographyOptions } from './Typography/Typography.theme';
import { getMuiSelect, getMuiSelectDefaultProps } from './Select/Select.theme';
import { getMuiIconButton } from './IconButton/IconButton.theme';

// eslint-disable-next-line import/no-mutable-exports
export let theme = createTheme({
  palette: {
    type: 'dark',
  },
  typography: getTypographyOptions(),
  breakpoints: breakpointOptions,
  spacing: 4,
});

theme = createTheme(theme, {
  props: {
    getMuiCssBaseline: getMuiCssBaselineDefaultProps(),
    MuiButton: getMuiButtonDefaultProps(),
    MuiSwitch: getMuiSwitchDefaultProps(),
    MuiInputLabel: getMuiInputLabelDefaultProps(),
    MuiTextField: getMuiTextFieldDefaultProps(),
    MuiFilledInput: getMuiFilledInputDefaultProps(),
    MuiMenu: getMuiMenuDefaultProps(),
    MuiSelect: getMuiSelectDefaultProps(),
  },
  overrides: {
    MuiCssBaseline: getMuiCssBaseline(theme),
    MuiButton: getMuiButton(theme),
    MuiSwitch: getMuiSwitch(theme),
    MuiInputBase: getMuiInputBase(theme),
    MuiOutlinedInput: getMuiOutlinedInput(theme),
    MuiTextField: getMuiTextField(theme),
    MuiMenu: getMuiMenu(theme),
    MuiMenuItem: getMuiMenuItem(theme),
    MuiSelect: getMuiSelect(theme),
    MuiIconButton: getMuiIconButton(theme),
  },
});
