import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ru } from 'date-fns/locale';

export const Time = ({ date }) => {
  return formatDistanceToNow(date, { addSuffix: true, locale: ru });
};
