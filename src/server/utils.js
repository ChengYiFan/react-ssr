import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';
import { Provider } from 'react-redux';
import getStore from '../Store';

export const render = (req) => {
  const Component = renderToString((
    <Provider store={getStore()}>
      <StaticRouter location={req.path}>
        {Routes}
      </StaticRouter>
    </Provider>
  ));

  return `
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
    `;
};
