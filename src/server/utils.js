import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

export const render = (req, store, routes) => {
  const Component = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <div>
          {renderRoutes(routes)}
        </div>
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
        <script>
					window.context = {
						state: ${JSON.stringify(store.getState())}
					}
				</script>
        <script src="./index.js"></script>
    </body>
    </html>
    `;
};
