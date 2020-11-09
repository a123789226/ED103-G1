<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Aqua Wonderland</title>
</head>
<body>
  <!-- 下面是背景的div，先不要動到 -->
  <div class="ticketConfirmBG">
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
    <!-- <div class="commonTitleBox">
      <h2 class="commonTitle">TICKET</h2>
      <h4 class="commonSubTitle">Lorem ipsum dolor sit amet consectetur.</h4>
    </div> -->
<!-- 你的code打這下面 -->

    <form class="cart3Content">
      <h3 class="cartTitle">Confirm Your Order</h3>
      <h4 class="cartSubTitle">Please confirm that the tickets you purchased are correct, and checkout confirmation</h4>
      <div class="cartStepBox">
        <div class="cartStep done">
          <img src="./image/ticket/ticketMoney.svg" alt="">
        </div>
        <span></span>
        <div class="cartStep active">
          <img src="./image/ticket/ticketCheck.svg" alt="">
        </div>
      </div>
      <div class="confirmBlock">

        <table>
          <tbody>
            <!-- <tr>
              <td>Item</td>
              <td><span>Children Ticket</span><span>*</span><span>2</span></td>
            </tr> -->
            <tr class="priceTr"> 
              <td>Price</td>
              <td><span>$</span><span>0</span></td>
            </tr>
            <tr>
              <td>Discount Points</td>
              <td><span id="point"><?=$_POST["point"]?></span><span>&nbsp;points</span></td>
            </tr>
            <tr>
              <td>Total Price</td>
              <td><span>$</span><span id="newTotalPrice">0</span></td>
            </tr>
          </tbody>
        </table>


        <div class="payButtonBox">
          <a href="ticketPayment.html" class="ticketPayCancel">PREVIOUS</a>
          <input type="button" class="ticketPayToCheck" value="SEND" id="ticketPayToCheck">
        </div>

      </div>


    </form>


<!-- 你的code打這上面 -->

  </div>











  <footer>
    Copyright 2020 ED103-G1 Aqua Wonderland All Rights Reserved
  </footer>

  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="./js/ticket/ticketConfirm.js"></script>
  <script src="./js/ticket/ticketConfirmSend.js"></script>
  <script src="./js/layout/header.js"></script>
  <script>
  </script>
</body>
</html>