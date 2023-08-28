import React from 'react';
import classNames from 'classnames';
import styles from './Block.module.css';

export const Block = ({ children, className }) => {
  return (
    <div className={classNames(styles.block, className)}>
      {children}
    </div>
  )
}
