import React, { FC } from 'react';
import clsx from 'clsx';
import { Box, IconButton, Typography } from '@material-ui/core';
import { CloseIcon } from '../../theme/icons';
import { useStyles } from './Toastify.styles';
import { toastifyHelper } from './Toastify.helpers';

export type ToastifyProps = {
  type: 'success' | 'info' | 'error';
  message: string;
  className?: string;
};

export const Toastify:FC<ToastifyProps> = ({
  type,
  message,
  className,
}) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.toastify, classes[type], className)}>
      <Box className={classes.icon}>
        {toastifyHelper[type]}
      </Box>
      <Typography variant="body1" className={clsx('m', classes.message)}>
        {message}
      </Typography>
      <IconButton color="secondary" className={classes.closeButton}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
