// ==UserScript==
// @name        iDnes cleaner
// @namespace   cz.iDnes
// @include     http://zpravy.idnes.cz/diskuse.aspx*
// @version     0.1
// @grant       none
// ==/UserScript==

window.addEventListener('load',
    function() {
        var names = document.evaluate("//h4/a", document.body, null, XPathResult.ANY_TYPE, null);
        var name = names.iterateNext();
        while (name) {
            name.innerHTML = name.innerHTML.replace(/<i>[0-9]+<\/i>/g,"")
            console.log(name);
            name = names.iterateNext();
        }
    },
true);
