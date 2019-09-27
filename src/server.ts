import express from 'express';

import { connectToDb } from './utils';
import config from './config';
import setUpMiddleware from './middleware';
import setUpRoutes from './api/routes';

const app = express();

// Auto Register all middleware
setUpMiddleware(app);

// Auto Register all routes
setUpRoutes(app);

export const start = async (): Promise<void> => {
  try {
    await connectToDb();

    app.listen(config.port, () => {
      console.log(
        `Connect with API at http://localhost:${config.port}/api/v1/`
      );
    });
  } catch (e) {
    console.error(e);
  }
};

export default app;
