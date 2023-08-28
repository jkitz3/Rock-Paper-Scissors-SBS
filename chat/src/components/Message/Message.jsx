import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';
import cx from 'classnames';

import styles from './Message.module.css';

export const Message = ({ avatar, text, date, user = {}, owner }) => {
  return (
    <div className={cx(styles.message, { [styles.owner]: owner })}>
      <div className={styles.message__avatar}>
        <img src={avatar} alt="Avatar"></img>
      </div>
      <div className={styles.message__content}>
        <div className={styles.message__bubble}>
          <p className={styles.message__text}>{text}</p>
        </div>
        <span className={styles.message__date}>
          {formatDistanceToNow(date, { addSuffix: true, locale: ru })}
        </span>
      </div>
    </div>
  );
};
