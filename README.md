## 脚本介绍

FuckWeiboNguide上线了。一句代码实现微博兴趣页的自跳转。博客地址：https://www.cnblogs.com/benjieqiang/p/13202284.html

## 解决痛点

对于关注用户较少的微博用户，微博会默认登录后跳转至`https://weibo.com/nguide/interests`该页面，现在我们要重定向该链接，让它直接跳转至微博首页。

## 实现步骤

1. 添加脚本。点击浏览器上油猴脚本标志，添加新脚本；

   ![添加脚本](https://img2020.cnblogs.com/blog/1415026/202006/1415026-20200628122833827-352697701.png)

2. 编辑脚本。将下面代码复制进去（核心代码就一句）；

   ![编辑脚本](https://img2020.cnblogs.com/blog/1415026/202006/1415026-20200628122856174-121745327.png)

   ```javascript
   // ==UserScript==
   // @name         FuckWeiboNguide
   // @namespace    https://www.cnblogs.com/benjieqiang
   // @version      1.0
   // @description  对于关注用户较少的微博用户，微博会默认登录后跳转至https://weibo.com/nguide/interests该页面，现在我们要重定向该链接，让它直接跳转至微博首页。
   // @author       benjieqiang
   // @match        https://weibo.com/nguide/interests
   // @grant        none
   // ==/UserScript==

   (function() {
       'use strict';
       // 重定向值微博首页
       window.location="https://weibo.com/";
   })();
   ```

3. 保存脚本至浏览器。`Ctrl + S`保存脚本。

   ![保存脚本](https://img2020.cnblogs.com/blog/1415026/202006/1415026-20200628122920311-2106400484.png

4. 测试脚本。
