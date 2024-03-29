// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: [
      's3.eu-west-1.wasabisys.com',
      'mavrica.s3.eu-west-1.wasabisys.com',
    ],
  },
};

const isProd = process.env['NODE_ENV'] === 'production';

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore
  dryRun:
    process.env.GITHUB_WORKFLOW === 'e2e tests' ||
    process.env.NODE_ENV !== 'production',
  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = isProd
  ? withNx(withSentryConfig(nextConfig, sentryWebpackPluginOptions))
  : withNx(nextConfig);
