# Yume Ga Arukara

### Because I have Dreams

#### Running the Application

When running locally, the app runs on [http://localhost:3000](http://localhost:3000).

| CLI Command       | Description                                             |
|-------------------|---------------------------------------------------------|
|`yarn dev`         | Runs development mode. (source maps, etc...). The app will hit the GraphQL server defined in the `.env` file.            |
|`yarn start`       | Runs production mode. (minified, obfuscated, cache busted, etc...). If deploying to a honeycomb, this will configure the application to run behind an API gateway (Zuul). The app will hit the GraphQL server behind Lux Gateway proxy. |
|`yarn lint`        | Runs code lint with eslint.                             |

