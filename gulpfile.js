var Builder = require('jspm').Builder;
var gulp = require('gulp');
require('./object.assign.js');

function build(dest, options){
    var builder = new Builder();
    return builder.loadConfig('jspm.config.js')
    .then(function(){
        return builder.buildStatic(
            'src/main.js',
            dest + '/main.built.js',
            Object.assign({
                minify: true,
                sourceMaps: false
            }, (options || {}))
        );
    });
}

function copyassetsto(dest){
    return gulp.src([
        './assets/**'
    ]).pipe(gulp.dest(dest));
}

gulp.task('dev:assets',[],function(){ return copyassetsto('dev'); });
gulp.task('dev:code',[], function(){ return build('./dev', {minify: false, sourceMaps:true}); });

gulp.task('dev', ['dev:assets','dev:code']);

gulp.task('watch',['dev'],function () {
    gulp.watch(['./assets/**'],['dev:assets']);
    gulp.watch(['./src/**'],['dev:code']);
});


gulp.task('dist:assets',[],function(){ return copyassetsto('dist');});
gulp.task('dist:code',[], function(){ return build('./dist'); })
gulp.task('dist', ['dist:assets','dist:code'] );