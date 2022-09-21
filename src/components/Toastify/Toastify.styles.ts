import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { COLOR_INDIGO_100, COLOR_INDIGO_300, COLOR_RED_ERROR } from '../../theme/colors';

const toastBackgroundColor = '#191A1D';

export const useStyles = makeStyles(() => createStyles({
  toastify: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: toastBackgroundColor,
    minHeight: '56px',
    borderRadius: '13px',
  },
  icon: {
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 18px',
    '& > svg': {
      fill: 'currentColor',
      width: '20px',
      height: '20px',
      display: 'block',
      margin: 'auto',
    },
  },
  message: {
    color: COLOR_INDIGO_100,
    padding: '12px 0px',
  },
  closeButton: {
    marginLeft: 'auto',
    marginRight: '8px',
  },
  success: {
    border: `1px solid ${COLOR_INDIGO_300}`,
  },
  error: {
    color: COLOR_RED_ERROR,
    border: '1px solid currentColor',
  },
  info: {
    color: COLOR_INDIGO_300,
    border: '1px solid currentColor',
  },
}));
