// ==UserScript==
// @name         Torn City - Mercenary Stakeout Radar
// @namespace    Violentmonkey Scripts
// @version      1.63
// @description  Precision mercenary target stakeout radar: Faction Watch turtle contracts, smart random chain target pool, live multi-target tracking for hospital discharge, online activity, flight landings, absolute HP, faction chain watcher with bell alerts, early discharge active war detector with contract auto-pause, compact cards, trader hospitalization services watchlist, and illegal hit auto-screenshot evidence engine.
// @author       Merogie & Antigravity
// @match        https://www.torn.com/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @connect      raw.githubusercontent.com
// @connect      workers.dev
// @downloadURL  https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_mercenary_stakeout.user.js
// @updateURL    https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_mercenary_stakeout.meta.js
// @run-at       document-end
// ==/UserScript==

function _0xf22e(_0x17a547, _0x10e026) {
    _0x17a547 = _0x17a547 - 0x1ad;
    const _0x5bb048 = _0x5bb0();
    let _0xf22e87 = _0x5bb048[_0x17a547];
    if (_0xf22e['ASqlQK'] === undefined) {
        var _0x376516 = function (_0x231f98) {
            const _0x229e73 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x58d41b = '', _0x138026 = '';
            for (let _0x295aa8 = 0x0, _0x4a039c, _0x3cbfe9, _0x8e9d58 = 0x0; _0x3cbfe9 = _0x231f98['charAt'](_0x8e9d58++); ~_0x3cbfe9 && (_0x4a039c = _0x295aa8 % 0x4 ? _0x4a039c * 0x40 + _0x3cbfe9 : _0x3cbfe9, _0x295aa8++ % 0x4) ? _0x58d41b += String['fromCharCode'](0xff & _0x4a039c >> (-0x2 * _0x295aa8 & 0x6)) : 0x0) {
                _0x3cbfe9 = _0x229e73['indexOf'](_0x3cbfe9);
            }
            for (let _0xba6c5b = 0x0, _0x2f080 = _0x58d41b['length']; _0xba6c5b < _0x2f080; _0xba6c5b++) {
                _0x138026 += '%' + ('00' + _0x58d41b['charCodeAt'](_0xba6c5b)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x138026);
        };
        _0xf22e['pAzItv'] = _0x376516, _0xf22e['VIzfbz'] = {}, _0xf22e['ASqlQK'] = !![];
    }
    const _0x17cb71 = _0x5bb048[0x0];
    _0xf22e['RwANlj'] !== _0x17cb71 && (_0xf22e['VIzfbz'] = {}, _0xf22e['RwANlj'] = _0x17cb71);
    const _0x399da3 = _0xf22e['VIzfbz'][_0x17a547];
    return _0x399da3 === undefined ? (_0xf22e87 = _0xf22e['pAzItv'](_0xf22e87), _0xf22e['VIzfbz'][_0x17a547] = _0xf22e87) : _0xf22e87 = _0x399da3, _0xf22e87;
}
function _0x5bb0() {
    const _0x2113bd = [
        'zMvHDhvYzq',
        'zNPKqvK',
        'cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTCgLSBc10yxjNzxqTyNrUiIbPzd0IC3rHA2vVDxqTCgLSBc1OAxqTDhjHzgvYiIbZDhLSzt0IyMfJA2DYB3vUzdOGiZKYndaWztSGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoYbJB2XVCJOGi2zLzJa4ytSIihrPDgXLpsiXlunSAwnRie1LC3nHz2uGlYbiB3nWifrYywrLCIa',
        'zNDjBMfJDgL2zq',
        '4PQHiff1AwnRieHPDdOGqxr0ywnRAw5Nig92zxjZzwfZihrHCMDLDca',
        'D2nKsw0',
        'q2HHAw4GD2f0y2HLCIbHBMqGyNjLywSGyMvSBhmSifnTyxj0ifbVB2WGuxvPy2SGsgL0icHZA2LWCYb1BMf0DgfJA2fIBguGDgfYz2v0CYbHBMqGBMv3ignPDgL6zw5ZksWGBMv4Dc10yxjNzxqGyMfYlG',
        'zMfJDgLVBI8',
        'DMfSDwu',
        'iJ7IMQeGuMfUA2vKieve',
        'A2v5zg93BG',
        'ugXHEwvYifS',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMjVCMrLCI10B3a6idfWEcbZB2XPzcaJmZm0mtu1oYbTyxjNAw4TDg9WoIa4ChG7ihbHzgrPBMCTDg9WoIa4ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTD2vPz2H0oIa4mda7ignVBg9YoIaJzMvMmdHHoYbTyxjNAw4TyM90Dg9ToIa0ChG7igzVBNqTC2L6ztOGmteUnxb4oYi+8j+BKIbzB3vYie1VzhvSzxm6pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6ideWlJvWEdSGy29SB3i6icnJyMq1zte7igXPBMuTAgvPz2H0oIaXlJu7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'Dgv4DefSAwDU',
        'zgv0ywLSCW',
        'lNn0ywTLB3v0lxn0yxr1CY1WAwXSlMHVC3bPDgfS',
        'y2XVC2vK',
        'igf0DgfJA2fIBguGBM93lca',
        'DLLhvLa',
        '4OcIieLUifrVCM4SihrHCMDLDhmGAw4Gywn0AxzLihDHCNmGAgf2zsbfqvjmwsbesvndsefsr0u6igLMigHVC3bPDgfSAxPLzcbIEsbHidnYzcbWyxj0EsWGDgHLEsbJyw4GBgvHDMuGDgHLigHVC3bPDgfSieLou1rbtLrmwsbMB3iGrLjfrsb3AxrOideWmcuGsevbtfriihjLC3rVCMvKiqO',
        'Chf4CMG',
        'Dg9YBG',
        'wfj0A3K',
        'qK5bv2W',
        'CMfUC2zVCM06ihrYyw5ZBgf0zvKOltfWEcKGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxnXlwj0BI5Hy3rPDMuGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdiYlcaXmdeSiduYlcaWlJK1ksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icmYmMm1nwuGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaWidHWEcbYz2jHkdm0lcaXotCSidK0lcaWlJyPicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZCs1IDg4UDhjHzgvYlMfJDgL2zsb7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmtGWlca4mYWGosWGmc45nsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJzJu5ztbIicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmca4ChGGCMDIysGYnduSide1ocWGmteSidaUnIKGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnHCMqUCMvHzhKGEWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icmYmMm1nwu7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmcaXmhb4ihjNyMeOmZqSide5nYWGotqSidaUmZuPoWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcbYz2jHkdm0lcaXotCSidK0lcaWlJePidaLlcaJmwuYotnIideWmcuPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc5UzwfYlxjLywr5ihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGmtbWEcbYz2jHkdi0nsWGmtu4lcaXmsWGmc4ZnsK7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSihjNyMeOmJq1lcaXntGSideXlcaWlJeYksaWjsWGiZfLmJKZyIaXmdaLktSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnHCMqTAgvHzgvYihSkicaGicaGicaGicaGzgLZCgXHEtOGzG',
        'wKr1t3e',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwHLywrLCI1Hy3rPB25ZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1ZB3vUzciGzgf0ys1MDY1HBgvYDd0I',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGicaGica8is0Tiezpt1rfuIbcvvrut05tic0TpGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igDHCdOGnhb4oYbTyxjNAw4TDg9WoIa2ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigLKpsjZDgfRzw91Dc1IDg4Ty2HLy2STDxbKyxrLiIbZDhLSzt0IzMXLEdOGmtSGCgfKzgLUzZOGnhb4oYbIB3jKzxiTy29SB3i6icmZogjKzJG7ignVBg9YoIaJmZHIzgy4oYiGDgL0Bgu9iKnOzwnRieDPDeH1yIbMB3iGvxbKyxrLCYi+8j+uHcbvCgrHDgvZpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbMB250lxnPEMu6ideWChG7ignVBg9YoIaJotrHm2i4oYbTyxjNAw4TDg9WoIaYChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+uMfKyxiGDG',
        'AgXTzeK',
        'tM8GDgfYz2v0CYbVBIb3yxrJAgXPC3qUpgjYpKfKzcbHBIbjrcbHyM92zsbVCIbJBgLJAYaI8j+oRYiGB24Gyw55ihbYB2zPBguHpc9KAxy+',
        'yxr0ywnRrgvZDgLUyxrPB24',
        'CeThswy',
        'wwj4qu4',
        'sLritfa',
        'pUkALo+4JYbeAxjLy3qGqxr0ywnRifbHz2u8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0IChjVzMLSzsiG',
        '8j+sIIbeCNvNienVB2XKB3DUifjLywr5iq',
        'u3rHA2vVDxrmAwnLBNnLswq',
        'C3rHA2vVDxqTDxbKyxrLlwjHBM5LCG',
        'pc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UignVBxbHy3qTzgvSiIbKyxrHlwz3lwrLBd0I',
        '4PQu77Ipief1Dg8Tugf1C2uGB24GrwfYBhKGrgLZy2HHCMDLigvUywjSzwqU',
        't2THEq',
        'AvfTvuG',
        'u3rHA2vVDxqGkefJy291BNqGwW',
        'qNvxr3i',
        'ignHBgXZic8GBwLU',
        'ChvrBe0',
        'w1n0ywTLB3v0xsbuywiG',
        '8j+AQcbdsefjtIbduKLusunbtce',
        'yxbPx2TLEv8',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaG',
        'DhLWzq',
        'BgfZDezLDgnOzwq',
        'iIbPzd0IC3rHA2vVDxqTDgfIlwzHy3rPB25ZiIb0AxrSzt0IrMfJDgLVBIbxyxrJAdOGDhvYDgXLignVBNrYywn0CYi+cIaGicaGicaGicaGicaGicaGicaGicaGipcFJ7qGrMfJDgLVBNmGka',
        'xsbPCYbPBIbnzxjJzw5HCNKGuMfKyxiUienSAwnRihrVihjLBw92zs4',
        'iIb0yxjNzxq9iL9IBgfUAYiGy2XHC3m9iNn0ywTLB3v0lwj0BI1TC2CIihrPDgXLpsjtzw5Kig1LC3nHz2uGDg8GDhjHzgvYig9MzMvYAw5NihnHzMuTA2vLCgLUzYbOB3nWAxrHBgL6yxrPB24IpGOGicaGicaGicaGicaGicaGicaGicaGicdWN5kSie1LC3nHz2uGvhjHzgvYcIaGicaGicaGicaGicaGicaGicaGpc9HpGOGicaGicaGicaGicaGicaGicaGidXHigHYzwy9iMH0DhbZoI8VD3D3lNrVCM4Uy29Tl3bHz2uUCgHWp3nPzd1HDhrHy2SMDxnLCJjjrd0',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iMvUzxjNEsjD',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgfRzw91Dc1IDg4TAwnVBIiGAwq9iNn0ywTLB3v0lwj0BI1WyxvZzsiGDgL0Bgu9iG',
        'pgiGC3r5Bgu9iMnVBg9YoIaJzJu5ztbIoYbHBMLTyxrPB246ihn0ywTLB3v0lwDSB3CTChvSC2uGmxmGAw5MAw5PDgu7iJ4XCYdIMQeGkfjbueLektWVyJ4',
        'jsdIGkiG',
        'iIb0AxrSzt0Iq29UzMLNDxjLigfJDgL2Axr5ihjLCxvPCMvTzw50igzVCIb0AgLZihrHCMDLDci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiWiIa',
        'D1vOCLm',
        'rNrvAxG',
        'Ahbqy3q',
        'Avnhs2i',
        '8j+xOE+4JW',
        'y2HHAw5xyxrJAgvYrw5HyMXLza',
        'ksbB',
        'B3L1tvi',
        'u1rssunlru4',
        'idXZCgfUihn0EwXLpsjJB2XVCJOJzJu5ztbIoYiGDgL0Bgu9iKzHy3rPB24Gv2f0y2GGugf1C2vKiJ7IJ7G8l3nWyw4+',
        'w1n0ywTLB3v0xsbtEw5JzwqG',
        'icaGigjVCMrLCJOGmxb4ihnVBgLKicnLzJq0ndq7cIaGicaGicaGicaGignVBg9YoIaJzMnHnwe1oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3rHDhvZlxbPBgWUD2fYlxbHDxnLlxbPBgWGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi0nsWGmtu4lcaXmsWGmc4YnsK7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicnMntLLmgi7cIaGicaGicaGicaGignVBg9YoIaJzMrLmdq3oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3rHDhvZlxbPBgWUzwqTB2zMlxDHBgWGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkde0ocWGmtyZlcaXodqSidaUmtuPicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGiZy0nZq4yIaHAw1WB3j0yw50oWOGicaGicaGicaGicbJB2XVCJOGiZK0ytnIocaHAw1WB3j0yw50oWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3rHDhvZlxbPBgWUzwqTB2zMlxDHBgW6Ag92zxiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkde0ocWGmtyZlcaXodqSidaUmYKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJotrHm2i4icfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDgf0DxmTCgLSBc5Lzc1VBIb7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYnduSide1ocWGmteSidaUmJuPicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicnMntLLmgiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icnMzwyWogeGiwLTCg9YDgfUDdSkicaGia',
        'ode0otiYDgrpB3zJ',
        'D2LUBMvY',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSihrYyxzLBgLUzYiGDgL0Bgu9iLjLBwfPBMLUzZOG',
        'iIbZDhLSzt0Iy3vYC29YoIbWB2LUDgvYoYiGDgL0Bgu9iLnuuKLds0voicHdBgLJAYbVCIbYAwDODc1JBgLJAYb0BYb1BM1HCMSPiJ7WN46VifnuuKLds0vopc9ZCgfUpIa',
        '8j+NSsbptIbxquXmoIbfqvjmwsbesvndsefsr0u',
        'C3rHA2vVDxqTzMfJDgLVBI1WB2XSlxnLBgvJDa',
        'CKH2rwy',
        'C291CMnL',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigvKlw9UiIb0AxrSzt0IrwfYBhKGrgLZy2HHCMDLoIbbvKfjtefcteuGka',
        'yxnZyxvSDgLUz19Mywn0Aw9U',
        'BgjhC2O',
        'thD0uKW',
        'C3rHA2vVDxqTy2HHAw4TyMfYlwLUzM8',
        'zKXrC2W',
        'CwT3tMK',
        'B25xywXS',
        'z2vUzxjHBa',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjMB250lxnPEMu6idKUnxb4oYbJB2XVCJOGiZy0nZq4yJSGzM9UDc13zwLNAhq6idCWmdSGCgfKzgLUzZOGmNb4idvWEdSGyMfJA2DYB3vUzdOGCMDIysGYntuSmJu1ldi1nsWWlJa0ktSGyM9YzgvYoIaXChGGC29SAwqGCMDIysGYntuSmJu1ldi1nsWWlJa4ktSGyM9YzgvYlxjHzgL1CZOGm3b4oYiGDgL0Bgu9iKfJDgL2Axr5igzPBhrLCIaMieLUywn0AxzPDhKGDgLTzxiGCMvXDwLYzsbtBMLWzxiGuhjViJ7WN5ssieHVC3aGt25SEtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica',
        'ieXbtKrfrce',
        'C3rYB2TL',
        'CK1mvLi',
        'y2HHAw5ty2fUrw5K',
        'w2rHDgeTDw5SB2nRlxDWxq',
        'Dgv4DenVBNrLBNq',
        'BM90igrLDgvJDgvKihLLDa',
        'icaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1TC2C6Ag92zxiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmJu2m2vIoWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzIaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlwHVC3aGEWOGicaGicaGicaGicbMBgv4oIaXoWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIa0ChG7cIaGicaGicaGicaGigjHy2TNCM91BMq6icm5mJqWmgu7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicnMntLLmgi7cIaGicaGicaGicaGignVBg9YoIaJzMvMmdHHicfPBxbVCNrHBNq7cIaGicaGicaGicaGihbHzgrPBMC6idrWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWlJvWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idCWmdSkicaGicaGicaGicaGDgv4Dc1KzwnVCMf0Aw9UoIbUB25LicfPBxbVCNrHBNq7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlwHVC3a6Ag92zxiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJyJq1mZa5oWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzIaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDhjHzgvYlxnHzMuGEWOGicaGicaGicaGicbMB250lxnPEMu6ideWChG7cIaGicaGicaGicaGignVBg9YoIaJotrHm2i4oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmgyXnZjHoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJmZm0mtu1oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cIaGicaGicaGicaGihbHzgrPBMC6idnWEca2ChG7cIaGia',
        'iIbHBhq9iKv2AwrLBMnLifnJCMvLBNnOB3qIihn0EwXLpsjTyxGTD2LKDgG6ideWmcu7igHLAwDODdOGyxv0BZSGyM9YzgvYlxjHzgL1CZOGnNb4oYbIB3jKzxi6idfWEcbZB2XPzcaJmZm0mtu1oYbIB3GTC2HHzg93oIaWidrWEcaXmNb4ihjNyMeOmcWWldaSmc41ktSIic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGicaGicaGicaGpceTlsbszxbVCNqGvgv4DgfYzweGqM94ic0TpGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoIaXmxb4oYbMB250lxDLAwDODdOGnZaWoYbJB2XVCJOGiZK0ytnIodSGDgv4Dc10CMfUC2zVCM06ihvWCgvYy2fZztSGBwfYz2LUlwjVDhrVBtOGnNb4oYbKAxnWBgf5oIbMBgv4oYbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47igfSAwDUlwL0zw1ZoIbJzw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ5gB3jTyxr0zwqGsw5JAwrLBNqGuMvWB3j0ifrLEhqGkerPC2nVCMqGlYbnywLSic8GrM9YDw0PoJWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0Iy29SB3i6icmYmMm1nwu7igzVBNqTC2L6ztOGmtbWEdSIpLjLywr5ihrVignVChK8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidX0zxH0yxjLysbPzd0IC3rHA2vVDxqTCMvWB3j0lxrLEhrHCMvHiIbYzwfKB25SEsbZDhLSzt0ID2LKDgG6ideWmcu7igHLAwDODdOGotvWEdSGyMfJA2DYB3vUzdOGiZa5mgqXnJSGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSGyM9YzgvYlxjHzgL1CZOGnNb4oYbJB2XVCJOGi2uYztHMmdSGzM9UDc1Myw1PBhK6ig1VBM9ZCgfJztSGzM9UDc1ZAxPLoIaXmxb4oYbWywrKAw5NoIa4ChG7igjVEc1ZAxPPBMC6igjVCMrLCI1IB3G7ihjLC2L6ztOGBG',
        'AgvSBg8',
        'qMPtt0y',
        'CfDPu2S',
        'zNzuqMy',
        'Bgf0zxn0x3jLBw90zv92zxjZAw9U',
        'ywXLCNq',
        'Ahr0Chm6lY9HCgKUDg9YBI5JB20VDg9YBI8/C2vSzwn0Aw9UCZ1Yyw5Rzwr3yxjZlhrLCNjPDg9YExDHCNmMA2v5pq',
        'vhvzvMG',
        'Cg9SBgLUz0LUDgvYDMfS',
        'C3rHA2vVDxqTyNrUlxnLDhrPBMDZlxDHCNbHC3m',
        'qK1xAhG',
        '8j+AQcbduKLusunbtcbdsefjtIbequ5hrvi6iokpSE+4JYa',
        'u0Lcvuq',
        'uuDcs2u',
        'iIbPzd0IC3rHA2vVDxqTyNrUlxDHCNbHC3mIihrPDgXLpsjtDg9YztOGyNv5ig9Yigv4DgvUzcbTB2r1BgvZihDPDgGGwgfUyxGIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0IvgfYz2v0CYbMB3vUzcbPBIbYyw5NzsdIGkiGyxr0ywnRywjSzsbUB3CG4OcIihn0yxr1CYb2zxjPzMLLzcbPBIb0AguGBgfZDcaYig1PBNv0zxmIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUigLKpsjZDgfRzw91Dc1JAgfPBI1WB29Slxn0yxr1CYiGC3r5Bgu9iMzVBNqTC2L6ztOGmtaUnxb4oYbJB2XVCJOGiZK0ytnIodSIpJWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgfRzw91Dc1IDg4TAwnVBIiGAwq9iNn0ywTLB3v0lwnOywLUlxbVB2WTy2XLyxiIihn0EwXLpsjWywrKAw5NoIaXChGGohb4oYbMB250lxnPEMu6ideWChG7iIb0AxrSzt0IrM9Yz2v0ihrOzsbWB29SigfUzcbYzwj1AwXKigL0icHLlMCUigfMDgvYignOyw5NAw5NihjHBMDLic8GBgv2zwWPiJ5dBgvHCIbqB29Spc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaG',
        'AgXTDNi',
        'cIaGicaGicaGicaGicaGica8C3bHBJ7WN5Qaifn0ywTLB3v0ifjHzgfYidXIpNy',
        'ks4GuMvHzhKGzM9YihnHzMuTA2vLCgLUzYbOB3nWAxrHBgL6yxrPB24GC2vYDMLJzxmH',
        'vwP5A1q',
        'zunbruu',
        'qwTKv08',
        'CM91BMq',
        'Cg9VBa',
        'CgX0A1C',
        'Dg9Nz2XLlwf1Dg8TCgf1C2uTD2fY',
        'z2LwtNK',
        'Dg91y2HZDgfYDa',
        'vgHTChq',
        'pJmWie1PBNm8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0InJaIia',
        '8j+pTcbgywn0Aw9UifS',
        'Bw9KAwzPzxi',
        'xsbIzwXVBMDZihrVigzHy3rPB24GwW',
        'wuvTvhi',
        'ktWVC3bHBJ4G',
        'iZy0nZq4yG',
        'C3rHA2vVDxrFChjVBxb0zwrFz3vLC3q',
        'Dg9gAxHLza',
        'y2HHAw5nyxHmzxzLBa',
        'qwn0Aw9Uiev4zwn1DgvKoG',
        'yw5VBG',
        '8j+uHcbjj3zLihbHAwq6ignOzwnRig5VDW',
        'weTjvwu',
        'DwTUreS',
        'u3Lpt1K',
        'idXZCgfUignSyxnZpsjZDgfRzw91Dc1JyxjKlwX2BciGC3r5Bgu9iMnVBg9YoIaJnJq3ndHIoYi+wW',
        'sKvwvKG',
        'veL0tfu',
        'jMnVBw1LBNq9',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IB3GIpGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlxrPDgXLiJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+8j+BKIbtDgfRzw91DcbsywrHCIbtDg9YztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1IDg4TAwnVBIiGAwq9iNn0ywTLB3v0lxn0B3jLlwnSB3nLiIb0AxrSzt0Iq2XVC2uIpUkCLtWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGia',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cIaGicaGicaG',
        'x2f0DgfJA2vYxW',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxDPBMrVDYa',
        'BgfZDenOzwnRzwq',
        'ChjVzMLSzq',
        'AePpyuy',
        'B05TtKO',
        'zgf0ys1HyNjVywq',
        'tMr5zMe',
        'BNvSBa',
        'z2ntsNm',
        'C3rHA2vVDxqTyNrUlwnVChKTCMvWB3j0',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSig9RyxKIihrPDgXLpsjuyxjNzxqGrgLZy2HHCMDLzcaMie91DcaOt2THEsKIpK9RyxK8l3nWyw4+ia',
        'yxv0B1nJCMvLBNnOB3rjBgXLz2fSsgL0',
        'iIbPzd0IC3rHA2vVDxqTDgfIlxrHCMDLDhmIihrPDgXLpsjnzxjJzw5HCNKGvgfYz2v0ifDHDgnOBgLZDci+cIaGicaGicaGicaGicaGicaGicaGicaGipcFJQ8GvgfYz2v0CYaO',
        'rvPirNi',
        'ww91CIbbueKGA2v5igjLBg9Uz3mGDg8GwW',
        'ALrxrMm',
        'ANn2BKi',
        'vwnyz3C',
        'EfLbB1u',
        'igHPDa',
        'sg9ZCgL0ywW',
        'w2LKkJ0IAwnVBJq5iL0SifTPzcO9iMLJB241mcjDlcbBAwqQpsjPy29UnteIxsWGw2LKkJ0IAwnVBJuYiL0SifTPzcO9iMLJB241mYjD',
        'xseGq2XPy2SGy2fYzcaIqLjfquniievwsurftKnfiIb0BYb2Awv3lG',
        'zgvJB2rL',
        'y2HHAw4ZmdO',
        'y29lEKe',
        's0rTBxO',
        'p3nLBgvJDgLVBNm9ChjVzMLSzsXIyxnPyYzRzxK9',
        'icb9cIaGicaGicaGlNn0ywTLB3v0lxbYB2zPBguTyNrUlwDYB3vWihSkicaGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwzSzxGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGicbNyxa6idrWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbTyxjNAw4TBgvMDdOGnNb4icfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZCs1IDg4GEWOGicaGicaGicaGicb3Awr0AdOGmJzWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbOzwLNAhq6idi2ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCgfKzgLUzZOGmcaHAw1WB3j0yw50oWOGicaGicaGicaGicbKAxnWBgf5oIbPBMXPBMuTzMXLEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtnWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2osaHAw1WB3j0yw50oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmwuYotnIicfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJicfPBxbVCNrHBNq7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZzsaHAw1WB3j0yw50oWOGicaGicaGicaGicbSAw5LlwHLAwDODdOGmsaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidfWEcaZChGGCMDIysGWlcaWlcaWlcaWlJmPicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZCs1IDg46Ag92zxiGEWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icmZogjKzJGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGDa',
        'zMfJDgLVBKLK',
        'vgfYz2v0ieLUywn0AxzLicG+idvTic8Gt2zMBgLUzsaXncbTAw5ZigfNBYK',
        'xsi+4OcIia',
        'A3LmsMG',
        'pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTC3rLChmIpGOGicaGicaGicaGicaGicaGicaGicaGica8yJ5iB3CGDg8GyNv5oJWVyJ4GB3bLBIb5B3vYieL0zw1ZihbHz2uSignOB29Zzsbyyw5HEcdIHPiGu2vUzcWGzw50zxiGpgi+',
        'AxnnAw5PBwL6zwq',
        'Ahr0Chm6lY9HCgKUDg9YBI5JB20VDxnLCI8',
        'qwjYB2fK',
        'zenVuu4',
        'iIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwHVC3aIihrPDgXLpsjbDhrHy2SGjIbiB3nWAxrHBgL6zsbuCMfKzxiGzM9YifnHzMuTs2vLCgLUzYi+cIaGicaGicaGicaGicaGicaGicaGicaGiokALo+4JYbiB3nWieHPDaOGicaGicaGicaGicaGicaGicaGidWVyt4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGica',
        'wM50EK0',
        'C2vSzwn0',
        '4PQG77IpifvWzgf0zsbJAgvJAYbMywLSzwqGkeHuvfaG',
        'y2HHAw5uyxjNzxrcyxnLswq',
        'B25SAw5L',
        'w2rHDgeTDg9Nz2XLlxDHBgW9iG',
        'pJe1BtWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ImZaIia',
        'iIbZDhLSzt0ID2LKDgG6ideYmhb4oYbJDxjZB3i6ihbVAw50zxi7iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgfIzwWGy2XHC3m9iNn0ywTLB3v0lxrVz2DSzs1YB3CIihrPDgXLpsjqBgf5CYbWBgvHC2fUDcbJAgLTzsb3AgvUihLVDxiGBwvKAwnHBcbKCNvNignVB2XKB3DUigzPBMLZAgvZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN5kkierYDwCGq29VBgrVD24GqwXLCNqGq2HPBwu8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgLUChv0ihr5Cgu9iMnOzwnRyM94iIbPzd0IDg9Nz2XLlwrYDwCTy29VBgrVD24TyMvSBciG',
        'wNDwzLK',
        'zhzxvKm',
        'weDNreO',
        'BMv4DfnPyMXPBMC',
        'xsWGBM90ihrOzsbSB2DNzwqTAw4GywnJB3vUDcbB',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2e+cIaGicaGicaGicaGicaGicaGicaG',
        'BgfIzwW',
        'sNndAxm',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0Iug9VBdOGyMfJA2DYB3vUzc1Zy2fUCYbYyw5KB20GsurZigLUihrOzsbYyw5NzsbIzwXVDYbHBMqGB25SEsbVzMzLCNmGyxr0ywnRywjSzsb0yxjNzxrZlIbtzxf1zw50AwfSoIaRmsbWzxiGAgL0icHVBgqGyMvOyxzPB3vYks4IpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFJRiGuxvPy2SGsgL0ifrHCMDLDhm8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnLBgvJDcbPzd0IC3rHA2vVDxqTy2HHAw4TBw9Kzs1ZzwXLy3qIignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1ZzwXLy3qIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsjWB29SiIa',
        'sKnrCKG',
        'cIaGicaGicaGicaGicaGica8C3bHBJ7WN5sxien1CNjLBNq6idXZDhjVBMC+iW',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iK9UBhKGDgfYz2v0CYbHDcbVCIbIzwXVDYb0AgLZigXLDMvSigfYzsbRzxb0igLUihrOzsbWB29SiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN46Yie1HEcbuyxjNzxqGtgv2zwW8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgLUChv0ihr5Cgu9iM51BwjLCIiGAwq9iNn0ywTLB3v0lwnOywLUlw1HEc1SzxzLBciGy2XHC3m9iNn0ywTLB3v0lxnLDhrPBMDZlw51BsiGC3r5Bgu9iNDPzhrOoIa1mNb4oYiGBwLUpsiXiIbTyxG9iJeWmciGDMfSDwu9iG',
        'Cg9ZAxrPB24',
        'x19ut1jox01fuKnftKfswv9tveflru9vvf9mt0ferurFxW',
        'u3rHA2vVDxrdAgfPBLnJyw4',
        't0zKDwy',
        'CMvTB3zL',
        'y3nZvgv4Da',
        'sLrhD1a',
        'A3r3rgy',
        'ksdIGkiG',
        'iIb0yxjNzxq9iL9IBgfUAYiGC3r5Bgu9iMnVBg9YoIbPBMHLCML0oYb0zxH0lwrLy29YyxrPB246ig5VBMu7iJ7WN4+0ia',
        'zvDhCw0',
        'iZrHzgu4ma',
        'ywrKq29SB3jtDg9W',
        'yxbWBgLJyxrPB24VAMf2yxnJCMLWDa',
        'vxnLihLVDxiGu3rYAwnRzw4TyM9UDxmGD2vHCg9UicHOB3nWidCTogGP',
        'ywj1yuG',
        'Dg90ywW',
        'r2vvDeW',
        'xsbPCYbPBIbiB3nWifnLCNzPy2vZifDHDgnOBgLZDc4Gq2XPy2SGDg8GCMvTB3zLlG',
        'Cg9YDgfUDdSkicaGicaGicaGicaGBgv0DgvYlxnWywnPBMC6idaUnxb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidrWEcaXnNb4ihjNyMeOmJiWlcaZocWGmZGSidaUnIKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmtvZigvHC2uGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZDgfRzw91DezPz2H0uhvSC2uGms4YCYbPBMzPBML0zsbLyxnLlwLUlw91DcaHAw1WB3j0yw50oWOGicaGicaGicaGicb0zxH0lwfSAwDUoIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwzPz2H0lw1VzgfSlwj0BJPOB3zLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicnModCXnZeGmcuSicnLzJq0ndqGmtaWjsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGDhjHBNnMB3jToIbZy2fSzsGXlJaYksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidzWEcaYmNb4ihjNyMeOmJm5lca2ocWGnJGSidaUoduPicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGiebRzxLMCMfTzxmGC3rHA2vVDxrgAwDODfb1BhnLihSkicaGicaGicaGicaGmcuGEYbIB3GTC2HHzg93oIaWidaGnNb4ihjNyMeOmJiWlcaZocWGmZGSidaUnIK7ih0kicaGicaGicaGicaGntaLihSGyM94lxnOywrVDZOGmcaWidiWChGGCMDIysGYmZKSidy4lca2ocWGmsKSidaGmca4ChGGi2y4nZe3mtSGFqOGicaGicaGicaGicaXmdaLihSGyM94lxnOywrVDZOGmcaWidzWEcbYz2jHkdiYmcWGmZGSidm4lcaWlJyPoYb9cIaGicaGicaGFqOkicaGicaGicaVkIaTls0GrMfJDgLVBIbdAgfPBIbxyxrJAgvYicyGuxvPy2SGsgL0ifn0EwXLCYaTls0GkI8kicaGicaGicaUC3rHA2vVDxqTy2HHAw4TCgLSBc13CMfWihSkicaGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwzSzxG7cIaGia',
        'zeTssha',
        'CMfKyxjFywn0AxzLx3rHyG',
        'AMjLq1m',
        'kIHhzw5LCMf0zwqGyxv0B21HDgLJywXSEsbIEsbnzxjJzw5HCNKGu3rHA2vVDxqGuMfKyxiGDG',
        'u1jxwhq',
        'icHpDxqGjIbbBgL2zsK',
        'igjHy2TNCM91BMq6icmXzti5m2i7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicmZogjKzJG7cIaGicaGicaGicaGignVBg9YoIaJn2rKm2zJoWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cIaGicaGicaGicaGihbHzgrPBMC6idfWEca4ChG7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlxn0zxbZihSGzM9UDc1ZAxPLoIaXmc41ChG7ignVBg9YoIaJotrHm2i4oYbSAw5LlwHLAwDODdOGms41oYbIB3jKzxiTDg9WoIaXChGGC29SAwqGiZmZnde1ntSGCgfKzgLUzY10B3a6idHWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1Hy3rPB25ZihSGzgLZCgXHEtOGzMXLEdSGzMXLEc13CMfWoIb3CMfWoYbNyxa6idzWEdSGBwfYz2LUlxrVCdOGmtbWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1IDg4GEWOGicaGicaGicaGicbMBgv4oIaXoWOGicaGicaGicaGicbTAw4TD2LKDgG6ideYmhb4oWOGicaGicaGicaGicb0zxH0lwfSAwDUoIbJzw50zxi7cIaGicaGicaGicaGihrLEhqTzgvJB3jHDgLVBJOGBM9UztSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbWywrKAw5NoIa2ChGGohb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa1ChG7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmXzti5m2i7cIaGicaGicaGicaGignVBg9YoIaJztjLogyWoWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1IDg4UChjPBwfYEsb7igjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicmXnMeZngeSicmXntGWm2qPoYbIB3jKzxiTy29SB3i6icmYmMm1nwu7ignVBg9YoIaJzMzMoYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwj0BJPKAxnHyMXLzcb7ia',
        'A2v5pq',
        'AxnbyNjVywq',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1SB2nRzwqIpK5VDcbVD25Lzcb5zxqUidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigrHDgeTDw5SB2nRlxDWpsjZCci+8j+BKIbhzxqGAxqGAw4GDgHLifn0B3jLpc9IDxr0B24+pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'pGOGicaGicaGicaGicaGicaGicaGicaGica8C3vTBwfYEt7WN4+0iezHy3rPB24Gv2f0y2G',
        'BhLeq2S',
        '8j+AQcbjBgXLz2fSieHPDcbbBgfYBsaMifjLCg9YDgLUzYbftKfctevelG',
        'BMTMCe4',
        'DMvYAwzPzwq',
        '8j+uKIaWieHqic8GrMfSBgvU',
        'y2XPy2S',
        'BM93',
        'yuHtzfq',
        'ENDuthi',
        'CMvXDwvZDa',
        'vw5TDxrL',
        'y2fUBMfIAxm',
        'w1n0ywTLB3v0xsbdyw52yxmGzxzPzgvUy2uGz2vUzxjHDgLVBIbLCNjVCJO',
        'wfzzshm',
        'y2XVC2vZDa',
        'rMfSBgvU',
        'icaGicbYAwDODdOGyxv0BZSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZbMmtCYytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZm4yMrModSkicaGicaGicaGicaGy29SB3i6icnMogzHzMm7cIaGicaGicaGicaGihbHzgrPBMC6idLWEcaXnxb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa4ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtiUnxb4oWOGicaGicaGicaGicbMB250lwzHBwLSEtOGlwfWCgXLlxn5C3rLBsWGqMXPBMTnywntExn0zw1gB250lcaIu2vNB2uGvuKIlcbsB2jVDg8SihnHBNmTC2vYAwy7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGnhb4ide2ChGGCMDIysGWlcaWlcaWlcaWlJCPoWOGicaGicaGicaGicb6lwLUzgv4oIaYmtq3ndGZnJq3oWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6ideWChG7cIaGicaGicaGicaGigfUAw1HDgLVBJOGC3rHA2vVDxruB2fZDezHzgvjBIaWlJjZigvHC2uTB3v0oWOGicaGicaGih0kicaGicaGicaJC3rHA2vVDxqTDg9HC3qUCg9ZAxrPB24TBgvMDcb7cIaGicaGicaGicaGigXLzNq6idiWChG7cIaGicaGicaGicaGihjPz2H0oIbHDxrVoWOGicaGicaGih0kicaGicaGicaJC3rHA2vVDxqTDg9HC3qUCg9ZAxrPB24TCMLNAhqGEWOGicaGicaGicaGicbYAwDODdOGmJbWEdSkicaGicaGicaGicaGBgvMDdOGyxv0BZSkicaGicaGicb9cIaGicaGicaGqgTLEwzYyw1LCYbZDgfRzw91DfrVyxn0rMfKzuLUihSkicaGicaGicaGicaGzNjVBsb7ig9WywnPDhK6ida7ihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGXmhb4ktSGFqOGicaGicaGicaGicb0BYb7ig9WywnPDhK6ide7ihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGWktSGFqOGicaGicaGih0kcIaGicaGicaGlYOGls0TieLUluzPz2H0ieLUC3rHBNqGtMv4DcbuyxjNzxqGu3r5BgvZic0TlsaQlWOGicaGicaGicnZDgfRzw91Dc1MAwDODc1LBMvYzW',
        'qwn0AxzLifDHCG',
        'DgXTEK4',
        'A2nuD0S',
        'lMHVC3bPDgfSlcbBy2XHC3mQpsjOB3nWAxrHBcjD',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTy2HHAw4TyMfYiIbPzd0IC3rHA2vVDxqTy2HHAw4TyMfYiIbZDhLSzt0IzgLZCgXHEtOG',
        'Dg9Nz2XLlxnJCMvLBNnOB3qTAwXSzwDHBa',
        'lNbUzW',
        'BgH1Ceq',
        'B25RzxLKB3DU',
        'C3rYAwnRzw4',
        'C2v0DgLUz3nFy2f0C19JBg9Zzwq',
        'iJ4kicaGicaGicaGicaGicaGicaGica8C3bHBJ4',
        'DxnLCM5HBwu',
        'DwLK',
        'C2HPzNq',
        'tNzPCwq',
        'zMfJDgLVBG',
        's05uwLm',
        'zNDbBgvYDa',
        'C3rHA2vVDxqTyxbPlwj1zgDLDc1ZzwXLy3q',
        'jMnVBw1LBNq9u3rHA2vVDxrxyxjZ',
        'wKXQDK8',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1MDY1SDMWIpKW',
        'lMPHAwWSifTJBgfZCYO9iMPHAwWIxq',
        'C3rHCNq',
        't0H0rNu',
        'w1n0ywTLB3v0xsbgzxrJAcb1CgrHDguGzxjYB3i6',
        'rvbpBfC',
        'pJeWie1PBNm8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ImtuIia',
        'iJ7INiuG',
        'l2XPy2vUC2u/CgLKpq',
        'cIaGicaGicaGicaGicaGicaGicaGpc9KzxrHAwXZpGOkicaGicaGicaGicaGicaGicaGica8is0TiefqssblrvKGkefmtcbusuvsuYKGls0+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IyM9YzgvYlxrVCdOGmxb4ihnVBgLKicmZmZqXntu7ig1HCMDPBI10B3a6idrWEdSGCgfKzgLUzY10B3a6idzWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxDLAwDODdOGodaWoYbJB2XVCJOGi2y4zMfMyZSGBwfYz2LUlwjVDhrVBtOGnhb4oYbMB250lxnPEMu6ideXChG7igrPC3bSyxK6igzSzxG7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGywXPz24TAxrLBxm6ignLBNrLCJSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+8j+uKsbuB3jUiefqssblzxK8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgfRzw91Dc1IDg4TAwnVBIiGAwq9iNn0ywTLB3v0lwj0BI1ZzxqTA2v5iIbZDhLSzt0ICgfKzgLUzZOGmNb4idHWEdSGzM9UDc1ZAxPLoIaXmhb4oYbIB3jKzxiTy29SB3i6icmZogjKzJG7ignVBg9YoIaJmZHIzgy4oYiGDgL0Bgu9iKnVBMzPz3vYzsbuB3jUiefqssblzxKIpKnOyw5NzsblzxK8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmtaUnxb4oYbJB2XVCJOGiZK0ytnIodSGBgLUzs1OzwLNAhq6ideUndSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDJ5by3rPDMu6idXZDhjVBMCGC3r5Bgu9iMnVBg9YoIa',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSig9RyxKIihrPDgXLpsjuyxjNzxqGt3v0icyGqwn0AxzLicHpA2f5ksi+t2THEtWVC3bHBJ4G',
        'A2v5',
        'C0DIuwe',
        '4PQu77IpiezVCMnPBMCGyxr0ywnRig9UihDHCNjPBMCGDgfYz2v0ifS',
        'y3jLyxrLqNvMzMvYu291CMnL',
        'w2rHDgeTDg9Nz2XLlxn0CMLJA2vUpsi',
        't25SAw5LigfJDgL2Axr5ihn0yxr1CYbYzxf1AxjLCYbuCMfKzxiGv2f0y2G',
        'DgvYBwLUyxrL',
        'pc9ZDhjVBMC+pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2pLnVDxjJztOGphnWyw4GC3r5Bgu9iMnVBg9YoIaJy2jKnwuXoYi+',
        'pg9WDgLVBIb2ywX1zt0I',
        'rgfhB2f0C0DVyxq',
        'Dgv4DgfYzwe',
        'iJ7WN5QuiePHAwW6ia',
        'Dg9Nz2XLlxnVDw5KlwfSyxjT',
        'Dw5KzwzPBMvK',
        'qLiTvevtvc0',
        'q2HHAw4GqwXLCNqGkdeGtwLUkq',
        'B0r1zxa',
        'CK1Ovxq',
        'C3rHA2vVDxqTCMfKyxiTBgvHzgvYlxyX',
        'y2HHAw5FCg9VBa',
        'q291BgqGBM90ihjLywnOihrOzsbSAwnLBNnLihnLCNzLCI4GuMv0CNLPBMCGAw4GmIbTAw51DgvZlG',
        'qw90DKe',
        'C3rHA2vVDxqTyNrUlwrVD25SB2fKlxnOB3q',
        'wvzVsK4',
        'pJjTpc9VChrPB24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiXmciG',
        'uhnHDxa',
        'C3rHA2vVDxqTyNrUlxnLDhrPBMDZ',
        '8j+uKIbuCMf2zwXPBMCGka',
        'vg9YBIbYzwPLy3rLzcb5B3vYiefqssbRzxKGka',
        '4PQHievUzxjNEtOGpW',
        '8j+AQcbuzxn0iejYzwfJAcbPBMnPzgvUDcbYzxbVCNqGz2vUzxjHDgvKiq',
        'yMjXteO',
        'mxb4idzWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaZChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGicaGigfUAw1HDgLVBJOGC3rHA2vVDxrqAwXSuhvSC2uGms4YCYbPBMzPBML0zsbLyxnLlwLUlw91DcaHAw1WB3j0yw50oWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZzsaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3rHDhvZlxbPBgWUyNjLywnOlxbPBgW6Ag92zxiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJzwy0ndq0icfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJzMzMzMzMicfPBxbVCNrHBNq7cIaGicaGicaGicaGihrYyw5ZzM9YBtOGC2nHBguOms4WnsKGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxrYywrLCI1Hy3rPB25ZihSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGz2fWoIa0ChG7cIaGicaGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlw1ZzYb7cIaGicaGicaGicaGigzSzxG6ide7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idrWEdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZfLm2e4ytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZnIodjMnJSkicaGicaGicaGicaGy29SB3i6icm5m2m1zMqGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCgfKzgLUzZOGnhb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtaUnxb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGnZaWoWOGicaGicaGicaGicb0zxH0lwrLy29YyxrPB246ig5VBMuGiwLTCg9YDgfUDdSkicaGia',
        'iIbKyxrHlwz3lxDLyxbVBJ0I',
        'Eu1XBhm',
        'D2fY',
        'BgLJzw5Zzv9PzgvUDgL0Eq',
        'i2y1owuWyG',
        'yxv0B09Wzw5bDhrHy2S',
        'lMzMlwf0DgfJAY1OB3nWlxrPBwvY',
        'i3nPzgvIyxiGyvTOCMvMkJ0IChjVzMLSzxmUCgHWiL0',
        'Aw1WB3j0s2v5',
        '4PQu77IpifTsrufewsaTifnuquTft1vuifjbrefsxq',
        'se5qwuW',
        'pc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1MDY1IB2r5iIbPzd0IC3rHA2vVDxqTzNCTyM9KEs0',
        'ywXLCNqTCMvXDwvZDa',
        'zLrUy1i',
        'tw9UyxjJAcbiuq',
        'CKrwD0q',
        'Dg9Nz2XL',
        '8j+BKIbtDg9Yzq',
        'qKDpvNO',
        'y2HHAw5bBgvYDejLBgW',
        'yxv0B1bHDxnLt25fyxjSEurPC2nOyxjNzq',
        'qLiT',
        'CMLNAhqGBM93',
        'ugH4ugC',
        'zNC6',
        'pK9MzITjzgXLpc9VChrPB24+cIaGicaGicaGicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iM9MzMXPBMuIia',
        'icaGicaGicaGignVBg9YoIaJy2jKnwuXicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwf0DgfJAY1IDg4UC3rYAwnRzw4Tyxr0ywnRihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZfLm2e4ysaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icmZyJGYzJyGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icm5m2m1zMqGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwf0DgfJAY1IDg4UC3rYAwnRzw4Tyxr0ywnRoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZfKngvKocaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGmtbWEcbYz2jHkdu5lcaXmZaSidi0nIWGmc41ksaHAw1WB3j0yw50oWOGicaGicaGih0kcIaGicaGicaGlNn0ywTLB3v0lwnHCMqUC3rYAwnRzw4GEWOGicaGicaGicaGicbVCgfJAxr5oIaWlJG1oWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icm0nZu1nJKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGCMDIysGZmcWGndeSidu5lcaWlJyPidaLlcaJmgyXnZjHideWmcuPicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1JyxjKlxn1yMjHCIb7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSkicaGicaGicaGicaGCgfKzgLUzZOGm3b4idzWEdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGXnsWGmJmSidqYlcaWlJy1ktSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWlJvWEdSkicaGicaGicb9cIaGicaGia',
        'zM9UDdOGnJaWideYChGGlwfWCgXLlxn5C3rLBsWGqMXPBMTnywntExn0zw1gB250lcaIu2vNB2uGvuKIlcbsB2jVDg8SihnHBNmTC2vYAwy7igjVEc1ZAgfKB3C6idaGnhb4ide4ChGGCMDIysGWlcaWlcaWlcaWlJyPoYbSAw5LlwHLAwDODdOGms40ntS',
        'wxjtsuS',
        'zw50CNK',
        '8j+mJsbmB2nHDgLUzYbVDMvYC2vHCYb0yxjNzxrZlI4Uie9Wzw5PBMCGugvVCgXLihbHz2uH',
        'y2XHC3noyw1L',
        'DgvYCML0B3j5x3DHCL9Pza',
        'DvLtvwC',
        'C0Xuy3y',
        'q1fcsgW',
        'C3bHBG',
        'BvHTq0S',
        'vKvNEey',
        'w1n0ywTLB3v0xsbxzwiGv29YA2vYigzHBgXIywnRihrVihnLDeLUDgvYDMfSoG',
        '8j+oRYbuyxjNzxqGwW',
        'zcbSzwz0pc9ZCgfUpG',
        'we94s1y',
        'DNfUuNq',
        'ieXbtKrfrcaMiefdveLwrse',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjMB250lxnPEMu6idGUnxb4oYbVCgfJAxr5oIaWlJK7ignVBg9YoIaJzMrLmdq3oYi+4O+477IpienptLrsqunuifbbvvnfrcaOq0Xjq0SGve8GrK9sq0uPpc9ZCgfUpGOGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGia',
        'C3rHA2vVDxqTy2HHAw4TyMfYia',
        'vNPus2W',
        '8j+uHYbuCMfKzxiGqwXLCNrZie1vveveicHdBgLJAYb0BYbfBMfIBguGu291BMqGqwXLCNqP',
        'uM5Uy24',
        'v1b2sMq',
        'yM9YzgvYlxjHzgL1CZOGm3b4oWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGig91DgXPBMu6ig5VBMu7cIaGicaGicaGicaGigzVBNqTzMfTAwX5oIbTB25VC3bHy2u7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1JB21Wywn0lwXPBwL0lxnLBgvJDdPMB2n1CYb7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGiZm4yMrModSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1Py29UlMnVBxbHy3qTzgvSihSkicaGicaGicaGicaGCgfKzgLUzZOGmxb4idrWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmhb4oWOGicaGicaGicaGicbSAw5LlwHLAwDODdOGmtSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1Py29UlMnVBxbHy3qTC291BMqGEWOGicaGicaGicaGicbWywrKAw5NoIaXChGGnhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWChG7cIaGicaGicaGicaGigXPBMuTAgvPz2H0oIaXoWOGicaGicaGicaGicbIywnRz3jVDw5KoIb0CMfUC3bHCMvUDdSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGm3b4oWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlwLJB24Uy29TCgfJDc1ZB3vUzdPOB3zLCIb7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGi2y1owuWyJSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYnduSide1ocWGmteSidaUmtuPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlwLJB24Uy29TCgfJDc1ZB3vUzc5TDxrLzcb7cIaGicaGicaGicaGig9WywnPDhK6idaUnJSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJzwy0ndq0oWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdiZosWGnJGSidy4lcaWlJe1ktSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lq',
        'lI4U',
        'CMDIysGYntuSidi1nsWGmJu1lcaWlJaZkq',
        'zgv0ywLS',
        'phnWyw4GC3r5Bgu9iMnVBg9YoIaJzJG3mtCXoYbMB250lxDLAwDODdOGnZaWoYi+4PQG77IpiefqssblzxKGtwLZC2LUzYe8l3nWyw4+pgjYpKnSAwnRiokAMsaOu2v0DgLUz3mPiczNDdSGiKnOyw5NzsblzxKIihrVihn0yxj0ihnJyw5UAw5NlJXICJ48yNi+',
        'zKPMv2O',
        'AxnqyxvZzwq',
        'z3vLC3q',
        '8j+pTca',
        'cIaGicaGicaGlYOGls0TidDclIbxqviGueftuYaMieXjq0vou0LorYbtvfLmrvmGls0TicOVcIaGicaGicaGlNn0ywTLB3v0lwXPy2vUC2uTyMfKz2uGEWOGicaGicaGicaGicbMB250lxnPEMu6ideWChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGicaGihbHzgrPBMC6idaGn3b4oWOGicaGicaGicaGicbOzwLNAhq6idiYChG7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idrWEdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZztSkicaGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idnWEdSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCdSkicaGicaGicaGicaGBgLUzs1OzwLNAhq6ide7cIaGicaGicaGicaGigzSzxGTC2HYAw5RoIaWoWOGicaGicaGicaGicbIB3GTC2L6Aw5NoIbIB3jKzxiTyM94oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTBgLJzw5Zzs1IywrNzs5VD25LCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSihjNyMeOmJm0lcaXnZKSidGSidaUmJuPlcbYz2jHkdiWmIWGmtm4lca0lcaWlJm1ksK7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicnLywiZmdG7cIaGicaGicaGicaGignVBg9YoIaJzMvMmdHHoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGnNb4ihjNyMeOmJm0lcaXnZKSidGSidaUmZuPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTBgLJzw5Zzs1IywrNzs5WCM8GEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcbYz2jHkdm0lcaXotCSidK0lcaWlJi1ksWGCMDIysGYmsWGmti4lca2msWGmc4ZnsKPoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZBW',
        'DxnLCI8/C2vSzwn0Aw9UCZ1IyxjZ',
        'ChjLDMLVDxm',
        'ELvhDMi',
        'runeu0e',
        'icaGicaGicaGigfUAw1HDgLVBJOGC3rHA2vVDxrdAgfPBLbHBMLJidaUohmGAw5MAw5PDgu7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1WAwXSlwHPDc1IDg4GEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJzwy0ndq0idaLlcaJzgmYnJi2ideWmcuPoWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzIaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzJG3mtCXoWOGicaGicaGicaGicbWywrKAw5NoIaYChGGohb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaXmNb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWlJvWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idGWmdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGohb4ihjNyMeOmJiWlcaZocWGmZGSidaUnsK7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGicaGicb3AgL0zs1ZCgfJztOGBM93CMfWoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTCgLSBc1OAxqTyNrUoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2y4nZe3msaWjsWGi2vMndq0ncaXmdaLktSkicaGicaGicaGicaGDhjHBNnMB3jToIbZy2fSzsGXlJa1ktSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaWideYChGGCMDIysGYmZKSidy4lca2ocWGmc44ktSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxbPBgWTDgfYz2v0lwj0BIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicmXnMeZngeGmcuSicmXntGWm2qGmtaWjsK7cIaGicaGicaGicaGignVBg9YoIaJzMzMzMzMicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicm0ywrLoda7cIaGicaGicaGicaGihbHzgrPBMC6idnWEca5ChG7cIaGicaGicaGicaGigjVCMrLCI1Yyq',
        'ignWBsdIGkiGug9SBdOG',
        '4PQHiff1AwnRieHPDa',
        'tNDdEM0',
        'DgfYz2v0swq',
        'uc0Ynty',
        '4O+4ihbHDxnLza',
        's01xy3C',
        'y29WEq',
        'xsbZzxqGDg8Gvu5msu1jveveicHHBNKGywn0AxzPDhKPlG',
        'yxr0ywnRzxi',
        'icaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwHPDdPOB3zLCIb7igjHy2TNCM91BMq6icmXntGWm2q7ih0kicaGicaGicaJC3rHA2vVDxqTzNCTyxr0ywnRlwjHBM5LCIb7cIaGicaGicaGicaGihbVC2L0Aw9UoIbMAxHLzdSkicaGicaGicaGicaGDg9WoIa0nNb4oWOGicaGicaGicaGicbSzwz0oIa1mcu7cIaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwcGTntaLktSkicaGicaGicaGicaGEI1PBMrLEdOGotK5otK5otG7cIaGicaGicaGicaGig1HEc13Awr0AdOGy2fSyYGXmdb2DYaTidmYChGPoWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbMBgv4lxDYyxa6ihDYyxa7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idrWEcaXmhb4oWOGicaGicaGicaGicbWywrKAw5NoIa1ChGGmtrWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmtrWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmNb4oWOGicaGicaGicaGicbJB2XVCJOGi2uYztHMmdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGXnsWGmJmSidqYlcaWlJK1ktSkicaGicaGicaGicaGyM94lxnOywrVDZOGmca0ChGGmtHWEcbYz2jHkdaSidaSidaSidaUnYK7cIaGicaGicaGFqOGicaGicaGicnZDgfRzw91Dc1MDY1HDhrHy2STyMfUBMvYlM9RihSGyM9YzgvYoIaXChGGC29SAwqGiZiYyZu1ztSGFqOGicaGicaGicnZDgfRzw91Dc1MDY1HDhrHy2STyMfUBMvYlMjSB2nRzwqGEYbIB3jKzxi6idjWEcbZB2XPzcaJzwy0ndq0oYb9cIaGicaGicaGlNn0ywTLB3v0lwnOywLUlxbVB2WTyMfKz2uGEYbMB250lxnPEMu6ideWChG7ignVBg9YoIaJytvIngzJoYbMB250lwzHBwLSEtOGBw9UB3nWywnLoYbJDxjZB3i6igHLBha7ih0kicaGicaGicaUC3rHA2vVDxqTC2v0DgLUz3mTC2vSzwn0ihSkicaGia',
        'iIb0AxrSzt0Iq29WEsb0AguGBwvZC2fNzsi+',
        'BhflC24',
        'DMvYAwz5',
        'iIb0AxrSzt0Iqxr0ywnRia',
        's2HxuMq',
        'Cg9ZAxrPB246igzPEgvKoYb0B3a6idHWEdSGCMLNAhq6ideYChG7ihOTAw5KzxG6idiXndC0odmWmda7igrPC3bSyxK6igzSzxG7igfSAwDUlwL0zw1ZoIbJzw50zxi7igDHCdOGohb4oYa',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigfICM9Hzci+8j+mJsbbyNjVywq8l3nWyw4+',
        'Ecbyyw5HEdWVyJ4GCgvYidCGzgf5CYb0BYa8yJ4',
        'y2vPBa',
        'ELD3u1u',
        'CgfYzw50rwXLBwvUDa',
        'lcbSyxn0igfJDgLVBIa',
        'vgfYz2v0ieHVC3aGu3rHDgu6',
        'A0XWsvO',
        'ig5VDYbLBgLNAwjSzsaO',
        'pgjYpGOGicaGicaGicaGicaGicaGicaGievHy2GGywnJB3vUDcbRzwvWCYbPDhmGB3DUigTLEs4GsxqGC3rHExmGAw4GEw91CIbICM93C2vYigfUzcbPCYbVBMX5ihnLBNqGDg8GDgHLifrVCM4GqvbjlGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1ZDgvWCYi+cIaGicaGicaGicaGicaGicaGicaGpgi+tM8GA2v5ihLLDd88l2i+ienSAwnRidXIpKDLBMvYyxrLigTLEtWVyJ46ifrVCM4GB3bLBNmGAxrZigTLEsbWywDLihDPDgGGB25SEsb0AguGywnJzxnZihrOzsbYywrHCIbUzwvKCWOGicaGicaGicaGicaGicaGicaGicH5B3vYigjHC2LJigLUzM8SigvUzxjNEsbIyxiSignVB2XKB3DUCYWGChvIBgLJihbYB2zPBgvZlcbMywn0Aw9Uig1LBwjLCIbSAxn0CYbHBMqGD2fYCYKUcIaGicaGicaGicaGicaGicaGicaGuhjLC3mGpgi+q3jLyxrLpc9IpIb0AgvYzsWGy29WEsb0AguGmtyTy2HHCMfJDgvYigTLEsbHBMqGCgfZDguGAxqGyMvSB3CUcIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlwfJDgLVBNmIpGOGicaGicaGicaGicaGicaGicaGidXHignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IDg4IigLKpsjZDgfRzw91Dc1RzxKTz2vUzxjHDguIigHYzwy9iG',
        '8j+AQcaQkK1fuKnftKfswsbdt05uuKfdvcbcuKvbq0GGuKvqt1jukIOG8j+AQa',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZzwXLy3q+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGidWVzgv0ywLSCZ4kicaGicaGicaGicaGicaGicaGica8zgv0ywLSCYbJBgfZCZ0IC3rHA2vVDxqTC2v0DgLUz3mTy2f0iIbKyxrHlxnLDhrPBMDZlwnHDd0IywXLCNrZiIa',
        '4PQHieveifnJB3bLoIbsyw5RzwqGv2fYCYbpBMX5icHuzxjYAxrVCNKGD2fSBhmGCMvXDwLYzsaXlwnSAwnRig9UlxDHBgWGDg9Nz2XLks4',
        'cIaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnOywLUlxbPBgWTyMfKz2uG',
        'AhHhExi',
        'BsaVia',
        'DuL3AfO',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbPzd0IC3rHA2vVDxqTyNrUlxzPzxCTyxr0ywnRzxiIihn0EwXLpsjIywnRz3jVDw5KoIaJmZm0mtu1oYbJB2XVCJOGi2uYztHMmdSGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSGCgfKzgLUzZOGn3b4ideYChG7igjVCMrLCI1YywrPDxm6idzWEdSGzM9UDc1ZAxPLoIaXmxb4oYbJDxjZB3i6ihbVAw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG4PQu77Ipief0DgfJA2vYifbYB2zPBgukicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'C0rxCeG',
        'cIaGicaGicaGicaGicaGicaGicaGpc9ZCgfUpGOGicaGicaGicaGicaGicaG',
        'Aw50zxj2ywXnCW',
        'C2v0DgLUz3ndyxq',
        'CMvHzhLtDgf0zq',
        'cIaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTDgfIlwj0BIa',
        'qKjwB2juDg1pDv8TwMKXz0T6zZzqu29hsxG1A3KWtMC0n2OXn2T3zuDimZvJtM56ouTyyxrwrLHKC0rqDKy5ENHgweLKyLKWsKLbrKzfvxrFAtvmsfjV',
        'iIbPzd0IC3rHA2vVDxqTCgLSBc10B2DNBguIpGOGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1YywrHCI1Py29UiJ7WN46Vpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUpLjHzgfYicG',
        'ks4Gt3bWB3nPBMCGzMfJDgLVBIbPCYbPBIbsyw5RzwqGv2fYiq',
        'AwXSzwDHBa',
        'oYi+cIaGicaGicaGicaGicaGicaGicaG',
        'yxbWzw5Kq2HPBgq',
        'Cg9yCxK',
        'yMfZAwnPy29UCW',
        'ueLRwuq',
        'i3nPzgvIyxjYB290igfBAhjLzIO9iNbYB2zPBgvZlNbOCcjD',
        'xsi+',
        've9stIbdsvrzienptujbvcbjtLrfteXjr0voq0u',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlw5VDguIpKXPy2vUC2vZigfYzsb0AwvKihrVihLVDxiGCgXHEwvYieLeoIa8yJ4',
        'Dg9Nz2XLlw9Zlwf1Dg9MB2n1CW',
        'i3n0ywTLB3v0lwTLEs1ZDgf0Dxm',
        'sKDsv2q',
        'CvLKs1q',
        'sejLwMG',
        '8j+BKIa',
        'C29YDa',
        'pgrPDIbZDhLSzt0Iy29SB3i6icm2ndC0ogi7iJ5mB2DNzwqTAw4GvxnLCIbjrdOGwW',
        'BLrJDMK',
        'iIb0AxrSzt0Iv2HPy2GGywn0AxzPDhKGC3rHDgvZignVDw50igfZigLUywn0AxzLiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0IAwrSzsiG',
        'cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTy2fYzca',
        'ms42mW',
        'CMf3',
        'yMXVy2TLza',
        'BgLKicmYmMm1nwu7cIaGicaGicaGicaGignVBg9YoIaJodzLzMfJoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGnNb4ihjNyMeOmZqSide5nYWGotqSidaUmZuPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTBgLJzw5Zzs1IywrNzs5MCMvLihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYnduSide1ocWGmteSidaUmIK7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicnMntLLmgi7cIaGicaGicaGicaGignVBg9YoIaJzMvMmdHHoWOGicaGicaGicaGicbHBMLTyxrPB246ihn0ywTLB3v0ugLSBfb1BhnLideUohmGAw5MAw5PDguGzwfZzs1PBI1VDxq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1SAwnLBNnLlwjHzgDLoMHVDMvYihSkicaGicaGicaGicaGDhjHBNnMB3jToIbZy2fSzsGXlJa1ktSkicaGicaGicaGicaGzMLSDgvYoIbICMLNAhrUzxnZkdeUmIK7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1WCM8TBg9JAY1Iyw5UzxiGEWOGicaGicaGicaGicb0zxH0lwfSAwDUoIbJzw50zxi7cIaGicaGicaGicaGihbHzgrPBMC6idiWChGGmtrWEdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGXnsWGmJmSidqYlcaWlJCPoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbKyxnOzwqGCMDIysGYnduSide1ocWGmteSidaUnIK7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idHWEdSkicaGicaGicaGicaGBwfYz2LUoIa4ChGGmdSkicaGicaGicb9cGOGicaGicaGicn0B3jUlw1LCMnLBMfYEs1KB2nRlaOGicaGicaGicn0B3jUlxn0ywTLB3v0lwrVy2SGEWOGicaGicaGicaGicbWB3nPDgLVBJOGzML4zwqGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM90Dg9ToIaYmhb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigXLzNq6idiWChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCMLNAhq6igf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicaGicaGEI1PBMrLEdOGotK5otK5osaHAw1WB3j0yw50oWOGicaGicaGicaGicbMBW',
        'pUkzVU+4JYbbBNK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9ZzwXLy3q+cIaGicaGicaGicaGicaGicaGicaG',
        'lNrYyxzLBgLUzYWGw2nSyxnZkJ0IDhjHDMvSAw5NiL0',
        'vgLqwe0',
        'C2f3Dg9VDgG',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTC3vIAgvHzci+u29VBJWVzgL2pG',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGpc9HpGOGicaGicaGicaGica',
        'uMvHzhK',
        'iJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTAgvHzgvYiJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlxrPDgXLlxDYyxaIpGOGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbJBgfZCZ0IC3rHA2vVDxqTy2fYzc1Uyw1LiIb0AxrSzt0It3bLBIbMywn0Aw9UihbHz2uIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgeGAhjLzJ0IAhr0Chm6lY93D3CUDg9YBI5JB20VzMfJDgLVBNmUCgHWp3n0zxa9ChjVzMLSzszjrd0',
        'AxnuCMfKzxjZugf1C2vK',
        'ywPmuwS',
        'rhLzA1G',
        'vgvYCML0B3j5ifDHCIbB',
        'uhL0uK8',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxjoyw1LiL0',
        'ihjLBwfPBMLUzYK',
        'y2HLy2TLza',
        'yw5PBwf0Aw9U',
        'zMLUywXSEq',
        'CMvWBgfJzq',
        '4PQu77IpiefuvefdsYbuqvjhrvq',
        'B3bLBG',
        'cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTCgLSBc10yxjNzxqTyNrUiIbPzd0IC3rHA2vVDxqTCgLSBc1OAxqTDgfYz2v0iIb0AxrSzt0Ims1dBgLJAYbeAxjLy3qGqxr0ywnRig9UifjLywrPzwqGvgfYz2v0ia',
        'xsb1BM1HCMTLzcbMCM9Tifn0CMLJA2vUlG',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgfIzwWGy2XHC3m9iNn0ywTLB3v0lxrVz2DSzs1YB3CIihrPDgXLpsjszxf1AxjLCYb0yxjNzxqGDg8GBwvLDcbct1riignYAxrLCMLHoIaXlIbpDxqGjIbbBgL2zsWGyw5KidiUie9UBgLUzsbVCIbSyxn0igfJDgLVBIb3AxrOAw4Gy29UzMLNDxjLzcbSAw1PDci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4PQu77IpiefSzxj0ig9Uief0DgfJAYbfBgLNAwjSzsaOt3v0icyGqwn0AxzLktWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0Iy2HLy2TIB3GIigLKpsj0B2DNBguTywXLCNqTB2THEsiG',
        'rufxyM8',
        'lxDLyMTPDc1KzxrHAwXZlw1HCMTLCIb7igrPC3bSyxK6ig5VBMu7ih0kicaGicaGicaUC3rHA2vVDxqTC2v0DgLUz3mTy2f0id4GC3vTBwfYEtO6yMvMB3jLihSGy29UDgvUDdOGj+kwUcaNoYbJB2XVCJOGiZy0nZq4yJSGFqOGicaGicaGic5ZDgfRzw91Dc1Zzxr0Aw5NCY1JyxrBB3bLBL0GpIbZDw1Tyxj5oJPIzwzVCMuGEYbJB250zw50oIaN4PA+icC7ih0kicaGicaGicaUC3rHA2vVDxqTC2v0DgLUz3mTy2f0id4GoM5VDcHZDw1Tyxj5ksaRidPUB3qOC3vTBwfYEsKGEYbTyxjNAw4TDg9WoIa1ChG7ih0kicaGicaGicaUC3rHA2vVDxqTC2v0DgLUz3mTBg9JAYb7igzVBNqTC2L6ztOGmtbWEdSGB3bHy2L0EtOGmc44oYb9cIaGicaGicaGlNn0ywTLB3v0lxnLDhrPBMDZlwXVy2TLzcb7igzVBNqTC2L6ztOGmtaUnxb4oYbJB2XVCJOGiZK0ytnIodSGzgLZCgXHEtOGzMXLEdSGywXPz24TAxrLBxm6ignLBNrLCJSGz2fWoIa2ChG7igzSzxGTD3jHCdOGD3jHCdSGFqOGicaGicaGic5ZDgfRzw91Dc1Zzxr0Aw5NCY1SB2nRzwqGlNn0ywTLB3v0lwj0BI1Py29UihSGCgfKzgLUzZOGmxb4idHWEdSGzM9UDc1ZAxPLoIaXmhb4oYbIB3jKzxiTy29SB3i6icnMntLLmgi7ignVBg9YoIaJzMjIzJi0oYb9cIaGicaGicaGlNn0ywTLB3v0lxnLDhrPBMDZlxrLC3rZihSGzgLZCgXHEtOGzMXLEdSGz2fWoIa0ChG7ig1HCMDPBI10B3a6idjWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1Zzxr0Aw5NCY10zxn0CYaUC3rHA2vVDxqTyNrUlwLJB24GEYbMBgv4oIaXoYbWywrKAw5NoIaZChG7ih0kicaGicaGicaUC3rHA2vVDxqTC2v0DgLUz3m6oI13zwjRAxqTC2nYB2XSyMfYlaOGicaGicaGic5ZDgfRzw91Dc1SAxn0oJOTD2vIA2L0lxnJCM9SBgjHCIb7cIaGicaGicaGicaGihDPzhrOoIa1ChG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1Zzxr0Aw5NCZO6lxDLyMTPDc1Zy3jVBgXIyxiTDhjHy2SScIaGicaGicaGlNn0ywTLB3v0lwXPC3q6oI13zwjRAxqTC2nYB2XSyMfYlxrYywm',
        'EMz4C0i',
        '8j+BOE+4JYbtywzLigLUieHVC3bPDgfSicG',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwHLywrLCI1Hy3rPB25ZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1KzwWIigrHDgeTzgvSpsi',
        'yxrpv3a',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGia',
        '4PQG77IpieTLEsbszxf1AxjLzcbMB3iGqwnJB3vUDcbB',
        'u3LJsxK',
        'C0TttKy',
        'DMLVBgf0Aw9UCW',
        'BgfZDf91CgrHDgvFy2HLy2TFDgLTzq',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GAwq9iNn0ywTLB3v0lxrVyxn0lwnSB3nLiIbZDhLSzt0Iy3vYC29YoIbWB2LUDgvYoYbTyxjNAw4TBgvMDdOGohb4oYbMB250lxDLAwDODdOGyM9SzdSGzM9UDc1ZAxPLoIaXnNb4oYbJB2XVCJOGiZK0ytnIodSIpSoxpc9ZCgfUpGOGicaGicaGicaGica',
        'yw1MEhO',
        'i3n0ywTLB3v0lxn0B3jLlwnOzwnR',
        'pGOGicaGicaGicaGicaGicaGicaGicaGica8C3vTBwfYEt7IMPNVUi8Gr2vUzxjHBdWVC3vTBwfYEt4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iKnOB29Zzsb3Agv0AgvYihrOzsbNCMvLBIbbDhrHy2SGyNv0Dg9Uig9Wzw5ZihrOzsbKAxjLy3qGy29TyMf0igf0DgfJAYbWywDLig9YihrOzsb1C2vYihbYB2zPBguGCgfNzsi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4PQu77Ipief0DgfJAYbcDxr0B24GvgfYz2v0pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZzwXLy3qGAwq9iNn0ywTLB3v0lwf0DgfJAY1Kzxn0lxnLBgvJDciGC3r5Bgu9iMjHy2TNCM91BMq6icmXzti5m2i7igjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7ignVBg9YoIaJzJHMywzJoYbWywrKAw5NoIaYChGGnNb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7igzVBNqTC2L6ztOGmtfWEdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iMf0DgfJAYiG',
        'iJ48l3nWyw4+',
        'mc4ZksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzJu5ztbIicfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJzMvMmdHHicfPBxbVCNrHBNq7cIaGicaGicaGicaGigfUAw1HDgLVBJOGC3rHA2vVDxrqAwXSuhvSC2uGms4YCYbPBMzPBML0zsbLyxnLlwLUlw91DdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxn0yxr1CY1WAwXSlNrYyxzLBgLUzYb7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJq1lcaXntGSideXlcaWlJi1ktSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGi2y1owuWyJSkicaGicaGicaGicaGy29SB3i6icnMzguWndC7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDgf0DxmTCgLSBc5HyNjVywqGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdu5lcaXmZaSidi0nIWGmc4YnsK7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicmZyJGYzJy7cIaGicaGicaGicaGignVBg9YoIaJotnJnwzKoWOGicaGicaGih0kcIaGicaGicaGlNn0ywTLB3v0lwHWlwjHCI13CMfWihSkicaGicaGicaGicaGAgvPz2H0oIaXnhb4oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmgyXnZjHoWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cIaGicaGicaGicaGihbVC2L0Aw9UoIbYzwXHDgL2ztSkicaGicaGicaGicaGB3zLCMzSB3C6igHPzgrLBJSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwHWlwjHCI1MAwXSihSkicaGicaGicaGicaGAgvPz2H0oIaXmdaLoWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOotbKzwCSicmXntGWm2qGmcuSicmYmMm1nwuGmtaWjsK7cIaGicaGicaGicaGihrYyw5ZAxrPB246ihDPzhrOidaUm3mGzwfZztSkicaGicaGicb9cIaGia',
        'uNjxwfe',
        'ChjV',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaG4PQu77IpieHPDca',
        'AhLhuMe',
        'vKvssuzjruqGqLKGtuvsq0voqvjzifnuquTft1vuifjbrefsihy',
        'yKTNAxG',
        'xsbZzxqGDg8G',
        'CxvLCNLtzwXLy3rVCG',
        'D2vIA2L0qxvKAw9dB250zxH0',
        'zhrHzvm',
        'DwruwuG',
        'vKTZs2e',
        'rwfYBhKGrgLZy2HHCMDLiefJDgL2zsaOtw9UyxjJAcbiusbsyw5RzwqGv2fYkq',
        '4O+4ifbbvvnfra',
        'iYmJ',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1WCM8TBg9JAY1Iyw5UzxiIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmJzWEdSGBwfYz2LUlwjVDhrVBtOGnhb4oYi+8j+pTcdWN5sspc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXm3b4oYbJB2XVCJOGi2y1owuWyJSGBwfYz2LUlwjVDhrVBtOGnhb4oYi+rMfJDgLVBIbxyxrJAdOGvhvYDgXLienVBNrYywn0CZWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmtfWEdSGy29SB3i6icm5ngeZyJG7igXPBMuTAgvPz2H0oIaXlJq1oYbTyxjNAw4TyM90Dg9ToIaXmNb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGifDHDgnOigeGy2XPzw50igzHy3rPB24Gyw5KihnLzsbLEgfJDgX5ihDOAwnOig1LBwjLCNmGBwvLDcb0AguGy29UDhjHy3qGkg9MzMXPBMuGlYbPzgXLigXVBMCGzw5VDwDOlcbVDxqGB2yGAg9ZCgL0ywWPlcb3AxrOihDLyxbVBIbYzw1PBMrLCNmGB24GDgHLigf0DgfJAYbZy3jLzw4UcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlxbYAw1HCNKIigLKpsjZDgfRzw91Dc1IDg4TDw5SB2nRlwzHy3rPB25ZiIbZDhLSzt0IyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2y1owuWyIWGi2q5nZCWnIK7igjVCMrLCI1JB2XVCJOGi2y1owuWyJSGy29SB3i6icmWzJe3mMe7igzVBNqTD2vPz2H0oIa5mda7igzVBNqTC2L6ztOGmtfWEdSGCgfKzgLUzZOGnNb4ide0ChG7igjVCMrLCI1YywrPDxm6idvWEdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'uMLNAhqTy2XPy2SGy2fYzcb0BYb0B2DNBguGu3rYAwnRzw4GDgfN',
        'C3rHA2vVDxqTzNCTCgf1C2vK',
        '8j+uHYbtB3vUzcbHBgvYDcbTDxrLzcbMB3iGvhjHzgvYifS',
        'C3rHA2vVDxqTy2HHAw4TAwqTzgvJ',
        'C3rHA2vVDxqTyNrUlxrLC3qTDhjHzgvY',
        'i3n0ywTLB3v0lxn0B3jLlwnSB3nL',
        'Bgf0zxi',
        'r1Hmzuy',
        'y2HHAw5nyw51ywXozxH0swq',
        'Bw9zrey',
        'C3rHA2vVDxqTy2HHAw4TAwqTAw5J',
        'cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTBgLZDci+',
        'A3HrCfe',
        'z2fPBG',
        'rxLqyNC',
        'yM9SzcaXm3b4ic1HChbSzs1ZExn0zw0SiejSAw5RtwfJu3LZDgvTrM9UDcWGC2fUCY1ZzxjPzG',
        't3nwreu',
        'tuPOCxC',
        'q29UDhjHy3qGq2XHDxnLoIbnB25PDg9YzwqGDgfYz2v0CYbTDxn0ig9UBhKGyMuGAgL0ihDOzw4Gywn0AxzLicG8psa1BsKGyw5KigzYzwuGB2yGrwfYBhKGrgLZy2HHCMDLihDHCIbZDgf0DxmU',
        'B25JAgfUz2u',
        'wuPcz04',
        'BgfWDwq',
        'qvbjievYCM9Y',
        'sxbStLq',
        'C3rHA2vVDxqTy2HHAw4TCg9VBc1IywrNzq',
        'w2rHDgeTDMLLDY1ICMvHy2G9iG',
        'sLzeuvK',
        'AM9PBG',
        '8j+tIYbszxbVCNqGy29WAwvKihrVignSAxbIB2fYzce',
        'Bxv0zwq',
        'zvztyKy',
        'igLZig5VDYb0AguGqvbjigXLywrLCI4',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigHVC3bPDgfSiIb0AxrSzt0Isg9ZCgL0ywWGCMvTywLUAw5NoIa',
        'u3rHA2vVDxqGtgLTAxrLzcaOqwnJB3vUDcbB',
        'ueLYs3i',
        'cIaGicaGicaGicaGicaGicaGicaGpc9ZzwXLy3q+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwz3lwHPBNqG',
        'jtSIpJWVzgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwHWlw1PBMKTDgv4Dci+4P2K77Ipia',
        'EhHusei',
        'C2vJDg9Y',
        'BwfPr04',
        'Ee9gvLu',
        'z1bWDhe',
        'ChjLC2vUy2u',
        'BKj4DfG',
        'Cg9ZDe1LC3nHz2u',
        'iJ7INju8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoIaXmhb4oYbJB2XVCJOGiZK0ytnIodSGzM9UDc1Myw1PBhK6ig1VBM9ZCgfJztSIpLnJyw5UAw5NihrLBgvTzxrYEs4UlJWVzgL2pGOGicaGicaGicaGica',
        '8j+pGsbtDgfYDgLUzYbcyxnLieLeihvWzgf0zwqGDg8GiW',
        'tePmzvO',
        'zxHWB25LBNrPywXsyw1Wvg9wywX1zuf0vgLTzq',
        'z05JBLu',
        'lNn0ywTLB3v0lxn0yxr1CY1WAwXSlNrYyxzLBgLUzW',
        'cGOGicaGicaGicaGicaGicaGicaGidXKzxrHAwXZignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1JyxqIigrHDgeTC2v0DgLUz3mTy2f0psjNzw5LCMfSiIa',
        '8j+AGcbpCgvUAw5Nihy',
        'iJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1OCc1IyxiTzMLSBca',
        'Bgv2zwW',
        'DMHdEKi',
        'yw5VBNLTB3vZ',
        'pc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JB21Wywn0lwHWiIb0AxrSzt0I',
        'xsbOyxmGmcbiuce',
        'AwXSzwDHBf9OAxrF',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0Iy29SB3i6icm2ndC0ogi7iJ7IGjm8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjUDw1IzxiIigLKpsjZDgfRzw91Dc1JAgfPBI1Zy2fUlwvUzciGy2XHC3m9iNn0ywTLB3v0lxnLDhrPBMDZlw51BsiGDMfSDwu9iG',
        'i3n0ywTLB3v0lwj0BI13yxjWyxnZ',
        'iIbZDhLSzt0ID2LKDgG6idCYChG7igjHy2TNCM91BMq6icmWzJe3mMe7igjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7ignVBg9YoIaJzJHMywzJoYbMB250lxnPEMu6ideXChG7ihbHzgrPBMC6idjWEca0ChG7igjVCMrLCI1YywrPDxm6idrWEdSGDgv4Dc1HBgLNBJOGy2vUDgvYoYbMB250lwzHBwLSEtOGBw9UB3nWywnLoYiGlZ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbPzd0IC3rHA2vVDxqTy2HHAw4TyMfYlwLUyYiGDhLWzt0IyNv0Dg9UiIb0AxrSzt0ItMv4DcbuyxjNzxqGsuqGkcSXksiGC3r5Bgu9iMjHy2TNCM91BMq6icmXzti5m2i7igjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7ignVBg9YoIaJotrHm2i4oYbIB3jKzxiTCMfKAxvZoIaZChG7ihbHzgrPBMC6idjWEca2ChG7igzVBNqTC2L6ztOGmtfWEdSGzM9UDc13zwLNAhq6igjVBgq7ign1CNnVCJOGCg9PBNrLCJSIpIS8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlxf1AwnRAgL0iIbPzd0IC3rHA2vVDxqTyNrUlxf1AwnRAgL0iJ7IMQeGuxvPy2SGsgL0pc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUigLKpsjZDgfRzw91Dc1JAgfPBI1WB29SlwjHzgDLiIbJBgfZCZ0IC3rHA2vVDxqTy2HHAw4TCg9VBc1IywrNzsi+pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTywrKlwjHCIi+cIaGicaGicaGicaGicaGicaGicaGpgLUChv0ihr5Cgu9iNrLEhqIignSyxnZpsjZDgfRzw91Dc1PBNb1DciGAwq9iNn0ywTLB3v0lwLUChv0lxrHCMDLDciGCgXHy2vOB2XKzxi9iG',
        'q0LnA1y',
        'i3n0ywTLB3v0lwTLEs1Yzw1VDMu',
        'C3rHA2vVDxqTyNrUlxzPzxCTyxr0ywnRzxi',
        'D3jty1G',
        '4PQHiff1AwnRieHPDdOGtgf1BMnOAw5Nigf0DgfJAYbVBIaJ',
        'CMfUzg9T',
        'CMLNAhq',
        'D2fYqwn0AxzL',
        'w2rHDgeTyMfYpsjLBMvYz3KIxq',
        'xs4UlG',
        'icaGicaGigDHCdOGnxb4oWOGicaGicaGicaGicbWywrKAw5NoIaYChGGmdSkicaGicaGicaGicaGyM9YzgvYlxrVCdOGmxb4ihnVBgLKihjNyMeOnteSidy1lca4nsWGmc41ktSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmc41ChG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1YB3CUC29VBIb7ig9WywnPDhK6idaUnZu7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTBMfTzsb7ignVBg9YoIaJzJHMywzJoYbMB250lxDLAwDODdOGnZaWoYbVDMvYzMXVDZOGAgLKzgvUoYb0zxH0lw92zxjMBg93oIbLBgXPChnPCZSGD2HPDguTC3bHy2u6ig5VD3jHCdSGBwf4lxDPzhrOoIaXmtbWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1SDMWGEYbJB2XVCJOGiZy0nZq4yJSGzM9UDc1ZAxPLoIa5lJvWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1TDxrLzcb7ignVBg9YoIaJotrHm2i4oYbMB250lxnPEMu6ideWChG7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTCM93ic5ZDgfRzw91Dc1MDY1TDxrLzcb7ig1HCMDPBI1Szwz0oIbHDxrVoYb3AgL0zs1ZCgfJztOGBM93CMfWoYb9cIaGicaGicaGlNn0ywTLB3v0lwz3lxn1yMHLywqGEYbMB250lxnPEMu6idKUnxb4oYbJB2XVCJOGiZy0nZq4yJSGDgv4Dc10CMfUC2zVCM06ihvWCgvYy2fZztSGBgv0DgvYlxnWywnPBMC6idaUnxb4oYbTyxjNAw4TDg9WoIaZChG7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTzxjYB3iGEYbMB250lxnPEMu6ideWlJvWEdSGy29SB3i6icnModCXnZe7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTAgL0ihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZe2ytm0ytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZiYyZu1ztSkicaGicaGicaGicaGy29SB3i6icnMzMy7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idGWmdSkicaGicaGicaGicaGCgfKzgLUzZOGmxb4idDWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGia',
        'BMqGvfCPcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaG',
        'C3rHA2vVDxqTy2HHAw4TAwqTCMvZzxq',
        's296sKq',
        're9HAgC',
        'DKHcAgK',
        'C2vNrvu',
        'BM90Awy',
        'jsKG4OcIicHjBMfJDgL2Axr5ihrPBwvYihjLCxvPCMvZifnUAxbLCIbqCM8P',
        'yw1qtMK',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWHls0GtK8Gtu9evuXfuYbzrvq6ifnut1jfifbst01pic0TpGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjIywnRz3jVDw5KoIbYz2jHkdi0nsWGmtu4lcaXmsWGmc4XktSGyM9YzgvYoIaXChGGzgfZAgvKihjNyMeOmJq1lcaXntGSideXlcaWlJqPoYbIB3jKzxiTCMfKAxvZoIa2ChG7ihbHzgrPBMC6ideWChG7ig1HCMDPBI1IB3r0B206idHWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGy29SB3i6icnMzwyWoge7igzVBNqTC2L6ztOGmteUnxb4oYbTyxjNAw4TyM90Dg9ToIaZChG7iJ7WN5UsiezYzwuGCMfKyxi6ideGDgfYz2v0lcbOB3nWAxrHBcbYzwXLyxnLignOzwnRpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6ideWlJvWEdSGy29SB3i6icm5ngeZyJG7igXPBMuTAgvPz2H0oIaXlJq1oYbTyxjNAw4TyM90Dg9ToIa4ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbbzgqGB25SEsb0AguGBw9KDwXLCYb5B3uGBMvLzcWGmxGGwgfUyxGGCgvYidCGzgf5CYbLywnOoGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidX1BcbZDhLSzt0IBwfYz2LUoIa0ChGGmcaWide2ChG7ihbHzgrPBMC6ida7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'm2m1zMqGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCgfKzgLUzZOGmNb4idHWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa3mdaGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGicaGig1HCMDPBJOGmcaHAw1WB3j0yw50oWOGicaGicaGicaGicbSAw5LlwHLAwDODdOGms4YicfPBxbVCNrHBNq7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLicfPBxbVCNrHBNq7cIaGicaGicaGicaGihrLEhqTDhjHBNnMB3jToIbUB25LicfPBxbVCNrHBNq7cIaGicaGicaGicaGigXLDhrLCI1ZCgfJAw5NoIbUB3jTywWGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaXChGGm3b4ihjNyMeOmcWGmcWGmcWGmc40ksaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTChjVzMLSzs1IDg46Ag92zxiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmJu2m2vIicfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJzMzMzMzMicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGiZyWytvMysaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTChjVzMLSzs1IDg4Uywn0AxzLihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYmIWGmtaXlca1mIWGmc44nsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJmJjJntvLicfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJodzLzMfJicfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaJC3rHA2vVDxqTDg9HC3qGEWOGicaGicaGicaGicbWB3nPDgLVBJOGzML4zwq7cIaGicaGicaGicaGigjVDhrVBtOGnZvWEdSkicaGicaGicaGicaGBgvMDdOGmJbWEdSkicaGicaGia',
        'yvnXwfu',
        'uxHJv2e',
        'i2zLy2fJyq',
        'C3rHA2vVDxqTzMLNAhqTzw5LCMD5',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTy2fYzc1OzwfKiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1Uyw1LiJ4',
        'qM15u0O',
        'C3rHA2vVDxqTyNrUlwrPC21PC3mTBw9KywW',
        'oMHVDMvY',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VAw5KzxGUCgHWp3bHz2u9CgvVCgXL',
        'tNPZuNO',
        'cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'z2v0rwXLBwvUDej5swq',
        'C3rHA2vVDxqTCMvWB3j0lxrLEhrHCMvH',
        'zgr4BNG',
        'pgXPpG',
        'A3LPshm',
        'qu1kEhe',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0IuMfUA2vKifDHCNm6ideWmcuGz3vHCMfUDgvLzcbfrcbMB3iGywXSig1LBwjLCNmUifrLCNjPDg9YEsbxyxjZoIbfrcbHChbSAwvZig9UBhKGDg8GBwvTyMvYCYbTB3vUDgvKig9UihrOzsb3ywXSlIi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4PQHievHCMX5ierPC2nOyxjNzsbty29WztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C2vSzwn0igLKpsjZDgfRzw91Dc1Lzc1Zy29Wzs1ZzwXLy3qIihn0EwXLpsjIywnRz3jVDw5KoIaJmwuYotnIoYbIB3jKzxi6idfWEcbZB2XPzcaJndC1nty5oYbJB2XVCJOGi2y4zMfMyZSGCgfKzgLUzZOGmNb4idzWEdSGyM9YzgvYlxjHzgL1CZOGnhb4oYbMB250lxnPEMu6ideXChG7ign1CNnVCJOGCg9PBNrLCJSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsjYyw5RzwrFB25SEsiG',
        'C3r5Bgu',
        'pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'xsbPCYbjBMfJDgL2zseGtxvZDcbIzsbHy3rPDMuGD2L0AgLUia',
        'zLnYqxy',
        '8j+oRYa8C3rYB25NpLrHCMDLDcbtzwXLy3rVCJO8l3n0CM9UzZ4',
        'x19Syxn0shrTBa',
        'AgLUDa',
        'Cgf1C2vK',
        '4PQG77Ipia',
        'pc9ZDhjVBMC+pc9ZCgfUpGOGicaGicaGicaGicaGicaGpgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1MAwDODc1XDwLJA2jHCI1IDg4IigLKpsjZDgfRzw91Dc1MAwDODc1XDwLJA2jHCI1IDg4IpUkAOsbbDhrHy2SGtMv4DcbuyxjNzxqG4P6upc9IDxr0B24+cIaGicaGicaGicaGia',
        'sLzxuMO',
        'BgLTAxrLzf9RzxLF',
        'BgfZDfvWzgf0zwq',
        'ieuGWRCG',
        'BgfZDefJDgLVBLjLBa',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1WCMLTyxj5iIbPzd0IC3rHA2vVDxqTyNrUlxnLDhrPBMDZlxDHCNbHC3mIihn0EwXLpsj3Awr0AdOGmtaWjtSGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2y1owuWyIWGi2q5nZCWnIK7igjVCMrLCI1JB2XVCJOGi2y1owuWyJSGy29SB3i6icmWzJe3mMe7igzVBNqTD2vPz2H0oIa5mda7igzVBNqTC2L6ztOGmtfWEdSGCgfKzgLUzZOGnNb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7ign1CNnVCJOGCg9PBNrLCJSGBwfYz2LUlxrVCdOGnxb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG8j+BKIbtDg9YztOGqNv5ic8GrxH0zw5KihDPDgGGwgfUyxGkicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwHLywrLCIi+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTy2fYzc10AxrSzs13CMfWiJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnHCMqTBMfTzsi+8j+sVcbuCMfKzxiGwW',
        'sLDfzM4',
        'v0XHA0W',
        'iIb0yxjNzxq9iL9IBgfUAYiGCMvSpsjUB29Wzw5LCIiGC3r5Bgu9iMjHy2TNCM91BMq6icmXnMeZnge7igjVCMrLCJOGmxb4ihnVBgLKicmYmMm1nwu7ignVBg9YoIaJzMzMoYbMB250lxDLAwDODdOGodaWoYbIB3jKzxiTCMfKAxvZoIa0ChG7ihbHzgrPBMC6idjWEcaXmhb4oYbJDxjZB3i6ihbVAw50zxi7ihrLEhqTzgvJB3jHDgLVBJOGBM9UztSIpLvWzgf0zsbUB3C8l2e+cIaGicaGicaGicaGicaGica8yNv0Dg9Uihr5Cgu9iMj1DhrVBIiGzgf0ys1Hy3q9iMXHDgvYiIbZDhLSzt0IyMfJA2DYB3vUzdOGDhjHBNnWyxjLBNq7igjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7ignVBg9YoIaJotrHm2i4oYbIB3jKzxiTCMfKAxvZoIa0ChG7ihbHzgrPBMC6idjWEca4ChG7ign1CNnVCJOGCg9PBNrLCJSIpKXHDgvYpc9IDxr0B24+cIaGicaGicaGicaGia',
        '8j+oRYb8ia',
        'zxHoDwS',
        'icaGicaGicbMB250lxDLAwDODdOGodaWicfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbWywrKAw5NoIaXChGGnxb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigXLDhrLCI1ZCgfJAw5NoIaWlJnWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGnNb4ihjNyMeOmJq1lcaXntGSideXlcaWlJq1ksaHAw1WB3j0yw50oWOGicaGicaGicaGicbHBMLTyxrPB246ihn0ywTLB3v0ugLSBfb1BhnLideUmNmGAw5MAw5PDguGzwfZzs1PBI1VDxqGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxn0yxr1CY1WAwXSlMvKlw9MzIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmtaWlcaXmtySideZosWGmc4YksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcbYz2jHkde0ocWGmtyZlcaXodqSidaUncKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icm5ngeZyJGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idCWmcaHAw1WB3j0yw50oWOGicaGicaGicaGicbMB250lxnPEMu6ideWChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCgfKzgLUzZOGmxb4idvWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbSzxr0zxiTC3bHy2LUzZOGmc4ZChGGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxn0yxr1CY1WAwXSlMjYzwfJAc1WAwXSihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYmZKSidy4lca2ocWGmc4ZksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzwy0ndq0icfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJzMnHnwe1icfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mdaGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmhb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGihbHzgrPBMC6ia',
        'igXLzNqHifnbvKuGq0Hbsu4H',
        'DhjPyw5NBgu',
        'ze9ywKC',
        'CerJze8',
        'Bw9Tzw50igfNBW',
        'C29Tzq',
        'BKjADva',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbPzd0IC3rHA2vVDxqTBw9KywWTy2XVC2uTEciGC3r5Bgu9iMjHy2TNCM91BMq6ig5VBMu7igjVCMrLCJOGBM9UztSGy29SB3i6icnMzwnHy2e7igzVBNqTC2L6ztOGmtHWEdSGy3vYC29YoIbWB2LUDgvYoYbMB250lxDLAwDODdOGyM9SzdSGBgLUzs1OzwLNAhq6ide7iJ7INju8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kcIaGicaGicaGicaGicaGicaGicaGpceTlsbnB2rHBcbcB2r5ic0TpGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iNbHzgrPBMC6ide2ChG7ig92zxjMBg93lxK6igf1Dg87igzSzxG6ide7igrPC3bSyxK6igzSzxG7igzSzxGTzgLYzwn0Aw9UoIbJB2X1Bw47igDHCdOGmtrWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGica8is0TifnJCMvLBNnOB3qGuhjLDMLLDYaTlt4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IDgv4Dc1HBgLNBJOGy2vUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw1NihnYyZ0I',
        'C3rHA2vVDxqTyNrUlxDHCNbHC3m',
        'ywXHCM1wB2X1Bwu',
        'ruLkvKK',
        'uejRDNG',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigHVC3bPDgfSig5LyxiTCMvHzhKIihrPDgXLpsi',
        '4PQHieHPDdOG',
        'zwrezxrLy3rPB25ty29Wzq',
        'vMTMy2q',
        'DgvYCML0B3j5D2fYCW',
        'BNjuDMm',
        'pc9IpIWGDhLWzsb0AguGBw9KDwXLignVzguGyxmGDgHLig1LC3nHz2uGyw5KihnLBMqUcIaGicaGicaGicaGicaGicaGicaGicaGievHy2GGwgfUyxGGywrKCYa3igrHExm7ihbHEwLUzYbHz2fPBIbIzwzVCMuGAxqGCNvUCYbVDxqGywrKCYb0BYb0AguGDgLTzsbSzwz0lIbtzw5Kig9UzsbTB2r1BguGCgvYigDPzNqUcIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTywn0Aw9UCYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXHignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IDg4IigHYzwy9iMH0DhbZoI8VD3D3lNrVCM4Uy29Tl2L0zw0UCgHWiIb0yxjNzxq9iL9IBgfUAYi+8j+oGsbpCgvUieL0zw1Zpc9HpGOGicaGicaGicaGicaGicaGicaGicaGica8ysbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTyNrUiIbOCMvMpsjODhrWCZOVl3D3DY50B3jUlMnVBs9WCM9MAwXLCY5WAha/weLepq',
        'xsb3AgLJAcbPCYbJDxjYzw50BhKGzw5NywDLzcbPBIbHia',
        't0jgquO',
        'ysGZncWGmtK3lca5ncWGmc41nsK7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTy2fYzc5MB2n1CYb7igjVCMrLCI1JB2XVCJOGi2y1owuWyJSGyM94lxnOywrVDZOGmcaWidaGmxb4icnMntLLmgiGAw5Zzxq7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTy2fYzc1OzwfKihSGzgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idHWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1Uyw1LihSGzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXmI41ChG7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTCgLSBcb7igzVBNqTC2L6ztOGmtbWEdSGzM9UDc13zwLNAhq6idGWmdSGCgfKzgLUzZOGmxb4idDWEdSGyM9YzgvYlxjHzgL1CZOGmtbWEdSGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSGy29SB3i6icm5ngeZyJG7ihDOAxrLlxnWywnLoIbUB3DYyxa7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTCgLSBc5VD25Lzcb7igjVCMrLCI1JB2XVCJOGiZiYyZu1ztSGy29SB3i6icm4nMvMywm7igjHy2TNCM91BMq6ihjNyMeOmZqSide5nYWGotqSidaUmtiPoYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwrLC2mGEYbMB250lxnPEMu6ideWlJvWEdSGy29SB3i6icm5ngeZyJG7ig1HCMDPBJOGm3b4idaGnxb4oYbSAw5LlwHLAwDODdOGms40oYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwj1Esb7igrPC3bSyxK6igzSzxG7igzSzxGTD3jHCdOGD3jHCdSGywXPz24TAxrLBxm6ignLBNrLCJSGz2fWoIa2ChG7igzVBNqTC2L6ztOGmtaUnxb4oYbJB2XVCJOGi2nIzdvLmtSGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1JB2rLihSkicaGicaGicaGicaGzM9UDc1Myw1PBhK6ig1VBM9ZCgfJztSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idKWmdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmNb4oWOGicaGicaGicaGicbSzxr0zxiTC3bHy2LUzZOGmxb4oWOGicaGicaGicaGia',
        'idXIpG',
        'DgfYz2v0x21LDge',
        'DxbOuK8',
        'DgfYz2v0',
        'rwfYBhKGrgLZy2HHCMDLoG',
        '4PQG77IpifLfuYaOrMfJDgLVBIbPBIbxyxiP',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GDgL0Bgu9iK9UBgLUzsbVCIb0B28GCMvJzw50BhKGywn0AxzLiJ7WN5+Iia',
        'lMHLywrLCI13CMfWCgvYlxrVCcaUDxnLCI1Uyw1LlcbBy2XHC3mQpsj1C2vYtMfTzv9FxYjDlcaUBwvUDs12ywX1zv9WBgf5zxiSigHLywrLCIbBy2XHC3mQpsj1C2vYtMfTzsjD',
        'pJiGtwLUCZWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsi1iIa',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1MDY1YB3CIpGOGicaGicaGicaGicaGicaGicaGia',
        'thj5rhm',
        'pc9VChrPB24+',
        'sujhD20',
        'ywXLCNrLzdyWCW',
        'C3bHy2uTyMv0D2vLBG',
        'phnWyw4GDgL0Bgu9iLrOAxmGDgfIihbVBgXZihrOzsbuB3jUiefqssbMB3iGywXSig9Wzw4Gvg9YBIb0ywjZiJ7WN5oHieXLywrLCJWVC3bHBJ4G4OcIifjHDgu6ia',
        'sg9ZCgL0ywXPEMvK',
        'qNjkB0S',
        'yNv0Dg9UlcbHw2nSyxnZkJ0IyNrUiL0Sic5IDg4',
        'iZeWyJK4mq',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTBxv0zwqIpIS',
        'Bg9JyxrPB24',
        'DfndseS',
        'Dg9Nz2XLlwnOywLUlwfSzxj0lwjLBgW',
        'BgLJzw5Zzv9Syxn0x2vYCM9Y',
        'yM9KEq',
        'tKrlzxm',
        'CMvWzwf0',
        'Dgv4Da',
        'C3vZCgvUzgvK',
        'A2v5CW',
        'ChjLDMvUDerLzMf1Bhq',
        'ENDwEhO',
        'vgvYCML0B3j5ifDHCIbVBIbtzwn0B3iGwW',
        'Bg9N',
        '8j+AQcbjteXfr0fmieHjvdOG',
        'ktWVBgK+',
        'u3nuyuK',
        'CgfYC2u',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC2v0DgLUz3mTDgvZDhmIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UiIbPzd0IC3rHA2vVDxqTyNrUlxrLC3qTDhjHzgvYiIbZDhLSzt0IzMXLEdOGmtSGCgfKzgLUzZOGnhb4oYbIB3jKzxiTy29SB3i6icnMntLLmgi7ignVBg9YoIaJzMjIzJi0oYiGDgL0Bgu9iLrLC3qGvhjHzgvYienHC2GGrMfUzMfYzsbtB3vUzci+8j+sVcbuCMfKzxi8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxjjBMzVCM1HDgLVBIjDigfBAhjLzIO9iNbYB2zPBgvZlNbOCcjDlca',
        'xsbPCYbpvvqGjIbptKXjtKuHienVBNrHy3qGDgHLBsbMB3iGAg9ZCgLUzYbZzxj2AwnLCY4',
        'zK9uweu',
        'yxbPqNvKz2v0ugvYtwLU',
        'Ahr0CdOVlZeYnY4WlJaUmtO4nZy2l2zVy3vZ',
        'zgLZCgf0y2HfDMvUDa',
        'xsbHzgrLzcb0BYbnzxjJzw5HCNKGu3rHA2vVDxqU',
        'y2f0y2G',
        'C3rHA2vVDxqTDhjHzgvYlwnHCMqT',
        'CJOGmxb4ihnVBgLKicm0nZu1nJK7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicbWywrKAw5NoIa0ChGGohb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtfWEdSkicaGicaGicaGicaGB3v0BgLUztOGBM9UztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwLUChv0oMzVy3vZihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJm2i4mMy2oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlxbYAw1HCNKGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmJu2m2vIoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJm2i4mMy2oWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzJSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGnZaWoWOGicaGicaGicaGicbWywrKAw5NoIa0ChGGmtbWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGihrYyw5ZAxrPB246igjHy2TNCM91BMqGmc4XnxmGzwfZztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1WCMLTyxj5oMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZfKngvKodSkicaGicaGicb9cGOGicaGicaGic5ZDgfRzw91Dc1SAxn0ihSkicaGicaGicaGicaGzMXLEdOGmtSkicaGicaGicaGicaGB3zLCMzSB3CTEtOGyxv0BZSkicaGicaGicaGicaGCgfKzgLUzZOGnNb4oWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbMBgv4lwrPCMvJDgLVBJOGy29SDw1UoWOGicaGicaGicaGicbNyxa6idrWEdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwvTChr5ihSkicaGicaGicaGicaGy29SB3i6icm5ngeZyJG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtjWEdSkicaGicaGicaGicaGDgv4Dc1HBgLNBJOGy2vUDgvYoWOGicaGicaGicaGia',
        'u3LND1q',
        '4PQHieHVC3a6ia',
        'ideWmcuGsfaH',
        'w2nSyxnZkJ0IC3bVDxnLiL0SifTJBgfZCYO9iM1HCNjPywDLiL0SifTJBgfZCYO9iNbYB3bLCNr5iL0',
        'CgvYBwLZC2LVBG',
        'ru9TBMC',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'C2v0vMfSDwvbDfrPBwu',
        'pJyWBtWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0IlteIia',
        'AeTHzM4',
        'pUkzVU+4JYbvBMXPBwL0zwqGkefUEsbmyxn0iefJDgLVBIK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l3nLBgvJDd4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgfIzwWGy2XHC3m9iNn0ywTLB3v0lxrVz2DSzs1YB3CIihrPDgXLpsjbDxrVBwf0AwnHBgX5ihbHDxnLCYbTzxjJzw5HCNKGy29UDhjHy3qGyw5KihnPBgvUy2vZigf0DgfJAYbHBgfYBxmGD2HLBIb0yxjNzxqGAgfZievHCMX5ierPC2nOyxjNzsi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4PQu77Ipief1Dg8Tugf1C2uGB24GrwfYBhKGrgLZy2HHCMDLpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGAwq9iNrVz2DSzs1HDxrVlxbHDxnLlxDHCIiG',
        'C2v0sw50zxj2ywXnCW',
        'sNPIzeq',
        'cIaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGicaGica',
        'q2XPy2SGDg8GywrKihrYywrLCIbB',
        'reTxrKK',
        'yxn6suC',
        'v0vVBvG',
        'iJ7INju8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'Dg9Nz2XLlxbHDxnLlxrYywrLCNm',
        'Cg9ZAxrPB24TCMLNAhq',
        'AgvIEfy',
        'B0rzzgS',
        'C3rHA2vVDxqTy2HHAw4TCg9VBc1ZDgf0Dxm',
        'DgL0Bgu',
        'vvnyr3e',
        'i2y4zMfMyW',
        'zeLczuS',
        'BgLMzq',
        'C3rHA2vVDxqTyNrUlxvUBg9JAY10CMfKzxjZ',
        'DNvHrMe',
        '4PQHieHPDcaJ',
        '4PQG77IpifrVCM4GCMvQzwn0zwqGDgHPCYbRzxK6ia',
        'z0LJzwC',
        'CMXuDgm',
        's1Lkug4',
        'xsbYzw1VDMvKigzYB20GtwvYy2vUyxj5ifjHzgfYlG',
        'vfHHv1q',
        'oYbMB250lxDLAwDODdOGnZaWoYb3AgL0zs1ZCgfJztOGBM93CMfWoYbTyxjNAw4TBgvMDdOGmNb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'qxvKAw9dB250zxH0',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTBM90zsi+tg9Nz2vKigLUigfZidXIpG',
        'Aw5JAwrLBNrjza',
        '4O+ZienOzwnRAw5NigzVCIb5B3vYihbHEw1LBNqUlI4',
        'CMfUA2vKD2fYCW',
        'Dgv4Dc9JC3m',
        'pJmWBtWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0InJaIia',
        't2Twwvi',
        'DuLntxq',
        'C25IEvO',
        'DxnLCG',
        'y3vYCMvUDfrPBwu',
        'Cg9PBNrLCMrVD24',
        'C3rHA2vVDxqTCMfKyxiTBgvHzgvYlwXLyxnLlxyX',
        'uMLNAhq',
        'ywn0',
        'pc9ZDw1Tyxj5pGOGicaGicaGicaGicaGicaGicaGicaGica',
        'y2HHAw5ty2fUu3rHCNq',
        'xtWVyJ4GD2L0Acb0AguGBwvZC2fNztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTy29KzsiGzgf0ys1JB3b5lwnVzgu9iG',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwHLywrLCI1Hy3rPB25ZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1KzwWIigrHDgeTzgvSlxrYywrLCJ0I',
        'C3rHDgu',
        'u3rHDhvZoIa',
        'zvLXshy',
        'wvDvuxe',
        'pc9IpIaOy29UzMLYBwvKihDPDgGGEw91CIbVD24GqvbjigTLEsKUpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'Dg9YBL9ZDgfRzw91Df9WBgf5zxjFBMfTzq',
        '4OcIicOQqxr0ywnRzxiQkJOG',
        'vhjHDMvSAw5N',
        'BM9sDwq',
        'ic8G',
        'jMX0oW',
        'Aw5Hy3rPDMvmAw1PDe1PBG',
        'C291BMq',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzw1WDhKIpG',
        'B3bWB25LBNroyw1L',
        'w2rHDgeTzgvSlxrYywrLCJ0I',
        'Dw1jwM0',
        'CMvXDwLYzuLUDgvYywn0Aw9U',
        've1WsvG',
        'DuTUwK0',
        'C3rHA2vVDxqTyNrUlxrLC3qTyNjLywnO',
        'C3rHA2vVDxqTyNrUlxzPzxCTDgfYz2v0',
        'u3rHA2vVDxrfBMvYz3K',
        'pGOGicaGicaGicaGicaGicaGicaGicaGica8C3vTBwfYEt7WN46VifnUAxbLCIbqCM86ifrHCMDLDcbbBgvYDhm',
        'EuHsCNK',
        'zMXVB3i',
        'Aw5JAwrLBNreyxrH',
        'swXXCxi',
        'iIb0yxjNzxq9iL9IBgfUAYiGy2XHC3m9iNn0ywTLB3v0lwnHCMqTBMfTzsiGDgL0Bgu9iLzPzxCGvhjHzgvYifbYB2zPBguIpGOGicaGicaGicaGicaGicaGicaGicaGica',
        'yxDHEq',
        'Dxjgqvy',
        'EdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFK4S8l3nWyw4+ienVChKGuMvWB3j0ifrLEhqkicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzgLZCgXHEtOGzMXLEdSGz2fWoIa4ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwj0BI12Awv3lxrHCMDLDciGC3r5Bgu9iMjHy2TNCM91BMq6icmZmZqXntu7ignVBg9YoIaJztjLogyWoYbIB3jKzxi6idfWEcbZB2XPzcaJndC1nty5oYbWywrKAw5NoIa3ChGGmtjWEdSGyM9YzgvYlxjHzgL1CZOGnNb4oYbMB250lxnPEMu6ideXChG7ign1CNnVCJOGCg9PBNrLCJSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGipcFJQ8GvgfYz2v0ifbYB2zPBgukicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'AgvHza',
        'uMfUA2vKifDHCIb2CYa',
        'xsbPBIbiB3nWicG',
        'rfnIq1e',
        't3r4vMK',
        'qvfrze4',
        't29vyxq',
        'sg9ZCgL0ywXPEMvKifvUDgLSoG',
        'vNvQz0i',
        'DhjHzgvYCW',
        'yxjPys1SywjLBa',
        'pGOGicaGicaGicaGicaGicaGicaGicaGica8C3vTBwfYEt7WN5sxienOywLUieTPDa',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSihDHCI1WyxvZzs1WAwXSiIb0AxrSzt0Iq29UDhjHy3qGCgf1C2vKihrVigf2B2LKihDHC3rPBMCGzw5LCMD5ig9UievHCMX5ierPC2nOyxjNzsi+4O+477IpifbbvvnfrdWVC3bHBJ4G',
        'wg9twuu',
        'CMvZCg9UC2vuzxH0',
        'D1bXB3a',
        'yxnZyxvSDgLUzW',
        'rMfJDgLVBIbPBIbxyxi',
        '4OcIicOQvgfYz2v0kIO6ia',
        'mZm5mduWnNjYvxHwsq',
        'BNfbwK8',
        'zxLhDwS',
        'C0nXrgi',
        'BKrNvfC',
        '4PQHieve',
        'iJ7INiJVUi8G',
        'zw50CMLLCW',
        'yMn4wMO',
        'qxDcDeG',
        'pc9IDxr0B24+cIaGicaGicaGicaGicaGica',
        'rhftrxC',
        'q09oveLovuu',
        'y29UBMvJDa',
        'Dg9WqMfUBMvYsw5PDerHDge',
        'C3rHA2vVDxqTzMLNAhqTCxvPy2TIyxi',
        'rMfJDgLVBJO',
        'rLvYvNq',
        'w1n0ywTLB3v0xsbsyxrLigXPBwL0ihrOCMvZAg9SzcbYzwfJAgvKlcbZA2LWCgLUzYbJEwnSzq',
        'qMDvtMS',
        'i2rJmJyYnG',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1WCMLTyxj5iIbPzd0IC3rHA2vVDxqTyNrUlwfKzci+kYbbzgq8l2j1DhrVBJ4kicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGidXKAxyGAwq9iNn0ywTLB3v0lxnLDhrPBMDZlxbHBMvSiIbJBgfZCZ0IC3rHA2vVDxqTC2v0DgLUz3mIihn0EwXLpsjKAxnWBgf5oIa',
        'iJ7WN4+LieHVC3a6ia',
        'ywXLCNrpBKz1BgXfBMvYz3K',
        'x2jYzwfJAerLzMf1BhrpzMzwmtuW',
        'vMrbsKi',
        'CMvZDw1L',
        'zcbVBgqGzM91BMqSia',
        'icaUC3rHA2vVDxqTDgfYz2v0lwXPBwL0lxnLBgvJDcb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmWzJe3mMe7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicbWywrKAw5NoIaXChGGnhb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaZChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicbVDxrSAw5LoIbUB25LoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDgfYz2v0lwXPBwL0lxnLBgvJDdPMB2n1CYb7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGiZm4yMrModSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxn0yxr1CY1WAwXSlNn0CMLJA2vUlxbPBgWGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdiZosWGnJGSidy4lcaWlJiPoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzwy0ndq0oWOGicaGicaGicaGicbJB2XVCJOGi2zJytvHntSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGih0kcGOGicaGicaGic5ZDgfRzw91Dc13Aw5KB3CUC2v0DgLUz3mTB3bLBIaUC3rHA2vVDxqTDgfICYWkicaGicaGicaUC3rHA2vVDxqTD2LUzg93lNnLDhrPBMDZlw9Wzw4GlNn0ywTLB3v0lwnOywLUlwjHCIWkicaGicaGicaUC3rHA2vVDxqTD2LUzg93lNnLDhrPBMDZlw9Wzw4GlNn0ywTLB3v0lwfKzc1IyxiScIaGicaGicaGlNn0ywTLB3v0lxDPBMrVDY5Zzxr0Aw5NCY1VCgvUic5ZDgfRzw91Dc1SAxn0ihSkicaGicaGicaGicaGzgLZCgXHEtOGBM9UzsaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTD2LUzg93lNnLDhrPBMDZlw9Wzw4GlNn0ywTLB3v0lxnLDhrPBMDZihSkicaGicaGicaGicaGBwf4lwHLAwDODdOGnZv2AdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxDPBMrVDY5Zzxr0Aw5NCY1VCgvUia',
        'BMv3vMfSDwu',
        'ywXLCNrpBKXHBMrPBMC',
        'EvbwBeu',
        'zNr1B1u',
        'whPny1O',
        'Aw5Hy3rPDMuG',
        'Ag9YBG',
        'C3rHA2vVDxqTy2fYzc0',
        'Cvblsg8',
        'AgvPz2H0',
        'tNnhsxe',
        'suP6vNy',
        'vMP0qxO',
        'tgv2zwWG',
        '4PQG77Ipiev2AwrLBMnLief1Dg8Tu2nYzwvUC2HVDcbesvnbqKXfrc4',
        't0Tvr0q',
        'BM8Ty2fJAguSig5Vlxn0B3jLlcbTDxn0lxjLDMfSAwrHDgu',
        'pJeWBtWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ImtuIia',
        'pc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JB21Wywn0lwHWiIb0AxrSzt0Isfa6ia',
        'BxzYEfy',
        'r1P3C3a',
        'ywn0AxzL',
        'BMvHCI1YzwfKEq',
        'iIb0AxrSzt0IuMvTB3zLignVBNrYywn0iJ7INju8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTy29UDhjVBhmIpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTzNCTD2vHCg9Uia',
        '8j+BOE+4JYbuyxjNzxqGwW',
        'xtWVzgL2pG',
        'BxHkDhy',
        'Dhj1zq',
        'D2L0AgLUia',
        'DgfIswq',
        'wLPfuxe',
        'BLjUrg0',
        'DxnLCK5HBwu',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxrHyI1IywrNzsiGAwq9iNn0ywTLB3v0lwz3lxrHyI1IywrNzsiGC3r5Bgu9iMrPC3bSyxK6ia',
        'iIb0AxrSzt0Iq2XPy2SGDg8GC3DPDgnOigHPDcb0ExbLlIa',
        'C2rbq1m',
        'iokaOIa',
        'v0fwrq',
        'qvznrha',
        'yLLpsgC',
        'sxLPqwy',
        'wNHeqMq',
        '8j+oRYbuB2DNBguGu3rHA2vVDxqGuMfKyxiGrg9JAW',
        'zMLSBa',
        'y3vYCMvUDa',
        'w2rHDgeTD2fYlxrHCMDLDd0I',
        'wKfSrwG',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTAgvHzgvYlwfJDgLVBNmIpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UignVBxbHy3qTC291BMqG',
        'BMHjCfe',
        '8j+sVcbuCMfKzxiGwW',
        'CZWVB3b0Aw9UpG',
        'jMnVBw1LBNq9u3rHA2vVDxreCNvNjNrPBwvZDgfTCd0',
        'i3n0ywTLB3v0lwj0BI1Zzxr0Aw5NCYb7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGiZm4yMrModSkicaGicaGicaGicaGy29SB3i6icmZogjKzJG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1Zzxr0Aw5NCYb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmWzJe3mMe7cIaGicaGicaGicaGigjVCMrLCI10B3a6idfWEcbZB2XPzcaJmZm0mtu1oWOGicaGicaGicaGicbWywrKAw5NoIa4ChGGmtbWEdSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGzMXLEc1KAxjLy3rPB246ignVBhvTBJSkicaGicaGicaGicaGz2fWoIa2ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtfWEdSkicaGicaGicaGicaGy29SB3i6icnJyMq1zte7cIaGicaGicaGicaGig1HEc1OzwLNAhq6iduYDMG7cIaGicaGicaGicaGig92zxjMBg93lxK6igf1Dg87cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1Zzxr0Aw5NCY1JyxqGEWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJmwuYotnIoWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa2ChG7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmZaSidqXlca1osWGmc4ZnsK7cIaGicaGicaGicaGihbHzgrPBMC6idaGohb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC2v0DgLUz3mTy2f0w29Wzw5DihSGCgfKzgLUzY1IB3r0B206idzWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1Zzxr0Aw5NCY1JyxqGpIbZDw1Tyxj5ihSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicbSAxn0lxn0EwXLoIbUB25LoWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbMB250lxnPEMu6ideXlJvWEdSkicaGicaGicaGicaGy29SB3i6icnMogzHzMm7cIaGicaGicaGicaGihbHzgrPBMC6idzWEcaWoWOGicaGicaGicaGicb1C2vYlxnLBgvJDdOGBM9UztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxnLDhrPBMDZlwnHDca+ihn1Bw1HCNK6oG',
        'zMfJDgLVBLbVBgXtzwm',
        'uMfUA2vKifDHCG',
        'cIaGicaGicaGicaGicaGica8ysbOCMvMpsi',
        'C3vIDgXL',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigLKpsjZDgfRzw91Dc1RzxKTy2XVC2uIihrPDgXLpsjdBg9Zzsi+4PYvpc9IDxr0B24+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlw5VDguIpGOGicaGicaGicaGicaGicaGicaGiefJy291BNq6idXIpG',
        'yMvSBa',
        'w1n0ywTLB3v0xsbvCgrHDguGyMfUBMvYigvYCM9YoG',
        '4O+X77Ipia',
        'uvHhv1e',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VCgfNzs5WAha/C2LKpwf0DgfJAYz1C2vYmKLepq',
        '4P2mifzjt0XbveLptIaJ',
        'pc9HpGOGicaGicaGicaGicaGicaGicaGicaGica8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1JyxjKlwX2Bci+wW',
        'veDpqKK',
        'zNDxzwfWB24',
        'yNvMzMvY',
        'Cg9ZDa',
        '4PA2ifrYywrLCIbTB25PDg9YAw5Nifjfu1vnruqU',
        'wKDNtwO',
        'C3rHA2vVDxqTDgfIlxrHCMDLDhm',
        'qvbjigvYCM9Y',
        'C3rVCMfNzq',
        'DgLJAW',
        'vw5RBM93BIbbDhrHy2TLCG',
        'v2fY',
        'uK9HBuu',
        'ig1LBwjLCG',
        'x2jSyw5R',
        'zw5LCMD5lwz1BgW',
        'rg9JAYbWB3nPDgLVBMvKig9Uia',
        'zM9YrwfJAa',
        'C3rHCNrZv2L0Aa',
        '8j+pTcbtDg9WCgvKihDHDgnOAw5Nia',
        'zgf0ys1JB3vUDhj5',
        'w1n0ywTLB3v0xsbNzxrqBgf5zxjfBMvYz3LgCM9Trg9TigvYCM9YoG',
        'yMXts3e',
        'zM9JDxm',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VChjVzMLSzxmUCgHWp1Hjrd0',
        'C3rHA2vVDxqTy2HHAw4TBw9Kzs1ZzwXLy3q',
        'BgLJzw5Zzq',
        'C2XPy2u',
        'BgLJzw5Zzv9Syxn0x3jLzNjLC2G',
        'igLUC3rHBgXLCJOGy2XPy2SGvxbKyxrLic8Gsw5ZDgfSBcbPBIb0AguGBMv3ihrHyIWGDgHLBIbYzwzYzxnOifrVCM4U',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxrHyI1IywrNzsi+',
        'u014txu',
        'Dg9YBLjHzgfYu3rHDgvdAgfUz2vK',
        'C3rHA2vVDxqTy2HHAw4TCxvPy2STAw5WDxq',
        'idXZCgfUihn0EwXLpsjJB2XVCJOJzJu5ztbIoYiGDgL0Bgu9iLrYywrLCNmGugf1C2vKiJ7IJ7G8l3nWyw4+',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSig9RyxKTB2zMBgLUzsiGDgL0Bgu9iLrYywrLCIbPCYbVzMzSAw5LiJ7WN5kKie9MzMXPBMuGke91DcK8l3nWyw4+',
        'u3vhBM8',
        'zM9UDa',
        'C3rHA2vVDxqTAw5JAwrLBNqTBw9KywW',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'i2vMndq0na',
        'BMnPvuW',
        'C3rHA2vVDxqTy2HHAw4TCgLSBc1JB250ywLUzxi',
        'BufIsNi',
        'w2rHDgeTzNCTAgL0xsXBzgf0ys1MDY1KzwXDlfTKyxrHlwz3lxbHDxnLxsXBzgf0ys1MDY1HBgvYDf0Sw2rHDgeTzNCTD2vHCg9Uxq',
        'tI9b',
        'ihzLCMLMAwvK',
        'icH0yxjNzxqGCMvZzxqGDg8GiW',
        'Derqy1a',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VChjLzMvYzw5JzxmUCgHWi3rHyJ1HCgK/C3rLCd1HzgrozxDlzxKMDgL0Bgu9u3rHA2vVDxrsywrHCG',
        'Dw50AwW',
        'ihjLBwfPBMLUzYbVBIbJAgfPBIe',
        'sLHSAvm',
        'C3rHA2vVDxrFDxbKyxrLx2rPC21PC3nLzf8',
        'sfruuca',
        'i2nIzdvLmq',
        'C3bSAxq',
        'uMvZDw1L',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwz3lw5HBwuIpG',
        're9nq29UDgvUDeXVywrLza',
        'ihjLywnOzwqGmtaWjsbiuce',
        '8j+uIIbuCMfKzxiGqwXLCNrZiefdveLwrsaOq2XPy2SGDg8Gtxv0zsbtB3vUzcbbBgvYDcK',
        'ywXLCNrpBLrYywrLCLjLywr5',
        'cIaGicaGicaGicaGicaGicaGicaG4PQG77IpidXIpKfUig9SzcbJB3b5ig9Mifn0ywTLB3v0ifjHzgfYigLZigfSC28GCNvUBMLUzY48l2i+ieL0igzPz2H0CYb3AxrOihrOAxmGB25LicHSB2nRzwqGlYaI8j+rKsbezxyIigjHzgDLlcbKB3vIBguGywXHCM1Zks48yNi+cIaGicaGicaGicaGicaGicaGicaGt3bLBIb5B3vYihvZzxjZy3jPChqGBwfUywDLCIDZigrHC2HIB2fYzcbHBMqGpgi+zgvSzxrLihrOzsbVBgrLCIaItwvYy2vUyxj5ifn0ywTLB3v0ifjHzgfYiJWVyJ4GkhyXlJu3ig9YigvHCMXPzxiPlcb0AgvUihjLzNjLC2GGvg9YBI4kicaGicaGicaGicaGicaGicaGica8yNv0Dg9Uihr5Cgu9iMj1DhrVBIiGC3r5Bgu9iM1HCMDPBI1Szwz0oIa2ChG7igjHy2TNCM91BMq6ihrYyw5ZCgfYzw50oYbIB3jKzxi6idfWEcbZB2XPzcaJzJG3mtCXoYbJB2XVCJOGi2zLy2fJytSGyM9YzgvYlxjHzgL1CZOGnhb4oYbWywrKAw5NoIaXChGGohb4oYbJDxjZB3i6ihbVAw50zxi7iJ5psZWVyNv0Dg9UpGOGicaGicaGicaGicaGicaG',
        'y2fUDMfZ',
        'rMXWAMy',
        'yMfJA2DYB3vUzdOGCMDIysG2osWGmtaSideWlcaWlJK3ktSGyM9YzgvYoIaXChGGC29SAwqGi2vMndq0ndSGy29SB3i6icnMzwuYzti7igjVCMrLCI1YywrPDxm6idHWEdSGCgfKzgLUzZOGohb4ideWChG7ia',
        'AvjOqvu',
        'mtfWEcbTB25VC3bHy2u',
        'y2HHAw5uyxjNzxrnB2rL',
        'y3jLyxrLqNvMzMvY',
        'qKLpCKe',
        '4PQHieP1BxbPBMCGDg8GtMv4DcbuyxjNzxqGiW',
        'pGOGicaGicaGicaGicaGicaGicaGicaGica8C3vTBwfYEt7WN5k8ifrYywrLCIbxyxrJAa',
        'zg9JA1bVC2L0Aw9U',
        'r2XVyMfS',
        'ChvZAa',
        'mtqGBwLUCYbHz28',
        'z0LyrLO',
        'DxbSuwC',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaG',
        'uwPZy1K',
        'Bgzgs3a',
        '4PA2iezHy3rPB24Gv2f0y2GGuKvtvu1frc4',
        'kseGqxr0ywnRig5VDY4',
        'qxzhzLe',
        'Dg9Nz2XLlwfSzxj0lw9RyxK',
        'yvTOCMvMkJ0IiY93yxiViL0SigfBAhjLzIO9iMzHy3rPB25ZlNbOCd9ZDgvWpxbYB2zPBguIxvTOCMvMkJ0ID2fYiL0',
        'mxWWFdr8m3WY',
        'cIaGicaGicaGicaGicaGicaGicaG',
        'BgfUzdO',
        'sg9ZCgL0ywXPEMvKigj5idXHigHYzwy9iNbYB2zPBgvZlNbOCd9ysuq9mJaXnZmXmci+Cg9TBwu8l2e+',
        'CgvUzgLUz190CMfKzxjF',
        'i3n0ywTLB3v0lxrVyxn0lwnSB3nL',
        'y3jLyxrLt2jQzwn0vvjm',
        'zNrACxG',
        'uMfVz3m',
        'Eci+cIaGicaGicaGicaGicaGicaGicaGicaGipcFLjCG',
        'xsbTyxjRzwqGyxmGu1rssunlru4U',
        'rwnVExi',
        'iJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwHLywrLCIi+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTDgL0BguIpGOGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbJBgfZCZ0IC3rHA2vVDxqTCMfKyxiTAwnVBIi+8j+oRZWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iNDOAxrLlxnWywnLoIbUB3DYyxa7iJ5tDgfRzw91DcbsywrHCJWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iMzVBNqTC2L6ztOGos41ChG7ignVBg9YoIa',
        'igfJDgL2zsb3yxjYAw5NigzHy3rPB25ZigfJCM9ZCYbuB3jUlG',
        'AKLmExG',
        'AwrLBNrPDhK',
        'AgDhvhm',
        'u0zqB1m',
        'vhjHzgvYigLZig91DcbVzIbOB3nWAxrHBcbHBMqGB25SAw5LicG',
        'tNzXufm',
        'ihrHCMDLDhmG4OMKieW',
        'C3rHA2vVDxqTBw9KywWTy2XVC2uTEa',
        'w1n0ywTLB3v0xsbvCgrHDguGy2HLy2SGzxjYB3i6',
        'AwnVBG',
        'ufHsvvC',
        'y2Xstw8',
        'mda6mda',
        'sw1PyK4',
        'C3rHA2vVDxqTChjVzMLSzs1IDg4Tz3jVDxa',
        'q2HHAw4Gs2L0',
        'z2P0q0G',
        'C2v0vwLUDde2',
        'zM9ruLy',
        'CMTAse8',
        'BgvMDa',
        'DgHLBG',
        'zMLUzeLUzgv4',
        'C3rHA2vVDxrF',
        'ugXHEwvY',
        'BgrJwMq',
        'Bwf0y2HLCW',
        'sxfZDuK',
        'CZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idvWEdSkicaGicaGicaGicaGzMXLEdOGmtSkicaGicaGicaGicaGBwLUlxDPzhrOoIaWoWOGicaGicaGicaGicbVDMvYzMXVDZOGAgLKzgvUoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc1Uyw1LihSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXms41ChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa3mda7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicb0zxH0lwrLy29YyxrPB246ig5VBMu7cIaGicaGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxa7cIaGicaGicaGicaGig92zxjMBg93oIbOAwrKzw47cIaGicaGicaGicaGihrLEhqTB3zLCMzSB3C6igvSBgLWC2LZoWOGicaGicaGicaGicbTyxGTD2LKDgG6ide0mhb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc1Uyw1LoMHVDMvYihSkicaGicaGicaGicaGy29SB3i6icmZogjKzJG7cIaGicaGicaGicaGihrLEhqTzgvJB3jHDgLVBJOGDw5KzxjSAw5LoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc1SDMWGEWOGicaGicaGicaGicbMB250lxnPEMu6idKUnxb4oWOGicaGicaGicaGicbJB2XVCJOGiZK0ytnIodSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idyWmdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnHCMqTAgvHzgvYlwfJDgLVBNmGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idrWEdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnVBxbHy3qTBgLTAxqTC2vSzwn0ihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZbMmtCYytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSkicaGicaGicaGicaGy29SB3i6icnJyMq1zte7cIaGicaGicaGicaGigzVBNqTC2L6ztOGos41ChG7cIaGicaGicaGicaGihbHzgrPBMC6idfWEca0ChG7cIaGicaGicaGicaGia',
        'xtOGvgfYz2v0igLZie9grIbxquXmicHoBYbfrcKUief0DgfJA3mGzw5HyMXLzceGq2XPy2SGDg8GDg9Nz2XLie9oifDbteWGAwyGDgfYz2v0ig1VDw50CYb3ywXSlIi+8j+BOE+4JYbpzMyGv2fSBdWVyNv0Dg9UpG',
        '4PQHieHPDcbmB3DLC3qGqwjYB2fK',
        'BwzHD1i',
        'zMXHC2G',
        'C3rHA2vVDxqTy2HHAw4TyMfYlwLUyW',
        'D2fYsw5MBW',
        'yw5VDgHLCIbWBgf5zxi',
        'BgfZDevTzxjNzw5JEunOAw1L',
        'C2LKzwjHCNjVB3q',
        'zgvZyW',
        'iZeXmtGYnW',
        'y29UzMLN',
        '4PYi77Ipia',
        'CgXHEwvYx25HBwu',
        'i3n0ywTLB3v0lwTLEs1JBg9Zzq',
        'qK5YC2i',
        't3v0ig9MifrVCM4',
        'qNH1Awy',
        'B1bRDuq',
        'C2LU',
        'ywXLCNrpBKLSBgvNywXiAxq',
        'yMrssuK',
        'y29UDgfPBNm',
        'CwznA3e',
        'Bw91C2vKB3DU',
        'Aw5Zzxj0qMvMB3jL',
        'q2XHC3nPzMLJyxrPB246',
        'Du5ct2O',
        'vKD1vwC',
        'yMvNAw5qyxrO',
        'zMv0y2HLza',
        'yK1uEgS',
        '4PA2ifrHCMDLDcbYywrHCIbsrvnvtuvelG',
        'vhjHzgvYifDHDgnO',
        'lMjHC2LJlwLUzM9YBwf0Aw9UigXPlcaUDxnLCI1PBMzVCM1HDgLVBIbSAsWGw2nSyxnZkJ0IyMfZAwnjy29UCYjDigXPlcbBy2XHC3mQpsjIyxnPyY1Py29UCYjDigXP',
        'shbTvMO',
        'xseGvMLVBgf0Aw9UCZOG',
        'wLnlAgu',
        'vwTJCui',
        'sg52wMG',
        'zun1uem',
        'zLzWuee',
        'ANvZDgLMEunVBNrLBNq',
        'CgLK',
        'DLrHBLq',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnHCMqTBhzSiJ5m',
        'qKLurKS',
        'AMTwAKi',
        '8j+uKIbuAguGzNjLzsbYywrHCIb3yxrJAgvZideGDgfYz2v0lIbtBMLWzxiGuhjVicHtucKGDw5SB2nRCYb1BMXPBwL0zwqGDgfYz2v0CY4',
        'Dg9Nz2XLlwfSzxj0lxrYywrLCG',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC2v0DgLUz3mTDgvZDhmIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UiIbPzd0IC3rHA2vVDxqTyNrUlxrLC3qTyMvSBciGC3r5Bgu9iMzSzxG6ide7ihbHzgrPBMC6idrWEdSGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoYbJB2XVCJOGi2zIyMyYndSIihrPDgXLpsjuzxn0ie1LBg9KAwmGqMvSBcbdAgLTzsi+8j+uLcbczwXSpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8l2rLDgfPBhm+cIaGicaGicaGicaGicaGicaGicaGpgrLDgfPBhmGy2XHC3m9iNn0ywTLB3v0lxnLDhrPBMDZlwnHDciGzgf0ys1Zzxr0Aw5NCY1Jyxq9iNnWiIa',
        'ywXLCNrpBKz1BgXiCa',
        'BMz6EKq',
        'vuvSBw4',
        'zgL2',
        'AhbnyxG',
        'iIb0AxrSzt0IuMvTB3zLifrHCMDLDci+4PYvpc9IDxr0B24+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlw1PzhjVDYi+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwjHzgDLCYi+',
        'thP1CLy',
        'vgLTzxiGCMvHy2HLzcaWicGR',
        'Cg9ZAxrPB246igzPEgvKoYb0B3a6idq4ChG7ihjPz2H0oIaXmNb4oYbTyxGTD2LKDgG6idm2mhb4oYb6lwLUzgv4oIaYmtq3ndGZmdaWoYa',
        'AhjxuM8',
        'AhrsDgi',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1WCM8TBg9JAY1Iyw5UzxiIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmJzWEdSGBwfYz2LUlwjVDhrVBtOGnhb4oYi+8j+sVcdWN5sspc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXm3b4oYbJB2XVCJOGi2y1owuWyJSGBwfYz2LUlwjVDhrVBtOGnhb4oYi+vhjHzgvYifDHDgnOBgLZDcaMifnHzMuTs2vLCgLUzYbsywrHCJWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmtfWEdSGy29SB3i6icm5ngeZyJG7igXPBMuTAgvPz2H0oIaXlJq1oYbTyxjNAw4TyM90Dg9ToIaXmNb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGifrYywnRihrYywrLCNmGyNv5Aw5NigHVC3aGC2vYDMLJzxmUieDLDcbPBNn0yw50igf1zgLVigfSzxj0CYbHBMqGms1JBgLJAYbTzxnZywDPBMCGDgHLihnLy29Uzcb0Agv5igXHBMqGywjYB2fKig9YihjLDhvYBIbVBMXPBMuHcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlxbYAw1HCNKIigLKpsjZDgfRzw91Dc1IDg4TDw5SB2nRlxrYywrLCNmIihn0EwXLpsjIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJzJu5ztbIlcaJzdK3nZa2ktSGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoYbJB2XVCJOGiZbMmtCYytSGzM9UDc13zwLNAhq6idKWmdSGzM9UDc1ZAxPLoIaXmxb4oYbWywrKAw5NoIa2ChGGmtrWEdSGyM9YzgvYlxjHzgL1CZOGnxb4oYbJDxjZB3i6ihbVAw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG8j+sVcbvBMXVy2SGvhjHzgvYifDHDgnOicHZzq',
        'z1PwDuG',
        'sg9ZCgL0ywXPEMvKigj5ia',
        'zg9JDw1LBNrfBgvTzw50',
        'i2jHCKvUzxjNEq',
        'BgLJzw5Zzs1WB2XS',
        'rw5LBxK',
        'w1n0ywTLB3v0xsbfCNjVCIbZAg93Aw5Nihn0B3jLoG',
        'sKvkDw4',
        'sLnXD1a',
        'zM10ia',
        'pK9MzMXPBMu8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGica8l3nLBgvJDd4kicaGicaGicaGicaGicaGicaGica8C2vSzwn0ignSyxnZpsjZDgfRzw91Dc1JB21Wywn0lwXPBwL0lxnLBgvJDciGzgf0ys1MDY1PBMfJDgL2zt0I',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTzNCTAgL0iIbKyxrHlwz3lwHPDd0I',
        'DxnHyMXL',
        'DgvYCML0B3j5ihDHCG',
        'zKrUv1K',
        'iJ48l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cIaGicaGicaG',
        'A1jTv0K',
        'Aw5WDxq',
        'tMngs24',
        'BgvUz3rO',
        'q2XPy2SGDg8GywrKihrHCMDLDcbB',
        'cIaGicaGicaGicaGicaGicaGicaGpc9KzxrHAwXZpGOGicaGicaGicaGicaGicaGicaGidXKzxrHAwXZignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1JyxqIigrHDgeTC2v0DgLUz3mTy2f0psj0DYiG',
        'qvvurhy',
        'pc9KAxy+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGica',
        'C3rHA2vVDxqTyNrUlxbHDxnL',
        'C3rHA2vVDxqTy2HHAw4TyMfYlwrLyW',
        'vKXKv0e',
        'uNj6rK0',
        'sMvLse4',
        'v1jjrhq',
        'xsbHzgrLzcb0BYbiB3nWifnLCNzPy2vZifDHDgnOBgLZDc4',
        '4O+4ifrHCMDLDcbYywrHCIbqqvvtruqU',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwz3lxn1Bw1HCNKIpGOGicaGicaGicaGicaGicaGphnWyw4GDgL0Bgu9iKvSAwDPyMXLihrVigHPDcbUB3CIpUkCHsa',
        'BgLUzvrV',
        'A3vOvwC',
        'DgfYz2v0CW',
        'yxfkCMq',
        'AfHuvNC',
        'cIaGicaGicaGicaGicaGicbWB3nPDgLVBJOGzML4zwq7cIaGicaGicaGicaGicaGicbPBNnLDdOGmdSkicaGicaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmcWGmcWGmcWGmc44nsK7cIaGicaGicaGicaGicaGicb6lwLUzgv4oIa5otK5otK5oWOGicaGicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGicaGigjHy2TKCM9WlwzPBhrLCJOGyMX1CIG1ChGPoWOGicaGicaGicaGicaGicaGzM9UDc1Myw1PBhK6ic1HChbSzs1ZExn0zw0SiejSAw5RtwfJu3LZDgvTrM9UDcWGiLnLz29LifvjiIWGuM9IB3rVlcbZyw5ZlxnLCMLMoWOGicaGicaGicaGica',
        'wNDsBNy',
        'ywXSB3DjzgXL',
        'BLfxCMC',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlw5VDguGD2fYBIi+8j+APYbuAguGC3rVCMuGAxmGBM90ig9Wzw4GEwv0lIbdAgvJAYbIywnRigfMDgvYihrOzsbUzxH0ihvWzgf0zs48l2rPDJ4kicaGicaGicaGicaGicaGicaGica',
        'xsbTyxjRzwqGyxmGt04Gv0fmtcaO4PQHieveiefJDgL2zsKUienVBNrYywn0ihbHDxnLzcbPzIbHDxrVlxbHDxnLigvUywjSzwqU',
        'AMfVDKi',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigHVC3bPDgfSiIb0AxrSzt0IuMvTywLUAw5NoIa',
        'Dg9mB2nHBgvtDhjPBMC',
        'ks4IpUkAOsbfrdWVC3bHBJ4',
        'vefsr0vuie9lqvKGlsbbvfrbq0SH',
        'C3rHA2vVDxqTDg9HC3q',
        '8j+uHcbdAgvJAYbMB3iGuMfKyxiGvxbKyxrLCW',
        'zNjLzq',
        'z3jHBNrLza',
        '8j+pGsbtDgfYDgLUzYbcyxnLieLeihnLDcb0BYaJ',
        'DfzVDNC',
        'D3jPDgvuzxH0',
        'y0vtwei',
        'B25TzxnZywDL',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0IugLUz3mGBg9JywWGy29TCgfUAw9UigjYAwrNzsbVBIaXmJCUmc4WlJe6odC2nIb0BYbICMLUzYbICM93C2vYihDPBMrVDYb0BYb0AguGzNjVBNqGB3zLCIbVDgHLCIbHChbZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7IMQeGt1mGqxv0BY1gB2n1CYaOq29TCgfUAw9UiejYAwrNzsK8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgLUChv0ihr5Cgu9iMnOzwnRyM94iIbPzd0IDg9Nz2XLlw9Zlwf1Dg9MB2n1CYiG',
        'y29WEunVzgu',
        'C2v0sxrLBq',
        'pGOGicaGicaGicaGicaGicaGicaGicaGica8C3vTBwfYEt7WN5suiefSzxj0CYaMyw1WoYbtB3vUzdWVC3vTBwfYEt4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iLbSyxKGyxvKAwjSzsbHBgfYBsbZB3vUzhmGB24GAg9ZCgL0ywWGzgLZy2HHCMDLlcbJAgfPBIbHBgvYDhmSigfUzcb0CMfKzxiGCMvHzgLUzxnZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN5skifnVDw5KiefSyxjTCZWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0Iy2HLy2TIB3GIigLKpsj0B2DNBguTC291BMqTywXHCM0Iia',
        'ywXSx3DHCNm',
        'B206idfWEcbZB2XPzcaJmZm0mtu1oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChGGnhb4idaGmdSkicaGicaGicaGicaGB3zLCMzSB3C6igHPzgrLBJSkicaGicaGicaGicaGBwfYz2LUlwjVDhrVBtOGnhb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDgfIlwj0BIb7cIaGicaGicaGicaGigzSzxG6ide7cIaGicaGicaGicaGihbHzgrPBMC6idrWEca2ChG7cIaGicaGicaGicaGigjVCMrLCJOGBM9UztSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGDhjHBNnWyxjLBNq7cIaGicaGicaGicaGignVBg9YoIaJotrHm2i4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWlJvWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idCWmdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIa1ChG7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDgfIlwj0BJPOB3zLCIb7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi1nsWGmJu1lcaYntuSidaUmdqPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDgfIlwj0BI5Hy3rPDMuGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmwuYotnIoWOGicaGicaGicaGicbJB2XVCJOGiZm4yMrModSkicaGicaGicaGicaGyM9YzgvYlwjVDhrVBtOGmNb4ihnVBgLKicmZogjKzJG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc10ywiTyMfKz2uGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmJjJntvLoWOGicaGicaGicaGicbJB2XVCJOGiZa1mMuXnJSkicaGicaGicaGicaGzM9UDc1ZAxPLoIa5ChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGicaGia',
        'rMfJDgLVBIa',
        'ywXHCM1tB3vUzfr5Cgu',
        '8j+uKIbuCMf2zwXPBMC6ia',
        'BM8Ty29YCW',
        'iIbJBgfZCZ0IC3rHA2vVDxqTyxr0ywnRlwj0BIa',
        'AfjHzLu',
        'ywDL',
        '4PUuienptLrsqunuifzjt0XbveLptLmGu1bfq0LgsunbveLptG',
        'zMvHDhvYzxm',
        'u3nfz0O',
        'EKfgwK8',
        'zLLrv2y',
        't25SAw5LigfJDgL2Axr5ihn0yxr1CYbYzxf1AxjLCYbtBMLWzxiGuhjV',
        'cIaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1KzwWIigrHDgeTzgvSlxrYywrLCJ0I',
        'B3bAzMi',
        'BxDqDKG',
        'iIb0AxrSzt0I',
        'Dw5SB2nRv3a',
        'Dg9ju09tDhjPBMC',
        'zgLZCgXHEq',
        '4PQG77IpifrHCMDLDcbB',
        'AwrSzq',
        'EfHjt1u',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GDgL0Bgu9iKLUigHVC3bPDgfSic8GAMfPBci+8j+pPsa',
        'v3bRsNi',
        'AwXiq2u',
        'pUkjPsa',
        'pgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1JB2rLiIbPzd0IC3rHA2vVDxqTC3rVCMuTC2v0A2v5iIbZDhLSzt0IBwfYz2LUlwXLzNq6idrWEdSIpVcFLjeGu2v0iefqssbRzxK8l2j1DhrVBJ4',
        '4OcIicOQuhjLluHPDcbby3rPDML0EsOQoIa',
        'vMTPAxq',
        'zMTTrLa',
        'swT0rvi',
        'yxjPys12ywX1zw5VDW',
        'B2zMC2v0ugfYzw50',
        'yuDKD3e',
        'u0Hblti1nG',
        'BwvTyMvYCW',
        'B25PBNb1Da',
        'sMfPBa',
        'igfNBYaOBMvLzhmG4OMLia',
        '4PQG77IpievYCM9YignOzwnRAw5NihvWzgf0zxm6ia',
        'C3rHA2vVDxqTyNrUlxrLC3qTyMvSBa',
        'iIb0yxjNzxq9iL9IBgfUAYiGCMvSpsjUB29Wzw5LCIi+4PYOieDLBMvYyxrLigTLEtWVyt4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpgLUChv0ihr5Cgu9iNrLEhqIigLKpsjZDgfRzw91Dc1RzxKTAw5WDxqIignSyxnZpsjZDgfRzw91Dc1RzxKTAw5WDxqIig1HEgXLBMD0Ad0ImtyIihbSywnLAg9SzgvYpsjqyxn0zsb5B3vYide2lwnOyxjHy3rLCIbRzxKIigf1Dg9JB21WBgv0zt0IB2zMiIbZCgvSBgnOzwnRpsjMywXZzsi+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1UB3rLiIbPzd0IC3rHA2vVDxqTA2v5lxn0yxr1CYi+pc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1Hy3rPB25ZiJ4kicaGicaGicaGicaGicaGicaGica',
        '4PQHie5LEhqGvgfYz2v0',
        'rw5LCMD5ihjLBwfPBMLUzYaOmJuGzw5LCMD5ihbLCIbHDhrHy2SP',
        'igHPDhmG4OcIifrPBwvYoIa',
        'zMLSBfrLEhq',
        'kseGq29UDhjHy3qGyxv0BY1WyxvZzwqUienSAwnRihrVigzVCMnLigf0DgfJAYbHBNL3yxKGkhjLCxvPCMvZignVBMzPCM1HDgLVBIKUiJ4kicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXmc41ChG7iJ4',
        'p3nLBgvJDgLVBNm9ChjVzMLSzq',
        'qLv6ENq',
        'icaGicaGicbIywnRz3jVDw5KoIaJmwuYotnIoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJndC1nty5oWOGicaGicaGicaGicbJB2XVCJOGi2y4zMfMyZSkicaGicaGicaGicaGCgfKzgLUzZOGmNb4idzWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideXChG7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxnLDhrPBMDZlw51Bsb7cIaGicaGicaGicaGihDPzhrOoIa3ohb4oWOGicaGicaGicaGicbMBgv4lxnOCMLUAZOGmdSGlYOGDgHLifnJyw4GuMfUz2uGCgfPCIbZAxrZigLUigeGzMXLEcbYB3CGDgHHDcb3B3vSzcbZCxvLzxPLidCTzgLNAxqGsurZig91DcbVzIb2Awv3icOVcIaGicaGicaGicaGigjHy2TNCM91BMq6icmXzti5m2i7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicbWywrKAw5NoIaYChGGnhb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtfWEdSkicaGicaGicaGicaGDgv4Dc1HBgLNBJOGCMLNAhq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDgf0DxmTCgLSBc50CMfKzxiTCMvHzhKGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi0nsWGmtu4lcaXmsWGmc4YnsK7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicnMntLLmgi7cIaGicaGicaGicaGignVBg9YoIaJzMvMmdHHoWOGicaGicaGicaGicbHBMLTyxrPB246ihn0ywTLB3v0ugLSBfb1BhnLideUmNmGAw5MAw5PDguGzwfZzs1PBI1VDxq7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDgf0DxmTCgLSBc53yxiTCgLSBcb7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJm5lca2ocWGnJGSidaUmJuPoWOGicaGicaGia',
        'q291BgqGBM90ihjLywnOihrOzsbuB3jUiefqssb0BYbJB25MAxjTihLVDxiGCgXHEwvYieLelIbszxrYEwLUzYbPBIaYig1PBNv0zxmU',
        'vw5SAw1PDgvKihrHCMDLDhmSigLUywn0AxzPDhKGzMLSDgvYlcbfyxjSEsbeAxnJAgfYz2uGlYb3yxiGAw50zwWSihjHCgLKigrPC2nOyxjNzsbWB2XSAw5NigfUzcbHBgfYBsbZB3vUzhmU',
        'teDtCLC',
        'CgfUAwm',
        'C3rHA2vVDxqTzwqTC2nVCguTC2vSzwn0',
        'zK9uDxa',
        'A2XHEg9U',
        'iIbKyxrHlwzPzd0I',
        'uuzZzhq',
        'Dg9Nz2XLlwfSzxj0lwz1BgXOCa',
        'q09otLO',
        'DwL6tLK',
        'D0frvw4',
        'Ce5yqNy',
        'uu91qvG',
        'i3nPzgvIyxjYB290igfBAhjLzIO9iNbYB2zPBgvZlNbOCd9ysuq9iL0',
        'vMPrthi',
        'zgf0yq',
        'BM90igHPDhrHyMXLihvUzgvYihrOAxmGy29UDhjHy3q',
        'cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1KzwWIigrHDgeTzgvSpsi',
        'rLnoyMu',
        'xsbPCYbHBhjLywr5igjLAw5NihDHDgnOzwqU',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iMzVBNqTD2vPz2H0oIa4mda7ignVBg9YoIa',
        'DgLTzxn0yw1W',
        'C29VBG',
        'pJyWie1PBNmGkdeGsg91CIK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0IlteIia',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iM5HBwvFx18Ixq',
        'sg1AChu',
        'jMnVBw1LBNq9u3rHA2vVDxrlzxLdAgvJAW',
        'yNrYD24',
        'CMLUz1rHyG',
        'rM5svwC',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxiTBMfTzsjD',
        'BgzgtKq',
        'zgvKDxbLtxm',
        'tM8GDhjHzgvYCYbVBIb3yxrJAgXPC3qUpgjYpKfKzcbHifrYywrLCIbjrcbHyM92zsbVCIbJBgLJAYaI8j+sVciGB24Gyw55ihrYywrLCIDZihbYB2zPBguGDg8GBw9UAxrVCIb0AgvPCIbOB3nWAxrHBcbZDgf0DxmHpc9KAxy+',
        'vLves2K',
        'rK1ut2W',
        'C3rHA2vVDxqTyNrUlwnOzwnRlxvWzgf0zq',
        'xsbKB2vZig5VDcbTzwv0ignYAxrLCMLHlG',
        'thfNDue',
        'Bu55t2u',
        'Dw5RBM93BG',
        'phnWyw4GDgL0Bgu9iLrYyxzLBgXPBMCGlYbHyNjVywqIpUkCIo+4JYa',
        'Axnby3rPDMu',
        '8j+uHcbdAgvJA2LUzYbhAxriDwiGzM9YihjHzgfYihvWzgf0zxmUlI4',
        'uuzyC1e',
        'pc90zxH0yxjLyt4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGicaGidWHls0Gtw9KywWGrM9VDgvYiefJDgLVBNmGls0+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IyMfJA2DYB3vUzdOGiZfLmJKZyJSGCgfKzgLUzZOGmtjWEcaXnNb4oYbIB3jKzxiTDg9WoIaXChGGC29SAwqGiZmZnde1ntSGzgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbMBgv4lxDYyxa6ihDYyxa7igDHCdOGohb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igDHCdOGohb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UigLKpsjZDgfRzw91Dc1IDg4Tzg93BMXVywqTC2HVDciGC3r5Bgu9iMjHy2TNCM91BMq6icmYntyZzwi7ignVBg9YoIaJzMzMoYbIB3jKzxi6ig5VBMu7ihbHzgrPBMC6idDWEcaXnhb4oYbIB3jKzxiTCMfKAxvZoIa2ChG7igzVBNqTC2L6ztOGmtjWEdSGzM9UDc13zwLNAhq6idCWmdSGy3vYC29YoIbWB2LUDgvYoYbKAxnWBgf5oIbMBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idzWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpUkSH++4JZWVC3bHBJ4Grg93BMXVywqGue5hcIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwj0BI1JB3b5lxjLCg9YDciGC3r5Bgu9iMjHy2TNCM91BMq6icmWntK2nJK7ignVBg9YoIaJzMzMoYbIB3jKzxi6ig5VBMu7ihbHzgrPBMC6idDWEcaXnhb4oYbIB3jKzxiTCMfKAxvZoIa2ChG7igzVBNqTC2L6ztOGmtjWEdSGzM9UDc13zwLNAhq6idCWmdSGy3vYC29YoIbWB2LUDgvYoYbKAxnWBgf5oIbMBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idzW',
        'AxntDhjPy2TLBG',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxiTAw5MB3jTyxrPB24IxsbHw2HYzwyQpsjWCM9MAwXLCY5WAhaIxsWG',
        'mta1nJmYmgTTyurpza',
        'C3rHA2vVDxqTy2HHAw4TBwLUlwfNzq',
        'EeTouey',
        'vfzMr3q',
        'uKvbrfK',
        'lGOk',
        'rgHdvg8',
        'EhfeA2C',
        'CYb1BNrPBcbJAgfPBIbKCM9WCYeGuxvPy2SGsgL0ig5VDYe',
        'sfa6ia',
        'tgLMzsbMDwXSEsbYzwnVDMvYzwq6ia',
        'B2THEq',
        'CwLYsgi',
        's0Plrwi',
        'y2HHAw5nAw5bz2veyxLZ',
        'BM8TC3rVCMu',
        'ywn0AxzLrwXLBwvUDa',
        'u3rHA2vVDxrgywn0Aw9Uv2f0y2G',
        'i2y4nZe3mq',
        'q21swwe',
        'yLnztu4',
        '4OcIicOQsw5JAwrLBNqGvgLTzxn0yw1WkIO6ia',
        'u0fxzKe',
        'C3rHA2vVDxqTAw5Hy3rPDMuTC2vSzwn0',
        'uM9lC3m',
        'y2XPCgjVyxjK',
        'y2HHAw5qB29Su2L6zq',
        'kseG',
        'vgvYCML0B3j5',
        '4PQG77IpifDbuIbbq1rjvKu6ievbuKXzierju0niqvjhrq',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1MDY1YB3CGC29VBIi+cIaGicaGicaGicaGicaGicaGicaG',
        'C2v0',
        'uwHduhq',
        'iIbZDhLSzt0ID2LKDgG6ia',
        'vgfYz2v0igLZie91DcaMiefSAxzLicHpA2f5ksbHBMqGywn0AxzLicG',
        'igvSAwDPyMXLlw1LBwjLCIbJAgLTzsi+',
        'zMfJDgLVBNm',
        'rLjXvM4',
        'zgTtzKy',
        'uMngBxa',
        'C3rHA2vVDxrgAwDODfb1BhnLidfZigLUzMLUAxrLigfSDgvYBMf0zq',
        'B25LoYi+',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnHCMqTBhzSiIbZDhLSzt0Iy29SB3i6icm2ndC0ogi7iIb0AxrSzt0IrMfJDgLVBJOG',
        'zgvZA3rVCe5VDgLM',
        'Bw92zvrV',
        'vLbbyue',
        'BgfZDfn0CNvJDhvYywXlzxK',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kcIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1SAxn0iIbPzd0IC3rHA2vVDxqTDgfYz2v0lwXPC3qIpGOGicaGicaGicaGicaGicaGicaGia',
        'w1n0ywTLB3v0xsbbDwrPBYbMywXSyMfJAYbLCNjVCJO',
        'Dg9YBL9Hy3rPDMvFD2fYx2zHy3rPB25Z',
        '8j+sIIbeCNvNignVB2XKB3DUigHHCYbLBMrLzceGuMvHzhKGDg8GDgfRzsbHBM90AgvYigrYDwCU',
        'jNrPBwvZDgfTCd0',
        '8j+uKIbjBIbkywLSoIa',
        'ig1PBNmU',
        'zMfJDgLVBI1WB2XSlxjLCxvLC3q',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1SB2nRzwqIpK5VDcbVD25Lzcb5zxqUidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigrHDgeTDw5SB2nRlxDWpsj0DYi+8j+BKIbhzxqGAxqGAw4GDgHLifn0B3jLpc9IDxr0B24+pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'weHQAwO',
        'uvvMr0e',
        'ipcFK4S8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica',
        'jMfTCdS',
        'p3nLBgvJDgLVBNm9yMfZAwm',
        'icHmDMWG',
        'AgL0vhLWzq',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0B3jLlxbPBgWGB3DUzwqIihrPDgXLpsjfEhbPCMvZia',
        'Bg9HzgLUzW',
        'zNvUy3rPB24',
        'C2vSzwn0lcbBzgf0ys1KzwXDlcbIDxr0B24Sige',
        'BgfZDfrZ',
        'D2fSBa',
        'ie9vvce',
        'CxLJs08',
        'Dg9Nz2XLlwfSzxj0lwrYDwC',
        'BwLUsw5Hy3rPDMvnAw4',
        'CM91BMrszwn0',
        'cIaGicaGicaGicaGicaGicbSzxqGDgLTzxiGpsbUDwXSoWOGicaGicaGicaGicaGicaGBgv0igLUDgvYDMfSid0G',
        'vfLny1O',
        'C3rYAw5N',
        'sNjiuLq',
        'rMvKzxjHBa',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1KzxnJiJ4',
        '4PQG77IpiefqssblzxKGCMvTB3zLzc4',
        'zxHW',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTBM90zsi+q2HLy2TPBMCGzxzLCNKGmZaGC2vJB25KCYbMB3iGmtaGBwLUDxrLCY4Gugf5BwvUDhmGDxn1ywXSEsbZAg93ihvWihDPDgHPBIaYig1PBNv0zxmUpc9KAxy+',
        'nZC0mtq3ywLVzKfV',
        'wKjQsuS',
        'vhjHzgvYifnJyw5UAw5N',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGia',
        'DxnLCI8',
        'pKXLzNqGu2LKzsaOrgvMyxvSDcK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ICMLNAhqIia',
        'xsbPCYbPBIbiB3nWAxrHBceGtxvZDcbIzsbpDxqGjIbbBgL2zsb0BYbHDhrHy2SU',
        'zxHJBhvKzwq',
        'C291BMrbBgfYBq',
        'r1DMC2u',
        'D2fYBMLUzW',
        'zgvZDgLUyxrPB24',
        'tuLRDwu',
        'swzHsvq',
        'we1kDLi',
        'zNDiAxq',
        'DwjQDgq',
        'zgL1CZOGmtjWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmca4ChGGCMDIysGZncWGmtK3lca5ncWGmc41ktSkicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmtvZigvHC2u7cIaGicaGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxa7cIaGicaGicaGicaGig1HCMDPBI1Szwz0oIaYChG7cIaGicaGicaGicaGigfUAw1HDgLVBJOGC3rHA2vVDxruyxjNzxrqDwXZzsaXlJjZigLUzMLUAxrLigvHC2uTAw4TB3v0oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTCgLSBc10yxjNzxqTyNrUoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGiZiYyZu1zsaWjsWGiZe2ytm0ysaXmdaLktSkicaGicaGicaGicaGDhjHBNnMB3jToIbZy2fSzsGXlJa1ktSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaWide0ChGGCMDIysGZncWGmtK3lca5ncWGmc44ktSkicaGicaGicb9cIaGicaGicaGqgTLEwzYyw1LCYbZDgfRzw91DfrHCMDLDfb1BhnLihSkicaGicaGicaGicaGmcuGEYbIB3GTC2HHzg93oIaWidaGnhb4icmYmMm1nwu7ih0kicaGicaGicaGicaGntaLihSGyM94lxnOywrVDZOGmcaWide0ChGGiZrHzgu4mcWGmcaWidzWEcaJmtzHmZrHoYb9cIaGicaGicaGicaGideWmcuGEYbIB3GTC2HHzg93oIaWidaGnhb4icmYmMm1nwu7ih0kicaGicaGicb9cIaGicaGicaGqgTLEwzYyw1LCYbZDgfRzw91DenOywLUuhvSC2uGEWOGicaGicaGicaGicaWjsWGmtaWjsb7igjVEc1ZAgfKB3C6idaGmca0ChGGCMDIysGYnduSide1ocWGmteSidaUncK7ih0kicaGicaGicaGicaGntaLihSGyM94lxnOywrVDZOGmcaWideYChGGCMDIysGYnduSide1ocWGmteSidaUocK7ih0kicaGicaGicb9cIaGicaGicaGqgTLEwzYyw1LCYbZDgfRzw91DenOywLUugfUAwmGEW',
        'xsbYzw1VDMvKigzYB20Gsg9ZCcbxyxrJAgXPC3qU',
        'Aw5Hy3rPDMvtzwm',
        'AwfRv1K',
        'yK1MwLa',
        'icHm',
        's3zJD2i',
        'tM8GzMfJDgLVBIbJB250CMfJDhmGEwv0lJXICJ5bzgqGDgHLignSAwvUDcDZiezHy3rPB24GsuqGywjVDMuGDg8GBgLZDcbTzw1IzxjZihLVDsbHCMuGywXSB3DLzcb0BYbOAxqUpc9KAxy+',
        '4OcIicOQuhjLluHPDcbtDgf0DxmQkJOG',
        'xsbPCYbbyNjVywqH',
        'y3vMDvu',
        'DM9SDw1L',
        'C3rHA2vVDxqTCg9ZAxrPB24TC2vSzwn0',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwrVDca',
        'AYb7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmtuSidiZlca0mIWGmc42ktSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxnLDhrPBMDZoJOTD2vIA2L0lxnJCM9SBgjHCI10AhvTyIWkicaGicaGicaUC3rHA2vVDxqTBgLZDdO6lxDLyMTPDc1Zy3jVBgXIyxiTDgH1BwiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmZm0mtu1oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaZChG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1Zzxr0Aw5NCZO6lxDLyMTPDc1Zy3jVBgXIyxiTDgH1Bwi6Ag92zxiScIaGicaGicaGlNn0ywTLB3v0lwXPC3q6oI13zwjRAxqTC2nYB2XSyMfYlxrODw1IoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZm4yMrModSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxrVz2DSzs1YB3CGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxrVz2DSzs1YB3CGAw5WDxrBDhLWzt0Iy2HLy2TIB3GIxsb7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGD2LKDgG6ide2ChG7cIaGicaGicaGicaGigHLAwDODdOGmtzWEdSkicaGicaGicb9cGOGicaGicaGic5ZDgfRzw91Dc1WCM9MAwXLlwj0BIb7cIaGicaGicaGicaGigrPC3bSyxK6igLUBgLUzs1MBgv4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGz2fWoIa0ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGZmcWGndeSidu5lcaWlJG1ksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJm2i4mMy2icfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJoq',
        'AgvPz2H0oIbJywXJkdeWmhzOic0GmZjWEcK7cIaGicaGicaGicaGig92zxjMBg93lxK6igf1Dg87cIaGicaGicaGicaGigjHy2TNCM91BMq6icmWzJe3mMe7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicmZmZqXntu7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ideWChG7cIaGicaGicaGicaGihbHzgrPBMC6ide0ChG7cIaGicaGicaGicaGignVBg9YoIaJztjLogyWoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWideWChGGndbWEcbYz2jHkdaSidaSidaSidaUnYK7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs10AxrSzsb7igrPC3bSyxK6igzSzxG7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGywXPz24TAxrLBxm6ignLBNrLCJSGzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXnxb4oYbTyxjNAw4TyM90Dg9ToIa4ChG7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTBM90zsb7igzVBNqTC2L6ztOGmtfWEdSGy29SB3i6icm5ngeZyJG7ig1HCMDPBJOGnNb4ida7igXPBMuTAgvPz2H0oIaXlJq1oYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlw5VDguUD2fYBIb7ignVBg9YoIaJzMrLnJHHoYbIywnRz3jVDw5KoIbYz2jHkdi0nsWGmtu4lcaXmsWGmc4XmIK7igjVCMrLCJOGmxb4ihnVBgLKihjNyMeOmJq1lcaXntGSideXlcaWlJm1ktSGyM9YzgvYlxjHzgL1CZOGnNb4oYbWywrKAw5NoIa2ChGGohb4oYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwXPC3qGEYbKAxnWBgf5oIbMBgv4oYbMBgv4lwrPCMvJDgLVBJOGy29SDw1UoYbNyxa6idzWEdSGBwfYz2LUoIa4ChGGmdSGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1JyxjKihSGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSGyM9YzgvYlxjHzgL1CZOGohb4oYbWywrKAw5NoIa4ChGGmtbWEdSGyMfJA2DYB3vUzdOGCMDIysGZmcWGndeSidu5lcaWlJyPoYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwnHCMqUB3DUzwqGEYbIB3jKzxiTy29SB3i6ihjNyG',
        'BwLU',
        'ywXYzwfKEsbPBIbOB3nWAxrHBcaVigPHAwW',
        '4PQHiff1AwnRieHPDcb0yxjNzxqGCMvZzxqGDg8GqMfZzsbjrcaJ',
        'CMvTB3zLsxrLBq',
        'C3rHA2vVDxqTy2HHAw4TC2v0lwjHC2u',
        'C3rHA2vVDxqTy2HHAw4TC2nHBI1LBMq',
        'iIb0yxjNzxq9iL9IBgfUAYiGy2XHC3m9iNn0ywTLB3v0lwnHCMqTBMfTzsiGDgL0Bgu9iLzPzxCGuhjVzMLSzsi+cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'sg5IzM0',
        'C3rHA2vVDxqTzNCTDgfIlwjHzgDL',
        'igLZie9lqvKH',
        'DLfYA3O',
        'mJq4mty1nhneEgnUta',
        'lNn0ywTLB3v0lxDPBMrVDW',
        'BNDYAhu',
        'AgLVve4',
        'ufLkAha',
        'pgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDgf0DxmTCgLSBcbLzc1VBIiGzgf0ys10B2DNBguTD2fSBd0I',
        'iIbHBgfYBsbUzwvKCYb0AguG',
        'B3LJDNm',
        'pc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UignVBxbHy3qTC291BMqIigrHDgeTzNCTCgf1C2u9iG',
        'C3rHDhvZ',
        'D2vrsge',
        'rfvjz2i',
        'B2zMBgLUzq',
        'tfbru2C',
        'y29Kzq',
        'cIaGicaGicaGicaGidaLlcaXmdaLihSGyM94lxnOywrVDZOGmcaWidzWEcbYz2jHkdiZosWGnJGSidy4lcaWlJyPoYb0CMfUC2zVCM06ihnJywXLkdePoYb9cIaGicaGicaGicaGiduWjsb7igjVEc1ZAgfKB3C6idaGmcaXnNb4ihjNyMeOmJm5lca2ocWGnJGSidePoYb0CMfUC2zVCM06ihnJywXLkdeUmdmPoYb9cIaGicaGicaGFqOkicaGicaGicaUC3rHA2vVDxqTy2HHAw4TyMfYihSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoWOGicaGicaGicaGicbNyxa6idzWEdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZfLmJKZyJSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnxb4oWOGicaGicaGicaGicbWywrKAw5NoIa0ChGGohb4oWOGicaGicaGicaGicbTyxjNAw4TyM90Dg9ToIa1ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtfWEdSkicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmNmGzwfZztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnOywLUlwjHCI5ZywzLihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJmJjJntvLoWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdm0lcaXotCSidK0lcaWlJa4ktSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnOywLUlwjHCI53yxjUAw5NihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi0nsWGmtu4lcaXmsWGmc4XmIK7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmca4ChGGCMDIysGYnduSide1ocWGmteSidaUmJuPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2HHAw4TyMfYlNbHBMLJihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJzwy0ndq0oWOGicaGicaGicaGicbIywnRz3jVDq',
        'AuDhAKm',
        'vNvbz1K',
        'zMyTyxr0ywnRlwHVC3aTyMfUBMvY',
        'C2v0DgLUz3mTB3bLBG',
        'mZzMA1PPB1y',
        'zgPVvuS',
        'lcbLBgLNAwjSzsbPBIa',
        'u1H5uhi',
        'CNvUBMLUzW',
        'zMfJDgLVBI1ZBMfWC2HVDa',
        '8j+rPcbwsuvxifbst0zjteuGkenptKzjuK0P',
        'CgXHEwvYx2LK',
        'Dg9vChbLCKnHC2u',
        'Dg9eyxrHvvjm',
        'xsbPCYbps0fzicG',
        'C3rHA2vVDxqTCgLSBc1OAxqTDhjHzgvY',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'wfDQu00',
        'ywn0AxzLvgHYzxnOB2XKtwLU',
        'twzLqMK',
        'cIaGicaGicaG',
        'BMfTzq',
        'i2zLzJa4yq',
        'y1zLr3K',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqIihn0EwXLpsjVCgfJAxr5oIaWlJC1oYbIB3jKzxi6idfWEcbKyxnOzwqGCMDIysGYnduSide1ocWGmteSidaUnduPoYbIywnRz3jVDw5KoIbYz2jHkde1lcaYmYWGndiSidaUnIK7ihbHzgrPBMC6idHWEcaXmhb4oYbKAxnWBgf5oIbMBgv4oYbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47igfSAwDUlwL0zw1ZoIbJzw50zxi7ig1HCMDPBI1IB3r0B206idvWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0IzM9UDc13zwLNAhq6idCWmdSGzM9UDc1ZAxPLoIaXms41ChG7ignVBg9YoIaJotrHm2i4oYi+8j+oRYbuyxjNzxqGwW',
        'tfrwsxa',
        'ndu4mdu1EK5yCwPw',
        'C3rHA2vVDxqTAw5WDxqTDgfYz2v0',
        'CKLXrwy',
        'pJe1ie1PBNm8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ImZaIia',
        'CKDsA0y',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXZzwXLy3qGy2XHC3m9iNn0ywTLB3v0lwnVBxbHy3qTBgLTAxqTC2vSzwn0iIbKyxrHlxrHCMDLDc1SAw1PDd0I',
        'BgfZDefJDgLVBLrZ',
        'C3rHA2vVDxrsywrHCG',
        'C3rHA2vVDxqTC3rVCMuTBw9KywW',
        '8j+tIYbdB3bPzwqGiG',
        '4PQHieHPDcbbyNjVywq',
        'DhjHzgvY',
        'yM1QEei',
        'ywXLCNrZ',
        'BhD0A1G',
        'lNn0ywTLB3v0lxrYywrLCI1ZywzL',
        'C2L6zq',
        'CgvUzgLUz18',
        'cIaGicaGicaGicaGicaGicaGicaGpc9KzxrHAwXZpGOGicaGicaGicaGicaGicaGicaGidXKzxrHAwXZignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1JyxqIigrHDgeTC2v0DgLUz3mTy2f0psjMDYiG',
        'zMLSBfjLy3q',
        'pc9IpIbPCYbHDMfPBgfIBguGkhLVDsbOyxzLihy',
        'uKDnwhq',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGia',
        'z1DWsMu',
        'mtfWEcaTyxbWBguTC3LZDgvTlcbcBgLUA01Hy1n5C3rLBuzVBNqSihnHBNmTC2vYAwy',
        'B3nbDxrVrM9JDxm',
        'CxLqueq',
        'uhjLluHPDcbtDgf0Dxm6',
        'wwrcsuO',
        'iJ7WN6EXie9UifDHBgW',
        '8j+tUcbfDMLKzw5JzsbbDxrVlvnJCMvLBNnOB3qGru5bqKXfrc4',
        'y2fYzc1TAwrYB3CGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47cIaGicaGicaGicaGigDHCdOGnNb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy29TCgfJDc1OCcb7cIaGicaGicaGicaGihbVC2L0Aw9UoIbYzwXHDgL2ztSkicaGicaGicaGicaGAgvPz2H0oIaXmNb4oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmgyXnZjHoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJmZm0mtu1oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaZChG7cIaGicaGicaGicaGig92zxjMBg93oIbOAwrKzw47cIaGicaGicaGicaGig1PBI13Awr0AdOGotvWEdSkicaGicaGicaGicaGBwf4lxDPzhrOoIaXmJbWEdSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGzMXLEc1ZAhjPBMS6ida7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1OCc1TAw5PlxrLEhqGEWOGicaGicaGicaGicbWB3nPDgLVBJOGywjZB2X1Dgu7cIaGicaGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGicaGicb0zxH0lwfSAwDUoIbJzw50zxi7cIaGicaGicaGicaGigzVBNqTC2L6ztOGohb4oWOGicaGicaGicaGicbMB250lwzHBwLSEtOGBw9UB3nWywnLoWOGicaGicaGicaGicbMB250lxDLAwDODdOGnZaWoWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzJSkicaGicaGicaGicaGDgv4Dc1ZAgfKB3C6idaGmxb4idjWEcaJmdaWoWOGicaGicaGicaGicbWB2LUDgvYlwv2zw50CZOGBM9UztSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxrHyNmGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmgiXmtiWoWOGicaGicaGicaGicbIB3jKzxiTyM90Da',
        'C3rHBMrHCMq',
        'qKTYCNO',
        'Aw5UzxjuzxH0',
        'Aw5JAwrLBNq',
        'q29UDhjHy3qGsgL0pZO',
        'icJIMQeGruqPpc9IDxr0B24+',
        'BwXyqNu',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'y3jLyxrLt3nJAwXSyxrVCG',
        'wxfeC0m',
        '8j+oSIa',
        '4O+ZienVBMzPCM1PBMCGEw91CIbWBgf5zxiGsuqGD2L0Acb5B3vYiefqssbRzxKUlI4',
        'yM9VBgvHBG',
        '8j+NSsbuyxjNzxqGwW',
        'AgfZ',
        'twzzA3O',
        'vgvYCML0B3j5ifDHCG',
        'ngvdq1bcvq',
        'i3n0ywTLB3v0lwj0BI10B2DNBguTDhjHzgvY',
        'ktWVC3bHBJ4',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8BgfIzwWGy2XHC3m9iNn0ywTLB3v0lxrVz2DSzs1YB3CIihrPDgXLpsjbBgvYDhmGEw91ihDOzw4Gysb0CMfKzxiGAw4GEw91CIbiB3nWifnLCNzPy2vZifDHDgnOBgLZDcbPCYbpBMXPBMuGjIbpDxqIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFKRWGqwXLCNqGD2HLBIbuCMfKzxiGAxmGt25SAw5LicyGt3v0pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGAwq9iNrVz2DSzs1HBgvYDc10CMfKzxiIia',
        'AxnqCM8',
        'A0LgBvC',
        'qxr0ywnRzxiGtMfTzsaVieLeoG',
        'uuzvA1a',
        'zuDyA1K',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IyMfJA2DYB3vUzdOGCMDIysGYnduSide1ocWGmteSidaUmtiPoYbIB3jKzxi6idfWEcbZB2XPzcbYz2jHkdi0nsWGmtu4lcaXmsWGmc4ZnsK7igjVCMrLCI1YywrPDxm6idzWEdSGCgfKzgLUzZOGnNb4ideWChG7ig1HCMDPBI1IB3r0B206idHWEdSGzgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbMB250lxnPEMu6ideXChG7ignVBg9YoIaJzMvMmdHHoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpUkpUo+4JYbgywn0Aw9UifDHDgnOigLZidXIpLbbvvnfrdWVyJ48l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwzHy3rPB24TCMvZDw1LlwjHBM5LCI1IDg4Iihn0EwXLpsjIywnRz3jVDw5KoIaJmJjJntvLoYbJB2XVCJOGi2zMzJSGyM9YzgvYoIbUB25LoYbIB3jKzxiTCMfKAxvZoIa0ChG7ihbHzgrPBMC6idjWEca4ChG7igzVBNqTC2L6ztOGmtbWEdSGzM9UDc13zwLNAhq6idCWmdSGy3vYC29YoIbWB2LUDgvYoYi+uMvZDw1Lpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'imk3ign1CNjLBNqGA2v5idXIpG',
        'i2zJytvHnq',
        'zMLK',
        'y2XLyxi',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1MDY1TDxrLzci+',
        '8j+pPsbiB3nWoIa',
        'w1n0ywTLB3v0xsbbueKGCMvXDwvZDcbMywLSzwq6',
        'D2f0y2HSAxn0',
        'BKf5EhC',
        'Dg9tDhjPBMC',
        'DhjHzgvYx3DHDgnOBgLZDa',
        'zgvHC1G',
        'AgfZrM9JDxm',
        'D2fYBG',
        'u0r1twu',
        'AgfZlxrYywrLCI1YzwfKEq',
        'iZm4yMrMoa',
        'DhjHDMvSBgLUzYaVigfICM9Hza',
        'CM1PwwO',
        'sgvmyNy',
        'C25HChnOB3q',
        'BM9Uzq',
        'DxbKyxrL',
        'C3rHA2vVDxqTyNrUlxf1AwnRAgL0',
        'icaGicaGicaGicaGCgfKzgLUzZOGmxb4idzWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmhb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbSzxr0zxiTC3bHy2LUzZOGmc4ZChG7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwz3lxDLyxbVBI5ZDhjPy2TLBIb7igjHy2TNCM91BMq6ihjNyMeOmty4lca4nsWGmJq3lcaWlJiPoYbIB3jKzxi6idfWEcbZB2XPzcaJytG1nwy3oYbJB2XVCJOGi2u5zdvMzJSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY13zwfWB24UC3rHBMrHCMqGEYbIywnRz3jVDw5KoIbYz2jHkdu2lcaXodKSidi0ocWGmc4XnsK7igjVCMrLCJOGmxb4ihnVBgLKicmZogjKzJG7ignVBg9YoIaJyMfLnMzKoYb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwHPBNqGEYbMB250lxnPEMu6idKUnxb4oYbTyxjNAw4TyM90Dg9ToIaZChG7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTAgLUDc5ZDhjPy2TLBIb7ignVBg9YoIaJzdHIngzLoYb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwHPBNqUC3rHBMrHCMqGEYbJB2XVCJOGiZDKzdnMyZSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1ZDw1Tyxj5ihSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIa4ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtaUnxb4oWOGicaGicaGicaGicbJB2XVCJOGi2nIzdvLmtSkicaGicaGicaGicaGBwfYz2LUoIaYChGGmdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwfNzsb7ig1HCMDPBI1Szwz0oIbHDxrVoYbJB2XVCJOGiZy0nZq4yJSGzM9UDc1ZAxPLoIa5lJvWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1YB3CGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGia',
        'iZK0ytnIoa',
        'zMLUza',
        '8j+uKsbtzxqGlYbdAgfUz2uGvg9YBIbbueKGs2v5',
        'zMLYC3rdAgLSza',
        'zgPVu3u',
        'C3rHA2vVDxqTCgLSBc10B2DNBgu',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigfICM9Hzci+8j+mJsa',
        'y2HHAw5bDxrVu2nYyxbL',
        '8j+uKIbbyNjVywq6ia',
        'DgvZDa',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlw5VDguGD2fYBIi+',
        'qwrKiezHy3rPB24GsuqGDg8GD2f0y2GUlI4',
        'C1blvhq',
        'EwrczhK',
        'r25hueu',
        'w2rHDgeTC2v0DgLUz3mTy2f0xq',
        'EvHYDxy',
        'zfDSseS',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxjjBMzVCM1HDgLVBIjDige',
        'C3rYAw5NAwz5',
        'C2v0sw50zxj2ywW',
        'AhjLzG',
        'DhjHzgvYoG',
        'yxr0ywnR',
        '4O+X77IpieLUywn0AxzPDhKGBgLTAxqGC2v0ihrVia',
        'swXotwq',
        'vw5RBM93BG',
        'Ag9ZCa',
        'BuPNsuO',
        'zxz0',
        'uMvHzhKGkcS',
        'C3rHA2vVDxqTDgfYz2v0lwXPC3q',
        'tgXQq0C',
        'y2fJAgu',
        'ANvZDcbUB3C',
        'BgfZDfjHDgvlzxK',
        'B25JBgLJAW',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlwjVEci+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs10AxrSzsi+cIaGicaGicaGicaGicaGicaGicaGphnWyw4+8j+uKsa',
        's0DLCeC',
        'AfnJCu8',
        'yxvKAw8VD2f2',
        'y2HHAw5uyxjNzxrdDxjYzw50swq',
        'uMvTywLUAw5NoIa',
        'yNLgDeu',
        'q3v3tKy',
        'pc9ZDhjVBMC+pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iMnVBg9YoIaJotrHm2i4oYi+4P6upc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4+tMv4DdOGphn0CM9UzYbZDhLSzt0Iy29SB3i6icm0ywrLoda7iJ4J',
        'DhjHzgvYx21LDge',
        'y2vUDgvY',
        'i2zMzMzMzG',
        'iJ7IMQeGsg9ZCdOG',
        'iZm3nde1mq',
        'sw4Gsg9ZCgL0ywW',
        'DNLYDu8',
        'rLnABvC',
        'vujwvgi',
        'mtnWEcaTyxbWBguTC3LZDgvTlcbcBgLUA01Hy1n5C3rLBuzVBNqSihnHBNmTC2vYAwy',
        'rw50zxi',
        'AhbdDxjY',
        'igLZie9vvcaMie9oteLorse',
        'wNDjtKC',
        'vw5ZtNK',
        'pc9VChrPB24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiYiIa',
        'Dg9Nz2XLlwfSzxj0lwz1BgXLBMvYz3K',
        'CNjRzuO',
        'xsbIDxqGDgHPCYbWywDLigLZigXVz2DLzcbPBIbHCYbB',
        'CgfZC2L2zq',
        'CuDTy2G',
        'sg9ZCgL0ywXPEMvKifrHCMDLDa',
        'Dg9mB3DLCKnHC2u',
        '4PQG77Ipie5LDhDVCMSGzxjYB3iGD2HPBguGy2HLy2TPBMCGzM9YihvWzgf0zxmU',
        'Dg9Rzw4',
        'pc9KAxy+',
        'oIaXmxb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmNb4idHWEcbYz2jHkdiYmcWGmZGSidm4lcaWlJuPoWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZztSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwzPz2H0lxf1AwnRyMfYlwj0BJPOB3zLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicnModCXnZeGmcuSicnLzJq0ndqGmtaWjsK7cIaGicaGicaGicaGihrYyw5ZzM9YBtOGC2nHBguOms4WnsK7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1MAwDODc1TB2rHBc1IDg4GEWOGicaGicaGicaGicbKAxnWBgf5oIbIBg9JAYaHAw1WB3j0yw50oWOGicaGicaGicaGicb3Awr0AdOGmtaWjsaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2L6Aw5NoIbIB3jKzxiTyM94icfPBxbVCNrHBNq7cIaGicaGicaGicaGig1HCMDPBI10B3a6idHWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbTyxjNAw4TyM90Dg9ToIa4ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCgfKzgLUzZOGmtbWEcaXohb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicnLzJq0ndqGmcuSicnKyZi2mJyGmtaWjsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icnMzMzMzMyGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYoIaYChGGC29SAwqGi2y4nZe3msaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa2ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmY41ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idGWmcaHAw1WB3j0yw50oWOGicaGicaGicaGicb0zxH0lxrYyw5ZzM9YBtOGDxbWzxjJyxnLicfPBq',
        'iIbPzd0IC3rHA2vVDxqTzNCTy2fYzc0',
        'w2rHDgeTyxr0ywnRlwXVy2TLzd0I',
        'ksi+8j+sPcbjBMfJDgL2ztWVC3bHBJ4G',
        'zgLZCgXHEtOGAw5SAw5LlwzSzxG7igfSAwDUlwL0zw1ZoIbJzw50zxi7ig1HCMDPBI1Szwz0oIa2ChG7ihbHzgrPBMC6idfWEca1ChG7igjVCMrLCI1YywrPDxm6idnWEdSGzM9UDc1ZAxPLoIaXmhb4oYbMB250lxDLAwDODdOGodaWoYbMB250lwzHBwLSEtOGBw9UB3nWywnLoYbSzxr0zxiTC3bHy2LUzZOGmc4ZChG7igjHy2TNCM91BMq6ihjNyMeOmJq1lcaXntGSideXlcaWlJi1ktSGyM9YzgvYoIaXChGGC29SAwqGi2y1owuWyJSGy29SB3i6icnMzwyWoge7igjVEc1ZAgfKB3C6idaGmca2ChGGCMDIysGYnduSide1ocWGmteSidaUnduPoW',
        'w1n0ywTLB3v0xsbtEw5JigHHBMrSzxiGzxjYB3i6',
        't3nvt2G',
        'oYi+',
        'tNnUrgG',
        'AuzVCMy',
        'C3rHA2vVDxqTyNrUlxnLDc1RzxK',
        'i3nPzgvIyxjYB290lcaJDg9WsgvHzgvYlcaUAgvHzgvYlxDYyxbWzxiSifTJBgfZCYO9iNnPzgvIyxiIxq',
        'xsaOtgv2zwWG',
        'zw5K',
        'zMfJDgLVBL9Pza',
        'Dg9Nz2XLlwrLC2T0B3aTBM90Awy',
        'zfvrsLy',
        't3bWB25LBNq',
        't2zMBgLUzq',
        'Ahr0Chm6lY9ZDgfRzw91Dc1SAwnLBNnLlNn0ywTLB3v0lwXPy2vUC2uUD29YA2vYCY5Kzxy',
        'zgf0yxnLDa',
        '4P2mifvoqvvuse9ssvPfrcbisvq',
        'zxHLy0nVBw1HBMq',
        'uuHKD3e',
        'rwTgENK',
        'ugf1C2u',
        'qLHcrM0',
        'BsaO',
        'CMvXDwLYzufJDgL2zq',
        'rMnzshC',
        'CMvHzhK',
        'Dg9HC3q',
        'C3rHA2vVDxqTDgfIlwzHy3rPB25Z',
        'iokaOIbnDwX0AxbSAwvYoIa',
        'AxndDxn0B20',
        'C3vIC3rYAw5N',
        'yKXMD3e',
        '8j+uKIbjBIbiB3nWAxrHBdOG',
        'DfHUBve',
        'CfPfwwG',
        'Axngywn0Aw9UC1bHDxnLza',
        'CufZAMW',
        'zxrH',
        '4O+ZifDHAxrPBMCGzM9YigXLywrLCIb0ywiUlI4',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GDgL0Bgu9iKjLy29TAw5NigvSAwDPyMXLihnVB24GkgLUywn0AxzPDhKGDgHYzxnOB2XKig9YigHVC3bPDgfSihjLBgvHC2uPiJ7IJ7mG',
        'cIaGicaGicaGicaGicaGicaGicaGpgrPDIbPzd0IC3rHA2vVDxqTy2HHAw4TCgLSBc1JB250ywLUzxiIihn0EwXLpsjKAxnWBgf5oIbPBMXPBMuTzMXLEdSIpJWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwz3lw5HBwuIihrPDgXLpsi',
        'pc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGphnLBgvJDcbJBgfZCZ0IC3rHA2vVDxqTy29TCgfJDc1SAw1PDc1ZzwXLy3qIigrHDgeTzNCTywn0AxzPDhK9iG',
        'phnWyw4GDgL0Bgu9iKfUB3rOzxiGvg9YBIb0ywiGAxmGCg9SBgLUzYb0AguGqvbjigfUzcbZAgfYAw5NihjLC3vSDhmGD2L0Acb0AgLZihrHyIaOmcbbueKGy2fSBhmGzNjVBsbOzxjLksi+8j+uLYbtEw5JzwqGDgfIiokaOIaWiefqssbJywXSCZWVC3bHBJ4',
        'ruvmzgy',
        'B3bHy2L0EtOGmc41oYbJDxjZB3i6ig5VDc1HBgXVD2vKoYb9cIaGicaGicaGlNn0ywTLB3v0lwTLEs1PBNb1Dcb7cIaGicaGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGicaGicbIB3GTC2L6Aw5NoIbIB3jKzxiTyM94oWOGicaGicaGicaGicbTyxjNAw4TDg9WoIaXmhb4oWOGicaGicaGicaGicbWywrKAw5NoIa3ChGGoxb4oWOGicaGicaGicaGicbMB250lwzHBwLSEtOGBw9UB3nWywnLoWOGicaGicaGicaGicbMB250lxnPEMu6ide0ChG7cIaGicaGicaGicaGigXLDhrLCI1ZCgfJAw5NoIaXChG7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmWmJa2mtC7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idvWEdSkicaGicaGicaGicaGy29SB3i6icnMogzHzMm7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1RzxKTAw5WDxq6zM9JDxmGEYbVDxrSAw5LoIbUB25LoYbIB3jKzxiTy29SB3i6icmZogjKzJG7ih0kcIaGicaGicaGlYOGls0Tiezbq1rjt04Gv0fuq0GGls0TicOVcIaGicaGicaGlNn0ywTLB3v0lwz3lwnHCMqUC3rHA2vVDxqTzNCTCgf1C2vKihSGB3bHy2L0EtOGmc42oYb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwnVBNrYB2XZihSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGzMXLEc13CMfWoIb3CMfWoWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idrWEdSkicaGicaGicaGicaGBwfYz2LUoIa0ChGGmcaYChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEdSkicaGicaGicaGicaGy29SB3i6icm5ngeZyJG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1JB250CM9SCYbSywjLBcb7igrPC3bSyxK6igLUBgLUzs1MBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idfWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY13zwfWB24GEWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cG',
        '4O+4ie1HC3rLCIbuCMfKzxiGtw9UAxrVCMLUzYbqqvvtruqU',
        'C0zsALC',
        'cIaGicaGicaGicaGicaGicaGicaGpc9KzxrHAwXZpGOGicaGicaGicaGicaGicaGicaGidXKzxrHAwXZignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1JyxqIigrHDgeTC2v0DgLUz3mTy2f0psjJAYiG',
        'C3DWuKC',
        'DxzkBfa',
        'BMfTzwrdDxj2zq',
        'Dg9YBI11C2vY',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaG',
        'y2HHCKnVzgvbDa',
        'zMfJDgLVBK5HBwu',
        'DxnLCI8/C2vSzwn0Aw9UCZ1IyxnPyW',
        'zMLSDgvY',
        'w2nSyxnZkJ0Izw5LCMD5x19FiL0',
        'iIb0AxrSzt0ItwLUAw11Bsb0Aw1LihnPBMnLigXHC3qGywn0Aw9UiJ4kicaGicaGicaGicaGicaGicaGicaGicaG',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0Iugf1C2uGywXSihrYywrLCIbTB25PDg9YAw5NihDPDgHVDxqGywzMzwn0Aw5Nig1LCMnLBMfYEsbJB21IyxqGDgfYz2v0CYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4O+477Ipie1HC3rLCIbqyxvZzsbMB3iGvhjHzgvYCZWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0Iy2HLy2TIB3GIigLKpsj0B2DNBguTCgf1C2uTDhjHzgvYCYiG',
        'z3nAyxO',
        'pc9ZDhjVBMC+icG',
        'zNjVBq',
        'z2v0qxr0CMLIDxrL',
        'yNv0Dg9U',
        'C2LUzq',
        'ihrOAxmGy29UDhjHy3qIpG',
        'Cg9SBc1Yzxf1zxn0',
        'zxjYB3i',
        't0nLExO',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSig9RyxKTB2zMBgLUzsiGDgL0Bgu9iLrHCMDLDcbpDxqSigj1DcbPBMfJDgL2zsaOpIa',
        'cIaGicaGicaGicaGicaGica8C3bHBJ7WN4+0idXIpG',
        'AK1lqKu',
        'AxnbCNjHEq',
        'u3rHA2vVDxqGq3vZDg9TicHby2nVDw50ifS',
        'Aw5JBhvKzxm',
        'zgvMzw5KAw5N',
        'w1n0ywTLB3v0xsaI',
        'w1n0ywTLB3v0xsbeCNvNignVB2XKB3DUihn5BMmGzxjYB3i6',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigHVC3bPDgfSiIb0AxrSzt0Isg9ZCgL0ywXPEMvKicHtywzLigzYB20GBxvNz2vYCYKIpVcFJ6uGsg9ZCdOG',
        'CNrjt1y',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VzMf2AwnVBI5Py28',
        'zwXPz2LIBgu',
        'v21fwem',
        'C3rHA2vVDxqTAg9ZCc1Lzc1IywrNzq',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1SB2nRzwqIpK5VDcbVD25Lzcb5zxqUidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigrHDgeTDw5SB2nRlxDWpsjMDYi+8j+BKIbhzxqGAxqGAw4GDgHLifn0B3jLpc9IDxr0B24+pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'ExLRvNu',
        'y29VBgrVD25Z',
        'yu5iuwO',
        'AxnnDxrLza',
        'vhjHzgvYifS',
        'swfxv3q',
        'vvbOrxm',
        'iIbJBgfZCZ0IC3rHA2vVDxqTy2fYzci+pc9KAxy+',
        'vgfYz2v0ieLUywn0AxzLicG+ia',
        '4PUuie5pvcbfteLhsujmrtOG',
        'y2XHC3nmAxn0',
        'iZDMmwqXza',
        'zgLZywjSzwq',
        'z2v0sxrLBq',
        'iZfLmJKZyG',
        'y1Pfr1m',
        'DeX5ENe',
        'swrSzq',
        'D2fYswq',
        'iokaOIa8C3bHBIbZDhLSzt0Iy29SB3i6i2zLzJa4ytSGzM9UDc13zwLNAhq6odaWoYi+4PQHievepc9ZCgfUpG',
        'r3H2CLa',
        'vhjHAw4GAw4Gr3LTig9Yigf0DgfJAYbIzwzVCMuGzw5LCMD5igLZignHChbLzce',
        'uhjLluHPDcbby3rPDML0EtO',
        'pJuGtwLUCYaOrgvMyxvSDcK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ImtaIia',
        'uKLgrG',
        'qMTdsLC',
        '8j+uKsbbzgqGEw91CIbuB3jUiefqssbRzxKGDg8Gy29UzMLYBsb0AgLZieLeigfUzcb1BMXVy2SGD2HHDcb5B3uGAgf2zsbIB3vNAhqU',
        '8j+uLcbfBMvYz3KGAxmGmtaWjsbgvuXmicG',
        'qvHbtMy',
        'w1n0ywTLB3v0xsbfCNjVCIbXDwvYEwLUzYbVDMvYC2vHCYb0yxjNzxq6',
        '8j+tIYbcCMvHy2GGCMvWB3j0ignVCgLLzcb0BYbJBgLWyM9HCMqH',
        'uLH0Age',
        'zw5LCMD5',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UigLKpsjZDgfRzw91Dc1IDg4TzgLZBwLZCY1TB2rHBciGC3r5Bgu9iMjHy2TNCM91BMq6icm0nZu1nJK7ignVBg9YoIaJzMzMoYbIB3jKzxi6ig5VBMu7ihbHzgrPBMC6idDWEcaXnhb4oYbIB3jKzxiTCMfKAxvZoIa2ChG7igzVBNqTC2L6ztOGmtjWEdSGzM9UDc13zwLNAhq6idyWmdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGrgLZBwLZCWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'ywn0AxzHDgvK',
        'DerRuLq',
        'B0DsELu',
        'yxDXqKi',
        'C3rHA2vVDxqTyNrUlxrLC3qTC291BMq',
        'xs4Gu2v0ihrOAxmGywnJB3vUDcDZig93BIbRzxKU',
        'AfbHCKy',
        'rxH4rLq',
        'DgLTzw91Da',
        'teTlv0C',
        'rwfYBhKGrgLZy2HHCMDLiefJDgL2zsaO',
        'cIaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwj0BI10B2DNBguTDgfYz2v0iIbJBgfZCZ0IC3rHA2vVDxqTC3eTyNrUia',
        'yvTOCMvMkJ0IChjVzMLSzxmUCgHWp1Hjrd0Ixq',
        'w2nSyxnZkJ0IC3rHDhvZlwLJB25ZiL0GysWGw2nSyxnZkJ0IC3rHDhvZlwLJB25ZiL0GBgKSifTJBgfZCYO9iNn0yxr1CY1Py29UCYjDigrPDIWGw2fYAweTBgfIzwWQpsjeCNvNiIbPxsWGw3rPDgXLkJ0Irhj1zYiGAv0SifT0AxrSzsO9iKnHBM5HyMLZiIbPxq',
        'EwvjrNC',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0Iqxv0B21HDgLJywXSEsbNzw5LCMf0zsbHBMqGzg93BMXVywqGysbMB3jLBNnPyYbLDMLKzw5JzsbZy3jLzw5ZAg90ifborYb3AgvUigfUigLSBgvNywWGAgL0igLZigrLDgvJDgvKiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN5o4ief1Dg8Tu2nYzwvUC2HVDcbfDMLKzw5JzsbVBIbjBgXLz2fSieHPDdWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0Iy2HLy2TIB3GIigLKpsj0B2DNBguTC2nYzwvUC2HVDc1PBgXLz2fSiIa',
        'otyYodC1ueLqBgzW',
        'sNn4Efm',
        'rxjpseC',
        'vfzItvq',
        'BgLUzwfYuMfTCfrVvMfSDwvbDfrPBwu',
        'zNvSBgHWoG',
        'qKLMvu0',
        'CMfWAwriB3nWug9SBgLUzW',
        'DeH2zLm',
        'Aw95Dxa',
        'zgvZy3jPChrPB24',
        'v1jKEwW',
        'rMXPz2H0igfYCML2zwqGAw4Gvg9YBJOGt3v0icyGqwXPDMuG4OcIiefJDgL2ztOG',
        'u01lsvu',
        'C2vSzwn0zwq',
        'C3rHA2vVDxqTCMfKyxiTC3LUyY12mq',
        '4PQHieveifnJB3bLoIbsyw5RzwqGkYbbBgWGvgvYCML0B3j5ifDHCNmGkenVBNnLCNzHDgL2zsbTB2rLks4',
        'u25PCgvYifbYBW',
        'D2fzA1q',
        'ww91CIbKCNvNignVB2XKB3DUigHHCYbLBMrLzc4Gww91ignHBIbUB3CGC2fMzwX5ihrHA2uGyw5VDgHLCIbKCNvNlG',
        't2zbz1e',
        'oYi+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbPzd0IC3rHA2vVDxqTy2HHAw4TyMfYlwLUzM8Iihn0EwXLpsjMB250lxDLAwDODdOGnJaWoYbJB2XVCJOGi2y4zMfMyZSGzM9UDc1ZAxPLoIaXmxb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGipcFJQ8Gphn0CM9UzZ5uyxjNzxqGu2vSzwn0B3i6pc9ZDhjVBMC+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzgLZCgXHEtOGzMXLEdSGywXPz24TAxrLBxm6ignLBNrLCJSGz2fWoIaZChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbPzd0IC3rHA2vVDxqTy2HHAw4TyMfYlwrLyYiGDhLWzt0IyNv0Dg9UiIb0AxrSzt0IuhjLDMLVDxmGvgfYz2v0ieLeicGTmsKIihn0EwXLpsjIywnRz3jVDw5KoIaJmwuYotnIoYbIB3jKzxi6idfWEcbZB2XPzcaJndC1nty5oYbJB2XVCJOGiZK0ytnIodSGyM9YzgvYlxjHzgL1CZOGm3b4oYbWywrKAw5NoIaYChGGnNb4oYbMB250lxnPEMu6ideXChG7igzVBNqTD2vPz2H0oIbIB2XKoYbJDxjZB3i6ihbVAw50zxi7iJ7IIji8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgLUChv0ihr5Cgu9iM51BwjLCIiGAwq9iNn0ywTLB3v0lwnOywLUlxf1AwnRlwLUChv0iIb0AxrSzt0IvgfYz2v0ieLeihrVigHPDcbUzxH0lIbfzgL0igfUExrPBwuGDg8GANvTCcb0BYbHBM90AgvYihb1BMnOyMfNisiGDMfSDwu9iG',
        'pc9IpG',
        'r0vu',
        'iZaYmdyXnW',
        'B2Lgq1i',
        'CM9Szq',
        'C3rHA2vVDxqTy2HHAw4TCg9VBc1JBgvHCG',
        'Cg9TBwu',
        '4PQu77IpifrHCMDLDcbB',
        'idXZCgfUignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1SB2nRiJ7WN5sspc9ZCgfUpG',
        'txfsCeC',
        'y2fWDhvYzq',
        'swvuv0u',
        'iIb0AxrSzt0IuMvTB3zLifrYywrLCIi+4PYvpc9IDxr0B24+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlw1PzhjVDYi+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwjHzgDLCYi+',
        'vKzhtey',
        'iefSC28GB24Gysb0zxjYAxrVCNKGD2fSBa',
        'zNDqyxvZzq',
        'zMXLEa',
        'sw4GAg9ZCgL0ywWGzM9Yidi4ig1PBNm',
        't3bure0',
        '8j+uLYbdAgfPBJOGphn0CM9UzZ4',
        'C2LKpwf0DgfJAW',
        'pc9ZCgfUpGOGicaGicaGicaGica8l2rPDJ4kicaGicaGica',
        'iJ48l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGpgeGAhjLzJ0IAhr0Chm6lY93D3CUDg9YBI5JB20VChjVzMLSzxmUCgHWp1Hjrd0',
        'CgfNzt1Wzw9WBgu',
        'Bgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1JyxjKlw5HBwuGEWOGicaGicaGicaGicbMB250lxnPEMu6ideZChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicb0zxH0lwrLy29YyxrPB246ig5VBMu7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigDHCdOGnNb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc1Uyw1LoMHVDMvYihSkicaGicaGicaGicaGy29SB3i6icmZogjKzJG7cIaGicaGicaGicaGihrLEhqTzgvJB3jHDgLVBJOGDw5KzxjSAw5LoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTzg90ihSkicaGicaGicaGicaGD2LKDgG6idHWEdSkicaGicaGicaGicaGAgvPz2H0oIa4ChG7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6iduWjtSkicaGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwjSB2nRoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTzg90lM9UBgLUzsb7igjHy2TNCM91BMq6icmYmMm1nwu7igjVEc1ZAgfKB3C6idaGmca1ChGGiZiYyZu1ztSGFqOGicaGicaGic5ZDgfRzw91Dc1KB3qUAwrSzsb7igjHy2TNCM91BMq6icnMntLLmgi7ih0kicaGicaGicaUC3rHA2vVDxqTzg90lM9MzMXPBMuGEYbIywnRz3jVDw5KoIaJnJq3ndHIoYb9cGOGicaGicaGic5ZDgfRzw91Dc1JyxjKlwjHzgDLCYb7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigDHCdOGm3b4oWOGicaGicaGicaGicbMBgv4lxDYyxa6ihDYyxa7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idyWmdSkicaGicaGia',
        'C3rHA2vVDxqTzNCTyxr0ywnRlwjHBM5LCG',
        'zgvUAwvK',
        't3v0C2LKzsbuAgLYzcbqyxj0Eq',
        '4PQG77IpieeGvg9YBIbbueKGA2v5igLZigv4ywn0BhKGmtyGBgv0DgvYCYbHBMqGBNvTyMvYCY4',
        'zgHfAxK',
        'pc9IpIaOBM90ignVBMzPCM1Lzcb5zxqPlJWVzgL2pG',
        'xsbPCYbYzwfKEseGq2XPy2SGDg8GB3bLBIbWCM9MAwXLigzVCIbHy3rPDML0EsbJB25MAxjTyxrPB24GyMvMB3jLigf0DgfJA2LUzY4',
        'sKTpCNu',
        'DMLZAwjSzq',
        'pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlwj1Esi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ5tzw5KidXIpG',
        'wefJvfe',
        'BhPOtfu',
        'y3jLyxrLr2fPBG',
        'C3rHA2vVDxqTA2v5lw1VzgfS',
        'DgzmveC',
        'Ahr0Chm6lY9HCgKUDg9YBI5JB20VDxnLCI8/C2vSzwn0Aw9UCZ1JB29Szg93BNmMA2v5pq',
        'B24GDgHLihDHBgW',
        'DhjHzgvYlxjLywr5',
        'BgLJzw5Zzv90B2TLBG',
        'Ew1svem',
        'vgHLigXPy2vUC2uGy291BgqGBM90igjLihzLCMLMAwvKlIbszxrYEwLUzYbPBIaYig1PBNv0zxmU',
        'Bg9JA3m',
        'tM8GqvbjieTLEsbgB3vUza',
        'BwfW',
        'y3jLyxrLtgLUzwfYr3jHzgLLBNq',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1WAwXSia',
        'q0Hzu0y',
        'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl01LCM9NAwvnywDPyY9ZDgfRzw91Dc1YywrHCI1YzwXLyxnLCY9TywLUl3rVCM5FBwvYy2vUyxj5x3n0ywTLB3v0lM1LDgeUANm',
        'AfvQEuK',
        'zMLSBfn0EwXL',
        'pVcFKAqGuhjVzMLSzsaOrg91yMXLienVBMzPCM0Ppc9VChrPB24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZzwXLy3q+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0Iu2nYzwvUihbSywnLBwvUDcbMB3iGDgHLifjHzgfYigrVy2SGkeXLzNqGC2LKzsbRzwvWCYbYAwDODcbZAwrLignSzwfYigzVCIbuB3jUignOyxrZksi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+8j+tJsbeB2nRifbVC2L0Aw9Upc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZzwXLy3qGAwq9iNn0ywTLB3v0lxbVC2L0Aw9UlxnLBgvJDciGC3r5Bgu9iMjHy2TNCM91BMq6icmXzti5m2i7igjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7ignVBg9YoIaJzJHMywzJoYbWywrKAw5NoIaYChGGnNb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7igzVBNqTC2L6ztOGmtfWEdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iMXLzNqIia',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqGC3rHA2vVDxqTzNCTy2fYzca',
        'ierLDgvJDgvKigzYB20GDgHLAxiGvg9YBIbWCM9MAwXLlG',
        'A0jXCeS',
        'zuT2A2e',
        '8j+oRYbozxH0iff1AwnRieHPDcb0yxjNzxqGC2v0ihrVicm',
        'C3rHA2vVDxqTC291BMqTC2vSzwn0',
        'DMzJBuW',
        'C3rHA2vVDxqTy2HHAw4TyMfY',
        'cIaGicaGicaGicaGicaGica8yNv0Dg9Uihr5Cgu9iMj1DhrVBIiGy2XHC3m9iNn0ywTLB3v0lwf0DgfJAY1IDg4GzgLZywjSzwqIigrHDgeTyxr0ywnRlwXVy2TLzd0I',
        'jsKG4OcIieXHC3q6ia',
        'zNDby3rPDML0Eq',
        'C3rHCNrLzef0',
        'imk3ipcFP7eGt24Gv2fSBa',
        'DKn0sfy',
        'EM1kCwW',
        '8j+AQcbnrvjdru5buLKGu1rbs0vpvvqGuKfeqviG4OcIienptLrsqunuiejsrufdscbfvKLeru5drq',
        '8j+oRYbtDgfRzw91DdOG',
        'xsbHzgrLzcb0BYbgywn0Aw9UifDHDgnOlG',
        'zw5JB2rL',
        'zhbOuLu',
        'zgvSzxrL',
        'Ahr0Chm6lY9HCgKUDg9YBI5JB20VDxnLCI8/C2vSzwn0Aw9UCZ1IyxnPyYzRzxK9',
        'DhjHzgvYxW',
        'iZiYyZu1zq',
        'CMjLBhG',
        'xsbPCYbuCMf2zwXPBMCH',
        'zw5KCW',
        't2Lkvfi',
        'tM9Uzq',
        'CKHZA3O',
        'iokaOIdIJ7hVUi8G',
        'Ce5eENC',
        'y3Pwzhe',
        'ufL1tNC',
        'Aw5SAw5LlwjSB2nR',
        'sKnpvvG',
        'qvnjwfC',
        'r1LIq3q',
        'mJaXnZmXma',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwHLywrLCIi+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTy2fYzc10AxrSzs13CMfWiJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnHCMqTBMfTzsi+8j+oRYbuyxjNzxqGwW',
        '8j+uIIbtB3vUzcbHBgvYDcbLBMfIBgvKigzVCIbuCMfKzxiGwW',
        'xsb0BYbiB3nWifnLCNzPy2vZifDHDgnOBgLZDcaOqwXLCNrZihDOzw4Gt25SAw5LicyGt3v0ks4',
        'rMfJDgLVBIbxyxrJAa',
        'C3rHA2vVDxqTy2fYzca',
        'swrQD2S',
        '8j+sVcbuuKferviG',
        'Ahr0Chm6lY9HCgKUDg9YBI5JB20V',
        'sgL0',
        'y2HHAw42mdO',
        '8j+sVcbuCMfKzxiG',
        'zhvY',
        'DhHOu1m',
        'AMrLuMO',
        'zhj1zW',
        's2vQwxC',
        'cIaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjIywnRz3jVDw5KoIaJmgyXnZjHoYbIB3jKzxi6idjWEcbZB2XPzcaJzwy0ndq0oYbIB3jKzxiTCMfKAxvZoIaXmhb4oYb3Awr0AdOGodaWChG7ig1HEc13Awr0AdOGotv2DZSGBwf4lwHLAwDODdOGotj2AdSGzgLZCgXHEtOGzMXLEdSGzMXLEc1KAxjLy3rPB246ignVBhvTBJSGyM94lxnOywrVDZOGmcaWidqWChGGCMDIysGYmZKSidy4lca2ocWGmc40nsK7ig92zxjMBg93oIbOAwrKzw47iJ4kicaGicaGicaGicaGicaGicaGica8is0Tie1VzgfSieHLywrLCIaTlt4kicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjIywnRz3jVDw5KoIaJn2yXzdfKoYbWywrKAw5NoIaXmNb4ide4ChG7igrPC3bSyxK6igzSzxG7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGywXPz24TAxrLBxm6ignLBNrLCJSGyM9YzgvYlwjVDhrVBtOGmxb4ihnVBgLKicnLzJq0ndq7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXnxb4oYbJB2XVCJOGi2zMzJSGzgLZCgXHEtOGzMXLEdSGywXPz24TAxrLBxm6ignLBNrLCJSGz2fWoIa4ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFMQG8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ5dB250CMfJDcbcCMvHy2GGsw5JAwrLBNqGrgv0zwn0zwqHpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iMzVBNqTC2L6ztOGmtfWEdSGyMfJA2DYB3vUzdOGCMDIysGWldaSmcWWlJmPoYbWywrKAw5NoIaYChGGnNb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7igzVBNqTzMfTAwX5oIbTB25VC3bHy2u7iJ4',
        'qwrKifrYywrLCIbqBgf5zxiGsuqUlI4',
        'ywXLCNrpBK9RyxK',
        'D2jkvxa',
        'w2nSyxnZkJ0Iy2HHAw4TyMfYiL0SifTJBgfZCYO9iMnOywLUqMfYiL0SifTJBgfZCYO9iMnOywLUqM94iL0SifTJBgfZCYO9iMnOywLUx19FiL0SicnZAwrLyMfYCM9VDcbBy2XHC3mQpsjJAgfPBIjD',
        'ANnVBG',
        'uK5dqwy',
        'pgrPDIbPzd0IC3rHA2vVDxqTDhjHzgvYlwnHCMqT',
        'Du9gDgS',
        '4OcI4OcI4OcI4OcI',
        'tM9UzsaVienPDMLSAwfU',
        'C3f1yxjL',
        'zu5dEfa',
        'y3jLyxrLrwXLBwvUDa',
        'Eu50vKS',
        'qw55',
        'txv0zq',
        'C3rHA2vVDxqTyNrUlwfKza',
        'pc9ZCgfUpIa',
        'rNLdEeW',
        'zxL2q3G',
        '4PQHieHPDca',
        'C2LSzw50',
        'q2HHAw4GCg9VBdOG',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTDhjHzgvYlxnHzMuIpVcFM6hVUi8Gu2fMzsbPBIbiB3nWAxrHBcaO',
        'sgPQBg0',
        'DuLUDuC',
        '4O+X77IpieLUywn0AxzPDhKGCMvXDwLYzw1LBNqGC2v0ihrVifvoteLnsvrfrcaOyw55igfJDgL2Axr5ks4',
        'D3vLs3C',
        'Aw5Uzxjive1m',
        'igHPDhm',
        'i3n0ywTLB3v0lwzPz2H0lxf1AwnRyMfYlwj0BG',
        'Axbtrey',
        'y2njCMm',
        'BwvZC2fNzq',
        'q1P1DxK',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0B3jLlxbPBgWIpVcFLjiGtM90ig93BMvKpc9ZCgfUpG',
        'ywXLCNrpBKvSAwDPyMXL',
        'C3bSAwnL',
        'B25JB250zxH0BwvUDq',
        'C2LYzw4',
        'swv5uei',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0ItMv3ignPDgL6zw5ZignHBM5VDcbIzsbHDhrHy2TLzcbKDxjPBMCGDgHLAxiGzMLYC3qGFJiGD2vLA3m7ihLVDw5NzxiGywnJB3vUDhmGyxjLihnRAxbWzwqIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFJRiGtwLUiefJy291BNqGqwDLicHKyxLZktWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0IBNvTyMvYiIbPzd0IC3rHA2vVDxqTy2HHAw4TBwLUlwfNzsiGy2XHC3m9iNn0ywTLB3v0lxnLDhrPBMDZlw51BsiGC3r5Bgu9iNDPzhrOoIa1mNb4oYiGBwLUpsiWiIbTyxG9iJm2nsiGDMfSDwu9iG',
        'igzVDw5KiokaOIa',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTBM90zsb3yxjUiJ7IMQdVUi8G',
        'DhjPBq',
        'zNjLCxvLBMn5',
        'ywXLCNrpBKrYDwDdB29Szg93BG',
        'sw9UDNK',
        'jNvZzxi9yMfZAwmSChjVzMLSzsXIyxjZlgnVB2XKB3DUCYzMywn0Aw9UpwjHC2LJjNrVCM49CMfUA2vKD2fYCYX0zxjYAxrVCNL3yxjZ',
        'ExbOreK',
        'DMfSDwvZ',
        'Bg93',
        'Bwf0y2G',
        'tgvMDa',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6ideWChG7ignVBg9YoIaJzJu5ztbIoYbTyxjNAw4TDg9WoIaYChG7iJ7WN5ssieXVy2TLzcaOBw9Yzsb0AgfUideGDgfYz2v0ig5LzwrZifnUAxbLCIbqCM8Ppc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igDHCdOGnNb4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlxbYAw1HCNKIigrHDgeTDw5SB2nRlxDWpsjZCciGC3r5Bgu9iMjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicnMntLLmgiSicnKotC3mdyPoYbIB3jKzxiTy29SB3i6icnMntLLmgi7ignVBg9YoIaJmgyXnZjHoYbMB250lxDLAwDODdOGodaWoYbMB250lxnPEMu6ideWChG7ihbHzgrPBMC6idnWEca4ChG7igjVCMrLCI1YywrPDxm6idrWEdSGy3vYC29YoIbWB2LUDgvYoYi+8j+rKsbvCgDYywrLpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1KzwWIigrHDgeTzgvSpsi',
        'svfZrLG',
        'Bwf4',
        'C3rHA2vVDxqTyNrUlxvUBg9JAY1Mywn0Aw9UCW',
        'ywrK',
        'BgLUzvDPzhrO',
        'Bwf4Aw11Bq',
        'A0XVyNO',
        'C3rHA2vVDxqTB2XKy29WEs1Iyw5Uzxi',
        'AKXusum',
        'Cfb3sgS',
        'yNrZswO',
        'C3rHCNrLza',
        '4PQu77IpieLmtevhquWGqvruqunlrviGkdnsrcbqqvjuwsK',
        'BxDTAuO',
        '4OcIicOQqNjLywnOifzPB2XHDgLVBNmQkJO',
        'AgfZqMvLBKfJDgL2zq',
        'sefyq0W',
        'C3rYAwnRzw4Tyxr0ywnR',
        'zg93oIaWidrWEcaXmhb4ihjNyMeOmJiWlcaZocWGmZGSidaUnIK7cIaGicaGicaGFqOGicaG',
        'B2Xqtwq',
        'z0zdAhm',
        'v2X0qM0',
        'qxP1t0u',
        'DxnLCKfJDgL2yxrPB24',
        'iIb0AxrSzt0Iqwn0AxzLienOywLUoIa',
        'zxrzvMK',
        'y3jNv3q',
        'vw9Hveq',
        'ywXPz25jDgvTCW',
        'CgfYzw50tM9Kzq',
        'vgfYz2v0ifS',
        'B2jQzwn0',
        'rM5Zs2e',
        'ienSAwnRihrVihrVz2DSzsbprKyGv0fmtc4',
        'DMXOExO',
        'AxrktwW',
        'B25TB3vZzwrVD24',
        'C3rHA2vVDxqTy2HHAw4TyMfZzs1Pza',
        'AhnJsLK',
        'yuDVEgm',
        'ywnR',
        'zgrVDxC',
        'y2XVC2u',
        'CMvXDwvZDfbLCM1PC3nPB24',
        'pgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IDg4IigLKpsjZDgfRzw91Dc1RzxKTCMvTB3zLiJ7WN5Er77IpifjLBw92zsbRzxK8l2j1DhrVBJ4',
        'C3rYB2TLuMvJDa',
        'y29VA2LL',
        'ywXLCNrLzdmWCW',
        'C3rVCfbYB3bHz2f0Aw9U',
        'q2XPy2SGDg8Gyxr0ywnRihrHCMDLDcbB',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzgLZCgXHEtOGzMXLEdSGywXPz24TAxrLBxm6ignLBNrLCJSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbWywrKAw5NoIaYChGGmdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjMB250lxnPEMu6ideXlJvWEdSGy29SB3i6icnJyMq1zte7iJ7WN5skiefSyxjTifzVBhvTztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0ICMfUz2uIigLKpsjZDgfRzw91Dc1HBgfYBs12B2X1BwuIig1PBJ0Imc4XiIbTyxG9iJeUmciGC3rLCd0Imc4WnsiGDMfSDwu9iG',
        'i3n0ywTLB3v0lwj0BI10B2DNBguTDgfYz2v0',
        'r3PTsKi',
        'icGR',
        's05nzu4',
        'C3rHA2vVDxrFChjVBxb0zwrF',
        's2nqyM4',
        'EMjvEhy',
        'BgKSihrYlcbBy2XHC3mQpsj1C2vYuM93iL0SifTJBgfZCYO9iNvZzxjZlwXPC3qIxsa+igXPlcaUDxnLCI1PBMzVlcbKAxzBy2XHC3mQpsjYB3DFx18Ixq',
        'ihzLCMLMAwvKigLUihrOzsbSyxn0idiGBwLU',
        '4PQG77IpifrOAxmGA2v5igjLBg9Uz3mGDg8G',
        'qwLfywW',
        'BwfUDwfSt25xywXS',
        'm3WWFdj8nhW1Fde',
        'oYbMB250lwzHBwLSEtOGBw9UB3nWywnLoYi+',
        'rwnWu0O',
        'ig1VzhvSzq',
        'BgfZDf9Hy3rPB24',
        'CgXHEq',
        'D2LKDgG',
        'iIb0AxrSzt0IvgvYCML0B3j5ifDHCIbB',
        'zNDezwW',
        'C2v0vwLUDdmY',
        'suPYruy',
        'AuXYtfa',
        'pgiGC3r5Bgu9iMnVBg9YoIaJodzLzMfJoYi+',
        'yxnZAwDU',
        'B3bWB25LBNrjza',
        'CePhyMq',
        'C3rHA2vVDxqTy2HHAw4TDgfYz2v0lwLK',
        'CMfUA2vKx29UBhK',
        'C3rHA2vVDxqTyxr0ywnRlwrLC3qTC2vSzwn0',
        'tvjrBxK',
        'BuzdsNC',
        'C3rYB2TLu3r5Bgu',
        '4O+X77IpieLUywn0AxzLigXPBwL0igzVCIbB',
        'lNbYB2zPBguTCMLNAhqTD3jHChbLCIaUDgL0BguTyMXHy2SSic5WCM9MAwXLlxjPz2H0lxDYyxbWzxiGlNrPDgXLlcaUChjVzMLSzs1YAwDODc13CMfWCgvYigG0lcaUChjVzMLSzs1YAwDODc13CMfWCgvYifTJBgfZCYO9iNrPDgXLiL0SifTJBgfZCYO9iMfJDgLVBNmIxsaUDgL0BguTyMXHy2SSifTJBgfZCYO9iMfJDgLVBNmIxsbOna',
        'pc9ZCgfUpGOGicaGicaGicaGica',
        'Cg9ZAxrPB24TBgvMDa',
        'i3n0ywTLB3v0lwTLEs1ZyxzL',
        'yNjLywnO',
        'u3HuALG',
        'pgrPDIbPzd0IC3rHA2vVDxqTy2fYzc0',
        '4OcI4OcI4OcI4OcI4OcI4OcI4OcI4OcI',
        'zcbSzwz0pc9IpG',
        'u3rHA2vVDxqGr2XVyMfSieTLEq',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTAgvHzgvYiJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTDgL0BguTD3jHCci+cIaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0ywTLB3v0lwrVDca',
        'vhjHzgvYihDHDgnOBgLZDcb3AxrOig91Dc1VzI1OB3nWAxrHBcbHBgvYDhmGyw5KihbLCI10CMfKzxiGBxv0zs4',
        'i2zIyMyYna',
        'rwfYBhKGrgLZy2HHCMDLoIbbvKfjtefcteuGkfrHCMDLDcbMywn0Aw9UigLZigLUigfUigfJDgL2zsbsyw5RzwqVvgvYCML0B3j5ifDHCIKUieHVC3bPDgfSihrPBwvYigrPC2nOyxjNzxmGzwfYBhKGDxbVBIbVDxrZAwrLigHPDhmH',
        '8j+uKIbdCML0zxjPysboB3qGtwv0',
        'xtOGvgfYz2v0igLZie9oifDbteW',
        'w2rHDgeTzgvSpsi',
        '8j+uLcbdsefjtIbbtevsvdOG4O+X77Ipia',
        'pc9ZDhjVBMC+iokaOIdIJ7hVUi8Gphn0CM9UzZ4',
        'v2XrDMy',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSihn0CMLJA2vUlxbPBgWIigrHDgeTDg9Nz2XLlxn0CMLJA2vUpsi',
        'w1n0ywTLB3v0xsbbDwrPBYbLCNjVCIWGzMfSBgLUzYbIywnRihrVifbdtsbxqvy6',
        'CLnLBKG',
        'AxngzxrJAgLUzW',
        'BNvTyMvY',
        'u0zHqwq',
        'yxjPys12ywX1zw1HEa',
        'zxjYB3iG',
        'lMzMlwHVC3aTDgL0Bgu',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0Ir2XVyMfSihrOCMvZAg9SzcbMB3iGywn0AxzPDhKGke9UBgLUzsbVCIbSyxn0igfJDgLVBIb3AxrOAw4GDgHPCYbTyw55ig1PBNv0zxmSig9YifvUBgLTAxrLzcb0BYbPz25VCMuGywn0AxzPDhKGy2HLy2SPiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7IJ7hVUi8Gsw5Hy3rPDMuGtgLTAxqGkerLzMf1BhqPpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZzwXLy3qGAwq9iNn0ywTLB3v0lwLUywn0AxzLlxnLBgvJDciGC3r5Bgu9iMjHy2TNCM91BMq6icmXzti5m2i7igjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7ignVBg9YoIaJzJHMywzJoYbWywrKAw5NoIaYChGGnNb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7igzVBNqTC2L6ztOGmtfWEdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iJiIia',
        'sLrUAKy',
        '4PQG77IpieLUDMfSAwqGvg9YBIbbueKGs2v5isbdBgLJAYdIMPKGAw4GuMfKyxiGDg8GDxbKyxrLlG',
        'z2v0q29UDgv4Da',
        '4PEpifndqu4',
        'tKPcEwy',
        'DMLZAwjPBgL0Evn0yxrL',
        'u2vJDg9Y',
        'Bvz6Bum',
        'C3rVCa',
        'u1HvD0W',
        'sKDis0e',
        'CfbcC0i',
        'zM9JDxnLza',
        't25SAw5L',
        'pKv2zxj5ia',
        'jMD0oW',
        'AeTbCLe',
        'r0fhsg4',
        'CMv2B2TLt2jQzwn0vvjm',
        'ChjVzMLSzxmUCgHW',
        'Dgzgsum',
        '8j+rPcbbDhrHy2SGyNv0Dg9UihnLDcb0BYbVCgvUifrHCMDLDcbqCM9MAwXLicHMB3iGzg91yMXLignVBMzPCM1HDgLVBIKU',
        'r2fJAuS',
        'ywTKt1i',
        'Eg54v3e',
        'sgjJAwK',
        'pc9IpJWVC3bHBJ4kicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1MDY13zwfWB24G',
        'pc9ZCgfUpG',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTBxv0zwqIpG',
        'BgvHzgvY',
        'pgrPDJ4',
        'Aw11Ba',
        'turxs0G',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbPzd0IC3rHA2vVDxqTzM9VDgvYlxjHDguIpLjHDgu6ia',
        'yM9SzcaXmNb4ic1HChbSzs1ZExn0zw0SiejSAw5RtwfJu3LZDgvTrM9UDcWGC2fUCY1ZzxjPzG'
    ];
    _0x5bb0 = function () {
        return _0x2113bd;
    };
    return _0x5bb0();
}
(function (_0x1a65df, _0x479587) {
    const _0x3d10b2 = _0xf22e, _0x83ce0e = _0x1a65df();
    while (!![]) {
        try {
            const _0x54632a = -parseInt(_0x3d10b2(0x58e)) / 0x1 + parseInt(_0x3d10b2(0x854)) / 0x2 + -parseInt(_0x3d10b2(0x538)) / 0x3 * (parseInt(_0x3d10b2(0x5bf)) / 0x4) + parseInt(_0x3d10b2(0x6b8)) / 0x5 + parseInt(_0x3d10b2(0x564)) / 0x6 + parseInt(_0x3d10b2(0x320)) / 0x7 + parseInt(_0x3d10b2(0x4e5)) / 0x8 * (-parseInt(_0x3d10b2(0x578)) / 0x9);
            if (_0x54632a === _0x479587)
                break;
            else
                _0x83ce0e['push'](_0x83ce0e['shift']());
        } catch (_0x1406e0) {
            _0x83ce0e['push'](_0x83ce0e['shift']());
        }
    }
}(_0x5bb0, 0x3df2b), (function () {
    'use strict';
    const _0x45c9c2 = _0xf22e, _0x1f060e = {
            'SFaAd': _0x45c9c2(0x437),
            'tDPcP': function (_0x44df97, _0x5efb67) {
                return _0x44df97 === _0x5efb67;
            },
            'pqxrh': function (_0x38edc5, _0x350f80, _0x34f4c7) {
                return _0x38edc5(_0x350f80, _0x34f4c7);
            },
            'nhIpQ': function (_0x55f452, _0x5467bb) {
                return _0x55f452(_0x5467bb);
            },
            'BMWhx': function (_0x50e75e, _0x4b048a) {
                return _0x50e75e < _0x4b048a;
            },
            'rHvEf': '⚠️\x20Could\x20not\x20parse\x20remote\x20version\x20from\x20GitHub.',
            'hioTN': _0x45c9c2(0x928),
            'sGbQa': function (_0x385b8f, _0x1a1eee) {
                return _0x385b8f(_0x1a1eee);
            },
            'IdNfm': _0x45c9c2(0x34d),
            'qycKO': _0x45c9c2(0x4f4),
            'VLdWA': function (_0x5bafa0, _0x293849) {
                return _0x5bafa0(_0x293849);
            },
            'AiEal': function (_0x569af3, _0x934520) {
                return _0x569af3 + _0x934520;
            },
            'eCDyE': _0x45c9c2(0x378),
            'QHdwq': function (_0x369c95, _0x432bb1) {
                return _0x369c95 > _0x432bb1;
            },
            'mxJtv': _0x45c9c2(0x1d5),
            'nBZuP': _0x45c9c2(0x526),
            'eCuPC': function (_0x413108, _0x5cb218) {
                return _0x413108 !== _0x5cb218;
            },
            'aNHQj': function (_0x548847, _0x30ef2e, _0x7b0233) {
                return _0x548847(_0x30ef2e, _0x7b0233);
            },
            'FSNbe': function (_0x1787bf, _0x5a7b95) {
                return _0x1787bf(_0x5a7b95);
            },
            'oiFCR': function (_0x5d15a0, _0x3e0158) {
                return _0x5d15a0 + _0x3e0158;
            },
            'vfcmL': _0x45c9c2(0x4c2),
            'unFCM': function (_0x24877d, _0xe1cf13) {
                return _0x24877d > _0xe1cf13;
            },
            'VujgB': _0x45c9c2(0x98a),
            'bPmKq': _0x45c9c2(0x2f2),
            'vYGVP': _0x45c9c2(0x5f4),
            'vQrkz': _0x45c9c2(0x1bf),
            'EbYKb': _0x45c9c2(0x4cd),
            'bYOHg': _0x45c9c2(0x4dd),
            'eyvCx': _0x45c9c2(0x531),
            'gWpJe': function (_0x24d127, _0x434481) {
                return _0x24d127 !== _0x434481;
            },
            'xXIOU': function (_0x3cf609, _0x45af24, _0x401c4b) {
                return _0x3cf609(_0x45af24, _0x401c4b);
            },
            'zbUxv': function (_0x5219d8, _0x1550dd, _0x58090d) {
                return _0x5219d8(_0x1550dd, _0x58090d);
            },
            'qPKHo': 'license_last_error',
            'QXGWQ': function (_0x2b6e02, _0x1c8e02) {
                return _0x2b6e02(_0x1c8e02);
            },
            'ddouw': function (_0x3b21d3, _0x5af2a7) {
                return _0x3b21d3 + _0x5af2a7;
            },
            'SygwT': function (_0x180eda, _0x416f9b) {
                return _0x180eda % _0x416f9b;
            },
            'DOahg': function (_0x25205a) {
                return _0x25205a();
            },
            'gPptq': _0x45c9c2(0x990),
            'jMKBE': function (_0x21f284, _0x3b24d1) {
                return _0x21f284(_0x3b24d1);
            },
            'kcTwK': function (_0x28e9d6, _0x36e84c) {
                return _0x28e9d6(_0x36e84c);
            },
            'uKnZM': function (_0x228db7, _0x1c472a) {
                return _0x228db7 / _0x1c472a;
            },
            'XwbLH': function (_0x18e38d, _0x142d02) {
                return _0x18e38d <= _0x142d02;
            },
            'Vkfcd': _0x45c9c2(0x39a),
            'SXyPr': function (_0xf32068, _0x210d0a) {
                return _0xf32068 < _0x210d0a;
            },
            'VGuUg': function (_0x269ac3, _0x10d43e) {
                return _0x269ac3 > _0x10d43e;
            },
            'UnsNy': _0x45c9c2(0x4b3),
            'TMpIX': function (_0x183dff, _0x49aece) {
                return _0x183dff(_0x49aece);
            },
            'vTanT': function (_0x28a35b, _0x506b01, _0xb631e9) {
                return _0x28a35b(_0x506b01, _0xb631e9);
            },
            'FUrVt': _0x45c9c2(0x398),
            'KYJPn': function (_0x242d1f) {
                return _0x242d1f();
            },
            'WlQvf': function (_0x330854, _0x5ae330) {
                return _0x330854 > _0x5ae330;
            },
            'jILyx': function (_0x65108b, _0x560879) {
                return _0x65108b >= _0x560879;
            },
            'HAXCL': function (_0xa0ede5) {
                return _0xa0ede5();
            },
            'oDuep': function (_0x2d69f0, _0x1e93b2, _0x3f2682) {
                return _0x2d69f0(_0x1e93b2, _0x3f2682);
            },
            'vyruO': 'api_key',
            'UElmn': _0x45c9c2(0x1ea),
            'zwTLr': function (_0x3b8884, _0x522316, _0x52034f) {
                return _0x3b8884(_0x522316, _0x52034f);
            },
            'VdAJB': 'license_identity',
            'tlmzN': 'license-poll',
            'XzMcZ': _0x45c9c2(0x3c9),
            'TCoVU': _0x45c9c2(0x535),
            'NsGIq': function (_0x20ee7c) {
                return _0x20ee7c();
            },
            'fTncR': function (_0x463095) {
                return _0x463095();
            },
            'AlaKc': _0x45c9c2(0x407),
            'NcFKn': function (_0x5ced5f) {
                return _0x5ced5f();
            },
            'hxGyr': 'stakeout-key-modal',
            'QFsdt': _0x45c9c2(0x86c),
            'uvJlP': function (_0x461d28, _0x21c32d) {
                return _0x461d28(_0x21c32d);
            },
            'bgwHc': _0x45c9c2(0x7a1),
            'rmiYj': _0x45c9c2(0x9c9),
            'DqSEw': _0x45c9c2(0x893),
            'IqsuI': function (_0x466508, _0x524bf1) {
                return _0x466508 === _0x524bf1;
            },
            'IeTWE': function (_0x28c2f3, _0x3f42b9) {
                return _0x28c2f3 === _0x3f42b9;
            },
            'JXliS': function (_0x4b7322, _0x3bae2b) {
                return _0x4b7322 === _0x3bae2b;
            },
            'Rnncn': _0x45c9c2(0x6ef),
            'LTVIp': _0x45c9c2(0x216),
            'oPkuD': function (_0x4126b0, _0x2c0fd6) {
                return _0x4126b0 - _0x2c0fd6;
            },
            'VPAaA': function (_0x1927c6, _0xdad9b3) {
                return _0x1927c6 + _0xdad9b3;
            },
            'WEomX': _0x45c9c2(0x95c),
            'ASIXW': function (_0x3381de, _0x291dae) {
                return _0x3381de <= _0x291dae;
            },
            'aghuK': _0x45c9c2(0x874),
            'amfxz': function (_0x24be0b, _0x2de855, _0x2f5a5c) {
                return _0x24be0b(_0x2de855, _0x2f5a5c);
            },
            'uphRO': function (_0x2cc0d3) {
                return _0x2cc0d3();
            },
            'sLTcv': function (_0x46b936, _0x37cad6) {
                return _0x46b936 !== _0x37cad6;
            },
            'JCQrH': _0x45c9c2(0x281),
            'amPNi': _0x45c9c2(0x942),
            'lyDCk': 'faction_contracts',
            'zwVxz': function (_0x33b88c, _0x23d861) {
                return _0x33b88c(_0x23d861);
            },
            'lfFND': function (_0x29c42a, _0x19fabe) {
                return _0x29c42a(_0x19fabe);
            },
            'fOTup': function (_0x21cf83, _0x339966) {
                return _0x21cf83(_0x339966);
            },
            'BUzzt': function (_0x3eabd7, _0x2d65e4, _0x13706c) {
                return _0x3eabd7(_0x2d65e4, _0x13706c);
            },
            'txhSS': _0x45c9c2(0x8aa),
            'nkfpN': function (_0x130a52, _0x4264d4) {
                return _0x130a52 === _0x4264d4;
            },
            'snbyZ': _0x45c9c2(0x86f),
            'JVWRj': function (_0x270e2c) {
                return _0x270e2c();
            },
            'eGXkY': 'cache',
            'UPhEs': function (_0x48f7b8, _0x12e73f) {
                return _0x48f7b8 < _0x12e73f;
            },
            'dhEiy': function (_0x4fcec9, _0x1e8c4) {
                return _0x4fcec9 < _0x1e8c4;
            },
            'RrzFM': function (_0x5d190e, _0x456fd1) {
                return _0x5d190e === _0x456fd1;
            },
            'LljCG': function (_0x4be814, _0x44427f) {
                return _0x4be814(_0x44427f);
            },
            'qYdKT': function (_0x2f924f, _0x5768f6, _0x4f0d05) {
                return _0x2f924f(_0x5768f6, _0x4f0d05);
            },
            'sCqDb': function (_0x2a8348, _0x260cfa) {
                return _0x2a8348 + _0x260cfa;
            },
            'hyGRa': _0x45c9c2(0x463),
            'jdeRj': _0x45c9c2(0x2ed),
            'PIrKr': _0x45c9c2(0x5d0),
            'YJBgN': function (_0x613e12, _0x5c789d, _0x1a255b) {
                return _0x613e12(_0x5c789d, _0x1a255b);
            },
            'fJfWj': _0x45c9c2(0x5d3),
            'QFUkP': function (_0x442916) {
                return _0x442916();
            },
            'clRMo': _0x45c9c2(0x8f3),
            'hUjyI': function (_0x14ddcc, _0x28ed17) {
                return _0x14ddcc * _0x28ed17;
            },
            'UBVTb': function (_0x5cd06f) {
                return _0x5cd06f();
            },
            'CZuuy': function (_0x2392d9, _0xb3aed1, _0x25f83f) {
                return _0x2392d9(_0xb3aed1, _0x25f83f);
            },
            'jpVMC': _0x45c9c2(0x63b),
            'NJByf': _0x45c9c2(0x794),
            'yXruv': _0x45c9c2(0x5be),
            'OsVDE': function (_0x2dbe14, _0x5af856, _0x23fb05) {
                return _0x2dbe14(_0x5af856, _0x23fb05);
            },
            'bMTxk': function (_0xe24afb, _0x4c02ba) {
                return _0xe24afb !== _0x4c02ba;
            },
            'HmZpu': function (_0x484087, _0xbfb5fc) {
                return _0x484087 !== _0xbfb5fc;
            },
            'LKKWG': _0x45c9c2(0x44d),
            'JTHLP': _0x45c9c2(0x6f7),
            'xpWmu': _0x45c9c2(0x31d),
            'OKUGD': 'war',
            'CONNZ': function (_0x43627c, _0x5e829d) {
                return _0x43627c === _0x5e829d;
            },
            'UoaTD': _0x45c9c2(0x7c5),
            'bLfwq': function (_0xfe2d22, _0x342f11) {
                return _0xfe2d22(_0x342f11);
            },
            'YqDsC': function (_0x5a7c08, _0x5b7bc3) {
                return _0x5a7c08 === _0x5b7bc3;
            },
            'WPvJd': _0x45c9c2(0x373),
            'SsEgJ': function (_0x51d155, _0x47513a) {
                return _0x51d155 < _0x47513a;
            },
            'QUfGA': function (_0x422c00, _0x262dca) {
                return _0x422c00 === _0x262dca;
            },
            'SIBUD': _0x45c9c2(0x29d),
            'hebxV': _0x45c9c2(0x449),
            'lwtkX': function (_0x3cd0c0, _0x41f295) {
                return _0x3cd0c0 === _0x41f295;
            },
            'WRdyl': function (_0x1a23cb, _0x2dd0bf) {
                return _0x1a23cb < _0x2dd0bf;
            },
            'Kvcwb': function (_0x153cf0, _0x108040) {
                return _0x153cf0 - _0x108040;
            },
            'giVNy': function (_0x51d91d, _0x46d8fe) {
                return _0x51d91d > _0x46d8fe;
            },
            'ZDuOq': function (_0x5da5a0, _0x4c12b3, _0x42fadd) {
                return _0x5da5a0(_0x4c12b3, _0x42fadd);
            },
            'uGYgd': _0x45c9c2(0x515),
            'TGOBI': function (_0x25cbf1) {
                return _0x25cbf1();
            },
            'ajLQk': _0x45c9c2(0x2ac),
            'ZxDBd': _0x45c9c2(0x483),
            'MIkue': _0x45c9c2(0x671),
            'jGGDd': function (_0x3106c0, _0x56d3ba) {
                return _0x3106c0 + _0x56d3ba;
            },
            'IaWWt': function (_0x314470, _0x229668) {
                return _0x314470 !== _0x229668;
            },
            'djoUK': function (_0x590f2e, _0x2f6fa6) {
                return _0x590f2e === _0x2f6fa6;
            },
            'fvTBf': 'warning',
            'ZwRnv': _0x45c9c2(0x4f0),
            'eNCxP': _0x45c9c2(0x1b5),
            'mVzmC': _0x45c9c2(0x748),
            'eWGqm': function (_0x51effa, _0x1dbf3e) {
                return _0x51effa + _0x1dbf3e;
            },
            'BKrrz': function (_0x23156a, _0x4510cc) {
                return _0x23156a + _0x4510cc;
            },
            'GnGPE': _0x45c9c2(0x343),
            'TXaWT': function (_0x42b72c, _0x8475d) {
                return _0x42b72c + _0x8475d;
            },
            'BmySJ': function (_0x4454ee, _0xb69338) {
                return _0x4454ee * _0xb69338;
            },
            'ZBjIK': _0x45c9c2(0x26b),
            'GJkgy': function (_0x25361c, _0x53b829) {
                return _0x25361c < _0x53b829;
            },
            'OkVYR': function (_0x133b9b, _0x5f4f43) {
                return _0x133b9b * _0x5f4f43;
            },
            'BIfUM': function (_0x5a99bc, _0x30bfe6) {
                return _0x5a99bc + _0x30bfe6;
            },
            'bSYMN': _0x45c9c2(0x8ce),
            'JKOru': _0x45c9c2(0x377),
            'VKsKa': function (_0x51ca38, _0x266cac) {
                return _0x51ca38 === _0x266cac;
            },
            'JEVVH': _0x45c9c2(0x599),
            'fJpjC': function (_0x431ec8, _0x4d3002) {
                return _0x431ec8 + _0x4d3002;
            },
            'LJLeZ': _0x45c9c2(0x7cf),
            'wrScX': function (_0xb0b02c, _0x925d2d) {
                return _0xb0b02c * _0x925d2d;
            },
            'puQlM': function (_0x4d04e6, _0x55b5c2) {
                return _0x4d04e6 + _0x55b5c2;
            },
            'kRmWI': function (_0x452fdd, _0x478269) {
                return _0x452fdd === _0x478269;
            },
            'EZHFr': function (_0x57a3d4, _0x41c135) {
                return _0x57a3d4 === _0x41c135;
            },
            'keWxJ': function (_0x288eef, _0x4a5a59) {
                return _0x288eef !== _0x4a5a59;
            },
            'ErOHG': _0x45c9c2(0x6e8),
            'EkFzy': function (_0x58e0c3, _0x2ba5a9, _0x45b837) {
                return _0x58e0c3(_0x2ba5a9, _0x45b837);
            },
            'ZntzM': function (_0x3ed9c1, _0x40b4d3, _0x1f4fed) {
                return _0x3ed9c1(_0x40b4d3, _0x1f4fed);
            },
            'iSGKb': function (_0x234b6f, _0x420e6a) {
                return _0x234b6f % _0x420e6a;
            },
            'mwmiJ': function (_0x16c8fe, _0x10f9df) {
                return _0x16c8fe === _0x10f9df;
            },
            'iLrLP': function (_0x2328cf, _0x1a5a2d) {
                return _0x2328cf % _0x1a5a2d;
            },
            'SbiaD': _0x45c9c2(0x409),
            'MfYkz': _0x45c9c2(0x843),
            'XGgDJ': _0x45c9c2(0x443),
            'qTXpz': '[aria-label*=\x22Energy\x22\x20i]',
            'ZSKhe': function (_0x4b8ab8, _0x2fb508) {
                return _0x4b8ab8 !== _0x2fb508;
            },
            'hgGTs': function (_0x57a6c2, _0x4da7ac, _0x9ba9ed) {
                return _0x57a6c2(_0x4da7ac, _0x9ba9ed);
            },
            'JsxxS': function (_0x5c9f64, _0x258497) {
                return _0x5c9f64 < _0x258497;
            },
            'mlXBu': function (_0x33bd80, _0x348aa1) {
                return _0x33bd80 > _0x348aa1;
            },
            'cZEGS': function (_0x55455b, _0x5e774a) {
                return _0x55455b(_0x5e774a);
            },
            'vJCzt': _0x45c9c2(0x38d),
            'TiPXM': function (_0x179e6e, _0x22b2c0) {
                return _0x179e6e * _0x22b2c0;
            },
            'HnvZh': _0x45c9c2(0x8b8),
            'KNTZS': _0x45c9c2(0x6b5),
            'qyPPD': _0x45c9c2(0x317),
            'OsUOh': _0x45c9c2(0x908),
            'ddxnx': 'drug-ready',
            'PlJxi': _0x45c9c2(0x517),
            'mvrxV': function (_0x35d564) {
                return _0x35d564();
            },
            'Ecoyr': function (_0x4c2917) {
                return _0x4c2917();
            },
            'yykVu': function (_0x445678) {
                return _0x445678();
            },
            'eVSbF': function (_0x53d88a) {
                return _0x53d88a();
            },
            'PhxPg': function (_0x29d68a, _0x321c06) {
                return _0x29d68a === _0x321c06;
            },
            'VUDKi': _0x45c9c2(0x7e3),
            'SMKIU': function (_0xbb4a03, _0x4fb1ec, _0x25e99a) {
                return _0xbb4a03(_0x4fb1ec, _0x25e99a);
            },
            'ioyup': _0x45c9c2(0x821),
            'UcXgw': function (_0x3e6f9f, _0x1c7030) {
                return _0x3e6f9f !== _0x1c7030;
            },
            'ubjtd': _0x45c9c2(0x3f0),
            'fzdAY': function (_0x52be51, _0x1534bd) {
                return _0x52be51 > _0x1534bd;
            },
            'ipSDF': function (_0x18760b, _0x54e55f) {
                return _0x18760b + _0x54e55f;
            },
            'cESXB': function (_0x28b718, _0xd2b050, _0x4b2dd9) {
                return _0x28b718(_0xd2b050, _0x4b2dd9);
            },
            'hAfZj': _0x45c9c2(0x2b5),
            'dIBeK': _0x45c9c2(0x7af),
            'gNcnU': _0x45c9c2(0x911),
            'HBeZh': _0x45c9c2(0x1b3),
            'TuYVh': _0x45c9c2(0x925),
            'JTGwP': function (_0x5e5693, _0x5a2b8f, _0x2a7489) {
                return _0x5e5693(_0x5a2b8f, _0x2a7489);
            },
            'Idjwk': function (_0x14f188) {
                return _0x14f188();
            },
            'FnsKa': function (_0x37e2f8, _0x36dbde) {
                return _0x37e2f8(_0x36dbde);
            },
            'IBGwm': function (_0x189695, _0x5e53c9) {
                return _0x189695(_0x5e53c9);
            },
            'hRafU': function (_0x53855d, _0x50fbc2) {
                return _0x53855d(_0x50fbc2);
            },
            'wueKw': function (_0x4dfdb2, _0x49d1bf) {
                return _0x4dfdb2(_0x49d1bf);
            },
            'tXnmQ': function (_0x1b9c32) {
                return _0x1b9c32();
            },
            'EELdf': function (_0x1e2df9, _0x1d36a3) {
                return _0x1e2df9 >= _0x1d36a3;
            },
            'dphRU': _0x45c9c2(0x83b),
            'GXLeF': function (_0x59e9df, _0x4349db) {
                return _0x59e9df(_0x4349db);
            },
            'htRtb': _0x45c9c2(0x5e7),
            'hrWRo': 'safe',
            'kIFmW': 'stakeout-chain-pill-wrap',
            'qfMkq': _0x45c9c2(0x6de),
            'HpmVj': _0x45c9c2(0x402),
            'RoKss': _0x45c9c2(0x860),
            'CuwNF': _0x45c9c2(0x39f),
            'VjtAz': _0x45c9c2(0x5de),
            'RKyIX': _0x45c9c2(0x728),
            'pPwHk': function (_0x65a4b5) {
                return _0x65a4b5();
            },
            'lqKsn': _0x45c9c2(0x332),
            'nRnDm': '[Stakeout]\x20API\x20error:',
            'hXTVw': '[Stakeout]\x20Network\x20error:',
            'lfFKp': _0x45c9c2(0x7f6),
            'SyOOY': function (_0x37f976, _0x1d506f) {
                return _0x37f976 <= _0x1d506f;
            },
            'ExxFT': _0x45c9c2(0x966),
            'YkbbV': _0x45c9c2(0x26e),
            'mfawR': 'Someone\x20(Anonymous)',
            'nqAZO': 'canvas',
            'BiVgx': '#0a0f1d',
            'Psaup': '#991b1b',
            'nrTvc': _0x45c9c2(0x334),
            'ccIrc': _0x45c9c2(0x3a6),
            'uknDK': '\x20UTC',
            'PEsbw': _0x45c9c2(0x243),
            'rGRkF': _0x45c9c2(0x40b),
            'OCeyz': '#374151',
            'XlODD': '12px\x20-apple-system,\x20BlinkMacSystemFont,\x20sans-serif',
            'PBkvx': function (_0x3b59ed, _0x2398f1, _0x7fc152, _0x3d1d22) {
                return _0x3b59ed(_0x2398f1, _0x7fc152, _0x3d1d22);
            },
            'rtIOV': _0x45c9c2(0x2cc),
            'Ionvy': function (_0x5f492e, _0x5be211, _0x3bfbde, _0x100d85) {
                return _0x5f492e(_0x5be211, _0x3bfbde, _0x100d85);
            },
            'kLpIZ': _0x45c9c2(0x5fc),
            'fVpPA': _0x45c9c2(0x330),
            'kyLJh': _0x45c9c2(0x747),
            'KcPbn': _0x45c9c2(0x3b5),
            'YVoJN': _0x45c9c2(0x63c),
            'XMJvR': _0x45c9c2(0x722),
            'IJrEF': _0x45c9c2(0x284),
            'IeyPB': 'Okay',
            'jbeCS': _0x45c9c2(0x293),
            'pJGbd': function (_0x3c7ab6, _0x58ad1f, _0x1483dc, _0x4d017f, _0x2ced51, _0xe6cb0e, _0xfc5a0e) {
                return _0x3c7ab6(_0x58ad1f, _0x1483dc, _0x4d017f, _0x2ced51, _0xe6cb0e, _0xfc5a0e);
            },
            'XOxKV': _0x45c9c2(0x694),
            'gIceg': 'N/A',
            'ktwDf': _0x45c9c2(0x896),
            'SXUwL': _0x45c9c2(0x4f7),
            'coCsy': _0x45c9c2(0x615),
            'GeUtL': function (_0x1646ff, _0x1ed2ed, _0x1f74e0, _0x1a9bc6) {
                return _0x1646ff(_0x1ed2ed, _0x1f74e0, _0x1a9bc6);
            },
            'RXtha': _0x45c9c2(0x7d7),
            'KhWRd': function (_0x262624, _0x3f7faa, _0x3d0474, _0x5c8ab4) {
                return _0x262624(_0x3f7faa, _0x3d0474, _0x5c8ab4);
            },
            'FuYBf': _0x45c9c2(0x5b2),
            'EOmng': _0x45c9c2(0x5e2),
            'atOWp': '#1c1917',
            'DvkUM': '#fee2e2',
            'AqigC': _0x45c9c2(0x5a6),
            'XoSYE': _0x45c9c2(0x6d0),
            'WLakL': function (_0x4f7010, _0x5d9d1e) {
                return _0x4f7010 - _0x5d9d1e;
            },
            'WYMbJ': _0x45c9c2(0x3f8),
            'VjQLr': 'image/png',
            'SFPoS': function (_0x5548e7, _0x33bb17) {
                return _0x5548e7(_0x33bb17);
            },
            'udTYH': '📸\x20Evidence\x20screenshot\x20downloaded!',
            'zGGzb': function (_0x5c6241, _0x17111b) {
                return _0x5c6241(_0x17111b);
            },
            'djoSu': '📋\x20Report\x20copied\x20to\x20clipboard!',
            'crgWt': 'stakeout-incident-modal',
            'yNtVK': _0x45c9c2(0x290),
            'JGRWd': _0x45c9c2(0x247),
            'IktER': _0x45c9c2(0x22d),
            'tDkRT': function (_0x20e062, _0x41af2a) {
                return _0x20e062(_0x41af2a);
            },
            'HMjxh': 'Faction\x20War',
            'dOXZG': _0x45c9c2(0x388),
            'XRtky': function (_0x3ebb4a, _0x4dcb42) {
                return _0x3ebb4a(_0x4dcb42);
            },
            'fkmFP': function (_0x21f82c, _0x2949c8) {
                return _0x21f82c * _0x2949c8;
            },
            'PYJhp': function (_0x588c5c, _0x4b3067) {
                return _0x588c5c % _0x4b3067;
            },
            'WVWtY': 'incident',
            'ftuoU': function (_0x56229f, _0x247b0c) {
                return _0x56229f === _0x247b0c;
            },
            'yQxnk': function (_0x2890c6, _0x4d84c9, _0x5b4f00) {
                return _0x2890c6(_0x4d84c9, _0x5b4f00);
            },
            'yeIFw': function (_0x2380b0, _0x111188) {
                return _0x2380b0(_0x111188);
            },
            'AfhUo': function (_0x1daec7, _0x564c30) {
                return _0x1daec7(_0x564c30);
            },
            'mFCJw': function (_0x202d71, _0x1e97fc) {
                return _0x202d71(_0x1e97fc);
            },
            'BIOrA': function (_0x4d6231, _0x518f26, _0x124835) {
                return _0x4d6231(_0x518f26, _0x124835);
            },
            'IQsFX': function (_0x277711, _0x2ef67c) {
                return _0x277711 > _0x2ef67c;
            },
            'MJhqw': function (_0x19d143, _0x3fb8a4) {
                return _0x19d143 === _0x3fb8a4;
            },
            'YWUQq': function (_0x2892d6, _0x157e6d, _0x185aae, _0x20e884, _0x5a08f5) {
                return _0x2892d6(_0x157e6d, _0x185aae, _0x20e884, _0x5a08f5);
            },
            'bPLXO': function (_0xcbb8d8, _0x2c7a40) {
                return _0xcbb8d8(_0x2c7a40);
            },
            'exNuk': 'Traveling',
            'EyPbw': function (_0x5d6456, _0x4d151a) {
                return _0x5d6456(_0x4d151a);
            },
            'PIkYD': function (_0x57f11c, _0x4cd2ea) {
                return _0x57f11c === _0x4cd2ea;
            },
            'WRIDt': function (_0x400c70, _0x4fef85) {
                return _0x400c70(_0x4fef85);
            },
            'OHtFu': function (_0x158c59) {
                return _0x158c59();
            },
            'AzuOE': function (_0x5cfb0e) {
                return _0x5cfb0e();
            },
            'rSenH': _0x45c9c2(0x596),
            'swpRG': _0x45c9c2(0x49b),
            'mwPvH': _0x45c9c2(0x537),
            'ZFPfV': '#stakeout-store-setkey',
            'Flpjf': _0x45c9c2(0x446),
            'Hbcii': function (_0x222030, _0xcbb309) {
                return _0x222030 === _0xcbb309;
            },
            'pPBsB': 'position-left',
            'gZVuH': function (_0x51238a, _0x323a2b) {
                return _0x51238a + _0x323a2b;
            },
            'dKRHp': _0x45c9c2(0x32f),
            'OpTDM': function (_0x2e305e, _0x5f32cd) {
                return _0x2e305e || _0x5f32cd;
            },
            'lapud': _0x45c9c2(0x576),
            'ftZqx': '.stakeout-hosp-ed-badge',
            'Raogs': function (_0x577a8e, _0x1f847d) {
                return _0x577a8e(_0x1f847d);
            },
            'SRWXt': _0x45c9c2(0x516),
            'wAQUn': _0x45c9c2(0x974),
            'IwESN': _0x45c9c2(0x684),
            'xnxWq': _0x45c9c2(0x956),
            'RrWXQ': _0x45c9c2(0x325),
            'xxTHB': function (_0x5b29b4) {
                return _0x5b29b4();
            },
            'moYDF': function (_0x3cf864, _0x2690d0, _0x3a637e) {
                return _0x3cf864(_0x2690d0, _0x3a637e);
            },
            'USXGq': function (_0x32ece3) {
                return _0x32ece3();
            },
            'JSqwP': _0x45c9c2(0x771),
            'VzTKl': _0x45c9c2(0x451),
            'FMTOl': function (_0x182b16) {
                return _0x182b16();
            },
            'deasX': function (_0x186d3b, _0x5c5c6f) {
                return _0x186d3b >= _0x5c5c6f;
            },
            'KNMeN': function (_0x757381, _0x191310) {
                return _0x757381(_0x191310);
            },
            'moKPq': function (_0xdd57c6, _0x2d9d8b) {
                return _0xdd57c6 ?? _0x2d9d8b;
            },
            'FtUix': function (_0x6cd912, _0x462424) {
                return _0x6cd912 < _0x462424;
            },
            'gFChs': function (_0x3be7bc, _0x457616, _0x496401) {
                return _0x3be7bc(_0x457616, _0x496401);
            },
            'ZZEQq': function (_0x316b4c, _0x410850) {
                return _0x316b4c(_0x410850);
            },
            'nAyxw': function (_0x3e7b79, _0x3a4b94, _0x4da8aa) {
                return _0x3e7b79(_0x3a4b94, _0x4da8aa);
            },
            'VwoYu': function (_0x254ccc, _0x290319) {
                return _0x254ccc + _0x290319;
            },
            'YEmTr': function (_0x1d138d, _0x57e14a) {
                return _0x1d138d <= _0x57e14a;
            },
            'aHSdT': function (_0x25aeb1, _0x58efde) {
                return _0x25aeb1 - _0x58efde;
            },
            'jsvnB': function (_0x17bb7a, _0x167675) {
                return _0x17bb7a * _0x167675;
            },
            'JEJun': function (_0xeee3f8, _0x420d28) {
                return _0xeee3f8 !== _0x420d28;
            },
            'xOFVU': function (_0x14081c, _0x47f96b) {
                return _0x14081c(_0x47f96b);
            },
            'dtaeS': function (_0x24ad77, _0x50efd5) {
                return _0x24ad77(_0x50efd5);
            },
            'SsTaI': function (_0x4b055e, _0x443848) {
                return _0x4b055e === _0x443848;
            },
            'JzbdD': function (_0x782794) {
                return _0x782794();
            },
            'nBxtX': function (_0x2757ab) {
                return _0x2757ab();
            },
            'jLTIC': function (_0x50a900) {
                return _0x50a900();
            },
            'hfqBP': function (_0xe1b7df, _0x45e299) {
                return _0xe1b7df(_0x45e299);
            },
            'waYkT': function (_0x400541, _0x373fc) {
                return _0x400541 < _0x373fc;
            },
            'xqDkg': function (_0x532062, _0x2e4d17) {
                return _0x532062 * _0x2e4d17;
            },
            'bKgix': function (_0x474d4a) {
                return _0x474d4a();
            },
            'foQRV': function (_0x229ebf, _0x44fa5d) {
                return _0x229ebf * _0x44fa5d;
            },
            'RNCAf': function (_0x3eff2a) {
                return _0x3eff2a();
            },
            'aSqXU': function (_0x5763c3, _0x4dce4a) {
                return _0x5763c3 / _0x4dce4a;
            },
            'eKvka': function (_0x518e4e) {
                return _0x518e4e();
            },
            'gIXFZ': function (_0x554963, _0x3abb19) {
                return _0x554963 >= _0x3abb19;
            },
            'uIQcj': function (_0x502cae) {
                return _0x502cae();
            },
            'IJzVv': function (_0x4cd5b8) {
                return _0x4cd5b8();
            },
            'GxvrP': function (_0x276c23, _0x3fa59f) {
                return _0x276c23 - _0x3fa59f;
            },
            'SxTjX': function (_0x501361, _0x4c3149) {
                return _0x501361 === _0x4c3149;
            },
            'SAWfA': function (_0x244830, _0x3bb2b3) {
                return _0x244830(_0x3bb2b3);
            },
            'TItLU': _0x45c9c2(0x51b),
            'BITFK': function (_0x5303c8) {
                return _0x5303c8();
            },
            'YbxAN': _0x45c9c2(0x53f),
            'czVdq': function (_0x286588, _0x32b22c) {
                return _0x286588 === _0x32b22c;
            },
            'hscJY': function (_0x4e2bb1, _0xfe93c8) {
                return _0x4e2bb1 === _0xfe93c8;
            },
            'EiXNn': function (_0x31bd02, _0x4742ca) {
                return _0x31bd02 + _0x4742ca;
            },
            'qAsjl': function (_0x151256, _0x278628) {
                return _0x151256 === _0x278628;
            },
            'YrSIK': function (_0x2d9245, _0x24b306) {
                return _0x2d9245 > _0x24b306;
            },
            'nfzzD': 'hosp',
            'IHDBh': function (_0x321956, _0x2b9c3d) {
                return _0x321956(_0x2b9c3d);
            },
            'AQSfT': _0x45c9c2(0x385),
            'Vkiit': function (_0x2ff81e, _0xf6b5ac, _0x4904af) {
                return _0x2ff81e(_0xf6b5ac, _0x4904af);
            },
            'AMJxq': function (_0x4c4f1e, _0x1f1fb6, _0x2796e9) {
                return _0x4c4f1e(_0x1f1fb6, _0x2796e9);
            },
            'JrHRT': function (_0x48e098, _0x1f3ac0) {
                return _0x48e098 === _0x1f3ac0;
            },
            'mNyOe': _0x45c9c2(0x509),
            'Hnbfm': function (_0x246c27, _0x2eba7b) {
                return _0x246c27 / _0x2eba7b;
            },
            'HRhTg': function (_0x42a758, _0x52508e, _0x458d2c, _0x43823f) {
                return _0x42a758(_0x52508e, _0x458d2c, _0x43823f);
            },
            'nwrhu': function (_0x52fb6c, _0x111e36) {
                return _0x52fb6c >= _0x111e36;
            },
            'iRhAU': function (_0xe555de, _0x5392f4, _0x2de4e3) {
                return _0xe555de(_0x5392f4, _0x2de4e3);
            },
            'NwCzm': _0x45c9c2(0x74d),
            'BgUNk': _0x45c9c2(0x907),
            'yPVlE': function (_0x443fd1, _0x14ef3b) {
                return _0x443fd1 === _0x14ef3b;
            },
            'dUQJV': function (_0x21a981, _0x4e74f6) {
                return _0x21a981(_0x4e74f6);
            },
            'ajKPl': _0x45c9c2(0x3aa),
            'tVovw': 'standard',
            'FSZmW': function (_0x514158, _0x4b9ae1) {
                return _0x514158(_0x4b9ae1);
            },
            'KejYw': function (_0x4dea69, _0x226598) {
                return _0x4dea69(_0x226598);
            },
            'vqnRt': function (_0x39ffc5) {
                return _0x39ffc5();
            },
            'XHjij': 'chainScanEnd',
            'sFRjW': function (_0x10ce8d, _0x49e46b, _0x1ceb71, _0x35f609, _0x15fad7) {
                return _0x10ce8d(_0x49e46b, _0x1ceb71, _0x35f609, _0x15fad7);
            },
            'dvWVC': 'stakeout-chain-max-level',
            'Thmpt': _0x45c9c2(0x895),
            'aTmRh': _0x45c9c2(0x4f3),
            'BXBFm': _0x45c9c2(0x3c3),
            'CIMkV': _0x45c9c2(0x2ab),
            'CQBHl': function (_0x37de61) {
                return _0x37de61();
            },
            'AotvA': function (_0x5f29d5) {
                return _0x5f29d5();
            },
            'MRQmy': _0x45c9c2(0x204),
            'IplNT': function (_0x291764, _0x3c6532) {
                return _0x291764 !== _0x3c6532;
            },
            'abuaH': _0x45c9c2(0x2c9),
            'nciUL': function (_0x33096a) {
                return _0x33096a();
            },
            'AvGfQ': function (_0x341949, _0x1cc7ea) {
                return _0x341949 === _0x1cc7ea;
            },
            'cSXFi': function (_0x16b320, _0x26a13a) {
                return _0x16b320 + _0x26a13a;
            },
            'kFlAT': function (_0x12220d) {
                return _0x12220d();
            },
            'KJKEb': _0x45c9c2(0x9af),
            'sdACS': function (_0xa61f1d, _0x52cd60) {
                return _0xa61f1d === _0x52cd60;
            },
            'ZwING': function (_0x57b72a) {
                return _0x57b72a();
            },
            'Nviqd': function (_0x1e5f5a, _0x54f9a1) {
                return _0x1e5f5a(_0x54f9a1);
            },
            'wPqop': '▶\x20Master\x20Trader\x20Monitoring\x20RESUMED.',
            'nTcvi': function (_0x26a3b4, _0x3eaa36) {
                return _0x26a3b4(_0x3eaa36);
            },
            'FERZE': _0x45c9c2(0x34b),
            'BNrsb': function (_0x31c420) {
                return _0x31c420();
            },
            'iForf': function (_0x551268, _0x5e03d7) {
                return _0x551268 === _0x5e03d7;
            },
            'uIwhZ': '⚔️\x20Attack\x20button\x20set\x20to\x20open\x20Direct\x20Attack\x20page.',
            'jkVjB': function (_0x586524, _0x108a37) {
                return _0x586524 === _0x108a37;
            },
            'uOFtk': function (_0x39cf0a) {
                return _0x39cf0a();
            },
            'kBqpK': function (_0x35d7d5) {
                return _0x35d7d5();
            },
            'rrkeJ': function (_0x2a1c02, _0x279201) {
                return _0x2a1c02(_0x279201);
            },
            'WmEXC': function (_0x2d49ef) {
                return _0x2d49ef();
            },
            'PytRO': function (_0x1583ad, _0x9677f0, _0x4410ac) {
                return _0x1583ad(_0x9677f0, _0x4410ac);
            },
            'pltkW': function (_0x4f7c12, _0xdba5e0) {
                return _0x4f7c12 - _0xdba5e0;
            },
            'aGdwq': function (_0x2c70af) {
                return _0x2c70af();
            },
            'hXfuG': function (_0x3a3ae9) {
                return _0x3a3ae9();
            },
            'EcpSJ': function (_0x4976cc) {
                return _0x4976cc();
            },
            'pZEYh': function (_0x2822d2) {
                return _0x2822d2();
            },
            'dCoQN': _0x45c9c2(0x2e7),
            'LryDs': function (_0x454c2b, _0x6c5d03) {
                return _0x454c2b === _0x6c5d03;
            },
            'njPpH': function (_0x4f5ce8, _0x129824) {
                return _0x4f5ce8(_0x129824);
            },
            'eCAEE': '⏸\x20Trader\x20monitoring\x20PAUSED.',
            'ymRTC': _0x45c9c2(0x8b7),
            'hlmvr': function (_0x950452, _0x3385d4) {
                return _0x950452 / _0x3385d4;
            },
            'sKSNF': _0x45c9c2(0x1e8),
            'FcYHw': function (_0x4b3e5e, _0x14dbff) {
                return _0x4b3e5e(_0x14dbff);
            },
            'oycvs': function (_0x2296d2, _0x1fc263) {
                return _0x2296d2 + _0x1fc263;
            },
            'fDnWY': function (_0x5706ea, _0x46dde6) {
                return _0x5706ea > _0x46dde6;
            },
            'zfxsB': function (_0x23acad, _0x31f995) {
                return _0x23acad > _0x31f995;
            },
            'mJgIJ': _0x45c9c2(0x583),
            'QiCMH': _0x45c9c2(0x39e),
            'pNXBv': function (_0x49f9ec) {
                return _0x49f9ec();
            },
            'UkcqB': function (_0x37075a, _0x29db72) {
                return _0x37075a(_0x29db72);
            },
            'NvqPS': _0x45c9c2(0x577),
            'KDmmz': _0x45c9c2(0x71d),
            'yphDI': _0x45c9c2(0x1e9),
            'hlmdI': _0x45c9c2(0x961),
            'vnPyd': _0x45c9c2(0x643),
            'oGRzU': _0x45c9c2(0x316),
            'umIZm': _0x45c9c2(0x53a),
            'XKIUe': function (_0x566d1f, _0x5a43d1) {
                return _0x566d1f === _0x5a43d1;
            },
            'JVDQY': _0x45c9c2(0x352),
            'noRud': _0x45c9c2(0x3a0),
            'QxcWa': _0x45c9c2(0x851),
            'IyiAf': 'Add\x20Target\x20Player\x20ID...',
            'vCtHV': _0x45c9c2(0x864),
            'kLobz': 'selected',
            'mGbMK': function (_0x3b7f75, _0x3d12ab) {
                return _0x3b7f75 === _0x3d12ab;
            },
            'LGSrW': _0x45c9c2(0x5f9),
            'TMzAR': _0x45c9c2(0x8a5),
            'NIdWP': _0x45c9c2(0x231),
            'jTWFc': _0x45c9c2(0x1c6),
            'hJOaF': _0x45c9c2(0x1c1),
            'nrsLO': function (_0x538fb8, _0x13d7e0) {
                return _0x538fb8 === _0x13d7e0;
            },
            'EIJVI': function (_0x4e54f0) {
                return _0x4e54f0();
            },
            'Cdgcm': '\x20<span\x20class=\x22stakeout-settings-lock\x22>🔒</span>',
            'AZqOD': function (_0x114f07, _0xc3b5da) {
                return _0x114f07 === _0xc3b5da;
            },
            'Hjjlm': _0x45c9c2(0x987),
            'mAbJr': 'stakeout-tab-traders',
            'xKNPF': _0x45c9c2(0x2cf),
            'IFJIk': _0x45c9c2(0x405),
            'QFXsQ': 'stakeout-settings-panel',
            'TVfGt': _0x45c9c2(0x4b7),
            'rHskz': _0x45c9c2(0x2c5),
            'QGBKe': _0x45c9c2(0x913),
            'uizNY': _0x45c9c2(0x7c6),
            'BjSOF': _0x45c9c2(0x4fc),
            'SQhGs': _0x45c9c2(0x4bc),
            'byFtE': _0x45c9c2(0x620),
            'lnEwY': _0x45c9c2(0x52c),
            'MqRpG': 'toggle-chain-watcher',
            'GVmjc': _0x45c9c2(0x297),
            'vuaFa': _0x45c9c2(0x79a),
            'ydBdy': _0x45c9c2(0x634),
            'QjscY': _0x45c9c2(0x4a9),
            'XAcTQ': _0x45c9c2(0x4d9),
            'KYkkX': function (_0x173a12, _0x45771c) {
                return _0x173a12(_0x45771c);
            },
            'UVTrg': function (_0x17cd6a, _0x46bdb7) {
                return _0x17cd6a < _0x46bdb7;
            },
            'Ilqqr': function (_0x441221, _0x563463) {
                return _0x441221 / _0x563463;
            },
            'KDWoT': function (_0xaae53b, _0x15b169) {
                return _0xaae53b / _0x15b169;
            },
            'XWjSM': function (_0x28a5bb, _0x3a0b7c, _0x1523c2) {
                return _0x28a5bb(_0x3a0b7c, _0x1523c2);
            },
            'LwtRL': function (_0x319509, _0x4594d1) {
                return _0x319509(_0x4594d1);
            },
            'AQQdN': function (_0x25f42d, _0x2e7771) {
                return _0x25f42d(_0x2e7771);
            },
            'MDWKH': function (_0x2ae8da, _0x336ffd) {
                return _0x2ae8da(_0x336ffd);
            },
            'rkZHO': function (_0x248a19, _0xec821e) {
                return _0x248a19 === _0xec821e;
            },
            'YdBIJ': function (_0xe62300, _0x45a04f) {
                return _0xe62300 === _0x45a04f;
            },
            'yHRry': function (_0xfe0698, _0x148433) {
                return _0xfe0698 > _0x148433;
            },
            'urFAV': function (_0x2317f9, _0x174687) {
                return _0x2317f9(_0x174687);
            },
            'BrJoK': function (_0x33f3c4, _0x376b80) {
                return _0x33f3c4 === _0x376b80;
            },
            'wpKxo': function (_0x3eee74, _0x397f12, _0x10ef19) {
                return _0x3eee74(_0x397f12, _0x10ef19);
            },
            'DhCTo': _0x45c9c2(0x248),
            'BGOVz': _0x45c9c2(0x81b),
            'ZwVfY': function (_0x4b2286, _0x330349) {
                return _0x4b2286 === _0x330349;
            },
            'rMLVR': _0x45c9c2(0x21e),
            'gjtCH': 'stricken',
            'IlSYO': 'Target\x20is\x20STRICKEN\x20(Right-click\x20card\x20to\x20unmark)',
            'etYVi': _0x45c9c2(0x1ec),
            'kyiHs': _0x45c9c2(0x445),
            'FnRUg': _0x45c9c2(0x712),
            'NDKes': _0x45c9c2(0x7ef),
            'btrwn': _0x45c9c2(0x707),
            'HNPYL': _0x45c9c2(0x796),
            'tVHhk': function (_0x4aa172, _0x50f187) {
                return _0x4aa172 === _0x50f187;
            },
            'NsnDh': _0x45c9c2(0x8c7),
            'zUGvb': 'unlimited',
            'bmjxB': function (_0x8716e7, _0x2775e7) {
                return _0x8716e7 === _0x2775e7;
            },
            'QhCPt': _0x45c9c2(0x570),
            'poXqy': _0x45c9c2(0x1c5),
            'lhupD': _0x45c9c2(0x786),
            'LqguA': 'ready',
            'ImibN': _0x45c9c2(0x502),
            'KMWcw': _0x45c9c2(0x389),
            'wUhrS': _0x45c9c2(0x411),
            'aqJrd': function (_0x56fee3, _0x33a103) {
                return _0x56fee3 === _0x33a103;
            },
            'ZLjvO': function (_0x3b1622, _0x5beff1) {
                return _0x3b1622(_0x5beff1);
            },
            'JCOUX': function (_0x33a688, _0x4a96bd) {
                return _0x33a688(_0x4a96bd);
            },
            'uInuG': function (_0x35f190, _0x197b3e) {
                return _0x35f190 !== _0x197b3e;
            },
            'UjykT': function (_0x2fcc0c, _0x359a53) {
                return _0x2fcc0c - _0x359a53;
            },
            'qGmch': function (_0x16d9c1, _0x595335) {
                return _0x16d9c1(_0x595335);
            },
            'GZwsp': function (_0x1c6365, _0x5e9d74) {
                return _0x1c6365(_0x5e9d74);
            },
            'KozJD': function (_0x2182be, _0x285d55) {
                return _0x2182be === _0x285d55;
            },
            'bbqLJ': _0x45c9c2(0x59d),
            'aszIG': function (_0x4203f0, _0x57487c) {
                return _0x4203f0 === _0x57487c;
            },
            'DKWFI': _0x45c9c2(0x6f8),
            'WltBm': _0x45c9c2(0x697),
            'awqBB': _0x45c9c2(0x90e),
            'rlTtc': _0x45c9c2(0x31e),
            'IfaIT': function (_0x2841ee, _0x428dfb) {
                return _0x2841ee >= _0x428dfb;
            },
            'vhCzB': function (_0x4a12ed) {
                return _0x4a12ed();
            },
            'rjFjQ': function (_0x2ea3e0, _0x3b6328) {
                return _0x2ea3e0(_0x3b6328);
            },
            'wbJUp': '4|5|1|2|6|7|3|0',
            'ypneK': _0x45c9c2(0x3d5),
            'JTnjF': _0x45c9c2(0x423),
            'DyYkX': _0x45c9c2(0x67c),
            'FyCxL': _0x45c9c2(0x7fc),
            'Ndyfa': function (_0x2e8e83) {
                return _0x2e8e83();
            },
            'TVbMT': _0x45c9c2(0x3f2),
            'pbgqM': '.links-top-wrap,\x20.user-information\x20.title-black,\x20.user-information\x20h4',
            'blSKq': function (_0x14a0ad) {
                return _0x14a0ad();
            },
            'cufuU': function (_0x48ca5c, _0xd7735d) {
                return _0x48ca5c === _0xd7735d;
            },
            'rMhUt': function (_0x32f02c, _0x4c84d0) {
                return _0x32f02c <= _0x4c84d0;
            },
            'uplQg': function (_0x43099b, _0x4a3543) {
                return _0x43099b - _0x4a3543;
            },
            'hScqO': function (_0x52888a) {
                return _0x52888a();
            },
            'HeLbv': function (_0x10fa67) {
                return _0x10fa67();
            },
            'sDWpH': function (_0x3e4f87, _0x5057f0) {
                return _0x3e4f87(_0x5057f0);
            },
            'pNDzw': function (_0x4d1037, _0x453e4b) {
                return _0x4d1037 === _0x453e4b;
            },
            'iakWY': _0x45c9c2(0x5f6),
            'BNAWl': _0x45c9c2(0x8eb),
            'FRqVn': 'start',
            'lUkKY': _0x45c9c2(0x977),
            'aGoxc': function (_0x32fdbf, _0x26d2ea, _0x165d85) {
                return _0x32fdbf(_0x26d2ea, _0x165d85);
            },
            'AVMDp': _0x45c9c2(0x3c0),
            'wXpEO': function (_0x2e6cf8, _0x4dfce2) {
                return _0x2e6cf8(_0x4dfce2);
            },
            'tfFIC': function (_0x30e91e) {
                return _0x30e91e();
            },
            'iGGjC': function (_0x5cb556, _0x391e65) {
                return _0x5cb556 === _0x391e65;
            },
            'pLDhr': function (_0x593fdb) {
                return _0x593fdb();
            },
            'nlKqY': _0x45c9c2(0x395),
            'ryrsJ': function (_0x2f894c, _0x28db6d, _0xcce28a) {
                return _0x2f894c(_0x28db6d, _0xcce28a);
            },
            'EAWbo': function (_0x282ce4, _0x2b210c, _0x26c726) {
                return _0x282ce4(_0x2b210c, _0x26c726);
            },
            'EPOlW': function (_0x170ae7) {
                return _0x170ae7();
            },
            'GzmJB': _0x45c9c2(0x9bb),
            'oyuMR': 'Merogie',
            'ldcZd': 'Faction\x20Watch',
            'VgIBQ': _0x45c9c2(0x7d6),
            'LzurV': function (_0x47cc23, _0x1a5038) {
                return _0x47cc23 * _0x1a5038;
            },
            'UfbEI': _0x45c9c2(0x3af),
            'wcdIm': _0x45c9c2(0x76e),
            'pWiSk': _0x45c9c2(0x2e6),
            'tfLTG': 'ack',
            'frSNs': _0x45c9c2(0x673),
            'GWfse': function (_0x4ea5a8, _0x2b6dad, _0x12654f) {
                return _0x4ea5a8(_0x2b6dad, _0x12654f);
            },
            'PYuNw': function (_0x5d95c4, _0x34c8aa) {
                return _0x5d95c4 - _0x34c8aa;
            },
            'PXRUW': function (_0x4f7454, _0x46c443, _0x3c57f4) {
                return _0x4f7454(_0x46c443, _0x3c57f4);
            },
            'iRTUQ': function (_0x4bc655, _0x41ef1e) {
                return _0x4bc655 !== _0x41ef1e;
            },
            'JsCis': function (_0x4780ef, _0x39dc93, _0x2363f3) {
                return _0x4780ef(_0x39dc93, _0x2363f3);
            },
            'eyGuk': _0x45c9c2(0x816),
            'fOTXE': _0x45c9c2(0x8ec),
            'QOuAX': 'STANDARD',
            'nDgTW': _0x45c9c2(0x93c),
            'gbnNA': _0x45c9c2(0x472),
            'KGepG': function (_0xc6f99f, _0x4e6640, _0x5ae6cf) {
                return _0xc6f99f(_0x4e6640, _0x5ae6cf);
            },
            'coKzA': function (_0x2d7517) {
                return _0x2d7517();
            }
        };
    if (window[_0x45c9c2(0x8df)] || document[_0x45c9c2(0x442)][_0x45c9c2(0x63e)][_0x45c9c2(0x595)])
        return;
    window[_0x45c9c2(0x8df)] = !![], document['documentElement'][_0x45c9c2(0x63e)]['stakeoutRadar'] = '1';
    const _0x38ffeb = _0x45c9c2(0x1ae), _0x7b549c = 'https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_mercenary_stakeout.user.js', _0x2078d8 = _0x45c9c2(0x702), _0x1844e3 = 0x1;
    function _0x40d4da(_0x133079) {
        const _0x45b15b = _0x45c9c2;
        try {
            const _0x608e6 = document[_0x45b15b(0x24c)](_0x45b15b(0x471));
            if (_0x608e6)
                _0x608e6[_0x45b15b(0x8e2)]();
            const _0xcdd113 = document[_0x45b15b(0x74a)](_0x1f060e[_0x45b15b(0x7e4)]);
            _0xcdd113['id'] = 'stakeout-toast', _0xcdd113[_0x45b15b(0x96f)] = _0x1f060e[_0x45b15b(0x3ae)](typeof _0x59e0bf, _0x45b15b(0x794)) && _0x59e0bf[_0x45b15b(0x3c8)] === _0x45b15b(0x231) ? _0x45b15b(0x2c6) : _0x45b15b(0x7cd), _0xcdd113[_0x45b15b(0x75a)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + _0x133079 + _0x45b15b(0x1d6);
            const _0x24c93f = _0xcdd113['querySelector'](_0x45b15b(0x3db));
            if (_0x24c93f)
                _0x24c93f[_0x45b15b(0x606)] = () => _0xcdd113[_0x45b15b(0x8e2)]();
            document['body'][_0x45b15b(0x9c0)](_0xcdd113), _0x1f060e['pqxrh'](setTimeout, () => {
                const _0x53a010 = _0x45b15b;
                if (_0xcdd113[_0x53a010(0x792)])
                    _0xcdd113[_0x53a010(0x8e2)]();
            }, 0xfa0);
        } catch (_0x340a2b) {
            console[_0x45b15b(0x2a2)]('[Stakeout\x20Toast]', _0x133079);
        }
    }
    function _0x5aa087(_0x4eec18, _0x4ac076) {
        const _0x52f82f = _0x45c9c2, _0x3f0501 = _0x1f060e['nhIpQ'](String, _0x4eec18)['split']('.')[_0x52f82f(0x6fe)](_0x497687 => parseInt(_0x497687, 0xa) || 0x0), _0x4fa8bf = String(_0x4ac076)[_0x52f82f(0x3b6)]('.')[_0x52f82f(0x6fe)](_0x1a7849 => parseInt(_0x1a7849, 0xa) || 0x0), _0x9033ec = Math['max'](_0x3f0501[_0x52f82f(0x453)], _0x4fa8bf[_0x52f82f(0x453)]);
        for (let _0xc36f1e = 0x0; _0xc36f1e < _0x9033ec; _0xc36f1e++) {
            const _0x408523 = _0x3f0501[_0xc36f1e] || 0x0, _0x158a66 = _0x4fa8bf[_0xc36f1e] || 0x0;
            if (_0x408523 > _0x158a66)
                return !![];
            if (_0x1f060e[_0x52f82f(0x879)](_0x408523, _0x158a66))
                return ![];
        }
        return ![];
    }
    function _0x1cb3eb(_0x1b98c9 = ![]) {
        const _0x804691 = _0x45c9c2, _0x144845 = {
                'AUTDv': function (_0x3459a6, _0x6c50a9) {
                    const _0x5e332f = _0xf22e;
                    return _0x1f060e[_0x5e332f(0x3ae)](_0x3459a6, _0x6c50a9);
                },
                'kxQpQ': function (_0x4fcfd2, _0x2cf668) {
                    return _0x4fcfd2(_0x2cf668);
                },
                'vslLn': _0x804691(0x4f4),
                'OFduf': _0x1f060e[_0x804691(0x567)]
            };
        _0x1b98c9 && _0x40d4da(_0x804691(0x4e0));
        const _0x3d59c4 = _0x2078d8 + '?t=' + Date[_0x804691(0x903)](), _0x54f9ed = _0x125cc4 => {
                const _0x28c620 = _0x804691;
                try {
                    const _0x2e816d = _0x125cc4[_0x28c620(0x772)](/@version\s+([0-9.]+)/);
                    if (!_0x2e816d) {
                        if (_0x1b98c9)
                            _0x1f060e[_0x28c620(0x36d)](_0x40d4da, _0x1f060e[_0x28c620(0x85a)]);
                        return;
                    }
                    const _0x145424 = _0x2e816d[0x1][_0x28c620(0x76a)]();
                    _0x299b4c(_0x28c620(0x1d5), Date[_0x28c620(0x903)]()), _0x299b4c('latest_remote_version', _0x145424), _0x1f060e[_0x28c620(0x820)](_0x5aa087, _0x145424, _0x38ffeb) ? _0x3ee66e(_0x145424, _0x1b98c9) : _0x1b98c9 && _0x40d4da('✅\x20You\x20are\x20using\x20the\x20latest\x20version\x20(v' + _0x38ffeb + ')!');
                } catch (_0x3e6421) {
                    console['error'](_0x28c620(0x3ec), _0x3e6421);
                    if (_0x1b98c9)
                        _0x40d4da(_0x28c620(0x4a8) + _0x3e6421[_0x28c620(0x75f)]);
                }
            };
        _0x1f060e['tDPcP'](typeof GM_xmlhttpRequest, _0x804691(0x526)) ? _0x1f060e[_0x804691(0x930)](GM_xmlhttpRequest, {
            'method': 'GET',
            'url': _0x3d59c4,
            'headers': {
                'Cache-Control': _0x1f060e['IdNfm'],
                'Pragma': 'no-cache'
            },
            'onload': function (_0x5d7ca7) {
                const _0x310d2b = _0x804691;
                if (_0x144845[_0x310d2b(0x456)](_0x5d7ca7[_0x310d2b(0x56d)], 0xc8) && _0x5d7ca7[_0x310d2b(0x31b)])
                    _0x54f9ed(_0x5d7ca7[_0x310d2b(0x31b)]);
                else {
                    if (_0x1b98c9)
                        _0x144845[_0x310d2b(0x1f8)](_0x40d4da, _0x310d2b(0x8cc) + _0x5d7ca7['status'] + ')');
                }
            },
            'onerror': function (_0x5a5408) {
                const _0xd03d55 = _0x804691, _0x30443f = {
                        'OfAgQ': function (_0x30097f, _0x3f494d) {
                            const _0x15845e = _0xf22e;
                            return _0x144845[_0x15845e(0x1f8)](_0x30097f, _0x3f494d);
                        },
                        'rIqEf': _0xd03d55(0x627)
                    };
                console[_0xd03d55(0x674)]('[Stakeout]\x20GM_xmlhttpRequest\x20error,\x20trying\x20fetch\x20fallback:', _0x5a5408);
                const _0x14e6af = {};
                _0x14e6af['cache'] = _0x144845['vslLn'], fetch(_0x3d59c4, _0x14e6af)[_0xd03d55(0x3f9)](_0x11e051 => _0x11e051['text']())['then'](_0x54f9ed)[_0xd03d55(0x2af)](() => {
                    const _0x1d3193 = _0xd03d55;
                    if (_0x1b98c9)
                        _0x30443f[_0x1d3193(0x6cc)](_0x40d4da, _0x30443f[_0x1d3193(0x590)]);
                });
            }
        }) : _0x1f060e[_0x804691(0x820)](fetch, _0x3d59c4, { 'cache': _0x1f060e[_0x804691(0x52b)] })[_0x804691(0x3f9)](_0x304b56 => {
            const _0x5e3180 = _0x804691;
            if (!_0x304b56['ok'])
                throw new Error(_0x5e3180(0x3b4) + _0x304b56[_0x5e3180(0x56d)]);
            return _0x304b56[_0x5e3180(0x29c)]();
        })[_0x804691(0x3f9)](_0x54f9ed)[_0x804691(0x2af)](_0x26a4a9 => {
            const _0x5d989c = _0x804691;
            console[_0x5d989c(0x674)](_0x144845[_0x5d989c(0x8e1)], _0x26a4a9);
            if (_0x1b98c9)
                _0x40d4da(_0x5d989c(0x627));
        });
    }
    function _0x3ee66e(_0x3f1e73, _0x22f68d = ![]) {
        const _0x206dfc = _0x45c9c2;
        try {
            const _0x5650e1 = _0x206dfc(0x3b3) + _0x3f1e73;
            if (!_0x22f68d && sessionStorage[_0x206dfc(0x693)](_0x5650e1))
                return;
            if (document['getElementById'](_0x206dfc(0x831)) || !document['body'])
                return;
            const _0xfe9ee0 = document[_0x206dfc(0x74a)](_0x206dfc(0x437));
            _0xfe9ee0['id'] = _0x206dfc(0x831), _0xfe9ee0[_0x206dfc(0x253)][_0x206dfc(0x8e3)] = _0x1f060e[_0x206dfc(0x7b2)](_0x206dfc(0x9a2) + 'background:\x20rgba(15,\x2023,\x2042,\x200.97);\x20border:\x201px\x20solid\x20#38bdf8;\x20color:\x20#e2e8f0;\x20border-radius:\x208px;\x20padding:\x206px\x2010px;\x20', 'font:\x20600\x2012px\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20sans-serif;\x20box-shadow:\x200\x204px\x2018px\x20rgba(0,\x200,\x200,\x200.6);'), _0xfe9ee0[_0x206dfc(0x75a)] = _0x206dfc(0x880) + _0x3f1e73 + _0x206dfc(0x5a2) + _0x38ffeb + ')</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20data-act=\x22update\x22\x20href=\x22' + _0x7b549c + _0x206dfc(0x266), _0xfe9ee0[_0x206dfc(0x606)] = _0x11d63b => {
                const _0x19d7ee = _0x206dfc, _0x48f40a = _0x11d63b[_0x19d7ee(0x283)]?.['dataset']?.[_0x19d7ee(0x2e8)];
                if (_0x48f40a === _0x19d7ee(0x5df))
                    _0x1f060e[_0x19d7ee(0x45a)](_0x40d4da, _0x19d7ee(0x220) + _0x3f1e73 + _0x19d7ee(0x39b));
                else {
                    if (_0x48f40a === _0x19d7ee(0x1f2)) {
                        try {
                            sessionStorage[_0x19d7ee(0x47c)](_0x5650e1, '1');
                        } catch (_0x30d5e5) {
                        }
                        _0xfe9ee0[_0x19d7ee(0x8e2)]();
                    }
                }
            }, document[_0x206dfc(0x299)][_0x206dfc(0x9c0)](_0xfe9ee0);
        } catch (_0x24d375) {
            console[_0x206dfc(0x5d6)](_0x1f060e['eCDyE'], _0x24d375);
        }
    }
    function _0x1a5bf4() {
        const _0x5409e5 = _0x45c9c2;
        try {
            const _0x1f53b6 = _0x3589e4(_0x5409e5(0x873), null);
            if (_0x1f53b6 && _0x5aa087(_0x1f53b6, _0x38ffeb))
                _0x3ee66e(_0x1f53b6);
            const _0x4a8d1e = _0x3589e4(_0x5409e5(0x1d5), 0x0);
            _0x1f060e['QHdwq'](Date['now']() - _0x4a8d1e, 0x1e * 0x3e8) && (_0x299b4c(_0x1f060e[_0x5409e5(0x357)], Date[_0x5409e5(0x903)]()), _0x1cb3eb(![]));
        } catch (_0x1f07bd) {
        }
    }
    function _0x551e6b(_0x4878d7) {
        const _0x2f866a = _0x45c9c2;
        try {
            if (typeof GM_addStyle === _0x1f060e[_0x2f866a(0x270)])
                GM_addStyle(_0x4878d7);
            else {
                const _0x7da414 = document[_0x2f866a(0x74a)]('style');
                _0x7da414['type'] = _0x2f866a(0x2de), _0x7da414[_0x2f866a(0x86b)] = _0x4878d7, (document[_0x2f866a(0x30d)] || document[_0x2f866a(0x442)])['appendChild'](_0x7da414);
            }
        } catch (_0x29c6f4) {
            console['error']('[Stakeout]\x20Style\x20error:', _0x29c6f4);
        }
    }
    function _0x3589e4(_0x50d1c3, _0x23a9b8) {
        const _0x108a2d = _0x45c9c2;
        try {
            if (typeof GM_getValue === _0x1f060e[_0x108a2d(0x270)]) {
                const _0xe6272f = GM_getValue(_0x50d1c3, null);
                if (_0x1f060e[_0x108a2d(0x429)](_0xe6272f, null) && _0xe6272f !== undefined)
                    return _0xe6272f;
            }
        } catch (_0x32cb0b) {
        }
        try {
            const _0x1ff67b = localStorage[_0x108a2d(0x693)](_0x108a2d(0x3fb) + _0x50d1c3);
            if (_0x1ff67b !== null && _0x1ff67b !== undefined)
                try {
                    return JSON[_0x108a2d(0x2a6)](_0x1ff67b);
                } catch (_0x2f3e2c) {
                    return _0x1ff67b;
                }
        } catch (_0x1f2992) {
        }
        return _0x23a9b8;
    }
    function _0x299b4c(_0x274427, _0x40db12) {
        const _0x37ae02 = _0x45c9c2;
        try {
            if (typeof GM_setValue === _0x37ae02(0x526))
                _0x1f060e[_0x37ae02(0x688)](GM_setValue, _0x274427, _0x40db12);
        } catch (_0x41458c) {
        }
        try {
            localStorage[_0x37ae02(0x47c)](_0x37ae02(0x3fb) + _0x274427, JSON['stringify'](_0x40db12));
        } catch (_0x4751c6) {
        }
    }
    function _0x3d65bb() {
        const _0x313127 = _0x45c9c2;
        try {
            const _0xb19b55 = _0x1f060e[_0x313127(0x429)](typeof unsafeWindow, _0x313127(0x93c)) ? unsafeWindow : window;
            if (_0xb19b55[_0x313127(0x32e)] && _0xb19b55[_0x313127(0x32e)][_0x313127(0x2e3)]) {
                const _0x2c7699 = _0xb19b55[_0x313127(0x32e)]['user'];
                if (_0x2c7699['id'])
                    return String(_0x2c7699['id']);
                if (_0x2c7699[_0x313127(0x57f)])
                    return _0x1f060e['FSNbe'](String, _0x2c7699[_0x313127(0x57f)]);
            }
        } catch (_0x70ccc4) {
        }
        try {
            const _0x86e5b = document[_0x313127(0x7a3)][_0x313127(0x772)](/(?:^|;\s*)uid=(\d+)/);
            if (_0x86e5b && _0x86e5b[0x1])
                return _0x1f060e[_0x313127(0x930)](String, _0x86e5b[0x1]);
        } catch (_0xcbeac6) {
        }
        try {
            const _0x4c264f = document[_0x313127(0x1e3)](_0x1f060e[_0x313127(0x6d1)](_0x1f060e[_0x313127(0x6d1)](_0x313127(0x2a8), _0x313127(0x4e4)), _0x1f060e[_0x313127(0x70c)])), _0x49e7a8 = _0x4c264f?.[_0x313127(0x5f7)]?.[_0x313127(0x772)](/XID=(\d+)/i);
            if (_0x49e7a8 && _0x49e7a8[0x1])
                return _0x1f060e[_0x313127(0x4c7)](String, _0x49e7a8[0x1]);
        } catch (_0x4fb359) {
        }
        try {
            const _0x4fe901 = document[_0x313127(0x24c)](_0x313127(0x663));
            if (_0x4fe901 && _0x4fe901[_0x313127(0x814)]) {
                const _0x4caf32 = JSON[_0x313127(0x2a6)](_0x4fe901['value']);
                if (_0x4caf32 && _0x4caf32['id'])
                    return String(_0x4caf32['id']);
            }
        } catch (_0x359fb2) {
        }
        return null;
    }
    function _0xd6d7e5() {
        const _0x72038d = _0x45c9c2;
        try {
            const _0x15a63 = typeof unsafeWindow !== _0x72038d(0x93c) ? unsafeWindow : window;
            if (_0x15a63[_0x72038d(0x32e)] && _0x15a63[_0x72038d(0x32e)][_0x72038d(0x2e3)]) {
                const _0x3f02f3 = _0x15a63['topBannerInitData'][_0x72038d(0x2e3)], _0x297da9 = _0x3f02f3[_0x72038d(0x589)] || _0x3f02f3[_0x72038d(0x40e)] || _0x3f02f3[_0x72038d(0x91a)] || _0x3f02f3[_0x72038d(0x35d)];
                if (_0x297da9 && typeof _0x297da9 === _0x72038d(0x531) && _0x1f060e['unFCM'](_0x297da9[_0x72038d(0x76a)]()[_0x72038d(0x453)], 0x0)) {
                    const _0xe71058 = _0x297da9[_0x72038d(0x76a)]();
                    if (_0x1f060e[_0x72038d(0x429)](_0xe71058[_0x72038d(0x626)](), _0x1f060e[_0x72038d(0x315)]) && _0xe71058['toLowerCase']() !== _0x72038d(0x4dd))
                        return _0x299b4c(_0x1f060e['bPmKq'], _0xe71058), _0xe71058;
                }
            }
        } catch (_0x26157d) {
        }
        try {
            const _0x2fa14e = [
                _0x72038d(0x9c4),
                _0x72038d(0x957),
                _0x1f060e[_0x72038d(0x81e)],
                '#sidebarroot\x20[class*=\x22userInfo\x22]\x20a',
                _0x1f060e[_0x72038d(0x563)],
                _0x72038d(0x4d3),
                _0x1f060e['EbYKb']
            ];
            for (const _0x465a95 of _0x2fa14e) {
                const _0x1f7f5a = document[_0x72038d(0x1e3)](_0x465a95);
                if (_0x1f7f5a && _0x1f7f5a[_0x72038d(0x86b)]) {
                    const _0x3f6ab4 = _0x1f7f5a[_0x72038d(0x86b)][_0x72038d(0x76a)]()['replace'](/\s*\[\d+\]\s*$/, '')[_0x72038d(0x76a)]();
                    if (_0x3f6ab4 && _0x3f6ab4['length'] >= 0x2 && _0x1f060e[_0x72038d(0x429)](_0x3f6ab4[_0x72038d(0x626)](), _0x1f060e[_0x72038d(0x315)]) && _0x3f6ab4['toLowerCase']() !== _0x72038d(0x4dd) && !_0x3f6ab4[_0x72038d(0x67b)]('Torn'))
                        return _0x1f060e['pqxrh'](_0x299b4c, _0x72038d(0x2f2), _0x3f6ab4), _0x3f6ab4;
                }
            }
        } catch (_0xf6e978) {
        }
        try {
            const _0x5e4d02 = document[_0x72038d(0x1e3)](_0x72038d(0x287));
            if (_0x5e4d02 && _0x5e4d02[_0x72038d(0x86b)]) {
                const _0x3e18da = _0x5e4d02['textContent'][_0x72038d(0x76a)]()[_0x72038d(0x1c4)](/\s*\[\d+\]\s*$/, '')[_0x72038d(0x76a)]();
                if (_0x3e18da && _0x3e18da[_0x72038d(0x626)]() !== _0x72038d(0x98a) && _0x3e18da[_0x72038d(0x626)]() !== _0x1f060e['bYOHg'])
                    return _0x299b4c(_0x72038d(0x2f2), _0x3e18da), _0x3e18da;
            }
        } catch (_0x5df233) {
        }
        const _0x56f01f = _0x3589e4(_0x72038d(0x2f2), null);
        if (_0x56f01f && typeof _0x56f01f === _0x1f060e[_0x72038d(0x751)] && _0x56f01f[_0x72038d(0x76a)]()[_0x72038d(0x453)] > 0x0) {
            const _0x4b1a4f = _0x56f01f[_0x72038d(0x76a)]();
            if (_0x1f060e[_0x72038d(0x5a5)](_0x4b1a4f[_0x72038d(0x626)](), _0x72038d(0x98a)) && _0x1f060e[_0x72038d(0x429)](_0x4b1a4f[_0x72038d(0x626)](), _0x72038d(0x4dd)))
                return _0x4b1a4f;
        }
        return null;
    }
    const _0x53240f = _0x45c9c2(0x63d), _0x274af7 = _0x1f060e[_0x45c9c2(0x7a9)], _0x4e7490 = {};
    _0x4e7490[_0x45c9c2(0x42c)] = 0x3ddf12, _0x4e7490[_0x45c9c2(0x589)] = _0x1f060e[_0x45c9c2(0x84f)];
    const _0x3b91f1 = _0x4e7490, _0x1ef474 = 0x1, _0x947a7e = {};
    _0x947a7e[_0x45c9c2(0x572)] = 'SP', _0x947a7e[_0x45c9c2(0x80c)] = 'sp', _0x947a7e['icon'] = '🎯', _0x947a7e[_0x45c9c2(0x589)] = _0x45c9c2(0x6c9), _0x947a7e[_0x45c9c2(0x40a)] = _0x45c9c2(0x4b4);
    const _0x185737 = {};
    _0x185737['code'] = 'FW', _0x185737[_0x45c9c2(0x80c)] = 'fw', _0x185737[_0x45c9c2(0x3ed)] = '🏴', _0x185737[_0x45c9c2(0x589)] = _0x1f060e[_0x45c9c2(0x3fd)], _0x185737[_0x45c9c2(0x40a)] = 'Turtle\x20contracts:\x20eligible\x20members\x20of\x20a\x20client\x20faction,\x20weapon\x20reminders\x20and\x20an\x20attack-screen\x20eligibility\x20check.';
    const _0x4a1ab5 = {};
    _0x4a1ab5[_0x45c9c2(0x572)] = 'CK', _0x4a1ab5[_0x45c9c2(0x80c)] = 'ck', _0x4a1ab5[_0x45c9c2(0x3ed)] = '🔗', _0x4a1ab5['name'] = _0x45c9c2(0x3f3), _0x4a1ab5['desc'] = _0x45c9c2(0x812);
    const _0x32a0ec = {};
    _0x32a0ec[_0x45c9c2(0x572)] = 'TW', _0x32a0ec['feature'] = 'tw', _0x32a0ec[_0x45c9c2(0x3ed)] = '💼', _0x32a0ec[_0x45c9c2(0x589)] = _0x45c9c2(0x422), _0x32a0ec[_0x45c9c2(0x40a)] = _0x1f060e['VgIBQ'];
    const _0x3e7223 = [
            _0x947a7e,
            _0x185737,
            _0x4a1ab5,
            _0x32a0ec
        ], _0x41fc30 = _0x1f060e[_0x45c9c2(0x43a)](0x6 * 0xe10, 0x3e8), _0x2a402a = 0x1e * 0x3e8, _0x106362 = 0xa * 0x3c * 0x3e8, _0x23a399 = {};
    _0x23a399['verified'] = ![], _0x23a399['pid'] = null, _0x23a399[_0x45c9c2(0x488)] = {}, _0x23a399[_0x45c9c2(0x536)] = 0x0;
    let _0xbeb485 = _0x23a399, _0x102ef1 = _0x1f060e['yQxnk'](_0x3589e4, _0x1f060e[_0x45c9c2(0x339)], null), _0x265564 = ![];
    const _0x390f7e = _0x1f060e['hUjyI'](0x2 * 0x3c, 0x3e8);
    function _0x1278a1(_0x159736) {
        const _0x39f50a = _0x45c9c2;
        if (_0x1f060e[_0x39f50a(0x496)](_0x3589e4, _0x39f50a(0x298), '') !== _0x159736)
            _0x1f060e[_0x39f50a(0x7ae)](_0x299b4c, _0x1f060e[_0x39f50a(0x345)], _0x159736);
    }
    let _0x274700 = 0x0;
    function _0x26cf04() {
        const _0x3e3fa2 = _0x45c9c2;
        return !/REPLACE_WITH/[_0x3e3fa2(0x5eb)](_0x53240f) && !/REPLACE_WITH/[_0x3e3fa2(0x5eb)](_0x274af7);
    }
    function _0x44a67c(_0x2f7f5a) {
        const _0x317cdc = _0x45c9c2, _0x3576ba = _0x1f060e[_0x317cdc(0x37a)](String, _0x2f7f5a)[_0x317cdc(0x1c4)](/-/g, '+')[_0x317cdc(0x1c4)](/_/g, '/'), _0x17be69 = atob(_0x1f060e[_0x317cdc(0x79e)](_0x3576ba, '='[_0x317cdc(0x29b)](_0x1f060e[_0x317cdc(0x2b2)](0x4 - _0x3576ba[_0x317cdc(0x453)] % 0x4, 0x4))));
        return Uint8Array['from'](_0x17be69, _0x2418f2 => _0x2418f2[_0x317cdc(0x665)](0x0));
    }
    async function _0x478b9d(_0x3eb462) {
        const _0xdcb0b5 = _0x45c9c2;
        try {
            const [_0x282d70, _0x2a2ce5] = String(_0x3eb462 || '')[_0xdcb0b5(0x3b6)]('.');
            if (!_0x282d70 || !_0x2a2ce5 || !_0x1f060e[_0xdcb0b5(0x239)](_0x26cf04))
                return null;
            const _0x517128 = {};
            _0x517128[_0xdcb0b5(0x589)] = _0x1f060e[_0xdcb0b5(0x215)], _0x517128[_0xdcb0b5(0x662)] = _0xdcb0b5(0x996);
            const _0x46ab36 = await crypto[_0xdcb0b5(0x375)][_0xdcb0b5(0x958)](_0xdcb0b5(0x1af), _0x44a67c(_0x274af7), _0x517128, ![], [_0xdcb0b5(0x99f)]), _0x1f228e = {};
            _0x1f228e['name'] = _0xdcb0b5(0x990), _0x1f228e['hash'] = _0xdcb0b5(0x4a3);
            const _0x52099d = await crypto[_0xdcb0b5(0x375)][_0xdcb0b5(0x99f)](_0x1f228e, _0x46ab36, _0x1f060e[_0xdcb0b5(0x4c7)](_0x44a67c, _0x2a2ce5), new TextEncoder()[_0xdcb0b5(0x718)](_0x282d70));
            return _0x52099d ? JSON['parse'](new TextDecoder()[_0xdcb0b5(0x8ba)](_0x44a67c(_0x282d70))) : null;
        } catch (_0x457ffa) {
            return null;
        }
    }
    async function _0x54e2ea(_0xd3e7a2) {
        const _0x74e797 = _0x45c9c2, _0x2e0f27 = await _0x478b9d(_0xd3e7a2), _0x318b77 = Math[_0x74e797(0x306)](Date[_0x74e797(0x903)]() / 0x3e8), _0x159514 = _0x3d65bb(), _0x2f5798 = Boolean(_0x2e0f27) && _0x1f060e['unFCM'](_0x2e0f27[_0x74e797(0x536)], _0x318b77) && Boolean(_0x102ef1) && String(_0x2e0f27[_0x74e797(0x42c)]) === _0x1f060e[_0x74e797(0x678)](String, _0x102ef1['pid']) && (!_0x159514 || _0x1f060e[_0x74e797(0x36d)](String, _0x159514) === _0x1f060e[_0x74e797(0x910)](String, _0x2e0f27[_0x74e797(0x42c)]));
        if (_0x2f5798) {
            const _0x148d20 = {};
            _0x148d20['verified'] = !![], _0x148d20[_0x74e797(0x42c)] = _0x2e0f27[_0x74e797(0x42c)], _0x148d20[_0x74e797(0x488)] = _0x2e0f27[_0x74e797(0x488)] || {}, _0x148d20[_0x74e797(0x536)] = _0x2e0f27[_0x74e797(0x536)], _0xbeb485 = _0x148d20;
        } else {
            const _0x2ba342 = {};
            _0x2ba342[_0x74e797(0x900)] = ![], _0x2ba342[_0x74e797(0x42c)] = null, _0x2ba342[_0x74e797(0x488)] = {}, _0x2ba342[_0x74e797(0x536)] = 0x0, _0xbeb485 = _0x2ba342;
        }
        return _0x2f5798;
    }
    function _0x8844b1(_0x299d83) {
        const _0x305d7f = _0x45c9c2, _0x134734 = Math['floor'](_0x1f060e[_0x305d7f(0x300)](Date[_0x305d7f(0x903)](), 0x3e8));
        if (!_0xbeb485['verified'] || _0x1f060e['XwbLH'](_0xbeb485[_0x305d7f(0x536)], _0x134734))
            return 0x0;
        const _0x2037c7 = _0xbeb485[_0x305d7f(0x488)][_0x299d83] || 0x0;
        return _0x2037c7 > _0x134734 ? _0x2037c7 : 0x0;
    }
    function _0x32bfce(_0x20887d) {
        const _0x3e4be2 = _0x45c9c2;
        return _0x1f060e['QHdwq'](_0x1f060e[_0x3e4be2(0x678)](_0x8844b1, _0x20887d), 0x0);
    }
    function _0x5c537c() {
        const _0x24e688 = _0x45c9c2;
        return _0x3e7223[_0x24e688(0x26f)](_0x56aa2a => _0x32bfce(_0x56aa2a[_0x24e688(0x80c)]));
    }
    function _0x1f08f9(_0xd818a5) {
        const _0x38788c = _0x45c9c2, _0x51fbe4 = {
                'gcSJs': function (_0x26b84c, _0x4db2e1) {
                    return _0x26b84c(_0x4db2e1);
                },
                'pKGIf': _0x1f060e[_0x38788c(0x270)]
            };
        return new Promise(_0x21fb5e => {
            const _0x27d9e5 = _0x38788c, _0x1bb7b8 = '' + _0x53240f + _0xd818a5, _0x513ebc = _0x2e4199 => {
                    const _0x4b5cea = _0xf22e;
                    try {
                        _0x51fbe4[_0x4b5cea(0x8ab)](_0x21fb5e, JSON[_0x4b5cea(0x2a6)](_0x2e4199));
                    } catch (_0x5a5eee) {
                        _0x21fb5e(null);
                    }
                };
            typeof GM_xmlhttpRequest === _0x51fbe4[_0x27d9e5(0x82b)] ? _0x51fbe4[_0x27d9e5(0x8ab)](GM_xmlhttpRequest, {
                'method': _0x27d9e5(0x6cf),
                'url': _0x1bb7b8,
                'timeout': 0x3a98,
                'onload': _0x197edc => _0x197edc[_0x27d9e5(0x56d)] === 0xc8 ? _0x513ebc(_0x197edc['responseText']) : _0x21fb5e(null),
                'onerror': () => _0x21fb5e(null),
                'ontimeout': () => _0x21fb5e(null)
            }) : _0x51fbe4[_0x27d9e5(0x8ab)](fetch, _0x1bb7b8)['then'](_0x1ef2fa => _0x1ef2fa['ok'] ? _0x1ef2fa[_0x27d9e5(0x29c)]() : null)[_0x27d9e5(0x3f9)](_0x5c921 => _0x5c921 ? _0x513ebc(_0x5c921) : _0x21fb5e(null))[_0x27d9e5(0x2af)](() => _0x21fb5e(null));
        });
    }
    async function _0x3797af(_0x50dc3a = ![]) {
        const _0x1899e4 = _0x45c9c2;
        if (!_0x4b9700 || !_0x26cf04() || _0x265564 || !_0x26c0f6())
            return ![];
        const _0x3f79a1 = _0x3589e4(_0x1f060e['Vkfcd'], 0x0), _0xb8fc6d = _0xbeb485[_0x1899e4(0x900)] ? _0x41fc30 : _0x390f7e;
        if (!_0x50dc3a && _0x1f060e['SXyPr'](Date['now']() - _0x3f79a1, _0xb8fc6d))
            return ![];
        _0x265564 = !![], _0x299b4c(_0x1f060e[_0x1899e4(0x279)], Date[_0x1899e4(0x903)]());
        try {
            if (!_0x102ef1 || _0x1f060e['VGuUg'](Date[_0x1899e4(0x903)]() - (_0x102ef1[_0x1899e4(0x1c1)] || 0x0), _0x41fc30)) {
                const _0x909bc1 = await _0x52d0f1(_0x1899e4(0x667), _0x1899e4(0x830));
                if (!_0x909bc1 || _0x909bc1['error'] || !_0x909bc1[_0x1899e4(0x57f)])
                    return _0x1278a1(_0x909bc1 && _0x909bc1[_0x1899e4(0x674)] ? _0x1899e4(0x94b) + (_0x909bc1[_0x1899e4(0x674)][_0x1899e4(0x674)] || _0x1899e4(0x7e6) + _0x909bc1[_0x1899e4(0x674)][_0x1899e4(0x572)]) + ').\x20Set\x20a\x20new\x20key:\x20⚙\x20Settings\x20→\x20Change\x20Key.' : _0x1f060e[_0x1899e4(0x61e)]), ![];
                _0x102ef1 = {
                    'pid': _0x909bc1[_0x1899e4(0x57f)],
                    'name': _0x909bc1[_0x1899e4(0x589)] || '',
                    'checked': Date['now']()
                }, _0x1f060e['zbUxv'](_0x299b4c, 'license_identity', _0x102ef1);
            }
            const _0x47a03e = await _0x1f060e[_0x1899e4(0x678)](_0x1f08f9, _0x1899e4(0x92c) + _0x102ef1[_0x1899e4(0x42c)]);
            if (!_0x47a03e || !_0x47a03e[_0x1899e4(0x628)])
                return _0x1f060e[_0x1899e4(0x36d)](_0x1278a1, _0x1899e4(0x943)), ![];
            const _0x111440 = JSON['stringify'](_0xbeb485[_0x1899e4(0x488)]), _0x4facd1 = await _0x1f060e['TMpIX'](_0x54e2ea, _0x47a03e[_0x1899e4(0x628)]), _0x4779f3 = _0x3d65bb();
            _0x1278a1(_0x4facd1 ? '' : _0x4779f3 && _0x1f060e[_0x1899e4(0x36d)](String, _0x4779f3) !== _0x1f060e[_0x1899e4(0x45a)](String, _0x102ef1[_0x1899e4(0x42c)]) ? _0x1899e4(0x8b1) + _0x102ef1['pid'] + _0x1899e4(0x622) + _0x4779f3 + _0x1899e4(0x6ad) : _0x1899e4(0x6fb)), _0x299b4c(_0x1899e4(0x6f9), _0x47a03e['token']);
            const _0x2bb6f0 = {};
            _0x2bb6f0[_0x1899e4(0x628)] = _0x47a03e[_0x1899e4(0x628)], _0x2bb6f0[_0x1899e4(0x3e5)] = _0x102ef1, _0x1f060e['vTanT'](_0x5b70e4, _0x1f060e[_0x1899e4(0x331)], _0x2bb6f0);
            if (_0x111440 !== JSON[_0x1899e4(0x5f5)](_0xbeb485['features']))
                _0x11b0c2();
            return _0x4facd1;
        } finally {
            _0x265564 = ![];
        }
    }
    function _0x11b0c2() {
        const _0xe40da3 = _0x45c9c2;
        if (document[_0xe40da3(0x299)])
            _0x1f060e[_0xe40da3(0x2d5)](_0x383f8d);
        if (document['getElementById'](_0xe40da3(0x596)))
            _0x17e6e0();
    }
    function _0x32a518() {
        const _0x1b000b = _0x45c9c2;
        _0x274700 = Date[_0x1b000b(0x903)]() + _0x106362, _0x4b9700 ? _0x3797af(!![]) : _0x1f060e[_0x1b000b(0x2ff)](_0x5b70e4, _0x1b000b(0x444));
    }
    function _0x793d69() {
        const _0x572a83 = _0x45c9c2;
        if (!_0x4b9700 || !_0x274700)
            return;
        if (_0x1f060e[_0x572a83(0x7de)](Date[_0x572a83(0x903)](), _0x274700)) {
            _0x274700 = 0x0;
            return;
        }
        if (_0x1f060e[_0x572a83(0x3e4)](Date[_0x572a83(0x903)]() - _0x3589e4(_0x572a83(0x39a), 0x0), _0x2a402a))
            _0x3797af(!![]);
    }
    function _0x3cef68() {
        const _0x2113e3 = _0x45c9c2, _0xc5c45f = _0x3589e4('license_token', null);
        if (_0xc5c45f)
            _0x54e2ea(_0xc5c45f)[_0x2113e3(0x3f9)](_0x4b5acf => {
                const _0x512a42 = _0x2113e3;
                if (_0x4b5acf)
                    _0x1f060e[_0x512a42(0x2d5)](_0x11b0c2);
            });
    }
    function _0x10ef9f() {
        const _0x1b2b09 = _0x45c9c2, _0x22bf99 = _0x1f060e[_0x1b2b09(0x785)](_0x3d65bb);
        if (_0x22bf99) {
            const _0x5c399f = _0x3589e4(_0x1b2b09(0x83c) + _0x22bf99, null);
            if (_0x5c399f && typeof _0x5c399f === _0x1f060e['eyvCx'] && !_0x5c399f[_0x1b2b09(0x390)](_0x1b2b09(0x1ea)) && _0x1f060e[_0x1b2b09(0x3e4)](_0x5c399f[_0x1b2b09(0x76a)]()['length'], 0x10))
                return {
                    'key': _0x5c399f['trim'](),
                    'source': _0x1b2b09(0x67a) + _0x22bf99 + '])',
                    'uid': _0x22bf99,
                    'isCustom': !![]
                };
            const _0x3c0696 = _0x3589e4(_0x1b2b09(0x25e) + _0x22bf99, null);
            if (_0x3c0696 && _0x1f060e[_0x1b2b09(0x3ae)](typeof _0x3c0696, _0x1f060e[_0x1b2b09(0x751)]) && !_0x3c0696[_0x1b2b09(0x390)]('###') && _0x3c0696[_0x1b2b09(0x76a)]()[_0x1b2b09(0x453)] >= 0x10)
                return {
                    'key': _0x3c0696[_0x1b2b09(0x76a)](),
                    'source': _0x1b2b09(0x20d) + _0x22bf99 + '])',
                    'uid': _0x22bf99,
                    'isCustom': !![]
                };
            const _0x2d7726 = _0x1f060e[_0x1b2b09(0x820)](_0x3589e4, 'api_key', null);
            if (_0x2d7726 && typeof _0x2d7726 === _0x1b2b09(0x531) && !_0x2d7726['startsWith'](_0x1b2b09(0x1ea)) && _0x2d7726[_0x1b2b09(0x76a)]()[_0x1b2b09(0x453)] >= 0x10)
                return _0x299b4c(_0x1b2b09(0x83c) + _0x22bf99, _0x2d7726[_0x1b2b09(0x76a)]()), {
                    'key': _0x2d7726[_0x1b2b09(0x76a)](),
                    'source': _0x1b2b09(0x836) + _0x22bf99 + '])',
                    'uid': _0x22bf99,
                    'isCustom': !![]
                };
            const _0x18e645 = {};
            return _0x18e645[_0x1b2b09(0x92f)] = '', _0x18e645[_0x1b2b09(0x85b)] = _0x1b2b09(0x1d1) + _0x22bf99 + ']', _0x18e645['uid'] = _0x22bf99, _0x18e645[_0x1b2b09(0x64c)] = ![], _0x18e645;
        }
        const _0x260717 = _0x1f060e[_0x1b2b09(0x93f)](_0x3589e4, _0x1f060e['vyruO'], null);
        if (_0x260717 && typeof _0x260717 === 'string' && !_0x260717[_0x1b2b09(0x390)](_0x1f060e[_0x1b2b09(0x436)]) && _0x260717[_0x1b2b09(0x76a)]()['length'] >= 0x10)
            return {
                'key': _0x260717[_0x1b2b09(0x76a)](),
                'source': _0x1b2b09(0x7d4),
                'uid': null,
                'isCustom': !![]
            };
        const _0x414e92 = {};
        return _0x414e92[_0x1b2b09(0x92f)] = '', _0x414e92[_0x1b2b09(0x85b)] = _0x1b2b09(0x6fd), _0x414e92['uid'] = null, _0x414e92[_0x1b2b09(0x64c)] = ![], _0x414e92;
    }
    function _0x26c0f6() {
        const _0x4df4ba = _0x45c9c2;
        return _0x10ef9f()[_0x4df4ba(0x92f)];
    }
    function _0x8d20c7(_0x41bf94) {
        const _0x4d4ca4 = _0x45c9c2;
        if (!_0x41bf94 || _0x1f060e['gWpJe'](typeof _0x41bf94, _0x4d4ca4(0x531)))
            return 'Not\x20Configured';
        if (_0x41bf94[_0x4d4ca4(0x453)] <= 0x8)
            return _0x4d4ca4(0x7d2);
        return _0x41bf94[_0x4d4ca4(0x399)](0x0, 0x4) + _0x4d4ca4(0x746) + _0x41bf94['slice'](-0x4);
    }
    const _0x27ada1 = _0x1f060e['UfbEI'] + _0x1f060e[_0x45c9c2(0x811)];
    function _0x130af7(_0x1e73ff = ![]) {
        const _0x4de4ab = _0x45c9c2, _0x2e960d = {
                'XVYHs': function (_0x51c40e, _0x43443c) {
                    return _0x51c40e(_0x43443c);
                },
                'segEU': function (_0x27c325, _0x1f8d43) {
                    return _0x27c325(_0x1f8d43);
                },
                'qirHb': function (_0x14e4c4, _0x25757c) {
                    return _0x14e4c4(_0x25757c);
                },
                'fYQWf': _0x1f060e['AlaKc']
            }, _0x3a2cbb = _0x1f060e[_0x4de4ab(0x452)](_0x3d65bb), _0x2d2937 = _0x10ef9f(), _0x539075 = _0x1e73ff === !![] || !_0x2d2937[_0x4de4ab(0x92f)], _0x231a79 = document[_0x4de4ab(0x24c)](_0x4de4ab(0x6f4));
        if (_0x231a79)
            _0x231a79['remove']();
        const _0x536e82 = document['createElement'](_0x1f060e['SFaAd']);
        _0x536e82['id'] = _0x1f060e[_0x4de4ab(0x9b1)], _0x536e82[_0x4de4ab(0x75a)] = _0x4de4ab(0x607) + (_0x539075 ? 'API\x20Key\x20Setup' : 'Change\x20API\x20Key') + _0x4de4ab(0x376) + (_0x3a2cbb ? '[' + _0x3a2cbb + ']' : _0x1f060e[_0x4de4ab(0x4bb)]) + _0x4de4ab(0x6ce) + (_0x2d2937[_0x4de4ab(0x92f)] ? _0x4de4ab(0x5c9) + _0x1f060e[_0x4de4ab(0x661)](_0x8d20c7, _0x2d2937[_0x4de4ab(0x92f)]) + _0x4de4ab(0x6ce) : '') + _0x4de4ab(0x9ac) + _0x27ada1 + _0x4de4ab(0x4aa) + (_0x2d2937[_0x4de4ab(0x92f)] ? _0x1f060e['bgwHc'] : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22stakeout-store-btn\x20primary\x22\x20id=\x22stakeout-key-save\x22>💾\x20Save\x20key</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', document[_0x4de4ab(0x299)][_0x4de4ab(0x9c0)](_0x536e82);
        const _0x158e26 = _0x536e82['querySelector']('#stakeout-key-input'), _0xc3c575 = _0x536e82[_0x4de4ab(0x1e3)](_0x1f060e[_0x4de4ab(0x5db)]), _0xe6b2f0 = _0x536e82[_0x4de4ab(0x1e3)](_0x4de4ab(0x7ce)), _0x563f56 = () => _0x536e82[_0x4de4ab(0x8e2)](), _0x5bdff3 = _0x362cb0 => {
                const _0xc72ca1 = _0x4de4ab;
                _0x1f060e['zwTLr'](_0x299b4c, _0x3a2cbb ? 'api_key_' + _0x3a2cbb : _0x1f060e[_0xc72ca1(0x616)], _0x362cb0);
                if (_0x362cb0) {
                    _0x102ef1 = null, _0x1f060e['oDuep'](_0x299b4c, _0x1f060e[_0xc72ca1(0x339)], null);
                    if (_0x4b9700)
                        _0x3797af(!![]);
                    else
                        _0x5b70e4(_0x1f060e['tlmzN']);
                }
                _0x563f56(), _0x40d4da(_0x362cb0 ? '✅\x20API\x20Key\x20saved\x20for\x20Account\x20[' + (_0x3a2cbb || _0x1f060e[_0xc72ca1(0x341)]) + ']!' : _0x1f060e['TCoVU']), _0x1f060e['NsGIq'](_0x383f8d);
            };
        _0x536e82[_0x4de4ab(0x1e3)](_0x4de4ab(0x40f))[_0x4de4ab(0x606)] = _0x563f56, _0x536e82[_0x4de4ab(0x606)] = _0x185ce7 => {
            const _0x32e39a = _0x4de4ab;
            if (_0x185ce7[_0x32e39a(0x283)] === _0x536e82)
                _0x1f060e[_0x32e39a(0x95d)](_0x563f56);
        };
        const _0x52f8ce = _0x536e82[_0x4de4ab(0x1e3)](_0x4de4ab(0x22c));
        if (_0x52f8ce)
            _0x52f8ce[_0x4de4ab(0x606)] = () => _0x5bdff3('');
        _0x158e26[_0x4de4ab(0x916)] = _0x404ae5 => {
            const _0x2c8686 = _0x4de4ab;
            if (_0x404ae5[_0x2c8686(0x92f)] === _0x2c8686(0x61a))
                _0xe6b2f0[_0x2c8686(0x902)]();
        }, _0xe6b2f0[_0x4de4ab(0x606)] = async () => {
            const _0x2768e7 = _0x4de4ab, _0x4cb134 = _0x158e26[_0x2768e7(0x814)][_0x2768e7(0x76a)]();
            if (!/^[A-Za-z0-9]{16}$/[_0x2768e7(0x5eb)](_0x4cb134)) {
                _0xc3c575[_0x2768e7(0x86b)] = _0x2768e7(0x6ea);
                return;
            }
            _0xe6b2f0[_0x2768e7(0x692)] = !![], _0xc3c575[_0x2768e7(0x86b)] = '⏳\x20Checking\x20the\x20key\x20with\x20Torn...';
            let _0xc476f5 = null;
            try {
                const _0x3226bd = await _0x2e960d[_0x2768e7(0x90a)](fetch, _0x2768e7(0x71b) + _0x4cb134 + _0x2768e7(0x4cf));
                _0xc476f5 = await _0x3226bd[_0x2768e7(0x742)]();
            } catch (_0x190e39) {
            }
            if (_0xc476f5 && _0xc476f5[_0x2768e7(0x674)]) {
                _0xe6b2f0[_0x2768e7(0x692)] = ![], _0xc3c575['textContent'] = _0x2768e7(0x2d2) + (_0xc476f5['error']['error'] || _0x2768e7(0x7e6) + _0xc476f5[_0x2768e7(0x674)]['code']) + '.';
                return;
            }
            if (_0xc476f5 && _0x3a2cbb && _0xc476f5[_0x2768e7(0x57f)] && _0x2e960d[_0x2768e7(0x23b)](String, _0xc476f5[_0x2768e7(0x57f)]) !== _0x2e960d[_0x2768e7(0x4f1)](String, _0x3a2cbb)) {
                _0xe6b2f0['disabled'] = ![], _0xc3c575['textContent'] = _0x2768e7(0x7b1) + (_0xc476f5[_0x2768e7(0x589)] || _0x2e960d[_0x2768e7(0x48b)]) + '\x20[' + _0xc476f5[_0x2768e7(0x57f)] + _0x2768e7(0x8d6) + _0x3a2cbb + '].';
                return;
            }
            _0x5bdff3(_0x4cb134);
        }, setTimeout(() => _0x158e26[_0x4de4ab(0x395)](), 0x32);
    }
    function _0x25783a() {
        const _0x53ddf2 = _0x45c9c2;
        if (window[_0x53ddf2(0x295)][_0x53ddf2(0x5f7)][_0x53ddf2(0x67b)](_0x53ddf2(0x6e2)))
            return;
        const _0x14c980 = _0x1f060e[_0x53ddf2(0x239)](_0x3d65bb), _0x1b9e47 = _0x10ef9f();
        if (_0x1b9e47[_0x53ddf2(0x92f)])
            return;
        const _0x4c1288 = _0x14c980 ? _0x53ddf2(0x7ac) + _0x14c980 : _0x1f060e[_0x53ddf2(0x32b)];
        if (sessionStorage[_0x53ddf2(0x693)](_0x4c1288))
            return;
        sessionStorage['setItem'](_0x4c1288, 'true'), setTimeout(() => {
            _0x130af7(!![]);
        }, 0x320);
    }
    const _0x31dd86 = Date[_0x45c9c2(0x903)]()[_0x45c9c2(0x5d2)](0x24) + '-' + Math[_0x45c9c2(0x230)]()[_0x45c9c2(0x5d2)](0x24)['slice'](0x2, 0x8), _0x22d328 = _0x45c9c2(0x6c7), _0x4d9143 = _0x45c9c2(0x941), _0x111ea2 = _0x1f060e[_0x45c9c2(0x871)], _0xe408b1 = 0x1388, _0x3e0b19 = 0xfa0;
    let _0x4b9700 = ![], _0x3ba1b3 = ![];
    const _0x25d0ef = new Map(), _0xaa1fde = new Map(), _0x33c305 = {}, _0x56ecfb = ((() => {
            const _0x1c1d27 = _0x45c9c2, _0x402ec1 = {};
            _0x402ec1[_0x1c1d27(0x2e1)] = _0x1c1d27(0x62f);
            const _0x2e77e5 = _0x402ec1, _0x1ac18e = _0x3e982b => {
                    const _0x27eaf6 = _0x1c1d27;
                    if (!_0x3e982b || _0x3e982b[_0x27eaf6(0x66e)] === _0x31dd86 || !_0x33c305[_0x3e982b['type']])
                        return;
                    try {
                        _0x33c305[_0x3e982b['type']](_0x3e982b);
                    } catch (_0x4a3ca9) {
                        console[_0x27eaf6(0x674)](_0x2e77e5[_0x27eaf6(0x2e1)], _0x3e982b[_0x27eaf6(0x83e)], _0x4a3ca9);
                    }
                };
            try {
                if (_0x1f060e[_0x1c1d27(0x3ff)](typeof BroadcastChannel, _0x1c1d27(0x526))) {
                    const _0x5f4b00 = new BroadcastChannel(_0x22d328);
                    return _0x5f4b00[_0x1c1d27(0x479)] = _0x193d5f => _0x1ac18e(_0x193d5f[_0x1c1d27(0x4c4)]), {
                        'post': _0x5bc7aa => {
                            try {
                                _0x5f4b00['postMessage'](_0x5bc7aa);
                            } catch (_0x10981d) {
                            }
                        }
                    };
                }
            } catch (_0x228956) {
            }
            return window[_0x1c1d27(0x5b5)](_0x1c1d27(0x386), _0x4aff6e => {
                const _0x5d2dc1 = _0x1c1d27;
                if (_0x4aff6e[_0x5d2dc1(0x92f)] !== _0x22d328 || !_0x4aff6e[_0x5d2dc1(0x33d)])
                    return;
                try {
                    _0x1ac18e(JSON[_0x5d2dc1(0x2a6)](_0x4aff6e[_0x5d2dc1(0x33d)]));
                } catch (_0x4b8a26) {
                }
            }), {
                'post': _0x55ece5 => {
                    const _0x220243 = _0x1c1d27;
                    try {
                        localStorage[_0x220243(0x47c)](_0x22d328, JSON['stringify'](_0x55ece5));
                    } catch (_0x27f51d) {
                    }
                }
            };
        })());
    function _0x5b70e4(_0x3ffac, _0x562fef = {}) {
        const _0x406742 = _0x45c9c2;
        _0x56ecfb[_0x406742(0x381)](Object[_0x406742(0x7c1)]({}, _0x562fef, {
            'type': _0x3ffac,
            'from': _0x31dd86,
            'n': Math[_0x406742(0x230)]()
        }));
    }
    function _0x98122() {
        const _0x5b0e33 = _0x45c9c2;
        let _0x5ce723 = ![];
        try {
            _0x5ce723 = Boolean(navigator[_0x5b0e33(0x78c)] && navigator[_0x5b0e33(0x78c)][_0x5b0e33(0x784)]);
        } catch (_0x41ceda) {
        }
        if (_0x7f9203 && _0x1f060e[_0x5b0e33(0x6d9)](_0x7f9203[_0x5b0e33(0x2ed)], _0x5b0e33(0x57c)))
            _0x5ce723 = !![];
        return {
            'focused': document[_0x5b0e33(0x5d5)](),
            'visible': _0x1f060e[_0x5b0e33(0x3b2)](document[_0x5b0e33(0x7ee)], _0x1f060e[_0x5b0e33(0x981)]),
            'activated': _0x5ce723,
            'ts': Date[_0x5b0e33(0x903)]()
        };
    }
    function _0x337e49() {
        const _0x15f937 = _0x45c9c2, _0x1c13d2 = _0x98122();
        if (_0x4b9700)
            _0x25d0ef[_0x15f937(0x504)](_0x31dd86, _0x1c13d2);
        else {
            const _0xb0f55a = {};
            _0xb0f55a[_0x15f937(0x216)] = _0x1c13d2, _0x5b70e4(_0x1f060e[_0x15f937(0x58d)], _0xb0f55a);
        }
    }
    function _0x2d5d1a() {
        const _0x1e0d94 = _0x45c9c2, _0x5a99fc = Date[_0x1e0d94(0x903)]();
        _0x25d0ef['set'](_0x31dd86, _0x98122());
        let _0x365ab8 = _0x31dd86, _0x21f0da = -0x1;
        for (const [_0x104c11, _0x3df019] of _0x25d0ef) {
            if (_0x1f060e[_0x1e0d94(0x413)](_0x5a99fc, _0x3df019['ts']) > _0x3e0b19) {
                _0x25d0ef[_0x1e0d94(0x71a)](_0x104c11);
                continue;
            }
            const _0x1d1a1c = _0x1f060e['VPAaA']((_0x3df019[_0x1e0d94(0x7f5)] ? 0x4 : 0x0) + (_0x3df019[_0x1e0d94(0x6ef)] ? 0x2 : 0x0), _0x3df019[_0x1e0d94(0x6a8)] ? 0x1 : 0x0);
            (_0x1d1a1c > _0x21f0da || _0x1f060e[_0x1e0d94(0x3ae)](_0x1d1a1c, _0x21f0da) && _0x104c11 === _0x31dd86) && (_0x365ab8 = _0x104c11, _0x21f0da = _0x1d1a1c);
        }
        return _0x365ab8;
    }
    function _0x151284(_0x511656) {
        const _0x4f82cd = _0x45c9c2;
        if (!_0x4b9700) {
            const _0x57d27d = {};
            _0x57d27d[_0x4f82cd(0x5ff)] = _0x511656, _0x5b70e4(_0x1f060e[_0x4f82cd(0x2c3)], _0x57d27d);
            return;
        }
        _0x412c4d(_0x511656);
    }
    function _0x412c4d(_0x42a1e0) {
        const _0x583272 = _0x45c9c2, _0x5f3e92 = Date[_0x583272(0x903)]();
        if (_0x42a1e0['key']) {
            for (const [_0x5b6cac, _0x5f3d0b] of _0xaa1fde) {
                if (_0x1f060e[_0x583272(0x72a)](_0x5f3d0b, _0x5f3e92))
                    _0xaa1fde['delete'](_0x5b6cac);
            }
            if (_0xaa1fde[_0x583272(0x5bc)](_0x42a1e0['key']))
                return;
            _0xaa1fde[_0x583272(0x504)](_0x42a1e0[_0x583272(0x92f)], _0x1f060e['ddouw'](_0x5f3e92, _0x42a1e0[_0x583272(0x4d5)] || 0x3a98));
        }
        const _0x24e1f7 = _0x2d5d1a(), _0x325464 = {};
        _0x325464[_0x583272(0x5ff)] = _0x42a1e0, _0x325464[_0x583272(0x4d1)] = _0x24e1f7, _0x5b70e4(_0x1f060e['aghuK'], _0x325464), _0x5157f0(_0x42a1e0, _0x24e1f7);
        if (_0x42a1e0[_0x583272(0x23c)])
            _0x1f060e[_0x583272(0x1d7)](_0x2129d3, _0x42a1e0[_0x583272(0x23c)][_0x583272(0x2ca)], _0x42a1e0['notif']['body']);
    }
    function _0x5157f0(_0x522050, _0x39749f) {
        const _0x5597fd = _0x45c9c2;
        if (_0x522050[_0x5597fd(0x649)])
            _0x40d4da(_0x522050[_0x5597fd(0x649)]);
        if (_0x39749f !== _0x31dd86)
            return;
        if (_0x522050[_0x5597fd(0x2f9)])
            _0xa48a1d(_0x522050[_0x5597fd(0x2f9)]);
        if (_0x522050[_0x5597fd(0x404)])
            _0x423511(_0x522050[_0x5597fd(0x404)]);
        _0x522050[_0x5597fd(0x395)] && (window[_0x5597fd(0x395)](), _0x1f060e['uphRO'](_0x1c881a));
    }
    function _0xa3371f(_0x344ff9) {
        const _0x25b41a = _0x45c9c2;
        if (!_0x4b9700 || !_0x167784[_0x344ff9])
            return;
        const _0x3f79cc = {};
        _0x3f79cc['id'] = _0x344ff9, _0x3f79cc[_0x25b41a(0x96d)] = _0x167784[_0x344ff9], _0x5b70e4(_0x25b41a(0x5dd), _0x3f79cc);
    }
    function _0xb81c83(_0x379be2, _0x4ab0d0) {
        const _0x59e567 = _0x45c9c2, _0x24993c = _0x1f060e[_0x59e567(0x972)](_0x4ab0d0, undefined) ? _0x4ab0d0 : _0x3589e4(_0x379be2, null), _0x5ed21e = _0x24993c && typeof _0x24993c === _0x59e567(0x794);
        switch (_0x379be2) {
        case _0x59e567(0x40c):
            _0x59e0bf = Object[_0x59e567(0x7c1)]({}, _0xed79eb, _0x5ed21e ? _0x24993c : {});
            break;
        case 'watchlist':
            _0xe0a523 = Array[_0x59e567(0x679)](_0x24993c) ? _0x24993c : [];
            break;
        case _0x59e567(0x5d3):
            _0x23e34f = Array[_0x59e567(0x679)](_0x24993c) ? _0x24993c : [];
            break;
        case _0x1f060e['JCQrH']:
            _0x4285dc = _0x5ed21e ? _0x24993c : {};
            break;
        case _0x59e567(0x610):
            _0x3efd60 = _0x5ed21e ? _0x24993c : {};
            break;
        case _0x1f060e[_0x59e567(0x23e)]:
            _0x443a13 = Array[_0x59e567(0x679)](_0x24993c) ? _0x24993c : [], _0x35e192();
            return;
        case _0x1f060e[_0x59e567(0x8fd)]: {
                const _0x28148f = _0x3b5e3f => _0x3b5e3f[_0x59e567(0x6fe)](_0x3878bf => JSON['stringify']([
                        _0x3878bf['id'],
                        _0x3878bf[_0x59e567(0x589)],
                        _0x3878bf[_0x59e567(0x523)],
                        _0x3878bf[_0x59e567(0x25a)],
                        _0x3878bf[_0x59e567(0x762)],
                        _0x3878bf['minInactiveMin'],
                        _0x3878bf[_0x59e567(0x468)]
                    ]))[_0x59e567(0x207)](','), _0x1a8439 = _0x1f060e[_0x59e567(0x2a0)](_0x28148f, _0x2fc985);
                _0x2fc985 = Array[_0x59e567(0x679)](_0x24993c) ? _0x24993c : [];
                if (_0x571c62 === _0x59e567(0x509) && _0x1a8439 === _0x1f060e[_0x59e567(0x4d4)](_0x28148f, _0x2fc985)) {
                    _0x2fc985[_0x59e567(0x38f)](_0x2bfbb4 => _0x47cfc9(_0x2bfbb4['id']));
                    return;
                }
                break;
            }
        default:
            return;
        }
        if (document[_0x59e567(0x299)])
            _0x383f8d();
    }
    function _0x5d4286() {
        const _0xc6ca00 = _0x45c9c2;
        if (_0x4b9700)
            return;
        _0x4b9700 = !![], console['log'](_0xc6ca00(0x83a) + _0x31dd86 + _0xc6ca00(0x20b)), _0x1f060e['fOTup'](_0x5b70e4, _0xc6ca00(0x806)), document[_0xc6ca00(0x299)] && _0xc32df5 ? _0x36a476() : _0x3ba1b3 = !![], _0x591d5e();
    }
    function _0x36a476() {
        const _0x39d032 = _0x45c9c2, _0x2f4957 = {
                'bdRII': function (_0x38e73e, _0x376138, _0x272d7e) {
                    const _0x3673a7 = _0xf22e;
                    return _0x1f060e[_0x3673a7(0x4b1)](_0x38e73e, _0x376138, _0x272d7e);
                }
            };
        _0x3ba1b3 = ![], _0x3797af(), _0x26397c(), _0x1f060e['BUzzt'](setTimeout, () => _0x2708a5(), 0x5dc);
        const _0x1c2e62 = Math[_0x39d032(0x776)](0x5, _0x59e0bf[_0x39d032(0x877)] || 0x5) * 0x3e8, _0x336dd6 = Array['from'](new Set([
                ..._0xe0a523,
                ..._0x23e34f
            ]))[_0x39d032(0x668)](_0x21f39a => !_0x167784[_0x21f39a] || Date[_0x39d032(0x903)]() - _0x167784[_0x21f39a]['lastChecked'] > _0x1c2e62);
        _0x336dd6[_0x39d032(0x38f)]((_0x506957, _0x1a9e9a) => {
            const _0x12fcc0 = _0x39d032;
            _0x2f4957[_0x12fcc0(0x416)](setTimeout, () => _0x380ce1(_0x506957), _0x1a9e9a * 0x5dc);
        });
    }
    function _0x293e2b() {
        const _0xaa8049 = _0x45c9c2, _0x1a4d97 = {
                'JqVyF': _0x1f060e[_0xaa8049(0x739)],
                'maiGN': function (_0x6805b2, _0x3af0c5) {
                    return _0x6805b2 === _0x3af0c5;
                },
                'bzIoS': function (_0x32f26c, _0x433712) {
                    const _0x2df1d8 = _0xaa8049;
                    return _0x1f060e[_0x2df1d8(0x413)](_0x32f26c, _0x433712);
                },
                'amISL': function (_0x1a84b1) {
                    return _0x1a84b1();
                }
            }, _0x38ec22 = () => {
                const _0x110c12 = _0xaa8049, _0x4e4a31 = Date[_0x110c12(0x903)]();
                let _0x48e5e1 = null;
                try {
                    _0x48e5e1 = JSON[_0x110c12(0x2a6)](localStorage[_0x110c12(0x693)](_0x111ea2) || _0x1a4d97['JqVyF']);
                } catch (_0x1de9e5) {
                }
                if (!_0x48e5e1 || _0x1a4d97[_0x110c12(0x213)](_0x48e5e1[_0x110c12(0x35a)], _0x31dd86) || _0x1a4d97['bzIoS'](_0x4e4a31, _0x48e5e1['ts']) > _0xe408b1) {
                    try {
                        const _0x3313b0 = {};
                        _0x3313b0[_0x110c12(0x35a)] = _0x31dd86, _0x3313b0['ts'] = _0x4e4a31, localStorage[_0x110c12(0x47c)](_0x111ea2, JSON[_0x110c12(0x5f5)](_0x3313b0));
                    } catch (_0x5dfa07) {
                    }
                    _0x1a4d97['amISL'](_0x5d4286);
                } else
                    _0x4b9700 && (_0x4b9700 = ![], _0x591d5e());
            };
        _0x38ec22(), setInterval(_0x38ec22, 0x5dc), window[_0xaa8049(0x5b5)]('pagehide', () => {
            const _0x5419d3 = _0xaa8049;
            try {
                const _0x5c3b7c = JSON['parse'](localStorage[_0x5419d3(0x693)](_0x111ea2) || _0x1f060e[_0x5419d3(0x739)]);
                if (_0x5c3b7c && _0x1f060e[_0x5419d3(0x8ff)](_0x5c3b7c['tabId'], _0x31dd86))
                    localStorage[_0x5419d3(0x55c)](_0x111ea2);
            } catch (_0x5e7067) {
            }
        });
    }
    function _0xe79e42() {
        const _0x4eb8d9 = _0x45c9c2;
        try {
            if (navigator[_0x4eb8d9(0x6fc)] && _0x1f060e[_0x4eb8d9(0x6d9)](typeof navigator[_0x4eb8d9(0x6fc)][_0x4eb8d9(0x906)], _0x4eb8d9(0x526))) {
                navigator['locks'][_0x4eb8d9(0x906)](_0x4d9143, () => {
                    return _0x5d4286(), new Promise(() => {
                    });
                })[_0x4eb8d9(0x2af)](() => _0x293e2b());
                return;
            }
        } catch (_0x20fc2b) {
        }
        _0x1f060e[_0x4eb8d9(0x347)](_0x293e2b);
    }
    _0x33c305[_0x1f060e[_0x45c9c2(0x58d)]] = _0x42db3e => {
        const _0x4ffb38 = _0x45c9c2;
        if (_0x4b9700 && _0x42db3e[_0x4ffb38(0x216)])
            _0x25d0ef[_0x4ffb38(0x504)](_0x42db3e['from'], _0x42db3e[_0x4ffb38(0x216)]);
    }, _0x33c305[_0x45c9c2(0x874)] = _0x412194 => _0x5157f0(_0x412194[_0x45c9c2(0x5ff)], _0x412194['ringTab']), _0x33c305[_0x1f060e['WEomX']] = _0xfa851b => {
        const _0x534a14 = _0x45c9c2;
        if (_0x4b9700 && _0xfa851b[_0x534a14(0x5ff)])
            _0x412c4d(_0xfa851b['evt']);
    }, _0x33c305[_0x1f060e[_0x45c9c2(0x6f5)]] = () => _0x52a8e1(), _0x33c305[_0x1f060e[_0x45c9c2(0x73a)]] = _0x1de37b => _0xb81c83(_0x1de37b['key'], _0x1de37b['value']), _0x33c305['leader'] = () => {
        const _0x14034a = _0x45c9c2;
        if (_0x4b9700)
            return;
        _0x337e49(), _0x1f060e[_0x14034a(0x678)](_0x5b70e4, _0x1f060e[_0x14034a(0x2e2)]), _0x1f060e[_0x14034a(0x25d)](_0x591d5e);
    }, _0x33c305[_0x1f060e[_0x45c9c2(0x2e2)]] = _0x5a5dc1 => {
        const _0x2b8a69 = _0x45c9c2;
        if (!_0x4b9700)
            return;
        const _0x397471 = {};
        _0x397471['to'] = _0x5a5dc1['from'], _0x397471[_0x2b8a69(0x327)] = _0x167784, _0x397471[_0x2b8a69(0x509)] = _0x2fcb8f, _0x5b70e4(_0x1f060e[_0x2b8a69(0x5c7)], _0x397471);
    }, _0x33c305[_0x45c9c2(0x603)] = _0x587394 => {
        const _0x27c7bb = _0x45c9c2;
        if (_0x4b9700 || _0x587394['to'] !== _0x31dd86 || !_0x587394[_0x27c7bb(0x327)])
            return;
        for (const [_0x3a736e, _0x4e0ec8] of Object[_0x27c7bb(0x327)](_0x587394[_0x27c7bb(0x327)])) {
            if (!_0x167784[_0x3a736e] || _0x1f060e[_0x27c7bb(0x68c)](_0x167784[_0x3a736e][_0x27c7bb(0x8a4)], _0x4e0ec8[_0x27c7bb(0x8a4)]))
                _0x167784[_0x3a736e] = _0x4e0ec8;
        }
        for (const [_0x433c6d, _0x485fa9] of Object[_0x27c7bb(0x327)](_0x587394[_0x27c7bb(0x509)] || {})) {
            if (!_0x2fcb8f[_0x433c6d] || _0x1f060e[_0x27c7bb(0x6eb)](_0x2fcb8f[_0x433c6d][_0x27c7bb(0x41f)] || 0x0, _0x485fa9[_0x27c7bb(0x41f)] || 0x0))
                _0x2fcb8f[_0x433c6d] = _0x485fa9;
        }
        if (document['body'])
            _0x383f8d();
    }, _0x33c305[_0x45c9c2(0x57d)] = _0x47d508 => {
        const _0x5e5dd2 = _0x45c9c2;
        if (_0x4b9700 || !_0x47d508['entry'])
            return;
        _0x2fcb8f[_0x47d508[_0x5e5dd2(0x5cb)]] = _0x47d508['entry'];
        if (_0x1f060e['RrzFM'](_0x571c62, 'factions'))
            _0x47cfc9(_0x47d508[_0x5e5dd2(0x5cb)]);
    }, _0x33c305[_0x1f060e[_0x45c9c2(0x89e)]] = _0x16563c => {
        const _0x19a188 = _0x45c9c2;
        if (!_0x4b9700 || !_0x16563c['fid'])
            return;
        _0x8b45ef[_0x16563c['fid']] = Date['now'](), _0x93d216(_0x16563c[_0x19a188(0x5cb)]);
    }, _0x33c305[_0x45c9c2(0x5dd)] = _0x56dc82 => {
        const _0x3bcadc = _0x45c9c2;
        if (_0x4b9700 || !_0x56dc82[_0x3bcadc(0x96d)])
            return;
        _0x167784[_0x56dc82['id']] = _0x56dc82[_0x3bcadc(0x96d)], _0x571c62 === _0x3bcadc(0x463) ? _0x1f060e['LljCG'](_0x561e23, _0x56dc82['id']) : _0x12d7fe(_0x56dc82['id']), _0x1f060e[_0x3bcadc(0x347)](_0x124a19);
    }, _0x33c305[_0x1f060e[_0x45c9c2(0x331)]] = _0x35ac83 => {
        const _0x63a3a2 = _0x45c9c2;
        if (_0x35ac83[_0x63a3a2(0x3e5)])
            _0x102ef1 = _0x35ac83['identity'];
        if (_0x35ac83['token'])
            _0x54e2ea(_0x35ac83[_0x63a3a2(0x628)])[_0x63a3a2(0x3f9)](() => _0x11b0c2());
    }, _0x33c305[_0x1f060e[_0x45c9c2(0x90f)]] = () => {
        const _0x366508 = _0x45c9c2;
        if (!_0x4b9700)
            return;
        _0x102ef1 = _0x1f060e[_0x366508(0x9cb)](_0x3589e4, _0x366508(0x953), null), _0x274700 = _0x1f060e[_0x366508(0x323)](Date[_0x366508(0x903)](), _0x106362), _0x1f060e[_0x366508(0x678)](_0x3797af, !![]);
    }, _0x33c305[_0x1f060e['frSNs']] = _0xd60dda => {
        if (_0x4b9700 && _0xd60dda['id'])
            _0x380ce1(_0xd60dda['id']);
    }, _0x33c305[_0x45c9c2(0x5b1)] = _0x1c5f2e => {
        const _0x8f415a = _0x45c9c2;
        if (_0x4b9700 || !_0x1c5f2e[_0x8f415a(0x307)])
            return;
        const _0x50cf9f = _0x4a63f5(_0x1c5f2e[_0x8f415a(0x307)]);
        _0x2eac6a[_0x1c5f2e[_0x8f415a(0x995)]] = {
            'incidentData': _0x1c5f2e[_0x8f415a(0x307)],
            'canvas': _0x50cf9f
        };
        if (_0x571c62 === _0x1f060e[_0x8f415a(0x1df)])
            _0x1f060e[_0x8f415a(0x602)](_0x561e23, _0x1c5f2e[_0x8f415a(0x995)]);
    };
    const _0x58a888 = {};
    _0x58a888[_0x45c9c2(0x73f)] = !![], _0x58a888[_0x45c9c2(0x964)] = !![], _0x58a888[_0x45c9c2(0x278)] = _0x45c9c2(0x7c5), _0x58a888[_0x45c9c2(0x3bc)] = !![], _0x58a888[_0x45c9c2(0x1ba)] = ![], _0x58a888[_0x45c9c2(0x415)] = ![], _0x58a888[_0x45c9c2(0x8ae)] = ![], _0x58a888[_0x45c9c2(0x646)] = !![], _0x58a888[_0x45c9c2(0x586)] = 0x5, _0x58a888[_0x45c9c2(0x33e)] = !![], _0x58a888[_0x45c9c2(0x434)] = ![], _0x58a888[_0x45c9c2(0x337)] = !![], _0x58a888['alertOnDrugCooldown'] = !![], _0x58a888[_0x45c9c2(0x84d)] = !![], _0x58a888[_0x45c9c2(0x963)] = !![], _0x58a888[_0x45c9c2(0x8cd)] = 0x3e8fa0, _0x58a888[_0x45c9c2(0x60b)] = 0x44aa20, _0x58a888[_0x45c9c2(0x3c3)] = _0x45c9c2(0x886), _0x58a888[_0x45c9c2(0x2ea)] = 0x44aa20, _0x58a888[_0x45c9c2(0x869)] = 0x4630c0, _0x58a888['chainMaxLevel'] = 0x1, _0x58a888[_0x45c9c2(0x4f3)] = 0xf, _0x58a888[_0x45c9c2(0x1f4)] = 0x0, _0x58a888[_0x45c9c2(0x4ff)] = 0x96, _0x58a888[_0x45c9c2(0x2ab)] = 0x4b, _0x58a888[_0x45c9c2(0x372)] = 0x14, _0x58a888['isFactionsPaused'] = ![], _0x58a888[_0x45c9c2(0x82a)] = _0x45c9c2(0x5f9), _0x58a888['soundAlarm'] = !![], _0x58a888['alarmVolume'] = 0x1, _0x58a888['alarmSoundType'] = _0x45c9c2(0x765), _0x58a888[_0x45c9c2(0x510)] = !![], _0x58a888[_0x45c9c2(0x5a7)] = !![], _0x58a888[_0x45c9c2(0x6bf)] = !![], _0x58a888[_0x45c9c2(0x877)] = 0x5, _0x58a888[_0x45c9c2(0x989)] = ![], _0x58a888[_0x45c9c2(0x8c5)] = ![], _0x58a888[_0x45c9c2(0x3c8)] = _0x45c9c2(0x3f8);
    const _0xed79eb = _0x58a888;
    let _0x59e0bf = Object[_0x45c9c2(0x7c1)]({}, _0xed79eb, _0x3589e4(_0x45c9c2(0x40c), {}));
    delete _0x59e0bf[_0x45c9c2(0x955)];
    _0x59e0bf[_0x45c9c2(0x338)] !== !![] && (_0x59e0bf[_0x45c9c2(0x415)] = ![], _0x59e0bf[_0x45c9c2(0x8ae)] = ![], _0x59e0bf['_breachDefaultOffV150'] = !![], _0x1f060e[_0x45c9c2(0x61d)](_0x2aad15));
    if ((_0x59e0bf['chainTargetMode'] || _0x45c9c2(0x886)) === _0x45c9c2(0x886)) {
        const _0x115bb2 = parseInt(_0x59e0bf[_0x45c9c2(0x2ea)], 0xa) || 0x44aa20, _0x3e6454 = _0x1f060e[_0x45c9c2(0x541)](parseInt, _0x59e0bf[_0x45c9c2(0x869)], 0xa) || 0x4630c0, _0x4b3e85 = _0x1f060e[_0x45c9c2(0x905)](parseInt, _0x59e0bf[_0x45c9c2(0x60b)], 0xa);
        if (!_0x4b3e85 || _0x4b3e85 < _0x115bb2 || _0x4b3e85 > _0x3e6454)
            _0x59e0bf['chainTargetCurrentId'] = _0x115bb2 + Math['floor'](_0x1f060e[_0x45c9c2(0x22e)](Math[_0x45c9c2(0x230)](), Math[_0x45c9c2(0x776)](0x1, _0x1f060e[_0x45c9c2(0x727)](_0x3e6454, _0x115bb2))));
    }
    delete _0x59e0bf['alertOnNearHosp'], delete _0x59e0bf['nearHospThresholdMin'], _0x59e0bf[_0x45c9c2(0x646)] = !![];
    function _0x2aad15() {
        const _0x1985e3 = _0x45c9c2;
        _0x299b4c(_0x1985e3(0x40c), _0x59e0bf);
        const _0x57d761 = {};
        _0x57d761[_0x1985e3(0x92f)] = _0x1985e3(0x40c), _0x57d761[_0x1985e3(0x814)] = _0x59e0bf, _0x5b70e4(_0x1f060e[_0x1985e3(0x73a)], _0x57d761);
    }
    const _0x10d493 = {};
    _0x10d493[_0x45c9c2(0x4df)] = ![], _0x10d493[_0x45c9c2(0x369)] = 0x0, _0x10d493[_0x45c9c2(0x776)] = 0xa, _0x10d493[_0x45c9c2(0x6b0)] = 0x0, _0x10d493[_0x45c9c2(0x88e)] = 0x1, _0x10d493['lastUpdated'] = 0x0, _0x10d493['alerted60s'] = ![], _0x10d493[_0x45c9c2(0x7a4)] = ![], _0x10d493['lastEmergencyChime'] = 0x0;
    const _0xceab3e = _0x10d493, _0xa4e658 = {};
    _0xa4e658['id'] = null, _0xa4e658[_0x45c9c2(0x589)] = null, _0xa4e658[_0x45c9c2(0x222)] = null, _0xa4e658[_0x45c9c2(0x8a4)] = 0x0;
    const _0x56b1e7 = _0xa4e658;
    let _0xe0a523 = _0x1f060e[_0x45c9c2(0x3ee)](_0x3589e4, _0x1f060e[_0x45c9c2(0x20e)], []);
    if (!Array[_0x45c9c2(0x679)](_0xe0a523))
        _0xe0a523 = [];
    function _0xca4fe() {
        const _0x5d00bd = _0x45c9c2;
        _0x299b4c(_0x1f060e['PIrKr'], _0xe0a523);
        const _0x225fe8 = {};
        _0x225fe8[_0x5d00bd(0x92f)] = _0x5d00bd(0x5d0), _0x225fe8[_0x5d00bd(0x814)] = _0xe0a523, _0x1f060e[_0x5d00bd(0x200)](_0x5b70e4, _0x5d00bd(0x2ed), _0x225fe8);
    }
    let _0x23e34f = _0x3589e4(_0x45c9c2(0x5d3), []);
    if (!Array[_0x45c9c2(0x679)](_0x23e34f))
        _0x23e34f = [];
    function _0x36484f() {
        const _0x4c97cc = _0x45c9c2;
        _0x299b4c(_0x1f060e[_0x4c97cc(0x988)], _0x23e34f);
        const _0x5f145b = {};
        _0x5f145b[_0x4c97cc(0x92f)] = _0x1f060e[_0x4c97cc(0x988)], _0x5f145b[_0x4c97cc(0x814)] = _0x23e34f, _0x5b70e4(_0x4c97cc(0x2ed), _0x5f145b);
    }
    let _0x3efd60 = _0x1f060e['PytRO'](_0x3589e4, 'trader_meta', {});
    if (_0x1f060e['iRTUQ'](typeof _0x3efd60, _0x45c9c2(0x794)) || _0x3efd60 === null)
        _0x3efd60 = {};
    function _0x29b123() {
        const _0x45b3fb = _0x45c9c2;
        _0x1f060e[_0x45b3fb(0x42d)](_0x299b4c, _0x45b3fb(0x610), _0x3efd60);
        const _0x2565e1 = {};
        _0x2565e1[_0x45b3fb(0x92f)] = _0x45b3fb(0x610), _0x2565e1[_0x45b3fb(0x814)] = _0x3efd60, _0x5b70e4(_0x45b3fb(0x2ed), _0x2565e1);
    }
    function _0x5c4031(_0x2d6adb) {
        const _0x110958 = _0x45c9c2;
        return Boolean(_0x3efd60[_0x2d6adb]?.[_0x110958(0x689)]);
    }
    function _0x6394cf(_0x24715f, _0x1c4de3) {
        const _0x5ec7c6 = _0x45c9c2;
        if (!_0x3efd60[_0x24715f])
            _0x3efd60[_0x24715f] = {};
        _0x3efd60[_0x24715f][_0x5ec7c6(0x689)] = Boolean(_0x1c4de3), _0x1f060e[_0x5ec7c6(0x5c6)](_0x29b123);
    }
    let _0x571c62 = _0x3589e4(_0x45c9c2(0x8f3), _0x45c9c2(0x463));
    function _0x190ec5(_0x3e58b1) {
        const _0x558a1c = _0x45c9c2;
        _0x571c62 = _0x3e58b1, _0x299b4c(_0x1f060e[_0x558a1c(0x3ef)], _0x3e58b1);
    }
    const _0x337416 = {
        'factions': new Map(),
        'lastFetched': 0x0,
        'isFetching': ![]
    };
    async function _0x26397c(_0x4cc04b = ![]) {
        const _0x50cd87 = _0x45c9c2;
        if (!_0x4b9700)
            return;
        const _0x56bcf4 = Date[_0x50cd87(0x903)]();
        if (!_0x4cc04b && _0x1f060e[_0x50cd87(0x7de)](_0x337416[_0x50cd87(0x83f)], 0x0) && _0x56bcf4 - _0x337416[_0x50cd87(0x83f)] < _0x1f060e[_0x50cd87(0x703)](0xa, 0x3c) * 0x3e8)
            return;
        if (_0x337416['isFetching'])
            return;
        const _0x15c791 = _0x1f060e[_0x50cd87(0x618)](_0x26c0f6);
        if (!_0x15c791)
            return;
        _0x337416[_0x50cd87(0x7e2)] = !![];
        try {
            const _0x510bdc = _0x50cd87(0x875) + _0x15c791 + _0x50cd87(0x922), _0x3bce14 = await fetch(_0x510bdc);
            if (!_0x3bce14['ok'])
                return;
            const _0x3e0f51 = await _0x3bce14[_0x50cd87(0x742)]();
            if (_0x3e0f51 && _0x3e0f51[_0x50cd87(0x674)]) {
                console[_0x50cd87(0x5d6)]('[Stakeout]\x20Active\x20wars\x20API\x20error:', _0x3e0f51[_0x50cd87(0x674)]);
                return;
            }
            const _0x427fdf = Math['floor'](_0x56bcf4 / 0x3e8), _0x2a33a2 = new Map();
            if (_0x3e0f51['rankedwars'] && _0x1f060e['RrzFM'](typeof _0x3e0f51[_0x50cd87(0x2dd)], _0x50cd87(0x794)))
                for (const [_0x5679d9, _0xdde2a1] of Object[_0x50cd87(0x327)](_0x3e0f51[_0x50cd87(0x2dd)])) {
                    const _0x2a34be = _0xdde2a1[_0x50cd87(0x952)] || {}, _0x519f80 = _0x1f060e[_0x50cd87(0x760)](parseInt, _0x2a34be['start'] || 0x0, 0xa), _0x48dbc7 = _0x1f060e[_0x50cd87(0x200)](parseInt, _0x2a34be[_0x50cd87(0x637)] || 0x0, 0xa), _0x4e8c73 = _0x1f060e['pqxrh'](parseInt, _0x2a34be[_0x50cd87(0x855)] || 0x0, 0xa);
                    if (_0x1f060e[_0x50cd87(0x72a)](_0x519f80, _0x427fdf) && (_0x48dbc7 === 0x0 || _0x1f060e['QHdwq'](_0x48dbc7, _0x427fdf)) && (!_0x4e8c73 || _0x1f060e[_0x50cd87(0x3ff)](_0x4e8c73, 0x0))) {
                        const _0x249b80 = Object[_0x50cd87(0x327)](_0xdde2a1[_0x50cd87(0x509)] || {});
                        for (const [_0x3dc3b9, _0x23c54e] of _0x249b80) {
                            const _0x5763d7 = _0x249b80[_0x50cd87(0x5e3)](([_0x1cb9b8]) => String(_0x1cb9b8) !== String(_0x3dc3b9)), _0x5326b5 = {};
                            _0x5326b5[_0x50cd87(0x83e)] = _0x50cd87(0x373), _0x5326b5[_0x50cd87(0x698)] = _0x5679d9, _0x5326b5[_0x50cd87(0x666)] = _0x23c54e[_0x50cd87(0x589)] || '', _0x5326b5[_0x50cd87(0x7c2)] = _0x5763d7 ? _0x5763d7[0x0] : null, _0x5326b5[_0x50cd87(0x2fb)] = _0x5763d7 ? _0x5763d7[0x1]?.[_0x50cd87(0x589)] || _0x50cd87(0x63b) : _0x1f060e['jpVMC'], _0x2a33a2[_0x50cd87(0x504)](String(_0x3dc3b9), _0x5326b5);
                        }
                    }
                }
            if (_0x3e0f51['territorywars'] && typeof _0x3e0f51[_0x50cd87(0x27a)] === _0x1f060e[_0x50cd87(0x7ed)])
                for (const [_0x43b300, _0x3794a4] of Object['entries'](_0x3e0f51[_0x50cd87(0x27a)])) {
                    const _0x543dca = parseInt(_0x3794a4[_0x50cd87(0x780)] || 0x0, 0xa), _0x59e9e3 = parseInt(_0x3794a4[_0x50cd87(0x720)] || 0x0, 0xa);
                    if (_0x543dca <= _0x427fdf && (!_0x59e9e3 || _0x1f060e[_0x50cd87(0x641)](_0x59e9e3, _0x427fdf))) {
                        const _0x4797cb = String(_0x3794a4[_0x50cd87(0x85d)] || ''), _0x2aafe0 = _0x1f060e[_0x50cd87(0x4c7)](String, _0x3794a4['defending_faction'] || '');
                        if (_0x4797cb && !_0x2a33a2[_0x50cd87(0x5bc)](_0x4797cb)) {
                            const _0x509ee2 = {};
                            _0x509ee2[_0x50cd87(0x83e)] = _0x50cd87(0x5be), _0x509ee2[_0x50cd87(0x698)] = _0x3794a4[_0x50cd87(0x970)] || _0x43b300, _0x509ee2[_0x50cd87(0x212)] = _0x43b300, _0x509ee2[_0x50cd87(0x7c2)] = _0x2aafe0, _0x2a33a2['set'](_0x4797cb, _0x509ee2);
                        }
                        if (_0x2aafe0 && !_0x2a33a2['has'](_0x2aafe0)) {
                            const _0x58b0f4 = {};
                            _0x58b0f4[_0x50cd87(0x83e)] = _0x1f060e['yXruv'], _0x58b0f4[_0x50cd87(0x698)] = _0x3794a4[_0x50cd87(0x970)] || _0x43b300, _0x58b0f4[_0x50cd87(0x212)] = _0x43b300, _0x58b0f4['opponentId'] = _0x4797cb, _0x2a33a2[_0x50cd87(0x504)](_0x2aafe0, _0x58b0f4);
                        }
                    }
                }
            _0x337416[_0x50cd87(0x509)] = _0x2a33a2, _0x337416[_0x50cd87(0x83f)] = Date[_0x50cd87(0x903)](), console[_0x50cd87(0x2a2)](_0x50cd87(0x852) + _0x2a33a2[_0x50cd87(0x59e)] + _0x50cd87(0x3e3));
            try {
                localStorage[_0x50cd87(0x47c)]('torn_active_war_factions', JSON[_0x50cd87(0x5f5)](Array['from'](_0x2a33a2[_0x50cd87(0x29e)]())));
            } catch (_0x37aacc) {
            }
            if (_0x1f060e[_0x50cd87(0x972)](typeof _0xe0a523, _0x50cd87(0x93c)) && Array['isArray'](_0xe0a523)) {
                let _0x211bdc = ![];
                for (const _0x5ccd58 of _0xe0a523) {
                    const _0x54f54a = _0x167784[_0x5ccd58];
                    if (_0x54f54a && _0x54f54a[_0x50cd87(0x4c4)] && (_0x54f54a[_0x50cd87(0x4c4)]['factionId'] || _0x54f54a[_0x50cd87(0x4c4)][_0x50cd87(0x529)])) {
                        const _0x268f3a = _0x1f060e[_0x50cd87(0x1fc)](_0x4615b8, _0x54f54a['data'][_0x50cd87(0x8c0)], _0x54f54a[_0x50cd87(0x4c4)][_0x50cd87(0x529)] || null), _0x32b7b7 = _0x54f54a[_0x50cd87(0x4c4)][_0x50cd87(0x232)];
                        _0x54f54a[_0x50cd87(0x4c4)][_0x50cd87(0x232)] = !!_0x268f3a, _0x54f54a[_0x50cd87(0x4c4)][_0x50cd87(0x406)] = _0x268f3a;
                        if (_0x32b7b7 !== _0x54f54a[_0x50cd87(0x4c4)][_0x50cd87(0x232)]) {
                            _0x211bdc = !![], _0xa3371f(_0x5ccd58);
                            if (_0x571c62 === _0x50cd87(0x463))
                                _0x561e23(_0x5ccd58);
                        }
                    }
                }
                if (_0x211bdc)
                    _0x124a19();
            }
        } catch (_0x1abf08) {
            console['error']('[Stakeout]\x20Failed\x20to\x20sync\x20active\x20wars:', _0x1abf08);
        } finally {
            _0x337416[_0x50cd87(0x7e2)] = ![];
        }
    }
    function _0x38260e(_0xddc770) {
        const _0x55000e = _0x45c9c2;
        if (!_0xddc770 || _0xddc770 <= 0x0)
            return null;
        return _0x337416[_0x55000e(0x509)]['get'](String(_0xddc770)) || null;
    }
    let _0x4285dc = _0x1f060e[_0x45c9c2(0x8d9)](_0x3589e4, _0x1f060e[_0x45c9c2(0x8db)], {});
    if (typeof _0x4285dc !== _0x1f060e[_0x45c9c2(0x7ed)] || _0x4285dc === null)
        _0x4285dc = {};
    function _0x4d47ac() {
        const _0x598155 = _0x45c9c2;
        _0x299b4c(_0x1f060e[_0x598155(0x8db)], _0x4285dc);
        const _0x3fe480 = {};
        _0x3fe480[_0x598155(0x92f)] = _0x1f060e[_0x598155(0x8db)], _0x3fe480[_0x598155(0x814)] = _0x4285dc, _0x5b70e4(_0x598155(0x2ed), _0x3fe480);
    }
    function _0x266a19(_0x498874) {
        const _0x473105 = _0x45c9c2;
        return _0x1f060e[_0x473105(0x910)](Boolean, _0x4285dc[_0x498874]?.[_0x473105(0x4e3)]);
    }
    function _0x53bb36(_0xde0959, _0x20281c) {
        const _0x48428f = _0x45c9c2;
        if (!_0x4285dc[_0xde0959])
            _0x4285dc[_0xde0959] = {};
        _0x4285dc[_0xde0959][_0x48428f(0x4e3)] = Boolean(_0x20281c), _0x4d47ac();
    }
    function _0x4ffd01(_0x1834a6) {
        const _0x220264 = _0x45c9c2;
        if (_0x4285dc[_0x1834a6] && _0x1f060e['sLTcv'](_0x4285dc[_0x1834a6][_0x220264(0x2f8)], undefined))
            return _0x4285dc[_0x1834a6][_0x220264(0x2f8)];
        return parseInt(_0x59e0bf[_0x220264(0x586)], 0xa) || 0x5;
    }
    function _0x35abb8(_0x39d6a7, _0x111ad7) {
        const _0x296b92 = _0x45c9c2;
        if (!_0x4285dc[_0x39d6a7])
            _0x4285dc[_0x39d6a7] = {};
        const _0x370641 = parseInt(_0x111ad7, 0xa);
        _0x1f060e[_0x296b92(0x420)](_0x370641, 0x0) ? _0x4285dc[_0x39d6a7][_0x296b92(0x2f8)] = _0x370641 : delete _0x4285dc[_0x39d6a7][_0x296b92(0x2f8)], _0x1f060e['QFUkP'](_0x4d47ac);
    }
    function _0x5d81a2(_0x15dfc4) {
        const _0x50d352 = _0x45c9c2;
        if (!_0x15dfc4 || _0x1f060e[_0x50d352(0x420)](typeof _0x15dfc4, _0x50d352(0x794)))
            return null;
        for (const _0x10c001 of Object[_0x50d352(0x770)](_0x15dfc4)) {
            if (_0x1f060e[_0x50d352(0x4ce)](typeof _0x10c001, _0x50d352(0x531)))
                continue;
            const _0x8dbeb6 = _0x10c001[_0x50d352(0x626)]();
            if (!(_0x8dbeb6['includes'](_0x1f060e[_0x50d352(0x6b1)]) || _0x8dbeb6[_0x50d352(0x67b)](_0x1f060e[_0x50d352(0x82d)]) || (_0x8dbeb6[_0x50d352(0x67b)](_0x50d352(0x67c)) || _0x8dbeb6[_0x50d352(0x67b)](_0x1f060e['xpWmu'])) && _0x8dbeb6[_0x50d352(0x67b)](_0x1f060e[_0x50d352(0x34c)])))
                continue;
            const _0x53070a = _0x10c001[_0x50d352(0x772)](/(defending|assaulting)\s*:?\s*(\S*)/i), _0x128d06 = _0x53070a && /^[A-Z0-9]{2,4}$/[_0x50d352(0x5eb)](_0x53070a[0x2]) ? _0x53070a[0x2] : '';
            return {
                'role': _0x53070a ? _0x53070a[0x1]['charAt'](0x0)[_0x50d352(0x580)]() + _0x53070a[0x1][_0x50d352(0x399)](0x1)[_0x50d352(0x626)]() : null,
                'sector': _0x128d06
            };
        }
        return null;
    }
    function _0x146b89(_0x52254f) {
        const _0x2c2485 = _0x45c9c2;
        return _0x1f060e[_0x2c2485(0x910)](Boolean, _0x5d81a2(_0x52254f));
    }
    function _0x34abd6(_0x1e6adf) {
        const _0x488f1a = _0x45c9c2;
        if (!_0x1e6adf)
            return '';
        return [
            _0x1e6adf[_0x488f1a(0x6d2)],
            _0x1e6adf[_0x488f1a(0x212)]
        ][_0x488f1a(0x668)](Boolean)[_0x488f1a(0x207)]('\x20');
    }
    function _0x4615b8(_0x52232e, _0x589a00) {
        const _0x2efd85 = _0x45c9c2, _0x4d7c92 = _0x38260e(_0x52232e);
        if (!_0x589a00)
            return _0x4d7c92;
        if (_0x4d7c92 && _0x4d7c92[_0x2efd85(0x83e)] === _0x2efd85(0x373))
            return {
                ..._0x4d7c92,
                'wall': _0x589a00
            };
        const _0x3886fb = { ..._0x4d7c92 || {} };
        return _0x3886fb['type'] = _0x2efd85(0x5be), _0x3886fb[_0x2efd85(0x212)] = _0x589a00[_0x2efd85(0x212)] || _0x4d7c92?.[_0x2efd85(0x212)] || '', _0x3886fb[_0x2efd85(0x529)] = _0x589a00, _0x3886fb;
    }
    function _0x687f46(_0x352cf8, _0x2e8659 = null) {
        const _0x59a6eb = _0x45c9c2, _0x2dbe6d = _0x2e8659 || (_0x352cf8 && _0x167784[_0x352cf8] ? _0x167784[_0x352cf8][_0x59a6eb(0x4c4)] : null);
        if (_0x2dbe6d && (_0x2dbe6d[_0x59a6eb(0x529)] || _0x1f060e[_0x59a6eb(0x4bd)](_0x2dbe6d[_0x59a6eb(0x863)], !![])))
            return !![];
        if (_0x352cf8 && _0x4285dc[_0x352cf8] && typeof _0x4285dc[_0x352cf8][_0x59a6eb(0x7b3)] === _0x59a6eb(0x5ba))
            return _0x4285dc[_0x352cf8][_0x59a6eb(0x7b3)];
        if (_0x2dbe6d) {
            if (typeof _0x2dbe6d['onWall'] === 'boolean')
                return _0x2dbe6d[_0x59a6eb(0x863)];
            if (_0x2dbe6d[_0x59a6eb(0x9c2)])
                return _0x1f060e[_0x59a6eb(0x4d4)](_0x146b89, _0x2dbe6d[_0x59a6eb(0x9c2)]);
        }
        if (_0x352cf8 && _0x4285dc[_0x352cf8] && _0x4285dc[_0x352cf8]['onWall'] !== undefined)
            return Boolean(_0x4285dc[_0x352cf8][_0x59a6eb(0x863)]);
        return _0x1f060e['tDPcP'](_0x59e0bf[_0x59a6eb(0x278)] || _0x1f060e[_0x59a6eb(0x790)], 'all_wars');
    }
    function _0x132656(_0x2b4224, _0x1b476a) {
        const _0xcaa647 = _0x45c9c2;
        if (!_0x2b4224)
            return;
        if (!_0x4285dc[_0x2b4224])
            _0x4285dc[_0x2b4224] = {};
        _0x4285dc[_0x2b4224][_0xcaa647(0x7b3)] = _0x1f060e[_0xcaa647(0x64e)](Boolean, _0x1b476a), _0x4285dc[_0x2b4224][_0xcaa647(0x863)] = _0x1f060e[_0xcaa647(0x2ff)](Boolean, _0x1b476a), _0x4d47ac(), _0x167784[_0x2b4224] && _0x167784[_0x2b4224]['data'] && (_0x167784[_0x2b4224][_0xcaa647(0x4c4)][_0xcaa647(0x863)] = _0x1f060e[_0xcaa647(0x4b8)](Boolean, _0x1b476a));
    }
    function _0x40ab66(_0x2c766a, _0x549241 = null) {
        const _0x48b805 = _0x45c9c2;
        if (!_0x2c766a || !_0x2c766a[_0x48b805(0x232)] || !_0x2c766a[_0x48b805(0x406)])
            return ![];
        if (_0x1f060e[_0x48b805(0x5b7)](_0x2c766a[_0x48b805(0x406)][_0x48b805(0x83e)], _0x1f060e['WPvJd']))
            return !![];
        if (_0x2c766a[_0x48b805(0x406)][_0x48b805(0x83e)] === _0x48b805(0x5be))
            return _0x687f46(_0x549241, _0x2c766a);
        return Boolean(_0x2c766a[_0x48b805(0x232)]);
    }
    const _0x167784 = {}, _0x132ab6 = [];
    function _0x5242fe() {
        const _0x2ad2cb = _0x45c9c2, _0x5bd493 = Date[_0x2ad2cb(0x903)]();
        _0x132ab6[_0x2ad2cb(0x3ca)](_0x5bd493);
        while (_0x132ab6['length'] > 0x0 && _0x132ab6[0x0] < _0x5bd493 - 0xea60) {
            _0x132ab6[_0x2ad2cb(0x91c)]();
        }
    }
    function _0x5d92bc() {
        const _0x2d0321 = _0x45c9c2, _0x456e67 = Date[_0x2d0321(0x903)]();
        while (_0x132ab6[_0x2d0321(0x453)] > 0x0 && _0x1f060e[_0x2d0321(0x489)](_0x132ab6[0x0], _0x456e67 - 0xea60)) {
            _0x132ab6[_0x2d0321(0x91c)]();
        }
        return _0x132ab6[_0x2d0321(0x453)];
    }
    let _0x7f9203 = null;
    function _0x422c46() {
        const _0x20e6ac = _0x45c9c2;
        try {
            const _0x195351 = window[_0x20e6ac(0x2d9)] || window[_0x20e6ac(0x1e4)];
            if (!_0x195351)
                return null;
            return (!_0x7f9203 || _0x7f9203[_0x20e6ac(0x2ed)] === _0x20e6ac(0x81c)) && (_0x7f9203 = new _0x195351()), _0x7f9203[_0x20e6ac(0x2ed)] === _0x20e6ac(0x29d) && _0x7f9203[_0x20e6ac(0x33a)]()[_0x20e6ac(0x2af)](() => {
            }), _0x7f9203;
        } catch (_0x46a684) {
            return null;
        }
    }
    let _0xd7c282 = ![];
    function _0x562cb9() {
        const _0x1ac1a8 = _0x45c9c2;
        try {
            const _0x38bf90 = _0x422c46();
            if (_0x38bf90) {
                _0x1f060e[_0x1ac1a8(0x51e)](_0x38bf90[_0x1ac1a8(0x2ed)], _0x1f060e[_0x1ac1a8(0x87b)]) && _0x38bf90['resume']()['catch'](() => {
                });
                if (!_0xd7c282) {
                    const _0x1b9842 = _0x38bf90[_0x1ac1a8(0x3c4)](0x1, 0x1, 0x5622), _0x5bcc8d = _0x38bf90[_0x1ac1a8(0x932)]();
                    _0x5bcc8d['buffer'] = _0x1b9842, _0x5bcc8d[_0x1ac1a8(0x32d)](_0x38bf90['destination']), _0x5bcc8d['start'](0x0), _0xd7c282 = !![];
                }
            }
        } catch (_0x1e5f0f) {
        }
    }
    [
        'click',
        _0x1f060e[_0x45c9c2(0x322)],
        _0x45c9c2(0x88a),
        _0x45c9c2(0x2e5),
        _0x45c9c2(0x419)
    ][_0x45c9c2(0x38f)](_0xad004c => {
        const _0x1ca05f = _0x45c9c2, _0x78bbe4 = {};
        _0x78bbe4[_0x1ca05f(0x6d8)] = !![], _0x78bbe4[_0x1ca05f(0x623)] = !![], document[_0x1ca05f(0x5b5)](_0xad004c, _0x562cb9, _0x78bbe4);
        const _0x236154 = {};
        _0x236154[_0x1ca05f(0x6d8)] = !![], _0x236154[_0x1ca05f(0x623)] = !![], window[_0x1ca05f(0x5b5)](_0xad004c, _0x562cb9, _0x236154);
    });
    function _0x10008b(_0x4edfaa = _0x45c9c2(0x4f0), _0x2b7e7f = 0x3e8, _0x20bb69 = 0.85) {
        const _0x15658d = _0x45c9c2;
        try {
            const _0x55a349 = 0x1f40, _0x5931dc = Math[_0x15658d(0x306)](_0x55a349 * _0x1f060e[_0x15658d(0x300)](_0x2b7e7f, 0x3e8)), _0x3fe2e0 = new Uint8Array(0x2c + _0x5931dc), _0x180de6 = new DataView(_0x3fe2e0[_0x15658d(0x380)]), _0x200565 = (_0x31fde8, _0x516a99) => {
                    const _0x38824f = _0x15658d;
                    for (let _0xba8099 = 0x0; _0xba8099 < _0x516a99[_0x38824f(0x453)]; _0xba8099++)
                        _0x3fe2e0[_0x31fde8 + _0xba8099] = _0x516a99[_0x38824f(0x665)](_0xba8099);
                };
            _0x200565(0x0, _0x15658d(0x69e)), _0x180de6[_0x15658d(0x7bd)](0x4, _0x1f060e['ddouw'](0x24, _0x5931dc), !![]), _0x200565(0x8, _0x15658d(0x362)), _0x200565(0xc, _0x1f060e[_0x15658d(0x2c7)]), _0x180de6[_0x15658d(0x7bd)](0x10, 0x10, !![]), _0x180de6[_0x15658d(0x3f5)](0x14, 0x1, !![]), _0x180de6['setUint16'](0x16, 0x1, !![]), _0x180de6[_0x15658d(0x7bd)](0x18, _0x55a349, !![]), _0x180de6[_0x15658d(0x7bd)](0x1c, _0x55a349, !![]), _0x180de6['setUint16'](0x20, 0x1, !![]), _0x180de6[_0x15658d(0x3f5)](0x22, 0x8, !![]), _0x200565(0x24, _0x15658d(0x4c4)), _0x180de6[_0x15658d(0x7bd)](0x28, _0x5931dc, !![]);
            for (let _0xef57bd = 0x0; _0x1f060e[_0x15658d(0x6eb)](_0xef57bd, _0x5931dc); _0xef57bd++) {
                const _0x68d8e0 = _0xef57bd / _0x55a349;
                let _0x238a63 = 0x370, _0x3d9c52 = 0x1;
                if (_0x1f060e[_0x15658d(0x59c)](_0x4edfaa, _0x15658d(0x542))) {
                    const _0x5aa847 = _0x68d8e0 % 0.33;
                    _0x3d9c52 = _0x1f060e[_0x15658d(0x57b)](_0x5aa847, 0.22) ? 0x1 : 0x0, _0x238a63 = 1174.66;
                } else {
                    if (_0x4edfaa === _0x15658d(0x8ce)) {
                        if (_0x68d8e0 < 0.25)
                            _0x238a63 = 587.33;
                        else {
                            if (_0x1f060e[_0x15658d(0x6c3)](_0x68d8e0, 0.5))
                                _0x238a63 = 0x370;
                            else
                                _0x238a63 = 1174.66;
                        }
                        _0x3d9c52 = 0x1;
                    } else
                        _0x238a63 = Math[_0x15658d(0x306)](_0x68d8e0 / 0.2) % 0x2 === 0x0 ? 0x6e0 : 0x3dc;
                }
                const _0x3fbd8e = Math[_0x15658d(0x559)](0x1, _0x1f060e[_0x15658d(0x300)](_0x1f060e[_0x15658d(0x54f)](_0x5931dc, _0xef57bd), _0x1f060e['hUjyI'](_0x55a349, 0.05))), _0x38a3a2 = (_0x1f060e[_0x15658d(0x889)](Math[_0x15658d(0x414)](_0x1f060e[_0x15658d(0x703)](0x2, Math['PI']) * _0x238a63 * _0x68d8e0), 0x0) ? 0x1 : -0x1) * _0x3d9c52;
                _0x3fe2e0[0x2c + _0xef57bd] = Math[_0x15658d(0x306)](_0x1f060e[_0x15658d(0x6d1)](0x80, _0x38a3a2 * 0x78 * _0x20bb69 * _0x3fbd8e));
            }
            const _0x26cf6e = {};
            _0x26cf6e[_0x15658d(0x83e)] = _0x15658d(0x60a);
            const _0x1d05d4 = new Blob([_0x3fe2e0], _0x26cf6e), _0x3d6a86 = URL[_0x15658d(0x3dc)](_0x1d05d4), _0x360ac9 = new Audio(_0x3d6a86);
            _0x360ac9[_0x15658d(0x554)] = Math[_0x15658d(0x776)](0.1, Math[_0x15658d(0x559)](0x1, _0x20bb69)), _0x360ac9[_0x15658d(0x7b9)]()[_0x15658d(0x2af)](() => {
            }), _0x1f060e[_0x15658d(0x825)](setTimeout, () => URL[_0x15658d(0x7fb)](_0x3d6a86), _0x1f060e['ddouw'](_0x2b7e7f, 0x3e8));
        } catch (_0x47d3d7) {
            console[_0x15658d(0x674)](_0x1f060e['uGYgd'], _0x47d3d7);
        }
    }
    function _0x30dd48(_0x529f68) {
        const _0x396031 = _0x45c9c2;
        window[_0x396031(0x295)]['href'] = _0x529f68;
    }
    let _0x15981a = null, _0x473ae2 = null;
    function _0x423511(_0xc34064 = _0x45c9c2(0x470)) {
        const _0xe00ade = _0x45c9c2;
        _0x52a8e1(), _0x473ae2 = document[_0xe00ade(0x2ca)];
        let _0x131676 = ![];
        _0x15981a = setInterval(() => {
            const _0x384455 = _0xe00ade;
            document['title'] = _0x131676 ? '🚨\x20[' + _0xc34064 + ']' : _0x384455(0x959), _0x131676 = !_0x131676;
        }, 0x258);
        const _0x4969ea = () => {
            const _0x1a37de = _0xe00ade;
            _0x1f060e[_0x1a37de(0x37e)](_0x52a8e1), window['removeEventListener']('focus', _0x4969ea);
        };
        window[_0xe00ade(0x5b5)](_0xe00ade(0x395), _0x4969ea), _0x1f060e[_0xe00ade(0x760)](setTimeout, () => _0x52a8e1(), 0x7530);
    }
    function _0x52a8e1() {
        const _0x1af6b3 = _0x45c9c2;
        _0x15981a && (clearInterval(_0x15981a), _0x15981a = null), _0x473ae2 && (document[_0x1af6b3(0x2ca)] = _0x473ae2, _0x473ae2 = null);
    }
    function _0x1c881a() {
        const _0x4a33aa = _0x45c9c2;
        if (!_0x59e0bf['osAutoFocus'])
            return;
        try {
            fetch(_0x1f060e[_0x4a33aa(0x1bb)], { 'mode': _0x1f060e[_0x4a33aa(0x366)] })['catch'](() => {
            });
        } catch (_0x5f3c74) {
        }
    }
    function _0xa48a1d(_0x49a6d7 = 'okay') {
        const _0x3fc293 = _0x45c9c2, _0x315b69 = {
                'CHYSF': function (_0x3d7ba8, _0x42949b) {
                    return _0x3d7ba8 + _0x42949b;
                },
                'olPMd': function (_0x169f56, _0x1e07b9) {
                    return _0x1f060e['jGGDd'](_0x169f56, _0x1e07b9);
                },
                'DUIgb': _0x1f060e[_0x3fc293(0x544)],
                'VEgxF': function (_0x59b221, _0x43b00f) {
                    const _0x46ad06 = _0x3fc293;
                    return _0x1f060e[_0x46ad06(0x512)](_0x59b221, _0x43b00f);
                }
            };
        if (!_0x59e0bf[_0x3fc293(0x540)])
            return;
        const _0x52ba1f = {};
        _0x52ba1f[_0x3fc293(0x4f0)] = 'sp', _0x52ba1f[_0x3fc293(0x8ce)] = 'sp', _0x52ba1f[_0x3fc293(0x9be)] = 'sp', _0x52ba1f[_0x3fc293(0x599)] = 'tw';
        const _0x31c5fc = _0x52ba1f[_0x49a6d7];
        if (_0x31c5fc && !_0x1f060e[_0x3fc293(0x4b8)](_0x32bfce, _0x31c5fc)) {
            console[_0x3fc293(0x2a2)](_0x3fc293(0x67d) + _0x49a6d7 + _0x3fc293(0x56a) + _0x31c5fc[_0x3fc293(0x580)]() + _0x3fc293(0x7b7));
            return;
        }
        const _0x3f1fbe = Math[_0x3fc293(0x776)](0.1, Math[_0x3fc293(0x559)](0x1, _0x59e0bf[_0x3fc293(0x273)] ?? 0x1)), _0x44cba1 = _0x422c46();
        _0x44cba1 && _0x1f060e[_0x3fc293(0x6d9)](_0x44cba1['state'], _0x1f060e[_0x3fc293(0x87b)]) && _0x44cba1[_0x3fc293(0x33a)]()[_0x3fc293(0x2af)](() => {
        });
        (!_0x44cba1 || _0x1f060e[_0x3fc293(0x68b)](_0x44cba1[_0x3fc293(0x2ed)], _0x3fc293(0x57c))) && _0x10008b(_0x49a6d7, _0x1f060e[_0x3fc293(0x579)](_0x49a6d7, _0x1f060e[_0x3fc293(0x872)]) ? 0x3e8 : _0x1f060e[_0x3fc293(0x45b)](_0x49a6d7, _0x3fc293(0x8ce)) ? 0x320 : 0x4b0, _0x3f1fbe);
        try {
            if (!_0x44cba1)
                return;
            const _0x372cb8 = _0x59e0bf['alarmSoundType'] || 'siren';
            if (_0x1f060e['nkfpN'](_0x49a6d7, _0x1f060e[_0x3fc293(0x467)]) || _0x49a6d7 === _0x3fc293(0x5eb)) {
                const _0x55c5d7 = _0x44cba1[_0x3fc293(0x6f3)]();
                _0x55c5d7['gain'][_0x3fc293(0x2b9)](0.85 * _0x3f1fbe, _0x44cba1[_0x3fc293(0x2e4)]), _0x55c5d7['connect'](_0x44cba1[_0x3fc293(0x543)]);
                if (_0x372cb8 === _0x3fc293(0x765))
                    for (let _0x2785e7 = 0x0; _0x2785e7 < 0x3; _0x2785e7++) {
                        const _0x5c93a6 = _0x44cba1[_0x3fc293(0x2e4)] + _0x2785e7 * 0.4, _0x5398d = _0x44cba1[_0x3fc293(0x5b6)](), _0x11395 = _0x44cba1[_0x3fc293(0x5b6)](), _0x5ee368 = _0x44cba1[_0x3fc293(0x6f3)]();
                        _0x5398d[_0x3fc293(0x83e)] = _0x1f060e[_0x3fc293(0x749)], _0x11395[_0x3fc293(0x83e)] = 'square', _0x5398d[_0x3fc293(0x76b)]['setValueAtTime'](0x6e0, _0x5c93a6), _0x11395[_0x3fc293(0x76b)][_0x3fc293(0x2b9)](0x6e0, _0x5c93a6), _0x5ee368[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.5, _0x5c93a6), _0x5ee368[_0x3fc293(0x1f9)][_0x3fc293(0x21c)](0.01, _0x5c93a6 + 0.18), _0x5398d[_0x3fc293(0x32d)](_0x5ee368), _0x11395[_0x3fc293(0x32d)](_0x5ee368), _0x5ee368[_0x3fc293(0x32d)](_0x55c5d7), _0x5398d[_0x3fc293(0x926)](_0x5c93a6), _0x11395[_0x3fc293(0x926)](_0x5c93a6), _0x5398d['stop'](_0x5c93a6 + 0.18), _0x11395[_0x3fc293(0x7f1)](_0x5c93a6 + 0.18);
                        const _0x540420 = _0x44cba1[_0x3fc293(0x5b6)](), _0x51755e = _0x44cba1[_0x3fc293(0x5b6)](), _0x5d7ec8 = _0x44cba1[_0x3fc293(0x6f3)]();
                        _0x540420[_0x3fc293(0x83e)] = _0x3fc293(0x1b5), _0x51755e[_0x3fc293(0x83e)] = _0x1f060e[_0x3fc293(0x7f0)], _0x540420[_0x3fc293(0x76b)][_0x3fc293(0x2b9)](0x3dc, _0x1f060e[_0x3fc293(0x7b2)](_0x5c93a6, 0.2)), _0x51755e['frequency'][_0x3fc293(0x2b9)](0x3dc, _0x5c93a6 + 0.2), _0x5d7ec8[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.5, _0x1f060e[_0x3fc293(0x8e8)](_0x5c93a6, 0.2)), _0x5d7ec8[_0x3fc293(0x1f9)][_0x3fc293(0x21c)](0.01, _0x1f060e['BKrrz'](_0x5c93a6, 0.38)), _0x540420[_0x3fc293(0x32d)](_0x5d7ec8), _0x51755e[_0x3fc293(0x32d)](_0x5d7ec8), _0x5d7ec8[_0x3fc293(0x32d)](_0x55c5d7), _0x540420[_0x3fc293(0x926)](_0x5c93a6 + 0.2), _0x51755e[_0x3fc293(0x926)](_0x5c93a6 + 0.2), _0x540420[_0x3fc293(0x7f1)](_0x5c93a6 + 0.38), _0x51755e[_0x3fc293(0x7f1)](_0x5c93a6 + 0.38);
                    }
                else {
                    if (_0x1f060e[_0x3fc293(0x8ff)](_0x372cb8, _0x1f060e[_0x3fc293(0x5f0)])) {
                        const _0x3565c9 = {};
                        _0x3565c9[_0x3fc293(0x926)] = _0x44cba1[_0x3fc293(0x2e4)], _0x3565c9[_0x3fc293(0x738)] = 0.32;
                        const _0x3fb12e = {};
                        _0x3fb12e[_0x3fc293(0x926)] = _0x44cba1['currentTime'] + 0.42, _0x3fb12e['dur'] = 0.48;
                        const _0x587d80 = [
                            _0x3565c9,
                            _0x3fb12e
                        ];
                        _0x587d80[_0x3fc293(0x38f)](_0x418a94 => {
                            [
                                0x1b8,
                                554.37,
                                659.25
                            ]['forEach'](_0x1b0817 => {
                                const _0x153dcd = _0xf22e, _0x527f8d = _0x44cba1['createOscillator'](), _0x237cf3 = _0x44cba1['createGain']();
                                _0x527f8d['type'] = _0x153dcd(0x1b5), _0x527f8d[_0x153dcd(0x76b)][_0x153dcd(0x2b9)](_0x1b0817, _0x418a94[_0x153dcd(0x926)]), _0x237cf3['gain'][_0x153dcd(0x2b9)](0.33, _0x418a94[_0x153dcd(0x926)]), _0x237cf3[_0x153dcd(0x1f9)][_0x153dcd(0x21c)](0.01, _0x418a94[_0x153dcd(0x926)] + _0x418a94['dur']), _0x527f8d[_0x153dcd(0x32d)](_0x237cf3), _0x237cf3[_0x153dcd(0x32d)](_0x55c5d7), _0x527f8d['start'](_0x418a94[_0x153dcd(0x926)]), _0x527f8d[_0x153dcd(0x7f1)](_0x418a94[_0x153dcd(0x926)] + _0x418a94[_0x153dcd(0x738)]);
                            });
                        });
                    } else {
                        if (_0x372cb8 === _0x3fc293(0x4b9))
                            for (let _0x8acb6f = 0x0; _0x8acb6f < 0x2; _0x8acb6f++) {
                                const _0x49a280 = _0x1f060e[_0x3fc293(0x2d7)](_0x44cba1[_0x3fc293(0x2e4)], _0x1f060e[_0x3fc293(0x246)](_0x8acb6f, 0.55)), _0x313e55 = _0x44cba1[_0x3fc293(0x5b6)](), _0x27219c = _0x44cba1[_0x3fc293(0x6f3)]();
                                _0x313e55[_0x3fc293(0x83e)] = 'sawtooth', _0x313e55[_0x3fc293(0x76b)][_0x3fc293(0x2b9)](587.33, _0x49a280), _0x313e55['frequency'][_0x3fc293(0x6bc)](1174.66, _0x49a280 + 0.25), _0x313e55[_0x3fc293(0x76b)]['linearRampToValueAtTime'](587.33, _0x1f060e['TXaWT'](_0x49a280, 0.5)), _0x27219c['gain'][_0x3fc293(0x2b9)](0.8, _0x49a280), _0x27219c[_0x3fc293(0x1f9)][_0x3fc293(0x21c)](0.01, _0x49a280 + 0.5), _0x313e55[_0x3fc293(0x32d)](_0x27219c), _0x27219c[_0x3fc293(0x32d)](_0x55c5d7), _0x313e55[_0x3fc293(0x926)](_0x49a280), _0x313e55[_0x3fc293(0x7f1)](_0x49a280 + 0.5);
                            }
                        else {
                            const _0x512cea = _0x44cba1[_0x3fc293(0x2e4)], _0x16b90d = _0x44cba1['createOscillator'](), _0x2aa9de = _0x44cba1[_0x3fc293(0x5b6)](), _0x30072d = _0x44cba1['createGain'](), _0x575748 = _0x44cba1[_0x3fc293(0x6f3)]();
                            _0x16b90d[_0x3fc293(0x83e)] = _0x3fc293(0x671), _0x2aa9de[_0x3fc293(0x83e)] = _0x1f060e[_0x3fc293(0x539)], _0x16b90d[_0x3fc293(0x76b)][_0x3fc293(0x2b9)](1046.5, _0x512cea), _0x2aa9de['frequency'][_0x3fc293(0x2b9)](1567.98, _0x512cea + 0.18), _0x30072d[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.7, _0x512cea), _0x30072d[_0x3fc293(0x1f9)]['exponentialRampToValueAtTime'](0.01, _0x512cea + 0.5), _0x575748[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.8, _0x1f060e[_0x3fc293(0x5af)](_0x512cea, 0.18)), _0x575748['gain'][_0x3fc293(0x21c)](0.01, _0x512cea + 0.7), _0x16b90d[_0x3fc293(0x32d)](_0x30072d), _0x2aa9de['connect'](_0x575748), _0x30072d[_0x3fc293(0x32d)](_0x55c5d7), _0x575748[_0x3fc293(0x32d)](_0x55c5d7), _0x16b90d[_0x3fc293(0x926)](_0x512cea), _0x2aa9de['start'](_0x512cea + 0.18), _0x16b90d[_0x3fc293(0x7f1)](_0x512cea + 0.5), _0x2aa9de[_0x3fc293(0x7f1)](_0x512cea + 0.7);
                        }
                    }
                }
            } else {
                if (_0x49a6d7 === _0x1f060e[_0x3fc293(0x872)]) {
                    const _0x508222 = _0x44cba1[_0x3fc293(0x6f3)]();
                    _0x508222[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.85 * _0x3f1fbe, _0x44cba1[_0x3fc293(0x2e4)]), _0x508222[_0x3fc293(0x32d)](_0x44cba1[_0x3fc293(0x543)]);
                    for (let _0x2a6694 = 0x0; _0x1f060e['GJkgy'](_0x2a6694, 0x3); _0x2a6694++) {
                        const _0x597b50 = _0x44cba1['currentTime'] + _0x1f060e[_0x3fc293(0x2e0)](_0x2a6694, 0.32), _0x4f3f49 = _0x44cba1[_0x3fc293(0x5b6)](), _0xd868b8 = _0x44cba1[_0x3fc293(0x5b6)](), _0x203f94 = _0x44cba1['createGain']();
                        _0x4f3f49[_0x3fc293(0x83e)] = _0x1f060e[_0x3fc293(0x749)], _0xd868b8[_0x3fc293(0x83e)] = _0x3fc293(0x748), _0x4f3f49[_0x3fc293(0x76b)][_0x3fc293(0x2b9)](1046.5, _0x597b50), _0xd868b8['frequency'][_0x3fc293(0x2b9)](1318.5, _0x597b50), _0x203f94[_0x3fc293(0x1f9)]['setValueAtTime'](0.6, _0x597b50), _0x203f94[_0x3fc293(0x1f9)]['exponentialRampToValueAtTime'](0.01, _0x597b50 + 0.22), _0x4f3f49[_0x3fc293(0x32d)](_0x203f94), _0xd868b8[_0x3fc293(0x32d)](_0x203f94), _0x203f94['connect'](_0x508222), _0x4f3f49[_0x3fc293(0x926)](_0x597b50), _0xd868b8[_0x3fc293(0x926)](_0x597b50), _0x4f3f49[_0x3fc293(0x7f1)](_0x597b50 + 0.22), _0xd868b8['stop'](_0x1f060e['BIfUM'](_0x597b50, 0.22));
                    }
                } else {
                    if (_0x1f060e[_0x3fc293(0x3b2)](_0x49a6d7, _0x1f060e[_0x3fc293(0x4f9)])) {
                        const _0x59c3de = _0x44cba1[_0x3fc293(0x6f3)]();
                        _0x59c3de[_0x3fc293(0x1f9)]['setValueAtTime'](_0x1f060e[_0x3fc293(0x2e0)](0.85, _0x3f1fbe), _0x44cba1[_0x3fc293(0x2e4)]), _0x59c3de[_0x3fc293(0x32d)](_0x44cba1[_0x3fc293(0x543)]);
                        const _0x13da20 = {};
                        _0x13da20['f'] = 587.33, _0x13da20['t'] = 0x0, _0x13da20['d'] = 0.18;
                        const _0x457503 = {};
                        _0x457503['f'] = 0x370, _0x457503['t'] = 0.18, _0x457503['d'] = 0.18;
                        const _0x466fa9 = {};
                        _0x466fa9['f'] = 1174.66, _0x466fa9['t'] = 0.36, _0x466fa9['d'] = 0.44;
                        const _0xc8950e = [
                            _0x13da20,
                            _0x457503,
                            _0x466fa9
                        ];
                        _0xc8950e[_0x3fc293(0x38f)](_0x13b13d => {
                            const _0x4910c1 = _0x3fc293, _0x28998a = _0x315b69[_0x4910c1(0x701)](_0x44cba1[_0x4910c1(0x2e4)], _0x13b13d['t']), _0x564747 = _0x44cba1[_0x4910c1(0x5b6)](), _0xd0031a = _0x44cba1[_0x4910c1(0x5b6)](), _0x3730ea = _0x44cba1[_0x4910c1(0x6f3)]();
                            _0x564747[_0x4910c1(0x83e)] = _0x4910c1(0x1b5), _0xd0031a[_0x4910c1(0x83e)] = _0x4910c1(0x748), _0x564747[_0x4910c1(0x76b)][_0x4910c1(0x2b9)](_0x13b13d['f'], _0x28998a), _0xd0031a['frequency']['setValueAtTime'](_0x13b13d['f'], _0x28998a), _0x3730ea[_0x4910c1(0x1f9)][_0x4910c1(0x2b9)](0.5, _0x28998a), _0x3730ea[_0x4910c1(0x1f9)][_0x4910c1(0x21c)](0.01, _0x28998a + _0x13b13d['d']), _0x564747['connect'](_0x3730ea), _0xd0031a[_0x4910c1(0x32d)](_0x3730ea), _0x3730ea[_0x4910c1(0x32d)](_0x59c3de), _0x564747[_0x4910c1(0x926)](_0x28998a), _0xd0031a[_0x4910c1(0x926)](_0x28998a), _0x564747['stop'](_0x315b69['olPMd'](_0x28998a, _0x13b13d['d'])), _0xd0031a[_0x4910c1(0x7f1)](_0x315b69[_0x4910c1(0x788)](_0x28998a, _0x13b13d['d']));
                        });
                    } else {
                        if (_0x49a6d7 === _0x1f060e[_0x3fc293(0x6ee)]) {
                            const _0x66181d = _0x44cba1[_0x3fc293(0x6f3)]();
                            _0x66181d[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.85 * _0x3f1fbe, _0x44cba1[_0x3fc293(0x2e4)]), _0x66181d['connect'](_0x44cba1[_0x3fc293(0x543)]);
                            const _0x55983a = {};
                            _0x55983a['f'] = 1318.51, _0x55983a[_0x3fc293(0x926)] = 0x0, _0x55983a[_0x3fc293(0x738)] = 1.2;
                            const _0x1144cf = {};
                            _0x1144cf['f'] = 1046.5, _0x1144cf[_0x3fc293(0x926)] = 0.22, _0x1144cf[_0x3fc293(0x738)] = 1.5;
                            const _0x3eff9b = [
                                _0x55983a,
                                _0x1144cf
                            ];
                            _0x3eff9b['forEach'](_0x388ccb => {
                                const _0x44de7a = _0x3fc293, _0x32c2e4 = _0x315b69['olPMd'](_0x44cba1[_0x44de7a(0x2e4)], _0x388ccb['start']), _0x4f7ba1 = _0x44cba1[_0x44de7a(0x5b6)](), _0x5d43ce = _0x44cba1[_0x44de7a(0x5b6)](), _0x3fa7b2 = _0x44cba1[_0x44de7a(0x6f3)]();
                                _0x4f7ba1[_0x44de7a(0x83e)] = _0x315b69[_0x44de7a(0x56f)], _0x5d43ce[_0x44de7a(0x83e)] = _0x44de7a(0x26b), _0x4f7ba1['frequency'][_0x44de7a(0x2b9)](_0x388ccb['f'], _0x32c2e4), _0x5d43ce[_0x44de7a(0x76b)][_0x44de7a(0x2b9)](_0x388ccb['f'] * 2.02, _0x32c2e4), _0x3fa7b2['gain'][_0x44de7a(0x2b9)](0.0001, _0x32c2e4), _0x3fa7b2[_0x44de7a(0x1f9)][_0x44de7a(0x6bc)](0.7, _0x32c2e4 + 0.008), _0x3fa7b2[_0x44de7a(0x1f9)][_0x44de7a(0x21c)](0.0001, _0x315b69[_0x44de7a(0x976)](_0x32c2e4, _0x388ccb[_0x44de7a(0x738)])), _0x4f7ba1[_0x44de7a(0x32d)](_0x3fa7b2), _0x5d43ce[_0x44de7a(0x32d)](_0x3fa7b2), _0x3fa7b2[_0x44de7a(0x32d)](_0x66181d), _0x4f7ba1[_0x44de7a(0x926)](_0x32c2e4), _0x5d43ce[_0x44de7a(0x926)](_0x32c2e4), _0x4f7ba1[_0x44de7a(0x7f1)](_0x32c2e4 + _0x388ccb['dur']), _0x5d43ce['stop'](_0x315b69[_0x44de7a(0x976)](_0x32c2e4, _0x388ccb['dur']));
                            });
                        } else {
                            if (_0x1f060e[_0x3fc293(0x1e7)](_0x49a6d7, _0x1f060e['JEVVH'])) {
                                const _0x556356 = _0x44cba1[_0x3fc293(0x6f3)]();
                                _0x556356[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.85 * _0x3f1fbe, _0x44cba1[_0x3fc293(0x2e4)]), _0x556356[_0x3fc293(0x32d)](_0x44cba1[_0x3fc293(0x543)]);
                                const _0x5c9d88 = {};
                                _0x5c9d88['f'] = 659.25, _0x5c9d88[_0x3fc293(0x926)] = 0x0, _0x5c9d88[_0x3fc293(0x738)] = 0.22;
                                const _0x2127f3 = {};
                                _0x2127f3['f'] = 830.61, _0x2127f3[_0x3fc293(0x926)] = 0.09, _0x2127f3['dur'] = 0.22;
                                const _0x1e3cb1 = {};
                                _0x1e3cb1['f'] = 987.77, _0x1e3cb1[_0x3fc293(0x926)] = 0.18, _0x1e3cb1['dur'] = 0.26;
                                const _0x31d43b = {};
                                _0x31d43b['f'] = 1318.51, _0x31d43b[_0x3fc293(0x926)] = 0.28, _0x31d43b['dur'] = 0.85;
                                const _0x84763d = [
                                    _0x5c9d88,
                                    _0x2127f3,
                                    _0x1e3cb1,
                                    _0x31d43b
                                ];
                                _0x84763d[_0x3fc293(0x38f)](_0xa76df0 => {
                                    const _0x11b8c8 = _0x3fc293, _0xed1df2 = _0x44cba1[_0x11b8c8(0x2e4)] + _0xa76df0['start'], _0x1ed95c = _0x44cba1['createOscillator'](), _0x18d59e = _0x44cba1[_0x11b8c8(0x5b6)](), _0x27184c = _0x44cba1[_0x11b8c8(0x6f3)]();
                                    _0x1ed95c[_0x11b8c8(0x83e)] = _0x1f060e[_0x11b8c8(0x544)], _0x18d59e['type'] = _0x11b8c8(0x26b), _0x1ed95c[_0x11b8c8(0x76b)][_0x11b8c8(0x2b9)](_0xa76df0['f'], _0xed1df2), _0x18d59e[_0x11b8c8(0x76b)]['setValueAtTime'](_0xa76df0['f'] * 2.01, _0xed1df2), _0x27184c[_0x11b8c8(0x1f9)][_0x11b8c8(0x2b9)](0.001, _0xed1df2), _0x27184c[_0x11b8c8(0x1f9)]['linearRampToValueAtTime'](0.7, _0xed1df2 + 0.008), _0x27184c['gain']['exponentialRampToValueAtTime'](0.001, _0xed1df2 + _0xa76df0[_0x11b8c8(0x738)]), _0x1ed95c[_0x11b8c8(0x32d)](_0x27184c), _0x18d59e[_0x11b8c8(0x32d)](_0x27184c), _0x27184c['connect'](_0x556356), _0x1ed95c[_0x11b8c8(0x926)](_0xed1df2), _0x18d59e[_0x11b8c8(0x926)](_0xed1df2), _0x1ed95c[_0x11b8c8(0x7f1)](_0xed1df2 + _0xa76df0[_0x11b8c8(0x738)]), _0x18d59e[_0x11b8c8(0x7f1)](_0xed1df2 + _0xa76df0[_0x11b8c8(0x738)]);
                                });
                                const _0x3f2619 = _0x44cba1[_0x3fc293(0x2e4)] + 0.28, _0x4381d1 = _0x44cba1[_0x3fc293(0x5b6)](), _0x5e7f89 = _0x44cba1[_0x3fc293(0x6f3)]();
                                _0x4381d1[_0x3fc293(0x83e)] = 'sine', _0x4381d1[_0x3fc293(0x76b)][_0x3fc293(0x2b9)](2637.02, _0x3f2619), _0x5e7f89[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.001, _0x3f2619), _0x5e7f89[_0x3fc293(0x1f9)][_0x3fc293(0x6bc)](0.55, _0x1f060e[_0x3fc293(0x8e8)](_0x3f2619, 0.005)), _0x5e7f89['gain'][_0x3fc293(0x21c)](0.0001, _0x1f060e['fJpjC'](_0x3f2619, 0.6)), _0x4381d1['connect'](_0x5e7f89), _0x5e7f89[_0x3fc293(0x32d)](_0x556356), _0x4381d1['start'](_0x3f2619), _0x4381d1[_0x3fc293(0x7f1)](_0x1f060e[_0x3fc293(0x5af)](_0x3f2619, 0.6));
                            } else {
                                if (_0x49a6d7 === _0x3fc293(0x9be) || _0x49a6d7 === _0x1f060e[_0x3fc293(0x21b)]) {
                                    const _0x4f4bf2 = _0x44cba1[_0x3fc293(0x6f3)]();
                                    _0x4f4bf2[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](_0x1f060e[_0x3fc293(0x22e)](0.95, _0x3f1fbe), _0x44cba1[_0x3fc293(0x2e4)]), _0x4f4bf2[_0x3fc293(0x32d)](_0x44cba1['destination']);
                                    for (let _0x15cec0 = 0x0; _0x15cec0 < 0x4; _0x15cec0++) {
                                        const _0x40eeae = _0x44cba1[_0x3fc293(0x2e4)] + _0x15cec0 * 0.28, _0x4df6d8 = _0x44cba1[_0x3fc293(0x5b6)](), _0x8718c7 = _0x44cba1[_0x3fc293(0x5b6)](), _0x520260 = _0x44cba1[_0x3fc293(0x6f3)]();
                                        _0x4df6d8[_0x3fc293(0x83e)] = _0x3fc293(0x1b5), _0x8718c7[_0x3fc293(0x83e)] = _0x1f060e[_0x3fc293(0x7f0)], _0x4df6d8[_0x3fc293(0x76b)][_0x3fc293(0x2b9)](0x5dc, _0x40eeae), _0x4df6d8['frequency'][_0x3fc293(0x21c)](0x28a, _0x1f060e[_0x3fc293(0x323)](_0x40eeae, 0.22)), _0x8718c7[_0x3fc293(0x76b)][_0x3fc293(0x2b9)](0x2ee, _0x40eeae), _0x8718c7[_0x3fc293(0x76b)][_0x3fc293(0x21c)](0x145, _0x40eeae + 0.22), _0x520260[_0x3fc293(0x1f9)][_0x3fc293(0x2b9)](0.8, _0x40eeae), _0x520260[_0x3fc293(0x1f9)][_0x3fc293(0x21c)](0.01, _0x1f060e[_0x3fc293(0x839)](_0x40eeae, 0.24)), _0x4df6d8[_0x3fc293(0x32d)](_0x520260), _0x8718c7[_0x3fc293(0x32d)](_0x520260), _0x520260[_0x3fc293(0x32d)](_0x4f4bf2), _0x4df6d8[_0x3fc293(0x926)](_0x40eeae), _0x8718c7[_0x3fc293(0x926)](_0x40eeae), _0x4df6d8[_0x3fc293(0x7f1)](_0x1f060e['ddouw'](_0x40eeae, 0.24)), _0x8718c7[_0x3fc293(0x7f1)](_0x40eeae + 0.24);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (_0x44aa8e) {
            console[_0x3fc293(0x674)](_0x3fc293(0x7e0), _0x44aa8e), _0x10008b(_0x1f060e[_0x3fc293(0x450)](_0x49a6d7, _0x3fc293(0x542)) ? 0x416 : _0x49a6d7 === _0x3fc293(0x377) ? 0x526 : _0x49a6d7 === 'illegal' ? 0x5dc : 0x370, 0x320, _0x3f1fbe);
        }
    }
    function _0x2129d3(_0xcc90dd, _0x174ec4) {
        const _0x418d7c = _0x45c9c2;
        if (!_0x59e0bf[_0x418d7c(0x510)])
            return;
        try {
            if (_0x1f060e[_0x418d7c(0x8b0)](typeof GM_notification, _0x418d7c(0x526))) {
                GM_notification({
                    'title': '🎯\x20Stakeout:\x20' + _0xcc90dd,
                    'text': _0x174ec4,
                    'image': 'https://www.torn.com/favicon.ico',
                    'highlight': !![],
                    'timeout': 0x4e20,
                    'onclick': () => {
                        const _0x43f133 = _0x418d7c;
                        window[_0x43f133(0x395)]();
                    }
                });
                return;
            }
        } catch (_0x1f1167) {
        }
        try {
            if ('Notification' in window) {
                if (Notification[_0x418d7c(0x2b6)] === _0x418d7c(0x474)) {
                    const _0x1efb41 = {};
                    _0x1efb41[_0x418d7c(0x299)] = _0x174ec4, _0x1efb41['icon'] = _0x418d7c(0x681), _0x1efb41[_0x418d7c(0x2fe)] = !![], _0x1efb41[_0x418d7c(0x753)] = !![];
                    const _0xe6bfe2 = new Notification(_0x418d7c(0x716) + _0xcc90dd, _0x1efb41);
                    _0xe6bfe2['onclick'] = () => {
                        const _0x35740a = _0x418d7c;
                        window[_0x35740a(0x395)]();
                        try {
                            _0xe6bfe2[_0x35740a(0x79f)]();
                        } catch (_0x529a07) {
                        }
                    };
                } else
                    _0x1f060e['keWxJ'](Notification[_0x418d7c(0x2b6)], _0x1f060e[_0x418d7c(0x6ba)]) && Notification['requestPermission']();
            }
        } catch (_0x2f11a3) {
        }
    }
    let _0x559bdf = ![], _0xf42fef = 0x0, _0x2d9c3f = null;
    function _0x2d184c(_0x4937ad, _0x280668) {
        const _0x347cf5 = _0x45c9c2;
        let _0x58dbec = _0x1f060e[_0x347cf5(0x642)](parseInt, String(_0x4937ad)['replace'](/,/g, ''), 0xa), _0x3bb3ba = _0x1f060e[_0x347cf5(0x8ca)](parseInt, String(_0x280668)[_0x347cf5(0x1c4)](/,/g, ''), 0xa);
        if (isNaN(_0x58dbec) || _0x1f060e[_0x347cf5(0x45a)](isNaN, _0x3bb3ba))
            return null;
        if (_0x3bb3ba > 0x1f4 && _0x1f060e[_0x347cf5(0x84b)](_0x3bb3ba, 0x64) === 0x0)
            _0x3bb3ba = _0x1f060e[_0x347cf5(0x300)](_0x3bb3ba, 0x64), _0x58dbec > 0x1f4 && _0x1f060e[_0x347cf5(0x782)](_0x1f060e[_0x347cf5(0x7bf)](_0x58dbec, 0x64), 0x0) && (_0x58dbec = _0x58dbec / 0x64);
        else {
            if (_0x3bb3ba > 0x1f4) {
                _0x3bb3ba = Math[_0x347cf5(0x885)](_0x3bb3ba / 0x64);
                if (_0x58dbec > 0x1f4)
                    _0x58dbec = Math[_0x347cf5(0x885)](_0x58dbec / 0x64);
            }
        }
        if (_0x3bb3ba <= 0x0)
            return null;
        const _0x45e3f7 = {};
        return _0x45e3f7[_0x347cf5(0x369)] = _0x58dbec, _0x45e3f7[_0x347cf5(0x77a)] = _0x3bb3ba, _0x45e3f7;
    }
    function _0x59620f(_0x4e147f = !![]) {
        const _0x12816a = _0x45c9c2;
        try {
            const _0x54e9f7 = document[_0x12816a(0x24c)](_0x1f060e['SbiaD']) || document[_0x12816a(0x299)], _0x2ce30f = [
                    _0x1f060e[_0x12816a(0x5bd)],
                    _0x12816a(0x669),
                    '[class*=\x22bar-energy\x22]',
                    '[class*=\x22barEnergy\x22]',
                    _0x1f060e[_0x12816a(0x8d4)],
                    _0x12816a(0x233),
                    _0x1f060e['qTXpz']
                ];
            for (const _0x5b854d of _0x2ce30f) {
                const _0x59a220 = document[_0x12816a(0x3a5)](_0x5b854d);
                for (const _0x388fbb of _0x59a220) {
                    const _0x756802 = _0x388fbb[_0x12816a(0x86b)] || '', _0x5505cb = _0x756802[_0x12816a(0x772)](/(?:Energy:?\s*)?(\d[\d,]*)\s*\/\s*(\d[\d,]*)/i);
                    if (_0x5505cb) {
                        const _0x5e5473 = _0x2d184c(_0x5505cb[0x1], _0x5505cb[0x2]);
                        if (_0x5e5473)
                            return _0x5e5473;
                    }
                }
            }
            const _0x4fe4f4 = _0x54e9f7[_0x12816a(0x5b0)] || _0x54e9f7[_0x12816a(0x86b)] || '', _0x1d9006 = _0x4fe4f4[_0x12816a(0x772)](/Energy:?\s*(\d[\d,]*)\s*\/\s*(\d[\d,]*)/i);
            if (_0x1d9006) {
                const _0x31271c = _0x2d184c(_0x1d9006[0x1], _0x1d9006[0x2]);
                if (_0x31271c)
                    return _0x31271c;
            }
            for (const _0x1bd138 of _0x2ce30f) {
                const _0x50cd92 = document['querySelectorAll'](_0x1bd138);
                for (const _0x3ff379 of _0x50cd92) {
                    const _0x22762f = _0x3ff379['getAttribute'](_0x12816a(0x4a0)), _0x17c340 = _0x3ff379['getAttribute'](_0x12816a(0x7e5));
                    if (_0x22762f !== null && _0x17c340 !== null) {
                        const _0xffcf83 = _0x1f060e['YJBgN'](_0x2d184c, _0x22762f, _0x17c340);
                        if (_0xffcf83)
                            return _0xffcf83;
                    }
                }
            }
            if (document[_0x12816a(0x299)] && _0x1f060e[_0x12816a(0x426)](document['body'], _0x54e9f7)) {
                const _0x240a71 = document['body']['innerText'] || '', _0x298756 = _0x240a71['match'](/Energy:?\s*(\d[\d,]*)\s*\/\s*(\d[\d,]*)/i);
                if (_0x298756) {
                    const _0x88c369 = _0x1f060e['hgGTs'](_0x2d184c, _0x298756[0x1], _0x298756[0x2]);
                    if (_0x88c369)
                        return _0x88c369;
                }
            }
        } catch (_0x4da78e) {
            console[_0x12816a(0x5d6)](_0x12816a(0x393), _0x4da78e);
        }
        if (_0x4e147f && _0x2d9c3f && _0x2d9c3f[_0x12816a(0x77a)] > 0x0)
            return _0x2d184c(_0x2d9c3f['current'], _0x2d9c3f[_0x12816a(0x77a)]);
        return null;
    }
    function _0x1218a3() {
        const _0x261670 = _0x45c9c2;
        if (!_0x59e0bf[_0x261670(0x337)])
            return;
        const _0x49e50c = _0x59620f();
        if (!_0x49e50c || _0x49e50c[_0x261670(0x77a)] <= 0x0)
            return;
        const _0x11ce96 = _0x49e50c[_0x261670(0x369)] >= _0x49e50c[_0x261670(0x77a)];
        if (_0x11ce96) {
            const _0x16e69d = Date[_0x261670(0x903)]();
            if (!_0x559bdf || _0x1f060e[_0x261670(0x5b4)](_0x16e69d - _0xf42fef, 0xa * 0x3c * 0x3e8)) {
                _0x559bdf = !![], _0xf42fef = _0x16e69d;
                const _0x3484bb = Math[_0x261670(0x306)](_0x16e69d / 0x3e8), _0x488253 = _0xe0a523[_0x261670(0x668)](_0x1f086c => !_0x266a19(_0x1f086c))[_0x261670(0x6fe)](_0x29c6b2 => _0x167784[_0x29c6b2]?.[_0x261670(0x4c4)])[_0x261670(0x668)](_0x14f65f => _0x14f65f && _0x14f65f[_0x261670(0x2ed)] === _0x261670(0x8b7));
                let _0x354e3d = _0x261670(0x69b);
                if (_0x488253[_0x261670(0x453)] > 0x0) {
                    let _0x6ceae1 = Infinity, _0x41b884 = '';
                    _0x488253[_0x261670(0x38f)](_0xeb02c3 => {
                        const _0x5b1ebf = _0x261670, _0x4c8f6e = _0xeb02c3[_0x5b1ebf(0x3b0)] > _0x3484bb ? _0x1f060e['oPkuD'](_0xeb02c3[_0x5b1ebf(0x3b0)], _0x3484bb) : 0x0;
                        _0x1f060e[_0x5b1ebf(0x6b9)](_0x4c8f6e, _0x6ceae1) && (_0x6ceae1 = _0x4c8f6e, _0x41b884 = _0xeb02c3['name']);
                    });
                    const _0x25e9ca = _0x2d45f4(_0x6ceae1);
                    _0x354e3d = _0x261670(0x793) + _0x41b884 + _0x261670(0x30f) + _0x25e9ca + ').\x20Train\x20off\x20excess\x20energy\x20before\x20discharge!';
                }
                const _0x54712c = {};
                _0x54712c[_0x261670(0x2ca)] = _0x261670(0x6a1) + _0x49e50c['current'] + '/' + _0x49e50c[_0x261670(0x77a)] + ')!', _0x54712c[_0x261670(0x299)] = _0x354e3d, _0x1f060e[_0x261670(0x695)](_0x151284, {
                    'key': _0x1f060e['vJCzt'],
                    'dedupeMs': _0x1f060e[_0x261670(0x246)](_0x1f060e[_0x261670(0x1b4)](0xa, 0x3c), 0x3e8),
                    'sound': _0x261670(0x377),
                    'notif': _0x54712c,
                    'toast': '🔔\x20Energy\x20is\x20FULL\x20(' + _0x49e50c[_0x261670(0x369)] + '/' + _0x49e50c[_0x261670(0x77a)] + _0x261670(0x500) + _0x354e3d
                });
            }
        } else
            _0x559bdf = ![];
    }
    let _0x46bc66 = 0x0, _0x3f045f = ![], _0x1de89f = !![], _0x5ba1b8 = 0x0;
    function _0x5d58be() {
        const _0x2a692d = _0x45c9c2;
        try {
            const _0x373644 = document[_0x2a692d(0x24c)]('sidebarroot') || document[_0x2a692d(0x299)], _0x11b3fb = _0x373644[_0x2a692d(0x1e3)]('[class*=\x22icon49\x22],\x20[class*=\x22icon50\x22],\x20[class*=\x22icon51\x22],\x20[class*=\x22icon52\x22],\x20[class*=\x22icon53\x22],\x20' + _0x1f060e[_0x2a692d(0x428)]);
            if (_0x11b3fb)
                return !![];
            const _0x2509a6 = _0x373644[_0x2a692d(0x3a5)](_0x1f060e[_0x2a692d(0x91f)]);
            for (const _0x58936a of _0x2509a6) {
                const _0x4a8815 = ((_0x58936a[_0x2a692d(0x96f)] || '') + '\x20' + (_0x58936a[_0x2a692d(0x66f)](_0x2a692d(0x2ca)) || '') + '\x20' + (_0x58936a['getAttribute'](_0x1f060e[_0x2a692d(0x5a8)]) || ''))[_0x2a692d(0x626)]();
                if (_0x4a8815[_0x2a692d(0x67b)]('drug') || _0x4a8815[_0x2a692d(0x67b)](_0x1f060e[_0x2a692d(0x630)]))
                    return !![];
            }
        } catch (_0x5d3b7e) {
        }
        return ![];
    }
    function _0x96f480() {
        const _0x37b53a = _0x45c9c2, _0x56dc46 = _0x37b53a(0x3d6)[_0x37b53a(0x3b6)]('|');
        let _0x1be779 = 0x0;
        while (!![]) {
            switch (_0x56dc46[_0x1be779++]) {
            case '0':
                _0x3f045f = ![];
                continue;
            case '1':
                _0x1de89f = !![];
                continue;
            case '2':
                const _0x5e5cc6 = {};
                _0x5e5cc6[_0x37b53a(0x2ca)] = _0x37b53a(0x82f), _0x5e5cc6[_0x37b53a(0x299)] = _0x37b53a(0x6cb), _0x151284({
                    'key': _0x1f060e[_0x37b53a(0x24e)],
                    'dedupeMs': _0x1f060e[_0x37b53a(0x22e)](0x5, 0x3c) * 0x3e8,
                    'sound': _0x37b53a(0x377),
                    'notif': _0x5e5cc6,
                    'toast': _0x1f060e['PlJxi']
                });
                continue;
            case '3':
                if (!_0x59e0bf['alertOnDrugCooldown'])
                    return;
                continue;
            case '4':
                _0x46bc66 = 0x0;
                continue;
            }
            break;
        }
    }
    function _0xacf21() {
        const _0x4e72cf = _0x45c9c2;
        if (!_0x59e0bf[_0x4e72cf(0x76c)])
            return;
        const _0x12a7dd = Date[_0x4e72cf(0x903)](), _0x42597e = _0x1f060e[_0x4e72cf(0x350)](_0x5d58be);
        _0x42597e && (_0x3f045f = !![], _0x1de89f = ![]);
        if (_0x46bc66 > 0x0)
            _0x12a7dd >= _0x46bc66 && _0x1f060e[_0x4e72cf(0x3e1)](_0x96f480);
        else
            _0x3f045f && !_0x1de89f && !_0x42597e && _0x1f060e[_0x4e72cf(0x5c6)](_0x96f480);
    }
    async function _0x2708a5() {
        const _0x527267 = _0x45c9c2;
        if (!_0x4b9700)
            return;
        const _0x70f373 = _0x1f060e[_0x527267(0x686)](_0x26c0f6);
        if (!_0x70f373)
            return;
        const _0x4589d7 = Date[_0x527267(0x903)]();
        if (_0x4589d7 - _0x5ba1b8 < 0xea60)
            return;
        if (_0x5d92bc() >= _0x1f060e[_0x527267(0x20a)](_0x5417bb) - 0x5)
            return;
        _0x5ba1b8 = _0x4589d7;
        try {
            _0x5242fe();
            const _0x558215 = _0x527267(0x6f6) + _0x70f373 + _0x527267(0x370) + _0x4589d7, _0x402707 = await fetch(_0x558215);
            if (!_0x402707['ok'])
                return;
            const _0x28f5fb = await _0x402707[_0x527267(0x742)]();
            if (_0x28f5fb && _0x28f5fb['cooldowns'] && _0x1f060e[_0x527267(0x967)](typeof _0x28f5fb[_0x527267(0x687)][_0x527267(0x73b)], _0x1f060e['VUDKi'])) {
                const _0x2b9775 = _0x1f060e[_0x527267(0x6c5)](parseInt, _0x28f5fb['cooldowns'][_0x527267(0x73b)], 0xa) || 0x0;
                _0x2b9775 > 0x0 ? (_0x46bc66 = _0x1f060e[_0x527267(0x7b2)](Date[_0x527267(0x903)](), _0x1f060e[_0x527267(0x246)](_0x2b9775, 0x3e8)), _0x3f045f = !![], _0x1de89f = ![]) : (_0x3f045f && !_0x1de89f ? _0x96f480() : _0x1de89f = !![], _0x46bc66 = 0x0);
            }
        } catch (_0xedb05d) {
            console[_0x527267(0x5d6)](_0x527267(0x67e), _0xedb05d);
        }
    }
    function _0x1839fc() {
        const _0x3f989c = _0x45c9c2;
        try {
            if (document['body'] && _0x1f060e[_0x3f989c(0x51e)](document[_0x3f989c(0x299)][_0x3f989c(0x66f)](_0x3f989c(0x8a8)), _0x3f989c(0x358)))
                return !![];
            const _0x142670 = document[_0x3f989c(0x299)] ? document['body']['getAttribute'](_0x3f989c(0x392)) : null;
            if (_0x142670 && _0x142670[_0x3f989c(0x626)]() !== _0x1f060e[_0x3f989c(0x6c1)])
                return !![];
            if (window[_0x3f989c(0x32e)] && window[_0x3f989c(0x32e)][_0x3f989c(0x2e3)] && window['topBannerInitData'][_0x3f989c(0x2e3)]['state']) {
                if (window[_0x3f989c(0x32e)][_0x3f989c(0x2e3)][_0x3f989c(0x2ed)][_0x3f989c(0x8fa)] === !![])
                    return !![];
            }
        } catch (_0x172e84) {
        }
        return ![];
    }
    function _0x26b6f6(_0x557be2) {
        const _0x3a3873 = _0x45c9c2;
        if (_0x1f060e[_0x3a3873(0x8b4)](typeof _0x557be2, _0x1f060e[_0x3a3873(0x4d7)]) || _0x557be2 < 0x0)
            return _0x1f060e[_0x3a3873(0x548)];
        const _0x501610 = Math['floor'](_0x557be2 / 0x3c), _0x952643 = Math[_0x3a3873(0x306)](_0x1f060e[_0x3a3873(0x7bf)](_0x557be2, 0x3c));
        return _0x501610 + ':' + (_0x952643 < 0xa ? '0' : '') + _0x952643;
    }
    function _0x494059() {
        const _0x53b434 = _0x45c9c2;
        try {
            const _0x27aadc = document[_0x53b434(0x24c)](_0x53b434(0x409)) || document[_0x53b434(0x299)];
            if (!_0x27aadc)
                return ![];
            const _0x351db8 = _0x27aadc['querySelector'](_0x53b434(0x741));
            if (!_0x351db8)
                return _0xceab3e[_0x53b434(0x4df)] && _0x1f060e[_0x53b434(0x80d)](Date[_0x53b434(0x903)]() - _0xceab3e[_0x53b434(0x25f)], 0x2710) && (_0xceab3e[_0x53b434(0x4df)] = ![], _0xceab3e[_0x53b434(0x6b0)] = 0x0), ![];
            const _0x57c3c1 = _0x351db8[_0x53b434(0x5b0)] || _0x351db8[_0x53b434(0x86b)] || '';
            if (!_0x57c3c1)
                return ![];
            const _0x30e702 = _0x57c3c1[_0x53b434(0x772)](/(?:^|\s)(\d{1,2}):(\d{2})(?:$|\s)/);
            if (_0x30e702) {
                const _0x5e1942 = parseInt(_0x30e702[0x1], 0xa), _0x91d4e8 = _0x1f060e[_0x53b434(0x1d7)](parseInt, _0x30e702[0x2], 0xa);
                _0xceab3e['timeout'] = _0x1f060e[_0x53b434(0x75d)](_0x5e1942 * 0x3c, _0x91d4e8), _0xceab3e[_0x53b434(0x4df)] = _0xceab3e[_0x53b434(0x6b0)] > 0x0, _0xceab3e['lastUpdated'] = Date['now']();
            }
            const _0x1c69a8 = _0x57c3c1[_0x53b434(0x772)](/(\d+)\s*\/\s*(\d+)/);
            if (_0x1c69a8)
                _0xceab3e[_0x53b434(0x369)] = parseInt(_0x1c69a8[0x1], 0xa), _0xceab3e[_0x53b434(0x776)] = _0x1f060e[_0x53b434(0x478)](parseInt, _0x1c69a8[0x2], 0xa), _0xceab3e[_0x53b434(0x4df)] = !![];
            else {
                const _0x438e1c = _0x57c3c1[_0x53b434(0x772)](/(\d+)\s*hits?/i);
                _0x438e1c && (_0xceab3e[_0x53b434(0x369)] = _0x1f060e['ZDuOq'](parseInt, _0x438e1c[0x1], 0xa), _0xceab3e[_0x53b434(0x4df)] = !![]);
            }
            const _0x2fd01b = _0x57c3c1[_0x53b434(0x772)](/(\d+\.\d+)x/i);
            return _0x2fd01b && (_0xceab3e['modifier'] = parseFloat(_0x2fd01b[0x1])), _0xceab3e[_0x53b434(0x4df)];
        } catch (_0x56515c) {
            return ![];
        }
    }
    async function _0x2ee727() {
        const _0x2801bf = _0x45c9c2;
        if (!_0x1839fc()) {
            _0x56b1e7['id'] = null, _0x56b1e7[_0x2801bf(0x589)] = null, _0x56b1e7[_0x2801bf(0x222)] = null;
            return;
        }
        const _0x26973c = Date['now']();
        if (_0x26973c - _0x56b1e7[_0x2801bf(0x8a4)] < 0x3a98 && _0x56b1e7['id'])
            return;
        if (!window[_0x2801bf(0x295)][_0x2801bf(0x5f7)][_0x2801bf(0x67b)](_0x2801bf(0x6e5)))
            return;
        _0x56b1e7[_0x2801bf(0x8a4)] = _0x26973c;
        try {
            const _0x3a7baf = document, _0x21bd24 = _0x3a7baf[_0x2801bf(0x3a5)](_0x2801bf(0x6b4)), _0x1873f2 = [], _0x402789 = _0x10ef9f();
            for (const _0x123192 of _0x21bd24) {
                if (_0x123192[_0x2801bf(0x90b)](_0x2801bf(0x635)))
                    continue;
                if (_0x123192[_0x2801bf(0x90b)](_0x1f060e['hAfZj']))
                    continue;
                const _0xef7ce1 = _0x123192[_0x2801bf(0x5f7)][_0x2801bf(0x772)](/XID=(\d+)/i);
                if (!_0xef7ce1)
                    continue;
                const _0xd92a71 = _0xef7ce1[0x1];
                if (_0x402789[_0x2801bf(0x91b)] && _0x1f060e[_0x2801bf(0x782)](String(_0x402789[_0x2801bf(0x91b)]), String(_0xd92a71)))
                    continue;
                const _0x3c58de = _0x123192[_0x2801bf(0x90b)](_0x1f060e[_0x2801bf(0x2cd)]) || _0x123192[_0x2801bf(0x9a7)];
                if (!_0x3c58de)
                    continue;
                const _0x5d4f49 = _0x3c58de['textContent'] || '', _0x120c33 = /hospital/i[_0x2801bf(0x5eb)](_0x5d4f49) || _0x3c58de['querySelector'](_0x1f060e[_0x2801bf(0x21d)]), _0x2b0e45 = /traveling|in flight/i[_0x2801bf(0x5eb)](_0x5d4f49) || _0x3c58de[_0x2801bf(0x1e3)](_0x1f060e[_0x2801bf(0x9cc)]), _0x487e9b = /jail/i['test'](_0x5d4f49) || _0x3c58de[_0x2801bf(0x1e3)](_0x1f060e[_0x2801bf(0x876)]);
                if (_0x120c33 || _0x2b0e45 || _0x487e9b)
                    continue;
                const _0x1a9f61 = _0x5d4f49[_0x2801bf(0x772)](/(?:Lvl|Level|Lv)[:\s]*(\d+)/i) || _0x5d4f49[_0x2801bf(0x772)](/\b(?:L|Lv)(\d+)\b/);
                if (!_0x1a9f61)
                    continue;
                const _0x33883b = _0x1f060e[_0x2801bf(0x8e4)](parseInt, _0x1a9f61[0x1], 0xa), _0x4379ce = _0x123192[_0x2801bf(0x86b)]['trim']() || _0x2801bf(0x817) + _0xd92a71 + ']', _0x177f09 = {};
                _0x177f09['id'] = _0xd92a71, _0x177f09[_0x2801bf(0x589)] = _0x4379ce, _0x177f09['level'] = _0x33883b, _0x1873f2[_0x2801bf(0x3ca)](_0x177f09);
            }
            _0x1873f2[_0x2801bf(0x453)] > 0x0 ? (_0x1873f2['sort']((_0x27b959, _0x102ba4) => _0x27b959[_0x2801bf(0x222)] - _0x102ba4[_0x2801bf(0x222)]), _0x56b1e7['id'] = _0x1873f2[0x0]['id'], _0x56b1e7[_0x2801bf(0x589)] = _0x1873f2[0x0]['name'], _0x56b1e7[_0x2801bf(0x222)] = _0x1873f2[0x0][_0x2801bf(0x222)], _0x56b1e7['lastChecked'] = _0x26973c, _0x281843()) : (_0x56b1e7['id'] = null, _0x56b1e7[_0x2801bf(0x589)] = null, _0x56b1e7[_0x2801bf(0x222)] = null, _0x1f060e[_0x2801bf(0x347)](_0x281843));
        } catch (_0x3d8c84) {
            console[_0x2801bf(0x5d6)](_0x2801bf(0x6a3), _0x3d8c84);
        }
    }
    function _0x234066(_0x31c5a2 = null) {
        const _0x5c6be1 = _0x45c9c2;
        if (_0x1839fc()) {
            if (_0x56b1e7['id']) {
                _0x1f060e[_0x5c6be1(0x795)](_0x40d4da, _0x5c6be1(0x810) + _0x56b1e7[_0x5c6be1(0x589)] + '\x20(Lvl\x20' + _0x56b1e7['level'] + _0x5c6be1(0x84e) + _0x56b1e7['id'] + _0x5c6be1(0x234));
                const _0x15532d = _0x5c6be1(0x37b) + _0x56b1e7['id'];
                _0x1f060e[_0x5c6be1(0x28c)](_0x30dd48, _0x15532d), _0x1f060e[_0x5c6be1(0x478)](setTimeout, () => {
                    const _0x2c981a = _0x5c6be1;
                    _0x56b1e7['lastChecked'] = 0x0, _0x1f060e[_0x2c981a(0x732)](_0x2ee727);
                }, 0x7d0);
            } else
                _0x1f060e[_0x5c6be1(0x28c)](_0x40d4da, _0x5c6be1(0x96e)), _0x30dd48('https://www.torn.com/index.php?page=people'), _0x2ee727();
        } else {
            const _0x407a90 = document[_0x5c6be1(0x24c)](_0x5c6be1(0x39f));
            let _0x39dead = _0x3b4a51(_0x31c5a2 || _0x19d765());
            const _0x27502d = _0x4593b0() && !_0x1f060e[_0x5c6be1(0x661)](_0x5ed77b, _0x39dead) && _0x1f060e[_0x5c6be1(0x68b)](String(_0x39dead), _0x1f060e[_0x5c6be1(0x485)](String, _0x59e0bf[_0x5c6be1(0x1f4)]));
            _0x40d4da(_0x5c6be1(0x22f) + _0x39dead + _0x5c6be1(0x984) + (_0x27502d ? '\x20(unverified:\x20pool\x20still\x20building)' : ''));
            const _0xd4cc88 = _0x5c6be1(0x37b) + _0x39dead;
            _0x18da3b(_0x39dead), _0x30dd48(_0xd4cc88);
            const _0x2ae9f6 = document[_0x5c6be1(0x24c)](_0x5c6be1(0x7c4));
            if (_0x2ae9f6)
                _0x2ae9f6['value'] = _0x59e0bf[_0x5c6be1(0x60b)];
            if (_0x407a90)
                _0x407a90[_0x5c6be1(0x814)] = _0x59e0bf['chainTargetCurrentId'];
            _0x281843();
        }
    }
    function _0x31ccfe() {
        const _0x4fa808 = _0x45c9c2;
        if (!_0x59e0bf[_0x4fa808(0x84d)])
            return;
        if (!_0x1f060e[_0x4fa808(0x759)](_0x32bfce, 'ck'))
            return;
        const _0xe17436 = _0x1f060e[_0x4fa808(0x650)](_0x494059);
        if (!_0xe17436 || _0xceab3e[_0x4fa808(0x6b0)] <= 0x0) {
            _0x1f060e[_0x4fa808(0x3ff)](_0xceab3e[_0x4fa808(0x6b0)], 0x0) && (_0xceab3e[_0x4fa808(0x28d)] || _0xceab3e[_0x4fa808(0x7a4)]) && (_0xceab3e[_0x4fa808(0x28d)] = ![], _0xceab3e[_0x4fa808(0x7a4)] = ![]);
            _0x281843();
            return;
        }
        const _0x1d79bf = _0xceab3e[_0x4fa808(0x6b0)];
        _0x1f060e[_0x4fa808(0x5b4)](_0x1d79bf, 0x3c) && (_0xceab3e[_0x4fa808(0x28d)] = ![], _0xceab3e[_0x4fa808(0x7a4)] = ![]);
        if (_0x59e0bf[_0x4fa808(0x963)] && _0x59e0bf[_0x4fa808(0x540)]) {
            if (_0x1f060e['ASIXW'](_0x1d79bf, 0x3c) && _0x1d79bf > 0x1e)
                !_0xceab3e[_0x4fa808(0x28d)] && (_0xceab3e['alerted60s'] = !![], _0x1f060e[_0x4fa808(0x795)](_0x151284, {
                    'key': _0x4fa808(0x736) + _0xceab3e[_0x4fa808(0x369)],
                    'dedupeMs': _0x1f060e[_0x4fa808(0x246)](0x3c, 0x3e8),
                    'sound': _0x1f060e[_0x4fa808(0x6ee)],
                    'notif': {
                        'title': _0x4fa808(0x93e),
                        'body': _0x4fa808(0x379) + _0x26b6f6(_0x1d79bf) + _0x4fa808(0x3b1)
                    },
                    'toast': _0x4fa808(0x7dc) + _0x26b6f6(_0x1d79bf) + '\x20left!\x20Quick\x20Hit\x20needed!'
                }));
            else {
                if (_0x1d79bf <= 0x1e && _0x1d79bf > 0x0) {
                    const _0x5940cb = Date[_0x4fa808(0x903)]();
                    (!_0xceab3e[_0x4fa808(0x7a4)] || _0x1f060e[_0x4fa808(0x65b)](_0x5940cb - _0xceab3e[_0x4fa808(0x408)], 0x1388)) && (_0xceab3e[_0x4fa808(0x7a4)] = !![], _0xceab3e[_0x4fa808(0x408)] = _0x5940cb, _0x151284({
                        'key': _0x4fa808(0x8bb) + _0xceab3e[_0x4fa808(0x369)] + ':' + Math[_0x4fa808(0x306)](_0x5940cb / 0x1388),
                        'dedupeMs': 0x1194,
                        'sound': _0x4fa808(0x377),
                        'notif': _0x1d79bf <= 0xf ? {
                            'title': _0x1f060e[_0x4fa808(0x719)],
                            'body': _0x4fa808(0x379) + _0x1d79bf + _0x4fa808(0x4ed)
                        } : null,
                        'toast': _0x4fa808(0x87a) + _0x1f060e[_0x4fa808(0x37a)](_0x26b6f6, _0x1d79bf) + _0x4fa808(0x26a)
                    }));
                }
            }
        }
        _0x1839fc() && _0x2ee727(), _0x281843();
    }
    function _0x281843() {
        const _0xa5e116 = _0x45c9c2, _0x2e2a3a = {
                'NzsRz': function (_0x562f88, _0x43666b) {
                    return _0x1f060e['GXLeF'](_0x562f88, _0x43666b);
                }
            };
        if (!_0x32bfce('ck')) {
            const _0x1887ad = document[_0xa5e116(0x24c)](_0xa5e116(0x70d)), _0x4f916b = document[_0xa5e116(0x24c)](_0xa5e116(0x3a8));
            if (_0x1887ad)
                _0x1887ad[_0xa5e116(0x253)][_0xa5e116(0x493)] = _0xa5e116(0x5de);
            if (_0x4f916b)
                _0x4f916b[_0xa5e116(0x8e2)]();
            return;
        }
        const _0x56c98f = _0x1839fc(), _0x13e813 = window[_0xa5e116(0x295)][_0xa5e116(0x5f7)]['includes'](_0xa5e116(0x6e2)), _0x279ca0 = _0x13e813 ? window[_0xa5e116(0x295)][_0xa5e116(0x5f7)]['match'](/user2ID=(\d+)/i) : null, _0x4b3115 = _0x279ca0 ? parseInt(_0x279ca0[0x1], 0xa) : 0x0;
        let _0x2c98d2;
        _0x4593b0() ? _0x2c98d2 = _0x19d765(_0x4b3115 || null) : _0x2c98d2 = _0x1f060e[_0xa5e116(0x65b)](_0x4b3115, 0x3e8) ? _0x4b3115 + 0x1 : parseInt(_0x59e0bf[_0xa5e116(0x60b)], 0xa) || _0x1f060e[_0xa5e116(0x785)](_0x40a767)[0x0];
        const _0x3f8dca = document[_0xa5e116(0x24c)](_0x1f060e[_0xa5e116(0x43e)]);
        if (_0x3f8dca) {
            let _0x2123b6 = document[_0xa5e116(0x24c)](_0xa5e116(0x3a8));
            if (_0x59e0bf[_0xa5e116(0x84d)]) {
                const _0x169bf9 = _0x26b6f6(_0xceab3e['timeout']), _0x190f87 = _0xceab3e['isActive'] ? _0xceab3e[_0xa5e116(0x6b0)] <= 0x1e ? _0xa5e116(0x4b6) : _0x1f060e[_0xa5e116(0x72a)](_0xceab3e['timeout'], 0x3c) ? _0x1f060e[_0xa5e116(0x872)] : _0x1f060e[_0xa5e116(0x43d)] : '', _0xfdc48 = _0x56c98f ? _0x56b1e7[_0xa5e116(0x589)] ? _0xa5e116(0x752) + _0x56b1e7[_0xa5e116(0x589)][_0xa5e116(0x64d)](0x0, 0x8) + _0xa5e116(0x54e) + _0x56b1e7['level'] + ')' : _0xa5e116(0x598) : _0xa5e116(0x2d1) + _0x2c98d2;
                !_0x2123b6 && (_0x2123b6 = document[_0xa5e116(0x74a)](_0xa5e116(0x437)), _0x2123b6['id'] = _0xa5e116(0x3a8), _0x2123b6['className'] = _0x1f060e[_0xa5e116(0x5c4)], _0x3f8dca[_0xa5e116(0x9c0)](_0x2123b6));
                const _0x17b8d9 = _0xceab3e['isActive'] ? _0xa5e116(0x9b0) + _0x190f87 + _0xa5e116(0x78d) + _0xceab3e[_0xa5e116(0x369)] + _0xa5e116(0x4ad) + _0x169bf9 + _0xa5e116(0x64b) + _0xceab3e[_0xa5e116(0x88e)][_0xa5e116(0x894)](0x2) + _0xa5e116(0x3df) + _0xceab3e[_0xa5e116(0x369)] + (_0xceab3e[_0xa5e116(0x776)] ? '/' + _0xceab3e[_0xa5e116(0x776)] : '') + _0xa5e116(0x724) + _0x169bf9 + _0xa5e116(0x9b6) : '';
                _0x2123b6[_0xa5e116(0x75a)] = _0xa5e116(0x3d7) + _0x17b8d9 + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-pill-hit-btn\x22\x20id=\x22stakeout-pill-quickhit\x22\x20title=\x221-Click\x20Emergency\x20Quick\x20Hit\x20attack\x20staging\x22>' + _0xfdc48 + _0xa5e116(0x32a);
                const _0x5c7b98 = document[_0xa5e116(0x24c)]('stakeout-pill-quickhit');
                _0x5c7b98 && (_0x5c7b98[_0xa5e116(0x606)] = _0x403b09 => {
                    const _0x5cf4ae = _0xa5e116;
                    _0x403b09[_0x5cf4ae(0x7a5)](), _0x2e2a3a[_0x5cf4ae(0x24a)](_0x234066, _0x2c98d2);
                });
            } else
                _0x2123b6 && _0x2123b6[_0xa5e116(0x8e2)]();
        }
        const _0x4973f2 = document[_0xa5e116(0x24c)](_0xa5e116(0x70d));
        if (_0x4973f2) {
            if (_0x59e0bf['chainWatcherEnabled']) {
                _0x4973f2[_0xa5e116(0x253)][_0xa5e116(0x493)] = _0x1f060e[_0xa5e116(0x418)];
                const _0x1a3977 = _0x26b6f6(_0xceab3e[_0xa5e116(0x6b0)]), _0x1c597a = _0xceab3e[_0xa5e116(0x4df)] ? _0xceab3e[_0xa5e116(0x6b0)] <= 0x1e ? 'panic' : _0xceab3e[_0xa5e116(0x6b0)] <= 0x3c ? _0x1f060e[_0xa5e116(0x872)] : _0x1f060e[_0xa5e116(0x43d)] : '';
                _0x4973f2[_0xa5e116(0x96f)] = (_0xa5e116(0x97e) + _0x1c597a)[_0xa5e116(0x76a)]();
                const _0x1fbd94 = _0x56c98f ? _0x56b1e7[_0xa5e116(0x589)] ? _0xa5e116(0x277) + _0x56b1e7['name'] + _0xa5e116(0x522) + _0x56b1e7[_0xa5e116(0x222)] + ')' : _0x1f060e[_0xa5e116(0x424)] : _0x13e813 ? _0xa5e116(0x4ab) : _0xa5e116(0x993), _0x11e427 = document[_0xa5e116(0x24c)](_0x1f060e[_0xa5e116(0x4fd)]);
                if (_0x11e427) {
                    if (_0xceab3e['isActive'])
                        _0x11e427[_0xa5e116(0x75a)] = _0xa5e116(0x6e1) + _0xceab3e[_0xa5e116(0x369)] + (_0xceab3e['max'] ? '/' + _0xceab3e[_0xa5e116(0x776)] : '') + _0xa5e116(0x7dd) + _0x1a3977 + _0xa5e116(0x66d) + _0xceab3e[_0xa5e116(0x88e)][_0xa5e116(0x894)](0x2) + 'x)';
                    else
                        _0x13e813 ? _0x11e427[_0xa5e116(0x75a)] = '🎯\x20<strong>Attack\x20Screen</strong>\x20•\x20Next:' : _0x11e427['innerHTML'] = _0xa5e116(0x257);
                }
                const _0x29da94 = document[_0xa5e116(0x24c)](_0xa5e116(0x5e0));
                _0x29da94 && (_0x29da94[_0xa5e116(0x75a)] = _0x1fbd94);
                const _0x51589a = document[_0xa5e116(0x24c)](_0x1f060e[_0xa5e116(0x60e)]);
                _0x51589a && (_0x56c98f ? _0x51589a[_0xa5e116(0x253)]['display'] = _0x1f060e[_0xa5e116(0x349)] : (_0x51589a[_0xa5e116(0x253)][_0xa5e116(0x493)] = _0x1f060e['RKyIX'], document['activeElement'] !== _0x51589a && (_0x51589a[_0xa5e116(0x814)] = _0x2c98d2)));
            } else
                _0x4973f2[_0xa5e116(0x253)]['display'] = 'none';
        }
    }
    async function _0x32f989(_0x408032) {
        const _0x1de84d = _0x45c9c2, _0x2c059d = _0x1f060e['pPwHk'](_0x26c0f6);
        if (!_0x2c059d)
            return null;
        if (_0x5d92bc() >= _0x5417bb())
            return console[_0x1de84d(0x5d6)](_0x1f060e[_0x1de84d(0x99e)]), null;
        try {
            _0x5242fe();
            const _0x3cd4ae = _0x1de84d(0x8c6) + _0x408032 + _0x1de84d(0x8be) + _0x2c059d + '&timestamp=' + Date['now']() + '&comment=StakeoutRadar', _0x3af2f6 = await _0x1f060e[_0x1de84d(0x910)](fetch, _0x3cd4ae);
            if (!_0x3af2f6['ok'])
                return null;
            const _0x4d2423 = await _0x3af2f6[_0x1de84d(0x742)]();
            if (_0x4d2423 && _0x4d2423[_0x1de84d(0x674)]) {
                console['error'](_0x1f060e[_0x1de84d(0x35c)], _0x4d2423[_0x1de84d(0x674)]);
                _0x4d2423[_0x1de84d(0x674)]['code'] === 0x2 && _0x40d4da(_0x1de84d(0x7ea));
                const _0x3526a8 = {};
                return _0x3526a8[_0x1de84d(0x674)] = _0x4d2423['error'][_0x1de84d(0x674)] || _0x1de84d(0x202), _0x3526a8[_0x1de84d(0x572)] = _0x4d2423[_0x1de84d(0x674)][_0x1de84d(0x572)], _0x3526a8;
            }
            return _0x4d2423;
        } catch (_0x4f4b56) {
            return console[_0x1de84d(0x674)](_0x1f060e[_0x1de84d(0x465)], _0x4f4b56), null;
        }
    }
    function _0x38a8d1(_0x1ea34c, _0x32965e = Math['floor'](Date['now']() / 0x3e8), _0x455619 = null) {
        const _0x5c8334 = _0x45c9c2;
        if (!_0x1ea34c)
            return ![];
        const _0x1a7e3 = _0x455619 ? _0x4ffd01(_0x455619) : _0x1f060e['JTGwP'](parseInt, _0x59e0bf[_0x5c8334(0x586)], 0xa) || 0x5;
        if (_0x1a7e3 === -0x1)
            return !![];
        if (_0x1ea34c[_0x5c8334(0x8ce)] === _0x1f060e[_0x5c8334(0x3d0)])
            return !![];
        const _0x2749e0 = _0x1a7e3 * 0x3c;
        if (_0x1ea34c[_0x5c8334(0x594)] > 0x0) {
            const _0x5a2062 = _0x1f060e[_0x5c8334(0x54f)](_0x32965e, _0x1ea34c[_0x5c8334(0x594)]);
            if (_0x5a2062 >= 0x0 && _0x1f060e[_0x5c8334(0x89b)](_0x5a2062, _0x2749e0))
                return !![];
        }
        const _0x105259 = (_0x1ea34c['lastActionRel'] || '')['toLowerCase']();
        if (_0x105259[_0x5c8334(0x67b)](_0x5c8334(0x604)) || _0x105259['includes'](_0x1f060e[_0x5c8334(0x6af)]) || _0x105259['includes'](_0x1f060e['YkbbV']))
            return !![];
        const _0x34cfe = _0x105259[_0x5c8334(0x772)](/(\d+)\s*(?:minute|min)/);
        if (_0x34cfe) {
            const _0x20b5df = parseInt(_0x34cfe[0x1], 0xa);
            if (_0x20b5df <= _0x1a7e3)
                return !![];
        }
        const _0x3a6ee4 = _0x105259[_0x5c8334(0x772)](/(\d+)\s*(?:second|sec)/);
        if (_0x3a6ee4)
            return !![];
        return ![];
    }
    function _0x323a30(_0x10d6ea) {
        const _0x1c25ac = _0x45c9c2;
        if (!_0x10d6ea)
            return ![];
        if (_0x10d6ea[_0x1c25ac(0x2ed)] !== _0x1c25ac(0x834))
            return ![];
        if (typeof _0x10d6ea[_0x1c25ac(0x61b)] === _0x1c25ac(0x7e3) && _0x10d6ea[_0x1c25ac(0x61b)] <= 0x0)
            return ![];
        return !![];
    }
    function _0x463d9e(_0x54525a, _0x4c79dd = Math[_0x45c9c2(0x306)](Date[_0x45c9c2(0x903)]() / 0x3e8), _0x434ed9 = null) {
        const _0x14b463 = _0x45c9c2;
        if (_0x1f060e[_0x14b463(0x64e)](_0x32bfce, 'sp')) {
            if (_0x59e0bf[_0x14b463(0x964)] && _0x40ab66(_0x54525a, _0x434ed9))
                return ![];
            return _0x323a30(_0x54525a) && _0x38a8d1(_0x54525a, _0x4c79dd, _0x434ed9);
        } else
            return _0x323a30(_0x54525a);
    }
    function _0x44c8a0(_0xba61f9) {
        const _0x413a9c = _0x45c9c2;
        if (!_0xba61f9)
            return ![];
        return _0x1f060e['jMKBE'](_0x323a30, _0xba61f9) && (_0xba61f9[_0x413a9c(0x8ce)] === _0x413a9c(0x7f6) || _0x1f060e[_0x413a9c(0x4bd)](_0xba61f9[_0x413a9c(0x8ce)], _0x413a9c(0x697)));
    }
    const _0x988cbf = new Set(), _0x2eac6a = {};
    function _0x26c593(_0x26c34c) {
        const _0x438472 = _0x45c9c2;
        if (!_0x26c34c || typeof _0x26c34c !== _0x438472(0x531))
            return null;
        if (/overdose|collapsed/i[_0x438472(0x5eb)](_0x26c34c))
            return null;
        const _0x3064fd = _0x26c34c[_0x438472(0x772)](/(?:XID|step=profile&ID)=(\d+)[^>]*>([^<]+)<\/a>/i);
        if (_0x3064fd)
            return {
                'id': _0x3064fd[0x1],
                'name': _0x3064fd[0x2][_0x438472(0x76a)](),
                'raw': _0x26c34c
            };
        if (/by\s+someone/i[_0x438472(0x5eb)](_0x26c34c)) {
            const _0x54c4e8 = {};
            return _0x54c4e8['id'] = _0x438472(0x224), _0x54c4e8[_0x438472(0x589)] = _0x1f060e[_0x438472(0x403)], _0x54c4e8[_0x438472(0x1af)] = _0x26c34c, _0x54c4e8;
        }
        const _0x391f74 = _0x26c34c['match'](/(?:hospitalized|mugged|attacked)\s+by\s+([^,.<]+)/i);
        if (_0x391f74)
            return {
                'id': _0x438472(0x4dd),
                'name': _0x391f74[0x1][_0x438472(0x76a)](),
                'raw': _0x26c34c
            };
        return null;
    }
    function _0x4a63f5(_0x7bb606) {
        const _0x2f6467 = _0x45c9c2;
        try {
            const _0x2309c6 = document['createElement'](_0x1f060e[_0x2f6467(0x321)]);
            _0x2309c6[_0x2f6467(0x7ba)] = 0x2f8, _0x2309c6[_0x2f6467(0x346)] = 0x1cc;
            const _0x1c9bf6 = _0x2309c6[_0x2f6467(0x7eb)]('2d');
            if (!_0x1c9bf6)
                return null;
            _0x1c9bf6[_0x2f6467(0x704)] = _0x1f060e['BiVgx'], _0x1c9bf6[_0x2f6467(0x5a1)](0x0, 0x0, _0x2309c6[_0x2f6467(0x7ba)], _0x2309c6[_0x2f6467(0x346)]), _0x1c9bf6[_0x2f6467(0x7c9)] = _0x2f6467(0x985), _0x1c9bf6['lineWidth'] = 0x1;
            for (let _0x28416c = 0x0; _0x28416c < _0x2309c6['width']; _0x28416c += 0x1e) {
                _0x1c9bf6[_0x2f6467(0x41e)](), _0x1c9bf6[_0x2f6467(0x511)](_0x28416c, 0x0), _0x1c9bf6[_0x2f6467(0x461)](_0x28416c, _0x2309c6[_0x2f6467(0x346)]), _0x1c9bf6[_0x2f6467(0x867)]();
            }
            for (let _0x38ee60 = 0x0; _0x38ee60 < _0x2309c6[_0x2f6467(0x346)]; _0x38ee60 += 0x1e) {
                _0x1c9bf6[_0x2f6467(0x41e)](), _0x1c9bf6[_0x2f6467(0x511)](0x0, _0x38ee60), _0x1c9bf6[_0x2f6467(0x461)](_0x2309c6[_0x2f6467(0x7ba)], _0x38ee60), _0x1c9bf6['stroke']();
            }
            const _0x32c171 = _0x1c9bf6[_0x2f6467(0x6ff)](0x0, 0x0, _0x2309c6[_0x2f6467(0x7ba)], 0x0);
            _0x32c171[_0x2f6467(0x8ea)](0x0, _0x1f060e[_0x2f6467(0x948)]), _0x32c171['addColorStop'](0.5, _0x1f060e[_0x2f6467(0x27b)]), _0x32c171[_0x2f6467(0x8ea)](0x1, '#991b1b'), _0x1c9bf6[_0x2f6467(0x704)] = _0x32c171, _0x1c9bf6[_0x2f6467(0x5a1)](0x0, 0x0, _0x2309c6[_0x2f6467(0x7ba)], 0x32), _0x1c9bf6[_0x2f6467(0x7c9)] = _0x1f060e['ccIrc'], _0x1c9bf6[_0x2f6467(0x779)] = 0x2, _0x1c9bf6[_0x2f6467(0x7a2)](0x1, 0x1, _0x2309c6[_0x2f6467(0x7ba)] - 0x2, _0x2309c6[_0x2f6467(0x346)] - 0x2), _0x1c9bf6[_0x2f6467(0x704)] = _0x2f6467(0x612), _0x1c9bf6['font'] = 'bold\x2016px\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20sans-serif', _0x1c9bf6[_0x2f6467(0x4ae)](_0x2f6467(0x715), 0x12, 0x1f);
            const _0x5cacdd = new Date(_0x7bb606[_0x2f6467(0x4ca)] * 0x3e8)[_0x2f6467(0x492)]()[_0x2f6467(0x1c4)]('T', '\x20')[_0x2f6467(0x1c4)](/\..+/, _0x1f060e[_0x2f6467(0x89a)]);
            _0x1c9bf6[_0x2f6467(0x704)] = _0x1f060e['PEsbw'], _0x1c9bf6['font'] = '12px\x20monospace', _0x1c9bf6[_0x2f6467(0x819)] = _0x2f6467(0x231), _0x1c9bf6[_0x2f6467(0x4ae)](_0x5cacdd, _0x2309c6[_0x2f6467(0x7ba)] - 0x12, 0x1f), _0x1c9bf6[_0x2f6467(0x819)] = _0x2f6467(0x3f8);
            function _0xf62af3(_0x6b455d, _0x388150, _0x58b084, _0x5c3394, _0x57a201, _0x46d4ec) {
                const _0x4c3fa3 = _0x2f6467;
                _0x1c9bf6[_0x4c3fa3(0x704)] = _0x57a201, _0x1c9bf6['strokeStyle'] = _0x46d4ec, _0x1c9bf6[_0x4c3fa3(0x779)] = 1.5, typeof _0x1c9bf6[_0x4c3fa3(0x52e)] === _0x4c3fa3(0x526) ? (_0x1c9bf6[_0x4c3fa3(0x41e)](), _0x1c9bf6[_0x4c3fa3(0x52e)](_0x6b455d, _0x388150, _0x58b084, _0x5c3394, 0x6), _0x1c9bf6[_0x4c3fa3(0x368)](), _0x1c9bf6[_0x4c3fa3(0x867)]()) : (_0x1c9bf6[_0x4c3fa3(0x5a1)](_0x6b455d, _0x388150, _0x58b084, _0x5c3394), _0x1c9bf6[_0x4c3fa3(0x7a2)](_0x6b455d, _0x388150, _0x58b084, _0x5c3394));
            }
            _0xf62af3(0x14, 0x44, 0x15e, 0xc3, _0x1f060e[_0x2f6467(0x592)], _0x1f060e[_0x2f6467(0x675)]), _0x1c9bf6[_0x2f6467(0x704)] = _0x2f6467(0x694), _0x1c9bf6[_0x2f6467(0x5a1)](0x14, 0x44, 0x15e, 0x20), _0x1c9bf6[_0x2f6467(0x704)] = '#38bdf8', _0x1c9bf6[_0x2f6467(0x3a3)] = 'bold\x2013px\x20-apple-system,\x20BlinkMacSystemFont,\x20sans-serif', _0x1c9bf6[_0x2f6467(0x4ae)]('🎯\x20MONITORED\x20CONTRACT\x20TARGET\x20(VICTIM)', 0x20, 0x59), _0x1c9bf6[_0x2f6467(0x3a3)] = _0x1f060e['XlODD'];
            let _0x3622e2 = 0x7a;
            const _0x4eeee1 = (_0x15e164, _0x33cd3e, _0x5867f7 = _0x2f6467(0x2cc)) => {
                const _0x1eb8c8 = _0x2f6467;
                _0x1c9bf6[_0x1eb8c8(0x704)] = _0x1eb8c8(0x5e2), _0x1c9bf6[_0x1eb8c8(0x4ae)](_0x15e164, 0x20, _0x3622e2), _0x1c9bf6[_0x1eb8c8(0x704)] = _0x5867f7, _0x1c9bf6[_0x1eb8c8(0x4ae)](_0x33cd3e, 0x20 + 0x7d, _0x3622e2), _0x3622e2 += 0x16;
            };
            _0x1f060e['PBkvx'](_0x4eeee1, 'Target\x20Name\x20/\x20ID:', _0x7bb606[_0x2f6467(0x283)][_0x2f6467(0x589)] + '\x20[' + _0x7bb606[_0x2f6467(0x995)] + ']', _0x1f060e[_0x2f6467(0x680)]), _0x1f060e['Ionvy'](_0x4eeee1, 'Target\x20Level:', _0x2f6467(0x34a) + (_0x7bb606[_0x2f6467(0x283)][_0x2f6467(0x222)] || _0x1f060e[_0x2f6467(0x9aa)]), '#f8fafc'), _0x4eeee1(_0x1f060e[_0x2f6467(0x42a)], _0x7bb606[_0x2f6467(0x283)]['factionName'] ? _0x7bb606[_0x2f6467(0x283)][_0x2f6467(0x666)] + '\x20[' + _0x7bb606[_0x2f6467(0x283)][_0x2f6467(0x8c0)] + ']' : _0x1f060e[_0x2f6467(0x8c3)], _0x1f060e[_0x2f6467(0x7ad)]);
            const _0x4d432c = (_0x7bb606['previous']?.[_0x2f6467(0x8ce)] || _0x1f060e[_0x2f6467(0x946)]) + '\x20(' + (_0x7bb606[_0x2f6467(0x98e)]?.['lastActionRel'] || _0x2f6467(0x4dd)) + ')';
            _0x4eeee1(_0x2f6467(0x69c), _0x4d432c, _0x2f6467(0x4f7));
            const _0x461ac5 = _0x7bb606[_0x2f6467(0x283)]['warActive'] || _0x7bb606[_0x2f6467(0x98e)]?.['warActive'] ? _0x2f6467(0x285) : _0x1f060e[_0x2f6467(0x546)];
            _0x4eeee1(_0x1f060e[_0x2f6467(0x7be)], _0x461ac5, _0x7bb606[_0x2f6467(0x283)][_0x2f6467(0x232)] || _0x7bb606['previous']?.[_0x2f6467(0x232)] ? _0x2f6467(0x954) : _0x2f6467(0x293)), _0x1f060e[_0x2f6467(0x275)](_0x4eeee1, _0x2f6467(0x5a9), (_0x7bb606['previous']?.[_0x2f6467(0x2ed)] || _0x1f060e['IeyPB']) + '\x20(Out\x20&\x20Alive)', _0x1f060e[_0x2f6467(0x8f4)]), _0x1f060e[_0x2f6467(0x7c3)](_0xf62af3, 0x186, 0x44, 0x15e, 0xc3, _0x1f060e[_0x2f6467(0x592)], _0x2f6467(0x614)), _0x1c9bf6[_0x2f6467(0x704)] = _0x1f060e[_0x2f6467(0x97a)], _0x1c9bf6[_0x2f6467(0x5a1)](0x186, 0x44, 0x15e, 0x20), _0x1c9bf6[_0x2f6467(0x704)] = '#f87171', _0x1c9bf6[_0x2f6467(0x3a3)] = _0x2f6467(0x1fb), _0x1c9bf6[_0x2f6467(0x4ae)](_0x2f6467(0x781), 0x192, 0x59), _0x3622e2 = 0x7a;
            const _0xcf31ad = _0x7bb606['attacker']?.[_0x2f6467(0x589)] || 'Unknown\x20Attacker', _0x458fa2 = _0x7bb606[_0x2f6467(0x99b)]?.['id'] || _0x1f060e[_0x2f6467(0x2d3)], _0x5777fb = (_0x5501f9, _0x39e713, _0x386340 = _0x2f6467(0x2cc)) => {
                    const _0x5ba227 = _0x2f6467;
                    _0x1c9bf6[_0x5ba227(0x704)] = _0x5ba227(0x5e2), _0x1c9bf6[_0x5ba227(0x4ae)](_0x5501f9, 0x192, _0x3622e2), _0x1c9bf6[_0x5ba227(0x704)] = _0x386340, _0x1c9bf6['fillText'](_0x39e713, 0x192 + 0x82, _0x3622e2), _0x3622e2 += 0x16;
                };
            _0x5777fb(_0x2f6467(0x5c5), _0xcf31ad + '\x20[' + _0x458fa2 + ']', _0x2f6467(0x5ca)), _0x1f060e[_0x2f6467(0x275)](_0x5777fb, _0x1f060e[_0x2f6467(0x8e5)], _0x2f6467(0x625), _0x1f060e[_0x2f6467(0x7f2)]), _0x5777fb(_0x2f6467(0x9a9), _0x7bb606[_0x2f6467(0x283)][_0x2f6467(0x40a)] || _0x1f060e['coCsy'], _0x1f060e[_0x2f6467(0x7f2)]), _0x1f060e[_0x2f6467(0x8ef)](_0x5777fb, _0x2f6467(0x41b), _0x2f6467(0x6e9), _0x1f060e[_0x2f6467(0x6a5)]), _0x1f060e[_0x2f6467(0x9a1)](_0x5777fb, _0x1f060e['FuYBf'], _0x2f6467(0x63f), _0x1f060e[_0x2f6467(0x75e)]);
            const _0x2cc446 = _0x7bb606[_0x2f6467(0x283)][_0x2f6467(0x3b0)] ? new Date(_0x7bb606[_0x2f6467(0x283)]['until'] * 0x3e8)[_0x2f6467(0x492)]()[_0x2f6467(0x1c4)]('T', '\x20')['slice'](0xb, 0x13) + _0x1f060e[_0x2f6467(0x89a)] : _0x2f6467(0x3ab);
            return _0x1f060e[_0x2f6467(0x275)](_0x5777fb, _0x2f6467(0x314), _0x2cc446, _0x1f060e['EOmng']), _0xf62af3(0x14, 0x114, 0x2d0, 0x80, _0x1f060e[_0x2f6467(0x1cf)], _0x1f060e[_0x2f6467(0x75e)]), _0x1c9bf6['fillStyle'] = _0x2f6467(0x691), _0x1c9bf6[_0x2f6467(0x5a1)](0x14, 0x114, 0x2d0, 0x1c), _0x1c9bf6[_0x2f6467(0x704)] = _0x1f060e['DvkUM'], _0x1c9bf6['font'] = _0x2f6467(0x80b), _0x1c9bf6[_0x2f6467(0x4ae)](_0x2f6467(0x487), 0x20, 0x127), _0x3622e2 = 0x148, _0x7bb606[_0x2f6467(0x1d4)]['forEach']((_0x476649, _0x3c71d5) => {
                const _0x22a1e2 = _0x2f6467;
                _0x1c9bf6['fillStyle'] = _0x22a1e2(0x3a6), _0x1c9bf6['font'] = _0x22a1e2(0x1fb), _0x1c9bf6['fillText'](_0x22a1e2(0x37c) + (_0x3c71d5 + 0x1) + ':', 0x20, _0x3622e2), _0x1c9bf6[_0x22a1e2(0x704)] = _0x22a1e2(0x58a), _0x1c9bf6[_0x22a1e2(0x3a3)] = _0x22a1e2(0x619), _0x1c9bf6[_0x22a1e2(0x4ae)](_0x476649, 0x96, _0x3622e2), _0x3622e2 += 0x18;
            }), _0x1c9bf6[_0x2f6467(0x704)] = _0x1f060e[_0x2f6467(0x2b7)], _0x1c9bf6['font'] = _0x1f060e['AqigC'], _0x1c9bf6[_0x2f6467(0x4ae)](_0x2f6467(0x1fe), 0x20, 0x182), _0x1c9bf6[_0x2f6467(0x704)] = _0x1f060e[_0x2f6467(0x31a)], _0x1c9bf6[_0x2f6467(0x5a1)](0x0, 0x1a2, _0x2309c6[_0x2f6467(0x7ba)], 0x2a), _0x1c9bf6[_0x2f6467(0x7c9)] = _0x1f060e[_0x2f6467(0x97a)], _0x1c9bf6[_0x2f6467(0x779)] = 0x1, _0x1c9bf6[_0x2f6467(0x41e)](), _0x1c9bf6[_0x2f6467(0x511)](0x0, 0x1a2), _0x1c9bf6[_0x2f6467(0x461)](_0x2309c6[_0x2f6467(0x7ba)], 0x1a2), _0x1c9bf6['stroke'](), _0x1c9bf6[_0x2f6467(0x704)] = _0x2f6467(0x892), _0x1c9bf6[_0x2f6467(0x3a3)] = _0x2f6467(0x3c2), _0x1c9bf6[_0x2f6467(0x4ae)](_0x2f6467(0x1e0) + _0x38ffeb + '\x20•\x20ID:\x20' + _0x7bb606[_0x2f6467(0x2db)], 0x12, 0x1ba), _0x1c9bf6[_0x2f6467(0x819)] = _0x2f6467(0x231), _0x1c9bf6[_0x2f6467(0x4ae)](_0x2f6467(0x9c6), _0x1f060e[_0x2f6467(0x265)](_0x2309c6[_0x2f6467(0x7ba)], 0x12), 0x1ba), _0x1c9bf6[_0x2f6467(0x819)] = _0x1f060e['WYMbJ'], _0x2309c6;
        } catch (_0x12aa10) {
            return console[_0x2f6467(0x674)](_0x2f6467(0x909), _0x12aa10), null;
        }
    }
    function _0x2a25b8(_0x385ea2, _0x6a6031) {
        const _0x306f37 = _0x45c9c2;
        try {
            const _0x160d1f = document[_0x306f37(0x74a)]('a');
            _0x160d1f['download'] = _0x6a6031, _0x160d1f[_0x306f37(0x5f7)] = _0x385ea2[_0x306f37(0x581)](_0x1f060e[_0x306f37(0x4c3)]), document[_0x306f37(0x299)][_0x306f37(0x9c0)](_0x160d1f), _0x160d1f[_0x306f37(0x902)](), document[_0x306f37(0x299)]['removeChild'](_0x160d1f);
        } catch (_0x1914ee) {
            console['error']('[Stakeout]\x20Auto-download\x20error:', _0x1914ee);
        }
    }
    function _0x33bfdd(_0x37551f, _0x1beca0) {
        const _0x46cc41 = _0x45c9c2, _0x5100d8 = {
                'RcFmp': _0x46cc41(0x999),
                'ZWIae': function (_0x1ede3b, _0x20b3a4) {
                    return _0x1ede3b(_0x20b3a4);
                },
                'zmJql': function (_0x21ac2b, _0x2a43b2) {
                    return _0x1f060e['zGGzb'](_0x21ac2b, _0x2a43b2);
                },
                'IyaUt': _0x1f060e[_0x46cc41(0x5e6)]
            };
        try {
            const _0x4ed748 = document[_0x46cc41(0x24c)](_0x46cc41(0x3a4));
            if (_0x4ed748)
                _0x4ed748[_0x46cc41(0x8e2)]();
            const _0x5bd6f8 = document[_0x46cc41(0x74a)](_0x46cc41(0x437));
            _0x5bd6f8['id'] = _0x1f060e[_0x46cc41(0x78f)], _0x5bd6f8['style']['cssText'] = _0x46cc41(0x466);
            const _0x492259 = [
                    _0x46cc41(0x9ad),
                    _0x46cc41(0x31f) + _0x37551f[_0x46cc41(0x283)][_0x46cc41(0x589)] + '\x20[' + _0x37551f[_0x46cc41(0x995)] + _0x46cc41(0x636) + (_0x37551f[_0x46cc41(0x283)]['level'] || '?') + ')',
                    _0x37551f[_0x46cc41(0x283)][_0x46cc41(0x666)] ? '•\x20**Target\x20Faction**:\x20' + _0x37551f[_0x46cc41(0x283)][_0x46cc41(0x666)] + '\x20[' + _0x37551f[_0x46cc41(0x283)][_0x46cc41(0x8c0)] + ']' : null,
                    _0x46cc41(0x551) + (_0x37551f['previous']?.[_0x46cc41(0x2ed)] || _0x1f060e[_0x46cc41(0x766)]) + _0x46cc41(0x8f7),
                    _0x46cc41(0x49c) + (_0x37551f['previous']?.[_0x46cc41(0x8ce)] || _0x46cc41(0x63c)) + '\x20(' + (_0x37551f[_0x46cc41(0x98e)]?.[_0x46cc41(0x261)] || _0x46cc41(0x4dd)) + ')',
                    _0x46cc41(0x2f3) + (_0x37551f[_0x46cc41(0x99b)]?.[_0x46cc41(0x589)] || _0x46cc41(0x5fc)) + '\x20[' + (_0x37551f[_0x46cc41(0x99b)]?.['id'] || _0x46cc41(0x3ab)) + ']',
                    '•\x20**Hospital\x20Details**:\x20' + (_0x37551f[_0x46cc41(0x283)][_0x46cc41(0x40a)] || _0x1f060e[_0x46cc41(0x74b)]),
                    _0x46cc41(0x783),
                    ..._0x37551f[_0x46cc41(0x1d4)][_0x46cc41(0x6fe)](_0x4aa189 => '\x20\x20-\x20❌\x20' + _0x4aa189),
                    _0x46cc41(0x4fa) + new Date(_0x1f060e[_0x46cc41(0x703)](_0x37551f[_0x46cc41(0x4ca)], 0x3e8))[_0x46cc41(0x492)]()[_0x46cc41(0x1c4)]('T', '\x20')[_0x46cc41(0x1c4)](/\..+/, '\x20UTC'),
                    '•\x20**Verification\x20Token**:\x20`' + _0x37551f[_0x46cc41(0x2db)] + '`',
                    _0x46cc41(0x8f5) + _0x38ffeb + ')*'
                ][_0x46cc41(0x668)](Boolean)[_0x46cc41(0x207)]('\x0a'), _0x452067 = _0x1beca0[_0x46cc41(0x581)](_0x1f060e[_0x46cc41(0x4c3)]);
            _0x5bd6f8[_0x46cc41(0x75a)] = _0x46cc41(0x73d) + _0x37551f['incidentId'] + _0x46cc41(0x271) + _0x452067 + (_0x46cc41(0x86e) + _0x46cc41(0x50e)) + _0x492259 + (_0x46cc41(0x4e2) + _0x46cc41(0x30c)) + (_0x37551f['attacker'] && _0x37551f['attacker']['id'] !== _0x46cc41(0x224) ? _0x46cc41(0x9b4) : '') + _0x46cc41(0x6a7), document[_0x46cc41(0x299)][_0x46cc41(0x9c0)](_0x5bd6f8);
            const _0xaf7c28 = document[_0x46cc41(0x24c)](_0x46cc41(0x3eb)), _0x4ba97d = document[_0x46cc41(0x24c)](_0x1f060e[_0x46cc41(0x9ca)]), _0x156061 = () => _0x5bd6f8[_0x46cc41(0x8e2)]();
            if (_0xaf7c28)
                _0xaf7c28['onclick'] = _0x156061;
            if (_0x4ba97d)
                _0x4ba97d['onclick'] = _0x156061;
            const _0x46e7ac = document[_0x46cc41(0x24c)](_0x46cc41(0x945));
            _0x46e7ac && (_0x46e7ac[_0x46cc41(0x606)] = () => {
                const _0x31b2ba = _0x46cc41, _0x124bf5 = new Date()[_0x31b2ba(0x492)]()[_0x31b2ba(0x399)](0x0, 0xa)[_0x31b2ba(0x1c4)](/-/g, ''), _0x3b33a8 = _0x31b2ba(0x227) + _0x37551f[_0x31b2ba(0x995)] + '_attacker_' + (_0x37551f[_0x31b2ba(0x99b)]?.['id'] || _0x1f060e[_0x31b2ba(0x364)]) + '_' + _0x124bf5 + _0x31b2ba(0x914);
                _0x2a25b8(_0x1beca0, _0x3b33a8), _0x1f060e[_0x31b2ba(0x3e7)](_0x40d4da, _0x1f060e[_0x31b2ba(0x1e6)]);
            });
            const _0x4691f2 = document[_0x46cc41(0x24c)](_0x46cc41(0x8ac));
            _0x4691f2 && (_0x4691f2[_0x46cc41(0x606)] = () => {
                const _0x53f727 = _0x46cc41, _0xa5cd91 = {
                        'lzhLU': function (_0x3b0c86, _0x3da2e9) {
                            const _0x5c5fa1 = _0xf22e;
                            return _0x5100d8[_0x5c5fa1(0x714)](_0x3b0c86, _0x3da2e9);
                        }
                    }, _0x1f5c8f = document[_0x53f727(0x24c)](_0x53f727(0x24d));
                if (navigator[_0x53f727(0x4fe)] && navigator[_0x53f727(0x4fe)][_0x53f727(0x477)])
                    navigator['clipboard'][_0x53f727(0x477)](_0x492259)[_0x53f727(0x3f9)](() => {
                        const _0x3335e9 = _0x53f727;
                        _0xa5cd91[_0x3335e9(0x6f2)](_0x40d4da, _0x3335e9(0x6a4));
                    })[_0x53f727(0x2af)](() => {
                        const _0x640695 = _0x53f727;
                        _0x1f5c8f && (_0x1f5c8f[_0x640695(0x8cb)](), document[_0x640695(0x640)](_0x5100d8[_0x640695(0x50c)]), _0x5100d8['ZWIae'](_0x40d4da, _0x640695(0x208)));
                    });
                else
                    _0x1f5c8f && (_0x1f5c8f[_0x53f727(0x8cb)](), document['execCommand'](_0x5100d8[_0x53f727(0x50c)]), _0x40d4da(_0x5100d8['IyaUt']));
            });
            const _0x524424 = document[_0x46cc41(0x24c)](_0x46cc41(0x302));
            _0x524424 && (_0x524424[_0x46cc41(0x606)] = () => window[_0x46cc41(0x1c6)](_0x46cc41(0x396) + _0x37551f['targetId'], _0x46cc41(0x38c)));
            const _0x535e35 = document[_0x46cc41(0x24c)](_0x1f060e[_0x46cc41(0x49f)]);
            _0x535e35 && _0x37551f['attacker']?.['id'] && (_0x535e35[_0x46cc41(0x606)] = () => window['open'](_0x46cc41(0x396) + _0x37551f[_0x46cc41(0x99b)]['id'], '_blank'));
        } catch (_0x157024) {
            console[_0x46cc41(0x674)]('[Stakeout]\x20Modal\x20display\x20error:', _0x157024);
        }
    }
    function _0x429954(_0x5a0f6e, _0x349e13, _0x5b3c6f, _0x215df5) {
        const _0x53509d = _0x45c9c2;
        if (!_0x59e0bf[_0x53509d(0x415)] && !_0x59e0bf['autoScreenshotIllegalHit'])
            return;
        const _0x17ad73 = _0x5a0f6e + '_' + (_0x5b3c6f[_0x53509d(0x3b0)] || _0x215df5);
        if (_0x988cbf['has'](_0x17ad73))
            return;
        const _0x36fe32 = _0x5b3c6f[_0x53509d(0x81a)] || _0x5b3c6f[_0x53509d(0x40a)] || '';
        if (/overdose|collapsed/i[_0x53509d(0x5eb)](_0x36fe32))
            return;
        const _0xec6305 = _0x26c593(_0x36fe32), _0x56de41 = _0x1f060e[_0x53509d(0x5c6)](_0x3d65bb);
        if (_0xec6305 && _0x56de41 && String(_0xec6305['id']) === _0x1f060e[_0x53509d(0x6a9)](String, _0x56de41))
            return;
        const _0x4359d6 = _0x38a8d1(_0x349e13, _0x215df5, _0x5a0f6e), _0x3e1738 = _0x1f060e[_0x53509d(0x661)](Boolean, _0x349e13[_0x53509d(0x232)] || _0x5b3c6f[_0x53509d(0x232)]);
        if (_0x4359d6 && !_0x3e1738)
            return;
        _0x988cbf[_0x53509d(0x778)](_0x17ad73);
        const _0x2eeaee = [];
        if (!_0x4359d6) {
            const _0x4a6ef2 = _0x349e13[_0x53509d(0x8ce)] + (_0x349e13[_0x53509d(0x261)] ? '\x20(' + _0x349e13[_0x53509d(0x261)] + ')' : '');
            _0x2eeaee[_0x53509d(0x3ca)](_0x53509d(0x68e) + _0x4ffd01(_0x5a0f6e) + _0x53509d(0x9b2) + _0x4a6ef2 + ')');
        }
        if (_0x3e1738) {
            const _0x4308e5 = (_0x5b3c6f[_0x53509d(0x406)] || _0x349e13[_0x53509d(0x406)])?.[_0x53509d(0x589)] || _0x1f060e['HMjxh'];
            _0x2eeaee[_0x53509d(0x3ca)](_0x53509d(0x6b2) + _0x4308e5 + ')');
        }
        const _0x585fc3 = _0xec6305 ? _0xec6305[_0x53509d(0x589)] : _0x1f060e[_0x53509d(0x26c)], _0x198727 = _0xec6305 ? _0xec6305['id'] : _0x53509d(0x3ab);
        _0x1f060e[_0x53509d(0x5a5)](_0x59e0bf[_0x53509d(0x415)], ![]) && _0x1f060e[_0x53509d(0x822)](_0x151284, {
            'key': 'illegal:' + _0x17ad73,
            'dedupeMs': _0x1f060e[_0x53509d(0x49e)](0xa, 0x3c) * 0x3e8,
            'sound': _0x53509d(0x9be),
            'flash': '🚨\x20ILLEGAL\x20HIT:\x20' + _0x5b3c6f[_0x53509d(0x589)] + '!',
            'notif': {
                'title': _0x53509d(0x2a3) + _0x5b3c6f[_0x53509d(0x589)] + '!',
                'body': _0x53509d(0x441) + _0x585fc3 + '\x20[' + _0x198727 + _0x53509d(0x425) + _0x2eeaee[_0x53509d(0x207)](';\x20')
            },
            'toast': _0x53509d(0x494) + _0x5b3c6f['name'] + ']\x20hit\x20by\x20[' + _0x585fc3 + _0x53509d(0x8b9)
        });
        const _0x5a3d21 = {
                'targetId': _0x5a0f6e,
                'target': _0x5b3c6f,
                'previous': _0x349e13,
                'attacker': _0xec6305,
                'violations': _0x2eeaee,
                'timestamp': _0x215df5,
                'incidentId': _0x53509d(0x965) + _0x5a0f6e + '-' + Math[_0x53509d(0x306)](_0x1f060e[_0x53509d(0x568)](_0x215df5, 0x186a0))
            }, _0x3ac248 = _0x4a63f5(_0x5a3d21), _0x4ae5cc = {};
        _0x4ae5cc[_0x53509d(0x307)] = _0x5a3d21, _0x4ae5cc[_0x53509d(0x3be)] = _0x3ac248, _0x2eac6a[_0x5a0f6e] = _0x4ae5cc;
        const _0x12df04 = {};
        _0x12df04[_0x53509d(0x995)] = _0x5a0f6e, _0x12df04[_0x53509d(0x307)] = _0x5a3d21, _0x5b70e4(_0x1f060e['WVWtY'], _0x12df04);
        if (_0x1f060e['ftuoU'](_0x59e0bf[_0x53509d(0x8ae)], !![]) && _0x3ac248) {
            const _0x1f281a = new Date()[_0x53509d(0x492)]()[_0x53509d(0x399)](0x0, 0xa)['replace'](/-/g, ''), _0x2a2e8a = 'illegal_hit_' + _0x5a0f6e + _0x53509d(0x8a2) + (_0xec6305?.['id'] || _0x53509d(0x4dd)) + '_' + _0x1f281a + _0x53509d(0x914);
            _0x1f060e['yQxnk'](_0x2a25b8, _0x3ac248, _0x2a2e8a);
        }
        _0x571c62 === _0x53509d(0x463) && _0x1f060e[_0x53509d(0x6b6)](_0x561e23, _0x5a0f6e);
    }
    function _0x4b97ca(_0x27b616, _0x23d87a) {
        const _0x8abe74 = _0x45c9c2;
        if (!_0x23d87a || _0x23d87a[_0x8abe74(0x674)])
            return;
        const _0x2f2b69 = _0x23d87a[_0x8abe74(0x91e)]?.[_0x8abe74(0x638)] || 0x0, _0x5cff04 = _0x23d87a[_0x8abe74(0x91e)]?.['faction_name'] || '';
        _0x1f060e[_0x8abe74(0x6d9)](_0x337416[_0x8abe74(0x83f)], 0x0) && _0x26397c();
        const _0x5ac754 = _0x23d87a['basicicons'] || {}, _0x12bf86 = _0x1f060e['AfhUo'](_0x5d81a2, _0x5ac754), _0x2726b4 = _0x1f060e[_0x8abe74(0x7c8)](Boolean, _0x12bf86), _0x182fbe = _0x1f060e[_0x8abe74(0x3c5)](_0x4615b8, _0x2f2b69, _0x12bf86), _0x1d25d2 = {
                'name': _0x23d87a[_0x8abe74(0x589)] || 'Player\x20[' + _0x27b616 + ']',
                'state': _0x23d87a[_0x8abe74(0x56d)]?.[_0x8abe74(0x2ed)] || _0x1f060e[_0x8abe74(0x766)],
                'desc': _0x23d87a[_0x8abe74(0x56d)]?.['description'] || '',
                'details': _0x23d87a[_0x8abe74(0x56d)]?.[_0x8abe74(0x81a)] || '',
                'until': parseInt(_0x23d87a[_0x8abe74(0x56d)]?.[_0x8abe74(0x3b0)] || '0', 0xa),
                'online': _0x23d87a[_0x8abe74(0x7b8)]?.[_0x8abe74(0x56d)] || _0x1f060e[_0x8abe74(0x946)],
                'lastActionRel': _0x23d87a['last_action']?.['relative'] || '',
                'lastActionTs': _0x1f060e[_0x8abe74(0x4b1)](parseInt, _0x23d87a[_0x8abe74(0x7b8)]?.[_0x8abe74(0x4ca)] || '0', 0xa),
                'hpCurr': _0x23d87a[_0x8abe74(0x2ce)]?.[_0x8abe74(0x369)] || 0x0,
                'hpMax': _0x23d87a[_0x8abe74(0x2ce)]?.[_0x8abe74(0x77a)] || 0x0,
                'hpPct': _0x1f060e[_0x8abe74(0x775)](_0x23d87a[_0x8abe74(0x2ce)]?.['maximum'], 0x0) ? _0x1f060e['uKnZM'](_0x23d87a[_0x8abe74(0x2ce)][_0x8abe74(0x369)], _0x23d87a[_0x8abe74(0x2ce)][_0x8abe74(0x77a)]) * 0x64 : 0x64,
                'level': _0x23d87a[_0x8abe74(0x222)] || 0x0,
                'factionId': _0x2f2b69,
                'factionName': _0x5cff04,
                'warActive': !!_0x182fbe,
                'warInfo': _0x182fbe,
                'basicicons': _0x5ac754,
                'wall': _0x12bf86,
                'onWall': _0x2726b4
            }, _0x1934f8 = _0x167784[_0x27b616], _0x5ae624 = _0x1934f8 ? _0x1934f8['data'] : null, _0x49bbe5 = Math['floor'](Date[_0x8abe74(0x903)]() / 0x3e8), _0x5d1f15 = _0x4ffd01(_0x27b616), _0x4bbadd = _0x266a19(_0x27b616);
        if (_0xe0a523['includes'](_0x27b616)) {
            const _0x12fc5f = _0x463d9e(_0x1d25d2, _0x49bbe5, _0x27b616), _0x14276c = _0x5ae624 ? _0x463d9e(_0x5ae624, _0x49bbe5, _0x27b616) : ![];
            _0x5ae624 && _0x5ae624[_0x8abe74(0x2ed)] !== _0x8abe74(0x8b7) && _0x1f060e[_0x8abe74(0x1fd)](_0x1d25d2['state'], _0x8abe74(0x8b7)) && _0x1f060e[_0x8abe74(0x2f0)](_0x429954, _0x27b616, _0x5ae624, _0x1d25d2, _0x49bbe5);
            if (_0x5ae624 && !_0x4bbadd) {
                const _0x5175bf = !_0x14276c && _0x12fc5f;
                if (_0x59e0bf['alertOnOkay'] && _0x5175bf) {
                    const _0x305873 = _0x1d25d2[_0x8abe74(0x8ce)] + ',\x20' + (_0x1d25d2[_0x8abe74(0x261)] || _0x8abe74(0x359) + _0x5d1f15 + 'm'), _0x372654 = {};
                    _0x372654['key'] = 'okay:' + _0x27b616 + ':' + _0x49bbe5, _0x372654['sound'] = _0x8abe74(0x4f0), _0x372654[_0x8abe74(0x404)] = _0x1d25d2[_0x8abe74(0x589)] + '\x20READY\x20(ACTIVE)!', _0x372654[_0x8abe74(0x395)] = !![], _0x372654[_0x8abe74(0x23c)] = {}, _0x372654[_0x8abe74(0x649)] = _0x8abe74(0x6d5) + _0x1d25d2['name'] + _0x8abe74(0x582) + _0x305873 + _0x8abe74(0x3d2), _0x372654[_0x8abe74(0x23c)][_0x8abe74(0x2ca)] = '⚔️\x20' + _0x1d25d2[_0x8abe74(0x589)] + _0x8abe74(0x562), _0x372654[_0x8abe74(0x23c)][_0x8abe74(0x299)] = _0x8abe74(0x507) + _0x305873 + ')!', _0x1f060e['bPLXO'](_0x151284, _0x372654);
                }
                _0x59e0bf[_0x8abe74(0x33e)] && _0x5ae624['state'] === _0x8abe74(0x2f4) && _0x1d25d2[_0x8abe74(0x2ed)] !== _0x1f060e[_0x8abe74(0x268)] && (!_0x5175bf && _0x12fc5f && _0x1f060e['yeIFw'](_0x151284, {
                    'key': _0x8abe74(0x3d8) + _0x27b616 + ':' + _0x49bbe5,
                    'sound': _0x1f060e[_0x8abe74(0x467)],
                    'flash': _0x1d25d2[_0x8abe74(0x589)] + _0x8abe74(0x866),
                    'focus': !![],
                    'notif': {
                        'title': _0x1d25d2[_0x8abe74(0x589)] + _0x8abe74(0x97c),
                        'body': _0x8abe74(0x6c4) + _0x1d25d2['online']
                    }
                })), _0x59e0bf[_0x8abe74(0x434)] && _0x1f060e[_0x8abe74(0x68c)](_0x5ae624[_0x8abe74(0x84a)], 0x64) && _0x1d25d2[_0x8abe74(0x84a)] >= 0x64 && (!_0x5175bf && _0x12fc5f && _0x151284({
                    'key': _0x8abe74(0x6bd) + _0x27b616 + ':' + _0x49bbe5,
                    'sound': _0x8abe74(0x8ce),
                    'flash': _0x1d25d2[_0x8abe74(0x589)] + _0x8abe74(0x2b4),
                    'focus': !![],
                    'notif': {
                        'title': _0x1d25d2[_0x8abe74(0x589)] + _0x8abe74(0x3ba),
                        'body': _0x8abe74(0x4ef) + _0x1d25d2[_0x8abe74(0x61b)][_0x8abe74(0x46e)]() + _0x8abe74(0x2f6) + _0x1d25d2[_0x8abe74(0x438)][_0x8abe74(0x46e)]() + '\x20•\x20Active:\x20' + _0x1d25d2[_0x8abe74(0x8ce)]
                    }
                }));
            }
        }
        if (_0x23e34f[_0x8abe74(0x67b)](_0x27b616) && _0x59e0bf[_0x8abe74(0x3bc)] && !_0x59e0bf[_0x8abe74(0x1ba)]) {
            const _0x2c4bd5 = _0x1f060e[_0x8abe74(0x4b8)](_0x44c8a0, _0x1d25d2), _0x3304d1 = _0x5ae624 ? _0x44c8a0(_0x5ae624) : ![];
            if (_0x2c4bd5 && !_0x3304d1) {
                const _0x377145 = _0x5c4031(_0x27b616);
                if (!_0x377145) {
                    const _0x387a66 = {};
                    _0x387a66[_0x8abe74(0x92f)] = _0x8abe74(0x5f8) + _0x27b616 + ':' + _0x49bbe5, _0x387a66[_0x8abe74(0x2f9)] = _0x1f060e[_0x8abe74(0x89d)], _0x387a66[_0x8abe74(0x404)] = _0x8abe74(0x733) + _0x1d25d2[_0x8abe74(0x589)] + _0x8abe74(0x52a), _0x387a66[_0x8abe74(0x395)] = !![], _0x387a66[_0x8abe74(0x23c)] = {}, _0x387a66[_0x8abe74(0x649)] = _0x8abe74(0x36e) + _0x1d25d2[_0x8abe74(0x589)] + _0x8abe74(0x2a9), _0x387a66[_0x8abe74(0x23c)]['title'] = _0x8abe74(0x737) + _0x1d25d2['name'] + _0x8abe74(0x61c), _0x387a66[_0x8abe74(0x23c)][_0x8abe74(0x299)] = _0x8abe74(0x3e8) + _0x1d25d2['online'] + _0x8abe74(0x881), _0x151284(_0x387a66);
                }
            }
        }
        _0x167784[_0x27b616] = {
            'data': _0x1d25d2,
            'lastChecked': Date[_0x8abe74(0x903)]()
        }, _0x1f060e[_0x8abe74(0x1fa)](_0xa3371f, _0x27b616), _0x1f060e[_0x8abe74(0x9c3)](_0x571c62, _0x8abe74(0x463)) ? _0x1f060e[_0x8abe74(0x6b6)](_0x561e23, _0x27b616) : _0x1f060e[_0x8abe74(0x45d)](_0x12d7fe, _0x27b616), _0x1f060e['OHtFu'](_0x124a19);
    }
    let _0x3a5f2c = null;
    function _0x17e6e0(_0x505035 = _0x3a5f2c) {
        const _0xdf9354 = _0x45c9c2, _0x5c7d5d = {
                'SMxMu': function (_0x2816eb) {
                    const _0x5e884b = _0xf22e;
                    return _0x1f060e[_0x5e884b(0x78b)](_0x2816eb);
                },
                'cVeGy': function (_0x30c21e) {
                    return _0x30c21e();
                }
            };
        try {
            _0x3a5f2c = _0x505035 || null;
            const _0x2a501c = document[_0xdf9354(0x24c)]('stakeout-store-modal');
            if (_0x2a501c)
                _0x2a501c[_0xdf9354(0x8e2)]();
            const _0x58efe5 = Math[_0xdf9354(0x306)](_0x1f060e[_0xdf9354(0x300)](Date[_0xdf9354(0x903)](), 0x3e8)), _0x4edef7 = _0x26cf04(), _0x1813af = _0x274700 > Date[_0xdf9354(0x903)](), _0x119fd7 = _0x1f060e[_0xdf9354(0x1fc)](_0x3589e4, _0xdf9354(0x298), ''), _0x59ec73 = _0x102ef1 ? _0x2d4cc5(_0x102ef1[_0xdf9354(0x589)] || _0xdf9354(0x3fc)) + '\x20[' + _0x102ef1['pid'] + ']' : null, _0x41e64a = _0x1f060e[_0xdf9354(0x77e)](_0x3d65bb), _0x2d02c3 = _0x41e64a ? _0x1f060e[_0xdf9354(0x452)](_0xd6d7e5) : null, _0xc6cdf7 = _0x41e64a ? _0x2d4cc5(_0x2d02c3 || 'Player') + '\x20[' + _0x41e64a + ']' : null, _0x4e3688 = _0x1f060e[_0xdf9354(0x1f3)](Boolean, _0x1f060e[_0xdf9354(0x452)](_0x26c0f6)), _0x5e99dc = _0x119fd7 ? '⚠️\x20' + _0x2d4cc5(_0x119fd7) : _0x4e3688 ? _0xdf9354(0x5b9) : _0xdf9354(0x6a0), _0x48d8bf = _0x3e7223[_0xdf9354(0x6fe)](_0x3adb92 => {
                    const _0x289d3b = _0xdf9354, _0x227ae1 = _0x1f060e[_0x289d3b(0x45a)](_0x8844b1, _0x3adb92['feature']), _0x5944ae = _0x227ae1 ? Math['ceil']((_0x227ae1 - _0x58efe5) / 0x15180) : 0x0;
                    return _0x289d3b(0x1ad) + (_0x227ae1 ? 'owned' : '') + '\x20' + (_0x3a5f2c === _0x3adb92['feature'] ? 'focus' : '') + _0x289d3b(0x245) + _0x3adb92[_0x289d3b(0x3ed)] + '\x20' + _0x3adb92[_0x289d3b(0x589)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x227ae1 ? _0x289d3b(0x524) + new Date(_0x227ae1 * 0x3e8)[_0x289d3b(0x46e)]() + _0x289d3b(0x92b) + _0x5944ae + _0x289d3b(0x979) : _0x289d3b(0x761)) + _0x289d3b(0x534) + _0x3adb92['desc'] + _0x289d3b(0x6f0) + _0x1ef474 + _0x289d3b(0x9a4) + _0x3b91f1[_0x289d3b(0x589)] + '\x20[' + _0x3b91f1['pid'] + _0x289d3b(0x2eb) + _0x3adb92['code'] + _0x289d3b(0x99d) + _0x3adb92[_0x289d3b(0x572)] + _0x289d3b(0x51f);
                })[_0xdf9354(0x207)](''), _0x3bb845 = document[_0xdf9354(0x74a)](_0x1f060e[_0xdf9354(0x7e4)]);
            _0x3bb845['id'] = _0x1f060e[_0xdf9354(0x7e1)], _0x3bb845[_0xdf9354(0x75a)] = _0xdf9354(0x8a0) + (!_0x4edef7 ? _0xdf9354(0x46a) : _0x59ec73 ? _0xdf9354(0x9c7) + _0x59ec73 + _0xdf9354(0x2f1) + (_0x119fd7 ? _0xdf9354(0x769) + _0x2d4cc5(_0x119fd7) + '</div>' : '') + _0xdf9354(0x3d7) : _0xdf9354(0x24b) + (_0xc6cdf7 ? _0xdf9354(0x2da) + _0xc6cdf7 + _0xdf9354(0x6ec) : '') + _0xdf9354(0x5ec) + _0x5e99dc + _0xdf9354(0x584) + (!_0x4e3688 || _0x119fd7 ? _0x1f060e[_0xdf9354(0x660)] : '') + _0xdf9354(0x53b)) + _0xdf9354(0x1f7) + _0x48d8bf + _0xdf9354(0x8c4) + _0x3b91f1[_0xdf9354(0x589)] + _0xdf9354(0x27c) + _0x3b91f1[_0xdf9354(0x42c)] + '\x22\x20target=\x22_blank\x22>👤\x20' + _0x3b91f1[_0xdf9354(0x589)] + '\x27s\x20Profile</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22stakeout-store-btn\x20primary\x22\x20id=\x22stakeout-store-check\x22\x20' + (_0x4edef7 && _0x59ec73 ? '' : _0xdf9354(0x692)) + _0xdf9354(0x254) + (_0x1813af ? _0xdf9354(0x2dc) : _0xdf9354(0x898)) + _0xdf9354(0x5a4) + (_0x1813af ? _0x1f060e[_0xdf9354(0x48f)] : '') + _0xdf9354(0x664), _0x3bb845[_0xdf9354(0x606)] = _0x39480f => {
                const _0x436267 = _0xdf9354;
                if (_0x39480f['target'] === _0x3bb845)
                    _0x3bb845[_0x436267(0x8e2)]();
                const _0x376f01 = _0x39480f['target']['closest']('[data-copy-code]');
                if (_0x376f01) {
                    const _0x802a6 = _0x376f01[_0x436267(0x63e)][_0x436267(0x47b)], _0x2cb60e = () => _0x40d4da(_0x436267(0x597) + _0x802a6 + '\x22:\x20paste\x20it\x20as\x20the\x20message\x20when\x20sending\x20Xanax\x20to\x20' + _0x3b91f1[_0x436267(0x589)] + '.');
                    try {
                        navigator[_0x436267(0x4fe)]['writeText'](_0x802a6)[_0x436267(0x3f9)](_0x2cb60e, _0x2cb60e);
                    } catch (_0x2a235f) {
                        _0x5c7d5d[_0x436267(0x39d)](_0x2cb60e);
                    }
                }
            }, document[_0xdf9354(0x299)][_0xdf9354(0x9c0)](_0x3bb845), _0x3bb845['querySelector'](_0xdf9354(0x1f1))[_0xdf9354(0x606)] = () => _0x3bb845[_0xdf9354(0x8e2)]();
            const _0x37b8d7 = _0x3bb845['querySelector'](_0x1f060e['ZFPfV']);
            if (_0x37b8d7)
                _0x37b8d7[_0xdf9354(0x606)] = () => {
                    const _0x3f9e03 = _0xdf9354;
                    _0x3bb845[_0x3f9e03(0x8e2)](), _0x130af7();
                };
            const _0x5bf9f7 = _0x3bb845['querySelector'](_0xdf9354(0x1d8));
            _0x5bf9f7 && (_0x5bf9f7[_0xdf9354(0x606)] = () => {
                const _0x3e5d1a = _0xdf9354;
                _0x32a518(), _0x5c7d5d[_0x3e5d1a(0x58b)](_0x17e6e0);
            });
        } catch (_0x3c52fa) {
            console[_0xdf9354(0x674)](_0x1f060e[_0xdf9354(0x3bf)], _0x3c52fa);
        }
    }
    _0x551e6b(_0x45c9c2(0x98c) + _0x45c9c2(0x1b1) + 'nt-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#torn-mercenary-dock.position-left,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#torn-stakeout-dock.position-left\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#torn-mercenary-dock.position-right,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#torn-stakeout-dock.position-right\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-pill\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#0f172a\x200%,\x20#1e293b\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#3b82f6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f8fafc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2030px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2016px\x20rgba(0,\x200,\x200,\x200.6),\x200\x200\x2010px\x20rgba(59,\x20130,\x20246,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2013px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-pill:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-2px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x206px\x2020px\x20rgba(0,\x200,\x200,\x200.7),\x200\x200\x2015px\x20rgba(59,\x20130,\x20246,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#60a5fa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-pill.has-ready\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#22c55e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2016px\x20rgba(0,\x200,\x200,\x200.6),\x200\x200\x2012px\x20rgba(34,\x20197,\x2094,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20stakeoutPillPulse\x201.4s\x20infinite\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20stakeoutPillPulse\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20box-shadow:\x200\x200\x204px\x20#22c55e;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20box-shadow:\x200\x200\x2014px\x20#22c55e,\x200\x200\x206px\x20#16a34a;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20box-shadow:\x200\x200\x204px\x20#22c55e;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-radar-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20radarRotate\x204s\x20linear\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20radarRotate\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20transform:\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-window\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20wid' + 'th:\x20380px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x2095vw;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#0f172a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x2010px\x2030px\x20rgba(0,\x200,\x200,\x200.8),\x200\x200\x201px\x20rgba(255,\x20255,\x20255,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x20calc(100vh\x20-\x2035px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#1e293b\x200%,\x20#0f172a\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-height:\x2036px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-title\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20800;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f8fafc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x200.2px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20now' + 'rap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-header-actions\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-shrink:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-btn-icon\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20255,\x20255,\x200.08);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x200.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#cbd5e1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-btn-icon:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(255,\x20255,\x20255,\x200.18);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-add-bar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#1e293b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-input\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#0f172a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20borde' + _0x45c9c2(0x2b1) + '\x20padding:\x2024px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-card\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#1e293b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20-1px\x20rgba(0,\x200,\x200,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-card.trader-ready\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#f59e0b\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20rgba(245,\x20158,\x2011,\x200.12)\x200%,\x20#1e293b\x20100%)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x2010px\x20rgba(245,\x20158,\x2011,\x200.35)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-card-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-card-title-wrap\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-item' + _0x45c9c2(0x400) + _0x45c9c2(0x983) + _0x45c9c2(0x5ad) + _0x45c9c2(0x47f) + 'padding:\x200\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-tab-badge.trader\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#f59e0b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#451a03;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Three\x20tabs\x20share\x20the\x20dock\x20width\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-tab-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20---\x20STORE\x20---\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-store-modal,\x20#stakeout-key-modal\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inset:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(4px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-store-box\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20460px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-' + _0x45c9c2(0x558) + _0x45c9c2(0x27f) + _0x45c9c2(0x8f8) + _0x45c9c2(0x65c) + _0x45c9c2(0x5e1) + _0x45c9c2(0x235) + _0x45c9c2(0x99c) + _0x45c9c2(0x4b2) + _0x45c9c2(0x853) + _0x45c9c2(0x269) + _0x45c9c2(0x94f) + _0x45c9c2(0x86d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-attack-btn.war-warning\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#78350f\x200%,\x20#451a03\x20100%)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f59e0b\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fef08a\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-height:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-attack-btn.war-warning:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#92400e\x200%,\x20#78350f\x20100%)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x208px\x20rgba(245,\x20158,\x2011,\x200.5)\x20!important;\x0a\x20\x20\x20\x20\x20\x20' + _0x45c9c2(0x8bf) + _0x45c9c2(0x824) + _0x45c9c2(0x6e6) + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace,\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.25;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.okay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(34,\x20197,\x2094,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#22c55e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#86efac;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20stakeoutPillPulse\x201.2s\x20infinite\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.okay-offline\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(100,\x20116,\x20139,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#64748b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#cbd5e1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.hospital\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(239,\x2068,\x2068,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ef4444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fca5a5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.hospital.near-ready\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(245,\x20158,\x2011,\x20' + _0x45c9c2(0x1db) + '\x20\x20\x20\x20\x20.stakeout-hp-bar-fill.warning\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20#b45309\x200%,\x20#eab308\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-hp-bar-fill.danger\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20#991b1b\x200%,\x20#ef4444\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-hp-text\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x209.5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20800;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace,\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x200\x201px\x202px\x20rgba(0,\x200,\x200,\x200.9);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pointer-events:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-attack-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#166534;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#22c55e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20800;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decor' + 'ation:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x200.3);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-attack-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#15803d;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x2010px\x20rgba(34,\x20197,\x2094,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-attack-btn.ready\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#16a34a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20stakeoutPillPulse\x201.2s\x20infinite\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-attack-btn.disabled\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#1e293b\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#475569\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#94a3b8\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20not-allowed\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.8\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010.5px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x206px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-attack-btn.disabled:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#243046\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#64748b\x20!important;\x0a\x20\x20' + _0x45c9c2(0x96a) + _0x45c9c2(0x33c) + _0x45c9c2(0x371) + _0x45c9c2(0x1cb) + _0x45c9c2(0x557) + _0x45c9c2(0x240) + _0x45c9c2(0x90d) + 'y\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20800;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#22c55e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(34,\x20197,\x2094,\x200.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#4ade80;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-fight-energy[data-level=\x22low\x22]\x20{\x20border-color:\x20#f59e0b;\x20background:\x20rgba(245,\x20158,\x2011,\x200.18);\x20color:\x20#fbbf24;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-fight-energy[data-level=\x22empty\x22]\x20{\x20border-color:\x20#ef4444;\x20background:\x20rgba(239,\x2068,\x2068,\x200.2);\x20color:\x20#f87171;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-fight-energy[data-level=\x22unknown\x22]\x20{\x20border-color:\x20#475569;\x20background:\x20rgba(71,\x2085,\x20105,\x200.2);\x20color:\x20#94a3b8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-fight-energy.standalone\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2018px\x20rgba(0,\x200,\x200,\x200.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(15,\x2023,' + '\x2042,\x200.95);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-fight-quickbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(15,\x2023,\x2042,\x200.95);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(8px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#38bdf8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2018px\x20rgba(0,\x200,\x200,\x200.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011.5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f8fafc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-fight-quickbar-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ef4444\x200%,\x20#dc2626\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f87171;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size' + _0x45c9c2(0x62a) + _0x45c9c2(0x8f1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-left:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-left:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-chain-pill-badge\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(15,\x2023,\x2042,\x200.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f8fafc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-chain-pill-badge.safe\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#22c55e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#4ade80;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-chain-pill-badge.warning\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#f59e0b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fbbf24;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20stakeoutChainPulse\x201.5s\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-chain-pill-badge.panic\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#ef4444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f87171;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(239,\x2068,\x2068,\x200.25);\x0a\x20\x20' + _0x45c9c2(0x991) + _0x45c9c2(0x549) + _0x45c9c2(0x573) + 'nd:\x20rgba(239,\x2068,\x2068,\x200.18);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x2012px\x20rgba(239,\x2068,\x2068,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20stakeoutChainPulseBar\x201s\x20infinite\x20alternate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20stakeoutChainPulseBar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20{\x20border-color:\x20#ef4444;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20to\x20{\x20border-color:\x20#f87171;\x20box-shadow:\x200\x200\x2016px\x20rgba(239,\x2068,\x2068,\x200.7);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-btn-quickhit\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ef4444\x200%,\x20#dc2626\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f87171;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20800;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x206px\x20rgba(220,\x2038,\x2038,\x200.4);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-btn-quickhit:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#f87171\x200%,\x20#ef4444\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateY(-1px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-sha' + _0x45c9c2(0x787));
    let _0x2f49ca = null;
    function _0x5c4f3b() {
        const _0x5eda97 = _0x45c9c2;
        if (!_0x2f49ca)
            return;
        const _0x18eeaa = _0x1f060e[_0x5eda97(0x802)](_0x59e0bf[_0x5eda97(0x3c8)] || _0x5eda97(0x3f8), _0x5eda97(0x3f8));
        _0x2f49ca[_0x5eda97(0x690)][_0x5eda97(0x8e2)](_0x1f060e[_0x5eda97(0x7f4)], 'position-right'), _0x2f49ca[_0x5eda97(0x690)][_0x5eda97(0x778)](_0x18eeaa ? _0x1f060e[_0x5eda97(0x7f4)] : _0x5eda97(0x2c6));
    }
    function _0x59ed35() {
        const _0x40897c = _0x45c9c2, _0x210ae7 = {
                'tSCHK': _0x40897c(0x249),
                'itJMl': function (_0x208b05) {
                    const _0x3d04ab = _0x40897c;
                    return _0x1f060e[_0x3d04ab(0x211)](_0x208b05);
                },
                'mXmCK': function (_0x1afc47) {
                    return _0x1afc47();
                },
                'jaovB': function (_0x46fc03, _0x1337f1) {
                    const _0x2c2468 = _0x40897c;
                    return _0x1f060e[_0x2c2468(0x7de)](_0x46fc03, _0x1337f1);
                },
                'SycIy': function (_0x37a84a, _0x1d8a67) {
                    return _0x37a84a - _0x1d8a67;
                },
                'oDYdk': function (_0x268dee, _0xd3eb7d, _0x32069f) {
                    const _0x3f2e11 = _0x40897c;
                    return _0x1f060e[_0x3f2e11(0x1f5)](_0x268dee, _0xd3eb7d, _0x32069f);
                },
                'DSbCQ': function (_0x47ef2e) {
                    const _0x1e5d58 = _0x40897c;
                    return _0x1f060e[_0x1e5d58(0x2cb)](_0x47ef2e);
                },
                'GYbCt': 'stakeout-fight-energy',
                'RGMXt': _0x40897c(0x974),
                'pDcdO': 'standalone',
                'OiJTR': _0x1f060e['bYOHg'],
                'JWEfn': _0x1f060e[_0x40897c(0x448)],
                'ZGgMj': function (_0x39cbfc, _0x18c270) {
                    return _0x39cbfc === _0x18c270;
                },
                'TYMcZ': _0x40897c(0x32c),
                'akdOR': 'stakeout-fight-quickbar-btn',
                'Bxuif': function (_0x2aa577, _0x16d551) {
                    const _0x4aa20a = _0x40897c;
                    return _0x1f060e[_0x4aa20a(0x4c7)](_0x2aa577, _0x16d551);
                },
                'bQSUa': _0x40897c(0x682),
                'nQWrg': function (_0x2dd8c2, _0x56f9f5) {
                    return _0x2dd8c2 - _0x56f9f5;
                },
                'vHBhi': _0x40897c(0x55a),
                'VcFYK': _0x40897c(0x1b0),
                'OoUat': function (_0x5065a1, _0x518ef3) {
                    return _0x5065a1 === _0x518ef3;
                },
                'weQHa': _0x1f060e[_0x40897c(0x97f)],
                'gsZaz': function (_0x1e8c67, _0x1fa6e6) {
                    return _0x1e8c67 === _0x1fa6e6;
                }
            };
        if (!window[_0x40897c(0x295)]['href'][_0x40897c(0x67b)](_0x40897c(0x6e2)))
            return;
        const _0x5cc7c6 = window[_0x40897c(0x295)][_0x40897c(0x5f7)][_0x40897c(0x772)](/user2ID=(\d+)/i), _0x41332d = _0x5cc7c6 ? _0x1f060e[_0x40897c(0x3e6)](parseInt, _0x5cc7c6[0x1], 0xa) : null;
        function _0x102338() {
            const _0x323b02 = _0x40897c;
            if (_0x1f060e[_0x323b02(0x650)](_0x1839fc)) {
                if (_0x56b1e7['id'] && _0x1f060e[_0x323b02(0x429)](String(_0x56b1e7['id']), String(_0x41332d)))
                    return _0x56b1e7['id'];
                return null;
            }
            if (_0x4593b0())
                return _0x1f060e[_0x323b02(0x678)](_0x19d765, _0x41332d);
            if (_0x41332d && _0x41332d >= 0x3e8)
                return _0x41332d + 0x1;
            return _0x1f060e[_0x323b02(0x440)](parseInt(_0x59e0bf[_0x323b02(0x60b)], 0xa) || _0x1f060e[_0x323b02(0x732)](_0x40a767)[0x0], 0x1);
        }
        function _0x247487(_0xd9e597) {
            const _0x2bf8b0 = _0x40897c;
            if (!_0xd9e597) {
                if (_0x1839fc()) {
                    window['location'][_0x2bf8b0(0x5f7)] = _0x210ae7[_0x2bf8b0(0x296)];
                    return;
                }
                _0xd9e597 = _0x19d765(_0x41332d);
            }
            !_0x1839fc() && (_0xd9e597 = _0x3b4a51(_0xd9e597), _0x18da3b(_0xd9e597)), _0x40d4da(_0x2bf8b0(0x3c6) + _0xd9e597 + _0x2bf8b0(0x984)), window['location']['href'] = _0x2bf8b0(0x37b) + _0xd9e597;
        }
        function _0x2491da() {
            const _0x152ee0 = _0x40897c;
            if (!_0x32bfce('ck') || document[_0x152ee0(0x24c)](_0x152ee0(0x32f)))
                return;
            const _0x532d70 = _0x1f060e[_0x152ee0(0x282)](_0x102338);
            if (!_0x532d70)
                return;
            const _0xed3d1 = document[_0x152ee0(0x74a)](_0x1f060e['SFaAd']);
            _0xed3d1['id'] = _0x1f060e[_0x152ee0(0x8f2)], _0xed3d1[_0x152ee0(0x75a)] = _0x152ee0(0x8dc) + _0x1f060e[_0x152ee0(0x6e0)](_0x41332d, _0x1f060e[_0x152ee0(0x9aa)]) + _0x152ee0(0x60f) + _0x532d70 + _0x152ee0(0x25c), document['body'][_0x152ee0(0x9c0)](_0xed3d1);
            const _0x1be9b5 = _0xed3d1[_0x152ee0(0x1e3)](_0x152ee0(0x75c));
            _0x1be9b5 && (_0x1be9b5[_0x152ee0(0x606)] = () => _0x247487(_0x532d70));
        }
        _0x2491da(), setInterval(_0x2491da, 0x3e8);
        let _0xad59c7 = 0x0;
        function _0x5506d0() {
            const _0x538bb9 = _0x40897c;
            !_0x59620f(![]) && _0x210ae7[_0x538bb9(0x975)](_0x26c0f6) && _0x210ae7[_0x538bb9(0x46c)](_0x210ae7[_0x538bb9(0x1d2)](Date[_0x538bb9(0x903)](), _0xad59c7), 0x7530) && (_0xad59c7 = Date[_0x538bb9(0x903)](), _0x210ae7[_0x538bb9(0x2c8)](_0x52d0f1, _0x538bb9(0x98d), _0x538bb9(0x303))[_0x538bb9(0x3f9)](_0x470972 => {
                const _0x12e948 = _0x538bb9;
                if (_0x470972 && _0x470972[_0x12e948(0x6a6)]) {
                    const _0x425ad9 = {};
                    _0x425ad9['current'] = _0x470972[_0x12e948(0x6a6)][_0x12e948(0x369)], _0x425ad9['maximum'] = _0x470972[_0x12e948(0x6a6)]['maximum'], _0x2d9c3f = _0x425ad9, _0x210ae7[_0x12e948(0x798)](_0x5506d0);
                }
            }));
            const _0x18cd97 = _0x210ae7[_0x538bb9(0x310)](_0x59620f), _0x3f9967 = document[_0x538bb9(0x24c)](_0x538bb9(0x32f));
            let _0x532bbd = document['getElementById'](_0x210ae7[_0x538bb9(0x72b)]);
            !_0x532bbd && (_0x532bbd = document[_0x538bb9(0x74a)](_0x210ae7[_0x538bb9(0x5a3)]), _0x532bbd['id'] = _0x538bb9(0x244));
            if (_0x3f9967 && _0x532bbd[_0x538bb9(0x9a7)] !== _0x3f9967)
                _0x532bbd[_0x538bb9(0x96f)] = '', _0x3f9967[_0x538bb9(0x41a)](_0x532bbd, _0x3f9967[_0x538bb9(0x5e5)]);
            else
                !_0x3f9967 && !_0x532bbd[_0x538bb9(0x9a7)] && (_0x532bbd[_0x538bb9(0x96f)] = _0x210ae7[_0x538bb9(0x26d)], document['body'][_0x538bb9(0x9c0)](_0x532bbd));
            const _0x69d8de = _0x18cd97 ? Math[_0x538bb9(0x306)](_0x18cd97['current'] / 0x19) : 0x0;
            _0x532bbd[_0x538bb9(0x63e)][_0x538bb9(0x222)] = !_0x18cd97 ? _0x210ae7[_0x538bb9(0x721)] : _0x69d8de === 0x0 ? 'empty' : _0x69d8de < 0x2 ? _0x210ae7[_0x538bb9(0x264)] : 'ok', _0x532bbd[_0x538bb9(0x86b)] = _0x18cd97 ? '⚡\x20' + _0x18cd97[_0x538bb9(0x369)] + '/' + _0x18cd97[_0x538bb9(0x77a)] + _0x538bb9(0x260) + _0x69d8de + _0x538bb9(0x8b6) + (_0x210ae7[_0x538bb9(0x383)](_0x69d8de, 0x1) ? '' : 's') : _0x538bb9(0x94c), _0x532bbd[_0x538bb9(0x2ca)] = _0x538bb9(0x4ac);
        }
        _0x1f060e['FMTOl'](_0x5506d0), setInterval(_0x5506d0, 0x3e8);
        let _0x4c95f2 = ![];
        function _0x546b68() {
            const _0x2d0d60 = _0x40897c;
            if (_0x4c95f2)
                return;
            const _0x40bf65 = document[_0x2d0d60(0x3a5)](_0x2d0d60(0x292));
            for (const _0x462c3d of _0x40bf65) {
                if ((_0x462c3d['textContent'] || '')[_0x2d0d60(0x76a)]()[_0x2d0d60(0x580)]() === _0x210ae7[_0x2d0d60(0x530)] && _0x462c3d[_0x2d0d60(0x4a1)] !== null) {
                    _0x4c95f2 = !![];
                    const _0x5a2830 = document[_0x2d0d60(0x24c)](_0x210ae7['akdOR']);
                    if (_0x5a2830)
                        _0x5a2830['style'][_0x2d0d60(0x1c2)] = _0x2d0d60(0x50d);
                    clearInterval(_0x290dc7);
                    return;
                }
            }
        }
        const _0x290dc7 = _0x1f060e[_0x40897c(0x9cb)](setInterval, _0x546b68, 0x12c);
        function _0x277c19() {
            const _0x581ff1 = _0x40897c, _0xc16be1 = document['getElementById'](_0x1f060e[_0x581ff1(0x201)]);
            if (!_0xc16be1 || !_0x41332d || !_0x32bfce('sp'))
                return;
            let _0x1b1c4b = _0xc16be1['querySelector'](_0x1f060e[_0x581ff1(0x3dd)]), _0x27d66c = ![];
            try {
                const _0x2ed151 = _0x167784[_0x1f060e[_0x581ff1(0x3de)](String, _0x41332d)]?.[_0x581ff1(0x4c4)];
                if (_0x2ed151)
                    _0x27d66c = _0x40ab66(_0x2ed151, String(_0x41332d));
                else {
                    const _0x2f412f = JSON['parse'](localStorage['getItem'](_0x1f060e[_0x581ff1(0x8f6)]) || '[]'), _0x46cb72 = _0x2ed151?.['factionId'] || null;
                    _0x27d66c = _0x46cb72 ? _0x2f412f[_0x581ff1(0x67b)](String(_0x46cb72)) : ![];
                }
            } catch (_0x719572) {
            }
            if (!_0x27d66c) {
                if (_0x1b1c4b)
                    _0x1b1c4b[_0x581ff1(0x8e2)]();
                return;
            }
            if (!_0x1b1c4b) {
                _0x1b1c4b = document['createElement'](_0x1f060e['wAQUn']), _0x1b1c4b[_0x581ff1(0x96f)] = _0x1f060e['IwESN'], _0x1b1c4b[_0x581ff1(0x253)][_0x581ff1(0x8e3)] = _0x581ff1(0x62e);
                const _0x3bffe4 = _0xc16be1[_0x581ff1(0x1e3)](_0x1f060e[_0x581ff1(0x801)]) || _0xc16be1['querySelector'](_0x581ff1(0x7e7));
                _0x3bffe4 && _0x3bffe4['nextSibling'] ? _0xc16be1[_0x581ff1(0x41a)](_0x1b1c4b, _0x3bffe4[_0x581ff1(0x8d5)]) : _0xc16be1[_0x581ff1(0x9c0)](_0x1b1c4b);
            }
            _0x1b1c4b[_0x581ff1(0x86b)] = _0x1f060e[_0x581ff1(0x1dc)], _0x1b1c4b[_0x581ff1(0x2ca)] = _0x581ff1(0x7d8);
        }
        setInterval(_0x277c19, 0x1f4);
        function _0x136bd4() {
            const _0x58c464 = _0x40897c;
            let _0x36b11b = document[_0x58c464(0x24c)](_0x58c464(0x6e7));
            const _0x365f1c = _0x41332d && _0x210ae7[_0x58c464(0x412)](_0x32bfce, 'fw') ? _0x210ae7[_0x58c464(0x412)](_0x2bf66d, _0x41332d) : null;
            if (!_0x365f1c) {
                if (_0x36b11b)
                    _0x36b11b[_0x58c464(0x8e2)]();
                return;
            }
            const {
                    contract: _0x5fbc43,
                    faction: _0x26ff13,
                    member: _0x1e5d8b
                } = _0x365f1c, _0x56f2e8 = _0x417eda[_0x5fbc43[_0x58c464(0x523)]] ? _0x5fbc43[_0x58c464(0x523)] : _0x58c464(0x5ae), _0x8cba6d = _0x417eda[_0x56f2e8], _0x4a7e8c = Math[_0x58c464(0x306)](Date[_0x58c464(0x903)]() / 0x3e8), _0xbcd528 = _0xe52b31(_0x5fbc43, _0x1e5d8b, _0x4a7e8c), _0x5c2753 = _0xbcd528[_0x58c464(0x56d)] === _0x210ae7['bQSUa'], _0x3b33c5 = {
                    'active': _0x1e5d8b[_0x58c464(0x8ce)] + _0x58c464(0x9a8) + _0x2da4b9(_0x4a7e8c - (_0x1e5d8b[_0x58c464(0x528)] || 0x0)) + _0x58c464(0x4a7) + _0x2da4b9((_0x5fbc43[_0x58c464(0x52d)] || 0x0) * 0x3c) + ')',
                    'soon': _0x58c464(0x342) + _0x2da4b9(_0x210ae7[_0x58c464(0x469)](_0x4a7e8c, _0x1e5d8b['lastTs'] || 0x0)) + _0x58c464(0x57a) + _0x2d45f4(Math[_0x58c464(0x776)](0x0, _0xbcd528[_0x58c464(0x654)] - _0x4a7e8c)),
                    'hosp': _0x210ae7[_0x58c464(0x23a)],
                    'away': _0x58c464(0x5da),
                    'excluded': _0x58c464(0x4c5)
                }[_0xbcd528[_0x58c464(0x56d)]] || '', _0x416511 = _0x58c464(0x677) + _0x2d4cc5(_0x26ff13[_0x58c464(0x589)] || _0x5fbc43[_0x58c464(0x589)]) + _0x58c464(0x803) + _0x56f2e8 + '\x22>' + _0x8cba6d[_0x58c464(0x3ed)] + '\x20' + _0x8cba6d[_0x58c464(0x8d8)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + _0x8cba6d['hint'] + _0x58c464(0x4c9) + (_0x5c2753 ? _0x58c464(0x8e9) : _0x58c464(0x4f7)) + _0x58c464(0x631) + (_0x5c2753 ? '✅\x20ELIGIBLE\x20(' + _0x1e5d8b[_0x58c464(0x8ce)] + '\x20' + _0x210ae7['Bxuif'](_0x2da4b9, _0xbcd528[_0x58c464(0x54b)]) + ')' : _0x58c464(0x68f) + _0x3b33c5) + _0x58c464(0x7cc);
            !_0x36b11b && (_0x36b11b = document['createElement'](_0x58c464(0x437)), _0x36b11b['id'] = _0x58c464(0x6e7), document[_0x58c464(0x299)][_0x58c464(0x9c0)](_0x36b11b)), _0x36b11b['className'] = _0x5c2753 ? 'ok' : _0x210ae7['VcFYK'], _0x36b11b[_0x58c464(0x258)] !== _0x416511 && (_0x36b11b[_0x58c464(0x258)] = _0x416511, _0x36b11b[_0x58c464(0x75a)] = _0x416511);
        }
        setInterval(_0x136bd4, 0x3e8), window[_0x40897c(0x5b5)](_0x40897c(0x816), _0x8458bd => {
            const _0x488b5c = _0x40897c;
            if (!_0x4c95f2)
                return;
            const _0x299c58 = document[_0x488b5c(0x24c)](_0x210ae7[_0x488b5c(0x800)]);
            if (!_0x299c58)
                return;
            const _0x2f06e2 = (document['activeElement']?.['tagName'] || '')['toLowerCase']();
            if (_0x210ae7[_0x488b5c(0x313)](_0x2f06e2, _0x210ae7[_0x488b5c(0x56e)]) || _0x210ae7[_0x488b5c(0x66c)](_0x2f06e2, _0x488b5c(0x939)))
                return;
            (_0x8458bd[_0x488b5c(0x92f)] === 'n' || _0x8458bd[_0x488b5c(0x92f)] === 'N' || _0x8458bd[_0x488b5c(0x92f)] === '\x20' || _0x210ae7[_0x488b5c(0x313)](_0x8458bd[_0x488b5c(0x92f)], 'Enter')) && (_0x8458bd[_0x488b5c(0x29f)](), _0x299c58['click']());
        });
    }
    function _0x5417bb() {
        const _0x29b8e0 = _0x45c9c2, _0x21a342 = parseInt(_0x59e0bf['apiBudgetPerMin'], 0xa) || 0x4b;
        return Math[_0x29b8e0(0x776)](0x14, Math[_0x29b8e0(0x559)](0x5f, _0x21a342));
    }
    async function _0x52d0f1(_0x431fcd, _0x5c12e1, _0x12b013 = _0x5417bb()) {
        const _0x1aa360 = _0x45c9c2, _0x178420 = _0x1f060e[_0x1aa360(0x211)](_0x26c0f6);
        if (!_0x178420)
            return null;
        if (_0x1f060e[_0x1aa360(0x5d4)](_0x5d92bc(), _0x12b013))
            return null;
        _0x5242fe();
        try {
            const _0xb5cb8f = _0x431fcd[_0x1aa360(0x67b)]('?') ? '&' : '?', _0x42bf6c = await fetch(_0x1aa360(0x734) + _0x431fcd + _0xb5cb8f + _0x1aa360(0x8f9) + _0x178420 + _0x1aa360(0x89f) + _0x5c12e1 + _0x1aa360(0x518) + Date[_0x1aa360(0x903)]());
            if (!_0x42bf6c['ok'])
                return null;
            return await _0x42bf6c['json']();
        } catch (_0x375d9e) {
            return console[_0x1aa360(0x5d6)](_0x1aa360(0x5cf), _0x431fcd['split']('?')[0x0], _0x375d9e), null;
        }
    }
    function _0x2d4cc5(_0x2396ed) {
        const _0x4c626b = _0x45c9c2;
        return _0x1f060e[_0x4c626b(0x7ab)](String, _0x1f060e['moKPq'](_0x2396ed, ''))[_0x4c626b(0x1c4)](/[&<>"']/g, _0x547be5 => ({
            '&': _0x4c626b(0x520),
            '<': _0x4c626b(0x2f7),
            '>': _0x4c626b(0x7f8),
            '\x22': '&quot;',
            '\x27': '&#39;'
        }[_0x547be5]));
    }
    function _0x2da4b9(_0x1e65ab) {
        const _0x1ee28a = _0x45c9c2;
        if (_0x1f060e[_0x1ee28a(0x849)](_0x1e65ab, 0x3c))
            return Math[_0x1ee28a(0x776)](0x0, _0x1e65ab) + 's';
        const _0x7c5961 = Math[_0x1ee28a(0x306)](_0x1e65ab / 0x3c);
        if (_0x1f060e['BMWhx'](_0x7c5961, 0x3c))
            return _0x7c5961 + 'm';
        const _0x43c552 = Math[_0x1ee28a(0x306)](_0x7c5961 / 0x3c);
        return _0x1f060e[_0x1ee28a(0x568)](_0x7c5961, 0x3c) ? _0x43c552 + 'h' + _0x7c5961 % 0x3c + 'm' : _0x43c552 + 'h';
    }
    const _0x45a3cd = 0x12c, _0x103786 = 0x2 * 0x3c * 0x3e8, _0x5524be = 0x3;
    let _0x443a13 = _0x3589e4(_0x45c9c2(0x942), []);
    if (!Array[_0x45c9c2(0x679)](_0x443a13))
        _0x443a13 = [];
    _0x443a13 = _0x443a13[_0x45c9c2(0x668)](_0x3563fa => typeof _0x3563fa[_0x45c9c2(0x486)] === _0x45c9c2(0x7e3));
    const _0x1307e9 = new Set();
    let _0x244345 = null, _0x39d4c6 = ![], _0x43170c = 0x0, _0x21d83f = 0x0;
    function _0x5843f5(_0x3ef378 = ![]) {
        const _0x3a14fb = _0x45c9c2;
        if (_0x1f060e[_0x3a14fb(0x41d)](_0x443a13[_0x3a14fb(0x453)], _0x45a3cd))
            _0x443a13[_0x3a14fb(0x763)](0x0, _0x443a13['length'] - _0x45a3cd);
        const _0x1e3322 = () => {
            const _0xd9ba4d = _0x3a14fb;
            _0x244345 = null, _0x1f060e['xXIOU'](_0x299b4c, _0xd9ba4d(0x942), _0x443a13), _0x1f060e[_0xd9ba4d(0x789)](_0x5b70e4, _0xd9ba4d(0x2ed), {
                'key': _0x1f060e[_0xd9ba4d(0x23e)],
                'value': _0x443a13
            });
        };
        if (_0x3ef378) {
            if (_0x244345)
                clearTimeout(_0x244345);
            _0x1f060e[_0x3a14fb(0x239)](_0x1e3322);
        } else
            !_0x244345 && (_0x244345 = setTimeout(_0x1e3322, 0xfa0));
    }
    function _0x4593b0() {
        const _0x203911 = _0x45c9c2;
        return (_0x59e0bf[_0x203911(0x3c3)] || _0x203911(0x886)) === _0x203911(0x886);
    }
    function _0x1b7965() {
        return Math['max'](0x1, parseInt(_0x59e0bf['chainMaxLevel'], 0xa) || 0x1);
    }
    function _0x3850ad() {
        const _0x3b867f = _0x45c9c2, _0x26c01a = _0x1f060e[_0x3b867f(0x496)](parseInt, _0x59e0bf[_0x3b867f(0x4f3)], 0xa);
        return _0x1f060e[_0x3b867f(0x35b)](isNaN, _0x26c01a) ? 0xf : Math['max'](0x0, _0x26c01a);
    }
    function _0x40a767() {
        const _0x10bc16 = _0x45c9c2, _0x342e23 = parseInt(_0x59e0bf[_0x10bc16(0x2ea)], 0xa) || 0x44aa20, _0x5a0efb = _0x1f060e[_0x10bc16(0x5d1)](parseInt, _0x59e0bf[_0x10bc16(0x869)], 0xa) || 0x4630c0;
        return _0x5a0efb > _0x342e23 ? [
            _0x342e23,
            _0x5a0efb
        ] : [
            _0x342e23,
            _0x1f060e['VwoYu'](_0x342e23, 0x186a0)
        ];
    }
    function _0x5ed77b(_0x28741d) {
        const _0x518108 = _0x45c9c2;
        return _0x443a13[_0x518108(0x5e3)](_0x5045c3 => String(_0x5045c3['id']) === String(_0x28741d)) || null;
    }
    function _0x281619(_0x39c974, _0x592e49 = Math[_0x45c9c2(0x306)](Date[_0x45c9c2(0x903)]() / 0x3e8)) {
        const _0x3e4e24 = _0x45c9c2;
        return Boolean(_0x39c974) && _0x39c974[_0x3e4e24(0x222)] <= _0x1b7965() && (_0x39c974['age'] || 0x0) >= _0x3850ad() && _0x1f060e[_0x3e4e24(0x89b)](_0x39c974[_0x3e4e24(0x3b0)] || 0x0, _0x592e49);
    }
    function _0x56f706(_0xec4342, _0x522112 = Date[_0x45c9c2(0x903)]()) {
        const _0x29acea = _0x45c9c2;
        return _0xec4342[_0x29acea(0x2ed)] === _0x29acea(0x834) && _0x1f060e[_0x29acea(0x890)](_0x1f060e[_0x29acea(0x904)](_0x522112, _0xec4342[_0x29acea(0x1c1)] || 0x0), _0x103786);
    }
    function _0x5c3772() {
        const _0x1cdd09 = _0x45c9c2, _0x4634c4 = Date[_0x1cdd09(0x903)](), _0x1e4910 = Math['floor'](_0x4634c4 / 0x3e8), _0x13e885 = _0x443a13[_0x1cdd09(0x668)](_0x6d0b32 => _0x281619(_0x6d0b32, _0x1e4910));
        return {
            'total': _0x443a13[_0x1cdd09(0x668)](_0x2b5580 => _0x2b5580[_0x1cdd09(0x222)] <= _0x1b7965() && (_0x2b5580[_0x1cdd09(0x486)] || 0x0) >= _0x3850ad())[_0x1cdd09(0x453)],
            'usable': _0x13e885[_0x1cdd09(0x453)],
            'ready': _0x13e885[_0x1cdd09(0x668)](_0x164ae2 => _0x56f706(_0x164ae2, _0x4634c4))[_0x1cdd09(0x453)]
        };
    }
    function _0x7218a8(_0x4eb825 = null) {
        const _0x43ad3d = _0x45c9c2, _0x3d2052 = Date[_0x43ad3d(0x903)](), _0x43bb04 = Math['floor'](_0x3d2052 / 0x3e8), _0x59539e = _0x443a13[_0x43ad3d(0x668)](_0x4382f5 => String(_0x4382f5['id']) !== String(_0x4eb825) && _0x281619(_0x4382f5, _0x43bb04)), _0x1837f7 = _0x59539e[_0x43ad3d(0x668)](_0x6a83ec => _0x56f706(_0x6a83ec, _0x3d2052)), _0x1b4081 = _0x1837f7[_0x43ad3d(0x453)] ? _0x1837f7 : _0x59539e;
        return _0x1b4081['length'] ? _0x1b4081[Math[_0x43ad3d(0x306)](_0x1f060e[_0x43ad3d(0x8b3)](Math['random'](), _0x1b4081[_0x43ad3d(0x453)]))] : null;
    }
    function _0x19d765(_0x321fe5 = null) {
        const _0x5d2cdb = _0x45c9c2, _0x249c00 = parseInt(_0x59e0bf[_0x5d2cdb(0x1f4)], 0xa);
        if (_0x1f060e[_0x5d2cdb(0x80d)](_0x249c00, 0x0) && String(_0x249c00) !== _0x1f060e[_0x5d2cdb(0x6a9)](String, _0x321fe5))
            return _0x249c00;
        const _0x3e0d81 = parseInt(_0x59e0bf[_0x5d2cdb(0x60b)], 0xa);
        if (_0x1f060e[_0x5d2cdb(0x37e)](_0x4593b0)) {
            const _0x539153 = _0x3e0d81 ? _0x5ed77b(_0x3e0d81) : null;
            if (_0x539153 && _0x1f060e[_0x5d2cdb(0x447)](_0x1f060e[_0x5d2cdb(0x214)](String, _0x3e0d81), _0x1f060e[_0x5d2cdb(0x1e5)](String, _0x321fe5)) && _0x281619(_0x539153))
                return _0x3e0d81;
            const _0x5238b3 = _0x7218a8(_0x321fe5);
            if (_0x5238b3)
                return _0x5238b3['id'];
            const [_0xd6f1a5, _0x25099d] = _0x40a767();
            if (!_0x3e0d81 || _0x3e0d81 < _0xd6f1a5 || _0x3e0d81 > _0x25099d || _0x1f060e[_0x5d2cdb(0x2a5)](String(_0x3e0d81), String(_0x321fe5)))
                return _0x1f060e[_0x5d2cdb(0x2be)](_0xdfecba) || _0xd6f1a5;
        }
        if (_0x3e0d81 && _0x1f060e[_0x5d2cdb(0x447)](_0x1f060e[_0x5d2cdb(0x678)](String, _0x3e0d81), String(_0x321fe5)))
            return _0x3e0d81;
        return (_0x3e0d81 || _0x40a767()[0x0]) + 0x1;
    }
    function _0x3b4a51(_0x52c595) {
        const _0x48a970 = _0x45c9c2;
        if (!_0x1f060e[_0x48a970(0x217)](_0x4593b0) || _0x1f060e[_0x48a970(0x51e)](String(_0x52c595), String(_0x59e0bf[_0x48a970(0x1f4)])))
            return _0x52c595;
        const _0x2bd594 = _0x5ed77b(_0x52c595);
        if (_0x2bd594 && !_0x1f060e[_0x48a970(0x485)](_0x281619, _0x2bd594)) {
            const _0xcefb5e = _0x7218a8(_0x52c595);
            if (_0xcefb5e)
                return _0xcefb5e['id'];
        }
        return _0x52c595;
    }
    function _0x18da3b(_0x18f04c) {
        const _0x2a034b = _0x45c9c2;
        _0x21d83f = Date[_0x2a034b(0x903)]();
        const _0xb526d8 = parseInt(_0x18f04c, 0xa);
        _0x59e0bf[_0x2a034b(0x1f4)] = 0x0;
        if (_0x1f060e[_0x2a034b(0x77d)](_0x4593b0)) {
            const _0x432148 = _0x5ed77b(_0xb526d8);
            _0x432148 && (_0x432148['state'] = _0x2a034b(0x735), _0x432148[_0x2a034b(0x3b0)] = Math[_0x2a034b(0x306)](_0x1f060e[_0x2a034b(0x300)](Date[_0x2a034b(0x903)](), 0x3e8)) + 0xe10, _0x432148[_0x2a034b(0x1c1)] = Date['now'](), _0x1f060e['hfqBP'](_0x5843f5, !![]));
            const _0x5db3aa = _0x7218a8(_0xb526d8);
            _0x59e0bf[_0x2a034b(0x60b)] = _0x5db3aa ? _0x5db3aa['id'] : _0xdfecba() || _0x1f060e[_0x2a034b(0x6be)](_0xb526d8, 0x1);
        } else
            _0x59e0bf[_0x2a034b(0x60b)] = _0xb526d8 + 0x1;
        _0x2aad15();
    }
    function _0x28ad7a() {
        const _0x26fd0c = _0x45c9c2, _0x3c3158 = Math[_0x26fd0c(0x776)](_0x21d83f, ..._0x443a13['map'](_0x438818 => _0x438818[_0x26fd0c(0x2ed)] === _0x26fd0c(0x735) ? _0x438818[_0x26fd0c(0x1c1)] || 0x0 : 0x0));
        return _0xceab3e[_0x26fd0c(0x4df)] || _0x1f060e[_0x26fd0c(0x6ca)](_0x1f060e['oPkuD'](Date[_0x26fd0c(0x903)](), _0x3c3158), _0x1f060e[_0x26fd0c(0x1b4)](_0x1f060e[_0x26fd0c(0x4ec)](0xa, 0x3c), 0x3e8));
    }
    function _0x56d8f2(_0x460ac3, _0x84dc4b) {
        const _0x542083 = _0x45c9c2, _0x1c696b = Math[_0x542083(0x306)](Date[_0x542083(0x903)]() / 0x3e8), _0x505bfd = parseInt(_0x84dc4b['level'] || 0x0, 0xa), _0xed6ff3 = parseInt(_0x84dc4b[_0x542083(0x486)] || 0x0, 0xa), _0xd82db5 = _0x84dc4b[_0x542083(0x56d)]?.[_0x542083(0x2ed)] || _0x1f060e[_0x542083(0x766)], _0x457604 = parseInt(_0x84dc4b[_0x542083(0x56d)]?.[_0x542083(0x3b0)] || 0x0, 0xa), _0x31ecdf = _0x443a13[_0x542083(0x3fa)](_0x21b5ec => String(_0x21b5ec['id']) === String(_0x460ac3));
        if (_0x505bfd > _0x1b7965() || _0x1f060e[_0x542083(0x849)](_0xed6ff3, _0x1f060e[_0x542083(0x1e1)](_0x3850ad)) || _0xd82db5 === _0x542083(0x533) || _0xd82db5 === _0x542083(0x90c)) {
            if (_0x31ecdf >= 0x0)
                _0x443a13['splice'](_0x31ecdf, 0x1);
            _0x1307e9[_0x542083(0x778)](String(_0x460ac3)), _0x1f060e[_0x542083(0x927)](_0x5843f5);
            return;
        }
        let _0x3a2780 = 0x0;
        _0x1f060e[_0x542083(0x972)](_0xd82db5, _0x1f060e['IeyPB']) && (_0x3a2780 = _0x457604 > _0x1c696b ? _0x457604 : _0x1f060e[_0x542083(0x6d1)](_0x1c696b, 0x384));
        const _0x30e50b = {
            'id': _0x1f060e[_0x542083(0x1fc)](parseInt, _0x460ac3, 0xa),
            'name': _0x84dc4b[_0x542083(0x589)] || '',
            'level': _0x505bfd,
            'age': _0xed6ff3,
            'state': _0xd82db5,
            'until': _0x3a2780,
            'checked': Date[_0x542083(0x903)]()
        };
        if (_0x31ecdf >= 0x0)
            _0x443a13[_0x31ecdf] = _0x30e50b;
        else
            _0x443a13[_0x542083(0x3ca)](_0x30e50b);
        _0x5843f5();
    }
    function _0xdfecba() {
        const _0x30358f = _0x45c9c2, [_0x10cb2a, _0x2fe347] = _0x40a767();
        for (let _0x275313 = 0x0; _0x1f060e['SXyPr'](_0x275313, 0x8); _0x275313++) {
            const _0x39f438 = _0x10cb2a + Math[_0x30358f(0x306)](_0x1f060e[_0x30358f(0x3f6)](Math[_0x30358f(0x230)](), _0x2fe347 - _0x10cb2a + 0x1));
            if (!_0x1307e9['has'](String(_0x39f438)) && !_0x5ed77b(_0x39f438))
                return _0x39f438;
        }
        return null;
    }
    async function _0x4dffe8() {
        const _0x1e7114 = _0x45c9c2;
        if (!_0x4b9700 || _0x39d4c6 || !_0x4593b0() || !_0x59e0bf[_0x1e7114(0x84d)])
            return;
        if (!_0x32bfce('ck') || !_0x26c0f6())
            return;
        const _0x3b31ce = Math[_0x1e7114(0x306)](_0x5417bb() * 0.7);
        if (_0x1f060e[_0x1e7114(0x743)](_0x5d92bc) >= _0x3b31ce)
            return;
        const _0x5b0995 = Date[_0x1e7114(0x903)](), _0x352c88 = Math[_0x1e7114(0x306)](_0x1f060e[_0x1e7114(0x241)](_0x5b0995, 0x3e8)), _0x211c52 = _0x28ad7a();
        let _0x42826e = null, _0x466cc8 = 0x0;
        if (_0x211c52) {
            const _0x570b8b = _0x443a13[_0x1e7114(0x668)](_0x16eca7 => _0x281619(_0x16eca7, _0x352c88)), _0x345a30 = _0x570b8b[_0x1e7114(0x668)](_0xff17fe => _0x56f706(_0xff17fe, _0x5b0995))['length'];
            if (_0x345a30 < _0x5524be) {
                const _0x1e72ce = _0x570b8b[_0x1e7114(0x668)](_0x4a9247 => !_0x56f706(_0x4a9247, _0x5b0995))[_0x1e7114(0x9ce)]((_0x465419, _0x4b0b72) => (_0x465419[_0x1e7114(0x1c1)] || 0x0) - (_0x4b0b72['checked'] || 0x0));
                _0x1e72ce[_0x1e7114(0x453)] && (_0x42826e = _0x1e72ce[0x0]['id'], _0x466cc8 = 0x7d0);
            }
            !_0x42826e && _0x570b8b[_0x1e7114(0x453)] < _0x1f060e[_0x1e7114(0x3f6)](_0x5524be, 0x2) && (_0x42826e = _0x1f060e[_0x1e7114(0x709)](_0xdfecba), _0x466cc8 = 0x7d0);
        }
        if (!_0x42826e) {
            const _0xc3c47d = _0x1f060e[_0x1e7114(0x3cc)](_0x1f060e['uIQcj'](_0x5c3772)[_0x1e7114(0x8ee)], parseInt(_0x59e0bf['chainPoolSize'], 0xa) || 0x96);
            if (_0xc3c47d || _0x1f060e[_0x1e7114(0x450)](_0x59e0bf[_0x1e7114(0x5e9)], ![]))
                return;
            _0x42826e = _0xdfecba(), _0x466cc8 = _0x211c52 ? 0xbb8 : _0x1f060e[_0x1e7114(0x6eb)](_0x1f060e[_0x1e7114(0x348)](_0x5c3772)[_0x1e7114(0x44c)], 0xa) ? 0xfa0 : 0x1f40;
        }
        if (!_0x42826e || _0x1f060e[_0x1e7114(0x69a)](_0x5b0995, _0x43170c) < _0x466cc8)
            return;
        _0x43170c = _0x5b0995, _0x39d4c6 = !![];
        try {
            const _0x4c40aa = await _0x52d0f1(_0x1e7114(0x53c) + _0x42826e + _0x1e7114(0x4b0), _0x1e7114(0x8e0), _0x3b31ce);
            if (!_0x4c40aa)
                return;
            if (_0x4c40aa[_0x1e7114(0x674)]) {
                if (_0x1f060e[_0x1e7114(0x7d0)](_0x4c40aa[_0x1e7114(0x674)][_0x1e7114(0x572)], 0x6)) {
                    const _0x65c506 = _0x443a13[_0x1e7114(0x3fa)](_0x3b8c4d => String(_0x3b8c4d['id']) === String(_0x42826e));
                    if (_0x65c506 >= 0x0)
                        _0x443a13[_0x1e7114(0x763)](_0x65c506, 0x1);
                    _0x1307e9[_0x1e7114(0x778)](_0x1f060e[_0x1e7114(0x4c7)](String, _0x42826e));
                }
                return;
            }
            _0x1f060e[_0x1e7114(0x642)](_0x56d8f2, _0x42826e, _0x4c40aa);
            if (!_0x59e0bf[_0x1e7114(0x1f4)] && !_0x281619(_0x1f060e[_0x1e7114(0x4fb)](_0x5ed77b, _0x59e0bf[_0x1e7114(0x60b)]))) {
                const _0x2b4ac1 = _0x7218a8(_0x59e0bf[_0x1e7114(0x60b)]);
                _0x2b4ac1 && (_0x59e0bf[_0x1e7114(0x60b)] = _0x2b4ac1['id'], _0x2aad15());
            }
        } finally {
            _0x39d4c6 = ![];
        }
    }
    const _0x1e5b3e = {};
    _0x1e5b3e[_0x45c9c2(0x3ed)] = _0x45c9c2(0x84c), _0x1e5b3e['label'] = _0x45c9c2(0x850), _0x1e5b3e[_0x45c9c2(0x259)] = _0x1f060e[_0x45c9c2(0x2aa)];
    const _0x4d0939 = {};
    _0x4d0939['icon'] = '⚔️', _0x4d0939[_0x45c9c2(0x8d8)] = _0x1f060e[_0x45c9c2(0x4c1)], _0x4d0939['hint'] = 'Any\x20weapon\x20OK,\x20Revitalize\x20allowed\x20(hosp\x206-7h)';
    const _0x1b3a85 = {};
    _0x1b3a85[_0x45c9c2(0x917)] = _0x1e5b3e, _0x1b3a85[_0x45c9c2(0x5ae)] = _0x4d0939;
    const _0x417eda = _0x1b3a85;
    let _0x2fc985 = _0x1f060e[_0x45c9c2(0x3c1)](_0x3589e4, 'faction_contracts', []);
    if (!Array[_0x45c9c2(0x679)](_0x2fc985))
        _0x2fc985 = [];
    const _0x2fcb8f = {}, _0x8b45ef = {}, _0x241165 = {};
    let _0x12657b = ![], _0x4e6a42 = 0x0;
    function _0xbbe85d() {
        const _0x29c38a = _0x45c9c2;
        _0x1f060e[_0x29c38a(0x42d)](_0x299b4c, _0x1f060e[_0x29c38a(0x8fd)], _0x2fc985);
        const _0x4bef3f = {};
        _0x4bef3f['key'] = _0x1f060e[_0x29c38a(0x8fd)], _0x4bef3f[_0x29c38a(0x814)] = _0x2fc985, _0x5b70e4(_0x29c38a(0x2ed), _0x4bef3f);
    }
    function _0xddfdee(_0x367344) {
        const _0x41c324 = _0x45c9c2;
        return _0x2fc985[_0x41c324(0x5e3)](_0xb6da2a => String(_0xb6da2a['id']) === String(_0x367344)) || null;
    }
    function _0x154ee3(_0x3e8aea) {
        const _0x3406f0 = _0x45c9c2, _0x3ab6ea = String(parseInt(_0x3e8aea, 0xa) || '');
        if (!_0x3ab6ea)
            return;
        if (!_0x32bfce('fw')) {
            _0x17e6e0('fw');
            return;
        }
        if (_0xddfdee(_0x3ab6ea)) {
            _0x40d4da(_0x3406f0(0x88d) + _0x3ab6ea + _0x3406f0(0x4c8));
            return;
        }
        const _0x53d8d0 = Math[_0x3406f0(0x306)](Date[_0x3406f0(0x903)]() / 0x3e8), _0x5e04e5 = {};
        _0x5e04e5['id'] = _0x3ab6ea, _0x5e04e5['name'] = '', _0x5e04e5[_0x3406f0(0x523)] = _0x3406f0(0x5ae), _0x5e04e5['minInactiveMin'] = 0xf, _0x5e04e5[_0x3406f0(0x468)] = !![], _0x5e04e5[_0x3406f0(0x25a)] = ![], _0x5e04e5[_0x3406f0(0x762)] = !![], _0x5e04e5[_0x3406f0(0x711)] = _0x53d8d0, _0x2fc985['push'](_0x5e04e5), _0x1f060e[_0x3406f0(0x211)](_0xbbe85d), _0x383f8d();
        if (_0x4b9700)
            _0x8b45ef[_0x3ab6ea] = Date['now'](), _0x1f060e[_0x3406f0(0x759)](_0x93d216, _0x3ab6ea);
        else {
            const _0x13d704 = {};
            _0x13d704[_0x3406f0(0x5cb)] = _0x3ab6ea, _0x5b70e4(_0x1f060e['TItLU'], _0x13d704);
        }
        _0x40d4da(_0x3406f0(0x88d) + _0x3ab6ea + _0x3406f0(0x717));
    }
    function _0x1178b2(_0x413725) {
        const _0x4d106 = _0x45c9c2;
        _0x2fc985 = _0x2fc985[_0x4d106(0x668)](_0x3137b4 => String(_0x3137b4['id']) !== String(_0x413725)), delete _0x2fcb8f[_0x413725], delete _0x241165[_0x413725], _0xbbe85d(), _0x1f060e[_0x4d106(0x42f)](_0x383f8d);
    }
    function _0xe52b31(_0x461760, _0x4dfcc8, _0x23e5ad) {
        const _0xd004f1 = _0x45c9c2, _0x57c07d = {};
        _0x57c07d['status'] = _0x1f060e['YbxAN'];
        if (!_0x4dfcc8)
            return _0x57c07d;
        if (_0x1f060e[_0xd004f1(0x726)](_0x4dfcc8[_0xd004f1(0x2ed)], _0xd004f1(0x533)) || _0x4dfcc8[_0xd004f1(0x2ed)] === _0xd004f1(0x90c))
            return { 'status': _0x1f060e[_0xd004f1(0x82c)] };
        const _0x4ef11b = {};
        _0x4ef11b[_0xd004f1(0x56d)] = _0xd004f1(0x30a);
        if (_0x4dfcc8[_0xd004f1(0x2ed)] === _0x1f060e[_0xd004f1(0x268)] || _0x4dfcc8[_0xd004f1(0x2ed)] === _0xd004f1(0x8c7))
            return _0x4ef11b;
        const _0x409572 = _0x4dfcc8[_0xd004f1(0x8ce)] === _0x1f060e[_0xd004f1(0x946)] || _0x461760[_0xd004f1(0x468)] !== ![] && _0x1f060e['hscJY'](_0x4dfcc8['online'], _0xd004f1(0x697)), _0x922490 = _0x1f060e['EiXNn'](_0x4dfcc8['lastTs'] || 0x0, (parseInt(_0x461760['minInactiveMin'], 0xa) || 0x0) * 0x3c), _0x27436f = (_0x4dfcc8[_0xd004f1(0x2ed)] === _0xd004f1(0x8b7) || _0x1f060e[_0xd004f1(0x653)](_0x4dfcc8[_0xd004f1(0x2ed)], _0xd004f1(0x4a6))) && _0x1f060e[_0xd004f1(0x96c)](_0x4dfcc8['until'], _0x23e5ad);
        if (_0x27436f)
            return {
                'status': _0x1f060e[_0xd004f1(0x435)],
                'eta': _0x409572 ? Math[_0xd004f1(0x776)](_0x4dfcc8['until'], _0x922490) : null
            };
        const _0x18c00b = {};
        _0x18c00b[_0xd004f1(0x56d)] = _0xd004f1(0x352);
        if (!_0x409572)
            return _0x18c00b;
        if (_0x23e5ad >= _0x922490)
            return {
                'status': _0xd004f1(0x682),
                'inactiveSec': _0x23e5ad - (_0x4dfcc8['lastTs'] || 0x0)
            };
        const _0x191649 = {};
        return _0x191649[_0xd004f1(0x56d)] = 'soon', _0x191649[_0xd004f1(0x654)] = _0x922490, _0x191649;
    }
    function _0x3f7afb(_0x1dd443) {
        const _0xd7ff46 = _0x45c9c2, _0x4ea8aa = (_0x3d65bb() || _0xd7ff46(0x897)) + ':' + _0x1dd443;
        let _0x1c4c6d = 0x811c9dc5;
        for (let _0x3f6ec0 = 0x0; _0x3f6ec0 < _0x4ea8aa[_0xd7ff46(0x453)]; _0x3f6ec0++) {
            _0x1c4c6d ^= _0x4ea8aa['charCodeAt'](_0x3f6ec0), _0x1c4c6d = Math[_0xd7ff46(0x808)](_0x1c4c6d, 0x1000193);
        }
        return _0x1c4c6d >>> 0x0;
    }
    function _0x14f9ba(_0x2286bb, _0x1a2601, _0x57e3da) {
        const _0x26940f = _0x45c9c2, _0x8a0353 = {};
        _0x8a0353[_0x26940f(0x682)] = [], _0x8a0353[_0x26940f(0x4cb)] = [], _0x8a0353['hosp'] = [], _0x8a0353[_0x26940f(0x352)] = [], _0x8a0353['away'] = [];
        const _0x2e9493 = _0x8a0353;
        if (!_0x1a2601 || !_0x1a2601[_0x26940f(0x4a4)])
            return _0x2e9493;
        for (const [_0x5b6e7d, _0x5f03e3] of Object[_0x26940f(0x327)](_0x1a2601[_0x26940f(0x4a4)])) {
            const _0x3d1492 = _0x1f060e[_0x26940f(0x76d)](_0xe52b31, _0x2286bb, _0x5f03e3, _0x57e3da);
            if (_0x2e9493[_0x3d1492[_0x26940f(0x56d)]])
                _0x2e9493[_0x3d1492[_0x26940f(0x56d)]]['push']({
                    'id': _0x5b6e7d,
                    'm': _0x5f03e3,
                    'el': _0x3d1492
                });
        }
        return _0x2e9493['eligible'][_0x26940f(0x9ce)]((_0x49f06e, _0xf2630a) => _0x3f7afb(_0x49f06e['id']) - _0x3f7afb(_0xf2630a['id'])), _0x2e9493['soon'][_0x26940f(0x9ce)]((_0x32b2a1, _0x2f22d5) => _0x32b2a1['el'][_0x26940f(0x654)] - _0x2f22d5['el']['eta']), _0x2e9493['hosp'][_0x26940f(0x9ce)]((_0x25cfb2, _0x40a64d) => (_0x25cfb2['el']['eta'] ?? Infinity) - (_0x40a64d['el'][_0x26940f(0x654)] ?? Infinity)), _0x2e9493;
    }
    function _0x7f63e0() {
        const _0x219904 = _0x45c9c2, _0x47b925 = {
                'FytAF': function (_0x46c4f8, _0x1acbdf, _0x94c53b, _0x1956fc) {
                    return _0x46c4f8(_0x1acbdf, _0x94c53b, _0x1956fc);
                }
            }, _0x5a91af = Math[_0x219904(0x306)](_0x1f060e[_0x219904(0x241)](Date[_0x219904(0x903)](), 0x3e8));
        return _0x2fc985['reduce']((_0x1a1414, _0x5f1f0d) => {
            const _0x48b676 = _0x219904;
            if (_0x5f1f0d[_0x48b676(0x25a)])
                return _0x1a1414;
            return _0x1a1414 + _0x47b925['FytAF'](_0x14f9ba, _0x5f1f0d, _0x2fcb8f[_0x5f1f0d['id']], _0x5a91af)[_0x48b676(0x682)][_0x48b676(0x453)];
        }, 0x0);
    }
    function _0x2bf66d(_0x24baf2) {
        const _0x196538 = _0x45c9c2;
        for (const _0x5593e1 of _0x2fc985) {
            const _0x4c3b6d = _0x2fcb8f[_0x5593e1['id']]?.[_0x196538(0x4a4)]?.[_0x1f060e['IHDBh'](String, _0x24baf2)];
            if (_0x4c3b6d)
                return {
                    'contract': _0x5593e1,
                    'faction': _0x2fcb8f[_0x5593e1['id']],
                    'member': _0x4c3b6d
                };
        }
        return null;
    }
    async function _0x93d216(_0x39135c) {
        const _0x7379a = _0x45c9c2, _0x4a2090 = await _0x1f060e[_0x7379a(0x76d)](_0x52d0f1, _0x7379a(0x813) + _0x39135c + _0x7379a(0x521), _0x7379a(0x4f6), _0x1f060e[_0x7379a(0x785)](_0x5417bb) - 0x5);
        if (!_0x4a2090)
            return;
        if (_0x4a2090[_0x7379a(0x674)])
            _0x2fcb8f[_0x39135c] = Object['assign']({}, _0x2fcb8f[_0x39135c] || {}, {
                'error': _0x4a2090[_0x7379a(0x674)]['error'] || _0x1f060e['AQSfT'],
                'fetched': Date['now']()
            });
        else {
            const _0x4290b8 = {};
            for (const [_0x9d01e9, _0x4695f9] of Object[_0x7379a(0x327)](_0x4a2090[_0x7379a(0x4a4)] || {})) {
                _0x4290b8[_0x9d01e9] = {
                    'name': _0x4695f9[_0x7379a(0x589)] || _0x7379a(0x817) + _0x9d01e9 + ']',
                    'level': _0x1f060e[_0x7379a(0x49d)](parseInt, _0x4695f9['level'] || 0x0, 0xa),
                    'state': _0x4695f9[_0x7379a(0x56d)]?.[_0x7379a(0x2ed)] || _0x1f060e[_0x7379a(0x766)],
                    'until': parseInt(_0x4695f9[_0x7379a(0x56d)]?.['until'] || 0x0, 0xa),
                    'desc': _0x4695f9[_0x7379a(0x56d)]?.[_0x7379a(0x6c2)] || '',
                    'online': _0x4695f9[_0x7379a(0x7b8)]?.['status'] || _0x7379a(0x63c),
                    'lastTs': _0x1f060e[_0x7379a(0x251)](parseInt, _0x4695f9[_0x7379a(0x7b8)]?.[_0x7379a(0x4ca)] || 0x0, 0xa)
                };
            }
            _0x2fcb8f[_0x39135c] = {
                'name': _0x4a2090[_0x7379a(0x589)] || _0x7379a(0x480) + _0x39135c,
                'members': _0x4290b8,
                'fetched': Date[_0x7379a(0x903)](),
                'error': null
            };
            const _0x3059f8 = _0x1f060e['lfFND'](_0xddfdee, _0x39135c);
            if (_0x3059f8 && _0x4a2090[_0x7379a(0x589)] && _0x3059f8[_0x7379a(0x589)] !== _0x4a2090[_0x7379a(0x589)]) {
                _0x3059f8[_0x7379a(0x589)] = _0x4a2090[_0x7379a(0x589)], _0xbbe85d();
                if (_0x571c62 === _0x7379a(0x509))
                    _0x383f8d();
            }
            _0x1f060e[_0x7379a(0x64e)](_0x3fcf49, _0x39135c);
        }
        const _0x46aba9 = {};
        _0x46aba9[_0x7379a(0x5cb)] = _0x39135c, _0x46aba9[_0x7379a(0x96d)] = _0x2fcb8f[_0x39135c], _0x5b70e4(_0x7379a(0x57d), _0x46aba9);
        if (_0x1f060e[_0x7379a(0x532)](_0x571c62, _0x1f060e[_0x7379a(0x4dc)]))
            _0x47cfc9(_0x39135c);
    }
    function _0x3fcf49(_0x3eb42a) {
        const _0x90b889 = _0x45c9c2;
        if (!_0x4b9700)
            return;
        const _0x57738f = _0x1f060e['kcTwK'](_0xddfdee, _0x3eb42a), _0x3bba16 = _0x2fcb8f[_0x3eb42a];
        if (!_0x57738f || !_0x3bba16 || !_0x3bba16['members'] || _0x57738f[_0x90b889(0x25a)] || _0x59e0bf[_0x90b889(0x652)])
            return;
        const _0x20a7d6 = Math[_0x90b889(0x306)](_0x1f060e[_0x90b889(0x560)](Date[_0x90b889(0x903)](), 0x3e8)), _0x368af9 = _0x1f060e['HRhTg'](_0x14f9ba, _0x57738f, _0x3bba16, _0x20a7d6)[_0x90b889(0x682)], _0x550a4a = new Set(_0x368af9[_0x90b889(0x6fe)](_0x57ae0c => _0x57ae0c['id'])), _0x3cd6c3 = _0x241165[_0x3eb42a];
        _0x241165[_0x3eb42a] = _0x550a4a;
        if (!_0x3cd6c3 || _0x57738f['alertOnEligible'] === ![])
            return;
        const _0x34e0a3 = _0x368af9[_0x90b889(0x668)](_0x4b2e85 => !_0x3cd6c3[_0x90b889(0x5bc)](_0x4b2e85['id']));
        if (!_0x34e0a3[_0x90b889(0x453)])
            return;
        const _0x26e7f0 = _0x417eda[_0x57738f[_0x90b889(0x523)]] || _0x417eda[_0x90b889(0x5ae)], _0x23e671 = _0x34e0a3[_0x90b889(0x399)](0x0, 0x3)[_0x90b889(0x6fe)](_0x1cc5d1 => _0x1cc5d1['m'][_0x90b889(0x589)])['join'](',\x20') + (_0x1f060e[_0x90b889(0x96c)](_0x34e0a3[_0x90b889(0x453)], 0x3) ? '\x20+' + (_0x34e0a3[_0x90b889(0x453)] - 0x3) : '');
        _0x151284({
            'key': _0x90b889(0x968) + _0x3eb42a + ':' + _0x34e0a3[_0x90b889(0x6fe)](_0x3e35c2 => _0x3e35c2['id'])[_0x90b889(0x9ce)]()['join'](','),
            'dedupeMs': 0x3c * 0x3e8,
            'sound': _0x1f060e[_0x90b889(0x6ee)],
            'notif': {
                'title': '🏴\x20' + _0x3bba16[_0x90b889(0x589)] + ':\x20' + _0x34e0a3[_0x90b889(0x453)] + _0x90b889(0x38b) + (_0x34e0a3[_0x90b889(0x453)] > 0x1 ? 's' : '') + '\x20eligible',
                'body': _0x23e671 + '\x20•\x20' + _0x26e7f0['icon'] + '\x20' + _0x26e7f0[_0x90b889(0x8d8)] + _0x90b889(0x75b)
            },
            'toast': _0x90b889(0x98b) + _0x2d4cc5(_0x3bba16[_0x90b889(0x589)]) + ':\x20' + _0x34e0a3[_0x90b889(0x453)] + _0x90b889(0x9ab) + _0x2d4cc5(_0x23e671) + _0x90b889(0x8e6) + _0x26e7f0[_0x90b889(0x3ed)] + '\x20' + _0x26e7f0[_0x90b889(0x8d8)]
        });
    }
    function _0x2f5e54() {
        const _0x5c20f1 = _0x45c9c2;
        if (!_0x4b9700 || _0x12657b || !_0x2fc985[_0x5c20f1(0x453)])
            return;
        if (!_0x1f060e[_0x5c20f1(0x695)](_0x32bfce, 'fw'))
            return;
        const _0x2ef57d = Date[_0x5c20f1(0x903)]();
        _0x1f060e[_0x5c20f1(0x566)](_0x2ef57d - _0x4e6a42, 0x1388) && (_0x4e6a42 = _0x2ef57d, _0x2fc985['forEach'](_0x4d40e2 => _0x3fcf49(_0x4d40e2['id'])));
        if (_0x59e0bf['isFactionsPaused'] || _0x1f060e[_0x5c20f1(0x3e4)](_0x5d92bc(), _0x5417bb() - 0x5))
            return;
        const _0xe84d7e = (_0x1f060e[_0x5c20f1(0x3c1)](parseInt, _0x59e0bf[_0x5c20f1(0x372)], 0xa) || 0x14) * 0x3e8, _0x3d51a6 = _0x2fc985[_0x5c20f1(0x668)](_0x2cc933 => !_0x2cc933[_0x5c20f1(0x25a)] && _0x2ef57d - (_0x8b45ef[_0x2cc933['id']] || 0x0) >= _0xe84d7e)[_0x5c20f1(0x9ce)]((_0x470c9a, _0x968325) => (_0x8b45ef[_0x470c9a['id']] || 0x0) - (_0x8b45ef[_0x968325['id']] || 0x0))[0x0];
        let _0x5ddce8 = null;
        _0x3d51a6 && (_0x8b45ef[_0x3d51a6['id']] = _0x2ef57d, _0x5ddce8 = _0x93d216(_0x3d51a6['id'])), _0x5ddce8 && (_0x12657b = !![], _0x5ddce8[_0x5c20f1(0x1c3)](() => {
            _0x12657b = ![];
        }));
    }
    function _0x58e91b(_0x42f071) {
        const _0x56d2f7 = _0x45c9c2, _0xc255c = _0x417eda[_0x42f071[_0x56d2f7(0x523)]] ? _0x42f071[_0x56d2f7(0x523)] : _0x56d2f7(0x5ae), _0x6dfdf0 = _0x417eda[_0xc255c], _0x4941aa = [
                0x5,
                0xa,
                0xf,
                0x14,
                0x1e,
                0x2d,
                0x3c,
                0x78,
                0xf0
            ];
        if (!_0x4941aa[_0x56d2f7(0x67b)](_0x42f071[_0x56d2f7(0x52d)]))
            _0x4941aa[_0x56d2f7(0x3ca)](_0x42f071[_0x56d2f7(0x52d)]);
        return _0x56d2f7(0x706) + (_0x42f071[_0x56d2f7(0x25a)] ? _0x56d2f7(0x1ed) : '') + _0x56d2f7(0x62b) + _0x42f071['id'] + _0x56d2f7(0x4ba) + _0x42f071['id'] + _0x56d2f7(0x1b9) + _0x42f071['id'] + _0x56d2f7(0x8e7) + _0x2d4cc5(_0x42f071[_0x56d2f7(0x589)] || 'Faction\x20[' + _0x42f071['id'] + ']') + _0x56d2f7(0x37d) + _0x42f071['id'] + _0x56d2f7(0x826) + _0x42f071['id'] + _0x56d2f7(0x490) + (_0x42f071['alertOnEligible'] !== ![] ? _0x1f060e[_0x56d2f7(0x994)] : _0x1f060e[_0x56d2f7(0x333)]) + _0x56d2f7(0x508) + (_0x1f060e[_0x56d2f7(0x429)](_0x42f071[_0x56d2f7(0x762)], ![]) ? '🔔' : '🔕') + _0x56d2f7(0x56c) + _0x42f071['id'] + _0x56d2f7(0x490) + (_0x42f071[_0x56d2f7(0x25a)] ? _0x56d2f7(0x3b7) : _0x56d2f7(0x643)) + _0x56d2f7(0x672) + (_0x42f071[_0x56d2f7(0x25a)] ? '▶' : '⏸') + _0x56d2f7(0x832) + _0x42f071['id'] + _0x56d2f7(0x354) + _0xc255c + _0x56d2f7(0x950) + _0x42f071['id'] + _0x56d2f7(0x35f) + _0x6dfdf0[_0x56d2f7(0x259)] + '\x22>' + _0x6dfdf0[_0x56d2f7(0x3ed)] + '\x20' + _0x6dfdf0[_0x56d2f7(0x8d8)] + _0x56d2f7(0x659) + _0x42f071['id'] + _0x56d2f7(0x9d1) + (_0x42f071[_0x56d2f7(0x468)] !== ![] ? _0x56d2f7(0x6c6) : '') + _0x56d2f7(0x969) + (_0x1f060e[_0x56d2f7(0x33f)](_0x42f071[_0x56d2f7(0x468)], ![]) ? _0x56d2f7(0x6c6) : '') + _0x56d2f7(0x44a) + _0x42f071['id'] + _0x56d2f7(0x66a) + _0x4941aa[_0x56d2f7(0x9ce)]((_0x5042cd, _0x51332a) => _0x5042cd - _0x51332a)['map'](_0x3ac390 => _0x56d2f7(0x937) + _0x3ac390 + '\x22\x20' + (_0x3ac390 === _0x42f071['minInactiveMin'] ? 'selected' : '') + _0x56d2f7(0x49a) + _0x2da4b9(_0x3ac390 * 0x3c) + _0x56d2f7(0x28b))[_0x56d2f7(0x207)]('') + _0x56d2f7(0x20f) + _0xc255c + '\x22>' + _0x6dfdf0['icon'] + '\x20' + _0x6dfdf0[_0x56d2f7(0x259)] + _0x56d2f7(0x95b) + _0x42f071['id'] + _0x56d2f7(0x44f);
    }
    function _0x3c3445(_0xb246ae) {
        const _0x11129c = _0x45c9c2, _0x267435 = _0x2fcb8f[_0xb246ae['id']];
        if (!_0x267435 || !_0x267435['members'] && !_0x267435[_0x11129c(0x674)])
            return _0x11129c(0x805) + (_0x4b9700 ? '⏳\x20Loading\x20faction\x20members...' : _0x11129c(0x655)) + _0x11129c(0x629);
        const _0x42b229 = Math[_0x11129c(0x306)](Date[_0x11129c(0x903)]() / 0x3e8), _0x223879 = _0x14f9ba(_0xb246ae, _0x267435, _0x42b229), _0x54cbcc = Math[_0x11129c(0x306)]((Date[_0x11129c(0x903)]() - (_0x267435[_0x11129c(0x41f)] || 0x0)) / 0x3e8), _0x505cb0 = _0x3e74aa => _0x11129c(0x556) + (_0x3e74aa[_0x11129c(0x8ce)] === _0x11129c(0x697) ? _0x11129c(0x495) : _0x3e74aa[_0x11129c(0x8ce)] === _0x11129c(0x7f6) ? _0x11129c(0x8ce) : _0x11129c(0x570)) + _0x11129c(0x1da), _0x594e3c = 0xc;
        let _0x7252b = '';
        if (_0x267435[_0x11129c(0x674)])
            _0x7252b += '<div\x20class=\x22stakeout-fw-error\x22>⚠️\x20' + _0x2d4cc5(_0x267435['error']) + _0x11129c(0x629);
        _0x7252b += _0x11129c(0x460) + _0x223879[_0x11129c(0x682)][_0x11129c(0x453)] + _0x11129c(0x656) + _0x223879['soon'][_0x11129c(0x453)] + _0x11129c(0x497) + _0x223879[_0x11129c(0x5fd)][_0x11129c(0x453)] + _0x11129c(0x286) + _0x223879[_0x11129c(0x352)][_0x11129c(0x453)] + _0x11129c(0x3ce) + (_0x223879[_0x11129c(0x30a)][_0x11129c(0x453)] ? _0x11129c(0x4de) + _0x223879[_0x11129c(0x30a)][_0x11129c(0x453)] + _0x11129c(0x804) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22stakeout-fw-age\x22\x20title=\x22Last\x20refresh\x22>' + (_0xb246ae['paused'] ? _0x11129c(0x997) : '↻\x20' + _0x54cbcc + 's') + _0x11129c(0x6e3);
        if (_0x223879[_0x11129c(0x682)][_0x11129c(0x453)]) {
            _0x7252b += _0x223879[_0x11129c(0x682)][_0x11129c(0x399)](0x0, _0x594e3c)['map'](_0x11187f => _0x11129c(0x289) + _0x505cb0(_0x11187f['m']) + _0x11129c(0x658) + _0x2d4cc5(_0x11187f['m'][_0x11129c(0x589)]) + '\x20[' + _0x11187f['id'] + _0x11129c(0x9c5) + _0x2d4cc5(_0x11187f['m'][_0x11129c(0x589)]) + _0x11129c(0x924) + _0x11187f['m'][_0x11129c(0x222)] + _0x11129c(0x5cd) + _0x11187f['m'][_0x11129c(0x8ce)] + '\x20' + _0x2da4b9(_0x11187f['el'][_0x11129c(0x54b)]) + _0x11129c(0x44b) + _0x11187f['id'] + _0x11129c(0x9a0) + _0x2d4cc5(_0x11187f['m'][_0x11129c(0x589)]) + '\x22>⚔️\x20Hit</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')['join']('');
            if (_0x223879['eligible'][_0x11129c(0x453)] > _0x594e3c)
                _0x7252b += _0x11129c(0x294) + (_0x223879[_0x11129c(0x682)][_0x11129c(0x453)] - _0x594e3c) + '\x20more\x20eligible</div>';
        } else
            !_0x267435['error'] && (_0x7252b += '<div\x20class=\x22stakeout-fw-muted\x22>No\x20members\x20eligible\x20right\x20now.</div>');
        const _0x54e37f = [
            ..._0x223879[_0x11129c(0x4cb)][_0x11129c(0x6fe)](_0x790777 => ({
                'x': _0x790777,
                'eta': _0x790777['el']['eta'],
                'icon': '💤'
            })),
            ..._0x223879[_0x11129c(0x5fd)][_0x11129c(0x668)](_0x43e360 => _0x43e360['el'][_0x11129c(0x654)] && _0x43e360['el'][_0x11129c(0x654)] - _0x42b229 <= 0xf * 0x3c)[_0x11129c(0x6fe)](_0x40673f => ({
                'x': _0x40673f,
                'eta': _0x40673f['el'][_0x11129c(0x654)],
                'icon': '🏥'
            }))
        ][_0x11129c(0x9ce)]((_0x2874ae, _0x2fd597) => _0x2874ae['eta'] - _0x2fd597[_0x11129c(0x654)])[_0x11129c(0x399)](0x0, 0x5);
        return _0x54e37f[_0x11129c(0x453)] && (_0x7252b += _0x1f060e[_0x11129c(0x323)](_0x11129c(0x1b6), _0x54e37f[_0x11129c(0x6fe)](({
            x: _0x457fc0,
            eta: _0x3de233,
            icon: _0x50b5e9
        }) => _0x11129c(0x503) + _0x505cb0(_0x457fc0['m']) + _0x11129c(0x3b8) + _0x2d4cc5(_0x457fc0['m'][_0x11129c(0x589)]) + _0x11129c(0x924) + _0x457fc0['m'][_0x11129c(0x222)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22stakeout-fw-muted\x22>' + _0x50b5e9 + '\x20' + _0x2d45f4(Math[_0x11129c(0x776)](0x0, _0x3de233 - _0x42b229)) + _0x11129c(0x2b8))[_0x11129c(0x207)](''))), _0x7252b;
    }
    function _0x47cfc9(_0x2c7922) {
        const _0x540f7b = _0x45c9c2, _0x105b21 = document[_0x540f7b(0x24c)]('stakeout-fw-body-' + _0x2c7922), _0x2bca6c = _0x1f060e[_0x540f7b(0x63a)](_0xddfdee, _0x2c7922);
        if (!_0x105b21 || !_0x2bca6c)
            return;
        const _0x4beab6 = _0x1f060e[_0x540f7b(0x1e5)](_0x3c3445, _0x2bca6c);
        _0x105b21[_0x540f7b(0x258)] !== _0x4beab6 && (_0x105b21[_0x540f7b(0x258)] = _0x4beab6, _0x105b21['innerHTML'] = _0x4beab6);
    }
    function _0x12972d(_0x3124d2) {
        const _0x43d1ce = _0x45c9c2, _0x273e31 = (_0x59e0bf[_0x43d1ce(0x82a)] || _0x43d1ce(0x5f9)) === _0x43d1ce(0x8a5);
        _0x1f060e['mFCJw'](_0x30dd48, _0x273e31 ? _0x43d1ce(0x396) + _0x3124d2 : _0x43d1ce(0x37b) + _0x3124d2);
    }
    function _0x327d34(_0x19649d) {
        const _0x621112 = _0x45c9c2, _0x46e008 = {
                'rbelx': _0x621112(0x570),
                'qkwNi': function (_0x5d78ff, _0xf42b38) {
                    const _0x542ad4 = _0x621112;
                    return _0x1f060e[_0x542ad4(0x617)](_0x5d78ff, _0xf42b38);
                }
            };
        if (!_0x19649d)
            return;
        _0x19649d[_0x621112(0x606)] = _0x454993 => {
            const _0x3f7373 = _0x621112, _0x301680 = _0x454993['target'][_0x3f7373(0x90b)](_0x1f060e['ajKPl']);
            if (!_0x301680)
                return;
            _0x454993[_0x3f7373(0x29f)]();
            const _0x5aafe2 = _0x301680[_0x3f7373(0x63e)];
            if (_0x5aafe2[_0x3f7373(0x547)]) {
                _0x12972d(_0x5aafe2[_0x3f7373(0x547)]);
                return;
            }
            const _0x54a0f7 = _0x1f060e[_0x3f7373(0x485)](_0xddfdee, _0x5aafe2[_0x3f7373(0x7bc)] || _0x5aafe2[_0x3f7373(0x6dd)] || _0x5aafe2[_0x3f7373(0x920)] || _0x5aafe2[_0x3f7373(0x37f)]);
            if (!_0x54a0f7)
                return;
            if (_0x5aafe2['fwDel']) {
                _0x1178b2(_0x54a0f7['id']), _0x40d4da(_0x3f7373(0x391) + (_0x54a0f7[_0x3f7373(0x589)] || 'faction\x20[' + _0x54a0f7['id'] + ']') + '.');
                return;
            }
            if (_0x5aafe2[_0x3f7373(0x6dd)])
                _0x54a0f7['paused'] = !_0x54a0f7[_0x3f7373(0x25a)];
            if (_0x5aafe2[_0x3f7373(0x920)])
                _0x54a0f7[_0x3f7373(0x762)] = _0x54a0f7[_0x3f7373(0x762)] === ![];
            if (_0x5aafe2[_0x3f7373(0x37f)])
                _0x54a0f7[_0x3f7373(0x523)] = _0x1f060e[_0x3f7373(0x340)](_0x54a0f7[_0x3f7373(0x523)], _0x3f7373(0x917)) ? _0x1f060e[_0x3f7373(0x476)] : 'stricken';
            _0xbbe85d(), _0x383f8d();
        }, _0x19649d['onchange'] = _0x2ef34b => {
            const _0x123a00 = _0x621112, _0x3886c7 = _0x2ef34b[_0x123a00(0x283)], _0x2b816a = _0x3886c7[_0x123a00(0x63e)], _0x568e47 = _0xddfdee(_0x2b816a[_0x123a00(0x710)] || _0x2b816a[_0x123a00(0x80f)]);
            if (!_0x568e47)
                return;
            if (_0x2b816a[_0x123a00(0x710)])
                _0x568e47[_0x123a00(0x468)] = _0x3886c7[_0x123a00(0x814)] !== _0x46e008[_0x123a00(0x71e)];
            if (_0x2b816a[_0x123a00(0x80f)])
                _0x568e47[_0x123a00(0x52d)] = parseInt(_0x3886c7[_0x123a00(0x814)], 0xa) || 0xf;
            _0xbbe85d(), _0x46e008[_0x123a00(0x862)](_0x47cfc9, _0x568e47['id']);
        };
    }
    function _0xb8d993() {
        const _0x1ebb70 = _0x45c9c2, _0x499e76 = {
                'ikINk': function (_0xf59442, _0x46d1c5, _0x4d29bd) {
                    return _0xf59442(_0x46d1c5, _0x4d29bd);
                },
                'dkSfF': function (_0x2678c0, _0x29a945) {
                    const _0x48d94d = _0xf22e;
                    return _0x1f060e[_0x48d94d(0x73c)](_0x2678c0, _0x29a945);
                },
                'AwBtH': function (_0x410ed8) {
                    return _0x410ed8();
                },
                'yMqls': function (_0x24ef47) {
                    return _0x24ef47();
                },
                'OBFAJ': function (_0xfed53f) {
                    const _0xdfed14 = _0xf22e;
                    return _0x1f060e[_0xdfed14(0x97b)](_0xfed53f);
                }
            }, _0x53cd48 = (_0x3157a1, _0x1c5e5e, _0x1163c3, _0x412561) => {
                const _0x2ed897 = _0xf22e, _0x4bebf9 = document[_0x2ed897(0x24c)](_0x3157a1);
                if (!_0x4bebf9)
                    return;
                _0x4bebf9[_0x2ed897(0x1ff)] = () => {
                    const _0x11e991 = _0x2ed897, _0x1f398f = _0x499e76['ikINk'](parseInt, _0x4bebf9[_0x11e991(0x814)], 0xa);
                    if (_0x499e76[_0x11e991(0x50b)](isNaN, _0x1f398f))
                        return;
                    _0x59e0bf[_0x1c5e5e] = Math[_0x11e991(0x776)](_0x1163c3, Math[_0x11e991(0x559)](_0x412561, _0x1f398f)), _0x4bebf9[_0x11e991(0x814)] = _0x59e0bf[_0x1c5e5e], _0x499e76[_0x11e991(0x329)](_0x2aad15), _0x35e192();
                };
            };
        _0x53cd48('stakeout-chain-scan-start', 'chainScanStart', 0x1, 0x5f5e0ff), _0x53cd48(_0x1ebb70(0x55e), _0x1f060e[_0x1ebb70(0x51d)], 0x2, 0x5f5e0ff), _0x1f060e[_0x1ebb70(0x65e)](_0x53cd48, _0x1f060e[_0x1ebb70(0x8d3)], _0x1f060e[_0x1ebb70(0x88b)], 0x1, 0x64), _0x53cd48(_0x1ebb70(0x4e6), _0x1f060e['aTmRh'], 0x0, 0x16d);
        const _0x5bc086 = (_0x396bcf, _0xeccd2b, _0x50d41e) => {
            const _0x1c2021 = document['getElementById'](_0x396bcf);
            if (!_0x1c2021)
                return;
            _0x1c2021['onchange'] = () => {
                const _0x1893d0 = _0xf22e;
                _0x59e0bf[_0xeccd2b] = _0x50d41e(_0x1c2021['value']), _0x499e76[_0x1893d0(0x951)](_0x2aad15), _0x35e192(), _0x499e76[_0x1893d0(0x27e)](_0x591d5e);
            };
        };
        _0x5bc086(_0x1ebb70(0x397), _0x1f060e[_0x1ebb70(0x644)], _0x48f1ca => _0x48f1ca), _0x1f060e[_0x1ebb70(0x275)](_0x5bc086, _0x1ebb70(0x921), _0x1f060e[_0x1ebb70(0x22b)], _0x49e2b5 => parseInt(_0x49e2b5, 0xa)), _0x5bc086(_0x1ebb70(0x859), _0x1ebb70(0x372), _0xcdb02e => parseInt(_0xcdb02e, 0xa));
        const _0x3b3d9e = document[_0x1ebb70(0x24c)](_0x1ebb70(0x6d3));
        _0x3b3d9e && (_0x3b3d9e['onclick'] = _0x572fbf => {
            const _0x40855b = _0x1ebb70;
            _0x572fbf[_0x40855b(0x29f)](), _0x443a13 = [], _0x1307e9[_0x40855b(0x5cc)](), _0x5843f5(!![]), _0x35e192(), _0x40d4da('🎲\x20Chain\x20target\x20pool\x20cleared.\x20Re-scanning\x20the\x20range...');
        }), _0x1f060e[_0x1ebb70(0x973)](_0x35e192);
    }
    function _0x35e192() {
        const _0x47b23d = _0x45c9c2, _0x9a5977 = _0x1f060e[_0x47b23d(0x944)](_0x5c3772), _0x2e92f2 = _0x4593b0() ? _0x47b23d(0x5b8) + _0x9a5977[_0x47b23d(0x44c)] + '/' + _0x9a5977[_0x47b23d(0x8ee)] : '', _0x3d7734 = _0x47b23d(0x754) + _0x9a5977[_0x47b23d(0x8ee)] + _0x47b23d(0x3ea) + _0x1b7965() + ',\x20account\x20≥\x20' + _0x3850ad() + _0x47b23d(0x33b) + _0x9a5977[_0x47b23d(0x44c)] + _0x47b23d(0x81d) + _0x9a5977[_0x47b23d(0x648)] + _0x47b23d(0x7b0), _0x3638a8 = document[_0x47b23d(0x24c)](_0x1f060e[_0x47b23d(0x7c7)]);
        _0x3638a8 && _0x1f060e[_0x47b23d(0x203)](_0x3638a8[_0x47b23d(0x86b)], _0x2e92f2) && (_0x3638a8['textContent'] = _0x2e92f2, _0x3638a8[_0x47b23d(0x2ca)] = _0x3d7734);
        const _0x352f8c = document[_0x47b23d(0x24c)](_0x1f060e[_0x47b23d(0x8ed)]);
        if (_0x352f8c) {
            const _0x5ed341 = _0x9a5977[_0x47b23d(0x8ee)] + _0x47b23d(0x768) + _0x9a5977[_0x47b23d(0x44c)] + '\x20attackable\x20•\x20' + _0x9a5977['ready'] + _0x47b23d(0x3ac);
            if (_0x352f8c[_0x47b23d(0x86b)] !== _0x5ed341)
                _0x352f8c[_0x47b23d(0x86b)] = _0x5ed341;
        }
    }
    let _0x236a66 = ![], _0x152797 = _0x3589e4(_0x45c9c2(0x918), {});
    if (!_0x152797 || typeof _0x152797 !== _0x1f060e[_0x45c9c2(0x7ed)])
        _0x152797 = {};
    function _0x2ee53f(_0xde1b87) {
        return !_0x152797[_0xde1b87];
    }
    function _0x383f8d() {
        const _0x273ebe = _0x45c9c2, _0xe6dc39 = {
                'rDVwD': function (_0x3f5556, _0x385d24) {
                    return _0x3f5556(_0x385d24);
                },
                'bcxZj': function (_0x47a364, _0x1f1286) {
                    return _0x47a364(_0x1f1286);
                },
                'IlNMd': function (_0x30b287) {
                    return _0x30b287();
                },
                'AXANf': function (_0x123e01) {
                    return _0x123e01();
                },
                'tLyzq': function (_0x590613, _0x38f314) {
                    return _0x590613 > _0x38f314;
                },
                'ilHCe': function (_0x40fb26, _0x4a6f86) {
                    return _0x40fb26 - _0x4a6f86;
                },
                'LPQSg': function (_0x21f0c1, _0x7f74aa) {
                    return _0x21f0c1(_0x7f74aa);
                },
                'uYSUg': _0x1f060e[_0x273ebe(0x883)],
                'cDONl': function (_0x4b94d9, _0x2ff26a) {
                    return _0x4b94d9 === _0x2ff26a;
                },
                'zWwSU': _0x273ebe(0x509),
                'ROamE': function (_0x365dc9) {
                    const _0x360613 = _0x273ebe;
                    return _0x1f060e[_0x360613(0x217)](_0x365dc9);
                },
                'OtxVi': '⏸\x20Faction\x20Watch\x20PAUSED.',
                'xYAoU': function (_0xd9af94, _0x3d3c1e) {
                    const _0x7d1b08 = _0x273ebe;
                    return _0x1f060e[_0x7d1b08(0x8b0)](_0xd9af94, _0x3d3c1e);
                },
                'lbGsj': '0|1|3|4|2',
                'uNBOj': _0x273ebe(0x463),
                'MfeBi': '4449883',
                'CcNqk': _0x1f060e[_0x273ebe(0x6fa)],
                'noEht': function (_0x4e0552, _0x16de89) {
                    return _0x4e0552 + _0x16de89;
                },
                'iQmUH': _0x1f060e[_0x273ebe(0x946)],
                'BkCJW': function (_0x5cf00c, _0x43fb36) {
                    return _0x5cf00c / _0x43fb36;
                },
                'btsIj': 'Okay',
                'ZAlEh': _0x273ebe(0x3cb),
                'bMfZP': function (_0x2f0838, _0x305542) {
                    const _0x147b65 = _0x273ebe;
                    return _0x1f060e[_0x147b65(0x87f)](_0x2f0838, _0x305542);
                },
                'GaciK': _0x1f060e[_0x273ebe(0x1d3)],
                'SuGno': function (_0x4a2396, _0x2df673) {
                    const _0x3e3bd8 = _0x273ebe;
                    return _0x1f060e[_0x3e3bd8(0x647)](_0x4a2396, _0x2df673);
                },
                'JGHKA': function (_0x65fc93, _0x35cc42) {
                    return _0x1f060e['mlXBu'](_0x65fc93, _0x35cc42);
                },
                'SDuMe': function (_0x38b402, _0x23688e) {
                    return _0x38b402(_0x23688e);
                },
                'opZfb': function (_0x45d84b, _0x4d61be, _0x52d3d3) {
                    return _0x45d84b(_0x4d61be, _0x52d3d3);
                },
                'fLQsl': function (_0x1992e4, _0x3cac90) {
                    const _0x315f82 = _0x273ebe;
                    return _0x1f060e[_0x315f82(0x56b)](_0x1992e4, _0x3cac90);
                },
                'dWlHK': function (_0xc9f951) {
                    return _0xc9f951();
                },
                'VFGLF': function (_0x33cdf0, _0x377ba5) {
                    const _0x309b7e = _0x273ebe;
                    return _0x1f060e[_0x309b7e(0x9d0)](_0x33cdf0, _0x377ba5);
                },
                'vlhyz': function (_0x2194dd) {
                    return _0x2194dd();
                },
                'GqjmO': _0x273ebe(0x474)
            };
        if (!document['body'])
            return;
        !_0x2f49ca && (_0x2f49ca = document['createElement'](_0x273ebe(0x437)), _0x2f49ca['id'] = 'torn-mercenary-dock', document[_0x273ebe(0x299)]['appendChild'](_0x2f49ca));
        _0x5c4f3b();
        const _0x1720c6 = Math[_0x273ebe(0x306)](Date['now']() / 0x3e8), _0x2574cb = _0xe0a523[_0x273ebe(0x6fe)](_0x59cb40 => {
                const _0x5c59c8 = _0x273ebe;
                if (_0x1f060e[_0x5c59c8(0x602)](_0x266a19, _0x59cb40))
                    return null;
                const _0x370083 = _0x167784[_0x59cb40]?.[_0x5c59c8(0x4c4)];
                if (_0x370083 && _0x1f060e[_0x5c59c8(0x275)](_0x463d9e, _0x370083, _0x1720c6, _0x59cb40)) {
                    const _0x2d8514 = {};
                    return _0x2d8514['id'] = _0x59cb40, _0x2d8514[_0x5c59c8(0x4c4)] = _0x370083, _0x2d8514;
                }
                return null;
            })[_0x273ebe(0x668)](Boolean), _0x4613d6 = _0x2574cb[_0x273ebe(0x453)], _0x2102a3 = _0x23e34f[_0x273ebe(0x6fe)](_0x2d5f91 => {
                const _0x40e09b = _0x273ebe;
                if (_0x59e0bf['isTradersPaused'] || _0x5c4031(_0x2d5f91))
                    return null;
                const _0x5451d2 = _0x167784[_0x2d5f91]?.[_0x40e09b(0x4c4)];
                if (_0x5451d2 && _0x44c8a0(_0x5451d2)) {
                    const _0x4f26e2 = {};
                    return _0x4f26e2['id'] = _0x2d5f91, _0x4f26e2['data'] = _0x5451d2, _0x4f26e2;
                }
                return null;
            })['filter'](Boolean), _0x59d6d1 = _0x2102a3['length'], _0x11f178 = _0x23e34f['map'](_0x56ff50 => {
                const _0x3ec2b9 = _0x273ebe, _0xefecff = _0x167784[_0x56ff50]?.[_0x3ec2b9(0x4c4)];
                if (_0xefecff && _0x44c8a0(_0xefecff)) {
                    const _0x3ac930 = {};
                    return _0x3ac930['id'] = _0x56ff50, _0x3ac930[_0x3ec2b9(0x4c4)] = _0xefecff, _0x3ac930;
                }
                return null;
            })[_0x273ebe(0x668)](Boolean), _0x5c1ec0 = _0x11f178[_0x273ebe(0x453)];
        if (_0x59e0bf[_0x273ebe(0x8c5)]) {
            const _0x549e03 = _0x2574cb[0x0], _0x51aff9 = _0x2102a3[0x0];
            let _0x20732c = '';
            if (_0x549e03)
                _0x20732c = _0x273ebe(0x1c7) + _0x549e03[_0x273ebe(0x4c4)][_0x273ebe(0x589)] + _0x273ebe(0x1de) + _0x549e03[_0x273ebe(0x4c4)]['name'][_0x273ebe(0x64d)](0x0, 0xa) + (_0x4613d6 > 0x1 ? _0x273ebe(0x7aa) + _0x1f060e[_0x273ebe(0x413)](_0x4613d6, 0x1) + ')' : '') + _0x273ebe(0x2bf);
            else
                _0x51aff9 && (_0x20732c = _0x273ebe(0x80e) + _0x51aff9[_0x273ebe(0x4c4)][_0x273ebe(0x589)] + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💼\x20' + _0x51aff9[_0x273ebe(0x4c4)][_0x273ebe(0x589)][_0x273ebe(0x64d)](0x0, 0xa) + '\x20Out' + (_0x59d6d1 > 0x1 ? '\x20(+' + (_0x59d6d1 - 0x1) + ')' : '') + _0x273ebe(0x2bf));
            _0x2f49ca[_0x273ebe(0x75a)] = _0x273ebe(0x700) + (_0x1f060e[_0x273ebe(0x44e)](_0x4613d6, 0x0) ? 'has-ready' : _0x1f060e[_0x273ebe(0x1cc)](_0x59d6d1, 0x0) ? _0x273ebe(0x5d8) : '') + _0x273ebe(0x9bc) + _0xe0a523[_0x273ebe(0x453)] + _0x273ebe(0x267) + _0x23e34f[_0x273ebe(0x453)] + '💼)</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x20732c + _0x273ebe(0x657);
            const _0x511d27 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x43e)]);
            _0x511d27 && (_0x511d27['onclick'] = () => {
                const _0x1a61da = _0x273ebe;
                _0x59e0bf[_0x1a61da(0x8c5)] = ![], _0x2aad15(), _0x1f060e[_0x1a61da(0x3a7)](_0x383f8d);
            });
            const _0x11b5f0 = document[_0x273ebe(0x24c)]('stakeout-pill-hit-target');
            _0x11b5f0 && _0x549e03 && (_0x11b5f0[_0x273ebe(0x606)] = _0x2e3eae => {
                const _0x32d678 = _0x273ebe;
                _0x2e3eae[_0x32d678(0x7a5)]();
                const _0x416156 = _0x1f060e[_0x32d678(0x3d3)](_0x59e0bf[_0x32d678(0x82a)], _0x32d678(0x8a5)) ? _0x32d678(0x396) + _0x549e03['id'] : _0x32d678(0x37b) + _0x549e03['id'];
                _0x30dd48(_0x416156), _0x40d4da('⚔️\x20Staging\x20attack\x20on\x20ready\x20target\x20[' + _0x549e03[_0x32d678(0x4c4)][_0x32d678(0x589)] + ']!');
            });
            const _0x34e0db = document['getElementById'](_0x1f060e[_0x273ebe(0x5fe)]);
            _0x34e0db && _0x51aff9 && (_0x34e0db[_0x273ebe(0x606)] = _0x34b374 => {
                const _0x40900d = _0x273ebe;
                _0x34b374[_0x40900d(0x7a5)](), window['open']('https://www.torn.com/messages.php#/p=compose&XID=' + _0x51aff9['id'], _0x40900d(0x38c)), _0x40d4da('💬\x20Opening\x20message\x20compose\x20to\x20Trader\x20[' + _0x51aff9[_0x40900d(0x4c4)][_0x40900d(0x589)] + ']!');
            });
            _0x281843();
            const _0x487d75 = {};
            _0x487d75[_0x273ebe(0x8c5)] = !![], _0x487d75['position'] = _0x59e0bf['dockPosition'];
            const _0x22ebef = {};
            _0x22ebef[_0x273ebe(0x986)] = _0x487d75, window[_0x273ebe(0x2ad)](new CustomEvent(_0x1f060e['QiCMH'], _0x22ebef));
            return;
        }
        const _0x48e741 = _0x1f060e[_0x273ebe(0x785)](_0x5d92bc), _0xa0464a = _0x1f060e[_0x273ebe(0x4c0)](_0x10ef9f), _0xd334d3 = {
                'sp': _0x32bfce('sp'),
                'fw': _0x32bfce('fw'),
                'ck': _0x1f060e[_0x273ebe(0x427)](_0x32bfce, 'ck'),
                'tw': _0x32bfce('tw'),
                'any': _0x5c537c()
            }, _0x18c532 = _0x3e7223['filter'](_0x4172fa => _0xd334d3[_0x4172fa[_0x273ebe(0x80c)]])[_0x273ebe(0x453)], _0x367904 = _0xd334d3['fw'] ? _0x7f63e0() : 0x0, _0xc8eed9 = _0x571c62 === 'traders' ? _0x59e0bf['isTradersPaused'] : _0x571c62 === _0x1f060e[_0x273ebe(0x4dc)] ? _0x59e0bf[_0x273ebe(0x652)] : _0x59e0bf['isPaused'];
        _0x2f49ca[_0x273ebe(0x75a)] = _0x273ebe(0x8a3) + (_0x236a66 ? _0x1f060e[_0x273ebe(0x3e9)] : '') + _0x273ebe(0x3e2) + (_0xc8eed9 ? _0x273ebe(0x954) : _0x1f060e[_0x273ebe(0x8bd)]) + _0x273ebe(0x2d8) + (_0xc8eed9 ? _0x1f060e[_0x273ebe(0x76f)] : _0x273ebe(0x7ec)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-header-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-license-badge\x20' + (_0x18c532 ? _0x273ebe(0x1dd) : _0x273ebe(0x473)) + _0x273ebe(0x87d) + (_0x18c532 ? _0x273ebe(0x9cd) + _0x18c532 + '/' + _0x3e7223[_0x273ebe(0x453)] : _0x1f060e[_0x273ebe(0x828)]) + _0x273ebe(0x844) + (_0xc8eed9 ? 'Resume' : _0x1f060e['vnPyd']) + '\x20' + (_0x1f060e['EZHFr'](_0x571c62, _0x1f060e[_0x273ebe(0x6aa)]) ? _0x1f060e[_0x273ebe(0x2fd)] : _0x571c62 === _0x273ebe(0x509) ? _0x273ebe(0x730) : 'Scanning') + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xc8eed9 ? '▶' : '⏸') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-icon\x22\x20id=\x22stakeout-btn-settings\x22\x20title=\x22Toggle\x20Trigger\x20Settings\x22>⚙</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-icon\x22\x20id=\x22stakeout-btn-minimize\x22\x20title=\x22Minimize\x20Radar\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-tabs\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-tab-btn\x20' + (_0x1f060e[_0x273ebe(0x899)](_0x571c62, _0x1f060e[_0x273ebe(0x1df)]) ? _0x1f060e[_0x273ebe(0x206)] : '') + _0x273ebe(0x8af) + _0xe0a523['length'] + ')' + (_0x4613d6 > 0x0 ? _0x273ebe(0x39c) + _0x4613d6 + _0x273ebe(0x804) : '') + _0x273ebe(0x9ba) + (_0x1f060e[_0x273ebe(0x3d3)](_0x571c62, _0x1f060e[_0x273ebe(0x6aa)]) ? _0x1f060e['JVDQY'] : '') + '\x22\x20id=\x22stakeout-tab-traders\x22\x20title=\x22Trader\x20Hospitalization\x20Services\x20Watchlist\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💼\x20Traders\x20(' + _0x23e34f[_0x273ebe(0x453)] + ')' + (_0x59e0bf[_0x273ebe(0x1ba)] ? _0x1f060e[_0x273ebe(0x2f5)] : '') + (_0x59d6d1 > 0x0 ? '<span\x20class=\x22stakeout-tab-badge\x20trader\x22>' + _0x59d6d1 + _0x273ebe(0x804) : '') + _0x273ebe(0x9ba) + (_0x571c62 === _0x273ebe(0x509) ? _0x273ebe(0x352) : '') + _0x273ebe(0x840) + _0x2fc985[_0x273ebe(0x453)] + ')' + (_0x59e0bf[_0x273ebe(0x652)] ? _0x1f060e[_0x273ebe(0x242)] : '') + _0x273ebe(0x35e) + (_0x1f060e[_0x273ebe(0x7de)](_0x367904, 0x0) ? 'inline-block' : _0x1f060e[_0x273ebe(0x349)]) + _0x273ebe(0x631) + _0x367904 + _0x273ebe(0x912) + (_0xd334d3['ck'] && _0x59e0bf['chainWatcherEnabled'] ? _0x1f060e[_0x273ebe(0x418)] : _0x1f060e[_0x273ebe(0x349)]) + _0x273ebe(0x6cd) + (_0x59e0bf[_0x273ebe(0x60b)] || _0x59e0bf[_0x273ebe(0x8cd)] || 0x3e8fa0) + _0x273ebe(0x22a) + (_0x571c62 === _0x273ebe(0x463) ? _0x1f060e[_0x273ebe(0x365)] : _0x1f060e[_0x273ebe(0x79b)](_0x571c62, _0x1f060e[_0x273ebe(0x4dc)]) ? _0x273ebe(0x5ed) : _0x273ebe(0x73e)) + _0x273ebe(0x335) + (_0x236a66 ? _0x1f060e[_0x273ebe(0x418)] : _0x1f060e[_0x273ebe(0x349)]) + _0x273ebe(0x9bf) + (_0xd334d3['any'] ? '' : _0x273ebe(0x23f) + _0x3e7223[_0x273ebe(0x6fe)](_0x5518e7 => _0x273ebe(0x24f) + _0x5518e7[_0x273ebe(0x3ed)] + _0x273ebe(0x280) + _0x5518e7['name'] + '</b>\x20(' + _0x5518e7[_0x273ebe(0x572)] + _0x273ebe(0x2a4))[_0x273ebe(0x207)]('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-primary\x22\x20id=\x22stakeout-btn-settings-warpass\x22\x20style=\x22width:\x20100%;\x20background:\x20linear-gradient(135deg,\x20#f59e0b,\x20#d97706);\x20border-color:\x20#f59e0b;\x20color:\x20#0f172a;\x20font-weight:\x20900;\x20font-size:\x2011px;\x20padding:\x206px;\x20border-radius:\x204px;\x20cursor:\x20pointer;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🛒\x20Open\x20Store\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + _0x273ebe(0x21f) + (_0x2ee53f(_0x1f060e[_0x273ebe(0x713)]) ? _0x273ebe(0x1c6) : '') + _0x273ebe(0x1d9) + ((_0x59e0bf['attackDestination'] || _0x273ebe(0x5f9)) === 'attack' ? _0x1f060e['kLobz'] : '') + _0x273ebe(0x82e) + (_0x1f060e['mGbMK'](_0x59e0bf['attackDestination'] || _0x1f060e[_0x273ebe(0x4b5)], _0x1f060e['TMzAR']) ? _0x273ebe(0x6c6) : '') + _0x273ebe(0x705) + (_0x1f060e[_0x273ebe(0x8b0)](_0x59e0bf[_0x273ebe(0x3c8)] || 'left', 'left') ? _0x1f060e[_0x273ebe(0x77b)] : '') + _0x273ebe(0x53d) + ((_0x59e0bf['dockPosition'] || _0x273ebe(0x3f8)) === _0x1f060e['NIdWP'] ? _0x273ebe(0x6c6) : '') + '>Right\x20Side</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22stakeout-toggle-row\x22\x20title=\x22Maximum\x20Torn\x20API\x20calls\x20per\x20minute\x20this\x20script\x20may\x20use,\x20shared\x20across\x20all\x20open\x20Torn\x20tabs.\x20Torn\x20allows\x20100/min\x20across\x20ALL\x20your\x20tools,\x20so\x20leave\x20headroom\x20for\x20others.\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>📡\x20API\x20Budget</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22stakeout-api-budget-select\x22\x20class=\x22stakeout-settings-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + [
            0x1e,
            0x2d,
            0x3c,
            0x4b,
            0x5a
        ][_0x273ebe(0x6fe)](_0x313f5f => _0x273ebe(0x937) + _0x313f5f + '\x22\x20' + (_0x5417bb() === _0x313f5f ? _0x273ebe(0x6c6) : '') + '>' + _0x313f5f + _0x273ebe(0x838) + (_0x313f5f === 0x4b ? '\x20(default)' : '') + _0x273ebe(0x28b))[_0x273ebe(0x207)]('') + _0x273ebe(0x9ae) + (_0x2ee53f(_0x273ebe(0x59b)) ? _0x1f060e[_0x273ebe(0x8b2)] : '') + _0x273ebe(0x47d) + (_0x59e0bf[_0x273ebe(0x540)] ? _0x273ebe(0x1c1) : '') + _0x273ebe(0x7a7) + (_0x59e0bf['alarmVolume'] ?? 0x1) + _0x273ebe(0x8d1) + (_0x59e0bf[_0x273ebe(0x76c)] ? _0x273ebe(0x1c1) : '') + _0x273ebe(0x47a) + (_0x59e0bf[_0x273ebe(0x5a7)] ? _0x1f060e[_0x273ebe(0x8a6)] : '') + _0x273ebe(0x433) + (_0x2ee53f('sp') ? _0x273ebe(0x1c6) : '') + _0x273ebe(0x304) + (_0xd334d3['sp'] ? '' : _0x273ebe(0x6d6)) + _0x273ebe(0x2e9) + (_0xd334d3['sp'] ? _0x273ebe(0x1c9) + (_0x59e0bf[_0x273ebe(0x73f)] ? _0x273ebe(0x1c1) : '') + _0x273ebe(0x7e8) + ((_0x59e0bf[_0x273ebe(0x586)] || 0x5) === 0x2 ? _0x273ebe(0x6c6) : '') + _0x273ebe(0x288) + ((_0x59e0bf[_0x273ebe(0x586)] || 0x5) === 0x5 ? _0x1f060e['kLobz'] : '') + _0x273ebe(0x69d) + ((_0x59e0bf[_0x273ebe(0x586)] || 0x5) === 0xa ? _0x1f060e[_0x273ebe(0x77b)] : '') + _0x273ebe(0x92a) + ((_0x59e0bf['activeThresholdMin'] || 0x5) === 0xf ? _0x1f060e['kLobz'] : '') + _0x273ebe(0x591) + (_0x1f060e[_0x273ebe(0x802)](_0x59e0bf[_0x273ebe(0x586)] || 0x5, 0x1e) ? _0x1f060e[_0x273ebe(0x77b)] : '') + _0x273ebe(0x88c) + ((_0x59e0bf[_0x273ebe(0x586)] || 0x5) === 0x3c ? _0x1f060e[_0x273ebe(0x77b)] : '') + _0x273ebe(0x4cc) + ((_0x59e0bf[_0x273ebe(0x586)] || 0x5) === -0x1 ? _0x1f060e[_0x273ebe(0x77b)] : '') + _0x273ebe(0x2bc) + (_0x59e0bf[_0x273ebe(0x964)] ? _0x273ebe(0x1c1) : '') + _0x273ebe(0x252) + (_0x1f060e['nrsLO'](_0x59e0bf['edDetectionScope'] || 'ranked_only', _0x273ebe(0x7c5)) ? _0x1f060e['kLobz'] : '') + '>Ranked\x20Wars\x20Only\x20(100%\x20Confirmed\x20ED)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22all_wars\x22\x20' + (_0x1f060e[_0x273ebe(0x532)](_0x59e0bf[_0x273ebe(0x278)] || _0x1f060e[_0x273ebe(0x790)], _0x273ebe(0x47e)) ? _0x273ebe(0x6c6) : '') + '>Ranked\x20+\x20All\x20TT\x20Wars\x20(Conservative)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22stakeout-toggle-row\x22\x20title=\x22Trigger\x20loud\x20alarm\x20and\x20alert\x20if\x20someone\x20else\x20hospitalizes\x20a\x20monitored\x20target\x20illegally\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🚨\x20Alert\x20on\x20Illegal\x20Target\x20Hit</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22toggle-alert-illegal\x22\x20' + (_0x59e0bf['alertOnIllegalHit'] ? _0x1f060e[_0x273ebe(0x8a6)] : '') + _0x273ebe(0x6b7) + (_0x59e0bf[_0x273ebe(0x8ae)] ? _0x273ebe(0x1c1) : '') + '\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-settings-tests\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-icon\x22\x20id=\x22stakeout-btn-test-sound\x22\x20style=\x22flex:\x201;\x20padding:\x204px;\x22\x20title=\x22Test\x20Attack\x20Siren\x20Alarm\x22>🔊\x20Siren</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-icon\x22\x20id=\x22stakeout-btn-test-breach\x22\x20style=\x22flex:\x201;\x20padding:\x204px;\x20border-color:\x20#ef4444;\x20color:\x20#f87171;\x22\x20title=\x22Test\x20Illegal\x20Hit\x20Alert\x20&\x20Evidence\x20Card\x22>🚨\x20Breach</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : _0x273ebe(0x8fb)) + _0x273ebe(0x65f) + (_0x2ee53f('ck') ? _0x273ebe(0x1c6) : '') + _0x273ebe(0x318) + (_0xd334d3['ck'] ? '' : _0x273ebe(0x6d6)) + _0x273ebe(0x2e9) + (_0xd334d3['ck'] ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22stakeout-toggle-row\x22\x20title=\x22Live\x20Faction\x20Chain\x20Watcher\x20with\x20melodic\x20bell\x20chime\x20and\x20automated\x20target\x20progression\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🔗\x20Faction\x20Chain\x20Watcher</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22toggle-chain-watcher\x22\x20' + (_0x59e0bf[_0x273ebe(0x84d)] ? _0x1f060e['hJOaF'] : '') + '\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22stakeout-toggle-row\x22\x20title=\x22Plays\x20warning\x20bell\x20at\x201:00\x20and\x20urgent\x20alert\x20bell\x20at\x2030s\x20until\x20chain\x20breaks\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🔔\x20Chain\x20Expiry\x20Alert\x20Bell</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22toggle-chain-alert-bell\x22\x20' + (_0x59e0bf['chainAlertBell'] ? _0x1f060e['hJOaF'] : '') + _0x273ebe(0x8da) + (_0x1f060e[_0x273ebe(0x274)](_0x4593b0) ? 'selected' : '') + '>Smart\x20Pool\x20(skip\x20unattackable)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22sequential\x22\x20' + (!_0x1f060e[_0x273ebe(0x650)](_0x4593b0) ? _0x273ebe(0x6c6) : '') + '>Sequential\x20(+1)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-toggle-row\x22\x20title=\x22Random\x20IDs\x20inside\x20this\x20range\x20are\x20sampled\x20to\x20build\x20your\x20pool.\x20Every\x20merc\x20gets\x20a\x20different\x20random\x20pool.\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🎲\x20Scan\x20Range</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22display:\x20flex;\x20gap:\x203px;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22stakeout-chain-scan-start\x22\x20class=\x22stakeout-settings-num\x22\x20value=\x22' + _0x40a767()[0x0] + _0x273ebe(0x228) + _0x1f060e[_0x273ebe(0x348)](_0x40a767)[0x1] + _0x273ebe(0x8dd) + _0x1b7965() + _0x273ebe(0x767) + _0x1f060e[_0x273ebe(0x785)](_0x3850ad) + _0x273ebe(0x87e) : '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-settings-locked\x22>Not\x20owned\x20yet.\x20<button\x20type=\x22button\x22\x20class=\x22stakeout-btn-icon\x22\x20data-unlock-wp=\x22ck\x22>🛒\x20Get\x20it\x20in\x20the\x20Store</button></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + _0x273ebe(0x5a0) + (_0x1f060e['sGbQa'](_0x2ee53f, 'fw') ? 'open' : '') + _0x273ebe(0x8fc) + (_0xd334d3['fw'] ? '' : '\x20<span\x20class=\x22stakeout-settings-lock\x22>🔒</span>') + _0x273ebe(0x2e9) + (_0xd334d3['fw'] ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22stakeout-toggle-row\x22\x20title=\x22How\x20often\x20each\x20Faction\x20Watch\x20contract\x20refreshes\x20(1\x20API\x20call\x20per\x20refresh\x20per\x20faction)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🏴\x20Faction\x20Watch\x20Refresh</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22stakeout-faction-poll-select\x22\x20class=\x22stakeout-settings-select\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + [
            0xf,
            0x14,
            0x1e,
            0x3c
        ][_0x273ebe(0x6fe)](_0x516b3a => '<option\x20value=\x22' + _0x516b3a + '\x22\x20' + ((parseInt(_0x59e0bf[_0x273ebe(0x372)], 0xa) || 0x14) === _0x516b3a ? _0x273ebe(0x6c6) : '') + _0x273ebe(0x7f7) + _0x516b3a + _0x273ebe(0x36f))[_0x273ebe(0x207)]('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : _0x273ebe(0x685)) + _0x273ebe(0x455) + (_0x1f060e[_0x273ebe(0x2ff)](_0x2ee53f, 'tw') ? _0x273ebe(0x1c6) : '') + _0x273ebe(0x3c7) + (_0xd334d3['tw'] ? '' : _0x1f060e['Cdgcm']) + _0x273ebe(0x2e9) + (_0xd334d3['tw'] ? _0x273ebe(0x5c2) + (_0x59e0bf[_0x273ebe(0x3bc)] ? _0x1f060e[_0x273ebe(0x8a6)] : '') + _0x273ebe(0x66b) + (_0x59e0bf[_0x273ebe(0x1ba)] ? _0x1f060e[_0x273ebe(0x8a6)] : '') + _0x273ebe(0x2a7) : _0x273ebe(0x51c)) + _0x273ebe(0x92d) + (_0xa0464a[_0x273ebe(0x92f)] ? _0x273ebe(0x5d9) : _0x1f060e['ccIrc']) + _0x273ebe(0x7b5) + _0x1f060e[_0x273ebe(0x4d4)](_0x8d20c7, _0xa0464a[_0x273ebe(0x92f)]) + _0x273ebe(0x936) + _0xa0464a[_0x273ebe(0x85b)] + '</span></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xa0464a['uid'] ? _0x273ebe(0x9cf) + _0xa0464a[_0x273ebe(0x91b)] + _0x273ebe(0x356) : '') + _0x273ebe(0x827) + _0x38ffeb + _0x273ebe(0x80a) + _0x48e741 + '/' + _0x5417bb() + _0x273ebe(0x992) + (_0x506135 === 0x3e8 ? _0x273ebe(0x845) : (_0x59e0bf[_0x273ebe(0x877)] || 0x5) + 's') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xd334d3['any'] ? _0x273ebe(0x818) + _0x3e7223[_0x273ebe(0x6fe)](_0x10a8ab => {
            const _0x207c55 = _0x273ebe, _0x1ff68b = _0xe6dc39[_0x207c55(0x95f)](_0x8844b1, _0x10a8ab[_0x207c55(0x80c)]);
            return _0x207c55(0x807) + _0x10a8ab[_0x207c55(0x3ed)] + '\x20' + _0x10a8ab[_0x207c55(0x589)] + ':\x20' + (_0x1ff68b ? _0x207c55(0x7c0) + Math[_0x207c55(0x9a5)]((_0x1ff68b - Date[_0x207c55(0x903)]() / 0x3e8) / 0x15180) + _0x207c55(0x7d3) : '<span\x20style=\x22color:\x20#64748b;\x22>not\x20owned</span>') + _0x207c55(0x629);
        })[_0x273ebe(0x207)]('') + _0x273ebe(0x262) : '') + _0x273ebe(0x514) + (_0x571c62 === _0x1f060e[_0x273ebe(0x1df)] ? _0x1f060e['AZqOD'](_0xe0a523['length'], 0x0) ? _0x273ebe(0x2fa) + (!_0xa0464a['key'] ? '<span\x20style=\x22color:\x20#f87171;\x20font-weight:\x20700;\x22>⚠️\x20API\x20Key\x20Missing!</span><br>Click\x20⚙\x20(Settings)\x20&gt;\x20\x22Change\x20Key\x22\x20to\x20start\x20scanning.<br><br>' : '') + _0x273ebe(0x829) : _0xe0a523[_0x273ebe(0x6fe)]((_0x4ff0ec, _0x5cf5c0) => {
            const _0x3d4a1a = _0x273ebe;
            if (!_0xd334d3['sp'] && _0x5cf5c0 >= _0x1844e3)
                return _0x3d4a1a(0x58c) + _0x4ff0ec + _0x3d4a1a(0x774) + _0x4ff0ec + _0x3d4a1a(0x2c4);
            return _0x3d4a1a(0x7d1) + _0x4ff0ec + '\x22\x20class=\x22stakeout-card\x22></div>';
        })[_0x273ebe(0x207)]('') : _0x571c62 === 'factions' ? !_0xd334d3['fw'] ? _0x273ebe(0x1eb) + '\x20\x20\x20🏴\x20Unlock\x20Faction\x20Watch\x20(send\x20FW)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : (_0x59e0bf['isFactionsPaused'] ? _0x273ebe(0x5c8) : '') + (_0x2fc985[_0x273ebe(0x453)] === 0x0 ? '<div\x20class=\x22stakeout-empty\x22>' + (!_0xa0464a[_0x273ebe(0x92f)] ? _0x273ebe(0x987) : '') + _0x273ebe(0x550) : _0x2fc985[_0x273ebe(0x6fe)](_0x1fb260 => _0x58e91b(_0x1fb260))['join']('')) : !_0xd334d3['tw'] ? _0x273ebe(0x43f) + _0x273ebe(0x236) : (_0x59e0bf[_0x273ebe(0x1ba)] ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:\x20rgba(245,\x20158,\x2011,\x200.12);\x20border:\x201px\x20solid\x20rgba(245,\x20158,\x2011,\x200.35);\x20border-radius:\x206px;\x20padding:\x206px\x2010px;\x20margin-bottom:\x208px;\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20font-size:\x2011px;\x20color:\x20#fef08a;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>⏸️\x20Trader\x20monitoring\x20is\x20currently\x20<b>PAUSED</b></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22stakeout-trader-resume-banner-btn\x22\x20style=\x22background:\x20#22c55e;\x20color:\x20#fff;\x20border:\x20none;\x20border-radius:\x204px;\x20padding:\x202px\x208px;\x20font-size:\x2010px;\x20font-weight:\x20700;\x20cursor:\x20pointer;\x22>Resume</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : '') + (_0x23e34f[_0x273ebe(0x453)] === 0x0 ? '<div\x20class=\x22stakeout-empty\x22>' + (!_0xa0464a['key'] ? _0x1f060e[_0x273ebe(0x756)] : '') + _0x273ebe(0x4d6) : _0x23e34f[_0x273ebe(0x6fe)](_0x2c8f26 => _0x273ebe(0x744) + _0x2c8f26 + _0x273ebe(0x68d))['join'](''))) + _0x273ebe(0x8a1);
        const _0x5a2b4a = document[_0x273ebe(0x24c)](_0x273ebe(0x384)), _0x2b5457 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x3a9)]);
        _0x5a2b4a && (_0x5a2b4a[_0x273ebe(0x606)] = () => {
            const _0x247602 = _0x273ebe;
            _0x190ec5(_0x247602(0x463)), _0x1f060e[_0x247602(0x239)](_0x383f8d);
        });
        _0x2b5457 && (_0x2b5457[_0x273ebe(0x606)] = () => {
            const _0x2f5861 = _0x273ebe;
            _0xe6dc39[_0x2f5861(0x328)](_0x190ec5, _0x2f5861(0x316)), _0x383f8d();
        });
        const _0x7ed897 = document[_0x273ebe(0x24c)](_0x273ebe(0x64a));
        _0x7ed897 && (_0x7ed897[_0x273ebe(0x606)] = () => {
            const _0x335c1f = _0x273ebe;
            _0x190ec5(_0x335c1f(0x509)), _0xe6dc39['IlNMd'](_0x383f8d);
        });
        document[_0x273ebe(0x3a5)](_0x273ebe(0x86a))['forEach'](_0x5a5331 => {
            const _0x428fbf = _0x273ebe;
            _0x5a5331['onclick'] = () => _0x17e6e0(_0x5a5331[_0x428fbf(0x63e)][_0x428fbf(0x491)]);
        }), document[_0x273ebe(0x3a5)](_0x273ebe(0x5f1))[_0x273ebe(0x38f)](_0x118fbc => {
            const _0x5c9bbb = _0x273ebe, _0x5cc42b = {};
            _0x5cc42b[_0x5c9bbb(0x4f8)] = _0x5c9bbb(0x918);
            const _0x88ec6 = _0x5cc42b;
            _0x118fbc['ontoggle'] = () => {
                const _0x35072b = _0x5c9bbb;
                _0x152797[_0x118fbc[_0x35072b(0x63e)][_0x35072b(0x9b8)]] = !_0x118fbc['open'], _0x299b4c(_0x88ec6[_0x35072b(0x4f8)], _0x152797);
            };
        });
        const _0x31c4e8 = document[_0x273ebe(0x24c)](_0x273ebe(0x777));
        if (_0x31c4e8)
            _0x31c4e8[_0x273ebe(0x606)] = () => _0x17e6e0('fw');
        const _0x1d27a3 = document[_0x273ebe(0x24c)]('stakeout-faction-resume-banner-btn');
        _0x1d27a3 && (_0x1d27a3['onclick'] = () => {
            const _0x267bac = _0x273ebe;
            _0x59e0bf['isFactionsPaused'] = ![], _0x2aad15(), _0xe6dc39[_0x267bac(0x5fb)](_0x383f8d), _0x40d4da(_0x267bac(0x3d1));
        });
        const _0x3db2d7 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x4e7)]);
        _0x3db2d7 && (_0x3db2d7[_0x273ebe(0x606)] = () => {
            const _0x146aab = _0x273ebe;
            _0xe6dc39[_0x146aab(0x95f)](_0x17e6e0, 'tw');
        });
        const _0x5ce6cc = document[_0x273ebe(0x24c)](_0x273ebe(0x878));
        _0x5ce6cc && (_0x5ce6cc[_0x273ebe(0x606)] = () => {
            const _0x3ebd13 = _0x273ebe;
            _0xe6dc39[_0x3ebd13(0x6a2)](_0x17e6e0);
        });
        const _0x39f129 = document[_0x273ebe(0x24c)]('stakeout-btn-minimize');
        _0x39f129 && (_0x39f129[_0x273ebe(0x606)] = () => {
            const _0x1a3560 = _0x273ebe;
            _0x59e0bf[_0x1a3560(0x8c5)] = !![], _0x2aad15(), _0x383f8d();
        });
        const _0x218946 = document[_0x273ebe(0x24c)]('stakeout-btn-quickhit');
        _0x218946 && (_0x218946[_0x273ebe(0x606)] = _0x5527d3 => {
            const _0x33422a = _0x273ebe;
            _0x5527d3[_0x33422a(0x29f)](), _0x234066();
        });
        const _0x1d0e3e = document[_0x273ebe(0x24c)](_0x273ebe(0x39f));
        _0x1d0e3e && (_0x1d0e3e[_0x273ebe(0x1ff)] = _0x4a3442 => {
            const _0x696a5d = _0x273ebe, _0x38a5cd = parseInt(_0x4a3442[_0x696a5d(0x283)]['value'], 0xa);
            if (_0x38a5cd > 0x0) {
                _0x59e0bf[_0x696a5d(0x60b)] = _0x38a5cd, _0x59e0bf['chainManualNextId'] = _0x38a5cd, _0x2aad15();
                const _0x3efbf4 = document['getElementById'](_0x696a5d(0x7c4));
                if (_0x3efbf4)
                    _0x3efbf4[_0x696a5d(0x814)] = _0x38a5cd;
                _0x281843(), _0x40d4da(_0x696a5d(0x70a) + _0x38a5cd);
            }
        }, _0x1d0e3e['onclick'] = _0x5656bc => _0x5656bc[_0x273ebe(0x7a5)]());
        const _0x395473 = document[_0x273ebe(0x24c)](_0x273ebe(0x459));
        _0x395473 && (_0x395473['onclick'] = _0x5ee0c1 => {
            const _0x2c7820 = _0x273ebe;
            _0x5ee0c1['stopPropagation']();
            let _0x2e7ff9 = parseInt(_0x59e0bf[_0x2c7820(0x60b)], 0xa) || 0x3e8fa0;
            if (_0xe6dc39[_0x2c7820(0x696)](_0x2e7ff9, 0x1)) {
                _0x59e0bf[_0x2c7820(0x60b)] = _0x2e7ff9 - 0x1, _0x59e0bf['chainManualNextId'] = _0xe6dc39[_0x2c7820(0x499)](_0x2e7ff9, 0x1), _0xe6dc39[_0x2c7820(0x6a2)](_0x2aad15);
                if (_0x1d0e3e)
                    _0x1d0e3e[_0x2c7820(0x814)] = _0x59e0bf[_0x2c7820(0x60b)];
                const _0x34393b = document[_0x2c7820(0x24c)](_0x2c7820(0x7c4));
                if (_0x34393b)
                    _0x34393b[_0x2c7820(0x814)] = _0x59e0bf[_0x2c7820(0x60b)];
                _0xe6dc39['AXANf'](_0x281843);
            }
        });
        const _0x164e31 = document[_0x273ebe(0x24c)](_0x1f060e['IFJIk']);
        _0x164e31 && (_0x164e31[_0x273ebe(0x606)] = _0x16805b => {
            const _0x3af2da = _0x273ebe;
            _0x16805b['stopPropagation']();
            let _0x513b25 = parseInt(_0x59e0bf[_0x3af2da(0x60b)], 0xa) || 0x3e8fa0;
            _0x59e0bf[_0x3af2da(0x60b)] = _0x1f060e['AiEal'](_0x513b25, 0x1), _0x59e0bf[_0x3af2da(0x1f4)] = _0x1f060e['cSXFi'](_0x513b25, 0x1), _0x2aad15();
            if (_0x1d0e3e)
                _0x1d0e3e[_0x3af2da(0x814)] = _0x59e0bf['chainTargetCurrentId'];
            const _0xc646db = document[_0x3af2da(0x24c)](_0x3af2da(0x7c4));
            if (_0xc646db)
                _0xc646db[_0x3af2da(0x814)] = _0x59e0bf[_0x3af2da(0x60b)];
            _0x1f060e[_0x3af2da(0x239)](_0x281843);
        });
        const _0x272d90 = document[_0x273ebe(0x24c)](_0x273ebe(0x272));
        _0x272d90 && (_0x272d90[_0x273ebe(0x606)] = _0x1f257b => {
            const _0x45c8c2 = _0x273ebe;
            _0x1f257b[_0x45c8c2(0x7a5)](), _0x17e6e0();
        });
        const _0x3f3e9c = document[_0x273ebe(0x24c)](_0x273ebe(0x458));
        _0x3f3e9c && (_0x3f3e9c[_0x273ebe(0x606)] = () => {
            const _0x253bbb = _0x273ebe;
            if (_0x571c62 === _0x253bbb(0x316))
                _0x59e0bf[_0x253bbb(0x1ba)] = !_0x59e0bf[_0x253bbb(0x1ba)], _0xe6dc39[_0x253bbb(0x5fb)](_0x2aad15), _0xe6dc39[_0x253bbb(0x6a2)](_0x383f8d), _0xe6dc39[_0x253bbb(0x571)](_0x40d4da, _0x59e0bf[_0x253bbb(0x1ba)] ? _0xe6dc39[_0x253bbb(0x971)] : _0x253bbb(0x382));
            else
                _0xe6dc39['cDONl'](_0x571c62, _0xe6dc39[_0x253bbb(0x9a6)]) ? (_0x59e0bf['isFactionsPaused'] = !_0x59e0bf['isFactionsPaused'], _0xe6dc39[_0x253bbb(0x38a)](_0x2aad15), _0x383f8d(), _0x40d4da(_0x59e0bf['isFactionsPaused'] ? _0xe6dc39[_0x253bbb(0x311)] : _0x253bbb(0x3d1))) : (_0x59e0bf[_0x253bbb(0x989)] = !_0x59e0bf[_0x253bbb(0x989)], _0x2aad15(), _0x383f8d(), _0x40d4da(_0x59e0bf[_0x253bbb(0x989)] ? _0x253bbb(0x45f) : _0x253bbb(0x421)));
        });
        const _0x30dae8 = document[_0x273ebe(0x24c)]('stakeout-trader-resume-banner-btn');
        _0x30dae8 && (_0x30dae8[_0x273ebe(0x606)] = () => {
            const _0x128a36 = _0x273ebe;
            _0x59e0bf[_0x128a36(0x1ba)] = ![], _0x2aad15(), _0x1f060e['kFlAT'](_0x383f8d), _0x40d4da('▶\x20Trader\x20monitoring\x20RESUMED.');
        });
        const _0x476576 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x4e1)]), _0x3c26a0 = document['getElementById'](_0x273ebe(0x949));
        _0x3c26a0 && _0x476576 && (_0x3c26a0[_0x273ebe(0x606)] = () => {
            const _0x9391d7 = _0x273ebe;
            _0x236a66 = _0xe6dc39[_0x9391d7(0x8b5)](_0x476576[_0x9391d7(0x253)][_0x9391d7(0x493)], _0x9391d7(0x5de)), _0x476576[_0x9391d7(0x253)][_0x9391d7(0x493)] = _0x236a66 ? _0x9391d7(0x6de) : _0x9391d7(0x5de), _0x3c26a0[_0x9391d7(0x90b)](_0x9391d7(0x565))?.['classList'][_0x9391d7(0x960)](_0x9391d7(0x577), _0x236a66);
        });
        const _0x1105c4 = document[_0x273ebe(0x24c)](_0x273ebe(0x888));
        _0x1105c4 && (_0x1105c4[_0x273ebe(0x1ff)] = _0x3fee1e => {
            const _0x50fdc7 = _0x273ebe, _0x14532f = _0xe6dc39[_0x50fdc7(0x85e)][_0x50fdc7(0x3b6)]('|');
            let _0x75e627 = 0x0;
            while (!![]) {
                switch (_0x14532f[_0x75e627++]) {
                case '0':
                    _0x59e0bf[_0x50fdc7(0x964)] = _0x3fee1e[_0x50fdc7(0x283)][_0x50fdc7(0x1c1)];
                    continue;
                case '1':
                    _0x2aad15();
                    continue;
                case '2':
                    _0x124a19();
                    continue;
                case '3':
                    _0x40d4da(_0x59e0bf[_0x50fdc7(0x964)] ? _0x50fdc7(0x833) : '⚠️\x20Auto-Pause\x20on\x20Early\x20Discharge\x20disabled.');
                    continue;
                case '4':
                    if (_0x571c62 === _0xe6dc39[_0x50fdc7(0x41c)])
                        _0xe0a523[_0x50fdc7(0x38f)](_0x20538b => _0x561e23(_0x20538b));
                    continue;
                }
                break;
            }
        });
        const _0x37fd74 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x4e8)]);
        _0x37fd74 && (_0x37fd74[_0x273ebe(0x1ff)] = _0xe1e799 => {
            const _0x509504 = _0x273ebe;
            _0xe1e799[_0x509504(0x7a5)](), _0x59e0bf[_0x509504(0x278)] = _0xe1e799[_0x509504(0x283)][_0x509504(0x814)], _0x2aad15(), _0x40d4da(_0x59e0bf[_0x509504(0x278)] === _0x509504(0x7c5) ? _0x1f060e[_0x509504(0x4f2)] : _0x509504(0x6c8));
            if (_0x1f060e[_0x509504(0x360)](_0x571c62, 'targets'))
                _0xe0a523[_0x509504(0x38f)](_0x10971e => _0x561e23(_0x10971e));
        });
        const _0x1e48a4 = document[_0x273ebe(0x24c)](_0x273ebe(0x3d4));
        if (_0x1e48a4)
            _0x1e48a4[_0x273ebe(0x1ff)] = _0xb02eb3 => {
                const _0x47c639 = _0x273ebe;
                _0x59e0bf[_0x47c639(0x73f)] = _0xb02eb3[_0x47c639(0x283)][_0x47c639(0x1c1)], _0x2aad15();
            };
        const _0x2c56ca = document[_0x273ebe(0x24c)](_0x273ebe(0x432));
        if (_0x2c56ca)
            _0x2c56ca['onchange'] = _0x4bc6cd => {
                const _0x1884f4 = _0x273ebe;
                _0x59e0bf['alertOnTraderReady'] = _0x4bc6cd['target'][_0x1884f4(0x1c1)], _0x2aad15();
            };
        const _0x191c29 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x723)]);
        _0x191c29 && (_0x191c29[_0x273ebe(0x1ff)] = _0x2e4976 => {
            const _0x5bdf9f = _0x273ebe;
            _0x59e0bf['isTradersPaused'] = _0x2e4976[_0x5bdf9f(0x283)]['checked'], _0x1f060e['ZwING'](_0x2aad15), _0x383f8d(), _0x1f060e[_0x5bdf9f(0x91d)](_0x40d4da, _0x59e0bf[_0x5bdf9f(0x1ba)] ? _0x5bdf9f(0x65d) : _0x1f060e[_0x5bdf9f(0x31c)]);
        });
        const _0x2aeb9b = document[_0x273ebe(0x24c)]('toggle-alert-illegal');
        _0x2aeb9b && (_0x2aeb9b[_0x273ebe(0x1ff)] = _0x34d21b => {
            const _0x3e3d8e = _0x273ebe;
            _0x59e0bf[_0x3e3d8e(0x415)] = _0x34d21b[_0x3e3d8e(0x283)]['checked'], _0x2aad15(), _0x1f060e[_0x3e3d8e(0x9d0)](_0x40d4da, _0x59e0bf['alertOnIllegalHit'] ? _0x3e3d8e(0x8fe) : '⚠️\x20Illegal\x20Hit\x20Alarm\x20DISABLED.');
        });
        const _0x2ff104 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x87c)]);
        _0x2ff104 && (_0x2ff104[_0x273ebe(0x1ff)] = _0xe50eeb => {
            const _0x143831 = _0x273ebe;
            _0x59e0bf[_0x143831(0x8ae)] = _0xe50eeb[_0x143831(0x283)][_0x143831(0x1c1)], _0x1f060e['DOahg'](_0x2aad15), _0x40d4da(_0x59e0bf[_0x143831(0x8ae)] ? _0x143831(0x5ac) : _0x1f060e['FERZE']);
        });
        const _0x27b91b = document['getElementById'](_0x273ebe(0x301));
        _0x27b91b && (_0x27b91b[_0x273ebe(0x606)] = () => {
            const _0x3ef8f3 = _0x273ebe;
            _0xe6dc39[_0x3ef8f3(0x328)](_0xa48a1d, _0x3ef8f3(0x9be));
            const _0x1d308d = {};
            _0x1d308d['id'] = _0x3ef8f3(0x72c), _0x1d308d[_0x3ef8f3(0x589)] = _0x3ef8f3(0x6d4);
            const _0x555b26 = {
                    'targetId': _0xe6dc39[_0x3ef8f3(0x587)],
                    'target': {
                        'name': _0x3ef8f3(0x938),
                        'level': 0x2a,
                        'factionId': 0x2090,
                        'factionName': _0x3ef8f3(0x95e),
                        'state': _0xe6dc39['CcNqk'],
                        'desc': _0x3ef8f3(0x6df),
                        'details': _0x3ef8f3(0x3d9),
                        'until': _0xe6dc39['noEht'](Math[_0x3ef8f3(0x306)](Date[_0x3ef8f3(0x903)]() / 0x3e8), 0x690),
                        'online': _0xe6dc39[_0x3ef8f3(0x835)],
                        'lastActionRel': _0x3ef8f3(0x3cb),
                        'lastActionTs': Math[_0x3ef8f3(0x306)](_0xe6dc39[_0x3ef8f3(0x69f)](Date[_0x3ef8f3(0x903)](), 0x3e8)) - 0x348,
                        'warActive': !![]
                    },
                    'previous': {
                        'name': _0x3ef8f3(0x938),
                        'state': _0xe6dc39[_0x3ef8f3(0x77f)],
                        'online': _0x3ef8f3(0x63c),
                        'lastActionRel': _0xe6dc39[_0x3ef8f3(0x36b)],
                        'lastActionTs': Math[_0x3ef8f3(0x306)](_0xe6dc39[_0x3ef8f3(0x54d)](Date[_0x3ef8f3(0x903)](), 0x3e8)) - 0x348,
                        'warActive': !![]
                    },
                    'attacker': _0x1d308d,
                    'violations': [
                        _0x3ef8f3(0x8c1),
                        _0xe6dc39[_0x3ef8f3(0x7ff)]
                    ],
                    'timestamp': Math['floor'](Date['now']() / 0x3e8),
                    'incidentId': _0x3ef8f3(0x93d) + Math[_0x3ef8f3(0x306)](Date[_0x3ef8f3(0x903)]() % 0x186a0)
                }, _0x50dcc4 = _0xe6dc39[_0x3ef8f3(0x3a2)](_0x4a63f5, _0x555b26);
            _0x50dcc4 && _0x33bfdd(_0x555b26, _0x50dcc4), _0x40d4da(_0x3ef8f3(0x94d));
        });
        const _0x5165fa = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x4be)]);
        _0x5165fa && (_0x5165fa[_0x273ebe(0x1ff)] = _0x511a06 => {
            const _0x1b0b7f = _0x273ebe;
            _0x59e0bf[_0x1b0b7f(0x82a)] = _0x511a06[_0x1b0b7f(0x283)][_0x1b0b7f(0x814)], _0x1f060e[_0x1b0b7f(0x410)](_0x2aad15), _0x1f060e[_0x1b0b7f(0x1fa)](_0x40d4da, _0x1f060e[_0x1b0b7f(0x633)](_0x59e0bf[_0x1b0b7f(0x82a)], _0x1b0b7f(0x8a5)) ? _0x1b0b7f(0x7fe) : _0x1f060e[_0x1b0b7f(0x9b3)]);
            if (_0x1f060e[_0x1b0b7f(0x430)](_0x571c62, 'targets'))
                _0xe0a523[_0x1b0b7f(0x38f)](_0x472464 => _0x561e23(_0x472464));
        });
        const _0x1a3d78 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x870)]);
        _0x1a3d78 && (_0x1a3d78[_0x273ebe(0x1ff)] = _0x41b82c => {
            const _0x361b78 = _0x273ebe;
            _0x41b82c[_0x361b78(0x7a5)](), _0x59e0bf['activeThresholdMin'] = _0x1f060e[_0x361b78(0x3c5)](parseInt, _0x41b82c[_0x361b78(0x283)]['value'], 0xa), _0x2aad15(), _0x40d4da(_0x59e0bf[_0x361b78(0x586)] === -0x1 ? _0x361b78(0x758) : _0x361b78(0x5fa) + _0x59e0bf[_0x361b78(0x586)] + _0x361b78(0x51a));
            if (_0x571c62 === _0x1f060e[_0x361b78(0x1df)])
                _0xe0a523[_0x361b78(0x38f)](_0x4669b5 => _0x561e23(_0x4669b5));
        });
        const _0x29ec5a = document['getElementById']('toggle-alert-landing');
        if (_0x29ec5a)
            _0x29ec5a[_0x273ebe(0x1ff)] = _0x3f153e => {
                const _0x2888ba = _0x273ebe;
                _0x59e0bf['alertOnLanding'] = _0x3f153e[_0x2888ba(0x283)][_0x2888ba(0x1c1)], _0x1f060e[_0x2888ba(0x745)](_0x2aad15);
            };
        const _0x3786fb = document[_0x273ebe(0x24c)](_0x1f060e['SQhGs']);
        if (_0x3786fb)
            _0x3786fb[_0x273ebe(0x1ff)] = _0x3f927b => {
                const _0x2e5087 = _0x273ebe;
                _0x59e0bf['alertOnFullHp'] = _0x3f927b['target']['checked'], _0x1f060e[_0x2e5087(0x77d)](_0x2aad15);
            };
        const _0x34aea0 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x60d)]);
        _0x34aea0 && (_0x34aea0[_0x273ebe(0x1ff)] = _0x389833 => {
            const _0x39da26 = _0x273ebe;
            _0x59e0bf[_0x39da26(0x337)] = _0x389833[_0x39da26(0x283)][_0x39da26(0x1c1)], _0x2aad15();
            if (_0x389833[_0x39da26(0x283)]['checked'])
                _0x1f060e[_0x39da26(0x2ff)](_0xa48a1d, _0x1f060e['JKOru']);
        });
        const _0x2f2488 = document[_0x273ebe(0x24c)](_0x1f060e['lnEwY']);
        _0x2f2488 && (_0x2f2488[_0x273ebe(0x1ff)] = _0x4e532c => {
            const _0x4ed612 = _0x273ebe;
            _0x59e0bf['alertOnDrugCooldown'] = _0x4e532c[_0x4ed612(0x283)][_0x4ed612(0x1c1)], _0x2aad15();
            if (_0x4e532c[_0x4ed612(0x283)]['checked'])
                _0xa48a1d(_0x4ed612(0x377));
        });
        const _0x3f1e9e = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x6d7)]);
        _0x3f1e9e && (_0x3f1e9e[_0x273ebe(0x1ff)] = _0x2bf3d0 => {
            const _0x3c1a64 = _0x273ebe;
            _0x59e0bf[_0x3c1a64(0x84d)] = _0x2bf3d0[_0x3c1a64(0x283)][_0x3c1a64(0x1c1)], _0x2aad15(), _0x281843();
        });
        const _0x395e95 = document[_0x273ebe(0x24c)](_0x1f060e['GVmjc']);
        _0x395e95 && (_0x395e95[_0x273ebe(0x1ff)] = _0x50e1a6 => {
            const _0x227ad9 = _0x273ebe;
            _0x59e0bf[_0x227ad9(0x963)] = _0x50e1a6[_0x227ad9(0x283)][_0x227ad9(0x1c1)], _0x2aad15();
            if (_0x50e1a6[_0x227ad9(0x283)]['checked'])
                _0xa48a1d(_0x227ad9(0x377));
        });
        const _0x5b03f6 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x2d0)]);
        _0x5b03f6 && (_0x5b03f6['onchange'] = _0x1c11f3 => {
            const _0x29ba2c = _0x273ebe, _0xa3558f = parseInt(_0x1c11f3[_0x29ba2c(0x283)][_0x29ba2c(0x814)], 0xa);
            _0xe6dc39[_0x29ba2c(0x7f3)](_0xa3558f, 0x0) && (_0x59e0bf[_0x29ba2c(0x8cd)] = _0xa3558f, _0x2aad15(), _0xe6dc39[_0x29ba2c(0x5d7)](_0x40d4da, _0x29ba2c(0x21a) + _0xa3558f));
        });
        const _0x4739a0 = document[_0x273ebe(0x24c)](_0x273ebe(0x55d));
        _0x4739a0 && (_0x4739a0[_0x273ebe(0x606)] = () => {
            const _0x5aae17 = _0x273ebe, _0x15974e = parseInt(_0x5b03f6 ? _0x5b03f6[_0x5aae17(0x814)] : _0x59e0bf[_0x5aae17(0x8cd)], 0xa) || 0x3e8fa0;
            _0x59e0bf[_0x5aae17(0x8cd)] = _0x15974e, _0x59e0bf[_0x5aae17(0x60b)] = _0x15974e, _0x1f060e[_0x5aae17(0x708)](_0x2aad15);
            const _0x30580c = document[_0x5aae17(0x24c)](_0x5aae17(0x7c4));
            if (_0x30580c)
                _0x30580c[_0x5aae17(0x814)] = _0x15974e;
            if (_0x1d0e3e)
                _0x1d0e3e[_0x5aae17(0x814)] = _0x15974e;
            _0x281843(), _0x1f060e['rrkeJ'](_0x40d4da, _0x5aae17(0x475) + _0x15974e + _0x5aae17(0x3ad) + _0x15974e + ')');
        });
        const _0x10020d = document[_0x273ebe(0x24c)](_0x273ebe(0x7c4));
        _0x10020d && (_0x10020d[_0x273ebe(0x1ff)] = _0x8370a6 => {
            const _0x524c3b = _0x273ebe, _0x55e795 = parseInt(_0x8370a6['target'][_0x524c3b(0x814)], 0xa);
            if (_0x55e795 > 0x0) {
                _0x59e0bf[_0x524c3b(0x60b)] = _0x55e795, _0x59e0bf[_0x524c3b(0x1f4)] = _0x55e795, _0x1f060e[_0x524c3b(0x410)](_0x2aad15);
                if (_0x1d0e3e)
                    _0x1d0e3e['value'] = _0x55e795;
                _0x1f060e[_0x524c3b(0x683)](_0x281843);
            }
        });
        const _0x26ad9c = document[_0x273ebe(0x24c)](_0x273ebe(0x1ef));
        _0x26ad9c && (_0x26ad9c[_0x273ebe(0x606)] = () => {
            const _0x4a96fd = _0x273ebe;
            let _0x253fd2 = _0x1f060e[_0x4a96fd(0x1be)](parseInt, _0x59e0bf[_0x4a96fd(0x60b)], 0xa) || 0x3e8fa0;
            if (_0x253fd2 > 0x1) {
                _0x59e0bf['chainTargetCurrentId'] = _0x1f060e[_0x4a96fd(0x887)](_0x253fd2, 0x1), _0x59e0bf['chainManualNextId'] = _0x253fd2 - 0x1, _0x1f060e[_0x4a96fd(0x4a2)](_0x2aad15);
                if (_0x10020d)
                    _0x10020d[_0x4a96fd(0x814)] = _0x59e0bf['chainTargetCurrentId'];
                if (_0x1d0e3e)
                    _0x1d0e3e[_0x4a96fd(0x814)] = _0x59e0bf['chainTargetCurrentId'];
                _0x1f060e['hXfuG'](_0x281843);
            }
        });
        const _0x5579c2 = document[_0x273ebe(0x24c)](_0x273ebe(0x1f6));
        _0x5579c2 && (_0x5579c2[_0x273ebe(0x606)] = () => {
            const _0x4d3d55 = _0x273ebe;
            let _0x515b1e = _0xe6dc39[_0x4d3d55(0x48e)](parseInt, _0x59e0bf['chainTargetCurrentId'], 0xa) || 0x3e8fa0;
            _0x59e0bf[_0x4d3d55(0x60b)] = _0xe6dc39[_0x4d3d55(0x861)](_0x515b1e, 0x1), _0x59e0bf['chainManualNextId'] = _0x515b1e + 0x1, _0x2aad15();
            if (_0x10020d)
                _0x10020d[_0x4d3d55(0x814)] = _0x59e0bf[_0x4d3d55(0x60b)];
            if (_0x1d0e3e)
                _0x1d0e3e[_0x4d3d55(0x814)] = _0x59e0bf['chainTargetCurrentId'];
            _0x281843();
        });
        const _0x5007db = document[_0x273ebe(0x24c)](_0x273ebe(0x237));
        _0x5007db && (_0x5007db[_0x273ebe(0x606)] = () => {
            const _0x3e8681 = _0x273ebe;
            _0x59e0bf[_0x3e8681(0x60b)] = _0x59e0bf[_0x3e8681(0x8cd)] || 0x3e8fa0, _0x1f060e[_0x3e8681(0x7b6)](_0x2aad15);
            if (_0x10020d)
                _0x10020d[_0x3e8681(0x814)] = _0x59e0bf['chainTargetCurrentId'];
            if (_0x1d0e3e)
                _0x1d0e3e[_0x3e8681(0x814)] = _0x59e0bf[_0x3e8681(0x60b)];
            _0x281843(), _0x40d4da(_0x3e8681(0x55b) + _0x59e0bf[_0x3e8681(0x60b)]);
        });
        const _0xdb0d81 = document[_0x273ebe(0x24c)](_0x273ebe(0x93b));
        if (_0xdb0d81)
            _0xdb0d81[_0x273ebe(0x1ff)] = _0x3f3f7e => {
                const _0x18ecd0 = _0x273ebe;
                _0x59e0bf[_0x18ecd0(0x540)] = _0x3f3f7e[_0x18ecd0(0x283)][_0x18ecd0(0x1c1)], _0x1f060e['xxTHB'](_0x2aad15);
            };
        const _0xb48f79 = document[_0x273ebe(0x24c)]('stakeout-vol-slider'), _0x4ce25b = document[_0x273ebe(0x24c)]('stakeout-vol-label');
        _0xb48f79 && _0x4ce25b && (_0xb48f79[_0x273ebe(0x4a5)] = _0x31b505 => {
            const _0x5a6d8 = _0x273ebe, _0x13b799 = _0xe6dc39[_0x5a6d8(0x48e)](parseInt, _0x31b505[_0x5a6d8(0x283)]['value'], 0xa);
            _0x59e0bf['alarmVolume'] = _0x13b799 / 0x64, _0x4ce25b[_0x5a6d8(0x86b)] = _0x13b799 + '%', _0x2aad15();
        });
        const _0x4004d7 = document[_0x273ebe(0x24c)](_0x273ebe(0x70b));
        _0x4004d7 && (_0x4004d7[_0x273ebe(0x1ff)] = _0x2888f7 => {
            const _0x364138 = _0x273ebe;
            _0x59e0bf[_0x364138(0x481)] = _0x2888f7[_0x364138(0x283)][_0x364138(0x814)], _0xe6dc39[_0x364138(0x5f3)](_0x2aad15), _0xe6dc39[_0x364138(0x6db)](_0xa48a1d, _0x364138(0x5eb));
        });
        const _0x21811e = document[_0x273ebe(0x24c)](_0x273ebe(0x639));
        _0x21811e && (_0x21811e[_0x273ebe(0x1ff)] = _0x46e43d => {
            const _0x581873 = _0x273ebe;
            _0x59e0bf[_0x581873(0x510)] = _0x46e43d[_0x581873(0x283)][_0x581873(0x1c1)], _0xe6dc39[_0x581873(0x797)](_0x2aad15), _0x46e43d[_0x581873(0x283)][_0x581873(0x1c1)] && Notification['permission'] !== _0xe6dc39['GqjmO'] && Notification[_0x581873(0x7a0)]();
        });
        const _0x19fd16 = document[_0x273ebe(0x24c)](_0x273ebe(0x9c8));
        if (_0x19fd16)
            _0x19fd16[_0x273ebe(0x1ff)] = _0x1913a4 => {
                const _0x474f2c = _0x273ebe;
                _0x59e0bf[_0x474f2c(0x5a7)] = _0x1913a4['target']['checked'], _0x2aad15();
            };
        const _0x240801 = document[_0x273ebe(0x24c)](_0x273ebe(0x555));
        _0x240801 && (_0x240801[_0x273ebe(0x1ff)] = _0x8f3a7f => {
            const _0x526ade = _0x273ebe;
            _0x59e0bf[_0x526ade(0x3c8)] = _0x8f3a7f[_0x526ade(0x283)][_0x526ade(0x814)], _0x1f060e[_0x526ade(0x709)](_0x2aad15), _0x1f060e[_0x526ade(0x651)](_0x5c4f3b), _0x1f060e['AfhUo'](_0x40d4da, _0x526ade(0x38e) + (_0x1f060e['mwmiJ'](_0x59e0bf[_0x526ade(0x3c8)], _0x526ade(0x231)) ? _0x1f060e[_0x526ade(0x8c8)] : _0x526ade(0x773)) + '\x20side.');
        });
        const _0x47b693 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x5ef)]);
        if (_0x47b693)
            _0x47b693[_0x273ebe(0x606)] = () => _0x130af7();
        const _0x220a65 = document[_0x273ebe(0x24c)](_0x273ebe(0x6ac));
        if (_0x220a65)
            _0x220a65['onclick'] = () => _0xa48a1d('test');
        const _0x576676 = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x3cf)]);
        if (_0x576676)
            _0x576676[_0x273ebe(0x606)] = () => _0xa48a1d(_0x273ebe(0x377));
        const _0x5563c9 = document[_0x273ebe(0x24c)](_0x273ebe(0x1f0));
        if (_0x5563c9)
            _0x5563c9[_0x273ebe(0x606)] = () => _0xa48a1d(_0x273ebe(0x599));
        const _0xff05ee = document[_0x273ebe(0x24c)](_0x1f060e[_0x273ebe(0x6f1)]);
        if (_0xff05ee)
            _0xff05ee[_0x273ebe(0x606)] = () => _0x1cb3eb(!![]);
        const _0x144204 = document[_0x273ebe(0x24c)](_0x273ebe(0x58f)), _0x19b514 = document['getElementById'](_0x273ebe(0x74e));
        if (_0x19b514 && _0x144204) {
            const _0x3ad386 = () => {
                const _0x7c507 = _0x273ebe, _0x31f9ba = _0x144204[_0x7c507(0x814)]['trim']();
                if (!_0x31f9ba)
                    return;
                const _0x2f8356 = _0x31f9ba[_0x7c507(0x772)](/(?:XID=|user2ID=|[?&]ID=|^)(\d+)/i), _0x42ea2e = _0x2f8356 ? _0x2f8356[0x1] : _0x1f060e[_0x7c507(0x1fa)](isNaN, _0x31f9ba) ? null : _0x31f9ba;
                if (_0x42ea2e) {
                    if (_0x1f060e[_0x7c507(0x28a)](_0x571c62, _0x7c507(0x463)))
                        _0x1f060e['rrkeJ'](_0x543c8a, _0x42ea2e);
                    else
                        _0x1f060e['JrHRT'](_0x571c62, _0x1f060e[_0x7c507(0x4dc)]) ? _0x1f060e['njPpH'](_0x154ee3, _0x42ea2e) : _0x50dc54(_0x42ea2e);
                    _0x144204['value'] = '';
                } else
                    _0x40d4da('⚠️\x20Invalid\x20player\x20ID\x20or\x20profile\x20link!');
            };
            _0x19b514[_0x273ebe(0x606)] = _0x3ad386, _0x144204['onkeydown'] = _0x146931 => {
                const _0x50205c = _0x273ebe;
                if (_0x146931[_0x50205c(0x92f)] === _0x50205c(0x61a))
                    _0x3ad386();
            };
        }
        if (_0x571c62 === _0x1f060e[_0x273ebe(0x1df)])
            _0xe0a523[_0x273ebe(0x38f)](_0x13fe59 => _0x561e23(_0x13fe59));
        else
            _0x1f060e[_0x273ebe(0x8ff)](_0x571c62, _0x273ebe(0x509)) ? (_0x1f060e['KYkkX'](_0x327d34, document[_0x273ebe(0x24c)](_0x273ebe(0x601))), _0x2fc985[_0x273ebe(0x38f)](_0xa4dcde => _0x47cfc9(_0xa4dcde['id']))) : _0x23e34f[_0x273ebe(0x38f)](_0x44e242 => _0x12d7fe(_0x44e242));
        _0xb8d993(), _0x281843();
        const _0x38f4bd = {};
        _0x38f4bd[_0x273ebe(0x8c5)] = ![], _0x38f4bd[_0x273ebe(0x8de)] = _0x59e0bf[_0x273ebe(0x3c8)];
        const _0x7959c8 = {};
        _0x7959c8[_0x273ebe(0x986)] = _0x38f4bd, window[_0x273ebe(0x2ad)](new CustomEvent(_0x273ebe(0x39e), _0x7959c8));
    }
    function _0x124a19() {
        const _0x2710fc = _0x45c9c2;
        if (!_0x59e0bf[_0x2710fc(0x8c5)])
            return;
        _0x383f8d();
    }
    function _0x2d45f4(_0x22a11a) {
        const _0x5c9bd5 = _0x45c9c2;
        if (_0x22a11a <= 0x0)
            return _0x5c9bd5(0x4e9);
        if (_0x1f060e['UVTrg'](_0x22a11a, 0x3c))
            return _0x22a11a + 's';
        const _0x49d1b5 = Math[_0x5c9bd5(0x306)](_0x22a11a / 0x3c), _0x142b6 = Math[_0x5c9bd5(0x306)](_0x1f060e[_0x5c9bd5(0x241)](_0x49d1b5, 0x3c)), _0x415c43 = _0x49d1b5 % 0x3c, _0x34ed96 = _0x22a11a % 0x3c;
        if (_0x1f060e[_0x5c9bd5(0x44e)](_0x142b6, 0x0))
            return _0x142b6 + 'h\x20' + _0x415c43 + 'm\x20' + (_0x34ed96 < 0xa ? '0' : '') + _0x34ed96 + 's';
        return _0x415c43 + 'm\x20' + (_0x34ed96 < 0xa ? '0' : '') + _0x34ed96 + 's';
    }
    function _0x5cfe07(_0x1c5c54) {
        const _0x2cd68a = _0x45c9c2;
        if (_0x1c5c54 <= 0x0)
            return '0m';
        if (_0x1c5c54 < 0xe10)
            return Math[_0x2cd68a(0x885)](_0x1f060e[_0x2cd68a(0x308)](_0x1c5c54, 0x3c)) + 'm';
        const _0x5302d = _0x1f060e['KDWoT'](_0x1c5c54, 0xe10)['toFixed'](0x1);
        return _0x5302d + 'h';
    }
    function _0x561e23(_0x48003b) {
        const _0x4567f2 = _0x45c9c2, _0x281696 = {
                'VuAgY': function (_0x190f00, _0x3d9ef7, _0x301ebe) {
                    return _0x190f00(_0x3d9ef7, _0x301ebe);
                },
                'JeeHN': function (_0x852819, _0x542bef) {
                    const _0x49d4c5 = _0xf22e;
                    return _0x1f060e[_0x49d4c5(0x45d)](_0x852819, _0x542bef);
                },
                'eYqHv': function (_0x3555c2, _0x1f3e46) {
                    const _0x3ce97d = _0xf22e;
                    return _0x1f060e[_0x3ce97d(0x899)](_0x3555c2, _0x1f3e46);
                },
                'fSrAv': function (_0x4e06ba, _0x11c8bf, _0x5bf8e3) {
                    return _0x4e06ba(_0x11c8bf, _0x5bf8e3);
                },
                'zAFZO': function (_0x305101, _0x4a6f04) {
                    const _0x13810d = _0xf22e;
                    return _0x1f060e[_0x13810d(0x3f7)](_0x305101, _0x4a6f04);
                },
                'tLJwl': _0x1f060e[_0x4567f2(0x5f2)],
                'kuhUg': function (_0x8428fb, _0x3539a8) {
                    return _0x1f060e['BIfUM'](_0x8428fb, _0x3539a8);
                },
                'GAGHn': function (_0x49e94a, _0x50dff8) {
                    return _0x49e94a === _0x50dff8;
                },
                'BuWGr': _0x1f060e['LGSrW']
            }, _0x14b48b = document[_0x4567f2(0x24c)](_0x4567f2(0x344) + _0x48003b);
        if (!_0x14b48b)
            return;
        const _0x317a95 = _0x167784[_0x48003b];
        if (!_0x317a95 || !_0x317a95['data']) {
            const _0x24f7ed = _0x4567f2(0x72d) + _0x48003b + _0x4567f2(0x1ce) + _0x48003b + '\x22>✕</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2010px;\x20color:\x20#94a3b8;\x20font-family:\x20monospace;\x22>Scanning\x20telemetry...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            if (_0x14b48b[_0x4567f2(0x63e)][_0x4567f2(0x513)] !== 'pending_' + _0x48003b) {
                _0x14b48b[_0x4567f2(0x63e)][_0x4567f2(0x513)] = _0x4567f2(0x59f) + _0x48003b, _0x14b48b[_0x4567f2(0x75a)] = _0x24f7ed;
                const _0x3b6ddf = _0x14b48b['querySelector'](_0x4567f2(0x7db) + _0x48003b + '\x22]');
                if (_0x3b6ddf)
                    _0x3b6ddf[_0x4567f2(0x606)] = () => _0x4795ff(_0x48003b);
            }
            return;
        }
        const _0x56a5b0 = _0x317a95[_0x4567f2(0x4c4)], _0x9c3ea0 = Math[_0x4567f2(0x306)](Date[_0x4567f2(0x903)]() / 0x3e8), _0x272f28 = _0x56a5b0['until'] > _0x9c3ea0 ? _0x56a5b0[_0x4567f2(0x3b0)] - _0x9c3ea0 : 0x0, _0x32535a = _0x1f060e[_0x4567f2(0x5aa)](_0x56a5b0['state'], _0x4567f2(0x8b7)) && _0x56a5b0[_0x4567f2(0x3b0)] > 0x0 && _0x9c3ea0 >= _0x56a5b0['until'] ? _0x9c3ea0 - _0x56a5b0[_0x4567f2(0x3b0)] : 0x0, _0x8b8789 = _0x2d45f4(_0x272f28), _0x368779 = _0x1f060e[_0x4567f2(0x641)](_0x272f28, 0x0) ? Math['floor'](_0x1f060e[_0x4567f2(0x241)](_0x272f28, 0xe10)) + 'h\x20' + Math[_0x4567f2(0x306)](_0x272f28 % 0xe10 / 0x3c) + 'm\x20' + _0x272f28 % 0x3c + 's' : _0x1f060e[_0x4567f2(0x305)](_0x32535a, 0x0) ? _0x4567f2(0x43b) + _0x32535a + 's).\x20Awaiting\x20Torn\x20cron\x20tick.' : _0x4567f2(0x1b8), _0x290e09 = _0x1f060e[_0x4567f2(0x30b)](_0x266a19, _0x48003b), _0x3f7775 = parseInt(_0x4285dc[_0x48003b]?.[_0x4567f2(0x2f8)], 0xa) || 0x0, _0x35e452 = _0x4ffd01(_0x48003b), _0x48bad1 = _0x1f060e[_0x4567f2(0x291)](_0x56a5b0['state'], _0x4567f2(0x8b7)) && _0x272f28 <= 0x3c && !_0x290e09, _0xc29d03 = _0x463d9e(_0x56a5b0, _0x9c3ea0, _0x48003b), _0x2dbf22 = _0x323a30(_0x56a5b0), _0x36256c = _0x38a8d1(_0x56a5b0, _0x9c3ea0, _0x48003b), _0x1c11b4 = { 'isPro': _0x1f060e[_0x4567f2(0x621)](_0x32bfce, 'sp') }, _0x12d682 = (_0x59e0bf['alertOnIllegalHit'] || _0x59e0bf[_0x4567f2(0x8ae)]) && Boolean(_0x2eac6a[_0x48003b]), _0x2842eb = _0x1f060e['wpKxo'](_0x40ab66, _0x56a5b0, _0x48003b), _0x2d416b = _0x1f060e[_0x4567f2(0x478)](_0x687f46, _0x48003b, _0x56a5b0), _0x1339d7 = _0x56a5b0[_0x4567f2(0x2ed)] + '_' + _0x56a5b0[_0x4567f2(0x61b)] + '_' + _0x56a5b0[_0x4567f2(0x438)] + '_' + _0x56a5b0[_0x4567f2(0x8ce)] + '_' + _0x290e09 + '_' + _0x35e452 + '_' + _0x48bad1 + '_' + _0x59e0bf[_0x4567f2(0x82a)] + '_' + _0x56a5b0[_0x4567f2(0x232)] + '_' + _0x2842eb + '_' + _0x2d416b + '_' + _0x59e0bf[_0x4567f2(0x964)] + '_' + _0xc29d03 + '_' + _0x2dbf22 + '_' + _0x36256c + '_' + _0x1c11b4[_0x4567f2(0x5c3)] + '_' + _0x12d682, _0x544b24 = _0x14b48b[_0x4567f2(0x3fe)](_0x1f060e[_0x4567f2(0x4eb)]), _0x167a59 = _0x14b48b[_0x4567f2(0x417)](document[_0x4567f2(0x4f5)]), _0x545854 = _0x544b24 || _0x167a59;
        if (_0x14b48b[_0x4567f2(0x63e)][_0x4567f2(0x513)] === _0x1339d7 || _0x545854) {
            const _0x1d94ab = _0x14b48b[_0x4567f2(0x1e3)](_0x1f060e[_0x4567f2(0x962)]);
            if (_0x1d94ab) {
                if (_0x1f060e[_0x4567f2(0x8d2)](_0x56a5b0[_0x4567f2(0x2ed)], _0x4567f2(0x8b7)))
                    _0x1d94ab['textContent'] = _0x48bad1 ? _0x1f060e[_0x4567f2(0x7de)](_0x32535a, 0x0) ? '⚡\x20Hosp:\x20Ready\x20(+' + _0x32535a + 's)' : _0x4567f2(0x2b3) + _0x8b8789 : _0x4567f2(0x5ce) + _0x8b8789, _0x1d94ab['title'] = _0x368779;
                else
                    _0x1f060e[_0x4567f2(0x1e7)](_0x56a5b0[_0x4567f2(0x2ed)], _0x4567f2(0x4a6)) && (_0x1d94ab[_0x4567f2(0x86b)] = '🚔\x20Jail:\x20' + _0x8b8789, _0x1d94ab[_0x4567f2(0x2ca)] = _0x4567f2(0x60c) + _0x368779);
            }
            const _0x23b199 = _0x14b48b['querySelector'](_0x1f060e[_0x4567f2(0x868)]);
            _0x23b199 && _0x1f060e[_0x4567f2(0x291)](_0x56a5b0[_0x4567f2(0x2ed)], 'Traveling') && (_0x23b199['textContent'] = _0x4567f2(0x40d) + (_0x56a5b0[_0x4567f2(0x40a)] || _0x1f060e[_0x4567f2(0x268)]) + '\x20(' + _0x8b8789 + ')', _0x23b199[_0x4567f2(0x2ca)] = _0x4567f2(0x60c) + _0x368779);
            const _0x47fc1c = _0x14b48b['querySelector'](_0x4567f2(0x62c) + _0x48003b + '\x22]');
            if (_0x47fc1c) {
                const _0x3ef5a9 = _0x47fc1c[_0x4567f2(0x1e3)](_0x1f060e[_0x4567f2(0x4bf)]);
                if (_0x3ef5a9) {
                    if (_0x56a5b0[_0x4567f2(0x2ed)] === _0x1f060e[_0x4567f2(0x6fa)])
                        _0x3ef5a9[_0x4567f2(0x86b)] = _0x1f060e[_0x4567f2(0x775)](_0x32535a, 0x0) ? '🔒\x20In\x20Hosp:\x20Release\x20Pending\x20(+' + _0x32535a + 's)' : _0x4567f2(0x64f) + _0x8b8789;
                    else {
                        if (_0x56a5b0[_0x4567f2(0x2ed)] === _0x1f060e[_0x4567f2(0x268)])
                            _0x3ef5a9['textContent'] = _0x4567f2(0x94a) + _0x8b8789 + ')';
                        else
                            _0x56a5b0['state'] === _0x4567f2(0x4a6) && (_0x3ef5a9[_0x4567f2(0x86b)] = _0x4567f2(0x519) + _0x8b8789);
                    }
                }
            }
            return;
        }
        _0x14b48b[_0x4567f2(0x63e)][_0x4567f2(0x513)] = _0x1339d7, _0x14b48b[_0x4567f2(0x96f)] = _0x4567f2(0x731) + (_0xc29d03 ? _0x4567f2(0x648) : _0x48bad1 ? _0x4567f2(0x353) : '') + '\x20' + (_0x290e09 ? _0x1f060e[_0x4567f2(0x3f4)] : ''), _0x14b48b[_0x4567f2(0x2ca)] = _0x290e09 ? _0x1f060e['IlSYO'] : _0x1f060e[_0x4567f2(0x78e)];
        let _0x404686 = '';
        _0x290e09 && (_0x404686 += _0x4567f2(0x7df) + _0x48003b + _0x4567f2(0x857));
        (_0x59e0bf[_0x4567f2(0x415)] || _0x59e0bf[_0x4567f2(0x8ae)]) && _0x2eac6a[_0x48003b] && (_0x404686 += '<button\x20type=\x22button\x22\x20class=\x22stakeout-status-pill\x20breach-pill\x22\x20data-view-breach=\x22' + _0x48003b + '\x22\x20title=\x22Illegal\x20hit\x20detected!\x20Click\x20to\x20view\x20forensic\x20evidence\x20card\x20&\x20report.\x22>🚨\x20BREACH\x20EVIDENCE</button>\x20');
        const _0xe96fc4 = _0x56a5b0[_0x4567f2(0x232)] ? _0x56a5b0[_0x4567f2(0x406)]?.[_0x4567f2(0x83e)] === _0x4567f2(0x373) ? 'Ranked\x20War\x20vs\x20' + (_0x56a5b0[_0x4567f2(0x406)][_0x4567f2(0x2fb)] || _0x1f060e[_0x4567f2(0x250)]) : _0x1f060e[_0x4567f2(0x6d9)](_0x56a5b0['warInfo']?.[_0x4567f2(0x83e)], _0x4567f2(0x5be)) ? _0x4567f2(0x1bd) + (_0x56a5b0[_0x4567f2(0x406)][_0x4567f2(0x212)] || _0x4567f2(0x7ef)) + ']' : _0x4567f2(0x90e) : '', _0x2ef9e8 = _0x34abd6(_0x56a5b0['wall']);
        let _0x1764dc = '';
        if (_0x1c11b4[_0x4567f2(0x5c3)] && _0x56a5b0['warActive']) {
            if (_0x56a5b0[_0x4567f2(0x406)]?.[_0x4567f2(0x83e)] === _0x4567f2(0x373))
                _0x1764dc = '<span\x20class=\x22stakeout-status-pill\x20ed-on\x22\x20title=\x22Early\x20Discharge:\x20GUARANTEED\x20(' + _0xe96fc4 + _0x4567f2(0x9bd) + (_0x56a5b0[_0x4567f2(0x529)] ? _0x4567f2(0x6dc) + (_0x2ef9e8 ? '\x20(' + _0x2ef9e8 + ')' : '') + '.' : '') + _0x4567f2(0x815) + (_0x56a5b0[_0x4567f2(0x529)] ? _0x1f060e[_0x4567f2(0x4d2)] : '') + '</span>';
            else
                _0x56a5b0[_0x4567f2(0x406)]?.[_0x4567f2(0x83e)] === _0x4567f2(0x5be) ? _0x2842eb ? _0x1764dc = _0x4567f2(0x569) + _0x48003b + _0x4567f2(0x7bb) + (_0x56a5b0['warInfo'][_0x4567f2(0x212)] || _0x1f060e[_0x4567f2(0x29a)]) + _0x4567f2(0x7da) + (_0x2ef9e8 ? '\x20(' + _0x2ef9e8 + ')' : '') + '\x20(⚡\x20ED\x20Active).\x20Contract\x20paused.' + (_0x56a5b0[_0x4567f2(0x529)] ? _0x1f060e[_0x4567f2(0x4d0)] : _0x1f060e[_0x4567f2(0x95a)]) + _0x4567f2(0x5ab) + (_0x2ef9e8 ? ':\x20' + _0x2ef9e8 : '') + _0x4567f2(0x5b3) : _0x1764dc = '<button\x20type=\x22button\x22\x20class=\x22stakeout-status-pill\x20ed-off-wall\x22\x20data-toggle-wall=\x22' + _0x48003b + _0x4567f2(0x7bb) + (_0x56a5b0['warInfo'][_0x4567f2(0x212)] || _0x4567f2(0x7ef)) + _0x4567f2(0x401) : _0x1764dc = '<span\x20class=\x22stakeout-status-pill\x20ed-on\x22\x20title=\x22Early\x20Discharge\x20Available\x22>⚡\x20ED</span>';
        }
        if (_0x56a5b0[_0x4567f2(0x2ed)] === _0x4567f2(0x8b7))
            _0x48bad1 ? _0x404686 += _0x4567f2(0x276) + _0x368779 + _0x4567f2(0x613) + (_0x32535a > 0x0 ? _0x4567f2(0x600) + _0x32535a + 's)' : _0x8b8789) + _0x4567f2(0x804) + (_0x1764dc ? '\x20' + _0x1764dc : '') + '\x20' : _0x404686 += _0x4567f2(0x20c) + _0x368779 + _0x4567f2(0x336) + _0x8b8789 + _0x4567f2(0x804) + (_0x1764dc ? '\x20' + _0x1764dc : '') + '\x20', _0x2842eb && _0x59e0bf[_0x4567f2(0x964)] && (_0x404686 += _0x4567f2(0x319));
        else {
            if (_0x56a5b0[_0x4567f2(0x2ed)] === 'Traveling') {
                _0x404686 += _0x4567f2(0x856) + _0x368779 + _0x4567f2(0x326) + (_0x56a5b0[_0x4567f2(0x40a)] || 'Traveling') + '\x20(' + _0x8b8789 + _0x4567f2(0x891);
                if (_0x56a5b0[_0x4567f2(0x232)] && _0x1764dc)
                    _0x404686 += _0x1764dc + '\x20';
            } else {
                if (_0x1f060e['tVHhk'](_0x56a5b0['state'], _0x1f060e[_0x4567f2(0x632)])) {
                    _0x404686 += _0x4567f2(0x5e8) + (_0x56a5b0['desc'] || _0x4567f2(0x8c7)) + _0x4567f2(0x74f);
                    if (_0x56a5b0['warActive'] && _0x1764dc)
                        _0x404686 += _0x1764dc + '\x20';
                } else {
                    if (_0x56a5b0[_0x4567f2(0x2ed)] === _0x4567f2(0x4a6))
                        _0x404686 += _0x4567f2(0x46d) + _0x368779 + _0x4567f2(0x93a) + _0x8b8789 + _0x4567f2(0x804) + (_0x1764dc ? '\x20' + _0x1764dc : '') + '\x20';
                    else {
                        if (_0x1c11b4[_0x4567f2(0x5c3)]) {
                            _0x36256c ? _0x404686 += _0x4567f2(0x92e) : _0x404686 += _0x4567f2(0x676) + (_0x35e452 === -0x1 ? _0x1f060e[_0x4567f2(0x98f)] : _0x35e452 + 'm') + _0x4567f2(0x62d);
                            if (_0x56a5b0[_0x4567f2(0x232)]) {
                                if (_0x1764dc)
                                    _0x404686 += _0x1764dc + '\x20';
                                _0x2842eb && _0x59e0bf[_0x4567f2(0x964)] && (_0x404686 += _0x4567f2(0x319));
                            }
                        } else
                            _0x404686 += _0x4567f2(0x8ad);
                    }
                }
            }
        }
        const _0x383ccf = _0x1c11b4[_0x4567f2(0x5c3)] ? _0x56a5b0[_0x4567f2(0x8ce)] === _0x1f060e[_0x4567f2(0x3d0)] ? _0x1f060e[_0x4567f2(0x4f9)] : _0x1f060e[_0x4567f2(0x59a)](_0x56a5b0['online'], _0x4567f2(0x697)) ? _0x4567f2(0x495) : 'offline' : _0x1f060e[_0x4567f2(0x505)], _0x1d703c = _0x1c11b4[_0x4567f2(0x5c3)] ? 'Status:\x20' + _0x56a5b0[_0x4567f2(0x8ce)] : _0x4567f2(0x48c);
        let _0x40756b = '';
        if (_0x56a5b0[_0x4567f2(0x84a)] < 0x19)
            _0x40756b = 'danger';
        else {
            if (_0x56a5b0[_0x4567f2(0x84a)] < 0x32)
                _0x40756b = _0x4567f2(0x542);
        }
        let _0xf66631 = '', _0x353adf = '';
        if (_0xc29d03) {
            const _0x339b = (_0x59e0bf[_0x4567f2(0x82a)] || _0x4567f2(0x5f9)) === _0x4567f2(0x8a5), _0x121adb = _0x339b ? _0x4567f2(0x396) + _0x48003b : 'https://www.torn.com/page.php?sid=attack&user2ID=' + _0x48003b, _0x1109a0 = _0x339b ? _0x4567f2(0x57e) : _0x1f060e[_0x4567f2(0x9c1)], _0x425ae0 = _0x339b ? _0x4567f2(0x793) + _0x56a5b0[_0x4567f2(0x589)] + _0x4567f2(0x6ed) : _0x4567f2(0x7a6) + _0x56a5b0[_0x4567f2(0x589)] + ']!';
            _0xf66631 = _0x4567f2(0x374) + _0x121adb + _0x4567f2(0x484) + (_0x290e09 ? _0x1f060e[_0x4567f2(0x915)] : _0x1f060e[_0x4567f2(0x4db)]) + _0x4567f2(0x490) + _0x425ae0 + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + _0x1109a0 + _0x4567f2(0x1b7);
        } else {
            if (_0x2842eb && _0x59e0bf[_0x4567f2(0x964)]) {
                const _0x2b7c33 = _0x56a5b0[_0x4567f2(0x406)]?.[_0x4567f2(0x83e)] === _0x1f060e['yXruv'] ? _0x4567f2(0x858) : _0x1f060e[_0x4567f2(0x3f1)];
                _0xf66631 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22stakeout-attack-btn\x20war-warning\x22\x20data-war-target=\x22' + _0x48003b + '\x22\x20title=\x22Target\x20has\x20active\x20Early\x20Discharge\x20(' + (_0x56a5b0['warInfo']?.['type'] || _0x1f060e[_0x4567f2(0x998)]) + _0x4567f2(0x4af) + _0x2b7c33 + _0x4567f2(0x97d);
            } else {
                let _0x1dba5b = '';
                if (!_0x2dbf22) {
                    if (_0x1f060e[_0x4567f2(0x3d3)](_0x56a5b0[_0x4567f2(0x2ed)], _0x4567f2(0x8b7)))
                        _0x1dba5b = _0x32535a > 0x0 ? '🔒\x20In\x20Hosp:\x20Release\x20Pending\x20(+' + _0x32535a + 's)' : _0x4567f2(0x64f) + _0x8b8789, _0x353adf = _0x4567f2(0x793) + _0x56a5b0[_0x4567f2(0x589)] + _0x4567f2(0x53e);
                    else {
                        if (_0x1f060e['tVHhk'](_0x56a5b0[_0x4567f2(0x2ed)], _0x1f060e[_0x4567f2(0x268)]))
                            _0x1dba5b = _0x4567f2(0x482) + _0x8b8789, _0x353adf = _0x4567f2(0x793) + _0x56a5b0[_0x4567f2(0x589)] + _0x4567f2(0x71f);
                        else {
                            if (_0x1f060e[_0x4567f2(0x5b7)](_0x56a5b0[_0x4567f2(0x2ed)], _0x4567f2(0x8c7)))
                                _0x1dba5b = _0x4567f2(0x5ea) + (_0x56a5b0[_0x4567f2(0x40a)] || _0x1f060e[_0x4567f2(0x848)]), _0x353adf = 'Target\x20[' + _0x56a5b0[_0x4567f2(0x589)] + _0x4567f2(0x552);
                            else
                                _0x56a5b0['state'] === _0x4567f2(0x4a6) ? (_0x1dba5b = _0x4567f2(0x519) + _0x8b8789, _0x353adf = _0x4567f2(0x793) + _0x56a5b0[_0x4567f2(0x589)] + ']\x20is\x20in\x20Jail!') : (_0x1dba5b = _0x4567f2(0x901), _0x353adf = 'Target\x20[' + _0x56a5b0[_0x4567f2(0x589)] + _0x4567f2(0x226));
                        }
                    }
                } else
                    !_0x36256c ? (_0x1dba5b = '🔒\x20Inactive\x20>\x20' + _0x35e452 + _0x4567f2(0x645) + _0x56a5b0[_0x4567f2(0x8ce)] + ')', _0x353adf = _0x4567f2(0x793) + _0x56a5b0[_0x4567f2(0x589)] + _0x4567f2(0x255) + _0x35e452 + 'm.') : (_0x1dba5b = _0x4567f2(0x7d9), _0x353adf = _0x4567f2(0x793) + _0x56a5b0['name'] + _0x4567f2(0x4da));
                _0xf66631 = _0x4567f2(0x70e) + _0x48003b + _0x4567f2(0x490) + _0x353adf + _0x4567f2(0x919) + _0x1dba5b + _0x4567f2(0x1d0);
            }
        }
        _0x14b48b['innerHTML'] = _0x4567f2(0x7d5) + _0x383ccf + '\x22\x20title=\x22' + _0x1d703c + _0x4567f2(0x6e4) + _0x48003b + _0x4567f2(0x55f) + _0x56a5b0[_0x4567f2(0x589)] + _0x4567f2(0x89c) + _0x48003b + _0x4567f2(0x8d7) + (_0x56a5b0[_0x4567f2(0x222)] > 0x0 ? _0x4567f2(0x42e) + _0x56a5b0[_0x4567f2(0x222)] + _0x4567f2(0x804) : '') + _0x4567f2(0x3d7) + (_0x56a5b0[_0x4567f2(0x666)] ? _0x4567f2(0x50f) + _0x56a5b0[_0x4567f2(0x666)] + '\x20[' + _0x56a5b0[_0x4567f2(0x8c0)] + _0x4567f2(0x8c2) + _0x56a5b0[_0x4567f2(0x666)] + _0x4567f2(0x804) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-card-header-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x1c11b4[_0x4567f2(0x5c3)] ? _0x4567f2(0x593) + _0x48003b + _0x4567f2(0x847) + (_0x3f7775 === 0x0 ? _0x1f060e[_0x4567f2(0x77b)] : '') + '>' + (_0x59e0bf['activeThresholdMin'] === -0x1 ? _0x4567f2(0x74c) : (_0x59e0bf[_0x4567f2(0x586)] || 0x5) + 'm') + _0x4567f2(0x61f) + (_0x1f060e[_0x4567f2(0x464)](_0x3f7775, 0x2) ? _0x4567f2(0x6c6) : '') + _0x4567f2(0x947) + (_0x1f060e[_0x4567f2(0x79b)](_0x3f7775, 0xa) ? _0x1f060e[_0x4567f2(0x77b)] : '') + _0x4567f2(0x34e) + (_0x3f7775 === 0xf ? _0x1f060e['kLobz'] : '') + _0x4567f2(0x8d0) + (_0x3f7775 === 0x1e ? _0x1f060e[_0x4567f2(0x77b)] : '') + _0x4567f2(0x2df) + (_0x1f060e[_0x4567f2(0x6d9)](_0x3f7775, 0x3c) ? 'selected' : '') + _0x4567f2(0x2ba) + (_0x3f7775 === -0x1 ? _0x1f060e['kLobz'] : '') + _0x4567f2(0x1b2) : _0x4567f2(0x865)) + _0x4567f2(0x4c6) + _0x48003b + _0x4567f2(0x439) + _0x404686 + _0x4567f2(0x225) + (_0x1c11b4[_0x4567f2(0x5c3)] ? _0x4567f2(0x4ee) + _0x56a5b0['hpCurr'][_0x4567f2(0x46e)]() + _0x4567f2(0x2f6) + _0x56a5b0[_0x4567f2(0x438)]['toLocaleString']() + '\x20(' + _0x56a5b0[_0x4567f2(0x84a)][_0x4567f2(0x894)](0x1) + _0x4567f2(0x70f) + (_0x56a5b0[_0x4567f2(0x261)] || _0x56a5b0[_0x4567f2(0x8ce)]) : _0x4567f2(0x4ee) + _0x56a5b0['hpCurr'][_0x4567f2(0x46e)]() + _0x4567f2(0x2f6) + _0x56a5b0[_0x4567f2(0x438)][_0x4567f2(0x46e)]() + '\x20(' + _0x56a5b0[_0x4567f2(0x84a)][_0x4567f2(0x894)](0x1) + _0x4567f2(0x23d)) + _0x4567f2(0x221) + _0x40756b + _0x4567f2(0x506) + _0x56a5b0[_0x4567f2(0x84a)] + _0x4567f2(0x210) + _0x56a5b0[_0x4567f2(0x84a)][_0x4567f2(0x894)](0x0) + '%' + (_0x1c11b4['isPro'] ? _0x4567f2(0x361) + (_0x56a5b0[_0x4567f2(0x261)] || _0x56a5b0[_0x4567f2(0x8ce)]) : '') + _0x4567f2(0x457) + _0xf66631 + _0x4567f2(0x588), _0x14b48b[_0x4567f2(0x764)] = _0x7f056b => {
            const _0x5e5dfc = _0x4567f2;
            if (_0x7f056b[_0x5e5dfc(0x283)][_0x5e5dfc(0x90b)](_0x5e5dfc(0x527)))
                return;
            _0x7f056b[_0x5e5dfc(0x29f)]();
            const _0x2147a0 = !_0x266a19(_0x48003b);
            _0x1f060e[_0x5e5dfc(0x585)](_0x53bb36, _0x48003b, _0x2147a0), _0x40d4da(_0x2147a0 ? _0x5e5dfc(0x978) + _0x56a5b0[_0x5e5dfc(0x589)] + _0x5e5dfc(0x3e0) : _0x5e5dfc(0x793) + _0x56a5b0['name'] + _0x5e5dfc(0x1c8)), _0x1f060e[_0x5e5dfc(0x4d8)](_0x5604ca), _0x1f060e[_0x5e5dfc(0x85f)](_0x561e23, _0x48003b), _0x124a19();
        };
        const _0x1db710 = _0x14b48b[_0x4567f2(0x1e3)](_0x4567f2(0x933) + _0x48003b + '\x22]');
        _0x1db710 && (_0x1db710[_0x4567f2(0x606)] = _0x3c670f => {
            const _0x319d4a = _0x4567f2;
            _0x3c670f[_0x319d4a(0x7a5)](), _0x53bb36(_0x48003b, ![]), _0x1f060e[_0x319d4a(0x2a0)](_0x40d4da, 'Target\x20[' + _0x56a5b0[_0x319d4a(0x589)] + ']\x20unmarked\x20from\x20Stricken.'), _0x5604ca(), _0x1f060e[_0x319d4a(0x312)](_0x561e23, _0x48003b), _0x124a19();
        });
        const _0x20562f = _0x14b48b[_0x4567f2(0x1e3)]('[data-target-limit=\x22' + _0x48003b + '\x22]');
        _0x20562f && (_0x20562f[_0x4567f2(0x799)] = _0x599ac6 => _0x599ac6[_0x4567f2(0x7a5)](), _0x20562f[_0x4567f2(0x606)] = _0x34b879 => _0x34b879['stopPropagation'](), _0x20562f['onchange'] = _0x247851 => {
            const _0x35cfdb = _0x4567f2;
            _0x247851[_0x35cfdb(0x7a5)]();
            const _0x3c6e6b = parseInt(_0x247851[_0x35cfdb(0x283)][_0x35cfdb(0x814)], 0xa);
            _0x281696[_0x35cfdb(0x575)](_0x35abb8, _0x48003b, _0x3c6e6b);
            const _0x4c7747 = _0x281696[_0x35cfdb(0x45c)](_0x4ffd01, _0x48003b);
            _0x40d4da(_0x281696[_0x35cfdb(0x2ef)](_0x4c7747, -0x1) ? '⏱️\x20Inactive\x20requirement\x20for\x20[' + _0x56a5b0['name'] + _0x35cfdb(0x99a) : _0x35cfdb(0x7ca) + _0x56a5b0['name'] + _0x35cfdb(0x1e2) + _0x4c7747 + _0x35cfdb(0x51a)), _0x14b48b['dataset'][_0x35cfdb(0x513)] = '', _0x281696[_0x35cfdb(0x45c)](_0x561e23, _0x48003b), _0x124a19();
        });
        const _0x15c336 = _0x14b48b[_0x4567f2(0x1e3)](_0x4567f2(0x8cf) + _0x48003b + '\x22]');
        _0x15c336 && (_0x15c336[_0x4567f2(0x799)] = _0x359f36 => _0x359f36[_0x4567f2(0x7a5)](), _0x15c336[_0x4567f2(0x606)] = _0x22e7b7 => {
            const _0x2586da = _0x4567f2;
            _0x22e7b7[_0x2586da(0x29f)](), _0x22e7b7['stopPropagation']();
            const _0x161c5d = _0x687f46(_0x48003b, _0x56a5b0), _0x2b84e7 = !_0x161c5d;
            _0x281696[_0x2586da(0x256)](_0x132656, _0x48003b, _0x2b84e7), _0x40d4da(_0x2b84e7 ? _0x2586da(0x5bb) + _0x56a5b0[_0x2586da(0x589)] + _0x2586da(0x46b) : _0x2586da(0x355) + _0x56a5b0[_0x2586da(0x589)] + ']\x20marked\x20as\x20OFF\x20WALL\x20(No\x20ED).\x20Attacks\x20enabled!'), _0x14b48b[_0x2586da(0x63e)][_0x2586da(0x513)] = '', _0x561e23(_0x48003b), _0x124a19();
        });
        const _0x228626 = _0x14b48b[_0x4567f2(0x1e3)](_0x4567f2(0x36a) + _0x48003b + '\x22]');
        _0x228626 && (_0x228626[_0x4567f2(0x606)] = _0x5722c0 => {
            const _0x43521d = _0x4567f2;
            _0x5722c0[_0x43521d(0x29f)](), _0x5722c0['stopPropagation']();
            const _0x17accb = _0x281696[_0x43521d(0x48a)](_0x56a5b0[_0x43521d(0x406)]?.[_0x43521d(0x83e)], _0x43521d(0x373)) ? _0x43521d(0x30e) + (_0x56a5b0[_0x43521d(0x406)]['opponentName'] || 'Enemy\x20Faction') : _0x56a5b0[_0x43521d(0x406)]?.['type'] === _0x281696['tLJwl'] ? _0x43521d(0x2a1) + (_0x56a5b0[_0x43521d(0x406)][_0x43521d(0x212)] || _0x43521d(0x501)) + ']' : _0x43521d(0x90e), _0x155e80 = confirm(_0x281696[_0x43521d(0x462)]('⚠️\x20WARNING:\x20TARGET\x20IN\x20ACTIVE\x20WAR!\x0a\x0a' + (_0x43521d(0x793) + _0x56a5b0[_0x43521d(0x589)] + _0x43521d(0x88f) + (_0x56a5b0[_0x43521d(0x666)] || _0x56a5b0[_0x43521d(0x8c0)]) + _0x43521d(0x27d) + _0x17accb + _0x43521d(0x4ea)), _0x43521d(0x81f)) + '•\x20Attacking\x20them\x20as\x20a\x20mercenary\x20wastes\x2025\x20energy\x20and\x20violates\x20third-party\x20non-interference\x20rules.\x0a\x0a' + 'Are\x20you\x20sure\x20you\x20want\x20to\x20proceed\x20and\x20stage\x20this\x20attack\x20anyway?');
            if (_0x155e80) {
                const _0x32ede9 = _0x281696[_0x43521d(0x7fa)](_0x59e0bf[_0x43521d(0x82a)] || _0x281696[_0x43521d(0x837)], _0x43521d(0x8a5)), _0x33497f = _0x32ede9 ? _0x43521d(0x396) + _0x48003b : _0x43521d(0x37b) + _0x48003b;
                _0x30dd48(_0x33497f), _0x40d4da(_0x43521d(0x931) + _0x56a5b0[_0x43521d(0x589)] + ']!');
            }
        });
        const _0x481f55 = _0x14b48b[_0x4567f2(0x1e3)](_0x4567f2(0x62c) + _0x48003b + '\x22]');
        _0x481f55 && _0x353adf && (_0x481f55[_0x4567f2(0x606)] = _0x58ab32 => {
            const _0x252714 = _0x4567f2;
            _0x58ab32[_0x252714(0x29f)](), _0x58ab32[_0x252714(0x7a5)](), _0x1f060e[_0x252714(0x809)](_0x40d4da, _0x252714(0x25b) + _0x353adf);
        });
        const _0x57b289 = _0x14b48b['querySelector'](_0x4567f2(0x7db) + _0x48003b + '\x22]');
        if (_0x57b289)
            _0x57b289[_0x4567f2(0x606)] = () => _0x4795ff(_0x48003b);
        const _0xa5b349 = _0x14b48b[_0x4567f2(0x1e3)](_0x4567f2(0x205) + _0x48003b + '\x22]');
        _0xa5b349 && (_0xa5b349[_0x4567f2(0x606)] = _0x253f44 => {
            const _0x3741c0 = _0x4567f2;
            _0x253f44[_0x3741c0(0x29f)](), _0x253f44[_0x3741c0(0x7a5)]();
            const _0xc4b802 = _0x2eac6a[_0x48003b];
            _0xc4b802 && _0xc4b802[_0x3741c0(0x3be)] && _0x33bfdd(_0xc4b802['incidentData'], _0xc4b802[_0x3741c0(0x3be)]);
        });
    }
    function _0x12d7fe(_0x20ab42) {
        const _0x4c2af6 = _0x45c9c2, _0x4e1b16 = document[_0x4c2af6(0x24c)](_0x4c2af6(0x2b0) + _0x20ab42);
        if (!_0x4e1b16)
            return;
        const _0x10b3b4 = _0x167784[_0x20ab42];
        if (!_0x10b3b4 || !_0x10b3b4['data']) {
            const _0x4dd0e4 = _0x4c2af6(0x263) + _0x20ab42 + _0x4c2af6(0x2ec) + _0x20ab42 + _0x4c2af6(0x219);
            if (_0x1f060e[_0x4c2af6(0x757)](_0x4e1b16[_0x4c2af6(0x63e)][_0x4c2af6(0x513)], _0x4c2af6(0x3da) + _0x20ab42)) {
                _0x4e1b16[_0x4c2af6(0x63e)][_0x4c2af6(0x513)] = _0x4c2af6(0x3da) + _0x20ab42, _0x4e1b16[_0x4c2af6(0x75a)] = _0x4dd0e4;
                const _0x360d51 = _0x4e1b16[_0x4c2af6(0x1e3)](_0x4c2af6(0x2fc) + _0x20ab42 + '\x22]');
                if (_0x360d51)
                    _0x360d51[_0x4c2af6(0x606)] = () => _0x551c83(_0x20ab42);
            }
            return;
        }
        const _0x320cb2 = _0x10b3b4[_0x4c2af6(0x4c4)], _0xbad996 = Math['floor'](Date[_0x4c2af6(0x903)]() / 0x3e8), _0x230d50 = _0x320cb2[_0x4c2af6(0x3b0)] > _0xbad996 ? _0x1f060e[_0x4c2af6(0x882)](_0x320cb2['until'], _0xbad996) : 0x0, _0x3c475f = _0x1f060e[_0x4c2af6(0x624)](_0x2d45f4, _0x230d50), _0x196409 = _0x44c8a0(_0x320cb2), _0x42259c = _0x5c4031(_0x20ab42), _0x4fb4f7 = { 'isPro': _0x1f060e[_0x4c2af6(0x351)](_0x32bfce, 'tw') }, _0x1dae6f = _0x4c2af6(0x71c) + _0x320cb2['state'] + '_' + _0x320cb2['hpCurr'] + '_' + _0x320cb2[_0x4c2af6(0x438)] + '_' + _0x320cb2[_0x4c2af6(0x8ce)] + '_' + _0x196409 + '_' + _0x42259c + '_' + _0x59e0bf[_0x4c2af6(0x1ba)] + '_' + _0x320cb2[_0x4c2af6(0x232)] + '_' + _0x4fb4f7[_0x4c2af6(0x5c3)];
        if (_0x1f060e[_0x4c2af6(0x238)](_0x4e1b16[_0x4c2af6(0x63e)][_0x4c2af6(0x513)], _0x1dae6f)) {
            const _0x24d1e3 = _0x4e1b16[_0x4c2af6(0x1e3)](_0x4c2af6(0x81b));
            if (_0x24d1e3 && _0x320cb2[_0x4c2af6(0x2ed)] === 'Hospital') {
                const _0x4dc9ca = _0x320cb2['warActive'] ? _0x320cb2['warInfo']?.[_0x4c2af6(0x83e)] === _0x1f060e[_0x4c2af6(0x982)] ? _0x4c2af6(0x30e) + (_0x320cb2[_0x4c2af6(0x406)][_0x4c2af6(0x2fb)] || 'Enemy') : _0x320cb2[_0x4c2af6(0x406)]?.[_0x4c2af6(0x83e)] === _0x1f060e[_0x4c2af6(0x5f2)] ? _0x4c2af6(0x1bd) + (_0x320cb2[_0x4c2af6(0x406)][_0x4c2af6(0x212)] || 'Sector') + ']' : _0x4c2af6(0x90e) : '', _0x2ae272 = _0x320cb2[_0x4c2af6(0x232)] ? _0x4c2af6(0x85c) + _0x1f060e[_0x4c2af6(0x6e0)](_0x4dc9ca, _0x4c2af6(0x31e)) + _0x4c2af6(0x46f) : '';
                _0x24d1e3[_0x4c2af6(0x75a)] = _0x4c2af6(0x5ce) + _0x3c475f + (_0x2ae272 ? '\x20' + _0x2ae272 : '');
            }
            const _0x1f273e = _0x4e1b16[_0x4c2af6(0x1e3)](_0x1f060e[_0x4c2af6(0x94e)]);
            _0x1f273e && _0x1f060e[_0x4c2af6(0x2c2)](_0x320cb2[_0x4c2af6(0x2ed)], 'Hospital') && (_0x1f273e['innerHTML'] = _0x4c2af6(0x1cd) + _0x3c475f + _0x4c2af6(0x1c0) + (_0x320cb2[_0x4c2af6(0x232)] ? _0x4c2af6(0x699) : ''));
            return;
        }
        _0x4e1b16[_0x4c2af6(0x63e)][_0x4c2af6(0x513)] = _0x1dae6f, _0x4e1b16['className'] = 'stakeout-card\x20' + (_0x196409 ? _0x1f060e[_0x4c2af6(0x2c1)] : '');
        const _0x441857 = _0x4fb4f7[_0x4c2af6(0x5c3)] ? _0x320cb2['online'] === _0x1f060e[_0x4c2af6(0x3d0)] ? _0x1f060e[_0x4c2af6(0x4f9)] : _0x320cb2[_0x4c2af6(0x8ce)] === _0x1f060e[_0x4c2af6(0x78a)] ? _0x4c2af6(0x495) : _0x4c2af6(0x570) : _0x4c2af6(0x570), _0x547827 = _0x4fb4f7['isPro'] ? _0x4c2af6(0x2ee) + _0x320cb2[_0x4c2af6(0x8ce)] : _0x4c2af6(0x934), _0x373282 = _0x320cb2[_0x4c2af6(0x232)] ? _0x1f060e[_0x4c2af6(0x59c)](_0x320cb2[_0x4c2af6(0x406)]?.['type'], 'Ranked\x20War') ? 'Ranked\x20War\x20vs\x20' + (_0x320cb2[_0x4c2af6(0x406)][_0x4c2af6(0x2fb)] || _0x1f060e['kyiHs']) : _0x320cb2['warInfo']?.[_0x4c2af6(0x83e)] === _0x1f060e[_0x4c2af6(0x5f2)] ? _0x4c2af6(0x1bd) + (_0x320cb2[_0x4c2af6(0x406)][_0x4c2af6(0x212)] || _0x4c2af6(0x7ef)) + ']' : _0x1f060e[_0x4c2af6(0x6ab)] : '', _0x1cdb1c = _0x320cb2['warActive'] ? _0x4c2af6(0x85c) + (_0x373282 || _0x1f060e[_0x4c2af6(0x2d4)]) + _0x4c2af6(0x46f) : '';
        let _0x4d2c98 = '';
        if (_0x320cb2[_0x4c2af6(0x2ed)] === _0x4c2af6(0x8b7))
            _0x4d2c98 = _0x4c2af6(0x67f) + _0x3c475f + _0x4c2af6(0x804) + (_0x1cdb1c ? '\x20' + _0x1cdb1c : '');
        else {
            if (_0x196409)
                _0x4d2c98 = '<span\x20class=\x22stakeout-status-pill\x20trader-ready\x22\x20title=\x22Trader\x20is\x20Online\x20and\x20Out!\x20Ready\x20for\x20hospitalization\x20services.\x22>💼\x20ONLINE\x20&\x20OUT</span>';
            else {
                if (_0x320cb2[_0x4c2af6(0x2ed)] === _0x1f060e[_0x4c2af6(0x268)])
                    _0x4d2c98 = '<span\x20class=\x22stakeout-status-pill\x20traveling\x22>✈️\x20Traveling\x20(' + _0x3c475f + _0x4c2af6(0x5c1);
                else
                    _0x320cb2[_0x4c2af6(0x2ed)] === _0x4c2af6(0x8c7) ? _0x4d2c98 = _0x4c2af6(0x9a3) : _0x4d2c98 = _0x4c2af6(0x3a1);
            }
        }
        let _0xa199b3 = '';
        if (_0x320cb2[_0x4c2af6(0x84a)] < 0x19)
            _0xa199b3 = 'danger';
        else {
            if (_0x320cb2[_0x4c2af6(0x84a)] < 0x32)
                _0xa199b3 = _0x4c2af6(0x542);
        }
        let _0x5a24a = '';
        if (_0x196409)
            _0x5a24a = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-trader-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://www.torn.com/messages.php#/p=compose&XID=' + _0x20ab42 + _0x4c2af6(0x842) + _0x20ab42 + _0x4c2af6(0x8c9);
        else
            _0x1f060e[_0x4c2af6(0x3f7)](_0x320cb2['state'], 'Hospital') ? _0x5a24a = _0x4c2af6(0x755) + _0x3c475f + _0x4c2af6(0x1c0) + (_0x320cb2[_0x4c2af6(0x232)] ? _0x4c2af6(0x699) : '') + '</div>' : _0x5a24a = '<div\x20class=\x22stakeout-trader-safe\x22\x20style=\x22opacity:\x200.75;\x22>💤\x20Trader\x20Offline\x20(Awaiting\x20Online\x20&\x20Out)</div>';
        _0x4e1b16[_0x4c2af6(0x75a)] = _0x4c2af6(0x7d5) + _0x441857 + '\x22\x20title=\x22Status:\x20' + _0x320cb2['online'] + _0x4c2af6(0x6e4) + _0x20ab42 + _0x4c2af6(0x309) + _0x320cb2[_0x4c2af6(0x589)] + '\x20<span\x20class=\x22stakeout-card-lvl\x22\x20style=\x22color:\x20#64748b;\x22>[' + _0x20ab42 + _0x4c2af6(0x8d7) + (_0x320cb2[_0x4c2af6(0x222)] > 0x0 ? '<span\x20class=\x22stakeout-card-lvl\x22>L' + _0x320cb2[_0x4c2af6(0x222)] + _0x4c2af6(0x804) : '') + _0x4c2af6(0x36c) + (_0x42259c ? _0x4c2af6(0x209) : '') + '\x22\x20data-toggle-trader-mute=\x22' + _0x20ab42 + _0x4c2af6(0x490) + (_0x42259c ? _0x4c2af6(0x980) : _0x4c2af6(0x3bb)) + _0x4c2af6(0x83d) + (_0x42259c ? '🔇' : '🔊') + _0x4c2af6(0x48d) + _0x20ab42 + _0x4c2af6(0x6da) + _0x4d2c98 + _0x4c2af6(0x34f) + _0x320cb2[_0x4c2af6(0x61b)][_0x4c2af6(0x46e)]() + _0x4c2af6(0x2f6) + _0x320cb2[_0x4c2af6(0x438)]['toLocaleString']() + '\x20(' + _0x320cb2[_0x4c2af6(0x84a)]['toFixed'](0x1) + '%)\x20•\x20Last:\x20' + (_0x320cb2[_0x4c2af6(0x261)] || _0x320cb2[_0x4c2af6(0x8ce)]) + _0x4c2af6(0x221) + _0xa199b3 + '\x22\x20style=\x22width:\x20' + _0x320cb2[_0x4c2af6(0x84a)] + _0x4c2af6(0x210) + _0x320cb2[_0x4c2af6(0x84a)][_0x4c2af6(0x894)](0x0) + _0x4c2af6(0x846) + (_0x320cb2[_0x4c2af6(0x261)] || _0x320cb2[_0x4c2af6(0x8ce)]) + _0x4c2af6(0x457) + _0x5a24a + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        const _0x2aa299 = _0x4e1b16[_0x4c2af6(0x1e3)]('[data-toggle-trader-mute=\x22' + _0x20ab42 + '\x22]');
        _0x2aa299 && (_0x2aa299[_0x4c2af6(0x606)] = _0x4d0626 => {
            const _0x174a04 = _0x4c2af6;
            _0x4d0626[_0x174a04(0x7a5)]();
            const _0x1bfab3 = !_0x1f060e[_0x174a04(0x923)](_0x5c4031, _0x20ab42);
            _0x6394cf(_0x20ab42, _0x1bfab3), _0x1f060e[_0x174a04(0x729)](_0x40d4da, _0x1bfab3 ? _0x174a04(0x1ee) + _0x320cb2[_0x174a04(0x589)] + '].' : _0x174a04(0x72e) + _0x320cb2['name'] + '].'), _0x12d7fe(_0x20ab42);
        });
        const _0x3d8b2e = _0x4e1b16[_0x4c2af6(0x1e3)](_0x4c2af6(0x2fc) + _0x20ab42 + '\x22]');
        if (_0x3d8b2e)
            _0x3d8b2e[_0x4c2af6(0x606)] = () => _0x551c83(_0x20ab42);
    }
    function _0x543c8a(_0x2a12ad) {
        const _0x2af474 = _0x45c9c2;
        if (!_0x2a12ad || _0x1f060e['Raogs'](isNaN, _0x2a12ad))
            return;
        const _0x3f819a = String(_0x2a12ad)[_0x2af474(0x76a)]();
        if (!_0x32bfce('sp') && _0x1f060e[_0x2af474(0x545)](_0xe0a523[_0x2af474(0x453)], _0x1844e3) && !_0xe0a523[_0x2af474(0x67b)](_0x3f819a)) {
            _0x1f060e[_0x2af474(0x427)](_0x40d4da, _0x2af474(0x431)), _0x1f060e[_0x2af474(0x73c)](_0x17e6e0, 'sp');
            return;
        }
        !_0xe0a523[_0x2af474(0x67b)](_0x3f819a) && (_0xe0a523[_0x2af474(0x3ca)](_0x3f819a), _0xca4fe(), _0x383f8d(), _0x380ce1(_0x3f819a), _0x4a9798(), _0x40d4da(_0x2af474(0x978) + _0x3f819a + _0x2af474(0x2ae)));
    }
    function _0x4795ff(_0x15b547) {
        const _0x2628ae = _0x45c9c2;
        _0xe0a523 = _0xe0a523[_0x2628ae(0x668)](_0x113f73 => _0x113f73 !== _0x15b547), _0x1f060e[_0x2628ae(0x683)](_0xca4fe), !_0x23e34f[_0x2628ae(0x67b)](_0x15b547) && (delete _0x167784[_0x15b547], delete _0x4285dc[_0x15b547], _0x4d47ac()), _0x5604ca(), _0x1f060e[_0x2628ae(0x223)](_0x383f8d), _0x4a9798();
    }
    function _0x50dc54(_0x1c1f85) {
        const _0x10858b = _0x45c9c2;
        if (!_0x1c1f85 || isNaN(_0x1c1f85))
            return;
        const _0xc7da62 = _0x1f060e['rjFjQ'](String, _0x1c1f85)[_0x10858b(0x76a)]();
        if (!_0x23e34f[_0x10858b(0x67b)](_0xc7da62)) {
            const _0x5cc894 = _0x10858b(0x7b4)[_0x10858b(0x3b6)]('|');
            let _0x36143f = 0x0;
            while (!![]) {
                switch (_0x5cc894[_0x36143f++]) {
                case '0':
                    _0x36484f();
                    continue;
                case '1':
                    _0x40d4da('💼\x20Trader\x20[' + _0xc7da62 + _0x10858b(0x45e));
                    continue;
                case '2':
                    _0x383f8d();
                    continue;
                case '3':
                    _0x23e34f[_0x10858b(0x3ca)](_0xc7da62);
                    continue;
                case '4':
                    _0x380ce1(_0xc7da62);
                    continue;
                case '5':
                    _0x4a9798();
                    continue;
                }
                break;
            }
        }
    }
    function _0x551c83(_0xb09a5e) {
        const _0x1369ea = _0x45c9c2, _0x3b7481 = _0x1f060e[_0x1369ea(0x740)][_0x1369ea(0x3b6)]('|');
        let _0x499c2a = 0x0;
        while (!![]) {
            switch (_0x3b7481[_0x499c2a++]) {
            case '0':
                _0x4a9798();
                continue;
            case '1':
                delete _0x3efd60[_0xb09a5e];
                continue;
            case '2':
                _0x29b123();
                continue;
            case '3':
                _0x383f8d();
                continue;
            case '4':
                _0x23e34f = _0x23e34f[_0x1369ea(0x668)](_0x1787cd => _0x1787cd !== _0xb09a5e);
                continue;
            case '5':
                _0x1f060e[_0x1369ea(0x77d)](_0x36484f);
                continue;
            case '6':
                !_0xe0a523[_0x1369ea(0x67b)](_0xb09a5e) && (delete _0x167784[_0xb09a5e], delete _0x4285dc[_0xb09a5e], _0x4d47ac());
                continue;
            case '7':
                _0x5604ca();
                continue;
            }
            break;
        }
    }
    function _0x30534b() {
        const _0x6b08f9 = _0x45c9c2;
        if (!window[_0x6b08f9(0x295)][_0x6b08f9(0x5f7)][_0x6b08f9(0x67b)](_0x6b08f9(0x7fc)))
            return ![];
        const _0x1ddcc1 = document['querySelector'](_0x1f060e['ypneK']);
        if (_0x1ddcc1)
            return !![];
        const _0x25efb5 = document[_0x6b08f9(0x3a5)](_0x1f060e[_0x6b08f9(0x7e9)]);
        for (const _0x33aff2 of _0x25efb5) {
            const _0x212a8d = (_0x33aff2[_0x6b08f9(0x66f)](_0x6b08f9(0x2ca)) || _0x33aff2[_0x6b08f9(0x66f)](_0x6b08f9(0x317)) || _0x33aff2[_0x6b08f9(0x86b)] || '')[_0x6b08f9(0x626)]();
            if (_0x212a8d[_0x6b08f9(0x67b)](_0x1f060e[_0x6b08f9(0x6b1)]) || _0x212a8d[_0x6b08f9(0x67b)](_0x1f060e[_0x6b08f9(0x1bc)]) || _0x212a8d[_0x6b08f9(0x67b)](_0x6b08f9(0x31d)) || _0x212a8d[_0x6b08f9(0x67b)](_0x6b08f9(0x529)))
                return !![];
        }
        return ![];
    }
    function _0x4a9798() {
        const _0x1f06f4 = _0x45c9c2;
        if (!window[_0x1f06f4(0x295)][_0x1f06f4(0x5f7)][_0x1f06f4(0x67b)](_0x1f060e[_0x1f06f4(0x750)]))
            return;
        const _0xe71465 = window[_0x1f06f4(0x295)]['href'][_0x1f06f4(0x772)](/XID=(\d+)/);
        if (!_0xe71465)
            return;
        const _0x424e72 = _0xe71465[0x1];
        if (_0xe0a523[_0x1f06f4(0x67b)](_0x424e72)) {
            const _0xf1209b = _0x1f060e[_0x1f06f4(0x8a9)](_0x30534b);
            if (_0xf1209b && _0x167784[_0x424e72]?.[_0x1f06f4(0x4c4)]) {
                if (!_0x167784[_0x424e72][_0x1f06f4(0x4c4)][_0x1f06f4(0x863)]) {
                    _0x167784[_0x424e72]['data']['onWall'] = !![];
                    if (_0x571c62 === _0x1f06f4(0x463))
                        _0x561e23(_0x424e72);
                    _0x1f060e['BITFK'](_0x124a19);
                }
            }
        }
        const _0x3b5e6d = _0xe0a523[_0x1f06f4(0x67b)](_0x424e72), _0x29406d = _0x23e34f[_0x1f06f4(0x67b)](_0x424e72);
        let _0x35064c = document[_0x1f06f4(0x24c)](_0x1f060e['TVbMT']);
        if (!_0x35064c) {
            const _0x5bd11c = document[_0x1f06f4(0x1e3)](_0x1f06f4(0x7cb));
            if (_0x5bd11c)
                _0x35064c = document['createElement'](_0x1f060e['SFaAd']), _0x35064c['id'] = _0x1f06f4(0x3f2), _0x35064c['className'] = _0x1f06f4(0x3f2), _0x5bd11c[_0x1f06f4(0x253)][_0x1f06f4(0x493)] = 'flex', _0x5bd11c['style'][_0x1f06f4(0x42b)] = _0x1f06f4(0x28e), _0x5bd11c[_0x1f06f4(0x253)][_0x1f06f4(0x791)] = _0x1f06f4(0x611), _0x5bd11c['appendChild'](_0x35064c);
            else {
                const _0x88fa56 = document[_0x1f06f4(0x1e3)](_0x1f060e['pbgqM']);
                if (!_0x88fa56)
                    return;
                _0x35064c = document[_0x1f06f4(0x74a)](_0x1f060e['SFaAd']), _0x35064c['id'] = _0x1f060e[_0x1f06f4(0x6bb)], _0x35064c[_0x1f06f4(0x96f)] = _0x1f06f4(0x3f2), _0x88fa56[_0x1f06f4(0x9c0)](_0x35064c);
            }
        }
        _0x35064c[_0x1f06f4(0x75a)] = _0x1f06f4(0x6b3) + (_0x3b5e6d ? _0x1f06f4(0x352) : '') + _0x1f06f4(0x490) + (_0x3b5e6d ? _0x1f06f4(0x793) + _0x424e72 + _0x1f06f4(0x841) : _0x1f06f4(0x454) + _0x424e72 + ']\x20to\x20Mercenary\x20Radar.') + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🎯\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22stakeout-btn-toggle-trader\x22\x20class=\x22stakeout-sq-btn\x20trader\x20' + (_0x29406d ? 'active' : '') + '\x22\x20title=\x22' + (_0x29406d ? 'Trader\x20[' + _0x424e72 + _0x1f06f4(0x8f0) : _0x1f06f4(0x2c0) + _0x424e72 + _0x1f06f4(0x72f)) + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20💼\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
        const _0x2a0ff1 = _0x35064c['querySelector'](_0x1f06f4(0x7a8));
        _0x2a0ff1 && (_0x2a0ff1[_0x1f06f4(0x606)] = _0x7e6672 => {
            const _0x9413a9 = _0x1f06f4;
            _0x7e6672[_0x9413a9(0x29f)](), _0x7e6672['stopPropagation'](), _0xe0a523[_0x9413a9(0x67b)](_0x424e72) ? (_0x4795ff(_0x424e72), _0x40d4da(_0x9413a9(0x793) + _0x424e72 + _0x9413a9(0x2d6))) : _0x543c8a(_0x424e72), _0x4a9798();
        });
        const _0x389c0e = _0x35064c[_0x1f06f4(0x1e3)](_0x1f06f4(0x5c0));
        _0x389c0e && (_0x389c0e[_0x1f06f4(0x606)] = _0x30f0be => {
            const _0x3a82f5 = _0x1f06f4;
            _0x30f0be['preventDefault'](), _0x30f0be[_0x3a82f5(0x7a5)](), _0x23e34f[_0x3a82f5(0x67b)](_0x424e72) ? (_0x551c83(_0x424e72), _0x40d4da(_0x3a82f5(0x68a) + _0x424e72 + _0x3a82f5(0x54a))) : _0x50dc54(_0x424e72), _0x4a9798();
        });
    }
    let _0x34d32e = 0x0, _0x32001c = ![], _0x506135 = (_0x59e0bf[_0x45c9c2(0x877)] || 0x5) * 0x3e8, _0xc32df5 = null;
    function _0x591d5e() {
        const _0x5e19ec = _0x45c9c2, _0x1982a9 = document['getElementById']('stakeout-footer-rate');
        if (!_0x1982a9)
            return;
        const _0x3f8438 = _0x1f060e[_0x5e19ec(0x394)](_0x5d92bc), _0x1426fd = _0x506135 === 0x3e8, _0x4728d3 = _0x3f8438 + '_' + _0x1426fd + '_' + _0x59e0bf[_0x5e19ec(0x877)] + '_' + _0x4b9700 + '_' + _0x1f060e[_0x5e19ec(0x2cb)](_0x5417bb);
        if (_0x1982a9[_0x5e19ec(0x63e)][_0x5e19ec(0x605)] === _0x4728d3)
            return;
        _0x1982a9[_0x5e19ec(0x63e)][_0x5e19ec(0x605)] = _0x4728d3;
        if (!_0x4b9700) {
            _0x1982a9[_0x5e19ec(0x75a)] = _0x5e19ec(0x65a);
            return;
        }
        _0x1982a9[_0x5e19ec(0x75a)] = _0x5e19ec(0x28f) + _0x3f8438 + '/' + _0x1f060e[_0x5e19ec(0x77e)](_0x5417bb) + _0x5e19ec(0x992) + (_0x1426fd ? '<b\x20style=\x22color:\x20#f59e0b;\x20animation:\x20stakeout-glow-pulse\x201s\x20infinite;\x22>1s\x20⚡\x20(RAPID)</b>' : (_0x59e0bf[_0x5e19ec(0x877)] || 0x5) + 's');
    }
    function _0x3576e9() {
        const _0x1f753c = _0x45c9c2;
        if (!_0x59e0bf[_0x1f753c(0x6bf)])
            return null;
        const _0x1bdb3c = Array['from'](new Set([
            ..._0xe0a523,
            ..._0x23e34f
        ]));
        if (_0x1bdb3c[_0x1f753c(0x453)] === 0x0)
            return null;
        const _0x720803 = Math[_0x1f753c(0x306)](_0x1f060e[_0x1f753c(0x560)](Date[_0x1f753c(0x903)](), 0x3e8));
        let _0x5f4699 = null, _0x46a7ae = Infinity;
        for (const _0xb5eadb of _0x1bdb3c) {
            if (_0x1f060e['sGbQa'](_0x266a19, _0xb5eadb))
                continue;
            const _0x27490b = _0x167784[_0xb5eadb]?.['data'];
            if (_0x27490b && _0x1f060e[_0x1f753c(0x553)](_0x27490b[_0x1f753c(0x2ed)], _0x1f753c(0x8b7))) {
                const _0x3f9fd9 = _0x1f060e['WLakL'](_0x27490b[_0x1f753c(0x3b0)], _0x720803);
                _0x1f060e[_0x1f753c(0x940)](_0x3f9fd9, 0x3c) && _0x3f9fd9 >= -0x3c && _0x3f9fd9 < _0x46a7ae && (_0x46a7ae = _0x3f9fd9, _0x5f4699 = _0xb5eadb);
            }
        }
        if (!_0x5f4699)
            for (const _0x327e7e of _0x1bdb3c) {
                const _0x27cc2f = _0x167784[_0x327e7e]?.[_0x1f753c(0x4c4)];
                if (_0x27cc2f && _0x27cc2f[_0x1f753c(0x2ed)] === _0x1f060e[_0x1f753c(0x6fa)]) {
                    const _0x29870b = _0x1f060e[_0x1f753c(0x3cd)](_0x27cc2f[_0x1f753c(0x3b0)], _0x720803);
                    _0x29870b <= 0x3c && _0x29870b >= -0x3c && _0x1f060e[_0x1f753c(0x879)](_0x29870b, _0x46a7ae) && (_0x46a7ae = _0x29870b, _0x5f4699 = _0x327e7e);
                }
            }
        return _0x5f4699;
    }
    function _0x5604ca() {
        const _0x40f344 = _0x45c9c2;
        if (!_0xc32df5)
            return;
        const _0x3b6c01 = _0x3576e9(), _0x40c148 = _0x3b6c01 ? 0x3e8 : (_0x59e0bf[_0x40f344(0x877)] || 0x5) * 0x3e8;
        if (_0x40c148 !== _0x506135) {
            const _0x30f4de = _0x506135 > _0x40c148;
            _0x506135 = _0x40c148, _0xc32df5[_0x40f344(0x2bd)](_0x40c148), _0x1f060e[_0x40f344(0x609)](_0x591d5e), _0x30f4de && _0x40c148 === 0x3e8 && _0x3b6c01 && _0x1f060e['xOFVU'](_0x380ce1, _0x3b6c01);
        }
    }
    async function _0x380ce1(_0x4e4e63) {
        const _0xbe6dfb = _0x45c9c2;
        if (!_0x4b9700) {
            const _0x2b2ee1 = {};
            _0x2b2ee1['id'] = _0x4e4e63, _0x5b70e4(_0xbe6dfb(0x673), _0x2b2ee1);
            return;
        }
        const _0x2f6160 = await _0x32f989(_0x4e4e63);
        _0x2f6160 && (_0x4b97ca(_0x4e4e63, _0x2f6160), _0x5604ca());
    }
    async function _0x33dab9() {
        const _0xc871ef = _0x45c9c2, _0x321551 = _0x59e0bf['isTradersPaused'] ? [] : _0x23e34f, _0x1d852e = Array[_0xc871ef(0x66e)](new Set([
                ..._0xe0a523,
                ..._0x321551
            ]));
        if (!_0x4b9700 || _0x59e0bf['isPaused'] || _0x1f060e[_0xc871ef(0x8ff)](_0x1d852e[_0xc871ef(0x453)], 0x0) || _0x32001c)
            return;
        _0x32001c = !![];
        try {
            const _0x2f8589 = _0x1f060e[_0xc871ef(0x5dc)](_0x3576e9), _0x15db3b = _0x2f8589 || _0x1d852e[_0x34d32e % _0x1d852e[_0xc871ef(0x453)]];
            !_0x2f8589 && (_0x34d32e = (_0x34d32e + 0x1) % _0x1d852e['length']), await _0x1f060e[_0xc871ef(0x9b5)](_0x380ce1, _0x15db3b);
        } finally {
            _0x32001c = ![], _0x1f060e[_0xc871ef(0x350)](_0x5604ca);
        }
    }
    function _0x17846b(_0x3bb533, _0x30ea85) {
        const _0x5df9f1 = _0x45c9c2;
        let _0xe054f8 = _0x3bb533, _0x4c0566 = null, _0x364782 = null;
        try {
            const _0x49119a = _0x5df9f1(0x52f) + _0x3bb533 + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20self.onmessage\x20=\x20function(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20data\x20=\x20e.data;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(data\x20===\x20\x27start\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(timer)\x20clearInterval(timer);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timer\x20=\x20setInterval(function()\x20{\x20self.postMessage(\x27tick\x27);\x20},\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(data\x20===\x20\x27stop\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(timer)\x20clearInterval(timer);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timer\x20=\x20null;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(typeof\x20data\x20===\x20\x27object\x27\x20&&\x20data.type\x20===\x20\x27setInterval\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20interval\x20=\x20data.intervalMs;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(timer)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clearInterval(timer);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timer\x20=\x20setInterval(function()\x20{\x20self.postMessage(\x27tick\x27);\x20},\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x1c21b5 = {};
            _0x1c21b5[_0x5df9f1(0x83e)] = _0x1f060e[_0x5df9f1(0x823)];
            const _0x1d9379 = new Blob([_0x49119a], _0x1c21b5);
            _0x4c0566 = new Worker(URL[_0x5df9f1(0x3dc)](_0x1d9379)), _0x4c0566[_0x5df9f1(0x479)] = function (_0x2e8185) {
                const _0x2e9ee8 = _0x5df9f1;
                if (_0x2e8185[_0x2e9ee8(0x4c4)] === _0x2e9ee8(0x387))
                    _0x30ea85();
            }, _0x4c0566[_0x5df9f1(0x218)](_0x1f060e[_0x5df9f1(0x50a)]);
        } catch (_0x55ea0d) {
            console[_0x5df9f1(0x5d6)](_0x1f060e['lUkKY'], _0x55ea0d), _0x364782 = _0x1f060e[_0x5df9f1(0x79c)](setInterval, _0x30ea85, _0x3bb533);
        }
        return {
            'setIntervalMs': _0x1bc040 => {
                const _0x1fe883 = _0x5df9f1;
                if (_0x1f060e[_0x1fe883(0x725)](_0x1bc040, _0xe054f8))
                    return;
                _0xe054f8 = _0x1bc040;
                if (_0x4c0566) {
                    const _0x61f126 = {};
                    _0x61f126[_0x1fe883(0x83e)] = _0x1f060e[_0x1fe883(0x54c)], _0x61f126[_0x1fe883(0x9b7)] = _0x1bc040, _0x4c0566['postMessage'](_0x61f126);
                } else
                    _0x364782 && (clearInterval(_0x364782), _0x364782 = _0x1f060e[_0x1fe883(0x496)](setInterval, _0x30ea85, _0x1bc040));
            },
            'terminate': () => {
                const _0xf09ea1 = _0x5df9f1;
                _0x4c0566 && (_0x4c0566['postMessage'](_0xf09ea1(0x7f1)), _0x4c0566[_0xf09ea1(0x935)]());
                if (_0x364782)
                    _0x1f060e['jMKBE'](clearInterval, _0x364782);
            }
        };
    }
    function _0x36de23() {
        let _0xbb0be0 = 0x0;
        const _0x46bcb6 = setInterval(() => {
            const _0x4ad000 = _0xf22e;
            _0xbb0be0++;
            const _0x36b8a2 = document['querySelectorAll'](_0x4ad000(0x229)), _0x48a15f = [..._0x36b8a2][_0x4ad000(0x26f)](_0x18a319 => (_0x18a319[_0x4ad000(0x86b)] || '')[_0x4ad000(0x67b)]('👑'));
            if ((_0x1f060e[_0x4ad000(0x41d)](_0x36b8a2[_0x4ad000(0x453)], 0x1) || _0x48a15f) && !document[_0x4ad000(0x24c)](_0x4ad000(0x77c))) {
                clearInterval(_0x46bcb6);
                const _0x23dc31 = document['createElement'](_0x1f060e[_0x4ad000(0x7e4)]);
                _0x23dc31['id'] = _0x4ad000(0x77c), _0x23dc31[_0x4ad000(0x253)][_0x4ad000(0x8e3)] = _0x1f060e[_0x4ad000(0x512)](_0x4ad000(0x43c) + _0x1f060e[_0x4ad000(0x363)], _0x4ad000(0x96b)), _0x23dc31[_0x4ad000(0x75a)] = _0x4ad000(0x3bd), _0x23dc31[_0x4ad000(0x1e3)](_0x4ad000(0x670))[_0x4ad000(0x606)] = () => _0x23dc31[_0x4ad000(0x8e2)](), document[_0x4ad000(0x299)][_0x4ad000(0x9c0)](_0x23dc31);
            } else
                _0xbb0be0 >= 0x1e && _0x1f060e['wXpEO'](clearInterval, _0x46bcb6);
        }, 0x7d0);
    }
    function _0x5a7e36() {
        const _0x49ff12 = _0x45c9c2, _0x17bfce = {
                'tMeeY': function (_0x339d8d) {
                    return _0x339d8d();
                },
                'tHvfS': function (_0x311e3b) {
                    return _0x311e3b();
                },
                'hParF': function (_0xf7bbb1) {
                    return _0xf7bbb1();
                },
                'hKafn': function (_0x15e2fc, _0xf91e12) {
                    return _0x15e2fc(_0xf91e12);
                },
                'WpkJr': _0x49ff12(0x728),
                'oNmNJ': _0x49ff12(0x5de),
                'sPKTt': function (_0x41bdb0, _0x4bc9bb) {
                    const _0x56d266 = _0x49ff12;
                    return _0x1f060e[_0x56d266(0x4bd)](_0x41bdb0, _0x4bc9bb);
                },
                'hKArQ': _0x49ff12(0x463),
                'AkdWO': _0x49ff12(0x509)
            };
        if (!document[_0x49ff12(0x299)]) {
            _0x1f060e[_0x49ff12(0x1f5)](setTimeout, _0x5a7e36, 0x64);
            return;
        }
        _0x1f060e[_0x49ff12(0x743)](_0x1a5bf4), _0x1f060e[_0x49ff12(0x4a2)](_0x36de23), _0x3cef68(), _0x383f8d(), _0x4a9798(), _0x1f060e['pLDhr'](_0x59ed35), _0x25783a(), setInterval(() => {
            const _0x3fa2b3 = _0x49ff12;
            _0x1218a3(), _0xacf21(), _0x17bfce['tMeeY'](_0x31ccfe), _0x17bfce[_0x3fa2b3(0x6c0)](_0x5604ca), _0x17bfce[_0x3fa2b3(0x6ae)](_0x591d5e);
            if (_0x59e0bf[_0x3fa2b3(0x8c5)])
                return;
            _0x35e192();
            const _0xf125db = document['getElementById'](_0x3fa2b3(0x561));
            if (_0xf125db && _0x32bfce('fw')) {
                const _0x48bc7a = _0x17bfce[_0x3fa2b3(0x6ae)](_0x7f63e0);
                if (_0xf125db['textContent'] !== _0x17bfce[_0x3fa2b3(0x2bb)](String, _0x48bc7a))
                    _0xf125db[_0x3fa2b3(0x86b)] = _0x48bc7a;
                _0xf125db[_0x3fa2b3(0x253)]['display'] = _0x48bc7a > 0x0 ? _0x17bfce[_0x3fa2b3(0x498)] : _0x17bfce[_0x3fa2b3(0x8a7)];
            }
            if (_0x17bfce[_0x3fa2b3(0x5ee)](_0x571c62, _0x17bfce[_0x3fa2b3(0x7f9)]))
                _0xe0a523[_0x3fa2b3(0x38f)](_0x3ec618 => _0x561e23(_0x3ec618));
            else
                _0x17bfce[_0x3fa2b3(0x5ee)](_0x571c62, _0x17bfce[_0x3fa2b3(0x884)]) ? _0x2fc985[_0x3fa2b3(0x38f)](_0x13cbbe => _0x47cfc9(_0x13cbbe['id'])) : _0x23e34f['forEach'](_0x4d7cce => _0x12d7fe(_0x4d7cce));
        }, 0x3e8), _0x17846b(0x3e8, () => {
            const _0x3c7765 = _0x49ff12;
            _0x1f060e[_0x3c7765(0x61d)](_0x2f5e54), _0x1f060e[_0x3c7765(0x7fd)](_0x4dffe8), _0x793d69(), _0x3797af();
        }), setInterval(() => _0x2708a5(), 0xea60), _0x1f060e[_0x49ff12(0x200)](setInterval, _0x337e49, 0x5dc);
        const _0x295600 = () => {
            const _0x1f5665 = _0x49ff12;
            _0x337e49();
            if (_0x1f060e[_0x1f5665(0x574)](document[_0x1f5665(0x7ee)], _0x1f060e[_0x1f5665(0x981)]) && document['hasFocus']())
                _0x5b70e4(_0x1f5665(0x79d));
        };
        window[_0x49ff12(0x5b5)](_0x1f060e['nlKqY'], _0x295600), document[_0x49ff12(0x5b5)]('visibilitychange', _0x295600), setInterval(() => {
            const _0x4e1e39 = _0x49ff12;
            window[_0x4e1e39(0x295)][_0x4e1e39(0x5f7)]['includes'](_0x4e1e39(0x7fc)) && _0x4a9798();
        }, 0x7d0), _0xc32df5 = _0x1f060e['ryrsJ'](_0x17846b, _0x506135, _0x33dab9), _0x1f060e[_0x49ff12(0x1ca)](setInterval, () => _0x26397c(), 0xa * 0x3c * 0x3e8), _0xe79e42();
        if (_0x3ba1b3)
            _0x1f060e[_0x49ff12(0x929)](_0x36a476);
        setTimeout(() => {
            const _0x12bbb2 = _0x49ff12;
            !_0x4b9700 && (_0x337e49(), _0x5b70e4(_0x12bbb2(0x86f)));
        }, 0x12c);
    }
    _0x1f060e[_0x45c9c2(0x420)](typeof GM_registerMenuCommand, _0x1f060e[_0x45c9c2(0x324)]) && (GM_registerMenuCommand(_0x1f060e['gbnNA'], () => _0x1cb3eb(!![])), GM_registerMenuCommand(_0x45c9c2(0x367), () => {
        const _0xd19eaa = _0x45c9c2;
        _0x59e0bf[_0xd19eaa(0x8c5)] = !_0x59e0bf[_0xd19eaa(0x8c5)], _0x1f060e[_0xd19eaa(0x394)](_0x2aad15), _0x383f8d();
    }), _0x1f060e[_0x45c9c2(0x608)](GM_registerMenuCommand, _0x45c9c2(0x5e4), () => _0x130af7())), _0x1f060e[_0x45c9c2(0x3ff)](document[_0x45c9c2(0x9b9)], _0x45c9c2(0x525)) ? window[_0x45c9c2(0x5b5)](_0x45c9c2(0x3b9), _0x5a7e36) : _0x1f060e[_0x45c9c2(0x8bc)](_0x5a7e36);
}()));
