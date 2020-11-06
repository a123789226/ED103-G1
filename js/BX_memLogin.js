function $id(id) {
    return document.getElementById(id);
}
let member;

function showLoginForm() {
    //檢查登入bar面版上 spanLogin 的字是登入或登出
    //如果是登入，就顯示登入用的燈箱(memLightBox)
    //如果是登出
    //將登入bar面版上，登入者資料清空 
    //spanLogin的字改成登入
    //將頁面上的使用者資料清掉
    if ($id('spanLogin').innerHTML == "Login") {


    } else { // 登出
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            $id('memName').innerHTML = '&nbsp';
            $id('spanLogin').innerHTML = 'Login';
        }
        xhr.open("get", "logout.php", true);
        xhr.send(null);
    }

}//showLoginForm

function sendForm() {
    //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
    let memId = $id("memId").value;
    let memPsw = $id("memPsw").value;
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.memId) {
            $id("memName").innerText = member.memName;
            $id('spanLogin').innerHTML = 'Logout';
            //將登入表單上的資料清空，並隱藏起來
            $id('memLightBox').style.display = 'none';
            $id('memId').value = '';
            $id('memPsw').value = '';
        } else {
            window.alert("The username you entered doesn't belong to an account. Please check your username and try again.");
            // window.alert("Sorry, your password was incorrect. Please double-check your password.");
        }
    }

    xhr.open("Post", "BX_memLogin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = `memId=${memId}&memPsw=${memPsw}`;
    xhr.send(data_info);
}

function getMemberInfo() {

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) { //success
            member = JSON.parse(xhr.responseText);
            if (member.memId) {
                $id("memName").innerText = member.memName;
                $id('spanLogin').innerHTML = 'Logout';
            }
        } else { //error
            alert(xhr.status);
        }
    }

    xhr.open("get", "getMemberInfo.php", true);
    xhr.send(null);


    
}

function init() {

    //-----------------------檢查是否已登入
    getMemberInfo();

    //===設定spanLogin.onclick 事件處理程序是 showLoginForm

    $id('spanLogin').onclick = showLoginForm;

    //===設定btnLogin.onclick 事件處理程序是 sendForm
    $id('btnLogin').onclick = sendForm;

}; //window.onload

window.addEventListener("load", init, false);



// Login彈窗
$(function () {
    // 開啟 Modal 彈跳視窗
    $("a.btn_modal").on("click", function () {
        if ($id('spanLogin').innerHTML == "Login") {
            $("div.overlay").addClass("-on");
        }else{
            document.location.href = "memberProfile.html";
        }
    });
        // 關閉 Modal

    $("div.btn_modal_close").on("click", function () {
        $("div.overlay").addClass("-opacity-zero");
        $id('memId').value = '';
        $id('memPsw').value = '';
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $("div.overlay").removeClass("-on -opacity-zero");
        }, 1000);
    });
});