var gulp = require('gulp'), 
    imagemin = require('gulp-imagemin'); 

//Comprimir imagem
gulp.task('build-img',function(){ 
    gulp.src('src/img/**/*')
        .pipe(imagemin()) 
        .pipe(gulp.dest('img')); 
});

