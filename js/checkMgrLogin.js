// 每次到頁面都會透過session檢查是否有登入
function checkMgr() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status == 200) { //success
        let mgrInfo = JSON.parse(xhr.responseText);
        if (mgrInfo.mgrId) {
          if(mgrInfo.mgrStatus == '1'){ //你被停權一樣不給你進來
            window.location.href = "backendLogin.html";
          }
        }else{ //你沒登入過，session沒資料不給你進
          window.location.href = "backendLogin.html";
        }
      } else {
        alert(xhr.status);
      }
    }

    xhr.open("get", "checkMgrLogin.php", true);
    xhr.send(null);
}


window.addEventListener("load", checkMgr, false);

