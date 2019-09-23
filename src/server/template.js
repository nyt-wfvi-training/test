import favicon from '../public/kyt-favicon.png';

const getDeferScript = src => `<script defer src="${src}"></script>`;

export default ({ html, bundles }) => `
<!DOCTYPE html>
<html>
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link id="favicon" rel="shortcut icon" href="${favicon}" sizes="16x16 32x32" type="image/png" />
    <title>Test Course</title>
    <style>
    body { font-family: sans-serif; }
    </style>
  </head>
  <body>
    <div id="app">${html}</div>
    ${bundles.runtimeBundle ? getDeferScript(bundles.runtimeBundle) : ''}
    ${bundles.vendorBundle ? getDeferScript(bundles.vendorBundle) : ''}
    ${bundles.entryBundle ? getDeferScript(bundles.entryBundle) : ''}
  </body>
</html>
`;
