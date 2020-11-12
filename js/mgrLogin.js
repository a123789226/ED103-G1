function $id(id){
	return document.getElementById(id);
}	
let manager;

function showLoginForm(){
  //檢查登入bar面版上 spanLogin 的字是登入或登出
  //如果是登入，就顯示登入用的燈箱(lightBox)
  //如果是登出
  //將登入bar面版上，登入者資料清空 
  //spanLogin的字改成登入
  //將頁面上的使用者資料清掉
  if($id('spanLogin').innerHTML == "Log In"){
    $id('mgrLogin').style.display = 'block';
  }else{//登出
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
      $id('mgrName').innerHTML = '&nbsp';
      $id('spanLogin').innerHTML = 'Log In';          
    }
    xhr.open("get", "mgrLogout.php", true);
    xhr.send(null);
  }
}//showLoginForm

function sendForm(){
  //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
  let mgrId = $id("mgrId").value;  
  let mgrPsw = $id("mgrPsw").value; 
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    manager = JSON.parse(xhr.responseText);
    if (manager.mgrId) {
      $id("mgrName").innerText = manager.mgrName;
      $id('spanLogin').innerHTML = '登出';
      //將登入表單上的資料清空，並隱藏起來
      $id('mgrLogin').style.display = 'none';
      window.location.href = "backend.html";
      $id('mgrId').value = '';
      $id('mgrPsw').value = '';
    } else {
      // window.alert("Your account or password is wrong!");
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

  //===設定spanLogin.onclick 事件處理程序是 showLoginForm
  $id('mgrLogin').onclick = showLoginForm;

  //===設定btnLogin.onclick 事件處理程序是 sendForm
  $id('btnLogin').onclick = sendForm;

}; //window.onload

window.addEventListener("load",init,false);
