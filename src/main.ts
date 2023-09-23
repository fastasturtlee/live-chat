import 'reflect-metadata';
import { Container } from './container.js';
import { Server } from './server.js';

export default async function main() {
  const container = Container.Create();
  const server = container.resolve(Server);

  await server.start();
}
