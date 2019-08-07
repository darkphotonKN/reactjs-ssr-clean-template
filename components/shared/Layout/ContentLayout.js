import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import Footer from '../Footer/Footer';
import HeaderBar from '../Header/HeaderBar';
import Breadcrumbs from '../MainContent/Breadcrumbs';
import RightSidebar from '../Nav/RightSidebar';

// Adding Load Bar + Spinner when Routing (removing MAY increase speed of loading)
Router.onRouteChangeStart = (url) => {
  // Start NProgress loaders on route change
  NProgress.start();
};

// check when route change is complete, then end NProgress
Router.onRouteChangeComplete = () => NProgress.done();
// also check for errors and stop the progress bar if there is one
Router.onRouteChangeError = () => NProgress.done();

class ContentLayout extends Component {
  componentDidMount() {
    // window.addEventListener('scroll', this.scrollFunction);

    window.addEventListener('scroll', this.scrollFunction);

    // loading deferred resources
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'preload';
    stylesheet.as = 'style';
    stylesheet.href = '/static/css/main.css';

    const jQueryScript = document.createElement('script');
    jQueryScript.src = 'https://code.jquery.com/jquery-3.3.1.min.js';

    const slickStylesheet = document.createElement('link');
    slickStylesheet.rel = 'stylesheet';
    slickStylesheet.type = 'text/css';
    slickStylesheet.href =
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css';

    document.head.appendChild(stylesheet);
    document.head.appendChild(slickStylesheet);
    document.body.appendChild(jQueryScript);

    const mainStylesheet = document.createElement('link');
    mainStylesheet.rel = 'stylesheet';
    mainStylesheet.href = '/static/css/main.css';
    document.head.appendChild(mainStylesheet);
  }

  render() {
    const { bcLinks } = this.props;

    return (
      <React.Fragment>
        <Head>
          {/* Dynamic version placed in ContentLayout for now */}
          <title>
            寶二水庫
            {bcLinks
              ? bcLinks.map((link) => ` / ${link.name}`).join('') // remove the unwanted comma with .join('')
              : null}
          </title>
          <link
            href="/static/img/favicon.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
        </Head>

        <div id="page-wrap">
          {/* Header Component */}
          <HeaderBar />

          <div className="main-content" id="main-content">
            <Breadcrumbs bcLinks={bcLinks} />
            {this.props.children}
          </div>

          {/* Footer Component */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default ContentLayout;
