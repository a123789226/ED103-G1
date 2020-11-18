<?php
        ob_start();
        session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src  ="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="icon" href="./image/header/favicon.ico">
    <link rel="stylesheet" href="./css/style.css">

    <title>Aqua Wonderland</title>
</head>

<body>
 <!-- 下面是背景的div，先不要動到 -->
<div class="blogBackground">
  <div class="commonBG00 commonBGSet"></div>
  <div class="commonBG01 commonBGSet"></div>
  <div class="commonBG02 commonBGSet"></div>
  <div class="commonBGLeft commonBGSet"></div>
  <div class="commonBGRight commonBGSet"></div>
  <img src="./image/background/fish1.png" alt="" class="BGFish1">
  <img src="./image/background/fish1.png" alt="" class="BGFish2">
</div> 
<!-- 上面是背景的div，先不要動到 -->

  <!-- Log In開始 -->
  <div id="memLightBox" class="memLogin overlay">
    <form action="" class="LogInForm" id="LogInForm" method="post">
      <div class="btn_modal_close">
        <div></div>
        <div></div>
      </div>
      <h3 class="memLogTitle">LOG IN</h3>
      <input type="text" name="memId" id="memId" minlength="6" maxlength="12" pattern="[A-Za-z0-9]*" placeholder="Username" onfocus="this.placeholder=''" onblur="this.placeholder='Username'" size="25"/><br>
      <input type="password" name="memPsw" id="memPsw" minlength="6" maxlength="12" pattern="[A-Za-z0-9]*" placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'" size="25"/><br>
      <h6><a href="./memberLock.html" class="memForgot memForget_modal">Forget Password?</a></h6><br>
      <input type="button" class="submitBtnLog" id="btnLogin" value="LOG IN"><br>
      <div class="memLine">
        <h5>OR</h5>
      </div>
      <p>Don't have an account?</p><br>
      <a href="./memberlogin.html"><button type="button" class="submitBtnSign" id="btnSignup">SIGN UP</button></a>
    </form>
  </div>
  <!-- Log In結束 -->
  
  <!-- header開始 -->
  <header class="main_menu">
    <!-- header第一區塊 主導覽列 -->
    <nav class="main_nav">
      <div class="logo_box">
        <a href="homepage.html" class="logo">
          <img src="./image/header/logo.png" alt="">
        </a>
        <a href="" class="logo_text_box">
          <h1 class="logo_text">AQUA WONDERLAND</h1>
        </a>
      </div>
      <ul class="main_menu_ul" id="main_menu_ul">
        <li class="main_menu_li ">
          <a href="tour.html" class="li_logo">
            <img src="./image/header/header_tour.png" alt="">
            <img src="./image/header/header_tour_cover.png" alt="">
          </a>
          <a href="tour.html" class="li_text">TOUR</a>
        </li>
        <li class="main_menu_li ">
          <a href="journal.html" class="li_logo">
            <img src="./image/header/header_journal.png" alt="">
            <img src="./image/header/header_journal_cover.png" alt="">
          </a>
          <a href="journal.html" class="li_text">JOURNAL</a>
        </li>
        <li class="main_menu_li ">
          <a href="ticket.html" class="li_logo">
            <img src="./image/header/header_ticket.png" alt="">
            <img src="./image/header/header_ticket_cover.png" alt="">
          </a>
          <a href="ticket.html" class="li_text">TICKET</a>
        </li>
        <li class="main_menu_li ">
          <a href="vote.html" class="li_logo">
            <img src="./image/header/header_vote.png" alt="">
            <img src="./image/header/header_vote_cover.png" alt="">
          </a>
          <a href="vote.html" class="li_text">VOTE</a>
        </li>
        <li class="main_menu_li active">
          <a href="blog1.php" class="li_logo">
            <img src="./image/header/header_blog.png" alt="">
            <img src="./image/header/header_blog_cover.png" alt="">
          </a>
          <a href="blog1.php" class="li_text">BLOG</a>
        </li>
      </ul>
      <div class="header_right">
        <span class="member_box btn_modal" id="btn_modal">
          <img src="./image/header/header_member_fish.png" alt="" title="Log In" id="memberPic" onerror="javascript:this.src='./image/header/header_member_fish_login.png'">
        </span>
        <a class="cart_box" href="cart.html">
          <img src="./image/header/header_cart.png" alt="">
          <span class="cart_amount"></span>
        </a>
        <div class="hamburger_box" id="hamburger_box">
          <div class="hamburger">
            <span class="hamburger_line is-active" id="hamburger_line"></span>
            <span class="hamburger_cross" id="hamburger_cross">&times;</span>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- header第二區塊 會員登入後點頭像出線的小窗 -->
    <div class="memProfileBlock" id="memProfileBlock" style="display: none;">
      <p class="memNameInProfileBlock"><span>Hello!&nbsp;&nbsp;</span><span id="memNameInProfileBlock"></span></p>
      <a href="./memberProfile.html" class="memProfileLink">Member Profile</a>
      <p id="SignOutLink">Sign Out</p>
    </div>

  </header> 

  <!-- header結束 -->
  
 
