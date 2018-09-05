;(function() {
  "use strict";
  // 这儿必须是window.articles，因为前面的事件绑定有用到它
  window.articles = []
  /**添加文章的格式如下
   * let a_1 = new Article({
   *   title: "测试标题1",
   *   date: new Date(2018, 6, 12),
   *   tags: ["all", "javascript", "css"],
   *   url: "https://xiaomingtang.github.io/tang_blog/articles/first-article/",
   *   summary: "简介"
   * })
   * articles.push(a_1)
  */

  let a_1 = new Article({
    title: "第一篇文章",
    date: new Date(2018, 6, 12),
    tags: ["all"],
    url: "https://xiaomingtang.github.io/tang_blog/articles/first-article/",
    summary: "参见标题，内详。"
  })
  articles.push(a_1)

  let a_2 = new Article({
    title: "web服务器python版",
    date: new Date(2018, 6, 14),
    tags: ["all", "python"],
    url: "https://xiaomingtang.github.io/tang_blog/articles/pyserver/",
    summary: "web服务器python版，内含python3源码和windows应用下载链接。"
  })
  articles.push(a_2)
  
  let a_3 = new Article({
    title: "一个随机点名页面",
    date: new Date(2018, 8, 6),
    tags: ["all", "javascript", "html"],
    url: "https://xiaomingtang.github.io/tang_blog/articles/rollcall/",
    summary: "受好友邀制作的一个随机点名页面。"
  })
  articles.push(a_3)
      
  // 在此之上添加文章到列表
  renderArticles(orderArticlesBy(articles, "TIME"))
})()
