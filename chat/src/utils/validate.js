export const validateFunc =({ isAuth, values, errors })=> {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Введите email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Некорректный email';
      }
    },
    username: (value) => {
      if (!value) {
        errors.username = 'Введите имя пользователя';
      } else if (value.length<3) {
        errors.username = 'Минимум три символа';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (!/^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{5,15}$/.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Пароль слишком простой';
      }
      //Пароль должен содержать как минимум один символ, одну цифру и не содержать пробелов
    },
    confirm_password: (value) => {
      if (!value) {
        errors.confirm_password = 'Подтвердите пароль';
      } else if (value !== values.password) {
        errors.confirm_password = 'Пароли не совпадают';
      }
    },
    new_password: (value) => {
      if (!value) {
        errors.new_password = 'Введите пароль';
      } else if (!/^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{5,15}$/.test(value)) {
        errors.new_password = isAuth ? 'Неверный пароль' : 'Пароль слишком простой';
      }
      //Пароль должен содержать как минимум один символ, одну цифру и не содержать пробелов
    },
    confirm_new_password: (value) => {
      if (!value) {
        errors.confirm_new_password = 'Подтвердите пароль';
      } else if (value !== values.new_password) {
        errors.confirm_new_password = 'Пароли не совпадают';
      }
    }
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
