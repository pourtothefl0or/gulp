import gulp from 'gulp';
import { paths } from '../config/path.js';
import { html } from './html.js';
import { styles } from './styles.js';
import { js } from './js.js';
import { images } from './images.js';
import { favicon } from './favicon.js';
import { sprites } from './sprites.js';
import { otfToTtf, ttfToWoff } from './fonts.js';

const { watch } = gulp;

export const watcher = () => {
  watch(paths.watch.html, html);
  watch(paths.watch.styles, styles);
  watch(paths.watch.js, js);
  watch(paths.watch.img, images);
  watch(paths.watch.favicon, favicon);
  watch(paths.watch.sprites, sprites);
  watch(paths.watch.fonts, otfToTtf, ttfToWoff);
};
