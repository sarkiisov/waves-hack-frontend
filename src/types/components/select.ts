import { ReactElement } from 'react';
import { IconProps } from '../../theme/icons/icons.types';

export interface SelectValue {
  icon?: ReactElement<IconProps>;
  value: string;
  label: string;
}
