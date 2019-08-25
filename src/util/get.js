const download = require('download-git-repo');
import {getAll} from './rc';
export default async (templateName, projectName) => {
  let config = await getAll();
  return new Promise((resolve,reject) => {
    let templateInfo = config[templateName];
    download(`${templateInfo.repository}:${templateInfo.owner}/${templateInfo.name}`,projectName, err => {
      if (err) {
        reject(err);
      }else {
        resolve();
      }
    })
  })
}