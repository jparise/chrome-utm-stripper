# Tracking Token Stripper

This is a Chrome and Firefox browser extension that strips Google Analytics
(i.e. [Urchin Tracking Monitor][utm]) parameters, and various other click
tracking tokens, from URL query strings. This is done *before* the web request
is made and results in both more private browsing as well as more aesthetically
pleasing URLs.

Install from the [Chrome Web Store][store] or [Firefox Add-ons][addons].

## Recognized Parameters

The following query string parameters are stripped:

- Facebook
  - `fbclid`
- Google
  - `gclid`
  - `utm_source`
  - `utm_medium`
  - `utm_term`
  - `utm_campaign`
  - `utm_content`
  - `utm_cid`
  - `utm_reader`
  - `utm_referrer`
  - `utm_name`
  - `utm_social`
  - `utm_social`-type
- [HubSpot](https://www.hubspot.com/)
  - `_hsenc`
  - `_hsmi`
- Instagram
  - `igshid`
- Mailchimp
  - `mc_cid`
  - `mc_eid`
- [Marketo](https://www.marketo.com/)
  - `mkt_tok`
- [Olytics](https://main.omeda.com/knowledge-base/olytics-product-outline/)
  - `oly_anon_id`
  - `oly_enc_id`
  - `otc`
- [Wicked Reports](https://www.wickedreports.com/)
  - `wickedid`
- Yahoo
  - `soc_src`
  - `soc_trk`
- [Yandex](https://yandex.com/support/direct/statistics/)
  - `_openstat`
  - `yclid`
- Other
  - `ICID`
  - `rb_clickid`
  - `stm_` variants of the `utm_` parameters

## Permissions

This extension requires these [permissions][]:

 - `webRequest`, to use the [`chrome.webRequest` API][webRequest]
 - `webRequestBlocking`, to use `chrome.webRequest` in a blocking fashion
 - `http://*/*?*`, to filter http URLs
 - `https://*/*?*`, to filter https URLs

## Logo

[![Urchin Logo](icon-128.png "Urchin Logo")](http://www.openclipart.org/detail/69997)

[Urchin Logo](http://www.openclipart.org/detail/69997) by Jordan Irwin / Deluge.

[utm]: https://en.wikipedia.org/wiki/UTM_parameters
[store]: https://chrome.google.com/webstore/detail/kcpnkledgcbobhkgimpbmejgockkplob
[addons]: https://addons.mozilla.org/addon/utm-tracking-token-stripper/
[permissions]: https://developer.chrome.com/extensions/declare_permissions
[webRequest]: https://developer.chrome.com/extensions/webRequest
