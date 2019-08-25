// 这是避免在windows系统下直接用process.env.HOME报错
export const HOME = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']; 
export const RC = `${HOME}/.zeusrc`; // 这是zeus的配置文件，配置在用户目录下
export const DEFAULT =  {
  owner: 'vuejs-templates',
  name: 'simple',
  repository: 'github', // 仓库类型，有可能有github，gitlab，Bitbucket
  alias: 'vue' // 模板别名
}