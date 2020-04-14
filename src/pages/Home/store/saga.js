import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHomeList } from './service';

const changeList = list => ({
  type: 'change_home_list',
  newsList: list,
});

function* getHomeList() {
  const res = yield call(fetchHomeList);
  console.log('res==', res.data);
  yield put(changeList(res.data));
}

function* rootSaga() {
  yield takeEvery('FETCH_HOME_LIST', getHomeList);
}

export default rootSaga;
