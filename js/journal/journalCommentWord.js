
  $('#doPost').on('click',function(){
    // if('尚未登入'){

    // }else{
      $.ajax({
        url:'journalCommentWord.php',
        type:'GET',
        dataType:'json',
        data:{
          member:1,
          journo:1,
          word:$('#myInput').val(),
        },
        complete(e){
          console.log(e);
          let word = $('#myInput').val();
          $('.jourCommentList ul').append(`
          <li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png"
                  alt=""></a></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName"></p>
                <p class="jourCommentTime">2020-10-18 14:25</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">${word}</h5>
                <!-- <a href="#" class="jourCommentLike"><img src="./image/journal/journal_element/like.png" alt=""></a> -->
                <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
              </div>
            </div>
          </li>
          `);
        },
      });
    // }

  });




  //-------------------------
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