<div>
    <div class="commonTitleBox">
      <h2 class="commonTitle blogTitle">BLOG</h2>
      <h4 class="commonSubTitle blogSubTitle">Share Your Story with Aqua Wonderland.</h4>
    </div>
<!-- 你的code打這下面 -->

<!-- 部落格發文區塊 -->
<div class="blogFirstPort">
    <div class="BlogFirstLeft">
      <h3>Blog Tips& Get Points</h3>
          <p>
            <span>Thanks for visiting Aqua Wonderland. If there's any memorial things here, do not hesitate to post your story and share with anyone else.</span><br>
            <span>1. What you need to do is to hit the crab in the right side and share your story.</span><br>
            <span>2. Whenever the story you share, we will reward you 500 points for your further adoption or discount.</span>
          </p>
    </div>
</div>

<div data-toggle="tooltip" data-placement="top" title="Hit me to post" id="blogCrabTooltip" class="BlogFirstRight">
  <a href="#" class="blogPostBtn" id="blogPostSectionStart"><p class="blogPostText">Click Me for Posting</p><img src="./image/blog/photos/crab.png"></a>
</div>


<!-- 預覽文章 PHP-->


<div class="container" class="blogPostSection">
  <div class="row">
  <?php
  try {
    require_once('./php/connectBook.php');
    // $sql = "select * from blog join member order by blogNo desc";
    $sql = "SELECT b.blogNo, b.blogTitle, b.blogPic, b.blogContent1, b.blogPic1, b.blogContent2, b.blogPic2, b.blogTime, b.blogStatus, b.blogMark, b.blogTags, m.memPic, m.memName, m.memId, m.memEmail, m.memNo
    FROM blog b JOIN member m ON (b.memNo = m.memNo)
    WHERE b.blogNo NOT IN (SELECT blogNo FROM blog_report WHERE blogReportStatus = 'reported')
    ORDER BY blogNo DESC";
   
    $products = $pdo->query($sql);
    $prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
   

    if(isset($_SESSION["memNo"])){
      $_SESSION["memNo"] = $_SESSION["memNo"];
    }else{
      $_SESSION["memNo"] = '0';
    }

    $sql1 = "SELECT blogNo
    FROM  blog_mark 
    WHERE memNo = :memNo "; 
        $blogMark = $pdo->prepare($sql1);
        $blogMark->bindValue(":memNo", $_SESSION["memNo"]);
        $blogMark->execute();

        $blogMarkRows = $blogMark->fetchAll(PDO::FETCH_ASSOC);
       $arr=[];
        foreach($blogMarkRows as $key => $val){
        array_push($arr,$val['blogNo']);
       }



    }catch (PDOException $e){
      echo "錯誤行號 : " . $e->getLine() . "<br>";
      echo "錯誤訊息 : " . $e->getMessage() . "<br>";
      echo "系統暫時連不上請聯絡維護人員";
    }
