import React, { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { setNotification } from '../../utils';
import { CopyIcon } from '../../theme/icons';
import { useStyles } from './Copyable.styles';

export type CopyableProps = {
  valueToCopy: string;
  variant: 'primary' | 'secondary'
  onCopy?: () => void;
};

export const Copyable: FC<CopyableProps> = ({
  valueToCopy,
  variant,
  onCopy,
}) => {
  const classes = useStyles({ variant });
  return (
    <CopyToClipboard
      text={valueToCopy}
      onCopy={() => {
        if (onCopy) onCopy();
        setNotification({
          type: 'success',
          message: 'Toast message',
        });
        setNotification({
          type: 'info',
          message: 'Toast message',
        });
        setNotification({
          type: 'error',
          message: 'Toast message',
        });
      }}
    >
      <Box className={clsx(classes.root, classes[variant])}>
        <Typography noWrap>{valueToCopy}</Typography>
        <Box className={clsx(classes.copyIcon)}>
          <CopyIcon />
        </Box>
      </Box>
    </CopyToClipboard>
  );
};
