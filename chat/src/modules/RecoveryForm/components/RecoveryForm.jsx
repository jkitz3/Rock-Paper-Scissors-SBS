import React from 'react';
import { LockOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from '../../../components';

export const RecoveryForm = () => {
  const onFinish = () => {
    return;
  };

  return (
    <>
      <div className="auth_top">
        <h2>Восстановление пароля</h2>
        <p>Пожалуйста, придумайте новый пароль</p>
      </div>
      <Block>
        <Form
          name="normal_recovery"
          className="recovery-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="new_password"
            rules={[
              {
                required: true,
                message: 'Введите новый пароль',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              type="password"
              placeholder="Новый пароль"
            />
          </Form.Item>
          <Form.Item
            name="confirm_new_password"
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
              Обновить пароль
            </Button>
          </Form.Item>
          <Link className="auth__login-link" to="/login">
            Войти
          </Link>
        </Form>
      </Block>
    </>
  );
};
