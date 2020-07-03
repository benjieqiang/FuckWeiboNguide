## 脚本介绍

FuckWeiboNguide上线了。一句代码实现微博兴趣页的自跳转。

## 解决痛点

对于关注用户较少的微博用户，微博会默认登录后跳转至`https://weibo.com/nguide/interests`该页面，现在我们要重定向该链接，让它直接跳转至微博首页。

## 实现步骤

1. 添加脚本。点击浏览器上油猴脚本标志，添加新脚本；

   ![添加脚本](D:\PythonNote\tampermonkeyscripts\assets/添加脚本.png)

2. 编辑脚本。将下面代码复制进去（核心代码就一句）；

   ![编辑脚本](D:\PythonNote\tampermonkeyscripts\assets/编辑脚本.png)

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

   ![保存脚本](D:\PythonNote\tampermonkeyscripts\assets/保存脚本.png)

4. 测试脚本。
