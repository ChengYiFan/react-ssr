import Koa from 'koa';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './pages/Home';

const app = new Koa();
const Component = renderToString(<Home />);

app.use((ctx) => {
  ctx.response.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>SSR</title>
    </head>
    <body>
        <div id="root">
        ${Component}
        </div>
        <script src="./index.js"></script>
    </body>
    </html>
    `
});

app.listen(8800, () => {
  console.log('server is running at http://localhost:8800')
});
