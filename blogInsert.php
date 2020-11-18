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

    <title>Aqua Blog</title>
</head>

<body>
 <!-- 下面是背景的div，先不要動到 -->
<div class="blogBackground">
  <div class="commonBG00 commonBGSet"></div>
  <div class="commonBG01 commonBGSet"></div>
  <div class="commonBG02 commonBGSet"></div>
  <div class="commonBGLeft commonBGSet"></div>
  <div class="commonBGRight commonBGSet"></div>
  <img src="./image/background/fish1.png" alt="e" class="BGFish1">
  <img src="./image/background/fish1.png" alt="" class="BGFish2">
</div> 
<!-- 上面是背景的div，先不要動到 -->
<header class="main_menu">
  <nav class="main_nav">
    <div class="logo_box">
      <a href="homepage.html" class="logo">
        <img src="./image/header/logo.png" alt="">
      </a>
      <a href="homepage.html" class="logo_text_box">
        <h1 class="logo_text">AQUA WONDERLAND</h1>
      </a>
    </div>
    <ul class="main_menu_ul">
      <li class="main_menu_li">
        <a href="tour.html" class="li_logo">
          <img src="./image/header/header_tour.png" alt="">
          <img src="./image/header/header_tour_cover.png" alt="">
        </a>
        <a href="tour.html" class="li_text">TOUR</a>
      </li>
      <li class="main_menu_li">
        <a href="journal.html" class="li_logo">
          <img src="./image/header/header_journal.png" alt="">
          <img src="./image/header/header_journal_cover.png" alt="">
        </a>
        <a href="journal.html" class="li_text">JOURNAL</a>
      </li>
      <li class="main_menu_li">
        <a href="ticket.html" class="li_logo">
          <img src="./image/header/header_ticket.png" alt="">
          <img src="./image/header/header_ticket_cover.png" alt="">
        </a>
        <a href="ticket.html" class="li_text">TICKET</a>
      </li>
      <li class="main_menu_li">
        <a href="vote.html" class="li_logo">
          <img src="./image/header/header_vote.png" alt="">
          <img src="./image/header/header_vote_cover.png" alt="">
        </a>
        <a href="vote.html" class="li_text">VOTE</a>
      </li>
      <li class="main_menu_li active">
        <a href="blog.html" class="li_logo">
          <img src="./image/header/header_blog.png" alt="">
          <img src="./image/header/header_blog_cover.png" alt="">
        </a>
        <a href="blog.html" class="li_text">BLOG</a>
      </li>
    </ul>
    <div class="header_right">
      <a href="#" class="member_box btn_modal">
        <img src="./image/header/header_member_fish.png" alt="">
      </a>
      <a class="cart_box" href="cart.html">
        <img src="./image/header/header_cart.png" alt="">
        <span class="cart_amount">1</span>
      </a>
      <div class="hamburger_box">
        <div class="hamburger">
          <span class="hamburger_line is-active"></span>
          <span class="hamburger_cross">&times;</span>
        </div>
      </div>
    </div>
  </nav>
</header>

 
  <div>
    <div class="commonTitleBox">
      <h2 class="commonTitle blogTitle">BLOG</h2>
      <h4 class="commonSubTitle blogSubTitle">Share Your Story with Aqua Wonderland.</h4>
    </div>
<!-- 你的code打這下面 -->
<div class="blogUploadInPhp"></div>
        <?php
        // $_SESSION["memId"]='Mark123';
        // $_SESSION["memNo"]='1';
        // ob_start();
        // session_start();
        if(isset($_SESSION["memId"])){
            $errMsg = "";
            try {
                require_once("./php/connectBook.php");
                $pdo->beginTransaction();
                // 取得上傳檔案數量
                $fileCount = count($_FILES['upFile']['name']);
                echo "fileCount = ", $fileCount, "<br>";

                $sql = "INSERT INTO blog ( memNo, blogTitle, blogPic, blogContent1, blogPic1, blogContent2, blogPic2, blogTime, blogStatus,
                       blogMark, blogTags)
                values('{$_SESSION["memNo"]}', :blogTitle, '', :blogContent1, '', :blogContent2, '', now(), '0', '0', :blogTags)"; 
                $products = $pdo->prepare( $sql );
                $products -> bindValue(":blogTitle", $_POST["blogTitle"]);
                $products -> bindValue(":blogContent1", $_POST["blogContent1"]);
                $products -> bindValue(":blogContent2", $_POST["blogContent2"]);
                $products -> bindValue(":blogTags", $_POST["blogTags"]);
                $products -> execute();
                    //取得自動創號的key值
                $blogNo = $pdo->lastInsertId();

                foreach ($_FILES["upFile"]["error"] as $i => $errorCode) {
                //.......確定是否上傳成功
                    if( $_FILES["upFile"]["error"][$i] == UPLOAD_ERR_OK){
                        //先檢查images資料夾存不存在
                        if( file_exists("img") === false){
                            mkdir("img");
                        }
                        //將檔案copy到要放的路徑
                        $fileInfoArr = pathinfo($_FILES["upFile"]["name"][$i]);
                        // $fileName = "{$_FILES['upFile']['name'][$i]}";
                        
                        $from = $_FILES["upFile"]["tmp_name"][$i];
                        $fileLocation[$i] = $to = "img/blogPost/{$blogNo}_{$i}.{$fileInfoArr["extension"]}";
                        // $to = "img/blogPost/$fileName";
                            if( ($result = copy( $from, $to))===true){
                            //將檔案名稱寫回資料庫
                        }else{
                          echo "-----", $result, "<br>";
                            $pdo->rollBack();
                          // break;
                          exit("新增失敗, $from , to : $to");
                        }
                    }else{
                        echo "錯誤代碼 : {$_FILES["upFile"]["error"][$i]} <br>";
                        echo "新增失敗<br>";
                    }
                }//foreach

                $sql = "update blog set blogPic = :blogPic, blogPic1=:blogPic1, blogPic2=:blogPic2 where blogNo = $blogNo";
                // $fileInfoArr0 = pathinfo($_FILES["upFile"]["name"][0]);
                // $fileInfoArr1 = pathinfo($_FILES["upFile"]["name"][1]);
                // $fileInfoArr2 = pathinfo($_FILES["upFile"]["name"][2]);
                // $fileLocation0 = "img/blogPost/{$blogNo}_0.{$fileInfoArr0["extension"]}";
                // $fileLocation1 = "img/blogPost/{$blogNo}_1.{$fileInfoArr1["extension"]}";
                // $fileLocation2 = "img/blogPost/{$blogNo}_2.{$fileInfoArr2["extension"]}";
                $products = $pdo->prepare($sql);
                $products -> bindValue(":blogPic", $fileLocation[0]);
                $products -> bindValue(":blogPic1", $fileLocation[1]);
                $products -> bindValue(":blogPic2", $fileLocation[2]);
                $products -> execute();
                echo $fileLocation[0], "<br>";
                echo $fileLocation[1], "<br>";
                echo $fileLocation[2], "<br>";
                echo "新增成功~";
                // $pdo->commit();

                $sql = "update member set point = point + :point+500 where memNo = {$_SESSION["memNo"]}";

                $member = $pdo->prepare($sql);
                $member -> bindValue(":point", $_POST["point"]);
                $member -> execute();
                $pdo->commit();
                echo "commit success! <br>";
                header("Location:./blog1.php");
            } catch (PDOException $e) {
                // $pdo->rollBack();
                $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
                $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
            }
            echo $errMsg;
        }else{
            echo "您尚未登入，請登入後再發文";
        }
        ?>
    </div>
