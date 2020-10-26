# Yume Ga Arukara

### Because I have Dreams

#### Running the Application

When running locally, the app runs on [http://localhost:3000](http://localhost:3000).

| CLI Command       | Description                                             |
|-------------------|---------------------------------------------------------|
|`yarn dev`         | Runs development mode. (source maps, etc...). |
|`yarn start`       | Runs production mode. (minified, obfuscated, etc |
|`yarn lint`        | Runs code lint with eslint.                             |
|`yarn build:stats` | Runs [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) on [http://127.0.0.1:8888](http://127.0.0.1:8888), which provides an interactive treemap showing how much bundle space is taken by dependencies. |

#### Running the Tests

Unit tests are currently written with Mocha, Chai, and Enzyme. All tests should pass prior to opening a pull request.

| CLI Command           | Description                                                            |
|-----------------------|------------------------------------------------------------------------|
|`yarn test`                           | Run all tests                                           |
|`yarn test:unit`                      | Run unit tests only                                     |
|`yarn test:unit:client`               | Run client unit tests (watch)                           |
|`yarn test:unit:client:nowatch`       | Run client unit tests (no watch)                        |
|`yarn test:unit:server`               | Run server unit tests (watch)                           |
|`yarn test:unit:server:nowatch`       | Run server unit tests (no watch)                        |
