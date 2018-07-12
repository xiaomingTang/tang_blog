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

  // 在此之上添加文章到列表
  renderArticles(orderArticlesBy(articles, "TIME"))
})()
