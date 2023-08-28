import React from 'react';
import cx from 'classnames';
import { Button as BaseButton } from 'antd';

import styles from './Button.module.css';

export const Button = (props) => {
  return (
    <BaseButton
      {...props}
      className={cx('button', styles.button__large, props.className, {
        button__large: props.size === 'large',
      })}
    />
  );
};
