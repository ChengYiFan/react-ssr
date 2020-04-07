import Koa from 'koa';
import Static from 'koa-static';
import { render } from './utils';

const app = new Koa();
app.use(Static('public'));

app.use((ctx) => {
  ctx.response.body = render(ctx.request);
});

app.listen(8800, () => {
  console.log('server is running at http://localhost:8800')
});
