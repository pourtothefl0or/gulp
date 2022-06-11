import del from 'del';
import { paths } from '../config/path.js';

export const clean = () => {
  return del(paths.clean);
};
