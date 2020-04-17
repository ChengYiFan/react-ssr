import { call, putResolve, takeEvery } from 'redux-saga/effects';
import { fetchHomeList } from './service';
import { CHANGE_LIST, FETCH_HOME_LIST } from './contants';

const changeList = list => ({
  type: CHANGE_LIST,
  newsList: list,
});

function* getHomeList() {
  const res = yield call(fetchHomeList);
  yield putResolve(changeList(res));
}

function* rootSaga() {
  yield takeEvery(FETCH_HOME_LIST, getHomeList);
}

export default rootSaga;
