import orderBy from 'lodash/orderBy';

import { DialogItem } from '../DialogItem/DialogItem';

export const Dialogs = ({ items, userId }) => {
  return (
    <div className="dialogs__item">
      {orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem
          key={item._id}
          user={item.user}
          date={item.created_at}
          message={item.text}
          newMessageCount={item.newMessagesCount}
          isRead={item.isRead}
          isMe={item.user._id === userId}
        />
      ))}
    </div>
  );
};
