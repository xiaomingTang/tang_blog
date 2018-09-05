::注意，为适应window cmd，这里是ansi编码，如果不是，命令行中文会出现乱码，应当修改为ansi
@echo off
set /p filename='请输入文章名称（仅英文）：'
set /p title='请输入文章标题：'

echo %filename%
mkdir %filename%
cd %filename%
mkdir js
mkdir css
mkdir assets
cd js
echo. > index.js
cd ../css
echo. > index.less
cd ../
echo ^<!DOCTYPE html^>>>index.html
echo ^<html lang="zh-cn" style="background-color: black;"^>>>index.html
echo ^<head^>>>index.html
echo   ^<meta charset="utf-8"^>>>index.html
echo   ^<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"^>>>index.html
echo   ^<title^>%title%^</title^>>>index.html
echo   ^<link rel="icon" type="image/x-icon" href="../../favicon.ico"^>>>index.html
echo   ^<!-- plugins --^>>>index.html
echo   ^<link rel="stylesheet" href="../../node_modules/normalize.css/normalize.css"^>>>index.html
echo   ^<link rel="stylesheet" type="text/less" href="../../node_modules/font-awesome/less/font-awesome.less"^>>>index.html
echo   ^<!-- skin --^>>>index.html
echo   ^<link rel="stylesheet" type="text/less" href="../../css/skin.less"^>>>index.html
echo   ^<!-- public --^>>>index.html
echo   ^<link rel="stylesheet" type="text/less" href="../../css/public.less"^>>>index.html
echo   ^<link rel="stylesheet" type="text/less" href="../../css/article.less"^>>>index.html
echo   ^<!-- custom css --^>>>index.html
echo   ^<link rel="stylesheet" type="text/less" href="css/index.less"^>>>index.html
echo   ^<!-- if highlight needed --^>>>index.html
echo   ^<!-- ^<link rel="stylesheet" href="../../node_modules/highlight/styles/tomorrow-night-bright.css"^> --^>>>index.html
echo   ^<!-- ^<link rel="stylesheet" href="../../node_modules/highlight/styles/tomorrow-night.css"^> --^>>>index.html
echo   ^<!-- <link rel="stylesheet" href="../../node_modules/highlight/styles/atom-one-dark.css"^> --^>>>index.html
echo   ^<!-- <link rel="stylesheet" href="../../node_modules/highlight/styles/monokai-sublime.css"^> --^>>>index.html
echo   ^<!-- less --^>>>index.html
echo   ^<script src="../../node_modules/less/dist/less.min.js"^>^</script^>>>index.html
echo   ^<!-- promise --^>>>index.html
echo   ^<script src="../../node_modules/es6-promise/dist/es6-promise.auto.min.js"^>^</script^>>>index.html
echo ^</head^>>>index.html
echo ^<body^>>>index.html
echo   ^<header class="header"^>>>index.html
echo     ^<div class="main header-inner clearfix"^>>>index.html
echo       ^<a class="title-page" href="../../"^>^<h1^>Tang's blog^</h1^>^</a^>>>index.html
echo       ^<ul class="nav-list text-center"^>>>index.html
echo         ^<li class="nav-item"^>^<a class="nav-link" href="../../"^>Home^</a^>^</li^>>>index.html
echo         ^<li class="nav-item"^>^<a class="nav-link" href="../../about.html"^>About^</a^>^</li^>>>index.html
echo       ^</ul^>>>index.html
echo     ^</div^>>>index.html
echo   ^</header^>>>index.html
echo   ^<article class="main"^>>>index.html
echo     ^<h2^>%title%^</h2^>>>index.html
echo     ^<div^>>>index.html
echo       ^<span class="date"^>%date:~0,4%-%date:~5,2%-%date:~8,2%^</span^>>>index.html
echo       ^<span class="tag tag-all"^>all^</span^>>>index.html
echo     ^</div^>>>index.html
echo     ^<div class="content" id="content"^>>>index.html
echo       ^<!-- 正文写在此处 --^>>>index.html
echo       ^<!-- if highlight needed --^>>>index.html
echo       ^<!-- ^<pre^>^<code class="lang-js"^>^</code^>^</pre^> --^>>>index.html
echo.      >>index.html
echo       ^<!-- 将下面的内容复制到/js/articles.js的合适位置>>index.html
echo            注意，下面这个new Date()中的月份和日期的前导零要手动删掉。>>index.html
echo            注意，月份复制到js中要手动减一，这个就不解释了。>>index.html
echo.      >>index.html
echo   let a_1 = new Article({>>index.html
echo     title: "%title%",>>index.html
echo     date: new Date(%date:~0,4%, %date:~5,2%, %date:~8,2%),>>index.html
echo     tags: ["all"],>>index.html
echo     url: "https://xiaomingtang.github.io/tang_blog/articles/%filename%/",>>index.html
echo     summary: "参见标题，内详。">>index.html
echo   })>>index.html
echo   articles.push(a_1)>>index.html
echo.      >>index.html
echo       --^>>>index.html
echo.      >>index.html
echo     ^</div^>>>index.html
echo   ^</article^>>>index.html
echo ^<!-- if highlight needed --^>>>index.html
echo ^<!-- ^<script src="../../node_modules/highlight/highlight.pack.js"^>^</script^> --^>>>index.html
echo ^<!-- ^<script^>hljs.initHighlightingOnLoad()^</script^> --^>>>index.html
echo ^<script src="js/index.js"^>^</script^>>>index.html
echo ^</body^>>>index.html
echo ^</html^>>>index.html
echo 注意：所有文件字符集为ANSI，最好手动修改为UTF-8
echo 所有命令执行完毕，按任意键退出...
pause>nul
