var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync').create();
var browserify =  require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var typescript = require('gulp-typescript');
var replace = require('gulp-replace');
var react_tools = require('react-tools');
var watchify = require('watchify');

gulp.task('live-server', function(){
	var server = new LiveServer('server/main.js');
	server.start();
});

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('compile', function(){
	console.log("Compiling TS.......");	
	
	var tsResult = tsProject.src() 
        .pipe(typescript(tsProject));

	return tsResult.pipe(gulp.dest('./'));
});

gulp.task('watch-ts', ['compile'], function() {
    gulp.watch('app/**/*.ts*', ['compile']); //, 'server/**/*.ts'
	gulp.watch('server/**/*.ts', ['compile']);
});

gulp.task('watch-css', ['copy-css'], function(){
	gulp.watch('app/content/css/*.less',['copy-css']);
});

gulp.task('copy-css', function(){
	console.log("Copying Less");
	
	gulp.src(['app/content/css/*.less'])
	.pipe(gulp.dest('./.tmp'));
	
	gulp.src(['bower_components/skeleton/css/*.css'])
		.pipe(gulp.dest('./.tmp'));
});

gulp.task('bundle', function(){
	var b = browserify({
		entries: 'app/main.js',
		debug:true,
		plugin: [watchify]
	});
	
	b.on('update', bundle);
	bundle();

	function bundle() {
		b.bundle()
			.pipe(source('app.js'))
			.pipe(gulp.dest('./.tmp'));
	}	
});

gulp.task('serve', ['watch-ts', 'watch-css', 'bundle', 'live-server'], function(){
	browserSync.init(null, {
		proxy: 'http://localhost:7777',
		port:9001,
		files: ['./.tmp/*.js', './.tmp/*.less']
	});
});

