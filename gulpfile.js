var gulp        = require('gulp'), 
    sass        = require('gulp-sass'), 
    browserSync = require('browser-sync'),
    mincss      = require('gulp-minify-css'),
    minjs       = require('gulp-uglify'),
    minhtml     = require('gulp-minify-html');

gulp.task('sass', function(){ 
    return gulp.src('app/sass/**/*.scss') 
        .pipe(sass()) 
        .pipe(gulp.dest('app/css')) 
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']); 
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/*.js', browserSync.reload); 
});

gulp.task('mincss', function() {
    return gulp.src('app/css/main.css')
        .pipe(mincss())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('minjs', function() {
    return gulp.src('app/js/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('minhtml', function() {
    return gulp.src('app/index.html')
        .pipe(minhtml())
        .pipe(gulp.dest('dist'))
});

gulp.task('copy-img', function() {
    return gulp.src('app/img/*.*')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('copy-fonts', function() {
    return gulp.src('app/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('mincopyall', ['mincss', 'minhtml', 'copy-fonts']);