import gulp from 'gulp';
import { paths } from '../config/path.js';
import browserSync from 'browser-sync';
import fileinclude from 'gulp-file-include';

const { src, dest } = gulp;

export const html = () => {
  return src([paths.src.html, '!src/include/**/*.html'])
    .pipe(fileinclude())
    .pipe(dest(paths.distFolder))
    .pipe(browserSync.stream());
};
