const { EnvironmentPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForJavaScript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "defaults",
          },
        ],
        "@babel/preset-react",
      ],
    },
  },
};
const ruleForCss = {
  test: /\.css$/,
  include: [
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "node_modules/slick-carousel/slick"),
  ],

  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          config: path.resolve(__dirname, "postcss.config.js"),
        },
      },
    },
  ],
};
const ruleForSass = {
  test: /\.scss$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};
const ruleForFiles = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: "file-loader",
  options: {
    name: "[path][name].[ext]",
  },
};

const rules = [ruleForJavaScript, ruleForCss, ruleForSass, ruleForFiles];

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";
  return {
    entry: "./src/assests/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProduction ? "[name].[contenthash].js" : "bundle.js",
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "src/assests/index.html" }),
      new CopyWebpackPlugin({
        patterns: [{ from: "locales/**/*", to: "locales" }],
      }),
      new EnvironmentPlugin({
        FIREBASE_API_KEY: "AIzaSyAy9rqllJ0hJdv9fUQZbHOSgxJNhV5IbWY",
        FIREBASE_AUTH_DOMAIN: "mi-portafolio-51d71.firebaseapp.com",
        FIREBASE_PROJECT_ID: "mi-portafolio-51d71",
        FIREBASE_STORAGE_BUCKET: "mi-portafolio-51d71.appspot.com",
        FIREBASE_MESSAGING_SENDER_ID: "372195531559",
        FIREBASE_APP_ID: "1:372195531559:web:12b6de6f1ce37c6197a702",
        FIREBASE_MEASUREMENT_ID: "G-QQGSRV059R",
      }),
    ],
    module: {
      rules,
    },
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        buffer: require.resolve("buffer/"),
        stream: require.resolve("stream-browserify"),
      },
      alias: {
        "react-slick$": path.resolve(__dirname, "node_modules/react-slick"),
        "slick-carousel$": path.resolve(
          __dirname,
          "node_modules/slick-carousel"
        ),
      },
    },
    devtool: isProduction ? false : "eval-source-map",
    devServer: {
      static: [
        {
          directory: path.join(__dirname, "build"),
        },
        {
          directory: path.join(__dirname, "public"),
        },
      ],
      historyApiFallback: true,
      open: true,
      compress: true,
      port: 9000,
    },
  };
};
