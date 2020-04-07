import React from 'react';
import Header from '../../components/Header';

const home = () => {
  return (
    <div>
      <Header />
      <div>React Component, hello, haha!</div>
      <button onClick={() => {alert('click')}}>click</button>
    </div>
  );
};

export default home;
