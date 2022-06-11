import gulp from 'gulp';
import { paths } from '../config/path.js';
import gulpPlumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

const { src, dest } = gulp;

export const otfToTtf = () => {
	return src(paths.src.fonts, {})
		.pipe(gulpPlumber(
			notify.onError({
				title: "FONTS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest(paths.dist.fonts))
};

export const ttfToWoff = () => {
	return src(paths.src.fonts, {})
		.pipe(gulpPlumber(
			notify.onError({
				title: "FONTS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(fonter({
			formats: ['woff']
		}))
		.pipe(dest(paths.dist.fonts))
		.pipe(src(paths.src.fonts))
		.pipe(ttf2woff2())
		.pipe(dest(paths.dist.fonts))
		.pipe(src(paths.src.fonts))
		.pipe(dest(paths.dist.fonts));
};
