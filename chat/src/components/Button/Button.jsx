import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as BaseButton } from 'antd';
import styles from './Button.module.css';

export const Button = (props) => {
  return (
    <BaseButton {...props} className={classNames("button", styles.button__large, props.className, {
      "button__large": props.size ===  "large"
    })} />
  )
};

Button.propTypes = {
  className: PropTypes.string
};
