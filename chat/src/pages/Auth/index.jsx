import React from 'react';
import { LoginForm } from '../../modules/LoginForm/components/LoginForm';
import { Block } from '../../components';

import './Auth.css';

export const Auth = () => {
  return (
    <section className="auth">
      <div className="auth_content">
        <div className="auth_top">
          <h2>Вход</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <LoginForm />
        </Block>
      </div>
    </section>
  );
};
