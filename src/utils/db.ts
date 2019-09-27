import mongoose from 'mongoose';
import config from '../config';

export const connectToDb = (
  url = config.dbUrl,
  opts = {}
): Promise<typeof mongoose> =>
  mongoose.connect(url, { ...opts, useNewUrlParser: true });
