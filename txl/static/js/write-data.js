window.onload = function () {
    try {
        data.attri.id = getParameter().id;
        console.log(data.attri.id);
        //页面标题
        document.title = data.attri.name + "的同学录";
        //头像
        var avatar = document.getElementById("avatar");
        avatar.setAttribute("src", "/img/txl/avatar/" + data.attri.id + ".png");
        //头像链接
        var avatarLink = document.getElementById("avatarLink");
        avatarLink.setAttribute("href", "/img/txl/avatar/" + data.attri.id + ".png");
        //姓名
        var name1 = document.getElementById("name");
        name1.innerHTML = data.attri.name;
        //认证
        var sert = document.getElementById("sert");
        sert.innerHTML = data.attri.sert;
        //简介
        var intro = document.getElementById("intro");
        intro.innerHTML = data.attri.intro;
        //学号
        var id = document.getElementById("id");
        id.innerHTML = data.attri.id;
        //爱好
        var hobby = document.getElementById("hobby");
        hobby.innerHTML = data.attri.hobby;
        //梦想
        var dream = document.getElementById("dream");
        dream.innerHTML = data.attri.dream;
        //生日
        var birthday = document.getElementById("birthday");
        birthday.innerHTML = data.attri.birthday;
        //职务
        var job = document.getElementById("job");
        job.innerHTML = data.attri.job;
        //留言
        var message = document.getElementById("message");
        message.innerHTML = data.attri.message;
        //电话
        var tel = document.getElementById("tel");
        tel.innerHTML = data.contact.tel;
        //微信
        var wechat = document.getElementById("wechat");
        wechat.innerHTML = data.contact.wechat;
        //QQ
        var qq = document.getElementById("qq");
        qq.innerHTML = data.contact.qq;
        //提示
        var prompt1 = document.getElementById("prompt");
        prompt1.innerHTML = data.prompt;
        //如果无提示内容，则隐藏
        if (data.prompt == "") {
            prompt1.style.display = "none";
        }
        //如果提示内容是need，则显示需要完善信息
        if (data.prompt == "need") {
            prompt1.innerHTML = '此用户信息尚未完善，<a href="https://wj.qq.com/s2/5789619/f6dd/">点击完善信息</a>'
        }
    }
    catch (err) {
        var prompt1 = document.getElementById("prompt");
        prompt1.innerHTML = '参数错误，<a href="index.html">返回同学录首页</a>';
        console.log(err)
    }
}