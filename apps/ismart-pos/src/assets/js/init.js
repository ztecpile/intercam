export function initParameter() {

    // console.log("URL: ", document.URL);
    var urlParams = document.URL;
    urlParams = String(urlParams.match(/\?+.+/));
    if (urlParams == "null") {
        return;
    }
    urlParams = urlParams.replace("?", "");
    urlParams = urlParams.split("&");
    var x = 0;
    while (x < urlParams.length) {
        var p = urlParams[x].split("=");
        // console.log('parameter', p)
        var valor = decodeURIComponent(p[1]);
        console.log(p[0], valor);
        sessionStorage.setItem(p[0], valor);
        x++;
    }

    window.history.replaceState({}, document.title, "/");
}