import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';

export default [
  {
    path: '/',
    component: App,
    key: 'app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',
      },
      {
        path: "/login",
        component: Login,
        exact: true,
        key: 'login',
      },
    ]
  }
];
