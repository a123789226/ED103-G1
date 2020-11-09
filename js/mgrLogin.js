function $id(id) {
    return document.getElementById(id);
}
let manager;

function sendForm() {
    //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
    let mgrId = $id("mgrId").value;
    let mgrPsw = $id("mgrPsw").value;
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        manager = JSON.parse(xhr.responseText);
        if (manager.mgrId) {
          $id("mgrName").innerText = manager.mgrName;
          $id('spanLogin').innerHTML = 'Log Out';
        } else {
          alert('error');
          $id('memId').value = '';
          $id('memPsw').value = '';
          swal("Sorry!", "Your account or password is wrong!", "error", { button: "Try Again!" });
          // window.alert("Sorry, your password was incorrect. Please double-check your password.");
        }
    }

    xhr.open("Post", "mgrLogin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = `mgrId=${mgrId}&mgrPsw=${mgrPsw}`;
    xhr.send(data_info);

    // 若server處理狀態已完成，且狀態碼也顯示成功，則跳轉到後台頁面
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // let answer = xhr.responseText;
        // if (answer == "ok") {
          window.location.href = "backend.html";
        } else {
          swal("Sorry!", "Your account or password is wrong!", "error", { button: "Try Again!" });
          $id("mgrId").focus();
          return false;
        }
      // }
    };
}

function doSignOut() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        $id('mgrLogout').innerHTML = '';
        manager = {};
    }
    xhr.open("get", "mgrLogout.php", true);
    xhr.send(null);
    // alert('登出成功');


}//showLoginForm



function init() {

    //===設定SignOutLink.onclick 事件處理程序是 doSignOut
    $id('SignOutLink').onclick = doSignOut;

    //===設定btnLogin.onclick 事件處理程序是 sendForm
    $id('btnLogin').onclick = sendForm;

}; //window.onload

window.addEventListener("load", init, false);

