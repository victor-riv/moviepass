import express, { Express, Router } from 'express';

import config from '../../config';

const router = express.Router();

router.route(`/`);

interface Route {
  [route: string]: Router;
}

const routes: Route = { default: router };

const setUpRoutes = (server: Express): void =>
  Object.entries(routes).forEach(({ 0: route, 1: router }) =>
    server.use(`/api/${config.apiVersion}/${route}`, router)
  );

export default setUpRoutes;