?>
  <?php
  $count=0;
    foreach($prodRows as $i => $prodRow) {
      if($i%2 == 0 ){
      $align = "left";
      }else{
      $align = "right";
      }
      ?>
    <div class="col-12 col-md-12 ">
      <div class="card mb-12" style="max-width: 1200px; margin-bottom: 30px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src='<?=$prodRow["blogPic"]?>' class="card-img blogPostLeft">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h4 class="card-title" class="sub_title"><?=$prodRow["blogTitle"]?></h4>
              <div class="blogMemInfo">
                <div class="blogMemName">By&nbsp<?=$prodRow["memName"]?></div>
                <img src='<?=$prodRow["memPic"]?>' class="blogMemImg">
                <span>|&nbsp;</span>
                <div class="blogMemDate"><?=$prodRow["blogTime"]?></div>
              </div>
              <div class="blogPostPreview" id="previewText">
                <p class="card-text" ><?=$prodRow["blogContent1"]?></p>
              </div>
            </div>
          </div>
          <div class="col-md-2" class="blogPostRight">
            <div class="blogIcon">
              <div class="blogIconCollect">
                <div class="blogPostCollected">
                   <div class="blogPostIconBefore">
                  <?php
                      if(in_array($prodRow["blogNo"],$arr)){
                      ?>
                       <img class="unlike" onclick='addLike(<?=$prodRow["blogNo"]?>,<?=$count?>)' src="./image/blog/icons/icon_heart.svg"  style="display:none" data-blogcollect="<?=$prodRow["blogNo"]?>">
                      <img class="liked" onclick='deleteLike(<?=$prodRow["blogNo"]?>,<?=$count?>)'; src="./image/blog/icons/icon_heart_active.svg"  data-blogcollect="<?=$prodRow["blogNo"]?>">
                      
                      <?php  
                      }else{
                        ?>
                      <img class="unlike" onclick='addLike(<?=$prodRow["blogNo"]?>,<?=$count?>)' src="./image/blog/icons/icon_heart.svg" data-blogcollect="<?=$prodRow["blogNo"]?>">
                      <img class="liked" onclick='deleteLike(<?=$prodRow["blogNo"]?>,<?=$count?>)'; src="./image/blog/icons/icon_heart_active.svg"  style="display:none" data-blogcollect="<?=$prodRow["blogNo"]?>">
                      <?php
                      }
                    
                  ?>
                  </div>

               </div>
              </div>
              <div class="blogIconReport" id="blogIconReportBtn" ><i class="fas fa-exclamation-circle"></i></div>
              <input type="hidden" name="blogReportReason" id="blogReportReason">
          </div>
          <div class="blogMoreBtnSection"><a href='./blogPost.php?blogNo=<?=$prodRow["blogNo"]?>' class="blogMoreBtn">More</a></div>
          </div>
        </div>
      </div>
    </div>
    <?php
    $count++;
      }
      ?>
  </div>
</div>


<!-- 這是發文區 light box((display: none;)) -->
  <!--標題＆關閉按鈕  -->
  <div class="blogPostContainer anim ed animate__fadeIn"  style="display: none; z-index: 999;">
    <div class="blogPostTitle">
      <h3>SHARE A POST</h3>
      <div class="blogPostCloseButton">
        <div></div>
        <div></div>
      </div>
    </div>
  
  
  <!-- PO文內容 -->
  <form class="blogPostForm" action="blogInsert.php" method="post" enctype="multipart/form-data">
    <label for="blogInsertTitle" class="blogPostOwnTitle">
      <span class="blogPostTitleFont">Title</span>
      <input type="text" class="blogPostInputTitle" name="blogTitle" placeholder="Please Insert A Title">
    </label>
    <div class="blogPostTagsSection">
      <span class="blogPostTagsFont">Tags</span>
      <div class="blogPostTagsOptions">
        <div class="blogPostTags" value="Dolphin">Dolphin</div>
        <div class="blogPostTags" value="Whale">Whale</div>
        <div class="blogPostTags" value="Seal">Seal</div>
        <div class="blogPostTags" value="Turtle">Turtle</div>
        <input class="blogPostTagsFontSelected" type="hidden" value="" name="blogTags"/>
      </div>
    </div>
    
    <div class="blogPostContentSection">
      <div class="blogPostContentPart1">
        <label for="img1" class="blogPostWrap" id="blogPostWrapImg1" title="CLICK TO UPLOAD IMAGE">
          <div class="blogPostBox">
            <input class="blogUploadImg" type="file" name="upFile[]" id="img1" accept="image/gif, image/jpeg, image/png">
          </div>
        </label>
      </div>

      <div class="blogPostContentPart2">
        <div class="blogPostContentText2" contenteditable="true" id="content2">
        <input class="blogPostContentTextInput1" type="hidden" value="" name="blogContent1" id="inputContent2"/>
        </div>
        <label for="img2" class="blogPostWrap" id="blogPostWrapImg2" title="CLICK TO UPLOAD IMAGE">
          <div class="blogPostBox">
          <input class="blogUploadImg" type="file" name="upFile[]" id="img2" accept="image/gif, image/jpeg, image/png">
          </div>
        </label>
      </div>

      <div class="blogPostContentPart3">
        <label for="img3" class="blogPostWrap" id="blogPostWrapImg3" title="CLICK TO UPLOAD IMAGE">
          <div class="blogPostBox">
            <input class="blogUploadImg" type="file" name="upFile[]" id="img3" accept="image/gif, image/jpeg, image/png">
          </div>
        </label>
        <div class="blogPostContentText2" contenteditable="true" id="content3">
        <input class="blogPostContentTextInput3" type="hidden" value="" name="blogContent2" id="inputContent3"/>
        </div>
      </div>
      <input class="blogGetPoint" type="hidden" value="" name="point" />
    </div>

    <div class="blogPostSubmitSection">
    <button type="submit" class="blogPostSubmitBtn">Submit</button>
    </div>
  </form>
  </div>

  <!-- 發文區結束 -->

