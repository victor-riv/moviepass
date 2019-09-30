import { Config } from '../types';

const env = process.env.NODE_ENV || 'dev';

const baseConfig: Config = {
  env,
  isDev: env === 'dev',
  isTest: env === 'test',
  port: 8080,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '1d'
  },
  dbUrl: 'mongodb://mongo:27017/web',
  apiVersion: 'v1'
};

export default baseConfig;
