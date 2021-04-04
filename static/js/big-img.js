function bigImg(obj) {
    var imgSrc = obj.getAttribute("src");
    window.open(imgSrc, "_self");
}

document.onreadystatechange = function(){
    if (document.readyState == "interactive") {
        var imgs = document.getElementsByTagName("img");
        for (i = 0; i < imgs.length; i++) {
            var img = imgs[i];
            if (img.onclick != ""){
                img.setAttribute("onclick", "bigImg(this)");
                img.style.cursor = "pointer";
            }
        }
    }
}