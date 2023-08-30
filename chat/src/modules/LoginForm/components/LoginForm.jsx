import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from '../../../components';
import { validateField } from '../../../utils/helpers/validateField';

export const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    isValid,
    isSubmiting,
  } = props;

  return (
    <>
      <div className="auth_top">
        <h2>Вход</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            validateStatus={validateField('email', touched, errors)}
            help={!touched.email ? '' : errors.email}
            hasFeedback
          >
            <Input
              id="email"
              prefix={<MailOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validateField('password', touched, errors)}
            help={!touched.password ? '' : errors.password}
            hasFeedback
          >
            <Input
              id="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              type="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Link className="login-form-forgot" to="/recovery">
              Восстановление пароля
            </Link>
          </Form.Item>
          <Form.Item>
            {isSubmiting && isValid && <span>Ошибка</span>}
            <Button onClick={handleSubmit} type="primary" size="large">
              Войти
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </>
  );
};
