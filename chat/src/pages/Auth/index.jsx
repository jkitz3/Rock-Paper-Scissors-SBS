import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginForm, RegisterForm } from '../../modules';

import './Auth.css';

export const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Routes>
          <Route path="/" Component={LoginForm} />
          <Route path="/login" Component={LoginForm} />
          <Route path="/register" Component={RegisterForm} />
        </Routes>
      </div>
    </section>
  );
};
