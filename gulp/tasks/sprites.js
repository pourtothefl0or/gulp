import gulp from 'gulp';
import { paths } from '../config/path.js';
import gulpPlumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svgSprite from "gulp-svg-sprite";

const { src, dest } = gulp;

export const sprites = () => {
	return src(paths.src.sprites, {})
		.pipe(gulpPlumber(
			notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: `../sprite.svg`,
					example: false,
				}
			},
		}))
		.pipe(dest(paths.dist.img));
};
