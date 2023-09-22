import express from 'express';
import cors from 'cors';
import { config } from './config.js';

export default async function main() {
  const app = express();
  app.use(cors());

  app.listen(config.port);
  console.log('listening to port', config.port);
}
