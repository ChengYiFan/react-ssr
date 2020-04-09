import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

const home = ({ name }) => {
  return (
    <div>
      <Header />
      <div>React Component, hello, {name}!</div>
      <button onClick={() => {alert('click')}}>click</button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.name,
});

export default connect(mapStateToProps, null)(home);