<!-- 你的code打這上面 -->

  </div>

  <footer>
    Copyright 2020 ED103-G1 Aqua Wonderland All Rights Reserved
  </footer>
  
  <script>

  // 發文頁面 tag選擇
    $(".blogPostTags").on("click", function(){
    $(".blogPostTags").removeClass("blogPostTagsOn");
    $(this).toggleClass("blogPostTagsOn");
    });
//  ---------這裡是SweetAlert---------

// $('.blogIconReport').on('click', function(){
  
//   swal({
//     title: "Do you want to report this post?",
//     icon: "warning",
//     buttons: {
//       Btn: false,
//       Cancel: {
//         text: "Cancel",
//         visible: true
//       },
//       Confirm: {
//         text: "Confirm",
//         visible: true
//       }
//     }
//   })
//   .then((value) => {
//     if(value == "Confirm"){
//       swal({
//       title: "Succeed!",
//       icon: "success",
//     });
//     }
//   })
// })




$('.blogIconReport').on('click', function(){
  swal({
  title: "An input!",
  text: "Write something interesting:",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  animation: "slide-from-top",
  inputPlaceholder: "Write something"
},
function(inputValue){
  if (inputValue === false) return false;
  
  if (inputValue === "") {
    swal.showInputError("You need to write something!");
    return false
  }
  
  swal("Nice!", "You wrote: " + inputValue, "success");
});
})
  // ---------這裡是JavaScript---------
  // 燈箱開關
  document.getElementById("blogPostSectionStart").onclick = function(){
    document.getElementsByClassName("blogPostBtn")[0].style.display = "block";
    document.getElementsByClassName("blogPostContainer")[0].style.display = "block";
    document.getElementsByClassName("blogPostCloseButton")[0].onclick = function(){
      document.getElementsByClassName("blogPostContainer")[0].style.display = "none";
          };
    }





// --------------------------

  let arr = new Array();
  arr[0] = document.getElementById('blogPostWrapImg1');
  arr[1] = document.getElementById('blogPostWrapImg2');
  arr[2] = document.getElementById('blogPostWrapImg3');

  //迴圈定義事件
  for (let i = 0; i < arr.length; i++) {
  // 拖曳事件
  arr[i].ondragover = dragOver;
  arr[i].ondrop = dropped;
  arr[i].index = i;
  // 點擊上傳事件
  //label裡的input onchange
  arr[i].getElementsByTagName("input")[0].onchange = changed;
  arr[i].getElementsByTagName("input")[0].index = i;

  
}

function dragOver(e) {
  e.preventDefault();
}

