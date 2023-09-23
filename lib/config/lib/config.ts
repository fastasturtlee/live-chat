import 'dotenv/config';

export class Config {
  port: number;
  mongoUri: string;
  constructor() {
    this.port = parseInt(process.env.Port || '9000');
    this.mongoUri = process.env.MONGO_URI || '';
  }
}
