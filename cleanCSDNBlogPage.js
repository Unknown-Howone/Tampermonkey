// ==UserScript==
// @name         CSDN-Blog详情页
// @namespace    https://blog.csdn.net/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://blog.csdn.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(() => {
    window.alert = () => false
    const content = document.querySelector('.blog-content-box')
    content.style.display = 'relative'
    content.style.left = -150 + 'px'
    document.querySelector('#mainBox > aside').parentElement.removeChild(document.querySelector('#mainBox > aside'))
    document.querySelector('#csdn-toolbar').parentElement.removeChild(document.querySelector('#csdn-toolbar'))
    document.querySelector('.csdn-side-toolbar').parentElement.removeChild(document.querySelector('.csdn-side-toolbar'))
    document.querySelector('#toolBarBox').parentElement.removeChild(document.querySelector('#toolBarBox'))
    document.querySelector('#mainBox > main > div.first-recommend-box.recommend-box').parentElement.removeChild(document.querySelector('#mainBox > main > div.first-recommend-box.recommend-box'))
    document.querySelector('#mainBox > main > div.second-recommend-box.recommend-box').parentElement.removeChild(document.querySelector('#mainBox > main > div.second-recommend-box.recommend-box'))
    document.querySelector('#mainBox > main > div.comment-box > div.comment-edit-box.d-flex').parentElement.removeChild(document.querySelector('#mainBox > main > div.comment-box > div.comment-edit-box.d-flex'))
    document.querySelector('#mainBox > main > div.recommend-box.insert-baidu-box').parentElement.removeChild(document.querySelector('#mainBox > main > div.recommend-box.insert-baidu-box'))
    document.querySelector('#commentBox').parentElement.removeChild(document.querySelector('#commentBox'))
    document.querySelector('#mainBox > main > div.comment-box').parentElement.removeChild(document.querySelector('#mainBox > main > div.comment-box'))
    document.querySelector('#mainBox > main > div.template-box').parentElement.removeChild(document.querySelector('#mainBox > main > div.template-box'))
    document.querySelector('#mainBox > main > div.blog-footer-bottom').parentElement.removeChild(document.querySelector('#mainBox > main > div.blog-footer-bottom'))
    document.querySelector('#copyright-box').parentElement.removeChild(document.querySelector('#copyright-box'))
})();

