import { Express } from 'express';

import authRouter from './auth.router';
import config from '../../config';
import { Routes } from '../../types';

const routes: Routes = { auth: authRouter };

const setUpRoutes = (server: Express): void =>
  Object.entries(routes).forEach(({ 0: route, 1: router }) =>
    server.use(`/api/${config.apiVersion}/${route}`, router)
  );

export default setUpRoutes;
