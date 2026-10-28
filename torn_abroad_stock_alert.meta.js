// ==UserScript==
// @name         Torn Abroad Stock Restock Alert
// @namespace    https://github.com/MerogieMagic/stakeout-radar-releases
// @version      1.33
// @description  Zero-API real-time stock refill monitor for Torn abroad shops (Japan, South Africa, Switzerland, etc.). Hooks directly into Torn's native Centrifugo WebSocket ("travelShop" -> "itemsUpdated") and React DOM for sub-millisecond restock beep alerts with dedicated Xanax fanfare.
// @author       Merogie & Antigravity
// @match        https://www.torn.com/page.php?sid=travel*
// @match        https://torn.com/page.php?sid=travel*
// @run-at       document-end
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      raw.githubusercontent.com
// @downloadURL  https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_abroad_stock_alert.user.js
// @updateURL    https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_abroad_stock_alert.user.js
// ==/UserScript==
