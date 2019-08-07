import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import Footer from '../Footer/Footer';
import HeaderBar from '../Header/HeaderBar';

import Banner from '../Homepage/Banner';
import Typography from '../Homepage/Typography';
import Graph from '../Homepage/Graph';
import LatestNews from '../Homepage/LatestNews';
import Maps from '../Homepage/Maps';

// Adding Load Bar + Spinner when Routing (removing MAY increase speed of loading)
Router.onRouteChangeStart = (url) => {
  console.log('Routed to:', url); // checking path routed to
  // Start NProgress loaders on route change
  NProgress.start();
};

// check when route change is complete, then end NProgress
Router.onRouteChangeComplete = () => NProgress.done();
// also check for errors and stop the progress bar if there is one
Router.onRouteChangeError = () => NProgress.done();

class Layout extends Component {
  state = {
    isShow: false,
    offsetTop: 700
  };

  async componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
    // loading stylesheet
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction);
  }

  scrollFunction = () => {
    if (
      document.body.scrollTop > this.state.offsetTop ||
      document.documentElement.scrollTop > this.state.offsetTop
    ) {
      this.setState({
        isShow: true
      });
    } else {
      this.setState({
        isShow: false
      });
    }
  };

  render() {
    const classShow = this.state.isShow ? 'show' : '';

    return (
      <React.Fragment>
        <Head>
          {/* Dynamic version placed in ContentLayout for now */}
          <title>寶二水庫</title>
          <link
            href="/static/img/favicon.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
        </Head>

        <div id="page-wrap" className="homepage">
          <HeaderBar />
          {/* Header Component */}

          {/* <RightSidebar /> */}

          {this.props.children}

          <Banner />

          <Typography />

          <Graph />

          <Maps />

          {/* Footer Component */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
