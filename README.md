# Tracking Token Stripper

This is a Chrome and Firefox browser extension that strips Google Analytics
(i.e. [Urchin Tracking Monitor][utm]) parameters, and various other click
tracking tokens, from URL query strings. This is done *before* the web request
is made and results in both more private browsing as well as more aesthetically
pleasing URLs.

You can install this extension from the [Chrome Web Store][chrome-webstore],
[Firefox Add-ons][firefox-addons], or [Edge Add-ons][edge-addons].

> [!IMPORTANT]
> Google Chrome and the Chrome Web Store now label Manifest V2 extensions as
> ["unsupported"](https://support.google.com/chrome_webstore/answer/2664769#unsupported_extensions).
>
> I'm not motivated to rewrite this extension from Manifest V2 to V3. The work
> appears to be non-trivial for this kind of extension, and after that amount
> of effort, it won't work any "better" than the current version.
>
> Please see the [list of alternatives](#alternatives) below if you need
> another solution.

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
  - `utm_internal`
  - `utm_klaviyo_id`
  - `utm_reader`
  - `utm_referrer`
  - `utm_name`
  - `utm_social`
  - `utm_social-type`
- [ActiveCampaign](https://www.activecampaign.com/)
  - `vgo_ee`
- [HubSpot](https://www.hubspot.com/)
  - `_hsenc`
  - `_hsmi`
- Instagram
  - `igshid`
- [Klaviyo](https://www.klaviyo.com/)
  - `utm_klaviyo_id`
- Mailchimp
  - `mc_cid`
  - `mc_eid`
- [Marketo](https://www.marketo.com/)
  - `mkt_tok`
- Microsoft (MSN/Bing)
  - `cvid`
  - `oicd`
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

## Alternatives

### uBlock Origin

[uBlock Origin][ublock] includes a [`removeparam`][removeparam] feature that
supports fine-grained matching and removal of query string parameters. The
[AdGuard URL Tracking Protection][adguard] list provides well-maintained
coverage for a large number of domains and query string tokens.

[ublock]: https://github.com/gorhill/uBlock
[removeparam]: https://github.com/gorhill/uBlock/wiki/Static-filter-syntax#removeparam
[adguard]: https://github.com/AdguardTeam/AdguardFilters#adguard-filters

### Firefox

Firefox 102 [introduced](https://bugzilla.mozilla.org/show_bug.cgi?id=1763660)
built-in removal of tracking query string parameters. In Privacy & Security
settings, ensure Enhanced Tracking Protection is set to Strict (required to
activate the query string feature). The default set of removed query params is
limited, but you can configure your own via the
`privacy.query_stripping.strip_list` pref as a space-separated list.

### StopTheMadness

[StopTheMadness](https://underpassapp.com/StopTheMadness/) for Apple platforms
(Safari on iOS and iPadOS; Safari, Firefox, Chrome, and Chromium browsers on
macOS) lets you customize the list of query tracking parameters that are
automatically removed from URLs, including domain-specific removal.

### Other Extensions

* [ClearURLs](https://gitlab.com/ClearURLs/ClearUrls)
* [URL Tracking Stripper](https://github.com/newhouse/url-tracking-stripper)

## Logo

[![Urchin Logo](icon-128.png "Urchin Logo")](https://openclipart.org/detail/69997)

[Urchin Logo](https://openclipart.org/detail/69997) by Jordan Irwin / Deluge.

[utm]: https://en.wikipedia.org/wiki/UTM_parameters
[chrome-webstore]: https://chrome.google.com/webstore/detail/kcpnkledgcbobhkgimpbmejgockkplob
[firefox-addons]: https://addons.mozilla.org/addon/utm-tracking-token-stripper/
[edge-addons]: https://microsoftedge.microsoft.com/addons/detail/mbhhijmdgnjdckplligicmjadcpndioj
[permissions]: https://developer.chrome.com/extensions/declare_permissions
[webRequest]: https://developer.chrome.com/extensions/webRequest
