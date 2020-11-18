function $id(id) {
    return document.getElementById(id);
}
let member;

function doSignOut() {   
    //登出後燈箱可正常開啟但會先藏到後面去(移除-on);
    $id('memLightBox').style.display = 'block';
    $id('memLightBox').classList.remove('-on');

    // 頭像移除控制會員小窗的功能的事件聆聽、小窗關閉
    $id('btn_modal').removeEventListener('click', showMemberProfileBox);
    $id('memProfileBlock').style.display = 'none';
    
    // 小窗的會員名字清空
    // 執行logout.php清空session所有會員資料
    // 圖片跟動畫也返還樣式
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        $id('memNameInProfileBlock').innerHTML = '';
        $id('btn_modal').style.backgroundColor = '#333333';
        $id('memberPic').src = `./image/header/header_member_fish.png`;
        $id('memberPic').classList.remove('memberImg');
        $id('memberPic').title = 'Log In';
        $id('memberPic').style.transition = '0.5s cubic-bezier(.44,-1.25,1,.31)';
        member = {};
        // window.location.href = 'homepage.html';
    }
    xhr.open("get", "logout.php", true);
    xhr.send(null);
    // alert('登出成功');
}//showLoginForm

//按下登入執行
function sendForm() {
    //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
    let memId = $id("memId").value;
    let memPsw = $id("memPsw").value;
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.memId) {
            if(member.memStatus == 0){  //沒停權
                //將登入表單上的資料清空
                $id('memId').value = '';
                $id('memPsw').value = '';
                // 會員名稱顯示、變成會員頭像(沒有就用預設)、跳窗關掉、點頭像可控制會員中心小視窗
                afterLogin();

                showHeart();
            }else{ //停權
                swal("Sorry!", "Your account has been suspended", "error", {button: "OK"});
                //將登入表單上的資料清空
                $id('memId').value = '';
                $id('memPsw').value = '';
                // 執行登出的動作(清理session等等動作)
                doSignOut();
            }

        } else {
            $id('memId').value = '';
            $id('memPsw').value = '';
            swal("Sorry!", "Your account or password is wrong!", "error", {button: "Try Again!"});
            // window.alert("Sorry, your password was incorrect. Please double-check your password.");
        }
    }

    xhr.open("Post", "memLogin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = `memId=${memId}&memPsw=${memPsw}`;
    xhr.send(data_info);
}

// 每次到頁面都會透過session檢查是否有登入
function getMemberInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status == 200) { //success
        member = JSON.parse(xhr.responseText);
        if (member.memId) {
          // alert('已登入');
          // 會員名稱顯示、變成會員頭像(沒有就用預設)、跳窗關掉、點頭像可控制會員中心小視窗
          afterLogin();
          $id('memberPic').style.transition = '0s';
        }
      } else { //error
        alert(xhr.status);
      }
    }

    xhr.open("get", "getMemberInfo.php", true);
    xhr.send(null);
}

// 登入後會做的一些事情，透過getMemberInfo()及SendForm登入成功後觸發
function afterLogin(){
  // 會員名稱出現
  $id("memNameInProfileBlock").innerText = member.memName;
  // 頭像背景變白
  $id('btn_modal').style.backgroundColor = '#ffffff';
  // 更換圖片
  $id('memberPic').src = `./${member.memPic}`;
  $id('memberPic').classList.add('memberImg');
  $id('memberPic').title = 'Member Profile';
  // 關閉登入燈箱
  $id('memLightBox').style.display = 'none';

  // $id('btn_modal').classList.add('controlProfile');
  // let controlProfile = document.getElementsByClassName('controlProfile');
  // controlProfile[0].addEventListener('click', function(){
  //     $id('memProfileBlock').style.display = $id('memProfileBlock').style.display === 'none'? 'block' : 'none';
  // })
  $id('btn_modal').addEventListener('click', showMemberProfileBox);
}

// 點擊頭像控制小窗打開
function showMemberProfileBox(){
  $id('memProfileBlock').style.display = $id('memProfileBlock').style.display === 'none'? 'block' : 'none';
}


//秀出會員有收藏的文章
function showHeart(){
  // alert('123');
  
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) { //success
      blogCollect = JSON.parse(xhr.responseText);
      console.log(blogCollect);
      let arrCollect = [];
      for(let i=0; i<blogCollect.length;i++){
        arrCollect[i] = blogCollect[i].blogNo;
      }
      console.log(arrCollect);


      let redHeart = document.querySelectorAll('img.liked');
      let blackHeart = document.querySelectorAll('img.unlike');
      for(let i=0; i<redHeart.length; i++){

        if(arrCollect.indexOf(redHeart[i].dataset.blogcollect) == -1){
          redHeart[i].style.display = 'none';
          blackHeart[i].style.display ='block';
        }else{
          redHeart[i].style.display = 'block';
          blackHeart[i].style.display ='none';
        }

      }
      
    } else { //error
      alert(xhr.status);
    }
  }

  xhr.open("get", "./php/blogCollect.php", true);
  xhr.send(null);
}



function init() {
  // alert('123');
  //-----------------------檢查是否已登入
  getMemberInfo();

  // abc();

  //===設定SignOutLink.onclick 事件處理程序是 doSignOut

  $id('SignOutLink').onclick = doSignOut;

  //===設定btnLogin.onclick 事件處理程序是 sendForm
  $id('btnLogin').onclick = sendForm;

}; //window.onload

// $('#memberPic').click(loginStatus);

window.addEventListener("load", init, false);



// Login彈窗
$(function(){
  // 開啟 Modal 彈跳視窗
  $(".btn_modal").on("click", function(){
    $("div.overlay").addClass("-on");
  });
  // 關閉 Modal
  $("div.btn_modal_close").on("click", function(){
    $("div.overlay").addClass("-opacity-zero");
    $('#memId').val('');
    $('#memPsw').val('');
  // 設定隔0.5秒後，移除相關 class
    setTimeout(function(){
        $("div.overlay").removeClass("-on -opacity-zero");
    }, 500);
  });
});

