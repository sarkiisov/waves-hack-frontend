import React from 'react';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';

export const ErrorIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon width="100" height="100" viewBox="0 0 100 100" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM42.7425 22.1588H57.2556L55.9283 63.1589H44.0698L42.7425 22.1588ZM57.5153 74.5847C57.4576 78.7395 53.9663 82.0865 50.0135 82.0865C45.8587 82.0865 42.454 78.7395 42.5117 74.5847C42.454 70.4876 45.8587 67.1695 50.0135 67.1695C53.9663 67.1695 57.4576 70.4876 57.5153 74.5847Z"
    />
  </BaseSVGIcon>
);
