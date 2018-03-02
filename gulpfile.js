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
    .pipe(imagemin(
      [
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
      ]
    ))
    .pipe(gulp.dest('./dist/static/'))
});

/*
 上传静态文件到七牛云,并替换资源路径
 */
var qiniuOptions = {
  ak: 'jg-wDvVLkX2l-91BuTRphTnZSvwHsJYD69YZt-CB',
  sk: 'oZl1e1kaL6pdx7liFKCDCcbvzRc5NrpxRf8utYGt',
  bucket: '99-web', //七牛空间名
  zone: 'Zone_z1', //空间对应存储区域（华东：z0，华北：z1，华南：z2，北美：na0）
  upload: {
    dir: './dist/',//上传本地目录
    prefix: '99-web/',//上传时添加的前缀，可省略
    except: /\.(html)$/ //上传时不上传文件的正则匹配
  },
  remote: {
    url: 'http://p4wvbw0in.bkt.clouddn.com',//七牛空间域名
    prefix: {
      default: '99-web/',//七牛空间默认前缀，如果下面三个相同可省略
      remove: '99-web/',//七牛空间删除前缀
      prefetch: '99-web/',//七牛空间预取前缀
      refresh: '99-web/'//七牛空间刷新前缀
    }
  }
}

gulp.task('upload', function (cb) {
  var qiniu = new Qiniu(qiniuOptions)
  replaceAssets()
  return  qiniu.remove()
    .then(r => qiniu.upload().then()) //根据自己的需求来调用相应的方法
    .then(r => qiniu.refresh())
    .then(r => qiniu.prefetch())
    .then()
})

function replaceAssets(){
  let base='http://p4wvbw0in.bkt.clouddn.com/99-web/dist'
  //e.exports=n.p+"static/driven.be588a44.svg"
  // let reg=/(\/static\/.+\.(jpg|png|gif|svg|mp4|ttf|eot|woff)|n\.p\+"static\/.+\.(jpg|png|gif|svg|mp4|ttf|eot|woff)")/g
  let regJs=/n\.p\+"static\/.+?\.(jpg|png|gif|svg|mp4|ttf|eot|woff)"/g
  let regCss=/\/static\/.+\.(jpg|png|gif|svg|mp4|ttf|eot|woff)/g
  let regHtml=/\/index\.(css|js)/g
  gulp.src(['./dist/*.html'])
    .pipe(replace(regHtml, (match, p1, offset, string)=>{
      return base+match
    }))
    .pipe(gulp.dest('./dist'))
  gulp.src(['./dist/*.css'])
    .pipe(replace(regCss, (match, p1, offset, string)=>{
      return base+match
    }))
    .pipe(gulp.dest('./dist'))
  return  gulp.src(['./dist/*.js'])
    .pipe(replace(regJs, (match, p1, offset, string)=>{
      return '"'+base+'/'+match.substring(5,match.length-1)+'"'
    }))
    .pipe(gulp.dest('./dist'))
}
gulp.task('default', function (cb) {
  runSequence('imagemin', 'upload', cb)
})