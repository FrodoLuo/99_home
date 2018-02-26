const gulp = require('gulp')
const fontmin = require('gulp-fontmin')
const imagemin = require('gulp-imagemin');
const Qiniu = require('gulp-qiniu-utils');
const replace = require('gulp-replace');
const runSequence = require('run-sequence');
const del = require('del');

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
/*
  压缩字体
 */
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
//处理dist目录下的
/*
 压缩图片
 */
gulp.task('imagemin', function() {
  return gulp.src(['./dist/static/*.{png,jpg,jpeg,gif}'])
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }]
    }))
    .pipe(gulp.dest('./dist/static/'))
});

/*
 上传静态文件到七牛云,并替换资源路径
 */
var qiniuOptions = {
  ak: 'jg-wDvVLkX2l-91BuTRphTnZSvwHsJYD69YZt-CB',
  sk: 'oZl1e1kaL6pdx7liFKCDCcbvzRc5NrpxRf8utYGt',
  uploadDir: './static/', //本地需上传的目录
  bucket: '99_web', //七牛空间名
  prefix: '99_web/', //上传时添加的前缀，可省略
  zone: 'Zone_z1', //空间对应存储区域（华东：z0，华北：z1，华南：z2，北美：na0）
  url: 'http://images.redream.cn', //域名
  remoteDir: '99_web', //七牛空间目录（前缀），如果和下面三个相同，下面三个可省略
  prefetchDir: '99_web',//需预取目录
  removeDir: '99_web',//需删除目录
  refreshDir: '99_web'//需刷新目录
}

gulp.task('upload', function (cb) {
  var qiniu = new Qiniu(qiniuOptions)
  return  qiniu.remove()
    .then(r => qiniu.upload()) //根据自己的需求来调用相应的方法
    .then(r => qiniu.refresh())
    .then(r => qiniu.prefetch())
    .then(replaceAssets)
})

function replaceAssets(){
  return  gulp.src(['./build/*.*'])
    .pipe(replace(/(\.\/)?img\/.+\.(jpg|png|gif)/g, (match, p1, offset, string)=>{
      // console.log(match, p1, offset, string)
      if(match.substring(0,2)==='./'){
        match=match.substring(2)
        console.log(match)
      }
      return 'http://images.redream.cn/test-gulp/build/'+match
    }))
    .pipe(gulp.dest('./build'))
}