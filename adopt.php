<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./image/header/favicon.ico">
    <link rel="stylesheet" href="./css/style.css">
    <title>Aqua Wonderland</title>
</head>

<body>   
    <div class="jourBackground">
        <div class="commonBG00 commonBGSet"></div>
        <div class="commonBG01 commonBGSet"></div>
        <div class="commonBG02 commonBGSet"></div>
        <div class="commonBGLeft commonBGSet"></div>
        <div class="commonBGRight commonBGSet"></div>
        <img src="./image/background/fish1.png" alt="" class="BGFish1">
        <img src="./image/background/fish1.png" alt="" class="BGFish2">
    </div>
    <!-- Log In開始 -->
    <div id="memLightBox" class="memLogin overlay">
        <form action="" class="LogInForm" id="LogInForm" method="post">
            <div class="btn_modal_close">
                <div></div>
                <div></div>
            </div>
            <h3 class="memLogTitle">LOG IN</h3>
            <input type="text" name="memId" id="memId" minlength="6" maxlength="12" pattern="[A-Za-z0-9]*"
                placeholder="Username" onfocus="this.placeholder=''" onblur="this.placeholder='Username'"
                size="25" /><br>
            <input type="password" name="memPsw" id="memPsw" minlength="6" maxlength="12" pattern="[A-Za-z0-9]*"
                placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'"
                size="25" /><br>
            <h6><a href="./memberLock.html" class="memForgot memForget_modal">Forget Password?</a></h6><br>
            <input type="button" class="submitBtnLog" id="btnLogin" value="LOG IN"><br>
            <div class="memLine">
                <h5>OR</h5>
            </div>
            <p>Don't have an account?</p><br>
            <a href="./memberlogin.html"><button type="button" class="submitBtnSign" id="btnSignup">SIGN
                    UP</button></a>
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
                <li class="main_menu_li">
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
                <li class="main_menu_li">
                    <a href="blog1.php" class="li_logo">
                        <img src="./image/header/header_blog.png" alt="">
                        <img src="./image/header/header_blog_cover.png" alt="">
                    </a>
                    <a href="blog1.php" class="li_text">BLOG</a>
                </li>
            </ul>
            <div class="header_right">
                <span class="member_box btn_modal" id="btn_modal">
                    <img src="./image/header/header_member_fish.png" alt="" title="Log In" id="memberPic"
                        onerror="javascript:this.src='./image/header/header_member_fish_login.png'">
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
            <p class="memNameInProfileBlock"><span>Hello!&nbsp;&nbsp;</span><span id="memNameInProfileBlock"></span>
            </p>
            <a href="./memberProfile.html" class="memProfileLink">Member Profile</a>
            <p id="SignOutLink">Sign Out</p>
        </div>

    </header>

    <!-- header結束 -->

    <div class="adoptSection">
        <div class="adoptTitleBox commonTitleBox">
            <h3 class="commonTitle">ADOPT</h3>
            <h4 class="adoptSubTitle commonSubTitle">
                Let's adopt marine life, you can also choose to make a customized thanks card!
            </h4>
        </div>
        <div class="adoptInnerSection">
            <h3 class="adoptStepTitle">Start Your Adoption</h3>
            <div class="adoptAquaBlock">
                <div class="adoptAqua">
                    <img src="./img/aqua/<?=$_GET["aquaPic"]?>" alt="">
                </div>
                <p style="display: inline-block;">Aqua No.<?=$_GET["aquaNo"]?></p>
            </div>
            <!-- right adopt process -->
            <!-- step 1 -->
            <div class="adoptProcessContainer">
                <div class="adoptProcessContents">
                    <div class="adoptTab tab1 -on">
                        <div class="adoptProcessList">
                            <div class="adoptTabList">
                                <div class="active">
                                    <p>1</p>
                                </div>
                                <span></span>
                                <div class="">
                                    <p>2</p>
                                </div>
                                <span></span>
                                <div class="">
                                    <p>3</p>
                                </div>
                                <span></span>
                                <div class="">
                                    <p>4</p>
                                </div>
                            </div>
                        </div>

                        <div class="adoptConfirmAmount">
                            <h4>ADOPT AMOUNT</h4>
                            <div class="adoptAmountSection">
                                <!-- <label class="adoptFrontTitle" for="adoptAmount">$</label> -->
                                <input type="text" name="amountType" id="adoptAmount" placeholder="Please enter the amount">
                            </div>
                        </div>
                        <div class="adoptProcessStep">
                            <a href="#" class="adoptProcessBtn adoptProcessBtnFirst">ADOPT NOW</a>
                        </div>

                    </div>
                    <!-- </div> -->



                    <!-- step 2 -->
                    <!-- <div class="adoptProcessContents"> -->
                    <div class="adoptTab tab2">
                        <div class="adoptProcessList">
                            <div class="adoptTabList">
                                <div class="done">
                                    <p>1</p>
                                </div>
                                <span></span>
                                <div class="active">
                                    <p>2</p>
                                </div>
                                <span></span>
                                <div class="">
                                    <p>3</p>
                                </div>
                                <span></span>
                                <div class="">
                                    <p>4</p>
                                </div>
                            </div>
                        </div>
                        <h4>YOUR INFORMATION</h4>
                        <div class="adoptInfo">
                            <label class="adoptFrontTitle">Name</label>
                            <p><?=$_SESSION["memName"]?></p>
                        </div>

                        <div class="adoptInfo">
                            <label class="adoptFrontTitle" for="adoptEmail">Email</label>
                            <p><?=$_SESSION["memEmail"]?></p>
                        </div>

                        <div class="adoptInfo">
                            <label class="adoptFrontTitle" for="adoptPhone">Phone</label>
                            <p><?=$_SESSION["memPhone"]?></p>
                        </div>

                        <div class="adoptProcessStep">
                            <a href="#" class="adoptBackBtn">BACK</a>
                            <a href="#" class="adoptProcessBtn">NEXT</a>
                        </div>
                    </div>

                    <!-- step 3 -->
                    <!-- <div class="adoptProcessContents"> -->
                    <div class="adoptTab tab3">
                        <div class="adoptProcessList">
                            <div class="adoptTabList">
                                <div class="done">
                                    <p>1</p>
                                </div>
                                <span></span>
                                <div class="done">
                                    <p>2</p>
                                </div>
                                <span></span>
                                <div class="active">
                                    <p>3</p>
                                </div>
                                <span></span>
                                <div class="">
                                    <p>4</p>
                                </div>
                            </div>
                        </div>
                        <h4>PAYMENT DETIAL</h4>
                        <div class="adoptPaymentSection">
                            <div class="adoptPayment">
                                <label>Card Number</label>
                                <input type="text" class="adoptCardInput">&nbsp;-&nbsp;<input type="text" class="adoptCardInput">&nbsp;-&nbsp;<input type="text" class="adoptCardInput">&nbsp;-&nbsp;<input type="text" class="adoptCardInput">
                            </div>
                            <div class="adoptPayment">
                                <label >Effective Date</label>
                                <input type="text" class="adoptCardInput">&nbsp;/&nbsp;<input type="text" class="adoptCardInput">
                            </div>
                            <div class="adoptPayment">
                                <label>Security Code</label>
                                <input type="text" class="adoptCardInput">
                            </div>
                        </div>


                        <div class="adoptProcessStep">
                            <a href="#" class="adoptBackBtn">BACK</a>
                            <a href="#" class="adoptProcessBtn">NEXT</a>
                        </div>

                    </div>


                    <!-- step 4 -->
                    <!-- <div class="adoptProcessContents"> -->
                    <div class="adoptConfirmSection adoptTab tab4">
                        <div class="adoptProcessList">
                            <div class="adoptTabList">
                                <div class="done">
                                    <p>1</p>
                                </div>
                                <span></span>
                                <div class="done">
                                    <p>2</p>
                                </div>
                                <span></span>
                                <div class="done">
                                    <p>3</p>
                                </div>
                                <span></span>
                                <div class="active">
                                    <p>4</p>
                                </div>
                            </div>
                        </div>
                        <h4>ADOPTION CONFIRM</h4>
                        <div class="adoptConfirmCheck">
                            <div class="adoptConfirm">
                                <h5>ADOPTED AQUA</h5>
                                <p id="adoptAquaNameResult"><span>No.</span><span id="aquaNo"><?=$_GET["aquaNo"]?></span></p>
                            </div>

                            <div class="adoptConfirm">
                                <h5>ADOPT AMOUNT</h5>
                                <p><span>$&nbsp;</span><span id="adoptAmountResult"></span></p>
                            </div>
                        </div>


                        <div class="adoptConfirmCheck">
                            <div class="adoptConfirm">
                                <h5>YOUR INFORMATION</h5>
                                <div class="adoptMenInfo">
                                    <label class="adoptFrontTitle">Name</label>
                                    <p><span><?=$_SESSION["memName"]?></span></p>
                                </div>

                                <div class="adoptMenInfo">
                                    <label class="adoptFrontTitle">Email</label>
                                    <p><span><?=$_SESSION["memEmail"]?></span></p>
                                </div>

                                <div class="adoptMenInfo">
                                    <label class="adoptFrontTitle">Phone</label>
                                    <p><span><?=$_SESSION["memPhone"]?></span></p>
                                </div>
                            </div>

                            <div class="adoptConfirm">
                                <h5>PAYMENT DETAIL</h5>

                                <div class="adoptPaymentInfo">
                                    <label class="adoptFrontTitle">Card Number</label>
                                    <p><span class="adoptCardInfo"></span><span>-</span><span class="adoptCardInfo"></span><span>-</span><span class="adoptCardInfo"></span><span>-</span><span class="adoptCardInfo"></span></p>
                                </div>

                                <div class="adoptPaymentInfo">
                                    <label class="adoptFrontTitle">Effective Date</label>
                                    <p><span class="adoptCardInfo"></span><span>/</span><span class="adoptCardInfo"></span></p>
                                </div>

                                <div class="adoptPaymentInfo">
                                    <label class="adoptFrontTitle">Security Code</label>
                                    <p><span class="adoptCardInfo"></span></p>
                                </div>
                            </div>
                        </div>

                        <div class="adoptProcessStep adoptProcessStepFinal">
                            <a href="#" class="adoptBackBtn">BACK</a>
                            <button class="adoptSubmit" id="adoptSubmit">ADOPT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        Copyright 2020 ED103-G1 Aqua Wonderland All Rights Reserved
    </footer>


    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="./js/memLogin.js"></script>
    <script src="./js/layout/header.js"></script>
    <script src="./js/journal/adopt.js"></script>

    <script>
        //前往上一步下一步切換的jquery
        id = 1; //全域變數
        firstname = '';
        $(function(){
            firstname = $('#firstname').val();
            // let firstname = ''; //區域變數
            $(".adoptProcessContents .adoptTab").css({
                'display': 'none'
            });
            $(".adoptProcessContents .adoptTab:nth-child(1)").css({
                'display': 'block'
            });
            $('.adoptProcessBtn').on('click', function () {
                $(`.adoptProcessContents .adoptTab:nth-child(${id})`).css({
                    'display': 'none'
                });
                $(`.adoptTabList li a`).removeClass('-on');
                id += 1;
                $(`.adoptProcessContents .adoptTab:nth-child(${id})`).css({
                    'display': 'block'
                });
                $(`.adoptTabList li:nth-child(${id}) a`).addClass('-on');

            });

            $('.adoptBackBtn').on('click', function () {
                $(`.adoptProcessContents .adoptTab:nth-child(${id})`).css({
                    'display': 'none'
                });
                $(`.adoptTabList li a`).removeClass('-on');
                id -= 1;
                $(`.adoptProcessContents .adoptTab:nth-child(${id})`).css({
                    'display': 'block'
                });
                $(`.adoptTabList li:nth-child(${id}) a`).addClass('-on');
            });


            $("a.adoptTab").on("click", function (e) {
                e.preventDefault();
                /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
                $(this).closest("ul").find("a.adoptTab").removeClass("-on");
                $(this).addClass("-on");

                /* 找到對應的頁籤內容，加上 -on 來顯示 */
                $("div.adoptTab").removeClass("-on");
                $("div.adoptTab." + $(this).attr("data-target")).addClass("-on");
            });
        });
    </script>
    <!-- adopt succeed -->
    <script>
        // document.getElementById("demo1").addEventListener("click", function () {
        //     swal("Adopt Succeed!", "Thank you for your adoption!", "success");
        // });
    </script>

</body>

</html>
