# tang_blog
# 我的博客

[建设中...](https://xiaomingtang.github.io/tang_blog/)   
无框架，无后端及数据库，纯前端个人博客   
package.json中的依赖不全，还有一个是highlight.js，但是这个包用npm下下来的不会用，官网手动下载的，跟npm中的包不一样，所以没放到package中。   
由于用了less.js动态样式转换，所以必须运行在服务器上，需要自己搭建。   
由于windows命令行不支持utf8，而我项目很多地方选择了使用bat批处理，所以这整个项目编码有点乱，批处理中和部分无关紧要的地方是ANSI编码，其他基本都是utf8。只要注意使用批处理生成的文件手动转成utf8，基本不会导致乱码。   
