import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { COLOR_INDIGO_100, COLOR_INDIGO_400G, COLOR_RED_ERROR } from '../../theme/colors';
import { FontWeights } from '../../theme/Typography/Typography.theme';

export const useStyles = makeStyles(() => createStyles({
  root: {
    minWidth: '100px',
    width: '100%',
    '& > div': {
      borderRadius: '13px',
    },
    '& > .MuiOutlinedInput-multiline': {
      padding: '0px',
      '& > textarea:first-child::placeholder': {
        color: COLOR_INDIGO_400G,
        opacity: 1,
      },
    },
  },
  input: {
    minHeight: '160px',
    padding: '64px 20px 12px 20px',
    color: COLOR_INDIGO_100,
    '&::placeholder': {
      fontWeight: FontWeights.fontWeightMedium,
      color: COLOR_INDIGO_100,
    },
  },
  label: {
    '&.MuiInputLabel-shrink': {
      color: COLOR_INDIGO_100,
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: FontWeights.fontWeightMedium,
      transform: 'translate(20px, 24px)',
    },
    '&.Mui-focused, &.MuiFormLabel-filled': {
      color: COLOR_INDIGO_400G,
    },
    '&.Mui-error': {
      '&.MuiInputLabel-shrink': {
        color: COLOR_INDIGO_100,
      },
      '&.Mui-focused, &.MuiFormLabel-filled': {
        color: COLOR_RED_ERROR,
      },
    },
  },
}));
