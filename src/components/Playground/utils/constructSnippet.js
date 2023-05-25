const PACKAGE_VERSIONS = {};
const DEPENDENCIES = {
  'react-feather': 'https://cdn.skypack.dev/react-feather',
};

function constructSnippet({
  id,
  codeMap,
  mode,
  boxSizing,
  centered,
}) {
  let codeMapCopy = { ...codeMap };

  if (mode === 'react') {
    codeMapCopy = wrapForReact(codeMapCopy, centered);
  } else if (centered) {
    codeMapCopy = applyCentering(codeMapCopy);
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Josh Comeau iFrame playground</title>

      <!-- global styles -->
      <style>
        @font-face {
          font-family: 'Wotfard';
          src: url('/fonts/wotfard/wotfard-semibold-webfont.woff2')
            format('woff2');
          font-weight: 600;
          font-style: normal;
          font-display: fallback;
        }
        @font-face {
          font-family: 'Wotfard';
          src: url('/fonts/wotfard/wotfard-medium-webfont.woff2')
            format('woff2');
          font-weight: 500;
          font-style: normal;
          font-display: fallback;
        }
        @font-face {
          font-family: 'Wotfard';
          src: url('/fonts/wotfard/wotfard-regular-webfont.woff2')
            format('woff2');
          font-weight: 400;
          font-style: normal;
          font-display: fallback;
        }

        body {
          margin: 0;
          padding: 8px;
        }

        p, h1, h2, h3, h4, h5, h6 {
          margin: 0;
          padding: 0;
        }

        *,
        *:before,
        *:after {
          box-sizing: ${boxSizing};
          line-height: 1.5;
          line-height: calc(1em + 0.5rem);
          -webkit-font-smoothing: antialiased;
          font-family: Wotfard;
        }
      </style>

      <style>${codeMapCopy.css || ''}</style>
    </head>
    <body>
      ${codeMapCopy.markup || ''}
      <span></span>
      <script>
        window.onload = function() {
          if(typeof window !== 'undefined') {
            window.parent.postMessage({
              source: "frame-${id}",
              message: {
                type: "loaded"
              },
            }, "*");

            /*
             * Disable all link-clicks, since
             * they're meant for show.
             */

            const allLinks = [...document.querySelectorAll('a')];
            allLinks.forEach(a => {
              a.addEventListener('click', ev => {
                ev.preventDefault();
              });
            });
          }
        }
        window.onerror = function(message) {
          if(typeof window !== 'undefined') {
            window.parent.postMessage({
              source: "frame-${id}",
              message: {
                type: "error",
                data: message
              },
            }, "*");
          }
        }
      </script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      ${constructJavaScript(codeMapCopy, mode, centered)}
    </body>
    </html>
  `;
}

function constructJavaScript(codeMap, mode, centered) {
  const presets = mode === 'react' ? ['react'] : [];

  if (mode === 'react') {
    return `
      <script type="module">
        const BareIdentifierFormat = /^((?:@[^\\/]+\\/)?[^\\/]+)(\\/.*)?$/

        function validUrl(url) {
          try {
            new URL(url);
            return true;
          } catch(err) {
            return false;
          }
        }

        const PACKAGE_VERSIONS = ${JSON.stringify(PACKAGE_VERSIONS)};

        function unpkg(dependencies = {}) {
          return {
            visitor: {
              "ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration"(path) {
                if (
                  !path.node.source || // Probably a variable declaration
                  validUrl(path.node.source.value) || // Valid URL
                  path.node.source.value.substr(0, 2) === "//" || // URL w/o protocol
                  [".", "/"].indexOf(path.node.source.value.charAt(0)) >= 0 // Local path
                )
                  return; // Leave it alone

                // A "bare" identifier
                const match = BareIdentifierFormat.exec(path.node.source.value);
                const packageName = match[1];
                const file = match[2] || "";

                let version = dependencies[packageName] || PACKAGE_VERSIONS[packageName];

                if (!version) {
                  console.warn(
                    'Missing version for package "%s" in dependencies; falling back to "latest"',
                    packageName
                  );

                  version = 'latest';
                }


                path.node.source.value = \`https://unpkg.com/\${packageName}@\${version}\${file}?module\`;
              }
            }
          };
        }

        Babel.registerPlugin('unpkg', unpkg);

        const code = Babel.transform(decodeURI(\`${encodeURI(
          codeMap.javascript || ''
        )}\`), {
          plugins: ['unpkg'],
          presets: ${JSON.stringify(presets)}
        }).code;
        const script = document.createElement("script");
        script.type = "module";
        script.innerHTML = code;
        document.body.appendChild(script);
      </script>
    `;
  } else {
    return `
      <script>
        ${codeMap.javascript || ''}
      </script>
    `;
  }
}

export function applyCentering(snippet) {
  const { markup } = snippet;

  const wrapperStyle = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 16px);
  `;

  return {
    ...snippet,
    markup: `<div style="${wrapperStyle}">${markup}</div>`,
  };
}

export function wrapForReact(snippet, centered) {
  let code = snippet.javascript;
  const renderExpression = /render\((.*)\)/s;

  Object.keys(DEPENDENCIES).forEach((depName) => {
    code = code.replace(depName, DEPENDENCIES[depName]);
  });

  try {
    const [, renderedContent] = code.match(renderExpression);

    const renderlessCode = code.replace(renderExpression, '');

    // For some reason, the JSX gets transpiled to use `h()` instead
    // of `createElement`. I'll create an alias for it, because I
    // don't care enough to solve that problem right now.

    const wrappedCode = `
    import React, { createElement } from 'https://cdn.skypack.dev/react@17.0.2';
    import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.2';

    import styled, { createGlobalStyle } from 'https://cdn.skypack.dev/styled-components@5.3.5';

    ${renderlessCode}

    // Wait a frame so that 'window' reads as the correct width,
    // inside the React app
    window.setTimeout(() => {
      ReactDOM.render(${renderedContent}, document.querySelector('#app'));
    }, 0)
    `.trim();

    let wrapperStyle = '';
    if (centered) {
      wrapperStyle = `
        display: grid;
        place-content: center;
        height: calc(100vh - 16px);
      `;
    }

    return {
      ...snippet,
      javascript: wrappedCode,
      markup: `<div id="app" style="${wrapperStyle}"></div>`,
    };
  } catch (err) {
    // Since the code is user-editable, it's entirely possible
    // that they'll break it somehow. ignore errors and perform
    // the snippet as-written. This means nothing will render,
    // but nothing will explode.
    return snippet;
  }
}

export default constructSnippet;
