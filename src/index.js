const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1 style="color:red">hello world</h1>';
});

app.listen(8800, () => {
  console.log('server is running at http://localhost:8800')
});
