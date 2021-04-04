function getParameter() {
    var all = location.search;//获取包括“?”的参数
    var obj = {};//新建对象
    if (all.indexOf("?") != -1) {//检查是否有参数
        var content = all.substr(1);//去“?”
        var array = content.split("&");//用“&”分割
        for (var i = 0; i < array.length; i++) {
            var newArray = array[i].split("=");//把单参数分割
            obj[newArray[0]] = newArray[1];//输入参数至对象
        }
    }
    return obj
}
var data = allData[getParameter().id];
console.log(data);
var loadDataContent = "static/js/write-data.js?" + new Date().getTime();
document.write('<script src="' + loadDataContent + '"></script>');