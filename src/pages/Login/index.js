import React from 'react';
import Header from '../../components/Header';

const login = () => {
  return (
    <div>
      <div>Login</div>
      <button onClick={() => {alert('登录')}}>登录</button>
    </div>
  );
};

export default login;
