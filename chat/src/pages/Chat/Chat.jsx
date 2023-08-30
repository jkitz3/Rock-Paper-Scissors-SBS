import React from 'react';

import styles from './Chat.module.css';

import { Message } from '../../components';

export const Chat = () => {
  return (
    <section className={styles.chat}>
      <Message
        avatar="https://funart.top/uploads/posts/2022-08/1660053661_44-funart-pro-p-krutaya-devushka-art-krasivo-49.jpg"
        text="Некоторое время назад в работе над клиентской (javascript) частью движка josi возникла, кстати, достаточно часто встречающаяся проблема переполнения стека."
        date={new Date(2023, 7, 28, 36, 30)}
        owner={false}
        isRead
        attachments={[
          {
            filename: 'image1.jpg',
            url: 'https://w.forfun.com/fetch/a0/a0cf92069e2b1d3462a6aab0b684e244.jpeg',
          },
          {
            filename: 'image2.jpg',
            url: 'https://i.artfile.ru/1920x1200_450604_[www.ArtFile.ru].jpg',
          },
          {
            filename: 'image3.jpg',
            url: 'https://u.9111s.ru/uploads/202306/12/3e1a42efef361843427d54d6034b25fa.jpg',
          },
        ]}
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-86.jpg"
        text="Причина такого поведения известна и понятна, и в той или иной форме всегда вызвана следующим. Классическая(прямая) рекурсия порождает цепочку последовательных вызовов, что соответственно ведет к наполнению стека вызовов, однако, стек вызовов браузера достаточно мал, в chrome на момент тестирования это 500 вызовов, в safari, если не ошибаюсь, тоже. В любом случае- это предельное значение, а значит его можно превысить и получить exception."
        date={new Date(2023, 7, 28, 37, 60)}
        owner
        isRead={false}
      />
      <Message
        avatar="https://funart.top/uploads/posts/2022-08/1660053661_44-funart-pro-p-krutaya-devushka-art-krasivo-49.jpg"
        text="Строго говоря, количество ячеек может быть больше, чем количество элементов в массиве, но на практике они почти всегда совпадают."
        date={new Date(2023, 7, 29, 36, 30)}
        owner={false}
        isRead
        attachments={[
          {
            filename: 'image1.jpg',
            url: 'https://w.forfun.com/fetch/a0/a0cf92069e2b1d3462a6aab0b684e244.jpeg',
          },
        ]}
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-86.jpg"
        text="Значение свойства length — целое положительное число в диапазоне от 0 до 2 в 32 степени."
        date={new Date(2023, 7, 29, 38, 30)}
        owner
        isRead
        attachments={[
          {
            filename: 'image1.jpg',
            url: 'https://i.artfile.ru/1920x1200_450604_[www.ArtFile.ru].jpg',
          },
        ]}
      />
      <Message
        avatar="https://funart.top/uploads/posts/2022-08/1660053661_44-funart-pro-p-krutaya-devushka-art-krasivo-49.jpg"
        isTyping
      />
    </section>
  );
};
