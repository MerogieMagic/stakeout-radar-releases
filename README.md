# 🎯 Mercenary Stakeout Radar

A stakeout radar for Torn City mercenaries: it watches your targets and tells you the moment they can be hit. It can also track hospital timers, walls and Early Discharge, faction turtle contracts, chain targets and traders.

**[⬇️ Install for Tampermonkey / Violentmonkey](https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_mercenary_stakeout.user.js)** · 🎁 **24-hour free trial** of every module, inside the radar · Made by [Merogie [4054802]](https://www.torn.com/profiles.php?XID=4054802)

The install link gives you the free radar. Paid modules and the free trial run in your own [personal copy](#-your-personal-copy), one click away in the radar's Store.

![Radar with targets](images/radar-targets.png)

## What it does

**Free for everyone**
- Watch 1 target: hospital timer and an alert when they're out.
- Energy remaining on the attack screen ("125/150 E · 5 hits").
- A small counter in the header shows your API calls per minute.
- Works with several Torn tabs open: only one tab polls the API and only one tab rings, so your API usage doesn't multiply.

**Paid modules** (each one on its own, or all of them together)

| Module | Code | What you get |
|---|---|---|
| 🎯 **Sniper Pro** | `SP` | Unlimited targets, attack-eligible alarm (out of hospital **and** active within your limit), inactivity filter, **Early Discharge and wall detection** (ranked wars; territory walls in either role: attacking or defending), contract auto-pause, illegal-hit evidence cards, faster polling near discharge. Long lists fold into one-line rows: last action, HP bar, hospital countdown and a Hit button. |
| 🏴 **Faction Watch** | `FW` | Turtle contracts: watch a client faction and see which members are eligible (offline / idle for at least X minutes), Stricken or Standard weapon reminder, and an eligibility check on the attack screen. |
| 🔗 **Chain Kit** | `CK` | Chain timer bells, and a Smart Pool of verified level-1 targets that skips anyone in hospital, jail, abroad, federal or under new-citizen protection. Each merc gets a different random pool, so you don't collide. Includes a one-key "Attack Next Target" bar on the attack screen. |
| 💼 **Trader Watch** | `TW` | Trader watchlist with out-of-hospital alerts for safe-keeping hospitalization services. |
| ⭐ **Full Radar** | `FULL` | All four modules. |

**One-line rows** (more than 4 targets; you can change the number in Options). Each row shows, left to right: online status, time since last action, name, then an HP bar when they're out or a red ✚ with their hospital time, a 🧱 when they're on a wall, ✈️ when travelling, and the **Hit** button (green when they can be hit). Click a row to open its full card.

<p>
<img src="images/radar-compact.png" width="380" alt="One-line rows for a long target list">
<img src="images/faction-watch.png" width="380" alt="Faction Watch contract">
</p>

![Attack screen bar](images/attack-bar.png)

<img src="images/options.png" width="380" alt="Options grouped by module">

## Pricing

| | Price |
|---|---|
| One module | **1 Xanax per 7 days** |
| Full Radar (`FULL`) | **2 Xanax per 7 days** |
| Free trial | **24 hours of everything**, once per Torn account (accounts 7+ days old) |

**How to buy:** on your Items page, send Xanax to **Merogie [4054802]** with the module code as the message, for example `CK`.
- Paying again before your time runs out adds to it.
- For several modules in one gift, put all the codes in the message and send 1 Xanax per code: `CK FW` with 2 Xanax gives a week of each.
- Payments are picked up automatically, usually within 2 minutes. The radar's **🛒 Store** shows your days left, and its **I've paid** button unlocks without a page reload.
- If the message doesn't match a code exactly, the gift is still applied: first to the first code it can pay for, otherwise to the module whose code starts with the first matching letter (C → Chain Kit, F → Faction Watch, S → Sniper Pro, T → Trader Watch).

![Store](images/store.png)

## ⭐ Your personal copy

The paid modules are not in the public download. Once you have paid or started the free trial, the Store offers **⭐ Get my personal copy**: a copy of the radar made for your Torn account.

- **Install it once.** It replaces the free copy and keeps your targets and settings. It updates itself from then on.
- **It runs only for you.** On another player's account it switches itself off and offers them the free radar instead.
- **Changed your Torn name?** The radar asks you to get a copy with your new name: one click, then Install. Your time and settings are kept.
- **When your time runs out,** the paid modules lock straight away, and your copy turns into the free radar at the next release. Pay again and your copy offers the update that brings the modules back.
- **Keep it to yourself.** Every copy can be traced to the account it was made for, and a link that gets shared can be cancelled.

## Setup

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/), then click **[Install](https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_mercenary_stakeout.user.js)**.
2. Open Torn. The radar asks for an API key. Click **✨ Generate key**: Torn opens its key page with only the access the radar needs already ticked (a Custom key). Create it, then paste it in.
3. To try every module, open **🛒 Store** and click **🎁 Start 24h free trial**. To buy, see [Pricing](#pricing).
4. Then click **⬇️ Install my copy** in the Store, choose Install / Reinstall in the tab that opens, and refresh Torn.

Updates install automatically. When a new version is out, the radar shows an **Update now** banner.

## Privacy and API terms

This follows the disclosure asked for by Torn's API terms of use.

| | |
|---|---|
| **Data storage** | Everything the radar fetches about your targets, factions and traders stays in your browser. The license server stores only: your player ID and player name, which modules you have and until when, a history of your payments (log ID, Xanax amount and message), and, if you used the free trial, when you started it. Your personal copy contains your player ID and name, so it runs only on your account. |
| **Data sharing** | None. Nothing is shared with or sold to anyone. |
| **Purpose of use** | Showing you, the key owner, when your own targets can be hit; and licensing the paid modules. |
| **Key storage and sharing** | Your key is stored only in your browser's userscript storage. It is used to call `api.torn.com` directly. It is sent to the license server only when you start the free trial or ask for your personal copy, so Torn can confirm your player ID and name; it is used for that single call and never stored or logged. |
| **Key access level** | A Custom key with: user `basic, profile, bars, cooldowns`, faction `basic`, torn `rankedwars, territorywars`. Use **✨ Generate key** to create exactly that. |

The seller's own server reads only the seller's item log (Custom key: user → log) to detect Xanax payments.

## Support

Message **[Merogie [4054802]](https://www.torn.com/profiles.php?XID=4054802)** in Torn. If a payment hasn't shown up after a few minutes, include the time you sent it and the message you used.

*This is a fan-made tool and is not affiliated with or endorsed by Torn.*

---

## Other scripts by Merogie

These are free. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/), then click a link:

- ⚔️ **FF Scouter V2 + BS Threat Border + War Sorter**: [Install](https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/ff_scouter_bs_enhanced.user.js)
- ✈️ **Abroad Stock Restock Alert**: [Install](https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_abroad_stock_alert.user.js)
- 🛒 **Shop Restock Alerts & Quick Buy**: [Install](https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_restock_alerts.user.js)

### 📱 Torn PDA

In Torn PDA go to **Settings → Advanced → User Scripts → Add**, and paste one of these URLs:

- 🎯 Stakeout Radar (PDA): `https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/tornpda_stakeout_radar.user.js`
- ⚔️ War Sorter Enhanced (PDA): `https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/tornpda_war_enhanced.user.js`
- ✈️ Abroad Stock Restock Alert: `https://raw.githubusercontent.com/MerogieMagic/stakeout-radar-releases/main/torn_abroad_stock_alert.user.js`

The other scripts never ship with an API key: each asks for your own, keeps it in your browser's script storage, and sends it only to `api.torn.com`.

Scripts installed from the old `Enhanced-FF-Scouter-Script` links must be reinstalled once from the links above to keep receiving updates.
