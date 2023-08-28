import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Button } from '../../../components';

export const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите имя пользователя!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} size="large" placeholder="Имя пользователя" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите пароль!',
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
      <Form.Item>
        <a className="login-form-forgot" href="№">
          Восстановления пароля
        </a>
      </Form.Item>
      <Form.Item>
          <Button type="primary" size="large">Войти</Button>
      </Form.Item>
      <a className="auth__register-link" href="№">Зарегистрироваться</a>
    </Form>
  )
}
