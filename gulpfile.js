var Builder = require('jspm').Builder;
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
require('./object.assign.js');

function build(app, dest, options){
    var builder = new Builder();
    return builder.loadConfig('jspm.config.js')
    .then(function(){
        return builder.buildStatic(
            'src/'+app+'.js',
            'builds/' + dest + '/'+app+'.js',
            Object.assign({
                minify: true,
                sourceMaps: false
            }, (options || {}))
        );
    });
}

function copyassetsto(dest, target){
    return gulp.src([
        'src/assets/common/**',
        'src/assets/' + (target||'dev') + '/**'
    ]).pipe(gulp.dest('builds/'+ dest));
}

function cssfromsass(app, dest, options){
    var o = Object.assign({
        minify: true,
        sourceMaps:false
    }, (options || {}));
    var g = gulp.src(['./src/'+app+'.scss'])
    .pipe(sass());
    
    if(!!o.minify) g = g.pipe(cleancss());
    
    return g.pipe(gulp.dest('builds/'+ dest));
    
}

gulp.task('dev:assets',[],function(){ return copyassetsto('dev'); });
gulp.task('dev:main:sass',[], function(){ return cssfromsass('main','dev');});
gulp.task('dev:main:code',[], function(){ return build('main','dev', {minify: false, sourceMaps:true}); });
gulp.task('dev:post:sass',[], function(){ return cssfromsass('post','dev');});
gulp.task('dev:post:code',[], function(){ return build('post','dev', {minify: false, sourceMaps:true}); });

gulp.task('dev', ['dev:assets','dev:main:code','dev:main:sass','dev:post:code','dev:post:sass']);

gulp.task('watch',['dev'],function () {
    gulp.watch(['./src/assets/common/**','./src/assets/dev/**'],['dev:assets']);
    gulp.watch(['./src/**/*.js', './src/**/*.tag'],['dev:main:code','dev:post:code']);
    gulp.watch(['./src/**/*.scss'],['dev:main:sass','dev:post:sass']);
});


gulp.task('dist:assets',[],function(){ return copyassetsto('dist', 'dist');});
gulp.task('dist:main:sass',[], function(){ return cssfromsass('main','dist');});
gulp.task('dist:main:code',[], function(){ return build('main','dist', {minify: false, sourceMaps:true}); });
gulp.task('dist:post:sass',[], function(){ return cssfromsass('post','dist');});
gulp.task('dist:post:code',[], function(){ return build('post','dist', {minify: false, sourceMaps:true}); });
gulp.task('dist', ['dist:assets','dist:main:code','dist:main:sass','dist:post:code','dist:post:sass']);