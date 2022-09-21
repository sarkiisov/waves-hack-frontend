import React from 'react';

import {
  ErrorIcon,
  NotifySuccessIcon,
} from '../../theme/icons';

export const toastifyHelper = {
  success: <NotifySuccessIcon width="28" height="28" />,
  error: <ErrorIcon />,
  info: <ErrorIcon />,
};
