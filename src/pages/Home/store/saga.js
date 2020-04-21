import { call, putResolve, takeEvery } from 'redux-saga/effects';
import { fetchHomeList } from './service';
import { CHANGE_LIST, FETCH_HOME_LIST } from './contants';

const changeList = list => ({
  type: CHANGE_LIST,
  newsList: list,
});

function* getHomeList({ server }) {
  const res = yield call(fetchHomeList, server);
  const { data: { success, data } } = res;
  if(success){
    yield putResolve(changeList(data));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_HOME_LIST, getHomeList);
}

export default rootSaga;
