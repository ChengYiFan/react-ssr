import Koa from 'koa';
import React from 'react';
import Static from 'koa-static';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

const app = new Koa();
app.use(Static('public'));

app.use((ctx) => {
  const Component = renderToString((
    <StaticRouter location={ctx.request.path}>
      {Routes}
    </StaticRouter>
  ));
  ctx.response.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>SSR</title>
    </head>
    <body>
        <div id="root">${Component}</div>
        <script src="./index.js"></script>
    </body>
    </html>
    `
});

app.listen(8800, () => {
  console.log('server is running at http://localhost:8800')
});
