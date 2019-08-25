## Zeus

zeus(宙斯)，一个通用的模板拉取生成器，同时支持自定义拉取模板仓库，

## 使用方法
拉取本仓库至本地之后,执行 `npm link` 即可

## zeus命令
- `zeus init` 初始化一个项目
- `zeus set` 设置模板仓库的地址等
- `zeus remove <alias>` 移除配置文件中的模板

## 开发方式
本项目使用 `rollup` 进行打包，支持ES6及 `async await`函数等新语法的使用。

- 新建一个控制台，执行 `npm run watch` 这会在代码变更之后热更新
- 新建一个控制台运行zeus的命令

## 打包
执行 `npm run build` 即可