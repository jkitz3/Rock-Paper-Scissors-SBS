import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';
import cx from 'classnames';

import styles from './Message.module.css';
import readSvg from '../../assets/img/read.svg';
import notReadSvg from '../../assets/img/notRead.svg';

export const Message = ({ avatar, text, date, user = {}, owner, isRead }) => {
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
      {isRead ? (
        <img src={readSvg} alt="read icon" />
      ) : (
        <img src={notReadSvg} alt="not read icon" />
      )}
    </div>
  );
};
