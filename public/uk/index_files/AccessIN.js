var AccessIN_func = function() {
    var ai_form = document.querySelector("#AccessIN_form");
    if (ai_form) {
        var AccessIN_submit = function() {
            var ai_url = document.querySelector("#AccessIN_url");
            ai_url.value = window.location.href;
            var ai_dom = document.querySelector("#AccessIN_dom");
            ai_dom.value = document.querySelector("html").outerHTML;
        }
        if (ai_form.addEventListener) {
            ai_form.addEventListener("submit", AccessIN_submit, false);
        }
        else {
            ai_form.attachEvent("onsubmit", AccessIN_submit);
        }
    }
}

if (window.addEventListener) {
    window.addEventListener("load", AccessIN_func, false);
}
else {
    window.attachEvent("onload", AccessIN_func);
}

