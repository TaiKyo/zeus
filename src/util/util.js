const fs = require('fs');
export async function exist (path) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      resolve(true) 
    }
    resolve(false);
  })
}
export async function writeFile (file,data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, options, err => {
      if (err) {
        reject(err);
      }
      resolve();
    })
  })
}

export async function readFile (path, options = {encoding: 'utf8'}) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err,data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}