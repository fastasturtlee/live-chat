import { container } from 'tsyringe';
import { Config } from '@shared/config';
import { DB } from '@shared/datamodels';
import { ILogger, ConsoleLogger } from '@shared/logger';

export class Container {
  public static Create() {
    return container
      .registerSingleton(Config)
      .registerSingleton(DB)
      .register<ILogger>('logger', { useClass: ConsoleLogger });
  }
}
