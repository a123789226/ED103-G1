<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/layout/headerCart.js"></script>
    <script src="./js/ticket/ticketConfirm.js"></script>
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
    <!-- <div class="commonTitleBox">
      <h2 class="commonTitle">TICKET</h2>
      <h4 class="commonSubTitle">Lorem ipsum dolor sit amet consectetur.</h4>
    </div> -->
<!-- 你的code打這下面 -->

    <!-- Sign In -->
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

    <form class="cart3Content" action="homepage.html">
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
              <td><span>$</span><span>0</span></td>
            </tr>
          </tbody>
        </table>


        <div class="payButtonBox">
          <a href="ticketPayment.html" class="ticketPayCancel">PREVIOUS</a>
          <button class="ticketPayToCheck">SEND</button>
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
  <script>


    //jquery
    // 漢堡
    $("div.hamburger_box").on("click", function(){
      $("span.hamburger_line").toggleClass("is-active");
      $("span.hamburger_cross").toggleClass("is-active");
      $("ul.main_menu_ul").toggleClass("is-active");
    });

    // $('.ticketPayToCheck').on('click', function(e){
    //   e.preventDefault();
    //   swal("Great!", "You have completed the payment!", "success").then((value) => {
    //     if(value){
    //       $(this).submit();
    //       window.location = "homepage.html";
    //     }
    //   })

    // })
    //把它改成跳轉到另一php存到資料庫然後header連到首頁。

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