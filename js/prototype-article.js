;(function() {
  "use strict";

  let tags = {
    all: {
      name: "all",
      title: "all",
      number: 0
    },
    javascript: {
      name: "javascript",
      title: "js",
      number: 0
    },
    css: {
      name: "css",
      title: "css",
      number: 0
    }
  }

  function Article(obj) {
    this.title = obj.title || "未命名"
    this.date = obj.date || new Date()
    this.tags = obj.tags || []
    this.url = obj.url || "/"
    this.summary = obj.summary
  }
  Article.prototype = {
    constructor: Article,
    render: function() {
      /** 文章简介的html结构
       * 
       * <article class="article">
       *   <h2 class="title-article"><a href="#">测试标题</a></h2>
       *   <span class="date">2018-05-15</span>
       *   <a class="tag tag-javascript" href="#">js</a>
       *   <a class="tag tag-css" href="#">css</a>
       *   <div class="summary">
       *     本文简述了发动机案例可舒服点击放大房间都是拉空间发的本文简述了发动机案例可舒服点击放大房间都是拉空间发的本文简述了发动机案例可舒服点击放大房间都是拉空间发的本文简述了发动机案例可舒服点击放大房间都是拉空间发的
       *   </div>
       * </article>
       * 
       **/
      let fragment = document.createDocumentFragment()
      let article = document.createElement("article")
      let h2 = document.createElement("h2")
      let link = document.createElement("a")
      let span = document.createElement("span")
      let div = document.createElement("div")

      fragment.appendChild(article)
      article.className = "article"
      
      article.appendChild(h2)
      h2.className = "title-article"
      
      h2.appendChild(link)
      link.setAttribute("href", this.url)
      link.setAttribute("target", "_blank")
      link.appendChild(document.createTextNode(this.title))

      article.appendChild(span)
      span.className = "date"
      span.appendChild(document.createTextNode(formatDate(this.date)))

      for(let i = 0, len = this.tags.length; i < len; i++) {
        let tagName = this.tags[i]
        let a = document.createElement("a")
        article.appendChild(a)
        a.className = "tag tag-" + tagName
        a.setAttribute("data-tag", tagName)
        a.setAttribute("href", "javascript:;")
        a.appendChild(document.createTextNode(tags[tagName].title))
      }

      article.appendChild(div)
      div.className = "summary"
      div.appendChild(document.createTextNode(this.summary))

      return fragment
    }
  }

  function formatDate(date) {
    if(!(date instanceof Date)) {
      console.error("Type Error: ", date, "is not instanceof Date")
      date = new Date()
    }
    return "" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  }

  function orderArticlesBy(list, base) {
    // 没有数据库，只能以时间排序，默认的可能应当是升序排列，改为降序排列
    base = "TIME"
    let orderedList = list
    switch(base) {
      case "TIME":
        orderedList = list.sort(function(a, b) {
          // 降序排列
          return b.date - a.date
        })
        break
      default:
        break
    }
    return orderedList
  }

  function filterArticlesByTag(list, tagName) {
    if(tagName === "") {
      return list
    }
    return list.filter(function(article) {
        return article.tags.indexOf(tagName) >= 0
      })
  }

  function renderArticles(list) {
    let fragment = document.createDocumentFragment()
    let container = document.getElementById("container-articles")

    list.forEach(function(article) {
      if(!(article instanceof Article)) {
        console.error(article, " is not instanceof Article")
      } else {
        fragment.appendChild(article.render())
      }
    })

    container.innerHTML = ""
    container.appendChild(fragment)

  }

  window.tags = tags
  window.Article = Article
  window.orderArticlesBy = orderArticlesBy
  window.filterArticlesByTag = filterArticlesByTag
  window.renderArticles = renderArticles
})()
