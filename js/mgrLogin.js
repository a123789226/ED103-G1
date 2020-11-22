function $id(id){
	return document.getElementById(id);
}	
let manager;

function sendForm(){
  //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
  let mgrId = $id("mgrId").value;  
  let mgrPsw = $id("mgrPsw").value; 
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    manager = JSON.parse(xhr.responseText);
    if (manager.mgrId) {
      $id('mgrId').value = '';
      $id('mgrPsw').value = '';
      if(manager.mgrStatus == 0){
        window.location.href = "backend.html";
      }else{
        swal("Sorry!", "Your account has been suspended", "error", {button: "OK"});
      }
    } else {
      swal("Sorry!", "Your account or password is wrong!", "error", { button: "Try Again!" });
      $id('mgrId').value = '';
      $id('mgrPsw').value = '';
    }
  }

  xhr.open("Post", "mgrLogin.php", true);
  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
  let data_info = `mgrId=${mgrId}&mgrPsw=${mgrPsw}`;
  xhr.send(data_info); 
}

function init(){

  //===設定btnLogin.onclick 事件處理程序是 sendForm
  $id('btnLogin').onclick = sendForm;

}

window.addEventListener("load",init,false);
