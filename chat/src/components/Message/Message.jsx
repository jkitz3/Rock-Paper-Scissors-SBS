import cx from 'classnames';

import { Time, IconRead } from '../';
import styles from './Message.module.css';

export const Message = ({
  avatar,
  text,
  date,
  user = {},
  owner,
  isRead,
  isTyping,
  attachments,
}) => {
  return (
    <div
      className={cx(styles.message, {
        [styles.owner]: owner,
      })}
    >
      <div className={styles.message__avatar}>
        <img src={avatar} alt="Avatar"></img>
      </div>
      <div className={styles.message__content}>
        {(text || isTyping) && (
          <div
            className={cx(styles.message__bubble, {
              [styles['is-typing']]: isTyping,
            })}
          >
            {text && <p className={styles.message__text}>{text}</p>}
            {isTyping && (
              <div className={styles.message__typing}>
                <span className={styles['message__typing-bubble']} />
                <span className={styles['message__typing-bubble']} />
                <span className={styles['message__typing-bubble']} />
              </div>
            )}
          </div>
        )}
        {attachments && (
          <div className={styles.message__attachments}>
            {attachments.map((item) => (
              <div
                className={styles['message__attachments-item']}
                key={item.url}
              >
                <img
                  className={cx(styles['message__attachments-item-img'], {
                    [styles['message__attachments-item-single-img']]:
                      attachments && attachments.length === 1,
                  })}
                  src={item.url}
                  alt={item.filename}
                ></img>
              </div>
            ))}
          </div>
        )}
        {date && (
          <span className={styles.message__date}>
            <Time date={date} />
          </span>
        )}
      </div>
      <IconRead isTyping={isTyping} isRead={isRead} />
    </div>
  );
};