function dropped(e) {
  //上面的i傳下來
  let i = e.target.index;
  e.preventDefault();
  let file = e.dataTransfer.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {

    arr[i].style.background = `url(${readFile.result})`;
    arr[i].style.backgroundSize = 'cover';
    arr[i].style.backgroundRepeat = 'no-repeat';
    arr[i].style.backgroundPosition = 'center';
    let p = arr[i].getElementsByTagName("p");
    p[0].style.opacity = 0;
  });
};
function changed(e) {
  let i = e.target.index;
  let file = e.target.files[0];
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', function () {
    arr[i].style.background = `url(${readFile.result})`;
    arr[i].style.backgroundSize = 'cover';
    arr[i].style.backgroundRepeat = 'no-repeat';
    arr[i].style.backgroundPosition = 'center';
    //上傳後隱藏提示字
    // let p = arr[i].getElementsByTagName("p");
    // p[0].style.opacity = 0;

  });
};

function doFirst(){
  //文章區塊一放入input傳至後台
  let content2 = document.getElementById('content2');
  let inputContent2 = document.getElementById('inputContent2');
  content2.addEventListener('blur', function(){
    inputContent2.value = content2.innerText;
  })
  //文章區塊放入input傳至後台
  let content3 = document.getElementById('content3');
  let inputContent3 = document.getElementById('inputContent3');
  content3.addEventListener('blur', function(){
    inputContent3.value = content3.innerText;
  })





  //給登出按鈕建立事件聆聽
  let SignOutLink = document.getElementById('SignOutLink');
  SignOutLink.addEventListener('click', function(){
    let redHeart = document.querySelectorAll('img.liked');
    let blackHeart = document.querySelectorAll('img.unlike');
    for(let i=0; i<redHeart.length; i++){
      redHeart[i].style.display = 'none';
      blackHeart[i].style.display ='block';
    }
  })
}



// 分數獲得
// let postWord = (  document.getElementsByClassName("blogPostContentTextInput2")[0].value.length
//                 + document.getElementsByClassName("blogPostContentTextInput3")[1].value.length);
// let postPoint = 0;
//              if(postPoint<1000){
//               postWord = postPoint;
//              } else {
//               postWord = postPoint*2;
//              }
//              console.log("總字數 : ", postWord);
//              console.log("點數 : ", postWord);
//              alert(`您目前輸入的「總字數」為 : ${postPoint}\n獲得的「點數」為 : ${postWord}\n請至 [ 會員中心 ] - [ 會員資訊 ] 選項中的 "紅利點數" 欄位做確認。`);
//              document.getElementsByClassName("blogGetPoint")[0].value = postPoint;

window.addEventListener('load', doFirst);
</script>




<script>


    function addLike(likework,count){
      if(member.memId){
        // alert('登入狀態');
        document.querySelectorAll('.liked')[count].style.display='block';
        document.querySelectorAll('.unlike')[count].style.display='none';
        let addlikexhr = new XMLHttpRequest();
        addlikexhr.onload = function(e) {
            if (addlikexhr.status == 200) { //值有成功回傳，他是有新增成功的
                // alert(addlikexhr.responseText);
                
            } else {
                alert(addlikexhr.status);
            }
        }
        var url = "./php/addCollect.php";
        addlikexhr.open("post", url, true);
        addlikexhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        let data = `likework=${likework}`;
        addlikexhr.send(data);
      }else{



        
        swal('非登入狀態');

        //跳出燈箱
      }
      


      

    }

    function deleteLike(likework,count){
      document.querySelectorAll('.liked')[count].style.display='none';
      document.querySelectorAll('.unlike')[count].style.display='block';


      let removeCollect = new XMLHttpRequest();
      removeCollect.onload = function(e) {
          if (removeCollect.status == 200) { //有刪除成功
              alert(removeCollect.responseText);

          } else {
              alert(removeCollect.status);
          }
      }
      var url = "./php/removeCollect.php";
      removeCollect.open("post", url, true);
      removeCollect.setRequestHeader("content-type", "application/x-www-form-urlencoded")
      let data = `likework=${likework}`;
      removeCollect.send(data);

    }

</script>

<script src="./js/blog/blogReport.js"></script>
<script src="./js/blogLogin.js"></script>
<script src="./js/layout/header.js"></script>

</body>
</html>
