import minimist from 'minimist';
import { start } from './server';

const argv = minimist(process.argv.slice(2));
const PORT = argv.port || process.env.PORT || 3000;

start(PORT);
