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

export const RegisterForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const success = true;

  return (
    <>
      <div className="auth_top">
        <h2>Регистрация</h2>
        <p>Пожалуйста, зарегистрируйте аккаунт</p>
      </div>
      <Block>
        {success ? (
          <Form
            name="normal_register"
            className="register-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Введите почту',
                },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                size="large"
                placeholder="email"
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Введите имя пользователя',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder="Имя"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Введите пароль',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="large"
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: 'Повторите пароль',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                size="large"
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large">
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
