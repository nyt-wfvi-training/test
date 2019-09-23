import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { getBundles } from 'kyt-runtime/server';
import template from './template';
import App from '../components/App';

const app = express();

const port = parseInt(KYT.SERVER_PORT, 10);

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

app.get('*', (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.status(200).send(
    template({
      html,
      bundles: getBundles({}),
    })
  );
});

app.listen(port, () => {
  console.log(`✅  server started on port: ${port}`); // eslint-disable-line no-console
});
