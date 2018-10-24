var utm_re = new RegExp('([\?\&]((g|fb)clid|utm_(source|medium|term|campaign|content|cid|reader|name))=[^&#]+)', 'ig');

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var url = details.url;
    var queryStringIndex = url.indexOf('?');
    if (url.indexOf('utm_') > queryStringIndex || url.indexOf('clid') > queryStringIndex) {
        var stripped = url.replace(utm_re, '');
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
