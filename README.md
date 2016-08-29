# Chome Tracking Token Stripper

This is a Google Chrome extension that strips Google Analytics (i.e. [Urchin
Tracking Monitor][utm]) tokens from URL query strings. This is done *before*
the web request is made and result in both more private browsing as well as
more aestethicly-pleasing URLs.

Install from the [Chrome Web Store][store].

The following [Google Analytics query string parameters][params] are stripped:

 - utm_source
 - utm_medium
 - utm_term
 - utm_campaign
 - utm_content
 - utm_cid
 - utm_reader

This extension requires these [permissions][]:

 - `webRequest`, to use the [`chrome.webRequest` API][webRequest]
 - `webRequestBlocking`, to use `chrome.webRequest` in a blocking fashion
 - `http://*/*?*`, to filter http URLs
 - `https://*/*?*`, to filter https URLs

[![Urchin Logo](icon-128.png "Urchin Logo")](http://www.openclipart.org/detail/69997)

[Urchin Logo](http://www.openclipart.org/detail/69997) by Jordan Irwin / Deluge.

[utm]: https://support.google.com/urchin/answer/28307?hl=en
[store]: https://chrome.google.com/webstore/detail/kcpnkledgcbobhkgimpbmejgockkplob
[params]: http://www.google.com/support/analytics/bin/answer.py?answer=55578
[permissions]: https://developer.chrome.com/extensions/declare_permissions
[webRequest]: https://developer.chrome.com/extensions/webRequest
