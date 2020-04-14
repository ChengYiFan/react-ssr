import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

class home extends Component {

  componentDidMount() {
    // 使用 redux-saga发送异步请求
    const { fetchHomeList } = this.props;
    fetchHomeList();
  };

  render() {
    const { name, newsList } = this.props;
    return (
      <div>
        <Header />
        <div>React Component, hello, {name}!</div>
        <div>
          {newsList.length > 0 && newsList.map(i => <div key={i.id}>{i.title}</div>)}
        </div>
        <button onClick={() => {alert('click')}}>click</button>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  newsList: state.home.newsList,
  name: state.home.name,
});

const mapDispatchToProps = dispatch => ({
  fetchHomeList() {
    dispatch({
      type: 'FETCH_HOME_LIST',
    });
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(home);
