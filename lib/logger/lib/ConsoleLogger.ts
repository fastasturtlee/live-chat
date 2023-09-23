import { ILogger } from './ILogger.js';

export class ConsoleLogger implements ILogger {
  info(...args: unknown[]): void {
    console.log(...args);
  }

  debug(...args: unknown[]): void {
    console.debug(...args);
  }

  error(...args: unknown[]): void {
    console.error(...args);
  }
}
