// NEXTJS CONFIG

module.exports = {
  env: {
    API_ENDPOINT: 'http://125.227.250.187:54392/baoer',
    API: 'http://125.227.250.187:2330',
    GOOGLE_MAP_API_KEY: 'AIzaSyCzqzaY-k_E5aI2GgroGRafAX-2J4bYGXo'
  }
};

// /*
// module.exports = {
//   webpack(config, { dev }) {
//     config.devServer = config.devServer || {};
//     config.devServer.proxy = {
//       '/api': {
//         target: 'http://139.180.203.15/osnnp/common/api/',
//         changeOrigin: true,
//         secure: false,
//         onProxyReq(request, req, res) {
//           request.setHeader(
//             'origin',
//             'http://139.180.203.15/osnnp/common/api/'
//           );
//         }
//         //pathRewrite: { '^/api': '/api' }
//       }
//     };

//     //config.devServer.proxy = 'http://localhost:7000/api'

//     return config;
//   }
// };
// */

// const withPlugins = require('next-compose-plugins');

// const withTypescript = require('@zeit/next-typescript');
// const withCSS = require('@zeit/next-css');
// const withSass = require('@zeit/next-sass');
// const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
// const nextRuntimeDotenv = require('next-runtime-dotenv');

// const withConfig = nextRuntimeDotenv({
//   public: ['API_URL']
// });

// module.exports = withPlugins(
//   [[withTypescript], [withCSS], [withSass], [withBundleAnalyzer], [withConfig]],
//   {
//     analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
//     analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
//     bundleAnalyzerConfig: {
//       server: {
//         analyzerMode: 'static',
//         reportFilename: '../bundles/server.html'
//       },
//       browser: {
//         analyzerMode: 'static',
//         reportFilename: '../bundles/client.html'
//       }
//     }
//   }
// );
