import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import http from 'http';
import mime from 'mime-types';
import { config as injectDotEnvVariables } from 'dotenv';

injectDotEnvVariables();

let SERVER;

const app = express();
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

app.use(
  express.static('dist/public', {
    maxAge: '7d',
    setHeaders: (res, path) => {
      if (mime.lookup(path) === 'text/html') {
        res.setHeader('Cache-Control', 'public, max-age=0');
      }
    },
  })
);

app.get('/health', (req, res) => res.status(200).send());

export const start = (port = 3000) => {
  if (SERVER) {
    return Promise.resolve(SERVER);
  }

  return new Promise(resolve => {
    SERVER = http.createServer(app);
    SERVER.listen(port, () => {
      console.info(`Server started on port ${port}...`);
      resolve(SERVER);
    });
  });
};

export const stop = () => {
  if (SERVER) {
    SERVER.close();
    SERVER = undefined;
  }
};
