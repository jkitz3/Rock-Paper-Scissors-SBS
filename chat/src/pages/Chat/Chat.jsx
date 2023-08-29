import React from 'react';

import styles from './Chat.module.css';

import { Message } from '../../components';

export const Chat = () => {
  return (
    <section className={styles.chat}>
      <Message
        avatar="https://funart.top/uploads/posts/2022-08/1660053661_44-funart-pro-p-krutaya-devushka-art-krasivo-49.jpg"
        text="Куку, ты где! :) А а аа аа аа? Куку, ты где! :) Куку, ты где! :) Куку, ты где! :)"
        date={new Date(2023, 7, 28, 36, 30)}
        owner={false}
        isRead
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-86.jpg"
        text="Приезжай"
        date={new Date(2023, 7, 28, 37, 60)}
        owner
        isRead={false}
      />
    </section>
  );
};
