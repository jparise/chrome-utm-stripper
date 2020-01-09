/*
 * Pattern matching the prefix of at least one stripped query string
 * parameter. We'll search the query string portion of the URL for this
 * pattern to determine if there's any stripping work to do.
 */
var searchPattern = new RegExp('utm_|clid|_hs|icid|igshid|mc_|mkt_tok', 'i');

/*
 * Pattern matching the query string parameters (key=value) that will be
 * stripped from the final URL.
 */
var replacePattern = new RegExp(
    '([?&]' +
    '(icid|mkt_tok|(g|fb)clid|igshid|_hs(enc|mi)|mc_[ce]id|utm_(source|medium|term|campaign|content|cid|reader|referrer|name|social|social-type))' +
    '=[^&#]*)',
    'ig');

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var url = details.url;
    var queryStringIndex = url.indexOf('?');
    if (url.search(searchPattern) > queryStringIndex) {
        var stripped = url.replace(replacePattern, '');
        if (stripped.charAt(queryStringIndex) === '&') {
            stripped = stripped.substr(0, queryStringIndex) + '?' +
                stripped.substr(queryStringIndex + 1)
        }
        if (stripped != url) {
            return {redirectUrl: stripped};
        }
    }
},
{urls: ['https://*/*?*', 'http://*/*?*'], types: ['main_frame']}, ['blocking']);
