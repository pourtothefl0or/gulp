import gulp from 'gulp';
import { clean } from './gulp/tasks/clean.js';
import { otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js';
import { html } from './gulp/tasks/html.js';
import { sprites } from './gulp/tasks/sprites.js';
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { server } from './gulp/tasks/server.js';
import { styles } from './gulp/tasks/styles.js';
import { favicon } from './gulp/tasks/favicon.js';
import { watcher } from './gulp/tasks/watcher.js';

const { series, task, parallel } = gulp;

const mainTask = parallel(html, otfToTtf, ttfToWoff, styles, js, sprites, images, favicon);

const dev = series(clean, mainTask, parallel(watcher, server));
const build = series(clean, mainTask);

task('build', build);
task('default', dev);
