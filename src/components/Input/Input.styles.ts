import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import {
  COLOR_INDIGO_100,
  COLOR_INDIGO_200,
  COLOR_INDIGO_400G,
  COLOR_INDIGO_700,
  COLOR_RED_ERROR,
} from '../../theme/colors';
import { FontWeights } from '../../theme/Typography/Typography.theme';

export const useStyles = makeStyles(() => createStyles({
  root: {
    minWidth: '100px',
    width: '100%',
    '& > div': {
      borderRadius: '13px',
    },
    '& button': {
      padding: '10px',
      minWidth: '105px',
      height: '34px',
      borderRadius: '10px',
      backgroundColor: COLOR_INDIGO_700,
      border: 'none',
      fontSize: '11px',
      fontWeight: FontWeights.fontWeightBold,
      color: COLOR_INDIGO_200,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  input: {
    padding: '22px 28px 12px 20px',
  },
  label: {
    color: COLOR_INDIGO_100,
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: FontWeights.fontWeightMedium,
    transform: 'translate(20px, 16px)',
    '&.Mui-focused, &.MuiInputLabel-shrink': {
      FontWeights: FontWeights.fontWeightRegular,
      color: COLOR_INDIGO_400G,
      fontSize: '12px',
      transform: 'translate(20px, 4px)',
    },
    '&.Mui-error': {
      color: COLOR_INDIGO_100,
      '&.Mui-focused, &.MuiInputLabel-shrink': {
        color: COLOR_RED_ERROR,
      },
    },
  },
  helperText: {
    wordBreak: 'break-all',
    marginLeft: '0px',
    marginTop: '30px',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: FontWeights.fontWeightRegular,
    color: COLOR_INDIGO_200,
    '&.Mui-error': {
      color: COLOR_INDIGO_200,
    },
  },
}));
