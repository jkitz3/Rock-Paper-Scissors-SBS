import React from 'react';

import styles from './Home.module.css';

import { Message } from '../../components';

export const Home = () => {
  return (
    <section className={styles.home}>
      <Message
        avatar="https://funart.top/uploads/posts/2022-08/1660053661_44-funart-pro-p-krutaya-devushka-art-krasivo-49.jpg"
        text="Куку, ты где! :) А а аа аа аа?"
        date={new Date(2023, 7, 28, 33, 30)}
        owner={false}
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-86.jpg"
        text="Приезжай"
        date={new Date(2023, 7, 28, 33, 60)}
        owner={true}
      />
    </section>
  );
};
