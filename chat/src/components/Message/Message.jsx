import { useState, useRef, useEffect } from 'react';

import cx from 'classnames';

import { Time, IconRead } from '../';
import { convertCurrentTime } from '../../utils/helpers/convertCurrentTime';
import waveSvg from '../../assets/img/wave.svg';
import pauseSvg from '../../assets/img/pause.svg';
import playSvg from '../../assets/img/play.svg';
import styles from './Message.module.css';

export const Message = ({
  avatar,
  audio,
  text,
  date,
  user = {},
  owner,
  isRead,
  isTyping,
  attachments,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioElem = useRef(null);

  useEffect(() => {
    if (audioElem.current) {
      const audioDuration = audioElem.current.duration;

      audioElem.current.addEventListener(
        'ended',
        () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        },
        false
      );

      audioElem.current.addEventListener(
        'timeupdate',
        () => {
          setDuration(audioDuration);
          setCurrentTime(audioElem.current.currentTime);
          setProgress((audioElem.current.currentTime / audioDuration) * 100);
        },
        false
      );
    }
  }, [duration]);

  const togglePlay = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

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
        {(audio || text || isTyping) && (
          <div
            className={cx(styles.message__bubble, {
              [styles['is-typing']]: isTyping,
              [styles['audio']]: audio,
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
            {audio && (
              <div className={styles.message__audio}>
                <audio id="audio" ref={audioElem} src={audio}></audio>
                <div
                  className={styles['message__audio-progress']}
                  style={{ width: `${progress}%` }}
                ></div>
                <div className={styles['message__audio-info']}>
                  <div className={styles['message__audio-btn']}>
                    <button
                      onClick={togglePlay}
                      className={styles['audio-btn']}
                    >
                      {isPlaying ? (
                        <img src={pauseSvg} alt="pause svg" />
                      ) : (
                        <img src={playSvg} alt="play svg" />
                      )}
                    </button>
                  </div>
                  <div className={styles['message__audio-wave']}>
                    <img src={waveSvg} alt="wave svg" />
                  </div>
                  <span className={styles['message__audio-duration']}>
                    {isPlaying
                      ? convertCurrentTime(currentTime)
                      : convertCurrentTime(duration)}
                  </span>
                </div>
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
      {owner && <IconRead isTyping={isTyping} isRead={isRead} />}
    </div>
  );
};
