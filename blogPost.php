<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.js" ></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" href="./css/style.css">

    <title>Blog</title>
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
<header class="main_menu">
  <nav class="main_nav">
    <div class="logo_box">
      <a href="homepage.html" class="logo">
        <img src="./image/header/logo.png" alt="">
      </a>
      <a href="homepae.html" class="logo_text_box">
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

 
  <!-- <div>
    <div class="commonTitleBox">
      <h2 class="commonTitle">Big Title</h2>
      <h4 class="commonSubTitle">Lorem ipsum dolor sit amet consectetur.</h4>
    </div> -->
<!-- 你的code打這下面 -->

<!-- Log In -->
<div class="memLogin overlay">
  <form class="LogInForm" id="LogInForm" method="post">
    <div class="btn_modal_close">
      <div></div>
      <div></div>
    </div>
    <h3 class="memLogTitle">LOG IN</h3>
    <input type="text" name="memId" id="memId" minlength="8" maxlength="12" pattern="[A-Za-z0-9]*" placeholder="Username" size="35"/><br>
    <input type="password" name="memPsw" id="memPsw" minlength="8" maxlength="12" pattern="[A-Za-z0-9]*" placeholder="Password" size="35"/><br>
    <h6><a href="./memberLock.html" class="memForgot memForget_modal">Forget Password?</a></h6><br>
    <button type="button" class="submitBtnLog" id="btnLogin">LOG IN</button><br>
    <div class="memLine">
      <h5>OR</h5>
    </div>
    <p>Don't have an account?</p><br>
    <a href="./memberlogin.html"><button type="button" class="submitBtnSign" id="btnSignup">SIGN UP</button></a>
  </form>
</div>

<div class="blogArticle">
  <!-- 文章標題 -->
  <div class="blogArticleTitle">
      <h2 >Tips for Visiting Aqua Wonderland</h2>
  </div>
  <!-- 文章區塊 -->
  <div class='blogArticleContainer'>
  <!-- 第一區 - 大圖 -->
    <div class="blogArticleContent">
      <img class="blogArticleImg1" src="./image/blog/photos/blogPost01.jpg" alt="">
    </div>
    <br>
  <!-- 第二區 - 左文右圖 -->
    <div class="blogArticleContent">
      <img class="blogArticleImgRight" src="./image/blog/photos/blogPost02.jpg" alt="">
      <p class="blogArticleText">A trip to the Monterey Bay Aquarium isn’t a budget activity. Tickets for adults are $49.95, children are $29.95, and students/seniors (65+) are $39.95.
        It may sound like a lot, but the aquarium is a non-profit. The money that it makes goes towards conservation efforts and research, so it’s worth it.With the price being the same 
        all day, it’s best to go early in the morning to see it all and come back later in the day to get your money’s worth.</p>
    </div>
    <br>
    <!-- 第三區 - 左圖右文 -->
    <div class="blogArticleContent">
      <img class="blogArticleImgLeft" src="./image/blog/photos/blogPost03.jpg" alt="">
      <p class="blogArticleText">Choosing what exhibits to see can be extremely overwhelming. There are a few highlights that you have to visit.

        Jellyfish & Open Sea: The jellyfish and the open sea exhibit makes the high ticket price worth it. The large tank mimics that of the open ocean, and you feel as if you’re underwater, swimming with them yourself.
        
        The area has floor to ceiling windows where you can see jellyfish along with sharks, turtles, and more!
        
        Monterey Habitats: Located right behind the kelp forest, here you’ll find a large variety of small animals like sand dollars and shrimp alongside sharks and halibut. It focuses on five different habitats beneath the bay in an hourglass-shaped exhibit.
        
        Giant Pacific Octopus: When they say giant octopus, they are not kidding. It’s about 6 feet across, tentacle to tentacle. One of the coolest parts is trying to find the octopus. They change colors to blend in with their environment, and they can squeeze themselves into tiny crevices.
        
        Sea Otters Feeding: If you’re a fan of these adorable sea creatures, you don’t want to miss their feeding times. Every day at 10 am, 1:30 pm. and 3:30 pm. you can watch the otters romp, tumble and wrestle their meal.</p>
    </div>
  </div>
</div>

<!-- 你的code打這上面 -->

  </div>

  <footer>
    Copyright 2020 ED103-G1 Aqua Wonderland All Rights Reserved
  </footer>
  
<script>
  //漢堡
  $("div.hamburger_box").on("click", function(){
    $("span.hamburger_line").toggleClass("is-active");
    $("span.hamburger_cross").toggleClass("is-active");
    $("ul.main_menu_ul").toggleClass("is-active");
    // $("ul.main_menu_ul").slideToggle();
    // $("header.main_menu").toggleClass("removeShadow");
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