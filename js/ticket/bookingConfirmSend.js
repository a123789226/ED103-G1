


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

// 確認真的要登出嗎
function doSignOutCheck(){
  swal({
    title: "Want to Sign Out? Your information will not be saved.",
    icon: "warning",
    buttons: true,
    dangerMode: false
  }).then((value) => {
    if(value){
      // 真的選擇登出執行登出函數並跳轉首頁
      doSignOut();
      window.location = "./homepage.html";
    }
  });
}


// -----------------------------------------


// 檢查區域人數
function checkRemain(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if(xhr.status == 200){ //status : OK
      let areaRemain = JSON.parse(xhr.responseText);
      console.log(areaRemain);
      
      let nightTypeAmount = 0;
      let nightCheckAmount = 0;
      let nightCheckMsg = '';
      for(let i = 0; i < 4; i++){
        if(storage[`night${i+1}`]){
          // 先判斷storage內共有幾種夜宿票
          nightTypeAmount++;

          let nightInfo = storage.getItem(`night${i+1}`);
          let areaType = nightInfo.split('|')[0];
          let nightAmount = nightInfo.split('|')[2];
          
          // 若該區域 (剩餘人數-目前訂單累積人數) >= 購買的票數，代表還有位置 
          if((parseInt(areaRemain[i].capacity) - parseInt(areaRemain[i].orderPerson)) >= nightAmount){
            // 該區域判定可以訂購
            nightCheckAmount++;
          }else{
            // 額滿的區域名稱以字串列出
            nightCheckMsg += ` and ${areaType}`;
          }
        }
      }
      // console.log(nightTypeAmount);
      // console.log(nightCheckAmount);
      // console.log(nightCheckMsg.substr(4, nightCheckMsg.length));
      let newNightCheckMsg = nightCheckMsg.substr(5, nightCheckMsg.length);

      if(nightTypeAmount == nightCheckAmount){ //訂的區域都有剩餘空間

        // 繼續付款流程，修改會員點數
        alterNightDiscountPoint();

      }else{  //有區域沒有剩餘空間
        swal("Sorry!", `The remaining overnight space in ${newNightCheckMsg} is not enough! Please reselect your overnight area!`, "error", {button: "Go Booking!"}).then((value) => {
          if(value){
            window.location = "ticket.html#ticketOverNightBox";
          }
        });
        setTimeout("location.href='ticket.html#ticketOverNightBox';", 10000); 
      }
    }else{
      alert(xhr.status);
    }
  }
  let url = `bookingCheckRemain.php?nightDate=${$id('nightDate').innerText}`;
  xhr.open("get", url, true);
  xhr.send(null);
}

// 修改會員點數
function alterNightDiscountPoint(){
  // console.log(member);
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    if( xhr.status == 200){ //status : OK
      // Alter points success!
      // console.log(xhr.responseText);

      // 新增會員訂單
      insertNightOrder();
    }else{
      alert(xhr.status);
    }
  }
  let newPoint = parseInt(member.point) - $id('point').innerText;
  // console.log(newPoint);
  let url = `AlterTicketDiscountPoint.php?memId=${member.memId}&point=${newPoint}`;
  xhr.open("get", url, true);
  xhr.send(null); 
}

// 新增會員訂單
function insertNightOrder(){
  let xhr = new XMLHttpRequest();

  xhr.onload = function(){
      if( xhr.status == 200){ //status : OK
        // xhr.responseText值為新增訂單的流水號(nightOrderNo)
        // console.log(xhr.responseText);
        let nightOrderNo = xhr.responseText;

        // 新增會員訂單明細
        insertNightOrderList(nightOrderNo);
      }else{
        alert(xhr.status);
      }
  }  
  xhr.open("post", "InsertNightOrder.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  // 送出資料
  // let OrderTime = new Date().toISOString().substring(0, 10);
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let OrderTime = `${year}-${month}-${day}`;
  let data_info =`memNo=${member.memNo}&nightOrderDate=${OrderTime}&nightTotalPrice=${$id("TotalPrice").innerText}`;
  xhr.send(data_info);
}

// 新增會員訂單明細
function insertNightOrderList(nightOrderNo){
  // 有幾筆票的資料就做幾次ajax去執行php新增訂單明細
  for(let i = 0; i < 4; i++){
    if(storage[`night${i+1}`]){
      let nightInfo = storage.getItem(`night${i+1}`);
      let nightType = nightInfo.split('|')[0];
      let nightPrice = nightInfo.split('|')[1];
      let nightPerson = nightInfo.split('|')[2];
      let nightDate = nightInfo.split('|')[3];
      
      let xhr = new XMLHttpRequest();
      xhr.onload = function(){
        if( xhr.status == 200){ //status : OK
          // 新增成功
          // console.log(xhr.responseText);
  
          // 清空storage的資料
          cleanStorage(`night${i+1}`);
        }else{
          alert(xhr.status);
        }
      }  
      xhr.open("post", "InsertNightOrderList.php", true);
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      
      //送出資料
      let data_info =`nightOrderNo=${nightOrderNo}&nightType=${nightType}&nightPerson=${nightPerson}&nightPrice=${nightPrice}&nightDate=${nightDate}`;
      xhr.send(data_info);
    }
  }
}

// 清空storage的資料後，跳出成功結帳視窗並連結頁面跳轉。
function cleanStorage(nightId){
  storage.removeItem(nightId);
  console.log('清除該筆storage');
  swal("Good job!", "You have completed the payment. The page will change in 5 seconds!", "success", {button: "Go To Member Profile!"}).then((value) => {
    if(value){
      window.location = "memberProfile.html";
    }
  });
  setTimeout("location.href='memberProfile.html';", 5000); 
};


function init() {
  //-----------------------檢查是否已登入
  getMemberInfo();

  //===設定SignOutLink.onclick 事件處理程序是 doSignOut

  $id('SignOutLink').onclick = doSignOutCheck;

  //===設定btnLogin.onclick 事件處理程序是 sendForm
  $id('btnLogin').onclick = sendForm;

  //點下送出觸發修改點數
  $id('ticketPayToCheck').onclick = checkRemain;

};




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

