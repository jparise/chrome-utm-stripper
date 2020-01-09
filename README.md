# Tracking Token Stripper

This is a Chrome and Firefox browser extension that strips Google Analytics
(i.e. [Urchin Tracking Monitor][utm]) tokens, and Google and Facebook click
tracking identifiers, from URL query strings. This is done *before* the web
request is made and results in both more private browsing as well as more
aesthetically pleasing URLs.

Install from the [Chrome Web Store][store] or [Firefox Add-ons][addons].

The following query string parameters are stripped:

 - fbclid
 - gclid
 - igshid
 - _hsenc
 - _hsmi
 - ICID
 - mc_cid
 - mc_eid
 - mkt_tok
 - utm_source
 - utm_medium
 - utm_term
 - utm_campaign
 - utm_content
 - utm_cid
 - utm_reader
 - utm_referrer
 - utm_name
 - utm_social
 - utm_social-type

This extension requires these [permissions][]:

 - `webRequest`, to use the [`chrome.webRequest` API][webRequest]
 - `webRequestBlocking`, to use `chrome.webRequest` in a blocking fashion
 - `http://*/*?*`, to filter http URLs
 - `https://*/*?*`, to filter https URLs

[![Urchin Logo](icon-128.png "Urchin Logo")](http://www.openclipart.org/detail/69997)

[Urchin Logo](http://www.openclipart.org/detail/69997) by Jordan Irwin / Deluge.

[utm]: https://en.wikipedia.org/wiki/UTM_parameters
[store]: https://chrome.google.com/webstore/detail/kcpnkledgcbobhkgimpbmejgockkplob
[addons]: https://addons.mozilla.org/addon/utm-tracking-token-stripper/
[permissions]: https://developer.chrome.com/extensions/declare_permissions
[webRequest]: https://developer.chrome.com/extensions/webRequest
