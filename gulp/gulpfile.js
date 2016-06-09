

const   child       = require('child_process'),
        browserSync = require('browser-sync').create(),
        gulp        = require('gulp'),
        gutil       = require('gulp-util'),

        siteRoot    = '_site';

// TASK JEKYLL

gulp.task('jekyll', () => {

	const jekyll = child.spawn('jekyll', ['build',
		'--watch',
		'--incremental',
		'--config',
    '_config.yml,_config-dev.yml'
   ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

});

// TASK SERVE

gulp.task('serve', () => {

  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

});

// TASK DEFAULT

gulp.task('default', ['jekyll', 'serve']);
