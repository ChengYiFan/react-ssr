import Koa from 'koa';
import Static from 'koa-static';
import proxy from 'koa2-proxy-middleware';
import { matchRoutes, renderRoutes } from "react-router-config";
import routes from '../Routes';
import { getStore } from '../Store';
import { render } from './utils';
import { rootSaga as homeSaga } from '../pages/Home/store';
import { all } from 'redux-saga/effects';

const options = {
  targets: {
    '/api/(.*)': {
      // api前缀的请求走代理
      target: 'http://47.95.113.63/ssr', // 后端服务器地址
      changeOrigin: true, // 处理跨域
    },
  },
};

const app = new Koa();
app.use(proxy(options));  // 注册
app.use(Static('public'));

const store = getStore();
store.runSaga(homeSaga);

app.use((ctx) => {
  const req = ctx.request;
  // 根据路由的路径，向store里面加数据
  const branch = matchRoutes(routes, req.path);
  console.log('branch==', branch);
  // 让 matchRoutes 里面所有的组件，对应的loadData方法执行一次
  const promises = branch.map(({ route }) => {
    return route.loadData ? route.loadData(store) : Promise.resolve(null);
  });
  Promise.all(promises).then((res) => {
    console.log(res);
    ctx.body = render(req, store, routes);
  });
});

app.listen(8800, () => {
  console.log('server is running at http://localhost:8800')
});
