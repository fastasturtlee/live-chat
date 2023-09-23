import { ILogger } from '@shared/logger';
import { Config } from '@shared/config';
import mongoose from 'mongoose';

export class DB {
  constructor() {}

  async connect(config: Config, logger: ILogger): Promise<void> {
    await mongoose.connect(config.mongoUri);
    mongoose.connection.on('error', (err: Error) => {
      logger.error('error occured during database connectivity: ', err);
    });

    logger.info('Database connection successful.');
  }
}
