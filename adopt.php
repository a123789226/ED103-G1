
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adopt</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="adoptLightBox">
        <div class="jourBackground">
            <div class="commonBG00 commonBGSet"></div>
            <div class="commonBG01 commonBGSet"></div>
            <div class="commonBG02 commonBGSet"></div>
            <div class="commonBGLeft commonBGSet"></div>
            <div class="commonBGRight commonBGSet"></div>
            <img src="./image/background/fish1.png" alt="" class="BGFish1">
            <img src="./image/background/fish1.png" alt="" class="BGFish2">
        </div>
        <header class="main_menu">
            <nav class="main_nav">
                <div class="logo_box">
                    <a href="index.html" class="logo">
                        <img src="./image/header/logo.png" alt="">
                    </a>
                    <a href="" class="logo_text_box">
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
                        <a href="blog.html" class="li_logo">
                            <img src="./image/header/header_blog.png" alt="">
                            <img src="./image/header/header_blog_cover.png" alt="">
                        </a>
                        <a href="blog.html" class="li_text">BLOG</a>
                    </li>
                </ul>
                <div class="header_right">
                    <a class="member_box loginModal" href="">
                        <img src="./image/header/header_member_fish.png" alt="">
                    </a>
                    <a class="cart_box" href="">
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


        <div class="adoptSection">

            <div class="adoptTitleBox commonTitleBox">
                <h3 class="commonTitle">ADOPT</h3>
                <h4 class="adoptSubTitle commonSubTitle">
                    With your adoption, you get...<br>
                    <br>A customized, printable certificate confirming your adoption
                    <br>A custom social media badge to share your adoption with the world
                </h4>
            </div>
            <div class="adoptInnerSection">
                <h3 class="adoptStepTitle">Start your adoption now</h3>
                <div class="adoptAqua">
                    <p>Your adopted aqua: Olivia</p>
                    <img src="./image/journal/journal_dolphin/00.jpg" alt="" u>
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
                            <div class="adoptConfirmAqua">
                                <form action="">
                                    <h4>Confirm Your Aqua</h4>
                                    <div class="aquaNameSection">
                                        <select name="aqua" id="aquaName">
                                            <optgroup label="Dolphin">
                                                <option value="1">Olivia</option>
                                                <option value="2">Mike</option>
                                            </optgroup>
                                            <optgroup label="Whale">
                                                <option value="3">Catie</option>
                                                <option value="4">Marrie</option>
                                            </optgroup>
                                            <optgroup label="Seal">
                                                <option value="3">Mike</option>
                                                <option value="4">Sara</option>
                                            </optgroup>
                                            <optgroup label="Turtle">
                                                <option value="3">Neil</option>
                                                <option value="4">Nick</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                </form>
                            </div>

                            <div class="adoptConfirmAmount">
                                <form action="">
                                    <h4>Adopt amount</h4>
                                    <div class="adoptAmountSection">
                                        <label class="adoptAmountType" for="hund">
                                            <input type="radio" name="amountType" checked="checked" id="hund">$100
                                        </label>
                                        <label class="adoptAmountType" for="hund2">
                                            <input type="radio" name="amountType" id="hund2">$200
                                        </label>
                                        <label class="adoptAmountType" for="hund3">
                                            <input type="radio" name="amountType" id="hund3">$300
                                        </label>
                                        <label class="adoptAmountType" for="hund4">
                                            <input type="radio" name="amountType" id="hund4">$400
                                        </label>
                                    </div>

                                    <div class="adoptAmountSection">
                                        <label class="adoptSelfAmountType" for="hund5">
                                            <input type="radio" name="amountType" id="hund5">$<input type="text">
                                        </label>
                                    </div>
                                </form>
                            </div>

                            <div class="adoptProcessStep">
                                <a href="#" class="adoptProcessBtn">ADOPT NOW</a>
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
                            <h4>Your information</h4>
                            <div class="adoptInfo">
                                <p>Name</p>
                                <input type="text" placeholder="first name">
                                <input type="text" placeholder="last name">
                            </div>

                            <div class="adoptInfo">
                                <p>Email</p>
                                <input type="text">
                                <h6>*Your receipt will be emailed here</h6>
                            </div>

                            <div class="adoptInfo">
                                <p>Phone number</p>
                                <input type="number">
                            </div>

                            <div class="adoptInfo">
                                <p>Leave message to Aqua</p>
                                <textarea name="adoptmessage" id="adoptmessage" cols="44" rows="6"></textarea>
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
                            <h4>Payment detail</h4>
                            <div class="adoptPaymentSection">

                                <!-- <div class="adoptPayment">
                                    <p>Payment amount</p>
                                    <p>$500</p>
                                </div> -->

                                <div class="adoptPayment">
                                    <p>Name on card</p>
                                    <input type="text">
                                </div>

                                <div class="adoptPayment">
                                    <p>Card number</p>
                                    <input type="number">
                                </div>

                                <div class="adoptPayment">
                                    <p>Expiry date</p>
                                    <input type="text" placeholder="MM/YY">
                                </div>

                                <div class="adoptPayment">
                                    <p>Security code</p>
                                    <input type="number">
                                </div>
                            </div>


                            <div class="adoptProcessStep">
                                <a href="#" class="adoptBackBtn">BACK</a>
                                <a href="#" class="adoptProcessBtn">NEXT</a>
                            </div>

                        </div>
                        <!-- </div> -->
                        <!-- </div> -->

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
                            <h4>Adoption confirm</h4>
                            <div class="adoptConfirmCheck">
                                <div class="adoptConfirm">
                                    <h5>Adopted Aqua</h5>
                                    <input type="text">
                                </div>

                                <div class="adoptConfirm">
                                    <h5>Adopt amount</h5>
                                    <input type="number">
                                </div>
                            </div>


                            <div class="adoptConfirmCheck">
                                <div class="adoptConfirm">
                                    <h5>Your information</h5>
                                    <div class="adoptInfo">
                                        <p>Name</p>
                                        <input type="text" placeholder="first name">
                                        <input type="text" placeholder="last name">
                                    </div>

                                    <div class="adoptInfo">
                                        <p>Email</p>
                                        <input type="text">
                                        <h6 class="adoptReceipt">*Your receipt will be emailed here</h6>
                                    </div>

                                    <div class="adoptInfo">
                                        <p>Phone number</p>
                                        <input type="text">
                                    </div>

                                    <div class="adoptInfo">
                                        <p>Leave message to Aqua</p>
                                        <textarea name="adoptmessage" id="adoptmessage" cols="23" rows="6"></textarea>
                                    </div>
                                </div>

                                <div class="adoptConfirm">
                                    <h5>Payment detail</h5>

                                    <div class="adoptPayment">
                                        <p>Name on card</p>
                                        <input type="text">
                                    </div>

                                    <div class="adoptPayment">
                                        <p>Card number</p>
                                        <input type="text">
                                    </div>

                                    <div class="adoptPayment">
                                        <p>Expiry date</p>
                                        <input type="text" placeholder="MM/YY">
                                    </div>

                                    <div class="adoptPayment">
                                        <p>Security code</p>
                                        <input type="number">
                                    </div>
                                </div>
                            </div>

                            <div class="adoptProcessStep adoptProcessStepFinal">
                                <a href="#" class="adoptBackBtn">BACK</a>
                                <a href="./journal.html" id="demo1" class="adoptProcessBtn">ADOPT</a>
                            </div>
                        </div>
                    </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>

    <script>
        id = 1;

        $(function () {
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

    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <!-- adopt succeed -->
    <script>
        document.getElementById("demo1").addEventListener("click", function () {
            swal("Adopt Succeed!", "Thank you for your adoption!", "success");
        });
    </script>

</body>

</html>