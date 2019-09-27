import config from './base.config';
import { Config } from '../types';

const test: Config = {
  ...config,
  secrets: { ...config.secrets, jwt: process.env.JWT_TEST_SECRET }
};

export default test;
