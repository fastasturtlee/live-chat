import { ILogger } from '@shared/logger';
import {DB} from '@shared/datamodels';
import { inject, injectable } from 'tsyringe';
import express from 'express';
import cors from 'cors';
import { Config } from '@shared/config';

@injectable()
export class Server {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject(Config) private config: Config,
    @inject(DB) private db : DB
  ) {}

  async start(): Promise<void> {
    const app = express();
    app.use(cors());

    await this.db.connect(this.config,this.logger);

    app.listen(this.config.port);
    this.logger.info('listening to port', this.config.port);
  }
}
