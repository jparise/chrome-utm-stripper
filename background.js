/*
 * Pattern matching the prefix of at least one stripped query string
 * parameter. We'll search the query string portion of the URL for this
 * pattern to determine if there's any stripping work to do.
 */
const searchPattern = new RegExp('utm_|stm_|clid|_hs|icid|igshid|mc_|mkt_tok|yclid|_openstat|wicked|otc|oly_|rb_clickid|soc_', 'i');

/*
 * Pattern matching the query string parameters (key=value) that will be
 * stripped from the final URL.
 */
const replacePattern = new RegExp(
    '([?&#]' +
    '(icid|mkt_tok|(g|fb)clid|igshid|_hs(enc|mi)|mc_[ce]id|(utm|stm)_(source|medium|term|campaign|content|cid|reader|referrer|name|social|social-type)|rb_clickid|yclid|_openstat|wickedid|otc|oly_(anon|enc)_id|soc_(src|trk))' +
    '=[^&#]*)',
    'ig');

chrome.webRequest.onBeforeRequest.addListener((details) => {
    const url = details.url;
    const queryStringIndex = url.indexOf('?');
    if (url.search(searchPattern) > queryStringIndex) {
        let stripped = url.replace(replacePattern, '');
        if (stripped.charAt(queryStringIndex) === '&') {
            stripped = `${stripped.substr(0, queryStringIndex)}?${stripped.substr(queryStringIndex + 1)}`;
        }
        if (stripped != url) {
            return {redirectUrl: stripped};
        }
    }
},
{urls: ['https://*/*?*', 'http://*/*?*'], types: ['main_frame']}, ['blocking']);
