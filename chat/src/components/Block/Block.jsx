import React from 'react';
import cx from 'classnames';
import styles from './Block.module.css';

export const Block = ({ children, className }) => {
  return <div className={cx(styles.block, className)}>{children}</div>;
};
