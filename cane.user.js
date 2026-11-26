// ==UserScript==
// @name        cane
// @namespace   Violentmonkey Scripts
// @match       https://bbs.d.163.com/forum-*
// @match       https://bbs.d.163.com/forum.php*
// @grant       none
// @run-at      document-end
// @version     0.4.2
// @author      booy
// @description 适配凯恩之角论坛移动端布局与阅读体验
// @updateURL   https://github.com/booykean/cane-style/blob/main/cane.user.js
// @downloadURL https://github.com/booykean/cane-style/blob/main/cane.user.js
// ==/UserScript==

(function () {
    'use strict';

    var viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.content = 'width=device-width, initial-scale=1';
    } else {
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1';
        document.head.appendChild(viewport);
    }

    var style = document.createElement('style');
    style.textContent = [
        '@media (max-width: 1280px), (max-device-width: 1280px), (pointer: coarse) {',
        '  html, body { width: 100%; min-width: 0 !important; overflow-x: hidden; }',
        '  #ntesNavFixdwrap, #main, #hd, #wp, #ct, #bbsbody, #postlist, .g-wrap, .wp, .mn, #threadlist {',
        '    box-sizing: border-box !important;',
        '    width: 100% !important;',
        '    max-width: 100% !important;',
        '    min-width: 0 !important;',
        '  }',
        '  #main { margin-left: auto !important; margin-right: auto !important; padding: 0 8px !important; }',
        '  #ct .mn, #ct .sd { float: none !important; width: auto !important; }',
        '  #main .forum-banner { width: 100% !important; max-width: 100% !important; }',
        '  #bbsbody > .g-seru.g-forum-seru > .forum-rules { display: none !important; }',
        '  #main img { max-width: 100% !important; height: auto !important; }',
        '  #bbsbody video, #bbsbody iframe, #bbsbody embed, #postlist video, #postlist iframe, #postlist embed { max-width: 100% !important; }',
        '  #threadlist table:not([summary^="forum_"]) { display: block; width: 100% !important; max-width: 100% !important; table-layout: fixed; }',
        '  #threadlist table:not([summary^="forum_"]) tr { display: flex; flex-wrap: wrap; width: 100%; box-sizing: border-box; }',
        '  #threadlist table:not([summary^="forum_"]) th.th1 { display: block; flex: 0 0 100%; width: 100% !important; box-sizing: border-box; }',
        '  #threadlist table:not([summary^="forum_"]) td { display: none; }',
        '  #threadlist table[summary^="forum_"] { display: block; width: 100% !important; max-width: 100% !important; overflow-x: auto; }',
        '  #threadlist table[summary^="forum_"] tr { display: flex; flex-wrap: wrap; width: 100%; min-width: 0; box-sizing: border-box; }',
        '  #threadlist table[summary^="forum_"] td.icn { display: block; order: 0; flex: 0 0 18px; padding: 8px 0 0; }',
        '  #threadlist table[summary^="forum_"] th.common { display: block; order: 1; flex: 1 1 calc(100% - 18px); width: auto !important; box-sizing: border-box; padding: 8px 4px; font-size: 44px !important; line-height: 1.25 !important; }',
        '  #threadlist table[summary^="forum_"] th.common .xst, #threadlist table[summary^="forum_"] th.common > em, #threadlist table[summary^="forum_"] th.common > em a { font-size: 44px !important; line-height: 1.25 !important; }',
        '  #threadlist table[summary^="forum_"] td.by, #threadlist table[summary^="forum_"] td.num { display: block; order: 2; flex: 1 1 0; width: auto !important; min-width: 0; box-sizing: border-box; overflow-wrap: anywhere; padding: 4px 2px; font-size: 11px; line-height: 1.35; }',
        '  #threadlist .avatar, #postlist .avatar { width: 54px !important; height: 54px !important; margin: 0 auto; }',
        '  #threadlist .avatar img, #postlist .pls .avatar img { display: block; box-sizing: border-box; width: 50px !important; height: 50px !important; max-width: 50px !important; padding: 2px 2px 4px !important; background-size: 100% 100% !important; }',
        '  #postlist td.pls.admin_bgbs .pi_head { width: 100px !important; }',
        '  #postlist td.pls.admin_bgbs .headborder { width: 96px !important; height: 104px !important; left: 2px !important; top: -19px !important; right: auto !important; bottom: auto !important; background-size: 100% 100% !important; }',
        '  #postlist table { width: 100% !important; max-width: 100% !important; table-layout: fixed; }',
        '  #postlist td.pls { width: 100px !important; max-width: 100px !important; box-sizing: border-box; vertical-align: top; overflow: visible !important; }',
        '  #postlist td.plc { width: auto !important; min-width: 0; box-sizing: border-box; padding: 8px !important; overflow: visible !important; }',
        '  #postlist .m-post-inc { width: auto !important; }',
        '  #postlist .pct, #postlist .pcb, #postlist .t_f, #postlist .t_f *, #postlist .postmessage { font-size: clamp(16px, 4.1vw, 48px) !important; line-height: 1.5 !important; overflow-wrap: anywhere; }',
        '  #postlist .m-dedals { display: none !important; }',
        '  #postlist .sign { display: none !important; }',
        '  #postlist img { max-width: 100% !important; height: auto !important; }',
        '}'
    ].join('\n');
    (document.head || document.documentElement).appendChild(style);
}());
