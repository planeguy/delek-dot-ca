const vfs = require('vinyl-fs');

module.exports=function copyFiles(glob, dest, base) {
  return new Promise((resolve, reject) => {
    // the base is important, if not set it will put all 
    // files directly in the 'dest' folder
    // { base: '.' }
    const stream = vfs.src(glob, base || {})
      .pipe(vfs.dest(dest));
    stream.on('finish', () => {
      resolve();
    });
    stream.on('error', (error) => {
      reject(err);
    });
  });
}