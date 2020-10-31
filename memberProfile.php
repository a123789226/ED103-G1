<?php 
//記得要使用session之前，要先啟用serssion
session_start();
$memId = $_POST["memId"];
$memPsw = $_POST["memPsw"];
$errMsg = "";
try {
	require_once("connectAqua.php");
	
	$sql = "select * from `member` where memId=:memId and memPsw=:memPsw";
	$member = $pdo->prepare($sql);
	$member->bindValue(":memId", $memId);
	$member->bindValue(":memPsw", $memPsw);
    $member->execute();
    
    if($member->rowCount()==0){
        echo "notFound";
    }else{
        $memRow = $member->fetch(PDO::FETCH_ASSOC);
        $_SESSION["memNo"] = $memRow["memNo"];
        $_SESSION["memName"] = $memRow["memName"];
        $_SESSION["memId"] = $memRow["memId"];
        $_SESSION["memSex"] = $memRow["memSex"];
        $_SESSION["memEmail"] = $memRow["memEmail"];
        $_SESSION["memPhone"] = $memRow["memPhone"];
        $_SESSION["memBirth"] = $memRow["memBirth"];
        $_SESSION["point"] = $memRow["point"];
    }
} catch (PDOException $e) {  
    $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
    $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
    $errMsg .= "系統無法連線<br>";
      
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">

    <link rel="stylesheet" href="./css/style.css">
    

    <title>Aqua Member</title>
</head>
<body>

  <!-- 下面是背景的div，先不要動到 -->
  <div class="memBackground">
    <div class="commonBG00 commonBGSet"></div>
    <div class="commonBG01 commonBGSet"></div>
    <div class="commonBG02 commonBGSet"></div>
    <div class="commonBGLeft commonBGSet"></div>
    <div class="commonBGRight commonBGSet"></div>
    <img src="./image/background/fish1.png" alt="" class="BGFish1">
    <img src="./image/background/fish2.png" alt="" class="BGFish2">
  </div> 
  <!-- 上面是背景的div，先不要動到 -->
  <header class="main_menu">
    <nav class="main_nav">
      <div class="logo_box">
        <a href="homepage.html" class="logo">
          <img src="./image/header/logo.png" alt="">
        </a>
        <a href="" class="logo_text_box">
          <h1 class="logo_text">AQUA WONDERLAND</h1>
        </a>
      </div>
      <ul class="main_menu_ul">
        <li class="main_menu_li active">
          <a href="tour.html" class="li_logo">
            <img src="./image/header/header_tour.png" alt="">
            <img src="./image/header/header_tour_cover.png" alt="">
          </a>
          <a href="tour.html" class="li_text">TOUR</a>
        </li>
        <li class="main_menu_li active">
          <a href="journal.html" class="li_logo">
            <img src="./image/header/header_journal.png" alt="">
            <img src="./image/header/header_journal_cover.png" alt="">
          </a>
          <a href="journal.html" class="li_text">JOURNAL</a>
        </li>
        <li class="main_menu_li active">
          <a href="ticket.html" class="li_logo">
            <img src="./image/header/header_ticket.png" alt="">
            <img src="./image/header/header_ticket_cover.png" alt="">
          </a>
          <a href="ticket.html" class="li_text">TICKET</a>
        </li>
        <li class="main_menu_li active">
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

    <!-- 你的code打這下面 -->

    <main>
    <?php
    if($errMsg != ""){
      echo $errMsg;
    }
    ?>
      <div class="container memMain">
        <div class="row";
          <!-- 左半邊選單 -->
          <div class="memList col-12 col-xl-3">

            <div class="memImgBox">
              <div class="memImgArea">
                <div class="memImg">
                  <img src="./image/member/Shinnosuke2.jpg" alt="">
                </div>
                <label for="memPhoto">
                  <input type="file" name="memImg" id="memPhoto" style="display: none;">Edit
                  <i class="fas fa-pen"></i>
                </label>
              </div>
            </div>

              <div class="memNameBox">
                <h3><?=$memRow["memName"]?></h3>
                <div class="memPointBox">
                  <span>Point:</span>
                  <span id="memPoint"><?=$memRow["point"]?></span>
                </div>
              </div>

              <ul>
                <div class="membtn">
                  <a href="#" data-target="tab1" class="memTab -on">PROFILE</a>
                </div>
                <div class="membtn">
                  <a href="#" data-target="tab2" class="memTab">BLOG</a>
                </div>
                <div class="membtn">
                  <a href="#" data-target="tab3" class="memTab">CARD</a>
                </div>
                <div class="membtn">
                  <a href="#" data-target="tab4" class="memTab">ADOPTION</a>
                </div>
                <div class="membtn">
                  <a href="#" data-target="tab5" class="memTab">ORDER</a>
                </div>
              </ul>

          </div>
          
          <!-- 右半邊內容 -->
          <div class="container memProContent col-12 col-xl-9">
            <!-- PROFILE -->
            <div class="memTab tab1 memProfile -on">
              <div class="memAllTitle">
                <h3>Profile</h3>
              </div>
              <div class="memProAll">
                <div class="memName memProfileContent">
                  <div class="memProTit">Name</div>
                  <div class="memProText"><?=$memRow["memName"]?></div>
                  <i class="fas fa-pen"></i>
                </div>
                <div class="memUsername memProfileContent">
                  <div class="memProTit">Username</div>
                  <div class="memProText"><?=$memRow["memId"]?></div>
                  <i class="fas fa-pen"></i>
                </div>
                <div class="memPsw memProfileContent">
                  <div class="memProTit">Password</div>
                  <div class="memProText"><?=$memRow["memPsw"]?></div>
                  <i class="fas fa-pen"></i>
                </div>
                <div class="memGender memProfileContent">
                  <div class="memProTit">Gender</div>
                  <div class="memProText"><?=$memRow["memSex"]?></div>
                  <i class="fas fa-pen"></i>
                </div>
                <div class="memEmail memProfileContent">
                  <div class="memProTit">Email</div>
                  <div class="memProText"><?=$memRow["memEmail"]?></div>
                  <i class="fas fa-pen"></i>
                </div>
                <div class="memMobile memProfileContent">
                  <div class="memProTit">Phone</div>
                  <div class="memProText"><?=$memRow["memPhone"]?></div>
                  <i class="fas fa-pen"></i>
                </div>
                <div class="memBirth memProfileContent">
                  <div class="memProTit">Birthday</div>
                  <div class="memProText"><?=$memRow["memBirth"]?></div>
                  <i class="fas fa-pen"></i>
                </div>
              </div>
            </div>
          
            <!-- Blog Record -->
            <div class="memTab tab2 memBlog">
              <div class="memAllTitle">
                <h3>Bolg Record</h3>
              </div>
              <ul>
                <div class="memSpanBlog">
                  <div>
                    <a href="#" data-target="memBlogTab1" class="memBlogTab -on">Posted</a>
                  </div>
                  <div>
                    <a href="#" data-target="memBlogTab2" class="memBlogTab span2">Saved</a>
                  </div>
                </div>
              </ul>
              <div class="memBlogAll">
                <div class="memBlogTable memBlogTab1 memBlogTab -on container">
                  <div class="memBlogForm memBlogCard row">
                    <div class="memFormTitle col-2 col-sm-2">Image</div>
                    <div class="memFormTitle col-6 col-sm-6">Title</div>
                    <div class="memFormTitle col-4 col-sm-2">Hashtag</div>
                    <div class="memFormTitle col-2 col-sm-2">Edit</div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">FunDay!</div>
                    <div class="mem_ana col-4 col-sm-2">#dolphin</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlog1.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">That's Great!</div>
                    <div class="mem_ana col-4 col-sm-2">#whale</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="memBlogTable memBlogTab2 memBlogTab container">
                  <div class="memBlogForm memBlogCard row">
                    <div class="memFormTitle col-2 col-sm-2">Image</div>
                    <div class="memFormTitle col-6 col-sm62">Title</div>
                    <div class="memFormTitle col-4 col-sm-2">Hashtag</div>
                    <div class="memFormTitle col-2 col-sm-2">Edit</div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memblogseal.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">GreatTime!</div>
                    <div class="mem_ana col-4 col-sm-2">#seal</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="memBlogContent memBlogCard row">
                    <div class="mem_ana col-2 col-sm-2"><img src="./image/member/memBlogseaturtle.jpg" alt=""></div>
                    <div class="mem_ana col-6 col-sm-6">Funny!</div>
                    <div class="mem_ana col-4 col-sm-2">#seaturtle</div>
                    <div class="mem_ana col-2 col-sm-2">
                      <div class="memBlogClick">
                        <i class="fas fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Thankscard Record -->
            <div class="memTab tab3 memThanks">
              <div class="memAllTitle">
                <h3>Thankscard Record</h3>
              </div>
              <div class="memThanksAll">
                <div class="memThanksTable container">
                  <div class="memBlogForm memCard row">
                    <div class="memFormTitle col-3 col-sm-3">Date</div>
                    <div class="memFormTitle col-4 col-sm-4 col-lg-3">Recipient</div>
                    <div class="memFormTitle col-5 col-sm-5 col-lg-6">Address</div>
                  </div>
                  <div class="memBlogContent memCard row">
                    <div class="mem_ana col-3 col-sm-2">2020-10-21</div>
                    <div class="mem_ana col-4 col-sm-4 col-lg-3">Shinnosuke</div>
                    <div class="mem_ana col-5 col-sm-5 col-lg-6">No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City 320, Taiwan</div>
                  </div>
                  <div class="memBlogContent memCard row">
                    <div class="mem_ana col-3 col-sm-2">2020-10-21</div>
                    <div class="mem_ana col-4 col-sm-4 col-lg-3">Shinnosuke</div>
                    <div class="mem_ana col-5 col-sm-5 col-lg-6">No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City 320, Taiwan</div>
                  </div>
                  <div class="memBlogContent memCard row">
                    <div class="mem_ana col-3 col-sm-2">2020-10-21</div>
                    <div class="mem_ana col-4 col-sm-4 col-lg-3">Shinnosuke</div>
                    <div class="mem_ana col-5 col-sm-5 col-lg-6">No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City 320, Taiwan</div>
                  </div>
                  <div class="memBlogContent memCard row">
                    <div class="mem_ana col-3 col-sm-2">2020-10-21</div>
                    <div class="mem_ana col-4 col-sm-4 col-lg-3">Shinnosuke</div>
                    <div class="mem_ana col-5 col-sm-5 col-lg-6">No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City 320, Taiwan</div>
                  </div>
                  <div class="memBlogContent memCard row">
                    <div class="mem_ana col-3 col-sm-2">2020-10-21</div>
                    <div class="mem_ana col-4 col-sm-4 col-lg-3">Shinnosuke</div>
                    <div class="mem_ana col-5 col-sm-5 col-lg-6">No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City 320, Taiwan</div>
                  </div>
                  <div class="memBlogContent memCard row">
                    <div class="mem_ana col-3 col-sm-2">2020-10-21</div>
                    <div class="mem_ana col-4 col-sm-4 col-lg-3">Shinnosuke</div>
                    <div class="mem_ana col-5 col-sm-5 col-lg-6">No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City 320, Taiwan</div>
                  </div>
                  <div class="memBlogContent memCard row">
                    <div class="mem_ana col-3 col-sm-2">2020-10-21</div>
                    <div class="mem_ana col-4 col-sm-4 col-lg-3">Shinnosuke</div>
                    <div class="mem_ana col-5 col-sm-5 col-lg-6">No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City 320, Taiwan</div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Adoption Record -->
            <div class="memTab tab4 memAdopt">
              <div class="memAllTitle">
                <h3>Adoption Record</h3>
              </div>
              <div class="memAdoptAll">
                <div class="memAdoptTable container">
                  <div class="row memBlogForm memAdoptCard">
                    <div class="col-3 col-sm-3 memFormTitle">Date</div>
                    <div class="col-3 col-sm-3 memFormTitle">Adopt</div>
                    <div class="col-3 col-sm-3 memFormTitle">Dollar</div>
                    <div class="col-3 col-sm-3 memFormTitle">Status</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-09-21</div>
                    <div class="col-3 col-sm-3 mem_ana">dolphin</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$2,000</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-10-21</div>
                    <div class="col-3 col-sm-3 mem_ana">seaturtle</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                  <div class="row memBlogContent memAdoptCard">
                    <div class="col-3 col-sm-3 mem_ana">2020-11-21</div>
                    <div class="col-3 col-sm-3 mem_ana">whale</div>
                    <div class="col-3 col-sm-3 mem_ana">NT$1,500</div>
                    <div class="col-3 col-sm-3 mem_ana">Succeed</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Order Record -->
            <div class="memTab tab5 memOrder">
              <div class="memAllTitle">
                <h3>Order Record</h3>
              </div>
              <ul>
                <div class="memSpanBlog">
                  <div>
                    <a href="#" data-target="memBlogTab1" class="memBlogTab -on">Ticket</a>
                  </div>
                  <div>
                    <a href="#" data-target="memBlogTab2" class="memBlogTab span2">Night</a>
                  </div>
                </div>
              </ul>
              <!-- OrderAll -->
              <div class="memOrderAll">

                <!-- ticket part -->
                <div class="memOrderTable memBlogTab1 memBlogTab -on container">
                  <!-- Ticket Title -->
                  <div class="memBlogForm memOrderCard row">
                    <div class="col-2 col-sm-2 memFormTitle">Order No.</div>
                    <div class="col-4 col-sm-4 memFormTitle">Total</div>
                    <div class="col-4 col-sm-4 memFormTitle">Payment time</div>
                    <div class="col-2 col-sm-2 memFormTitle">Detail</div>
                  </div>
                  <!-- ticket 001 -->
                  <div class="memBlogContent memOrderCard row">
                    <div class="col-2 col-sm-2 mem_ana">001</div>
                    <div class="col-4 col-sm-4 mem_ana">$<span>90</span></div>
                    <div class="col-4 col-sm-4 mem_ana">2020-10-21</div>
                    <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>

                    <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                      <div class="row memBlogForm memOrderCardDetail">
                        <div class="col-3 col-sm-3 memFormTitle">ProdNo.</div>
                        <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                        <div class="col-3 col-sm-3 memFormTitle">Price</div>
                        <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Adult</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>60</span></div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Child</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>15</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                      </div>
                    </div>
                  </div>
                  <!-- ticket 002 -->
                  <div class="memBlogContent memOrderCard row">
                    <div class="col-2 col-sm-2 mem_ana">002</div>
                    <div class="col-4 col-sm-4 mem_ana">$<span>90</span></div>
                    <div class="col-4 col-sm-4 mem_ana">2020-10-21</div>
                    <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>

                    <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                      <div class="row memBlogForm memOrderCardDetail">
                        <div class="col-3 col-sm-3 memFormTitle">ProdNo.</div>
                        <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                        <div class="col-3 col-sm-3 memFormTitle">Price</div>
                        <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Adult</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>60</span></div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Child</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>15</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                      </div>
                    </div>
                  </div>
                  <!-- ticket 003 -->
                  <div class="memBlogContent memOrderCard row">
                    <div class="col-2 col-sm-2 mem_ana">003</div>
                    <div class="col-4 col-sm-4 mem_ana">$<span>90</span></div>
                    <div class="col-4 col-sm-4 mem_ana">2020-10-21</div>
                    <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>

                    <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                      <div class="row memBlogForm memOrderCardDetail">
                        <div class="col-3 col-sm-3 memFormTitle">ProdNo.</div>
                        <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                        <div class="col-3 col-sm-3 memFormTitle">Price</div>
                        <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Adult</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>60</span></div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Child</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>15</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                      </div>
                    </div>
                  </div>
                  <!-- ticket 004 -->
                  <div class="memBlogContent memOrderCard row">
                    <div class="col-2 col-sm-2 mem_ana">004</div>
                    <div class="col-4 col-sm-4 mem_ana">$<span>90</span></div>
                    <div class="col-4 col-sm-4 mem_ana">2020-10-21</div>
                    <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>

                    <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                      <div class="row memBlogForm memOrderCardDetail">
                        <div class="col-3 col-sm-3 memFormTitle">ProdNo.</div>
                        <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                        <div class="col-3 col-sm-3 memFormTitle">Price</div>
                        <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Adult</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>60</span></div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Child</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>15</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                      </div>
                    </div>
                  </div>
                  <!-- ticket 005 -->
                  <div class="memBlogContent memOrderCard row">
                    <div class="col-2 col-sm-2 mem_ana">005</div>
                    <div class="col-4 col-sm-4 mem_ana">$<span>90</span></div>
                    <div class="col-4 col-sm-4 mem_ana">2020-10-21</div>
                    <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>

                    <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                      <div class="row memBlogForm memOrderCardDetail">
                        <div class="col-3 col-sm-3 memFormTitle">ProdNo.</div>
                        <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                        <div class="col-3 col-sm-3 memFormTitle">Price</div>
                        <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Adult</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>60</span></div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Child</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>15</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>30</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- overnight part -->
                <div class="memOrderTable memBlogTab2 memBlogTab container">
                  <!-- overnight Title -->
                  <div class="memBlogForm memOrderCard row">
                    <div class="col-2 col-sm-2 memFormTitle">Order No.</div>
                    <div class="col-3 col-sm-3 memFormTitle">Stay time</div>
                    <div class="col-2 col-sm-2 memFormTitle">Total</div>
                    <div class="col-3 col-sm-3 memFormTitle">Payment Date</div>
                    <div class="col-2 col-sm-2 memFormTitle">Detail</div>
                  </div>
                  <!-- overnight 001 -->
                  <div class="memBlogContent memOrderCard row">
                    <div class="col-2 col-sm-2 mem_ana">001</div>
                    <div class="col-3 col-sm-3 mem_ana">2020-10-31</div>
                    <div class="col-2 col-sm-2 mem_ana">$<span>280</span></div>
                    <div class="col-3 col-sm-3 mem_ana">2020-10-21</div>
                    <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>

                    <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                      <div class="row memBlogForm memOrderCardDetail">
                        <div class="col-3 col-sm-3 memFormTitle">AreaNo.</div>
                        <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                        <div class="col-3 col-sm-3 memFormTitle">Price</div>
                        <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Whale</div>
                        <div class="col-3 col-sm-3 memTick">2</div>
                        <div class="col-3 col-sm-3 memTick">$<span>100</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>200</span></div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Turtle</div>
                        <div class="col-3 col-sm-3 memTick">1</div>
                        <div class="col-3 col-sm-3 memTick">$<span>80</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>80</span></div>
                      </div>
                    </div>
                  </div>
                  <!-- overnight 002 -->
                  <div class="memBlogContent memOrderCard row">
                    <div class="col-2 col-sm-2 mem_ana">002</div>
                    <div class="col-3 col-sm-3 mem_ana">2020-11-30</div>
                    <div class="col-2 col-sm-2 mem_ana">$<span>400</span></div>
                    <div class="col-3 col-sm-3 mem_ana">2020-10-25</div>
                    <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>

                    <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                      <div class="row memBlogForm memOrderCardDetail">
                        <div class="col-3 col-sm-3 memFormTitle">AreaNo.</div>
                        <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                        <div class="col-3 col-sm-3 memFormTitle">Price</div>
                        <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                      </div>
                      <div class="row memBlogContent memOrderCardDetail">
                        <div class="col-3 col-sm-3 memTick">Whale</div>
                        <div class="col-3 col-sm-3 memTick">4</div>
                        <div class="col-3 col-sm-3 memTick">$<span>100</span></div>
                        <div class="col-3 col-sm-3 memTick">$<span>400</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div class="memBlogTable memBlogTab2 memBlogTab">
                  Night Title
                  <div class="col-md-12 memBlogForm memOrderCard">
                    <div class="col-md-2 memFormTitle">Order No.</div>
                    <div class="col-md-3 memFormTitle">Visit Date</div>
                    <div class="col-md-2 memFormTitle">Total</div>
                    <div class="col-md-3 memFormTitle">Status</div>
                    <div class="col-md-2 memFormTitle">Detail</div>
                  </div>
                  Night 001
                  <div class="col-md-12 memBlogContent memOrderCard">
                    <div class="col-md-2 mem_ana">001</div>
                    <div class="col-md-3 mem_ana">2020-10-21</div>
                    <div class="col-md-2 mem_ana">NT$4,800</div>
                    <div class="col-md-3 mem_ana">Unpaid</div>
                    <div class="col-md-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>
                    <div class="memBlogDetail memStepContent">
                      <div class="col-md-12 memBlogForm memOrderCardDetail">
                        <div class="col-md-3 memFormTitle">AreaNo.</div>
                        <div class="col-md-2 memFormTitle">Person</div>
                        <div class="col-md-2 memFormTitle">Price</div>
                        <div class="col-md-3 memFormTitle">Subtotal</div>
                        <div class="col-md-2 memFormTitle">Edit</div>
                      </div>
                      <div class="col-md-12 memBlogContent memOrderCardDetail">
                        <div class="col-md-3 memTick">Whale</div>
                        <div class="col-md-2 memTick">2</div>
                        <div class="col-md-2 memTick">NT$2,400</div>
                        <div class="col-md-3 memTick">NT$4,800</div>
                        <div class="col-md-2 memTick">
                          <i class="fas fa-pen"></i>
                          <i class="fas fa-trash-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  Night 002
                  <div class="col-md-12 memBlogContent memOrderCard">
                    <div class="col-md-2 mem_ana">002</div>
                    <div class="col-md-3 mem_ana">2020-10-21</div>
                    <div class="col-md-2 mem_ana">NT$4,800</div>
                    <div class="col-md-3 mem_ana">Paid</div>
                    <div class="col-md-2 mem_ana memStep" aria-expanded="false">view 
                      <i class="fa fa-angle-down fa-lg"></i>
                    </div>
                  Detail
                    <div class="memBlogDetail memStepContent">
                      <div class="col-md-12 memBlogForm memOrderCardDetail">
                        <div class="col-md-3 memFormTitle">AreaNo.</div>
                        <div class="col-md-2 memFormTitle">Person</div>
                        <div class="col-md-2 memFormTitle">Price</div>
                        <div class="col-md-3 memFormTitle">Subtotal</div>
                        <div class="col-md-2 memFormTitle">Edit</div>
                      </div>
                      <div class="col-md-12 memBlogContent memOrderCardDetail">
                        <div class="col-md-3 memTick">Whale</div>
                        <div class="col-md-2 memTick">2</div>
                        <div class="col-md-2 memTick">NT$2,400</div>
                        <div class="col-md-3 memTick">NT$4,800</div>
                        <div class="col-md-2 memTick">
                          <i class="fas fa-pen"></i>
                          <i class="fas fa-trash-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>

              
            </div>
          </div>


        </div>
      </div>
    </main>
    <!-- 你的code打這上面 -->
  </div>

  <footer>
    Copyright 2020 ED103-G1 Aqua Wonderland All Rights Reserved
  </footer>
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src  ="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"></script>


  <!-- 頁籤 -->
  <script>
  // member主頁籤
  $(function(){
    $("a.memTab").on("click", function(e){
      e.preventDefault();
      
      /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
      $(this).closest("ul").find("a.memTab").removeClass("-on");
      $(this).addClass("-on");
      
      /* 找到對應的頁籤內容，加上 -on 來顯示 */
      $("div.memTab").removeClass("-on");
      $("div.memTab." + $(this).attr("data-target")).addClass("-on");
    });
  });

  // member次頁籤
  $(function(){
    $("a.memBlogTab").on("click", function(e){
      e.preventDefault();
      
      /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
      $(this).closest("ul").find("a.memBlogTab").removeClass("-on");
      $(this).addClass("-on");
      
      /* 找到對應的頁籤內容，加上 -on 來顯示 */
      $("div.memBlogTab").removeClass("-on");
      $("div.memBlogTab." + $(this).attr("data-target")).addClass("-on");
    });
  });

  // OrderDetail收合
  $("div.memStep").on("click", function(){
    $(this).next().slideToggle();
    $(this).find('i').toggleClass('rotate');
  });

  // Hamburger
  $("div.hamburger_box").on("click", function(){
    $("span.hamburger_line").toggleClass("is-active");
    $("span.hamburger_cross").toggleClass("is-active");
    $("ul.main_menu_ul").toggleClass("is-active");
  });

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
</body>
</html>