<!-- 你的code打這上面 -->

  </div>

  <footer>
    Copyright 2020 ED103-G1 Aqua Wonderland All Rights Reserved
  </footer>
  
  <script>
  // ---------這裡是jQuery---------
  // 愛心點擊換圖＆數字增加
  $(".blogPostCollected").click(function() {
  if ($(this).hasClass("like-active")) {
    $(this).find('.blogPostCollectNum').html(parseInt($(this).find('.blogPostCollectNum').html(), 10) - 1)
  } else {
    $(this).find('.blogPostCollectNum').html(parseInt($(this).find('.blogPostCollectNum').html(), 10) + 1)
  }
  $(this).toggleClass('like-active');
  });

  // 發文頁面 tag選擇
    $(".blogPostTags").on("click", function(){
    $(".blogPostTags").removeClass("blogPostTagsOn");
    $(this).toggleClass("blogPostTagsOn");
    });
//漢堡
$("div.hamburger_box").on("click", function(){
      $("span.hamburger_line").toggleClass("is-active");
      $("span.hamburger_cross").toggleClass("is-active");
      $("ul.main_menu_ul").toggleClass("is-active");
      // $("ul.main_menu_ul").slideToggle();
      // $("header.main_menu").toggleClass("removeShadow");
    });

//  ---------這裡是SweetAlert---------

$('.blogIconReport').on('click', function(){
  swal({
    title: "Do you want to report this post?",
    icon: "warning",
    buttons: {
      Btn: false,
      Cancel: {
        text: "Cancel",
        visible: true
      },
      Confirm: {
        text: "Confirm",
        visible: true
      }
    }
  })
  .then((value) => {
    if(value == "Confirm"){
      swal({
      title: "Succeed!",
      icon: "success",
    });
    }
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

  // ---------這裡是換圖---------

//   // 建立變數         
// let arr = new Array();
// let postcardPhotoPut = document.getElementById('blogPostWrapImg1');//放置PHOTO的img標籤的ID
// let updatePhotoHere =document.getElementById('img1');//input的ID

// // 建立事件聆聽

// updatePhotoHere.addEventListener('change',PhotoPut);   //建立事件聆聽，偵測input發生change事件，執行PhotoPut函數

// // 函數區

// function PhotoPut(){
//     let putPhotoFrom = updatePhotoHere.files[0];     //抓input內的FILE資訊，因為只有一個檔案，所以為FILES陣列中的第一個
//     let readPhoto = new FileReader();       //將FileReader物件命名
//     readPhoto.readAsDataURL(putPhotoFrom);    //使用FileReader的物件方法
//     readPhoto.addEventListener('load',function(e){    //建立事件聆聽 等待讀到檔案，LOAD事件發生
//        postcardPhotoPut.src = readPhoto.result;   //結果放入img標籤的src
//        postcardPhotoPut.style.width = '100%';   //設定寬
//        postcardPhotoPut.style.height = '100%';  //設定高
//     });

// }





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

  </script>


<script>
  // Login彈窗
  $(function(){
    // 開啟 Modal 彈跳視窗
    $("a.btn_modal").on("click", function(){
      $("div.overlay").addClass("-on");
    });
    // 關閉 Modal
    $("div.btn_modal_close").on("click", function(){
      $("div.overlay").addClass("-opacity-zero");
      // 設定隔一秒後，移除相關 class
      setTimeout(function(){
        $("div.overlay").removeClass("-on -opacity-zero");
      }, 1000);
    });
  });
</script>

</div>
</body>
</html>
