/* For Setting Up HTML-specific Details */
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="zh-tw">
        <Head>
          {/* For IE11 */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js" /> */}

          {/* NProgress for Loaders, Spinners, Progress Bars */}
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          /> */}
          {/* <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossOrigin="anonymous"
          /> */}

          <link
            href="/static/img/pavicon.png"
            rel="shortcut icon"
            type="image/x-icon"
          />

          {/* Main CSS before rest of deferred css is loaded */}
          {/* <link rel="stylesheet" href="/static/css/startup-min.css" /> */}

          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          /> */}

          {/* Activates when JS is off - for Accessibility (無障礙),
              Basically attaches accessibility.css in non-JS environemtns. */}
          {/* <noscript>
            <link rel="stylesheet" href="/static/css/accessibility.css" />
          </noscript> */}

          {/* JQUERY */}
          {/* <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossOrigin="anonymous"
          />

          {/* Slick */}
          {/* <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          /> */}

          {/* <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/assets/slick-theme.min.css"
          /> */}

          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <body>
          <div className="app">
            <Main />
            <NextScript />

            {/* Extra custom JS */}

            {/* <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          /> */}
            {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossOrigin="anonymous"
          />

          <script src="/static/js/bootstrap/bootstrap.min.js" /> */}
          </div>
        </body>
      </html>
    );
  }
}
