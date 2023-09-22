import main from './src/main.js';

function handle(error: Error): void {
  console.error(error);
  console.log(error.cause);
  if (error.cause instanceof Error) {
    console.error(' caused by');
    handle(error.cause);
  }
}

main().catch(handle);
