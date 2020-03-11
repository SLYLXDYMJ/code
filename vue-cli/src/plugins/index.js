/**
 *  动态导入全部插件
 **/
require
  .context('./', true, /\.js$/)
  .keys()
  .forEach(plugin => {
    require('./' + plugin.replace('./', ''))
  })
