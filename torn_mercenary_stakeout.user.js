// ==UserScript==
// @name         Torn City - Mercenary Stakeout Radar
// @namespace    Violentmonkey Scripts
// @version      1.62
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

function _0x5ca8(_0xa663d4, _0x4f40f7) {
    _0xa663d4 = _0xa663d4 - 0x69;
    const _0xbfe411 = _0xbfe4();
    let _0x5ca894 = _0xbfe411[_0xa663d4];
    if (_0x5ca8['tjcakC'] === undefined) {
        var _0x1462fc = function (_0x143385) {
            const _0x27e4f3 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x3b5661 = '', _0x94ba58 = '';
            for (let _0x5d0545 = 0x0, _0x82fa61, _0x43c1fe, _0x167098 = 0x0; _0x43c1fe = _0x143385['charAt'](_0x167098++); ~_0x43c1fe && (_0x82fa61 = _0x5d0545 % 0x4 ? _0x82fa61 * 0x40 + _0x43c1fe : _0x43c1fe, _0x5d0545++ % 0x4) ? _0x3b5661 += String['fromCharCode'](0xff & _0x82fa61 >> (-0x2 * _0x5d0545 & 0x6)) : 0x0) {
                _0x43c1fe = _0x27e4f3['indexOf'](_0x43c1fe);
            }
            for (let _0x1d80e8 = 0x0, _0x1ef061 = _0x3b5661['length']; _0x1d80e8 < _0x1ef061; _0x1d80e8++) {
                _0x94ba58 += '%' + ('00' + _0x3b5661['charCodeAt'](_0x1d80e8)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x94ba58);
        };
        _0x5ca8['qBOMHt'] = _0x1462fc, _0x5ca8['QiMDXu'] = {}, _0x5ca8['tjcakC'] = !![];
    }
    const _0x1f4042 = _0xbfe411[0x0];
    _0x5ca8['NNKPrQ'] !== _0x1f4042 && (_0x5ca8['QiMDXu'] = {}, _0x5ca8['NNKPrQ'] = _0x1f4042);
    const _0x3264f7 = _0x5ca8['QiMDXu'][_0xa663d4];
    return _0x3264f7 === undefined ? (_0x5ca894 = _0x5ca8['qBOMHt'](_0x5ca894), _0x5ca8['QiMDXu'][_0xa663d4] = _0x5ca894) : _0x5ca894 = _0x3264f7, _0x5ca894;
}
function _0xbfe4() {
    const _0x5d0cf5 = [
        'uuDnvvK',
        'wNPlDg8',
        'w1n0ywTLB3v0xsbbDxrVlwrVD25SB2fKigvYCM9YoG',
        'wvnZwfG',
        'q2HHBMDLiefqssblzxK',
        'uwTnEhK',
        'zcbSzwz0pc9ZCgfUpG',
        'zwz1DgC',
        'quPgseW',
        'BgfIzwW',
        'vgj4t1u',
        'Dgv4Dc9JC3m',
        'shvsquW',
        'iJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTAgvHzgvYiJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlxrPDgXLlxDYyxaIpGOGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbJBgfZCZ0IC3rHA2vVDxqTy2fYzc1Uyw1LiIb0AxrSzt0It3bLBIbMywn0Aw9UihbHz2uIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgeGAhjLzJ0IAhr0Chm6lY93D3CUDg9YBI5JB20VzMfJDgLVBNmUCgHWp3n0zxa9ChjVzMLSzszjrd0',
        'w2rHDgeTzNCTAgL0xsXBzgf0ys1MDY1KzwXDlfTKyxrHlwz3lxbHDxnLxsXBzgf0ys1MDY1HBgvYDf0Sw2rHDgeTzNCTD2vHCg9Uxq',
        'y2HHCKf0',
        'C3rHCNrZv2L0Aa',
        'ANHwqwq',
        'zMLSDgvY',
        'zw50CNK',
        'C2ziqMW',
        'mZu2nZq0nfHvwfPJBG',
        'AhbdDxjY',
        'BwLU',
        'uMDRENu',
        'w1n0ywTLB3v0xsbozxr3B3jRigvYCM9YoG',
        'cIaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGicaGica',
        'icH0yxjNzxqGCMvZzxqGDg8GiW',
        'yw55',
        'C3rHA2vVDxqTy2HHAw4TyMfYlwLUzM8',
        'phnWyw4GC3r5Bgu9iMnVBg9YoIaJnJq3ndHIoYi+BM90ig93BMvKpc9ZCgfUpG',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSihrYyxzLBgLUzYi+4PYi77IpifrYyxzLBgLUzYaO',
        'zMfJDgLVBIbB',
        'zg9JDw1LBNrfBgvTzw50',
        'Ahbqy3q',
        'C3rHDhvZ',
        'CNzrswe',
        'CMvHzhLtDgf0zq',
        'EMTMBfK',
        'CgXHEwvYx25HBwu',
        'CMfWAwriB3nWug9SBgLUzW',
        'C2vSzwn0',
        'yNv0Dg9U',
        'tvDHEwu',
        'v1j6z0S',
        'DM90Evm',
        'u2jeCuK',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxiTAw5MB3jTyxrPB24IxsbHw2HYzwyQpsjWCM9MAwXLCY5WAhaIxsWG',
        'AhPJBKO',
        'jMnVBw1LBNq9u3rHA2vVDxrxyxjZ',
        'y3jLyxrLt2jQzwn0vvjm',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaG',
        'zxiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGz2fWoIa0ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGBwfYz2LUlwXLzNq6idzWEcaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3eTyNrUihSkicaGicaGicaGicaGD2LKDgG6idi2ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGAgvPz2H0oIaYnNb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGihbHzgrPBMC6idaGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwzSzxGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGicbMB250lxnPEMu6ideZChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZfLmJKZyIaHAw1WB3j0yw50oWOGicaGicaGicaGicbJB2XVCJOGi2y4zMfMyYaHAw1WB3j0yw50oWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmtvZigvHC2uGiwLTCg9YDgfUDdSkicaGicaGicaGicaGBgLUzs1OzwLNAhq6ideGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaXChGGm3b4ihjNyMeOmcWGmcWGmcWGmc4ZksaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3eTyNrUoMHVDMvYihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJmZHIzgy4icfPBxbVCNrHBNq7cIaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGTmxb4ksaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3eTyNrUlMfJDgL2zsb7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJiSia',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgfRzw91Dc1IDg4TAwnVBIiGAwq9iNn0ywTLB3v0lwj0BI1WyxvZzsiGDgL0Bgu9iG',
        'u1rssunlru4',
        'iIb0yxjNzxq9iL9IBgfUAYiGy2XHC3m9iNn0ywTLB3v0lwnHCMqTBMfTzsiGDgL0Bgu9iLzPzxCGuhjVzMLSzsi+cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'w2nSyxnZkJ0IAwnVBJq5iL0SifTJBgfZCYO9iMLJB241mcjDlcbBy2XHC3mQpsjPy29UnteIxsWGw2nSyxnZkJ0IAwnVBJuYiL0SifTJBgfZCYO9iMLJB241mYjDlca',
        'cIaGicaGicaGicaGicaGicaGicaGpgrPDIbPzd0IC3rHA2vVDxqTy2HHAw4TCgLSBc1JB250ywLUzxiIihn0EwXLpsjKAxnWBgf5oIbPBMXPBMuTzMXLEdSIpJWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'D2fSBa',
        's21pwNO',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnHCMqTBhzSiIbZDhLSzt0Iy29SB3i6icm2ndC0ogi7iIb0AxrSzt0IrMfJDgLVBJOG',
        'Axnby3rPDMu',
        'Bxv0zwq',
        'C3rHA2vVDxqTDhjHzgvYlwnHCMqT',
        'CxDeD3G',
        'zMLYC3rdAgLSza',
        'C2LUzq',
        'yMXVy2TLza',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iLbVB2W6igjHy2TNCM91BMqTC2nHBNmGCMfUzg9TieLeCYbPBIb0AguGCMfUz2uGyMvSB3CGyw5Kig9UBhKGB2zMzxjZigf0DgfJA2fIBguGDgfYz2v0CY4Gu2vXDwvUDgLHBdOGkZeGCgvYigHPDcaOB2XKigjLAgf2Aw91CIKUiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFJRiGuxvPy2SGsgL0ifrHCMDLDhm8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C2vSzwn0igLKpsjZDgfRzw91Dc1JAgfPBI1TB2rLlxnLBgvJDciGy2XHC3m9iNn0ywTLB3v0lxnLDhrPBMDZlxnLBgvJDci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ICg9VBciG',
        '4O+ZienVBMzPCM1PBMCGEw91CIbWBgf5zxiGsuqGD2L0Acb5B3vYiefqssbRzxKUlI4',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaG8j+sVca',
        'CMfbz2C',
        'rM1yyNK',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTy2HHAw4TyMfYiIbPzd0IC3rHA2vVDxqTy2HHAw4TyMfYiIbZDhLSzt0IzgLZCgXHEtOG',
        'zhHYBxa',
        'iIb0AxrSzt0Iv2HPy2GGywn0AxzPDhKGC3rHDgvZignVDw50igfZigLUywn0AxzLiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0IAwrSzsiG',
        'pgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDgf0DxmTCgLSBcbLzc1VzMyTD2fSBciGzgf0ys10B2DNBguTD2fSBd0I',
        'sePIq2W',
        'twfZs24',
        'yxjPys12ywX1zw5VDW',
        'ywXSB3DjzgXL',
        'CNzmsNy',
        's1nMqxe',
        'Bg9N',
        'CuzlqNa',
        'xsbIzwXVBMDZihrVigzHy3rPB24GwW',
        'A2v5pq',
        'tLPxy1y',
        'zM1uBfK',
        'sMrMwwG',
        '4PEpifndqu4',
        'AxnuCMfKzxjZugf1C2vK',
        'iJ7IMPtVUi8GsgL0pc9IDxr0B24+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaG',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iLbHDxnLigfSBcb0CMfKzxiGBw9UAxrVCMLUzYb3AxrOB3v0igfMzMvJDgLUzYbTzxjJzw5HCNKGy29TyMf0ihrHCMDLDhmIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4O+477Ipie1HC3rLCIbqyxvZzsbMB3iGvhjHzgvYCZWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGAwq9iNrVz2DSzs1WyxvZzs10CMfKzxjZiIa',
        'pJiGtwLUCZWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iJuIia',
        'zMfJDgLVBK5HBwu',
        'vgvYCML0B3j5ifDHCG',
        'verzBvC',
        'v2TnA3q',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTAgvHzgvYlwfJDgLVBNmIpGOGicaGicaGicaGicaGicaGicaGia',
        'CfzOCK0',
        'CNLhu1G',
        '4PA2ifrYywrLCIbTB25PDg9YAw5Nifjfu1vnruqU',
        'C3vIDgXL',
        'ChDTugm',
        'y2f0y2G',
        'icaGFqOGicaGicaGic5ZDgfRzw91Dc1WAwXSoMHVDMvYihSkicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDgvzkc0YChGPoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidzWEcaYmhb4ihjNyMeOmcWGmcWGmcWGmc43ksWGmcaWide1ChGGCMDIysG1osWGmtmWlcaYndySidaUnsK7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGiZyWytvMytSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxbPBgWUAgfZlxjLywr5ihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJmJjJntvLoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidrWEcaXnNb4ihjNyMeOmcWGmcWGmcWGmc42ksWGmcaWideYChGGCMDIysGZncWGmtK3lca5ncWGmc41ktSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZDgfRzw91DfbPBgXqDwXZzsaXlJrZigLUzMLUAxrLigvHC2uTAw4TB3v0oWOGicaGicaGih0kicaGicaGicbaA2v5zNjHBwvZihn0ywTLB3v0ugLSBfb1BhnLihSkicaGicaGicaGicaGmcuGEYbIB3GTC2HHzg93oIaWidaGnhb4icmYmMm1nwu7ih0kicaGicaGicaGicaGntaLihSGyM94lxnOywrVDZOGmcaWide0ChGGiZiYyZu1zsWGmcaWidzWEcaJmtzHmZrHoYb9cIaGicaGicaGicaGideWmcuGEYbIB3GTC2HHzg93oIaWidaGnhb4icmYmMm1nwu7ih0kicaGicaGicb9cGOGicaGicaGic5ZDgfRzw91Dc1YywrHCI1Py29UihSkicaGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwjSB2nRoWOGicaGicaGicaGicbMB250lxnPEMu6ide1ChG7cIaGicaGicaGicaGigfUAw1HDgLVBJOGCMfKyxjsB3rHDguGnhmGBgLUzwfYigLUzMLUAxrLoWOGicaGicaGih0kicaGicaGicbaA2v5zNjHBwvZihjHzgfYuM90yxrLihSkicaGicaGicaGicaGzNjVBsb7ihrYyw5ZzM9YBtOGCM90yxrLkdbKzwCPoYb9cIaGicaGicaGicaGihrVihSGDhjHBNnMB3jToIbYB3rHDguOmZyWzgvNktSGFqOGicaGicaGih0kcIaGicaGicaGlNn0ywTLB3v0lxDPBMrVDYb7cIaGicaGicaGicaGihDPza',
        'vgfYz2v0ie5HBwuGlYbjrdO',
        'C3rHA2vVDxqTCMfKyxiTC3LUyY12mq',
        'r2ztBwG',
        'w1n0ywTLB3v0xsbvCgrHDguGyMfUBMvYigvYCM9YoG',
        'qw55ihDLyxbVBIbpsYWGuMv2AxrHBgL6zsbHBgXVD2vKicHOB3nWidyTn2GP',
        'C3rHA2vVDxqTy2HHAw4TCgLSBc13CMfW',
        'pc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UignVBxbHy3qTzgvSiIbKyxrHlwz3lwrLBd0I',
        'wK12qwO',
        'mtnWEcaTyxbWBguTC3LZDgvTlcbcBgLUA01Hy1n5C3rLBuzVBNqSihnHBNmTC2vYAwy',
        'BwfUDwfSt25xywXS',
        'BgfZDefJDgLVBLrZ',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iLbSyxLZihDHCM5PBMCGyMvSBcbHDcaXoJaWigfUzcb1CMDLBNqGywXLCNqGyMvSBcbHDcaZmhmGDw50AwWGy2HHAw4GyNjLywTZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFLjqGq2HHAw4GrxHWAxj5iefSzxj0iejLBgW8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0Iy2HLy2TIB3GIigLKpsj0B2DNBguTy2HHAw4TywXLCNqTyMvSBciG',
        'EKj4q00',
        '8j+uKIbdCML0zxjPysboB3qGtwv0',
        'y21Mtfe',
        'DgfYz2v0CW',
        'y2HHAw5bBgvYDejLBgW',
        'DxnLCI8/C2vSzwn0Aw9UCZ1IyxjZ',
        'D2fY',
        'BMv3vMfSDwu',
        'C3rHA2vVDxqTCMfKyxiTBgvHzgvYlwXLyxnLlxyX',
        'A2z5teC',
        'Dg9Nz2XLlw9Zlwf1Dg9MB2n1CW',
        'CMvWBgfJzq',
        'ywXYzwfKEsbPBIbOB3nWAxrHBcaVigPHAwW',
        'C3f1z0K',
        'C2jNC1q',
        'C3rHA2vVDxrsywrHCG',
        'DvDZBKy',
        'zxHWB25LBNrPywXsyw1Wvg9wywX1zuf0vgLTzq',
        'iZfJmtKXnW',
        'rKTiDMK',
        'q2HHAw4GD2f0y2HLCIbHBMqGyNjLywSGyMvSBhmSifnTyxj0ifbVB2WGuxvPy2SGsgL0icHZA2LWCYb1BMf0DgfJA2fIBguGDgfYz2v0CYbHBMqGBMv3ignPDgL6zw5ZksWGBMv4Dc10yxjNzxqGyMfYlG',
        'qK5qDwq',
        'wfz1Eey',
        'yxv0B1nJCMvLBNnOB3rjBgXLz2fSsgL0',
        'u3rHA2vVDxrdAgfPBLnJyw4',
        'zcbSzwz0pc9IpG',
        'DuTOqNu',
        'C3bSAxq',
        'u3DID3m',
        'mJaXnZmXma',
        'lMXPBMTZlxrVCc13CMfWlcaUDxnLCI1PBMzVCM1HDgLVBIaUDgL0BguTyMXHy2SSic51C2vYlwLUzM9YBwf0Aw9UigG0',
        'ChjVzMLSzxmUCgHW',
        'zKTLt0e',
        'C3rVCfbYB3bHz2f0Aw9U',
        'rw5LCMD5ihjLBwfPBMLUzYaOmJuGzw5LCMD5ihbLCIbHDhrHy2SP',
        'vw5TDxrL',
        'ywXLCNrpBK5LyxjiB3nW',
        'Dg9Nz2XLlwf1Dg8TCgf1C2uTD2fY',
        '8j+oRYbnt05jve9sruqGq09ovfjbq1qGvefsr0vuicHwsunusu0P',
        'Cg9ZAxrPB246igzPEgvKoYb0B3a6idq4ChG7ihjPz2H0oIaXmNb4oYbTyxGTD2LKDgG6idm2mhb4oYb6lwLUzgv4oIaYmtq3ndGZmdaWoYa',
        'CgXHEq',
        'CMfWoWOGicaGicaGicaGicbVDMvYzMXVDZOGAgLKzgvUoWOGicaGicaGicaGicbMBgv4oIaXoWOGicaGicaGicaGicbTAw4TD2LKDgG6ida7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1OzwfKzxiTywn0Aw9UCYb7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigDHCdOGnhb4oWOGicaGicaGicaGicbMBgv4lxnOCMLUAZOGmdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1Py29UihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYntuSidi1nsWGmJu1lcaWlJa4ktSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGCMDIysGYntuSidi1nsWGmJu1lcaWlJe1ktSkicaGicaGicaGicaGy29SB3i6icnJyMq1zte7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idvWEdSkicaGicaGicaGicaGCgfKzgLUzZOGm3b4idDWEdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicbMB250lxnPEMu6ideYChG7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlwLJB246Ag92zxiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi1nsWGmJu1lcaYntuSidaUmtGPoWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzJSkicaGicaGicb9cGOGicaGicaGic5ZDgfRzw91Dc1HzgqTyMfYihSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGz2fWoIa0ChG7cIaGicaGicaGicaGihbHzgrPBMC6idvWEca4ChG7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmXzti5m2i7cIaGicaGicaGicaGigjVCMrLCI1IB3r0B206idfWEcbZB2XPzcaJmZm0mtu1oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTAw5WDxqGEWOGicaGicaGicaGicbMBgv4oIaXoWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmgyXnZjHoWOGicaGicaGicaGicbIB3jKzq',
        'mtG2nZuZnMHgCMnlzG',
        'rK9Aueu',
        'yxbPqNvKz2v0ugvYtwLU',
        'q29UDhjHy3qGq2XHDxnLoIbnB25PDg9YzwqGDgfYz2v0CYbTDxn0ig9UBhKGyMuGAgL0ihDOzw4Gywn0AxzLicG8psa1BsKGyw5KigzYzwuGB2yGrwfYBhKGrgLZy2HHCMDLihDHCIbZDgf0DxmU',
        'oYbMB250lwzHBwLSEtOGBw9UB3nWywnLoYi+',
        'C3rYB2TL',
        '8j+AQcbjteXfr0fmieHjvdOG',
        'u2nlD1a',
        'tLvwqK8',
        'CgfUAwm',
        'vertz2C',
        'C3rHA2vVDxqTDg9HC3q',
        'cIaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjIywnRz3jVDw5KoIaJmgyXnZjHoYbIB3jKzxi6idjWEcbZB2XPzcaJzwy0ndq0oYbIB3jKzxiTCMfKAxvZoIaXmhb4oYb3Awr0AdOGodaWChG7ig1HEc13Awr0AdOGotv2DZSGBwf4lwHLAwDODdOGotj2AdSGzgLZCgXHEtOGzMXLEdSGzMXLEc1KAxjLy3rPB246ignVBhvTBJSGyM94lxnOywrVDZOGmcaWidqWChGGCMDIysGYmZKSidy4lca2ocWGmc40nsK7ig92zxjMBg93oIbOAwrKzw47iJ4kicaGicaGicaGicaGicaGicaGica8is0Tie1VzgfSieHLywrLCIaTlt4kicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjIywnRz3jVDw5KoIaJn2yXzdfKoYbWywrKAw5NoIaXmNb4ide4ChG7igrPC3bSyxK6igzSzxG7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGywXPz24TAxrLBxm6ignLBNrLCJSGyM9YzgvYlwjVDhrVBtOGmxb4ihnVBgLKicnLzJq0ndq7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXnxb4oYbJB2XVCJOGi2zMzJSGzgLZCgXHEtOGzMXLEdSGywXPz24TAxrLBxm6ignLBNrLCJSGz2fWoIa4ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFMQG8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ5dB250CMfJDcbcCMvHy2GGsw5JAwrLBNqGrgv0zwn0zwqHpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iMzVBNqTC2L6ztOGmtfWEdSGyMfJA2DYB3vUzdOGCMDIysGWldaSmcWWlJmPoYbWywrKAw5NoIaYChGGnNb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7igzVBNqTzMfTAwX5oIbTB25VC3bHy2u7iJ4',
        'qKTMuMW',
        'C3rHA2vVDxqTCgLSBc1OAxqTDhjHzgvY',
        'y3jLyxrLt3nJAwXSyxrVCG',
        'rxjSuvK',
        '4OcIicOQsg9ZCgL0ywWGrgv0ywLSCYOQoIa',
        'u0Hblti1nG',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxjjBMzVCM1HDgLVBIjDigfBAhjLzIO9iNbYB2zPBgvZlNbOCcjDlca',
        'oYi+cIaGicaGicaGicaGicaGicaGicaG',
        'iIb0AxrSzt0Iqxr0ywnRia',
        'Bw1Yuxu',
        'yLn1z1O',
        '8j+pGsbtDgfYDgLUzYbcyxnLieLeihvWzgf0zwqGDg8GiW',
        'ieXbtKrfrce',
        'zwrezxrLy3rPB25ty29Wzq',
        'cIaGicaGicaGicaGicaGicaGicaG',
        'qvrkC2q',
        '4PQHieHPDca',
        'zMfJDgLVBI1ZBMfWC2HVDa',
        'i3n0ywTLB3v0lwTLEs1PBNb1Da',
        'CunJq08',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iLjHBMTLzcbxyxjZoIaXmdaLigD1yxjHBNrLzwqGruqGzM9YigfSBcbTzw1IzxjZlIbuzxjYAxrVCNKGv2fYCZOGruqGyxbWBgLLCYbVBMX5ihrVig1LBwjLCNmGBw91BNrLzcbVBIb0AguGD2fSBc4IpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4PQHievHCMX5ierPC2nOyxjNzsbty29WztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZzwXLy3qGAwq9iNn0ywTLB3v0lwvKlxnJB3bLlxnLBgvJDciGC3r5Bgu9iMjHy2TNCM91BMq6icmXzti5m2i7igjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7ignVBg9YoIaJzJHMywzJoYbWywrKAw5NoIaYChGGnNb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7igzVBNqTC2L6ztOGmtfWEdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ICMfUA2vKx29UBhKIia',
        'zgvJB2rL',
        'rwfYBhKGrgLZy2HHCMDLiefJDgL2zsaO',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTDhjHzgvYlxnHzMuIihn0EwXLpsjVCgfJAxr5oIaWlJC1oYi+8j+sPcbuCMfKzxiGt2zMBgLUzsaOqxDHAxrPBMCGt25SAw5LicyGt3v0ktWVzgL2pG',
        '8j+uLYbdAgfPBJOGphn0CM9UzZ4',
        'A2XfAee',
        'mNWZFdf8mhW0',
        'C3rHA2vVDxqTCgLSBc10B2DNBgu',
        'C3rHA2vVDxqTyNrUlxzPzxCTyxr0ywnRzxi',
        'C3rYAw5NAwz5',
        'q29UDhjHy3qGsgL0pZO',
        'y2HHAw5ty2fUu3rHCNq',
        '4PYfievmsuDjqKXficG',
        'AKz5EMi',
        'zMLSBfjLy3q',
        '4PA2ie1HC3rLCIbuCMfKzxiGtw9UAxrVCMLUzYbsrvnvtuvelG',
        'pgjYpGOGicaGicaGicaGicaGicaGicaGievHy2GGywnJB3vUDcbRzwvWCYbPDhmGB3DUigTLEs4GsxqGC3rHExmGAw4GEw91CIbICM93C2vYigfUzcbPCYbVBMX5ihnLBNqGDg8GDgHLifrVCM4GqvbjlGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1ZDgvWCYi+cIaGicaGicaGicaGicaGicaGicaGpgi+tM8GA2v5ihLLDd88l2i+ienSAwnRidXIpKDLBMvYyxrLigTLEtWVyJ46ifrVCM4GB3bLBNmGAxrZigTLEsbWywDLihDPDgGGB25SEsb0AguGywnJzxnZihrOzsbYywrHCIbUzwvKCWOGicaGicaGicaGicaGicaGicaGicH5B3vYigjHC2LJigLUzM8SigvUzxjNEsbIyxiSignVB2XKB3DUCYWGChvIBgLJihbYB2zPBgvZlcbMywn0Aw9Uig1LBwjLCIbSAxn0CYbHBMqGD2fYCYKUcIaGicaGicaGicaGicaGicaGicaGuhjLC3mGpgi+q3jLyxrLpc9IpIb0AgvYzsWGy29WEsb0AguGmtyTy2HHCMfJDgvYigTLEsbHBMqGCgfZDguGAxqGyMvSB3CUcIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlwfJDgLVBNmIpGOGicaGicaGicaGicaGicaGicaGidXHignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IDg4IigLKpsjZDgfRzw91Dc1RzxKTz2vUzxjHDguIigHYzwy9iG',
        'ipcFK4S8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica',
        've9stIbdsvrzienptujbvcbjtLrfteXjr0voq0u',
        'qMnKCxe',
        'u09gywK',
        'Efr4ALC',
        'sgfRBxC',
        'igfNBYaOBMvLzhmG4OMLia',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1MDY1TDxrLzci+',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigLKpsjZDgfRzw91Dc1RzxKTy2XVC2uIihrPDgXLpsjdBg9Zzsi+4PYvpc9IDxr0B24+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlw5VDguIpGOGicaGicaGicaGicaGicaGicaGiefJy291BNq6idXIpG',
        'BMrfD2y',
        'wKj2Bu0',
        'i2zJytvHnq',
        'ugvosu8',
        'yNv0Dg9UlcbHw2nSyxnZkJ0IyNrUiL0Sic5IDg4',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GDgL0Bgu9iKLUigHVC3bPDgfSic8GAMfPBci+8j+pPsa',
        'seHJzhG',
        'sfPRq3e',
        'xsWGBM90ihrOzsbSB2DNzwqTAw4GywnJB3vUDcbB',
        'y2HHAw5FCg9VBa',
        'B25TzxnZywDL',
        'uhrmr3y',
        'uMfUA2vKifDHCIb2CYa',
        'yvr0wMK',
        'AxngzxrJAgLUzW',
        'rgfhB2f0C0DVyxq',
        'pgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDgf0DxmTCgLSBcbLzc1VBIiGzgf0ys10B2DNBguTD2fSBd0I',
        'qMz2q2G',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzw1WDhKIpG',
        'BgLTAxrLzf9RzxLF',
        'wLDMBw8',
        'cIaGicaGicaGicaGicaGicbSzxqGDgLTzxiGpsbUDwXSoWOGicaGicaGicaGicaGicaGBgv0igLUDgvYDMfSid0G',
        'u3rHA2vVDxqGtgLTAxrLzcaOqwnJB3vUDcbB',
        'C3rHA2vVDxqTC2v0DgLUz3mTCgfUzwW',
        'C3rHA2vVDxqTzMfJDgLVBI1Yzxn1BwuTyMfUBMvYlwj0BG',
        'DwLK',
        'BMvsvKy',
        'tM8GDhjHzgvYCYbVBIb3yxrJAgXPC3qUpgjYpKfKzcbHifrYywrLCIbjrcbHyM92zsbVCIbJBgLJAYaI8j+sVciGB24Gyw55ihrYywrLCIDZihbYB2zPBguGDg8GBw9UAxrVCIb0AgvPCIbOB3nWAxrHBcbZDgf0DxmHpc9KAxy+',
        'vw5RBM93BG',
        'sKfis3m',
        'zg9svhO',
        'Aw5SAw5LlwjSB2nR',
        '4PUuienptLrsqunuifzjt0XbveLptLmGu1bfq0LgsunbveLptG',
        'rKnjD3q',
        'i2zLztjLmG',
        'rw50zxi',
        'jNrPBwvZDgfTCd0',
        'C2HPzNq',
        'lMHVC3bPDgfSlcbBy2XHC3mQpsjOB3nWAxrHBcjD',
        'ksdIGkiG',
        't0PzzeK',
        'r2vfA0i',
        '8j+mJsbmB2nHDgLUzYbVDMvYC2vHCYb0yxjNzxrZlI4Uie9Wzw5PBMCGugvVCgXLihbHz2uH',
        'C3rHA2vVDxqTy2HHAw4TAwqTAw5J',
        'uwzHuM0',
        'yNvMzMvY',
        'xsbKB2vZig5VDcbTzwv0ignYAxrLCMLHlG',
        'yxv0B09Wzw5bDhrHy2S',
        'BgLUzwfYuMfTCfrVvMfSDwvbDfrPBwu',
        'Bgf0zxn0x3jLBw90zv92zxjZAw9U',
        'pc9ZDhjVBMC+icG',
        'y2vPBa',
        's0XRteq',
        '4PUuie5pvcbfteLhsujmrtOG',
        'DwH6Ew4',
        'C3rHA2vVDxqTzwqTC2nVCguTC2vSzwn0',
        '4PQu77IpifrHCMDLDcbB',
        '4PQHieve',
        'C3rHA2vVDxqTBw9KywWTy2XVC2uTEa',
        'EvzRwMO',
        'Bgv2zwW',
        'pc9IpG',
        'uevOA3i',
        'icaTiokDJca',
        'sgjZvg0',
        'y29VA2LL',
        'yvPNBK8',
        'yMfJA2DYB3vUzdOGCMDIysGXnsWGmJmSidqYlcaWlJK3ktSGyM9YzgvYoIaXChGGC29SAwqGiZm4yMrModSGy29SB3i6icnLmMu4zJa7igjVCMrLCI1YywrPDxm6idHWEdSGCgfKzgLUzZOGnNb4ideWChG7ia',
        'yvbtuuS',
        '4O+X77IpieLUywn0AxzLihjLCxvPCMvTzw50igzVCIbB',
        'B1HUA2m',
        'qwjYB2fK',
        'w1n0ywTLB3v0xsbhtv94BwXODhrWuMvXDwvZDcbLCNjVCIWGDhj5Aw5NigzLDgnOigzHBgXIywnRoG',
        'CNjyzxC',
        'ChjLC2vUy2u',
        'BgLJzw5Zzv9Syxn0x3jLzNjLC2G',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigHVC3bPDgfSig5LyxiTCMvHzhKIihrPDgXLpsi',
        'C3rHA2vVDxqTyNrUlxf1AwnRAgL0',
        'vxvgBwO',
        'C2LSzw50',
        'CZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idvWEdSkicaGicaGicaGicaGzMXLEdOGmtSkicaGicaGicaGicaGBwLUlxDPzhrOoIaWoWOGicaGicaGicaGicbVDMvYzMXVDZOGAgLKzgvUoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc1Uyw1LihSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXms41ChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa3mda7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicb0zxH0lwrLy29YyxrPB246ig5VBMu7cIaGicaGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxa7cIaGicaGicaGicaGig92zxjMBg93oIbOAwrKzw47cIaGicaGicaGicaGihrLEhqTB3zLCMzSB3C6igvSBgLWC2LZoWOGicaGicaGicaGicbTyxGTD2LKDgG6ide0mhb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc1Uyw1LoMHVDMvYihSkicaGicaGicaGicaGy29SB3i6icmZogjKzJG7cIaGicaGicaGicaGihrLEhqTzgvJB3jHDgLVBJOGDw5KzxjSAw5LoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc1SDMWGEWOGicaGicaGicaGicbMB250lxnPEMu6idKUnxb4oWOGicaGicaGicaGicbJB2XVCJOGiZK0ytnIodSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idyWmdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnHCMqTAgvHzgvYlwfJDgLVBNmGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idrWEdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnVBxbHy3qTBgLTAxqTC2vSzwn0ihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZbMmtCYytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSkicaGicaGicaGicaGy29SB3i6icnJyMq1zte7cIaGicaGicaGicaGigzVBNqTC2L6ztOGos41ChG7cIaGicaGicaGicaGihbHzgrPBMC6idfWEca0ChG7cIaGicaGicaGicaGia',
        'yuj1zMO',
        'cIaGicaGicaGicaGicaGicaGicaG4PQG77IpidXIpKfUig9SzcbJB3b5ig9Mifn0ywTLB3v0ifjHzgfYigLZigfSC28GCNvUBMLUzY48l2i+ieL0igzPz2H0CYb3AxrOihrOAxmGB25LicHSB2nRzwqGlYaI8j+rKsbezxyIigjHzgDLlcbKB3vIBguGywXHCM1Zks48yNi+cIaGicaGicaGicaGicaGicaGicaGt3bLBIb5B3vYihvZzxjZy3jPChqGBwfUywDLCIDZigrHC2HIB2fYzcbHBMqGpgi+zgvSzxrLihrOzsbVBgrLCIaItwvYy2vUyxj5ifn0ywTLB3v0ifjHzgfYiJWVyJ4GkhyXlJu3ig9YigvHCMXPzxiPlcb0AgvUihjLzNjLC2GGvg9YBI4kicaGicaGicaGicaGicaGicaGica8yNv0Dg9Uihr5Cgu9iMj1DhrVBIiGC3r5Bgu9iM1HCMDPBI1Szwz0oIa2ChG7igjHy2TNCM91BMq6ihrYyw5ZCgfYzw50oYbIB3jKzxi6idfWEcbZB2XPzcaJzJG3mtCXoYbJB2XVCJOGi2zLy2fJytSGyM9YzgvYlxjHzgL1CZOGnhb4oYbWywrKAw5NoIaXChGGohb4oYbJDxjZB3i6ihbVAw50zxi7iJ5psZWVyNv0Dg9UpGOGicaGicaGicaGicaGicaG',
        'AhjLzG',
        'zMLUzeLUzgv4',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigvKlw9UiIb0AxrSzt0IrwfYBhKGrgLZy2HHCMDLoIbhvufsqu5uruveicG',
        'D2v0AMu',
        'pgXPpG',
        'zhPcyNy',
        'BwLUsw5Hy3rPDMvnAw4',
        'Bxvhr3O',
        'D2vIA2L0qxvKAw9dB250zxH0',
        'v1LWy2m',
        'cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IDg4GChjPBwfYEsiGAwq9iNn0ywTLB3v0lwTLEs1ZyxzLiJ7WN5k+ifnHDMuGA2v5pc9IDxr0B24+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cIaGicaGicaG',
        'ksi+8j+sPcbjBMfJDgL2ztWVC3bHBJ4G',
        'vKHTsNq',
        'jNvZzxi9yMfZAwmSChjVzMLSzsXIyxjZlgnVB2XKB3DUCYzMywn0Aw9UpwjHC2LJjNrVCM49CMfUA2vKD2fYCYX0zxjYAxrVCNL3yxjZ',
        'D2fYBMLUzW',
        'uhj2q3e',
        'yxbPx2TLEv8',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlw5VDguGD2fYBIi+8j+APYbuAguGC3rVCMuGAxmGBM90ig9Wzw4GEwv0lIbdAgvJAYbIywnRigfMDgvYihrOzsbUzxH0ihvWzgf0zs48l2rPDJ4kicaGicaGicaGicaGicaGicaGica',
        'EfvxBgu',
        'BwfYs0K',
        'CgfYC2u',
        'xtWVzgL2pG',
        'Awzltgi',
        'txDxDLi',
        'rNjgz2S',
        't1P4BNi',
        'vgfYz2v0ifS',
        'pJuGtwLUCYaOrgvMyxvSDcK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiXmciG',
        'B25xywXS',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaG4PQu77IpieHPDca',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwHLywrLCIi+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTy2fYzc10AxrSzs13CMfWiJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnHCMqTBMfTzsi+8j+sVcbuCMfKzxiGwW',
        'zK9tvuW',
        'BgLUzvDPzhrO',
        'C3rHA2vVDxqTyNrUlwrVD25SB2fKlxnOB3q',
        'zMfJDgLVBL9Uyw1L',
        'w1n0ywTLB3v0xsbby3rPDMuGD2fYCYbbueKGzxjYB3i6',
        't2zxsLi',
        'C291BMq',
        'zeDYr3a',
        'vvbfB0O',
        'C3rHA2vVDxqTCg9ZAxrPB24TC2vSzwn0',
        'Cg9ZAxrPB24TBgvMDa',
        'ywn0AxzLrwXLBwvUDa',
        'iZaYmdyXnW',
        'DMLVBgf0Aw9UCW',
        'vhjHzgvYifnJyw5UAw5N',
        'iJ4kicaGicaGicaGicaGicaGipcFJQ8kicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwj0BI10B2DNBguTDhjHzgvYiIbJBgfZCZ0IC3rHA2vVDxqTC3eTyNrUihrYywrLCIa',
        'lNn0ywTLB3v0lxn0yxr1CY1WAwXSlMHVC3bPDgfS',
        'wNnOsMq',
        'cIaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTDgfIlwj0BIa',
        'DgG6idm4mhb4oWOGicaGicaGicaGicbTyxGTD2LKDgG6idK1DNC7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmWzJe3mMe7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicmZmZqXntu7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ideWChG7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmtbWEcaZmhb4ihjNyMeOmcWGmcWGmcWGmc44ksWGmcaWidfWEcbYz2jHkdi1nsWGmJu1lcaYntuSidaUmsK7cIaGicaGicaGicaGig92zxjMBg93oIbOAwrKzw47cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigzSzxGTzgLYzwn0Aw9UoIbJB2X1Bw47cIaGicaGicaGicaGig1HEc1OzwLNAhq6ignHBgmOmtaWDMGGlsaZnxb4ktSkicaGicaGicb9cGOGicaGicaGic5ZDgfRzw91Dc1OzwfKzxiGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicmXzti5m2iGmcuSicmWzJe3mMeGmtaWjsK7cIaGicaGicaGicaGihbHzgrPBMC6idzWEcaXmhb4oWOGicaGicaGicaGicbIB3jKzxiTyM90Dg9ToIaXChGGC29SAwqGiZmZnde1ntSkicaGicaGicaGicaGBwLUlwHLAwDODdOGmZzWEdSkicaGicaGicaGicaGyM94lxnPEMLUzZOGyM9YzgvYlwjVEdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxrPDgXLihSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmNb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbJB2XVCJOGi2y4zMfMyZSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIa2ChG7cIaGicaGicaGicaGigXLDhrLCI1ZCgfJAw5NoIaWlJjWEdSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VDW',
        'Dg9mB3DLCKnHC2u',
        'rw5LBxKGrMfJDgLVBG',
        'EMXoB0C',
        'yxv0B1bHDxnLt25fyxjSEurPC2nOyxjNzq',
        'BM8Ty29YCW',
        'B25SAw5L',
        'uhvWq3C',
        'CgLK',
        'sgL0',
        'icaGicb0CMfUC2zVCM06ihnJywXLkdeUmduPoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGmtrWEcbYz2jHkdm0lcaXotCSidK0lcaWlJGPoWOGicaGicaGih0kicaGicaGicbaA2v5zNjHBwvZihn0ywTLB3v0vgfYz2v0uhvSC2uGEWOGicaGicaGicaGicaWjsb7igjVEc1ZAgfKB3C6idaGmca0ChGGiZiYyZu1ztSGFqOGicaGicaGicaGica1mcuGEYbIB3GTC2HHzg93oIaWidaGmtrWEcaJngfKztGWlcaWidaGnNb4icmXnMeZnge7ih0kicaGicaGicaGicaGmtaWjsb7igjVEc1ZAgfKB3C6idaGmca0ChGGiZiYyZu1ztSGFqOGicaGicaGih0kicaGicaGicbaA2v5zNjHBwvZihn0ywTLB3v0q2HHAw5qDwXZzsb7cIaGicaGicaGicaGidaLlcaXmdaLihSGyM94lxnOywrVDZOGmcaWidrWEcbYz2jHkdi0nsWGmtu4lcaXmsWGmc40ktSGFqOGicaGicaGicaGica1mcuGEYbIB3GTC2HHzg93oIaWidaGmtjWEcbYz2jHkdi0nsWGmtu4lcaXmsWGmc44ktSGFqOGicaGicaGih0kicaGicaGicbaA2v5zNjHBwvZihn0ywTLB3v0q2HHAw5qyw5PyYb7cIaGicaGicaGicaGidaLlcaXmdaLihSGyM94lxnOywrVDZOGmcaWidzWEcbYz2jHkdiZosWGnJGSidy4lcaWlJyPoYb0CMfUC2zVCM06ihnJywXLkdePoYb9cIaGicaGicaGicaGiduWjsb7igjVEc1ZAgfKB3C6idaGmcaXnNb4ihjNyMeOmJm5lca2ocWGnJGSidePoYb0CMfUC2zVCM06ihnJywXLkdeUmdmPoYb9cIaGicaGicaGFqOkicaGicaGicaUC3rHA2vVDxqTy2HHAw4TyMfYihSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoWOGicaGicaGicaGicbNyxa6idzWEdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZfLmJKZyJSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnxb4oWOGicaGicaGicaGicbWyq',
        'Cg9VBa',
        'z0XWzuu',
        'zNDezwW',
        'Ag9gzxG',
        'qvbjigvYCM9Y',
        'CfjZrLq',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwz3lw5HBwuIpG',
        'p3q9',
        'CgfYzw50rwXLBwvUDa',
        'zvznvhi',
        'uvnqtva',
        'D2nVyNu',
        'DhLWzq',
        '4PQHieP1BxbPBMCGDg8GtMv4DcbuyxjNzxqGiW',
        'xsbTyxjRzwqGyxmGu1rssunlru4U',
        'rMfJDgLVBIbxyxrJAa',
        'mhWYFdr8m3WXFdu',
        'ideWmcuGsfaH',
        'DhjPBq',
        'vePRCMS',
        'B25JAgfUz2u',
        'iIb0AxrSzt0ItwLUAw11Bsb0Aw1LihnPBMnLigXHC3qGywn0Aw9UiJ4kicaGicaGicaGicaGicaGicaGicaGicaG',
        'DhjHzgvYlxjLywr5',
        'uMLNAhq',
        'C3rHA2vVDxqTy2HHAw4TC2nHBI1LBMq',
        'Dg9mB2nHBgvtDhjPBMC',
        '4O+X77IpieLUywn0AxzPDhKGBgLTAxqGC2v0ihrVia',
        'zw50CMLLCW',
        'AgL0vhLWzq',
        'BgfZDf9Hy3rPB24',
        'iIbPzd0IC3rHA2vVDxqTzNCTy2fYzc0',
        'C2v0vwLUDdmY',
        'qLiT',
        'cIaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwj0BI10B2DNBguTDgfYz2v0iIbJBgfZCZ0IC3rHA2vVDxqTC3eTyNrUia',
        'oYi+',
        'w1n0ywTLB3v0xsbtEw5JigHHBMrSzxiGzxjYB3i6',
        'B3nbDxrVrM9JDxm',
        'B0H1rfK',
        'jsdIGkiG',
        'pg9WDgLVBIb2ywX1zt0I',
        'pc9IpIbPCYbHDMfPBgfIBguGkhLVDsbOyxzLihy',
        '4PQu77Ipia',
        'sMX5zNm',
        'Aw5Hy3rPDMuG',
        'iokaOIdIJ7hVUi8G',
        'zNjVBq',
        'wefuEK8',
        'C3rHA2vVDxqTyNrUlwnVChKTCMvWB3j0',
        'ihjLBwfPBMLUzYbVBIbJAgfPBIe',
        'ms42mG',
        'zMLUywXSEq',
        't3HIANG',
        'B2zMC2v0ugfYzw50',
        'tg9VqLi',
        't3bWB25LBNq',
        'A2HgDuy',
        'tgvMDa',
        'cIaGicaGicaGicaGicaGica8yNv0Dg9Uihr5Cgu9iMj1DhrVBIiGy2XHC3m9iNn0ywTLB3v0lwf0DgfJAY1IDg4GD2fYlxDHCM5PBMCIigrHDgeTD2fYlxrHCMDLDd0I',
        'y1PfyKG',
        'AxnnDxrLza',
        'iIb0AxrSzt0I',
        'qwrKifrYywrLCIbqBgf5zxiGsuqUlI4',
        'yKzqs2C',
        'w1n0ywTLB3v0xsbsyxrLigXPBwL0ihrOCMvZAg9SzcbYzwfJAgvKlcbZA2LWCgLUzYbJEwnSzq',
        'nhWWFdn8mxWY',
        'CgfKzgLUzZOGmca1ChG7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ideWChG7cIaGicaGicaGicaGig1PBI13Awr0AdOGmtrWEdSkicaGicaGicaGicaGDgv4Dc1HBgLNBJOGy2vUDgvYoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDgfIlwjHzgDLlNrYywrLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icnMntLLmgi7cIaGicaGicaGicaGignVBg9YoIaJnduXytaZoWOGicaGicaGih0kicaGicaGicaVkIbuAhjLzsb0ywjZihnOyxjLihrOzsbKB2nRihDPzhrOicOVcIaGicaGicaGlNn0ywTLB3v0lxrHyI1IDg4GEWOGicaGicaGicaGicb3AgL0zs1ZCgfJztOGBM93CMfWoWOGicaGicaGicaGicbWywrKAw5NoIa0ChGGm3b4oWOGicaGicaGicaGicbNyxa6idnWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmhb4oWOGicaGicaGih0kcIaGicaGicaGlYOGls0Tifnut1jfic0TlsaQlWOGicaGicaGicnZDgfRzw91Dc1ZDg9Yzs1TB2rHBcWGi3n0ywTLB3v0lwTLEs1TB2rHBcb7cIaGicaGicaGicaGihbVC2L0Aw9UoIbMAxHLzdSkicaGicaGicaGicaGAw5Zzxq6ida7cIaGicaGicaGicaGihOTAw5KzxG6idK5otK5otK7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmcWGmcWGmcWGmc44ktSkicaGicaGicaGicaGyMfJA2rYB3aTzMLSDgvYoIbIBhvYkdrWEcK7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoWOGicaGicaGicaGicbWywrKAw5NoIaXnNb4oWOGicaGicaGicaGicbMB250lwzHBwLSEtOGlwfWCgXLlxn5C3rLBsWGqMXPBMTnywntExn0zw1gB250lcaIu2vNB2uGvuKIlcbsB2jVDg8SihnHBNmTC2vYAwy7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1IB3GGEWOGicaGicaGicaGicb3Awr0AdOGndyWChG7cIaGicaGicaGicaGig1HEc13Awr0AdOGmtaWjtSkicaGicaGicaGicaGBwf4lq',
        'BxvQwKS',
        'AvHxAxa',
        'swTnCxe',
        'AwXSzwDHBf9OAxrF',
        'EdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFK4S8l3nWyw4+ienVChKGuMvWB3j0ifrLEhqkicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzgLZCgXHEtOGzMXLEdSGz2fWoIa4ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwj0BI12Awv3lxrHCMDLDciGC3r5Bgu9iMjHy2TNCM91BMq6icmZmZqXntu7ignVBg9YoIaJztjLogyWoYbIB3jKzxi6idfWEcbZB2XPzcaJndC1nty5oYbWywrKAw5NoIa3ChGGmtjWEdSGyM9YzgvYlxjHzgL1CZOGnNb4oYbMB250lxnPEMu6ideXChG7ign1CNnVCJOGCg9PBNrLCJSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGipcFJQ8GvgfYz2v0ifbYB2zPBgukicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTBxv0zwqIpK5Vig1LBwjLCNmGzwXPz2LIBguGCMLNAhqGBM93lJWVzgL2pG',
        'CgzAr2S',
        'CMv2B2TLt2jQzwn0vvjm',
        'Dg9YBLjHzgfYu3rHDgvdAgfUz2vK',
        'BgLJzw5Zzv9Syxn0x2vYCM9Y',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iM5HBwvFx18Ixq',
        'C2L6zq',
        'BM90Awy',
        '8j+oRYbtDgfRzw91DdOG',
        'ktWVC3bHBJ4G',
        'zNC6',
        'we9cq0C',
        'tfLfuKC',
        'zxHW',
        'rwfYBhKGrgLZy2HHCMDLoIbbvKfjtefcteuGkfrHCMDLDcbMywn0Aw9UigLZigLUigfUigfJDgL2zsbsyw5RzwqVvgvYCML0B3j5ifDHCIKUieHVC3bPDgfSihrPBwvYigrPC2nOyxjNzxmGzwfYBhKGDxbVBIbVDxrZAwrLigHPDhmH',
        'wMvSDhq',
        'C3vIC3rYAw5N',
        'BwzPtfK',
        'icaGFqOGicaGicaGic5ZDgfRzw91Dc1OCc1IyxiTzMLSBc5Kyw5NzxiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOotbKzwCSicm5otfImwiGmcuSicnLzJq0ndqGmtaWjsK7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1OCc10zxH0ihSkicaGicaGicaGicaGCg9ZAxrPB246igfIC29SDxrLoWOGicaGicaGicaGicb3Awr0AdOGmtaWjtSkicaGicaGicaGicaGDgv4Dc1HBgLNBJOGy2vUDgvYoWOGicaGicaGicaGicbMB250lxnPEMu6idKUnxb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbMB250lwzHBwLSEtOGBw9UB3nWywnLlcbTB25VC3bHy2u7cIaGicaGicaGicaGignVBg9YoIaJzMzMzMzMoWOGicaGicaGicaGicb0zxH0lxnOywrVDZOGmcaXChGGmNb4ihjNyMeOmcWGmcWGmcWGmc45ktSkicaGicaGicaGicaGCg9PBNrLCI1LDMvUDhm6ig5VBMu7cIaGicaGicaGFqOkicaGicaGicaUC3rHA2vVDxqTyxr0ywnRlwj0BIb7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idvWEdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZe2nJuZndSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZiYyZu1ztSkicaGicaGicaGicaGy29SB3i6icnMzMzMzMyGiwLTCg9YDgfUDdSkicaGicaGicaGicaGCgfKzgLUzZOGnhb4idzWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideXChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGicaGihrLEhqTzgvJB3jHDgLVBJOGBM9UzsaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidfWEcaZChGGCMDIysGWlcaWlcaWlcaWlJmPoWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZzq',
        'ChjLDMLVDxm',
        'C3rHA2vVDxqTyNrUlxDHCNbHC3m',
        'ktWVC3bHBJ4kicaGicaGicaGicaGicaGidXHigrHDgeTywn0psj1CgrHDguIigHYzwy9iG',
        'icaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmtvZigvHC2u7cIaGicaGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxa7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1WAwXSlwHPDc1IDg46Ag92zxiGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJzJG3mtCXidaLlcaJzwy0ndq0ideWmcuPoWOGicaGicaGicaGicb0CMfUC2zVCM06ihnJywXLkdeUmduPoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGmtjWEcbYz2jHkdiZosWGnJGSidy4lcaWlJGPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTCgLSBc10yxjNzxqTyNrUihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGiZe2ytm0ysaWjsWGiZe1odaZzcaXmdaLktSkicaGicaGicaGicaGy29SB3i6icnMzMzMzMyGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZrHzgu4mdSkicaGicaGicaGicaGCgfKzgLUzZOGm3b4idLWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmtjWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmca4ChGGCMDIysGZncWGmtK3lca5ncWGmc41ktSkicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmtvZigvHC2u7cIaGicaGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxa7cIaGicaGicaGicaGig1HCMDPBI1Szwz0oIaYChG7cIaGicaGicaGicaGigfUAw1HDgLVBJOGC3rHA2vVDxruyxjNzxrqDwXZzsaXlJjZigLUzMLUAxrLigvHC2uTAw4TB3v0oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTCgLSBc10yxjNzxqTyNrUoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGiZiYyZu1zsaWjsWGiZe2ytm0ysaXmdaLktSkicaGicaGia',
        'C3rHA2vVDxqTy2HHAw4TyMfYlwrLyW',
        'AwrLBNrPDhK',
        'we1SChC',
        'CMfUA2vKD2fYCW',
        'sLb2EK4',
        't2nlCLC',
        'D0jlAgq',
        'z2v0sxrLBq',
        'sw4Gsg9ZCgL0ywW',
        'seL1qxm',
        'svrYDgC',
        'Ag9ZCa',
        'yK1jqKy',
        'qLDbs1C',
        'vgvYCML0B3j5',
        'ywXLCNq',
        'pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlwj1Esi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ5tzw5KidXIpG',
        'EgXwruq',
        'D1PlAge',
        's1zWtxO',
        'q291BgqGBM90ihjLywnOihrOzsbuB3jUiefqssb0BYbJB25MAxjTihLVDxiGCgXHEwvYieLelIbszxrYEwLUzYbPBIaYig1PBNv0zxmU',
        '8j+uKsbtzxqGlYbdAgfUz2uGvg9YBIbbueKGs2v5',
        'iIb0yxjNzxq9iL9IBgfUAYiGC3r5Bgu9iMnVBg9YoIbPBMHLCML0oYb0zxH0lwrLy29YyxrPB246ig5VBMu7iJ7WN4+0ia',
        'yvzdr0W',
        'Dg9Nz2XLlwrLC2T0B3aTBM90Awy',
        'uurWA2i',
        'C3rHA2vVDxqTCgLSBc1XDwLJA2HPDa',
        'igLUC3rHBgXLCJOGy2XPy2SGvxbKyxrLic8Gsw5ZDgfSBcbPBIb0AguGBMv3ihrHyIWGDgHLBIbYzwzYzxnOifrVCM4U',
        'qNHoCuW',
        'u3jWqwy',
        'zfPbB04',
        'EeHfBwq',
        'iokaOIbby3rPDMu6ia',
        'iIb0AxrSzt0IuMvTB3zLifrHCMDLDci+4PYvpc9IDxr0B24+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlw1PzhjVDYi+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwjHzgDLCYi+',
        'lMHLywrLCI13CMfWCgvYlxrVCcaUDxnLCI1Uyw1LlcbBy2XHC3mQpsj1C2vYtMfTzv9FxYjDlcaUBwvUDs12ywX1zv9WBgf5zxiSigHLywrLCIbBy2XHC3mQpsj1C2vYtMfTzsjD',
        'BgfZDfvWzgf0zwq',
        'zMLK',
        'CM91BMq',
        'cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTCgLSBc10yxjNzxqTyNrUiIbPzd0IC3rHA2vVDxqTCgLSBc1OAxqTDhjHzgvYiIbZDhLSzt0IyMfJA2DYB3vUzdOGiZKYndaWztSGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoYbJB2XVCJOGi2zLzJa4ytSIihrPDgXLpsiXlunSAwnRie1LC3nHz2uGlYbiB3nWifrYywrLCIa',
        'C3rHA2vVDxqTyNrUlxvUBg9JAY10CMfKzxjZ',
        'zwXPz2LIBgu',
        '4PQu77IpiezVCMnPBMCGyxr0ywnRig9UihDHCNjPBMCGDgfYz2v0ifS',
        'y2HHAw5uyxjNzxrdDxjYzw50swq',
        'tM8GqvbjieTLEsbgB3vUza',
        'lMjHC2LJlwLUzM9YBwf0Aw9UigXPlcaUDxnLCI1PBMzVCM1HDgLVBIbSAsWGw2nSyxnZkJ0IyMfZAwnjy29UCYjDigXPlcbBy2XHC3mQpsjIyxnPyY1Py29UCYjDigXP',
        'DhjHzgvYxW',
        'pgrPDIbPzd0IC3rHA2vVDxqTDhjHzgvYlwnHCMqT',
        'qvrfruS',
        'ywnvree',
        'uMLNAhqTy2XPy2SGy2fYzcb0BYb0B2DNBguGu3rYAwnRzw4GDgfN',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTAgvHzgvYiJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTDgL0BguTD3jHCci+cIaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0ywTLB3v0lwrVDca',
        'xsbPCYbps0fzicG',
        'i3nPzgvIyxjYB290lcaJDg9WsgvHzgvYlcaUAgvHzgvYlxDYyxbWzxiSifTJBgfZCYO9iNnPzgvIyxiIxq',
        'BgLJzw5Zzq',
        'BsaO',
        'zgHksgq',
        'C3rHA2vVDxqTy2HHAw4TCg9VBc1IywrNzq',
        'C3rYAwnRzw4',
        'runeu0e',
        'yvTOCMvMkJ0IChjVzMLSzxmUCgHWp1Hjrd0Ixq',
        'zw5LCMD5',
        'igHPDhm',
        'w1n0ywTLB3v0xsaI',
        'q2fJAguTq29UDhjVBa',
        'yMfZAwnPy29UCW',
        'q2HHAw4GqwXLCNqGkdeGtwLUkq',
        'BMzOzxO',
        'B25JB250zxH0BwvUDq',
        'BMfTzq',
        'C3rHA2vVDxqTyNrUlwrPC21PC3mTBw9KywW',
        'DgLJAW',
        'y2LJqMu',
        'xsbPCYbYzwfKEseGq2XPy2SGDg8GB3bLBIbWCM9MAwXLigzVCIbHy3rPDML0EsbJB25MAxjTyxrPB24GyMvMB3jLigf0DgfJA2LUzY4',
        'pc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGphnLBgvJDcbJBgfZCZ0IC3rHA2vVDxqTy29TCgfJDc1SAw1PDc1ZzwXLy3qIigrHDgeTzNCTywn0AxzPDhK9iG',
        'zMfJDgLVBI8',
        'Dg9Nz2XLlwfSzxj0lwrYDwC',
        'tw9UyxjJAcbiuq',
        'cIaGicaGicaGicaGicaGicaGicaGpc9ZCgfUpGOGicaGicaGicaGicaGicaG',
        'y2HHAw5uyxjNzxrcyxnLswq',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTzxjYB3iIpUkAOo+4JYa',
        'iokaOIa',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGpc9HpGOGicaGicaGicaGica',
        'Cg9ZAxrPB24TCMLNAhq',
        'mtu1oWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkde1lcaYmYWGndiSidaUnYK7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2HHAw4TCgLSBc1IywrNzs5ZywzLihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJmJjJntvLoWOGicaGicaGicaGicbJB2XVCJOGiZrHzgu4mdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnOywLUlxbPBgWTyMfKz2uUD2fYBMLUzYb7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGi2y1owuWyJSkicaGicaGicaGicaGy29SB3i6icnMyMjMmJq7cIaGicaGicaGicaGigfUAw1HDgLVBJOGC3rHA2vVDxrdAgfPBLb1BhnLideUnxmGAw5MAw5PDgu7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1JAgfPBI1WAwXSlwjHzgDLlNbHBMLJihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJzwy0ndq0oWOGicaGicaGicaGicbJB2XVCJOGi2y4nZe3mtSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYmZKSidy4lca2ocWGmc4YnsK7cIaGicaGicaGicaGigfUAw1HDgLVBJOGC3rHA2vVDxrdAgfPBLbHBMLJidaUohmGAw5MAw5PDgu7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1WAwXSlwHPDc1IDg4GEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJzwy0ndq0idaLlcaJzgmYnJi2ideWmcuPoWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzIaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzJG3mtCXoWOGicaGicaGicaGicbWywrKAw5NoIaYChGGohb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaXmNb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWlJvWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idGWmdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGohb4ihjNyMeOmJiWlcaZocWGmZGSidaUnsK7cIaGia',
        'Ecbyyw5HEdWVyJ4GCgvYidCGzgf5CYb0BYa8yJ4',
        'ww91CIbbueKGA2v5igjLBg9Uz3mGDg8GwW',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqTAgvHzgvYlwfJDgLVBNmIpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UignVBxbHy3qTC291BMqG',
        't1HPteS',
        'CK5ozKu',
        'C3rVCa',
        'x2f0DgfJA2vYxW',
        're9nq29UDgvUDeXVywrLza',
        'u21QEeG',
        'zhj1zY1YzwfKEq',
        'vxftDKC',
        'u2zXv3G',
        'vhjHAw4GAw4Gr3LTig9Yigf0DgfJAYbIzwzVCMuGzw5LCMD5igLZignHChbLzce',
        'AgLUDa',
        'w2nSyxnZkJ0IyMfYrw5LCMD5iL0',
        '4PQG77Ipie5LDhDVCMSGzxjYB3iGD2HPBguGy2HLy2TPBMCGzM9YihvWzgf0zxmU',
        'r2XVyMfS',
        'vgjYDMW',
        'svHxrMm',
        '8j+tUcbfDMLKzw5JzsbZy3jLzw5ZAg90igrVD25SB2fKzwqH',
        'Ag9YBG',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iLrHCMDLDhmGzM91BMqGAw4GCMfUz2uG4OcIigf0DgfJA2fIBguGBM93iokaOIbZDgf0DxmGDMvYAwzPzwqGAw4GDgHLigXHC3qGmIbTAw51DgvZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUigLKpsjZDgfRzw91Dc1JAgfPBI1WB29Slxn0yxr1CYiGC3r5Bgu9iMzVBNqTC2L6ztOGmtaUnxb4oYbJB2XVCJOGiZK0ytnIodSIpJWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UiIbPzd0IC3rHA2vVDxqTy2HHAw4TCg9VBc1JBgvHCIiGC3r5Bgu9iNbHzgrPBMC6idfWEca4ChG7igzVBNqTC2L6ztOGmtbWEdSIihrPDgXLpsjgB3jNzxqGDgHLihbVB2WGyw5KihjLyNvPBgqGAxqGkguUzY4Gywz0zxiGy2HHBMDPBMCGCMfUz2uGlYbSzxzLBcKIpKnSzwfYifbVB2W8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iKHVDYbVzNrLBIbLywnOiezHy3rPB24Gv2f0y2GGy29UDhjHy3qGCMvMCMvZAgvZicGXiefqssbJywXSihbLCIbYzwzYzxnOihbLCIbMywn0Aw9Uksi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN4+0iezHy3rPB24Gv2f0y2GGuMvMCMvZAdWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZzwXLy3qGAwq9iNn0ywTLB3v0lwzHy3rPB24TCg9SBc1ZzwXLy3qIignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1ZzwXLy3qIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        '8j+NSsbptIbxquXmoIbfqvjmwsbesvndsefsr0u',
        'zNDxzwfWB24',
        'z3vLC3q',
        'C291CMnL',
        'w2rHDgeTDg9Nz2XLlxn0CMLJA2vUpsi',
        'uhjLluHPDcbtDgf0Dxm6',
        'C3rHA2vVDxqTC291BMqTC2vSzwn0',
        'DenrtgK',
        'BgfZDfn0CNvJDhvYywXlzxK',
        'oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyxr0ywnRlwj0BJPOB3zLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmXntGWm2q7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmcaXmhb4ihjNyMeOmZqSide5nYWGotqSidaUnsK7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1HDhrHy2STyNrUlNjLywr5ihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZe2ytm0ytSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZDgfRzw91DfbPBgXqDwXZzsaXlJjZigLUzMLUAxrLigvHC2uTAw4TB3v0oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyxr0ywnRlwj0BI5KAxnHyMXLzcb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmXzti5m2iGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2osaHAw1WB3j0yw50oWOGicaGicaGicaGicbJB2XVCJOGiZK0ytnIocaHAw1WB3j0yw50oWOGicaGicaGicaGicbJDxjZB3i6ig5VDc1HBgXVD2vKicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicaGicaGB3bHy2L0EtOGmc44icfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtaUnxb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGihbHzgrPBMC6idnWEca2ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGD2LKDgG6ideWmcu7cIaGicaGicaGicaGigjVEc1ZAxPPBMC6igjVCMrLCI1IB3G7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1HDhrHy2STyNrUlMrPC2fIBgvKoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZi0mZa0nIaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icm2ndC0ogiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icnJyMq1zteGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM94lxnOywrVDZOGBM9UzsaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyxr0ywnRlwj0BG',
        'icHKzwzHDwX0kq',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxjjBMzViL0Gyq',
        'BgnKzKC',
        'icaG8j+pTcbvBMXVy2SGrMfJDgLVBIbxyxrJAcaOC2vUzcbgvYKkicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica',
        'zM9YrwfJAa',
        'B0Lsu2C',
        'zgLZCgf0y2HfDMvUDa',
        'y2HHAw5nyw51ywXozxH0swq',
        'C3rHA2vVDxqTCgLSBc1OAxqTDgfYz2v0',
        'i3n0ywTLB3v0lwj0BI13yxjWyxnZ',
        'mtjWEcaTyxbWBguTC3LZDgvTlcbcBgLUA01Hy1n5C3rLBuzVBNqSihnHBNmTC2vYAwy',
        'rKjdshq',
        'Dvz6y1e',
        'AgfZqMvLBKfJDgL2zq',
        'CLfTyvG',
        'zgvZA3rVCe5VDgLM',
        'w2rHDgeTDMLLDY1ICMvHy2G9iG',
        'sLPXs2y',
        'D0PMuuK',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigHVC3bPDgfSiIb0AxrSzt0IuMvTywLUAw5NoIa',
        'B3v2r2S',
        'DhjHzgvYCW',
        'zw5KCW',
        'BgfZDenOzwnRzwq',
        'ywXLCNqTCMvXDwvZDa',
        'vNvztMO',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTBxv0zwqIpIS',
        '8j+uKIbuCMf2zwXPBMCGka',
        'uK16wMW',
        'pc9IpIaOBM90ignVBMzPCM1Lzcb5zxqPlJWVzgL2pG',
        'EKvWqK8',
        'zgvSzxrL',
        'CeP2z0W',
        'y3jLyxrLqNvMzMvYu291CMnL',
        'pK9MzMXPBMu8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGica8l3nLBgvJDd4kicaGicaGicaGicaGicaGicaGica8C2vSzwn0ignSyxnZpsjZDgfRzw91Dc1JB21Wywn0lwXPBwL0lxnLBgvJDciGzgf0ys1MDY1PBMfJDgL2zt0I',
        'zxjYB3iG',
        'B25TB3vZzwrVD24',
        'xsbPCYbPBIbnzxjJzw5HCNKGuMfKyxiUienSAwnRihrVihjLBw92zs4',
        'rfndzMe',
        'yxbWzw5Kq2HPBgq',
        '4PYi77Ipia',
        's3zqELa',
        'CuPVrK4',
        'iIbHBhq9iKv2AwrLBMnLifnJCMvLBNnOB3qIihn0EwXLpsjTyxGTD2LKDgG6ideWmcu7igHLAwDODdOGyxv0BZSGyM9YzgvYlxjHzgL1CZOGnNb4oYbIB3jKzxi6idfWEcbZB2XPzcaJmZm0mtu1oYbIB3GTC2HHzg93oIaWidrWEcaXmNb4ihjNyMeOmcWWldaSmc41ktSIic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGicaGicaGicaGpceTlsbszxbVCNqGvgv4DgfYzweGqM94ic0TpGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoIaXmxb4oYbMB250lxDLAwDODdOGnZaWoYbJB2XVCJOGiZK0ytnIodSGDgv4Dc10CMfUC2zVCM06ihvWCgvYy2fZztSGBwfYz2LUlwjVDhrVBtOGnNb4oYbKAxnWBgf5oIbMBgv4oYbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47igfSAwDUlwL0zw1ZoIbJzw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ5gB3jTyxr0zwqGsw5JAwrLBNqGuMvWB3j0ifrLEhqGkerPC2nVCMqGlYbnywLSic8GrM9YDw0PoJWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0Iy29SB3i6icmYmMm1nwu7igzVBNqTC2L6ztOGmtbWEdSIpLjLywr5ihrVignVChK8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidX0zxH0yxjLysbPzd0IC3rHA2vVDxqTCMvWB3j0lxrLEhrHCMvHiIbYzwfKB25SEsbZDhLSzt0ID2LKDgG6ideWmcu7igHLAwDODdOGotvWEdSGyMfJA2DYB3vUzdOGiZa5mgqXnJSGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSGyM9YzgvYlxjHzgL1CZOGnNb4oYbJB2XVCJOGi2uYztHMmdSGzM9UDc1Myw1PBhK6ig1VBM9ZCgfJztSGzM9UDc1ZAxPLoIaXmxb4oYbWywrKAw5NoIa4ChG7igjVEc1ZAxPPBMC6igjVCMrLCI1IB3G7ihjLC2L6ztOGBG',
        'yLDQqvK',
        'Aw5Zzxj0qMvMB3jL',
        'yxr0ywnR',
        'C3rHA2vVDxqTDxbKyxrLlwjHBM5LCG',
        'rvbVALK',
        'u3rHA2vVDxrfBMvYz3K',
        'CuTJww8',
        'pgiGC3r5Bgu9iMnVBg9YoIaJodzLzMfJoYi+',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1WAwXSia',
        'xseGvMLVBgf0Aw9UCZOG',
        'CMLNAhqGBM93',
        'ENvAsKy',
        'lI4U',
        'EeHty3O',
        'CMvKDwnL',
        'yxnZyxvSDgLUz19Mywn0Aw9U',
        'cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTCgLSBc10yxjNzxqTyNrUiIbPzd0IC3rHA2vVDxqTCgLSBc1OAxqTDgfYz2v0iIb0AxrSzt0Ims1dBgLJAYbeAxjLy3qGqxr0ywnRig9UifjLywrPzwqGvgfYz2v0ia',
        '8j+sVcbuCMfKzxiG',
        'DxnLCG',
        'w1n0ywTLB3v0xsbtEw5JzwqG',
        'CMvTB3zL',
        't2THEq',
        'x2jSyw5R',
        'ksbB',
        'DxfIAuq',
        'iJ7INiJVUi8G',
        'v1DTAgS',
        'C3rHA2vVDxqTChjVzMLSzs1IDg4Tz3jVDxa',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iK5LDYbJAxrPEMvUCYbJyw5UB3qGyMuGyxr0ywnRzwqGzhvYAw5NihrOzwLYigzPCNn0ih4YihDLzwTZoYb5B3vUz2vYigfJy291BNrZigfYzsbZA2LWCgvKiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFJRiGtwLUiefJy291BNqGqwDLicHKyxLZktWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjUDw1IzxiIigLKpsjZDgfRzw91Dc1JAgfPBI1TAw4TywDLiIbJBgfZCZ0IC3rHA2vVDxqTC2v0DgLUz3mTBNvTiIbZDhLSzt0ID2LKDgG6iduYChG7iIbTAw49iJaIig1HEd0ImZy1iIb2ywX1zt0I',
        'cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTCgLSBc1OAxqTyNrUiIbPzd0IC3rHA2vVDxqTCgLSBc1XDwLJA2HPDciGDgL0Bgu9iJeTq2XPy2SGrw1LCMDLBMn5iff1AwnRieHPDcbHDhrHy2SGC3rHz2LUzYi+',
        'cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTBgLZDci+',
        'Dg9YBI11C2vY',
        'iJ7INju8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'CM9Szq',
        'lcbSyxn0igfJDgLVBIa',
        'AwXSzwDHBdO',
        'Bg93',
        'iZm3nde1mq',
        'D2fYqwn0AxzL',
        'r2zUtNq',
        'vhvYDgXLignVBNrYywn0CZOGzwXPz2LIBguGBwvTyMvYCYbVzIbHignSAwvUDcbMywn0Aw9Ulcb3zwfWB24GCMvTAw5KzxjZigfUzcbHBIbHDhrHy2STC2nYzwvUigvSAwDPyMLSAxr5ignOzwnRlG',
        'Be1wDLu',
        '8j+pTcbtDg9WCgvKihDHDgnOAw5Nia',
        'ywXLCNrLzdyWCW',
        'ug1HzLm',
        'zNvUy3rPB24',
        '4PQG77IpievYCM9YignOzwnRAw5NihvWzgf0zxm6ia',
        'igvSAwDPyMXL',
        'CMvHzhK',
        'DhjHzgvY',
        '4O+4ifrHCMDLDcbYywrHCIbqqvvtruqU',
        'Awjys3a',
        'cGOGicaGicaGicaGicaGicaGicaGidWHls0Gq09ntu9oieDftKvsquWGt1busu9ouYbbvKfjtefcteuGve8GquXmifrjrvjtic0TpGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTD2vPz2H0oIa4mda7ignVBg9YoIaJzJHMywzJoYbTyxjNAw4TDg9WoIa2ChG7ig1HCMDPBI1IB3r0B206idjWEdSGzM9UDc1ZAxPLoIaXmxb4oYi+4PQz77IpieDLBMvYywWGt3b0Aw9UCZO8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8BgfIzwWGy2XHC3m9iNn0ywTLB3v0lxrVz2DSzs1YB3CIihrPDgXLpsjdAg9VC2uGD2HLDgHLCIb0AguGz3jLzw4Gqxr0ywnRigj1DhrVBIbVCgvUCYb0AguGzgLYzwn0ignVBwjHDcbHDhrHy2SGCgfNzsbVCIb0AguGDxnLCIbWCM9MAwXLihbHz2uIpGOGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7IMPtVUi8Gqxr0ywnRiej1DhrVBIbuyxjNzxq8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGidXZzwXLy3qGAwq9iNn0ywTLB3v0lwf0DgfJAY1Kzxn0lxnLBgvJDciGC3r5Bgu9iMjHy2TNCM91BMq6icmXzti5m2i7igjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7ignVBg9YoIaJzJHMywzJoYbWywrKAw5NoIaYChGGnNb4oYbIB3jKzxiTCMfKAxvZoIa0ChG7igzVBNqTC2L6ztOGmtfWEdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsjHDhrHy2SIia',
        'wuzZv3a',
        'cIaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1KzwWIigrHDgeTzgvSpsi',
        'vLnNqwG',
        'pc9IpJWVC3bHBJ4kicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1MDY13zwfWB24G',
        'yuXUCK8',
        'yM9KEq',
        'uuLxDK0',
        'DgfYz2v0swq',
        'qwrlEMK',
        'y2XVC2u',
        'lNbUzW',
        'C2v0vMfSDwvbDfrPBwu',
        'zNDby3rPDML0Eq',
        'CfPHvgq',
        'B1vkvwO',
        'ywXSx3DHCNm',
        'Dg9YBL9Hy3rPDMvFD2fYx2zHy3rPB25Z',
        'w2nSyxnZkJ0IyMfYlwvUzxjNEsjD',
        'qM9UzKG',
        'iIbPzd0IC3rHA2vVDxqTDgfIlwzHy3rPB25ZiIb0AxrSzt0IrMfJDgLVBIbxyxrJAdOGDhvYDgXLignVBNrYywn0CYi+cIaGicaGicaGicaGicaGicaGicaGicaGipcFJ7qGrMfJDgLVBNmGka',
        'sw10zNK',
        'zhrOoIaXmdaLicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVEc1ZAxPPBMC6igjVCMrLCI1IB3GGiwLTCg9YDgfUDdSkicaGicaGicaGicaGBwfYz2LUlxrVCdOGohb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGig1HCMDPBI1IB3r0B206idHWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbWywrKAw5NoIaXmhb4ide4ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2vMndq0ncaWjsWGi2rJmJyYnIaXmdaLksaHAw1WB3j0yw50oWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzIaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idjWEcbZB2XPzcaJzJG3mtCXicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idzWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbMB250lxnPEMu6ideZlJvWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWicfPBxbVCNrHBNq7cIaGicaGicaGicaGihrLEhqTDhjHBNnMB3jToIb1ChbLCMnHC2uGiwLTCg9YDgfUDdSkicaGicaGicaGicaGBgv0DgvYlxnWywnPBMC6idaUnxb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidrWEcaXnNb4ihjNyMeOmJiWlcaZocWGmZGSidaUnIKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmtvZigvHC2uGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZDgfRzw91DezPz2H0uhvSC2uGms4YCYbPBMzPBML0zsbLyxnLlwLUlw91DcaHAw1WB3j0yw50oWOGicaGicaGicaGicb0zxH0lwfSAwDUoIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwzPz2H0lw1VzgfSlwj0BJPOB3zLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicnModCXnZeGmcuSicnLzJq0ndqGmtaWjq',
        'pc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UignVBxbHy3qTC291BMqIigrHDgeTzNCTCgf1C2u9iG',
        'y2XHC3noyw1L',
        'sLfRyu4',
        'y3vYCMvUDa',
        'ywXHCM1wB2X1Bwu',
        'C3rHA2vVDxrFDxbKyxrLx2rPC21PC3nLzf8',
        'pLnTyxj0ifbVB2WGkhnRAxaGDw5HDhrHy2THyMXLktWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iNnLCxvLBNrPywWIia',
        'uKz6rNi',
        'Aw5JBhvKzxm',
        'v3jvBK4',
        'pc9IDxr0B24+cIaGicaGicaGicaGicaGica',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqGC3rHA2vVDxqTzNCTy2fYzca',
        'B01Ywu0',
        'DgfYz2v0',
        'rhzICeG',
        'w1n0ywTLB3v0xsbbueKGzxjYB3i6',
        'zgL2',
        'pLnLCxvLBNrPywWGkcSXktWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZzwXLy3q+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxrVz2DSzs1YB3CIihrPDgXLpsjsyw5KB20GsurZigLUC2LKzsb0AgLZihjHBMDLigfYzsbZyw1WBgvKihrVigj1AwXKihLVDxiGCg9VBc4GrxzLCNKGBwvYyYbNzxrZigeGzgLMzMvYzw50ihjHBMrVBsbWB29SlIi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN46YifnJyw4GuMfUz2u8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0IzgLZCgXHEtOGzMXLEdSGz2fWoIaZChG7igfSAwDUlwL0zw1ZoIbJzw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0IBNvTyMvYiIbPzd0IC3rHA2vVDxqTy2HHAw4TC2nHBI1ZDgfYDciGy2XHC3m9iNn0ywTLB3v0lxnLDhrPBMDZlw51BsiGDMfSDwu9iG',
        'qwrKifrHCMDLDcbqBgf5zxiGsuqUlI4',
        'C2rVtuS',
        'i2zLzJa4yq',
        'Aw5Uzxjive1m',
        'B25LoYi+',
        'BufOru4',
        'AxntDhjPy2TLBG',
        'tMn1zxO',
        'DxnKqKe',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iKf1Dg9TyxrPy2fSBhKGz2vUzxjHDguGyw5KigrVD25SB2fKigeGzM9Yzw5ZAwmGzxzPzgvUy2uGC2nYzwvUC2HVDcbqtKCGD2HLBIbHBIbPBgXLz2fSigHPDcbPCYbKzxrLy3rLzci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN5o4ief1Dg8Tu2nYzwvUC2HVDcbfDMLKzw5JzsbVBIbjBgXLz2fSieHPDdWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGAwq9iNrVz2DSzs1Zy3jLzw5ZAg90lwLSBgvNywWIia',
        'AMHPzfm',
        'CgvUzgLUz190CMfKzxjF',
        'y2fYzc1TAwrYB3CGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47cIaGicaGicaGicaGigDHCdOGnNb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy29TCgfJDc1OCcb7cIaGicaGicaGicaGihbVC2L0Aw9UoIbYzwXHDgL2ztSkicaGicaGicaGicaGAgvPz2H0oIaXmNb4oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmgyXnZjHoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJmZm0mtu1oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaZChG7cIaGicaGicaGicaGig92zxjMBg93oIbOAwrKzw47cIaGicaGicaGicaGig1PBI13Awr0AdOGotvWEdSkicaGicaGicaGicaGBwf4lxDPzhrOoIaXmJbWEdSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGzMXLEc1ZAhjPBMS6ida7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1OCc1TAw5PlxrLEhqGEWOGicaGicaGicaGicbWB3nPDgLVBJOGywjZB2X1Dgu7cIaGicaGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGicaGicb0zxH0lwfSAwDUoIbJzw50zxi7cIaGicaGicaGicaGigzVBNqTC2L6ztOGohb4oWOGicaGicaGicaGicbMB250lwzHBwLSEtOGBw9UB3nWywnLoWOGicaGicaGicaGicbMB250lxDLAwDODdOGnZaWoWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzJSkicaGicaGicaGicaGDgv4Dc1ZAgfKB3C6idaGmxb4idjWEcaJmdaWoWOGicaGicaGicaGicbWB2LUDgvYlwv2zw50CZOGBM9UztSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxrHyNmGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmgiXmtiWoWOGicaGicaGicaGicbIB3jKzxiTyM90Da',
        '4PQG77IpifDbuK5jtKC6ifrbuKDfvcbjtIbbq1rjvKuGv0fsiqOk',
        'uMvTywLUAw5NoIa',
        '4OcIicOQuhjLluHPDcbtDgf0DxmQkJOG',
        'Dg91y2HZDgfYDa',
        'B25PBNb1Da',
        'CMvTB3zLrxzLBNrmAxn0zw5LCG',
        '8j+ALcbkywLSoIa',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSihrYyxzLBgLUzYiGDgL0Bgu9iLjLBwfPBMLUzZOG',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGia',
        'vefsr0vuie9lqvKGlsbbvfrbq0SH',
        'pJyWie1PBNmGkdeGsg91CIK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiTmsiG',
        '4PQu77IpieLmtevhquWGqvruqunlrviGkdnsrcbqqvjuwsK',
        'zMLSBfrLEhq',
        'DMfSDwu',
        '4PYfifLVDsbHCMuGDxnPBMCGDgHLigXHDgvZDcb2zxjZAw9UicH2',
        'C2LKpwf0DgfJAW',
        'C3rHA2vVDxqTDhjHzgvYlxjLC3vTzs1Iyw5UzxiTyNrU',
        'y2HHAw5ty2fUrw5K',
        'y2HHAw42mdO',
        'BgLJzw5Zzs1WB2XS',
        'BgvHzgvY',
        'zNDAC3a',
        'i3n0ywTLB3v0lwTLEs1ZyxzL',
        'C3rHA2vVDxqTzNCTDgfIlwjHzgDL',
        'rLPsv2S',
        '4PQHiff1AwnRieHPDdOGqxr0ywnRAw5Nig92zxjZzwfZihrHCMDLDca',
        'C3rHA2vVDxqTyNrUlxbHDxnL',
        'EWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJnZGZntbMidaLlcaJnduXytaZideWmcuPicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicnMntLLmgiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icnMzwyWogeGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGicaGicbIB3GTC2L6Aw5NoIbIB3jKzxiTyM94oWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbMBgv4lwrPCMvJDgLVBJOGy29SDw1UoWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIaYChG7cIaGicaGicaGicaGihbHzgrPBMC6idnWEca2ChG7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idrWEdSkicaGicaGicaGicaGDgv4Dc1KzwnVCMf0Aw9UoIbUB25LicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmNb4idrWEcbYz2jHkdaSidaSidaSidaUmYK7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGicaGicbTAw4TAgvPz2H0oIaYnhb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyxr0ywnRlwj0BI53yxiTD2fYBMLUzZPOB3zLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicm5mJqWmguGmcuSicm3odm1mgyGmtaWjsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaWidHWEcbYz2jHkdi0nsWGmtu4lcaXmsWGmc41ksaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTChjVzMLSzs1IDg4Tz3jVDxaGEWOGicaGicaGicaGicbKAxnWBgf5oIbPBMXPBMuTzMXLEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDa',
        'AfnAvLO',
        'q2XPy2SGDg8GywrKihrHCMDLDcbB',
        'u2rzqNq',
        'yw5VBNLTB3vZ',
        'A3n2C3C',
        'Bwf0y2G',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigHVC3bPDgfSiIb0AxrSzt0Isg9ZCgL0ywXPEMvKicHtywzLigzYB20GBxvNz2vYCYKIpVcFJ6uGsg9ZCdOG',
        'Ahr0Chm6lY9HCgKUDg9YBI5JB20V',
        'BxjwA1i',
        'Cgf1C2vK',
        'uwLrzK8',
        'BwnVu0e',
        'DNPPtMW',
        'CvngtMu',
        'w1n0ywTLB3v0xsbgywLSzwqGDg8GC3LUyYbHy3rPDMuGD2fYCZO',
        'ksaHAw1WB3j0yw50oWOGicaGicaGicaGicb0CMfUC2zVCM06ihnJywXLkdeUmdiPicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGnNb4idiYChGGCMDIysGYmZKSidy4lca2ocWGmc44nsKGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGqgTLEwzYyw1LCYbZDgfRzw91DezPz2H0uhvSC2uGEWOGicaGicaGicaGicaWjsb7igjVEc1ZAgfKB3C6idaGmca2ChGGCMDIysGYmJaSidm4lcaZocWGmc42ktSGFqOGicaGicaGicaGica1mcuGEYbIB3GTC2HHzg93oIaWidaGmJbWEcbYz2jHkdiZosWGnJGSidy4lcaXksWGmcaWidHWEcaJzJG3mtCXoYb9cIaGicaGicaGicaGideWmcuGEYbIB3GTC2HHzg93oIaWidaGnNb4ihjNyMeOmJiWlcaZocWGmZGSidaUnIK7ih0kicaGicaGicb9cGOGicaGicaGic8Qic0Tlsbgywn0Aw9UienOywLUifDHDgnOzxiGjIbrDwLJAYbiAxqGu3r5BgvZic0TlsaQlWOGicaGicaGic5ZDgfRzw91Dc1JAgfPBI1WAwXSlxDYyxaGEWOGicaGicaGicaGicbKAxnWBgf5oIbPBMXPBMuTzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIa2ChG7cIaGicaGicaGicaGig1HCMDPBI1Szwz0oIa0ChG7cIaGicaGicaGicaGigjVCMrLCI1Szwz0oIaXChGGC29SAwqGiZmZnde1ntSkicaGicaGicaGicaGCgfKzgLUzY1Szwz0oIa4ChG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1JAgfPBI1WAwXSlwjHzgDLihSkicaGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtfWEdSkicaGicaGicaGicaGzM9UDc1Myw1PBhK6ig1VBM9ZCgfJztSkicaGicaGicaGicaGCgfKzgLUzZOGmNb4idDWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmtjWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idCWmdSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZmZna',
        'BwvZC2fNzq',
        'EwnRy0e',
        'uwT1rgC',
        'B25JBgLJAW',
        'B2nMqLa',
        'w2rHDgeTDg9Nz2XLlxrYywrLCI1TDxrLpsi',
        'w2rHDgeTy29WEs1JB2rLxq',
        'Dg9YBG',
        'CMfUzg9T',
        'C3rHA2vVDxqTDM9SlwXHyMvS',
        'C2v0DgLUz3mTB3bLBG',
        'zgvUAwvK',
        'ywXLCNrpBKrYDwDdB29Szg93BG',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxrHyI1IywrNzsb0CMfKzxiIpG',
        'w1n0ywTLB3v0xsbvCgrHDguGy2HLy2SGzxjYB3i6',
        'xsi+',
        'y2HHCKnVzgvbDa',
        'yLvTrwe',
        'Dw50AwW',
        'icaGicaGigDHCdOGnxb4oWOGicaGicaGicaGicbWywrKAw5NoIaYChGGmdSkicaGicaGicaGicaGyM9YzgvYlxrVCdOGmxb4ihnVBgLKihjNyMeOnteSidy1lca4nsWGmc41ktSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmc41ChG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1YB3CUC29VBIb7ig9WywnPDhK6idaUnZu7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTBMfTzsb7ignVBg9YoIaJzJHMywzJoYbMB250lxDLAwDODdOGnZaWoYbVDMvYzMXVDZOGAgLKzgvUoYb0zxH0lw92zxjMBg93oIbLBgXPChnPCZSGD2HPDguTC3bHy2u6ig5VD3jHCdSGBwf4lxDPzhrOoIaXmtbWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1SDMWGEYbJB2XVCJOGiZy0nZq4yJSGzM9UDc1ZAxPLoIa5lJvWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1TDxrLzcb7ignVBg9YoIaJotrHm2i4oYbMB250lxnPEMu6ideWChG7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTCM93ic5ZDgfRzw91Dc1MDY1TDxrLzcb7ig1HCMDPBI1Szwz0oIbHDxrVoYb3AgL0zs1ZCgfJztOGBM93CMfWoYb9cIaGicaGicaGlNn0ywTLB3v0lwz3lxn1yMHLywqGEYbMB250lxnPEMu6idKUnxb4oYbJB2XVCJOGiZy0nZq4yJSGDgv4Dc10CMfUC2zVCM06ihvWCgvYy2fZztSGBgv0DgvYlxnWywnPBMC6idaUnxb4oYbTyxjNAw4TDg9WoIaZChG7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTzxjYB3iGEYbMB250lxnPEMu6ideWlJvWEdSGy29SB3i6icnModCXnZe7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTAgL0ihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZe2ytm0ytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZiYyZu1ztSkicaGicaGicaGicaGy29SB3i6icnMzMy7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idGWmdSkicaGicaGicaGicaGCgfKzgLUzZOGmxb4idDWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGia',
        'C3rHA2vVDxrFChjVBxb0zwrF',
        'ALnNswi',
        'B3bHy2L0EtOGmc41oYbJDxjZB3i6ig5VDc1HBgXVD2vKoYb9cIaGicaGicaGlNn0ywTLB3v0lwTLEs1PBNb1Dcb7cIaGicaGicaGicaGihDPzhrOoIaXmdaLoWOGicaGicaGicaGicbIB3GTC2L6Aw5NoIbIB3jKzxiTyM94oWOGicaGicaGicaGicbTyxjNAw4TDg9WoIaXmhb4oWOGicaGicaGicaGicbWywrKAw5NoIa3ChGGoxb4oWOGicaGicaGicaGicbMB250lwzHBwLSEtOGBw9UB3nWywnLoWOGicaGicaGicaGicbMB250lxnPEMu6ide0ChG7cIaGicaGicaGicaGigXLDhrLCI1ZCgfJAw5NoIaXChG7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmWmJa2mtC7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicm0nZu1nJK7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idvWEdSkicaGicaGicaGicaGy29SB3i6icnMogzHzMm7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1RzxKTAw5WDxq6zM9JDxmGEYbVDxrSAw5LoIbUB25LoYbIB3jKzxiTy29SB3i6icmZogjKzJG7ih0kcIaGicaGicaGlYOGls0Tiezbq1rjt04Gv0fuq0GGls0TicOVcIaGicaGicaGlNn0ywTLB3v0lwz3lwnHCMqUC3rHA2vVDxqTzNCTCgf1C2vKihSGB3bHy2L0EtOGmc42oYb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwnVBNrYB2XZihSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGzMXLEc13CMfWoIb3CMfWoWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idrWEdSkicaGicaGicaGicaGBwfYz2LUoIa0ChGGmcaYChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEdSkicaGicaGicaGicaGy29SB3i6icm5ngeZyJG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1JB250CM9SCYbSywjLBcb7igrPC3bSyxK6igLUBgLUzs1MBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idfWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY13zwfWB24GEWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cG',
        'DMfSDwvZ',
        'A2v5',
        'C2v0sxrLBq',
        'q1f4Dwi',
        '4O+4ifbbvvnfra',
        'qKnTqMm',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGia',
        'Ahv0r2m',
        'zw5JB2rL',
        'zwXduvy',
        't1rozw4',
        'icHmDMWG',
        'A3DxuwS',
        'x2jYzwfJAerLzMf1BhrpzMzwmtuW',
        'C3rHBMrHCMq',
        'w1n0ywTLB3v0xsbdyw52yxmGzxzPzgvUy2uGz2vUzxjHDgLVBIbLCNjVCJO',
        'DgvYBwLUyxrL',
        'jNf1B3q7',
        'tunHwhe',
        's1DZqMi',
        'C3rHA2vVDxqTzMLNAhqTCxvPy2TIyxi',
        'y2HHAw5uyxjNzxrnB2rL',
        'zgvZy3jPChrPB24',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwHLywrLCI1Hy3rPB25ZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1ZB3vUzciGzgf0ys1MDY1HBgvYDd0I',
        'ALzpBfy',
        'CKXRAgu',
        'BK5Wr1i',
        'y2HHAw4ZmdO',
        'yw5PBwf0Aw9U',
        'zNDbBgvYDa',
        'C3rHA2vVDxqTy2HHAw4TBwLUlwfNzq',
        'Bxblq3m',
        '8j+NSsbuyxjNzxqGwW',
        '4OcIicOQvgfYz2v0kIO6ia',
        't25SAw5L',
        'l2XPy2vUC2u/CgLKpq',
        'iZm4yMrMoa',
        'z2fPBG',
        'sg9ZCgL0ywXPEMvKigj5idXHigHYzwy9iNbYB2zPBgvZlNbOCd9ysuq9mJaXnZmXmci+Cg9TBwu8l2e+',
        'sfa6ia',
        '4PQG77IpifrVCM4GCMvQzwn0zwqGDgHPCYbRzxK6ia',
        'ywn0AxzL',
        'Dgv4DenVBNrLBNq',
        'ChjLDMvUDerLzMf1Bhq',
        'BgvxDfm',
        'zgv0ywLSCW',
        'CvrsEwS',
        'Dw5SB2nRv3a',
        'AvLswMG',
        'v2fY',
        'oWOGicaGicaGicaGicbSzxr0zxiTC3bHy2LUzZOGmc4ZChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaWidzWEcbYz2jHkdi0nsWGmtu4lcaXmsWGmc40nsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZDgfRzw91DfbPBgXqDwXZzsaXlJjZigLUzMLUAxrLigvHC2uTAw4TB3v0icfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDgf0DxmTCgLSBc5Lzc1VzMyGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdeWmcWGmte2lcaXmZKSidaUmIKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGCMDIysGXndGSide2mYWGmtG0lcaWlJqPicfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJotrHm2i4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa3mdaGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmhb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGihbHzgrPBMC6idfWEca1ChGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGBgv0DgvYlxnWywnPBMC6idaUm3b4icfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDgf0DxmTCgLSBc5ICMvHy2GTCgLSBcb7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJm5lca2ocWGnJGSidaUmYKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGi2vMndq0ncaHAw1WB3j0yw50oWOGicaGicaGicaGicbJB2XVCJOGi2zJytvHnsaHAw1WB3j0yw50oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWicfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtbWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbWywrKAw5NoIaXChGGnNb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idnWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyq',
        'DLDUtMy',
        'EwvmteK',
        'y2XVC2vK',
        'DNjOEfi',
        'zgLZywjSzwq',
        'xseGq2XPy2SGy2fYzcaIqLjfquniievwsurftKnfiIb0BYb2Awv3lG',
        'iIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwHVC3aIihrPDgXLpsjbDhrHy2SGjIbiB3nWAxrHBgL6zsbuCMfKzxiGzM9YifnHzMuTs2vLCgLUzYi+cIaGicaGicaGicaGicaGicaGicaGicaGiokALo+4JYbiB3nWieHPDaOGicaGicaGicaGicaGicaGicaGidWVyt4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGica',
        'D3HXtgq',
        'yw1Nzha',
        'yM9SzcaXmNb4ic1HChbSzs1ZExn0zw0SiejSAw5RtwfJu3LZDgvTrM9UDcWGC2fUCY1ZzxjPzG',
        'BM90igrLDgvJDgvKihLLDa',
        'pgrPDJ4',
        'cIaGicaGicaGicaGicaGica8C3bHBJ4',
        'D2LKDgG',
        'pc9ZDhjVBMC+pc9ZCgfUpGOGicaGicaGicaGicaGicaGpgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1MAwDODc1XDwLJA2jHCI1IDg4IigLKpsjZDgfRzw91Dc1MAwDODc1XDwLJA2jHCI1IDg4IpUkAOsbbDhrHy2SGtMv4DcbuyxjNzxqG4P6upc9IDxr0B24+cIaGicaGicaGicaGia',
        'ufbmy24',
        'y2HHAw5nyxHmzxzLBa',
        'C3rHA2vVDxqTy2HHAw4TyMfYlwLUyW',
        'BNvTyMvY',
        'lNn0ywTLB3v0lxrYywrLCI1ZywzL',
        'DgvYCML0B3j5x3DHCL9Pza',
        'uuntCLO',
        'D3jPDgvuzxH0',
        'q2H6C08',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigfICM9Hzci+8j+mJsbbyNjVywq8l3nWyw4+',
        'D2fYBG',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaG',
        'B3POExG',
        'jMnVBw1LBNq9u3rHA2vVDxrsywrHCG',
        'CKPpwhC',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaG',
        'qMHnrhu',
        'w2nSyxnZkJ0Iy2HHAw4TyMfYiL0SifTJBgfZCYO9iMnOywLUqMfYiL0SifTJBgfZCYO9iMnOywLUqM94iL0SifTJBgfZCYO9iMnOywLUx19FiL0SicnZAwrLyMfYCM9VDcbBy2XHC3mQpsjJAgfPBIjD',
        'CxvLCNLtzwXLy3rVCG',
        'AxnbyNjVywq',
        'Dg9Rzw4',
        'CLvjwg4',
        'pJmWie1PBNm8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsi2mciG',
        'Dg9tDhjPBMC',
        'zwXrqM0',
        'rw5LBxK',
        'icaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwHPDdPOB3zLCIb7igjHy2TNCM91BMq6icmXntGWm2q7ih0kicaGicaGicaJC3rHA2vVDxqTzNCTyxr0ywnRlwjHBM5LCIb7cIaGicaGicaGicaGihbVC2L0Aw9UoIbMAxHLzdSkicaGicaGicaGicaGDg9WoIa0nNb4oWOGicaGicaGicaGicbSzwz0oIa1mcu7cIaGicaGicaGicaGihrYyw5ZzM9YBtOGDhjHBNnSyxrLwcGTntaLktSkicaGicaGicaGicaGEI1PBMrLEdOGotK5otK5otG7cIaGicaGicaGicaGig1HEc13Awr0AdOGy2fSyYGXmdb2DYaTidmYChGPoWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbMBgv4lxDYyxa6ihDYyxa7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idrWEcaXmhb4oWOGicaGicaGicaGicbWywrKAw5NoIa1ChGGmtrWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmtrWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmNb4oWOGicaGicaGicaGicbJB2XVCJOGi2uYztHMmdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGXnsWGmJmSidqYlcaWlJK1ktSkicaGicaGicaGicaGyM94lxnOywrVDZOGmca0ChGGmtHWEcbYz2jHkdaSidaSidaSidaUnYK7cIaGicaGicaGFqOGicaGicaGicnZDgfRzw91Dc1MDY1HDhrHy2STyMfUBMvYlM9RihSGyM9YzgvYoIaXChGGC29SAwqGiZiYyZu1ztSGFqOGicaGicaGicnZDgfRzw91Dc1MDY1HDhrHy2STyMfUBMvYlMjSB2nRzwqGEYbIB3jKzxi6idjWEcbZB2XPzcaJzwy0ndq0oYb9cIaGicaGicaGlNn0ywTLB3v0lwnOywLUlxbVB2WTyMfKz2uGEYbMB250lxnPEMu6ideWChG7ignVBg9YoIaJytvIngzJoYbMB250lwzHBwLSEtOGBw9UB3nWywnLoYbJDxjZB3i6igHLBha7ih0kicaGicaGicaUC3rHA2vVDxqTC2v0DgLUz3mTC2vSzwn0ihSkicaGia',
        '8j+uKIaWieHqic8GrMfSBgvU',
        'whfWt1y',
        'C3rHA2vVDxqTy2HHAw4TAwqTzgvJ',
        'AxnbCNjHEq',
        'DeTkCxm',
        'oYbMB250lxDLAwDODdOGnZaWoYb3AgL0zs1ZCgfJztOGBM93CMfWoYbTyxjNAw4TBgvMDdOGmNb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'C3rHA2vVDxqTyNrUlxrLC3qTyNjLywnO',
        'CMf3',
        'zMfJDgLVBG',
        'Cg9PBNrLCMrVD24',
        'Axngywn0Aw9UC1bHDxnLza',
        'ywXLCNrpBK9RyxK',
        'sg1osLm',
        'Eci+cIaGicaGicaGicaGicaGicaGicaGicaGipcFLjCG',
        'lMzMlwf0DgfJAY1OB3nWlxrPBwvY',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1WCM8TBg9JAY1Iyw5UzxiIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmJzWEdSGBwfYz2LUlwjVDhrVBtOGnhb4oYi+8j+pTcdWN5sspc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXm3b4oYbJB2XVCJOGi2y1owuWyJSGBwfYz2LUlwjVDhrVBtOGnhb4oYi+rMfJDgLVBIbxyxrJAdOGvhvYDgXLienVBNrYywn0CZWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmtfWEdSGy29SB3i6icm5ngeZyJG7igXPBMuTAgvPz2H0oIaXlJq1oYbTyxjNAw4TyM90Dg9ToIaXmNb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGifDHDgnOigeGy2XPzw50igzHy3rPB24Gyw5KihnLzsbLEgfJDgX5ihDOAwnOig1LBwjLCNmGBwvLDcb0AguGy29UDhjHy3qGkg9MzMXPBMuGlYbPzgXLigXVBMCGzw5VDwDOlcbVDxqGB2yGAg9ZCgL0ywWPlcb3AxrOihDLyxbVBIbYzw1PBMrLCNmGB24GDgHLigf0DgfJAYbZy3jLzw4UcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlxbYAw1HCNKIigLKpsjZDgfRzw91Dc1IDg4TDw5SB2nRlwzHy3rPB25ZiIbZDhLSzt0IyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2y1owuWyIWGi2q5nZCWnIK7igjVCMrLCI1JB2XVCJOGi2y1owuWyJSGy29SB3i6icmWzJe3mMe7igzVBNqTD2vPz2H0oIa5mda7igzVBNqTC2L6ztOGmtfWEdSGCgfKzgLUzZOGnNb4ide0ChG7igjVCMrLCI1YywrPDxm6idvWEdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'xsbTyxjRzwqGyxmGt0zgifDbteWGke5Vieveks4Gqxr0ywnRCYbLBMfIBgvKiq',
        'zNvSBgHWoG',
        'A0DMue0',
        'vLrft0y',
        'ywrKrxzLBNrmAxn0zw5LCG',
        'BKfWAgW',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTBM90zsi+q2HLy2TPBMCGzxzLCNKGmZaGC2vJB25KCYbMB3iGmtaGBwLUDxrLCY4Gugf5BwvUDhmGDxn1ywXSEsbZAg93ihvWihDPDgHPBIaYig1PBNv0zxmUpc9KAxy+',
        'yM9SzcaXm3b4ic1HChbSzs1ZExn0zw0SiejSAw5RtwfJu3LZDgvTrM9UDcWGC2fUCY1ZzxjPzG',
        '8j+oRYa8C3rYB25NpLrHCMDLDcbtzwXLy3rVCJO8l3n0CM9UzZ4',
        '4PQG77IpieLSBgvNywWGsgL0iefSyxjTierju0fctevelG',
        'thf4wNy',
        'BsaVia',
        'AwnVBG',
        'pLjHBMTLzcaRiefSBcbuvcbxyxjZicHdB25Zzxj2yxrPDMuPpc9VChrPB24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l3nLBgvJDd4kicaGicaGicaGicaGicaGicaGicaGicaGpc9SywjLBd4kicaGicaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0IuMvXDwLYzxmGDgfYz2v0ihrVig1LzxqGqK9uscbJCML0zxjPytOGms4Gt3v0icyGqwXPDMuSigfUzcaYlIbpBMXPBMuGB3iGBgfZDcbHy3rPB24GD2L0AgLUignVBMzPz3vYzwqGBgLTAxqIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4PQu77IpiefSzxj0ig9Uief0DgfJAYbfBgLNAwjSzsaOt3v0icyGqwn0AxzLktWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGAwq9iNrVz2DSzs1HBgvYDc1VA2f5iIa',
        'sMnswgK',
        's2XKB1u',
        'Dff4zKK',
        'Bg9JyxrPB24',
        'tMzvwwq',
        'pc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1MDY1IB2r5iIbPzd0IC3rHA2vVDxqTzNCTyM9KEs0',
        'q0L2Cgm',
        'ugjZuMK',
        'sNviAMC',
        'CfbkqMC',
        'sMfPBa',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSig9RyxKIihrPDgXLpsjuyxjNzxqGrgLZy2HHCMDLzcaMie91DcaOt2THEsKIpK9RyxK8l3nWyw4+ia',
        'yxjPys12ywX1zw1HEa',
        'vg9YBG',
        'jsKG4OcIieXHC3q6ia',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1OzwfKzxiTywn0Aw9UCYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwXPy2vUC2uTyMfKz2uG',
        'w1n0ywTLB3v0ifrVyxn0xq',
        'pUkALo+4JYbeAxjLy3qGqxr0ywnRifbHz2u8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iNbYB2zPBguIia',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMjVCMrLCI10B3a6idfWEcbZB2XPzcaJmZm0mtu1oYbTyxjNAw4TDg9WoIa4ChG7ihbHzgrPBMCTDg9WoIa4ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTD2vPz2H0oIa4mda7ignVBg9YoIaJzMvMmdHHoYbTyxjNAw4TyM90Dg9ToIa0ChG7igzVBNqTC2L6ztOGmteUnxb4oYi+8j+BKIbzB3vYie1VzhvSzxm6pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6ideWlJvWEdSGy29SB3i6icnJyMq1zte7igXPBMuTAgvPz2H0oIaXlJu7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'C3rHA2vVDxqTDM9SlxnSAwrLCG',
        'w2rHDgeTDw5SB2nRlxDWxq',
        'Agj1yLO',
        'B1jXtLa',
        'u25TAgO',
        'AKrZzu0',
        'C3rHA2vVDxqTyNrUlwfKza',
        'D0vHCfq',
        'vgfYz2v0ieHVC3aGu3rHDgu6',
        'y2fJAgu',
        'wLnvyMq',
        'r0vu',
        'y29UzMLN',
        '8j+uLcbfBMvYz3KGAxmGmtaWjsbgvuXmicG',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iMvUzxjNEsjD',
        'B3bLBG',
        'ktWVC3bHBJ4',
        '8j+uKIbjBMfJDgL2zsa+ia',
        'pUkzVU+4JYbvBMXPBwL0zwqGkefUEsbmyxn0iefJDgLVBIK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVC2vSzwn0pGOGicaGicaGicaGicaGicaGicaGicaGica8l2XHyMvSpGOGicaGicaGicaGicaGicaGicaGicaGica8BgfIzwWGy2XHC3m9iNn0ywTLB3v0lxrVz2DSzs1YB3CIihrPDgXLpsjqBgf5igf1zgLIBguGywXHCM0GC291BMrZig9UigHVC3bPDgfSigrPC2nOyxjNzsWGy2HHAw4GywXLCNrZlcbHBMqGDhjHzgvYihjLywrPBMvZCYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN5skifnVDw5KiefSyxjTCZWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGAwq9iNrVz2DSzs1ZB3vUzc1HBgfYBsiG',
        'mhWYFdr8mxWZFdu',
        'CejWwe4',
        'qujPwwe',
        'nxPlqLvssa',
        'iZK0ytnIoa',
        'zNfHvuq',
        'yMvNAw5qyxrO',
        'ChjV',
        'yxHvAeC',
        'vhflvvG',
        'w2rHDgeTDgfYz2v0lwXPBwL0psi',
        'Dg9YBL9ZDgfRzw91Df9WBgf5zxjFBMfTzq',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IyMfJA2DYB3vUzdOGCMDIysGYnduSide1ocWGmteSidaUmtiPoYbIB3jKzxi6idfWEcbZB2XPzcbYz2jHkdi0nsWGmtu4lcaXmsWGmc4ZnsK7igjVCMrLCI1YywrPDxm6idzWEdSGCgfKzgLUzZOGnNb4ideWChG7ig1HCMDPBI1IB3r0B206idHWEdSGzgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbMB250lxnPEMu6ideXChG7ignVBg9YoIaJzMvMmdHHoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpUkpUo+4JYbgywn0Aw9UifDHDgnOigLZidXIpLbbvvnfrdWVyJ48l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwzHy3rPB24TCMvZDw1LlwjHBM5LCI1IDg4Iihn0EwXLpsjIywnRz3jVDw5KoIaJmJjJntvLoYbJB2XVCJOGi2zMzJSGyM9YzgvYoIbUB25LoYbIB3jKzxiTCMfKAxvZoIa0ChG7ihbHzgrPBMC6idjWEca4ChG7igzVBNqTC2L6ztOGmtbWEdSGzM9UDc13zwLNAhq6idCWmdSGy3vYC29YoIbWB2LUDgvYoYi+uMvZDw1Lpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica',
        'C3rHA2vVDxqTzMLNAhqTzw5LCMD5',
        'i3n0ywTLB3v0lxn0B3jLlwnSB3nL',
        'AgvPz2H0oIbJywXJkdeWmhzOic0GmZjWEcK7cIaGicaGicaGicaGig92zxjMBg93lxK6igf1Dg87cIaGicaGicaGicaGigjHy2TNCM91BMq6icmWzJe3mMe7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicmZmZqXntu7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6ideWChG7cIaGicaGicaGicaGihbHzgrPBMC6ide0ChG7cIaGicaGicaGicaGignVBg9YoIaJztjLogyWoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWideWChGGndbWEcbYz2jHkdaSidaSidaSidaUnYK7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs10AxrSzsb7igrPC3bSyxK6igzSzxG7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGywXPz24TAxrLBxm6ignLBNrLCJSGzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXnxb4oYbTyxjNAw4TyM90Dg9ToIa4ChG7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTBM90zsb7igzVBNqTC2L6ztOGmtfWEdSGy29SB3i6icm5ngeZyJG7ig1HCMDPBJOGnNb4ida7igXPBMuTAgvPz2H0oIaXlJq1oYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlw5VDguUD2fYBIb7ignVBg9YoIaJzMrLnJHHoYbIywnRz3jVDw5KoIbYz2jHkdi0nsWGmtu4lcaXmsWGmc4XmIK7igjVCMrLCJOGmxb4ihnVBgLKihjNyMeOmJq1lcaXntGSideXlcaWlJm1ktSGyM9YzgvYlxjHzgL1CZOGnNb4oYbWywrKAw5NoIa2ChGGohb4oYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwXPC3qGEYbKAxnWBgf5oIbMBgv4oYbMBgv4lwrPCMvJDgLVBJOGy29SDw1UoYbNyxa6idzWEdSGBwfYz2LUoIa4ChGGmdSGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1JyxjKihSGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSGyM9YzgvYlxjHzgL1CZOGohb4oYbWywrKAw5NoIa4ChGGmtbWEdSGyMfJA2DYB3vUzdOGCMDIysGZmcWGndeSidu5lcaWlJyPoYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwnHCMqUB3DUzwqGEYbIB3jKzxiTy29SB3i6ihjNyG',
        'AMvfDwK',
        'iJ4kicaGicaGicaGicaGicaGipcFKRWkicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaG',
        'CLLMvMO',
        'iIbPzd0IC3rHA2vVDxqTDgfIlxrYywrLCNmIihrPDgXLpsjuCMfKzxiGsg9ZCgL0ywXPEMf0Aw9UifnLCNzPy2vZifDHDgnOBgLZDci+cIaGicaGicaGicaGicaGicaGicaGicaGipcFKRWGvhjHzgvYCYaO',
        'vvDSuKu',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgfRzw91Dc1IDg4TAwnVBIiGAwq9iNn0ywTLB3v0lwj0BI1Zzxr0Aw5NCYiGDgL0Bgu9iLrVz2DSzsbuCMLNz2vYifnLDhrPBMDZiJ7IMPK8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigLKpsjZDgfRzw91Dc1IDg4TBwLUAw1PEMuIihrPDgXLpsjnAw5PBwL6zsbsywrHCIi+4OIspc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8l2rPDJ4kcIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc10ywjZiJ4kicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgfRzw91Dc10ywiTyNrUia',
        '8j+uHcbdAgvJAYbMB3iGuMfKyxiGvxbKyxrLCW',
        'rMPvA1G',
        'zNf5tKO',
        'C3r5Bgu',
        'CMfUA2vKx29UBhK',
        '4O+X77IpieLUywn0AxzPDhKGCMvXDwLYzw1LBNqGC2v0ihrVifvoteLnsvrfrcaOyw55igfJDgL2Axr5ks4',
        'ELvTreW',
        'imk3ipcFP7eGt24Gv2fSBa',
        'Dg9Nz2XLlwfSzxj0lwz1BgXOCa',
        'C3rHA2vVDxqTyNrUlxzPzxCTDgfYz2v0',
        'C3rHA2vVDxqTy2HHAw4TC2nHBI1ZDgfYDa',
        'Aw5UzxjuzxH0',
        'zgvMzw5KAw5Nx2zHy3rPB24',
        'Ag1sreK',
        'zgvMzw5KAw5N',
        'C2v0',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbPzd0IC3rHA2vVDxqTzM9VDgvYlxjHDguIpLjHDgu6ia',
        'DxnLCK5HBwu',
        'w2LKkJ0IAwnVBJq5iL0SifTPzcO9iMLJB241mcjDlcbBAwqQpsjPy29UnteIxsWGw2LKkJ0IAwnVBJuYiL0SifTPzcO9iMLJB241mYjD',
        'C3rYB2TLu3r5Bgu',
        'zMLUza',
        'txv0zq',
        'txnsuwy',
        'iJ48l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGpgeGAhjLzJ0IAhr0Chm6lY93D3CUDg9YBI5JB20VChjVzMLSzxmUCgHWp1Hjrd0',
        'uwXlDw0',
        'yxzbwuy',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1MDY1YB3CIpGOGicaGicaGicaGicaGicaGicaGia',
        'DMLZAwjPBgL0Evn0yxrL',
        'yNrzquC',
        'i2y4nZe3mq',
        'BuTor1q',
        'CMvXDwvZDa',
        'uMvZDw1L',
        'igHPDa',
        'DgrKDwS',
        'DMf2Auq',
        's1voAKu',
        'EwXyAgK',
        'sg9ZCgL0ywXPEMvK',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UigLKpsjZDgfRzw91Dc1IDg4TzgLZBwLZCY1TB2rHBciGC3r5Bgu9iMjHy2TNCM91BMq6icm0nZu1nJK7ignVBg9YoIaJzMzMoYbIB3jKzxi6ig5VBMu7ihbHzgrPBMC6idDWEcaXnhb4oYbIB3jKzxiTCMfKAxvZoIa2ChG7igzVBNqTC2L6ztOGmtjWEdSGzM9UDc13zwLNAhq6idyWmdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGrgLZBwLZCWOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia',
        'p3nLBgvJDgLVBNm9ChjVzMLSzsXIyxnPyYzRzxK9',
        'A0XYCvu',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgfRzw91Dc1IDg4TAwnVBIiGAwq9iNn0ywTLB3v0lwj0BI10zxn0lxnVDw5KiIbZDhLSzt0IzMXLEdOGmtSGCgfKzgLUzZOGnhb4oYiGDgL0Bgu9iLrLC3qGqxr0ywnRifnPCMvUiefSyxjTiJ7WN5skifnPCMvUpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgfRzw91Dc1IDg4TAwnVBIiGAwq9iNn0ywTLB3v0lwj0BI10zxn0lwjLBgWIihn0EwXLpsjMBgv4oIaXoYbWywrKAw5NoIa0ChG7igjVCMrLCI1JB2XVCJOGi2y1owuWyJSGy29SB3i6icnMyMjMmJq7iIb0AxrSzt0IvgvZDcbnzwXVzgLJiejLBgWGq2HPBwuIpVcFLjqGqMvSBdWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigLKpsjZDgfRzw91Dc1IDg4TDgvZDc10CMfKzxiIihn0EwXLpsjMBgv4oIaXoYbWywrKAw5NoIa0ChG7igjVCMrLCI1JB2XVCJOGi2y1owuWyJSGy29SB3i6icnMyMjMmJq7iIb0AxrSzt0IvgvZDcbuCMfKzxiGq2fZAcbgyw5MyxjLifnVDw5KiJ7WN5k8ifrYywrLCJWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24IigLKpsjZDgfRzw91Dc1IDg4TDgvZDc1ICMvHy2GIihn0EwXLpsjMBgv4oIaXoYbWywrKAw5NoIa0ChG7igjVCMrLCI1JB2XVCJOGi2vMndq0ndSGy29SB3i6icnModCXnZe7iIb0AxrSzt0IvgvZDcbjBgXLz2fSieHPDcbbBgvYDcaMiev2AwrLBMnLienHCMqIpVcFMQGGqNjLywnOpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'C3rHA2vVDxqTDgfIlwzHy3rPB25Z',
        'B2THEq',
        'w2rHDgeTzgvSlxrYywrLCJ0I',
        'C3rHA2vVDxqTyNrUlw1PBMLTAxPL',
        'r0fSAwO',
        '4PQG77IpifrHCMDLDcbB',
        'C3rYB2TLuMvJDa',
        'ywXLCNrpBKXHBMrPBMC',
        'y2HHAw5xyxrJAgvYrw5HyMXLza',
        '8j+sVcK8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaG',
        '8j+sVcbuCMfKzxiGwW',
        'C3rHA2vVDxqTzNCTCgf1C2vK',
        'w1n0ywTLB3v0xsbbueKGCMvXDwvZDcbMywLSzwq6',
        '4OcIicOQqxr0ywnRzxiQkJOG',
        'pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTC3rLChmIpGOGicaGicaGicaGicaGicaGicaGicaGica8yJ5iB3CGDg8GyNv5oJWVyJ4GB3bLBIb5B3vYieL0zw1ZihbHz2uSignOB29Zzsbyyw5HEcdIHPiGu2vUzcWGzw50zxiGpgi+',
        'qLDkEeW',
        'oMHVDMvY',
        'C3rHA2vVDxqTy2HHAw4TDgfYz2v0lwLK',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igfSAwDUlwL0zw1ZoIbJzw50zxi7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGCgfKzgLUzZOGmNb4ida7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjMB250lxnPEMu6ideXlJvWEdSGy29SB3i6icnJyMq1zte7iJ7WN5skiefSyxjTifzVBhvTztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjYyw5NzsiGAwq9iNn0ywTLB3v0lwfSyxjTlxzVBhvTzsiGBwLUpsiWlJeIig1HEd0Ims4WiIbZDgvWpsiWlJa1iIb2ywX1zt0I',
        'AKPgtva',
        'B2jQzwn0',
        'AgvHza',
        'DhjHDMvSBgLUzYaVigfICM9Hza',
        'uLnWq1e',
        'BMvHCKHVC3buAhjLC2HVBgrnAw4',
        'iIb0AxrSzt0IvgvYCML0B3j5ifDHCIbB',
        'jMnVBw1LBNq9u3rHA2vVDxrlzxLdAgvJAW',
        'iJ7INiuG',
        'DMLZAwjSzq',
        'Cg9SBgLUz0LUDgvYDMfS',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IyMfJA2DYB3vUzdOGCMDIysGYnduSide1ocWGmteSidaUmtiPoYbIB3jKzxi6idfWEcbZB2XPzcbYz2jHkdi0nsWGmtu4lcaXmsWGmc4ZnsK7igjVCMrLCI1YywrPDxm6idzWEdSGCgfKzgLUzZOGnNb4ideWChG7ig1HCMDPBI1IB3r0B206idHWEdSGzgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbMB250lxnPEMu6ideXChG7ignVBg9YoIaJzMvMmdHHoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpUkpUo+4JYbuCMfKzxiGBw9UAxrVCMLUzYbPCYbJDxjYzw50BhKGpgi+uefvu0vepc9IpJWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbPzd0IC3rHA2vVDxqTDhjHzgvYlxjLC3vTzs1Iyw5UzxiTyNrUiIbZDhLSzt0IyMfJA2DYB3vUzdOGiZiYyZu1ztSGy29SB3i6icnMzMy7igjVCMrLCJOGBM9UztSGyM9YzgvYlxjHzgL1CZOGnhb4oYbWywrKAw5NoIaYChGGohb4oYbMB250lxnPEMu6ideWChG7igzVBNqTD2vPz2H0oIa3mda7ign1CNnVCJOGCg9PBNrLCJSIpLjLC3vTztWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        '4PQG77Ipiev2AwrLBMnLief1Dg8Tu2nYzwvUC2HVDcbesvnbqKXfrc4',
        'zgvZyW',
        'CYKUief3ywL0Aw5NifrVCM4Gy3jVBIb0AwnRlG',
        'thbTy1y',
        'C2vSzwn0lcbBzgf0ys1KzwXDlcbIDxr0B24Sige',
        'zxPIDwu',
        '8j+uKIbjBIbiB3nWAxrHBdOG',
        'zxjYB3i',
        'B3bWB25LBNrjza',
        '4PQHieHVC3a6ifjLywr5icGR',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4+',
        'qxjLihLVDsbZDxjLihLVDsb3yw50ihrVihbYB2nLzwqGyw5Kihn0ywDLihrOAxmGyxr0ywnRigfUExDHEt8',
        'zg9JA1bVC2L0Aw9U',
        'ywXHCM1tB3vUzfr5Cgu',
        'C2vJDg9Y',
        'Ehjwvfy',
        'whHqAeO',
        '8j+oRYbuB2DNBguGu3rHA2vVDxqGuMfKyxiGrg9JAW',
        'tMv3q3e',
        'CgvUzgLUz18',
        'y2XVC2vZDa',
        'q2jlzue',
        'AgzOyuO',
        'B24GDgHLihDHBgW',
        'CMfKyxjFywn0AxzLx3rHyG',
        's2Xvv2u',
        'DgHLBG',
        'DfnSsgi',
        'BwvTyMvYCW',
        'AuLZy0O',
        'zM9JDxnLza',
        'zhj1z0nVB2XKB3DUqMvSBa',
        'Cg9ZDe1LC3nHz2u',
        'pUkjPsa',
        'pc9ZCgfUpJWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'z1HqueS',
        'Ahr0Chm6lY9ZDgfRzw91Dc1SAwnLBNnLlNn0ywTLB3v0lwXPy2vUC2uUD29YA2vYCY5Kzxy',
        'C3rHA2vVDxqTy2HHAw4TCxvPy2STAw5WDxq',
        'CMvTB3zLsxrLBq',
        'ww1Tvhq',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iLbSyxLZihbSzwfZyw50ignOAw1LihDOzw4GEw91CIbTzwrPy2fSigrYDwCGy29VBgrVD24GzMLUAxnOzxmIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+8j+sIIbeCNvNienVB2XKB3DUiefSzxj0ienOAw1Lpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgLUChv0ihr5Cgu9iMnOzwnRyM94iIbPzd0IDg9Nz2XLlwrYDwCTy29VBgrVD24TyMvSBciG',
        'yw5VBG',
        'zxz0',
        'sfruuca',
        'idXZCgfUihn0EwXLpsjJB2XVCJOJzJu5ztbIoYiGDgL0Bgu9iKzHy3rPB24Gv2f0y2GGugf1C2vKiJ7IJ7G8l3nWyw4+',
        'Dw5KzwzPBMvK',
        'jsKG4OcIicHjBMfJDgL2Axr5ihrPBwvYihjLCxvPCMvZifnUAxbLCIbqCM8P',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0ywTLB3v0lwj0BI1Py29UiIbPzd0IC3rHA2vVDxqTyNrUlwnOzwnRlxvWzgf0zsiGC3r5Bgu9iMzSzxG6ide7ihbHzgrPBMC6idrWEdSGyM9YzgvYlwnVBg9YoIaJmZHIzgy4oYbJB2XVCJOGiZm4yMrModSIihrPDgXLpsjdAgvJAYbhAxriDwiGzM9YifvWzgf0zxmIpVcFLiqGvxbKyxrLCZWVyNv0Dg9UpGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSGzM9UDc1ZAxPLoIaXmhb4oYbJB2XVCJOGiZK0ytnIodSGBwfYz2LUlxrVCdOGmNb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpLjHzgfYihy',
        'BwfW',
        'tgLMzsbMDwXSEsbYzwnVDMvYzwq6ia',
        'q1j4sgW',
        'D3H0yuO',
        'B1vkDhq',
        'Cg9TBwu',
        'Aw5JAwrLBNrjza',
        'C3vZCgvUzgvK',
        'BgKSihrYlcbBy2XHC3mQpsj1C2vYuM93iL0SifTJBgfZCYO9iNvZzxjZlwXPC3qIxsa+igXPlcaUDxnLCI1PBMzVlcbKAxzBy2XHC3mQpsjYB3DFx18Ixq',
        'C2vSzwn0zwq',
        'wfnmDfi',
        'DwriD2q',
        'C2XPy2u',
        'rMz1t28',
        'BM9Uzq',
        'pc90zxH0yxjLyt4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGicaGicaGicaGidWHls0Gtw9KywWGrM9VDgvYiefJDgLVBNmGls0+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IyMfJA2DYB3vUzdOGiZfLmJKZyJSGCgfKzgLUzZOGmtjWEcaXnNb4oYbIB3jKzxiTDg9WoIaXChGGC29SAwqGiZmZnde1ntSGzgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbMBgv4lxDYyxa6ihDYyxa7igDHCdOGohb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igDHCdOGohb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8yNv0Dg9UigLKpsjZDgfRzw91Dc1IDg4Tzg93BMXVywqTC2HVDciGC3r5Bgu9iMjHy2TNCM91BMq6icmYntyZzwi7ignVBg9YoIaJzMzMoYbIB3jKzxi6ig5VBMu7ihbHzgrPBMC6idDWEcaXnhb4oYbIB3jKzxiTCMfKAxvZoIa2ChG7igzVBNqTC2L6ztOGmtjWEdSGzM9UDc13zwLNAhq6idCWmdSGy3vYC29YoIbWB2LUDgvYoYbKAxnWBgf5oIbMBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idzWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpUkSH++4JZWVC3bHBJ4Grg93BMXVywqGue5hcIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GAwq9iNn0ywTLB3v0lwj0BI1JB3b5lxjLCg9YDciGC3r5Bgu9iMjHy2TNCM91BMq6icmWntK2nJK7ignVBg9YoIaJzMzMoYbIB3jKzxi6ig5VBMu7ihbHzgrPBMC6idDWEcaXnhb4oYbIB3jKzxiTCMfKAxvZoIa2ChG7igzVBNqTC2L6ztOGmtjWEdSGzM9UDc13zwLNAhq6idCWmdSGy3vYC29YoIbWB2LUDgvYoYbKAxnWBgf5oIbMBgv4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idzW',
        'Aw5Hy3rPDMvmAw1PDe1PBG',
        'yuPICxO',
        'DMvYAwzPzwq',
        'C3rHA2vVDxqTzMLNAhqTCxvPy2TIyxiTyNrU',
        'vLzvshq',
        'pJeWBtWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ImtuIia',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGidWVzgL2pGOkicaGicaGicaGicaGicaGicaGica8is0Tiezpt1rfuIbcvvrut05tic0TpGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igDHCdOGnhb4oYbTyxjNAw4TDg9WoIa2ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaG',
        'rLz5yNq',
        'C3rHA2vVDxqTCMfKyxiTBgvHzgvYlxyX',
        '4PQHieHPDcbmB3DLC3qGqwjYB2fK',
        'D3Djyvq',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1KzxnJiJ4',
        'DhjPyw5NBgu',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxDPBMrVDYa',
        'CKPWsxK',
        'EhjIyNC',
        'sgrvAKC',
        'y3jLyxrLrwXLBwvUDa',
        'pc9IpIaOy29UzMLYBwvKihDPDgGGEw91CIbVD24GqvbjigTLEsKUpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGia',
        'C3rHA2vVDxqTzNCTyM9KEs0',
        'zuzvz1C',
        'Dg9Nz2XLlwfSzxj0lxrYywrLCG',
        'y2fnBKK',
        'lNrYyxzLBgLUzYWGw2nSyxnZkJ0IDhjHDMvSAw5NiL0',
        'w2nSyxnZkJ0IC3bVDxnLiL0SifTJBgfZCYO9iM1HCNjPywDLiL0SifTJBgfZCYO9iNbYB3bLCNr5iL0',
        'ywn0AxzLvgHYzxnOB2XKtwLU',
        'C29VBG',
        'uePNu3q',
        'q291BgqGBM90ihjLywnOihrOzsbSAwnLBNnLihnLCNzLCI4GuMv0CNLPBMCGAw4GmIbTAw51DgvZlG',
        'B2zMBgLUzq',
        'ruH5txO',
        'zgLZCgXHEq',
        'thvRAha',
        'iIb0AxrSzt0Iq29UzMLNDxjLigfJDgL2Axr5ihjLCxvPCMvTzw50igzVCIb0AgLZihrHCMDLDci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiWiIa',
        'ks4IpUkAOsbfrdWVC3bHBJ4',
        'C3rHA2vVDxqTDgfYz2v0lwXPC3q',
        '8j+oRYbozxH0iff1AwnRieHPDcb0yxjNzxqGC2v0ihrVicm',
        'yvHmzuu',
        'x19Syxn0shrTBa',
        'zMXVz0C',
        'ALLntvy',
        'DLzeA2m',
        'uMTeBKS',
        'D0HyDfm',
        '8j+sIIbeCNvNienVB2XKB3DUifjLywr5iq',
        'EuHAD1q',
        'yNjLywnO',
        '4PQG77IpifvWzgf0zsbJAgvJAYbMywLSzwqGkeHuvfaG',
        'AvnlBuO',
        'C2rhqxG',
        'y0vbEuC',
        'DhDjvvK',
        'qNrnBue',
        'rvPLBKK',
        'xsbHzgrLzcb0BYbnzxjJzw5HCNKGu3rHA2vVDxqU',
        'tM9Uzq',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxrHyI1IywrNzsi+',
        'zMfJDgLVBKLK',
        'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl01LCM9NAwvnywDPyY9ZDgfRzw91Dc1YywrHCI1YzwXLyxnLCY9TywLUl3rVCM5FBwvYy2vUyxj5x3n0ywTLB3v0lM1LDgeUANm',
        'yMvSBa',
        's2fyu1O',
        'AxnqCM8',
        'CMvZCg9UC2vuzxH0',
        'w1n0ywTLB3v0xsbNzxrqBgf5zxjfBMvYz3LgCM9Trg9TigvYCM9YoG',
        'r3nfA0y',
        'iIbPzd0IC3rHA2vVDxqTDgfIlxrHCMDLDhmIihrPDgXLpsjnzxjJzw5HCNKGvgfYz2v0ifDHDgnOBgLZDci+cIaGicaGicaGicaGicaGicaGicaGicaGipcFJQ8GvgfYz2v0CYaO',
        'ntCYnZeZmfPdz1DiBG',
        'sLb0q00',
        'vhjHzgvYihDHDgnOBgLZDcb3AxrOig91Dc1VzI1OB3nWAxrHBcbHBgvYDhmGyw5KihbLCI10CMfKzxiGBxv0zs4',
        '4P2mifzjt0XbveLptIaJ',
        'v0fwrq',
        'C3rYAw5N',
        'DgfIswq',
        'CKXutuC',
        'tI9b',
        'Dg9Nz2XLlwfSzxj0lw9RyxK',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbPzd0IC3rHA2vVDxqTyNrUlxzPzxCTyxr0ywnRzxiIihn0EwXLpsjIywnRz3jVDw5KoIaJmZm0mtu1oYbJB2XVCJOGi2uYztHMmdSGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSGCgfKzgLUzZOGn3b4ideYChG7igjVCMrLCI1YywrPDxm6idzWEdSGzM9UDc1ZAxPLoIaXmxb4oYbJDxjZB3i6ihbVAw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG4PQu77Ipief0DgfJA2vYifbYB2zPBgukicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'Cvz4EhC',
        'zgvZDgLUyxrPB24',
        'pJe1BtWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0ImZaIia',
        '8j+uKIbuAguGzNjLzsbYywrHCIb3yxrJAgvZideGDgfYz2v0lIbtBMLWzxiGuhjVicHtucKGDw5SB2nRCYb1BMXPBwL0zwqGDgfYz2v0CY4',
        'z2v0rwXLBwvUDej5swq',
        'DuzRsuO',
        'i2y1owuWyG',
        'B3zhzMK',
        'sxDWtMC',
        'B3bWB25LBNroyw1L',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VzMf2AwnVBI5Py28',
        'v2X3wKm',
        'C3rHA2vVDxqTy2HHAw4TCgLSBc1JB250ywLUzxi',
        'lcbHy2nVDw50iokjPsa',
        'qvrVBNe',
        'uwLbCgm',
        'lNn0CMLJA2vUlwf0DgfJAYb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmXztnHogeGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJm2i4mMy2icfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJotnJnwzKicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1HDhrHy2STyNrUlNn0CMLJA2vUlwf0DgfJAZPOB3zLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmXzdrLzdGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaWideWChGGCMDIysG1osWGmtmWlcaYndySidaUnsKGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGic5ZDgfRzw91Dc1JyxjKlNn0CMLJA2vUihSkicaGicaGicaGicaGB3bHy2L0EtOGmc44ntSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJndC1nty5icfPBxbVCNrHBNq7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSihjNyMeOmZaSidqXlca1osWGmc42ksaWjsWGiZbMmtCYysaXmdaLksaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2fYzc1ZDwjIyxiGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47cIaGicaGicaGicaGihbHzgrPBMC6idnWEca2ChG7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmtuSidiZlca0mIWGmc42nsK7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicmZmZqXntu7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idrWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmc41ChG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc10yxjNzxqTBgLTAxqTC2vSzwn0ihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZbMmtCYytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSkicaGicaGicaGia',
        'rMfJDgLVBIbB',
        'Bwf4',
        'zhfbyLK',
        'pc9IpIWGDhLWzsb0AguGBw9KDwXLignVzguGyxmGDgHLig1LC3nHz2uGyw5KihnLBMqUcIaGicaGicaGicaGicaGicaGicaGicaGievHy2GGwgfUyxGGywrKCYa3igrHExm7ihbHEwLUzYbHz2fPBIbIzwzVCMuGAxqGCNvUCYbVDxqGywrKCYb0BYb0AguGDgLTzsbSzwz0lIbtzw5Kig9UzsbTB2r1BguGCgvYigDPzNqUcIaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTywn0Aw9UCYi+cIaGicaGicaGicaGicaGicaGicaGicaGidXHignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IDg4IigHYzwy9iMH0DhbZoI8VD3D3lNrVCM4Uy29Tl2L0zw0UCgHWiIb0yxjNzxq9iL9IBgfUAYi+8j+oGsbpCgvUieL0zw1Zpc9HpGOGicaGicaGicaGicaGicaGicaGicaGica8ysbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTyNrUiIbOCMvMpsjODhrWCZOVl3D3DY50B3jUlMnVBs9WCM9MAwXLCY5WAha/weLepq',
        'igf0DgfJA2fIBguGBM93lca',
        'C29Tzq',
        'cIaGicaGicaGlYOGls0TidDclIbxqviGueftuYaMieXjq0vou0LorYbtvfLmrvmGls0TicOVcIaGicaGicaGlNn0ywTLB3v0lwXPy2vUC2uTyMfKz2uGEWOGicaGicaGicaGicbMB250lxnPEMu6ideWChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGicaGihbHzgrPBMC6idaGn3b4oWOGicaGicaGicaGicbOzwLNAhq6idiYChG7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idrWEdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZztSkicaGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idnWEdSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCdSkicaGicaGicaGicaGBgLUzs1OzwLNAhq6ide7cIaGicaGicaGicaGigzSzxGTC2HYAw5RoIaWoWOGicaGicaGicaGicbIB3GTC2L6Aw5NoIbIB3jKzxiTyM94oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTBgLJzw5Zzs1IywrNzs5VD25LCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSihjNyMeOmJm0lcaXnZKSidGSidaUmJuPlcbYz2jHkdiWmIWGmtm4lca0lcaWlJm1ksK7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicnLywiZmdG7cIaGicaGicaGicaGignVBg9YoIaJzMvMmdHHoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGnNb4ihjNyMeOmJm0lcaXnZKSidGSidaUmZuPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTBgLJzw5Zzs1IywrNzs5WCM8GEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcbYz2jHkdm0lcaXotCSidK0lcaWlJi1ksWGCMDIysGYmsWGmti4lca2msWGmc4ZnsKPoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZBW',
        'ugf1C2u',
        'cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTy2fYzca',
        'C3rHA2vVDxqTzNCTyxr0ywnRlwjHBM5LCG',
        'cIaGicaGicaG',
        'phnWyw4GDgL0Bgu9iLrOAxmGDgfIihbVBgXZihrOzsbuB3jUiefqssbMB3iGywXSig9Wzw4Gvg9YBIb0ywjZiJ7WN5oHieXLywrLCJWVC3bHBJ4G4OcIifjHDgu6ia',
        's2jQChO',
        'C2jMtMy',
        'uwDtwfy',
        'uwfWBLy',
        'C3rHA2vVDxqTyNrUlxrLC3qTyMvSBa',
        'qvbjievYCM9Y',
        '8j+uHcbjj3zLihbHAwq6ignOzwnRig5VDW',
        'C3rHA2vVDxqTy2HHAw4TyMfY',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjMB250lxnPEMu6idGUnxb4oYbVCgfJAxr5oIaWlJK7ignVBg9YoIaJzMrLmdq3oYi+4O+477IpienptLrsqunuifbbvvnfrcaOq0Xjq0SGve8GrK9sq0uPpc9ZCgfUpGOGicaGicaGicaGicaGicaGpc9IDxr0B24+cIaGicaGicaGicaGia',
        'A1D6yNy',
        '8j+uKsbbzgqGEw91CIbuB3jUiefqssbRzxKGDg8Gy29UzMLYBsb0AgLZieLeigfUzcb1BMXVy2SGD2HHDcb5B3uGAgf2zsbIB3vNAhqU',
        'zgf0yq',
        'C3rYAwnRzw4Tyxr0ywnR',
        'BvruqNq',
        'q2XPy2SGDg8GywrKihrYywrLCIbB',
        't25SAw5LigfJDgL2Axr5ihn0yxr1CYbYzxf1AxjLCYbuCMfKzxiGv2f0y2G',
        'pc9KAxy+cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGica',
        '8j+pTca',
        'DNHergW',
        'iIb0AxrSzt0IuMvTB3zLignVBNrYywn0iJ7INju8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTy29UDhjVBhmIpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTzNCTD2vHCg9Uia',
        'iZeWyJK4mq',
        't3v0ig9MifrVCM4',
        'vgfYz2v0igLZifnuuKLds0voicHsAwDODc1JBgLJAYbJyxjKihrVihvUBwfYAYK',
        'zM10ia',
        's1H0rMS',
        'BhrbCM0',
        'xsbHzgrLzcb0BYbgywn0Aw9UifDHDgnOlG',
        'v1rhCMu',
        '4PQu77Ipief1Dg8Tugf1C2uGB24GrwfYBhKGrgLZy2HHCMDLigvUywjSzwqU',
        'Eu9hreC',
        '4O+ZifDHAxrPBMCGzM9YigXLywrLCIb0ywiUlI4',
        'C3rHA2vVDxqTDgfIlxrHCMDLDhm',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GDgL0Bgu9iKjLy29TAw5NigvSAwDPyMXLihnVB24GkgLUywn0AxzPDhKGDgHYzxnOB2XKig9YigHVC3bPDgfSihjLBgvHC2uPiJ7IJ7mG',
        'C3rHCNrLza',
        'wxzMsMe',
        '4PQHiff1AwnRieHPDcb0yxjNzxqGCMvZzxqGDg8GqMfZzsbjrcaJ',
        'D1f6uMC',
        'BgfZDezLDgnOzwq',
        'iIb0AxrSzt0Iq2XPy2SGDg8GC3DPDgnOigHPDcb0ExbLlIa',
        'DgL0Bgu',
        'i3n0ywTLB3v0lxn0B3jLlwnOzwnR',
        'ifvuqW',
        'jMD0oW',
        'BgLUzvrV',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VChjLzMvYzw5JzxmUCgHWi3rHyJ1HCgK/C3rLCd1HzgrozxDlzxKMDgL0Bgu9u3rHA2vVDxrsywrHCG',
        'Dg9HC3q',
        'D2fYsw5MBW',
        'vMTmv1K',
        'wKHzsey',
        'u3vzDhi',
        'cIaGicaGicaGicaGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnOywLUlxbPBgWTyMfKz2uG',
        'mtaXlca1mIWGmc45nsKGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJmJjJntvLicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGmca4ChGGCMDIysGZncWGmtK3lca5ncWGmc42ksaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3eTyNrUlNrYywrLCI5Hy3rPDMuGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkde4mcWGodmSidKSidaUotuPicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGi2y1owuWyIaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGohb4ihjNyMeOmJq1lcaXntGSideXlcaWlJyPicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1JyxjKlNjLywr5ihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJmJjJntvLoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGmtbWEcbYz2jHkdm0lcaXotCSidK0lcaWlJm1ktSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGCMDIysGZncWGmtK3lca5ncWGmc4XksaWjsWGiZfLmJKZyIaXmdaLktSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnHCMqUBMvHCI1YzwfKEsb7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGi2y1owuWyJSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaWideWChGGCMDIysGYnduSide1ocWGmteSidaUmZuPoWOGicaGicaGicaGicbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcbYz2jHkdi0nsWGmtu4lcaXmsWGmc4XmIKGmcuSicmXzti5m2iGmtaWjsK7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1JyxjKlwHLywrLCIb7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxi7cIaGicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBJSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnHCMqTBG',
        'w1n0ywTLB3v0xsbfCNjVCIbXDwvYEwLUzYbVDMvYC2vHCYb0yxjNzxq6',
        'EKnuy1K',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxiTBMfTzsjD',
        'y2XPy2S',
        'zMXVB3i',
        'q0zABfG',
        'BuD6suW',
        'xs4Gu2v0ihrOAxmGywnJB3vUDcDZig93BIbRzxKU',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lxn0B3jLlwjVEci+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs10AxrSzsi+cIaGicaGicaGicaGicaGicaGicaGphnWyw4+8j+uKsa',
        'ieuGWRCG',
        'qunNuvy',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc91Bd4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlxbYAw1HCNKIigLKpsjZDgfRzw91Dc1IDg4TC2v0DgLUz3mTD2fYCgfZCYiGC3r5Bgu9iNDPzhrOoIaXmdaLoYbIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJzJu5ztbIlcaJzdK3nZa2ktSGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoYbJB2XVCJOGiZbMmtCYytSGzM9UDc13zwLNAhq6idKWmdSGzM9UDc1ZAxPLoIaXmxb4oYbWywrKAw5NoIa2ChG7igjVCMrLCI1YywrPDxm6idrWEdSGy3vYC29YoIbWB2LUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG8j+BKIbpCgvUifn0B3jLcIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaG',
        'Dg9Nz2XLlwfSzxj0lwXHBMrPBMC',
        'CMvZDw1L',
        'wgz2yLq',
        'rg91ruW',
        'xsb3AgLJAcbPCYbJDxjYzw50BhKGzw5NywDLzcbPBIbHia',
        'vKLtvwS',
        'BKrvwxu',
        'vgfYz2v0ieLUywn0AxzLicG+ia',
        'DgDNwuC',
        'Ahr0Chm6lY9YyxCUz2L0AhvIDxnLCMnVBNrLBNqUy29Tl01LCM9NAwvnywDPyY9ZDgfRzw91Dc1YywrHCI1YzwXLyxnLCY9TywLUl3rVCM5FBwvYy2vUyxj5x3n0ywTLB3v0lNvZzxiUANm',
        'C3rHCNq',
        '4OcIicOQuhjLluHPDcbby3rPDML0EsOQoIa',
        'tK5SC2e',
        'BuT5DMi',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjMB250lxnPEMu6idKUnxb4oYbJB2XVCJOGiZy0nZq4yJSGzM9UDc13zwLNAhq6idCWmdSGCgfKzgLUzZOGmNb4idvWEdSGyMfJA2DYB3vUzdOGCMDIysGYntuSmJu1ldi1nsWWlJa0ktSGyM9YzgvYoIaXChGGC29SAwqGCMDIysGYntuSmJu1ldi1nsWWlJa4ktSGyM9YzgvYlxjHzgL1CZOGm3b4oYiGDgL0Bgu9iKfJDgL2Axr5igzPBhrLCIaMieLUywn0AxzPDhKGDgLTzxiGCMvXDwLYzsbtBMLWzxiGuhjViJ7WN5ssieHVC3aGt25SEtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica',
        'iZfLmJKZyG',
        'EuPsEgq',
        'vgvYCML0B3j5ifDHCIbB',
        'DuPUC3C',
        'icaGicaGicaGicaGCgfKzgLUzZOGmxb4idzWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmhb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbSzxr0zxiTC3bHy2LUzZOGmc4ZChG7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwz3lxDLyxbVBI5ZDhjPy2TLBIb7igjHy2TNCM91BMq6ihjNyMeOmty4lca4nsWGmJq3lcaWlJiPoYbIB3jKzxi6idfWEcbZB2XPzcaJytG1nwy3oYbJB2XVCJOGi2u5zdvMzJSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY13zwfWB24UC3rHBMrHCMqGEYbIywnRz3jVDw5KoIbYz2jHkdu2lcaXodKSidi0ocWGmc4XnsK7igjVCMrLCJOGmxb4ihnVBgLKicmZogjKzJG7ignVBg9YoIaJyMfLnMzKoYb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwHPBNqGEYbMB250lxnPEMu6idKUnxb4oYbTyxjNAw4TyM90Dg9ToIaZChG7ih0kicaGicaGicaUC3rHA2vVDxqTzNCTAgLUDc5ZDhjPy2TLBIb7ignVBg9YoIaJzdHIngzLoYb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwHPBNqUC3rHBMrHCMqGEYbJB2XVCJOGiZDKzdnMyZSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1ZDw1Tyxj5ihSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIa4ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtaUnxb4oWOGicaGicaGicaGicbJB2XVCJOGi2nIzdvLmtSkicaGicaGicaGicaGBwfYz2LUoIaYChGGmdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwz3lwfNzsb7ig1HCMDPBI1Szwz0oIbHDxrVoYbJB2XVCJOGiZy0nZq4yJSGzM9UDc1ZAxPLoIa5lJvWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1MDY1YB3CGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGia',
        'Dg9eyxrHvvjm',
        'DgLTzw91Da',
        '4O+ZienOzwnRAw5NigzVCIb5B3vYihbHEw1LBNqUlI4',
        '4PQG77IpieLUDMfSAwqGCgXHEwvYieLeig9YihbYB2zPBguGBgLUAYe',
        'u1fNzNO',
        'DgLTzxn0yw1W',
        'tgPZrhq',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8l3nLBgvJDd4kicaGicaGicaGicaGicaGicaGicaGicaGpc9SywjLBd4kicaGicaGicaGicaGicaGicaGica',
        'ufDrvxK',
        'xsbPCYbPBIbkywLSiq',
        'DgTUuKC',
        'zMfJDgLVBLbVBgXtzwm',
        's2njsfa',
        'C0H5Ehm',
        'icJIMQeGruqPpc9IDxr0B24+',
        'qwn0AxzLifDHCG',
        'p3nLBgvJDgLVBNm9yMfZAwm',
        'idXIpG',
        'Dun5wuW',
        '4OcI4OcI4OcI4OcI',
        'tNnRzeC',
        'zNjLzq',
        'Bw9KAwzPzxi',
        'xsb0BYbiB3nWifnLCNzPy2vZifDHDgnOBgLZDcaOqwXLCNrZihDOzw4Gt25SAw5LicyGt3v0ks4',
        'BNjuD3G',
        'ANvZDgLMEunVBNrLBNq',
        'svHbC1q',
        'EhntCKm',
        'zMfJDgLVBI1WB2XSlxjLCxvLC3q',
        'y3jfDxG',
        '4O+4ifrYywrLCIbTB25PDg9YAw5Nifbbvvnfrc4',
        'zMfJDgLVBL9JB250CMfJDhm',
        'ruXxsuS',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigHVC3bPDgfSiIb0AxrSzt0Isg9ZCgL0ywWGCMvTywLUAw5NoIa',
        '4P2mifvoqvvuse9ssvPfrcbisvq',
        'AuPtteC',
        '8j+rPcbbDhrHy2SGyNv0Dg9UihnLDcb0BYbVCgvUifrHCMDLDcbqCM9MAwXLicHMB3iGzg91yMXLignVBMzPCM1HDgLVBIKU',
        'y2HHAw5nAw5bz2veyxLZ',
        'w1n0ywTLB3v0xsbgzxrJAcb1CgrHDguGzxjYB3i6',
        'sg9ZCgL0ywXPEMvKigj5ia',
        'iIbPzd0IC3rHA2vVDxqTCgLSBc10B2DNBguIpGOGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1YywrHCI1Py29UiJ7WN46Vpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUpLjHzgfYicG',
        '4PQG77Ipia',
        'DxnLCM5HBwu',
        'z3rkvhi',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTC3vIAgvHzci+u29VBJWVzgL2pG',
        'C29YDa',
        'igXLzNqHifnbvKuGq0Hbsu4H',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GAwq9iNn0ywTLB3v0lxrVyxn0lwnSB3nLiIbZDhLSzt0Iy3vYC29YoIbWB2LUDgvYoYbTyxjNAw4TBgvMDdOGohb4oYbMB250lxDLAwDODdOGyM9SzdSGzM9UDc1ZAxPLoIaXnNb4oYbJB2XVCJOGiZK0ytnIodSIpSoxpc9ZCgfUpGOGicaGicaGicaGica',
        'rMfSBgvU',
        'rNHZs28',
        'uvPgzhi',
        'pJe1ie1PBNm8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiZmciG',
        'ChvTDNO',
        'C3rHA2vVDxqTB2XKy29WEs1Iyw5Uzxi',
        'zxHJBhvKzwq',
        'C3f1yxjL',
        '4PQHieHPDcbbyNjVywq',
        'lGOk',
        'iZeXmtGYnW',
        'idXZCgfUignSyxnZpsjZDgfRzw91Dc1JyxjKlwX2BciGC3r5Bgu9iMnVBg9YoIaJnJq3ndHIoYi+wW',
        'ig1VCMuGzwXPz2LIBgu8l2rPDJ4',
        'yw1LihSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXm3b4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGicaGicbJB2XVCJOGi2y4zMfMyZSkicaGicaGicaGicaGDgv4Dc1KzwnVCMf0Aw9UoIbUB25LoWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idzWEdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwnHCMqTBMfTztPOB3zLCIb7cIaGicaGicaGicaGignVBg9YoIaJmZHIzgy4oWOGicaGicaGicaGicb0zxH0lwrLy29YyxrPB246ihvUzgvYBgLUztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwrVDcb7cIaGicaGicaGicaGihDPzhrOoIa4ChG7cIaGicaGicaGicaGigHLAwDODdOGohb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa1mcu7cIaGicaGicaGicaGigrPC3bSyxK6igLUBgLUzs1IBg9JAZSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwrVDc5VBMXPBMuGEYbIywnRz3jVDw5KoIaJmJjJntvLoYbIB3GTC2HHzg93oIaWidaGnxb4icmYmMm1nwu7ih0kicaGicaGicaUC3rHA2vVDxqTzg90lMLKBguGEYbIywnRz3jVDw5KoIaJzJu5ztbIoYb9cIaGicaGicaGlNn0ywTLB3v0lwrVDc5VzMzSAw5LihSGyMfJA2DYB3vUzdOGiZy0nZq4yJSGFqOkicaGicaGicaUC3rHA2vVDxqTy2fYzc1IywrNzxmGEWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idnWEdSkicaGicaGicaGicaGzMXLEc13CMfWoIb3CMfWoWOGicaGicaGicaGicbMB250lxnPEMu6ideWChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa2mda7cIaGicaGicaGFqOkicaGicaGicaUC3rHA2vVDxqTC3rHDhvZlxbPBgWGEWOGicaGicaGicaGicbKAxnWBgf5oIbPBMXPBMuTzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGzW',
        'EKH4u3e',
        'mhWZFdr8mxWY',
        'C3rHA2vVDxqTAw5Hy3rPDMuTC2vSzwn0',
        'qxvKAw9dB250zxH0',
        'C3rHA2vVDxqTyNrUlxrLC3qTDhjHzgvY',
        'iIbZDhLSzt0ID2LKDgG6ia',
        'A3nlDeq',
        'pc9VChrPB24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiYiIa',
        'ANnby0u',
        '4PQG77IpieeGvg9YBIbbueKGA2v5igLZigv4ywn0BhKGmtyGBgv0DgvYCYbHBMqGBNvTyMvYCY4',
        'Ahr0Chm6lY9HCgKUDg9YBI5JB20VDxnLCI8',
        'mtfWEcaTyxbWBguTC3LZDgvTlcbcBgLUA01Hy1n5C3rLBuzVBNqSihnHBNmTC2vYAwy',
        't1nnAhm',
        'B206idfWEcbZB2XPzcaJmZm0mtu1oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChGGnhb4idaGmdSkicaGicaGicaGicaGB3zLCMzSB3C6igHPzgrLBJSkicaGicaGicaGicaGBwfYz2LUlwjVDhrVBtOGnhb4oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDgfIlwj0BIb7cIaGicaGicaGicaGigzSzxG6ide7cIaGicaGicaGicaGihbHzgrPBMC6idrWEca2ChG7cIaGicaGicaGicaGigjVCMrLCJOGBM9UztSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGDhjHBNnWyxjLBNq7cIaGicaGicaGicaGignVBg9YoIaJotrHm2i4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWlJvWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idCWmdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIa1ChG7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDgfIlwj0BJPOB3zLCIb7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi1nsWGmJu1lcaYntuSidaUmdqPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTDgfIlwj0BI5Hy3rPDMuGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmwuYotnIoWOGicaGicaGicaGicbJB2XVCJOGiZm4yMrModSkicaGicaGicaGicaGyM9YzgvYlwjVDhrVBtOGmNb4ihnVBgLKicmZogjKzJG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc10ywiTyMfKz2uGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmJjJntvLoWOGicaGicaGicaGicbJB2XVCJOGiZa1mMuXnJSkicaGicaGicaGicaGzM9UDc1ZAxPLoIa5ChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGicaGia',
        'zhvY',
        'C3rHA2vVDxqTAw5WDxqTDgfYz2v0',
        'ywn6DfK',
        'C3bHBG',
        'Du9TDu0',
        'q1fKzum',
        'vKvssuzjruqGqLKGtuvsq0voqvjzifnuquTft1vuifjbrefsihy',
        'igvSAwDPyMXLlw1LBwjLCIbJAgLTzsi+',
        'D0nhzhi',
        'w2fYAweTBgfIzwWQpsjfBMvYz3KIigLD',
        'ue5iC2W',
        'ywDYv3q',
        'C3rHA2vVDxqTy2fYzca',
        'vhjHDMvSAw5N',
        'B2j3tuC',
        'Dg9ju09tDhjPBMC',
        'zw1WDhK',
        'vhjHzgvYifDHDgnO',
        'BMLTyxrPB246ihn0ywTLB3v0ugLSBfb1BhnLideUmNmGAw5MAw5PDguGzwfZzs1PBI1VDxqGiwLTCg9YDgfUDdSkicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmtvZigvHC2uGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxn0yxr1CY1WAwXSlMjYzwfJAc1WAwXSoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGi2vMndq0ncaHAw1WB3j0yw50oWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzIaHAw1WB3j0yw50oWOGicaGicaGicaGicb0CMfUC2zVCM06ihnJywXLkdeUmduPicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc10CMfKzxiTywn0Aw9UCYb7cIaGicaGicaGicaGigrPC3bSyxK6igzSzxG7cIaGicaGicaGicaGigDHCdOGnhb4oWOGicaGicaGicaGicb3Awr0AdOGmtaWjtSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1TC2CGEWOGicaGicaGicaGicbMBgv4oIaXoWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbQDxn0Awz5lwnVBNrLBNq6ignLBNrLCJSkicaGicaGicaGicaGz2fWoIa0ChG7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmXztnHoge7cIaGicaGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKicmZyJGYzJy7cIaGicaGicaGicaGignVBg9YoIaJotnJnwzKicfPBxbVCNrHBNq7cIaGicaGicaGicaGihbHzgrPBMC6idrWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWlJvWEdSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idCWmdSkicaGicaGicaGicaGDgv4Dc1KzwnVCMf0Aw9UoIbUB25LicfPBxbVCNrHBNq7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlw1ZzZPOB3zLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmYntyZzwi7cIaGia',
        's0rmEu0',
        'zMLSBfn0EwXL',
        'AgvSBg8',
        'sg9ZCgL0ywW',
        'iIb0AxrSzt0Iu3rHDhvZoIa',
        'q2HHAw4Gs2L0',
        'C25HChnOB3q',
        'yuPmB1C',
        'x19ut1jox01fuKnftKfswv9tveflru9vvf9mt0ferurFxW',
        'A01WCM0',
        'pJyWBtWVB3b0Aw9UpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0IlteIia',
        'C3rVCMfNzq',
        '4PQHiff1AwnRieHPDa',
        'AhvXqNC',
        'igLZie9lqvKH',
        'w2rHDgeTyMfYpsjLBMvYz3KIxq',
        'CeH5wg4',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUihn0EwXLpsjJB2XVCJOGiZy0nZq4yJSIpUkaKZWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0IBNvTyMvYiIbPzd0IC3rHA2vVDxqTy2HHAw4TC2nHBI1LBMqIignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1UDw0IihzHBhvLpsi',
        'wunKr3a',
        'zwjqwLK',
        'icHm',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6ideWChG7ignVBg9YoIaJzJu5ztbIoYbTyxjNAw4TDg9WoIaYChG7iJ7WN5ssieXVy2TLzcaOBw9Yzsb0AgfUideGDgfYz2v0ig5LzwrZifnUAxbLCIbqCM8Ppc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMrPC3bSyxK6igzSzxG7igDHCdOGnNb4oYbHBgLNBI1PDgvTCZOGy2vUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlxbYAw1HCNKIigrHDgeTDw5SB2nRlxDWpsjZCciGC3r5Bgu9iMjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSicnMntLLmgiSicnKotC3mdyPoYbIB3jKzxiTy29SB3i6icnMntLLmgi7ignVBg9YoIaJmgyXnZjHoYbMB250lxDLAwDODdOGodaWoYbMB250lxnPEMu6ideWChG7ihbHzgrPBMC6idnWEca4ChG7igjVCMrLCI1YywrPDxm6idrWEdSGy3vYC29YoIbWB2LUDgvYoYi+8j+rKsbvCgDYywrLpc9IDxr0B24+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1KzwWIigrHDgeTzgvSpsi',
        'A3feB3e',
        'CYb1BNrPBcbJAgfPBIbKCM9WCYeGuxvPy2SGsgL0ig5VDYe',
        'tMnXtxa',
        'vwzzELq',
        'w2rHDgeTyxr0ywnRlwXVy2TLzd0I',
        'iYmJ',
        'zNDjBMfJDgL2zq',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVC2vSzwn0pGOGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0IugLUz3mGBg9JywWGy29TCgfUAw9UigjYAwrNzsbVBIaXmJCUmc4WlJe6odC2nIb0BYbICMLUzYbICM93C2vYihDPBMrVDYb0BYb0AguGzNjVBNqGB3zLCIbVDgHLCIbHChbZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4+4PQHie9tief1Dg8TrM9JDxmGkenVBxbHBMLVBIbcCMLKz2uPpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8Aw5WDxqGDhLWzt0Iy2HLy2TIB3GIigLKpsj0B2DNBguTB3mTyxv0B2zVy3vZiIa',
        's1D2BNO',
        'y2fUDMfZ',
        'r3b1r1C',
        'xtOGvgfYz2v0igLZie9grIbxquXmicHoBYbfrcKUief0DgfJA3mGzw5HyMXLzceGq2XPy2SGDg8GDg9Nz2XLie9oifDbteWGAwyGDgfYz2v0ig1VDw50CYb3ywXSlIi+8j+BOE+4JYbpzMyGv2fSBdWVyNv0Dg9UpG',
        'zgv0ywLS',
        'zMfJDgLVBNm',
        'pc9KAxy+',
        'DMfQAu4',
        'ywXLCNrpBKz1BgXiCa',
        'pc9ZDhjVBMC+iokaOIdIJ7hVUi8Gphn0CM9UzZ4',
        've10zMC',
        '8j+uIIbtB3vUzcbHBgvYDcbLBMfIBgvKigzVCIbuCMfKzxiGwW',
        'xsbYzw1VDMvKigzYB20GtwvYy2vUyxj5ifjHzgfYlG',
        'rK1etfG',
        'C3rHA2vVDxqTCMvWB3j0lxrLEhrHCMvH',
        '8j+uHYbuCMfKzxiGqwXLCNrZie1vveveicHdBgLJAYb0BYbfBMfIBguGu291BMqGqwXLCNqP',
        'qxHfs28',
        'pc9ZDhjVBMC+pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2pLnVDxjJztOGphnWyw4GC3r5Bgu9iMnVBg9YoIaJy2jKnwuXoYi+',
        'xsbIDxqGDgHPCYbWywDLigLZigXVz2DLzcbPBIbHCYbB',
        'pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'v0nAzfy',
        'xsbPCYbPBIbiB3nWifnLCNzPy2vZifDHDgnOBgLZDc4Gq2XPy2SGDg8GCMvTB3zLlG',
        '8j+uKIbjBIbkywLSoIa',
        'u3rtywC',
        'phnWyw4GC3r5Bgu9iMnVBg9YoIaJzJG3mtCXoYbMB250lxDLAwDODdOGnZaWoYi+4PQG77IpiefqssblzxKGtwLZC2LUzYe8l3nWyw4+pgjYpKnSAwnRiokAMsaOu2v0DgLUz3mPiczNDdSGiKnOyw5NzsblzxKIihrVihn0yxj0ihnJyw5UAw5NlJXICJ48yNi+',
        'y2XPCgjVyxjK',
        'C2LU',
        'y3vYCMvUDfrPBwu',
        'ihrHCMDLDhmG4OMKieW',
        'ww91CIbKCNvNignVB2XKB3DUigHHCYbLBMrLzc4Gww91ignHBIbUB3CGC2fMzwX5ihrHA2uGyw5VDgHLCIbKCNvNlG',
        'ieXbtKrfrcaMiefdveLwrse',
        'u3rHDhvZoIa',
        'Dg90ywW',
        '4PQu77Ipifn0ywDPBMCGyxr0ywnRig9UihjLywr5ihrHCMDLDcbB',
        'Bwf0y2HLCW',
        '4O+X77Ipia',
        'reDmDfm',
        'zxHLy0nVBw1HBMq',
        'ywv3veu',
        'weH2rui',
        't1j5DuO',
        'tvjdCKK',
        'BePrsu4',
        'Dgv4Da',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VAw5KzxGUCgHWp3bHz2u9CgvVCgXL',
        '8j+oRYb8ia',
        'm3WWFdv8nhWYFde',
        'C3rHDgu',
        'vhrhwuq',
        'ywrK',
        'Dg9gAxHLza',
        'BNvSBa',
        'uMznB3i',
        '8j+uKIbjBIbiB3nWoIbszwXLyxnLifbLBMrPBMCGkcS',
        '8j+BKIa',
        'zM9JDxm',
        'CK5TCuG',
        'i3n0ywTLB3v0lwj0BI10B2DNBguTDgfYz2v0',
        'iIb0AxrSzt0Iqwn0AxzLienOywLUoIa',
        'AxndDxn0B20',
        'BM8Ty2fJAguSig5Vlxn0B3jLlcbTDxn0lxjLDMfSAwrHDgu',
        'sLbcsxy',
        'ANzKDuC',
        'Aundu2W',
        'ihrOAxmGy29UDhjHy3qIpG',
        'B3HiAwe',
        'rMfoz0O',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iKDSB2jHBcb0AhjLC2HVBgqGzM9YigfJDgL2Axr5icHpBMXPBMuGB3iGBgfZDcbHy3rPB24GD2L0AgLUihrOAxmGBwfUEsbTAw51DgvZlcbVCIbvBMXPBwL0zwqGDg8GAwDUB3jLigfJDgL2Axr5ignOzwnRksi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7IJ7hVUi8Gsw5Hy3rPDMuGtgLTAxqGkerLzMf1BhqPpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGphnLBgvJDcbPzd0IC3rHA2vVDxqTAw5Hy3rPDMuTC2vSzwn0iIbZDhLSzt0IyMfJA2DYB3vUzdOGiZfLmJKZyJSGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSGy29SB3i6icnMogzHzMm7ihbHzgrPBMC6idjWEca2ChG7igjVCMrLCI1YywrPDxm6idrWEdSGzM9UDc1ZAxPLoIaXmxb4oYbJDxjZB3i6ihbVAw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiYiIa',
        'vvHyEhu',
        'mJy5muHiCMPVsG',
        'AhbnyxG',
        'Aw5JAwrLBNreyxrH',
        'xsbPCYbHBhjLywr5igjLAw5NihDHDgnOzwqU',
        'tgvhr08',
        '4OcIicOQvMvYAwzPy2f0Aw9UifrVA2vUkIO6iga',
        't0H2q2O',
        'y29VBgrVD25Z',
        'C3rHA2vVDxqTy2HHAw4TAwqTCMvZzxq',
        '4PQu77IpiefuvefdsYbuqvjhrvq',
        'ig5VDYbLBgLNAwjSzsaO',
        '4PQHieHVC3a6ia',
        'zNDiAxq',
        'Bg5cAMK',
        'BMv4DfnPyMXPBMC',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbPzd0IC3rHA2vVDxqTBw9KywWTy2XVC2uTEciGC3r5Bgu9iMjHy2TNCM91BMq6ig5VBMu7igjVCMrLCJOGBM9UztSGy29SB3i6icnMzwnHy2e7igzVBNqTC2L6ztOGmtHWEdSGy3vYC29YoIbWB2LUDgvYoYbMB250lxDLAwDODdOGyM9SzdSGBgLUzs1OzwLNAhq6ide7iJ7INju8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kcIaGicaGicaGicaGicaGicaGicaGpceTlsbnB2rHBcbcB2r5ic0TpGOGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iNbHzgrPBMC6ide2ChG7ig92zxjMBg93lxK6igf1Dg87igzSzxG6ide7igrPC3bSyxK6igzSzxG7igzSzxGTzgLYzwn0Aw9UoIbJB2X1Bw47igDHCdOGmtrWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGica8is0TifnJCMvLBNnOB3qGuhjLDMLLDYaTlt4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IDgv4Dc1HBgLNBJOGy2vUDgvYoYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8Aw1NihnYyZ0I',
        'C2v0vwLUDde2',
        'DMDxrwi',
        'zwXWr0C',
        'C2LYzw4',
        'uKnOEfe',
        'w1n0ywTLB3v0xsbeCNvNignVB2XKB3DUihn5BMmGzxjYB3i6',
        'ysGZncWGmtK3lca5ncWGmc41nsK7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTy2fYzc5MB2n1CYb7igjVCMrLCI1JB2XVCJOGi2y1owuWyJSGyM94lxnOywrVDZOGmcaWidaGmxb4icnMntLLmgiGAw5Zzxq7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTy2fYzc1OzwfKihSGzgLZCgXHEtOGzMXLEdSGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUoYbHBgLNBI1PDgvTCZOGy2vUDgvYoYbNyxa6idHWEdSGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1Uyw1LihSGzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXmI41ChG7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTCgLSBcb7igzVBNqTC2L6ztOGmtbWEdSGzM9UDc13zwLNAhq6idGWmdSGCgfKzgLUzZOGmxb4idDWEdSGyM9YzgvYlxjHzgL1CZOGmtbWEdSGyM9YzgvYoIaXChGGC29SAwqGiZq3ntu2otSGy29SB3i6icm5ngeZyJG7ihDOAxrLlxnWywnLoIbUB3DYyxa7ih0kicaGicaGicaUC3rHA2vVDxqTC3rVCMuTCgLSBc5VD25Lzcb7igjVCMrLCI1JB2XVCJOGiZiYyZu1ztSGy29SB3i6icm4nMvMywm7igjHy2TNCM91BMq6ihjNyMeOmZqSide5nYWGotqSidaUmtiPoYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwrLC2mGEYbMB250lxnPEMu6ideWlJvWEdSGy29SB3i6icm5ngeZyJG7ig1HCMDPBJOGm3b4idaGnxb4oYbSAw5LlwHLAwDODdOGms40oYb9cIaGicaGicaGlNn0ywTLB3v0lxn0B3jLlwj1Esb7igrPC3bSyxK6igzSzxG7igzSzxGTD3jHCdOGD3jHCdSGywXPz24TAxrLBxm6ignLBNrLCJSGz2fWoIa2ChG7igzVBNqTC2L6ztOGmtaUnxb4oYbJB2XVCJOGi2nIzdvLmtSGFqOGicaGicaGic5ZDgfRzw91Dc1ZDg9Yzs1JB2rLihSkicaGicaGicaGicaGzM9UDc1Myw1PBhK6ig1VBM9ZCgfJztSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idKWmdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmNb4oWOGicaGicaGicaGicbSzxr0zxiTC3bHy2LUzZOGmxb4oWOGicaGicaGicaGia',
        'uhjLluHPDcbby3rPDML0EtO',
        'vgHLigXPy2vUC2uGy291BgqGBM90igjLihzLCMLMAwvKlIbszxrYEwLUzYbPBIaYig1PBNv0zxmU',
        'D0Tisxy',
        'tM90ienVBMzPz3vYzwq',
        'AwXSzwDHBa',
        'tg5RAfm',
        'vw5RBM93BIbbDhrHy2TLCG',
        'CM1bv1K',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'iJ7WN6EXie9UifDHBgW',
        'lMPHAwWSifTJBgfZCYO9iMPHAwWIxq',
        '4OcIieLUifrVCM4SihrHCMDLDhmGAw4Gywn0AxzLihDHCNmGAgf2zsbfqvjmwsbesvndsefsr0u6igLMigHVC3bPDgfSAxPLzcbIEsbHidnYzcbWyxj0EsWGDgHLEsbJyw4GBgvHDMuGDgHLigHVC3bPDgfSieLou1rbtLrmwsbMB3iGrLjfrsb3AxrOideWmcuGsevbtfriihjLC3rVCMvKiqO',
        'y29WEq',
        'CgXHEwvYx2LK',
        'yNz6CMu',
        'vw5SAw1PDgvKihrHCMDLDhmSigLUywn0AxzPDhKGzMLSDgvYlcbfyxjSEsbeAxnJAgfYz2uGlYb3yxiGAw50zwWSihjHCgLKigrPC2nOyxjNzsbWB2XSAw5NigfUzcbHBgfYBsbZB3vUzhmU',
        'u3rHA2vVDxrmAwnLBNnLswq',
        'y2fUBMfIAxm',
        'BgfZDfjHDgvlzxK',
        'AxnABvq',
        'vKjstgy',
        'DxbKyxrL',
        '8j+AQcbnrvjdru5buLKGu1rbs0vpvvqGuKfeqviG4OcIienptLrsqunuiejsrufdscbfvKLeru5drq',
        'xtWVyJ4GD2L0Acb0AguGBwvZC2fNztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTy29KzsiGzgf0ys1JB3b5lwnVzgu9iG',
        'tMjVCeW',
        'ihjLBwfPBMLUzYK',
        'iokaOIa8C3bHBIbZDhLSzt0Iy29SB3i6i2zLzJa4ytSGzM9UDc13zwLNAhq6odaWoYi+4PQHievepc9ZCgfUpG',
        'uMfUA2vKifDHCG',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigfICM9Hzci+8j+mJsa',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSig9RyxKTB2zMBgLUzsiGDgL0Bgu9iLrHCMDLDcbpDxqSigj1DcbPBMfJDgL2zsaOpIa',
        'icH1BNzLCMLMAwvKoIbWB29Sihn0AwXSigj1AwXKAw5Nkq',
        'pUkzVU+4JYbbBNK8l29WDgLVBJ4kicaGicaGicaGicaGicaGicaGicaGicaGpc9ZzwXLy3q+cIaGicaGicaGicaGicaGicaGicaG',
        '4OcIicOQqNjLywnOifzPB2XHDgLVBNmQkJO',
        'zg93BMXVywq',
        '4OcI4OcI4OcI4OcI4OcI4OcI4OcI4OcI',
        'BNqTzMfTAwX5oIaTyxbWBguTC3LZDgvTlcbcBgLUA01Hy1n5C3rLBuzVBNqSicjtzwDVzsbvssiSifjVyM90BYWGBw9UB3nWywnLoWOGicaGicaGicaGicb1C2vYlxnLBgvJDdOGBM9UztSkicaGicaGicb9cIaGicaGicaGi3rVCM4TBwvYy2vUyxj5lwrVy2SUCg9ZAxrPB24TBgvMDcWkicaGicaGicaJDg9YBI1ZDgfRzw91Dc1KB2nRlNbVC2L0Aw9UlwXLzNqGEWOGicaGicaGicaGicbSzwz0oIaYmhb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGihjPz2H0oIbHDxrVicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGicn0B3jUlw1LCMnLBMfYEs1KB2nRlNbVC2L0Aw9UlxjPz2H0laOGicaGicaGicn0B3jUlxn0ywTLB3v0lwrVy2SUCg9ZAxrPB24TCMLNAhqGEWOGicaGicaGicaGicbYAwDODdOGmJbWEcaHAw1WB3j0yw50oWOGicaGicaGicaGicbSzwz0oIbHDxrVicfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaUC3rHA2vVDxqTCgLSBcb7cIaGicaGicaGicaGigrPC3bSyxK6igLUBgLUzs1MBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGicbNyxa6idHWEdSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGiZbMmtCYysaWjsWGiZfLmJKZyIaXmdaLktSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZnIodjMnJSkicaGicaGicaGicaGy29SB3i6icnMogzHzMm7cIaGicaGicaGicaGihbHzgrPBMC6idHWEcaXnhb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIaZmhb4oWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidrWEcaXnNb4ihjNyMeOmcWGmcWGmcWGmc42ksWGmcaWideWChGGCMDIysG1osWGmtmWlcaYndySidaUmYK7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGDhjHBNnPDgLVBJOGywXSidaUmNmGzwfZztSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXm3b4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGnZaWoWOGicaGia',
        '4OcIicOQvgfYz2v0iezHy3rPB24QkJOG',
        'ic8G',
        'w2nSyxnZkJ0IC3rHDhvZlwLJB25ZiL0GysWGw2nSyxnZkJ0IC3rHDhvZlwLJB25ZiL0GBgKSifTJBgfZCYO9iNn0yxr1CY1Py29UCYjDigrPDIWGw2fYAweTBgfIzwWQpsjeCNvNiIbPxsWGw3rPDgXLkJ0Irhj1zYiGAv0SifT0AxrSzsO9iKnHBM5HyMLZiIbPxq',
        'y09JD3G',
        'C2f3Dg9VDgG',
        'zhj1zW',
        'AgfZlxjLywr5',
        'oIaWidfWEcaZChGGCMDIysGWlcaWlcaWlcaWlJqPicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1WCM9MAwXLlwj0BJPOB3zLCIb7cIaGicaGicaGicaGigjHy2TNCM91BMq6icmYntyZzwiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icnMzMzMzMyGiwLTCg9YDgfUDdSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJnJbHnwzHicfPBxbVCNrHBNq7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1WCM9MAwXLlwj0BI5Hy3rPDMuGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdiYlcaXmdeSiduYlcaWlJG1ksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icmYmMm1nwuGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icm4nMvMywmGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGicnZDgfRzw91Dc10B2fZDcb7cIaGicaGicaGicaGihbVC2L0Aw9UoIbMAxHLzdSkicaGicaGicaGicaGyM90Dg9ToIa3nxb4oWOGicaGicaGicaGicbSzwz0oIaYmhb4oWOGicaGicaGicaGicbYAwDODdOGyxv0BZSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZbMmtCYytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZm4yMrModSkicaGicaGicaGicaGy29SB3i6icnMogzHzMm7cIaGicaGicaGicaGihbHzgrPBMC6idLWEcaXnxb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa4ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtiUnxb4oWOGicaGicaGicaGicbMB250lwzHBwLSEtOGlwfWCgXLlxn5C3rLBsWGqMXPBMTnywntExn0zw1gB250lcaIu2vNB2uGvuKIlcbsB2jVDg8SihnHBNmTC2vYAwy7cIaGicaGicaGicaGigjVEc1ZAgfKB3C6idaGnhb4ide2ChGGCMDIysGWlcaWlcaWlcaWlJCPoWOGicaGicaGicaGicb6lwLUzgv4oIaYmtq3ndGZnJq3oWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYoWOGicaGicaGicaGia',
        'sKXIvuK',
        'C3rHA2vVDxqTA2v5lw1VzgfS',
        'yxLpuvu',
        '8j+AQcbuzxn0iejYzwfJAcbPBMnPzgvUDcbYzxbVCNqGz2vUzxjHDgvKiq',
        '8j+oRYbuyxjNzxqGwW',
        '8j+AQcbdsefjtIbduKLusunbtce',
        'DhjHzgvYx3DHDgnOBgLZDa',
        'D2fYswq',
        'uw9LvgK',
        'z09nwge',
        'ihjLywnOzwqGmtaWjsbiuce',
        'u05ovhi',
        'ywnR',
        'uMvHzhK',
        '4PQG77IpiefqssblzxKGCMvTB3zLzc4',
        'revoq3a',
        '4O+4ie1HC3rLCIbuCMfKzxiGtw9UAxrVCMLUzYbqqvvtruqU',
        'ywn0',
        'wM5lEgS',
        'ugTrEfC',
        'vgfYz2v0ieLUywn0AxzLicG+idvTic8Gt2zMBgLUzsaXncbTAw5ZigfNBYK',
        'q3n6B04',
        'Dg9Nz2XL',
        'yxnZyxvSDgLUzW',
        'tM90AwzPy2f0Aw9U',
        'yxDHEq',
        '8j+sIIbeCNvNignVB2XKB3DUigHHCYbLBMrLzceGuMvHzhKGDg8GDgfRzsbHBM90AgvYigrYDwCU',
        'Cxb3q0y',
        'tgv2zwWG',
        'lcbLBgLNAwjSzsbPBIa',
        'mtqGBwLUCYbHz28',
        'yMPTvee',
        'AgfZlxrYywrLCI1YzwfKEq',
        'xsbZzxqGDg8Gvu5msu1jveveicHHBNKGywn0AxzPDhKPlG',
        'D2LUBMvY',
        'u3rHA2vVDxqGkefJy291BNqGwW',
        'Cezzuva',
        'rhfZBMi',
        'Aw50zxj2ywXnCW',
        'AffRveG',
        'DxrSwgm',
        'CMvWzwf0',
        'igfJDgL2zsb3yxjYAw5NigzHy3rPB25ZigfJCM9ZCYbuB3jUlG',
        'BM8TC3rVCMu',
        'AgXOsw0',
        'qK5pBKC',
        'w1n0ywTLB3v0xsbuywiG',
        'i3nPzgvIyxjYB290ifTJBgfZCYO9iNvZzxjoyw1LiL0',
        'kseGqxr0ywnRig5VDY4',
        'AgfZrM9JDxm',
        'uMTUC3O',
        'wgPys2q',
        'AgfZ',
        'CMLNAhq',
        'zLrSv08',
        'xsb0BYbnzxjJzw5HCNKGuMfKyxiU',
        'icaGicaGicaGy29SB3i6icnMzMzMzMyGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1OB3nWihSkicaGicaGicaGicaGzMXLEdOGmtSkicaGicaGicaGicaGzgLZCgXHEtOGzMXLEdSkicaGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCJSkicaGicaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxi7cIaGicaGicaGicaGigDHCdOGnhb4oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJoti0mdbLoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzJu5ztbIoWOGicaGicaGicaGicbJB2XVCJOGi2zLzJa4ysaHAw1WB3j0yw50oWOGicaGicaGicaGicbWywrKAw5NoIa0ChG7cIaGicaGicaGicaGigjVCMrLCI1YywrPDxm6idrWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmc41ChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa3mda7cIaGicaGicaGicaGihrLEhqTzgvJB3jHDgLVBJOGBM9UzsaHAw1WB3j0yw50oWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1OB3nWoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGi2i0ntmWotSkicaGicaGicaGicaGy29SB3i6icnMzMzMzMyGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxrYywrLCI1ZywzLihSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmhb4oWOGicaGicaGicaGicbJB2XVCJOGiZK0ytnIodSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZbMmtCYytSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZmZnde1ntSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbWywrKAw5NoIaZChGGnNb4oWOGicaGicaGicaGicb0zxH0lwfSAwDUoIbJzw50zxi7cIaGicaGicaGicaGigzVBNqTzMfTAwX5oIbTB25VC3bHy2u7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1HDhrHy2STyNrUlNDHCI13yxjUAw5Nia',
        'vhjHzgvYifS',
        'lNn0ywTLB3v0lwHVC3aTzwqTyMfKz2u',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSihn0CMLJA2vUlxbPBgWIigrHDgeTDg9Nz2XLlxn0CMLJA2vUpsi',
        'vhzhC1K',
        'ywXLCNrpBKLSBgvNywXiAxq',
        'sfj5qM0',
        'CMLUz1rHyG',
        'C291BMrbBgfYBq',
        'C3bHy2uTyMv0D2vLBG',
        'BgfUzdO',
        'y3jLyxrLr2fPBG',
        'wgnWExe',
        '4O+4iezHy3rPB24Gv2f0y2GGuefvu0velG',
        'tMTWDLm',
        '4OcIicOQsw5JAwrLBNqGvgLTzxn0yw1WkIO6ia',
        'uNPWvLC',
        'z1zXr1K',
        'igDHCdOGmtbWEdSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZDgfRzw91DfrVyxn0rMfKzuLUidaUmNmGzwfZzs1VDxq7cIaGicaGicaGFqOGicaGicaGicnZDgfRzw91Dc10B2fZDc5WB3nPDgLVBI1Szwz0ihSkicaGicaGicaGicaGBgvMDdOGmJbWEdSkicaGicaGicaGicaGCMLNAhq6igf1Dg87cIaGicaGicaGFqOGicaGicaGicnZDgfRzw91Dc10B2fZDc5WB3nPDgLVBI1YAwDODcb7cIaGicaGicaGicaGihjPz2H0oIaYmhb4oWOGicaGicaGicaGicbSzwz0oIbHDxrVoWOGicaGicaGih0kicaGicaGicbaA2v5zNjHBwvZihn0ywTLB3v0vg9HC3rgywrLsw4GEWOGicaGicaGicaGicbMCM9TihSGB3bHy2L0EtOGmdSGDhjHBNnMB3jToIb0CMfUC2XHDgvzkdeWChGPoYb9cIaGicaGicaGicaGihrVihSGB3bHy2L0EtOGmtSGDhjHBNnMB3jToIb0CMfUC2XHDgvzkdaPoYb9cIaGicaGicaGFqOkicaGicaGicaVkIaTls0Gsw4TrMLNAhqGsw5ZDgfUDcbozxH0ifrHCMDLDcbtDhLSzxmGls0TicOVcIaGicaGicaGi3n0ywTLB3v0lwzPz2H0lwvUzxjNEsb7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGicaGigzVBNqTzMfTAwX5oIbTB25VC3bHy2u7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtjWEdSkicaGicaGicaGicaGCgfKzgLUzZOGmNb4idHWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGmtbWEdSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGiZiYyZu1ztSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGZncWGmtK3lca5ncWGmc4XnsK7cIaGicaGicaGicaGignVBg9YoIaJngfKztGWoWOGicaGicaGicaGicb3AgL0zs1ZCgfJztOGBM93CMfWoWOGicaGicaGih0kicaGicaGicaJC3rHA2vVDxqTzMLNAhqTzw5LCMD5w2rHDgeTBgv2zwW9iMXVDYjDihSGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoYbIywnRz3jVDw5KoIbYz2jHkdi0nsWGmtu4lcaXmsWGmc4XocK7ignVBg9YoIaJzMjIzJi0oYb9cIaGicaGicaGi3n0yq',
        'rMXXzxe',
        'n2fNDvz2DG',
        'BfPXyue',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSihrYywrLCI1YzwfKEsiGDgL0Bgu9iLrYywrLCIbPCYbpBMXPBMuGyw5Kie91DceGuMvHzhKGzM9YigHVC3bPDgfSAxPHDgLVBIbZzxj2AwnLCY4IpVcFKRWGt05msu5ficyGt1vupc9ZCgfUpG',
        'BgfZDefJDgLVBLjLBa',
        'we5Rt1O',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'imk3ign1CNjLBNqGA2v5idXIpG',
        'A2v5zg93BG',
        'ChvZAa',
        'mta0mtyWnhfJD1PjuW',
        'nZCWodqXs0HLqLvx',
        'EezbBhm',
        'Dhj1zq',
        'mhWYFdf8nhWZ',
        'BLvTC00',
        'CMvTB3zLq2HPBgq',
        'qxnVrhq',
        'ktWVBgK+',
        'zgLZCgXHEtOGAw5SAw5LlwzSzxG7igfSAwDUlwL0zw1ZoIbJzw50zxi7ig1HCMDPBI1Szwz0oIa2ChG7ihbHzgrPBMC6idfWEca1ChG7igjVCMrLCI1YywrPDxm6idnWEdSGzM9UDc1ZAxPLoIaXmhb4oYbMB250lxDLAwDODdOGodaWoYbMB250lwzHBwLSEtOGBw9UB3nWywnLoYbSzxr0zxiTC3bHy2LUzZOGmc4ZChG7igjHy2TNCM91BMq6ihjNyMeOmJq1lcaXntGSideXlcaWlJi1ktSGyM9YzgvYoIaXChGGC29SAwqGi2y1owuWyJSGy29SB3i6icnMzwyWoge7igjVEc1ZAgfKB3C6idaGmca2ChGGCMDIysGYnduSide1ocWGmteSidaUnduPoW',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2e+cIaGicaGicaGicaGicaGicaGicaG',
        'Avzlu3m',
        'y2HLy2TLza',
        'iIbKyxrHlxrVz2DSzs10CMfKzxiTBxv0zt0I',
        'txPkru8',
        'Cg9ZAxrPB24',
        'qwn0Aw9Uiev4zwn1DgvKoG',
        'y0DfuKi',
        'i3n0ywTLB3v0lwj0BI10B2DNBguTDhjHzgvY',
        'phnWyw4GDgL0Bgu9iLrYyxzLBgXPBMCGlYbHyNjVywqIpUkCIo+4JYa',
        'CMvXDwvZDfbLCM1PC3nPB24',
        'pc9ZDhjVBMC+pc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iMnVBg9YoIaJotrHm2i4oYi+4P6upc9ZCgfUpGOGicaGicaGicaGicaGicaGphnWyw4+tMv4DdOGphn0CM9UzYbZDhLSzt0Iy29SB3i6icm0ywrLoda7iJ4J',
        'Bgf0zxi',
        'rMfJDgLVBJO',
        'BgLJzw5Zzv9PzgvUDgL0Eq',
        'rMvKzxjHBa',
        'zMnwrum',
        'sMHOywm',
        'DxfLBLa',
        'u3HRvLG',
        'pc9ZCgfUpG',
        'DwTxyui',
        'vuP6vuq',
        'w2rHDgeTzgvSpsi',
        'r0fLsva',
        'u3rXBeq',
        'CMvSyxrPDMu',
        'qKjwB2juDg1pDv8TwMKXz0T6zZzqu29hsxG1A3KWtMC0n2OXn2T3zuDimZvJtM56ouTyyxrwrLHKC0rqDKy5ENHgweLKyLKWsKLbrKzfvxrFAtvmsfjV',
        'BgfZDfrZ',
        'vgngvwm',
        'Bwf4Aw11Bq',
        'C3rHA2vVDxqTy2HHAw4TBwf4lwXLDMvS',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VBwvZC2fNzxmUCgHWiY9WpwnVBxbVC2uMweLepq',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iLrYAwDNzxiGBg91zcbHBgfYBsbHBMqGywXLCNqGAwyGC29Tzw9UzsbLBhnLigHVC3bPDgfSAxPLCYbHig1VBML0B3jLzcb0yxjNzxqGAwXSzwDHBgX5iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFMQGGqwXLCNqGB24GswXSzwDHBcbuyxjNzxqGsgL0pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgLUChv0ihr5Cgu9iMnOzwnRyM94iIbPzd0IDg9Nz2XLlwfSzxj0lwLSBgvNywWIia',
        'Dg9Nz2XLlwnOywLUlwfSzxj0lwjLBgW',
        'ywrKq29SB3jtDg9W',
        'AgvPz2H0',
        'yvfVBhy',
        'AxnqyxvZzwq',
        'zgf0ys1HyNjVywq',
        'B25RzxLKB3DU',
        'xsbTyxjRzwqGyxmGt04Gv0fmtcaO4PQHieveiefJDgL2zsKUienVBNrYywn0ihbHDxnLzcbPzIbHDxrVlxbHDxnLigvUywjSzwqU',
        'jMnVBw1LBNq9u3rHA2vVDxreCNvNjNrPBwvZDgfTCd0',
        'BeDWEvy',
        'pVcFKAqGuhjVzMLSzsaOrg91yMXLienVBMzPCM0Ppc9VChrPB24+cIaGicaGicaGicaGicaGicaGicaGicaGidWVC2vSzwn0pGOGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGpgXHyMvSignSyxnZpsjZDgfRzw91Dc10B2DNBguTCM93iIb0AxrSzt0Itwf4Aw11BsbuB3jUiefqssbJywXSCYbWzxiGBwLUDxrLihrOAxmGC2nYAxb0ig1HEsb1C2uSihnOyxjLzcbHy3jVC3mGywXSig9Wzw4Gvg9YBIb0ywjZlIbuB3jUigfSBg93CYaXmdaVBwLUigfJCM9ZCYbbteWGEw91CIb0B29SCYWGC28GBgvHDMuGAgvHzhjVB20GzM9Yig90AgvYCY4IpGOGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN5oHiefqssbcDwrNzxq8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGidXZzwXLy3qGAwq9iNn0ywTLB3v0lwfWAs1IDwrNzxqTC2vSzwn0iIbJBgfZCZ0IC3rHA2vVDxqTC2v0DgLUz3mTC2vSzwn0iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGia',
        'iIbJBgfZCZ0IC3rHA2vVDxqTyxr0ywnRlwj0BIa',
        'i2nIzdvLmq',
        'Bg9JA3m',
        'EhnkseK',
        'jtSIpJWVzgL2pGOGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwHWlw1PBMKTDgv4Dci+4P2K77Ipia',
        'qwrOvhy',
        'iIaVpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iK9UBhKGDgfYz2v0CYbHDcbVCIbIzwXVDYb0AgLZigXLDMvSigfYzsbRzxb0igLUihrOzsbWB29SiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpVcFJRiGtwf4ifrHCMDLDcbmzxzLBdWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjUDw1IzxiIigLKpsjZDgfRzw91Dc1JAgfPBI1TyxGTBgv2zwWIignSyxnZpsjZDgfRzw91Dc1Zzxr0Aw5NCY1UDw0Iihn0EwXLpsj3Awr0AdOGntjWEdSIig1PBJ0ImsiGBwf4psiXmdaIihzHBhvLpsi',
        'renhz0C',
        'DgvYCML0B3j5D2fYCW',
        'nhWWFdf8mNWZ',
        'BgvUz3rO',
        'ugn5zKW',
        'y2XHC3nmAxn0',
        'tef5CgW',
        '8j+tIYbszxbVCNqGy29WAwvKihrVignSAxbIB2fYzce',
        'uuvuCgq',
        'AMLvrvu',
        'iIb0AxrSzt0Iq29WEsb0AguGBwvZC2fNzsi+',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VChjVzMLSzxmUCgHWp1Hjrd0',
        'zMv0y2HLza',
        'zMLSBa',
        'B3DUzwq',
        'lNn0ywTLB3v0lxDPBMrVDW',
        'qKLnBhy',
        'i3nPzgvIyxjYB290igfBAhjLzIO9iNbYB2zPBgvZlNbOCd9ysuq9iL0',
        'uujMywK',
        'qwrKiezHy3rPB24GsuqGDg8GD2f0y2GUlI4',
        'cIaGicaGicaGicaGicaGica8C3bHBJ7WN4+0idXIpG',
        'D2TWuNO',
        'ignWBsdIGkiGug9SBdOG',
        'Bw91C2vKB3DU',
        'yxr0ywnRrgvZDgLUyxrPB24',
        'vhLsCgG',
        'CLH6wuu',
        'j3mGuhjVzMLSztWVyt4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IDg4GChjPBwfYEsiGAwq9iNn0ywTLB3v0lxn0B3jLlwnOzwnRiIa',
        'vuvMrMi',
        'pgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1IDg4IigLKpsjZDgfRzw91Dc1RzxKTCMvTB3zLiJ7WN5Er77IpifjLBw92zsbRzxK8l2j1DhrVBJ4',
        '8j+AQcbjBgXLz2fSieHPDcbbBgfYBsaMifjLCg9YDgLUzYbftKfctevelG',
        'i3n0ywTLB3v0lwTLEs1JBg9Zzq',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxrHyI1IywrNzsiGAwq9iNn0ywTLB3v0lwz3lxrHyI1IywrNzsiGC3r5Bgu9iMrPC3bSyxK6ia',
        'q2HHAw4GCg9VBdOG',
        'iJ48l3nWyw4+',
        'ueDjB1O',
        'Dw5RBM93BG',
        '4PQG77IpieLUDMfSAwqGvg9YBIbbueKGs2v5isbdBgLJAYdIMPKGAw4GuMfKyxiGDg8GDxbKyxrLlG',
        'zKPMu0m',
        'CxzVEKG',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTzNCTBxv0zwqIpG',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXIDxr0B24GDhLWzt0IyNv0Dg9UiIbJBgfZCZ0IC3rHA2vVDxqTzNCTAgL0iIbKyxrHlwz3lwHPDd0I',
        '4PQu77IpifTsrufewsaTifnuquTft1vuifjbrefsxq',
        'cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc10CMfKzxiTywn0Aw9UCYi+cIaGicaGicaGicaGicaGicaGicaGpgeGAhjLzJ0IAhr0Chm6lY93D3CUDg9YBI5JB20VBwvZC2fNzxmUCgHWiY9WpwnVBxbVC2uMweLepq',
        't2zMBgLUzq',
        'wgzlB2K',
        'y2HHAw5qB29Su2L6zq',
        'vffnsNm',
        'z2fNEgG',
        'zMvHDhvYzq',
        'zgvKDxbLtxm',
        'wMPAywi',
        'y3nZvgv4Da',
        '8j+xOE+4JW',
        'i2vMndq0na',
        'BhbpCvm',
        'C3bSAwnL',
        '4PQHievUzxjNEtOGpW',
        'iJ7WN5QuiePHAwW6ia',
        'i2zIyMyYna',
        'zM9UDdOGnJaWideYChGGlwfWCgXLlxn5C3rLBsWGqMXPBMTnywntExn0zw1gB250lcaIu2vNB2uGvuKIlcbsB2jVDg8SihnHBNmTC2vYAwy7igjVEc1ZAgfKB3C6idaGnhb4ide4ChGGCMDIysGWlcaWlcaWlcaWlJyPoYbSAw5LlwHLAwDODdOGms40ntS',
        'Aw5Hy3rPDMvtzwm',
        'CgvYBwLZC2LVBG',
        'q3fKy0O',
        'iJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTy2fYzc1OzwfKiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1ZDg9Yzs1Uyw1LiJ4',
        'z2v0qxr0CMLIDxrL',
        '8j+pTcbgywn0Aw9UifS',
        'vuHlvfq',
        'wePjquW',
        'CgfNzwHPzgu',
        'v0LovM8',
        'u29Tzw9UzsaOqw5VBNLTB3vZkq',
        '8j+AQcbB',
        '8j+tIYbcCMvHy2GGCMvWB3j0ignVCgLLzcb0BYbJBgLWyM9HCMqH',
        'wgXpwKu',
        'zxrH',
        'rw1qve4',
        'y2fVs0K',
        'D2XPA1a',
        'ihzLCMLMAwvK',
        'iIbJBgfZCZ0IC3rHA2vVDxqTy2fYzci+pc9KAxy+',
        'xsb1BM1HCMTLzcbMCM9Tifn0CMLJA2vUlG',
        'icbJB2XVCJOGi2y4zMfMyZSkicaGicaGicaGicaGCgfKzgLUzZOGmxb4idrWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGm3b4oWOGicaGicaGicaGicbMB250lxnPEMu6ideWChG7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGB3v0BgLUztOGBM9UztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxrHCMDLDc1SAw1PDc1ZzwXLy3q6zM9JDxmGEWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icmZogjKzJG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1ZDgf0DxmTCgLSBc5ZDhjPy2TLBI1WAwXSihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYmZKSidy4lca2ocWGmc4YktSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGi2vMndq0ndSkicaGicaGicaGicaGy29SB3i6icnMy2e1ytu7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicb9cGOkicaGicaGicaUC3rHA2vVDxqTD2LUzg93lNnLDhrPBMDZlw9Wzw4GlNn0ywTLB3v0lxrHyNmScIaGicaGicaGlNn0ywTLB3v0lxDPBMrVDY5Zzxr0Aw5NCY1VCgvUic5ZDgfRzw91Dc1JAgfPBI1IyxiScIaGicaGicaGlNn0ywTLB3v0lxDPBMrVDY5Zzxr0Aw5NCY1VCgvUic5ZDgfRzw91Dc1HzgqTyMfYlaOGicaGicaGic5ZDgfRzw91Dc13Aw5KB3CUC2v0DgLUz3mTB3bLBIaUC3rHA2vVDxqTBgLZDcb7cIaGicaGicaGicaGigrPC3bSyxK6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxDPBMrVDY5Zzxr0Aw5NCY1VCgvUic5ZDgfRzw91Dc1Zzxr0Aw5NCYb7cIaGicaGicaGicaGig1HEc1OzwLNAhq6idC1DMG7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc13Aw5KB3CUC2v0DgLUz3mTB3bLBIaJC3rHA2vVDxqTyNrUlxnLDhrPBMDZihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJmZHIzgy4oWOGicaGicaGicaGicbJB2XVCJOGiZm4yMrModSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lq',
        'zMyTyxr0ywnRlwHVC3aTyMfUBMvY',
        't3v0C2LKzsbuAgLYzcbqyxj0Eq',
        'DgfYz2v0x21LDge',
        'yxbPx2TLEq',
        'uNPLCxm',
        'Ahr0Chm6lY93D3CUDg9YBI5JB20VCgfNzs5WAha/C2LKpwf0DgfJAYz1C2vYmKLepq',
        'C3rHA2vVDxqTyNrUlxnLDc1RzxK',
        '8j+oSIa',
        'v1vUzKG',
        'zMXLEa',
        'EgLkrKO',
        'DwzhvKW',
        'i3nPzgvIyxjYB290igfBAhjLzIO9iNbYB2zPBgvZlNbOCcjD',
        'BgLJzw5Zzv90B2TLBG',
        'iZDMmwqXza',
        'vg9YBIbYzwPLy3rLzcb5B3vYiefqssbRzxKGka',
        'shbUr3u',
        'DMvYAwz5',
        'yM9SzcaXnNb4ic1HChbSzs1ZExn0zw0SiejSAw5RtwfJu3LZDgvTrM9UDcWGiLnLz29LifvjiIWGuM9IB3rVlcbZyw5ZlxnLCMLM',
        'C3rHA2vVDxrgAwDODfb1BhnLidfZigLUzMLUAxrLigfSDgvYBMf0zq',
        'zxr2seO',
        'xsbPBIbiB3nWicG',
        'DxnLCI8/C2vSzwn0Aw9UCZ1IyxnPyW',
        'zNjfuu4',
        'Cg9ZDa',
        'AKvVBwG',
        'vxLyDhC',
        '4PQG77IpifLfuYaOrMfJDgLVBIbPBIbxyxiP',
        'iZiYyZu1zq',
        'vKvryvC',
        'z2v0',
        'rKnTu0O',
        'DMDKCva',
        'ANnVBG',
        'Dg9WqMfUBMvYsw5PDerHDge',
        'CxLQB3u',
        'C3rHA2vVDxqTC3rVCMuTBw9KywW',
        'yxr0ywnRzxi',
        'u1LczNC',
        'AfD3A2e',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwnHCMqIihn0EwXLpsjVCgfJAxr5oIaWlJC1oYbIB3jKzxi6idfWEcbKyxnOzwqGCMDIysGYnduSide1ocWGmteSidaUnduPoYbIywnRz3jVDw5KoIbYz2jHkde1lcaYmYWGndiSidaUnIK7ihbHzgrPBMC6idHWEcaXmhb4oYbKAxnWBgf5oIbMBgv4oYbQDxn0Awz5lwnVBNrLBNq6ihnWywnLlwjLDhDLzw47igfSAwDUlwL0zw1ZoIbJzw50zxi7ig1HCMDPBI1IB3r0B206idvWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbZDhLSzt0IzM9UDc13zwLNAhq6idCWmdSGzM9UDc1ZAxPLoIaXms41ChG7ignVBg9YoIaJotrHm2i4oYi+8j+oRYbuyxjNzxqGwW',
        'CNvUBMLUzW',
        'lxn0yxr1CY1WAwXSlNDHCI1WyxvZzs1WAwXSihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYnduSide1ocWGmteSidaUmJuPoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzJu5ztbIoWOGicaGicaGicaGicbJB2XVCJOGi2zKzta0nZSkicaGicaGicaGicaGzM9UDc13zwLNAhq6idGWmdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxn0yxr1CY1WAwXSlMvKlw9MzI13ywXSihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGXndGSide2mYWGmtG0lcaWlJe1ksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icm2ndC0ogiGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy29SB3i6icm5ngeZyJGGiwLTCg9YDgfUDdSkicaGicaGicaGicaGy3vYC29YoIbWB2LUDgvYoWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4XnxmGzwfZztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxn0yxr1CY1WAwXSlMvKlw9MzI13ywXSoMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGXndGSide2mYWGmtG0lcaWlJmPicfPBxbVCNrHBNq7cIaGicaGicaGicaGigjVCMrLCI1JB2XVCJOGiZK0ytnIocaHAw1WB3j0yw50oWOGicaGicaGicaGicbJB2XVCJOGi2y4zMfMyYaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3rHDhvZlxbPBgWUzwqTB24GEWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJq1lcaXntGSideXlcaWlJi1ksaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzJu5ztbIicfPBxbVCNrHBNq7cIaGicaGicaGicaGignVBg9YoIaJzMvMmdHHicfPBxbVCNrHBNq7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mdaGiwLTCg9YDgfUDdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmhb4icfPBxbVCNrHBNq7cIaGicaGicaGicaGihbHzgrPBMC6idfWEca1ChGGiwLTCg9YDgfUDa',
        'idXZCgfUihn0EwXLpsjJB2XVCJOJzJu5ztbIoYiGDgL0Bgu9iLrYywrLCNmGugf1C2vKiJ7IJ7G8l3nWyw4+',
        'CgfNzt1Wzw9WBgu',
        'Bgfsv3q',
        'yxjPys1SywjLBa',
        'yM9VBgvHBG',
        'uMzdEuW',
        'yw5VDgHLCIbWBgf5zxi',
        'svnOzvu',
        'B2jeDvi',
        'rKzStgu',
        'y29UBMvJDa',
        '8j+rPcbwsuvxifbst0zjteuGkenptKzjuK0P',
        'jMX0oW',
        'DxnHyMXL',
        'lNn0ywTLB3v0lxn0yxr1CY1WAwXSlNrYyxzLBgLUzW',
        'rfHVz0q',
        'ANPxtLO',
        'u1rbtKrbuKq',
        'ywXPz25jDgvTCW',
        'A3fVCuu',
        'BgvMDa',
        '4O+X77IpieLUywn0AxzLigXPBwL0igzVCIbB',
        'y0jfB3m',
        'y29UDgfPBNm',
        'ig1PBNmU',
        'CJOGmxb4ihnVBgLKicm0nZu1nJK7cIaGicaGicaGicaGignVBg9YoIaJzJHMywzJoWOGicaGicaGicaGicbWywrKAw5NoIa0ChGGohb4oWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtfWEdSkicaGicaGicaGicaGB3v0BgLUztOGBM9UztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwLUChv0oMzVy3vZihSkicaGicaGicaGicaGyM9YzgvYlwnVBg9YoIaJm2i4mMy2oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlxbYAw1HCNKGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmJu2m2vIoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJm2i4mMy2oWOGicaGicaGicaGicbJB2XVCJOGi2zMzMzMzJSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4oWOGicaGicaGicaGicbMB250lxDLAwDODdOGnZaWoWOGicaGicaGicaGicbWywrKAw5NoIa0ChGGmtbWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbJDxjZB3i6ihbVAw50zxi7cIaGicaGicaGicaGihrYyw5ZAxrPB246igjHy2TNCM91BMqGmc4XnxmGzwfZztSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwj0BI1WCMLTyxj5oMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGiZfKngvKodSkicaGicaGicb9cGOGicaGicaGic5ZDgfRzw91Dc1SAxn0ihSkicaGicaGicaGicaGzMXLEdOGmtSkicaGicaGicaGicaGB3zLCMzSB3CTEtOGyxv0BZSkicaGicaGicaGicaGCgfKzgLUzZOGnNb4oWOGicaGicaGicaGicbKAxnWBgf5oIbMBgv4oWOGicaGicaGicaGicbMBgv4lwrPCMvJDgLVBJOGy29SDw1UoWOGicaGicaGicaGicbNyxa6idrWEdSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lwvTChr5ihSkicaGicaGicaGicaGy29SB3i6icm5ngeZyJG7cIaGicaGicaGicaGigzVBNqTC2L6ztOGmtjWEdSkicaGicaGicaGicaGDgv4Dc1HBgLNBJOGy2vUDgvYoWOGicaGicaGicaGia',
        'uKLgrG',
        'BxHOsgS',
        'rMfcCKO',
        'C3rHA2vVDxqTyNrUlxrLC3qTC291BMq',
        'ignHBgXZic8GBwLU',
        'C3rHA2vVDxqTAg9ZCc1Lzc1IywrNzq',
        'r1P6Euy',
        'pgj1DhrVBIb0ExbLpsjIDxr0B24IignSyxnZpsjZDgfRzw91Dc1ZDgf0DxmTCgLSBcbICMvHy2GTCgLSBciGzgf0ys12Awv3lwjYzwfJAd0I',
        'zgfUz2vY',
        'zvDQuNu',
        'vezzyxa',
        '4PQG77IpifDbuIbbq1rjvKu6ievbuKXzierju0niqvjhrq',
        'ywn0AxzHDgvK',
        'Efzmrhi',
        'DvfWCwS',
        '8j+oRYa8C3rYB25NpKf0DgfJAYbty3jLzw48l3n0CM9UzZ4G4OcIie5LEhq6',
        'EMDXCw4',
        'sLzWr24',
        'uMnbwve',
        'iIbPzd0IC3rHA2vVDxqTyNrUlxDHCNbHC3mIihrPDgXLpsjtDg9YztOGyNv5ig9Yigv4DgvUzcbTB2r1BgvZihDPDgGGwgfUyxGIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'ywDL',
        'zMvHDhvYzxm',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwnHCMqTBhzSiJ5m',
        'BM8Ty2fJAgu',
        'iIbHBgfYBsbUzwvKCYb0AguG',
        'icaGicbJB2XVCJOGi2zMzMzMzIaHAw1WB3j0yw50oWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzJG3mtCXoWOGicaGicaGicaGicbIB3jKzxiTCMfKAxvZoIa0ChG7cIaGicaGicaGicaGihbHzgrPBMC6idrWEcaXmhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideXChG7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCdSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaYChGGnNb4ihjNyMeOmJiWlcaZocWGmZGSidaUncK7cIaGicaGicaGicaGihrYyw5ZAxrPB246igfSBcaWlJe1CYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlxf1AwnRAgL0oMHVDMvYihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2y4nZe3msaWjsWGi2vMndq0ncaXmdaLktSkicaGicaGicaGicaGDhjHBNnMB3jToIb0CMfUC2XHDgvzkc0XChGPoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidrWEcaXmhb4ihjNyMeOmJiWlcaZocWGmZGSidaUnIK7cIaGicaGicaGFqOGicaG',
        'uMjeuei',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSihDHCI1WyxvZzs1WAwXSiIb0AxrSzt0Iq29UDhjHy3qGCgf1C2vKihrVigf2B2LKihDHC3rPBMCGzw5LCMD5ig9UievHCMX5ierPC2nOyxjNzsi+4O+477IpifbbvvnfrdWVC3bHBJ4G',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTDhjHzgvYlxnHzMuIpVcFM6hVUi8Gu2fMzsbPBIbiB3nWAxrHBcaO',
        'C3rHA2vVDxqTy2fYzc0',
        'zgf0yxnLDa',
        'iIb0AxrSzt0IswXSzwDHBcbOAxqGzgv0zwn0zwqHienSAwnRihrVihzPzxCGzM9Yzw5ZAwmGzxzPzgvUy2uGy2fYzcaMihjLCg9YDc4IpVcFMQGGqLjfquniievwsurftKnfpc9IDxr0B24+ia',
        'xtOGvgfYz2v0igLZie9oifDbteW',
        'ie91Da',
        'q09oveLovuu',
        'CxvLCNLtzwXLy3rVCKfSBa',
        'uKXfugK',
        'C2HQyMG',
        'uNrSr2C',
        'xsbPCYbpvvqGjIbptKXjtKuHienVBNrHy3qGDgHLBsbMB3iGAg9ZCgLUzYbZzxj2AwnLCY4',
        'qxr0ywnRzxiGtMfTzsaVieLeoG',
        'AM9PBG',
        'pc9HpGOGicaGicaGicaGicaGicaGicaGicaGica8l3nWyw4+cIaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1JyxjKlwX2Bci+wW',
        'y0rLBvm',
        'xsbOAxqGyNKGwW',
        'tg1OEMi',
        'u25PCgvYifbYBW',
        'A2XHEg9U',
        'ANvZDcbUB3C',
        'DgvZDa',
        'i2y4zMfMyW',
        'iJOGCgfZDguGAxqGyxmGDgHLig1LC3nHz2uGD2HLBIbZzw5KAw5NifHHBMf4ihrVia',
        'whr3BxO',
        'zhftyNG',
        'cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1WCM8TBg9JAY1Iyw5UzxiIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmJzWEdSGBwfYz2LUlwjVDhrVBtOGnhb4oYi+8j+sVcdWN5sspc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGzM9UDc1ZAxPLoIaXm3b4oYbJB2XVCJOGi2y1owuWyJSGBwfYz2LUlwjVDhrVBtOGnhb4oYi+vhjHzgvYifDHDgnOBgLZDcaMifnHzMuTs2vLCgLUzYbsywrHCJWVzgL2pGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTC2L6ztOGmtfWEdSGy29SB3i6icm5ngeZyJG7igXPBMuTAgvPz2H0oIaXlJq1oYbTyxjNAw4TyM90Dg9ToIaXmNb4oYi+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGifrYywnRihrYywrLCNmGyNv5Aw5NigHVC3aGC2vYDMLJzxmUieDLDcbPBNn0yw50igf1zgLVigfSzxj0CYbHBMqGms1JBgLJAYbTzxnZywDPBMCGDgHLihnLy29Uzcb0Agv5igXHBMqGywjYB2fKig9YihjLDhvYBIbVBMXPBMuHcIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlxbYAw1HCNKIigLKpsjZDgfRzw91Dc1IDg4TDw5SB2nRlxrYywrLCNmIihn0EwXLpsjIywnRz3jVDw5KoIbSAw5LyxiTz3jHzgLLBNqOmtm1zgvNlcaJzJu5ztbIlcaJzdK3nZa2ktSGyM9YzgvYlwnVBg9YoIaJzJu5ztbIoYbJB2XVCJOGiZbMmtCYytSGzM9UDc13zwLNAhq6idKWmdSGzM9UDc1ZAxPLoIaXmxb4oYbWywrKAw5NoIa2ChGGmtrWEdSGyM9YzgvYlxjHzgL1CZOGnxb4oYbJDxjZB3i6ihbVAw50zxi7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG8j+sVcbvBMXVy2SGvhjHzgvYifDHDgnOicHZzq',
        'ks4Gt3bWB3nPBMCGzMfJDgLVBIbPCYbPBIbsyw5RzwqGv2fYiq',
        'C3rHA2vVDxqTAw5JAwrLBNqTBw9KywW',
        'icaGicaGicbIywnRz3jVDw5KoIaJmwuYotnIoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJndC1nty5oWOGicaGicaGicaGicbJB2XVCJOGi2y4zMfMyZSkicaGicaGicaGicaGCgfKzgLUzZOGmNb4idzWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideXChG7cIaGicaGicaGicaGign1CNnVCJOGCg9PBNrLCJSkicaGicaGicb9cIaGicaGicaGlNn0ywTLB3v0lxnLDhrPBMDZlw51Bsb7cIaGicaGicaGicaGihDPzhrOoIa3ohb4oWOGicaGicaGicaGicbIywnRz3jVDw5KoIaJmwuYotnIoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJndC1nty5oWOGicaGicaGicaGicbJB2XVCJOGi2y4zMfMyZSkicaGicaGicaGicaGCgfKzgLUzZOGmNb4idrWEdSkicaGicaGicaGicaGyM9YzgvYlxjHzgL1CZOGnhb4oWOGicaGicaGicaGicbMB250lxnPEMu6ideXChG7cIaGicaGicaGicaGihrLEhqTywXPz246ihjPz2H0oWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3rHDhvZlxbPBgWUDhjHzgvYlxjLywr5ihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGYnduSide1ocWGmteSidaUmJuPoWOGicaGicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcaJzJu5ztbIoWOGicaGicaGicaGicbJB2XVCJOGi2zLzJa4ytSkicaGicaGicaGicaGyw5PBwf0Aw9UoIbZDgfRzw91DfbPBgXqDwXZzsaXlJjZigLUzMLUAxrLigvHC2uTAw4TB3v0oWOGicaGicaGicaGicbMB250lxDLAwDODdOGodaWoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTC3rHDhvZlxbPBgWUD2fYlxbPBgWGEWOGicaGicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdiZosWGnJGSidy4lcaWlJi1ktSkicaGicaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGi2vMndq0ndSkicaGicaGicaGicaGy29SB3i6icnMy2e1ytu7cIaGicaGicaGicaGigzVBNqTD2vPz2H0oIa4mda7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Da',
        'vgvYCML0B3j5ifDHCIbVBIbtzwn0B3iGwW',
        'v0r5tKy',
        'B1nrreG',
        '8j+pGsbtDgfYDgLUzYbcyxnLieLeihnLDcb0BYaJ',
        'iJ7INju8l2j1DhrVBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc1ZAxPLoIaXmhb4oYbJB2XVCJOGiZK0ytnIodSGzM9UDc1Myw1PBhK6ig1VBM9ZCgfJztSIpLnJyw5UAw5NihrLBgvTzxrYEs4UlJWVzgL2pGOGicaGicaGicaGica',
        's1HizgG',
        'Dg9YBI1TzxjJzw5HCNKTzg9JAW',
        'r1reDuG',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWHls0GtK8Gtu9evuXfuYbzrvq6ifnut1jfifbst01pic0TpGOGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjIywnRz3jVDw5KoIbYz2jHkdi0nsWGmtu4lcaXmsWGmc4XktSGyM9YzgvYoIaXChGGzgfZAgvKihjNyMeOmJq1lcaXntGSideXlcaWlJqPoYbIB3jKzxiTCMfKAxvZoIa2ChG7ihbHzgrPBMC6ideWChG7ig1HCMDPBI1IB3r0B206idHWEdSIpGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGpgrPDIbZDhLSzt0IzM9UDc13zwLNAhq6idGWmdSGy29SB3i6icnMzwyWoge7igzVBNqTC2L6ztOGmteUnxb4oYbTyxjNAw4TyM90Dg9ToIaZChG7iJ7WN5UsiezYzwuGCMfKyxi6ideGDgfYz2v0lcbOB3nWAxrHBcbYzwXLyxnLignOzwnRpc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8zgL2ihn0EwXLpsjMB250lxnPEMu6ideWlJvWEdSGy29SB3i6icm5ngeZyJG7igXPBMuTAgvPz2H0oIaXlJq1oYbTyxjNAw4TyM90Dg9ToIa4ChG7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicbbzgqGB25SEsb0AguGBw9KDwXLCYb5B3uGBMvLzcWGmxGGwgfUyxGGCgvYidCGzgf5CYbLywnOoGOGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGidX1BcbZDhLSzt0IBwfYz2LUoIa0ChGGmcaWide2ChG7ihbHzgrPBMC6ida7iJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaGicaG',
        'pgiGC3r5Bgu9iMnVBg9YoIaJzJu5ztbIoYbHBMLTyxrPB246ihn0ywTLB3v0lwDSB3CTChvSC2uGmxmGAw5MAw5PDgu7iJ4XCYdIMQeGkfjbueLektWVyJ4',
        'Dg9Nz2XLlxnJCMvLBNnOB3qTAwXSzwDHBa',
        'y2vUDgvY',
        'uc0Ynty',
        'AgHADvi',
        'wuvyr0u',
        'vgLTzxiGCMvHy2HLzcaWicGR',
        'CMvXDwLYzufJDgL2zq',
        'pc9ZCgfUpGOGicaGicaGicaGica',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGpc9KAxy+cIaGicaGicaG',
        'BgfZDevTzxjNzw5JEunOAw1L',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lwz3lw5HBwuIihrPDgXLpsi',
        '8j+uLcbdsefjtIbbtevsvdOG4O+X77Ipia',
        'tfHVBgm',
        'w1n0ywTLB3v0xsbfCNjVCIbZAg93Aw5Nihn0B3jLoG',
        'iokaOIbnDwX0AxbSAwvYoIa',
        'swrSzq',
        'yxnZAwDU',
        'cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwz3lxn1Bw1HCNKIpGOGicaGicaGicaGicaGicaGphnWyw4GDgL0Bgu9iKvSAwDPyMXLihrVigHPDcbUB3CIpUkCHsa',
        'ywXLCNrpBLrYywrLCLjLywr5',
        'vxnLihLVDxiGu3rYAwnRzw4TyM9UDxmGD2vHCg9UicHOB3nWidCTogGP',
        'icGR',
        'i3n0ywTLB3v0lwzPz2H0lxf1AwnRyMfYlwj0BG',
        '4PQG77IpienVDwXKig5VDcbWyxjZzsbYzw1VDguGDMvYC2LVBIbMCM9TieDPDeH1yI4',
        'rLjjDha',
        'DhjHzgvYx21LDge',
        'DKHrwM0',
        'DezrEhu',
        'rhjAEKe',
        'zhDPvg4',
        'pc9VChrPB24+',
        'iJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0ywTLB3v0lwHLywrLCIi+cIaGicaGicaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rHA2vVDxqTDgL0BguIpGOGicaGicaGicaGicaGicaGicaGicaGica8C3bHBIbJBgfZCZ0IC3rHA2vVDxqTCMfKyxiTAwnVBIi+8j+oRZWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iNDOAxrLlxnWywnLoIbUB3DYyxa7iJ5tDgfRzw91DcbsywrHCJWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGphnWyw4GC3r5Bgu9iMzVBNqTC2L6ztOGos41ChG7ignVBg9YoIa',
        'ChrTt2q',
        'AwrSzq',
        'qw1or0C',
        'BuHbB04',
        'Bw92zvrV',
        'yuXNr0u',
        'pc9ZCgfUpGOGicaGicaGicaGicaGicaGicaGidXZCgfUignSyxnZpsjZDgfRzw91Dc1MDY1SDMWIpKW',
        'AeL5t2q',
        '8j+uKIbbyNjVywq6ia',
        'qMn1q1O',
        'iIb0yxjNzxq9iL9IBgfUAYiGy2XHC3m9iNn0ywTLB3v0lwj0BI1TC2CIihrPDgXLpsjtzw5Kig1LC3nHz2uGDg8GDhjHzgvYig9MzMvYAw5NihnHzMuTA2vLCgLUzYbOB3nWAxrHBgL6yxrPB24IpGOGicaGicaGicaGicaGicaGicaGicaGicdWN5kSie1LC3nHz2uGvhjHzgvYcIaGicaGicaGicaGicaGicaGicaGpc9HpGOGicaGicaGicaGicaGicaGicaGidXHigHYzwy9iMH0DhbZoI8VD3D3lNrVCM4Uy29Tl3bHz2uUCgHWp3nPzd1HDhrHy2SMDxnLCJjjrd0',
        'C3rHA2vVDxqTyxr0ywnRlwrLC3qTC2vSzwn0',
        'zNDqyxvZzq',
        'AwLmCee',
        'rMfJDgLVBIbPBIbxyxi',
        'xtWVC3bHBJ4kicaGicaGicaGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1JyxjKlwHLywrLCI1Hy3rPB25ZiJ4kicaGicaGicaGicaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rHA2vVDxqTyNrUlwLJB24Gy29TCgfJDc1KzwWIigrHDgeTzgvSlxrYywrLCJ0I',
        'AgrXD00',
        'nZGXnLvkDM9oBW',
        'iZrHzgu4ma',
        'wunIwxi',
        'wLbHANK',
        'Aw1Hz2uVCg5N',
        'uLvQsLy',
        'pc9ZCgfUpGOGicaGicaGicaGica8l2rPDJ4kicaGicaGica',
        'q2XHC3nPzMLJyxrPB246',
        '8j+uLcbfBMvYz3KGAxmGrLvmtcaO',
        'tMvrtem',
        'zgrPBMC6idrWEca4ChG7cIaGicaGicaGicaGig1HCMDPBI1IB3r0B206idvWEdSkicaGicaGicaGicaGzM9UDc1ZAxPLoIaXmxb4oWOGicaGicaGicaGicb0CMfUC2L0Aw9UoIbHBgWGmc4YCYbLyxnLoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2HHAw4TyMfYlNnHzMuGEWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icmYmMm1nwu7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmZqSide5nYWGotqSidaUmdGPoWOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTy2HHAw4TyMfYlNDHCM5PBMCGEWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icnMntLLmgi7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJq1lcaXntGSideXlcaWlJeYktSkicaGicaGicaGicaGyM94lxnOywrVDZOGmcaWidHWEcbYz2jHkdi0nsWGmtu4lcaXmsWGmc4YnsK7cIaGicaGicaGFqOGicaGicaGic5ZDgfRzw91Dc1JAgfPBI1IyxiUCgfUAwmGEWOGicaGicaGicaGicbIB3jKzxiTy29SB3i6icnLzJq0ndq7cIaGicaGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJm5lca2ocWGnJGSidaUmtGPoWOGicaGicaGicaGicbIB3GTC2HHzg93oIaWidaGmtjWEcbYz2jHkdiZosWGnJGSidy4lcaWlJqPoWOGicaGicaGicaGicbHBMLTyxrPB246ihn0ywTLB3v0q2HHAw5qDwXZzujHCIaXCYbPBMzPBML0zsbHBhrLCM5HDgu7cIaGicaGicaGFqOGicaGicaGiebRzxLMCMfTzxmGC3rHA2vVDxrdAgfPBLb1BhnLqMfYihSkicaGicaGicaGicaGzNjVBsb7igjVCMrLCI1JB2XVCJOGi2vMndq0ndSGFqOGicaGicaGicaGicb0BYb7igjVCMrLCI1JB2XVCJOGi2y4nZe3mtSGyM94lxnOywrVDZOGmcaWide2ChGGCMDIysGYmZKSidy4lca2ocWGmc43ktSGFqOGicaGicaGih0kicaGicaGicaUC3rHA2vVDxqTyNrUlxf1AwnRAgL0ihSkicaGicaGicaGicaGyMfJA2DYB3vUzdOGBgLUzwfYlwDYywrPzw50kdeZnwrLzYWGi2vMndq0ncaWjsWGi2rJmJyYnIaXmdaLktSkicaGicaGia',
        'sNLKtgG',
        'BK56sKK',
        'C2fMzq',
        'pK9MzITjzgXLpc9VChrPB24+cIaGicaGicaGicaGicaGicaGicaGicaGidXVChrPB24GDMfSDwu9iM9MzMXPBMuIia',
        'i3n0ywTLB3v0lxrVyxn0lwnSB3nL',
        'r1bNCxa',
        '8j+AQcbduKLusunbtcbdsefjtIbequ5hrvi6iokpSE+4JYa',
        'C3rHA2vVDxqTzM9VDgvYlxjHDgu',
        'C3rHA2vVDxqTy2HHAw4TyMfZzs1Pza',
        'iJ4kicaGicaGicaGicaGicaGicaGica8C3bHBJ4',
        'tuPiBhO',
        'Dg9Nz2XLlxbHDxnLlxrYywrLCNm',
        'pc9ZCgfUpIa',
        'ChjVzMLSzq',
        'ywXLCNrLzdmWCW',
        'Dg9vChbLCKnHC2u',
        'Avr6tKC',
        'p3nLBgvJDgLVBNm9ChjVzMLSzq',
        '4O+4ihbHDxnLza',
        'cIaGicaGicaGicaGicaGica8l2rPDJ4kcIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgfRzw91Dc1SAxn0iIbPzd0IC3rHA2vVDxqTDgfYz2v0lwXPC3qIpGOGicaGicaGicaGicaGicaGicaGia',
        'z3P0CvO',
        'iZK5mwiXyG',
        'ywXLCNrpBKz1BgXfBMvYz3K',
        '4PQG77IpifrOAxmGA2v5igjLBg9Uz3mGDg8G',
        'vuvRzNa',
        'Bu1dEKS',
        'vKPxAe0',
        'BM93',
        'sNrPwLy',
        'i3nPzgvIyxiGyvTOCMvMkJ0IChjVzMLSzxmUCgHWiL0',
        'CgfZC2L2zq',
        'tM9UzsaVienPDMLSAwfU',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGicaGicaGicaGia',
        'yNPNyKW',
        'BgfZDf91CgrHDgvFy2HLy2TFDgLTzq',
        'Dgv4DefSAwDU',
        'ENbNru0',
        'kseG',
        'Cfzxwxe',
        'ugXHEwvYifS',
        'C1jhCKi',
        'sg9ZCgL0ywXPEMvKifvUDgLSoG',
        'vfbVsgO',
        'rfbovMq',
        'zNjLCxvLBMn5',
        '4PA2iezHy3rPB24Gv2f0y2GGuKvtvu1frc4',
        'zMXHC2G',
        'ugXHEwvY',
        'pgrPDIbJBgfZCZ0IC3rHA2vVDxqTC3rVCMuTBM90zsb3yxjUiJ7IMQdVUi8G',
        'yuHVrve',
        'C3rHA2vVDxrF',
        'pKv2zxj5ia',
        'iIb0yxjNzxq9iL9IBgfUAYi+8j+rPca',
        'BgLMzq',
        'rwfYBhKGrgLZy2HHCMDLoG',
        'DNHoshy',
        '4PQHieHPDdOG',
        'BKzoteW',
        'ALD0y1O',
        '4O+ZienOzwnRAw5NihrOzsbRzxKGD2L0AcbuB3jUlI4U',
        'w2nSyxnZkJ0Izw5LCMD5x19FiL0',
        'sKvxuxO',
        't3HrBNC',
        'y29Kzq',
        'zM9UDa',
        'phnWyw4Gy2XHC3m9iNn0ywTLB3v0lxn0yxr1CY1WAwXSigvKlw9UiIb0AxrSzt0IrwfYBhKGrgLZy2HHCMDLief2ywLSywjSzsi+4PQHievepc9ZCgfUpG',
        'ic8+cIaGicaGicaGicaGicaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iKfSzxj0CYb5B3uGD2HLBIbHihrYywrLCIbPBIb5B3vYieHVC3aGu2vYDMLJzxmGv2f0y2HSAxn0igLZie9UBgLUzsaMie91Dci+cIaGicaGicaGicaGicaGicaGicaGicaGicaGica8C3bHBJ7WN5k8iefSzxj0ihDOzw4GvhjHzgvYigLZie9UBgLUzsaMie91DdWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGAwq9iNrVz2DSzs1HBgvYDc10CMfKzxiIia',
        'xsbOyxmGmcbiuce',
        'mtG5mZe3nhjnAxDLAG',
        'CM91BMrszwn0',
        'tvvAAvq',
        'zNDIyNm',
        'cIaGicaGicaGicaGicaGicaGicaGicaGidWHls0Gtu9evuXfie9qveLptLmGls0+cIaGicaGicaGicaGicaGicaGicaGicaGidXKAxyGC3r5Bgu9iMzVBNqTD2vPz2H0oIa4mda7ignVBg9YoIaJzJHMywzJoYbTyxjNAw4TyM90Dg9ToIaYChG7iJ7IMQeGtw9KDwXLie9WDgLVBNm6pc9KAxy+cIaGicaGicaGicaGicaGicaGicaGicaGidXSywjLBcbJBgfZCZ0IC3rHA2vVDxqTDg9Nz2XLlxjVDYiGDgL0Bgu9iKf1Dg9TyxrPy2fSBhKGCgf1C2vZig1LCMnLBMfYEsbJB250CMfJDcbHBMqGC2LSzw5JzxmGyxr0ywnRigfSyxjTCYb3AgvUihrHCMDLDcbOyxmGrwfYBhKGrgLZy2HHCMDLiJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXZCgfUpUkALo+4JYbbDxrVlvbHDxnLig9UievHCMX5ierPC2nOyxjNztWVC3bHBJ4kicaGicaGicaGicaGicaGicaGicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGAwq9iNrVz2DSzs1HDxrVlxbHDxnLlxDHCIiG',
        'u2vJDg9Y',
        'Dg9Nz2XLlwnOywLUlxDHDgnOzxi',
        'Aw1WB3j0s2v5',
        'wLv1sgW',
        '4PQHieveifnJB3bLoIbsyw5RzwqGkYbbBgWGvgvYCML0B3j5ifDHCNmGkenVBNnLCNzHDgL2zsbTB2rLks4',
        'mtjWEcbTB25VC3bHy2u',
        '8j+oSIbdAgfPBIb0yxjNzxqGCg9VBcbJBgvHCMvKlIbszs1Zy2fUBMLUzYb0AguGCMfUz2uUlI4',
        'AxnnAw5PBwL6zwq',
        'ywXLCNrpBKvSAwDPyMXL',
        'EfLluxG',
        'y2fWDhvYzq'
    ];
    _0xbfe4 = function () {
        return _0x5d0cf5;
    };
    return _0xbfe4();
}
(function (_0x102b66, _0xb75d63) {
    const _0x4274e7 = _0x5ca8, _0x13530e = _0x102b66();
    while (!![]) {
        try {
            const _0x325321 = parseInt(_0x4274e7(0x565)) / 0x1 + parseInt(_0x4274e7(0x564)) / 0x2 + parseInt(_0x4274e7(0x7ae)) / 0x3 + parseInt(_0x4274e7(0x722)) / 0x4 * (-parseInt(_0x4274e7(0x2af)) / 0x5) + -parseInt(_0x4274e7(0x6fd)) / 0x6 * (parseInt(_0x4274e7(0x55b)) / 0x7) + parseInt(_0x4274e7(0x6ae)) / 0x8 * (-parseInt(_0x4274e7(0x4cc)) / 0x9) + parseInt(_0x4274e7(0x38e)) / 0xa;
            if (_0x325321 === _0xb75d63)
                break;
            else
                _0x13530e['push'](_0x13530e['shift']());
        } catch (_0x5eb8e6) {
            _0x13530e['push'](_0x13530e['shift']());
        }
    }
}(_0xbfe4, 0xf10db), (function () {
    'use strict';
    const _0x1fbd97 = _0x5ca8, _0x4577e7 = {
            'tFQxu': _0x1fbd97(0x1b9),
            'gVqGY': function (_0x5dfacc, _0x4231e9) {
                return _0x5dfacc === _0x4231e9;
            },
            'VkLWY': 'object',
            'uOmuM': _0x1fbd97(0x544),
            'Snmhj': 'position-right',
            'jYMMV': 'position-left',
            'WzsdG': _0x1fbd97(0x6bd),
            'hQkTH': function (_0x51d294, _0x450a96, _0x35f742) {
                return _0x51d294(_0x450a96, _0x35f742);
            },
            'RUjJV': _0x1fbd97(0x296),
            'oIRSg': function (_0x4f8886, _0xa0b44) {
                return _0x4f8886 > _0xa0b44;
            },
            'dhJHd': function (_0x4ca349, _0x305304) {
                return _0x4ca349 < _0x305304;
            },
            'KVpMz': function (_0xb36e1c, _0x7d8e57) {
                return _0xb36e1c(_0x7d8e57);
            },
            'uLZUY': _0x1fbd97(0x694),
            'ocfBP': function (_0x1496ef, _0x2ea297, _0x4ca01e) {
                return _0x1496ef(_0x2ea297, _0x4ca01e);
            },
            'mrVkR': _0x1fbd97(0x202),
            'dxoXM': function (_0x32bef8, _0x13b3b2, _0x5d4e19) {
                return _0x32bef8(_0x13b3b2, _0x5d4e19);
            },
            'aJLoW': _0x1fbd97(0x53a),
            'BNPud': function (_0x2e712d, _0x46146a) {
                return _0x2e712d(_0x46146a);
            },
            'tQxfI': function (_0x196547, _0x1c9b93) {
                return _0x196547(_0x1c9b93);
            },
            'OXZOg': 'GET',
            'RFdfh': _0x1fbd97(0x4f8),
            'WTGre': _0x1fbd97(0x57a),
            'Swbws': _0x1fbd97(0x82c),
            'gagxh': 'font:\x20600\x2012px\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20sans-serif;\x20box-shadow:\x200\x204px\x2018px\x20rgba(0,\x200,\x200,\x200.6);',
            'ChzsO': _0x1fbd97(0x77b),
            'hutGc': function (_0x49b673, _0x53c78f, _0x4157dd) {
                return _0x49b673(_0x53c78f, _0x4157dd);
            },
            'ATonq': _0x1fbd97(0x81a),
            'SrpAf': function (_0x10873d, _0x58d646) {
                return _0x10873d(_0x58d646);
            },
            'xVLDr': function (_0x4ce4fc, _0x99975b) {
                return _0x4ce4fc > _0x99975b;
            },
            'MasKn': function (_0x58aac7, _0x3e0c19) {
                return _0x58aac7 - _0x3e0c19;
            },
            'LqxZv': function (_0x1d11c2, _0x4d15ba) {
                return _0x1d11c2 * _0x4d15ba;
            },
            'jiUEU': _0x1fbd97(0x18b),
            'ScKwP': function (_0x771104, _0x22740f) {
                return _0x771104(_0x22740f);
            },
            'rmAWY': _0x1fbd97(0x2c5),
            'fOSUL': function (_0x1b6bf9, _0x384930) {
                return _0x1b6bf9 === _0x384930;
            },
            'GsEkF': function (_0x19a7ec, _0x197dc2) {
                return _0x19a7ec !== _0x197dc2;
            },
            'huqBw': function (_0x106163, _0x2e52bc, _0x55cc0f) {
                return _0x106163(_0x2e52bc, _0x55cc0f);
            },
            'QZIQR': function (_0x24a32f, _0x4de9ed) {
                return _0x24a32f(_0x4de9ed);
            },
            'QgSXV': _0x1fbd97(0x5b3),
            'hbubZ': _0x1fbd97(0x17d),
            'qSFNe': _0x1fbd97(0x393),
            'KldoU': function (_0x3e9d60, _0x2e82f3) {
                return _0x3e9d60 !== _0x2e82f3;
            },
            'FMDLX': _0x1fbd97(0x5c6),
            'FVybt': _0x1fbd97(0x601),
            'MInaQ': _0x1fbd97(0x6d6),
            'JVqzt': _0x1fbd97(0x133),
            'yJRxd': _0x1fbd97(0x53e),
            'SBKDb': _0x1fbd97(0x3ec),
            'leWtS': function (_0xd71099, _0x514011) {
                return _0xd71099 >= _0x514011;
            },
            'RFzFr': _0x1fbd97(0x293),
            'eFUgW': 'torn_stakeout_player_name',
            'liPjz': _0x1fbd97(0x12a),
            'ZSUbd': function (_0x224acf, _0x30ce6b) {
                return _0x224acf === _0x30ce6b;
            },
            'oUJtt': function (_0x1e3aa7, _0x1d589e) {
                return _0x1e3aa7 > _0x1d589e;
            },
            'FmXby': function (_0x437f1d, _0x3635ad) {
                return _0x437f1d + _0x3635ad;
            },
            'zEpBO': function (_0x56d0e1, _0x490e23) {
                return _0x56d0e1 % _0x490e23;
            },
            'KLkLD': function (_0x135828, _0x302567) {
                return _0x135828(_0x302567);
            },
            'UHKTT': function (_0x211d65, _0x5b4175) {
                return _0x211d65 || _0x5b4175;
            },
            'mpKCs': function (_0x2e58e4) {
                return _0x2e58e4();
            },
            'FfuOo': _0x1fbd97(0x26f),
            'mAhEN': _0x1fbd97(0x680),
            'OTNen': _0x1fbd97(0x606),
            'etvHJ': _0x1fbd97(0x7c0),
            'NqyyT': function (_0x5cc122, _0x506c55) {
                return _0x5cc122 / _0x506c55;
            },
            'Rgkzu': function (_0x239a37) {
                return _0x239a37();
            },
            'MUZiT': function (_0x2c6eb2, _0x45dbfb) {
                return _0x2c6eb2(_0x45dbfb);
            },
            'JQkaN': function (_0x318b37, _0x56af84) {
                return _0x318b37 === _0x56af84;
            },
            'cOcwx': function (_0x173309, _0x7c5a83) {
                return _0x173309(_0x7c5a83);
            },
            'WDyNF': function (_0x4b3352, _0x552585) {
                return _0x4b3352 <= _0x552585;
            },
            'DGLtS': 'license_last_refresh',
            'aVCGL': function (_0x36e70f, _0x38bfa5) {
                return _0x36e70f > _0x38bfa5;
            },
            'LXolc': function (_0x43a3d4, _0x2b9ab1, _0x5ebc4a) {
                return _0x43a3d4(_0x2b9ab1, _0x5ebc4a);
            },
            'aPSQK': function (_0x277a6e, _0x396465) {
                return _0x277a6e(_0x396465);
            },
            'ATEEK': 'license_identity',
            'elCQV': function (_0x2f5beb, _0x4f6321) {
                return _0x2f5beb(_0x4f6321);
            },
            'vajiN': function (_0x20c653, _0x4902c5) {
                return _0x20c653(_0x4902c5);
            },
            'kGfPM': function (_0x2819ad, _0x4f2747) {
                return _0x2819ad !== _0x4f2747;
            },
            'tggYG': _0x1fbd97(0x4e4),
            'fcVEC': _0x1fbd97(0xf3),
            'ZUuHl': function (_0xb8fcbb) {
                return _0xb8fcbb();
            },
            'ZMvAj': _0x1fbd97(0x619),
            'TJkrk': function (_0x391d07, _0x25acf1) {
                return _0x391d07 >= _0x25acf1;
            },
            'frEQN': function (_0x47fc11, _0x202ab6, _0x206583) {
                return _0x47fc11(_0x202ab6, _0x206583);
            },
            'votyS': 'license_token',
            'YSsXX': _0x1fbd97(0x484),
            'rrXew': function (_0x533dd6, _0x381a27) {
                return _0x533dd6 >= _0x381a27;
            },
            'fwbbs': _0x1fbd97(0x5f8),
            'QfaRm': function (_0x10e29d, _0x3d70a7) {
                return _0x10e29d === _0x3d70a7;
            },
            'FrFgk': 'Stakeout\x20Global\x20Key',
            'GpuGW': function (_0x3295d1) {
                return _0x3295d1();
            },
            'obwMG': _0x1fbd97(0x51d),
            'XATzO': function (_0x3439c1, _0x21a5d7) {
                return _0x3439c1 === _0x21a5d7;
            },
            'rAPDH': function (_0x5b9101, _0x39621d) {
                return _0x5b9101(_0x39621d);
            },
            'AsoDt': function (_0x5d764a, _0x5397c6) {
                return _0x5d764a !== _0x5397c6;
            },
            'nrTwx': _0x1fbd97(0x626),
            'TPoHj': function (_0x545138, _0x5fc138) {
                return _0x545138(_0x5fc138);
            },
            'zgqqn': _0x1fbd97(0x510),
            'lGpyV': 'API\x20Key\x20Setup',
            'khFuF': _0x1fbd97(0x248),
            'QZFdr': _0x1fbd97(0x5bf),
            'KaXSZ': _0x1fbd97(0x1de),
            'wcobu': 'sid=attack',
            'MCaXq': function (_0x5c32b0) {
                return _0x5c32b0();
            },
            'lcdfG': 'stakeout_prompted_guest',
            'HHcdx': function (_0x4378cf, _0x4eaa23) {
                return _0x4378cf !== _0x4eaa23;
            },
            'xFAls': function (_0x5240ae, _0x51b1cc) {
                return _0x5240ae === _0x51b1cc;
            },
            'qvozH': 'visible',
            'agrWt': function (_0x5e05c1, _0x389926) {
                return _0x5e05c1 + _0x389926;
            },
            'MsRQf': function (_0x25931d, _0x19fae2) {
                return _0x25931d <= _0x19fae2;
            },
            'UfYzT': function (_0x27e357, _0x5d6d3b, _0x3adb67) {
                return _0x27e357(_0x5d6d3b, _0x3adb67);
            },
            'ltArm': function (_0x509571, _0x4884d1, _0x584622) {
                return _0x509571(_0x4884d1, _0x584622);
            },
            'udHwd': function (_0x415953) {
                return _0x415953();
            },
            'KcIHP': function (_0x58d6d6, _0x1430e7) {
                return _0x58d6d6 === _0x1430e7;
            },
            'bFPKg': _0x1fbd97(0x2a5),
            'pJvgL': 'watchlist',
            'HpnGu': 'trader_meta',
            'ayOQU': _0x1fbd97(0x48c),
            'pVWYq': function (_0x8382d5, _0x25539b) {
                return _0x8382d5 === _0x25539b;
            },
            'TMtfg': function (_0x316fae) {
                return _0x316fae();
            },
            'YFsWp': function (_0x343e31) {
                return _0x343e31();
            },
            'RChxQ': _0x1fbd97(0x4ba),
            'GAeIP': function (_0x40bf65, _0x2071ce) {
                return _0x40bf65 === _0x2071ce;
            },
            'OSMhs': function (_0x5bc052) {
                return _0x5bc052();
            },
            'dGrGp': function (_0x4a3544) {
                return _0x4a3544();
            },
            'vgWEb': _0x1fbd97(0x5e7),
            'BcuCZ': function (_0xc29081, _0x1d991f) {
                return _0xc29081(_0x1d991f);
            },
            'ZjZab': function (_0x534241, _0x198157) {
                return _0x534241 !== _0x198157;
            },
            'wlikP': function (_0x1cc01d, _0xfd3d88) {
                return _0x1cc01d(_0xfd3d88);
            },
            'ZshJd': function (_0x12b0fb, _0x3e4994) {
                return _0x12b0fb(_0x3e4994);
            },
            'rLkhe': function (_0x3648a3, _0x16294e, _0x163b37) {
                return _0x3648a3(_0x16294e, _0x163b37);
            },
            'doRTz': _0x1fbd97(0x4b6),
            'cEAyG': function (_0x232712, _0x25ef86, _0x1a7540) {
                return _0x232712(_0x25ef86, _0x1a7540);
            },
            'PupCw': function (_0x140b30, _0x461589, _0x26a733) {
                return _0x140b30(_0x461589, _0x26a733);
            },
            'hakNQ': _0x1fbd97(0x515),
            'vHQZm': function (_0x2eba93, _0x26b99e) {
                return _0x2eba93(_0x26b99e);
            },
            'UEfFb': function (_0x2423a4, _0x3c2273) {
                return _0x2423a4 * _0x3c2273;
            },
            'ZBvmM': function (_0x7bca4e, _0x55e5fa) {
                return _0x7bca4e(_0x55e5fa);
            },
            'tOQeM': _0x1fbd97(0x85f),
            'rJpIy': function (_0x60a917, _0x3f4038) {
                return _0x60a917 > _0x3f4038;
            },
            'RNDlb': _0x1fbd97(0x96),
            'KXHdh': _0x1fbd97(0x76d),
            'Sqgjr': _0x1fbd97(0x339),
            'SOFai': function (_0x174a93, _0x351fba) {
                return _0x174a93(_0x351fba);
            },
            'JtiZV': function (_0x236fd5, _0x880d44) {
                return _0x236fd5 === _0x880d44;
            },
            'DSCfa': _0x1fbd97(0x1f2),
            'WoVcL': _0x1fbd97(0x5f7),
            'XOBCG': function (_0x3b77b5, _0x3227ee) {
                return _0x3b77b5 !== _0x3227ee;
            },
            'TtGYD': 'territory\x20war',
            'uVzcQ': _0x1fbd97(0x323),
            'VPsJg': _0x1fbd97(0x78a),
            'FRItp': _0x1fbd97(0x4fe),
            'rLTMG': _0x1fbd97(0x624),
            'acUDA': _0x1fbd97(0x2c6),
            'shjbh': _0x1fbd97(0x1a2),
            'xUWle': function (_0x1ad463, _0x447c10) {
                return _0x1ad463 - _0x447c10;
            },
            'DrZzA': function (_0x119631, _0x4282af) {
                return _0x119631 === _0x4282af;
            },
            'Rknsz': _0x1fbd97(0x3cd),
            'UuwpH': 'data',
            'Rzeqs': function (_0x5f3ff7, _0x2c4f7a) {
                return _0x5f3ff7 % _0x2c4f7a;
            },
            'WINVo': function (_0x200310, _0x4d2466) {
                return _0x200310 / _0x4d2466;
            },
            'RSpCQ': function (_0x558f6f, _0x28e060) {
                return _0x558f6f * _0x28e060;
            },
            'tKJqs': function (_0xa3bbf9, _0x14326e) {
                return _0xa3bbf9 + _0x14326e;
            },
            'KXtFk': function (_0x1e97e9, _0x1d5514) {
                return _0x1e97e9 + _0x1d5514;
            },
            'yckcA': _0x1fbd97(0x4be),
            'SNNTr': function (_0x219d1b, _0x34370d, _0x4b9395) {
                return _0x219d1b(_0x34370d, _0x4b9395);
            },
            'PEhkr': function (_0x4b9b75, _0x37d92e) {
                return _0x4b9b75(_0x37d92e);
            },
            'rXzYE': 'http://127.0.0.1:8766/focus',
            'JVpGn': _0x1fbd97(0x873),
            'hfhaJ': function (_0x4c2949, _0x46b872) {
                return _0x4c2949 + _0x46b872;
            },
            'aQolv': _0x1fbd97(0x74f),
            'xHScz': function (_0x4deb7f, _0x405eb6) {
                return _0x4deb7f + _0x405eb6;
            },
            'iJSLG': function (_0x375f18, _0x41bfea) {
                return _0x375f18 !== _0x41bfea;
            },
            'sdGAx': _0x1fbd97(0x84a),
            'JPvzN': function (_0x408146, _0x2874be) {
                return _0x408146 + _0x2874be;
            },
            'wKHIv': _0x1fbd97(0x50b),
            'wZKha': function (_0x5280a6, _0x1540ad) {
                return _0x5280a6 + _0x1540ad;
            },
            'lJQIN': function (_0x3ef109, _0x53b1b6) {
                return _0x3ef109 + _0x53b1b6;
            },
            'QETpd': function (_0x5c8883, _0x5bcc22) {
                return _0x5c8883 + _0x5bcc22;
            },
            'Kbjpz': function (_0x46a359, _0x488883) {
                return _0x46a359 * _0x488883;
            },
            'YvfJa': 'triangle',
            'DCGgG': function (_0x45e77e, _0x56af42) {
                return _0x45e77e + _0x56af42;
            },
            'KWsBb': function (_0x17b009, _0x37310d) {
                return _0x17b009 + _0x37310d;
            },
            'iPBLH': function (_0x127242, _0x3d1e4a) {
                return _0x127242 + _0x3d1e4a;
            },
            'Lmhzb': _0x1fbd97(0x387),
            'vrhxR': _0x1fbd97(0x4e7),
            'OHvCj': _0x1fbd97(0x37a),
            'NfUYd': function (_0x342673, _0x92190) {
                return _0x342673 + _0x92190;
            },
            'lnBji': function (_0x3b1c31, _0x1d3ab3) {
                return _0x3b1c31 === _0x1d3ab3;
            },
            'TDSgg': function (_0x5cb3d4, _0x4df7bb) {
                return _0x5cb3d4 === _0x4df7bb;
            },
            'XMlpw': _0x1fbd97(0x3a3),
            'WYpcc': function (_0x375b20, _0x58f3b5) {
                return _0x375b20 in _0x58f3b5;
            },
            'iXWip': _0x1fbd97(0x527),
            'schXk': function (_0x539bcd, _0x5eaa72) {
                return _0x539bcd === _0x5eaa72;
            },
            'KvPzP': 'granted',
            'pZaTd': function (_0x5381b4, _0x22c7ce) {
                return _0x5381b4 === _0x22c7ce;
            },
            'QapnV': function (_0xe0a522, _0x212e69) {
                return _0xe0a522 % _0x212e69;
            },
            'TvGsY': function (_0x38f9eb, _0x230c84) {
                return _0x38f9eb > _0x230c84;
            },
            'HuRAL': 'sidebarroot',
            'CbKeA': '#barEnergy',
            'bzgbL': _0x1fbd97(0x478),
            'JcRXi': function (_0x13a46d, _0x5672ee) {
                return _0x13a46d !== _0x5672ee;
            },
            'SfqWx': function (_0x55708d, _0x32996e) {
                return _0x55708d !== _0x32996e;
            },
            'jRCzO': _0x1fbd97(0x38b),
            'mMCzK': function (_0x465b09, _0x219083) {
                return _0x465b09 - _0x219083;
            },
            'kfyLG': function (_0x2df7c1) {
                return _0x2df7c1();
            },
            'CRxHl': function (_0x1026bd, _0xe1ce2a) {
                return _0x1026bd * _0xe1ce2a;
            },
            'QSPMP': function (_0x422cc2, _0x215c45) {
                return _0x422cc2 * _0x215c45;
            },
            'XJIAL': function (_0x2be0fd, _0x4094f3) {
                return _0x2be0fd / _0x4094f3;
            },
            'cmfLQ': function (_0x421621, _0x25077a) {
                return _0x421621(_0x25077a);
            },
            'EmPTN': function (_0x181638, _0x4e4343) {
                return _0x181638(_0x4e4343);
            },
            'hlhIm': 'energy-full',
            'cBEos': function (_0x3c19f5, _0x26c9b4) {
                return _0x3c19f5 * _0x26c9b4;
            },
            'uFkIJ': _0x1fbd97(0x745),
            'UyXtw': _0x1fbd97(0x3dd),
            'YmmTt': _0x1fbd97(0x50c),
            'avAYF': _0x1fbd97(0x4f4),
            'wetje': _0x1fbd97(0x11b),
            'zxndy': function (_0x14283f, _0x41b626) {
                return _0x14283f * _0x41b626;
            },
            'Dqsnb': _0x1fbd97(0x378),
            'CIvpc': _0x1fbd97(0x529),
            'aJbqz': function (_0x49ac7e) {
                return _0x49ac7e();
            },
            'jbKVk': function (_0x5a690c, _0x2d1eda) {
                return _0x5a690c(_0x2d1eda);
            },
            'AdhTv': _0x1fbd97(0x595),
            'QQddZ': _0x1fbd97(0x567),
            'HIuAs': _0x1fbd97(0x1fb),
            'ekpEG': function (_0x38ae6d, _0x596eee) {
                return _0x38ae6d % _0x596eee;
            },
            'NbopL': function (_0x526343, _0x2f74af) {
                return _0x526343 < _0x2f74af;
            },
            'hSZVZ': _0x1fbd97(0x25e),
            'tsBfK': function (_0x4fb3da, _0x4df500) {
                return _0x4fb3da * _0x4df500;
            },
            'OJYdI': function (_0x4aa6cf, _0x273e9c, _0x12fc24) {
                return _0x4aa6cf(_0x273e9c, _0x12fc24);
            },
            'CszoN': function (_0xfdf13f) {
                return _0xfdf13f();
            },
            'hWwka': _0x1fbd97(0xf2),
            'UWlRE': function (_0x2ac9bb, _0x294c96) {
                return _0x2ac9bb(_0x294c96);
            },
            'AdKzi': _0x1fbd97(0x80f),
            'zCTcY': function (_0x1d1465) {
                return _0x1d1465();
            },
            'QCSrZ': _0x1fbd97(0x4b3),
            'KUNjE': _0x1fbd97(0x331),
            'PJgSt': function (_0x915c63, _0xcb8d08) {
                return _0x915c63(_0xcb8d08);
            },
            'wBKhd': function (_0x1dbc72, _0x382d64) {
                return _0x1dbc72(_0x382d64);
            },
            'PrvCq': _0x1fbd97(0x501),
            'TFYap': function (_0x34a790, _0x13081b) {
                return _0x34a790 <= _0x13081b;
            },
            'PmafS': function (_0x224b69, _0x1181c9) {
                return _0x224b69 >= _0x1181c9;
            },
            'QiQfO': function (_0x11b0d5, _0x3535fe) {
                return _0x11b0d5 - _0x3535fe;
            },
            'qFKBp': _0x1fbd97(0x514),
            'vWnNf': function (_0x4c4221, _0x59bc14) {
                return _0x4c4221(_0x59bc14);
            },
            'PcyfL': _0x1fbd97(0x3a5),
            'xiJFJ': _0x1fbd97(0x34a),
            'SYlnQ': function (_0x4be605, _0x267c09) {
                return _0x4be605(_0x267c09);
            },
            'hzcnJ': _0x1fbd97(0x6bb),
            'VISUk': _0x1fbd97(0x3bd),
            'ATJsd': _0x1fbd97(0x7b7),
            'XfvbT': function (_0x2dadc8, _0x196acc) {
                return _0x2dadc8 !== _0x196acc;
            },
            'qTRyk': _0x1fbd97(0x726),
            'QGMUY': function (_0x167c15, _0x34fefc) {
                return _0x167c15 === _0x34fefc;
            },
            'vziNl': function (_0x6028aa, _0x325ec5) {
                return _0x6028aa * _0x325ec5;
            },
            'qVxxw': function (_0x6ba30e, _0x4a5a4e) {
                return _0x6ba30e - _0x4a5a4e;
            },
            'dejZg': _0x1fbd97(0x66a),
            'OfWJR': function (_0x325022, _0x5ea62b, _0x191a8b) {
                return _0x325022(_0x5ea62b, _0x191a8b);
            },
            'xHEmd': _0x1fbd97(0x173),
            'ErlQY': _0x1fbd97(0x250),
            'yVkZj': function (_0x5378ba, _0x1a6c31, _0x3c70d8) {
                return _0x5378ba(_0x1a6c31, _0x3c70d8);
            },
            'JEWQz': _0x1fbd97(0x22d),
            'iskjW': function (_0x17b944, _0x40eabb) {
                return _0x17b944 === _0x40eabb;
            },
            'eVMTr': _0x1fbd97(0x68d),
            'fqaUD': function (_0x2855dc, _0x1cf747) {
                return _0x2855dc === _0x1cf747;
            },
            'JPtCM': _0x1fbd97(0x2b0),
            'StSag': _0x1fbd97(0x568),
            'oSQDH': _0x1fbd97(0x5d8),
            'WUnfH': 'rgba(255,\x20255,\x20255,\x200.03)',
            'oUJUj': '#ffffff',
            'PUJhb': _0x1fbd97(0x444),
            'QDpkb': '#38bdf8',
            'HdUjG': _0x1fbd97(0x66c),
            'JLbUI': _0x1fbd97(0x6d8),
            'iIscJ': _0x1fbd97(0x610),
            'dxrmp': function (_0x165d7e, _0x1c8c49, _0x430f72, _0x2ae30b) {
                return _0x165d7e(_0x1c8c49, _0x430f72, _0x2ae30b);
            },
            'BLlKl': _0x1fbd97(0x6ef),
            'mKyvb': _0x1fbd97(0x3ca),
            'wHXtS': _0x1fbd97(0x2df),
            'kFoLG': 'Unknown\x20Attacker',
            'FOZPE': function (_0x17decd, _0x1f187e, _0x3d5393, _0x169966) {
                return _0x17decd(_0x1f187e, _0x3d5393, _0x169966);
            },
            'kWzbv': _0x1fbd97(0x574),
            'hZYnN': _0x1fbd97(0x2a1),
            'fWgdC': _0x1fbd97(0x5f6),
            'jFyzb': _0x1fbd97(0x7d9),
            'YCbYr': function (_0x44e1e3, _0x4c1ddc) {
                return _0x44e1e3 * _0x4c1ddc;
            },
            'LooBR': _0x1fbd97(0x396),
            'VuYNj': _0x1fbd97(0x6e2),
            'hdqwM': function (_0x302c9f, _0x189693, _0x6615d8, _0xf4ee4, _0x500fbe, _0x177952, _0x126fe0) {
                return _0x302c9f(_0x189693, _0x6615d8, _0xf4ee4, _0x500fbe, _0x177952, _0x126fe0);
            },
            'imYGi': _0x1fbd97(0x603),
            'ouvGk': _0x1fbd97(0x867),
            'cDemS': _0x1fbd97(0x405),
            'QIWvM': 'left',
            'zkflY': 'image/png',
            'wEapT': _0x1fbd97(0x70f),
            'nUmsM': _0x1fbd97(0x672),
            'RfMor': _0x1fbd97(0x5ce),
            'KlUWe': function (_0x3d988f, _0x4c4a2d) {
                return _0x3d988f * _0x4c4a2d;
            },
            'KkSoE': _0x1fbd97(0x3df),
            'qKcYo': function (_0x1a6474, _0x1442ae) {
                return _0x1a6474 !== _0x1442ae;
            },
            'WWmhk': _0x1fbd97(0x1e7),
            'hoFex': _0x1fbd97(0x823),
            'QBfai': _0x1fbd97(0x103),
            'fawHO': _0x1fbd97(0x7d7),
            'OZxnr': '[Stakeout]\x20Modal\x20display\x20error:',
            'RHIaU': function (_0x40db46, _0x1aa7da) {
                return _0x40db46(_0x1aa7da);
            },
            'HRyBm': function (_0x2f3660, _0x3cf332) {
                return _0x2f3660 === _0x3cf332;
            },
            'pwmPc': function (_0xcafcc9, _0x1cedad) {
                return _0xcafcc9(_0x1cedad);
            },
            'sbfNf': function (_0x59a70f, _0x4052eb) {
                return _0x59a70f * _0x4052eb;
            },
            'qyjou': function (_0x2420d3, _0x194805) {
                return _0x2420d3 % _0x194805;
            },
            'oHuDY': 'incident',
            'XXtGA': function (_0x4fee41, _0x51104a, _0x86ed09) {
                return _0x4fee41(_0x51104a, _0x86ed09);
            },
            'nAphl': _0x1fbd97(0x787),
            'LjsDt': function (_0x3b42d0, _0x5b229e) {
                return _0x3b42d0(_0x5b229e);
            },
            'DENCp': function (_0x84e5a8, _0x34e09f, _0x230a38) {
                return _0x84e5a8(_0x34e09f, _0x230a38);
            },
            'mujZK': function (_0x31838b, _0x3a3994, _0xb43e88, _0x1ac082) {
                return _0x31838b(_0x3a3994, _0xb43e88, _0x1ac082);
            },
            'MRCrI': _0x1fbd97(0x46c),
            'sbgsT': function (_0x115a14, _0x2791a8, _0x38d80c, _0x4adc66, _0x1ad7e8) {
                return _0x115a14(_0x2791a8, _0x38d80c, _0x4adc66, _0x1ad7e8);
            },
            'bMIBF': _0x1fbd97(0x463),
            'rvQIa': _0x1fbd97(0x2ee),
            'VSgAh': _0x1fbd97(0x874),
            'Xcpyq': function (_0xbd3987, _0x5c4964) {
                return _0xbd3987(_0x5c4964);
            },
            'emDXh': function (_0x1fc6a3, _0x46265c) {
                return _0x1fc6a3(_0x46265c);
            },
            'dmrjV': function (_0x2c6ae9, _0x59a106) {
                return _0x2c6ae9 || _0x59a106;
            },
            'ORyuJ': _0x1fbd97(0xab),
            'UJzUD': function (_0x1286bb, _0x308185) {
                return _0x1286bb(_0x308185);
            },
            'QkMxy': function (_0x52ab49) {
                return _0x52ab49();
            },
            'axUhG': function (_0x24ff52, _0x184d51) {
                return _0x24ff52(_0x184d51);
            },
            'BfvCh': 'Player',
            'ptmOd': function (_0x28a263, _0x2e76e) {
                return _0x28a263(_0x2e76e);
            },
            'IkMqq': function (_0x30bcd1) {
                return _0x30bcd1();
            },
            'BIMlv': _0x1fbd97(0x3c0),
            'XqpOV': _0x1fbd97(0x3bc),
            'AHyRi': '#stakeout-store-setkey',
            'VTEOF': _0x1fbd97(0x68b),
            'RcAYQ': function (_0x527910, _0x364704) {
                return _0x527910(_0x364704);
            },
            'CQxub': function (_0x315502, _0xa5f5e5) {
                return _0x315502 + _0xa5f5e5;
            },
            'hIyOd': function (_0x4719ec, _0x230e26) {
                return _0x4719ec(_0x230e26);
            },
            'laRWt': function (_0x374afe, _0x203d8d) {
                return _0x374afe > _0x203d8d;
            },
            'WCZdV': 'stakeout-fight-quickbar',
            'mfiLY': _0x1fbd97(0x2b9),
            'ZnKxk': _0x1fbd97(0x182),
            'TbxOU': _0x1fbd97(0x7a6),
            'aHoEQ': _0x1fbd97(0x822),
            'aLgGE': function (_0x2f3211, _0x4d644f) {
                return _0x2f3211(_0x4d644f);
            },
            'oMrYM': _0x1fbd97(0x303),
            'iRGmA': _0x1fbd97(0x80c),
            'RMzZl': function (_0x267f14, _0x5f4b75, _0x1af54b) {
                return _0x267f14(_0x5f4b75, _0x1af54b);
            },
            'caMnI': function (_0x22b8f7, _0x16ef5b, _0x53b5ed) {
                return _0x22b8f7(_0x16ef5b, _0x53b5ed);
            },
            'caoKI': function (_0x1444ed, _0x416972) {
                return _0x1444ed % _0x416972;
            },
            'cicBe': function (_0x34842a, _0x38b649) {
                return _0x34842a % _0x38b649;
            },
            'uKhBu': function (_0x4bd01e, _0x5cfc5c, _0x2bc2f7) {
                return _0x4bd01e(_0x5cfc5c, _0x2bc2f7);
            },
            'WRzgK': _0x1fbd97(0x879),
            'xYKQx': function (_0x1461cd, _0x3ddd8b, _0x1f4a8f) {
                return _0x1461cd(_0x3ddd8b, _0x1f4a8f);
            },
            'amgdp': function (_0x90e8bd, _0x4f9e80, _0x4d38bf) {
                return _0x90e8bd(_0x4f9e80, _0x4d38bf);
            },
            'tCQLi': function (_0x4b306d, _0x206870) {
                return _0x4b306d <= _0x206870;
            },
            'dqSbx': function (_0x51308b, _0x50f6b0) {
                return _0x51308b >= _0x50f6b0;
            },
            'xrVTV': function (_0x445c10, _0x76e57a) {
                return _0x445c10 <= _0x76e57a;
            },
            'SYBfw': function (_0x24a478, _0x7d6ab2) {
                return _0x24a478 / _0x7d6ab2;
            },
            'TyRph': function (_0x12e388, _0x1bf52c) {
                return _0x12e388 > _0x1bf52c;
            },
            'pHyXn': function (_0x4ee77d) {
                return _0x4ee77d();
            },
            'ovGfi': function (_0x2ad6f1, _0x15e3b8) {
                return _0x2ad6f1 === _0x15e3b8;
            },
            'nNpGR': function (_0x444ded, _0x47c4b4) {
                return _0x444ded(_0x47c4b4);
            },
            'XlOZE': function (_0x2bcc0b, _0x4faf1b) {
                return _0x2bcc0b + _0x4faf1b;
            },
            'qAvPP': function (_0x45d7b5) {
                return _0x45d7b5();
            },
            'gnXNq': function (_0x6227e7, _0x4b454b) {
                return _0x6227e7 === _0x4b454b;
            },
            'fmTlY': function (_0x5c0b4a, _0x3c0f76) {
                return _0x5c0b4a(_0x3c0f76);
            },
            'PbsRi': _0x1fbd97(0x877),
            'bvzre': function (_0xcefe3b, _0x7834aa) {
                return _0xcefe3b / _0x7834aa;
            },
            'XSLtR': function (_0x4364ed, _0xa1cecd, _0x4df554) {
                return _0x4364ed(_0xa1cecd, _0x4df554);
            },
            'bWjAY': function (_0x4d48d3) {
                return _0x4d48d3();
            },
            'kwWQk': function (_0x22f74c, _0x3c68a0) {
                return _0x22f74c >= _0x3c68a0;
            },
            'aZgnO': function (_0xe1ae80, _0xb50b0) {
                return _0xe1ae80 * _0xb50b0;
            },
            'bUmEa': function (_0x14b7fd, _0x374050) {
                return _0x14b7fd - _0x374050;
            },
            'IwpNg': function (_0x5b0948) {
                return _0x5b0948();
            },
            'iynpB': function (_0x4364db) {
                return _0x4364db();
            },
            'IXWFc': function (_0x7090f1, _0x65df0e) {
                return _0x7090f1 < _0x65df0e;
            },
            'obDuR': function (_0x45027c, _0x1a1bf5) {
                return _0x45027c(_0x1a1bf5);
            },
            'elQBm': function (_0x5cdffd, _0x5ce27d) {
                return _0x5cdffd(_0x5ce27d);
            },
            'zuZJF': function (_0x8632, _0xb0839b) {
                return _0x8632(_0xb0839b);
            },
            'NkpvS': function (_0x529c71, _0x31cb97, _0x2edf06) {
                return _0x529c71(_0x31cb97, _0x2edf06);
            },
            'LeGGO': _0x1fbd97(0x426),
            'eWjRu': function (_0x4faa8d, _0x184c66) {
                return _0x4faa8d === _0x184c66;
            },
            'cZEbH': _0x1fbd97(0x43a),
            'VBRLf': _0x1fbd97(0x528),
            'wCGdr': function (_0x45c046, _0x3ccbd8) {
                return _0x45c046 === _0x3ccbd8;
            },
            'ZPajy': function (_0x5b2b98, _0x298b6b) {
                return _0x5b2b98 + _0x298b6b;
            },
            'GTDuH': function (_0x194356, _0x3f5e06) {
                return _0x194356 * _0x3f5e06;
            },
            'zghkg': function (_0x6e1143, _0x22260f) {
                return _0x6e1143 === _0x22260f;
            },
            'XfKoi': _0x1fbd97(0x234),
            'ZHYHF': function (_0x477de6, _0x15860f) {
                return _0x477de6 >= _0x15860f;
            },
            'LpmcV': _0x1fbd97(0xe6),
            'mGzIL': _0x1fbd97(0x366),
            'XxPhJ': function (_0x3b9c9) {
                return _0x3b9c9();
            },
            'efutg': 'StakeoutFactionWatch',
            'QlKum': function (_0x34aad4, _0x3c4ba9) {
                return _0x34aad4 - _0x3c4ba9;
            },
            'eFKQl': _0x1fbd97(0x87d),
            'RfCyL': function (_0x4c31f2, _0x3950d3, _0x33f39c) {
                return _0x4c31f2(_0x3950d3, _0x33f39c);
            },
            'VVUHt': function (_0x463009, _0x372711) {
                return _0x463009 !== _0x372711;
            },
            'PtLGv': function (_0x1350c2, _0x3152bd, _0x50b433) {
                return _0x1350c2(_0x3152bd, _0x50b433);
            },
            'zpgEM': function (_0x5a24a5, _0x29272c) {
                return _0x5a24a5 === _0x29272c;
            },
            'kLrqU': function (_0x2568ed, _0x4f50a7) {
                return _0x2568ed(_0x4f50a7);
            },
            'auRWd': function (_0xb93c95, _0x2d2a4f) {
                return _0xb93c95 / _0x2d2a4f;
            },
            'TcFUc': function (_0x4fc293, _0x5e664b) {
                return _0x4fc293 + _0x5e664b;
            },
            'KDLyM': function (_0x5c51a2, _0x460f39) {
                return _0x5c51a2 * _0x460f39;
            },
            'sxuFp': function (_0x555c1f, _0x59a056) {
                return _0x555c1f(_0x59a056);
            },
            'MVjLQ': _0x1fbd97(0x2d7),
            'EBAmW': _0x1fbd97(0x7a7),
            'aXLeE': _0x1fbd97(0x2e2),
            'ozhyx': '⏳\x20Loading\x20faction\x20members...',
            'PAFGW': _0x1fbd97(0x3d4),
            'ISheU': function (_0x416b3b, _0x323d48, _0x1d14e3, _0x21bd76) {
                return _0x416b3b(_0x323d48, _0x1d14e3, _0x21bd76);
            },
            'Ncuez': function (_0x1ce264, _0xa9a374) {
                return _0x1ce264 - _0xa9a374;
            },
            'TQMJs': function (_0x46a508, _0x5d9ba2) {
                return _0x46a508 === _0x5d9ba2;
            },
            'AxEKo': 'attack',
            'UqSvG': function (_0x547327, _0x14ace1) {
                return _0x547327(_0x14ace1);
            },
            'tzUUI': _0x1fbd97(0x71b),
            'xsJHI': function (_0x1b1e91, _0xcd2a33) {
                return _0x1b1e91(_0xcd2a33);
            },
            'btYAG': function (_0x10bd59, _0x166493) {
                return _0x10bd59(_0x166493);
            },
            'wxqLd': 'stricken',
            'GDRBD': _0x1fbd97(0x219),
            'iVKSs': _0x1fbd97(0x708),
            'pumvz': function (_0x4bec67, _0x419247, _0x568d23, _0x1343cb, _0x1f949e) {
                return _0x4bec67(_0x419247, _0x568d23, _0x1343cb, _0x1f949e);
            },
            'SizOU': _0x1fbd97(0x78),
            'yjSwm': _0x1fbd97(0x1d9),
            'uWFxx': _0x1fbd97(0x24e),
            'NThKP': function (_0x26dc35, _0x47cab7, _0x340d09, _0x3186c1, _0x3fe4df) {
                return _0x26dc35(_0x47cab7, _0x340d09, _0x3186c1, _0x3fe4df);
            },
            'ITrtg': 'stakeout-chain-mode-select',
            'tknRG': 'stakeout-chain-pool-clear',
            'RtlGg': function (_0x406e75) {
                return _0x406e75();
            },
            'XLAGc': function (_0x45ebbf, _0x2a90a0) {
                return _0x45ebbf(_0x2a90a0);
            },
            'rNmqH': function (_0x318914) {
                return _0x318914();
            },
            'acztY': function (_0x3dca4c, _0x47468b) {
                return _0x3dca4c > _0x47468b;
            },
            'sdoMK': function (_0x29fe9c) {
                return _0x29fe9c();
            },
            'fqyNJ': _0x1fbd97(0x2fe),
            'JydLh': function (_0xae0ee1) {
                return _0xae0ee1();
            },
            'NUVBO': function (_0x4cd427, _0xb11e8f, _0x23cee2) {
                return _0x4cd427(_0xb11e8f, _0x23cee2);
            },
            'UXXxu': 'traders',
            'wkpRz': _0x1fbd97(0x773),
            'neRVF': _0x1fbd97(0x6e6),
            'lMsyt': function (_0x18213b, _0x4b4e04) {
                return _0x18213b === _0x4b4e04;
            },
            'vgoyN': 'settings-open',
            'fKeOA': function (_0x2f8c0f) {
                return _0x2f8c0f();
            },
            'OcKrW': _0x1fbd97(0x51f),
            'Zdjex': _0x1fbd97(0x7de),
            'BWJxL': _0x1fbd97(0x5c0),
            'uqenP': 'profile',
            'GfnNt': '⚔️\x20Attack\x20button\x20set\x20to\x20open\x20Direct\x20Attack\x20page.',
            'tdduk': function (_0x9ab9b4, _0x37136f) {
                return _0x9ab9b4 === _0x37136f;
            },
            'DouEL': _0x1fbd97(0x2c7),
            'BKfRl': function (_0x26b7ca) {
                return _0x26b7ca();
            },
            'AJFHL': function (_0x1a33dc) {
                return _0x1a33dc();
            },
            'AmNGG': function (_0x4d1006, _0x500e46) {
                return _0x4d1006 > _0x500e46;
            },
            'yOGDG': _0x1fbd97(0x449),
            'jWtcZ': function (_0x220ebb) {
                return _0x220ebb();
            },
            'rUIXn': function (_0x89709c) {
                return _0x89709c();
            },
            'jhidS': function (_0x4381c8, _0x34551f) {
                return _0x4381c8 === _0x34551f;
            },
            'Kgxwr': function (_0x23e47a, _0x26c107) {
                return _0x23e47a === _0x26c107;
            },
            'LAypl': function (_0x3e8765) {
                return _0x3e8765();
            },
            'MJHlz': _0x1fbd97(0x7f8),
            'nNzJI': function (_0x34214a, _0x14a664) {
                return _0x34214a + _0x14a664;
            },
            'crEux': _0x1fbd97(0x52d),
            'WlwZC': 'Early\x20Discharge\x20Active\x20(Monarch\x20HQ\x20Ranked\x20War)',
            'elpGG': _0x1fbd97(0x67a),
            'OqxOj': function (_0x2c59d1, _0x4d3e8) {
                return _0x2c59d1 > _0x4d3e8;
            },
            'NNlsa': function (_0x398d97, _0x4fc1f2) {
                return _0x398d97 - _0x4fc1f2;
            },
            'NewCq': function (_0x199b30, _0x728ce1) {
                return _0x199b30 > _0x728ce1;
            },
            'dqAbY': _0x1fbd97(0x7d6),
            'uJnsw': _0x1fbd97(0xaa),
            'gtJTr': function (_0x587bbf, _0x594770) {
                return _0x587bbf(_0x594770);
            },
            'squgI': _0x1fbd97(0x611),
            'xlVED': _0x1fbd97(0x2b3),
            'ObjPA': 'Pause',
            'QiApc': 'Scanning',
            'KmOZz': function (_0x19b343, _0x2b2786) {
                return _0x19b343 > _0x2b2786;
            },
            'qCcCO': _0x1fbd97(0x620),
            'zHxSq': _0x1fbd97(0x808),
            'jSgIb': function (_0x41d7df, _0xafb05f) {
                return _0x41d7df === _0xafb05f;
            },
            'vaviD': _0x1fbd97(0x5fe),
            'SmjxH': _0x1fbd97(0x570),
            'ZWfmo': _0x1fbd97(0x345),
            'tSlHb': function (_0x149563, _0x2dbd8c) {
                return _0x149563 === _0x2dbd8c;
            },
            'LkrNv': function (_0x265f09, _0x56a039) {
                return _0x265f09(_0x56a039);
            },
            'DXogD': _0x1fbd97(0x67d),
            'Bcdqq': _0x1fbd97(0x49f),
            'aTtZi': _0x1fbd97(0x3d5),
            'YwusU': _0x1fbd97(0x2ed),
            'xjqqV': _0x1fbd97(0x29a),
            'zEXbb': _0x1fbd97(0x801),
            'DHenb': _0x1fbd97(0xe5),
            'GeEkB': 'stakeout-btn-settings-warpass',
            'UEkfp': _0x1fbd97(0x836),
            'JPBIv': _0x1fbd97(0x24f),
            'GZzyF': _0x1fbd97(0x820),
            'uCyYL': _0x1fbd97(0x361),
            'usdBA': _0x1fbd97(0x6c4),
            'CqdcJ': _0x1fbd97(0x26e),
            'pfZGk': _0x1fbd97(0x6a8),
            'MWaye': _0x1fbd97(0x44a),
            'JuHjg': _0x1fbd97(0x3f6),
            'Oxbjx': _0x1fbd97(0x2ca),
            'vgdqP': _0x1fbd97(0x590),
            'fwZsp': 'stakeout-chain-set-base',
            'uWsnF': _0x1fbd97(0x814),
            'mHAoN': _0x1fbd97(0x299),
            'JdfYh': _0x1fbd97(0xd6),
            'FxsKo': _0x1fbd97(0x44c),
            'ufGVL': _0x1fbd97(0x457),
            'sRGrB': _0x1fbd97(0x29f),
            'jzWNZ': function (_0x35f1ca, _0x538179) {
                return _0x35f1ca === _0x538179;
            },
            'hmRDI': 'READY',
            'muGGz': function (_0x37c0fe, _0x6086a9) {
                return _0x37c0fe < _0x6086a9;
            },
            'RbDPB': function (_0x153c6b, _0x1050e4, _0x4172ba) {
                return _0x153c6b(_0x1050e4, _0x4172ba);
            },
            'Lukhp': function (_0x24cc6c, _0x21629e) {
                return _0x24cc6c(_0x21629e);
            },
            'HZkCq': function (_0x2f4af3, _0x32b11d) {
                return _0x2f4af3(_0x32b11d);
            },
            'Jlyfs': function (_0x324dbc, _0x535781) {
                return _0x324dbc === _0x535781;
            },
            'LYERG': function (_0x41263f, _0x112d71, _0x17fba1, _0x374412) {
                return _0x41263f(_0x112d71, _0x17fba1, _0x374412);
            },
            'uYyRa': _0x1fbd97(0x2fd),
            'jJFMP': function (_0x4a3b42, _0x1cb04d) {
                return _0x4a3b42 === _0x1cb04d;
            },
            'dzBbv': function (_0x18fcfe, _0x38f1f3) {
                return _0x18fcfe > _0x38f1f3;
            },
            'jVOlV': _0x1fbd97(0x62e),
            'FCIwt': 'span',
            'jsAcE': _0x1fbd97(0x18e),
            'lMVvU': function (_0xf09a68, _0x378aee) {
                return _0xf09a68 === _0x378aee;
            },
            'Jhhac': _0x1fbd97(0x266),
            'Hakmw': function (_0x39b182, _0x2a3dec) {
                return _0x39b182(_0x2a3dec);
            },
            'pRsFT': _0x1fbd97(0x2c9),
            'UuFmj': '\x20Detected\x20from\x20their\x20Torn\x20profile.',
            'XVuxF': 'Sector',
            'qwDwx': function (_0x1217ae, _0x261736) {
                return _0x1217ae === _0x261736;
            },
            'aewTE': _0x1fbd97(0x830),
            'SdYBt': function (_0x2c0c13, _0x3db87a) {
                return _0x2c0c13 === _0x3db87a;
            },
            'GfSmh': function (_0x19fcf1, _0x2da5af) {
                return _0x19fcf1 === _0x2da5af;
            },
            'jxVAd': _0x1fbd97(0x369),
            'ELWIK': _0x1fbd97(0x4d5),
            'NUvYx': _0x1fbd97(0x3c2),
            'oRqNP': _0x1fbd97(0x645),
            'kmoax': function (_0x2f9dc5, _0x4db711) {
                return _0x2f9dc5 === _0x4db711;
            },
            'QhgGS': function (_0x2e0c54, _0x2b731f) {
                return _0x2e0c54 > _0x2b731f;
            },
            'QoeTi': function (_0x467208, _0x885884) {
                return _0x467208 > _0x885884;
            },
            'WQzoZ': function (_0x109d90, _0x58c4c1) {
                return _0x109d90 === _0x58c4c1;
            },
            'zBglC': 'Any',
            'FBCHt': function (_0x3735f0, _0x1d6846) {
                return _0x3735f0 === _0x1d6846;
            },
            'jEomh': function (_0x33b74c, _0x2dac73) {
                return _0x33b74c(_0x2dac73);
            },
            'UPEoJ': _0x1fbd97(0x86b),
            'PuoZS': _0x1fbd97(0x6ab),
            'fJfSC': _0x1fbd97(0x251),
            'ABiYa': _0x1fbd97(0x69e),
            'xrbbw': function (_0x231437, _0x4e6ba8) {
                return _0x231437 === _0x4e6ba8;
            },
            'iSKmJ': function (_0x56ad5a, _0x4c12d7) {
                return _0x56ad5a === _0x4c12d7;
            },
            'nDUYu': function (_0x37a6b7, _0x3c5749) {
                return _0x37a6b7 < _0x3c5749;
            },
            'CQdeC': _0x1fbd97(0x74b),
            'sHyxs': function (_0x1ee1dd, _0xbe1257) {
                return _0x1ee1dd(_0xbe1257);
            },
            'GAlij': function (_0x466d0a, _0x58ddbc) {
                return _0x466d0a(_0x58ddbc);
            },
            'SctCo': function (_0x2acaef, _0x44b010) {
                return _0x2acaef(_0x44b010);
            },
            'wwIaT': function (_0x1572ef) {
                return _0x1572ef();
            },
            'mKNGT': function (_0x4fd3f7) {
                return _0x4fd3f7();
            },
            'wwiSB': function (_0x2c6f4d) {
                return _0x2c6f4d();
            },
            'vxDDl': _0x1fbd97(0x623),
            'ZzKto': _0x1fbd97(0x7a3),
            'NeQLC': _0x1fbd97(0x179),
            'fTlWO': _0x1fbd97(0x67f),
            'BxNqL': _0x1fbd97(0x550),
            'iYRZh': _0x1fbd97(0x7a2),
            'gztqZ': _0x1fbd97(0x4c0),
            'mcoSA': function (_0x2d5e90, _0x374a9c) {
                return _0x2d5e90 / _0x374a9c;
            },
            'mmrQu': function (_0x3b011e, _0x4de571) {
                return _0x3b011e === _0x4de571;
            },
            'FaBrJ': function (_0x515d26, _0x2d33b6) {
                return _0x515d26 - _0x2d33b6;
            },
            'DZryk': function (_0x4bf367, _0x2c0e4b) {
                return _0x4bf367 <= _0x2c0e4b;
            },
            'kqDoq': function (_0x1ac72f) {
                return _0x1ac72f();
            },
            'VJWhM': function (_0x37c0d4, _0x40098b) {
                return _0x37c0d4 === _0x40098b;
            },
            'VEQaW': function (_0x48828e, _0x5866ed, _0xfbe9dc) {
                return _0x48828e(_0x5866ed, _0xfbe9dc);
            },
            'BhMDu': 'poll-request',
            'FFlLe': function (_0x30a6fa, _0x1ac1af) {
                return _0x30a6fa === _0x1ac1af;
            },
            'ukWaB': function (_0x346526, _0x1c1bbe) {
                return _0x346526 % _0x1c1bbe;
            },
            'FCmSJ': function (_0x333cb4, _0x210710) {
                return _0x333cb4 === _0x210710;
            },
            'tzxau': function (_0x30bfdb, _0xa981be, _0x138e7e) {
                return _0x30bfdb(_0xa981be, _0x138e7e);
            },
            'WkMkt': function (_0x3df8be) {
                return _0x3df8be();
            },
            'pPJBg': _0x1fbd97(0x43f),
            'NZWcV': function (_0x6b3d44, _0xb0faae) {
                return _0x6b3d44 + _0xb0faae;
            },
            'DPNVd': _0x1fbd97(0x7ab),
            'fpNEV': _0x1fbd97(0x737),
            'iCCSl': function (_0x3b3b04) {
                return _0x3b3b04();
            },
            'dZAoN': function (_0x352c89, _0x3368d3) {
                return _0x352c89 === _0x3368d3;
            },
            'wsmax': function (_0x23fe1b) {
                return _0x23fe1b();
            },
            'gLpeE': function (_0x9750bf) {
                return _0x9750bf();
            },
            'zlNoG': function (_0xf097ae) {
                return _0xf097ae();
            },
            'budZw': function (_0x17346e) {
                return _0x17346e();
            },
            'Zeltt': function (_0x51ebaf, _0x386903, _0x551a6f) {
                return _0x51ebaf(_0x386903, _0x551a6f);
            },
            'XHvEB': 'visibilitychange',
            'FjUkX': function (_0x45af88, _0x4fb80d, _0x22d696) {
                return _0x45af88(_0x4fb80d, _0x22d696);
            },
            'mTYto': function (_0x26752b) {
                return _0x26752b();
            },
            'QHfwM': _0x1fbd97(0x386),
            'LnkhS': _0x1fbd97(0x4f2),
            'Ajwsj': _0x1fbd97(0x798),
            'bjmTA': _0x1fbd97(0x467),
            'BCmBc': function (_0x45ad3e, _0x364c0d) {
                return _0x45ad3e * _0x364c0d;
            },
            'TYWlt': function (_0x36f854, _0x127019) {
                return _0x36f854 * _0x127019;
            },
            'BonfH': function (_0x264ca4, _0xc91232) {
                return _0x264ca4 * _0xc91232;
            },
            'sNpDB': function (_0x2fbead, _0x23e1f4) {
                return _0x2fbead * _0x23e1f4;
            },
            'raAgg': function (_0x68fa6, _0x3ae8a0, _0x3b8c16) {
                return _0x68fa6(_0x3ae8a0, _0x3b8c16);
            },
            'QvoZM': _0x1fbd97(0x779),
            'TDYmW': _0x1fbd97(0x14a),
            'PeNIO': _0x1fbd97(0x46b),
            'NQvVZ': _0x1fbd97(0x2a2),
            'pVhrM': 'snapshot',
            'XNkOZ': 'siren',
            'ksvsw': function (_0x3490da, _0x383261, _0x3fb6c5) {
                return _0x3490da(_0x383261, _0x3fb6c5);
            },
            'rYfVj': function (_0x31c119, _0x26cb99) {
                return _0x31c119 < _0x26cb99;
            },
            'ndEwf': function (_0x5cdff7, _0x4d8a30) {
                return _0x5cdff7 + _0x4d8a30;
            },
            'nfhez': function (_0x1fb6bd, _0x56084f) {
                return _0x1fb6bd * _0x56084f;
            },
            'kqoqE': function (_0x96f6ac, _0x3fae15) {
                return _0x96f6ac - _0x3fae15;
            },
            'IXAsT': function (_0x5af20d, _0x32ec85) {
                return _0x5af20d === _0x32ec85;
            },
            'rJOXw': 'click',
            'DpQNk': 'keydown',
            'eDyLY': _0x1fbd97(0x1cb),
            'EZenI': _0x1fbd97(0x5b9),
            'ifKLb': function (_0x46585f, _0x53275d) {
                return _0x46585f(_0x53275d);
            },
            'uQpqk': function (_0x5d0958, _0x3c8b61) {
                return _0x5d0958 * _0x3c8b61;
            },
            'fYqjS': function (_0x54ed9d, _0x1907f8, _0x2316a5) {
                return _0x54ed9d(_0x1907f8, _0x2316a5);
            },
            'FKHvi': _0x1fbd97(0x7f2),
            'XjXKd': function (_0xc2a5dc, _0x35b53a, _0x4e7576) {
                return _0xc2a5dc(_0x35b53a, _0x4e7576);
            },
            'pBpXN': function (_0x1a15de, _0x247895, _0x12dc3e) {
                return _0x1a15de(_0x247895, _0x12dc3e);
            },
            'JAHKs': function (_0x45d3c7, _0x5332f2, _0x247783) {
                return _0x45d3c7(_0x5332f2, _0x247783);
            },
            'OVmRp': function (_0xffd9f2, _0x1f731c) {
                return _0xffd9f2 === _0x1f731c;
            }
        };
    if (window[_0x1fbd97(0x471)] || document[_0x1fbd97(0x72e)][_0x1fbd97(0x658)]['stakeoutRadar'])
        return;
    window[_0x1fbd97(0x471)] = !![], document[_0x1fbd97(0x72e)][_0x1fbd97(0x658)][_0x1fbd97(0x793)] = '1';
    const _0xeb4109 = _0x1fbd97(0x91), _0x28f132 = _0x1fbd97(0x3ff), _0x3497c9 = _0x4577e7['QHfwM'], _0x4e644f = 0x1;
    function _0x93d2c1(_0x46f795) {
        const _0x5c1a54 = _0x1fbd97;
        try {
            const _0x2aaec9 = document['getElementById'](_0x5c1a54(0x7b9));
            if (_0x2aaec9)
                _0x2aaec9[_0x5c1a54(0x172)]();
            const _0x28b3a7 = document[_0x5c1a54(0x35d)](_0x4577e7['tFQxu']);
            _0x28b3a7['id'] = _0x5c1a54(0x7b9), _0x28b3a7['className'] = _0x4577e7['gVqGY'](typeof _0xb2691a, _0x4577e7[_0x5c1a54(0x3e5)]) && _0xb2691a[_0x5c1a54(0x318)] === _0x4577e7[_0x5c1a54(0x45a)] ? _0x4577e7[_0x5c1a54(0x29d)] : _0x4577e7[_0x5c1a54(0x374)], _0x28b3a7[_0x5c1a54(0x1be)] = _0x5c1a54(0x24a) + _0x46f795 + _0x5c1a54(0x439);
            const _0x14c80f = _0x28b3a7['querySelector'](_0x4577e7['WzsdG']);
            if (_0x14c80f)
                _0x14c80f[_0x5c1a54(0x1f7)] = () => _0x28b3a7[_0x5c1a54(0x172)]();
            document[_0x5c1a54(0x198)]['appendChild'](_0x28b3a7), _0x4577e7[_0x5c1a54(0x536)](setTimeout, () => {
                const _0x1b407e = _0x5c1a54;
                if (_0x28b3a7['parentNode'])
                    _0x28b3a7[_0x1b407e(0x172)]();
            }, 0xfa0);
        } catch (_0x35a08f) {
            console[_0x5c1a54(0x760)](_0x4577e7[_0x5c1a54(0x6b3)], _0x46f795);
        }
    }
    function _0x408e6f(_0x4d8830, _0x473ef7) {
        const _0x8a78f1 = _0x1fbd97, _0xa27ecb = String(_0x4d8830)[_0x8a78f1(0x79f)]('.')[_0x8a78f1(0x33c)](_0x55064c => parseInt(_0x55064c, 0xa) || 0x0), _0x3503c4 = String(_0x473ef7)['split']('.')[_0x8a78f1(0x33c)](_0x57d6db => parseInt(_0x57d6db, 0xa) || 0x0), _0x5a4e69 = Math[_0x8a78f1(0x3ab)](_0xa27ecb[_0x8a78f1(0x5a5)], _0x3503c4[_0x8a78f1(0x5a5)]);
        for (let _0x89930 = 0x0; _0x89930 < _0x5a4e69; _0x89930++) {
            const _0xa7cb4 = _0xa27ecb[_0x89930] || 0x0, _0x204094 = _0x3503c4[_0x89930] || 0x0;
            if (_0x4577e7[_0x8a78f1(0x137)](_0xa7cb4, _0x204094))
                return !![];
            if (_0x4577e7[_0x8a78f1(0xf5)](_0xa7cb4, _0x204094))
                return ![];
        }
        return ![];
    }
    function _0x3f6f63(_0x184f05 = ![]) {
        const _0x52673d = _0x1fbd97, _0x2fd9a5 = {
                'Flqeq': function (_0x535487, _0x436554) {
                    const _0x4d4426 = _0x5ca8;
                    return _0x4577e7[_0x4d4426(0x799)](_0x535487, _0x436554);
                },
                'cGERB': _0x52673d(0x430),
                'gXPPK': function (_0x20b3aa, _0x1eaad4) {
                    const _0x10c491 = _0x52673d;
                    return _0x4577e7[_0x10c491(0x288)](_0x20b3aa, _0x1eaad4);
                }
            };
        _0x184f05 && _0x93d2c1('🔄\x20Checking\x20GitHub\x20for\x20radar\x20updates...');
        const _0x4c054c = _0x3497c9 + _0x52673d(0x880) + Date['now'](), _0x3162eb = _0x38bd1e => {
                const _0x4144d1 = _0x52673d;
                try {
                    const _0x13f15 = _0x38bd1e[_0x4144d1(0x1e9)](/@version\s+([0-9.]+)/);
                    if (!_0x13f15) {
                        if (_0x184f05)
                            _0x4577e7[_0x4144d1(0xd1)](_0x93d2c1, _0x4577e7['uLZUY']);
                        return;
                    }
                    const _0x1c472f = _0x13f15[0x1][_0x4144d1(0x72)]();
                    _0x48509d('last_update_check_time', Date[_0x4144d1(0x6d4)]()), _0x48509d('latest_remote_version', _0x1c472f), _0x4577e7['ocfBP'](_0x408e6f, _0x1c472f, _0xeb4109) ? _0x4577e7[_0x4144d1(0x1f8)](_0x2fd756, _0x1c472f, _0x184f05) : _0x184f05 && _0x93d2c1(_0x4144d1(0x1d6) + _0xeb4109 + ')!');
                } catch (_0x4ff5fd) {
                    console[_0x4144d1(0x313)](_0x4577e7[_0x4144d1(0x1ec)], _0x4ff5fd);
                    if (_0x184f05)
                        _0x4577e7[_0x4144d1(0xd1)](_0x93d2c1, _0x4144d1(0x18c) + _0x4ff5fd[_0x4144d1(0x1f4)]);
                }
            };
        if (typeof GM_xmlhttpRequest === _0x52673d(0x18b)) {
            const _0x560386 = {};
            _0x560386[_0x52673d(0xfd)] = _0x52673d(0x4c3), _0x560386['Pragma'] = _0x52673d(0x651), GM_xmlhttpRequest({
                'method': _0x4577e7['OXZOg'],
                'url': _0x4c054c,
                'headers': _0x560386,
                'onload': function (_0x1ffb01) {
                    const _0x4b992a = _0x52673d;
                    if (_0x1ffb01[_0x4b992a(0x730)] === 0xc8 && _0x1ffb01[_0x4b992a(0x38a)])
                        _0x2fd9a5[_0x4b992a(0x55a)](_0x3162eb, _0x1ffb01[_0x4b992a(0x38a)]);
                    else {
                        if (_0x184f05)
                            _0x93d2c1(_0x4b992a(0x37b) + _0x1ffb01['status'] + ')');
                    }
                },
                'onerror': function (_0x24999c) {
                    const _0x42d5c7 = _0x52673d, _0x29eed5 = {};
                    _0x29eed5[_0x42d5c7(0x65e)] = _0x42d5c7(0x121);
                    const _0x4f32d2 = _0x29eed5;
                    console[_0x42d5c7(0x313)](_0x42d5c7(0x831), _0x24999c), _0x4577e7['dxoXM'](fetch, _0x4c054c, { 'cache': _0x4577e7[_0x42d5c7(0x470)] })['then'](_0x559c15 => _0x559c15['text']())[_0x42d5c7(0x326)](_0x3162eb)[_0x42d5c7(0x776)](() => {
                        if (_0x184f05)
                            _0x93d2c1(_0x4f32d2['RLEPi']);
                    });
                }
            });
        } else {
            const _0x5e8c49 = {};
            _0x5e8c49[_0x52673d(0x2a2)] = _0x52673d(0x53a), fetch(_0x4c054c, _0x5e8c49)[_0x52673d(0x326)](_0x44d485 => {
                const _0x487255 = _0x52673d;
                if (!_0x44d485['ok'])
                    throw new Error(_0x487255(0x337) + _0x44d485[_0x487255(0x730)]);
                return _0x44d485[_0x487255(0x4b2)]();
            })['then'](_0x3162eb)[_0x52673d(0x776)](_0x13eb1b => {
                const _0x5dc2e7 = _0x52673d;
                console['error'](_0x2fd9a5[_0x5dc2e7(0x575)], _0x13eb1b);
                if (_0x184f05)
                    _0x2fd9a5[_0x5dc2e7(0x32f)](_0x93d2c1, _0x5dc2e7(0x121));
            });
        }
    }
    function _0x2fd756(_0x5a3c23, _0x3872fc = ![]) {
        const _0x229e3b = _0x1fbd97;
        try {
            const _0x1e3579 = _0x229e3b(0x1ae) + _0x5a3c23;
            if (!_0x3872fc && sessionStorage[_0x229e3b(0xc5)](_0x1e3579))
                return;
            if (document[_0x229e3b(0x39d)](_0x229e3b(0x161)) || !document['body'])
                return;
            const _0x505672 = document[_0x229e3b(0x35d)](_0x229e3b(0x1b9));
            _0x505672['id'] = _0x229e3b(0x161), _0x505672[_0x229e3b(0x2c5)][_0x229e3b(0x5d6)] = 'position:\x20fixed;\x20top:\x208px;\x20right:\x2012px;\x20z-index:\x202147483000;\x20display:\x20flex;\x20align-items:\x20center;\x20gap:\x208px;\x20' + _0x4577e7[_0x229e3b(0x7a0)] + _0x4577e7[_0x229e3b(0x5d2)], _0x505672['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🚀\x20Stakeout\x20Radar\x20<b>v' + _0x5a3c23 + _0x229e3b(0x88) + _0xeb4109 + _0x229e3b(0xbc) + _0x28f132 + '\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x22\x20style=\x22background:\x20#16a34a;\x20border:\x201px\x20solid\x20#22c55e;\x20color:\x20#fff;\x20font-weight:\x20800;\x20border-radius:\x204px;\x20padding:\x202px\x2010px;\x20cursor:\x20pointer;\x20text-decoration:\x20none;\x22>Update\x20now</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20data-act=\x22later\x22\x20style=\x22background:\x20transparent;\x20border:\x201px\x20solid\x20#475569;\x20color:\x20#94a3b8;\x20border-radius:\x204px;\x20padding:\x202px\x208px;\x20cursor:\x20pointer;\x22>Later</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x505672[_0x229e3b(0x1f7)] = _0x56ad54 => {
                const _0x3f7289 = _0x229e3b, _0x29fce9 = _0x56ad54[_0x3f7289(0x1b6)]?.[_0x3f7289(0x658)]?.[_0x3f7289(0x520)];
                if (_0x4577e7[_0x3f7289(0x558)](_0x29fce9, _0x4577e7['RFdfh']))
                    _0x93d2c1('🚀\x20Opening\x20v' + _0x5a3c23 + _0x3f7289(0xd9));
                else {
                    if (_0x4577e7[_0x3f7289(0x558)](_0x29fce9, _0x4577e7[_0x3f7289(0x3d1)])) {
                        try {
                            sessionStorage[_0x3f7289(0x20d)](_0x1e3579, '1');
                        } catch (_0x36e0bc) {
                        }
                        _0x505672[_0x3f7289(0x172)]();
                    }
                }
            }, document[_0x229e3b(0x198)][_0x229e3b(0x159)](_0x505672);
        } catch (_0x1eb623) {
            console[_0x229e3b(0x257)](_0x4577e7[_0x229e3b(0x255)], _0x1eb623);
        }
    }
    function _0x1fabf0() {
        const _0x5dc6d1 = _0x1fbd97;
        try {
            const _0x417736 = _0x4577e7['hutGc'](_0xfadf01, _0x4577e7[_0x5dc6d1(0x3a7)], null);
            if (_0x417736 && _0x408e6f(_0x417736, _0xeb4109))
                _0x4577e7[_0x5dc6d1(0xdb)](_0x2fd756, _0x417736);
            const _0x45ab7b = _0xfadf01(_0x5dc6d1(0x6db), 0x0);
            _0x4577e7[_0x5dc6d1(0x647)](_0x4577e7[_0x5dc6d1(0x75b)](Date['now'](), _0x45ab7b), _0x4577e7['LqxZv'](0x1e, 0x3e8)) && (_0x48509d(_0x5dc6d1(0x6db), Date[_0x5dc6d1(0x6d4)]()), _0x3f6f63(![]));
        } catch (_0x30013c) {
        }
    }
    function _0x33751e(_0x3027cc) {
        const _0x2c8f97 = _0x1fbd97;
        try {
            if (typeof GM_addStyle === _0x4577e7[_0x2c8f97(0x5ab)])
                _0x4577e7[_0x2c8f97(0x7b5)](GM_addStyle, _0x3027cc);
            else {
                const _0x147ec8 = document['createElement'](_0x4577e7[_0x2c8f97(0x4ea)]);
                _0x147ec8[_0x2c8f97(0x6c)] = _0x2c8f97(0x718), _0x147ec8[_0x2c8f97(0x235)] = _0x3027cc, (document[_0x2c8f97(0x302)] || document['documentElement'])[_0x2c8f97(0x159)](_0x147ec8);
            }
        } catch (_0x25a5a5) {
            console[_0x2c8f97(0x313)]('[Stakeout]\x20Style\x20error:', _0x25a5a5);
        }
    }
    function _0xfadf01(_0x2f3dad, _0x18cd3b) {
        const _0x27bafd = _0x1fbd97;
        try {
            if (_0x4577e7[_0x27bafd(0x85b)](typeof GM_getValue, _0x27bafd(0x18b))) {
                const _0x49c99b = GM_getValue(_0x2f3dad, null);
                if (_0x49c99b !== null && _0x49c99b !== undefined)
                    return _0x49c99b;
            }
        } catch (_0x9e40c7) {
        }
        try {
            const _0x943555 = localStorage[_0x27bafd(0xc5)]('stakeout_' + _0x2f3dad);
            if (_0x4577e7[_0x27bafd(0x38c)](_0x943555, null) && _0x943555 !== undefined)
                try {
                    return JSON[_0x27bafd(0x850)](_0x943555);
                } catch (_0xee5b8a) {
                    return _0x943555;
                }
        } catch (_0x2e9702) {
        }
        return _0x18cd3b;
    }
    function _0x48509d(_0x2c105a, _0x2b69c8) {
        const _0xa57566 = _0x1fbd97;
        try {
            if (typeof GM_setValue === 'function')
                _0x4577e7[_0xa57566(0x476)](GM_setValue, _0x2c105a, _0x2b69c8);
        } catch (_0x59e2b1) {
        }
        try {
            localStorage[_0xa57566(0x20d)](_0xa57566(0x6eb) + _0x2c105a, JSON[_0xa57566(0x7d8)](_0x2b69c8));
        } catch (_0x56f61f) {
        }
    }
    function _0x48ef7f() {
        const _0x4e77f5 = _0x1fbd97;
        try {
            const _0x44565a = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
            if (_0x44565a[_0x4e77f5(0x617)] && _0x44565a['topBannerInitData'][_0x4e77f5(0x170)]) {
                const _0x12758c = _0x44565a[_0x4e77f5(0x617)][_0x4e77f5(0x170)];
                if (_0x12758c['id'])
                    return String(_0x12758c['id']);
                if (_0x12758c[_0x4e77f5(0x4f0)])
                    return _0x4577e7['QZIQR'](String, _0x12758c['player_id']);
            }
        } catch (_0x58a15d) {
        }
        try {
            const _0x4524a2 = document[_0x4e77f5(0x82a)][_0x4e77f5(0x1e9)](/(?:^|;\s*)uid=(\d+)/);
            if (_0x4524a2 && _0x4524a2[0x1])
                return String(_0x4524a2[0x1]);
        } catch (_0x480477) {
        }
        try {
            const _0x4be054 = document[_0x4e77f5(0x25f)](_0x4e77f5(0x7c1) + _0x4e77f5(0x73c) + _0x4577e7[_0x4e77f5(0x3b8)]), _0x5c4384 = _0x4be054?.['href']?.[_0x4e77f5(0x1e9)](/XID=(\d+)/i);
            if (_0x5c4384 && _0x5c4384[0x1])
                return String(_0x5c4384[0x1]);
        } catch (_0x8d7c95) {
        }
        try {
            const _0xee4561 = document['getElementById'](_0x4577e7[_0x4e77f5(0x29b)]);
            if (_0xee4561 && _0xee4561[_0x4e77f5(0x1d5)]) {
                const _0xde3648 = JSON[_0x4e77f5(0x850)](_0xee4561[_0x4e77f5(0x1d5)]);
                if (_0xde3648 && _0xde3648['id'])
                    return _0x4577e7[_0x4e77f5(0x288)](String, _0xde3648['id']);
            }
        } catch (_0x4f9f4c) {
        }
        return null;
    }
    function _0x5f06fd() {
        const _0x1f8372 = _0x1fbd97;
        try {
            const _0x3bd5f6 = _0x4577e7[_0x1f8372(0x38c)](typeof unsafeWindow, _0x1f8372(0x339)) ? unsafeWindow : window;
            if (_0x3bd5f6[_0x1f8372(0x617)] && _0x3bd5f6['topBannerInitData']['user']) {
                const _0x4cc893 = _0x3bd5f6[_0x1f8372(0x617)][_0x1f8372(0x170)], _0x2422aa = _0x4cc893[_0x1f8372(0x102)] || _0x4cc893[_0x1f8372(0x734)] || _0x4cc893[_0x1f8372(0x434)] || _0x4cc893[_0x1f8372(0x2d3)];
                if (_0x2422aa && _0x4577e7[_0x1f8372(0x85b)](typeof _0x2422aa, _0x4577e7[_0x1f8372(0x1f1)]) && _0x4577e7[_0x1f8372(0x647)](_0x2422aa[_0x1f8372(0x72)]()['length'], 0x0)) {
                    const _0x121baf = _0x2422aa['trim']();
                    if (_0x4577e7[_0x1f8372(0x38c)](_0x121baf['toLowerCase'](), _0x1f8372(0x12a)) && _0x4577e7[_0x1f8372(0x287)](_0x121baf[_0x1f8372(0x86f)](), _0x4577e7[_0x1f8372(0x494)]))
                        return _0x48509d(_0x1f8372(0x2b7), _0x121baf), _0x121baf;
                }
            }
        } catch (_0x252d34) {
        }
        try {
            const _0xa646ec = [
                _0x4577e7[_0x1f8372(0x353)],
                _0x4577e7['MInaQ'],
                '#sidebarroot\x20[class*=\x22userInformation\x22]\x20a',
                _0x4577e7['JVqzt'],
                _0x4577e7[_0x1f8372(0x406)],
                _0x4577e7['SBKDb'],
                _0x1f8372(0xac)
            ];
            for (const _0x319fc9 of _0xa646ec) {
                const _0x28a3e2 = document[_0x1f8372(0x25f)](_0x319fc9);
                if (_0x28a3e2 && _0x28a3e2[_0x1f8372(0x235)]) {
                    const _0x2ab17a = _0x28a3e2[_0x1f8372(0x235)][_0x1f8372(0x72)]()['replace'](/\s*\[\d+\]\s*$/, '')[_0x1f8372(0x72)]();
                    if (_0x2ab17a && _0x4577e7[_0x1f8372(0x237)](_0x2ab17a[_0x1f8372(0x5a5)], 0x2) && _0x2ab17a[_0x1f8372(0x86f)]() !== 'guest' && _0x2ab17a['toLowerCase']() !== _0x1f8372(0x5c6) && !_0x2ab17a[_0x1f8372(0x1b1)](_0x4577e7[_0x1f8372(0x1b0)]))
                        return _0x48509d(_0x4577e7[_0x1f8372(0x360)], _0x2ab17a), _0x2ab17a;
                }
            }
        } catch (_0xa88d28) {
        }
        try {
            const _0x3596bf = document[_0x1f8372(0x25f)](_0x1f8372(0xe0));
            if (_0x3596bf && _0x3596bf[_0x1f8372(0x235)]) {
                const _0xa99264 = _0x3596bf['textContent'][_0x1f8372(0x72)]()[_0x1f8372(0x78f)](/\s*\[\d+\]\s*$/, '')[_0x1f8372(0x72)]();
                if (_0xa99264 && _0xa99264[_0x1f8372(0x86f)]() !== _0x4577e7['liPjz'] && _0xa99264[_0x1f8372(0x86f)]() !== _0x1f8372(0x5c6))
                    return _0x48509d(_0x4577e7['eFUgW'], _0xa99264), _0xa99264;
            }
        } catch (_0x1995c5) {
        }
        const _0x3a9178 = _0xfadf01(_0x1f8372(0x2b7), null);
        if (_0x3a9178 && _0x4577e7['ZSUbd'](typeof _0x3a9178, _0x4577e7['qSFNe']) && _0x4577e7[_0x1f8372(0x340)](_0x3a9178[_0x1f8372(0x72)]()[_0x1f8372(0x5a5)], 0x0)) {
            const _0x5701cc = _0x3a9178[_0x1f8372(0x72)]();
            if (_0x5701cc[_0x1f8372(0x86f)]() !== _0x1f8372(0x12a) && _0x5701cc[_0x1f8372(0x86f)]() !== _0x4577e7['FMDLX'])
                return _0x5701cc;
        }
        return null;
    }
    const _0x559b9b = _0x1fbd97(0x330), _0x12ef2b = _0x1fbd97(0x589), _0x468fd7 = {};
    _0x468fd7['pid'] = 0x3ddf12, _0x468fd7[_0x1fbd97(0x102)] = 'Merogie';
    const _0x22a7f5 = _0x468fd7, _0x3bd8a7 = 0x1, _0x20ebc0 = {};
    _0x20ebc0['code'] = 'SP', _0x20ebc0[_0x1fbd97(0x5d3)] = 'sp', _0x20ebc0[_0x1fbd97(0x284)] = '🎯', _0x20ebc0[_0x1fbd97(0x102)] = _0x1fbd97(0x668), _0x20ebc0[_0x1fbd97(0x30d)] = _0x4577e7[_0x1fbd97(0x4e8)];
    const _0x46c30f = {};
    _0x46c30f[_0x1fbd97(0x6f8)] = 'FW', _0x46c30f[_0x1fbd97(0x5d3)] = 'fw', _0x46c30f[_0x1fbd97(0x284)] = '🏴', _0x46c30f[_0x1fbd97(0x102)] = _0x1fbd97(0x6f), _0x46c30f[_0x1fbd97(0x30d)] = _0x1fbd97(0x186);
    const _0x553b6c = {};
    _0x553b6c[_0x1fbd97(0x6f8)] = 'CK', _0x553b6c[_0x1fbd97(0x5d3)] = 'ck', _0x553b6c[_0x1fbd97(0x284)] = '🔗', _0x553b6c[_0x1fbd97(0x102)] = _0x1fbd97(0x46e), _0x553b6c['desc'] = _0x4577e7['Ajwsj'];
    const _0x403635 = {};
    _0x403635[_0x1fbd97(0x6f8)] = 'TW', _0x403635[_0x1fbd97(0x5d3)] = 'tw', _0x403635['icon'] = '💼', _0x403635['name'] = _0x4577e7[_0x1fbd97(0x52e)], _0x403635['desc'] = _0x1fbd97(0x390);
    const _0x4efbe3 = [
            _0x20ebc0,
            _0x46c30f,
            _0x553b6c,
            _0x403635
        ], _0x2a1003 = _0x4577e7[_0x1fbd97(0x210)](_0x4577e7['TYWlt'](0x6, 0xe10), 0x3e8), _0x1c0d17 = _0x4577e7[_0x1fbd97(0x1a5)](0x1e, 0x3e8), _0x117358 = _0x4577e7['sNpDB'](0xa * 0x3c, 0x3e8), _0x7fa178 = {};
    _0x7fa178[_0x1fbd97(0x34e)] = ![], _0x7fa178[_0x1fbd97(0x876)] = null, _0x7fa178['features'] = {}, _0x7fa178[_0x1fbd97(0xb4)] = 0x0;
    let _0x33f693 = _0x7fa178, _0x53a18c = _0x4577e7[_0x1fbd97(0x754)](_0xfadf01, 'license_identity', null), _0x54773b = ![];
    const _0x3b0229 = 0x2 * 0x3c * 0x3e8;
    function _0x3ec8aa(_0x57f3ad) {
        const _0x3d29a3 = _0x1fbd97;
        if (_0x4577e7[_0x3d29a3(0x38c)](_0xfadf01('license_last_error', ''), _0x57f3ad))
            _0x48509d(_0x3d29a3(0xab), _0x57f3ad);
    }
    let _0x4741f3 = 0x0;
    function _0xd0c028() {
        const _0x2db17d = _0x1fbd97;
        return !/REPLACE_WITH/[_0x2db17d(0x66b)](_0x559b9b) && !/REPLACE_WITH/['test'](_0x12ef2b);
    }
    function _0x46e968(_0x30bd74) {
        const _0x1f9b79 = _0x1fbd97, _0x455038 = _0x4577e7['tQxfI'](String, _0x30bd74)['replace'](/-/g, '+')[_0x1f9b79(0x78f)](/_/g, '/'), _0x4dfbbf = _0x4577e7[_0x1f9b79(0x799)](atob, _0x4577e7['FmXby'](_0x455038, '='[_0x1f9b79(0x538)]((0x4 - _0x4577e7[_0x1f9b79(0x150)](_0x455038['length'], 0x4)) % 0x4)));
        return Uint8Array[_0x1f9b79(0x8d)](_0x4dfbbf, _0x207c69 => _0x207c69['charCodeAt'](0x0));
    }
    async function _0x18297f(_0x53673c) {
        const _0x4e0ad7 = _0x1fbd97;
        try {
            const [_0x116aef, _0x9b3875] = _0x4577e7[_0x4e0ad7(0x81d)](String, _0x4577e7[_0x4e0ad7(0x5e5)](_0x53673c, ''))['split']('.');
            if (!_0x116aef || !_0x9b3875 || !_0x4577e7[_0x4e0ad7(0x22a)](_0xd0c028))
                return null;
            const _0x5cd028 = await crypto['subtle'][_0x4e0ad7(0x704)](_0x4577e7[_0x4e0ad7(0x349)], _0x4577e7['QZIQR'](_0x46e968, _0x12ef2b), {
                    'name': _0x4e0ad7(0xf8),
                    'namedCurve': _0x4577e7[_0x4e0ad7(0x1c0)]
                }, ![], [_0x4577e7[_0x4e0ad7(0x215)]]), _0x4709ce = {};
            _0x4709ce[_0x4e0ad7(0x102)] = _0x4e0ad7(0xf8), _0x4709ce['hash'] = _0x4577e7[_0x4e0ad7(0x609)];
            const _0x462bb7 = await crypto[_0x4e0ad7(0x774)][_0x4e0ad7(0x606)](_0x4709ce, _0x5cd028, _0x46e968(_0x9b3875), new TextEncoder()[_0x4e0ad7(0x213)](_0x116aef));
            return _0x462bb7 ? JSON[_0x4e0ad7(0x850)](new TextDecoder()[_0x4e0ad7(0x7d0)](_0x46e968(_0x116aef))) : null;
        } catch (_0x2b1277) {
            return null;
        }
    }
    async function _0x45e9b4(_0x457495) {
        const _0x35dbe8 = _0x1fbd97, _0x133ac6 = await _0x18297f(_0x457495), _0x4813b8 = Math[_0x35dbe8(0x3ee)](_0x4577e7['NqyyT'](Date[_0x35dbe8(0x6d4)](), 0x3e8)), _0x2bf60a = _0x4577e7[_0x35dbe8(0x725)](_0x48ef7f), _0x45248c = _0x4577e7[_0x35dbe8(0x6ff)](Boolean, _0x133ac6) && _0x133ac6[_0x35dbe8(0xb4)] > _0x4813b8 && Boolean(_0x53a18c) && _0x4577e7['JQkaN'](String(_0x133ac6[_0x35dbe8(0x876)]), _0x4577e7['cOcwx'](String, _0x53a18c[_0x35dbe8(0x876)])) && (!_0x2bf60a || String(_0x2bf60a) === String(_0x133ac6['pid']));
        if (_0x45248c) {
            const _0x13d1e0 = {};
            _0x13d1e0[_0x35dbe8(0x34e)] = !![], _0x13d1e0[_0x35dbe8(0x876)] = _0x133ac6[_0x35dbe8(0x876)], _0x13d1e0[_0x35dbe8(0x64f)] = _0x133ac6[_0x35dbe8(0x64f)] || {}, _0x13d1e0[_0x35dbe8(0xb4)] = _0x133ac6[_0x35dbe8(0xb4)], _0x33f693 = _0x13d1e0;
        } else {
            const _0x1bdb59 = {};
            _0x1bdb59[_0x35dbe8(0x34e)] = ![], _0x1bdb59[_0x35dbe8(0x876)] = null, _0x1bdb59[_0x35dbe8(0x64f)] = {}, _0x1bdb59[_0x35dbe8(0xb4)] = 0x0, _0x33f693 = _0x1bdb59;
        }
        return _0x45248c;
    }
    function _0x568e86(_0xbb52d6) {
        const _0x946a11 = _0x1fbd97, _0x1ce6bc = Math[_0x946a11(0x3ee)](Date[_0x946a11(0x6d4)]() / 0x3e8);
        if (!_0x33f693[_0x946a11(0x34e)] || _0x4577e7[_0x946a11(0x675)](_0x33f693[_0x946a11(0xb4)], _0x1ce6bc))
            return 0x0;
        const _0x58ea9d = _0x33f693[_0x946a11(0x64f)][_0xbb52d6] || 0x0;
        return _0x58ea9d > _0x1ce6bc ? _0x58ea9d : 0x0;
    }
    function _0x4c3563(_0x37cc23) {
        return _0x568e86(_0x37cc23) > 0x0;
    }
    function _0x4844ba() {
        const _0x2b40b8 = _0x1fbd97;
        return _0x4efbe3[_0x2b40b8(0x3af)](_0x5472f2 => _0x4c3563(_0x5472f2['feature']));
    }
    function _0x1ed2a9(_0x41a4e6) {
        const _0x5940fc = {
            'flogG': function (_0x1484c2, _0x2acda6) {
                return _0x1484c2(_0x2acda6);
            },
            'Imtfy': function (_0x22a794, _0x18c22b) {
                return _0x22a794(_0x18c22b);
            }
        };
        return new Promise(_0x214e5b => {
            const _0x20c6a2 = _0x5ca8, _0x4f36d1 = '' + _0x559b9b + _0x41a4e6, _0x548259 = _0x54647f => {
                    const _0x2b3bb4 = _0x5ca8;
                    try {
                        _0x5940fc[_0x2b3bb4(0x373)](_0x214e5b, JSON['parse'](_0x54647f));
                    } catch (_0x2b222c) {
                        _0x5940fc[_0x2b3bb4(0x1a7)](_0x214e5b, null);
                    }
                };
            typeof GM_xmlhttpRequest === _0x20c6a2(0x18b) ? GM_xmlhttpRequest({
                'method': _0x20c6a2(0x2a4),
                'url': _0x4f36d1,
                'timeout': 0x3a98,
                'onload': _0x2c83e5 => _0x2c83e5['status'] === 0xc8 ? _0x548259(_0x2c83e5['responseText']) : _0x214e5b(null),
                'onerror': () => _0x214e5b(null),
                'ontimeout': () => _0x214e5b(null)
            }) : fetch(_0x4f36d1)[_0x20c6a2(0x326)](_0x33571a => _0x33571a['ok'] ? _0x33571a[_0x20c6a2(0x4b2)]() : null)[_0x20c6a2(0x326)](_0x300218 => _0x300218 ? _0x548259(_0x300218) : _0x214e5b(null))[_0x20c6a2(0x776)](() => _0x214e5b(null));
        });
    }
    async function _0x13f898(_0x18c1a1 = ![]) {
        const _0x946a4d = _0x1fbd97;
        if (!_0x4b673b || !_0xd0c028() || _0x54773b || !_0x169f99())
            return ![];
        const _0x21c868 = _0xfadf01('license_last_refresh', 0x0), _0x3f3a00 = _0x33f693[_0x946a4d(0x34e)] ? _0x2a1003 : _0x3b0229;
        if (!_0x18c1a1 && Date[_0x946a4d(0x6d4)]() - _0x21c868 < _0x3f3a00)
            return ![];
        _0x54773b = !![], _0x48509d(_0x4577e7[_0x946a4d(0x4ab)], Date[_0x946a4d(0x6d4)]());
        try {
            if (!_0x53a18c || _0x4577e7[_0x946a4d(0xd5)](Date[_0x946a4d(0x6d4)]() - (_0x53a18c[_0x946a4d(0x570)] || 0x0), _0x2a1003)) {
                const _0xbe49c3 = await _0x4577e7[_0x946a4d(0x68a)](_0x24a139, _0x946a4d(0x60b), _0x946a4d(0x4f3));
                if (!_0xbe49c3 || _0xbe49c3[_0x946a4d(0x313)] || !_0xbe49c3[_0x946a4d(0x4f0)])
                    return _0x4577e7['aPSQK'](_0x3ec8aa, _0xbe49c3 && _0xbe49c3['error'] ? _0x946a4d(0x604) + (_0xbe49c3[_0x946a4d(0x313)][_0x946a4d(0x313)] || _0x946a4d(0x155) + _0xbe49c3['error'][_0x946a4d(0x6f8)]) + ').\x20Set\x20a\x20new\x20key:\x20⚙\x20Settings\x20→\x20Change\x20Key.' : _0x946a4d(0xd2)), ![];
                _0x53a18c = {
                    'pid': _0xbe49c3[_0x946a4d(0x4f0)],
                    'name': _0xbe49c3[_0x946a4d(0x102)] || '',
                    'checked': Date[_0x946a4d(0x6d4)]()
                }, _0x48509d(_0x4577e7[_0x946a4d(0xed)], _0x53a18c);
            }
            const _0xb693c3 = await _0x1ed2a9(_0x946a4d(0x22e) + _0x53a18c['pid']);
            if (!_0xb693c3 || !_0xb693c3[_0x946a4d(0x261)])
                return _0x4577e7[_0x946a4d(0x214)](_0x3ec8aa, _0x946a4d(0x368)), ![];
            const _0x6ee02 = JSON[_0x946a4d(0x7d8)](_0x33f693['features']), _0x2a1984 = await _0x45e9b4(_0xb693c3[_0x946a4d(0x261)]), _0x2d4d43 = _0x48ef7f();
            _0x4577e7[_0x946a4d(0x48e)](_0x3ec8aa, _0x2a1984 ? '' : _0x2d4d43 && _0x4577e7[_0x946a4d(0x27a)](_0x4577e7[_0x946a4d(0x82d)](String, _0x2d4d43), String(_0x53a18c[_0x946a4d(0x876)])) ? _0x946a4d(0x113) + _0x53a18c[_0x946a4d(0x876)] + _0x946a4d(0x499) + _0x2d4d43 + _0x946a4d(0x3f1) : _0x4577e7[_0x946a4d(0x3fe)]), _0x48509d(_0x946a4d(0x602), _0xb693c3[_0x946a4d(0x261)]);
            const _0xba2188 = {};
            _0xba2188[_0x946a4d(0x261)] = _0xb693c3[_0x946a4d(0x261)], _0xba2188[_0x946a4d(0xbf)] = _0x53a18c, _0x5efbb7(_0x4577e7[_0x946a4d(0x57e)], _0xba2188);
            if (_0x4577e7[_0x946a4d(0x287)](_0x6ee02, JSON[_0x946a4d(0x7d8)](_0x33f693[_0x946a4d(0x64f)])))
                _0x5284a5();
            return _0x2a1984;
        } finally {
            _0x54773b = ![];
        }
    }
    function _0x5284a5() {
        const _0x3ff67e = _0x1fbd97;
        if (document[_0x3ff67e(0x198)])
            _0x4577e7[_0x3ff67e(0x705)](_0x176af6);
        if (document[_0x3ff67e(0x39d)](_0x4577e7[_0x3ff67e(0x77f)]))
            _0x4577e7[_0x3ff67e(0x725)](_0x145293);
    }
    function _0x51be1d() {
        const _0xf9a7d6 = _0x1fbd97;
        _0x4741f3 = _0x4577e7[_0xf9a7d6(0x755)](Date['now'](), _0x117358), _0x4b673b ? _0x13f898(!![]) : _0x5efbb7(_0xf9a7d6(0x1db));
    }
    function _0x5b900d() {
        const _0x50d029 = _0x1fbd97;
        if (!_0x4b673b || !_0x4741f3)
            return;
        if (_0x4577e7['oIRSg'](Date[_0x50d029(0x6d4)](), _0x4741f3)) {
            _0x4741f3 = 0x0;
            return;
        }
        if (_0x4577e7[_0x50d029(0x73)](Date[_0x50d029(0x6d4)]() - _0xfadf01(_0x50d029(0x834), 0x0), _0x1c0d17))
            _0x13f898(!![]);
    }
    function _0x45bc81() {
        const _0xf4f83f = _0x1fbd97, _0x1993a2 = {
                'zKxcj': function (_0xe0a8c7) {
                    const _0x184505 = _0x5ca8;
                    return _0x4577e7[_0x184505(0x725)](_0xe0a8c7);
                }
            }, _0x16e389 = _0x4577e7['frEQN'](_0xfadf01, _0x4577e7[_0xf4f83f(0x73a)], null);
        if (_0x16e389)
            _0x45e9b4(_0x16e389)[_0xf4f83f(0x326)](_0xeaabb6 => {
                if (_0xeaabb6)
                    _0x1993a2['zKxcj'](_0x5284a5);
            });
    }
    function _0x158b70() {
        const _0x401c47 = _0x1fbd97, _0x3852c4 = _0x48ef7f();
        if (_0x3852c4) {
            const _0x4b3a82 = _0x4577e7[_0x401c47(0x60c)](_0xfadf01, _0x401c47(0x84c) + _0x3852c4, null);
            if (_0x4b3a82 && typeof _0x4b3a82 === _0x4577e7[_0x401c47(0x1f1)] && !_0x4b3a82[_0x401c47(0x71d)](_0x401c47(0x484)) && _0x4b3a82['trim']()[_0x401c47(0x5a5)] >= 0x10)
                return {
                    'key': _0x4b3a82[_0x401c47(0x72)](),
                    'source': 'Stakeout\x20Custom\x20(Account\x20[' + _0x3852c4 + '])',
                    'uid': _0x3852c4,
                    'isCustom': !![]
                };
            const _0x52f0cf = _0xfadf01(_0x401c47(0x7fc) + _0x3852c4, null);
            if (_0x52f0cf && typeof _0x52f0cf === _0x401c47(0x393) && !_0x52f0cf[_0x401c47(0x71d)](_0x4577e7[_0x401c47(0x710)]) && _0x4577e7[_0x401c47(0x832)](_0x52f0cf[_0x401c47(0x72)]()['length'], 0x10))
                return {
                    'key': _0x52f0cf[_0x401c47(0x72)](),
                    'source': _0x401c47(0x7ff) + _0x3852c4 + '])',
                    'uid': _0x3852c4,
                    'isCustom': !![]
                };
            const _0x5cde6b = _0x4577e7[_0x401c47(0x60c)](_0xfadf01, _0x4577e7[_0x401c47(0x700)], null);
            if (_0x5cde6b && typeof _0x5cde6b === _0x4577e7[_0x401c47(0x1f1)] && !_0x5cde6b[_0x401c47(0x71d)](_0x4577e7[_0x401c47(0x710)]) && _0x4577e7[_0x401c47(0x832)](_0x5cde6b[_0x401c47(0x72)]()[_0x401c47(0x5a5)], 0x10))
                return _0x48509d(_0x401c47(0x84c) + _0x3852c4, _0x5cde6b[_0x401c47(0x72)]()), {
                    'key': _0x5cde6b[_0x401c47(0x72)](),
                    'source': _0x401c47(0x532) + _0x3852c4 + '])',
                    'uid': _0x3852c4,
                    'isCustom': !![]
                };
            const _0x3d047a = {};
            return _0x3d047a['key'] = '', _0x3d047a[_0x401c47(0x12b)] = '⚠️\x20Key\x20Required\x20for\x20Account\x20[' + _0x3852c4 + ']', _0x3d047a[_0x401c47(0x802)] = _0x3852c4, _0x3d047a[_0x401c47(0x4c2)] = ![], _0x3d047a;
        }
        const _0xeefe3f = _0xfadf01(_0x4577e7[_0x401c47(0x700)], null);
        if (_0xeefe3f && _0x4577e7[_0x401c47(0x815)](typeof _0xeefe3f, _0x4577e7[_0x401c47(0x1f1)]) && !_0xeefe3f[_0x401c47(0x71d)](_0x4577e7[_0x401c47(0x710)]) && _0xeefe3f[_0x401c47(0x72)]()[_0x401c47(0x5a5)] >= 0x10)
            return {
                'key': _0xeefe3f[_0x401c47(0x72)](),
                'source': _0x4577e7[_0x401c47(0x854)],
                'uid': null,
                'isCustom': !![]
            };
        const _0x43562b = {};
        return _0x43562b[_0x401c47(0x20c)] = '', _0x43562b[_0x401c47(0x12b)] = _0x401c47(0xe9), _0x43562b[_0x401c47(0x802)] = null, _0x43562b[_0x401c47(0x4c2)] = ![], _0x43562b;
    }
    function _0x169f99() {
        const _0x15d83e = _0x1fbd97;
        return _0x158b70()[_0x15d83e(0x20c)];
    }
    function _0x1dfd16(_0xdcad44) {
        const _0x44efd1 = _0x1fbd97;
        if (!_0xdcad44 || typeof _0xdcad44 !== 'string')
            return _0x44efd1(0x4e6);
        if (_0xdcad44['length'] <= 0x8)
            return _0x44efd1(0x505);
        return _0xdcad44[_0x44efd1(0x348)](0x0, 0x4) + _0x44efd1(0x41d) + _0xdcad44[_0x44efd1(0x348)](-0x4);
    }
    const _0x505b93 = _0x1fbd97(0x3e2) + _0x1fbd97(0x849);
    function _0x44e0a8(_0x2d77e5 = ![]) {
        const _0x3c393a = _0x1fbd97, _0xf11799 = _0x48ef7f(), _0xfac6a9 = _0x4577e7[_0x3c393a(0x22a)](_0x158b70), _0x1d3cd1 = _0x2d77e5 === !![] || !_0xfac6a9[_0x3c393a(0x20c)], _0x44a51d = document[_0x3c393a(0x39d)](_0x3c393a(0x510));
        if (_0x44a51d)
            _0x44a51d[_0x3c393a(0x172)]();
        const _0x47ac73 = document[_0x3c393a(0x35d)](_0x4577e7[_0x3c393a(0x698)]);
        _0x47ac73['id'] = _0x4577e7[_0x3c393a(0x64a)], _0x47ac73[_0x3c393a(0x1be)] = _0x3c393a(0x3f2) + (_0x1d3cd1 ? _0x4577e7[_0x3c393a(0x599)] : _0x3c393a(0x711)) + _0x3c393a(0x7e8) + (_0xf11799 ? '[' + _0xf11799 + ']' : _0x4577e7[_0x3c393a(0x97)]) + _0x3c393a(0x826) + (_0xfac6a9[_0x3c393a(0x20c)] ? _0x3c393a(0x561) + _0x1dfd16(_0xfac6a9[_0x3c393a(0x20c)]) + _0x3c393a(0x826) : '') + _0x3c393a(0x7df) + _0x505b93 + '\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x22>✨\x20Generate\x20key</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22stakeout-key-input\x22\x20class=\x22stakeout-key-input\x22\x20maxlength=\x2216\x22\x20placeholder=\x22Paste\x20your\x2016-character\x20key\x22\x20autocomplete=\x22off\x22\x20spellcheck=\x22false\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-store-note\x22\x20id=\x22stakeout-key-status\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-store-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0xfac6a9['key'] ? _0x4577e7[_0x3c393a(0x43c)] : '') + _0x3c393a(0x846), document[_0x3c393a(0x198)][_0x3c393a(0x159)](_0x47ac73);
        const _0x32eda5 = _0x47ac73[_0x3c393a(0x25f)](_0x3c393a(0x7cd)), _0x243cde = _0x47ac73['querySelector']('#stakeout-key-status'), _0x536bbd = _0x47ac73[_0x3c393a(0x25f)](_0x4577e7[_0x3c393a(0x388)]), _0x5df140 = () => _0x47ac73[_0x3c393a(0x172)](), _0x2289fa = _0x1caf30 => {
                const _0x150396 = _0x3c393a;
                _0x48509d(_0xf11799 ? _0x150396(0x84c) + _0xf11799 : _0x150396(0x5f8), _0x1caf30);
                if (_0x1caf30) {
                    _0x53a18c = null, _0x48509d('license_identity', null);
                    if (_0x4b673b)
                        _0x13f898(!![]);
                    else
                        _0x5efbb7('license-poll');
                }
                _0x4577e7[_0x150396(0x489)](_0x5df140), _0x4577e7[_0x150396(0x799)](_0x93d2c1, _0x1caf30 ? '✅\x20API\x20Key\x20saved\x20for\x20Account\x20[' + (_0xf11799 || _0x150396(0x122)) + ']!' : _0x4577e7[_0x150396(0x464)]), _0x176af6();
            };
        _0x47ac73[_0x3c393a(0x25f)](_0x3c393a(0x5c1))[_0x3c393a(0x1f7)] = _0x5df140, _0x47ac73[_0x3c393a(0x1f7)] = _0x373a1d => {
            const _0x5bd4f7 = _0x3c393a;
            if (_0x373a1d[_0x5bd4f7(0x1b6)] === _0x47ac73)
                _0x5df140();
        };
        const _0x1f258a = _0x47ac73[_0x3c393a(0x25f)]('#stakeout-key-remove');
        if (_0x1f258a)
            _0x1f258a[_0x3c393a(0x1f7)] = () => _0x2289fa('');
        _0x32eda5['onkeydown'] = _0x4086b8 => {
            const _0x4b3ba8 = _0x3c393a;
            if (_0x4577e7[_0x4b3ba8(0x8e)](_0x4086b8[_0x4b3ba8(0x20c)], 'Enter'))
                _0x536bbd['click']();
        }, _0x536bbd[_0x3c393a(0x1f7)] = async () => {
            const _0x50e03b = _0x3c393a, _0x5b4b33 = _0x32eda5[_0x50e03b(0x1d5)][_0x50e03b(0x72)]();
            if (!/^[A-Za-z0-9]{16}$/[_0x50e03b(0x66b)](_0x5b4b33)) {
                _0x243cde[_0x50e03b(0x235)] = _0x50e03b(0x451);
                return;
            }
            _0x536bbd[_0x50e03b(0x242)] = !![], _0x243cde['textContent'] = _0x50e03b(0x6f4);
            let _0x25a241 = null;
            try {
                const _0x4f53d9 = await _0x4577e7['rAPDH'](fetch, 'https://api.torn.com/user/?selections=basic&key=' + _0x5b4b33 + _0x50e03b(0x307));
                _0x25a241 = await _0x4f53d9[_0x50e03b(0x616)]();
            } catch (_0xee5c4b) {
            }
            if (_0x25a241 && _0x25a241[_0x50e03b(0x313)]) {
                _0x536bbd[_0x50e03b(0x242)] = ![], _0x243cde['textContent'] = _0x50e03b(0x233) + (_0x25a241['error'][_0x50e03b(0x313)] || _0x50e03b(0x155) + _0x25a241[_0x50e03b(0x313)]['code']) + '.';
                return;
            }
            if (_0x25a241 && _0xf11799 && _0x25a241[_0x50e03b(0x4f0)] && _0x4577e7[_0x50e03b(0x56b)](_0x4577e7[_0x50e03b(0xd1)](String, _0x25a241[_0x50e03b(0x4f0)]), String(_0xf11799))) {
                _0x536bbd[_0x50e03b(0x242)] = ![], _0x243cde[_0x50e03b(0x235)] = _0x50e03b(0x6d0) + (_0x25a241[_0x50e03b(0x102)] || _0x4577e7[_0x50e03b(0x422)]) + '\x20[' + _0x25a241['player_id'] + _0x50e03b(0x7f1) + _0xf11799 + '].';
                return;
            }
            _0x4577e7[_0x50e03b(0x6e3)](_0x2289fa, _0x5b4b33);
        }, setTimeout(() => _0x32eda5[_0x3c393a(0x4be)](), 0x32);
    }
    function _0x2ed3c0() {
        const _0x2b095a = _0x1fbd97;
        if (window[_0x2b095a(0x289)][_0x2b095a(0x83c)][_0x2b095a(0x1b1)](_0x4577e7[_0x2b095a(0x6b)]))
            return;
        const _0x4154b2 = _0x4577e7['MCaXq'](_0x48ef7f), _0x46fa8a = _0x158b70();
        if (_0x46fa8a[_0x2b095a(0x20c)])
            return;
        const _0x53c3bf = _0x4154b2 ? _0x2b095a(0x208) + _0x4154b2 : _0x4577e7[_0x2b095a(0x134)];
        if (sessionStorage[_0x2b095a(0xc5)](_0x53c3bf))
            return;
        sessionStorage[_0x2b095a(0x20d)](_0x53c3bf, _0x2b095a(0x567)), setTimeout(() => {
            _0x44e0a8(!![]);
        }, 0x320);
    }
    const _0x17b09f = Date['now']()[_0x1fbd97(0x264)](0x24) + '-' + Math[_0x1fbd97(0x1fc)]()['toString'](0x24)[_0x1fbd97(0x348)](0x2, 0x8), _0x4f8c78 = _0x4577e7['QvoZM'], _0x705ea9 = _0x1fbd97(0x354), _0xc08ef0 = _0x1fbd97(0x78c), _0x41af86 = 0x1388, _0x27ba16 = 0xfa0;
    let _0x4b673b = ![], _0x1aa45f = ![];
    const _0x635f0d = new Map(), _0x112e78 = new Map(), _0x7c760 = {}, _0x21d49e = ((() => {
            const _0x17a890 = _0x1fbd97, _0x14e24b = _0x1fc249 => {
                    const _0x364d37 = _0x5ca8;
                    if (!_0x1fc249 || _0x1fc249['from'] === _0x17b09f || !_0x7c760[_0x1fc249[_0x364d37(0x6c)]])
                        return;
                    try {
                        _0x7c760[_0x1fc249['type']](_0x1fc249);
                    } catch (_0x358378) {
                        console[_0x364d37(0x313)](_0x364d37(0x83), _0x1fc249[_0x364d37(0x6c)], _0x358378);
                    }
                };
            try {
                if (_0x4577e7[_0x17a890(0x558)](typeof BroadcastChannel, _0x4577e7[_0x17a890(0x5ab)])) {
                    const _0xb8a31f = new BroadcastChannel(_0x4f8c78);
                    return _0xb8a31f[_0x17a890(0x7f3)] = _0x11ac48 => _0x14e24b(_0x11ac48['data']), {
                        'post': _0x147615 => {
                            const _0x3332d9 = _0x17a890;
                            try {
                                _0xb8a31f[_0x3332d9(0x32c)](_0x147615);
                            } catch (_0x4ffae6) {
                            }
                        }
                    };
                }
            } catch (_0xfce082) {
            }
            return window[_0x17a890(0x27c)](_0x17a890(0x474), _0x4af825 => {
                const _0x5a45bd = _0x17a890;
                if (_0x4577e7[_0x5a45bd(0x7ef)](_0x4af825[_0x5a45bd(0x20c)], _0x4f8c78) || !_0x4af825[_0x5a45bd(0x78b)])
                    return;
                try {
                    _0x14e24b(JSON['parse'](_0x4af825[_0x5a45bd(0x78b)]));
                } catch (_0x49b556) {
                }
            }), {
                'post': _0x5d75ca => {
                    try {
                        localStorage['setItem'](_0x4f8c78, JSON['stringify'](_0x5d75ca));
                    } catch (_0x49f9a8) {
                    }
                }
            };
        })());
    function _0x5efbb7(_0x2a27ba, _0x240c86 = {}) {
        const _0x2faf10 = _0x1fbd97;
        _0x21d49e[_0x2faf10(0x60d)](Object['assign']({}, _0x240c86, {
            'type': _0x2a27ba,
            'from': _0x17b09f,
            'n': Math['random']()
        }));
    }
    function _0x2f64be() {
        const _0x533569 = _0x1fbd97;
        let _0xa63b75 = ![];
        try {
            _0xa63b75 = _0x4577e7[_0x533569(0x6ff)](Boolean, navigator['userActivation'] && navigator['userActivation'][_0x533569(0x13f)]);
        } catch (_0x12b417) {
        }
        if (_0x31df1e && _0x4577e7[_0x533569(0x85b)](_0x31df1e[_0x533569(0x4b6)], _0x533569(0x61e)))
            _0xa63b75 = !![];
        return {
            'focused': document[_0x533569(0x540)](),
            'visible': _0x4577e7[_0x533569(0x566)](document['visibilityState'], _0x4577e7[_0x533569(0x5c9)]),
            'activated': _0xa63b75,
            'ts': Date[_0x533569(0x6d4)]()
        };
    }
    function _0x2acae7() {
        const _0x5d9519 = _0x1fbd97, _0x4f8be4 = _0x2f64be();
        if (_0x4b673b)
            _0x635f0d[_0x5d9519(0x2d1)](_0x17b09f, _0x4f8be4);
        else {
            const _0x312f59 = {};
            _0x312f59[_0x5d9519(0x833)] = _0x4f8be4, _0x5efbb7(_0x5d9519(0x833), _0x312f59);
        }
    }
    function _0x5596a9() {
        const _0x569f42 = _0x1fbd97, _0x1f0c7f = Date[_0x569f42(0x6d4)]();
        _0x635f0d[_0x569f42(0x2d1)](_0x17b09f, _0x4577e7[_0x569f42(0x489)](_0x2f64be));
        let _0x37cf38 = _0x17b09f, _0x44ce16 = -0x1;
        for (const [_0x1998bc, _0x4e2dc9] of _0x635f0d) {
            if (_0x1f0c7f - _0x4e2dc9['ts'] > _0x27ba16) {
                _0x635f0d[_0x569f42(0x151)](_0x1998bc);
                continue;
            }
            const _0x3c6836 = _0x4577e7['agrWt']((_0x4e2dc9[_0x569f42(0x32a)] ? 0x4 : 0x0) + (_0x4e2dc9[_0x569f42(0x309)] ? 0x2 : 0x0), _0x4e2dc9[_0x569f42(0x646)] ? 0x1 : 0x0);
            (_0x3c6836 > _0x44ce16 || _0x4577e7[_0x569f42(0x815)](_0x3c6836, _0x44ce16) && _0x1998bc === _0x17b09f) && (_0x37cf38 = _0x1998bc, _0x44ce16 = _0x3c6836);
        }
        return _0x37cf38;
    }
    function _0x460aca(_0x45566a) {
        const _0x371c84 = _0x1fbd97;
        if (!_0x4b673b) {
            const _0x1cd47b = {};
            _0x1cd47b[_0x371c84(0x336)] = _0x45566a, _0x5efbb7(_0x371c84(0x14a), _0x1cd47b);
            return;
        }
        _0x4577e7[_0x371c84(0x6e3)](_0x313792, _0x45566a);
    }
    function _0x313792(_0x2b7fe5) {
        const _0x3454cb = _0x1fbd97, _0x43c24e = Date[_0x3454cb(0x6d4)]();
        if (_0x2b7fe5[_0x3454cb(0x20c)]) {
            for (const [_0x54fc12, _0x3597e1] of _0x112e78) {
                if (_0x4577e7[_0x3454cb(0x2d8)](_0x3597e1, _0x43c24e))
                    _0x112e78['delete'](_0x54fc12);
            }
            if (_0x112e78[_0x3454cb(0x543)](_0x2b7fe5[_0x3454cb(0x20c)]))
                return;
            _0x112e78[_0x3454cb(0x2d1)](_0x2b7fe5[_0x3454cb(0x20c)], _0x43c24e + (_0x2b7fe5[_0x3454cb(0x5d4)] || 0x3a98));
        }
        const _0x4c85ed = _0x5596a9(), _0x5c7348 = {};
        _0x5c7348[_0x3454cb(0x336)] = _0x2b7fe5, _0x5c7348[_0x3454cb(0x54e)] = _0x4c85ed, _0x4577e7[_0x3454cb(0x482)](_0x5efbb7, _0x3454cb(0xcd), _0x5c7348), _0x4577e7[_0x3454cb(0x60c)](_0x450744, _0x2b7fe5, _0x4c85ed);
        if (_0x2b7fe5[_0x3454cb(0xae)])
            _0x4577e7[_0x3454cb(0x3cf)](_0x45b34d, _0x2b7fe5['notif']['title'], _0x2b7fe5[_0x3454cb(0xae)]['body']);
    }
    function _0x450744(_0x1da5fc, _0x4a7ed5) {
        const _0x1d65b9 = _0x1fbd97;
        if (_0x1da5fc[_0x1d65b9(0x3e3)])
            _0x93d2c1(_0x1da5fc[_0x1d65b9(0x3e3)]);
        if (_0x4a7ed5 !== _0x17b09f)
            return;
        if (_0x1da5fc[_0x1d65b9(0x861)])
            _0x46b5d3(_0x1da5fc[_0x1d65b9(0x861)]);
        if (_0x1da5fc[_0x1d65b9(0x6e7)])
            _0x1fbf87(_0x1da5fc[_0x1d65b9(0x6e7)]);
        _0x1da5fc[_0x1d65b9(0x4be)] && (window[_0x1d65b9(0x4be)](), _0x4577e7[_0x1d65b9(0x347)](_0x203579));
    }
    function _0x5366f2(_0x5ee379) {
        const _0x2c14d7 = _0x1fbd97;
        if (!_0x4b673b || !_0x4f991c[_0x5ee379])
            return;
        const _0x44c98f = {};
        _0x44c98f['id'] = _0x5ee379, _0x44c98f[_0x2c14d7(0x720)] = _0x4f991c[_0x5ee379], _0x5efbb7(_0x2c14d7(0x46f), _0x44c98f);
    }
    function _0x32151d(_0x22a2dd, _0x54b5f4) {
        const _0x8747bd = _0x1fbd97, _0x5cc6d9 = _0x54b5f4 !== undefined ? _0x54b5f4 : _0xfadf01(_0x22a2dd, null), _0xeadd4a = _0x5cc6d9 && _0x4577e7[_0x8747bd(0x416)](typeof _0x5cc6d9, _0x8747bd(0x301));
        switch (_0x22a2dd) {
        case _0x4577e7[_0x8747bd(0x9e)]:
            _0xb2691a = Object['assign']({}, _0xf97d69, _0xeadd4a ? _0x5cc6d9 : {});
            break;
        case _0x4577e7[_0x8747bd(0x152)]:
            _0x61dadc = Array[_0x8747bd(0x26b)](_0x5cc6d9) ? _0x5cc6d9 : [];
            break;
        case 'trader_watchlist':
            _0x178588 = Array[_0x8747bd(0x26b)](_0x5cc6d9) ? _0x5cc6d9 : [];
            break;
        case _0x8747bd(0x5f7):
            _0x463892 = _0xeadd4a ? _0x5cc6d9 : {};
            break;
        case _0x4577e7[_0x8747bd(0x605)]:
            _0x9a575c = _0xeadd4a ? _0x5cc6d9 : {};
            break;
        case _0x8747bd(0x7f2):
            _0x3612c1 = Array[_0x8747bd(0x26b)](_0x5cc6d9) ? _0x5cc6d9 : [], _0x34ecf3();
            return;
        case _0x8747bd(0x429): {
                const _0x287276 = _0x42cce8 => _0x42cce8[_0x8747bd(0x33c)](_0x43dbfa => JSON[_0x8747bd(0x7d8)]([
                        _0x43dbfa['id'],
                        _0x43dbfa[_0x8747bd(0x102)],
                        _0x43dbfa[_0x8747bd(0x7c)],
                        _0x43dbfa['paused'],
                        _0x43dbfa[_0x8747bd(0x70a)],
                        _0x43dbfa[_0x8747bd(0x842)],
                        _0x43dbfa[_0x8747bd(0x75d)]
                    ]))[_0x8747bd(0x663)](','), _0x1c9f6a = _0x287276(_0x44c5cb);
                _0x44c5cb = Array[_0x8747bd(0x26b)](_0x5cc6d9) ? _0x5cc6d9 : [];
                if (_0x26e1e9 === _0x4577e7[_0x8747bd(0x511)] && _0x4577e7['pVWYq'](_0x1c9f6a, _0x287276(_0x44c5cb))) {
                    _0x44c5cb[_0x8747bd(0x136)](_0x19ad16 => _0x2c2af8(_0x19ad16['id']));
                    return;
                }
                break;
            }
        default:
            return;
        }
        if (document[_0x8747bd(0x198)])
            _0x176af6();
    }
    function _0x237c13() {
        const _0x16d47f = _0x1fbd97, _0x4be8b2 = _0x16d47f(0x2ac)[_0x16d47f(0x79f)]('|');
        let _0x50d04f = 0x0;
        while (!![]) {
            switch (_0x4be8b2[_0x50d04f++]) {
            case '0':
                if (_0x4b673b)
                    return;
                continue;
            case '1':
                _0x5efbb7(_0x16d47f(0x1dc));
                continue;
            case '2':
                _0x4b673b = !![];
                continue;
            case '3':
                document[_0x16d47f(0x198)] && _0x5a3a61 ? _0x4577e7[_0x16d47f(0x491)](_0xa05f9c) : _0x1aa45f = !![];
                continue;
            case '4':
                console[_0x16d47f(0x760)](_0x16d47f(0x53d) + _0x17b09f + '\x20is\x20now\x20the\x20API\x20leader.');
                continue;
            case '5':
                _0x4577e7['YFsWp'](_0xab1ec2);
                continue;
            }
            break;
        }
    }
    function _0xa05f9c() {
        const _0x451d93 = _0x1fbd97;
        _0x1aa45f = ![], _0x4577e7[_0x451d93(0x725)](_0x13f898), _0x4577e7[_0x451d93(0x491)](_0x59d7e0), setTimeout(() => _0x534083(), 0x5dc);
        const _0x1d7dca = Math[_0x451d93(0x3ab)](0x5, _0xb2691a[_0x451d93(0x30a)] || 0x5) * 0x3e8, _0x5cb1c6 = Array[_0x451d93(0x8d)](new Set([
                ..._0x61dadc,
                ..._0x178588
            ]))['filter'](_0x2cfd36 => !_0x4f991c[_0x2cfd36] || Date['now']() - _0x4f991c[_0x2cfd36][_0x451d93(0x149)] > _0x1d7dca);
        _0x5cb1c6[_0x451d93(0x136)]((_0x1b87e7, _0x449778) => {
            setTimeout(() => _0x168494(_0x1b87e7), _0x449778 * 0x5dc);
        });
    }
    function _0x2f25db() {
        const _0x4cd512 = _0x1fbd97, _0x4ff7f7 = () => {
                const _0x530343 = _0x5ca8, _0x11b1da = Date[_0x530343(0x6d4)]();
                let _0x3351da = null;
                try {
                    _0x3351da = JSON[_0x530343(0x850)](localStorage['getItem'](_0xc08ef0) || _0x4577e7[_0x530343(0x4e0)]);
                } catch (_0x48ed32) {
                }
                if (!_0x3351da || _0x4577e7[_0x530343(0x586)](_0x3351da[_0x530343(0x394)], _0x17b09f) || _0x11b1da - _0x3351da['ts'] > _0x41af86) {
                    try {
                        const _0x4f996a = {};
                        _0x4f996a[_0x530343(0x394)] = _0x17b09f, _0x4f996a['ts'] = _0x11b1da, localStorage[_0x530343(0x20d)](_0xc08ef0, JSON['stringify'](_0x4f996a));
                    } catch (_0x148075) {
                    }
                    _0x237c13();
                } else
                    _0x4b673b && (_0x4b673b = ![], _0x4577e7[_0x530343(0x454)](_0xab1ec2));
            };
        _0x4577e7[_0x4cd512(0x862)](_0x4ff7f7), setInterval(_0x4ff7f7, 0x5dc), window[_0x4cd512(0x27c)](_0x4577e7[_0x4cd512(0x4dd)], () => {
            const _0x24ac8e = _0x4cd512;
            try {
                const _0x1af491 = JSON[_0x24ac8e(0x850)](localStorage[_0x24ac8e(0xc5)](_0xc08ef0) || _0x24ac8e(0x4ba));
                if (_0x1af491 && _0x4577e7['fOSUL'](_0x1af491[_0x24ac8e(0x394)], _0x17b09f))
                    localStorage[_0x24ac8e(0x332)](_0xc08ef0);
            } catch (_0x364bc1) {
            }
        });
    }
    function _0x459177() {
        const _0x5e84f8 = _0x1fbd97;
        try {
            if (navigator[_0x5e84f8(0x59d)] && typeof navigator[_0x5e84f8(0x59d)][_0x5e84f8(0x2e1)] === _0x4577e7[_0x5e84f8(0x5ab)]) {
                navigator[_0x5e84f8(0x59d)][_0x5e84f8(0x2e1)](_0x705ea9, () => {
                    return _0x237c13(), new Promise(() => {
                    });
                })[_0x5e84f8(0x776)](() => _0x2f25db());
                return;
            }
        } catch (_0x568845) {
        }
        _0x2f25db();
    }
    _0x7c760[_0x1fbd97(0x833)] = _0x30e96c => {
        const _0x59bb68 = _0x1fbd97;
        if (_0x4b673b && _0x30e96c[_0x59bb68(0x833)])
            _0x635f0d[_0x59bb68(0x2d1)](_0x30e96c[_0x59bb68(0x8d)], _0x30e96c[_0x59bb68(0x833)]);
    }, _0x7c760['alert'] = _0x407044 => _0x450744(_0x407044[_0x1fbd97(0x336)], _0x407044[_0x1fbd97(0x54e)]), _0x7c760[_0x4577e7[_0x1fbd97(0x76e)]] = _0x306d80 => {
        const _0x26104a = _0x1fbd97;
        if (_0x4b673b && _0x306d80[_0x26104a(0x336)])
            _0x313792(_0x306d80['evt']);
    }, _0x7c760[_0x1fbd97(0x51b)] = () => _0x45c7d9(), _0x7c760[_0x4577e7[_0x1fbd97(0x807)]] = _0x1e91f7 => _0x32151d(_0x1e91f7[_0x1fbd97(0x20c)], _0x1e91f7[_0x1fbd97(0x1d5)]), _0x7c760[_0x1fbd97(0x1dc)] = () => {
        const _0xed30a2 = _0x1fbd97;
        if (_0x4b673b)
            return;
        _0x4577e7[_0xed30a2(0x491)](_0x2acae7), _0x4577e7[_0xed30a2(0x6a6)](_0x5efbb7, _0xed30a2(0x46b)), _0x4577e7[_0xed30a2(0x193)](_0xab1ec2);
    }, _0x7c760[_0x4577e7[_0x1fbd97(0x7ec)]] = _0x4b80b3 => {
        const _0x3c5f99 = _0x1fbd97;
        if (!_0x4b673b)
            return;
        const _0x4bc177 = {};
        _0x4bc177['to'] = _0x4b80b3[_0x3c5f99(0x8d)], _0x4bc177[_0x3c5f99(0x7b)] = _0x4f991c, _0x4bc177[_0x3c5f99(0x48c)] = _0x2d9085, _0x5efbb7(_0x3c5f99(0x2a2), _0x4bc177);
    }, _0x7c760[_0x4577e7['NQvVZ']] = _0x898e27 => {
        const _0x20acac = _0x1fbd97;
        if (_0x4b673b || _0x4577e7[_0x20acac(0x5d5)](_0x898e27['to'], _0x17b09f) || !_0x898e27[_0x20acac(0x7b)])
            return;
        for (const [_0x4baef4, _0x3918b6] of Object[_0x20acac(0x7b)](_0x898e27['entries'])) {
            if (!_0x4f991c[_0x4baef4] || _0x4f991c[_0x4baef4][_0x20acac(0x149)] < _0x3918b6[_0x20acac(0x149)])
                _0x4f991c[_0x4baef4] = _0x3918b6;
        }
        for (const [_0xf4ba48, _0x4fa734] of Object['entries'](_0x898e27[_0x20acac(0x48c)] || {})) {
            if (!_0x2d9085[_0xf4ba48] || (_0x2d9085[_0xf4ba48][_0x20acac(0x5ae)] || 0x0) < (_0x4fa734[_0x20acac(0x5ae)] || 0x0))
                _0x2d9085[_0xf4ba48] = _0x4fa734;
        }
        if (document[_0x20acac(0x198)])
            _0x176af6();
    }, _0x7c760[_0x1fbd97(0x7cc)] = _0x255403 => {
        const _0x6e676a = _0x1fbd97;
        if (_0x4b673b || !_0x255403['entry'])
            return;
        _0x2d9085[_0x255403[_0x6e676a(0xe2)]] = _0x255403[_0x6e676a(0x720)];
        if (_0x26e1e9 === _0x4577e7[_0x6e676a(0x511)])
            _0x2c2af8(_0x255403[_0x6e676a(0xe2)]);
    }, _0x7c760[_0x4577e7[_0x1fbd97(0x4d0)]] = _0x594a1b => {
        const _0x2026a3 = _0x1fbd97;
        if (!_0x4b673b || !_0x594a1b[_0x2026a3(0xe2)])
            return;
        _0x157dfc[_0x594a1b[_0x2026a3(0xe2)]] = Date[_0x2026a3(0x6d4)](), _0x4577e7[_0x2026a3(0x5f0)](_0x172c27, _0x594a1b[_0x2026a3(0xe2)]);
    }, _0x7c760[_0x4577e7[_0x1fbd97(0x771)]] = _0x18aaa8 => {
        const _0x35a982 = _0x1fbd97;
        if (_0x4b673b || !_0x18aaa8[_0x35a982(0x720)])
            return;
        _0x4f991c[_0x18aaa8['id']] = _0x18aaa8[_0x35a982(0x720)], _0x26e1e9 === 'targets' ? _0x4577e7[_0x35a982(0x50a)](_0x70efbf, _0x18aaa8['id']) : _0x2e01b9(_0x18aaa8['id']), _0x58accf();
    }, _0x7c760[_0x4577e7[_0x1fbd97(0x57e)]] = _0x354c58 => {
        const _0x5ca636 = _0x1fbd97;
        if (_0x354c58[_0x5ca636(0xbf)])
            _0x53a18c = _0x354c58[_0x5ca636(0xbf)];
        if (_0x354c58[_0x5ca636(0x261)])
            _0x45e9b4(_0x354c58['token'])['then'](() => _0x5284a5());
    }, _0x7c760[_0x1fbd97(0x1db)] = () => {
        const _0x40d100 = _0x1fbd97;
        if (!_0x4b673b)
            return;
        _0x53a18c = _0xfadf01(_0x40d100(0x57c), null), _0x4741f3 = Date[_0x40d100(0x6d4)]() + _0x117358, _0x13f898(!![]);
    }, _0x7c760[_0x4577e7[_0x1fbd97(0x25d)]] = _0x59b927 => {
        const _0x34fe2b = _0x1fbd97;
        if (_0x4b673b && _0x59b927['id'])
            _0x4577e7[_0x34fe2b(0x86c)](_0x168494, _0x59b927['id']);
    }, _0x7c760[_0x4577e7[_0x1fbd97(0x85)]] = _0x3888ee => {
        const _0x19df44 = _0x1fbd97;
        if (_0x4b673b || !_0x3888ee[_0x19df44(0x4ce)])
            return;
        const _0x10020d = _0x4577e7['tQxfI'](_0x5d84cd, _0x3888ee[_0x19df44(0x4ce)]);
        _0x2b87be[_0x3888ee[_0x19df44(0x19a)]] = {
            'incidentData': _0x3888ee['incidentData'],
            'canvas': _0x10020d
        };
        if (_0x26e1e9 === _0x19df44(0x787))
            _0x70efbf(_0x3888ee['targetId']);
    };
    const _0x4c28ab = {};
    _0x4c28ab[_0x1fbd97(0x273)] = !![], _0x4c28ab[_0x1fbd97(0x872)] = !![], _0x4c28ab[_0x1fbd97(0x7c8)] = _0x1fbd97(0x2c6), _0x4c28ab['alertOnTraderReady'] = !![], _0x4c28ab['isTradersPaused'] = ![], _0x4c28ab[_0x1fbd97(0x54c)] = ![], _0x4c28ab[_0x1fbd97(0x79b)] = ![], _0x4c28ab[_0x1fbd97(0x684)] = !![], _0x4c28ab['activeThresholdMin'] = 0x5, _0x4c28ab[_0x1fbd97(0x2f4)] = !![], _0x4c28ab['alertOnFullHp'] = ![], _0x4c28ab[_0x1fbd97(0x6cf)] = !![], _0x4c28ab[_0x1fbd97(0x200)] = !![], _0x4c28ab[_0x1fbd97(0x2f5)] = !![], _0x4c28ab[_0x1fbd97(0x788)] = !![], _0x4c28ab['chainTargetBaseId'] = 0x3e8fa0, _0x4c28ab[_0x1fbd97(0xe8)] = 0x44aa20, _0x4c28ab[_0x1fbd97(0x220)] = _0x4577e7[_0x1fbd97(0x739)], _0x4c28ab[_0x1fbd97(0x7da)] = 0x44aa20, _0x4c28ab['chainScanEnd'] = 0x4630c0, _0x4c28ab[_0x1fbd97(0x24e)] = 0x1, _0x4c28ab['chainMinAgeDays'] = 0xf, _0x4c28ab[_0x1fbd97(0x139)] = 0x0, _0x4c28ab[_0x1fbd97(0x5d0)] = 0x96, _0x4c28ab[_0x1fbd97(0x7b0)] = 0x4b, _0x4c28ab[_0x1fbd97(0x415)] = 0x14, _0x4c28ab['isFactionsPaused'] = ![], _0x4c28ab[_0x1fbd97(0x5ba)] = 'attack', _0x4c28ab[_0x1fbd97(0x54f)] = !![], _0x4c28ab[_0x1fbd97(0x1ad)] = 0x1, _0x4c28ab[_0x1fbd97(0x319)] = _0x4577e7[_0x1fbd97(0x55f)], _0x4c28ab['desktopNotif'] = !![], _0x4c28ab['osAutoFocus'] = !![], _0x4c28ab['rapidHospPolling'] = !![], _0x4c28ab['pollingInterval'] = 0x5, _0x4c28ab[_0x1fbd97(0x594)] = ![], _0x4c28ab[_0x1fbd97(0x709)] = ![], _0x4c28ab[_0x1fbd97(0x318)] = _0x1fbd97(0x634);
    const _0xf97d69 = _0x4c28ab;
    let _0xb2691a = Object[_0x1fbd97(0x68e)]({}, _0xf97d69, _0x4577e7[_0x1fbd97(0x860)](_0xfadf01, _0x4577e7[_0x1fbd97(0x9e)], {}));
    delete _0xb2691a[_0x1fbd97(0x818)];
    _0x4577e7[_0x1fbd97(0x164)](_0xb2691a[_0x1fbd97(0x218)], !![]) && (_0xb2691a[_0x1fbd97(0x54c)] = ![], _0xb2691a[_0x1fbd97(0x79b)] = ![], _0xb2691a[_0x1fbd97(0x218)] = !![], _0x3f8be3());
    if ((_0xb2691a[_0x1fbd97(0x220)] || _0x1fbd97(0x879)) === _0x1fbd97(0x879)) {
        const _0x4020c3 = parseInt(_0xb2691a[_0x1fbd97(0x7da)], 0xa) || 0x44aa20, _0x29e81e = _0x4577e7[_0x1fbd97(0x212)](parseInt, _0xb2691a['chainScanEnd'], 0xa) || 0x4630c0, _0x158be4 = _0x4577e7[_0x1fbd97(0x1e8)](parseInt, _0xb2691a[_0x1fbd97(0xe8)], 0xa);
        if (!_0x158be4 || _0x4577e7[_0x1fbd97(0x2be)](_0x158be4, _0x4020c3) || _0x4577e7[_0x1fbd97(0x69f)](_0x158be4, _0x29e81e))
            _0xb2691a['chainTargetCurrentId'] = _0x4577e7[_0x1fbd97(0x7e9)](_0x4020c3, Math[_0x1fbd97(0x3ee)](_0x4577e7[_0x1fbd97(0x100)](Math[_0x1fbd97(0x1fc)](), Math[_0x1fbd97(0x3ab)](0x1, _0x4577e7[_0x1fbd97(0x633)](_0x29e81e, _0x4020c3)))));
    }
    delete _0xb2691a[_0x1fbd97(0x7a8)], delete _0xb2691a[_0x1fbd97(0x305)], _0xb2691a[_0x1fbd97(0x684)] = !![];
    function _0x3f8be3() {
        const _0x5ca0ee = _0x1fbd97;
        _0x48509d(_0x5ca0ee(0x2a5), _0xb2691a), _0x4577e7[_0x5ca0ee(0x224)](_0x5efbb7, _0x4577e7[_0x5ca0ee(0x807)], {
            'key': _0x4577e7[_0x5ca0ee(0x9e)],
            'value': _0xb2691a
        });
    }
    const _0x2550b2 = {};
    _0x2550b2[_0x1fbd97(0x74a)] = ![], _0x2550b2[_0x1fbd97(0x1ac)] = 0x0, _0x2550b2[_0x1fbd97(0x3ab)] = 0xa, _0x2550b2[_0x1fbd97(0x40b)] = 0x0, _0x2550b2[_0x1fbd97(0x420)] = 0x1, _0x2550b2[_0x1fbd97(0xe1)] = 0x0, _0x2550b2[_0x1fbd97(0x189)] = ![], _0x2550b2['alerted30s'] = ![], _0x2550b2[_0x1fbd97(0x687)] = 0x0;
    const _0x2927cd = _0x2550b2, _0x5975af = {};
    _0x5975af['id'] = null, _0x5975af['name'] = null, _0x5975af[_0x1fbd97(0x825)] = null, _0x5975af[_0x1fbd97(0x149)] = 0x0;
    const _0x2fa5f3 = _0x5975af;
    let _0x61dadc = _0xfadf01(_0x4577e7['pJvgL'], []);
    if (!Array['isArray'](_0x61dadc))
        _0x61dadc = [];
    function _0x90864b() {
        const _0x367f3a = _0x1fbd97;
        _0x4577e7[_0x367f3a(0x37e)](_0x48509d, _0x4577e7[_0x367f3a(0x152)], _0x61dadc), _0x5efbb7(_0x4577e7[_0x367f3a(0x807)], {
            'key': _0x4577e7[_0x367f3a(0x152)],
            'value': _0x61dadc
        });
    }
    let _0x178588 = _0xfadf01(_0x1fbd97(0x515), []);
    if (!Array[_0x1fbd97(0x26b)](_0x178588))
        _0x178588 = [];
    function _0x1d280c() {
        const _0x176b3f = _0x1fbd97;
        _0x4577e7[_0x176b3f(0x875)](_0x48509d, _0x176b3f(0x515), _0x178588);
        const _0x277718 = {};
        _0x277718['key'] = _0x4577e7['hakNQ'], _0x277718[_0x176b3f(0x1d5)] = _0x178588, _0x5efbb7(_0x176b3f(0x4b6), _0x277718);
    }
    let _0x9a575c = _0xfadf01(_0x1fbd97(0x696), {});
    if (typeof _0x9a575c !== _0x4577e7[_0x1fbd97(0x3e5)] || _0x9a575c === null)
        _0x9a575c = {};
    function _0x5342a6() {
        const _0x554318 = _0x1fbd97;
        _0x4577e7[_0x554318(0x60c)](_0x48509d, _0x554318(0x696), _0x9a575c);
        const _0x4bc41a = {};
        _0x4bc41a[_0x554318(0x20c)] = _0x554318(0x696), _0x4bc41a['value'] = _0x9a575c, _0x5efbb7(_0x4577e7[_0x554318(0x807)], _0x4bc41a);
    }
    function _0x1383de(_0x2fec19) {
        return _0x4577e7['aPSQK'](Boolean, _0x9a575c[_0x2fec19]?.['isMuted']);
    }
    function _0x2eb773(_0xfb5400, _0x46fd9b) {
        const _0x428b41 = _0x1fbd97;
        if (!_0x9a575c[_0xfb5400])
            _0x9a575c[_0xfb5400] = {};
        _0x9a575c[_0xfb5400][_0x428b41(0x9b)] = _0x4577e7[_0x428b41(0x697)](Boolean, _0x46fd9b), _0x5342a6();
    }
    let _0x26e1e9 = _0x4577e7[_0x1fbd97(0x625)](_0xfadf01, _0x1fbd97(0x324), _0x1fbd97(0x787));
    function _0x1277d0(_0x4ab462) {
        _0x26e1e9 = _0x4ab462, _0x48509d('radar_active_tab', _0x4ab462);
    }
    const _0x4ad13c = {
        'factions': new Map(),
        'lastFetched': 0x0,
        'isFetching': ![]
    };
    async function _0x59d7e0(_0x332fe4 = ![]) {
        const _0x3e057a = _0x1fbd97;
        if (!_0x4b673b)
            return;
        const _0x109ebe = Date[_0x3e057a(0x6d4)]();
        if (!_0x332fe4 && _0x4ad13c[_0x3e057a(0x3db)] > 0x0 && _0x109ebe - _0x4ad13c[_0x3e057a(0x3db)] < _0x4577e7[_0x3e057a(0x5be)](0xa, 0x3c) * 0x3e8)
            return;
        if (_0x4ad13c[_0x3e057a(0x7f7)])
            return;
        const _0x2313df = _0x169f99();
        if (!_0x2313df)
            return;
        _0x4ad13c[_0x3e057a(0x7f7)] = !![];
        try {
            const _0x3abf65 = 'https://api.torn.com/torn/?selections=rankedwars,territorywars&key=' + _0x2313df + _0x3e057a(0x73e), _0xdf41c = await _0x4577e7[_0x3e057a(0x7ea)](fetch, _0x3abf65);
            if (!_0xdf41c['ok'])
                return;
            const _0x590e4d = await _0xdf41c[_0x3e057a(0x616)]();
            if (_0x590e4d && _0x590e4d['error']) {
                console[_0x3e057a(0x257)](_0x4577e7['tOQeM'], _0x590e4d[_0x3e057a(0x313)]);
                return;
            }
            const _0xbb0ee2 = Math[_0x3e057a(0x3ee)](_0x109ebe / 0x3e8), _0x307dad = new Map();
            if (_0x590e4d[_0x3e057a(0xc1)] && typeof _0x590e4d[_0x3e057a(0xc1)] === _0x4577e7[_0x3e057a(0x3e5)])
                for (const [_0x5b421, _0x3f224c] of Object['entries'](_0x590e4d[_0x3e057a(0xc1)])) {
                    const _0xa7e773 = _0x3f224c[_0x3e057a(0x78a)] || {}, _0x2a1178 = parseInt(_0xa7e773[_0x3e057a(0x400)] || 0x0, 0xa), _0x13f294 = _0x4577e7[_0x3e057a(0x482)](parseInt, _0xa7e773['end'] || 0x0, 0xa), _0x2cc1cb = parseInt(_0xa7e773[_0x3e057a(0x531)] || 0x0, 0xa);
                    if (_0x4577e7['MsRQf'](_0x2a1178, _0xbb0ee2) && (_0x13f294 === 0x0 || _0x4577e7[_0x3e057a(0x35a)](_0x13f294, _0xbb0ee2)) && (!_0x2cc1cb || _0x2cc1cb === 0x0)) {
                        const _0x5a5378 = Object[_0x3e057a(0x7b)](_0x3f224c[_0x3e057a(0x48c)] || {});
                        for (const [_0x5d13b4, _0x479b3a] of _0x5a5378) {
                            const _0x1f23d7 = _0x5a5378['find'](([_0x4e91d0]) => String(_0x4e91d0) !== String(_0x5d13b4)), _0x34c04a = {};
                            _0x34c04a[_0x3e057a(0x6c)] = _0x3e057a(0x4fe), _0x34c04a[_0x3e057a(0x516)] = _0x5b421, _0x34c04a['factionName'] = _0x479b3a[_0x3e057a(0x102)] || '', _0x34c04a['opponentId'] = _0x1f23d7 ? _0x1f23d7[0x0] : null, _0x34c04a[_0x3e057a(0x3a2)] = _0x1f23d7 ? _0x1f23d7[0x1]?.[_0x3e057a(0x102)] || _0x3e057a(0x96) : _0x4577e7['RNDlb'], _0x307dad[_0x3e057a(0x2d1)](String(_0x5d13b4), _0x34c04a);
                        }
                    }
                }
            if (_0x590e4d[_0x3e057a(0x5a3)] && typeof _0x590e4d[_0x3e057a(0x5a3)] === _0x3e057a(0x301))
                for (const [_0xb9de8d, _0x5a69aa] of Object[_0x3e057a(0x7b)](_0x590e4d[_0x3e057a(0x5a3)])) {
                    const _0x53bafd = parseInt(_0x5a69aa[_0x3e057a(0x3d7)] || 0x0, 0xa), _0xfe4616 = parseInt(_0x5a69aa[_0x3e057a(0x148)] || 0x0, 0xa);
                    if (_0x53bafd <= _0xbb0ee2 && (!_0xfe4616 || _0xfe4616 > _0xbb0ee2)) {
                        const _0x139f2f = String(_0x5a69aa[_0x3e057a(0x16d)] || ''), _0x5c1332 = String(_0x5a69aa[_0x3e057a(0x2ce)] || '');
                        if (_0x139f2f && !_0x307dad[_0x3e057a(0x543)](_0x139f2f)) {
                            const _0x2b5214 = {};
                            _0x2b5214['type'] = _0x3e057a(0x76d), _0x2b5214['warId'] = _0x5a69aa[_0x3e057a(0x252)] || _0xb9de8d, _0x2b5214[_0x3e057a(0x31a)] = _0xb9de8d, _0x2b5214[_0x3e057a(0x314)] = _0x5c1332, _0x307dad[_0x3e057a(0x2d1)](_0x139f2f, _0x2b5214);
                        }
                        if (_0x5c1332 && !_0x307dad['has'](_0x5c1332)) {
                            const _0x322ed1 = {};
                            _0x322ed1[_0x3e057a(0x6c)] = _0x4577e7[_0x3e057a(0x679)], _0x322ed1['warId'] = _0x5a69aa[_0x3e057a(0x252)] || _0xb9de8d, _0x322ed1[_0x3e057a(0x31a)] = _0xb9de8d, _0x322ed1[_0x3e057a(0x314)] = _0x139f2f, _0x307dad['set'](_0x5c1332, _0x322ed1);
                        }
                    }
                }
            _0x4ad13c[_0x3e057a(0x48c)] = _0x307dad, _0x4ad13c[_0x3e057a(0x3db)] = Date[_0x3e057a(0x6d4)](), console['log'](_0x3e057a(0x171) + _0x307dad[_0x3e057a(0xad)] + _0x3e057a(0x539));
            try {
                localStorage['setItem'](_0x3e057a(0x1a3), JSON[_0x3e057a(0x7d8)](Array['from'](_0x307dad['keys']())));
            } catch (_0x3e9149) {
            }
            if (typeof _0x61dadc !== _0x4577e7['Sqgjr'] && Array[_0x3e057a(0x26b)](_0x61dadc)) {
                let _0x4d6fe5 = ![];
                for (const _0x3ebb8d of _0x61dadc) {
                    const _0x3f6975 = _0x4f991c[_0x3ebb8d];
                    if (_0x3f6975 && _0x3f6975[_0x3e057a(0x3c1)] && (_0x3f6975[_0x3e057a(0x3c1)][_0x3e057a(0x385)] || _0x3f6975[_0x3e057a(0x3c1)]['wall'])) {
                        const _0x267a86 = _0x4577e7['huqBw'](_0x4349ec, _0x3f6975[_0x3e057a(0x3c1)]['factionId'], _0x3f6975[_0x3e057a(0x3c1)][_0x3e057a(0x747)] || null), _0x4736d0 = _0x3f6975[_0x3e057a(0x3c1)][_0x3e057a(0x184)];
                        _0x3f6975[_0x3e057a(0x3c1)][_0x3e057a(0x184)] = !!_0x267a86, _0x3f6975[_0x3e057a(0x3c1)][_0x3e057a(0x3e4)] = _0x267a86;
                        if (_0x4736d0 !== _0x3f6975['data'][_0x3e057a(0x184)]) {
                            _0x4d6fe5 = !![], _0x4577e7[_0x3e057a(0x7e3)](_0x5366f2, _0x3ebb8d);
                            if (_0x4577e7['JtiZV'](_0x26e1e9, _0x3e057a(0x787)))
                                _0x4577e7[_0x3e057a(0x7b5)](_0x70efbf, _0x3ebb8d);
                        }
                    }
                }
                if (_0x4d6fe5)
                    _0x4577e7[_0x3e057a(0x705)](_0x58accf);
            }
        } catch (_0x57aa0a) {
            console[_0x3e057a(0x313)](_0x4577e7[_0x3e057a(0x158)], _0x57aa0a);
        } finally {
            _0x4ad13c[_0x3e057a(0x7f7)] = ![];
        }
    }
    function _0x8b16cd(_0x245662) {
        const _0x57e3ec = _0x1fbd97;
        if (!_0x245662 || _0x4577e7[_0x57e3ec(0x2d8)](_0x245662, 0x0))
            return null;
        return _0x4ad13c[_0x57e3ec(0x48c)][_0x57e3ec(0x613)](String(_0x245662)) || null;
    }
    let _0x463892 = _0x4577e7['uKhBu'](_0xfadf01, 'target_meta', {});
    if (typeof _0x463892 !== _0x1fbd97(0x301) || _0x4577e7[_0x1fbd97(0x424)](_0x463892, null))
        _0x463892 = {};
    function _0x15b38b() {
        const _0x3f6674 = _0x1fbd97;
        _0x48509d(_0x3f6674(0x5f7), _0x463892), _0x4577e7[_0x3f6674(0x3cf)](_0x5efbb7, _0x4577e7['doRTz'], {
            'key': _0x4577e7['WoVcL'],
            'value': _0x463892
        });
    }
    function _0x48c321(_0x4b9b70) {
        const _0x4e1093 = _0x1fbd97;
        return Boolean(_0x463892[_0x4b9b70]?.[_0x4e1093(0x1c1)]);
    }
    function _0x21a3c0(_0x463eda, _0x24efac) {
        if (!_0x463892[_0x463eda])
            _0x463892[_0x463eda] = {};
        _0x463892[_0x463eda]['isStricken'] = Boolean(_0x24efac), _0x15b38b();
    }
    function _0x32378e(_0x2d3936) {
        const _0x36021d = _0x1fbd97;
        if (_0x463892[_0x2d3936] && _0x4577e7[_0x36021d(0x7ef)](_0x463892[_0x2d3936]['inactiveLimitMin'], undefined))
            return _0x463892[_0x2d3936]['inactiveLimitMin'];
        return parseInt(_0xb2691a[_0x36021d(0x365)], 0xa) || 0x5;
    }
    function _0x45ff20(_0x5d410c, _0x2ee0f2) {
        const _0x4941ef = _0x1fbd97;
        if (!_0x463892[_0x5d410c])
            _0x463892[_0x5d410c] = {};
        const _0x12a165 = parseInt(_0x2ee0f2, 0xa);
        _0x12a165 !== 0x0 ? _0x463892[_0x5d410c][_0x4941ef(0x34c)] = _0x12a165 : delete _0x463892[_0x5d410c][_0x4941ef(0x34c)], _0x15b38b();
    }
    function _0x1ea452(_0x4a7be9) {
        const _0x152196 = _0x1fbd97;
        if (!_0x4a7be9 || _0x4577e7[_0x152196(0xb2)](typeof _0x4a7be9, _0x152196(0x301)))
            return null;
        for (const _0x2e4145 of Object[_0x152196(0x20b)](_0x4a7be9)) {
            if (typeof _0x2e4145 !== _0x152196(0x393))
                continue;
            const _0xb561f2 = _0x2e4145[_0x152196(0x86f)]();
            if (!(_0xb561f2[_0x152196(0x1b1)](_0x4577e7[_0x152196(0x4b7)]) || _0xb561f2[_0x152196(0x1b1)](_0x4577e7[_0x152196(0x13e)]) || (_0xb561f2[_0x152196(0x1b1)](_0x152196(0x2d0)) || _0xb561f2[_0x152196(0x1b1)](_0x152196(0x526))) && _0xb561f2[_0x152196(0x1b1)](_0x4577e7['VPsJg'])))
                continue;
            const _0x36edd9 = _0x2e4145[_0x152196(0x1e9)](/(defending|assaulting)\s*:?\s*(\S*)/i), _0x50db7c = _0x36edd9 && /^[A-Z0-9]{2,4}$/[_0x152196(0x66b)](_0x36edd9[0x2]) ? _0x36edd9[0x2] : '';
            return {
                'role': _0x36edd9 ? _0x4577e7[_0x152196(0x461)](_0x36edd9[0x1][_0x152196(0x71c)](0x0)[_0x152196(0x6c8)](), _0x36edd9[0x1][_0x152196(0x348)](0x1)['toLowerCase']()) : null,
                'sector': _0x50db7c
            };
        }
        return null;
    }
    function _0x41b025(_0x10b5f2) {
        const _0x4495b1 = _0x1fbd97;
        return _0x4577e7[_0x4495b1(0x86c)](Boolean, _0x4577e7[_0x4495b1(0x697)](_0x1ea452, _0x10b5f2));
    }
    function _0x548aeb(_0x46c3de) {
        const _0x491d4f = _0x1fbd97;
        if (!_0x46c3de)
            return '';
        return [
            _0x46c3de[_0x491d4f(0x17f)],
            _0x46c3de[_0x491d4f(0x31a)]
        ][_0x491d4f(0x71f)](Boolean)[_0x491d4f(0x663)]('\x20');
    }
    function _0x4349ec(_0x3fcec1, _0x4eab93) {
        const _0x4d6c9b = _0x1fbd97, _0x40ea11 = _0x8b16cd(_0x3fcec1);
        if (!_0x4eab93)
            return _0x40ea11;
        if (_0x40ea11 && _0x4577e7[_0x4d6c9b(0x586)](_0x40ea11[_0x4d6c9b(0x6c)], _0x4577e7[_0x4d6c9b(0x695)]))
            return {
                ..._0x40ea11,
                'wall': _0x4eab93
            };
        const _0x4f466a = { ..._0x40ea11 || {} };
        return _0x4f466a[_0x4d6c9b(0x6c)] = _0x4577e7[_0x4d6c9b(0x679)], _0x4f466a['sector'] = _0x4eab93[_0x4d6c9b(0x31a)] || _0x40ea11?.[_0x4d6c9b(0x31a)] || '', _0x4f466a[_0x4d6c9b(0x747)] = _0x4eab93, _0x4f466a;
    }
    function _0x4870df(_0x1ae734, _0x2c88c3 = null) {
        const _0x324f07 = _0x1fbd97, _0x355bd0 = _0x2c88c3 || (_0x1ae734 && _0x4f991c[_0x1ae734] ? _0x4f991c[_0x1ae734]['data'] : null);
        if (_0x355bd0 && (_0x355bd0[_0x324f07(0x747)] || _0x355bd0[_0x324f07(0x858)] === !![]))
            return !![];
        if (_0x1ae734 && _0x463892[_0x1ae734] && _0x4577e7[_0x324f07(0x2a3)](typeof _0x463892[_0x1ae734][_0x324f07(0x781)], _0x324f07(0x624)))
            return _0x463892[_0x1ae734][_0x324f07(0x781)];
        if (_0x355bd0) {
            if (typeof _0x355bd0[_0x324f07(0x858)] === _0x4577e7[_0x324f07(0x395)])
                return _0x355bd0[_0x324f07(0x858)];
            if (_0x355bd0[_0x324f07(0xfe)])
                return _0x41b025(_0x355bd0[_0x324f07(0xfe)]);
        }
        if (_0x1ae734 && _0x463892[_0x1ae734] && _0x463892[_0x1ae734][_0x324f07(0x858)] !== undefined)
            return Boolean(_0x463892[_0x1ae734][_0x324f07(0x858)]);
        return (_0xb2691a[_0x324f07(0x7c8)] || _0x4577e7[_0x324f07(0xee)]) === _0x4577e7[_0x324f07(0x65f)];
    }
    function _0x4a22ad(_0x1c84ae, _0x190cb3) {
        const _0x35d8ae = _0x1fbd97;
        if (!_0x1c84ae)
            return;
        if (!_0x463892[_0x1c84ae])
            _0x463892[_0x1c84ae] = {};
        _0x463892[_0x1c84ae][_0x35d8ae(0x781)] = Boolean(_0x190cb3), _0x463892[_0x1c84ae][_0x35d8ae(0x858)] = Boolean(_0x190cb3), _0x15b38b(), _0x4f991c[_0x1c84ae] && _0x4f991c[_0x1c84ae][_0x35d8ae(0x3c1)] && (_0x4f991c[_0x1c84ae][_0x35d8ae(0x3c1)][_0x35d8ae(0x858)] = Boolean(_0x190cb3));
    }
    function _0x49f457(_0x2ff44f, _0xe85274 = null) {
        const _0x205102 = _0x1fbd97;
        if (!_0x2ff44f || !_0x2ff44f[_0x205102(0x184)] || !_0x2ff44f[_0x205102(0x3e4)])
            return ![];
        if (_0x2ff44f[_0x205102(0x3e4)]['type'] === _0x205102(0x4fe))
            return !![];
        if (_0x2ff44f[_0x205102(0x3e4)][_0x205102(0x6c)] === 'Territory\x20War')
            return _0x4870df(_0xe85274, _0x2ff44f);
        return Boolean(_0x2ff44f['warActive']);
    }
    const _0x4f991c = {}, _0x4f3ca7 = [];
    function _0x419331() {
        const _0x369295 = _0x1fbd97, _0x3ba4dd = Date['now']();
        _0x4f3ca7[_0x369295(0x563)](_0x3ba4dd);
        while (_0x4f3ca7[_0x369295(0x5a5)] > 0x0 && _0x4f3ca7[0x0] < _0x3ba4dd - 0xea60) {
            _0x4f3ca7[_0x369295(0x80e)]();
        }
    }
    function _0x112493() {
        const _0x2bfdea = _0x1fbd97, _0x3cd698 = Date[_0x2bfdea(0x6d4)]();
        while (_0x4f3ca7[_0x2bfdea(0x5a5)] > 0x0 && _0x4577e7[_0x2bfdea(0xf5)](_0x4f3ca7[0x0], _0x4577e7[_0x2bfdea(0x84e)](_0x3cd698, 0xea60))) {
            _0x4f3ca7[_0x2bfdea(0x80e)]();
        }
        return _0x4f3ca7[_0x2bfdea(0x5a5)];
    }
    let _0x31df1e = null;
    function _0x5d0c57() {
        const _0xe4d3a4 = _0x1fbd97;
        try {
            const _0x5aeca0 = window[_0xe4d3a4(0x44b)] || window[_0xe4d3a4(0x844)];
            if (!_0x5aeca0)
                return null;
            return (!_0x31df1e || _0x4577e7[_0xe4d3a4(0x586)](_0x31df1e[_0xe4d3a4(0x4b6)], _0xe4d3a4(0x240))) && (_0x31df1e = new _0x5aeca0()), _0x4577e7[_0xe4d3a4(0x699)](_0x31df1e[_0xe4d3a4(0x4b6)], _0xe4d3a4(0x343)) && _0x31df1e['resume']()[_0xe4d3a4(0x776)](() => {
            }), _0x31df1e;
        } catch (_0x59406e) {
            return null;
        }
    }
    let _0x19430d = ![];
    function _0x4de1ba() {
        const _0x4f89f6 = _0x1fbd97;
        try {
            const _0x450c8b = _0x5d0c57();
            if (_0x450c8b) {
                _0x450c8b['state'] === 'suspended' && _0x450c8b[_0x4f89f6(0x3f7)]()[_0x4f89f6(0x776)](() => {
                });
                if (!_0x19430d) {
                    const _0xe1f35f = _0x450c8b['createBuffer'](0x1, 0x1, 0x5622), _0x4eb2aa = _0x450c8b[_0x4f89f6(0x153)]();
                    _0x4eb2aa[_0x4f89f6(0x816)] = _0xe1f35f, _0x4eb2aa['connect'](_0x450c8b[_0x4f89f6(0x39a)]), _0x4eb2aa[_0x4f89f6(0x400)](0x0), _0x19430d = !![];
                }
            }
        } catch (_0x424213) {
        }
    }
    [
        _0x4577e7[_0x1fbd97(0x25b)],
        _0x4577e7['DpQNk'],
        _0x4577e7['eDyLY'],
        _0x1fbd97(0x271),
        _0x4577e7[_0x1fbd97(0x381)]
    ][_0x1fbd97(0x136)](_0x29aee2 => {
        const _0x423392 = _0x1fbd97, _0x125bc9 = {};
        _0x125bc9[_0x423392(0x70c)] = !![], _0x125bc9[_0x423392(0x6d7)] = !![], document[_0x423392(0x27c)](_0x29aee2, _0x4de1ba, _0x125bc9);
        const _0x1e8348 = {};
        _0x1e8348[_0x423392(0x70c)] = !![], _0x1e8348[_0x423392(0x6d7)] = !![], window[_0x423392(0x27c)](_0x29aee2, _0x4de1ba, _0x1e8348);
    });
    function _0x1d2c41(_0x345095 = _0x1fbd97(0x2ee), _0x9aa578 = 0x3e8, _0x404c54 = 0.85) {
        const _0x498078 = _0x1fbd97;
        try {
            const _0x3eb123 = 0x1f40, _0x2d2a06 = Math[_0x498078(0x3ee)](_0x3eb123 * (_0x9aa578 / 0x3e8)), _0x3e8e4e = new Uint8Array(0x2c + _0x2d2a06), _0x3fcabe = new DataView(_0x3e8e4e['buffer']), _0x9220a2 = (_0x11bbd5, _0x58b66b) => {
                    const _0x2efb17 = _0x498078;
                    for (let _0x1fc17e = 0x0; _0x1fc17e < _0x58b66b['length']; _0x1fc17e++)
                        _0x3e8e4e[_0x11bbd5 + _0x1fc17e] = _0x58b66b[_0x2efb17(0x204)](_0x1fc17e);
                };
            _0x9220a2(0x0, _0x498078(0x63a)), _0x3fcabe[_0x498078(0x7f)](0x4, 0x24 + _0x2d2a06, !![]), _0x9220a2(0x8, _0x498078(0x392)), _0x9220a2(0xc, _0x4577e7[_0x498078(0x541)]), _0x3fcabe['setUint32'](0x10, 0x10, !![]), _0x3fcabe[_0x498078(0x4dc)](0x14, 0x1, !![]), _0x3fcabe[_0x498078(0x4dc)](0x16, 0x1, !![]), _0x3fcabe[_0x498078(0x7f)](0x18, _0x3eb123, !![]), _0x3fcabe[_0x498078(0x7f)](0x1c, _0x3eb123, !![]), _0x3fcabe[_0x498078(0x4dc)](0x20, 0x1, !![]), _0x3fcabe[_0x498078(0x4dc)](0x22, 0x8, !![]), _0x9220a2(0x24, _0x4577e7['UuwpH']), _0x3fcabe[_0x498078(0x7f)](0x28, _0x2d2a06, !![]);
            for (let _0x35a511 = 0x0; _0x35a511 < _0x2d2a06; _0x35a511++) {
                const _0x5e5084 = _0x35a511 / _0x3eb123;
                let _0x357325 = 0x370, _0x222f94 = 0x1;
                if (_0x345095 === _0x498078(0x84a)) {
                    const _0x32047e = _0x5e5084 % 0.33;
                    _0x222f94 = _0x32047e < 0.22 ? 0x1 : 0x0, _0x357325 = 1174.66;
                } else {
                    if (_0x4577e7[_0x498078(0x586)](_0x345095, _0x498078(0x874))) {
                        if (_0x5e5084 < 0.25)
                            _0x357325 = 587.33;
                        else {
                            if (_0x5e5084 < 0.5)
                                _0x357325 = 0x370;
                            else
                                _0x357325 = 1174.66;
                        }
                        _0x222f94 = 0x1;
                    } else
                        _0x357325 = _0x4577e7[_0x498078(0x5f9)](Math[_0x498078(0x3ee)](_0x4577e7[_0x498078(0x5e8)](_0x5e5084, 0.2)), 0x2) === 0x0 ? 0x6e0 : 0x3dc;
                }
                const _0x4f7f55 = Math[_0x498078(0x724)](0x1, (_0x2d2a06 - _0x35a511) / (_0x3eb123 * 0.05)), _0x51fb25 = (Math[_0x498078(0x4a1)](_0x4577e7[_0x498078(0x304)](0x2, Math['PI']) * _0x357325 * _0x5e5084) > 0x0 ? 0x1 : -0x1) * _0x222f94;
                _0x3e8e4e[_0x4577e7[_0x498078(0x26c)](0x2c, _0x35a511)] = Math[_0x498078(0x3ee)](_0x4577e7[_0x498078(0x3ce)](0x80, _0x51fb25 * 0x78 * _0x404c54 * _0x4f7f55));
            }
            const _0x39e734 = {};
            _0x39e734[_0x498078(0x6c)] = 'audio/wav';
            const _0x5963bc = new Blob([_0x3e8e4e], _0x39e734), _0x1cc23c = URL[_0x498078(0x73f)](_0x5963bc), _0x3e800b = new Audio(_0x1cc23c);
            _0x3e800b['volume'] = Math[_0x498078(0x3ab)](0.1, Math['min'](0x1, _0x404c54)), _0x3e800b[_0x498078(0x7ac)]()[_0x498078(0x776)](() => {
            }), setTimeout(() => URL[_0x498078(0xa9)](_0x1cc23c), _0x9aa578 + 0x3e8);
        } catch (_0x294e2) {
            console[_0x498078(0x313)]('[Stakeout]\x20Audio\x20fallback\x20error:', _0x294e2);
        }
    }
    function _0x126116(_0x3ab563) {
        const _0x1d35d3 = _0x1fbd97;
        window[_0x1d35d3(0x289)][_0x1d35d3(0x83c)] = _0x3ab563;
    }
    let _0x528936 = null, _0x28c700 = null;
    function _0x1fbf87(_0x3802a1 = _0x1fbd97(0x1d1)) {
        const _0x2d1292 = _0x1fbd97;
        _0x45c7d9(), _0x28c700 = document[_0x2d1292(0x3dd)];
        let _0xfcbee4 = ![];
        _0x528936 = _0x4577e7[_0x2d1292(0x51a)](setInterval, () => {
            const _0x2591aa = _0x2d1292;
            document[_0x2591aa(0x3dd)] = _0xfcbee4 ? _0x2591aa(0x5ea) + _0x3802a1 + ']' : _0x2591aa(0x5cc), _0xfcbee4 = !_0xfcbee4;
        }, 0x258);
        const _0x21b326 = () => {
            const _0xc77f43 = _0x2d1292;
            _0x45c7d9(), window[_0xc77f43(0x1cd)](_0x4577e7[_0xc77f43(0x1f5)], _0x21b326);
        };
        window[_0x2d1292(0x27c)](_0x2d1292(0x4be), _0x21b326), setTimeout(() => _0x45c7d9(), 0x7530);
    }
    function _0x45c7d9() {
        const _0x1fdd82 = _0x1fbd97;
        _0x528936 && (_0x4577e7[_0x1fdd82(0x827)](clearInterval, _0x528936), _0x528936 = null), _0x28c700 && (document[_0x1fdd82(0x3dd)] = _0x28c700, _0x28c700 = null);
    }
    function _0x203579() {
        const _0x250e44 = _0x1fbd97;
        if (!_0xb2691a[_0x250e44(0x84)])
            return;
        try {
            fetch(_0x4577e7[_0x250e44(0x5bc)], { 'mode': _0x4577e7[_0x250e44(0x64b)] })[_0x250e44(0x776)](() => {
            });
        } catch (_0x3356b0) {
        }
    }
    function _0x46b5d3(_0x10e25a = _0x1fbd97(0x2ee)) {
        const _0x551757 = _0x1fbd97, _0x30362b = {
                'UYnqV': _0x551757(0x50b),
                'isZmT': function (_0x1f6c38, _0x51f566) {
                    return _0x1f6c38 + _0x51f566;
                },
                'EHyMz': function (_0x10dde5, _0x3e707b) {
                    const _0x1b3013 = _0x551757;
                    return _0x4577e7[_0x1b3013(0x16b)](_0x10dde5, _0x3e707b);
                },
                'mxhHk': _0x4577e7[_0x551757(0x593)]
            };
        if (!_0xb2691a[_0x551757(0x54f)])
            return;
        const _0x874b51 = {};
        _0x874b51[_0x551757(0x2ee)] = 'sp', _0x874b51['online'] = 'sp', _0x874b51[_0x551757(0x4e7)] = 'sp', _0x874b51[_0x551757(0x18f)] = 'tw';
        const _0xc1b09b = _0x874b51[_0x10e25a];
        if (_0xc1b09b && !_0x4c3563(_0xc1b09b)) {
            console[_0x551757(0x760)](_0x551757(0xfc) + _0x10e25a + _0x551757(0x652) + _0xc1b09b['toUpperCase']() + '\x20module');
            return;
        }
        const _0x58c413 = Math[_0x551757(0x3ab)](0.1, Math[_0x551757(0x724)](0x1, _0xb2691a[_0x551757(0x1ad)] ?? 0x1)), _0x1707b5 = _0x4577e7[_0x551757(0x491)](_0x5d0c57);
        _0x1707b5 && _0x1707b5[_0x551757(0x4b6)] === 'suspended' && _0x1707b5[_0x551757(0x3f7)]()[_0x551757(0x776)](() => {
        });
        (!_0x1707b5 || _0x4577e7[_0x551757(0x42d)](_0x1707b5[_0x551757(0x4b6)], _0x551757(0x61e))) && _0x1d2c41(_0x10e25a, _0x10e25a === _0x4577e7['sdGAx'] ? 0x3e8 : _0x10e25a === _0x551757(0x874) ? 0x320 : 0x4b0, _0x58c413);
        try {
            if (!_0x1707b5)
                return;
            const _0x28d19a = _0xb2691a['alarmSoundType'] || _0x551757(0x4df);
            if (_0x10e25a === _0x551757(0x2ee) || _0x10e25a === 'test') {
                const _0x2a91bb = _0x1707b5[_0x551757(0x552)]();
                _0x2a91bb['gain'][_0x551757(0x19e)](0.85 * _0x58c413, _0x1707b5[_0x551757(0x4a2)]), _0x2a91bb[_0x551757(0x62a)](_0x1707b5['destination']);
                if (_0x28d19a === _0x551757(0x4df))
                    for (let _0x2c6b5c = 0x0; _0x2c6b5c < 0x3; _0x2c6b5c++) {
                        const _0x1efee5 = _0x4577e7[_0x551757(0xc2)](_0x1707b5[_0x551757(0x4a2)], _0x4577e7[_0x551757(0x282)](_0x2c6b5c, 0.4)), _0x377b36 = _0x1707b5[_0x551757(0x7bd)](), _0x198bc4 = _0x1707b5[_0x551757(0x7bd)](), _0x1e21ac = _0x1707b5[_0x551757(0x552)]();
                        _0x377b36['type'] = _0x4577e7[_0x551757(0x4e5)], _0x198bc4[_0x551757(0x6c)] = 'square', _0x377b36[_0x551757(0x6e5)][_0x551757(0x19e)](0x6e0, _0x1efee5), _0x198bc4[_0x551757(0x6e5)][_0x551757(0x19e)](0x6e0, _0x1efee5), _0x1e21ac[_0x551757(0x230)]['setValueAtTime'](0.5, _0x1efee5), _0x1e21ac[_0x551757(0x230)]['exponentialRampToValueAtTime'](0.01, _0x4577e7[_0x551757(0xd0)](_0x1efee5, 0.18)), _0x377b36[_0x551757(0x62a)](_0x1e21ac), _0x198bc4['connect'](_0x1e21ac), _0x1e21ac[_0x551757(0x62a)](_0x2a91bb), _0x377b36[_0x551757(0x400)](_0x1efee5), _0x198bc4['start'](_0x1efee5), _0x377b36[_0x551757(0x117)](_0x4577e7[_0x551757(0x4b1)](_0x1efee5, 0.18)), _0x198bc4[_0x551757(0x117)](_0x1efee5 + 0.18);
                        const _0x5e191a = _0x1707b5[_0x551757(0x7bd)](), _0x332a76 = _0x1707b5[_0x551757(0x7bd)](), _0x1fd7e7 = _0x1707b5['createGain']();
                        _0x5e191a[_0x551757(0x6c)] = _0x551757(0x50b), _0x332a76[_0x551757(0x6c)] = _0x551757(0x441), _0x5e191a[_0x551757(0x6e5)][_0x551757(0x19e)](0x3dc, _0x1efee5 + 0.2), _0x332a76['frequency'][_0x551757(0x19e)](0x3dc, _0x4577e7[_0x551757(0x5aa)](_0x1efee5, 0.2)), _0x1fd7e7[_0x551757(0x230)][_0x551757(0x19e)](0.5, _0x1efee5 + 0.2), _0x1fd7e7[_0x551757(0x230)]['exponentialRampToValueAtTime'](0.01, _0x4577e7[_0x551757(0x26c)](_0x1efee5, 0.38)), _0x5e191a[_0x551757(0x62a)](_0x1fd7e7), _0x332a76[_0x551757(0x62a)](_0x1fd7e7), _0x1fd7e7[_0x551757(0x62a)](_0x2a91bb), _0x5e191a[_0x551757(0x400)](_0x1efee5 + 0.2), _0x332a76['start'](_0x4577e7[_0x551757(0x4b1)](_0x1efee5, 0.2)), _0x5e191a[_0x551757(0x117)](_0x1efee5 + 0.38), _0x332a76['stop'](_0x1efee5 + 0.38);
                    }
                else {
                    if (_0x28d19a === _0x551757(0x126)) {
                        const _0x1d62f1 = {};
                        _0x1d62f1[_0x551757(0x400)] = _0x1707b5['currentTime'], _0x1d62f1[_0x551757(0x456)] = 0.32;
                        const _0x103b8a = {};
                        _0x103b8a[_0x551757(0x400)] = _0x1707b5[_0x551757(0x4a2)] + 0.42, _0x103b8a['dur'] = 0.48;
                        const _0x145282 = [
                            _0x1d62f1,
                            _0x103b8a
                        ];
                        _0x145282[_0x551757(0x136)](_0x314141 => {
                            [
                                0x1b8,
                                554.37,
                                659.25
                            ]['forEach'](_0x3bf262 => {
                                const _0x1a8a66 = _0x5ca8, _0x5aff93 = _0x1707b5['createOscillator'](), _0x234e95 = _0x1707b5['createGain']();
                                _0x5aff93[_0x1a8a66(0x6c)] = _0x30362b['UYnqV'], _0x5aff93[_0x1a8a66(0x6e5)][_0x1a8a66(0x19e)](_0x3bf262, _0x314141['start']), _0x234e95[_0x1a8a66(0x230)]['setValueAtTime'](0.33, _0x314141[_0x1a8a66(0x400)]), _0x234e95[_0x1a8a66(0x230)][_0x1a8a66(0x795)](0.01, _0x314141['start'] + _0x314141[_0x1a8a66(0x456)]), _0x5aff93[_0x1a8a66(0x62a)](_0x234e95), _0x234e95[_0x1a8a66(0x62a)](_0x2a91bb), _0x5aff93[_0x1a8a66(0x400)](_0x314141[_0x1a8a66(0x400)]), _0x5aff93['stop'](_0x314141['start'] + _0x314141['dur']);
                            });
                        });
                    } else {
                        if (_0x28d19a === _0x551757(0x669))
                            for (let _0x9abe47 = 0x0; _0x4577e7['dhJHd'](_0x9abe47, 0x2); _0x9abe47++) {
                                const _0x78430e = _0x1707b5[_0x551757(0x4a2)] + _0x4577e7[_0x551757(0x3b6)](_0x9abe47, 0.55), _0x678496 = _0x1707b5[_0x551757(0x7bd)](), _0xd484a6 = _0x1707b5[_0x551757(0x552)]();
                                _0x678496['type'] = _0x4577e7[_0x551757(0x4e5)], _0x678496[_0x551757(0x6e5)][_0x551757(0x19e)](587.33, _0x78430e), _0x678496[_0x551757(0x6e5)][_0x551757(0x819)](1174.66, _0x78430e + 0.25), _0x678496[_0x551757(0x6e5)][_0x551757(0x819)](587.33, _0x78430e + 0.5), _0xd484a6[_0x551757(0x230)][_0x551757(0x19e)](0.8, _0x78430e), _0xd484a6[_0x551757(0x230)]['exponentialRampToValueAtTime'](0.01, _0x4577e7[_0x551757(0x461)](_0x78430e, 0.5)), _0x678496[_0x551757(0x62a)](_0xd484a6), _0xd484a6['connect'](_0x2a91bb), _0x678496[_0x551757(0x400)](_0x78430e), _0x678496[_0x551757(0x117)](_0x78430e + 0.5);
                            }
                        else {
                            const _0xde6678 = _0x1707b5[_0x551757(0x4a2)], _0x5a0aac = _0x1707b5[_0x551757(0x7bd)](), _0x10ea57 = _0x1707b5[_0x551757(0x7bd)](), _0x3b3667 = _0x1707b5[_0x551757(0x552)](), _0x2a56cd = _0x1707b5['createGain']();
                            _0x5a0aac[_0x551757(0x6c)] = _0x4577e7[_0x551757(0x593)], _0x10ea57[_0x551757(0x6c)] = _0x4577e7[_0x551757(0x3d8)], _0x5a0aac[_0x551757(0x6e5)][_0x551757(0x19e)](1046.5, _0xde6678), _0x10ea57[_0x551757(0x6e5)][_0x551757(0x19e)](1567.98, _0xde6678 + 0.18), _0x3b3667['gain'][_0x551757(0x19e)](0.7, _0xde6678), _0x3b3667[_0x551757(0x230)][_0x551757(0x795)](0.01, _0x4577e7[_0x551757(0x461)](_0xde6678, 0.5)), _0x2a56cd[_0x551757(0x230)][_0x551757(0x19e)](0.8, _0x4577e7[_0x551757(0x3ce)](_0xde6678, 0.18)), _0x2a56cd[_0x551757(0x230)]['exponentialRampToValueAtTime'](0.01, _0x4577e7[_0x551757(0x5a2)](_0xde6678, 0.7)), _0x5a0aac[_0x551757(0x62a)](_0x3b3667), _0x10ea57[_0x551757(0x62a)](_0x2a56cd), _0x3b3667['connect'](_0x2a91bb), _0x2a56cd[_0x551757(0x62a)](_0x2a91bb), _0x5a0aac['start'](_0xde6678), _0x10ea57[_0x551757(0x400)](_0x4577e7[_0x551757(0x21e)](_0xde6678, 0.18)), _0x5a0aac[_0x551757(0x117)](_0x4577e7['QETpd'](_0xde6678, 0.5)), _0x10ea57[_0x551757(0x117)](_0xde6678 + 0.7);
                        }
                    }
                }
            } else {
                if (_0x10e25a === _0x4577e7[_0x551757(0x37d)]) {
                    const _0x57d9ce = _0x1707b5[_0x551757(0x552)]();
                    _0x57d9ce[_0x551757(0x230)][_0x551757(0x19e)](0.85 * _0x58c413, _0x1707b5[_0x551757(0x4a2)]), _0x57d9ce['connect'](_0x1707b5['destination']);
                    for (let _0x5da1cb = 0x0; _0x4577e7[_0x551757(0xf5)](_0x5da1cb, 0x3); _0x5da1cb++) {
                        const _0x3e5cbc = _0x4577e7['hfhaJ'](_0x1707b5[_0x551757(0x4a2)], _0x4577e7[_0x551757(0x304)](_0x5da1cb, 0.32)), _0x22e71f = _0x1707b5['createOscillator'](), _0x106fa6 = _0x1707b5['createOscillator'](), _0x3439be = _0x1707b5[_0x551757(0x552)]();
                        _0x22e71f[_0x551757(0x6c)] = _0x551757(0x50b), _0x106fa6['type'] = _0x551757(0x441), _0x22e71f[_0x551757(0x6e5)]['setValueAtTime'](1046.5, _0x3e5cbc), _0x106fa6[_0x551757(0x6e5)][_0x551757(0x19e)](1318.5, _0x3e5cbc), _0x3439be[_0x551757(0x230)][_0x551757(0x19e)](0.6, _0x3e5cbc), _0x3439be[_0x551757(0x230)][_0x551757(0x795)](0.01, _0x3e5cbc + 0.22), _0x22e71f[_0x551757(0x62a)](_0x3439be), _0x106fa6[_0x551757(0x62a)](_0x3439be), _0x3439be[_0x551757(0x62a)](_0x57d9ce), _0x22e71f['start'](_0x3e5cbc), _0x106fa6[_0x551757(0x400)](_0x3e5cbc), _0x22e71f[_0x551757(0x117)](_0x4577e7['iPBLH'](_0x3e5cbc, 0.22)), _0x106fa6['stop'](_0x3e5cbc + 0.22);
                    }
                } else {
                    if (_0x4577e7[_0x551757(0x699)](_0x10e25a, _0x551757(0x874))) {
                        const _0x44c752 = _0x1707b5[_0x551757(0x552)]();
                        _0x44c752[_0x551757(0x230)][_0x551757(0x19e)](_0x4577e7[_0x551757(0x5be)](0.85, _0x58c413), _0x1707b5[_0x551757(0x4a2)]), _0x44c752['connect'](_0x1707b5[_0x551757(0x39a)]);
                        const _0xe50ad = {};
                        _0xe50ad['f'] = 587.33, _0xe50ad['t'] = 0x0, _0xe50ad['d'] = 0.18;
                        const _0x57773e = {};
                        _0x57773e['f'] = 0x370, _0x57773e['t'] = 0.18, _0x57773e['d'] = 0.18;
                        const _0x21f731 = {};
                        _0x21f731['f'] = 1174.66, _0x21f731['t'] = 0.36, _0x21f731['d'] = 0.44;
                        const _0x4c5e74 = [
                            _0xe50ad,
                            _0x57773e,
                            _0x21f731
                        ];
                        _0x4c5e74[_0x551757(0x136)](_0x3802d0 => {
                            const _0x203ab1 = _0x551757, _0x2a323e = _0x30362b['isZmT'](_0x1707b5[_0x203ab1(0x4a2)], _0x3802d0['t']), _0x1469ed = _0x1707b5[_0x203ab1(0x7bd)](), _0x585340 = _0x1707b5[_0x203ab1(0x7bd)](), _0x2ac0cd = _0x1707b5[_0x203ab1(0x552)]();
                            _0x1469ed[_0x203ab1(0x6c)] = _0x203ab1(0x50b), _0x585340[_0x203ab1(0x6c)] = _0x203ab1(0x441), _0x1469ed[_0x203ab1(0x6e5)][_0x203ab1(0x19e)](_0x3802d0['f'], _0x2a323e), _0x585340[_0x203ab1(0x6e5)]['setValueAtTime'](_0x3802d0['f'], _0x2a323e), _0x2ac0cd[_0x203ab1(0x230)][_0x203ab1(0x19e)](0.5, _0x2a323e), _0x2ac0cd[_0x203ab1(0x230)]['exponentialRampToValueAtTime'](0.01, _0x2a323e + _0x3802d0['d']), _0x1469ed['connect'](_0x2ac0cd), _0x585340[_0x203ab1(0x62a)](_0x2ac0cd), _0x2ac0cd[_0x203ab1(0x62a)](_0x44c752), _0x1469ed[_0x203ab1(0x400)](_0x2a323e), _0x585340[_0x203ab1(0x400)](_0x2a323e), _0x1469ed[_0x203ab1(0x117)](_0x2a323e + _0x3802d0['d']), _0x585340[_0x203ab1(0x117)](_0x30362b[_0x203ab1(0x36a)](_0x2a323e, _0x3802d0['d']));
                        });
                    } else {
                        if (_0x4577e7[_0x551757(0x85b)](_0x10e25a, _0x4577e7['Lmhzb'])) {
                            const _0xa6cbab = _0x1707b5[_0x551757(0x552)]();
                            _0xa6cbab[_0x551757(0x230)][_0x551757(0x19e)](0.85 * _0x58c413, _0x1707b5[_0x551757(0x4a2)]), _0xa6cbab[_0x551757(0x62a)](_0x1707b5[_0x551757(0x39a)]);
                            const _0x486257 = {};
                            _0x486257['f'] = 1318.51, _0x486257[_0x551757(0x400)] = 0x0, _0x486257[_0x551757(0x456)] = 1.2;
                            const _0x5379dc = {};
                            _0x5379dc['f'] = 1046.5, _0x5379dc['start'] = 0.22, _0x5379dc[_0x551757(0x456)] = 1.5;
                            const _0x1a4dfc = [
                                _0x486257,
                                _0x5379dc
                            ];
                            _0x1a4dfc[_0x551757(0x136)](_0x1f2475 => {
                                const _0x18c8d1 = _0x551757, _0x8cdc0 = _0x1707b5[_0x18c8d1(0x4a2)] + _0x1f2475[_0x18c8d1(0x400)], _0x1ae2af = _0x1707b5[_0x18c8d1(0x7bd)](), _0x24c3a9 = _0x1707b5[_0x18c8d1(0x7bd)](), _0x399437 = _0x1707b5[_0x18c8d1(0x552)]();
                                _0x1ae2af[_0x18c8d1(0x6c)] = _0x30362b[_0x18c8d1(0x63b)], _0x24c3a9[_0x18c8d1(0x6c)] = 'triangle', _0x1ae2af[_0x18c8d1(0x6e5)][_0x18c8d1(0x19e)](_0x1f2475['f'], _0x8cdc0), _0x24c3a9[_0x18c8d1(0x6e5)][_0x18c8d1(0x19e)](_0x1f2475['f'] * 2.02, _0x8cdc0), _0x399437['gain'][_0x18c8d1(0x19e)](0.0001, _0x8cdc0), _0x399437[_0x18c8d1(0x230)][_0x18c8d1(0x819)](0.7, _0x30362b[_0x18c8d1(0x4f6)](_0x8cdc0, 0.008)), _0x399437[_0x18c8d1(0x230)][_0x18c8d1(0x795)](0.0001, _0x30362b[_0x18c8d1(0x36a)](_0x8cdc0, _0x1f2475['dur'])), _0x1ae2af[_0x18c8d1(0x62a)](_0x399437), _0x24c3a9[_0x18c8d1(0x62a)](_0x399437), _0x399437[_0x18c8d1(0x62a)](_0xa6cbab), _0x1ae2af[_0x18c8d1(0x400)](_0x8cdc0), _0x24c3a9[_0x18c8d1(0x400)](_0x8cdc0), _0x1ae2af['stop'](_0x30362b[_0x18c8d1(0x4f6)](_0x8cdc0, _0x1f2475[_0x18c8d1(0x456)])), _0x24c3a9[_0x18c8d1(0x117)](_0x30362b[_0x18c8d1(0x36a)](_0x8cdc0, _0x1f2475[_0x18c8d1(0x456)]));
                            });
                        } else {
                            if (_0x4577e7[_0x551757(0x416)](_0x10e25a, _0x551757(0x18f))) {
                                const _0x41d7e3 = _0x1707b5[_0x551757(0x552)]();
                                _0x41d7e3[_0x551757(0x230)]['setValueAtTime'](_0x4577e7[_0x551757(0x5be)](0.85, _0x58c413), _0x1707b5[_0x551757(0x4a2)]), _0x41d7e3['connect'](_0x1707b5[_0x551757(0x39a)]);
                                const _0x5b508d = {};
                                _0x5b508d['f'] = 659.25, _0x5b508d[_0x551757(0x400)] = 0x0, _0x5b508d['dur'] = 0.22;
                                const _0xc0a8c0 = {};
                                _0xc0a8c0['f'] = 830.61, _0xc0a8c0[_0x551757(0x400)] = 0.09, _0xc0a8c0['dur'] = 0.22;
                                const _0x142832 = {};
                                _0x142832['f'] = 987.77, _0x142832['start'] = 0.18, _0x142832[_0x551757(0x456)] = 0.26;
                                const _0x593edf = {};
                                _0x593edf['f'] = 1318.51, _0x593edf['start'] = 0.28, _0x593edf[_0x551757(0x456)] = 0.85;
                                const _0x400b42 = [
                                    _0x5b508d,
                                    _0xc0a8c0,
                                    _0x142832,
                                    _0x593edf
                                ];
                                _0x400b42[_0x551757(0x136)](_0x446ed3 => {
                                    const _0x500937 = _0x551757, _0x3f1dd3 = _0x4577e7['hfhaJ'](_0x1707b5['currentTime'], _0x446ed3['start']), _0x2f2b74 = _0x1707b5[_0x500937(0x7bd)](), _0x8c5831 = _0x1707b5[_0x500937(0x7bd)](), _0x1ad684 = _0x1707b5[_0x500937(0x552)]();
                                    _0x2f2b74[_0x500937(0x6c)] = _0x4577e7['aQolv'], _0x8c5831['type'] = _0x500937(0x358), _0x2f2b74[_0x500937(0x6e5)][_0x500937(0x19e)](_0x446ed3['f'], _0x3f1dd3), _0x8c5831[_0x500937(0x6e5)][_0x500937(0x19e)](_0x4577e7[_0x500937(0x5be)](_0x446ed3['f'], 2.01), _0x3f1dd3), _0x1ad684[_0x500937(0x230)]['setValueAtTime'](0.001, _0x3f1dd3), _0x1ad684[_0x500937(0x230)][_0x500937(0x819)](0.7, _0x3f1dd3 + 0.008), _0x1ad684[_0x500937(0x230)][_0x500937(0x795)](0.001, _0x3f1dd3 + _0x446ed3[_0x500937(0x456)]), _0x2f2b74[_0x500937(0x62a)](_0x1ad684), _0x8c5831[_0x500937(0x62a)](_0x1ad684), _0x1ad684[_0x500937(0x62a)](_0x41d7e3), _0x2f2b74[_0x500937(0x400)](_0x3f1dd3), _0x8c5831[_0x500937(0x400)](_0x3f1dd3), _0x2f2b74[_0x500937(0x117)](_0x3f1dd3 + _0x446ed3[_0x500937(0x456)]), _0x8c5831[_0x500937(0x117)](_0x3f1dd3 + _0x446ed3[_0x500937(0x456)]);
                                });
                                const _0x41beef = _0x1707b5[_0x551757(0x4a2)] + 0.28, _0x115302 = _0x1707b5[_0x551757(0x7bd)](), _0xffbd85 = _0x1707b5['createGain']();
                                _0x115302[_0x551757(0x6c)] = _0x551757(0x74f), _0x115302[_0x551757(0x6e5)][_0x551757(0x19e)](2637.02, _0x41beef), _0xffbd85[_0x551757(0x230)][_0x551757(0x19e)](0.001, _0x41beef), _0xffbd85[_0x551757(0x230)][_0x551757(0x819)](0.55, _0x41beef + 0.005), _0xffbd85[_0x551757(0x230)]['exponentialRampToValueAtTime'](0.0001, _0x41beef + 0.6), _0x115302[_0x551757(0x62a)](_0xffbd85), _0xffbd85['connect'](_0x41d7e3), _0x115302[_0x551757(0x400)](_0x41beef), _0x115302['stop'](_0x41beef + 0.6);
                            } else {
                                if (_0x10e25a === _0x4577e7[_0x551757(0x241)] || _0x4577e7[_0x551757(0x416)](_0x10e25a, _0x4577e7[_0x551757(0x4d2)])) {
                                    const _0x2a9e04 = _0x1707b5[_0x551757(0x552)]();
                                    _0x2a9e04['gain'][_0x551757(0x19e)](0.95 * _0x58c413, _0x1707b5[_0x551757(0x4a2)]), _0x2a9e04[_0x551757(0x62a)](_0x1707b5[_0x551757(0x39a)]);
                                    for (let _0x3e60c0 = 0x0; _0x4577e7[_0x551757(0xf5)](_0x3e60c0, 0x4); _0x3e60c0++) {
                                        const _0xe298c1 = _0x4577e7[_0x551757(0x28a)](_0x1707b5[_0x551757(0x4a2)], _0x3e60c0 * 0.28), _0x1a8c96 = _0x1707b5[_0x551757(0x7bd)](), _0x361167 = _0x1707b5[_0x551757(0x7bd)](), _0x3b2d17 = _0x1707b5[_0x551757(0x552)]();
                                        _0x1a8c96[_0x551757(0x6c)] = _0x4577e7[_0x551757(0x4e5)], _0x361167[_0x551757(0x6c)] = 'square', _0x1a8c96['frequency'][_0x551757(0x19e)](0x5dc, _0xe298c1), _0x1a8c96['frequency'][_0x551757(0x795)](0x28a, _0x4577e7[_0x551757(0x322)](_0xe298c1, 0.22)), _0x361167[_0x551757(0x6e5)][_0x551757(0x19e)](0x2ee, _0xe298c1), _0x361167[_0x551757(0x6e5)][_0x551757(0x795)](0x145, _0xe298c1 + 0.22), _0x3b2d17[_0x551757(0x230)][_0x551757(0x19e)](0.8, _0xe298c1), _0x3b2d17[_0x551757(0x230)][_0x551757(0x795)](0.01, _0xe298c1 + 0.24), _0x1a8c96[_0x551757(0x62a)](_0x3b2d17), _0x361167[_0x551757(0x62a)](_0x3b2d17), _0x3b2d17[_0x551757(0x62a)](_0x2a9e04), _0x1a8c96[_0x551757(0x400)](_0xe298c1), _0x361167[_0x551757(0x400)](_0xe298c1), _0x1a8c96[_0x551757(0x117)](_0xe298c1 + 0.24), _0x361167[_0x551757(0x117)](_0x4577e7[_0x551757(0x26c)](_0xe298c1, 0.24));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (_0x58b12c) {
            console['error']('[Stakeout]\x20Audio\x20error,\x20falling\x20back\x20to\x20PCM\x20WAV:', _0x58b12c), _0x1d2c41(_0x4577e7[_0x551757(0x4d9)](_0x10e25a, _0x551757(0x84a)) ? 0x416 : _0x10e25a === _0x551757(0x387) ? 0x526 : _0x10e25a === 'illegal' ? 0x5dc : 0x370, 0x320, _0x58c413);
        }
    }
    function _0x45b34d(_0x297604, _0x1fc467) {
        const _0x2be125 = _0x1fbd97;
        if (!_0xb2691a[_0x2be125(0x141)])
            return;
        try {
            if (_0x4577e7[_0x2be125(0x7b8)](typeof GM_notification, _0x4577e7[_0x2be125(0x5ab)])) {
                _0x4577e7[_0x2be125(0xd1)](GM_notification, {
                    'title': _0x2be125(0xaf) + _0x297604,
                    'text': _0x1fc467,
                    'image': _0x4577e7[_0x2be125(0xc0)],
                    'highlight': !![],
                    'timeout': 0x4e20,
                    'onclick': () => {
                        const _0x2e61a6 = _0x2be125;
                        window[_0x2e61a6(0x4be)]();
                    }
                });
                return;
            }
        } catch (_0x4940ca) {
        }
        try {
            if (_0x4577e7[_0x2be125(0x845)](_0x4577e7[_0x2be125(0xa3)], window)) {
                if (_0x4577e7['schXk'](Notification['permission'], _0x4577e7[_0x2be125(0x15b)])) {
                    const _0xcbea14 = {};
                    _0xcbea14[_0x2be125(0x198)] = _0x1fc467, _0xcbea14[_0x2be125(0x284)] = _0x4577e7[_0x2be125(0xc0)], _0xcbea14['requireInteraction'] = !![], _0xcbea14[_0x2be125(0x838)] = !![];
                    const _0x16683e = new Notification(_0x2be125(0xaf) + _0x297604, _0xcbea14);
                    _0x16683e[_0x2be125(0x1f7)] = () => {
                        const _0x2538d0 = _0x2be125;
                        window['focus']();
                        try {
                            _0x16683e[_0x2538d0(0x19c)]();
                        } catch (_0x27e579) {
                        }
                    };
                } else
                    _0x4577e7[_0x2be125(0x38c)](Notification[_0x2be125(0x5e0)], _0x2be125(0x1ff)) && Notification[_0x2be125(0x578)]();
            }
        } catch (_0x36c007) {
        }
    }
    let _0x5b2fc7 = ![], _0x30df0a = 0x0, _0x148f88 = null;
    function _0x389863(_0x18d97f, _0x444d0f) {
        const _0x57786a = _0x1fbd97;
        let _0x2ccf89 = parseInt(_0x4577e7['ZBvmM'](String, _0x18d97f)[_0x57786a(0x78f)](/,/g, ''), 0xa), _0x841630 = parseInt(String(_0x444d0f)[_0x57786a(0x78f)](/,/g, ''), 0xa);
        if (isNaN(_0x2ccf89) || isNaN(_0x841630))
            return null;
        if (_0x841630 > 0x1f4 && _0x841630 % 0x64 === 0x0)
            _0x841630 = _0x841630 / 0x64, _0x2ccf89 > 0x1f4 && _0x4577e7[_0x57786a(0x1a0)](_0x4577e7[_0x57786a(0x3b9)](_0x2ccf89, 0x64), 0x0) && (_0x2ccf89 = _0x4577e7[_0x57786a(0x5e8)](_0x2ccf89, 0x64));
        else {
            if (_0x4577e7[_0x57786a(0x54b)](_0x841630, 0x1f4)) {
                _0x841630 = Math[_0x57786a(0xe3)](_0x4577e7[_0x57786a(0x5e8)](_0x841630, 0x64));
                if (_0x2ccf89 > 0x1f4)
                    _0x2ccf89 = Math[_0x57786a(0xe3)](_0x2ccf89 / 0x64);
            }
        }
        if (_0x841630 <= 0x0)
            return null;
        const _0x30b80a = {};
        return _0x30b80a['current'] = _0x2ccf89, _0x30b80a[_0x57786a(0x58c)] = _0x841630, _0x30b80a;
    }
    function _0x4527b5(_0xe76201 = !![]) {
        const _0x11ec04 = _0x1fbd97;
        try {
            const _0x28f225 = document[_0x11ec04(0x39d)](_0x4577e7['HuRAL']) || document[_0x11ec04(0x198)], _0x2bfec5 = [
                    _0x11ec04(0x2a7),
                    _0x11ec04(0x6f5),
                    _0x11ec04(0x1a4),
                    _0x11ec04(0x120),
                    _0x4577e7[_0x11ec04(0x321)],
                    _0x4577e7[_0x11ec04(0x6da)],
                    _0x11ec04(0x45f)
                ];
            for (const _0x3e487b of _0x2bfec5) {
                const _0x1919cb = document[_0x11ec04(0x65d)](_0x3e487b);
                for (const _0x461bf1 of _0x1919cb) {
                    const _0x7b499a = _0x461bf1[_0x11ec04(0x235)] || '', _0xf00d9f = _0x7b499a[_0x11ec04(0x1e9)](/(?:Energy:?\s*)?(\d[\d,]*)\s*\/\s*(\d[\d,]*)/i);
                    if (_0xf00d9f) {
                        const _0x557278 = _0x389863(_0xf00d9f[0x1], _0xf00d9f[0x2]);
                        if (_0x557278)
                            return _0x557278;
                    }
                }
            }
            const _0x20eea5 = _0x28f225[_0x11ec04(0x2cd)] || _0x28f225[_0x11ec04(0x235)] || '', _0x1fb41d = _0x20eea5[_0x11ec04(0x1e9)](/Energy:?\s*(\d[\d,]*)\s*\/\s*(\d[\d,]*)/i);
            if (_0x1fb41d) {
                const _0x23bb1c = _0x4577e7[_0x11ec04(0x476)](_0x389863, _0x1fb41d[0x1], _0x1fb41d[0x2]);
                if (_0x23bb1c)
                    return _0x23bb1c;
            }
            for (const _0x3d1d20 of _0x2bfec5) {
                const _0x44eacf = document[_0x11ec04(0x65d)](_0x3d1d20);
                for (const _0x31d76b of _0x44eacf) {
                    const _0x2f7468 = _0x31d76b[_0x11ec04(0x5e3)](_0x11ec04(0x75c)), _0x2a736c = _0x31d76b[_0x11ec04(0x5e3)](_0x11ec04(0x292));
                    if (_0x4577e7['JcRXi'](_0x2f7468, null) && _0x4577e7['KldoU'](_0x2a736c, null)) {
                        const _0x86eda = _0x4577e7[_0x11ec04(0x212)](_0x389863, _0x2f7468, _0x2a736c);
                        if (_0x86eda)
                            return _0x86eda;
                    }
                }
            }
            if (document['body'] && _0x4577e7[_0x11ec04(0x11d)](document[_0x11ec04(0x198)], _0x28f225)) {
                const _0x437e4e = document[_0x11ec04(0x198)][_0x11ec04(0x2cd)] || '', _0x5aad60 = _0x437e4e[_0x11ec04(0x1e9)](/Energy:?\s*(\d[\d,]*)\s*\/\s*(\d[\d,]*)/i);
                if (_0x5aad60) {
                    const _0x5f4794 = _0x389863(_0x5aad60[0x1], _0x5aad60[0x2]);
                    if (_0x5f4794)
                        return _0x5f4794;
                }
            }
        } catch (_0x2b3b19) {
            console[_0x11ec04(0x257)](_0x4577e7['jRCzO'], _0x2b3b19);
        }
        if (_0xe76201 && _0x148f88 && _0x148f88[_0x11ec04(0x58c)] > 0x0)
            return _0x389863(_0x148f88[_0x11ec04(0x1ac)], _0x148f88[_0x11ec04(0x58c)]);
        return null;
    }
    function _0x2edff3() {
        const _0x42f9c0 = _0x1fbd97, _0x947610 = {
                'rNNfE': function (_0x1ce5f1, _0x301bcf) {
                    const _0x305956 = _0x5ca8;
                    return _0x4577e7[_0x305956(0x6d2)](_0x1ce5f1, _0x301bcf);
                },
                'StqlD': function (_0x4a3a9f, _0x80df20) {
                    return _0x4a3a9f < _0x80df20;
                }
            };
        if (!_0xb2691a[_0x42f9c0(0x6cf)])
            return;
        const _0x6024f = _0x4577e7[_0x42f9c0(0x78d)](_0x4527b5);
        if (!_0x6024f || _0x6024f[_0x42f9c0(0x58c)] <= 0x0)
            return;
        const _0x10a327 = _0x6024f[_0x42f9c0(0x1ac)] >= _0x6024f['maximum'];
        if (_0x10a327) {
            const _0x6f9bab = Date[_0x42f9c0(0x6d4)]();
            if (!_0x5b2fc7 || _0x6f9bab - _0x30df0a > _0x4577e7[_0x42f9c0(0x33e)](_0x4577e7[_0x42f9c0(0x6a)](0xa, 0x3c), 0x3e8)) {
                _0x5b2fc7 = !![], _0x30df0a = _0x6f9bab;
                const _0x30de36 = Math[_0x42f9c0(0x3ee)](_0x4577e7[_0x42f9c0(0x5e6)](_0x6f9bab, 0x3e8)), _0x2c1bb8 = _0x61dadc[_0x42f9c0(0x71f)](_0x5e260a => !_0x48c321(_0x5e260a))['map'](_0x43b9b0 => _0x4f991c[_0x43b9b0]?.[_0x42f9c0(0x3c1)])[_0x42f9c0(0x71f)](_0x1f9cce => _0x1f9cce && _0x1f9cce[_0x42f9c0(0x4b6)] === _0x42f9c0(0x46c));
                let _0x1c3fdd = _0x42f9c0(0x11e);
                if (_0x2c1bb8[_0x42f9c0(0x5a5)] > 0x0) {
                    let _0x33b528 = Infinity, _0x38965d = '';
                    _0x2c1bb8[_0x42f9c0(0x136)](_0x39ce87 => {
                        const _0x10928b = _0x42f9c0, _0x582222 = _0x39ce87[_0x10928b(0x206)] > _0x30de36 ? _0x947610[_0x10928b(0x116)](_0x39ce87['until'], _0x30de36) : 0x0;
                        _0x947610[_0x10928b(0x587)](_0x582222, _0x33b528) && (_0x33b528 = _0x582222, _0x38965d = _0x39ce87[_0x10928b(0x102)]);
                    });
                    const _0x19af6c = _0x4577e7[_0x42f9c0(0x786)](_0x8d48d4, _0x33b528);
                    _0x1c3fdd = _0x42f9c0(0x856) + _0x38965d + _0x42f9c0(0x60a) + _0x19af6c + ').\x20Train\x20off\x20excess\x20energy\x20before\x20discharge!';
                }
                const _0x29c448 = {};
                _0x29c448[_0x42f9c0(0x3dd)] = _0x42f9c0(0x2a6) + _0x6024f[_0x42f9c0(0x1ac)] + '/' + _0x6024f['maximum'] + ')!', _0x29c448['body'] = _0x1c3fdd, _0x4577e7[_0x42f9c0(0x5ee)](_0x460aca, {
                    'key': _0x4577e7[_0x42f9c0(0x53b)],
                    'dedupeMs': _0x4577e7[_0x42f9c0(0x636)](0xa * 0x3c, 0x3e8),
                    'sound': _0x4577e7[_0x42f9c0(0x667)],
                    'notif': _0x29c448,
                    'toast': _0x42f9c0(0x6b6) + _0x6024f[_0x42f9c0(0x1ac)] + '/' + _0x6024f[_0x42f9c0(0x58c)] + _0x42f9c0(0x6de) + _0x1c3fdd
                });
            }
        } else
            _0x5b2fc7 = ![];
    }
    let _0xcbc68c = 0x0, _0x435741 = ![], _0x3837e1 = !![], _0x2bbc73 = 0x0;
    function _0x43f27e() {
        const _0xe99ff6 = _0x1fbd97;
        try {
            const _0x14391a = document['getElementById'](_0x4577e7[_0xe99ff6(0x719)]) || document[_0xe99ff6(0x198)], _0x97c52a = _0x14391a[_0xe99ff6(0x25f)](_0x4577e7[_0xe99ff6(0x39e)] + _0xe99ff6(0x2d4));
            if (_0x97c52a)
                return !![];
            const _0x553b2c = _0x14391a[_0xe99ff6(0x65d)](_0xe99ff6(0x509));
            for (const _0x285917 of _0x553b2c) {
                const _0x41a688 = ((_0x285917['className'] || '') + '\x20' + (_0x285917[_0xe99ff6(0x5e3)](_0x4577e7[_0xe99ff6(0x60f)]) || '') + '\x20' + (_0x285917[_0xe99ff6(0x5e3)]('aria-label') || ''))['toLowerCase']();
                if (_0x41a688[_0xe99ff6(0x1b1)](_0x4577e7[_0xe99ff6(0x333)]) || _0x41a688['includes'](_0x4577e7[_0xe99ff6(0x2db)]))
                    return !![];
            }
        } catch (_0x239ccf) {
        }
        return ![];
    }
    function _0x37d407() {
        const _0x2f8cda = _0x1fbd97, _0x2ce8a8 = _0x2f8cda(0x7d5)['split']('|');
        let _0x45eee0 = 0x0;
        while (!![]) {
            switch (_0x2ce8a8[_0x45eee0++]) {
            case '0':
                if (!_0xb2691a[_0x2f8cda(0x200)])
                    return;
                continue;
            case '1':
                _0xcbc68c = 0x0;
                continue;
            case '2':
                _0x3837e1 = !![];
                continue;
            case '3':
                _0x435741 = ![];
                continue;
            case '4':
                _0x460aca({
                    'key': _0x4577e7[_0x2f8cda(0x83f)],
                    'dedupeMs': _0x4577e7['zxndy'](_0x4577e7['Kbjpz'](0x5, 0x3c), 0x3e8),
                    'sound': _0x4577e7[_0x2f8cda(0x667)],
                    'notif': {
                        'title': _0x4577e7[_0x2f8cda(0x534)],
                        'body': _0x2f8cda(0x4a4)
                    },
                    'toast': _0x4577e7[_0x2f8cda(0x28c)]
                });
                continue;
            }
            break;
        }
    }
    function _0x52a870() {
        const _0x52cdf5 = _0x1fbd97;
        if (!_0xb2691a[_0x52cdf5(0x200)])
            return;
        const _0x33a109 = Date[_0x52cdf5(0x6d4)](), _0x571642 = _0x43f27e();
        _0x571642 && (_0x435741 = !![], _0x3837e1 = ![]);
        if (_0xcbc68c > 0x0)
            _0x33a109 >= _0xcbc68c && _0x37d407();
        else
            _0x435741 && !_0x3837e1 && !_0x571642 && _0x37d407();
    }
    async function _0x534083() {
        const _0x11defc = _0x1fbd97;
        if (!_0x4b673b)
            return;
        const _0x4b6782 = _0x169f99();
        if (!_0x4b6782)
            return;
        const _0x46f970 = Date[_0x11defc(0x6d4)]();
        if (_0x46f970 - _0x2bbc73 < 0xea60)
            return;
        if (_0x4577e7['aJbqz'](_0x112493) >= _0x449e49() - 0x5)
            return;
        _0x2bbc73 = _0x46f970;
        try {
            _0x419331();
            const _0x1095ce = 'https://api.torn.com/user/?selections=cooldowns&key=' + _0x4b6782 + _0x11defc(0x598) + _0x46f970, _0x8333b6 = await _0x4577e7['jbKVk'](fetch, _0x1095ce);
            if (!_0x8333b6['ok'])
                return;
            const _0x3a4437 = await _0x8333b6[_0x11defc(0x616)]();
            if (_0x3a4437 && _0x3a4437['cooldowns'] && typeof _0x3a4437[_0x11defc(0x4d3)]['drug'] === _0x11defc(0x250)) {
                const _0x1d809b = _0x4577e7['cEAyG'](parseInt, _0x3a4437['cooldowns'][_0x11defc(0x50c)], 0xa) || 0x0;
                _0x1d809b > 0x0 ? (_0xcbc68c = Date[_0x11defc(0x6d4)]() + _0x1d809b * 0x3e8, _0x435741 = !![], _0x3837e1 = ![]) : (_0x435741 && !_0x3837e1 ? _0x37d407() : _0x3837e1 = !![], _0xcbc68c = 0x0);
            }
        } catch (_0x1b2ea3) {
            console[_0x11defc(0x257)](_0x11defc(0x4e1), _0x1b2ea3);
        }
    }
    function _0x15d2be() {
        const _0x4dc6c1 = _0x1fbd97;
        try {
            if (document[_0x4dc6c1(0x198)] && document[_0x4dc6c1(0x198)]['getAttribute'](_0x4577e7[_0x4dc6c1(0x5a0)]) === _0x4577e7['QQddZ'])
                return !![];
            const _0x5aa8fb = document[_0x4dc6c1(0x198)] ? document[_0x4dc6c1(0x198)][_0x4dc6c1(0x5e3)]('data-country') : null;
            if (_0x5aa8fb && _0x5aa8fb[_0x4dc6c1(0x86f)]() !== _0x4577e7[_0x4dc6c1(0xc7)])
                return !![];
            if (window[_0x4dc6c1(0x617)] && window[_0x4dc6c1(0x617)][_0x4dc6c1(0x170)] && window[_0x4dc6c1(0x617)][_0x4dc6c1(0x170)][_0x4dc6c1(0x4b6)]) {
                if (_0x4577e7[_0x4dc6c1(0x4d9)](window[_0x4dc6c1(0x617)][_0x4dc6c1(0x170)][_0x4dc6c1(0x4b6)][_0x4dc6c1(0x260)], !![]))
                    return !![];
            }
        } catch (_0x12a330) {
        }
        return ![];
    }
    function _0x1f5143(_0x54d037) {
        const _0x555403 = _0x1fbd97;
        if (typeof _0x54d037 !== _0x555403(0x250) || _0x54d037 < 0x0)
            return '00:00';
        const _0x58a922 = Math[_0x555403(0x3ee)](_0x54d037 / 0x3c), _0xa0ffa2 = Math[_0x555403(0x3ee)](_0x4577e7['ekpEG'](_0x54d037, 0x3c));
        return _0x58a922 + ':' + (_0x4577e7[_0x555403(0x4fb)](_0xa0ffa2, 0xa) ? '0' : '') + _0xa0ffa2;
    }
    function _0x47e036() {
        const _0x1690f8 = _0x1fbd97;
        try {
            const _0x18c231 = document[_0x1690f8(0x39d)](_0x4577e7['HuRAL']) || document['body'];
            if (!_0x18c231)
                return ![];
            const _0x344e6f = _0x18c231['querySelector'](_0x4577e7[_0x1690f8(0x1e4)]);
            if (!_0x344e6f)
                return _0x2927cd[_0x1690f8(0x74a)] && Date[_0x1690f8(0x6d4)]() - _0x2927cd[_0x1690f8(0xe1)] > 0x2710 && (_0x2927cd[_0x1690f8(0x74a)] = ![], _0x2927cd[_0x1690f8(0x40b)] = 0x0), ![];
            const _0x51a440 = _0x344e6f[_0x1690f8(0x2cd)] || _0x344e6f[_0x1690f8(0x235)] || '';
            if (!_0x51a440)
                return ![];
            const _0x2edf33 = _0x51a440['match'](/(?:^|\s)(\d{1,2}):(\d{2})(?:$|\s)/);
            if (_0x2edf33) {
                const _0x2af4f6 = _0x4577e7[_0x1690f8(0x1f8)](parseInt, _0x2edf33[0x1], 0xa), _0x34c93f = parseInt(_0x2edf33[0x2], 0xa);
                _0x2927cd[_0x1690f8(0x40b)] = _0x4577e7['tsBfK'](_0x2af4f6, 0x3c) + _0x34c93f, _0x2927cd['isActive'] = _0x2927cd[_0x1690f8(0x40b)] > 0x0, _0x2927cd['lastUpdated'] = Date[_0x1690f8(0x6d4)]();
            }
            const _0x49b9ff = _0x51a440[_0x1690f8(0x1e9)](/(\d+)\s*\/\s*(\d+)/);
            if (_0x49b9ff)
                _0x2927cd[_0x1690f8(0x1ac)] = parseInt(_0x49b9ff[0x1], 0xa), _0x2927cd[_0x1690f8(0x3ab)] = parseInt(_0x49b9ff[0x2], 0xa), _0x2927cd[_0x1690f8(0x74a)] = !![];
            else {
                const _0x5e72aa = _0x51a440[_0x1690f8(0x1e9)](/(\d+)\s*hits?/i);
                _0x5e72aa && (_0x2927cd[_0x1690f8(0x1ac)] = _0x4577e7[_0x1690f8(0x811)](parseInt, _0x5e72aa[0x1], 0xa), _0x2927cd['isActive'] = !![]);
            }
            const _0x1c4c05 = _0x51a440[_0x1690f8(0x1e9)](/(\d+\.\d+)x/i);
            return _0x1c4c05 && (_0x2927cd[_0x1690f8(0x420)] = parseFloat(_0x1c4c05[0x1])), _0x2927cd[_0x1690f8(0x74a)];
        } catch (_0x491f5c) {
            return ![];
        }
    }
    async function _0xc2f6fc() {
        const _0x413c24 = _0x1fbd97;
        if (!_0x4577e7[_0x413c24(0x524)](_0x15d2be)) {
            _0x2fa5f3['id'] = null, _0x2fa5f3[_0x413c24(0x102)] = null, _0x2fa5f3[_0x413c24(0x825)] = null;
            return;
        }
        const _0x4c8ced = Date[_0x413c24(0x6d4)]();
        if (_0x4577e7[_0x413c24(0x4fb)](_0x4577e7[_0x413c24(0x84e)](_0x4c8ced, _0x2fa5f3['lastChecked']), 0x3a98) && _0x2fa5f3['id'])
            return;
        if (!window[_0x413c24(0x289)][_0x413c24(0x83c)]['includes'](_0x413c24(0x621)))
            return;
        _0x2fa5f3[_0x413c24(0x149)] = _0x4c8ced;
        try {
            const _0x153c4d = document, _0xa5b640 = _0x153c4d['querySelectorAll'](_0x413c24(0xf9)), _0x52b43b = [], _0x5befc9 = _0x158b70();
            for (const _0x5f29c7 of _0xa5b640) {
                if (_0x5f29c7[_0x413c24(0x320)](_0x4577e7[_0x413c24(0x61c)]))
                    continue;
                if (_0x5f29c7[_0x413c24(0x320)](_0x413c24(0x364)))
                    continue;
                const _0x49da6c = _0x5f29c7[_0x413c24(0x83c)]['match'](/XID=(\d+)/i);
                if (!_0x49da6c)
                    continue;
                const _0x1bb432 = _0x49da6c[0x1];
                if (_0x5befc9[_0x413c24(0x802)] && _0x4577e7[_0x413c24(0x6ff)](String, _0x5befc9[_0x413c24(0x802)]) === _0x4577e7[_0x413c24(0x2c0)](String, _0x1bb432))
                    continue;
                const _0x57ce2a = _0x5f29c7[_0x413c24(0x320)](_0x413c24(0x344)) || _0x5f29c7['parentElement'];
                if (!_0x57ce2a)
                    continue;
                const _0xc665f5 = _0x57ce2a[_0x413c24(0x235)] || '', _0x172f1c = /hospital/i[_0x413c24(0x66b)](_0xc665f5) || _0x57ce2a[_0x413c24(0x25f)](_0x4577e7[_0x413c24(0x19b)]), _0x5db58c = /traveling|in flight/i[_0x413c24(0x66b)](_0xc665f5) || _0x57ce2a[_0x413c24(0x25f)](_0x413c24(0x363)), _0x3a2fcd = /jail/i[_0x413c24(0x66b)](_0xc665f5) || _0x57ce2a['querySelector'](_0x413c24(0x4ed));
                if (_0x172f1c || _0x5db58c || _0x3a2fcd)
                    continue;
                const _0x273494 = _0xc665f5['match'](/(?:Lvl|Level|Lv)[:\s]*(\d+)/i) || _0xc665f5[_0x413c24(0x1e9)](/\b(?:L|Lv)(\d+)\b/);
                if (!_0x273494)
                    continue;
                const _0x2d971a = _0x4577e7[_0x413c24(0x224)](parseInt, _0x273494[0x1], 0xa), _0x92d1ec = _0x5f29c7[_0x413c24(0x235)][_0x413c24(0x72)]() || _0x413c24(0x6e0) + _0x1bb432 + ']', _0x187ca6 = {};
                _0x187ca6['id'] = _0x1bb432, _0x187ca6['name'] = _0x92d1ec, _0x187ca6[_0x413c24(0x825)] = _0x2d971a, _0x52b43b[_0x413c24(0x563)](_0x187ca6);
            }
            _0x52b43b[_0x413c24(0x5a5)] > 0x0 ? (_0x52b43b['sort']((_0x20042d, _0x5d34f6) => _0x20042d[_0x413c24(0x825)] - _0x5d34f6[_0x413c24(0x825)]), _0x2fa5f3['id'] = _0x52b43b[0x0]['id'], _0x2fa5f3[_0x413c24(0x102)] = _0x52b43b[0x0][_0x413c24(0x102)], _0x2fa5f3[_0x413c24(0x825)] = _0x52b43b[0x0][_0x413c24(0x825)], _0x2fa5f3[_0x413c24(0x149)] = _0x4c8ced, _0x4577e7[_0x413c24(0x3eb)](_0x16a7ad)) : (_0x2fa5f3['id'] = null, _0x2fa5f3[_0x413c24(0x102)] = null, _0x2fa5f3[_0x413c24(0x825)] = null, _0x16a7ad());
        } catch (_0x227e46) {
            console[_0x413c24(0x257)](_0x413c24(0x3ea), _0x227e46);
        }
    }
    function _0x50abf3(_0x2b59c0 = null) {
        const _0x32e11f = _0x1fbd97;
        if (_0x15d2be()) {
            if (_0x2fa5f3['id']) {
                _0x93d2c1(_0x32e11f(0x1e1) + _0x2fa5f3[_0x32e11f(0x102)] + _0x32e11f(0x216) + _0x2fa5f3['level'] + _0x32e11f(0x175) + _0x2fa5f3['id'] + ']...');
                const _0x400c0a = _0x32e11f(0x5fa) + _0x2fa5f3['id'];
                _0x4577e7[_0x32e11f(0x7ea)](_0x126116, _0x400c0a), setTimeout(() => {
                    const _0x2b6b0e = _0x32e11f;
                    _0x2fa5f3['lastChecked'] = 0x0, _0x4577e7[_0x2b6b0e(0x705)](_0xc2f6fc);
                }, 0x7d0);
            } else
                _0x93d2c1(_0x32e11f(0x813)), _0x126116(_0x4577e7[_0x32e11f(0x253)]), _0xc2f6fc();
        } else {
            const _0x518344 = document[_0x32e11f(0x39d)](_0x4577e7[_0x32e11f(0x2e6)]);
            let _0x14f47b = _0x4577e7[_0x32e11f(0x367)](_0xcc1fe2, _0x2b59c0 || _0x167455());
            const _0x440966 = _0x5e2187() && !_0x4ca45e(_0x14f47b) && _0x4577e7['wBKhd'](String, _0x14f47b) !== String(_0xb2691a[_0x32e11f(0x139)]);
            _0x93d2c1('⚡\x20Quick\x20Hit:\x20Launching\x20attack\x20on\x20#' + _0x14f47b + _0x32e11f(0x16a) + (_0x440966 ? _0x4577e7[_0x32e11f(0x84b)] : ''));
            const _0x4d126a = _0x32e11f(0x5fa) + _0x14f47b;
            _0x4577e7['vHQZm'](_0x5c9c29, _0x14f47b), _0x126116(_0x4d126a);
            const _0x39fb2d = document[_0x32e11f(0x39d)](_0x32e11f(0x2fe));
            if (_0x39fb2d)
                _0x39fb2d['value'] = _0xb2691a['chainTargetCurrentId'];
            if (_0x518344)
                _0x518344[_0x32e11f(0x1d5)] = _0xb2691a[_0x32e11f(0xe8)];
            _0x4577e7[_0x32e11f(0x347)](_0x16a7ad);
        }
    }
    function _0x57270d() {
        const _0x39e452 = _0x1fbd97;
        if (!_0xb2691a[_0x39e452(0x2f5)])
            return;
        if (!_0x4577e7[_0x39e452(0x7b5)](_0x4c3563, 'ck'))
            return;
        const _0x173279 = _0x4577e7[_0x39e452(0x489)](_0x47e036);
        if (!_0x173279 || _0x4577e7[_0x39e452(0x644)](_0x2927cd[_0x39e452(0x40b)], 0x0)) {
            _0x2927cd[_0x39e452(0x40b)] === 0x0 && (_0x2927cd[_0x39e452(0x189)] || _0x2927cd[_0x39e452(0x6c7)]) && (_0x2927cd[_0x39e452(0x189)] = ![], _0x2927cd[_0x39e452(0x6c7)] = ![]);
            _0x16a7ad();
            return;
        }
        const _0x18dae6 = _0x2927cd[_0x39e452(0x40b)];
        _0x18dae6 > 0x3c && (_0x2927cd[_0x39e452(0x189)] = ![], _0x2927cd[_0x39e452(0x6c7)] = ![]);
        if (_0xb2691a[_0x39e452(0x788)] && _0xb2691a[_0x39e452(0x54f)]) {
            if (_0x18dae6 <= 0x3c && _0x18dae6 > 0x1e)
                !_0x2927cd['alerted60s'] && (_0x2927cd[_0x39e452(0x189)] = !![], _0x460aca({
                    'key': _0x39e452(0x1da) + _0x2927cd[_0x39e452(0x1ac)],
                    'dedupeMs': 0x3c * 0x3e8,
                    'sound': _0x39e452(0x387),
                    'notif': {
                        'title': _0x39e452(0xff),
                        'body': _0x39e452(0x4aa) + _0x4577e7['SrpAf'](_0x1f5143, _0x18dae6) + _0x39e452(0x90)
                    },
                    'toast': _0x39e452(0x689) + _0x1f5143(_0x18dae6) + '\x20left!\x20Quick\x20Hit\x20needed!'
                }));
            else {
                if (_0x18dae6 <= 0x1e && _0x18dae6 > 0x0) {
                    const _0x4329c3 = Date[_0x39e452(0x6d4)]();
                    (!_0x2927cd[_0x39e452(0x6c7)] || _0x4577e7[_0x39e452(0x18a)](_0x4577e7[_0x39e452(0x1ee)](_0x4329c3, _0x2927cd['lastEmergencyChime']), 0x1388)) && (_0x2927cd['alerted30s'] = !![], _0x2927cd[_0x39e452(0x687)] = _0x4329c3, _0x460aca({
                        'key': _0x39e452(0x226) + _0x2927cd[_0x39e452(0x1ac)] + ':' + Math[_0x39e452(0x3ee)](_0x4329c3 / 0x1388),
                        'dedupeMs': 0x1194,
                        'sound': _0x4577e7[_0x39e452(0x667)],
                        'notif': _0x18dae6 <= 0xf ? {
                            'title': _0x4577e7[_0x39e452(0x761)],
                            'body': '⏱️\x20' + _0x18dae6 + _0x39e452(0x480)
                        } : null,
                        'toast': _0x39e452(0x6bf) + _0x1f5143(_0x18dae6) + _0x39e452(0x438)
                    }));
                }
            }
        }
        _0x15d2be() && _0xc2f6fc(), _0x16a7ad();
    }
    function _0x16a7ad() {
        const _0x2831cd = _0x1fbd97;
        if (!_0x4c3563('ck')) {
            const _0x45ec74 = document[_0x2831cd(0x39d)](_0x2831cd(0x3bd)), _0x244d5d = document['getElementById'](_0x4577e7[_0x2831cd(0x5a6)]);
            if (_0x45ec74)
                _0x45ec74[_0x2831cd(0x2c5)][_0x2831cd(0x36b)] = _0x4577e7['xiJFJ'];
            if (_0x244d5d)
                _0x244d5d[_0x2831cd(0x172)]();
            return;
        }
        const _0x54c216 = _0x15d2be(), _0x11415a = window[_0x2831cd(0x289)][_0x2831cd(0x83c)][_0x2831cd(0x1b1)](_0x2831cd(0x1d7)), _0x294a49 = _0x11415a ? window[_0x2831cd(0x289)][_0x2831cd(0x83c)][_0x2831cd(0x1e9)](/user2ID=(\d+)/i) : null, _0x1d772d = _0x294a49 ? _0x4577e7['ocfBP'](parseInt, _0x294a49[0x1], 0xa) : 0x0;
        let _0x2ae851;
        _0x5e2187() ? _0x2ae851 = _0x4577e7['jbKVk'](_0x167455, _0x1d772d || null) : _0x2ae851 = _0x4577e7[_0x2831cd(0x73)](_0x1d772d, 0x3e8) ? _0x1d772d + 0x1 : parseInt(_0xb2691a[_0x2831cd(0xe8)], 0xa) || _0x5c9f1e()[0x0];
        const _0x288012 = document[_0x2831cd(0x39d)](_0x2831cd(0x7d6));
        if (_0x288012) {
            let _0x1048b2 = document[_0x2831cd(0x39d)](_0x2831cd(0x3a5));
            if (_0xb2691a[_0x2831cd(0x2f5)]) {
                const _0x1d9233 = _0x4577e7['SYlnQ'](_0x1f5143, _0x2927cd[_0x2831cd(0x40b)]), _0x5c3573 = _0x2927cd['isActive'] ? _0x2927cd[_0x2831cd(0x40b)] <= 0x1e ? _0x2831cd(0x7b7) : _0x2927cd[_0x2831cd(0x40b)] <= 0x3c ? _0x2831cd(0x84a) : _0x4577e7[_0x2831cd(0x73d)] : '', _0x42300a = _0x54c216 ? _0x2fa5f3[_0x2831cd(0x102)] ? _0x2831cd(0x7cb) + _0x2fa5f3[_0x2831cd(0x102)][_0x2831cd(0xb7)](0x0, 0x8) + _0x2831cd(0x47d) + _0x2fa5f3[_0x2831cd(0x825)] + ')' : _0x2831cd(0x442) : '⚡\x20Hit\x20#' + _0x2ae851;
                !_0x1048b2 && (_0x1048b2 = document[_0x2831cd(0x35d)](_0x4577e7[_0x2831cd(0x698)]), _0x1048b2['id'] = 'stakeout-chain-pill-container', _0x1048b2['className'] = _0x2831cd(0x77d), _0x288012['appendChild'](_0x1048b2));
                const _0x252ff8 = _0x2927cd['isActive'] ? _0x2831cd(0x3e8) + _0x5c3573 + _0x2831cd(0x4c1) + _0x2927cd[_0x2831cd(0x1ac)] + '\x20hits\x20•\x20Timer:\x20' + _0x1d9233 + _0x2831cd(0x68c) + _0x2927cd[_0x2831cd(0x420)][_0x2831cd(0x4b9)](0x2) + _0x2831cd(0x275) + _0x2927cd[_0x2831cd(0x1ac)] + (_0x2927cd[_0x2831cd(0x3ab)] ? '/' + _0x2927cd[_0x2831cd(0x3ab)] : '') + _0x2831cd(0x8c) + _0x1d9233 + _0x2831cd(0x10b) : '';
                _0x1048b2[_0x2831cd(0x1be)] = _0x2831cd(0x7c9) + _0x252ff8 + _0x2831cd(0x17b) + _0x42300a + _0x2831cd(0x1b3);
                const _0x2adbbb = document[_0x2831cd(0x39d)](_0x2831cd(0xd8));
                _0x2adbbb && (_0x2adbbb[_0x2831cd(0x1f7)] = _0x575158 => {
                    const _0x3258d0 = _0x2831cd;
                    _0x575158[_0x3258d0(0x7a5)](), _0x4577e7['vWnNf'](_0x50abf3, _0x2ae851);
                });
            } else
                _0x1048b2 && _0x1048b2['remove']();
        }
        const _0x1e771f = document[_0x2831cd(0x39d)](_0x4577e7[_0x2831cd(0x3fb)]);
        if (_0x1e771f) {
            if (_0xb2691a['chainWatcherEnabled']) {
                _0x1e771f[_0x2831cd(0x2c5)][_0x2831cd(0x36b)] = _0x2831cd(0x5fe);
                const _0x462925 = _0x4577e7[_0x2831cd(0x2c0)](_0x1f5143, _0x2927cd[_0x2831cd(0x40b)]), _0x47353e = _0x2927cd[_0x2831cd(0x74a)] ? _0x2927cd[_0x2831cd(0x40b)] <= 0x1e ? _0x4577e7[_0x2831cd(0x7ca)] : _0x2927cd[_0x2831cd(0x40b)] <= 0x3c ? _0x4577e7[_0x2831cd(0x37d)] : _0x4577e7[_0x2831cd(0x73d)] : '';
                _0x1e771f['className'] = ('stakeout-chain-bar\x20' + _0x47353e)['trim']();
                const _0x182124 = _0x54c216 ? _0x2fa5f3[_0x2831cd(0x102)] ? _0x2831cd(0x6f1) + _0x2fa5f3['name'] + _0x2831cd(0x216) + _0x2fa5f3[_0x2831cd(0x825)] + ')' : _0x2831cd(0x355) : _0x11415a ? '⚡\x20Next\x20Target' : _0x2831cd(0x475), _0x47ac98 = document[_0x2831cd(0x39d)](_0x2831cd(0x72a));
                if (_0x47ac98) {
                    if (_0x2927cd['isActive'])
                        _0x47ac98[_0x2831cd(0x1be)] = _0x2831cd(0x7d3) + _0x2927cd[_0x2831cd(0x1ac)] + (_0x2927cd[_0x2831cd(0x3ab)] ? '/' + _0x2927cd[_0x2831cd(0x3ab)] : '') + _0x2831cd(0x490) + _0x462925 + _0x2831cd(0x81b) + _0x2927cd[_0x2831cd(0x420)][_0x2831cd(0x4b9)](0x2) + 'x)';
                    else
                        _0x11415a ? _0x47ac98[_0x2831cd(0x1be)] = _0x2831cd(0x649) : _0x47ac98[_0x2831cd(0x1be)] = _0x2831cd(0x280);
                }
                const _0x508d64 = document['getElementById'](_0x2831cd(0x836));
                _0x508d64 && (_0x508d64[_0x2831cd(0x1be)] = _0x182124);
                const _0x40d4e4 = document[_0x2831cd(0x39d)](_0x4577e7[_0x2831cd(0x2e6)]);
                _0x40d4e4 && (_0x54c216 ? _0x40d4e4[_0x2831cd(0x2c5)][_0x2831cd(0x36b)] = _0x2831cd(0x34a) : (_0x40d4e4[_0x2831cd(0x2c5)][_0x2831cd(0x36b)] = _0x2831cd(0x808), _0x4577e7[_0x2831cd(0x3f8)](document['activeElement'], _0x40d4e4) && (_0x40d4e4['value'] = _0x2ae851)));
            } else
                _0x1e771f['style']['display'] = _0x4577e7[_0x2831cd(0x5ff)];
        }
    }
    async function _0xe9a98d(_0x2fd94a) {
        const _0x103ef8 = _0x1fbd97, _0xe97a65 = _0x169f99();
        if (!_0xe97a65)
            return null;
        if (_0x112493() >= _0x449e49())
            return console[_0x103ef8(0x257)](_0x103ef8(0x9f)), null;
        try {
            _0x419331();
            const _0x17b8fc = _0x103ef8(0x452) + _0x2fd94a + _0x103ef8(0x2ea) + _0xe97a65 + _0x103ef8(0x80d) + Date[_0x103ef8(0x6d4)]() + _0x103ef8(0x25a), _0x347796 = await _0x4577e7[_0x103ef8(0x48e)](fetch, _0x17b8fc);
            if (!_0x347796['ok'])
                return null;
            const _0x2db1c4 = await _0x347796[_0x103ef8(0x616)]();
            if (_0x2db1c4 && _0x2db1c4[_0x103ef8(0x313)]) {
                console[_0x103ef8(0x313)](_0x103ef8(0x1b8), _0x2db1c4['error']);
                _0x2db1c4['error'][_0x103ef8(0x6f8)] === 0x2 && _0x93d2c1(_0x103ef8(0x5c7));
                const _0x504b27 = {};
                return _0x504b27[_0x103ef8(0x313)] = _0x2db1c4['error'][_0x103ef8(0x313)] || _0x103ef8(0x3bb), _0x504b27[_0x103ef8(0x6f8)] = _0x2db1c4[_0x103ef8(0x313)][_0x103ef8(0x6f8)], _0x504b27;
            }
            return _0x2db1c4;
        } catch (_0x51442d) {
            return console[_0x103ef8(0x313)](_0x4577e7[_0x103ef8(0x239)], _0x51442d), null;
        }
    }
    function _0x446d97(_0x11fa23, _0x41aaa2 = Math[_0x1fbd97(0x3ee)](Date[_0x1fbd97(0x6d4)]() / 0x3e8), _0xbb8c5d = null) {
        const _0x57c598 = _0x1fbd97;
        if (!_0x11fa23)
            return ![];
        const _0x186544 = _0xbb8c5d ? _0x32378e(_0xbb8c5d) : parseInt(_0xb2691a[_0x57c598(0x365)], 0xa) || 0x5;
        if (_0x186544 === -0x1)
            return !![];
        if (_0x4577e7[_0x57c598(0x70d)](_0x11fa23[_0x57c598(0x874)], _0x57c598(0x22d)))
            return !![];
        const _0x4b6f21 = _0x4577e7[_0x57c598(0x1f0)](_0x186544, 0x3c);
        if (_0x4577e7[_0x57c598(0x340)](_0x11fa23['lastActionTs'], 0x0)) {
            const _0x3ec9c3 = _0x4577e7[_0x57c598(0x399)](_0x41aaa2, _0x11fa23[_0x57c598(0x782)]);
            if (_0x3ec9c3 >= 0x0 && _0x3ec9c3 <= _0x4b6f21)
                return !![];
        }
        const _0x11391b = (_0x11fa23[_0x57c598(0x55e)] || '')[_0x57c598(0x86f)]();
        if (_0x11391b[_0x57c598(0x1b1)](_0x4577e7['dejZg']) || _0x11391b[_0x57c598(0x1b1)](_0x57c598(0x168)) || _0x11391b[_0x57c598(0x1b1)]('moment\x20ago'))
            return !![];
        const _0x1d8b58 = _0x11391b['match'](/(\d+)\s*(?:minute|min)/);
        if (_0x1d8b58) {
            const _0x1e12af = _0x4577e7[_0x57c598(0x860)](parseInt, _0x1d8b58[0x1], 0xa);
            if (_0x1e12af <= _0x186544)
                return !![];
        }
        const _0x88fa0f = _0x11391b[_0x57c598(0x1e9)](/(\d+)\s*(?:second|sec)/);
        if (_0x88fa0f)
            return !![];
        return ![];
    }
    function _0x386dae(_0x179155) {
        const _0x3b856e = _0x1fbd97;
        if (!_0x179155)
            return ![];
        if (_0x179155[_0x3b856e(0x4b6)] !== _0x4577e7[_0x3b856e(0xdd)])
            return ![];
        if (typeof _0x179155[_0x3b856e(0x723)] === _0x4577e7[_0x3b856e(0x7be)] && _0x179155[_0x3b856e(0x723)] <= 0x0)
            return ![];
        return !![];
    }
    function _0x3a552f(_0x44f499, _0x202627 = Math[_0x1fbd97(0x3ee)](Date[_0x1fbd97(0x6d4)]() / 0x3e8), _0x18ac63 = null) {
        const _0x28e0dc = _0x1fbd97;
        if (_0x4c3563('sp')) {
            if (_0xb2691a[_0x28e0dc(0x872)] && _0x4577e7[_0x28e0dc(0x824)](_0x49f457, _0x44f499, _0x18ac63))
                return ![];
            return _0x386dae(_0x44f499) && _0x446d97(_0x44f499, _0x202627, _0x18ac63);
        } else
            return _0x386dae(_0x44f499);
    }
    function _0x25ec12(_0x382be7) {
        const _0x493575 = _0x1fbd97;
        if (!_0x382be7)
            return ![];
        return _0x386dae(_0x382be7) && (_0x382be7[_0x493575(0x874)] === _0x4577e7[_0x493575(0x6f6)] || _0x4577e7['iskjW'](_0x382be7[_0x493575(0x874)], _0x4577e7[_0x493575(0x69)]));
    }
    const _0x51b60a = new Set(), _0x2b87be = {};
    function _0x25578c(_0x4ee816) {
        const _0x140c2f = _0x1fbd97;
        if (!_0x4ee816 || typeof _0x4ee816 !== 'string')
            return null;
        if (/overdose|collapsed/i[_0x140c2f(0x66b)](_0x4ee816))
            return null;
        const _0x31a900 = _0x4ee816['match'](/(?:XID|step=profile&ID)=(\d+)[^>]*>([^<]+)<\/a>/i);
        if (_0x31a900)
            return {
                'id': _0x31a900[0x1],
                'name': _0x31a900[0x2][_0x140c2f(0x72)](),
                'raw': _0x4ee816
            };
        if (/by\s+someone/i[_0x140c2f(0x66b)](_0x4ee816)) {
            const _0x30c415 = {};
            return _0x30c415['id'] = _0x140c2f(0x1e7), _0x30c415[_0x140c2f(0x102)] = _0x140c2f(0x5e9), _0x30c415['raw'] = _0x4ee816, _0x30c415;
        }
        const _0x2c5b5f = _0x4ee816['match'](/(?:hospitalized|mugged|attacked)\s+by\s+([^,.<]+)/i);
        if (_0x2c5b5f)
            return {
                'id': _0x140c2f(0x5c6),
                'name': _0x2c5b5f[0x1][_0x140c2f(0x72)](),
                'raw': _0x4ee816
            };
        return null;
    }
    function _0x5d84cd(_0x3e71fe) {
        const _0x50bc44 = _0x1fbd97, _0x15f3cd = {};
        _0x15f3cd[_0x50bc44(0x4c5)] = _0x4577e7[_0x50bc44(0x676)], _0x15f3cd[_0x50bc44(0x581)] = _0x50bc44(0x27f), _0x15f3cd[_0x50bc44(0x3e7)] = _0x50bc44(0x1bd), _0x15f3cd['dwiTn'] = _0x50bc44(0x780);
        const _0x2a94d6 = _0x15f3cd;
        try {
            const _0x22ee5e = document[_0x50bc44(0x35d)](_0x50bc44(0x488));
            _0x22ee5e[_0x50bc44(0x24b)] = 0x2f8, _0x22ee5e[_0x50bc44(0x592)] = 0x1cc;
            const _0x4a8f3c = _0x22ee5e['getContext']('2d');
            if (!_0x4a8f3c)
                return null;
            _0x4a8f3c[_0x50bc44(0x46a)] = '#0a0f1d', _0x4a8f3c[_0x50bc44(0x7dd)](0x0, 0x0, _0x22ee5e[_0x50bc44(0x24b)], _0x22ee5e[_0x50bc44(0x592)]), _0x4a8f3c['strokeStyle'] = _0x4577e7[_0x50bc44(0x5fd)], _0x4a8f3c[_0x50bc44(0x85c)] = 0x1;
            for (let _0x3006e0 = 0x0; _0x3006e0 < _0x22ee5e[_0x50bc44(0x24b)]; _0x3006e0 += 0x1e) {
                _0x4a8f3c[_0x50bc44(0x2b2)](), _0x4a8f3c[_0x50bc44(0x6a1)](_0x3006e0, 0x0), _0x4a8f3c[_0x50bc44(0x3e1)](_0x3006e0, _0x22ee5e[_0x50bc44(0x592)]), _0x4a8f3c[_0x50bc44(0x7b3)]();
            }
            for (let _0x2aee97 = 0x0; _0x2aee97 < _0x22ee5e[_0x50bc44(0x592)]; _0x2aee97 += 0x1e) {
                _0x4a8f3c[_0x50bc44(0x2b2)](), _0x4a8f3c[_0x50bc44(0x6a1)](0x0, _0x2aee97), _0x4a8f3c[_0x50bc44(0x3e1)](_0x22ee5e[_0x50bc44(0x24b)], _0x2aee97), _0x4a8f3c['stroke']();
            }
            const _0x1f9a53 = _0x4a8f3c['createLinearGradient'](0x0, 0x0, _0x22ee5e[_0x50bc44(0x24b)], 0x0);
            _0x1f9a53[_0x50bc44(0x591)](0x0, _0x50bc44(0x6ce)), _0x1f9a53[_0x50bc44(0x591)](0.5, '#dc2626'), _0x1f9a53[_0x50bc44(0x591)](0x1, _0x50bc44(0x6ce)), _0x4a8f3c[_0x50bc44(0x46a)] = _0x1f9a53, _0x4a8f3c[_0x50bc44(0x7dd)](0x0, 0x0, _0x22ee5e[_0x50bc44(0x24b)], 0x32), _0x4a8f3c[_0x50bc44(0x2d5)] = _0x50bc44(0x5d8), _0x4a8f3c[_0x50bc44(0x85c)] = 0x2, _0x4a8f3c[_0x50bc44(0x2f3)](0x1, 0x1, _0x22ee5e['width'] - 0x2, _0x4577e7[_0x50bc44(0x399)](_0x22ee5e['height'], 0x2)), _0x4a8f3c[_0x50bc44(0x46a)] = _0x4577e7[_0x50bc44(0x1a1)], _0x4a8f3c['font'] = _0x50bc44(0x607), _0x4a8f3c[_0x50bc44(0x1d4)](_0x50bc44(0x4f9), 0x12, 0x1f);
            const _0x1cbb07 = new Date(_0x3e71fe[_0x50bc44(0x40f)] * 0x3e8)[_0x50bc44(0x465)]()[_0x50bc44(0x78f)]('T', '\x20')[_0x50bc44(0x78f)](/\..+/, _0x50bc44(0x3df));
            _0x4a8f3c['fillStyle'] = '#fecaca', _0x4a8f3c[_0x50bc44(0x6f9)] = _0x50bc44(0x707), _0x4a8f3c[_0x50bc44(0x6dc)] = 'right', _0x4a8f3c[_0x50bc44(0x1d4)](_0x1cbb07, _0x4577e7[_0x50bc44(0x399)](_0x22ee5e[_0x50bc44(0x24b)], 0x12), 0x1f), _0x4a8f3c[_0x50bc44(0x6dc)] = _0x50bc44(0x634);
            function _0x597bbe(_0x52de01, _0x5bf8b6, _0x24da73, _0x5b1360, _0xc82bf7, _0xd981c7) {
                const _0xf46455 = _0x50bc44;
                _0x4a8f3c[_0xf46455(0x46a)] = _0xc82bf7, _0x4a8f3c['strokeStyle'] = _0xd981c7, _0x4a8f3c[_0xf46455(0x85c)] = 1.5, _0x4577e7[_0xf46455(0x2b1)](typeof _0x4a8f3c['roundRect'], _0x4577e7['jiUEU']) ? (_0x4a8f3c[_0xf46455(0x2b2)](), _0x4a8f3c[_0xf46455(0x6fe)](_0x52de01, _0x5bf8b6, _0x24da73, _0x5b1360, 0x6), _0x4a8f3c[_0xf46455(0x5af)](), _0x4a8f3c[_0xf46455(0x7b3)]()) : (_0x4a8f3c['fillRect'](_0x52de01, _0x5bf8b6, _0x24da73, _0x5b1360), _0x4a8f3c[_0xf46455(0x2f3)](_0x52de01, _0x5bf8b6, _0x24da73, _0x5b1360));
            }
            _0x597bbe(0x14, 0x44, 0x15e, 0xc3, _0x4577e7['PUJhb'], _0x50bc44(0x183)), _0x4a8f3c[_0x50bc44(0x46a)] = _0x50bc44(0x405), _0x4a8f3c[_0x50bc44(0x7dd)](0x14, 0x44, 0x15e, 0x20), _0x4a8f3c[_0x50bc44(0x46a)] = _0x4577e7[_0x50bc44(0xd7)], _0x4a8f3c[_0x50bc44(0x6f9)] = _0x50bc44(0x27f), _0x4a8f3c[_0x50bc44(0x1d4)](_0x50bc44(0x7aa), 0x20, 0x59), _0x4a8f3c[_0x50bc44(0x6f9)] = _0x50bc44(0x13c);
            let _0x504262 = 0x7a;
            const _0x3bc437 = (_0x4cf5a5, _0x171b09, _0x32960d = '#f8fafc') => {
                const _0x563a74 = _0x50bc44, _0x9521a = '4|1|0|2|3'['split']('|');
                let _0x435798 = 0x0;
                while (!![]) {
                    switch (_0x9521a[_0x435798++]) {
                    case '0':
                        _0x4a8f3c[_0x563a74(0x46a)] = _0x32960d;
                        continue;
                    case '1':
                        _0x4a8f3c['fillText'](_0x4cf5a5, 0x20, _0x504262);
                        continue;
                    case '2':
                        _0x4a8f3c[_0x563a74(0x1d4)](_0x171b09, 0x20 + 0x7d, _0x504262);
                        continue;
                    case '3':
                        _0x504262 += 0x16;
                        continue;
                    case '4':
                        _0x4a8f3c[_0x563a74(0x46a)] = _0x4577e7[_0x563a74(0x38f)];
                        continue;
                    }
                    break;
                }
            };
            _0x3bc437(_0x50bc44(0x778), _0x3e71fe[_0x50bc44(0x1b6)][_0x50bc44(0x102)] + '\x20[' + _0x3e71fe['targetId'] + ']', _0x4577e7['HdUjG']), _0x3bc437('Target\x20Level:', _0x50bc44(0x52b) + (_0x3e71fe[_0x50bc44(0x1b6)][_0x50bc44(0x825)] || _0x50bc44(0x805)), _0x4577e7[_0x50bc44(0x35c)]), _0x3bc437(_0x50bc44(0x57b), _0x3e71fe[_0x50bc44(0x1b6)][_0x50bc44(0x76c)] ? _0x3e71fe[_0x50bc44(0x1b6)]['factionName'] + '\x20[' + _0x3e71fe[_0x50bc44(0x1b6)][_0x50bc44(0x385)] + ']' : _0x4577e7[_0x50bc44(0x50f)], _0x50bc44(0x59c));
            const _0x18d240 = (_0x3e71fe['previous']?.[_0x50bc44(0x874)] || _0x50bc44(0x5ce)) + '\x20(' + (_0x3e71fe[_0x50bc44(0xba)]?.[_0x50bc44(0x55e)] || _0x50bc44(0x5c6)) + ')';
            _0x3bc437(_0x50bc44(0x4e3), _0x18d240, _0x50bc44(0x2df));
            const _0x1e4fb1 = _0x3e71fe[_0x50bc44(0x1b6)][_0x50bc44(0x184)] || _0x3e71fe[_0x50bc44(0xba)]?.[_0x50bc44(0x184)] ? _0x4577e7[_0x50bc44(0x329)] : _0x50bc44(0x383);
            _0x4577e7['dxrmp'](_0x3bc437, _0x4577e7['BLlKl'], _0x1e4fb1, _0x3e71fe[_0x50bc44(0x1b6)][_0x50bc44(0x184)] || _0x3e71fe[_0x50bc44(0xba)]?.[_0x50bc44(0x184)] ? _0x50bc44(0x39f) : _0x4577e7[_0x50bc44(0x403)]), _0x3bc437(_0x50bc44(0x12d), (_0x3e71fe['previous']?.[_0x50bc44(0x4b6)] || _0x4577e7[_0x50bc44(0xdd)]) + '\x20(Out\x20&\x20Alive)', _0x50bc44(0x3ca)), _0x597bbe(0x186, 0x44, 0x15e, 0xc3, _0x50bc44(0x444), _0x50bc44(0x183)), _0x4a8f3c['fillStyle'] = _0x50bc44(0x405), _0x4a8f3c[_0x50bc44(0x7dd)](0x186, 0x44, 0x15e, 0x20), _0x4a8f3c[_0x50bc44(0x46a)] = _0x4577e7[_0x50bc44(0x377)], _0x4a8f3c[_0x50bc44(0x6f9)] = 'bold\x2013px\x20-apple-system,\x20BlinkMacSystemFont,\x20sans-serif', _0x4a8f3c[_0x50bc44(0x1d4)](_0x50bc44(0x1d3), 0x192, 0x59), _0x504262 = 0x7a;
            const _0xffb521 = _0x3e71fe[_0x50bc44(0x61a)]?.[_0x50bc44(0x102)] || _0x4577e7['kFoLG'], _0x507a08 = _0x3e71fe[_0x50bc44(0x61a)]?.['id'] || _0x50bc44(0x396), _0xa823c8 = (_0x17c2e3, _0x404bc4, _0x4e7834 = _0x50bc44(0x66c)) => {
                    const _0x15251b = _0x50bc44, _0x1818ec = _0x4577e7[_0x15251b(0x49e)][_0x15251b(0x79f)]('|');
                    let _0x3fc0ec = 0x0;
                    while (!![]) {
                        switch (_0x1818ec[_0x3fc0ec++]) {
                        case '0':
                            _0x4a8f3c[_0x15251b(0x46a)] = '#94a3b8';
                            continue;
                        case '1':
                            _0x4a8f3c[_0x15251b(0x46a)] = _0x4e7834;
                            continue;
                        case '2':
                            _0x4a8f3c['fillText'](_0x17c2e3, 0x192, _0x504262);
                            continue;
                        case '3':
                            _0x504262 += 0x16;
                            continue;
                        case '4':
                            _0x4a8f3c[_0x15251b(0x1d4)](_0x404bc4, 0x192 + 0x82, _0x504262);
                            continue;
                        }
                        break;
                    }
                };
            _0x4577e7[_0x50bc44(0x7af)](_0xa823c8, _0x50bc44(0x662), _0xffb521 + '\x20[' + _0x507a08 + ']', _0x50bc44(0x7eb)), _0xa823c8(_0x4577e7[_0x50bc44(0x3bf)], 'Hospitalized\x20Target', _0x50bc44(0x2df)), _0x4577e7[_0x50bc44(0x7af)](_0xa823c8, _0x4577e7['hZYnN'], _0x3e71fe[_0x50bc44(0x1b6)][_0x50bc44(0x30d)] || _0x50bc44(0xc6), _0x50bc44(0x2df)), _0xa823c8(_0x50bc44(0x6b5), _0x4577e7['fWgdC'], _0x50bc44(0x5dd)), _0xa823c8(_0x4577e7[_0x50bc44(0x7dc)], _0x50bc44(0x42c), _0x4577e7[_0x50bc44(0x676)]);
            const _0x412f17 = _0x3e71fe['target'][_0x50bc44(0x206)] ? new Date(_0x4577e7[_0x50bc44(0x6b0)](_0x3e71fe['target'][_0x50bc44(0x206)], 0x3e8))[_0x50bc44(0x465)]()['replace']('T', '\x20')[_0x50bc44(0x348)](0xb, 0x13) + _0x50bc44(0x3df) : _0x4577e7[_0x50bc44(0x95)];
            return _0xa823c8(_0x4577e7[_0x50bc44(0x14b)], _0x412f17, _0x4577e7[_0x50bc44(0x38f)]), _0x4577e7[_0x50bc44(0x6ad)](_0x597bbe, 0x14, 0x114, 0x2d0, 0x80, _0x50bc44(0x796), _0x4577e7[_0x50bc44(0x676)]), _0x4a8f3c[_0x50bc44(0x46a)] = _0x4577e7['imYGi'], _0x4a8f3c[_0x50bc44(0x7dd)](0x14, 0x114, 0x2d0, 0x1c), _0x4a8f3c[_0x50bc44(0x46a)] = _0x50bc44(0x80b), _0x4a8f3c[_0x50bc44(0x6f9)] = _0x50bc44(0x247), _0x4a8f3c[_0x50bc44(0x1d4)](_0x50bc44(0x809), 0x20, 0x127), _0x504262 = 0x148, _0x3e71fe[_0x50bc44(0x868)][_0x50bc44(0x136)]((_0x3e33c6, _0x4f21d4) => {
                const _0x45fbf7 = _0x50bc44;
                _0x4a8f3c[_0x45fbf7(0x46a)] = _0x2a94d6[_0x45fbf7(0x4c5)], _0x4a8f3c[_0x45fbf7(0x6f9)] = _0x2a94d6[_0x45fbf7(0x581)], _0x4a8f3c[_0x45fbf7(0x1d4)](_0x45fbf7(0x391) + (_0x4f21d4 + 0x1) + ':', 0x20, _0x504262), _0x4a8f3c[_0x45fbf7(0x46a)] = _0x2a94d6[_0x45fbf7(0x3e7)], _0x4a8f3c[_0x45fbf7(0x6f9)] = _0x2a94d6[_0x45fbf7(0x69a)], _0x4a8f3c[_0x45fbf7(0x1d4)](_0x3e33c6, 0x96, _0x504262), _0x504262 += 0x18;
            }), _0x4a8f3c[_0x50bc44(0x46a)] = '#94a3b8', _0x4a8f3c[_0x50bc44(0x6f9)] = _0x50bc44(0x453), _0x4a8f3c[_0x50bc44(0x1d4)](_0x50bc44(0x7b1), 0x20, 0x182), _0x4a8f3c[_0x50bc44(0x46a)] = _0x4577e7[_0x50bc44(0x146)], _0x4a8f3c[_0x50bc44(0x7dd)](0x0, 0x1a2, _0x22ee5e[_0x50bc44(0x24b)], 0x2a), _0x4a8f3c[_0x50bc44(0x2d5)] = _0x4577e7[_0x50bc44(0x665)], _0x4a8f3c[_0x50bc44(0x85c)] = 0x1, _0x4a8f3c[_0x50bc44(0x2b2)](), _0x4a8f3c[_0x50bc44(0x6a1)](0x0, 0x1a2), _0x4a8f3c[_0x50bc44(0x3e1)](_0x22ee5e[_0x50bc44(0x24b)], 0x1a2), _0x4a8f3c[_0x50bc44(0x7b3)](), _0x4a8f3c[_0x50bc44(0x46a)] = '#64748b', _0x4a8f3c[_0x50bc44(0x6f9)] = '11px\x20monospace', _0x4a8f3c[_0x50bc44(0x1d4)](_0x50bc44(0x45c) + _0xeb4109 + '\x20•\x20ID:\x20' + _0x3e71fe['incidentId'], 0x12, 0x1ba), _0x4a8f3c[_0x50bc44(0x6dc)] = _0x50bc44(0x544), _0x4a8f3c[_0x50bc44(0x1d4)](_0x50bc44(0x7e1), _0x22ee5e[_0x50bc44(0x24b)] - 0x12, 0x1ba), _0x4a8f3c['textAlign'] = _0x4577e7[_0x50bc44(0x199)], _0x22ee5e;
        } catch (_0x58b13e) {
            return console[_0x50bc44(0x313)](_0x50bc44(0x21a), _0x58b13e), null;
        }
    }
    function _0x158cbd(_0x768491, _0x4711a5) {
        const _0x362ec9 = _0x1fbd97;
        try {
            const _0x2e2a8c = document[_0x362ec9(0x35d)]('a');
            _0x2e2a8c[_0x362ec9(0x504)] = _0x4711a5, _0x2e2a8c['href'] = _0x768491[_0x362ec9(0x40a)](_0x4577e7[_0x362ec9(0x733)]), document[_0x362ec9(0x198)][_0x362ec9(0x159)](_0x2e2a8c), _0x2e2a8c[_0x362ec9(0x3ed)](), document[_0x362ec9(0x198)][_0x362ec9(0x56a)](_0x2e2a8c);
        } catch (_0x36aa1c) {
            console[_0x362ec9(0x313)](_0x4577e7[_0x362ec9(0x2a0)], _0x36aa1c);
        }
    }
    function _0x30218d(_0x1b4993, _0x45c4e1) {
        const _0x227837 = _0x1fbd97, _0x1f11dc = {
                'aHDJK': _0x227837(0x5a9),
                'cPzfP': _0x227837(0x495),
                'JZqKf': function (_0x2d6ec1, _0x40294f) {
                    return _0x2d6ec1(_0x40294f);
                }
            };
        try {
            const _0x13b57a = document[_0x227837(0x39d)](_0x4577e7[_0x227837(0x569)]);
            if (_0x13b57a)
                _0x13b57a[_0x227837(0x172)]();
            const _0x1fedb3 = document['createElement'](_0x4577e7[_0x227837(0x698)]);
            _0x1fedb3['id'] = _0x227837(0x672), _0x1fedb3[_0x227837(0x2c5)][_0x227837(0x5d6)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inset:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.85);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(5px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            const _0x24c35f = [
                    '🚨\x20**MERCENARY\x20CONTRACT\x20BREACH\x20REPORT**\x20🚨',
                    _0x227837(0x22c) + _0x1b4993[_0x227837(0x1b6)][_0x227837(0x102)] + '\x20[' + _0x1b4993[_0x227837(0x19a)] + ']\x20(Level\x20' + (_0x1b4993['target']['level'] || '?') + ')',
                    _0x1b4993[_0x227837(0x1b6)][_0x227837(0x76c)] ? _0x227837(0x507) + _0x1b4993[_0x227837(0x1b6)][_0x227837(0x76c)] + '\x20[' + _0x1b4993['target'][_0x227837(0x385)] + ']' : null,
                    _0x227837(0x1ca) + (_0x1b4993['previous']?.['state'] || _0x227837(0x173)) + '\x20(Out\x20&\x20Alive)',
                    _0x227837(0x401) + (_0x1b4993[_0x227837(0xba)]?.[_0x227837(0x874)] || _0x4577e7['RfMor']) + '\x20(' + (_0x1b4993[_0x227837(0xba)]?.[_0x227837(0x55e)] || 'unknown') + ')',
                    _0x227837(0x2fa) + (_0x1b4993[_0x227837(0x61a)]?.[_0x227837(0x102)] || _0x227837(0x805)) + '\x20[' + (_0x1b4993['attacker']?.['id'] || _0x4577e7[_0x227837(0x95)]) + ']',
                    _0x227837(0x7bf) + (_0x1b4993['target']['desc'] || _0x227837(0x2e8)),
                    _0x227837(0x503),
                    ..._0x1b4993[_0x227837(0x868)][_0x227837(0x33c)](_0x479d03 => _0x227837(0x828) + _0x479d03),
                    _0x227837(0x556) + new Date(_0x4577e7[_0x227837(0x325)](_0x1b4993[_0x227837(0x40f)], 0x3e8))[_0x227837(0x465)]()['replace']('T', '\x20')[_0x227837(0x78f)](/\..+/, _0x4577e7['KkSoE']),
                    _0x227837(0x4d1) + _0x1b4993[_0x227837(0x342)] + '`',
                    '*(Generated\x20automatically\x20by\x20Mercenary\x20Stakeout\x20Radar\x20v' + _0xeb4109 + ')*'
                ][_0x227837(0x71f)](Boolean)[_0x227837(0x663)]('\x0a'), _0x44fa60 = _0x45c4e1[_0x227837(0x40a)](_0x227837(0x6b2));
            _0x1fedb3[_0x227837(0x1be)] = _0x227837(0x7ba) + _0x1b4993['incidentId'] + _0x227837(0x4db) + _0x44fa60 + (_0x227837(0x15d) + _0x227837(0x1bf)) + _0x24c35f + (_0x227837(0x34b) + _0x227837(0xa6)) + (_0x1b4993[_0x227837(0x61a)] && _0x4577e7[_0x227837(0x164)](_0x1b4993['attacker']['id'], _0x4577e7[_0x227837(0x178)]) ? _0x227837(0x398) : '') + _0x227837(0x2e9), document[_0x227837(0x198)][_0x227837(0x159)](_0x1fedb3);
            const _0x43452b = document[_0x227837(0x39d)](_0x4577e7[_0x227837(0x87c)]), _0x54e34b = document[_0x227837(0x39d)](_0x4577e7[_0x227837(0x5b4)]), _0x3ec7f6 = () => _0x1fedb3[_0x227837(0x172)]();
            if (_0x43452b)
                _0x43452b[_0x227837(0x1f7)] = _0x3ec7f6;
            if (_0x54e34b)
                _0x54e34b['onclick'] = _0x3ec7f6;
            const _0x4bf3bb = document[_0x227837(0x39d)](_0x227837(0x85d));
            _0x4bf3bb && (_0x4bf3bb[_0x227837(0x1f7)] = () => {
                const _0x4fc233 = _0x227837, _0x3b1765 = new Date()[_0x4fc233(0x465)]()[_0x4fc233(0x348)](0x0, 0xa)[_0x4fc233(0x78f)](/-/g, ''), _0x2bc3f0 = _0x4fc233(0xa5) + _0x1b4993[_0x4fc233(0x19a)] + _0x4fc233(0x118) + (_0x1b4993[_0x4fc233(0x61a)]?.['id'] || _0x4fc233(0x5c6)) + '_' + _0x3b1765 + '.png';
                _0x4577e7['yVkZj'](_0x158cbd, _0x45c4e1, _0x2bc3f0), _0x4577e7[_0x4fc233(0x6ff)](_0x93d2c1, _0x4fc233(0x125));
            });
            const _0x245009 = document[_0x227837(0x39d)](_0x227837(0x8f));
            _0x245009 && (_0x245009[_0x227837(0x1f7)] = () => {
                const _0x565bbc = _0x227837, _0x1361e7 = {};
                _0x1361e7[_0x565bbc(0x53c)] = _0x565bbc(0x5eb), _0x1361e7[_0x565bbc(0x144)] = _0x565bbc(0x4ef), _0x1361e7['OowEU'] = _0x1f11dc['aHDJK'];
                const _0x4d714a = _0x1361e7, _0x1dd27d = document[_0x565bbc(0x39d)](_0x1f11dc['cPzfP']);
                if (navigator[_0x565bbc(0x4a0)] && navigator[_0x565bbc(0x4a0)][_0x565bbc(0x254)])
                    navigator[_0x565bbc(0x4a0)]['writeText'](_0x24c35f)[_0x565bbc(0x326)](() => {
                        const _0x437ed4 = _0x565bbc;
                        _0x93d2c1(_0x4d714a[_0x437ed4(0x53c)]);
                    })[_0x565bbc(0x776)](() => {
                        const _0x43d60b = _0x565bbc;
                        _0x1dd27d && (_0x1dd27d[_0x43d60b(0x736)](), document[_0x43d60b(0x4ac)](_0x4d714a[_0x43d60b(0x144)]), _0x93d2c1(_0x4d714a['OowEU']));
                    });
                else
                    _0x1dd27d && (_0x1dd27d[_0x565bbc(0x736)](), document['execCommand'](_0x565bbc(0x4ef)), _0x1f11dc[_0x565bbc(0x143)](_0x93d2c1, _0x565bbc(0x5a9)));
            });
            const _0x1629b4 = document[_0x227837(0x39d)](_0x227837(0x2cb));
            _0x1629b4 && (_0x1629b4[_0x227837(0x1f7)] = () => window['open']('https://www.torn.com/profiles.php?XID=' + _0x1b4993[_0x227837(0x19a)], _0x227837(0x174)));
            const _0x2ce19c = document[_0x227837(0x39d)](_0x4577e7['fawHO']);
            _0x2ce19c && _0x1b4993[_0x227837(0x61a)]?.['id'] && (_0x2ce19c[_0x227837(0x1f7)] = () => window[_0x227837(0x2a8)](_0x227837(0x5ad) + _0x1b4993[_0x227837(0x61a)]['id'], '_blank'));
        } catch (_0x163fba) {
            console['error'](_0x4577e7[_0x227837(0x855)], _0x163fba);
        }
    }
    function _0x502efd(_0x127ce9, _0x123d32, _0x166be2, _0x210a65) {
        const _0x1ba9de = _0x1fbd97;
        if (!_0xb2691a['alertOnIllegalHit'] && !_0xb2691a[_0x1ba9de(0x79b)])
            return;
        const _0x5bb5e9 = _0x127ce9 + '_' + (_0x166be2[_0x1ba9de(0x206)] || _0x210a65);
        if (_0x51b60a['has'](_0x5bb5e9))
            return;
        const _0x3e9482 = _0x166be2[_0x1ba9de(0x238)] || _0x166be2[_0x1ba9de(0x30d)] || '';
        if (/overdose|collapsed/i[_0x1ba9de(0x66b)](_0x3e9482))
            return;
        const _0x54e455 = _0x4577e7['RHIaU'](_0x25578c, _0x3e9482), _0x5bbf8a = _0x48ef7f();
        if (_0x54e455 && _0x5bbf8a && _0x4577e7[_0x1ba9de(0x54d)](String(_0x54e455['id']), _0x4577e7[_0x1ba9de(0x6a6)](String, _0x5bbf8a)))
            return;
        const _0x477db7 = _0x446d97(_0x123d32, _0x210a65, _0x127ce9), _0x3a7d1b = _0x4577e7[_0x1ba9de(0x775)](Boolean, _0x123d32[_0x1ba9de(0x184)] || _0x166be2[_0x1ba9de(0x184)]);
        if (_0x477db7 && !_0x3a7d1b)
            return;
        _0x51b60a[_0x1ba9de(0x4b8)](_0x5bb5e9);
        const _0x464cd6 = [];
        if (!_0x477db7) {
            const _0x52af17 = _0x123d32[_0x1ba9de(0x874)] + (_0x123d32[_0x1ba9de(0x55e)] ? '\x20(' + _0x123d32[_0x1ba9de(0x55e)] + ')' : '');
            _0x464cd6[_0x1ba9de(0x563)](_0x1ba9de(0x3fd) + _0x32378e(_0x127ce9) + _0x1ba9de(0x283) + _0x52af17 + ')');
        }
        if (_0x3a7d1b) {
            const _0x2e9c9c = (_0x166be2[_0x1ba9de(0x3e4)] || _0x123d32[_0x1ba9de(0x3e4)])?.[_0x1ba9de(0x102)] || 'Faction\x20War';
            _0x464cd6[_0x1ba9de(0x563)](_0x1ba9de(0x7d1) + _0x2e9c9c + ')');
        }
        const _0x1843ae = _0x54e455 ? _0x54e455['name'] : _0x1ba9de(0x4e9), _0x24e943 = _0x54e455 ? _0x54e455['id'] : _0x1ba9de(0x396);
        _0x4577e7[_0x1ba9de(0x164)](_0xb2691a['alertOnIllegalHit'], ![]) && _0x460aca({
            'key': _0x1ba9de(0x181) + _0x5bb5e9,
            'dedupeMs': _0x4577e7[_0x1ba9de(0x3b7)](0xa, 0x3c) * 0x3e8,
            'sound': 'illegal',
            'flash': _0x1ba9de(0x7b4) + _0x166be2['name'] + '!',
            'notif': {
                'title': _0x1ba9de(0x7b4) + _0x166be2['name'] + '!',
                'body': _0x1ba9de(0x431) + _0x1843ae + '\x20[' + _0x24e943 + _0x1ba9de(0x167) + _0x464cd6[_0x1ba9de(0x663)](';\x20')
            },
            'toast': _0x1ba9de(0x2f2) + _0x166be2['name'] + _0x1ba9de(0x666) + _0x1843ae + _0x1ba9de(0x243)
        });
        const _0x28d752 = {
                'targetId': _0x127ce9,
                'target': _0x166be2,
                'previous': _0x123d32,
                'attacker': _0x54e455,
                'violations': _0x464cd6,
                'timestamp': _0x210a65,
                'incidentId': _0x1ba9de(0x80) + _0x127ce9 + '-' + Math[_0x1ba9de(0x3ee)](_0x4577e7[_0x1ba9de(0x618)](_0x210a65, 0x186a0))
            }, _0x313c4b = _0x4577e7[_0x1ba9de(0x2c0)](_0x5d84cd, _0x28d752), _0xa9ef44 = {};
        _0xa9ef44[_0x1ba9de(0x4ce)] = _0x28d752, _0xa9ef44[_0x1ba9de(0x488)] = _0x313c4b, _0x2b87be[_0x127ce9] = _0xa9ef44;
        const _0x31d416 = {};
        _0x31d416[_0x1ba9de(0x19a)] = _0x127ce9, _0x31d416[_0x1ba9de(0x4ce)] = _0x28d752, _0x4577e7[_0x1ba9de(0x476)](_0x5efbb7, _0x4577e7['oHuDY'], _0x31d416);
        if (_0x4577e7['pZaTd'](_0xb2691a[_0x1ba9de(0x79b)], !![]) && _0x313c4b) {
            const _0x432ca2 = new Date()['toISOString']()[_0x1ba9de(0x348)](0x0, 0xa)[_0x1ba9de(0x78f)](/-/g, ''), _0x3a6c03 = _0x1ba9de(0xa5) + _0x127ce9 + _0x1ba9de(0x118) + (_0x54e455?.['id'] || _0x4577e7[_0x1ba9de(0x494)]) + '_' + _0x432ca2 + _0x1ba9de(0x19d);
            _0x4577e7['XXtGA'](_0x158cbd, _0x313c4b, _0x3a6c03);
        }
        _0x4577e7[_0x1ba9de(0x85b)](_0x26e1e9, _0x4577e7[_0x1ba9de(0x27d)]) && _0x4577e7[_0x1ba9de(0x410)](_0x70efbf, _0x127ce9);
    }
    function _0x1fe616(_0x24ff1a, _0x4a47c6) {
        const _0x181858 = _0x1fbd97;
        if (!_0x4a47c6 || _0x4a47c6['error'])
            return;
        const _0x552973 = _0x4a47c6[_0x181858(0x270)]?.['faction_id'] || 0x0, _0xe74d8a = _0x4a47c6[_0x181858(0x270)]?.[_0x181858(0x85e)] || '';
        _0x4577e7[_0x181858(0x586)](_0x4ad13c[_0x181858(0x3db)], 0x0) && _0x4577e7['CszoN'](_0x59d7e0);
        const _0x19c95c = _0x4a47c6['basicicons'] || {}, _0x1d5bd2 = _0x1ea452(_0x19c95c), _0x88a6ab = Boolean(_0x1d5bd2), _0x50d01d = _0x4577e7[_0x181858(0x51e)](_0x4349ec, _0x552973, _0x1d5bd2), _0x322cc1 = {
                'name': _0x4a47c6['name'] || 'Player\x20[' + _0x24ff1a + ']',
                'state': _0x4a47c6[_0x181858(0x730)]?.[_0x181858(0x4b6)] || 'Okay',
                'desc': _0x4a47c6[_0x181858(0x730)]?.[_0x181858(0x221)] || '',
                'details': _0x4a47c6[_0x181858(0x730)]?.[_0x181858(0x238)] || '',
                'until': _0x4577e7[_0x181858(0x811)](parseInt, _0x4a47c6['status']?.[_0x181858(0x206)] || '0', 0xa),
                'online': _0x4a47c6[_0x181858(0x7d)]?.[_0x181858(0x730)] || _0x4577e7[_0x181858(0x4bb)],
                'lastActionRel': _0x4a47c6[_0x181858(0x7d)]?.[_0x181858(0x588)] || '',
                'lastActionTs': parseInt(_0x4a47c6[_0x181858(0x7d)]?.[_0x181858(0x40f)] || '0', 0xa),
                'hpCurr': _0x4a47c6['life']?.[_0x181858(0x1ac)] || 0x0,
                'hpMax': _0x4a47c6[_0x181858(0x6ee)]?.[_0x181858(0x58c)] || 0x0,
                'hpPct': _0x4a47c6[_0x181858(0x6ee)]?.[_0x181858(0x58c)] > 0x0 ? _0x4577e7[_0x181858(0x5e8)](_0x4a47c6[_0x181858(0x6ee)][_0x181858(0x1ac)], _0x4a47c6[_0x181858(0x6ee)][_0x181858(0x58c)]) * 0x64 : 0x64,
                'level': _0x4a47c6[_0x181858(0x825)] || 0x0,
                'factionId': _0x552973,
                'factionName': _0xe74d8a,
                'warActive': !!_0x50d01d,
                'warInfo': _0x50d01d,
                'basicicons': _0x19c95c,
                'wall': _0x1d5bd2,
                'onWall': _0x88a6ab
            }, _0x31cc5e = _0x4f991c[_0x24ff1a], _0x3767d4 = _0x31cc5e ? _0x31cc5e['data'] : null, _0x144f55 = Math[_0x181858(0x3ee)](Date[_0x181858(0x6d4)]() / 0x3e8), _0x371e29 = _0x4577e7[_0x181858(0x288)](_0x32378e, _0x24ff1a), _0x316255 = _0x48c321(_0x24ff1a);
        if (_0x61dadc['includes'](_0x24ff1a)) {
            const _0x30e37c = _0x3a552f(_0x322cc1, _0x144f55, _0x24ff1a), _0x7aa5e6 = _0x3767d4 ? _0x4577e7['mujZK'](_0x3a552f, _0x3767d4, _0x144f55, _0x24ff1a) : ![];
            _0x3767d4 && _0x3767d4[_0x181858(0x4b6)] !== _0x4577e7[_0x181858(0x4b0)] && _0x322cc1['state'] === 'Hospital' && _0x4577e7[_0x181858(0x792)](_0x502efd, _0x24ff1a, _0x3767d4, _0x322cc1, _0x144f55);
            if (_0x3767d4 && !_0x316255) {
                const _0x10b678 = !_0x7aa5e6 && _0x30e37c;
                if (_0xb2691a[_0x181858(0x273)] && _0x10b678) {
                    const _0x25ed38 = _0x322cc1[_0x181858(0x874)] + ',\x20' + (_0x322cc1[_0x181858(0x55e)] || 'within\x20' + _0x371e29 + 'm'), _0x2b0e4a = {};
                    _0x2b0e4a[_0x181858(0x20c)] = 'okay:' + _0x24ff1a + ':' + _0x144f55, _0x2b0e4a[_0x181858(0x861)] = _0x181858(0x2ee), _0x2b0e4a[_0x181858(0x6e7)] = _0x322cc1['name'] + '\x20READY\x20(ACTIVE)!', _0x2b0e4a[_0x181858(0x4be)] = !![], _0x2b0e4a[_0x181858(0xae)] = {}, _0x2b0e4a[_0x181858(0x3e3)] = _0x181858(0x821) + _0x322cc1[_0x181858(0x102)] + _0x181858(0xf1) + _0x25ed38 + _0x181858(0x53f), _0x2b0e4a[_0x181858(0xae)][_0x181858(0x3dd)] = _0x181858(0x89) + _0x322cc1[_0x181858(0x102)] + _0x181858(0x477), _0x2b0e4a[_0x181858(0xae)][_0x181858(0x198)] = 'Target\x20is\x20Out\x20&\x20Alive\x20(Okay)\x20and\x20active\x20(' + _0x25ed38 + ')!', _0x4577e7[_0x181858(0x6ff)](_0x460aca, _0x2b0e4a);
                }
                if (_0xb2691a[_0x181858(0x2f4)] && _0x3767d4[_0x181858(0x4b6)] === _0x4577e7[_0x181858(0xca)] && _0x322cc1[_0x181858(0x4b6)] !== _0x181858(0x463)) {
                    if (!_0x10b678 && _0x30e37c) {
                        const _0x16392a = {};
                        _0x16392a[_0x181858(0x20c)] = _0x181858(0x551) + _0x24ff1a + ':' + _0x144f55, _0x16392a[_0x181858(0x861)] = _0x4577e7[_0x181858(0x731)], _0x16392a[_0x181858(0x6e7)] = _0x322cc1[_0x181858(0x102)] + _0x181858(0x7c7), _0x16392a[_0x181858(0x4be)] = !![], _0x16392a[_0x181858(0xae)] = {}, _0x16392a[_0x181858(0xae)][_0x181858(0x3dd)] = _0x322cc1[_0x181858(0x102)] + _0x181858(0x4a5), _0x16392a[_0x181858(0xae)]['body'] = 'Flight\x20arrived\x20in\x20Torn:\x20Out\x20&\x20Alive\x20•\x20Active:\x20' + _0x322cc1[_0x181858(0x874)], _0x460aca(_0x16392a);
                    }
                }
                _0xb2691a['alertOnFullHp'] && _0x3767d4[_0x181858(0x72f)] < 0x64 && _0x322cc1[_0x181858(0x72f)] >= 0x64 && (!_0x10b678 && _0x30e37c && _0x460aca({
                    'key': _0x181858(0x279) + _0x24ff1a + ':' + _0x144f55,
                    'sound': _0x4577e7['VSgAh'],
                    'flash': _0x322cc1[_0x181858(0x102)] + _0x181858(0x71),
                    'focus': !![],
                    'notif': {
                        'title': _0x322cc1[_0x181858(0x102)] + _0x181858(0x519),
                        'body': _0x181858(0x33d) + _0x322cc1[_0x181858(0x723)][_0x181858(0x79)]() + _0x181858(0x508) + _0x322cc1['hpMax']['toLocaleString']() + _0x181858(0xde) + _0x322cc1[_0x181858(0x874)]
                    }
                }));
            }
        }
        if (_0x178588[_0x181858(0x1b1)](_0x24ff1a) && _0xb2691a[_0x181858(0x690)] && !_0xb2691a[_0x181858(0x768)]) {
            const _0x52597e = _0x4577e7[_0x181858(0x553)](_0x25ec12, _0x322cc1), _0x19e116 = _0x3767d4 ? _0x25ec12(_0x3767d4) : ![];
            if (_0x52597e && !_0x19e116) {
                const _0x3137b4 = _0x1383de(_0x24ff1a);
                if (!_0x3137b4) {
                    const _0x27a576 = {};
                    _0x27a576[_0x181858(0x20c)] = 'trader:' + _0x24ff1a + ':' + _0x144f55, _0x27a576[_0x181858(0x861)] = 'trader', _0x27a576[_0x181858(0x6e7)] = '💼\x20TRADER\x20' + _0x322cc1[_0x181858(0x102)] + '\x20OUT!', _0x27a576[_0x181858(0x4be)] = !![], _0x27a576[_0x181858(0xae)] = {}, _0x27a576['toast'] = _0x181858(0x2f7) + _0x322cc1[_0x181858(0x102)] + _0x181858(0x661), _0x27a576[_0x181858(0xae)][_0x181858(0x3dd)] = _0x181858(0x16f) + _0x322cc1[_0x181858(0x102)] + '\x20is\x20OUT\x20&\x20ONLINE!', _0x27a576[_0x181858(0xae)][_0x181858(0x198)] = 'Trader\x20is\x20out\x20of\x20hospital\x20and\x20online\x20(' + _0x322cc1[_0x181858(0x874)] + ').\x20Ready\x20for\x20safe-keeping\x20hospitalization\x20services!', _0x4577e7['MUZiT'](_0x460aca, _0x27a576);
                }
            }
        }
        _0x4f991c[_0x24ff1a] = {
            'data': _0x322cc1,
            'lastChecked': Date[_0x181858(0x6d4)]()
        }, _0x5366f2(_0x24ff1a), _0x26e1e9 === _0x181858(0x787) ? _0x4577e7[_0x181858(0x81d)](_0x70efbf, _0x24ff1a) : _0x4577e7['emDXh'](_0x2e01b9, _0x24ff1a), _0x58accf();
    }
    let _0x3e5256 = null;
    function _0x145293(_0x3a51ab = _0x3e5256) {
        const _0x213d71 = _0x1fbd97, _0x33ea55 = {
                'TqKUX': function (_0x322f7b, _0x55a1be) {
                    return _0x322f7b - _0x55a1be;
                },
                'ksKtD': function (_0x1ec369, _0x5924b5) {
                    return _0x1ec369 * _0x5924b5;
                },
                'ryGSX': function (_0x5c595d) {
                    return _0x5c595d();
                }
            };
        try {
            _0x3e5256 = _0x4577e7['dmrjV'](_0x3a51ab, null);
            const _0x3d4775 = document[_0x213d71(0x39d)](_0x213d71(0x619));
            if (_0x3d4775)
                _0x3d4775[_0x213d71(0x172)]();
            const _0x406684 = Math[_0x213d71(0x3ee)](Date[_0x213d71(0x6d4)]() / 0x3e8), _0x132a02 = _0xd0c028(), _0x41300f = _0x4741f3 > Date['now'](), _0x393441 = _0xfadf01(_0x4577e7[_0x213d71(0x4af)], ''), _0xa268d7 = _0x53a18c ? _0x4577e7[_0x213d71(0x584)](_0xf4127b, _0x53a18c[_0x213d71(0x102)] || _0x213d71(0x6e8)) + '\x20[' + _0x53a18c['pid'] + ']' : null, _0x47c42a = _0x48ef7f(), _0x1dae52 = _0x47c42a ? _0x4577e7['QkMxy'](_0x5f06fd) : null, _0x666f31 = _0x47c42a ? _0x4577e7[_0x213d71(0x2b4)](_0xf4127b, _0x1dae52 || _0x4577e7[_0x213d71(0x7fa)]) + '\x20[' + _0x47c42a + ']' : null, _0x1cd606 = _0x4577e7[_0x213d71(0x69d)](Boolean, _0x4577e7[_0x213d71(0xa4)](_0x169f99)), _0x23e858 = _0x393441 ? _0x213d71(0x433) + _0xf4127b(_0x393441) : _0x1cd606 ? _0x213d71(0x752) : _0x4577e7[_0x213d71(0x5b2)], _0x4cf8d5 = _0x4efbe3[_0x213d71(0x33c)](_0x2c84d6 => {
                    const _0x30ba2a = _0x213d71, _0x3a18ee = _0x568e86(_0x2c84d6['feature']), _0xf1555e = _0x3a18ee ? Math[_0x30ba2a(0x81c)](_0x33ea55[_0x30ba2a(0x2b5)](_0x3a18ee, _0x406684) / 0x15180) : 0x0;
                    return _0x30ba2a(0x3b2) + (_0x3a18ee ? _0x30ba2a(0x5b0) : '') + '\x20' + (_0x3e5256 === _0x2c84d6[_0x30ba2a(0x5d3)] ? _0x30ba2a(0x4be) : '') + _0x30ba2a(0x5e2) + _0x2c84d6[_0x30ba2a(0x284)] + '\x20' + _0x2c84d6[_0x30ba2a(0x102)] + _0x30ba2a(0x4eb) + (_0x3a18ee ? '<span\x20class=\x22stakeout-store-pill\x20owned\x22\x20title=\x22Expires\x20' + new Date(_0x33ea55[_0x30ba2a(0x44e)](_0x3a18ee, 0x3e8))[_0x30ba2a(0x79)]() + _0x30ba2a(0x308) + _0xf1555e + _0x30ba2a(0x713) : '<span\x20class=\x22stakeout-store-pill\x22>🔒\x20Not\x20owned</span>') + _0x30ba2a(0x357) + _0x2c84d6[_0x30ba2a(0x30d)] + _0x30ba2a(0xce) + _0x3bd8a7 + _0x30ba2a(0x112) + _0x22a7f5['name'] + '\x20[' + _0x22a7f5[_0x30ba2a(0x876)] + _0x30ba2a(0x4fa) + _0x2c84d6[_0x30ba2a(0x6f8)] + _0x30ba2a(0x5ac) + _0x2c84d6[_0x30ba2a(0x6f8)] + _0x30ba2a(0x7e0);
                })[_0x213d71(0x663)](''), _0x486d3b = document['createElement'](_0x4577e7[_0x213d71(0x698)]);
            _0x486d3b['id'] = _0x213d71(0x619), _0x486d3b[_0x213d71(0x1be)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-store-box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-store-title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🛒\x20Stakeout\x20Radar\x20Store</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22stakeout-btn-icon\x22\x20id=\x22stakeout-store-close\x22\x20title=\x22Close\x22>✕</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (!_0x132a02 ? _0x213d71(0x84d) : _0xa268d7 ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-store-note\x22>Licenses\x20are\x20tied\x20to\x20your\x20player\x20ID:\x20<b>' + _0xa268d7 + _0x213d71(0x35e) + (_0x393441 ? _0x213d71(0x6e9) + _0xf4127b(_0x393441) + _0x213d71(0x48d) : '') + _0x213d71(0x7c9) : '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x666f31 ? '<div\x20class=\x22stakeout-store-note\x22>Logged\x20in\x20as\x20<b>' + _0x666f31 + _0x213d71(0x14f) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-store-note\x20warn\x22>' + _0x23e858 + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (!_0x1cd606 || _0x393441 ? '<button\x20type=\x22button\x22\x20class=\x22stakeout-store-code\x22\x20id=\x22stakeout-store-setkey\x22\x20style=\x22margin-left:\x204px;\x22>🔑\x20Set\x20API\x20key</button>' : '') + _0x213d71(0x6d9)) + _0x213d71(0x17c) + _0x4cf8d5 + _0x213d71(0x2fb) + _0x22a7f5[_0x213d71(0x102)] + _0x213d71(0x3ad) + _0x22a7f5[_0x213d71(0x876)] + _0x213d71(0x6ed) + _0x22a7f5['name'] + _0x213d71(0x5bd) + (_0x132a02 && _0xa268d7 ? '' : _0x213d71(0x242)) + _0x213d71(0x49a) + (_0x41300f ? _0x213d71(0x40c) : _0x4577e7[_0x213d71(0x269)]) + _0x213d71(0x211) + (_0x41300f ? _0x213d71(0x27e) : '') + _0x213d71(0x25c), _0x486d3b['onclick'] = _0x9e7f38 => {
                const _0x3f36b9 = _0x213d71;
                if (_0x9e7f38[_0x3f36b9(0x1b6)] === _0x486d3b)
                    _0x486d3b[_0x3f36b9(0x172)]();
                const _0x4ad863 = _0x9e7f38[_0x3f36b9(0x1b6)]['closest'](_0x3f36b9(0x1fa));
                if (_0x4ad863) {
                    const _0x46ba03 = _0x4ad863[_0x3f36b9(0x658)]['copyCode'], _0x31a168 = () => _0x93d2c1('📋\x20Copied\x20\x22' + _0x46ba03 + _0x3f36b9(0x66d) + _0x22a7f5[_0x3f36b9(0x102)] + '.');
                    try {
                        navigator[_0x3f36b9(0x4a0)][_0x3f36b9(0x254)](_0x46ba03)[_0x3f36b9(0x326)](_0x31a168, _0x31a168);
                    } catch (_0x228475) {
                        _0x31a168();
                    }
                }
            }, document['body']['appendChild'](_0x486d3b), _0x486d3b[_0x213d71(0x25f)](_0x213d71(0x2ba))[_0x213d71(0x1f7)] = () => _0x486d3b[_0x213d71(0x172)]();
            const _0x255d0f = _0x486d3b['querySelector'](_0x4577e7['AHyRi']);
            if (_0x255d0f)
                _0x255d0f[_0x213d71(0x1f7)] = () => {
                    const _0xa79c5d = _0x213d71;
                    _0x486d3b[_0xa79c5d(0x172)](), _0x44e0a8();
                };
            const _0x58ff6 = _0x486d3b[_0x213d71(0x25f)](_0x213d71(0x3de));
            _0x58ff6 && (_0x58ff6['onclick'] = () => {
                const _0x36749e = _0x213d71;
                _0x51be1d(), _0x33ea55[_0x36749e(0x772)](_0x145293);
            });
        } catch (_0x74fbd) {
            console[_0x213d71(0x313)](_0x4577e7[_0x213d71(0x27b)], _0x74fbd);
        }
    }
    _0x4577e7[_0x1fbd97(0x852)](_0x33751e, _0x1fbd97(0x3b0) + 'lid\x20#22c55e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#86efac;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x206px\x20rgba(34,\x20197,\x2094,\x200.35);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-license-badge.free\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(245,\x20158,\x2011,\x200.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f59e0b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fef08a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20stakeoutPillPulse\x201.8s\x20infinite\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-license-badge:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.05);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20filter:\x20brightness(1.2);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-pro-lock-banner\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(15,\x2023,\x2042,\x200.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20dashed\x20rgba(245,\x20158,\x2011,\x200.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x208px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20#torn-mercenary-dock,\x0a\x20\x20\x20\x20\x20\x20\x20\x20#torn-stakeout-dock\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2020px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999999\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fo' + _0x1fbd97(0x506) + _0x1fbd97(0x777) + _0x1fbd97(0x86e) + _0x1fbd97(0x7ad) + _0x1fbd97(0x639) + '\x20padding:\x2024px\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-card\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#1e293b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x207px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x204px\x20-1px\x20rgba(0,\x200,\x200,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-card.trader-ready\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#f59e0b\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20rgba(245,\x20158,\x2011,\x200.12)\x200%,\x20#1e293b\x20100%)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x2010px\x20rgba(245,\x20158,\x2011,\x200.35)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-card-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-card-title-wrap\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-item' + _0x1fbd97(0x839) + 'border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20outline:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-compact-limit-select:focus\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#38bdf8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-btn-icon.compact-del\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-btn-icon.compact-sound\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#475569;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-btn-icon.compact-sound:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#f59e0b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(245,\x20158,\x2011,\x200.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-btn-icon.compact-sound.muted\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20#ef4444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(239,\x2068,\x2068,\x200.15);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-' + _0x1fbd97(0x1c7) + _0x1fbd97(0x455) + _0x1fbd97(0xa1) + _0x1fbd97(0x2bb) + _0x1fbd97(0x4e2) + '\x20background:\x20#1e293b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#38bdf8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#7dd3fc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-store-steps\x20{\x20font-size:\x2010.5px;\x20color:\x20#94a3b8;\x20line-height:\x201.5;\x20border-top:\x201px\x20solid\x20#334155;\x20padding-top:\x208px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-store-actions\x20{\x20display:\x20flex;\x20flex-wrap:\x20wrap;\x20gap:\x206px;\x20margin-top:\x2010px;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-store-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-width:\x20120px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20800;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#475569;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#1e293b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#e2e8f0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-store-btn.primary\x20{\x20background:\x20linear-gradient(135deg,\x20#16a34a,\x20#15803d);\x20border-color:\x20#22c55e;\x20color:\x20#fff;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-store-btn:disabled\x20{\x20' + _0x1fbd97(0x20a) + _0x1fbd97(0x409) + _0x1fbd97(0x207) + _0x1fbd97(0x267) + _0x1fbd97(0x673) + _0x1fbd97(0x61f) + _0x1fbd97(0x23d) + _0x1fbd97(0x468) + _0x1fbd97(0x547) + _0x1fbd97(0x1e3) + _0x1fbd97(0x741) + _0x1fbd97(0x3e9) + _0x1fbd97(0x447) + 'ap:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x201px\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20monospace,\x20monospace;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.25;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.okay\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(34,\x20197,\x2094,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#22c55e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#86efac;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20stakeoutPillPulse\x201.2s\x20infinite\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.okay-offline\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(100,\x20116,\x20139,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#64748b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#cbd5e1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.hospital\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(239,\x2068,\x2068,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ef4444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fca5a5;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.hospital.near-ready\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(245,\x20158,\x2011,\x200.3)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f59e0b\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fef08a\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20animation:\x20stakeoutPillPulse\x201.2s\x20infinite\x20ease-in-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.traveling\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(245,\x20158,\x2011,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f59e0b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fde047;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-status-pill.abroad\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(59,\x20130,\x20246,\x200.25);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#3b82f6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#93c5fd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-hp-bar-wrap\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#0f172a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-hp-bar-fill\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20#15803d\x200%,\x20#22c55e\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20width\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-hp-bar-fill.warning\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(90deg,\x20#b45309\x200%,\x20#eab308\x20100%);\x0a\x20\x20\x20\x20\x20' + _0x1fbd97(0xb9) + _0x1fbd97(0x131) + _0x1fbd97(0x3a9) + _0x1fbd97(0x5f4) + 'settings\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#0f172a;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x201px\x20solid\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x208px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#cbd5e1;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x2052vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow-y:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-settings::-webkit-scrollbar,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-list::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-settings::-webkit-scrollbar-track,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-list::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(15,\x2023,\x2042,\x200.6);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-settings::-webkit-scrollbar-thumb,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-list::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#334155;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x203px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-settings::-webkit-scrollbar-thumb:hover,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-list::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#38bdf8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-toggle-row\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20displa' + 'y:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-toggle-row\x20input\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-profile-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-flex\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x204px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(30,\x2041,\x2059,\x200.85)\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#3b82f6\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#93c5fd\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x202px\x208px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-transform:\x20none\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20letter-spacing:\x20normal\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow' + _0x1fbd97(0x50e) + _0x1fbd97(0x559) + 'keout-fight-energy[data-level=\x22empty\x22]\x20{\x20border-color:\x20#ef4444;\x20background:\x20rgba(239,\x2068,\x2068,\x200.2);\x20color:\x20#f87171;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-fight-energy[data-level=\x22unknown\x22]\x20{\x20border-color:\x20#475569;\x20background:\x20rgba(71,\x2085,\x20105,\x200.2);\x20color:\x20#94a3b8;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-fight-energy.standalone\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2018px\x20rgba(0,\x200,\x200,\x200.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(15,\x2023,\x2042,\x200.95);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20#stakeout-fight-quickbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(15,\x2023,\x2042,\x200.95);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20backdrop-filter:\x20blur(8px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#38bdf8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x204px\x2014px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x2018px\x20rgba(0,\x200,\x200,\x200.7);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20-apple-system,\x20BlinkMacSystemFont,\x20\x22Segoe\x20UI\x22,\x20Roboto,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011.5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#f8fafc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-fight-quickbar-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#ef4444\x200%,\x20#dc2626\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#f87171;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20800;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x202px\x208px\x20rgba(220,\x2038,\x2038,\x200.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.15s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-fight-quickbar-btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(135deg,\x20#f87171\x200%,\x20#ef4444\x20100%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.05);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.stakeout-fight-modal-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20wi' + _0x1fbd97(0x1a8) + _0x1fbd97(0x1f3) + _0x1fbd97(0x111) + _0x1fbd97(0xbd) + _0x1fbd97(0x878) + _0x1fbd97(0x6b8) + _0x1fbd97(0x653));
    let _0x2aed44 = null;
    function _0x4d543f() {
        const _0xf7768c = _0x1fbd97;
        if (!_0x2aed44)
            return;
        const _0x11b90c = (_0xb2691a['dockPosition'] || 'left') === _0x4577e7[_0xf7768c(0x199)];
        _0x2aed44[_0xf7768c(0x5a7)][_0xf7768c(0x172)](_0xf7768c(0x865), _0x4577e7['Snmhj']), _0x2aed44['classList'][_0xf7768c(0x4b8)](_0x11b90c ? _0xf7768c(0x865) : _0xf7768c(0x110));
    }
    function _0x3b6d79() {
        const _0xdd8877 = _0x1fbd97, _0x35579c = {
                'pFYQP': _0xdd8877(0x21f),
                'bSugZ': function (_0x57ed6f, _0x9ba2f9) {
                    return _0x57ed6f(_0x9ba2f9);
                },
                'vxNHv': function (_0x68bda5, _0x3055f, _0x48f2ce) {
                    return _0x4577e7['LXolc'](_0x68bda5, _0x3055f, _0x48f2ce);
                },
                'uhzyn': function (_0x410e7c, _0x2264ff) {
                    return _0x4577e7['pwmPc'](_0x410e7c, _0x2264ff);
                },
                'NskdG': _0xdd8877(0x56d),
                'qJoFN': _0xdd8877(0x276),
                'wxtaJ': _0x4577e7[_0xdd8877(0x6ea)],
                'iiLpA': function (_0x31d50e, _0x4b55d3) {
                    return _0x31d50e(_0x4b55d3);
                },
                'marKI': function (_0x2a6b95, _0x1db8c7, _0x9f6348, _0x5a1f6e) {
                    return _0x2a6b95(_0x1db8c7, _0x9f6348, _0x5a1f6e);
                },
                'MhiSH': function (_0x73da7a, _0x3b6939) {
                    const _0x48cbad = _0xdd8877;
                    return _0x4577e7[_0x48cbad(0x6a2)](_0x73da7a, _0x3b6939);
                },
                'HJbCl': function (_0x3bd595, _0x3d4d07) {
                    return _0x3bd595 - _0x3d4d07;
                },
                'LwtKK': function (_0x285b2a, _0x1ab9d6) {
                    return _0x285b2a(_0x1ab9d6);
                },
                'xsSrC': _0x4577e7[_0xdd8877(0x1b5)],
                'rvLJv': _0xdd8877(0x6af),
                'yHZwT': _0xdd8877(0x2df),
                'ylXhi': function (_0x4faecc, _0x2b6436) {
                    return _0x4faecc(_0x2b6436);
                },
                'nbEkW': _0x4577e7[_0xdd8877(0x698)],
                'MzJEO': 'textarea',
                'oVULW': function (_0x141dc6, _0x52c0e5) {
                    return _0x141dc6 === _0x52c0e5;
                },
                'BWAKW': function (_0x5893f8, _0x3bdaf6) {
                    return _0x5893f8 === _0x3bdaf6;
                },
                'SbDqI': _0x4577e7['iRGmA']
            };
        if (!window[_0xdd8877(0x289)]['href']['includes'](_0x4577e7['wcobu']))
            return;
        const _0x5f0a77 = window[_0xdd8877(0x289)][_0xdd8877(0x83c)]['match'](/user2ID=(\d+)/i), _0x21ae72 = _0x5f0a77 ? _0x4577e7[_0xdd8877(0x14e)](parseInt, _0x5f0a77[0x1], 0xa) : null;
        function _0x5e2c2a() {
            const _0x3e737e = _0xdd8877;
            if (_0x15d2be()) {
                if (_0x2fa5f3['id'] && _0x4577e7[_0x3e737e(0x64c)](String, _0x2fa5f3['id']) !== _0x4577e7['BcuCZ'](String, _0x21ae72))
                    return _0x2fa5f3['id'];
                return null;
            }
            if (_0x5e2187())
                return _0x167455(_0x21ae72);
            if (_0x21ae72 && _0x21ae72 >= 0x3e8)
                return _0x4577e7[_0x3e737e(0x20e)](_0x21ae72, 0x1);
            return _0x4577e7[_0x3e737e(0x16b)](parseInt(_0xb2691a[_0x3e737e(0xe8)], 0xa) || _0x5c9f1e()[0x0], 0x1);
        }
        function _0x25b617(_0x8d21db) {
            const _0xfe113f = _0xdd8877;
            if (!_0x8d21db) {
                if (_0x4577e7[_0xfe113f(0x347)](_0x15d2be)) {
                    window[_0xfe113f(0x289)][_0xfe113f(0x83c)] = _0xfe113f(0x4b3);
                    return;
                }
                _0x8d21db = _0x167455(_0x21ae72);
            }
            !_0x4577e7[_0xfe113f(0x21d)](_0x15d2be) && (_0x8d21db = _0xcc1fe2(_0x8d21db), _0x4577e7[_0xfe113f(0x6a4)](_0x5c9c29, _0x8d21db)), _0x4577e7[_0xfe113f(0x7b5)](_0x93d2c1, _0xfe113f(0x6d) + _0x8d21db + _0xfe113f(0x16a)), window['location'][_0xfe113f(0x83c)] = _0xfe113f(0x5fa) + _0x8d21db;
        }
        function _0x40cb9b() {
            const _0x49d62f = _0xdd8877;
            if (!_0x4c3563('ck') || document[_0x49d62f(0x39d)](_0x35579c[_0x49d62f(0x533)]))
                return;
            const _0x322051 = _0x5e2c2a();
            if (!_0x322051)
                return;
            const _0x5e10d0 = document['createElement'](_0x49d62f(0x1b9));
            _0x5e10d0['id'] = _0x35579c[_0x49d62f(0x533)], _0x5e10d0[_0x49d62f(0x1be)] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🔗\x20Current:\x20<strong>#' + (_0x21ae72 || 'Unknown') + _0x49d62f(0x579) + _0x322051 + _0x49d62f(0x24c), document[_0x49d62f(0x198)][_0x49d62f(0x159)](_0x5e10d0);
            const _0x1816b4 = _0x5e10d0['querySelector'](_0x49d62f(0x693));
            _0x1816b4 && (_0x1816b4[_0x49d62f(0x1f7)] = () => _0x25b617(_0x322051));
        }
        _0x40cb9b(), _0x4577e7[_0xdd8877(0x362)](setInterval, _0x40cb9b, 0x3e8);
        let _0xcbeeb3 = 0x0;
        function _0x546417() {
            const _0x1f82f0 = _0xdd8877;
            !_0x4527b5(![]) && _0x4577e7['aJbqz'](_0x169f99) && _0x4577e7[_0x1f82f0(0x622)](Date[_0x1f82f0(0x6d4)]() - _0xcbeeb3, 0x7530) && (_0xcbeeb3 = Date['now'](), _0x24a139(_0x1f82f0(0x789), _0x1f82f0(0x163))[_0x1f82f0(0x326)](_0x4a8826 => {
                const _0x44bf25 = _0x1f82f0;
                if (_0x4a8826 && _0x4a8826[_0x44bf25(0xfa)]) {
                    const _0x2ca7c0 = {};
                    _0x2ca7c0[_0x44bf25(0x1ac)] = _0x4a8826['energy'][_0x44bf25(0x1ac)], _0x2ca7c0[_0x44bf25(0x58c)] = _0x4a8826[_0x44bf25(0xfa)][_0x44bf25(0x58c)], _0x148f88 = _0x2ca7c0, _0x546417();
                }
            }));
            const _0x12ba50 = _0x4527b5(), _0x4aaba6 = document[_0x1f82f0(0x39d)](_0x4577e7[_0x1f82f0(0x49b)]);
            let _0x3d72fe = document[_0x1f82f0(0x39d)](_0x4577e7['mfiLY']);
            !_0x3d72fe && (_0x3d72fe = document[_0x1f82f0(0x35d)]('span'), _0x3d72fe['id'] = _0x4577e7[_0x1f82f0(0xb8)]);
            if (_0x4aaba6 && _0x3d72fe[_0x1f82f0(0x881)] !== _0x4aaba6)
                _0x3d72fe['className'] = '', _0x4aaba6['insertBefore'](_0x3d72fe, _0x4aaba6[_0x1f82f0(0x74e)]);
            else
                !_0x4aaba6 && !_0x3d72fe[_0x1f82f0(0x881)] && (_0x3d72fe[_0x1f82f0(0x1aa)] = 'standalone', document[_0x1f82f0(0x198)][_0x1f82f0(0x159)](_0x3d72fe));
            const _0x570b46 = _0x12ba50 ? Math['floor'](_0x4577e7['NqyyT'](_0x12ba50['current'], 0x19)) : 0x0;
            _0x3d72fe[_0x1f82f0(0x658)]['level'] = !_0x12ba50 ? _0x4577e7[_0x1f82f0(0x494)] : _0x570b46 === 0x0 ? _0x1f82f0(0x466) : _0x570b46 < 0x2 ? _0x4577e7[_0x1f82f0(0x521)] : 'ok', _0x3d72fe[_0x1f82f0(0x235)] = _0x12ba50 ? '⚡\x20' + _0x12ba50[_0x1f82f0(0x1ac)] + '/' + _0x12ba50[_0x1f82f0(0x58c)] + _0x1f82f0(0x3f3) + _0x570b46 + _0x1f82f0(0x2e3) + (_0x4577e7[_0x1f82f0(0x1ab)](_0x570b46, 0x1) ? '' : 's') : _0x1f82f0(0x5db), _0x3d72fe[_0x1f82f0(0x3dd)] = _0x4577e7[_0x1f82f0(0x717)];
        }
        _0x546417(), setInterval(_0x546417, 0x3e8);
        let _0x5217f6 = ![];
        function _0x530806() {
            const _0x48b6bb = _0xdd8877;
            if (_0x5217f6)
                return;
            const _0x42c8d7 = document[_0x48b6bb(0x65d)](_0x48b6bb(0x7ed));
            for (const _0x1e14a7 of _0x42c8d7) {
                if ((_0x1e14a7[_0x48b6bb(0x235)] || '')[_0x48b6bb(0x72)]()['toUpperCase']() === _0x48b6bb(0x65c) && _0x1e14a7[_0x48b6bb(0x94)] !== null) {
                    _0x5217f6 = !![];
                    const _0x3e3cea = document[_0x48b6bb(0x39d)](_0x48b6bb(0x34f));
                    if (_0x3e3cea)
                        _0x3e3cea['style'][_0x48b6bb(0x227)] = _0x48b6bb(0x608);
                    clearInterval(_0x134975);
                    return;
                }
            }
        }
        const _0x134975 = setInterval(_0x530806, 0x12c);
        function _0x498f2d() {
            const _0x5174e5 = _0xdd8877, _0x1e9870 = document['getElementById'](_0x5174e5(0x5f5));
            if (!_0x1e9870 || !_0x21ae72 || !_0x35579c[_0x5174e5(0x7c5)](_0x4c3563, 'sp'))
                return;
            let _0x564e14 = _0x1e9870[_0x5174e5(0x25f)](_0x5174e5(0x549)), _0x2c5772 = ![];
            try {
                const _0x6c5860 = _0x4f991c[String(_0x21ae72)]?.[_0x5174e5(0x3c1)];
                if (_0x6c5860)
                    _0x2c5772 = _0x35579c[_0x5174e5(0x6f0)](_0x49f457, _0x6c5860, _0x35579c['uhzyn'](String, _0x21ae72));
                else {
                    const _0x5c402b = JSON['parse'](localStorage[_0x5174e5(0xc5)](_0x5174e5(0x1a3)) || '[]'), _0x34f056 = _0x6c5860?.[_0x5174e5(0x385)] || null;
                    _0x2c5772 = _0x34f056 ? _0x5c402b[_0x5174e5(0x1b1)](_0x35579c[_0x5174e5(0x7c5)](String, _0x34f056)) : ![];
                }
            } catch (_0x3a4295) {
            }
            if (!_0x2c5772) {
                if (_0x564e14)
                    _0x564e14['remove']();
                return;
            }
            if (!_0x564e14) {
                _0x564e14 = document['createElement'](_0x5174e5(0x459)), _0x564e14['className'] = _0x5174e5(0x63f), _0x564e14[_0x5174e5(0x2c5)][_0x5174e5(0x5d6)] = _0x35579c[_0x5174e5(0x41e)];
                const _0x2ca5db = _0x1e9870[_0x5174e5(0x25f)](_0x35579c[_0x5174e5(0x15c)]) || _0x1e9870[_0x5174e5(0x25f)]('.ff-hosp-title');
                _0x2ca5db && _0x2ca5db[_0x5174e5(0x4da)] ? _0x1e9870[_0x5174e5(0x15f)](_0x564e14, _0x2ca5db[_0x5174e5(0x4da)]) : _0x1e9870['appendChild'](_0x564e14);
            }
            _0x564e14[_0x5174e5(0x235)] = _0x35579c[_0x5174e5(0x33f)], _0x564e14[_0x5174e5(0x3dd)] = _0x5174e5(0xb5);
        }
        setInterval(_0x498f2d, 0x1f4);
        function _0x238d67() {
            const _0x33bc8b = _0xdd8877;
            let _0x800d89 = document[_0x33bc8b(0x39d)](_0x33bc8b(0x3b3));
            const _0x2097dc = _0x21ae72 && _0x35579c[_0x33bc8b(0x6aa)](_0x4c3563, 'fw') ? _0x595dab(_0x21ae72) : null;
            if (!_0x2097dc) {
                if (_0x800d89)
                    _0x800d89[_0x33bc8b(0x172)]();
                return;
            }
            const {
                    contract: _0x1490b4,
                    faction: _0x5d872b,
                    member: _0xe68684
                } = _0x2097dc, _0x18b5aa = _0x51a2c6[_0x1490b4['hitType']] ? _0x1490b4[_0x33bc8b(0x7c)] : 'standard', _0x35f4aa = _0x51a2c6[_0x18b5aa], _0x2fc5b2 = Math[_0x33bc8b(0x3ee)](Date[_0x33bc8b(0x6d4)]() / 0x3e8), _0x5652df = _0x35579c[_0x33bc8b(0x84f)](_0x106e8e, _0x1490b4, _0xe68684, _0x2fc5b2), _0x662b56 = _0x5652df[_0x33bc8b(0x730)] === _0x33bc8b(0xe6), _0x3fcd3f = {
                    'active': _0xe68684[_0x33bc8b(0x874)] + _0x33bc8b(0x180) + _0x35579c[_0x33bc8b(0x81f)](_0x2639a9, _0x2fc5b2 - (_0xe68684[_0x33bc8b(0x58a)] || 0x0)) + _0x33bc8b(0x7e6) + _0x35579c['MhiSH'](_0x2639a9, (_0x1490b4[_0x33bc8b(0x842)] || 0x0) * 0x3c) + ')',
                    'soon': _0x33bc8b(0x8b) + _0x2639a9(_0x35579c[_0x33bc8b(0x75a)](_0x2fc5b2, _0xe68684[_0x33bc8b(0x58a)] || 0x0)) + _0x33bc8b(0x52c) + _0x35579c['LwtKK'](_0x8d48d4, Math[_0x33bc8b(0x3ab)](0x0, _0x35579c['HJbCl'](_0x5652df[_0x33bc8b(0x5ed)], _0x2fc5b2))),
                    'hosp': _0x33bc8b(0x790),
                    'away': _0x35579c[_0x33bc8b(0x425)],
                    'excluded': 'not\x20hittable\x20under\x20this\x20contract'
                }[_0x5652df[_0x33bc8b(0x730)]] || '', _0x4c6714 = _0x33bc8b(0x5b6) + _0xf4127b(_0x5d872b[_0x33bc8b(0x102)] || _0x1490b4[_0x33bc8b(0x102)]) + _0x33bc8b(0x196) + _0x18b5aa + '\x22>' + _0x35f4aa[_0x33bc8b(0x284)] + '\x20' + _0x35f4aa[_0x33bc8b(0x716)] + _0x33bc8b(0x316) + _0x35f4aa[_0x33bc8b(0x11f)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-weight:\x20800;\x20color:\x20' + (_0x662b56 ? _0x35579c[_0x33bc8b(0x75e)] : _0x35579c[_0x33bc8b(0x379)]) + _0x33bc8b(0x82) + (_0x662b56 ? _0x33bc8b(0x7db) + _0xe68684['online'] + '\x20' + _0x35579c[_0x33bc8b(0x2e7)](_0x2639a9, _0x5652df[_0x33bc8b(0x5df)]) + ')' : _0x33bc8b(0x81e) + _0x3fcd3f) + _0x33bc8b(0x685);
            !_0x800d89 && (_0x800d89 = document[_0x33bc8b(0x35d)](_0x35579c['nbEkW']), _0x800d89['id'] = _0x33bc8b(0x3b3), document[_0x33bc8b(0x198)]['appendChild'](_0x800d89)), _0x800d89['className'] = _0x662b56 ? 'ok' : _0x33bc8b(0x750), _0x800d89[_0x33bc8b(0x372)] !== _0x4c6714 && (_0x800d89['__lastHtml'] = _0x4c6714, _0x800d89[_0x33bc8b(0x1be)] = _0x4c6714);
        }
        setInterval(_0x238d67, 0x3e8), window['addEventListener'](_0xdd8877(0x562), _0x3db6ae => {
            const _0x598098 = _0xdd8877;
            if (!_0x5217f6)
                return;
            const _0x4f9200 = document[_0x598098(0x39d)](_0x598098(0x34f));
            if (!_0x4f9200)
                return;
            const _0x379de9 = (document[_0x598098(0x866)]?.['tagName'] || '')[_0x598098(0x86f)]();
            if (_0x379de9 === 'input' || _0x379de9 === _0x35579c[_0x598098(0x572)])
                return;
            (_0x35579c['oVULW'](_0x3db6ae[_0x598098(0x20c)], 'n') || _0x35579c[_0x598098(0xcb)](_0x3db6ae[_0x598098(0x20c)], 'N') || _0x3db6ae[_0x598098(0x20c)] === '\x20' || _0x35579c[_0x598098(0xcb)](_0x3db6ae[_0x598098(0x20c)], _0x35579c[_0x598098(0x73b)])) && (_0x3db6ae[_0x598098(0x236)](), _0x4f9200[_0x598098(0x3ed)]());
        });
    }
    function _0x449e49() {
        const _0x14089b = _0x1fbd97, _0x4ac8ea = parseInt(_0xb2691a[_0x14089b(0x7b0)], 0xa) || 0x4b;
        return Math[_0x14089b(0x3ab)](0x14, Math[_0x14089b(0x724)](0x5f, _0x4ac8ea));
    }
    async function _0x24a139(_0x16eeb6, _0x261043, _0x369444 = _0x449e49()) {
        const _0x558df3 = _0x1fbd97, _0x1b57d2 = _0x4577e7[_0x558df3(0x34d)](_0x169f99);
        if (!_0x1b57d2)
            return null;
        if (_0x4577e7['TJkrk'](_0x4577e7[_0x558df3(0x34d)](_0x112493), _0x369444))
            return null;
        _0x4577e7[_0x558df3(0x193)](_0x419331);
        try {
            const _0x1b078e = _0x16eeb6[_0x558df3(0x1b1)]('?') ? '&' : '?', _0xe07a36 = await fetch(_0x558df3(0x1eb) + _0x16eeb6 + _0x1b078e + _0x558df3(0x763) + _0x1b57d2 + '&comment=' + _0x261043 + _0x558df3(0x80d) + Date[_0x558df3(0x6d4)]());
            if (!_0xe07a36['ok'])
                return null;
            return await _0xe07a36['json']();
        } catch (_0xcb7ee1) {
            return console[_0x558df3(0x257)](_0x558df3(0x2f9), _0x16eeb6['split']('?')[0x0], _0xcb7ee1), null;
        }
    }
    function _0xf4127b(_0x106aa0) {
        const _0x532de6 = _0x1fbd97;
        return _0x4577e7[_0x532de6(0x786)](String, _0x106aa0 ?? '')[_0x532de6(0x78f)](/[&<>"']/g, _0x1846b5 => ({
            '&': '&amp;',
            '<': _0x532de6(0x62c),
            '>': _0x532de6(0x3e0),
            '\x22': _0x532de6(0x21c),
            '\x27': '&#39;'
        }[_0x1846b5]));
    }
    function _0x2639a9(_0x16b0ef) {
        const _0x1cd792 = _0x1fbd97;
        if (_0x16b0ef < 0x3c)
            return Math[_0x1cd792(0x3ab)](0x0, _0x16b0ef) + 's';
        const _0x58cc35 = Math['floor'](_0x16b0ef / 0x3c);
        if (_0x58cc35 < 0x3c)
            return _0x58cc35 + 'm';
        const _0x2a5ae5 = Math['floor'](_0x58cc35 / 0x3c);
        return _0x4577e7[_0x1cd792(0x5ef)](_0x58cc35, 0x3c) ? _0x2a5ae5 + 'h' + _0x4577e7[_0x1cd792(0x105)](_0x58cc35, 0x3c) + 'm' : _0x2a5ae5 + 'h';
    }
    const _0x535fa8 = 0x12c, _0x357d9f = _0x4577e7[_0x1fbd97(0x469)](_0x4577e7[_0x1fbd97(0x648)](0x2, 0x3c), 0x3e8), _0x2513ab = 0x3;
    let _0x3612c1 = _0x4577e7['fYqjS'](_0xfadf01, _0x4577e7[_0x1fbd97(0x797)], []);
    if (!Array[_0x1fbd97(0x26b)](_0x3612c1))
        _0x3612c1 = [];
    _0x3612c1 = _0x3612c1[_0x1fbd97(0x71f)](_0x308b5c => typeof _0x308b5c[_0x1fbd97(0x64e)] === 'number');
    const _0xa9649 = new Set();
    let _0x5a97ff = null, _0x20f777 = ![], _0x227207 = 0x0, _0x30b324 = 0x0;
    function _0x1e6d3b(_0x2590ab = ![]) {
        const _0x386736 = _0x1fbd97, _0x28135c = {
                'WrUnN': function (_0x26882a, _0x54295e, _0x598f15) {
                    return _0x26882a(_0x54295e, _0x598f15);
                }
            };
        if (_0x3612c1[_0x386736(0x5a5)] > _0x535fa8)
            _0x3612c1[_0x386736(0x5da)](0x0, _0x3612c1['length'] - _0x535fa8);
        const _0x4f1acb = () => {
            const _0x2a17b1 = _0x386736;
            _0x5a97ff = null, _0x48509d(_0x2a17b1(0x7f2), _0x3612c1);
            const _0x206b95 = {};
            _0x206b95['key'] = 'chain_pool', _0x206b95['value'] = _0x3612c1, _0x28135c[_0x2a17b1(0x1b2)](_0x5efbb7, _0x2a17b1(0x4b6), _0x206b95);
        };
        if (_0x2590ab) {
            if (_0x5a97ff)
                _0x4577e7['vHQZm'](clearTimeout, _0x5a97ff);
            _0x4577e7[_0x386736(0x862)](_0x4f1acb);
        } else
            !_0x5a97ff && (_0x5a97ff = _0x4577e7[_0x386736(0x79e)](setTimeout, _0x4f1acb, 0xfa0));
    }
    function _0x5e2187() {
        const _0x1f825d = _0x1fbd97;
        return _0x4577e7[_0x1f825d(0x586)](_0xb2691a[_0x1f825d(0x220)] || _0x4577e7['WRzgK'], _0x4577e7[_0x1f825d(0x739)]);
    }
    function _0xffaf4f() {
        const _0x1f5d10 = _0x1fbd97;
        return Math['max'](0x1, _0x4577e7[_0x1f5d10(0x51e)](parseInt, _0xb2691a[_0x1f5d10(0x24e)], 0xa) || 0x1);
    }
    function _0x3103fb() {
        const _0x425fe9 = _0x1fbd97, _0x23d851 = _0x4577e7[_0x425fe9(0x70b)](parseInt, _0xb2691a[_0x425fe9(0x42f)], 0xa);
        return isNaN(_0x23d851) ? 0xf : Math[_0x425fe9(0x3ab)](0x0, _0x23d851);
    }
    function _0x5c9f1e() {
        const _0x4a131c = _0x1fbd97, _0x4e6f0f = _0x4577e7['amgdp'](parseInt, _0xb2691a[_0x4a131c(0x7da)], 0xa) || 0x44aa20, _0x2b9157 = parseInt(_0xb2691a['chainScanEnd'], 0xa) || 0x4630c0;
        return _0x4577e7[_0x4a131c(0x340)](_0x2b9157, _0x4e6f0f) ? [
            _0x4e6f0f,
            _0x2b9157
        ] : [
            _0x4e6f0f,
            _0x4577e7['FmXby'](_0x4e6f0f, 0x186a0)
        ];
    }
    function _0x4ca45e(_0x27e6c3) {
        const _0x5e5e4f = _0x1fbd97;
        return _0x3612c1[_0x5e5e4f(0x2d6)](_0x20f204 => String(_0x20f204['id']) === String(_0x27e6c3)) || null;
    }
    function _0x232af5(_0x5e2c5b, _0x32bcf0 = Math[_0x1fbd97(0x3ee)](Date[_0x1fbd97(0x6d4)]() / 0x3e8)) {
        const _0x2795c9 = _0x1fbd97;
        return Boolean(_0x5e2c5b) && _0x4577e7[_0x2795c9(0x12f)](_0x5e2c5b[_0x2795c9(0x825)], _0xffaf4f()) && _0x4577e7[_0x2795c9(0x66f)](_0x5e2c5b[_0x2795c9(0x64e)] || 0x0, _0x3103fb()) && (_0x5e2c5b[_0x2795c9(0x206)] || 0x0) <= _0x32bcf0;
    }
    function _0x1719f2(_0x4237c4, _0x27c54a = Date[_0x1fbd97(0x6d4)]()) {
        const _0x60d3c6 = _0x1fbd97;
        return _0x4237c4[_0x60d3c6(0x4b6)] === _0x60d3c6(0x173) && _0x4577e7[_0x60d3c6(0x31b)](_0x27c54a - (_0x4237c4[_0x60d3c6(0x570)] || 0x0), _0x357d9f);
    }
    function _0x27fbed() {
        const _0x1adf37 = _0x1fbd97, _0x28f869 = Date[_0x1adf37(0x6d4)](), _0x5e7631 = Math[_0x1adf37(0x3ee)](_0x4577e7[_0x1adf37(0x61b)](_0x28f869, 0x3e8)), _0x3ebab2 = _0x3612c1['filter'](_0x49b85a => _0x232af5(_0x49b85a, _0x5e7631));
        return {
            'total': _0x3612c1[_0x1adf37(0x71f)](_0x3b3d00 => _0x3b3d00[_0x1adf37(0x825)] <= _0xffaf4f() && (_0x3b3d00['age'] || 0x0) >= _0x3103fb())[_0x1adf37(0x5a5)],
            'usable': _0x3ebab2[_0x1adf37(0x5a5)],
            'ready': _0x3ebab2[_0x1adf37(0x71f)](_0x6e045d => _0x1719f2(_0x6e045d, _0x28f869))[_0x1adf37(0x5a5)]
        };
    }
    function _0x12db6a(_0x15cb61 = null) {
        const _0x568a26 = _0x1fbd97, _0x4e005f = Date[_0x568a26(0x6d4)](), _0x237723 = Math['floor'](_0x4e005f / 0x3e8), _0x38989a = _0x3612c1['filter'](_0x3bd6f0 => String(_0x3bd6f0['id']) !== String(_0x15cb61) && _0x232af5(_0x3bd6f0, _0x237723)), _0x25aa1a = _0x38989a['filter'](_0x3a44c9 => _0x1719f2(_0x3a44c9, _0x4e005f)), _0x27ea93 = _0x25aa1a[_0x568a26(0x5a5)] ? _0x25aa1a : _0x38989a;
        return _0x27ea93['length'] ? _0x27ea93[Math[_0x568a26(0x3ee)](Math['random']() * _0x27ea93[_0x568a26(0x5a5)])] : null;
    }
    function _0x167455(_0x59d39b = null) {
        const _0x56760c = _0x1fbd97, _0x39bbbb = parseInt(_0xb2691a[_0x56760c(0x139)], 0xa);
        if (_0x4577e7[_0x56760c(0x5bb)](_0x39bbbb, 0x0) && String(_0x39bbbb) !== String(_0x59d39b))
            return _0x39bbbb;
        const _0xbe7698 = parseInt(_0xb2691a[_0x56760c(0xe8)], 0xa);
        if (_0x4577e7['pHyXn'](_0x5e2187)) {
            const _0x543dcd = _0xbe7698 ? _0x4ca45e(_0xbe7698) : null;
            if (_0x543dcd && _0x4577e7[_0x56760c(0x286)](String(_0xbe7698), String(_0x59d39b)) && _0x232af5(_0x543dcd))
                return _0xbe7698;
            const _0x426086 = _0x12db6a(_0x59d39b);
            if (_0x426086)
                return _0x426086['id'];
            const [_0x4c2be0, _0x333f1b] = _0x5c9f1e();
            if (!_0xbe7698 || _0xbe7698 < _0x4c2be0 || _0xbe7698 > _0x333f1b || _0x4577e7['ovGfi'](String(_0xbe7698), _0x4577e7[_0x56760c(0x225)](String, _0x59d39b)))
                return _0x3a24bc() || _0x4c2be0;
        }
        if (_0xbe7698 && String(_0xbe7698) !== String(_0x59d39b))
            return _0xbe7698;
        return _0x4577e7[_0x56760c(0x5ec)](_0xbe7698 || _0x4577e7['qAvPP'](_0x5c9f1e)[0x0], 0x1);
    }
    function _0xcc1fe2(_0x47d6a8) {
        const _0x554983 = _0x1fbd97;
        if (!_0x5e2187() || _0x4577e7['gnXNq'](_0x4577e7[_0x554983(0x827)](String, _0x47d6a8), String(_0xb2691a[_0x554983(0x139)])))
            return _0x47d6a8;
        const _0x5b40e4 = _0x4577e7[_0x554983(0x765)](_0x4ca45e, _0x47d6a8);
        if (_0x5b40e4 && !_0x232af5(_0x5b40e4)) {
            const _0x5a3403 = _0x4577e7[_0x554983(0x697)](_0x12db6a, _0x47d6a8);
            if (_0x5a3403)
                return _0x5a3403['id'];
        }
        return _0x47d6a8;
    }
    function _0x5c9c29(_0x1e7900) {
        const _0x523643 = _0x1fbd97;
        _0x30b324 = Date[_0x523643(0x6d4)]();
        const _0x12e98f = parseInt(_0x1e7900, 0xa);
        _0xb2691a[_0x523643(0x139)] = 0x0;
        if (_0x5e2187()) {
            const _0x28a492 = _0x4ca45e(_0x12e98f);
            _0x28a492 && (_0x28a492[_0x523643(0x4b6)] = _0x4577e7[_0x523643(0x28d)], _0x28a492[_0x523643(0x206)] = Math[_0x523643(0x3ee)](_0x4577e7[_0x523643(0x4f1)](Date[_0x523643(0x6d4)](), 0x3e8)) + 0xe10, _0x28a492[_0x523643(0x570)] = Date[_0x523643(0x6d4)](), _0x1e6d3b(!![]));
            const _0xa164ed = _0x12db6a(_0x12e98f);
            _0xb2691a[_0x523643(0xe8)] = _0xa164ed ? _0xa164ed['id'] : _0x4577e7[_0x523643(0x22a)](_0x3a24bc) || _0x12e98f + 0x1;
        } else
            _0xb2691a[_0x523643(0xe8)] = _0x12e98f + 0x1;
        _0x3f8be3();
    }
    function _0x282ac4() {
        const _0x168b24 = _0x1fbd97, _0x4e6be9 = Math[_0x168b24(0x3ab)](_0x30b324, ..._0x3612c1[_0x168b24(0x33c)](_0x561793 => _0x561793[_0x168b24(0x4b6)] === _0x168b24(0x877) ? _0x561793[_0x168b24(0x570)] || 0x0 : 0x0));
        return _0x2927cd[_0x168b24(0x74a)] || Date['now']() - _0x4e6be9 < 0xa * 0x3c * 0x3e8;
    }
    function _0x519c25(_0x10ee3a, _0x57b4e1) {
        const _0x1b156a = _0x1fbd97, _0x1e5103 = Math[_0x1b156a(0x3ee)](Date[_0x1b156a(0x6d4)]() / 0x3e8), _0x34bd05 = parseInt(_0x57b4e1[_0x1b156a(0x825)] || 0x0, 0xa), _0x59e8d1 = parseInt(_0x57b4e1['age'] || 0x0, 0xa), _0x4846f4 = _0x57b4e1['status']?.[_0x1b156a(0x4b6)] || _0x4577e7['xHEmd'], _0x5f1bf9 = _0x4577e7[_0x1b156a(0x346)](parseInt, _0x57b4e1[_0x1b156a(0x730)]?.[_0x1b156a(0x206)] || 0x0, 0xa), _0x1839ec = _0x3612c1['findIndex'](_0x18fa60 => String(_0x18fa60['id']) === String(_0x10ee3a));
        if (_0x4577e7[_0x1b156a(0x622)](_0x34bd05, _0xffaf4f()) || _0x59e8d1 < _0x4577e7[_0x1b156a(0x15e)](_0x3103fb) || _0x4846f4 === 'Federal' || _0x4846f4 === _0x1b156a(0x43a)) {
            if (_0x4577e7[_0x1b156a(0x217)](_0x1839ec, 0x0))
                _0x3612c1['splice'](_0x1839ec, 0x1);
            _0xa9649[_0x1b156a(0x4b8)](String(_0x10ee3a)), _0x4577e7[_0x1b156a(0x78d)](_0x1e6d3b);
            return;
        }
        let _0x4c68a3 = 0x0;
        _0x4846f4 !== _0x4577e7[_0x1b156a(0xdd)] && (_0x4c68a3 = _0x5f1bf9 > _0x1e5103 ? _0x5f1bf9 : _0x1e5103 + 0x384);
        const _0x3b4cca = {
            'id': parseInt(_0x10ee3a, 0xa),
            'name': _0x57b4e1['name'] || '',
            'level': _0x34bd05,
            'age': _0x59e8d1,
            'state': _0x4846f4,
            'until': _0x4c68a3,
            'checked': Date[_0x1b156a(0x6d4)]()
        };
        if (_0x4577e7[_0x1b156a(0x217)](_0x1839ec, 0x0))
            _0x3612c1[_0x1839ec] = _0x3b4cca;
        else
            _0x3612c1['push'](_0x3b4cca);
        _0x1e6d3b();
    }
    function _0x3a24bc() {
        const _0x5efbc8 = _0x1fbd97, [_0x10b4b2, _0x51e489] = _0x5c9f1e();
        for (let _0x32548c = 0x0; _0x32548c < 0x8; _0x32548c++) {
            const _0x10b149 = _0x10b4b2 + Math[_0x5efbc8(0x3ee)](_0x4577e7[_0x5efbc8(0x82b)](Math[_0x5efbc8(0x1fc)](), _0x4577e7[_0x5efbc8(0x205)](_0x51e489, _0x10b4b2) + 0x1));
            if (!_0xa9649[_0x5efbc8(0x543)](String(_0x10b149)) && !_0x4ca45e(_0x10b149))
                return _0x10b149;
        }
        return null;
    }
    async function _0x1cfd82() {
        const _0x4cda70 = _0x1fbd97;
        if (!_0x4b673b || _0x20f777 || !_0x5e2187() || !_0xb2691a['chainWatcherEnabled'])
            return;
        if (!_0x4c3563('ck') || !_0x4577e7[_0x4cda70(0x193)](_0x169f99))
            return;
        const _0x1a8a8f = Math[_0x4cda70(0x3ee)](_0x4577e7['vziNl'](_0x4577e7[_0x4cda70(0x347)](_0x449e49), 0.7));
        if (_0x112493() >= _0x1a8a8f)
            return;
        const _0x57269a = Date[_0x4cda70(0x6d4)](), _0x53a92b = Math[_0x4cda70(0x3ee)](_0x4577e7['NqyyT'](_0x57269a, 0x3e8)), _0x5e299d = _0x282ac4();
        let _0x2556a1 = null, _0x323908 = 0x0;
        if (_0x5e299d) {
            const _0x842043 = _0x3612c1[_0x4cda70(0x71f)](_0x3224fb => _0x232af5(_0x3224fb, _0x53a92b)), _0x12ca98 = _0x842043[_0x4cda70(0x71f)](_0x41bb75 => _0x1719f2(_0x41bb75, _0x57269a))[_0x4cda70(0x5a5)];
            if (_0x12ca98 < _0x2513ab) {
                const _0x4c46e3 = _0x842043[_0x4cda70(0x71f)](_0x34186c => !_0x1719f2(_0x34186c, _0x57269a))[_0x4cda70(0x437)]((_0x47dc48, _0x3cc132) => (_0x47dc48[_0x4cda70(0x570)] || 0x0) - (_0x3cc132[_0x4cda70(0x570)] || 0x0));
                _0x4c46e3[_0x4cda70(0x5a5)] && (_0x2556a1 = _0x4c46e3[0x0]['id'], _0x323908 = 0x7d0);
            }
            !_0x2556a1 && _0x842043['length'] < _0x4577e7[_0x4cda70(0x282)](_0x2513ab, 0x2) && (_0x2556a1 = _0x3a24bc(), _0x323908 = 0x7d0);
        }
        if (!_0x2556a1) {
            const _0x12e076 = _0x4577e7[_0x4cda70(0x3a1)](_0x27fbed)[_0x4cda70(0x4a7)] >= (parseInt(_0xb2691a['chainPoolSize'], 0xa) || 0x96);
            if (_0x12e076 || _0x4577e7['JtiZV'](_0xb2691a['chainAutoScrape'], ![]))
                return;
            _0x2556a1 = _0x4577e7[_0x4cda70(0x34d)](_0x3a24bc), _0x323908 = _0x5e299d ? 0xbb8 : _0x4577e7['iynpB'](_0x27fbed)[_0x4cda70(0x62d)] < 0xa ? 0xfa0 : 0x1f40;
        }
        if (!_0x2556a1 || _0x4577e7[_0x4cda70(0x124)](_0x57269a - _0x227207, _0x323908))
            return;
        _0x227207 = _0x57269a, _0x20f777 = !![];
        try {
            const _0x1e870a = await _0x24a139('user/' + _0x2556a1 + _0x4cda70(0x6ca), _0x4cda70(0x79c), _0x1a8a8f);
            if (!_0x1e870a)
                return;
            if (_0x1e870a[_0x4cda70(0x313)]) {
                if (_0x1e870a['error'][_0x4cda70(0x6f8)] === 0x6) {
                    const _0x464aa9 = _0x3612c1[_0x4cda70(0x83d)](_0x64c3ce => String(_0x64c3ce['id']) === String(_0x2556a1));
                    if (_0x4577e7[_0x4cda70(0x66f)](_0x464aa9, 0x0))
                        _0x3612c1[_0x4cda70(0x5da)](_0x464aa9, 0x1);
                    _0xa9649[_0x4cda70(0x4b8)](String(_0x2556a1));
                }
                return;
            }
            _0x4577e7[_0x4cda70(0x362)](_0x519c25, _0x2556a1, _0x1e870a);
            if (!_0xb2691a[_0x4cda70(0x139)] && !_0x232af5(_0x4577e7[_0x4cda70(0x628)](_0x4ca45e, _0xb2691a['chainTargetCurrentId']))) {
                const _0x28c53c = _0x12db6a(_0xb2691a[_0x4cda70(0xe8)]);
                _0x28c53c && (_0xb2691a[_0x4cda70(0xe8)] = _0x28c53c['id'], _0x3f8be3());
            }
        } finally {
            _0x20f777 = ![];
        }
    }
    const _0x1ceaaf = {};
    _0x1ceaaf[_0x1fbd97(0x284)] = _0x1fbd97(0x5d7), _0x1ceaaf[_0x1fbd97(0x716)] = _0x1fbd97(0x743), _0x1ceaaf[_0x1fbd97(0x11f)] = _0x1fbd97(0x691);
    const _0x2563a2 = {};
    _0x2563a2[_0x1fbd97(0x284)] = '⚔️', _0x2563a2[_0x1fbd97(0x716)] = _0x1fbd97(0x631), _0x2563a2[_0x1fbd97(0x11f)] = _0x1fbd97(0x77c);
    const _0x22c163 = {};
    _0x22c163[_0x1fbd97(0xf7)] = _0x1ceaaf, _0x22c163[_0x1fbd97(0x219)] = _0x2563a2;
    const _0x51a2c6 = _0x22c163;
    let _0x44c5cb = _0x4577e7[_0x1fbd97(0x542)](_0xfadf01, _0x1fbd97(0x429), []);
    if (!Array['isArray'](_0x44c5cb))
        _0x44c5cb = [];
    const _0x2d9085 = {}, _0x157dfc = {}, _0x543206 = {};
    let _0x205b24 = ![], _0x2d324d = 0x0;
    function _0x4eba00() {
        const _0x1b9913 = _0x1fbd97;
        _0x48509d(_0x1b9913(0x429), _0x44c5cb);
        const _0x42914b = {};
        _0x42914b[_0x1b9913(0x20c)] = _0x1b9913(0x429), _0x42914b[_0x1b9913(0x1d5)] = _0x44c5cb, _0x4577e7['SNNTr'](_0x5efbb7, _0x1b9913(0x4b6), _0x42914b);
    }
    function _0x13723f(_0x48880f) {
        const _0x275bd7 = _0x1fbd97;
        return _0x44c5cb[_0x275bd7(0x2d6)](_0xdebf0b => String(_0xdebf0b['id']) === String(_0x48880f)) || null;
    }
    function _0x17dd37(_0x383778) {
        const _0x593b86 = _0x1fbd97, _0x5539e8 = String(_0x4577e7['ltArm'](parseInt, _0x383778, 0xa) || '');
        if (!_0x5539e8)
            return;
        if (!_0x4c3563('fw')) {
            _0x145293('fw');
            return;
        }
        if (_0x4577e7[_0x593b86(0x265)](_0x13723f, _0x5539e8)) {
            _0x4577e7[_0x593b86(0x23e)](_0x93d2c1, _0x593b86(0x5e4) + _0x5539e8 + _0x593b86(0x4cf));
            return;
        }
        const _0x2fe11e = Math[_0x593b86(0x3ee)](Date[_0x593b86(0x6d4)]() / 0x3e8), _0x33f988 = {};
        _0x33f988['id'] = _0x5539e8, _0x33f988[_0x593b86(0x102)] = '', _0x33f988[_0x593b86(0x7c)] = 'standard', _0x33f988[_0x593b86(0x842)] = 0xf, _0x33f988[_0x593b86(0x75d)] = !![], _0x33f988[_0x593b86(0x1ed)] = ![], _0x33f988[_0x593b86(0x70a)] = !![], _0x33f988['startedAt'] = _0x2fe11e, _0x44c5cb[_0x593b86(0x563)](_0x33f988), _0x4eba00(), _0x176af6();
        if (_0x4b673b)
            _0x157dfc[_0x5539e8] = Date[_0x593b86(0x6d4)](), _0x4577e7[_0x593b86(0x169)](_0x172c27, _0x5539e8);
        else {
            const _0x4b170e = {};
            _0x4b170e[_0x593b86(0xe2)] = _0x5539e8, _0x4577e7[_0x593b86(0x555)](_0x5efbb7, _0x4577e7[_0x593b86(0x4d0)], _0x4b170e);
        }
        _0x4577e7[_0x593b86(0x265)](_0x93d2c1, _0x593b86(0x5e4) + _0x5539e8 + _0x593b86(0x3d0));
    }
    function _0x54d73c(_0x492ca6) {
        const _0x4035eb = _0x1fbd97;
        _0x44c5cb = _0x44c5cb[_0x4035eb(0x71f)](_0x1d3b5b => String(_0x1d3b5b['id']) !== String(_0x492ca6)), delete _0x2d9085[_0x492ca6], delete _0x543206[_0x492ca6], _0x4eba00(), _0x176af6();
    }
    function _0x106e8e(_0x157409, _0x540801, _0x1ec052) {
        const _0x25be38 = _0x1fbd97, _0x338284 = {};
        _0x338284[_0x25be38(0x730)] = _0x25be38(0x440);
        if (!_0x540801)
            return _0x338284;
        const _0x15bf8a = {};
        _0x15bf8a[_0x25be38(0x730)] = _0x25be38(0x440);
        if (_0x540801[_0x25be38(0x4b6)] === _0x25be38(0x57d) || _0x4577e7[_0x25be38(0x643)](_0x540801['state'], _0x4577e7[_0x25be38(0x9a)]))
            return _0x15bf8a;
        const _0x2f8c92 = {};
        _0x2f8c92[_0x25be38(0x730)] = _0x4577e7[_0x25be38(0x4f7)];
        if (_0x540801[_0x25be38(0x4b6)] === 'Traveling' || _0x540801['state'] === _0x25be38(0x830))
            return _0x2f8c92;
        const _0x6faa7b = _0x4577e7[_0x25be38(0x45e)](_0x540801[_0x25be38(0x874)], _0x25be38(0x5ce)) || _0x157409[_0x25be38(0x75d)] !== ![] && _0x4577e7[_0x25be38(0x815)](_0x540801[_0x25be38(0x874)], _0x25be38(0x68d)), _0x50b5f7 = _0x4577e7[_0x25be38(0x6b1)](_0x540801[_0x25be38(0x58a)] || 0x0, _0x4577e7[_0x25be38(0x67b)](parseInt(_0x157409[_0x25be38(0x842)], 0xa) || 0x0, 0x3c)), _0x212445 = (_0x4577e7['zghkg'](_0x540801[_0x25be38(0x4b6)], _0x25be38(0x46c)) || _0x4577e7[_0x25be38(0x7b8)](_0x540801[_0x25be38(0x4b6)], 'Jail')) && _0x540801[_0x25be38(0x206)] > _0x1ec052;
        if (_0x212445)
            return {
                'status': _0x25be38(0xc9),
                'eta': _0x6faa7b ? Math[_0x25be38(0x3ab)](_0x540801[_0x25be38(0x206)], _0x50b5f7) : null
            };
        const _0x2df6b9 = {};
        _0x2df6b9[_0x25be38(0x730)] = _0x4577e7[_0x25be38(0x5cf)];
        if (!_0x6faa7b)
            return _0x2df6b9;
        if (_0x4577e7[_0x25be38(0x3e6)](_0x1ec052, _0x50b5f7))
            return {
                'status': _0x4577e7[_0x25be38(0x30f)],
                'inactiveSec': _0x1ec052 - (_0x540801[_0x25be38(0x58a)] || 0x0)
            };
        const _0x136f62 = {};
        return _0x136f62['status'] = _0x4577e7[_0x25be38(0x3f0)], _0x136f62[_0x25be38(0x5ed)] = _0x50b5f7, _0x136f62;
    }
    function _0x37beb6(_0x27a33a) {
        const _0x12baa4 = _0x1fbd97, _0x34a783 = (_0x4577e7[_0x12baa4(0x31c)](_0x48ef7f) || _0x12baa4(0x335)) + ':' + _0x27a33a;
        let _0x299329 = 0x811c9dc5;
        for (let _0x42625e = 0x0; _0x42625e < _0x34a783['length']; _0x42625e++) {
            _0x299329 ^= _0x34a783[_0x12baa4(0x204)](_0x42625e), _0x299329 = Math['imul'](_0x299329, 0x1000193);
        }
        return _0x299329 >>> 0x0;
    }
    function _0xc80803(_0x528c3a, _0x5b715a, _0x5cd9ff) {
        const _0x1fd160 = _0x1fbd97, _0x49a8f0 = {};
        _0x49a8f0[_0x1fd160(0xe6)] = [], _0x49a8f0[_0x1fd160(0x366)] = [], _0x49a8f0[_0x1fd160(0xc9)] = [], _0x49a8f0[_0x1fd160(0x234)] = [], _0x49a8f0[_0x1fd160(0x528)] = [];
        const _0x4be343 = _0x49a8f0;
        if (!_0x5b715a || !_0x5b715a[_0x1fd160(0x328)])
            return _0x4be343;
        for (const [_0xbfb1a6, _0x540993] of Object[_0x1fd160(0x7b)](_0x5b715a[_0x1fd160(0x328)])) {
            const _0x1cd19f = _0x4577e7[_0x1fd160(0x7af)](_0x106e8e, _0x528c3a, _0x540993, _0x5cd9ff);
            if (_0x4be343[_0x1cd19f[_0x1fd160(0x730)]])
                _0x4be343[_0x1cd19f[_0x1fd160(0x730)]][_0x1fd160(0x563)]({
                    'id': _0xbfb1a6,
                    'm': _0x540993,
                    'el': _0x1cd19f
                });
        }
        return _0x4be343[_0x1fd160(0xe6)][_0x1fd160(0x437)]((_0x4d22ac, _0x2bb55d) => _0x37beb6(_0x4d22ac['id']) - _0x37beb6(_0x2bb55d['id'])), _0x4be343['soon'][_0x1fd160(0x437)]((_0x32aff2, _0x24b21c) => _0x32aff2['el']['eta'] - _0x24b21c['el'][_0x1fd160(0x5ed)]), _0x4be343[_0x1fd160(0xc9)][_0x1fd160(0x437)]((_0x58deb1, _0x9c415f) => (_0x58deb1['el'][_0x1fd160(0x5ed)] ?? Infinity) - (_0x9c415f['el'][_0x1fd160(0x5ed)] ?? Infinity)), _0x4be343;
    }
    function _0x23f20c() {
        const _0x475150 = _0x1fbd97, _0x4e0893 = {
                'kMprm': function (_0x4813ad, _0x1253bf) {
                    return _0x4813ad + _0x1253bf;
                },
                'OxQnw': function (_0x2821bc, _0x232d4a, _0x2c18e6, _0xd21b08) {
                    return _0x2821bc(_0x232d4a, _0x2c18e6, _0xd21b08);
                }
            }, _0x49806a = Math[_0x475150(0x3ee)](_0x4577e7['bvzre'](Date[_0x475150(0x6d4)](), 0x3e8));
        return _0x44c5cb[_0x475150(0x16c)]((_0x2106d0, _0x5df066) => {
            const _0x5c97c7 = _0x475150;
            if (_0x5df066[_0x5c97c7(0x1ed)])
                return _0x2106d0;
            return _0x4e0893[_0x5c97c7(0x472)](_0x2106d0, _0x4e0893[_0x5c97c7(0x6f7)](_0xc80803, _0x5df066, _0x2d9085[_0x5df066['id']], _0x49806a)[_0x5c97c7(0xe6)][_0x5c97c7(0x5a5)]);
        }, 0x0);
    }
    function _0x595dab(_0x31f1bf) {
        const _0x2a05a3 = _0x1fbd97;
        for (const _0x59b6c0 of _0x44c5cb) {
            const _0x1faa2f = _0x2d9085[_0x59b6c0['id']]?.[_0x2a05a3(0x328)]?.[String(_0x31f1bf)];
            if (_0x1faa2f)
                return {
                    'contract': _0x59b6c0,
                    'faction': _0x2d9085[_0x59b6c0['id']],
                    'member': _0x1faa2f
                };
        }
        return null;
    }
    async function _0x172c27(_0x52ffc7) {
        const _0x479a32 = _0x1fbd97, _0x1e4739 = await _0x4577e7[_0x479a32(0x7af)](_0x24a139, _0x479a32(0x108) + _0x52ffc7 + _0x479a32(0x41a), _0x4577e7[_0x479a32(0x714)], _0x4577e7[_0x479a32(0x2da)](_0x4577e7['IkMqq'](_0x449e49), 0x5));
        if (!_0x1e4739)
            return;
        if (_0x1e4739[_0x479a32(0x313)])
            _0x2d9085[_0x52ffc7] = Object[_0x479a32(0x68e)]({}, _0x2d9085[_0x52ffc7] || {}, {
                'error': _0x1e4739[_0x479a32(0x313)][_0x479a32(0x313)] || _0x4577e7['eFKQl'],
                'fetched': Date[_0x479a32(0x6d4)]()
            });
        else {
            const _0x190f7f = {};
            for (const [_0x3dd75c, _0x4d84aa] of Object['entries'](_0x1e4739[_0x479a32(0x328)] || {})) {
                _0x190f7f[_0x3dd75c] = {
                    'name': _0x4d84aa[_0x479a32(0x102)] || _0x479a32(0x6e0) + _0x3dd75c + ']',
                    'level': _0x4577e7[_0x479a32(0x346)](parseInt, _0x4d84aa[_0x479a32(0x825)] || 0x0, 0xa),
                    'state': _0x4d84aa['status']?.[_0x479a32(0x4b6)] || _0x479a32(0x173),
                    'until': parseInt(_0x4d84aa['status']?.['until'] || 0x0, 0xa),
                    'desc': _0x4d84aa[_0x479a32(0x730)]?.[_0x479a32(0x221)] || '',
                    'online': _0x4d84aa[_0x479a32(0x7d)]?.[_0x479a32(0x730)] || _0x4577e7[_0x479a32(0x4bb)],
                    'lastTs': _0x4577e7[_0x479a32(0x625)](parseInt, _0x4d84aa[_0x479a32(0x7d)]?.[_0x479a32(0x40f)] || 0x0, 0xa)
                };
            }
            _0x2d9085[_0x52ffc7] = {
                'name': _0x1e4739[_0x479a32(0x102)] || 'Faction\x20' + _0x52ffc7,
                'members': _0x190f7f,
                'fetched': Date[_0x479a32(0x6d4)](),
                'error': null
            };
            const _0x1a7e4a = _0x13723f(_0x52ffc7);
            if (_0x1a7e4a && _0x1e4739['name'] && _0x4577e7[_0x479a32(0x350)](_0x1a7e4a['name'], _0x1e4739[_0x479a32(0x102)])) {
                _0x1a7e4a[_0x479a32(0x102)] = _0x1e4739['name'], _0x4eba00();
                if (_0x26e1e9 === _0x479a32(0x48c))
                    _0x176af6();
            }
            _0x4577e7[_0x479a32(0x6ff)](_0x1180a6, _0x52ffc7);
        }
        const _0x40ee8b = {};
        _0x40ee8b[_0x479a32(0xe2)] = _0x52ffc7, _0x40ee8b[_0x479a32(0x720)] = _0x2d9085[_0x52ffc7], _0x4577e7[_0x479a32(0x7f4)](_0x5efbb7, _0x479a32(0x7cc), _0x40ee8b);
        if (_0x4577e7[_0x479a32(0x6dd)](_0x26e1e9, _0x479a32(0x48c)))
            _0x4577e7[_0x479a32(0x2eb)](_0x2c2af8, _0x52ffc7);
    }
    function _0x1180a6(_0x43f9ce) {
        const _0x1aae25 = _0x1fbd97;
        if (!_0x4b673b)
            return;
        const _0x23265b = _0x13723f(_0x43f9ce), _0x37b462 = _0x2d9085[_0x43f9ce];
        if (!_0x23265b || !_0x37b462 || !_0x37b462['members'] || _0x23265b[_0x1aae25(0x1ed)] || _0xb2691a[_0x1aae25(0x272)])
            return;
        const _0x33a546 = Math[_0x1aae25(0x3ee)](_0x4577e7['auRWd'](Date[_0x1aae25(0x6d4)](), 0x3e8)), _0x8f36eb = _0x4577e7[_0x1aae25(0xa2)](_0xc80803, _0x23265b, _0x37b462, _0x33a546)[_0x1aae25(0xe6)], _0x3e7672 = new Set(_0x8f36eb['map'](_0x3f0582 => _0x3f0582['id'])), _0x57f6c9 = _0x543206[_0x43f9ce];
        _0x543206[_0x43f9ce] = _0x3e7672;
        if (!_0x57f6c9 || _0x23265b[_0x1aae25(0x70a)] === ![])
            return;
        const _0x25a31f = _0x8f36eb[_0x1aae25(0x71f)](_0xa65993 => !_0x57f6c9[_0x1aae25(0x543)](_0xa65993['id']));
        if (!_0x25a31f[_0x1aae25(0x5a5)])
            return;
        const _0x3e4d1c = _0x51a2c6[_0x23265b[_0x1aae25(0x7c)]] || _0x51a2c6['standard'], _0x4526b4 = _0x4577e7[_0x1aae25(0x58b)](_0x25a31f[_0x1aae25(0x348)](0x0, 0x3)[_0x1aae25(0x33c)](_0x40887e => _0x40887e['m'][_0x1aae25(0x102)])[_0x1aae25(0x663)](',\x20'), _0x4577e7[_0x1aae25(0x647)](_0x25a31f[_0x1aae25(0x5a5)], 0x3) ? '\x20+' + (_0x25a31f[_0x1aae25(0x5a5)] - 0x3) : '');
        _0x460aca({
            'key': _0x1aae25(0xb1) + _0x43f9ce + ':' + _0x25a31f[_0x1aae25(0x33c)](_0x58c4ac => _0x58c4ac['id'])[_0x1aae25(0x437)]()[_0x1aae25(0x663)](','),
            'dedupeMs': _0x4577e7[_0x1aae25(0x469)](0x3c, 0x3e8),
            'sound': _0x1aae25(0x387),
            'notif': {
                'title': _0x1aae25(0x3c7) + _0x37b462[_0x1aae25(0x102)] + ':\x20' + _0x25a31f[_0x1aae25(0x5a5)] + '\x20member' + (_0x25a31f[_0x1aae25(0x5a5)] > 0x1 ? 's' : '') + _0x1aae25(0x18d),
                'body': _0x4526b4 + '\x20•\x20' + _0x3e4d1c[_0x1aae25(0x284)] + '\x20' + _0x3e4d1c[_0x1aae25(0x716)] + _0x1aae25(0xfb)
            },
            'toast': _0x1aae25(0x3c7) + _0xf4127b(_0x37b462[_0x1aae25(0x102)]) + ':\x20' + _0x25a31f['length'] + _0x1aae25(0x4d6) + _0x4577e7['sxuFp'](_0xf4127b, _0x4526b4) + _0x1aae25(0x810) + _0x3e4d1c[_0x1aae25(0x284)] + '\x20' + _0x3e4d1c[_0x1aae25(0x716)]
        });
    }
    function _0x41953a() {
        const _0x305560 = _0x1fbd97;
        if (!_0x4b673b || _0x205b24 || !_0x44c5cb[_0x305560(0x5a5)])
            return;
        if (!_0x4c3563('fw'))
            return;
        const _0x51db20 = Date[_0x305560(0x6d4)]();
        _0x4577e7[_0x305560(0x66f)](_0x51db20 - _0x2d324d, 0x1388) && (_0x2d324d = _0x51db20, _0x44c5cb[_0x305560(0x136)](_0x27bb83 => _0x1180a6(_0x27bb83['id'])));
        if (_0xb2691a[_0x305560(0x272)] || _0x112493() >= _0x449e49() - 0x5)
            return;
        const _0x1d52d9 = (parseInt(_0xb2691a[_0x305560(0x415)], 0xa) || 0x14) * 0x3e8, _0x3e75b4 = _0x44c5cb['filter'](_0x2e8cb2 => !_0x2e8cb2[_0x305560(0x1ed)] && _0x51db20 - (_0x157dfc[_0x2e8cb2['id']] || 0x0) >= _0x1d52d9)[_0x305560(0x437)]((_0x3bdea1, _0x483cad) => (_0x157dfc[_0x3bdea1['id']] || 0x0) - (_0x157dfc[_0x483cad['id']] || 0x0))[0x0];
        let _0x175286 = null;
        _0x3e75b4 && (_0x157dfc[_0x3e75b4['id']] = _0x51db20, _0x175286 = _0x172c27(_0x3e75b4['id'])), _0x175286 && (_0x205b24 = !![], _0x175286[_0x305560(0x92)](() => {
            _0x205b24 = ![];
        }));
    }
    function _0x19b3ea(_0x15b76c) {
        const _0x831990 = _0x1fbd97, _0x2f93ce = _0x51a2c6[_0x15b76c[_0x831990(0x7c)]] ? _0x15b76c[_0x831990(0x7c)] : _0x831990(0x219), _0x1e4b5d = _0x51a2c6[_0x2f93ce], _0x33b17a = [
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
        if (!_0x33b17a[_0x831990(0x1b1)](_0x15b76c[_0x831990(0x842)]))
            _0x33b17a[_0x831990(0x563)](_0x15b76c[_0x831990(0x842)]);
        return _0x831990(0x1b4) + (_0x15b76c['paused'] ? _0x831990(0x2f8) : '') + _0x831990(0x7e) + _0x15b76c['id'] + '\x22\x20data-fid=\x22' + _0x15b76c['id'] + _0x831990(0x71a) + _0x15b76c['id'] + _0x831990(0xd4) + _0xf4127b(_0x15b76c[_0x831990(0x102)] || _0x831990(0x3aa) + _0x15b76c['id'] + ']') + _0x831990(0x664) + _0x15b76c['id'] + _0x831990(0x222) + _0x15b76c['id'] + _0x831990(0x9c) + (_0x15b76c[_0x831990(0x70a)] !== ![] ? _0x4577e7['MVjLQ'] : _0x4577e7['EBAmW']) + _0x831990(0x45d) + (_0x4577e7['JcRXi'](_0x15b76c[_0x831990(0x70a)], ![]) ? '🔔' : '🔕') + _0x831990(0x1a9) + _0x15b76c['id'] + _0x831990(0x9c) + (_0x15b76c['paused'] ? _0x4577e7[_0x831990(0x371)] : _0x831990(0x3b1)) + _0x831990(0x4c7) + (_0x15b76c['paused'] ? '▶' : '⏸') + _0x831990(0x77e) + _0x15b76c['id'] + _0x831990(0x3c9) + _0x2f93ce + '\x22\x20data-fw-weapon=\x22' + _0x15b76c['id'] + _0x831990(0x3dc) + _0x1e4b5d[_0x831990(0x11f)] + '\x22>' + _0x1e4b5d[_0x831990(0x284)] + '\x20' + _0x1e4b5d['label'] + _0x831990(0x107) + _0x15b76c['id'] + _0x831990(0x758) + (_0x15b76c[_0x831990(0x75d)] !== ![] ? _0x831990(0x345) : '') + _0x831990(0x6bc) + (_0x15b76c[_0x831990(0x75d)] === ![] ? _0x831990(0x345) : '') + _0x831990(0x154) + _0x15b76c['id'] + _0x831990(0x75) + _0x33b17a[_0x831990(0x437)]((_0x41f280, _0x13573e) => _0x41f280 - _0x13573e)['map'](_0x4097b1 => _0x831990(0x87) + _0x4097b1 + '\x22\x20' + (_0x4097b1 === _0x15b76c[_0x831990(0x842)] ? _0x831990(0x345) : '') + _0x831990(0x32d) + _0x2639a9(_0x4097b1 * 0x3c) + _0x831990(0x69b))['join']('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-fw-hint\x20' + _0x2f93ce + '\x22>' + _0x1e4b5d['icon'] + '\x20' + _0x1e4b5d['hint'] + _0x831990(0x28b) + _0x15b76c['id'] + '\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';
    }
    function _0x2cc3f0(_0x3e5936) {
        const _0x5075d8 = _0x1fbd97, _0x8882a1 = _0x2d9085[_0x3e5936['id']];
        if (!_0x8882a1 || !_0x8882a1['members'] && !_0x8882a1[_0x5075d8(0x313)])
            return _0x5075d8(0x5ca) + (_0x4b673b ? _0x4577e7[_0x5075d8(0x259)] : _0x4577e7['PAFGW']) + _0x5075d8(0x48d);
        const _0x4b9082 = Math[_0x5075d8(0x3ee)](Date['now']() / 0x3e8), _0x3dd0aa = _0x4577e7[_0x5075d8(0x627)](_0xc80803, _0x3e5936, _0x8882a1, _0x4b9082), _0x376da9 = Math[_0x5075d8(0x3ee)]((Date[_0x5075d8(0x6d4)]() - (_0x8882a1[_0x5075d8(0x5ae)] || 0x0)) / 0x3e8), _0x33df0b = _0x3846de => '<span\x20class=\x22stakeout-dot\x20' + (_0x3846de[_0x5075d8(0x874)] === _0x5075d8(0x68d) ? _0x5075d8(0x69e) : _0x3846de['online'] === _0x5075d8(0x22d) ? _0x5075d8(0x874) : 'offline') + _0x5075d8(0x5c4), _0x227195 = 0xc;
        let _0x30a331 = '';
        if (_0x8882a1[_0x5075d8(0x313)])
            _0x30a331 += _0x5075d8(0x10d) + _0xf4127b(_0x8882a1[_0x5075d8(0x313)]) + _0x5075d8(0x48d);
        _0x30a331 += _0x5075d8(0x68f) + _0x3dd0aa[_0x5075d8(0xe6)]['length'] + _0x5075d8(0x3d6) + _0x3dd0aa[_0x5075d8(0x366)][_0x5075d8(0x5a5)] + _0x5075d8(0x7ee) + _0x3dd0aa[_0x5075d8(0xc9)][_0x5075d8(0x5a5)] + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20title=\x22Online\x20or\x20too\x20recently\x20active\x22>🟢\x20' + _0x3dd0aa['active'][_0x5075d8(0x5a5)] + _0x5075d8(0x740) + (_0x3dd0aa[_0x5075d8(0x528)][_0x5075d8(0x5a5)] ? _0x5075d8(0x577) + _0x3dd0aa[_0x5075d8(0x528)][_0x5075d8(0x5a5)] + _0x5075d8(0x582) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22stakeout-fw-age\x22\x20title=\x22Last\x20refresh\x22>' + (_0x3e5936[_0x5075d8(0x1ed)] ? _0x5075d8(0x6cb) : '↻\x20' + _0x376da9 + 's') + _0x5075d8(0x6b4);
        if (_0x3dd0aa['eligible'][_0x5075d8(0x5a5)]) {
            _0x30a331 += _0x3dd0aa['eligible'][_0x5075d8(0x348)](0x0, _0x227195)[_0x5075d8(0x33c)](_0xcdb736 => _0x5075d8(0x2dc) + _0x33df0b(_0xcdb736['m']) + _0x5075d8(0x688) + _0xf4127b(_0xcdb736['m'][_0x5075d8(0x102)]) + '\x20[' + _0xcdb736['id'] + _0x5075d8(0x203) + _0xf4127b(_0xcdb736['m'][_0x5075d8(0x102)]) + _0x5075d8(0x6a3) + _0xcdb736['m'][_0x5075d8(0x825)] + _0x5075d8(0x7e7) + _0xcdb736['m'][_0x5075d8(0x874)] + '\x20' + _0x2639a9(_0xcdb736['el'][_0x5075d8(0x5df)]) + _0x5075d8(0x5cb) + _0xcdb736['id'] + _0x5075d8(0x7c3) + _0xf4127b(_0xcdb736['m'][_0x5075d8(0x102)]) + _0x5075d8(0x769))[_0x5075d8(0x663)]('');
            if (_0x3dd0aa[_0x5075d8(0xe6)][_0x5075d8(0x5a5)] > _0x227195)
                _0x30a331 += _0x5075d8(0x14c) + _0x4577e7[_0x5075d8(0x1c2)](_0x3dd0aa[_0x5075d8(0xe6)][_0x5075d8(0x5a5)], _0x227195) + _0x5075d8(0x446);
        } else
            !_0x8882a1[_0x5075d8(0x313)] && (_0x30a331 += _0x5075d8(0xa7));
        const _0x440a93 = [
            ..._0x3dd0aa[_0x5075d8(0x366)][_0x5075d8(0x33c)](_0x31308e => ({
                'x': _0x31308e,
                'eta': _0x31308e['el'][_0x5075d8(0x5ed)],
                'icon': '💤'
            })),
            ..._0x3dd0aa[_0x5075d8(0xc9)][_0x5075d8(0x71f)](_0x8572ac => _0x8572ac['el'][_0x5075d8(0x5ed)] && _0x8572ac['el']['eta'] - _0x4b9082 <= 0xf * 0x3c)[_0x5075d8(0x33c)](_0x51df30 => ({
                'x': _0x51df30,
                'eta': _0x51df30['el']['eta'],
                'icon': '🏥'
            }))
        ][_0x5075d8(0x437)]((_0xff5b25, _0x6e855b) => _0xff5b25[_0x5075d8(0x5ed)] - _0x6e855b[_0x5075d8(0x5ed)])[_0x5075d8(0x348)](0x0, 0x5);
        return _0x440a93[_0x5075d8(0x5a5)] && (_0x30a331 += _0x5075d8(0x436) + _0x440a93['map'](({
            x: _0x1fce8b,
            eta: _0x3fd568,
            icon: _0x214915
        }) => '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-fw-row\x20soon\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x33df0b(_0x1fce8b['m']) + _0x5075d8(0x87f) + _0xf4127b(_0x1fce8b['m'][_0x5075d8(0x102)]) + _0x5075d8(0x6a3) + _0x1fce8b['m']['level'] + _0x5075d8(0x7e7) + _0x214915 + '\x20' + _0x8d48d4(Math[_0x5075d8(0x3ab)](0x0, _0x3fd568 - _0x4b9082)) + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')[_0x5075d8(0x663)]('')), _0x30a331;
    }
    function _0x2c2af8(_0x42c07d) {
        const _0x564aa3 = _0x1fbd97, _0xd77f9 = document[_0x564aa3(0x39d)](_0x564aa3(0x35f) + _0x42c07d), _0x564388 = _0x4577e7[_0x564aa3(0x553)](_0x13723f, _0x42c07d);
        if (!_0xd77f9 || !_0x564388)
            return;
        const _0x58e3f0 = _0x2cc3f0(_0x564388);
        _0x4577e7[_0x564aa3(0x38c)](_0xd77f9[_0x564aa3(0x372)], _0x58e3f0) && (_0xd77f9[_0x564aa3(0x372)] = _0x58e3f0, _0xd77f9[_0x564aa3(0x1be)] = _0x58e3f0);
    }
    function _0x3cb697(_0x5272ce) {
        const _0x4aa4ce = _0x1fbd97, _0x1d453e = _0x4577e7[_0x4aa4ce(0x5d1)](_0xb2691a[_0x4aa4ce(0x5ba)] || _0x4577e7[_0x4aa4ce(0x497)], _0x4aa4ce(0x6c6));
        _0x4577e7[_0x4aa4ce(0x11c)](_0x126116, _0x1d453e ? _0x4aa4ce(0x5ad) + _0x5272ce : _0x4aa4ce(0x5fa) + _0x5272ce);
    }
    function _0x379b82(_0x3977ba) {
        const _0x439f0e = _0x1fbd97, _0x593fc0 = {
                'VHmJt': function (_0x29c276, _0x40ff95) {
                    return _0x29c276(_0x40ff95);
                },
                'NcqMp': function (_0x2d5a36, _0x3c5a96) {
                    return _0x2d5a36 !== _0x3c5a96;
                },
                'Xtwmz': function (_0x10999a, _0x3a3a9d, _0x1af313) {
                    const _0x1ca116 = _0x5ca8;
                    return _0x4577e7[_0x1ca116(0x51a)](_0x10999a, _0x3a3a9d, _0x1af313);
                },
                'QIeNY': function (_0x284098) {
                    return _0x284098();
                }
            };
        if (!_0x3977ba)
            return;
        _0x3977ba[_0x439f0e(0x1f7)] = _0x5e7b73 => {
            const _0x2080ca = _0x439f0e, _0x4ec891 = _0x5e7b73[_0x2080ca(0x1b6)][_0x2080ca(0x320)](_0x4577e7['tzUUI']);
            if (!_0x4ec891)
                return;
            _0x5e7b73[_0x2080ca(0x236)]();
            const _0x581ea1 = _0x4ec891[_0x2080ca(0x658)];
            if (_0x581ea1[_0x2080ca(0x4d8)]) {
                _0x3cb697(_0x581ea1[_0x2080ca(0x4d8)]);
                return;
            }
            const _0x3900e1 = _0x4577e7[_0x2080ca(0x82d)](_0x13723f, _0x581ea1[_0x2080ca(0x87b)] || _0x581ea1[_0x2080ca(0x6a9)] || _0x581ea1['fwAlert'] || _0x581ea1[_0x2080ca(0x129)]);
            if (!_0x3900e1)
                return;
            if (_0x581ea1[_0x2080ca(0x87b)]) {
                _0x4577e7[_0x2080ca(0x59e)](_0x54d73c, _0x3900e1['id']), _0x4577e7[_0x2080ca(0x2de)](_0x93d2c1, _0x2080ca(0x188) + (_0x3900e1[_0x2080ca(0x102)] || _0x2080ca(0x72d) + _0x3900e1['id'] + ']') + '.');
                return;
            }
            if (_0x581ea1[_0x2080ca(0x6a9)])
                _0x3900e1['paused'] = !_0x3900e1[_0x2080ca(0x1ed)];
            if (_0x581ea1[_0x2080ca(0x228)])
                _0x3900e1[_0x2080ca(0x70a)] = _0x4577e7[_0x2080ca(0x6df)](_0x3900e1[_0x2080ca(0x70a)], ![]);
            if (_0x581ea1[_0x2080ca(0x129)])
                _0x3900e1[_0x2080ca(0x7c)] = _0x3900e1[_0x2080ca(0x7c)] === _0x4577e7[_0x2080ca(0x245)] ? _0x4577e7['GDRBD'] : _0x2080ca(0xf7);
            _0x4eba00(), _0x176af6();
        }, _0x3977ba[_0x439f0e(0x74)] = _0x528ddd => {
            const _0x210cdb = _0x439f0e, _0x4ddf2e = _0x528ddd[_0x210cdb(0x1b6)], _0x435211 = _0x4ddf2e[_0x210cdb(0x658)], _0x5962f0 = _0x593fc0[_0x210cdb(0x848)](_0x13723f, _0x435211[_0x210cdb(0x19f)] || _0x435211[_0x210cdb(0x485)]);
            if (!_0x5962f0)
                return;
            if (_0x435211[_0x210cdb(0x19f)])
                _0x5962f0['allowIdle'] = _0x593fc0[_0x210cdb(0x481)](_0x4ddf2e[_0x210cdb(0x1d5)], 'offline');
            if (_0x435211[_0x210cdb(0x485)])
                _0x5962f0[_0x210cdb(0x842)] = _0x593fc0[_0x210cdb(0x66e)](parseInt, _0x4ddf2e['value'], 0xa) || 0xf;
            _0x593fc0['QIeNY'](_0x4eba00), _0x2c2af8(_0x5962f0['id']);
        };
    }
    function _0x140837() {
        const _0x5fcf26 = _0x1fbd97, _0x4b0e18 = {
                'hhZuR': function (_0x567c60) {
                    return _0x567c60();
                },
                'KSfAq': function (_0xd686b3, _0x54d7fd) {
                    return _0xd686b3(_0x54d7fd);
                },
                'xhSaq': _0x4577e7[_0x5fcf26(0x56f)]
            }, _0x3486b0 = (_0x443753, _0x38bc5a, _0x44ebab, _0x3aba7a) => {
                const _0x3750ca = {
                        'Xbvsm': function (_0x465239, _0xb84ba2, _0x2618b7) {
                            return _0x465239(_0xb84ba2, _0x2618b7);
                        }
                    }, _0x21eecf = document['getElementById'](_0x443753);
                if (!_0x21eecf)
                    return;
                _0x21eecf['onchange'] = () => {
                    const _0x48d9fd = _0x5ca8, _0x33bacf = _0x3750ca['Xbvsm'](parseInt, _0x21eecf[_0x48d9fd(0x1d5)], 0xa);
                    if (isNaN(_0x33bacf))
                        return;
                    _0xb2691a[_0x38bc5a] = Math[_0x48d9fd(0x3ab)](_0x44ebab, Math[_0x48d9fd(0x724)](_0x3aba7a, _0x33bacf)), _0x21eecf['value'] = _0xb2691a[_0x38bc5a], _0x3f8be3(), _0x34ecf3();
                };
            };
        _0x4577e7[_0x5fcf26(0x43e)](_0x3486b0, _0x5fcf26(0x2cc), _0x5fcf26(0x7da), 0x1, 0x5f5e0ff), _0x3486b0(_0x4577e7['SizOU'], _0x4577e7['yjSwm'], 0x2, 0x5f5e0ff), _0x3486b0(_0x5fcf26(0x58d), _0x4577e7['uWFxx'], 0x1, 0x64), _0x4577e7['NThKP'](_0x3486b0, _0x5fcf26(0x229), _0x5fcf26(0x42f), 0x0, 0x16d);
        const _0x55bc9a = (_0x254388, _0x1778c7, _0x695e74) => {
            const _0x36074e = _0x5fcf26, _0x30de7f = {
                    'SQgfz': function (_0x39808d) {
                        const _0x3d5fea = _0x5ca8;
                        return _0x4b0e18[_0x3d5fea(0x681)](_0x39808d);
                    }
                }, _0x48d57c = document[_0x36074e(0x39d)](_0x254388);
            if (!_0x48d57c)
                return;
            _0x48d57c[_0x36074e(0x74)] = () => {
                const _0x3b3029 = _0x36074e;
                _0xb2691a[_0x1778c7] = _0x695e74(_0x48d57c['value']), _0x30de7f[_0x3b3029(0x40e)](_0x3f8be3), _0x34ecf3(), _0xab1ec2();
            };
        };
        _0x4577e7[_0x5fcf26(0x757)](_0x55bc9a, _0x4577e7[_0x5fcf26(0xc8)], _0x5fcf26(0x220), _0x4b389a => _0x4b389a), _0x4577e7[_0x5fcf26(0xa2)](_0x55bc9a, 'stakeout-api-budget-select', 'apiBudgetPerMin', _0x65f09 => parseInt(_0x65f09, 0xa)), _0x55bc9a('stakeout-faction-poll-select', 'factionPollSec', _0x41ceb0 => parseInt(_0x41ceb0, 0xa));
        const _0x3ba87a = document[_0x5fcf26(0x39d)](_0x4577e7[_0x5fcf26(0x414)]);
        _0x3ba87a && (_0x3ba87a[_0x5fcf26(0x1f7)] = _0x428788 => {
            const _0x3221f3 = _0x5fcf26;
            _0x428788[_0x3221f3(0x236)](), _0x3612c1 = [], _0xa9649['clear'](), _0x1e6d3b(!![]), _0x4b0e18[_0x3221f3(0x681)](_0x34ecf3), _0x4b0e18[_0x3221f3(0x75f)](_0x93d2c1, _0x4b0e18['xhSaq']);
        }), _0x34ecf3();
    }
    function _0x34ecf3() {
        const _0x4ee749 = _0x1fbd97, _0x1dfc2e = _0x27fbed(), _0x4d8e20 = _0x4577e7[_0x4ee749(0x862)](_0x5e2187) ? _0x4ee749(0x5fc) + _0x1dfc2e[_0x4ee749(0x62d)] + '/' + _0x1dfc2e[_0x4ee749(0x4a7)] : '', _0x33692f = _0x4ee749(0x5c3) + _0x1dfc2e['total'] + _0x4ee749(0x4a3) + _0xffaf4f() + _0x4ee749(0x3a6) + _0x3103fb() + 'd\x20old\x20found,\x20' + _0x1dfc2e[_0x4ee749(0x62d)] + _0x4ee749(0x3ae) + _0x1dfc2e[_0x4ee749(0x18e)] + '\x20verified\x20in\x20the\x20last\x202\x20min', _0x5ae28e = document[_0x4ee749(0x39d)](_0x4ee749(0xf6));
        _0x5ae28e && _0x5ae28e[_0x4ee749(0x235)] !== _0x4d8e20 && (_0x5ae28e[_0x4ee749(0x235)] = _0x4d8e20, _0x5ae28e[_0x4ee749(0x3dd)] = _0x33692f);
        const _0x42f960 = document[_0x4ee749(0x39d)]('stakeout-chain-pool-status');
        if (_0x42f960) {
            const _0x1bc939 = _0x1dfc2e[_0x4ee749(0x4a7)] + '\x20found\x20•\x20' + _0x1dfc2e[_0x4ee749(0x62d)] + '\x20attackable\x20•\x20' + _0x1dfc2e[_0x4ee749(0x18e)] + _0x4ee749(0x5f1);
            if (_0x42f960[_0x4ee749(0x235)] !== _0x1bc939)
                _0x42f960[_0x4ee749(0x235)] = _0x1bc939;
        }
    }
    let _0x88a71e = ![];
    function _0x176af6() {
        const _0x2de6ba = _0x1fbd97, _0xb8264e = {
                'PPLcn': function (_0xaab15e, _0x82f620) {
                    return _0xaab15e === _0x82f620;
                },
                'HmNJS': _0x2de6ba(0x174),
                'uqbiD': function (_0x3c1aaa, _0x12fe0d) {
                    return _0x3c1aaa >= _0x12fe0d;
                },
                'mTTBt': function (_0x3a4251, _0x478afe) {
                    return _0x3a4251(_0x478afe);
                },
                'twIUY': function (_0x3853c0, _0x16334e, _0x3413d8) {
                    return _0x3853c0(_0x16334e, _0x3413d8);
                },
                'PkQxW': function (_0x44b85d, _0x4c7dfd) {
                    const _0x323ae4 = _0x2de6ba;
                    return _0x4577e7[_0x323ae4(0x35a)](_0x44b85d, _0x4c7dfd);
                },
                'xTxjW': function (_0x58e61b) {
                    return _0x58e61b();
                },
                'KWvnz': function (_0x2e9337, _0x5988d9) {
                    return _0x2e9337(_0x5988d9);
                },
                'XDJHj': _0x2de6ba(0x787),
                'nFNLL': function (_0x4aa79a, _0x582ac8) {
                    const _0x8b5766 = _0x2de6ba;
                    return _0x4577e7[_0x8b5766(0x2b1)](_0x4aa79a, _0x582ac8);
                },
                'zUmDL': _0x2de6ba(0x706),
                'QkuDg': function (_0x5bb3a3) {
                    const _0xf44ca = _0x2de6ba;
                    return _0x4577e7[_0xf44ca(0x5a8)](_0x5bb3a3);
                },
                'ClVVg': _0x2de6ba(0x30c),
                'FZRWk': 'illegal',
                'iTzNG': _0x4577e7[_0x2de6ba(0x6c3)],
                'YCdGp': _0x4577e7[_0x2de6ba(0x4b0)],
                'ACgQV': _0x2de6ba(0x231),
                'ezbue': function (_0x347ff0, _0x42a873) {
                    const _0x52f72e = _0x2de6ba;
                    return _0x4577e7[_0x52f72e(0x6ba)](_0x347ff0, _0x42a873);
                },
                'rQmaX': _0x4577e7[_0x2de6ba(0x427)],
                'RkDnK': function (_0x36c6d1, _0x532bb1) {
                    const _0x5b3e7b = _0x2de6ba;
                    return _0x4577e7[_0x5b3e7b(0x5e8)](_0x36c6d1, _0x532bb1);
                },
                'oxHia': _0x2de6ba(0x523),
                'EDQHv': _0x4577e7[_0x2de6ba(0x3a4)],
                'BupbZ': function (_0xe86dff, _0x1a8e83) {
                    return _0xe86dff % _0x1a8e83;
                },
                'PWQUy': function (_0x26cd17, _0x3eaa52) {
                    return _0x26cd17(_0x3eaa52);
                },
                'RzpVW': function (_0x17f20f, _0x26cb23, _0x3b3024) {
                    return _0x17f20f(_0x26cb23, _0x3b3024);
                },
                'PpOGY': '1|0|4|5|3|2',
                'oXnkc': function (_0x33a83c) {
                    return _0x33a83c();
                },
                'GPgqp': function (_0x31c67a) {
                    const _0x40a209 = _0x2de6ba;
                    return _0x4577e7[_0x40a209(0x712)](_0x31c67a);
                },
                'BtMmA': function (_0x239303, _0x212918) {
                    return _0x239303(_0x212918);
                },
                'lZqaA': _0x4577e7[_0x2de6ba(0x15b)]
            };
        if (!document['body'])
            return;
        !_0x2aed44 && (_0x2aed44 = document[_0x2de6ba(0x35d)](_0x4577e7[_0x2de6ba(0x698)]), _0x2aed44['id'] = _0x4577e7[_0x2de6ba(0x4de)], document[_0x2de6ba(0x198)][_0x2de6ba(0x159)](_0x2aed44));
        _0x4d543f();
        const _0x50773c = Math[_0x2de6ba(0x3ee)](Date['now']() / 0x3e8), _0x51c5d2 = _0x61dadc[_0x2de6ba(0x33c)](_0x180e7b => {
                const _0x3293a7 = _0x2de6ba;
                if (_0x4577e7[_0x3293a7(0x6a6)](_0x48c321, _0x180e7b))
                    return null;
                const _0x436632 = _0x4f991c[_0x180e7b]?.['data'];
                if (_0x436632 && _0x3a552f(_0x436632, _0x50773c, _0x180e7b)) {
                    const _0x13367b = {};
                    return _0x13367b['id'] = _0x180e7b, _0x13367b[_0x3293a7(0x3c1)] = _0x436632, _0x13367b;
                }
                return null;
            })[_0x2de6ba(0x71f)](Boolean), _0x2b7517 = _0x51c5d2['length'], _0x301ac3 = _0x178588[_0x2de6ba(0x33c)](_0x28d9af => {
                const _0x2bae0b = _0x2de6ba;
                if (_0xb2691a[_0x2bae0b(0x768)] || _0x1383de(_0x28d9af))
                    return null;
                const _0x56a811 = _0x4f991c[_0x28d9af]?.[_0x2bae0b(0x3c1)];
                if (_0x56a811 && _0x25ec12(_0x56a811)) {
                    const _0x35c972 = {};
                    return _0x35c972['id'] = _0x28d9af, _0x35c972[_0x2bae0b(0x3c1)] = _0x56a811, _0x35c972;
                }
                return null;
            })[_0x2de6ba(0x71f)](Boolean), _0x29495d = _0x301ac3[_0x2de6ba(0x5a5)], _0x43820a = _0x178588[_0x2de6ba(0x33c)](_0x1527c1 => {
                const _0x537835 = _0x2de6ba, _0x3c0945 = _0x4f991c[_0x1527c1]?.[_0x537835(0x3c1)];
                if (_0x3c0945 && _0x25ec12(_0x3c0945)) {
                    const _0xb5a69c = {};
                    return _0xb5a69c['id'] = _0x1527c1, _0xb5a69c[_0x537835(0x3c1)] = _0x3c0945, _0xb5a69c;
                }
                return null;
            })[_0x2de6ba(0x71f)](Boolean), _0x120e56 = _0x43820a[_0x2de6ba(0x5a5)];
        if (_0xb2691a[_0x2de6ba(0x709)]) {
            const _0x264fa0 = _0x51c5d2[0x0], _0x17fca4 = _0x301ac3[0x0];
            let _0x41e078 = '';
            if (_0x264fa0)
                _0x41e078 = _0x2de6ba(0x16e) + _0x264fa0[_0x2de6ba(0x3c1)][_0x2de6ba(0x102)] + _0x2de6ba(0x859) + _0x264fa0[_0x2de6ba(0x3c1)][_0x2de6ba(0x102)][_0x2de6ba(0xb7)](0x0, 0xa) + (_0x2b7517 > 0x1 ? _0x2de6ba(0x692) + (_0x2b7517 - 0x1) + ')' : '') + _0x2de6ba(0x727);
            else
                _0x17fca4 && (_0x41e078 = _0x2de6ba(0xe4) + _0x17fca4['data']['name'] + _0x2de6ba(0x753) + _0x17fca4[_0x2de6ba(0x3c1)][_0x2de6ba(0x102)][_0x2de6ba(0xb7)](0x0, 0xa) + _0x2de6ba(0x65b) + (_0x4577e7['OqxOj'](_0x29495d, 0x1) ? _0x2de6ba(0x692) + _0x4577e7[_0x2de6ba(0x402)](_0x29495d, 0x1) + ')' : '') + _0x2de6ba(0x727));
            _0x2aed44[_0x2de6ba(0x1be)] = _0x2de6ba(0x166) + (_0x2b7517 > 0x0 ? _0x2de6ba(0x50d) : _0x4577e7[_0x2de6ba(0x31e)](_0x29495d, 0x0) ? _0x2de6ba(0x52f) : '') + _0x2de6ba(0x432) + _0x61dadc[_0x2de6ba(0x5a5)] + _0x2de6ba(0x4b4) + _0x178588['length'] + _0x2de6ba(0x2f6) + _0x41e078 + _0x2de6ba(0x746);
            const _0x5dd034 = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x3ac)]);
            _0x5dd034 && (_0x5dd034[_0x2de6ba(0x1f7)] = () => {
                const _0x22c7da = _0x2de6ba;
                _0xb2691a[_0x22c7da(0x709)] = ![], _0x4577e7[_0x22c7da(0x660)](_0x3f8be3), _0x176af6();
            });
            const _0x51d933 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x13a));
            _0x51d933 && _0x264fa0 && (_0x51d933[_0x2de6ba(0x1f7)] = _0x5ca0bb => {
                const _0x5692f4 = _0x2de6ba;
                _0x5ca0bb[_0x5692f4(0x7a5)]();
                const _0x51bb61 = _0xb8264e[_0x5692f4(0x24d)](_0xb2691a[_0x5692f4(0x5ba)], _0x5692f4(0x6c6)) ? _0x5692f4(0x5ad) + _0x264fa0['id'] : _0x5692f4(0x5fa) + _0x264fa0['id'];
                _0x126116(_0x51bb61), _0x93d2c1(_0x5692f4(0x4a8) + _0x264fa0[_0x5692f4(0x3c1)]['name'] + ']!');
            });
            const _0x43e7c9 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x7bc));
            _0x43e7c9 && _0x17fca4 && (_0x43e7c9['onclick'] = _0x589b56 => {
                const _0x2b33f7 = _0x2de6ba;
                _0x589b56[_0x2b33f7(0x7a5)](), window['open'](_0x2b33f7(0x58e) + _0x17fca4['id'], _0xb8264e[_0x2b33f7(0x274)]), _0x93d2c1('💬\x20Opening\x20message\x20compose\x20to\x20Trader\x20[' + _0x17fca4[_0x2b33f7(0x3c1)][_0x2b33f7(0x102)] + ']!');
            });
            _0x16a7ad();
            const _0x559545 = {};
            _0x559545['isMinimized'] = !![], _0x559545[_0x2de6ba(0x573)] = _0xb2691a[_0x2de6ba(0x318)];
            const _0xfa86e8 = {};
            _0xfa86e8['detail'] = _0x559545, window[_0x2de6ba(0x138)](new CustomEvent(_0x4577e7[_0x2de6ba(0x408)], _0xfa86e8));
            return;
        }
        const _0x51e79a = _0x112493(), _0x3e870d = _0x158b70(), _0x10ac99 = {
                'sp': _0x4c3563('sp'),
                'fw': _0x4c3563('fw'),
                'ck': _0x4577e7[_0x2de6ba(0x435)](_0x4c3563, 'ck'),
                'tw': _0x4c3563('tw'),
                'any': _0x4577e7[_0x2de6ba(0x3eb)](_0x4844ba)
            }, _0x2cb2b1 = _0x4efbe3[_0x2de6ba(0x71f)](_0x290f46 => _0x10ac99[_0x290f46['feature']])['length'], _0x4a0ad6 = _0x10ac99['fw'] ? _0x23f20c() : 0x0, _0x3ad461 = _0x26e1e9 === _0x4577e7[_0x2de6ba(0x4cb)] ? _0xb2691a['isTradersPaused'] : _0x26e1e9 === _0x4577e7[_0x2de6ba(0x511)] ? _0xb2691a[_0x2de6ba(0x272)] : _0xb2691a[_0x2de6ba(0x594)];
        _0x2aed44['innerHTML'] = _0x2de6ba(0x359) + (_0x88a71e ? _0x2de6ba(0x1fe) : '') + _0x2de6ba(0x69c) + (_0x3ad461 ? _0x2de6ba(0x39f) : _0x4577e7[_0x2de6ba(0x791)]) + _0x2de6ba(0x26d) + (_0x3ad461 ? _0x2de6ba(0x20f) : _0x2de6ba(0x767)) + _0x2de6ba(0x295) + (_0x2cb2b1 ? _0x4577e7[_0x2de6ba(0xcf)] : _0x2de6ba(0x41f)) + _0x2de6ba(0x64d) + (_0x2cb2b1 ? _0x2de6ba(0x4bd) + _0x2cb2b1 + '/' + _0x4efbe3['length'] : '🛒\x20Store') + _0x2de6ba(0x742) + (_0x3ad461 ? _0x4577e7[_0x2de6ba(0x371)] : _0x4577e7['ObjPA']) + '\x20' + (_0x26e1e9 === _0x2de6ba(0x147) ? _0x2de6ba(0x869) : _0x4577e7['zpgEM'](_0x26e1e9, _0x4577e7[_0x2de6ba(0x511)]) ? 'Faction\x20Watch' : _0x4577e7[_0x2de6ba(0x3a8)]) + _0x2de6ba(0x560) + (_0x3ad461 ? '▶' : '⏸') + _0x2de6ba(0x2c1) + (_0x26e1e9 === _0x4577e7['nAphl'] ? _0x2de6ba(0x234) : '') + _0x2de6ba(0x38d) + _0x61dadc[_0x2de6ba(0x5a5)] + ')' + (_0x4577e7[_0x2de6ba(0x748)](_0x2b7517, 0x0) ? _0x2de6ba(0x384) + _0x2b7517 + _0x2de6ba(0x582) : '') + _0x2de6ba(0x86d) + (_0x26e1e9 === _0x2de6ba(0x147) ? _0x4577e7['XfKoi'] : '') + _0x2de6ba(0x2bf) + _0x178588[_0x2de6ba(0x5a5)] + ')' + (_0xb2691a[_0x2de6ba(0x768)] ? _0x4577e7[_0x2de6ba(0x7ce)] : '') + (_0x29495d > 0x0 ? _0x2de6ba(0x201) + _0x29495d + _0x2de6ba(0x582) : '') + _0x2de6ba(0x86d) + (_0x26e1e9 === _0x2de6ba(0x48c) ? 'active' : '') + _0x2de6ba(0x1a6) + _0x44c5cb['length'] + ')' + (_0xb2691a[_0x2de6ba(0x272)] ? _0x2de6ba(0x338) : '') + _0x2de6ba(0x5c2) + (_0x4a0ad6 > 0x0 ? _0x4577e7[_0x2de6ba(0x448)] : _0x2de6ba(0x34a)) + _0x2de6ba(0x82) + _0x4a0ad6 + _0x2de6ba(0x756) + (_0x10ac99['ck'] && _0xb2691a[_0x2de6ba(0x2f5)] ? _0x2de6ba(0x5fe) : _0x4577e7[_0x2de6ba(0x5ff)]) + ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22stakeout-chain-bar-info\x22\x20style=\x22font-weight:\x20600;\x20color:\x20#f8fafc;\x20font-size:\x2011px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🎯\x20<strong>Target\x20Selector:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x203px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22stakeout-chain-bar-dec\x22\x20type=\x22button\x22\x20title=\x22Previous\x20Target\x20ID\x20(-1)\x22\x20style=\x22background:\x20#1e293b;\x20border:\x201px\x20solid\x20#475569;\x20color:\x20#94a3b8;\x20border-radius:\x203px;\x20padding:\x202px\x206px;\x20font-size:\x2011px;\x20font-weight:\x20bold;\x20cursor:\x20pointer;\x22>−</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22stakeout-chain-quick-input\x22\x20title=\x22Target\x20ID\x20to\x20hit\x20next.\x20Edit\x20anytime\x20to\x20jump\x20to\x20another\x20punchbag!\x22\x20value=\x22' + (_0xb2691a['chainTargetCurrentId'] || _0xb2691a['chainTargetBaseId'] || 0x3e8fa0) + '\x22\x20style=\x22width:\x2072px;\x20background:\x20#0f172a;\x20border:\x201px\x20solid\x20#475569;\x20color:\x20#f8fafc;\x20font-size:\x2011px;\x20padding:\x202px\x204px;\x20border-radius:\x204px;\x20text-align:\x20center;\x20font-family:\x20monospace;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22stakeout-chain-bar-inc\x22\x20type=\x22button\x22\x20title=\x22Next\x20Target\x20ID\x20(+1)\x22\x20style=\x22background:\x20#1e293b;\x20border:\x201px\x20solid\x20#475569;\x20color:\x20#94a3b8;\x20border-radius:\x203px;\x20padding:\x202px\x206px;\x20font-size:\x2011px;\x20font-weight:\x20bold;\x20cursor:\x20pointer;\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-quickhit\x22\x20id=\x22stakeout-btn-quickhit\x22>⚡\x20Quick\x20Hit</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22stakeout-chain-pool-badge\x22\x20class=\x22stakeout-chain-pool-badge\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-add-bar\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22stakeout-input\x22\x20id=\x22stakeout-input-target\x22\x20placeholder=\x22' + (_0x4577e7[_0x2de6ba(0x416)](_0x26e1e9, _0x4577e7[_0x2de6ba(0x27d)]) ? _0x2de6ba(0x1bb) : _0x4577e7[_0x2de6ba(0x209)](_0x26e1e9, _0x2de6ba(0x48c)) ? _0x2de6ba(0x5b5) : _0x2de6ba(0x9d)) + '\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-primary\x22\x20id=\x22stakeout-btn-add\x22>+\x20Add</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22stakeout-settings-panel\x22\x20class=\x22stakeout-settings\x22\x20style=\x22display:\x20' + (_0x88a71e ? _0x4577e7[_0x2de6ba(0x2e5)] : _0x4577e7[_0x2de6ba(0x5ff)]) + _0x2de6ba(0x7c2) + (_0x10ac99[_0x2de6ba(0x729)] ? _0x2de6ba(0x701) + (_0xb2691a[_0x2de6ba(0x872)] ? _0x4577e7[_0x2de6ba(0x11a)] : '') + _0x2de6ba(0x7cf) + ((_0xb2691a[_0x2de6ba(0x7c8)] || _0x4577e7['acUDA']) === _0x4577e7[_0x2de6ba(0xee)] ? _0x4577e7['ZWfmo'] : '') + '>Ranked\x20Wars\x20Only\x20(100%\x20Confirmed\x20ED)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22all_wars\x22\x20' + ((_0xb2691a['edDetectionScope'] || _0x4577e7[_0x2de6ba(0xee)]) === _0x2de6ba(0x1a2) ? _0x2de6ba(0x345) : '') + _0x2de6ba(0x285) + (_0xb2691a[_0x2de6ba(0x273)] ? _0x4577e7[_0x2de6ba(0x11a)] : '') + _0x2de6ba(0x6fb) + (_0xb2691a[_0x2de6ba(0x690)] ? _0x2de6ba(0x570) : '') + _0x2de6ba(0x76a) + (_0xb2691a[_0x2de6ba(0x768)] ? _0x2de6ba(0x570) : '') + _0x2de6ba(0x58f) + (_0xb2691a[_0x2de6ba(0x54c)] ? _0x4577e7[_0x2de6ba(0x11a)] : '') + _0x2de6ba(0x1c4) + (_0xb2691a[_0x2de6ba(0x79b)] ? _0x4577e7[_0x2de6ba(0x11a)] : '') + _0x2de6ba(0x4ca) + ((_0xb2691a[_0x2de6ba(0x365)] || 0x5) === 0x2 ? _0x2de6ba(0x345) : '') + _0x2de6ba(0x76b) + (_0x4577e7[_0x2de6ba(0x8e)](_0xb2691a[_0x2de6ba(0x365)] || 0x5, 0x5) ? _0x4577e7[_0x2de6ba(0x7fd)] : '') + _0x2de6ba(0x857) + (_0x4577e7[_0x2de6ba(0x327)](_0xb2691a[_0x2de6ba(0x365)] || 0x5, 0xa) ? _0x2de6ba(0x345) : '') + '>10\x20Mins</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2215\x22\x20' + (_0x4577e7[_0x2de6ba(0x416)](_0xb2691a[_0x2de6ba(0x365)] || 0x5, 0xf) ? _0x4577e7[_0x2de6ba(0x7fd)] : '') + _0x2de6ba(0x43d) + ((_0xb2691a[_0x2de6ba(0x365)] || 0x5) === 0x1e ? _0x2de6ba(0x345) : '') + _0x2de6ba(0x263) + ((_0xb2691a[_0x2de6ba(0x365)] || 0x5) === 0x3c ? _0x4577e7[_0x2de6ba(0x7fd)] : '') + _0x2de6ba(0x1d2) + (_0x4577e7['lMsyt'](_0xb2691a['activeThresholdMin'] || 0x5, -0x1) ? _0x4577e7[_0x2de6ba(0x7fd)] : '') + _0x2de6ba(0x2ab) + (_0xb2691a['soundAlarm'] ? 'checked' : '') + _0x2de6ba(0x2ff) + (_0xb2691a['alarmVolume'] ?? 0x1) + '\x22\x20style=\x22width:\x20120px;\x20cursor:\x20pointer;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22stakeout-toggle-row\x22\x20title=\x22Live\x20Faction\x20Chain\x20Watcher\x20with\x20melodic\x20bell\x20chime\x20and\x20automated\x20target\x20progression\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🔗\x20Faction\x20Chain\x20Watcher</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22toggle-chain-watcher\x22\x20' + (_0xb2691a[_0x2de6ba(0x2f5)] ? _0x2de6ba(0x570) : '') + _0x2de6ba(0x783) + (_0xb2691a[_0x2de6ba(0x788)] ? _0x2de6ba(0x570) : '') + _0x2de6ba(0x334) + (_0xb2691a[_0x2de6ba(0x32b)] ? _0x4577e7[_0x2de6ba(0x11a)] : '') + _0x2de6ba(0x751) + (_0x5e2187() ? _0x2de6ba(0x345) : '') + _0x2de6ba(0x1af) + (!_0x5e2187() ? _0x2de6ba(0x345) : '') + _0x2de6ba(0x1ba) + _0x5c9f1e()[0x0] + _0x2de6ba(0x47a) + _0x4577e7[_0x2de6ba(0x193)](_0x5c9f1e)[0x1] + _0x2de6ba(0x5a1) + _0xffaf4f() + _0x2de6ba(0x17a) + _0x3103fb() + _0x2de6ba(0x127) + [
            0xf,
            0x14,
            0x1e,
            0x3c
        ][_0x2de6ba(0x33c)](_0x4f3f10 => '<option\x20value=\x22' + _0x4f3f10 + '\x22\x20' + ((parseInt(_0xb2691a[_0x2de6ba(0x415)], 0xa) || 0x14) === _0x4f3f10 ? _0x2de6ba(0x345) : '') + _0x2de6ba(0x6ec) + _0x4f3f10 + 's</option>')[_0x2de6ba(0x663)]('') + _0x2de6ba(0x411) : _0x2de6ba(0x67c) + _0x4efbe3[_0x2de6ba(0x33c)](_0x26b9ec => _0x2de6ba(0x840) + _0x26b9ec[_0x2de6ba(0x284)] + _0x2de6ba(0x41b) + _0x26b9ec['name'] + '</b>\x20(' + _0x26b9ec[_0x2de6ba(0x6f8)] + _0x2de6ba(0x56c))[_0x2de6ba(0x663)]('') + _0x2de6ba(0x3f5)) + _0x2de6ba(0x192) + ((_0xb2691a[_0x2de6ba(0x5ba)] || _0x2de6ba(0x160)) === _0x4577e7[_0x2de6ba(0x497)] ? _0x4577e7[_0x2de6ba(0x7fd)] : '') + _0x2de6ba(0x297) + (_0x4577e7[_0x2de6ba(0x5d1)](_0xb2691a[_0x2de6ba(0x5ba)] || _0x2de6ba(0x160), 'profile') ? _0x4577e7['ZWfmo'] : '') + _0x2de6ba(0x59a) + [
            0x1e,
            0x2d,
            0x3c,
            0x4b,
            0x5a
        ][_0x2de6ba(0x33c)](_0x911803 => _0x2de6ba(0x87) + _0x911803 + '\x22\x20' + (_0x449e49() === _0x911803 ? _0x2de6ba(0x345) : '') + '>' + _0x911803 + _0x2de6ba(0x63e) + (_0x911803 === 0x4b ? _0x2de6ba(0x132) : '') + '</option>')[_0x2de6ba(0x663)]('') + _0x2de6ba(0x486) + (_0xb2691a[_0x2de6ba(0x84)] ? _0x2de6ba(0x570) : '') + '\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20class=\x22stakeout-toggle-row\x22\x20title=\x22Screen\x20placement\x20for\x20the\x20Radar\x20dock\x20(Left\x20side\x20keeps\x20right\x20side\x20clear\x20for\x20Torn\x20chats)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>📍\x20Dock\x20Position</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22stakeout-position-select\x22\x20style=\x22background:\x20#1e293b;\x20border:\x201px\x20solid\x20#475569;\x20color:\x20#f8fafc;\x20padding:\x202px\x206px;\x20border-radius:\x204px;\x20font-size:\x2011px;\x20cursor:\x20pointer;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22left\x22\x20' + ((_0xb2691a[_0x2de6ba(0x318)] || _0x2de6ba(0x634)) === _0x4577e7[_0x2de6ba(0x199)] ? _0x2de6ba(0x345) : '') + '>Left\x20Side\x20(Default)</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22right\x22\x20' + ((_0xb2691a[_0x2de6ba(0x318)] || _0x2de6ba(0x634)) === _0x2de6ba(0x544) ? _0x2de6ba(0x345) : '') + '>Right\x20Side</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20API\x20KEY\x20(ALL\x20TIERS)\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-top:\x201px\x20solid\x20#334155;\x20margin-top:\x204px;\x20padding-top:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-weight:\x20800;\x20color:\x20#f8fafc;\x20margin-bottom:\x204px;\x20font-size:\x2011px;\x20display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>🔑\x20Torn\x20API\x20Key</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-icon\x22\x20id=\x22stakeout-btn-set-key\x22\x20style=\x22padding:\x202px\x208px;\x20font-size:\x2010px;\x20border-color:\x20#38bdf8;\x20color:\x20#38bdf8;\x22\x20title=\x22Configure\x20Torn\x20API\x20Key\x22>Change\x20Key</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2010.5px;\x20color:\x20#94a3b8;\x20line-height:\x201.4;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Active:\x20<strong\x20style=\x22color:\x20' + (_0x3e870d[_0x2de6ba(0x20c)] ? _0x2de6ba(0x22f) : _0x4577e7['oSQDH']) + _0x2de6ba(0x7b2) + _0x4577e7['LkrNv'](_0x1dfd16, _0x3e870d[_0x2de6ba(0x20c)]) + _0x2de6ba(0x498) + _0x3e870d[_0x2de6ba(0x12b)] + _0x2de6ba(0x32e) + (_0x3e870d['uid'] ? '<div\x20style=\x22color:\x20#64748b;\x22>Logged-in\x20User\x20ID:\x20[' + _0x3e870d[_0x2de6ba(0x802)] + _0x2de6ba(0x851) : '') + _0x2de6ba(0x352) + (_0x10ac99[_0x2de6ba(0x729)] ? _0x2de6ba(0x2ec) : '') + _0x2de6ba(0x33b) + _0xeb4109 + _0x2de6ba(0x2d2) + _0x51e79a + '/' + _0x449e49() + _0x2de6ba(0x5b8) + (_0x4b6b72 === 0x3e8 ? _0x4577e7[_0x2de6ba(0x62f)] : (_0xb2691a[_0x2de6ba(0x30a)] || 0x5) + 's') + '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (_0x10ac99[_0x2de6ba(0x729)] ? _0x2de6ba(0x298) + _0x4efbe3[_0x2de6ba(0x33c)](_0x33fcd0 => {
            const _0x9a3ca = _0x2de6ba, _0x573daa = _0x4577e7['XLAGc'](_0x568e86, _0x33fcd0[_0x9a3ca(0x5d3)]);
            return _0x9a3ca(0x249) + _0x33fcd0[_0x9a3ca(0x284)] + '\x20' + _0x33fcd0[_0x9a3ca(0x102)] + ':\x20' + (_0x573daa ? _0x9a3ca(0x165) + Math[_0x9a3ca(0x81c)]((_0x573daa - Date[_0x9a3ca(0x6d4)]() / 0x3e8) / 0x15180) + _0x9a3ca(0x79d) : _0x9a3ca(0x72b)) + _0x9a3ca(0x48d);
        })[_0x2de6ba(0x663)]('') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-primary\x22\x20id=\x22stakeout-btn-settings-warpass\x22\x20style=\x22width:\x20100%;\x20background:\x20linear-gradient(135deg,\x20#f59e0b,\x20#d97706);\x20border-color:\x20#f59e0b;\x20color:\x20#0f172a;\x20font-weight:\x20900;\x20font-size:\x2011px;\x20padding:\x206px;\x20border-radius:\x204px;\x20cursor:\x20pointer;\x20margin-top:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20🛒\x20Store:\x20Buy\x20/\x20Extend\x20with\x20Xanax\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : '') + _0x2de6ba(0x6cc) + (_0x4577e7[_0x2de6ba(0x2a3)](_0x26e1e9, _0x4577e7[_0x2de6ba(0x27d)]) ? _0x61dadc[_0x2de6ba(0x5a5)] === 0x0 ? '<div\x20class=\x22stakeout-empty\x22>' + (!_0x3e870d['key'] ? _0x2de6ba(0x49f) : '') + 'No\x20targets\x20on\x20watchlist.<br>Add\x20an\x20ID\x20above\x20or\x20click\x20\x22🎯\x22\x20on\x20any\x20profile!</div>' : _0x61dadc[_0x2de6ba(0x33c)]((_0x22f99d, _0x31a553) => {
            const _0x41f6be = _0x2de6ba;
            if (!_0x10ac99['sp'] && _0xb8264e[_0x41f6be(0x176)](_0x31a553, _0x4e644f))
                return _0x41f6be(0x61d) + _0x22f99d + _0x41f6be(0x47e) + _0x22f99d + _0x41f6be(0x17e);
            return '<div\x20id=\x22stakeout-card-' + _0x22f99d + _0x41f6be(0x5f2);
        })[_0x2de6ba(0x663)]('') : _0x26e1e9 === 'factions' ? !_0x10ac99['fw'] ? _0x2de6ba(0x277) + _0x2de6ba(0x135) : (_0xb2691a['isFactionsPaused'] ? _0x2de6ba(0x2b8) : '') + (_0x44c5cb[_0x2de6ba(0x5a5)] === 0x0 ? _0x2de6ba(0x7fb) + (!_0x3e870d[_0x2de6ba(0x20c)] ? _0x2de6ba(0x49f) : '') + 'No\x20faction\x20contracts\x20yet.<br>Add\x20the\x20client\x27s\x20Faction\x20ID\x20above\x20to\x20list\x20members\x20you\x20are\x20allowed\x20to\x20hit.</div>' : _0x44c5cb['map'](_0x194416 => _0x19b3ea(_0x194416))['join']('')) : !_0x10ac99['tw'] ? _0x2de6ba(0x670) + 'nd\x20TW)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' : _0x4577e7['hfhaJ'](_0xb2691a[_0x2de6ba(0x768)] ? _0x2de6ba(0x30b) : '', _0x178588[_0x2de6ba(0x5a5)] === 0x0 ? _0x2de6ba(0x7fb) + (!_0x3e870d[_0x2de6ba(0x20c)] ? _0x4577e7[_0x2de6ba(0x7e2)] : '') + _0x2de6ba(0x804) : _0x178588[_0x2de6ba(0x33c)](_0x4a60c3 => _0x2de6ba(0xec) + _0x4a60c3 + _0x2de6ba(0x5f2))[_0x2de6ba(0x663)](''))) + _0x2de6ba(0x686);
        const _0x4d1d0c = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x7f6)]), _0x3d770f = document[_0x2de6ba(0x39d)]('stakeout-tab-traders');
        _0x4d1d0c && (_0x4d1d0c[_0x2de6ba(0x1f7)] = () => {
            const _0x374776 = _0x2de6ba;
            _0x1277d0(_0x4577e7['nAphl']), _0x4577e7[_0x374776(0x4bf)](_0x176af6);
        });
        _0x3d770f && (_0x3d770f[_0x2de6ba(0x1f7)] = () => {
            _0x1277d0('traders'), _0x176af6();
        });
        const _0x34309f = document['getElementById'](_0x4577e7['YwusU']);
        _0x34309f && (_0x34309f[_0x2de6ba(0x1f7)] = () => {
            _0x1277d0('factions'), _0x176af6();
        });
        document[_0x2de6ba(0x65d)](_0x4577e7['xjqqV'])[_0x2de6ba(0x136)](_0x8ddc49 => {
            const _0x51de2c = _0x2de6ba;
            _0x8ddc49[_0x51de2c(0x1f7)] = () => _0x145293(_0x8ddc49[_0x51de2c(0x658)][_0x51de2c(0x23a)]);
        });
        const _0x12995c = document['getElementById']('stakeout-btn-unlock-factions');
        if (_0x12995c)
            _0x12995c['onclick'] = () => _0x145293('fw');
        const _0x444e4c = document[_0x2de6ba(0x39d)](_0x4577e7['zEXbb']);
        _0x444e4c && (_0x444e4c[_0x2de6ba(0x1f7)] = () => {
            const _0x5b17c5 = _0x2de6ba;
            _0xb2691a[_0x5b17c5(0x272)] = ![], _0x3f8be3(), _0x176af6(), _0xb8264e[_0x5b17c5(0x3c3)](_0x93d2c1, _0x5b17c5(0x6e6));
        });
        const _0x4742fc = document['getElementById'](_0x4577e7['DHenb']);
        _0x4742fc && (_0x4742fc[_0x2de6ba(0x1f7)] = () => {
            _0xb8264e['mTTBt'](_0x145293, 'tw');
        });
        const _0x38976f = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x812)]);
        _0x38976f && (_0x38976f[_0x2de6ba(0x1f7)] = () => {
            _0x145293();
        });
        const _0x5b62b1 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x2f0));
        _0x5b62b1 && (_0x5b62b1[_0x2de6ba(0x1f7)] = () => {
            const _0x4f9540 = _0x2de6ba;
            _0xb2691a['isMinimized'] = !![], _0x3f8be3(), _0x4577e7[_0x4f9540(0x489)](_0x176af6);
        });
        const _0x3fde99 = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x6d1)]);
        _0x3fde99 && (_0x3fde99[_0x2de6ba(0x1f7)] = _0x24a5a9 => {
            const _0x5bf960 = _0x2de6ba;
            _0x24a5a9[_0x5bf960(0x236)](), _0x50abf3();
        });
        const _0x2b6cef = document[_0x2de6ba(0x39d)](_0x2de6ba(0x331));
        _0x2b6cef && (_0x2b6cef['onchange'] = _0x29498c => {
            const _0x543da9 = _0x2de6ba, _0xcd00ec = _0xb8264e[_0x543da9(0x37f)](parseInt, _0x29498c[_0x543da9(0x1b6)][_0x543da9(0x1d5)], 0xa);
            if (_0xb8264e[_0x543da9(0x522)](_0xcd00ec, 0x0)) {
                _0xb2691a[_0x543da9(0xe8)] = _0xcd00ec, _0xb2691a[_0x543da9(0x139)] = _0xcd00ec, _0xb8264e[_0x543da9(0x7e4)](_0x3f8be3);
                const _0x277224 = document[_0x543da9(0x39d)](_0x543da9(0x2fe));
                if (_0x277224)
                    _0x277224[_0x543da9(0x1d5)] = _0xcd00ec;
                _0x16a7ad(), _0x93d2c1(_0x543da9(0x370) + _0xcd00ec);
            }
        }, _0x2b6cef[_0x2de6ba(0x1f7)] = _0x313e15 => _0x313e15[_0x2de6ba(0x7a5)]());
        const _0x254ae8 = document['getElementById'](_0x2de6ba(0xbe));
        _0x254ae8 && (_0x254ae8[_0x2de6ba(0x1f7)] = _0x2f1d8d => {
            const _0x50370f = _0x2de6ba;
            _0x2f1d8d[_0x50370f(0x7a5)]();
            let _0x107f7c = parseInt(_0xb2691a[_0x50370f(0xe8)], 0xa) || 0x3e8fa0;
            if (_0x4577e7[_0x50370f(0x458)](_0x107f7c, 0x1)) {
                _0xb2691a[_0x50370f(0xe8)] = _0x4577e7[_0x50370f(0x1ee)](_0x107f7c, 0x1), _0xb2691a[_0x50370f(0x139)] = _0x4577e7['qVxxw'](_0x107f7c, 0x1), _0x4577e7[_0x50370f(0x1bc)](_0x3f8be3);
                if (_0x2b6cef)
                    _0x2b6cef['value'] = _0xb2691a[_0x50370f(0xe8)];
                const _0x3cc3de = document[_0x50370f(0x39d)](_0x4577e7[_0x50370f(0x2c4)]);
                if (_0x3cc3de)
                    _0x3cc3de[_0x50370f(0x1d5)] = _0xb2691a['chainTargetCurrentId'];
                _0x4577e7[_0x50370f(0x6b9)](_0x16a7ad);
            }
        });
        const _0x51d771 = document['getElementById'](_0x4577e7[_0x2de6ba(0x4c4)]);
        _0x51d771 && (_0x51d771['onclick'] = _0x11eb7c => {
            const _0x4643bc = _0x2de6ba;
            _0x11eb7c[_0x4643bc(0x7a5)]();
            let _0x2d6c51 = _0x4577e7[_0x4643bc(0x7b6)](parseInt, _0xb2691a[_0x4643bc(0xe8)], 0xa) || 0x3e8fa0;
            _0xb2691a['chainTargetCurrentId'] = _0x2d6c51 + 0x1, _0xb2691a[_0x4643bc(0x139)] = _0x4577e7[_0x4643bc(0x26c)](_0x2d6c51, 0x1), _0x3f8be3();
            if (_0x2b6cef)
                _0x2b6cef[_0x4643bc(0x1d5)] = _0xb2691a[_0x4643bc(0xe8)];
            const _0x388a4d = document[_0x4643bc(0x39d)](_0x4643bc(0x2fe));
            if (_0x388a4d)
                _0x388a4d[_0x4643bc(0x1d5)] = _0xb2691a[_0x4643bc(0xe8)];
            _0x16a7ad();
        });
        const _0x38ec47 = document[_0x2de6ba(0x39d)](_0x2de6ba(0xbb));
        _0x38ec47 && (_0x38ec47[_0x2de6ba(0x1f7)] = _0x55d981 => {
            const _0x28e4df = _0x2de6ba;
            _0x55d981[_0x28e4df(0x7a5)](), _0x145293();
        });
        const _0x3bf6cd = document['getElementById'](_0x2de6ba(0x1e2));
        _0x3bf6cd && (_0x3bf6cd[_0x2de6ba(0x1f7)] = () => {
            const _0x23e281 = _0x2de6ba;
            if (_0x4577e7[_0x23e281(0x2b1)](_0x26e1e9, _0x4577e7[_0x23e281(0x4cb)]))
                _0xb2691a['isTradersPaused'] = !_0xb2691a[_0x23e281(0x768)], _0x3f8be3(), _0x176af6(), _0x4577e7[_0x23e281(0xc4)](_0x93d2c1, _0xb2691a[_0x23e281(0x768)] ? _0x23e281(0x428) : _0x4577e7[_0x23e281(0x5b7)]);
            else
                _0x4577e7[_0x23e281(0x85b)](_0x26e1e9, _0x23e281(0x48c)) ? (_0xb2691a['isFactionsPaused'] = !_0xb2691a[_0x23e281(0x272)], _0x3f8be3(), _0x4577e7[_0x23e281(0x712)](_0x176af6), _0x93d2c1(_0xb2691a['isFactionsPaused'] ? _0x23e281(0x554) : _0x4577e7[_0x23e281(0x803)])) : (_0xb2691a[_0x23e281(0x594)] = !_0xb2691a['isPaused'], _0x3f8be3(), _0x176af6(), _0x93d2c1(_0xb2691a['isPaused'] ? _0x23e281(0x190) : '▶\x20Target\x20radar\x20RESUMED.'));
        });
        const _0x1a4ab8 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x1d8));
        _0x1a4ab8 && (_0x1a4ab8[_0x2de6ba(0x1f7)] = () => {
            const _0x4bd184 = _0x2de6ba;
            _0xb2691a[_0x4bd184(0x768)] = ![], _0x3f8be3(), _0x176af6(), _0xb8264e[_0x4bd184(0x3c3)](_0x93d2c1, _0x4bd184(0x773));
        });
        const _0x5d4928 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x800)), _0x5dd8b2 = document[_0x2de6ba(0x39d)]('stakeout-btn-settings');
        _0x5dd8b2 && _0x5d4928 && (_0x5dd8b2[_0x2de6ba(0x1f7)] = () => {
            const _0x38553 = _0x2de6ba;
            _0x88a71e = _0x4577e7['lMsyt'](_0x5d4928['style'][_0x38553(0x36b)], 'none'), _0x5d4928[_0x38553(0x2c5)][_0x38553(0x36b)] = _0x88a71e ? _0x38553(0x5fe) : _0x38553(0x34a), _0x5dd8b2[_0x38553(0x320)](_0x38553(0x5b1))?.[_0x38553(0x5a7)][_0x38553(0x525)](_0x4577e7['vgoyN'], _0x88a71e);
        });
        const _0x4b2529 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x7a9));
        _0x4b2529 && (_0x4b2529[_0x2de6ba(0x74)] = _0x2126c6 => {
            const _0x1e2b39 = _0x2de6ba;
            _0xb2691a[_0x1e2b39(0x872)] = _0x2126c6[_0x1e2b39(0x1b6)][_0x1e2b39(0x570)], _0x3f8be3(), _0xb8264e[_0x1e2b39(0x487)](_0x93d2c1, _0xb2691a[_0x1e2b39(0x872)] ? _0x1e2b39(0x3d2) : '⚠️\x20Auto-Pause\x20on\x20Early\x20Discharge\x20disabled.');
            if (_0x26e1e9 === _0xb8264e['XDJHj'])
                _0x61dadc[_0x1e2b39(0x136)](_0x34452f => _0x70efbf(_0x34452f));
            _0x58accf();
        });
        const _0x535ede = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x640)]);
        _0x535ede && (_0x535ede[_0x2de6ba(0x74)] = _0x26d429 => {
            const _0x466dc0 = _0x2de6ba, _0x1866b4 = _0x466dc0(0xa0)[_0x466dc0(0x79f)]('|');
            let _0x4e5584 = 0x0;
            while (!![]) {
                switch (_0x1866b4[_0x4e5584++]) {
                case '0':
                    _0xb2691a[_0x466dc0(0x7c8)] = _0x26d429[_0x466dc0(0x1b6)][_0x466dc0(0x1d5)];
                    continue;
                case '1':
                    _0xb8264e[_0x466dc0(0x3c3)](_0x93d2c1, _0xb8264e[_0x466dc0(0x6f2)](_0xb2691a['edDetectionScope'], 'ranked_only') ? '⚡\x20ED\x20Scope:\x20Ranked\x20Wars\x20Only\x20(Territory\x20walls\x20require\x201-click\x20on-wall\x20toggle).' : _0xb8264e[_0x466dc0(0x2c8)]);
                    continue;
                case '2':
                    if (_0xb8264e[_0x466dc0(0x24d)](_0x26e1e9, _0x466dc0(0x787)))
                        _0x61dadc[_0x466dc0(0x136)](_0x2e638a => _0x70efbf(_0x2e638a));
                    continue;
                case '3':
                    _0x3f8be3();
                    continue;
                case '4':
                    _0x26d429[_0x466dc0(0x7a5)]();
                    continue;
                }
                break;
            }
        });
        const _0x288a37 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x397));
        if (_0x288a37)
            _0x288a37['onchange'] = _0x1abfc7 => {
                const _0x4d9165 = _0x2de6ba;
                _0xb2691a[_0x4d9165(0x273)] = _0x1abfc7[_0x4d9165(0x1b6)][_0x4d9165(0x570)], _0x3f8be3();
            };
        const _0xa4bc14 = document['getElementById'](_0x4577e7[_0x2de6ba(0x41c)]);
        if (_0xa4bc14)
            _0xa4bc14[_0x2de6ba(0x74)] = _0x2960f2 => {
                const _0x1d8eab = _0x2de6ba;
                _0xb2691a[_0x1d8eab(0x690)] = _0x2960f2[_0x1d8eab(0x1b6)][_0x1d8eab(0x570)], _0x4577e7[_0x1d8eab(0x7a4)](_0x3f8be3);
            };
        const _0x4ecccc = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x1c3)]);
        _0x4ecccc && (_0x4ecccc[_0x2de6ba(0x74)] = _0xfdbe44 => {
            const _0x491818 = _0x2de6ba;
            _0xb2691a[_0x491818(0x768)] = _0xfdbe44[_0x491818(0x1b6)][_0x491818(0x570)], _0x3f8be3(), _0x4577e7[_0x491818(0x4bf)](_0x176af6), _0x93d2c1(_0xb2691a[_0x491818(0x768)] ? _0x4577e7[_0x491818(0xc3)] : _0x4577e7['Zdjex']);
        });
        const _0xc0fa5c = document[_0x2de6ba(0x39d)]('toggle-alert-illegal');
        _0xc0fa5c && (_0xc0fa5c['onchange'] = _0x2e1c80 => {
            const _0x6fca33 = _0x2de6ba;
            _0xb2691a[_0x6fca33(0x54c)] = _0x2e1c80['target'][_0x6fca33(0x570)], _0x3f8be3(), _0x4577e7[_0x6fca33(0x7b5)](_0x93d2c1, _0xb2691a[_0x6fca33(0x54c)] ? _0x4577e7[_0x6fca33(0x2fc)] : _0x6fca33(0x281));
        });
        const _0x43448d = document[_0x2de6ba(0x39d)](_0x2de6ba(0x67e));
        _0x43448d && (_0x43448d['onchange'] = _0x1dac7b => {
            const _0x33e280 = _0x2de6ba;
            _0xb2691a[_0x33e280(0x79b)] = _0x1dac7b[_0x33e280(0x1b6)]['checked'], _0xb8264e[_0x33e280(0x1f6)](_0x3f8be3), _0xb8264e[_0x33e280(0x487)](_0x93d2c1, _0xb2691a[_0x33e280(0x79b)] ? '📸\x20Evidence\x20Auto-Screenshot\x20ENABLED.' : _0xb8264e['ClVVg']);
        });
        const _0x46b01e = document['getElementById'](_0x4577e7[_0x2de6ba(0x5e1)]);
        _0x46b01e && (_0x46b01e[_0x2de6ba(0x1f7)] = () => {
            const _0x4e2c6a = _0x2de6ba;
            _0x46b5d3(_0xb8264e[_0x4e2c6a(0x1e0)]);
            const _0x210530 = {};
            _0x210530['id'] = _0x4e2c6a(0x7a1), _0x210530['name'] = _0x4e2c6a(0x341);
            const _0xc7158b = {
                    'targetId': '4449883',
                    'target': {
                        'name': _0xb8264e[_0x4e2c6a(0x6c9)],
                        'level': 0x2a,
                        'factionId': 0x2090,
                        'factionName': _0x4e2c6a(0x10a),
                        'state': _0xb8264e[_0x4e2c6a(0x47b)],
                        'desc': 'In\x20hospital\x20for\x2028\x20mins',
                        'details': _0xb8264e[_0x4e2c6a(0x3f4)],
                        'until': _0xb8264e[_0x4e2c6a(0x311)](Math[_0x4e2c6a(0x3ee)](Date[_0x4e2c6a(0x6d4)]() / 0x3e8), 0x690),
                        'online': _0x4e2c6a(0x5ce),
                        'lastActionRel': _0x4e2c6a(0x52d),
                        'lastActionTs': Math[_0x4e2c6a(0x3ee)](Date[_0x4e2c6a(0x6d4)]() / 0x3e8) - 0x348,
                        'warActive': !![]
                    },
                    'previous': {
                        'name': _0x4e2c6a(0x7f8),
                        'state': _0x4e2c6a(0x173),
                        'online': 'Offline',
                        'lastActionRel': _0xb8264e[_0x4e2c6a(0x140)],
                        'lastActionTs': Math[_0x4e2c6a(0x3ee)](_0xb8264e[_0x4e2c6a(0x376)](Date[_0x4e2c6a(0x6d4)](), 0x3e8)) - 0x348,
                        'warActive': !![]
                    },
                    'attacker': _0x210530,
                    'violations': [
                        _0xb8264e[_0x4e2c6a(0x4c8)],
                        _0xb8264e['EDQHv']
                    ],
                    'timestamp': Math[_0x4e2c6a(0x3ee)](Date['now']() / 0x3e8),
                    'incidentId': 'BR-TEST-' + Math[_0x4e2c6a(0x3ee)](_0xb8264e['BupbZ'](Date['now'](), 0x186a0))
                }, _0x31af1d = _0x5d84cd(_0xc7158b);
            _0x31af1d && _0x30218d(_0xc7158b, _0x31af1d), _0x93d2c1(_0x4e2c6a(0x512));
        });
        const _0x1bdb00 = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0xa8)]);
        _0x1bdb00 && (_0x1bdb00[_0x2de6ba(0x74)] = _0xc7acba => {
            const _0x1230e5 = _0x2de6ba;
            _0xb2691a['attackDestination'] = _0xc7acba[_0x1230e5(0x1b6)][_0x1230e5(0x1d5)], _0x4577e7[_0x1230e5(0x31c)](_0x3f8be3), _0x93d2c1(_0xb2691a[_0x1230e5(0x5ba)] === _0x4577e7[_0x1230e5(0x580)] ? _0x1230e5(0x42e) : _0x4577e7[_0x1230e5(0x185)]);
            if (_0x4577e7[_0x1230e5(0x2e4)](_0x26e1e9, _0x4577e7[_0x1230e5(0x27d)]))
                _0x61dadc[_0x1230e5(0x136)](_0x1682bc => _0x70efbf(_0x1682bc));
        });
        const _0x26a349 = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x738)]);
        _0x26a349 && (_0x26a349[_0x2de6ba(0x74)] = _0xb88f81 => {
            const _0x46a0f1 = _0x2de6ba, _0x26c735 = _0x46a0f1(0x5a4)[_0x46a0f1(0x79f)]('|');
            let _0x2dee13 = 0x0;
            while (!![]) {
                switch (_0x26c735[_0x2dee13++]) {
                case '0':
                    _0xb2691a[_0x46a0f1(0x365)] = parseInt(_0xb88f81[_0x46a0f1(0x1b6)][_0x46a0f1(0x1d5)], 0xa);
                    continue;
                case '1':
                    _0x3f8be3();
                    continue;
                case '2':
                    _0x93d2c1(_0x4577e7['tdduk'](_0xb2691a[_0x46a0f1(0x365)], -0x1) ? _0x4577e7[_0x46a0f1(0x3f9)] : _0x46a0f1(0x7a) + _0xb2691a[_0x46a0f1(0x365)] + _0x46a0f1(0x638));
                    continue;
                case '3':
                    if (_0x26e1e9 === _0x46a0f1(0x787))
                        _0x61dadc[_0x46a0f1(0x136)](_0x387896 => _0x70efbf(_0x387896));
                    continue;
                case '4':
                    _0xb88f81[_0x46a0f1(0x7a5)]();
                    continue;
                }
                break;
            }
        });
        const _0x46db3d = document['getElementById'](_0x4577e7[_0x2de6ba(0x28e)]);
        if (_0x46db3d)
            _0x46db3d[_0x2de6ba(0x74)] = _0x4e5147 => {
                const _0x4773ec = _0x2de6ba;
                _0xb2691a[_0x4773ec(0x2f4)] = _0x4e5147[_0x4773ec(0x1b6)][_0x4773ec(0x570)], _0x4577e7[_0x4773ec(0x7bb)](_0x3f8be3);
            };
        const _0x381aa2 = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x93)]);
        if (_0x381aa2)
            _0x381aa2[_0x2de6ba(0x74)] = _0x2ad090 => {
                const _0x27cce5 = _0x2de6ba;
                _0xb2691a[_0x27cce5(0x48f)] = _0x2ad090[_0x27cce5(0x1b6)][_0x27cce5(0x570)], _0x4577e7[_0x27cce5(0x715)](_0x3f8be3);
            };
        const _0x180386 = document[_0x2de6ba(0x39d)]('toggle-alert-fullenergy');
        _0x180386 && (_0x180386[_0x2de6ba(0x74)] = _0x49b26d => {
            const _0x84ca5 = _0x2de6ba;
            _0xb2691a[_0x84ca5(0x6cf)] = _0x49b26d[_0x84ca5(0x1b6)][_0x84ca5(0x570)], _0x3f8be3();
            if (_0x49b26d[_0x84ca5(0x1b6)][_0x84ca5(0x570)])
                _0x46b5d3(_0x84ca5(0x387));
        });
        const _0x4931b4 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x109));
        _0x4931b4 && (_0x4931b4[_0x2de6ba(0x74)] = _0x5bd965 => {
            const _0x142488 = _0x2de6ba;
            _0xb2691a[_0x142488(0x200)] = _0x5bd965['target'][_0x142488(0x570)], _0x3f8be3();
            if (_0x5bd965[_0x142488(0x1b6)]['checked'])
                _0xb8264e[_0x142488(0x412)](_0x46b5d3, _0x142488(0x387));
        });
        const _0x4e8c68 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x703));
        _0x4e8c68 && (_0x4e8c68[_0x2de6ba(0x74)] = _0x1787c5 => {
            const _0x201b0d = _0x2de6ba;
            _0xb2691a[_0x201b0d(0x2f5)] = _0x1787c5[_0x201b0d(0x1b6)][_0x201b0d(0x570)], _0x3f8be3(), _0x16a7ad();
        });
        const _0x22039e = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x615)]);
        _0x22039e && (_0x22039e['onchange'] = _0x4f7bd3 => {
            const _0x1b4f89 = _0x2de6ba;
            _0xb2691a['chainAlertBell'] = _0x4f7bd3[_0x1b4f89(0x1b6)][_0x1b4f89(0x570)], _0x3f8be3();
            if (_0x4f7bd3[_0x1b4f89(0x1b6)][_0x1b4f89(0x570)])
                _0x46b5d3(_0x1b4f89(0x387));
        });
        const _0x151d80 = document['getElementById'](_0x2de6ba(0x6c1));
        _0x151d80 && (_0x151d80[_0x2de6ba(0x74)] = _0xa819ca => {
            const _0x34ad35 = _0x2de6ba, _0x273f37 = parseInt(_0xa819ca[_0x34ad35(0x1b6)][_0x34ad35(0x1d5)], 0xa);
            _0xb8264e[_0x34ad35(0x522)](_0x273f37, 0x0) && (_0xb2691a[_0x34ad35(0x10c)] = _0x273f37, _0xb8264e['QkuDg'](_0x3f8be3), _0x93d2c1(_0x34ad35(0x7c6) + _0x273f37));
        });
        const _0x128575 = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x1dd)]);
        _0x128575 && (_0x128575[_0x2de6ba(0x1f7)] = () => {
            const _0xff2ae5 = _0x2de6ba, _0x5e43c1 = _0xb8264e[_0xff2ae5(0x557)](parseInt, _0x151d80 ? _0x151d80[_0xff2ae5(0x1d5)] : _0xb2691a[_0xff2ae5(0x10c)], 0xa) || 0x3e8fa0;
            _0xb2691a[_0xff2ae5(0x10c)] = _0x5e43c1, _0xb2691a[_0xff2ae5(0xe8)] = _0x5e43c1, _0x3f8be3();
            const _0x2b5054 = document[_0xff2ae5(0x39d)](_0xff2ae5(0x2fe));
            if (_0x2b5054)
                _0x2b5054['value'] = _0x5e43c1;
            if (_0x2b6cef)
                _0x2b6cef[_0xff2ae5(0x1d5)] = _0x5e43c1;
            _0x16a7ad(), _0xb8264e['mTTBt'](_0x93d2c1, _0xff2ae5(0x677) + _0x5e43c1 + _0xff2ae5(0x728) + _0x5e43c1 + ')');
        });
        const _0xdf1735 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x2fe));
        _0xdf1735 && (_0xdf1735[_0x2de6ba(0x74)] = _0x25c979 => {
            const _0x1844c2 = _0x2de6ba, _0x1f5b5b = parseInt(_0x25c979[_0x1844c2(0x1b6)][_0x1844c2(0x1d5)], 0xa);
            if (_0x4577e7[_0x1844c2(0x69f)](_0x1f5b5b, 0x0)) {
                const _0x962222 = _0x4577e7[_0x1844c2(0x3d3)][_0x1844c2(0x79f)]('|');
                let _0x211a06 = 0x0;
                while (!![]) {
                    switch (_0x962222[_0x211a06++]) {
                    case '0':
                        _0xb2691a[_0x1844c2(0xe8)] = _0x1f5b5b;
                        continue;
                    case '1':
                        if (_0x2b6cef)
                            _0x2b6cef[_0x1844c2(0x1d5)] = _0x1f5b5b;
                        continue;
                    case '2':
                        _0x16a7ad();
                        continue;
                    case '3':
                        _0xb2691a['chainManualNextId'] = _0x1f5b5b;
                        continue;
                    case '4':
                        _0x3f8be3();
                        continue;
                    }
                    break;
                }
            }
        });
        const _0x3055a5 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x26a));
        _0x3055a5 && (_0x3055a5[_0x2de6ba(0x1f7)] = () => {
            const _0x2f513a = _0x2de6ba;
            let _0x1fb94f = parseInt(_0xb2691a[_0x2f513a(0xe8)], 0xa) || 0x3e8fa0;
            if (_0x1fb94f > 0x1) {
                const _0x4c4ee9 = _0xb8264e['PpOGY']['split']('|');
                let _0x30dbdd = 0x0;
                while (!![]) {
                    switch (_0x4c4ee9[_0x30dbdd++]) {
                    case '0':
                        _0xb2691a['chainManualNextId'] = _0x1fb94f - 0x1;
                        continue;
                    case '1':
                        _0xb2691a[_0x2f513a(0xe8)] = _0x1fb94f - 0x1;
                        continue;
                    case '2':
                        _0x16a7ad();
                        continue;
                    case '3':
                        if (_0x2b6cef)
                            _0x2b6cef[_0x2f513a(0x1d5)] = _0xb2691a[_0x2f513a(0xe8)];
                        continue;
                    case '4':
                        _0xb8264e[_0x2f513a(0x7e4)](_0x3f8be3);
                        continue;
                    case '5':
                        if (_0xdf1735)
                            _0xdf1735[_0x2f513a(0x1d5)] = _0xb2691a[_0x2f513a(0xe8)];
                        continue;
                    }
                    break;
                }
            }
        });
        const _0x5093af = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x794)]);
        _0x5093af && (_0x5093af['onclick'] = () => {
            const _0x4a5a9f = _0x2de6ba;
            let _0x2cecfc = parseInt(_0xb2691a[_0x4a5a9f(0xe8)], 0xa) || 0x3e8fa0;
            _0xb2691a[_0x4a5a9f(0xe8)] = _0x2cecfc + 0x1, _0xb2691a[_0x4a5a9f(0x139)] = _0xb8264e[_0x4a5a9f(0x311)](_0x2cecfc, 0x1), _0x3f8be3();
            if (_0xdf1735)
                _0xdf1735[_0x4a5a9f(0x1d5)] = _0xb2691a['chainTargetCurrentId'];
            if (_0x2b6cef)
                _0x2b6cef[_0x4a5a9f(0x1d5)] = _0xb2691a[_0x4a5a9f(0xe8)];
            _0xb8264e[_0x4a5a9f(0x82f)](_0x16a7ad);
        });
        const _0x39bab7 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x4d4));
        _0x39bab7 && (_0x39bab7[_0x2de6ba(0x1f7)] = () => {
            const _0xf4994c = _0x2de6ba;
            _0xb2691a['chainTargetCurrentId'] = _0xb2691a[_0xf4994c(0x10c)] || 0x3e8fa0, _0x3f8be3();
            if (_0xdf1735)
                _0xdf1735[_0xf4994c(0x1d5)] = _0xb2691a[_0xf4994c(0xe8)];
            if (_0x2b6cef)
                _0x2b6cef[_0xf4994c(0x1d5)] = _0xb2691a['chainTargetCurrentId'];
            _0x16a7ad(), _0xb8264e[_0xf4994c(0x3c3)](_0x93d2c1, _0xf4994c(0x3d9) + _0xb2691a['chainTargetCurrentId']);
        });
        const _0x42f66f = document[_0x2de6ba(0x39d)]('toggle-sound-alarm');
        if (_0x42f66f)
            _0x42f66f[_0x2de6ba(0x74)] = _0x33cd1e => {
                const _0x1deba1 = _0x2de6ba;
                _0xb2691a['soundAlarm'] = _0x33cd1e[_0x1deba1(0x1b6)][_0x1deba1(0x570)], _0xb8264e[_0x1deba1(0x82f)](_0x3f8be3);
            };
        const _0x4a66e0 = document['getElementById'](_0x4577e7[_0x2de6ba(0x6a0)]), _0x57172a = document[_0x2de6ba(0x39d)](_0x2de6ba(0x1fd));
        _0x4a66e0 && _0x57172a && (_0x4a66e0[_0x2de6ba(0x1cc)] = _0x48d9ee => {
            const _0x3d488d = _0x2de6ba, _0x1cb3b1 = parseInt(_0x48d9ee[_0x3d488d(0x1b6)][_0x3d488d(0x1d5)], 0xa);
            _0xb2691a[_0x3d488d(0x1ad)] = _0x1cb3b1 / 0x64, _0x57172a[_0x3d488d(0x235)] = _0x1cb3b1 + '%', _0x4577e7[_0x3d488d(0x6f3)](_0x3f8be3);
        });
        const _0x2300e9 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x12e));
        _0x2300e9 && (_0x2300e9[_0x2de6ba(0x74)] = _0x3881b7 => {
            const _0x4fd2da = _0x2de6ba;
            _0xb2691a[_0x4fd2da(0x319)] = _0x3881b7['target'][_0x4fd2da(0x1d5)], _0xb8264e['GPgqp'](_0x3f8be3), _0xb8264e[_0x4fd2da(0x380)](_0x46b5d3, _0x4fd2da(0x66b));
        });
        const _0x14b2e6 = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x766)]);
        _0x14b2e6 && (_0x14b2e6['onchange'] = _0xf51395 => {
            const _0x14895b = _0x2de6ba;
            _0xb2691a[_0x14895b(0x141)] = _0xf51395[_0x14895b(0x1b6)]['checked'], _0x3f8be3(), _0xf51395[_0x14895b(0x1b6)][_0x14895b(0x570)] && Notification[_0x14895b(0x5e0)] !== _0xb8264e[_0x14895b(0x55c)] && Notification['requestPermission']();
        });
        const _0x542bc0 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x78e));
        if (_0x542bc0)
            _0x542bc0[_0x2de6ba(0x74)] = _0x197784 => {
                const _0x2e3a98 = _0x2de6ba;
                _0xb2691a[_0x2e3a98(0x84)] = _0x197784[_0x2e3a98(0x1b6)]['checked'], _0xb8264e[_0x2e3a98(0x6be)](_0x3f8be3);
            };
        const _0x57fd9b = document[_0x2de6ba(0x39d)](_0x2de6ba(0x864));
        _0x57fd9b && (_0x57fd9b[_0x2de6ba(0x74)] = _0x52b46a => {
            const _0x1c6c27 = _0x2de6ba;
            _0xb2691a[_0x1c6c27(0x318)] = _0x52b46a['target'][_0x1c6c27(0x1d5)], _0x4577e7[_0x1c6c27(0xa4)](_0x3f8be3), _0x4577e7[_0x1c6c27(0x262)](_0x4d543f), _0x93d2c1('Dock\x20positioned\x20on\x20' + (_0x4577e7[_0x1c6c27(0x1c5)](_0xb2691a[_0x1c6c27(0x318)], _0x4577e7[_0x1c6c27(0x45a)]) ? _0x1c6c27(0x77) : _0x1c6c27(0x98)) + '\x20side.');
        });
        const _0x3d2fd4 = document[_0x2de6ba(0x39d)](_0x2de6ba(0x5fb));
        if (_0x3d2fd4)
            _0x3d2fd4[_0x2de6ba(0x1f7)] = () => _0x44e0a8();
        const _0xc229ac = document['getElementById'](_0x2de6ba(0x63d));
        if (_0xc229ac)
            _0xc229ac[_0x2de6ba(0x1f7)] = () => _0x46b5d3(_0x2de6ba(0x66b));
        const _0x531f1f = document['getElementById'](_0x2de6ba(0x3ba));
        if (_0x531f1f)
            _0x531f1f[_0x2de6ba(0x1f7)] = () => _0x46b5d3(_0x2de6ba(0x387));
        const _0x27bd02 = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x43b)]);
        if (_0x27bd02)
            _0x27bd02[_0x2de6ba(0x1f7)] = () => _0x46b5d3(_0x2de6ba(0x18f));
        const _0x507205 = document['getElementById']('stakeout-btn-check-update');
        if (_0x507205)
            _0x507205[_0x2de6ba(0x1f7)] = () => _0x3f6f63(!![]);
        const _0x1dbd0d = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x600)]), _0x48d8fa = document[_0x2de6ba(0x39d)](_0x4577e7[_0x2de6ba(0x6e1)]);
        if (_0x48d8fa && _0x1dbd0d) {
            const _0x1225a2 = () => {
                const _0x22cc76 = _0x2de6ba, _0x242ffe = _0x1dbd0d[_0x22cc76(0x1d5)][_0x22cc76(0x72)]();
                if (!_0x242ffe)
                    return;
                const _0x713e62 = _0x242ffe['match'](/(?:XID=|user2ID=|[?&]ID=|^)(\d+)/i), _0x12d321 = _0x713e62 ? _0x713e62[0x1] : isNaN(_0x242ffe) ? null : _0x242ffe;
                if (_0x12d321) {
                    if (_0x4577e7['Kgxwr'](_0x26e1e9, _0x22cc76(0x787)))
                        _0x4577e7[_0x22cc76(0x86c)](_0xdf862b, _0x12d321);
                    else
                        _0x26e1e9 === _0x4577e7[_0x22cc76(0x511)] ? _0x4577e7[_0x22cc76(0x584)](_0x17dd37, _0x12d321) : _0x43eabb(_0x12d321);
                    _0x1dbd0d[_0x22cc76(0x1d5)] = '';
                } else
                    _0x93d2c1(_0x22cc76(0x40d));
            };
            _0x48d8fa[_0x2de6ba(0x1f7)] = _0x1225a2, _0x1dbd0d[_0x2de6ba(0x596)] = _0x5c8523 => {
                const _0x1894c0 = _0x2de6ba;
                if (_0x5c8523[_0x1894c0(0x20c)] === _0x1894c0(0x80c))
                    _0x1225a2();
            };
        }
        if (_0x26e1e9 === _0x4577e7[_0x2de6ba(0x27d)])
            _0x61dadc[_0x2de6ba(0x136)](_0xa5aa5c => _0x70efbf(_0xa5aa5c));
        else
            _0x4577e7[_0x2de6ba(0x630)](_0x26e1e9, _0x4577e7[_0x2de6ba(0x511)]) ? (_0x379b82(document[_0x2de6ba(0x39d)](_0x2de6ba(0x36f))), _0x44c5cb[_0x2de6ba(0x136)](_0x1091b6 => _0x2c2af8(_0x1091b6['id']))) : _0x178588[_0x2de6ba(0x136)](_0x528b5a => _0x2e01b9(_0x528b5a));
        _0x140837(), _0x4577e7[_0x2de6ba(0x715)](_0x16a7ad);
        const _0x44c059 = {};
        _0x44c059[_0x2de6ba(0x709)] = ![], _0x44c059[_0x2de6ba(0x573)] = _0xb2691a[_0x2de6ba(0x318)];
        const _0x24c340 = {};
        _0x24c340[_0x2de6ba(0x48b)] = _0x44c059, window[_0x2de6ba(0x138)](new CustomEvent(_0x4577e7[_0x2de6ba(0x408)], _0x24c340));
    }
    function _0x58accf() {
        const _0x2bb721 = _0x1fbd97;
        if (!_0xb2691a[_0x2bb721(0x709)])
            return;
        _0x176af6();
    }
    function _0x8d48d4(_0x307287) {
        const _0x333d74 = _0x1fbd97;
        if (_0x4577e7[_0x333d74(0x2d8)](_0x307287, 0x0))
            return _0x4577e7[_0x333d74(0x2cf)];
        if (_0x4577e7[_0x333d74(0x843)](_0x307287, 0x3c))
            return _0x307287 + 's';
        const _0x20b430 = Math['floor'](_0x307287 / 0x3c), _0xf427a6 = Math[_0x333d74(0x3ee)](_0x20b430 / 0x3c), _0x307f83 = _0x20b430 % 0x3c, _0xb87e9a = _0x307287 % 0x3c;
        if (_0xf427a6 > 0x0)
            return _0xf427a6 + 'h\x20' + _0x307f83 + 'm\x20' + (_0xb87e9a < 0xa ? '0' : '') + _0xb87e9a + 's';
        return _0x307f83 + 'm\x20' + (_0x4577e7['IXWFc'](_0xb87e9a, 0xa) ? '0' : '') + _0xb87e9a + 's';
    }
    function _0x5066bd(_0x404855) {
        const _0x5c58b9 = _0x1fbd97;
        if (_0x404855 <= 0x0)
            return '0m';
        if (_0x404855 < 0xe10)
            return Math[_0x5c58b9(0xe3)](_0x404855 / 0x3c) + 'm';
        const _0x26d638 = (_0x404855 / 0xe10)[_0x5c58b9(0x4b9)](0x1);
        return _0x26d638 + 'h';
    }
    function _0x70efbf(_0x15212f) {
        const _0x17b4a1 = _0x1fbd97, _0x363c6b = {
                'ibXKp': function (_0x35c98d, _0xf4585d, _0x19b00d) {
                    const _0x396248 = _0x5ca8;
                    return _0x4577e7[_0x396248(0x7b6)](_0x35c98d, _0xf4585d, _0x19b00d);
                },
                'YEXGE': _0x17b4a1(0x70),
                'utlXc': function (_0x2b4c0c, _0x3df2d0) {
                    return _0x2b4c0c(_0x3df2d0);
                },
                'aLnrO': function (_0x1829a3) {
                    return _0x1829a3();
                },
                'PGIoZ': function (_0x4b334e, _0x4d9799) {
                    return _0x4b334e === _0x4d9799;
                },
                'jeEui': _0x4577e7[_0x17b4a1(0x695)],
                'OXiLK': _0x17b4a1(0x870),
                'ebPZY': function (_0xdc5e80, _0xc09769) {
                    return _0xdc5e80 + _0xc09769;
                },
                'whKsG': _0x17b4a1(0x6c6)
            }, _0x598369 = document[_0x17b4a1(0x39d)](_0x17b4a1(0x657) + _0x15212f);
        if (!_0x598369)
            return;
        const _0x2b0cac = _0x4f991c[_0x15212f];
        if (!_0x2b0cac || !_0x2b0cac[_0x17b4a1(0x3c1)]) {
            const _0x471e18 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-card-title-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22stakeout-card-name\x22>🎯\x20Target\x20[' + _0x15212f + ']</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-card-header-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-icon\x20compact-del\x22\x20data-del=\x22' + _0x15212f + _0x17b4a1(0x678);
            if (_0x4577e7[_0x17b4a1(0x38c)](_0x598369[_0x17b4a1(0x658)][_0x17b4a1(0x130)], _0x17b4a1(0x31f) + _0x15212f)) {
                _0x598369['dataset'][_0x17b4a1(0x130)] = 'pending_' + _0x15212f, _0x598369['innerHTML'] = _0x471e18;
                const _0x5c6e38 = _0x598369[_0x17b4a1(0x25f)]('[data-del=\x22' + _0x15212f + '\x22]');
                if (_0x5c6e38)
                    _0x5c6e38[_0x17b4a1(0x1f7)] = () => _0x4f1c6f(_0x15212f);
            }
            return;
        }
        const _0x5adee9 = _0x2b0cac['data'], _0x49a200 = Math[_0x17b4a1(0x3ee)](Date[_0x17b4a1(0x6d4)]() / 0x3e8), _0x5c50d9 = _0x4577e7[_0x17b4a1(0x31e)](_0x5adee9[_0x17b4a1(0x206)], _0x49a200) ? _0x5adee9[_0x17b4a1(0x206)] - _0x49a200 : 0x0, _0x4c510c = _0x4577e7[_0x17b4a1(0x3a0)](_0x5adee9[_0x17b4a1(0x4b6)], _0x4577e7['MRCrI']) && _0x5adee9[_0x17b4a1(0x206)] > 0x0 && _0x49a200 >= _0x5adee9[_0x17b4a1(0x206)] ? _0x4577e7[_0x17b4a1(0x2da)](_0x49a200, _0x5adee9[_0x17b4a1(0x206)]) : 0x0, _0x411f99 = _0x4577e7[_0x17b4a1(0x36c)](_0x8d48d4, _0x5c50d9), _0x271c3a = _0x4577e7[_0x17b4a1(0x5bb)](_0x5c50d9, 0x0) ? Math[_0x17b4a1(0x3ee)](_0x5c50d9 / 0xe10) + 'h\x20' + Math[_0x17b4a1(0x3ee)](_0x4577e7[_0x17b4a1(0x5e6)](_0x5c50d9 % 0xe10, 0x3c)) + 'm\x20' + _0x5c50d9 % 0x3c + 's' : _0x4c510c > 0x0 ? _0x17b4a1(0x683) + _0x4c510c + _0x17b4a1(0x30e) : _0x17b4a1(0x51c), _0x4576f8 = _0x48c321(_0x15212f), _0x138014 = parseInt(_0x463892[_0x15212f]?.[_0x17b4a1(0x34c)], 0xa) || 0x0, _0x2311cc = _0x4577e7[_0x17b4a1(0x7f0)](_0x32378e, _0x15212f), _0x4af965 = _0x4577e7[_0x17b4a1(0x8a)](_0x5adee9['state'], _0x17b4a1(0x46c)) && _0x5c50d9 <= 0x3c && !_0x4576f8, _0x336ad8 = _0x3a552f(_0x5adee9, _0x49a200, _0x15212f), _0x2bf24e = _0x386dae(_0x5adee9), _0x530c50 = _0x4577e7[_0x17b4a1(0xb3)](_0x446d97, _0x5adee9, _0x49a200, _0x15212f), _0x157431 = { 'isPro': _0x4c3563('sp') }, _0x49bdfe = (_0xb2691a['alertOnIllegalHit'] || _0xb2691a[_0x17b4a1(0x79b)]) && Boolean(_0x2b87be[_0x15212f]), _0x25fdf3 = _0x49f457(_0x5adee9, _0x15212f), _0x1bf623 = _0x4870df(_0x15212f, _0x5adee9), _0x1cb576 = _0x5adee9['state'] + '_' + _0x5adee9[_0x17b4a1(0x723)] + '_' + _0x5adee9[_0x17b4a1(0x4cd)] + '_' + _0x5adee9[_0x17b4a1(0x874)] + '_' + _0x4576f8 + '_' + _0x2311cc + '_' + _0x4af965 + '_' + _0xb2691a[_0x17b4a1(0x5ba)] + '_' + _0x5adee9['warActive'] + '_' + _0x25fdf3 + '_' + _0x1bf623 + '_' + _0xb2691a[_0x17b4a1(0x872)] + '_' + _0x336ad8 + '_' + _0x2bf24e + '_' + _0x530c50 + '_' + _0x157431[_0x17b4a1(0x389)] + '_' + _0x49bdfe, _0x4c7515 = _0x598369[_0x17b4a1(0x4a9)](_0x4577e7['uYyRa']), _0x340056 = _0x598369[_0x17b4a1(0x637)](document[_0x17b4a1(0x866)]), _0x3ea1d9 = _0x4c7515 || _0x340056;
        if (_0x598369['dataset'][_0x17b4a1(0x130)] === _0x1cb576 || _0x3ea1d9) {
            const _0x52e36c = _0x598369[_0x17b4a1(0x25f)](_0x17b4a1(0x86b));
            if (_0x52e36c) {
                if (_0x4577e7[_0x17b4a1(0x300)](_0x5adee9[_0x17b4a1(0x4b6)], 'Hospital'))
                    _0x52e36c['textContent'] = _0x4af965 ? _0x4577e7[_0x17b4a1(0x841)](_0x4c510c, 0x0) ? _0x17b4a1(0x315) + _0x4c510c + 's)' : _0x17b4a1(0x4d7) + _0x411f99 : '🏥\x20Hosp:\x20' + _0x411f99, _0x52e36c[_0x17b4a1(0x3dd)] = _0x271c3a;
                else
                    _0x5adee9[_0x17b4a1(0x4b6)] === 'Jail' && (_0x52e36c[_0x17b4a1(0x235)] = _0x17b4a1(0x1ce) + _0x411f99, _0x52e36c[_0x17b4a1(0x3dd)] = _0x17b4a1(0x1c9) + _0x271c3a);
            }
            const _0x446da5 = _0x598369[_0x17b4a1(0x25f)](_0x4577e7[_0x17b4a1(0x223)]);
            _0x446da5 && _0x5adee9[_0x17b4a1(0x4b6)] === _0x17b4a1(0x463) && (_0x446da5[_0x17b4a1(0x235)] = _0x17b4a1(0x15a) + (_0x5adee9['desc'] || _0x17b4a1(0x463)) + '\x20(' + _0x411f99 + ')', _0x446da5[_0x17b4a1(0x3dd)] = 'Remaining:\x20' + _0x271c3a);
            const _0x528780 = _0x598369[_0x17b4a1(0x25f)]('[data-attack-locked=\x22' + _0x15212f + '\x22]');
            if (_0x528780) {
                const _0x31965f = _0x528780[_0x17b4a1(0x25f)](_0x4577e7[_0x17b4a1(0x80a)]);
                if (_0x31965f) {
                    if (_0x5adee9[_0x17b4a1(0x4b6)] === _0x17b4a1(0x46c))
                        _0x31965f['textContent'] = _0x4c510c > 0x0 ? _0x17b4a1(0x4bc) + _0x4c510c + 's)' : _0x17b4a1(0x312) + _0x411f99;
                    else {
                        if (_0x5adee9[_0x17b4a1(0x4b6)] === _0x4577e7[_0x17b4a1(0xca)])
                            _0x31965f['textContent'] = _0x17b4a1(0x14d) + _0x411f99 + ')';
                        else
                            _0x5adee9[_0x17b4a1(0x4b6)] === _0x17b4a1(0x290) && (_0x31965f[_0x17b4a1(0x235)] = '🔒\x20In\x20Jail:\x20' + _0x411f99);
                    }
                }
            }
            return;
        }
        _0x598369[_0x17b4a1(0x658)][_0x17b4a1(0x130)] = _0x1cb576, _0x598369[_0x17b4a1(0x1aa)] = _0x17b4a1(0x462) + (_0x336ad8 ? _0x4577e7[_0x17b4a1(0x450)] : _0x4af965 ? 'near-ready' : '') + '\x20' + (_0x4576f8 ? 'stricken' : ''), _0x598369[_0x17b4a1(0x3dd)] = _0x4576f8 ? _0x17b4a1(0x3cc) : _0x17b4a1(0xef);
        let _0x29f2c4 = '';
        _0x4576f8 && (_0x29f2c4 += _0x17b4a1(0x54a) + _0x15212f + '\x22\x20style=\x22cursor:\x20pointer;\x22\x20title=\x22STRICKEN\x20(Click\x20or\x20right-click\x20to\x20unmark)\x22>🎯\x20STRICKEN</span>\x20');
        (_0xb2691a[_0x17b4a1(0x54c)] || _0xb2691a['autoScreenshotIllegalHit']) && _0x2b87be[_0x15212f] && (_0x29f2c4 += _0x17b4a1(0x641) + _0x15212f + _0x17b4a1(0x659));
        const _0x429838 = _0x5adee9[_0x17b4a1(0x184)] ? _0x4577e7[_0x17b4a1(0x187)](_0x5adee9[_0x17b4a1(0x3e4)]?.[_0x17b4a1(0x6c)], _0x4577e7['FRItp']) ? _0x17b4a1(0x7f5) + (_0x5adee9[_0x17b4a1(0x3e4)][_0x17b4a1(0x3a2)] || _0x4577e7[_0x17b4a1(0x57f)]) : _0x5adee9[_0x17b4a1(0x3e4)]?.[_0x17b4a1(0x6c)] === _0x4577e7['KXHdh'] ? _0x17b4a1(0x407) + (_0x5adee9[_0x17b4a1(0x3e4)][_0x17b4a1(0x31a)] || _0x17b4a1(0x702)) + ']' : _0x17b4a1(0x419) : '', _0xee0251 = _0x4577e7[_0x17b4a1(0x7e5)](_0x548aeb, _0x5adee9['wall']);
        let _0x272fe4 = '';
        if (_0x157431['isPro'] && _0x5adee9[_0x17b4a1(0x184)]) {
            if (_0x5adee9[_0x17b4a1(0x3e4)]?.[_0x17b4a1(0x6c)] === _0x4577e7[_0x17b4a1(0x695)])
                _0x272fe4 = _0x17b4a1(0x83e) + _0x429838 + _0x17b4a1(0x671) + (_0x5adee9[_0x17b4a1(0x747)] ? '\x20Also\x20on\x20a\x20territory\x20wall' + (_0xee0251 ? '\x20(' + _0xee0251 + ')' : '') + '.' : '') + '\x22>⚡\x20Ranked\x20ED' + (_0x5adee9['wall'] ? _0x4577e7[_0x17b4a1(0x87e)] : '') + _0x17b4a1(0x582);
            else
                _0x4577e7['schXk'](_0x5adee9[_0x17b4a1(0x3e4)]?.[_0x17b4a1(0x6c)], 'Territory\x20War') ? _0x25fdf3 ? _0x272fe4 = _0x17b4a1(0x7f9) + _0x15212f + '\x22\x20title=\x22Territory\x20War\x20[' + (_0x5adee9[_0x17b4a1(0x3e4)][_0x17b4a1(0x31a)] || 'Sector') + _0x17b4a1(0x65a) + (_0xee0251 ? '\x20(' + _0xee0251 + ')' : '') + '\x20(⚡\x20ED\x20Active).\x20Contract\x20paused.' + (_0x5adee9[_0x17b4a1(0x747)] ? _0x4577e7[_0x17b4a1(0x837)] : '\x20Click\x20to\x20toggle\x20OFF\x20WALL.') + _0x17b4a1(0x4ec) + (_0xee0251 ? ':\x20' + _0xee0251 : '') + _0x17b4a1(0x418) : _0x272fe4 = _0x17b4a1(0x759) + _0x15212f + _0x17b4a1(0x306) + (_0x5adee9[_0x17b4a1(0x3e4)][_0x17b4a1(0x31a)] || _0x4577e7[_0x17b4a1(0x79a)]) + _0x17b4a1(0x48a) : _0x272fe4 = _0x17b4a1(0x6fa);
        }
        if (_0x4577e7[_0x17b4a1(0x85b)](_0x5adee9[_0x17b4a1(0x4b6)], _0x17b4a1(0x46c)))
            _0x4af965 ? _0x29f2c4 += _0x17b4a1(0x835) + _0x271c3a + '\x22>⚡\x20Hosp:\x20' + (_0x4c510c > 0x0 ? 'Ready\x20(+' + _0x4c510c + 's)' : _0x411f99) + '</span>' + (_0x272fe4 ? '\x20' + _0x272fe4 : '') + '\x20' : _0x29f2c4 += _0x17b4a1(0x42b) + _0x271c3a + '\x22>🏥\x20Hosp:\x20' + _0x411f99 + '</span>' + (_0x272fe4 ? '\x20' + _0x272fe4 : '') + '\x20', _0x25fdf3 && _0xb2691a[_0x17b4a1(0x872)] && (_0x29f2c4 += _0x17b4a1(0x655));
        else {
            if (_0x5adee9[_0x17b4a1(0x4b6)] === _0x17b4a1(0x463)) {
                _0x29f2c4 += _0x17b4a1(0x1cf) + _0x271c3a + _0x17b4a1(0x177) + (_0x5adee9[_0x17b4a1(0x30d)] || _0x17b4a1(0x463)) + '\x20(' + _0x411f99 + _0x17b4a1(0xb0);
                if (_0x5adee9['warActive'] && _0x272fe4)
                    _0x29f2c4 += _0x272fe4 + '\x20';
            } else {
                if (_0x4577e7[_0x17b4a1(0x74d)](_0x5adee9[_0x17b4a1(0x4b6)], _0x4577e7[_0x17b4a1(0x4ad)])) {
                    _0x29f2c4 += _0x17b4a1(0x4ff) + (_0x5adee9[_0x17b4a1(0x30d)] || _0x4577e7[_0x17b4a1(0x4ad)]) + _0x17b4a1(0x6c5);
                    if (_0x5adee9[_0x17b4a1(0x184)] && _0x272fe4)
                        _0x29f2c4 += _0x272fe4 + '\x20';
                } else {
                    if (_0x4577e7[_0x17b4a1(0x1e6)](_0x5adee9[_0x17b4a1(0x4b6)], _0x17b4a1(0x290)))
                        _0x29f2c4 += _0x17b4a1(0x145) + _0x271c3a + _0x17b4a1(0x5dc) + _0x411f99 + _0x17b4a1(0x582) + (_0x272fe4 ? '\x20' + _0x272fe4 : '') + '\x20';
                    else {
                        if (_0x157431[_0x17b4a1(0x389)]) {
                            _0x530c50 ? _0x29f2c4 += '<span\x20class=\x22stakeout-status-pill\x20okay\x22\x20title=\x22Target\x20Out\x20&\x20Active\x20(Okay)\x22>Okay</span>\x20' : _0x29f2c4 += _0x17b4a1(0x500) + (_0x2311cc === -0x1 ? 'unlimited' : _0x2311cc + 'm') + _0x17b4a1(0x847);
                            if (_0x5adee9[_0x17b4a1(0x184)]) {
                                if (_0x272fe4)
                                    _0x29f2c4 += _0x272fe4 + '\x20';
                                _0x25fdf3 && _0xb2691a['autoPauseOnEarlyDischarge'] && (_0x29f2c4 += _0x17b4a1(0x655));
                            }
                        } else
                            _0x29f2c4 += _0x17b4a1(0x291);
                    }
                }
            }
        }
        const _0x35bcb3 = _0x157431['isPro'] ? _0x5adee9[_0x17b4a1(0x874)] === _0x4577e7['JEWQz'] ? _0x4577e7[_0x17b4a1(0x195)] : _0x4577e7[_0x17b4a1(0x77a)](_0x5adee9[_0x17b4a1(0x874)], _0x17b4a1(0x68d)) ? _0x17b4a1(0x69e) : _0x4577e7[_0x17b4a1(0x71e)] : _0x4577e7[_0x17b4a1(0x71e)], _0x7cd946 = _0x157431[_0x17b4a1(0x389)] ? _0x17b4a1(0x4a6) + _0x5adee9[_0x17b4a1(0x874)] : 'Online\x20activity\x20status\x20requires\x20Sniper\x20Pro';
        let _0x9d31ed = '';
        if (_0x5adee9['hpPct'] < 0x19)
            _0x9d31ed = _0x17b4a1(0x642);
        else {
            if (_0x5adee9[_0x17b4a1(0x72f)] < 0x32)
                _0x9d31ed = _0x4577e7[_0x17b4a1(0x37d)];
        }
        let _0x42fe76 = '', _0x2393ac = '';
        if (_0x336ad8) {
            const _0x12d7a8 = (_0xb2691a[_0x17b4a1(0x5ba)] || _0x17b4a1(0x160)) === _0x4577e7[_0x17b4a1(0x580)], _0x50678b = _0x12d7a8 ? _0x17b4a1(0x5ad) + _0x15212f : _0x17b4a1(0x5fa) + _0x15212f, _0x11947e = _0x12d7a8 ? _0x17b4a1(0x62b) : _0x4577e7[_0x17b4a1(0x42a)], _0x259b0c = _0x12d7a8 ? _0x17b4a1(0x856) + _0x5adee9[_0x17b4a1(0x102)] + _0x17b4a1(0x106) : 'Click\x20to\x20attack\x20target\x20[' + _0x5adee9[_0x17b4a1(0x102)] + ']!';
            _0x42fe76 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22' + _0x50678b + _0x17b4a1(0x59b) + (_0x4576f8 ? _0x4577e7['NUvYx'] : _0x17b4a1(0x18e)) + _0x17b4a1(0x9c) + _0x259b0c + _0x17b4a1(0x6c2) + _0x11947e + _0x17b4a1(0x10f);
        } else {
            if (_0x25fdf3 && _0xb2691a['autoPauseOnEarlyDischarge']) {
                const _0x50a494 = _0x4577e7[_0x17b4a1(0x1e6)](_0x5adee9[_0x17b4a1(0x3e4)]?.['type'], _0x17b4a1(0x76d)) ? _0x17b4a1(0x128) : _0x4577e7[_0x17b4a1(0x29c)];
                _0x42fe76 = _0x17b4a1(0x99) + _0x15212f + '\x22\x20title=\x22Target\x20has\x20active\x20Early\x20Discharge\x20(' + (_0x5adee9[_0x17b4a1(0x3e4)]?.[_0x17b4a1(0x6c)] || _0x17b4a1(0x23c)) + ')!\x20Contract\x20auto-paused.\x20Click\x20to\x20force\x20attack\x20anyway\x20(requires\x20confirmation).\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20style=\x22font-weight:\x20800;\x20font-size:\x2010.5px;\x22>' + _0x50a494 + _0x17b4a1(0x3be);
            } else {
                let _0x3cc3f5 = '';
                if (!_0x2bf24e) {
                    if (_0x4577e7['kmoax'](_0x5adee9['state'], _0x17b4a1(0x46c)))
                        _0x3cc3f5 = _0x4577e7['QhgGS'](_0x4c510c, 0x0) ? _0x17b4a1(0x4bc) + _0x4c510c + 's)' : _0x17b4a1(0x312) + _0x411f99, _0x2393ac = _0x17b4a1(0x856) + _0x5adee9[_0x17b4a1(0x102)] + ']\x20is\x20in\x20Hospital!\x20Must\x20be\x20Out\x20&\x20Alive\x20to\x20attack.';
                    else {
                        if (_0x5adee9['state'] === _0x17b4a1(0x463))
                            _0x3cc3f5 = '🔒\x20Traveling:\x20' + _0x411f99, _0x2393ac = 'Target\x20[' + _0x5adee9[_0x17b4a1(0x102)] + ']\x20is\x20Traveling!';
                        else {
                            if (_0x5adee9['state'] === _0x17b4a1(0x830))
                                _0x3cc3f5 = _0x17b4a1(0x6a5) + (_0x5adee9[_0x17b4a1(0x30d)] || _0x17b4a1(0x3cb)), _0x2393ac = 'Target\x20[' + _0x5adee9[_0x17b4a1(0x102)] + ']\x20is\x20Abroad!';
                            else
                                _0x5adee9['state'] === _0x17b4a1(0x290) ? (_0x3cc3f5 = _0x17b4a1(0x49d) + _0x411f99, _0x2393ac = _0x17b4a1(0x856) + _0x5adee9['name'] + _0x17b4a1(0x413)) : (_0x3cc3f5 = _0x17b4a1(0x268), _0x2393ac = _0x17b4a1(0x856) + _0x5adee9[_0x17b4a1(0x102)] + _0x17b4a1(0x6fc));
                        }
                    }
                } else
                    !_0x530c50 ? (_0x3cc3f5 = _0x17b4a1(0x2aa) + _0x2311cc + _0x17b4a1(0xf4) + _0x5adee9[_0x17b4a1(0x874)] + ')', _0x2393ac = _0x17b4a1(0x856) + _0x5adee9['name'] + ']\x20is\x20Inactive!\x20Must\x20be\x20active\x20within\x20' + _0x2311cc + 'm.') : (_0x3cc3f5 = _0x17b4a1(0x785), _0x2393ac = 'Target\x20[' + _0x5adee9['name'] + _0x17b4a1(0x817));
                _0x42fe76 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20type=\x22button\x22\x20class=\x22stakeout-attack-btn\x20disabled\x22\x20data-attack-locked=\x22' + _0x15212f + _0x17b4a1(0x9c) + _0x2393ac + _0x17b4a1(0x6c2) + _0x3cc3f5 + _0x17b4a1(0x1d0);
            }
        }
        _0x598369['innerHTML'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-card-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-card-title-wrap\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22stakeout-dot\x20' + _0x35bcb3 + _0x17b4a1(0x9c) + _0x7cd946 + _0x17b4a1(0x2d9) + _0x15212f + _0x17b4a1(0x744) + _0x5adee9['name'] + _0x17b4a1(0x445) + _0x15212f + _0x17b4a1(0x56e) + (_0x4577e7[_0x17b4a1(0x517)](_0x5adee9[_0x17b4a1(0x825)], 0x0) ? '<span\x20class=\x22stakeout-card-lvl\x22>L' + _0x5adee9[_0x17b4a1(0x825)] + _0x17b4a1(0x582) : '') + _0x17b4a1(0x7c9) + (_0x5adee9[_0x17b4a1(0x76c)] ? _0x17b4a1(0x749) + _0x5adee9[_0x17b4a1(0x76c)] + '\x20[' + _0x5adee9[_0x17b4a1(0x385)] + ']\x22>•\x20' + _0x5adee9[_0x17b4a1(0x76c)] + _0x17b4a1(0x582) : '') + _0x17b4a1(0x770) + (_0x157431[_0x17b4a1(0x389)] ? '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22stakeout-compact-limit-select\x22\x20data-target-limit=\x22' + _0x15212f + _0x17b4a1(0x36d) + (_0x4577e7['WQzoZ'](_0x138014, 0x0) ? _0x17b4a1(0x345) : '') + '>' + (_0xb2691a[_0x17b4a1(0x365)] === -0x1 ? _0x4577e7['zBglC'] : (_0xb2691a[_0x17b4a1(0x365)] || 0x5) + 'm') + _0x17b4a1(0x44f) + (_0x138014 === 0x2 ? _0x17b4a1(0x345) : '') + '>2m</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2210\x22\x20' + (_0x138014 === 0xa ? _0x17b4a1(0x345) : '') + _0x17b4a1(0x351) + (_0x138014 === 0xf ? 'selected' : '') + _0x17b4a1(0x39b) + (_0x4577e7[_0x17b4a1(0x13d)](_0x138014, 0x1e) ? _0x17b4a1(0x345) : '') + '>30m</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x2260\x22\x20' + (_0x138014 === 0x3c ? _0x4577e7[_0x17b4a1(0x7fd)] : '') + _0x17b4a1(0x473) + (_0x138014 === -0x1 ? 'selected' : '') + _0x17b4a1(0x502) : _0x17b4a1(0x404)) + _0x17b4a1(0x194) + _0x15212f + _0x17b4a1(0xdf) + _0x29f2c4 + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-compact-hp\x22\x20title=\x22' + (_0x157431[_0x17b4a1(0x389)] ? _0x17b4a1(0x232) + _0x5adee9[_0x17b4a1(0x723)]['toLocaleString']() + _0x17b4a1(0x508) + _0x5adee9[_0x17b4a1(0x4cd)][_0x17b4a1(0x79)]() + '\x20(' + _0x5adee9['hpPct'][_0x17b4a1(0x4b9)](0x1) + '%)\x20•\x20Last:\x20' + (_0x5adee9[_0x17b4a1(0x55e)] || _0x5adee9[_0x17b4a1(0x874)]) : 'HP:\x20' + _0x5adee9[_0x17b4a1(0x723)][_0x17b4a1(0x79)]() + '\x20/\x20' + _0x5adee9[_0x17b4a1(0x4cd)][_0x17b4a1(0x79)]() + '\x20(' + _0x5adee9[_0x17b4a1(0x72f)][_0x17b4a1(0x4b9)](0x1) + _0x17b4a1(0x33a)) + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-hp-bar-fill\x20' + _0x9d31ed + _0x17b4a1(0x44d) + _0x5adee9[_0x17b4a1(0x72f)] + '%;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-hp-mini-text\x22>❤️\x20' + _0x5adee9[_0x17b4a1(0x72f)][_0x17b4a1(0x4b9)](0x0) + '%' + (_0x157431[_0x17b4a1(0x389)] ? _0x17b4a1(0x10e) + (_0x5adee9[_0x17b4a1(0x55e)] || _0x5adee9[_0x17b4a1(0x874)]) : '') + _0x17b4a1(0x3c6) + _0x42fe76 + _0x17b4a1(0x3b4), _0x598369[_0x17b4a1(0x101)] = _0x240720 => {
            const _0x3b7fcc = _0x17b4a1;
            if (_0x240720[_0x3b7fcc(0x1b6)][_0x3b7fcc(0x320)](_0x3b7fcc(0x310)))
                return;
            _0x240720[_0x3b7fcc(0x236)]();
            const _0x4f90cd = !_0x48c321(_0x15212f);
            _0x363c6b[_0x3b7fcc(0x191)](_0x21a3c0, _0x15212f, _0x4f90cd), _0x93d2c1(_0x4f90cd ? _0x3b7fcc(0x513) + _0x5adee9[_0x3b7fcc(0x102)] + _0x3b7fcc(0x6e) : _0x3b7fcc(0x856) + _0x5adee9[_0x3b7fcc(0x102)] + _0x3b7fcc(0x5f3)), _0x4696d1(), _0x70efbf(_0x15212f), _0x58accf();
        };
        const _0x2e421d = _0x598369['querySelector'](_0x17b4a1(0x12c) + _0x15212f + '\x22]');
        _0x2e421d && (_0x2e421d[_0x17b4a1(0x1f7)] = _0x4614c3 => {
            const _0x26eb8f = _0x17b4a1, _0x48b35a = _0x363c6b[_0x26eb8f(0x682)][_0x26eb8f(0x79f)]('|');
            let _0x2ef2b1 = 0x0;
            while (!![]) {
                switch (_0x48b35a[_0x2ef2b1++]) {
                case '0':
                    _0x4614c3[_0x26eb8f(0x7a5)]();
                    continue;
                case '1':
                    _0x363c6b[_0x26eb8f(0x537)](_0x70efbf, _0x15212f);
                    continue;
                case '2':
                    _0x21a3c0(_0x15212f, ![]);
                    continue;
                case '3':
                    _0x363c6b[_0x26eb8f(0x197)](_0x4696d1);
                    continue;
                case '4':
                    _0x93d2c1(_0x26eb8f(0x856) + _0x5adee9[_0x26eb8f(0x102)] + _0x26eb8f(0x5f3));
                    continue;
                case '5':
                    _0x58accf();
                    continue;
                }
                break;
            }
        });
        const _0x4f2e56 = _0x598369[_0x17b4a1(0x25f)](_0x17b4a1(0x2b6) + _0x15212f + '\x22]');
        _0x4f2e56 && (_0x4f2e56['onmousedown'] = _0x518a37 => _0x518a37[_0x17b4a1(0x7a5)](), _0x4f2e56[_0x17b4a1(0x1f7)] = _0xf4fd02 => _0xf4fd02[_0x17b4a1(0x7a5)](), _0x4f2e56[_0x17b4a1(0x74)] = _0xf5b01f => {
            const _0x5aefa0 = _0x17b4a1;
            _0xf5b01f[_0x5aefa0(0x7a5)]();
            const _0x5f2587 = parseInt(_0xf5b01f['target'][_0x5aefa0(0x1d5)], 0xa);
            _0x363c6b['ibXKp'](_0x45ff20, _0x15212f, _0x5f2587);
            const _0x2ae687 = _0x32378e(_0x15212f);
            _0x93d2c1(_0x363c6b[_0x5aefa0(0x5c5)](_0x2ae687, -0x1) ? _0x5aefa0(0x82e) + _0x5adee9[_0x5aefa0(0x102)] + _0x5aefa0(0x530) : _0x5aefa0(0x635) + _0x5adee9[_0x5aefa0(0x102)] + ']\x20set\x20to\x20' + _0x2ae687 + _0x5aefa0(0x638)), _0x598369[_0x5aefa0(0x658)][_0x5aefa0(0x130)] = '', _0x70efbf(_0x15212f), _0x363c6b['aLnrO'](_0x58accf);
        });
        const _0x1a8647 = _0x598369['querySelector']('[data-toggle-wall=\x22' + _0x15212f + '\x22]');
        _0x1a8647 && (_0x1a8647[_0x17b4a1(0x156)] = _0x337f9c => _0x337f9c[_0x17b4a1(0x7a5)](), _0x1a8647['onclick'] = _0x648469 => {
            const _0x188e4b = _0x17b4a1;
            _0x648469['preventDefault'](), _0x648469['stopPropagation']();
            const _0x1e9fda = _0x4870df(_0x15212f, _0x5adee9), _0x11c5fd = !_0x1e9fda;
            _0x4a22ad(_0x15212f, _0x11c5fd), _0x93d2c1(_0x11c5fd ? _0x188e4b(0x22b) + _0x5adee9[_0x188e4b(0x102)] + _0x188e4b(0x597) : '🛡️\x20Target\x20[' + _0x5adee9[_0x188e4b(0x102)] + _0x188e4b(0x278)), _0x598369[_0x188e4b(0x658)][_0x188e4b(0x130)] = '', _0x70efbf(_0x15212f), _0x58accf();
        });
        const _0x5f1cfd = _0x598369['querySelector']('[data-war-target=\x22' + _0x15212f + '\x22]');
        _0x5f1cfd && (_0x5f1cfd[_0x17b4a1(0x1f7)] = _0x2012f1 => {
            const _0x59f391 = _0x17b4a1;
            _0x2012f1['preventDefault'](), _0x2012f1[_0x59f391(0x7a5)]();
            const _0x2d48cc = _0x5adee9[_0x59f391(0x3e4)]?.[_0x59f391(0x6c)] === _0x363c6b[_0x59f391(0x2bc)] ? _0x59f391(0x7f5) + (_0x5adee9[_0x59f391(0x3e4)][_0x59f391(0x3a2)] || _0x363c6b[_0x59f391(0x115)]) : _0x5adee9[_0x59f391(0x3e4)]?.[_0x59f391(0x6c)] === _0x59f391(0x76d) ? _0x59f391(0x674) + (_0x5adee9[_0x59f391(0x3e4)][_0x59f391(0x31a)] || _0x59f391(0xcc)) + ']' : _0x59f391(0x419), _0x14adf2 = confirm(_0x363c6b[_0x59f391(0x47c)](_0x363c6b[_0x59f391(0x47c)](_0x59f391(0x1c8), _0x59f391(0x856) + _0x5adee9[_0x59f391(0x102)] + _0x59f391(0x762) + (_0x5adee9['factionName'] || _0x5adee9[_0x59f391(0x385)]) + _0x59f391(0x3fa) + _0x2d48cc + _0x59f391(0x443)) + _0x59f391(0x4ee), '•\x20Attacking\x20them\x20as\x20a\x20mercenary\x20wastes\x2025\x20energy\x20and\x20violates\x20third-party\x20non-interference\x20rules.\x0a\x0a') + _0x59f391(0x317));
            if (_0x14adf2) {
                const _0x12f6f5 = _0x363c6b[_0x59f391(0x5c5)](_0xb2691a[_0x59f391(0x5ba)] || _0x59f391(0x160), _0x363c6b['whKsG']), _0x1cc50e = _0x12f6f5 ? _0x59f391(0x5ad) + _0x15212f : _0x59f391(0x5fa) + _0x15212f;
                _0x126116(_0x1cc50e), _0x93d2c1(_0x59f391(0xe7) + _0x5adee9[_0x59f391(0x102)] + ']!');
            }
        });
        const _0x17aa55 = _0x598369[_0x17b4a1(0x25f)](_0x17b4a1(0x483) + _0x15212f + '\x22]');
        _0x17aa55 && _0x2393ac && (_0x17aa55[_0x17b4a1(0x1f7)] = _0xa115d => {
            const _0x35170 = _0x17b4a1;
            _0xa115d[_0x35170(0x236)](), _0xa115d[_0x35170(0x7a5)](), _0x93d2c1(_0x35170(0x433) + _0x2393ac);
        });
        const _0x1a707e = _0x598369['querySelector'](_0x17b4a1(0x585) + _0x15212f + '\x22]');
        if (_0x1a707e)
            _0x1a707e[_0x17b4a1(0x1f7)] = () => _0x4f1c6f(_0x15212f);
        const _0x293465 = _0x598369[_0x17b4a1(0x25f)](_0x17b4a1(0x142) + _0x15212f + '\x22]');
        _0x293465 && (_0x293465[_0x17b4a1(0x1f7)] = _0x17f900 => {
            const _0xc6eb97 = _0x17b4a1;
            _0x17f900[_0xc6eb97(0x236)](), _0x17f900[_0xc6eb97(0x7a5)]();
            const _0x32a18a = _0x2b87be[_0x15212f];
            _0x32a18a && _0x32a18a[_0xc6eb97(0x488)] && _0x4577e7[_0xc6eb97(0x654)](_0x30218d, _0x32a18a['incidentData'], _0x32a18a[_0xc6eb97(0x488)]);
        });
    }
    function _0x2e01b9(_0x2a0253) {
        const _0x6e4303 = _0x1fbd97, _0x3ccf5a = {
                'HbsTm': function (_0x515432, _0x15d063, _0xcdcabc) {
                    return _0x515432(_0x15d063, _0xcdcabc);
                },
                'IjWcX': function (_0x209a3b, _0x228040) {
                    return _0x209a3b(_0x228040);
                }
            }, _0x404f15 = document[_0x6e4303(0x39d)](_0x6e4303(0x74c) + _0x2a0253);
        if (!_0x404f15)
            return;
        const _0x45cd5f = _0x4f991c[_0x2a0253];
        if (!_0x45cd5f || !_0x45cd5f[_0x6e4303(0x3c1)]) {
            const _0x490f66 = _0x6e4303(0x85a) + _0x2a0253 + _0x6e4303(0x6ac) + _0x2a0253 + '\x22>✕</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2010px;\x20color:\x20#94a3b8;\x20font-family:\x20monospace;\x22>Scanning\x20telemetry...</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
            if (_0x404f15[_0x6e4303(0x658)][_0x6e4303(0x130)] !== _0x6e4303(0x1c6) + _0x2a0253) {
                _0x404f15[_0x6e4303(0x658)][_0x6e4303(0x130)] = _0x6e4303(0x1c6) + _0x2a0253, _0x404f15[_0x6e4303(0x1be)] = _0x490f66;
                const _0x19dd48 = _0x404f15[_0x6e4303(0x25f)](_0x6e4303(0x2ef) + _0x2a0253 + '\x22]');
                if (_0x19dd48)
                    _0x19dd48[_0x6e4303(0x1f7)] = () => _0x37b97f(_0x2a0253);
            }
            return;
        }
        const _0x1dd2a = _0x45cd5f['data'], _0x5661b7 = Math[_0x6e4303(0x3ee)](Date[_0x6e4303(0x6d4)]() / 0x3e8), _0x2af92f = _0x4577e7[_0x6e4303(0x748)](_0x1dd2a['until'], _0x5661b7) ? _0x1dd2a[_0x6e4303(0x206)] - _0x5661b7 : 0x0, _0x20fa32 = _0x8d48d4(_0x2af92f), _0x164e96 = _0x4577e7[_0x6e4303(0x5ee)](_0x25ec12, _0x1dd2a), _0x30cf11 = _0x4577e7[_0x6e4303(0x60e)](_0x1383de, _0x2a0253), _0x1578b0 = { 'isPro': _0x4c3563('tw') }, _0x5c966c = _0x6e4303(0xeb) + _0x1dd2a[_0x6e4303(0x4b6)] + '_' + _0x1dd2a[_0x6e4303(0x723)] + '_' + _0x1dd2a[_0x6e4303(0x4cd)] + '_' + _0x1dd2a[_0x6e4303(0x874)] + '_' + _0x164e96 + '_' + _0x30cf11 + '_' + _0xb2691a[_0x6e4303(0x768)] + '_' + _0x1dd2a[_0x6e4303(0x184)] + '_' + _0x1578b0[_0x6e4303(0x389)];
        if (_0x404f15[_0x6e4303(0x658)][_0x6e4303(0x130)] === _0x5c966c) {
            const _0x32029b = _0x404f15[_0x6e4303(0x25f)](_0x4577e7[_0x6e4303(0x863)]);
            if (_0x32029b && _0x1dd2a[_0x6e4303(0x4b6)] === 'Hospital') {
                const _0x1208ed = _0x1dd2a[_0x6e4303(0x184)] ? _0x1dd2a[_0x6e4303(0x3e4)]?.['type'] === _0x6e4303(0x4fe) ? _0x6e4303(0x7f5) + (_0x1dd2a[_0x6e4303(0x3e4)][_0x6e4303(0x3a2)] || _0x4577e7[_0x6e4303(0x57f)]) : _0x4577e7[_0x6e4303(0x187)](_0x1dd2a[_0x6e4303(0x3e4)]?.['type'], _0x6e4303(0x76d)) ? _0x6e4303(0x407) + (_0x1dd2a[_0x6e4303(0x3e4)][_0x6e4303(0x31a)] || _0x6e4303(0x702)) + ']' : _0x6e4303(0x419) : '', _0x295157 = _0x1dd2a[_0x6e4303(0x184)] ? '<span\x20class=\x22stakeout-status-pill\x20ed-on\x22\x20title=\x22Early\x20Discharge:\x20AVAILABLE\x20(' + (_0x1208ed || _0x4577e7['PuoZS']) + _0x6e4303(0x36e) : '';
                _0x32029b['innerHTML'] = '🏥\x20Hosp:\x20' + _0x20fa32 + (_0x295157 ? '\x20' + _0x295157 : '');
            }
            const _0x441912 = _0x404f15[_0x6e4303(0x25f)](_0x4577e7[_0x6e4303(0x5c8)]);
            _0x441912 && _0x4577e7[_0x6e4303(0x6d5)](_0x1dd2a[_0x6e4303(0x4b6)], _0x4577e7[_0x6e4303(0x4b0)]) && (_0x441912['innerHTML'] = '🛡️\x20Safe\x20in\x20Hospital\x20(' + _0x20fa32 + _0x6e4303(0x4fc) + (_0x1dd2a[_0x6e4303(0x184)] ? _0x6e4303(0x4fd) : ''));
            return;
        }
        _0x404f15[_0x6e4303(0x658)][_0x6e4303(0x130)] = _0x5c966c, _0x404f15[_0x6e4303(0x1aa)] = _0x6e4303(0x462) + (_0x164e96 ? _0x6e4303(0x76) : '');
        const _0x33a345 = _0x1578b0[_0x6e4303(0x389)] ? _0x1dd2a[_0x6e4303(0x874)] === 'Online' ? _0x4577e7[_0x6e4303(0x195)] : _0x4577e7[_0x6e4303(0x187)](_0x1dd2a[_0x6e4303(0x874)], _0x4577e7[_0x6e4303(0x69)]) ? _0x4577e7[_0x6e4303(0x2ae)] : _0x6e4303(0x369) : 'offline', _0x4fd4f2 = _0x1578b0[_0x6e4303(0x389)] ? _0x6e4303(0x4a6) + _0x1dd2a[_0x6e4303(0x874)] : _0x6e4303(0x3c5), _0x6b1a9b = _0x1dd2a[_0x6e4303(0x184)] ? _0x4577e7[_0x6e4303(0x35b)](_0x1dd2a[_0x6e4303(0x3e4)]?.[_0x6e4303(0x6c)], _0x6e4303(0x4fe)) ? _0x6e4303(0x7f5) + (_0x1dd2a[_0x6e4303(0x3e4)][_0x6e4303(0x3a2)] || 'Enemy') : _0x1dd2a[_0x6e4303(0x3e4)]?.[_0x6e4303(0x6c)] === _0x6e4303(0x76d) ? _0x6e4303(0x407) + (_0x1dd2a[_0x6e4303(0x3e4)][_0x6e4303(0x31a)] || _0x4577e7[_0x6e4303(0x79a)]) + ']' : 'Active\x20War' : '', _0x26d736 = _0x1dd2a['warActive'] ? '<span\x20class=\x22stakeout-status-pill\x20ed-on\x22\x20title=\x22Early\x20Discharge:\x20AVAILABLE\x20(' + _0x4577e7[_0x6e4303(0x5e5)](_0x6b1a9b, _0x6e4303(0x6ab)) + _0x6e4303(0x36e) : '';
        let _0x4ebf07 = '';
        if (_0x1dd2a[_0x6e4303(0x4b6)] === _0x6e4303(0x46c))
            _0x4ebf07 = _0x6e4303(0x1ea) + _0x20fa32 + _0x6e4303(0x582) + (_0x26d736 ? '\x20' + _0x26d736 : '');
        else {
            if (_0x164e96)
                _0x4ebf07 = _0x6e4303(0x55d);
            else {
                if (_0x4577e7[_0x6e4303(0x37c)](_0x1dd2a[_0x6e4303(0x4b6)], _0x6e4303(0x463)))
                    _0x4ebf07 = _0x6e4303(0x72c) + _0x20fa32 + _0x6e4303(0x2a9);
                else
                    _0x1dd2a['state'] === _0x4577e7[_0x6e4303(0x4ad)] ? _0x4ebf07 = _0x6e4303(0x256) : _0x4ebf07 = '<span\x20class=\x22stakeout-status-pill\x20okay-offline\x22\x20title=\x22Trader\x20is\x20offline\x22>💤\x20Offline\x20(Out)</span>';
            }
        }
        let _0x16107b = '';
        if (_0x4577e7[_0x6e4303(0x3fc)](_0x1dd2a[_0x6e4303(0x72f)], 0x19))
            _0x16107b = _0x6e4303(0x642);
        else {
            if (_0x1dd2a[_0x6e4303(0x72f)] < 0x32)
                _0x16107b = _0x6e4303(0x84a);
        }
        let _0x485797 = '';
        if (_0x164e96)
            _0x485797 = _0x6e4303(0x5cd) + _0x2a0253 + _0x6e4303(0x6a7) + _0x2a0253 + _0x6e4303(0x244);
        else
            _0x1dd2a['state'] === _0x4577e7['MRCrI'] ? _0x485797 = _0x6e4303(0x656) + _0x20fa32 + _0x6e4303(0x4fc) + (_0x1dd2a[_0x6e4303(0x184)] ? _0x6e4303(0x4fd) : '') + _0x6e4303(0x48d) : _0x485797 = _0x6e4303(0x7d2);
        _0x404f15[_0x6e4303(0x1be)] = _0x6e4303(0xf0) + _0x33a345 + _0x6e4303(0x46d) + _0x1dd2a[_0x6e4303(0x874)] + '\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22https://www.torn.com/profiles.php?XID=' + _0x2a0253 + '\x22\x20target=\x22_blank\x22\x20class=\x22stakeout-card-name\x22\x20title=\x22View\x20Trader\x20Profile\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x1dd2a[_0x6e4303(0x102)] + _0x6e4303(0x445) + _0x2a0253 + _0x6e4303(0x56e) + (_0x1dd2a[_0x6e4303(0x825)] > 0x0 ? _0x6e4303(0x650) + _0x1dd2a[_0x6e4303(0x825)] + _0x6e4303(0x582) : '') + _0x6e4303(0x114) + (_0x30cf11 ? _0x4577e7[_0x6e4303(0x45b)] : '') + _0x6e4303(0x571) + _0x2a0253 + '\x22\x20title=\x22' + (_0x30cf11 ? _0x6e4303(0x496) : '🔊\x20Trader\x20Alerts\x20ACTIVE\x20(Click\x20to\x20Mute\x20Sound\x20Alert)') + _0x6e4303(0x258) + (_0x30cf11 ? '🔇' : '🔊') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22stakeout-btn-icon\x20compact-del\x22\x20data-del-trader=\x22' + _0x2a0253 + '\x22\x20title=\x22Remove\x20Trader\x22>✕</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-card-midrow\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-card-badges\x22>' + _0x4ebf07 + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-compact-hp\x22\x20title=\x22HP:\x20' + _0x1dd2a['hpCurr'][_0x6e4303(0x79)]() + _0x6e4303(0x508) + _0x1dd2a[_0x6e4303(0x4cd)][_0x6e4303(0x79)]() + '\x20(' + _0x1dd2a[_0x6e4303(0x72f)][_0x6e4303(0x4b9)](0x1) + _0x6e4303(0x294) + (_0x1dd2a['lastActionRel'] || _0x1dd2a[_0x6e4303(0x874)]) + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stakeout-hp-bar-fill\x20' + _0x16107b + '\x22\x20style=\x22width:\x20' + _0x1dd2a[_0x6e4303(0x72f)] + _0x6e4303(0x59f) + _0x1dd2a[_0x6e4303(0x72f)][_0x6e4303(0x4b9)](0x0) + _0x6e4303(0x86) + (_0x1dd2a[_0x6e4303(0x55e)] || _0x1dd2a[_0x6e4303(0x874)]) + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x485797 + _0x6e4303(0x3b4);
        const _0x131e11 = _0x404f15[_0x6e4303(0x25f)](_0x6e4303(0x1f9) + _0x2a0253 + '\x22]');
        _0x131e11 && (_0x131e11[_0x6e4303(0x1f7)] = _0x2fb70e => {
            const _0x2ca389 = _0x6e4303;
            _0x2fb70e['stopPropagation']();
            const _0x379c65 = !_0x1383de(_0x2a0253);
            _0x3ccf5a[_0x2ca389(0x829)](_0x2eb773, _0x2a0253, _0x379c65), _0x3ccf5a['IjWcX'](_0x93d2c1, _0x379c65 ? '🔇\x20Sound\x20alert\x20muted\x20for\x20Trader\x20[' + _0x1dd2a[_0x2ca389(0x102)] + '].' : _0x2ca389(0x492) + _0x1dd2a[_0x2ca389(0x102)] + '].'), _0x3ccf5a['IjWcX'](_0x2e01b9, _0x2a0253);
        });
        const _0x3ebf44 = _0x404f15[_0x6e4303(0x25f)](_0x6e4303(0x2ef) + _0x2a0253 + '\x22]');
        if (_0x3ebf44)
            _0x3ebf44['onclick'] = () => _0x37b97f(_0x2a0253);
    }
    function _0xdf862b(_0x3eb7d4) {
        const _0x54f5d7 = _0x1fbd97;
        if (!_0x3eb7d4 || isNaN(_0x3eb7d4))
            return;
        const _0x121e93 = String(_0x3eb7d4)[_0x54f5d7(0x72)]();
        if (!_0x4c3563('sp') && _0x4577e7[_0x54f5d7(0x66f)](_0x61dadc[_0x54f5d7(0x5a5)], _0x4e644f) && !_0x61dadc['includes'](_0x121e93)) {
            _0x4577e7[_0x54f5d7(0x417)](_0x93d2c1, _0x54f5d7(0x39c)), _0x4577e7[_0x54f5d7(0x799)](_0x145293, 'sp');
            return;
        }
        !_0x61dadc[_0x54f5d7(0x1b1)](_0x121e93) && (_0x61dadc[_0x54f5d7(0x563)](_0x121e93), _0x90864b(), _0x4577e7[_0x54f5d7(0x5a8)](_0x176af6), _0x4577e7[_0x54f5d7(0x2f1)](_0x168494, _0x121e93), _0x3e3709(), _0x93d2c1('🎯\x20Target\x20[' + _0x121e93 + _0x54f5d7(0x382)));
    }
    function _0x4f1c6f(_0x790606) {
        const _0xee6f4f = _0x1fbd97, _0x565c5c = _0xee6f4f(0x4b5)['split']('|');
        let _0x238035 = 0x0;
        while (!![]) {
            switch (_0x565c5c[_0x238035++]) {
            case '0':
                _0x90864b();
                continue;
            case '1':
                _0x3e3709();
                continue;
            case '2':
                _0x176af6();
                continue;
            case '3':
                _0x61dadc = _0x61dadc[_0xee6f4f(0x71f)](_0x9451f0 => _0x9451f0 !== _0x790606);
                continue;
            case '4':
                _0x4696d1();
                continue;
            case '5':
                !_0x178588['includes'](_0x790606) && (delete _0x4f991c[_0x790606], delete _0x463892[_0x790606], _0x15b38b());
                continue;
            }
            break;
        }
    }
    function _0x43eabb(_0x8ce6fe) {
        const _0x3885ea = _0x1fbd97;
        if (!_0x8ce6fe || _0x4577e7['SctCo'](isNaN, _0x8ce6fe))
            return;
        const _0x37d1ac = String(_0x8ce6fe)[_0x3885ea(0x72)]();
        if (!_0x178588[_0x3885ea(0x1b1)](_0x37d1ac)) {
            const _0x53033b = '0|5|2|4|3|1'['split']('|');
            let _0x427cc2 = 0x0;
            while (!![]) {
                switch (_0x53033b[_0x427cc2++]) {
                case '0':
                    _0x178588[_0x3885ea(0x563)](_0x37d1ac);
                    continue;
                case '1':
                    _0x93d2c1(_0x3885ea(0x2f7) + _0x37d1ac + ']\x20added\x20to\x20Hosp\x20Services\x20Watchlist.');
                    continue;
                case '2':
                    _0x4577e7[_0x3885ea(0x356)](_0x176af6);
                    continue;
                case '3':
                    _0x4577e7['TMtfg'](_0x3e3709);
                    continue;
                case '4':
                    _0x168494(_0x37d1ac);
                    continue;
                case '5':
                    _0x1d280c();
                    continue;
                }
                break;
            }
        }
    }
    function _0x37b97f(_0x34fcf4) {
        const _0x22ff93 = _0x1fbd97, _0x5c6a4c = '6|2|0|1|4|3|7|5'[_0x22ff93(0x79f)]('|');
        let _0x1c4aad = 0x0;
        while (!![]) {
            switch (_0x5c6a4c[_0x1c4aad++]) {
            case '0':
                delete _0x9a575c[_0x34fcf4];
                continue;
            case '1':
                _0x5342a6();
                continue;
            case '2':
                _0x1d280c();
                continue;
            case '3':
                _0x4577e7['jWtcZ'](_0x4696d1);
                continue;
            case '4':
                !_0x61dadc[_0x22ff93(0x1b1)](_0x34fcf4) && (delete _0x4f991c[_0x34fcf4], delete _0x463892[_0x34fcf4], _0x4577e7[_0x22ff93(0x2e0)](_0x15b38b));
                continue;
            case '5':
                _0x3e3709();
                continue;
            case '6':
                _0x178588 = _0x178588[_0x22ff93(0x71f)](_0x100d86 => _0x100d86 !== _0x34fcf4);
                continue;
            case '7':
                _0x4577e7['wwiSB'](_0x176af6);
                continue;
            }
            break;
        }
    }
    function _0x40318d() {
        const _0x39fb83 = _0x1fbd97;
        if (!window[_0x39fb83(0x289)][_0x39fb83(0x83c)][_0x39fb83(0x1b1)](_0x39fb83(0x7a3)))
            return ![];
        const _0x1007c5 = document[_0x39fb83(0x25f)]('a[href*=\x22#/war/\x22],\x20a[href*=\x22factions.php?step=profile\x22][href*=\x22war\x22]');
        if (_0x1007c5)
            return !![];
        const _0x2a4249 = document[_0x39fb83(0x65d)](_0x39fb83(0xea));
        for (const _0x176c17 of _0x2a4249) {
            const _0x21de66 = (_0x176c17[_0x39fb83(0x5e3)](_0x4577e7[_0x39fb83(0x60f)]) || _0x176c17[_0x39fb83(0x5e3)](_0x4577e7[_0x39fb83(0x3c8)]) || _0x176c17[_0x39fb83(0x235)] || '')[_0x39fb83(0x86f)]();
            if (_0x21de66[_0x39fb83(0x1b1)](_0x4577e7['TtGYD']) || _0x21de66[_0x39fb83(0x1b1)](_0x39fb83(0x2d0)) || _0x21de66['includes'](_0x39fb83(0x526)) || _0x21de66[_0x39fb83(0x1b1)]('wall'))
                return !![];
        }
        return ![];
    }
    function _0x3e3709() {
        const _0x51cafa = _0x1fbd97, _0x28dab6 = {
                'MwWvR': function (_0x377e3d, _0x399cd5) {
                    return _0x377e3d(_0x399cd5);
                },
                'lpOqS': function (_0x1ac756) {
                    return _0x1ac756();
                },
                'DvbpH': function (_0x2c89e7, _0x1409c6) {
                    return _0x2c89e7(_0x1409c6);
                }
            };
        if (!window[_0x51cafa(0x289)][_0x51cafa(0x83c)][_0x51cafa(0x1b1)](_0x4577e7[_0x51cafa(0x70e)]))
            return;
        const _0x1b9cff = window[_0x51cafa(0x289)]['href'][_0x51cafa(0x1e9)](/XID=(\d+)/);
        if (!_0x1b9cff)
            return;
        const _0xcb50dc = _0x1b9cff[0x1];
        if (_0x61dadc[_0x51cafa(0x1b1)](_0xcb50dc)) {
            const _0x52bd38 = _0x40318d();
            if (_0x52bd38 && _0x4f991c[_0xcb50dc]?.[_0x51cafa(0x3c1)]) {
                if (!_0x4f991c[_0xcb50dc][_0x51cafa(0x3c1)][_0x51cafa(0x858)]) {
                    _0x4f991c[_0xcb50dc]['data'][_0x51cafa(0x858)] = !![];
                    if (_0x26e1e9 === _0x51cafa(0x787))
                        _0x4577e7['PEhkr'](_0x70efbf, _0xcb50dc);
                    _0x4577e7[_0x51cafa(0x479)](_0x58accf);
                }
            }
        }
        const _0x2af795 = _0x61dadc['includes'](_0xcb50dc), _0x2fdbcd = _0x178588[_0x51cafa(0x1b1)](_0xcb50dc);
        let _0x4a2dd5 = document[_0x51cafa(0x39d)](_0x4577e7[_0x51cafa(0x6b7)]);
        if (!_0x4a2dd5) {
            const _0xa28aba = document['querySelector']('.profile-right-wrapper\x20.title-black,\x20.profile-right-wrapper\x20.title,\x20.profile-right-wrapper\x20h4,\x20.profile-right-wrapper\x20[class*=\x22title\x22],\x20[class*=\x22actions\x22]\x20.title-black,\x20[class*=\x22actions\x22]\x20h4');
            if (_0xa28aba) {
                const _0x13d1f1 = '2|1|4|3|6|5|0'[_0x51cafa(0x79f)]('|');
                let _0x5a9ced = 0x0;
                while (!![]) {
                    switch (_0x13d1f1[_0x5a9ced++]) {
                    case '0':
                        _0xa28aba[_0x51cafa(0x159)](_0x4a2dd5);
                        continue;
                    case '1':
                        _0x4a2dd5['id'] = _0x4577e7[_0x51cafa(0x6b7)];
                        continue;
                    case '2':
                        _0x4a2dd5 = document['createElement'](_0x51cafa(0x1b9));
                        continue;
                    case '3':
                        _0xa28aba[_0x51cafa(0x2c5)][_0x51cafa(0x36b)] = _0x4577e7[_0x51cafa(0x2e5)];
                        continue;
                    case '4':
                        _0x4a2dd5['className'] = _0x51cafa(0x179);
                        continue;
                    case '5':
                        _0xa28aba[_0x51cafa(0x2c5)][_0x51cafa(0x632)] = _0x4577e7[_0x51cafa(0x545)];
                        continue;
                    case '6':
                        _0xa28aba[_0x51cafa(0x2c5)][_0x51cafa(0x423)] = _0x4577e7[_0x51cafa(0xda)];
                        continue;
                    }
                    break;
                }
            } else {
                const _0x1073d1 = document['querySelector'](_0x4577e7[_0x51cafa(0x23b)]);
                if (!_0x1073d1)
                    return;
                _0x4a2dd5 = document[_0x51cafa(0x35d)](_0x51cafa(0x1b9)), _0x4a2dd5['id'] = _0x51cafa(0x179), _0x4a2dd5[_0x51cafa(0x1aa)] = _0x4577e7[_0x51cafa(0x6b7)], _0x1073d1[_0x51cafa(0x159)](_0x4a2dd5);
            }
        }
        _0x4a2dd5[_0x51cafa(0x1be)] = _0x51cafa(0x81) + (_0x2af795 ? _0x51cafa(0x234) : '') + _0x51cafa(0x9c) + (_0x2af795 ? _0x51cafa(0x856) + _0xcb50dc + _0x51cafa(0x157) : _0x51cafa(0x1e5) + _0xcb50dc + _0x51cafa(0x546)) + _0x51cafa(0x86a) + (_0x2fdbcd ? _0x51cafa(0x234) : '') + _0x51cafa(0x9c) + (_0x2fdbcd ? _0x51cafa(0x548) + _0xcb50dc + _0x51cafa(0x49c) : _0x51cafa(0x3c4) + _0xcb50dc + _0x51cafa(0x421)) + _0x51cafa(0x2bd);
        const _0x3291c3 = _0x4a2dd5[_0x51cafa(0x25f)](_0x4577e7[_0x51cafa(0x6cd)]);
        _0x3291c3 && (_0x3291c3[_0x51cafa(0x1f7)] = _0x1e5bdf => {
            const _0x2c7b04 = _0x51cafa;
            _0x1e5bdf[_0x2c7b04(0x236)](), _0x1e5bdf[_0x2c7b04(0x7a5)](), _0x61dadc[_0x2c7b04(0x1b1)](_0xcb50dc) ? (_0x28dab6[_0x2c7b04(0x853)](_0x4f1c6f, _0xcb50dc), _0x28dab6['MwWvR'](_0x93d2c1, _0x2c7b04(0x856) + _0xcb50dc + _0x2c7b04(0x493))) : _0xdf862b(_0xcb50dc), _0x28dab6['lpOqS'](_0x3e3709);
        });
        const _0x14b8d0 = _0x4a2dd5[_0x51cafa(0x25f)](_0x51cafa(0x576));
        _0x14b8d0 && (_0x14b8d0['onclick'] = _0x222412 => {
            const _0x344bb2 = _0x51cafa;
            _0x222412[_0x344bb2(0x236)](), _0x222412[_0x344bb2(0x7a5)](), _0x178588[_0x344bb2(0x1b1)](_0xcb50dc) ? (_0x37b97f(_0xcb50dc), _0x93d2c1(_0x344bb2(0x548) + _0xcb50dc + ']\x20removed\x20from\x20Hosp\x20Watchlist.')) : _0x28dab6[_0x344bb2(0x1b7)](_0x43eabb, _0xcb50dc), _0x28dab6[_0x344bb2(0x5d9)](_0x3e3709);
        });
    }
    let _0x33ceb8 = 0x0, _0x375fa8 = ![], _0x4b6b72 = (_0xb2691a[_0x1fbd97(0x30a)] || 0x5) * 0x3e8, _0x5a3a61 = null;
    function _0xab1ec2() {
        const _0x1a949e = _0x1fbd97, _0x1f4011 = document[_0x1a949e(0x39d)](_0x1a949e(0x6c0));
        if (!_0x1f4011)
            return;
        const _0x1a900a = _0x4577e7[_0x1a949e(0xa4)](_0x112493), _0x5c0647 = _0x4b6b72 === 0x3e8, _0x4c91ed = _0x1a900a + '_' + _0x5c0647 + '_' + _0xb2691a[_0x1a949e(0x30a)] + '_' + _0x4b673b + '_' + _0x449e49();
        if (_0x4577e7[_0x1a949e(0x74d)](_0x1f4011[_0x1a949e(0x658)][_0x1a949e(0x4f5)], _0x4c91ed))
            return;
        _0x1f4011[_0x1a949e(0x658)][_0x1a949e(0x4f5)] = _0x4c91ed;
        if (!_0x4b673b) {
            _0x1f4011[_0x1a949e(0x1be)] = '<span\x20title=\x22Another\x20Torn\x20tab\x20is\x20polling\x20the\x20API\x20and\x20sharing\x20results\x20with\x20this\x20tab\x20(0\x20API\x20calls\x20from\x20here)\x22>🔗\x20Synced\x20tab\x20•\x200\x20API\x20calls</span>';
            return;
        }
        _0x1f4011['innerHTML'] = _0x1a949e(0x3b5) + _0x1a900a + '/' + _0x449e49() + _0x1a949e(0x5b8) + (_0x5c0647 ? _0x4577e7[_0x1a949e(0x62f)] : (_0xb2691a[_0x1a949e(0x30a)] || 0x5) + 's');
    }
    function _0xc2e00b() {
        const _0x4597f8 = _0x1fbd97;
        if (!_0xb2691a[_0x4597f8(0x735)])
            return null;
        const _0x10a558 = Array['from'](new Set([
            ..._0x61dadc,
            ..._0x178588
        ]));
        if (_0x10a558['length'] === 0x0)
            return null;
        const _0x346008 = Math[_0x4597f8(0x3ee)](_0x4577e7[_0x4597f8(0x1ef)](Date[_0x4597f8(0x6d4)](), 0x3e8));
        let _0x35d7ee = null, _0x3c1103 = Infinity;
        for (const _0x143492 of _0x10a558) {
            if (_0x48c321(_0x143492))
                continue;
            const _0x40640b = _0x4f991c[_0x143492]?.[_0x4597f8(0x3c1)];
            if (_0x40640b && _0x4577e7[_0x4597f8(0x7c4)](_0x40640b[_0x4597f8(0x4b6)], _0x4577e7[_0x4597f8(0x4b0)])) {
                const _0x856c01 = _0x40640b[_0x4597f8(0x206)] - _0x346008;
                _0x856c01 <= 0x3c && _0x856c01 >= -0x3c && _0x856c01 < _0x3c1103 && (_0x3c1103 = _0x856c01, _0x35d7ee = _0x143492);
            }
        }
        if (!_0x35d7ee)
            for (const _0x115643 of _0x10a558) {
                const _0x2944ca = _0x4f991c[_0x115643]?.[_0x4597f8(0x3c1)];
                if (_0x2944ca && _0x2944ca['state'] === _0x4577e7[_0x4597f8(0x4b0)]) {
                    const _0x292056 = _0x4577e7[_0x4597f8(0x63c)](_0x2944ca[_0x4597f8(0x206)], _0x346008);
                    _0x4577e7['DZryk'](_0x292056, 0x3c) && _0x292056 >= -0x3c && _0x292056 < _0x3c1103 && (_0x3c1103 = _0x292056, _0x35d7ee = _0x115643);
                }
            }
        return _0x35d7ee;
    }
    function _0x4696d1() {
        const _0x1aa2b5 = _0x1fbd97;
        if (!_0x5a3a61)
            return;
        const _0x4bf86a = _0x4577e7[_0x1aa2b5(0x47f)](_0xc2e00b), _0x32dc8a = _0x4bf86a ? 0x3e8 : (_0xb2691a[_0x1aa2b5(0x30a)] || 0x5) * 0x3e8;
        if (_0x32dc8a !== _0x4b6b72) {
            const _0x4a5a8 = _0x4b6b72 > _0x32dc8a;
            _0x4b6b72 = _0x32dc8a, _0x5a3a61['setIntervalMs'](_0x32dc8a), _0xab1ec2(), _0x4a5a8 && _0x4577e7[_0x1aa2b5(0x6d3)](_0x32dc8a, 0x3e8) && _0x4bf86a && _0x168494(_0x4bf86a);
        }
    }
    async function _0x168494(_0x17f332) {
        const _0x1c181c = _0x1fbd97;
        if (!_0x4b673b) {
            const _0x16d865 = {};
            _0x16d865['id'] = _0x17f332, _0x4577e7['VEQaW'](_0x5efbb7, _0x4577e7[_0x1c181c(0x25d)], _0x16d865);
            return;
        }
        const _0x2a4085 = await _0xe9a98d(_0x17f332);
        _0x2a4085 && (_0x1fe616(_0x17f332, _0x2a4085), _0x4696d1());
    }
    async function _0x3a53e2() {
        const _0x14bdad = _0x1fbd97, _0x140740 = _0xb2691a['isTradersPaused'] ? [] : _0x178588, _0x4a6efc = Array[_0x14bdad(0x8d)](new Set([
                ..._0x61dadc,
                ..._0x140740
            ]));
        if (!_0x4b673b || _0xb2691a[_0x14bdad(0x594)] || _0x4577e7[_0x14bdad(0x629)](_0x4a6efc[_0x14bdad(0x5a5)], 0x0) || _0x375fa8)
            return;
        _0x375fa8 = !![];
        try {
            const _0x22c584 = _0xc2e00b(), _0x42489c = _0x22c584 || _0x4a6efc[_0x4577e7[_0x14bdad(0x583)](_0x33ceb8, _0x4a6efc[_0x14bdad(0x5a5)])];
            !_0x22c584 && (_0x33ceb8 = (_0x33ceb8 + 0x1) % _0x4a6efc[_0x14bdad(0x5a5)]), await _0x168494(_0x42489c);
        } finally {
            _0x375fa8 = ![], _0x4696d1();
        }
    }
    function _0x706e21(_0x536153, _0x55f5e5) {
        const _0x391e97 = _0x1fbd97, _0x1beee3 = {
                'TXkcq': function (_0x9f5d3c, _0x155234) {
                    return _0x9f5d3c === _0x155234;
                },
                'jDseM': function (_0x1ac005) {
                    const _0x27cef1 = _0x5ca8;
                    return _0x4577e7[_0x27cef1(0x76f)](_0x1ac005);
                },
                'sfHBl': _0x391e97(0x117)
            };
        let _0x248bce = _0x536153, _0x53304d = null, _0x1ff9cd = null;
        try {
            const _0x4b2b5b = _0x391e97(0x7fe) + _0x536153 + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20self.onmessage\x20=\x20function(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20data\x20=\x20e.data;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(data\x20===\x20\x27start\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(timer)\x20clearInterval(timer);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timer\x20=\x20setInterval(function()\x20{\x20self.postMessage(\x27tick\x27);\x20},\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(data\x20===\x20\x27stop\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(timer)\x20clearInterval(timer);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timer\x20=\x20null;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(typeof\x20data\x20===\x20\x27object\x27\x20&&\x20data.type\x20===\x20\x27setInterval\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20interval\x20=\x20data.intervalMs;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(timer)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20clearInterval(timer);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20timer\x20=\x20setInterval(function()\x20{\x20self.postMessage(\x27tick\x27);\x20},\x20interval);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x82e4ed = {};
            _0x82e4ed[_0x391e97(0x6c)] = 'application/javascript';
            const _0x3cf9f9 = new Blob([_0x4b2b5b], _0x82e4ed);
            _0x53304d = new Worker(URL[_0x391e97(0x73f)](_0x3cf9f9)), _0x53304d['onmessage'] = function (_0x5d66ab) {
                const _0x22eb4f = _0x391e97;
                if (_0x1beee3['TXkcq'](_0x5d66ab[_0x22eb4f(0x3c1)], _0x22eb4f(0x104)))
                    _0x1beee3[_0x22eb4f(0x29e)](_0x55f5e5);
            }, _0x53304d[_0x391e97(0x32c)](_0x391e97(0x400));
        } catch (_0xc2311f) {
            console[_0x391e97(0x257)]('[Stakeout]\x20Web\x20Worker\x20fallback\x20to\x20setInterval:', _0xc2311f), _0x1ff9cd = setInterval(_0x55f5e5, _0x536153);
        }
        return {
            'setIntervalMs': _0x417639 => {
                const _0x2d1fdb = _0x391e97;
                if (_0x4577e7[_0x2d1fdb(0x614)](_0x417639, _0x248bce))
                    return;
                _0x248bce = _0x417639;
                if (_0x53304d) {
                    const _0x290597 = {};
                    _0x290597[_0x2d1fdb(0x6c)] = 'setInterval', _0x290597[_0x2d1fdb(0x535)] = _0x417639, _0x53304d['postMessage'](_0x290597);
                } else
                    _0x1ff9cd && (clearInterval(_0x1ff9cd), _0x1ff9cd = _0x4577e7['tzxau'](setInterval, _0x55f5e5, _0x417639));
            },
            'terminate': () => {
                const _0x55bd64 = _0x391e97;
                _0x53304d && (_0x53304d[_0x55bd64(0x32c)](_0x1beee3[_0x55bd64(0x721)]), _0x53304d[_0x55bd64(0x21b)]());
                if (_0x1ff9cd)
                    clearInterval(_0x1ff9cd);
            }
        };
    }
    function _0x22b37d() {
        const _0x5ba466 = _0x1fbd97, _0x6bd4be = {
                'QRvbs': function (_0x307efb, _0x37ed50) {
                    return _0x307efb(_0x37ed50);
                },
                'gOMXa': _0x4577e7[_0x5ba466(0x28f)],
                'vVDkc': function (_0x2f13cc, _0xb2affa) {
                    const _0x24c699 = _0x5ba466;
                    return _0x4577e7[_0x24c699(0x764)](_0x2f13cc, _0xb2affa);
                },
                'CFZlX': _0x4577e7[_0x5ba466(0x6e4)],
                'lRZIP': _0x4577e7['fpNEV']
            };
        let _0x5938de = 0x0;
        const _0x5c26be = setInterval(() => {
            const _0x403cc3 = _0x5ba466;
            _0x5938de++;
            const _0xec58b9 = document[_0x403cc3(0x65d)](_0x403cc3(0x13b)), _0x16c631 = [..._0xec58b9][_0x403cc3(0x3af)](_0x3bc66f => (_0x3bc66f['textContent'] || '')['includes']('👑'));
            if ((_0xec58b9[_0x403cc3(0x5a5)] > 0x1 || _0x16c631) && !document['getElementById'](_0x403cc3(0x43f))) {
                _0x6bd4be['QRvbs'](clearInterval, _0x5c26be);
                const _0x1a4200 = document[_0x403cc3(0x35d)](_0x403cc3(0x1b9));
                _0x1a4200['id'] = _0x6bd4be[_0x403cc3(0x518)], _0x1a4200[_0x403cc3(0x2c5)][_0x403cc3(0x5d6)] = _0x6bd4be[_0x403cc3(0x375)](_0x6bd4be[_0x403cc3(0x3ef)], 'background:\x20rgba(69,\x2010,\x2010,\x200.97);\x20border:\x201px\x20solid\x20#ef4444;\x20color:\x20#fee2e2;\x20border-radius:\x208px;\x20padding:\x208px\x2010px;\x20') + _0x403cc3(0x5de), _0x1a4200[_0x403cc3(0x1be)] = _0x403cc3(0x83b), _0x1a4200[_0x403cc3(0x25f)](_0x6bd4be['lRZIP'])[_0x403cc3(0x1f7)] = () => _0x1a4200[_0x403cc3(0x172)](), document['body'][_0x403cc3(0x159)](_0x1a4200);
            } else
                _0x5938de >= 0x1e && clearInterval(_0x5c26be);
        }, 0x7d0);
    }
    function _0x3eb89c() {
        const _0x5671c2 = _0x1fbd97, _0xbfe0b2 = {
                'yeLLI': function (_0x408fa2) {
                    return _0x4577e7['wsmax'](_0x408fa2);
                },
                'aBufj': function (_0x5f00f0) {
                    const _0x4273c2 = _0x5ca8;
                    return _0x4577e7[_0x4273c2(0x15e)](_0x5f00f0);
                },
                'Tbrvl': function (_0x33c0de, _0x2ea67b) {
                    return _0x33c0de !== _0x2ea67b;
                },
                'zBxCM': function (_0x23f34f, _0x3f817f) {
                    return _0x23f34f > _0x3f817f;
                },
                'PNHsl': 'none',
                'FaNgJ': function (_0x259289, _0x2563f6) {
                    return _0x259289 === _0x2563f6;
                },
                'EPojY': _0x4577e7[_0x5671c2(0x511)],
                'qpwCF': function (_0x3b4fa0) {
                    return _0x3b4fa0();
                },
                'klEhA': function (_0x10918c) {
                    return _0x10918c();
                },
                'wQzRg': function (_0x2f0e11) {
                    const _0x30af30 = _0x5671c2;
                    return _0x4577e7[_0x30af30(0x87a)](_0x2f0e11);
                }
            };
        if (!document[_0x5671c2(0x198)]) {
            setTimeout(_0x3eb89c, 0x64);
            return;
        }
        _0x1fabf0(), _0x4577e7[_0x5671c2(0x871)](_0x22b37d), _0x45bc81(), _0x176af6(), _0x4577e7['budZw'](_0x3e3709), _0x4577e7['AJFHL'](_0x3b6d79), _0x2ed3c0(), _0x4577e7[_0x5671c2(0x612)](setInterval, () => {
            const _0x5c0572 = _0x5671c2;
            _0x2edff3(), _0x52a870(), _0xbfe0b2[_0x5c0572(0x23f)](_0x57270d), _0x4696d1(), _0xab1ec2();
            if (_0xb2691a[_0x5c0572(0x709)])
                return;
            _0xbfe0b2[_0x5c0572(0x83a)](_0x34ecf3);
            const _0x100cea = document[_0x5c0572(0x39d)](_0x5c0572(0x1df));
            if (_0x100cea && _0x4c3563('fw')) {
                const _0x472c66 = _0xbfe0b2[_0x5c0572(0x83a)](_0x23f20c);
                if (_0xbfe0b2[_0x5c0572(0x123)](_0x100cea[_0x5c0572(0x235)], String(_0x472c66)))
                    _0x100cea['textContent'] = _0x472c66;
                _0x100cea[_0x5c0572(0x2c5)][_0x5c0572(0x36b)] = _0xbfe0b2[_0x5c0572(0x784)](_0x472c66, 0x0) ? _0x5c0572(0x808) : _0xbfe0b2[_0x5c0572(0x460)];
            }
            if (_0x26e1e9 === _0x5c0572(0x787))
                _0x61dadc[_0x5c0572(0x136)](_0x3774aa => _0x70efbf(_0x3774aa));
            else
                _0xbfe0b2[_0x5c0572(0x4c9)](_0x26e1e9, _0xbfe0b2[_0x5c0572(0x162)]) ? _0x44c5cb[_0x5c0572(0x136)](_0x209418 => _0x2c2af8(_0x209418['id'])) : _0x178588[_0x5c0572(0x136)](_0x5777c1 => _0x2e01b9(_0x5777c1));
        }, 0x3e8), _0x4577e7[_0x5671c2(0xb6)](_0x706e21, 0x3e8, () => {
            const _0x2f3df2 = _0x5671c2;
            _0xbfe0b2[_0x2f3df2(0x52a)](_0x41953a), _0xbfe0b2[_0x2f3df2(0x7d4)](_0x1cfd82), _0x5b900d(), _0x13f898();
        }), _0x4577e7[_0x5671c2(0x246)](setInterval, () => _0x534083(), 0xea60), setInterval(_0x2acae7, 0x5dc);
        const _0x3dab59 = () => {
            const _0x418e09 = _0x5671c2;
            _0x4577e7[_0x418e09(0x4c6)](_0x2acae7);
            if (_0x4577e7[_0x418e09(0xdc)](document[_0x418e09(0x2dd)], _0x418e09(0x309)) && document[_0x418e09(0x540)]())
                _0x5efbb7(_0x418e09(0x51b));
        };
        window[_0x5671c2(0x27c)](_0x4577e7[_0x5671c2(0x1f5)], _0x3dab59), document[_0x5671c2(0x27c)](_0x4577e7[_0x5671c2(0x4ae)], _0x3dab59), setInterval(() => {
            const _0x4a9b5d = _0x5671c2;
            window[_0x4a9b5d(0x289)][_0x4a9b5d(0x83c)]['includes'](_0x4a9b5d(0x7a3)) && _0xbfe0b2[_0x4a9b5d(0x7d4)](_0x3e3709);
        }, 0x7d0), _0x5a3a61 = _0x706e21(_0x4b6b72, _0x3a53e2), _0x4577e7[_0x5671c2(0x2c3)](setInterval, () => _0x59d7e0(), 0xa * 0x3c * 0x3e8), _0x459177();
        if (_0x1aa45f)
            _0x4577e7['mTYto'](_0xa05f9c);
        setTimeout(() => {
            const _0x1b6767 = _0x5671c2;
            !_0x4b673b && (_0xbfe0b2[_0x1b6767(0x3da)](_0x2acae7), _0x5efbb7(_0x1b6767(0x46b)));
        }, 0x12c);
    }
    typeof GM_registerMenuCommand !== _0x1fbd97(0x339) && (_0x4577e7[_0x1fbd97(0x2ad)](GM_registerMenuCommand, _0x1fbd97(0x2c2), () => _0x3f6f63(!![])), _0x4577e7[_0x1fbd97(0x806)](GM_registerMenuCommand, _0x1fbd97(0x31d), () => {
        const _0x2c1248 = _0x1fbd97;
        _0xb2691a['isMinimized'] = !_0xb2691a[_0x2c1248(0x709)], _0x3f8be3(), _0x176af6();
    }), GM_registerMenuCommand(_0x1fbd97(0xd3), () => _0x44e0a8())), _0x4577e7['OVmRp'](document[_0x1fbd97(0x732)], 'loading') ? window[_0x1fbd97(0x27c)](_0x1fbd97(0x119), _0x3eb89c) : _0x3eb89c();
}()));
