;(function() {
  "use strict";
  // 这儿必须是window.articles，因为前面的事件绑定有用到它
  window.articles = []
  /**添加文章的格式如下
   * let a_1 = new Article({
   *   title: "测试标题1",
   *   date: new Date(2013, 5, 23),
   *   tags: ["all", "javascript", "css"],
   *   url: "http://www.baidu.com/",
   *   summary: "测试简介"
   * })
   * articles.push(a_1)
  */


  // 在此之上添加文章到列表
  renderArticles(orderArticlesBy(articles, "TIME"))
})()
