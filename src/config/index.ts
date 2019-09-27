import dev from './dev.config';
import prod from './prod.config';
import test from './test.config';
import { Configs } from '../types';

const envConfigs: Configs = { dev, prod, test };

export default envConfigs[process.env.NODE_ENV || 'dev'];
