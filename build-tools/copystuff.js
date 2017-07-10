const vfs = require('vinyl-fs');

function copystuff(glob, dest, base) {
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

//--output denotes output folder, everything else is assumed a glob to source files
var a = require('minimist')(process.argv.slice(2),{alias:{output:['out','o']}});
copystuff(a._, (a.output||'.')).then(()=>true).catch((err)=>console.log(err));
