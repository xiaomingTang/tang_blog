;(function() {
  let tags = window.tags

  window.articles.forEach(function(article) {
    article.tags.forEach(function(tagName) {
      if(!tags[tagName]) {
        tags[tagName] = {
          name: tagName,
          title: "未命名-" + tagName,
          num: 0
        }
      } else if (!tags[tagName].num) {
        tags[tagName].num = 0
      }
      tags[tagName].num += 1
    })
  })
  
  let container = document.getElementById("container-tags")
  container.innerHTML = ""
  let fragment = document.createDocumentFragment()
  
  for( let tagName in tags ) {
    let tag = tags[tagName]
    fragment.appendChild(createTagFragment(tag))
  }
  
  container.appendChild(fragment)

  function createTagFragment(tag) {
    let fragment = document.createDocumentFragment()
    let a = document.createElement("a")
    fragment.appendChild(a)
    a.className = "float-left tag tag-" + tag.name
    a.setAttribute("data-tag", tag.name)
    a.setAttribute("href", "javascript:;")
    a.appendChild(document.createTextNode(tag.title))

    let span = document.createElement("span")
    a.appendChild(span)
    span.className = "tag-number"
    span.appendChild(document.createTextNode(tag.num))

    return fragment
  }

  document.body.addEventListener("click", function(e) {
    let target = e.target
    let _parent = e.target.parentNode

    if(target.className && (target.className.split(" ").indexOf("tag") >= 0)) {
      let tagName = target.getAttribute("data-tag")
      renderArticles(orderArticlesBy(filterArticlesByTag(window.articles, tagName), "TIME"))
    } else if(_parent.className && (_parent.className.split(" ").indexOf("tag") >= 0)) {
      let tagName = _parent.getAttribute("data-tag")
      renderArticles(orderArticlesBy(filterArticlesByTag(window.articles, tagName), "TIME"))
    }
  })

})()