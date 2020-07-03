// ==UserScript==
// @name         FuckWeiboNguide
// @namespace    https://www.cnblogs.com/benjieqiang
// @version      1.0
// @description  对于关注度较少的微博用户，微博会默认登录后跳转至https://weibo.com/nguide/interests该页面，现在我们要重定向该链接，让它直接跳转至微博首页。
// @author       benjieqiang
// @match        https://weibo.com/nguide/interests
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 重定向值微博首页
    window.location="https://weibo.com/";
})();
