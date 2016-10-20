var Builder = require('jspm').Builder;
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
require('./object.assign.js');

function build(dest, options){
    var builder = new Builder();
    return builder.loadConfig('jspm.config.js')
    .then(function(){
        return builder.buildStatic(
            'src/main.js',
            'builds/' + dest + '/main.js',
            Object.assign({
                minify: true,
                sourceMaps: false
            }, (options || {}))
        );
    });
}

function copyassetsto(dest, target){
    return gulp.src([
        '.src/assets/common/**',
        '.src/assets/' + (target||'dev') + '/**'
    ]).pipe(gulp.dest(dest));
}

function cssfromsass(dest, options){
    var o = Object.assign({
        minify: true,
        sourceMaps:false
    }, (options || {}));
    var g = gulp.src(['./src/main.scss'])
    .pipe(sass());
    
    if(!!o.minify) g = g.pipe(cleancss());
    
    return g.pipe(gulp.dest('builds/'+ dest));
    
}

function copysystemjs(dest){
    return gulp.src([
        'jspm_packages/system.js',
        'jspm.config.js'
    ]).pipe(gulp.dest('builds/'+ dest));
}
gulp.task('dev:assets',[],function(){ return copyassetsto('dev'); });
gulp.task('dev:sass',[], function(){ return cssfromsass('dev', {minify:false});});
gulp.task('dev:install-systemjs',[],function(){ return copysystemjs('dev');});
gulp.task('dev:code',['dev:install-systemjs'], function(){ return build('dev', {minify: false, sourceMaps:true}); });

gulp.task('dev', ['dev:assets','dev:code', 'dev:sass']);

gulp.task('watch',['dev'],function () {
    gulp.watch(['./assets/**','./dev-assets/**'],['dev:assets']);
    gulp.watch(['./src/**/*.js', './src/**/*.tag'],['dev:code']);
    gulp.watch(['./src/**/*.scss'],['dev:sass']);
});


gulp.task('dist:assets',[],function(){ return copyassetsto('dist', 'dist');});
gulp.task('dist:install-systemjs',[],function(){ return copysystemjs('dist');});
gulp.task('dist:code',['dist:install-systemjs'], function(){ return build('dist'); });
gulp.task('dist:sass',[], function(){ return cssfromsass('dist');});
gulp.task('dist', ['dist:assets','dist:code', 'dist:sass'] );
