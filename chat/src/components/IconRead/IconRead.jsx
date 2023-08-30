import readSvg from '../../assets/img/read.svg';
import notReadSvg from '../../assets/img/notRead.svg';

export const IconRead = ({ isTyping, isRead }) => {
  return !isTyping ? (
    isRead ? (
      <img src={readSvg} alt="read icon" />
    ) : (
      <img src={notReadSvg} alt="not read icon" />
    )
  ) : (
    ''
  );
};
