var gulp = require('gulp')
var fontmin = require('gulp-fontmin')
function minifyFont (text, cb) {
  gulp
    .src('./src/assets/font/source/*.ttf')
    .pipe(fontmin({
      text: text,
      onlyChinese:true
    }))
    .pipe(gulp.dest('./src/assets/font/'))
    .on('end', cb)
}

gulp.task('fontmin', function (cb) {
  var buffers = []

  gulp
    .src(['./src/**/*.js','./src/**/*.less'])
    .on('data', function (file) {
      console.log('find text in:',file.history[0])
      buffers.push(file.contents)
    })
    .on('end', function () {
      var text = Buffer.concat(buffers).toString('utf-8')
      // console.log(text)
      minifyFont(text, cb)
    })
})