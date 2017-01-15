(function (root) {
    'use strict';

    function assert(cond, msg) {
        if (!cond) throw new Error(msg || 'AssertionError');
    }

    function makeRequest(url, callback) {
        // do implementacji
    }

    function randomInteger(used = []) {
        // do implementacji
    }

    function removeHTMLTags(htmlString) {
        // do implementacji
    }

    // eksport publicznych funkcji
    root.blog.utils = {
        assert: assert,
        makeRequest: makeRequest,
        randomInteger: randomInteger,
        removeHTMLTags: removeHTMLTags
    };
}(window));
