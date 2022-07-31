import { build } from './build.js';
import { Run } from './enums.js';
import { init } from './init.js';
import { cleanUp } from './cleanup.js';

const scriptToRun = process.argv[2];
console.log(process.argv);
switch (scriptToRun) {
  case Run.Init:
    init();
    // cleanUp();
    break;
  case Run.Build:
    build();
    // cleanUp();
    break;
  case Run.Dev:
    init();
    build();
    // cleanUp();
    break;
}
