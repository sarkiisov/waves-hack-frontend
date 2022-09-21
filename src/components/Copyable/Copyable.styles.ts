import { makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import {
  COLOR_INDIGO_300,
  COLOR_INDIGO_600,
  COLOR_TRANSPARENT_200,
} from '../../theme/colors';

export const useStyles = makeStyles<Theme, { variant: 'primary' | 'secondary' }>(
  () => createStyles({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      minWidth: '0px',
      maxWidth: '480px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      '&, & path': {
        transition: '200ms',
      },
      '&:hover > div > svg': {
        color: COLOR_INDIGO_300,
      },
    },
    primary: {
      maxHeight: '56px',
      padding: '15px 20px',
      backgroundColor: COLOR_TRANSPARENT_200,
      border: `1px solid ${COLOR_INDIGO_600}`,
      borderRadius: '13px',
      '&:hover': {
        borderColor: COLOR_INDIGO_300,
      },
    },
    secondary: {
      justifyContent: 'start',
    },
    copyIcon: {
      color: COLOR_INDIGO_600,
      '& path': {
        fill: 'currentColor',
      },
    },
  }),
);
