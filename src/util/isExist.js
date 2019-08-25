const fs = require('fs');
export default (projectName) => {
  return fs.existsSync(projectName);
}