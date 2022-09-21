import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
import { Toastify, ToastifyProps } from '../components/Toastify';

export const setNotification = (props: ToastifyProps, options?: ToastOptions) => {
  toast[props.type](
    <Toastify {...props} />,
    {
      ...options,
      type: 'default',
      hideProgressBar: true,
      progress: undefined,
      closeButton: false,
    },
  );
};
