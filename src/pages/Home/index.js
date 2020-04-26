import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { FETCH_HOME_LIST } from './store/contants';

class Home extends Component {

  componentDidMount() {
    // 使用 redux-saga发送异步请求
    const { fetchHomeList, newsList } = this.props;
    console.log('newsList==', newsList);
    if(!newsList.length) {
      fetchHomeList();
    }
  };

  getList = () => {
    const { newsList } = this.props;
    return newsList.map(i => <div key={i.id}>{i.title}</div>);
  };

  render() {
    const { name, newsList } = this.props;
    return (
      <div>
        <div>React Component, hello, {name}!</div>
        <div>
          {this.getList()}
        </div>
        <button onClick={() => {alert('click')}}>click</button>
      </div>
    );
  }
};

Home.loadData = (store) => {
  // 负责在服务器端渲染之前，把路由需要的数据提前加载好
  return Promise.resolve(
    store.dispatch({
      type: FETCH_HOME_LIST,
      server: true,
    })
  );
};

const mapStateToProps = state => ({
  newsList: state.home.newsList,
  name: state.home.name,
});

const mapDispatchToProps = dispatch => ({
  fetchHomeList() {
    dispatch({
      type: FETCH_HOME_LIST,
      server: false,
    });
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
