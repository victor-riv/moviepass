import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

import { Express } from 'express';

const middleware = {
  cors: cors(),
  json: express.json(),
  morgan: morgan('dev')
};

const setUpMiddleware = (server: Express): void =>
  Object.values(middleware).forEach(ware => server.use(ware));

export default setUpMiddleware;
