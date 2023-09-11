import cx from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { IconRead } from '../';
import styles from './DialogItem.module.css';

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm');
  } else {
    return format(created_at, 'dd.mm.yyyy');
  }
};

export const DialogItem = ({
  user,
  message,
  date,
  isTyping = false,
  isRead,
  newMessageCount,
}) => {
  return (
    <div className={styles.dialogs__item}>
      <div
        className={cx(styles['dialogs__item-avatar'], {
          [styles['dialogs__item-online']]: user.isOnline,
        })}
      >
        <img src={user.avatar} alt={user.username}></img>
      </div>
      <div className={styles['dialogs__item-info']}>
        <div className={styles['dialogs__item-info-top']}>
          <div className={styles['dialogs__item-info-top-username']}>
            {user.username}
          </div>
          <div className={styles['dialogs__item-info-top-date']}>
            {getMessageTime(date)}
          </div>
        </div>
        <div className={styles['dialogs__item-info-bottom']}>
          <div className={styles['dialogs__item-info-bottom-message']}>
            {message}
          </div>
          {!newMessageCount ? (
            <div className={styles['dialogs__item-info-bottom-icon-read']}>
              <IconRead isTyping={isTyping} isRead={isRead} />
            </div>
          ) : (
            <div className={styles['dialogs__item-info-bottom-new-message']}>
              {newMessageCount < 100 ? newMessageCount : '99+'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
