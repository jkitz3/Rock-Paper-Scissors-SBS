import React from 'react';
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from '../../../components';
import { validateField } from '../../../utils/helpers/validateField';

export const RegisterForm = (props) => {
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

  const success = true;

  return (
    <>
      <div className="auth_top">
        <h2>Регистрация</h2>
        <p>Пожалуйста, зарегистрируйтесь</p>
      </div>
      <Block>
        {success ? (
          <Form onSubmit={handleSubmit} className="register-form">
            <Form.Item
              validateStatus={validateField('email', touched, errors)}
              help={!touched.email ? '' : errors.email}
              hasFeedback
            >
              <Input
                id="email"
                prefix={<MailOutlined />}
                size="large"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField('username', touched, errors)}
              help={!touched.username ? '' : errors.username}
              hasFeedback
            >
              <Input
                id="username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Имя"
                value={values.username}
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
            <Form.Item
              validateStatus={validateField(
                'confirm_password',
                touched,
                errors
              )}
              help={!touched.confirm_password ? '' : errors.confirm_password}
              hasFeedback
            >
              <Input
                id="confirm_password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="large"
                type="password"
                placeholder="Повторите пароль"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              {isSubmiting && isValid && <span>Ошибка</span>}
              <Button onClick={handleSubmit} type="primary" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__login-link" to="/login">
              Войти
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: '48px' }} />
            </div>
            <h3>Подтвердите свою почту</h3>
            <p>
              На Вашу почту отправлено письмо со ссылкой <br /> для
              подтверждения регистрации
            </p>
          </div>
        )}
      </Block>
    </>
  );
};
