import gulp from 'gulp';
import { paths } from '../config/path.js';
const { src, dest } = gulp;

export const favicon = () => {
  return src(paths.src.favicon).pipe(dest(paths.dist.favicon));
};
