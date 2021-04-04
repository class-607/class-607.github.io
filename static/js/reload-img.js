function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}

function timeSleep(ms) {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= ms) {/* wait */ };
}

function checkReloadImg() {
    var reloadImgTime = getCookie("reload_img_time");
    if (reloadImgTime != "") {
        var imgs = document.getElementsByTagName("img");
        for (i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            var imgSrcBefore = img.getAttribute("src");
            img.setAttribute("src", "");
            var imgSrcList = imgSrcBefore.split("?");
            var imgSrc = imgSrcList[0];
            img.setAttribute("src", imgSrc + "?" + reloadImgTime);
        }
    }
}

function reloadImg() {
    time = new Date().getTime()
    setCookie("reload_img_time", time, "366");
    checkReloadImg();
}

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        checkReloadImg();
    }
}