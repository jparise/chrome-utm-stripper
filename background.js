chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var queryStringIndex = tab.url.indexOf('?');
    if (tab.url.indexOf('utm_') > queryStringIndex) {
        var stripped = tab.url.replace(
            /([\?\&]utm_(source|medium|term|campaign|content|cid)=[^&#]+)/ig,
            '');
        if (stripped.charAt(queryStringIndex) === '&') {
            stripped = stripped.substr(0, queryStringIndex) + '?' +
                stripped.substr(queryStringIndex + 1)
        }
        if (stripped != tab.url) {
            chrome.tabs.update(tab.id, {url: stripped});
        }
    }
});
