const gulp = require ('gulp');
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
/* 
-- TOP LEVEL FUNCTIONS --

gulp.task -- define tasks
gulp.src - point to files to use
gulp.dest = points to folder
gulp.watch - watch files and folders for changes
*/


// logs message

gulp.task('default', async function(){

  
        console.log("gulp is running");
    
}); 


//copy all HTML files

gulp.task('copyHtml', async function(){
    gulp.src('src/*html')
    .pipe(gulp.dest('dist'));
});

//optimize images
gulp.task('imageMin', async function(){
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});


//minify JS
gulp.task('minify', async function (){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

//SASS

// gulp.task('sass')
// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
//   }
  
//   exports.default = defaultTask;