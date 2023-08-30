import React from 'react';
import { LockOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from '../../../components';
import { validateField } from '../../../utils/helpers/validateField';

export const RecoveryForm = (props) => {
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
        <h2>Восстановление пароля</h2>
        <p>Пожалуйста, придумайте новый пароль</p>
      </div>
      <Block>
        <Form onSubmit={handleSubmit} className="recovery-form">
          <Form.Item
            validateStatus={validateField('new_password', touched, errors)}
            help={!touched.new_password ? '' : errors.new_password}
            hasFeedback
          >
            <Input
              id="new_password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              type="password"
              placeholder="Пароль"
              value={values.new_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validateField(
              'confirm_new_password',
              touched,
              errors
            )}
            help={
              !touched.confirm_new_password ? '' : errors.confirm_new_password
            }
            hasFeedback
          >
            <Input
              id="confirm_new_password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              type="password"
              placeholder="Повторите пароль"
              value={values.confirm_new_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            {isSubmiting && isValid && <span>Ошибка</span>}
            <Button onClick={handleSubmit} type="primary" size="large">
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
