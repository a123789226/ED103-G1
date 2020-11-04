<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Journal</title>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css">
  <link rel="stylesheet" href="./css/style.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

</head>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
<!-- <script src="./vendors/jquery/jquery-3.5.1.min.js"></script> -->
<!-- <script src="./vendors/popper/popper.min.js"></script> -->
<!-- <script src="./vendors/bootstrap/js/bootstrap.min.js"></script> -->
<!-- <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->

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
  <!-- 上面是背景的div，先不要動到 -->
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


  <div class="jourContainer">

    <!-- Title -->
    <div class="jourTitleBox commonTitleBox">
      <h2 class="commonTitle">JOURNAL</h2>
      <h4 class="jourSubTitle commonSubTitle">In journal, we have recover diary. Try to read and flip the books to get
        more about the
        Aquas.</h4>
    </div>
    <!-- 物種 -->
    <div class="jourTypeSection">
      <h3 class="jourTypeTitle">Choose The Aqua</h3>
      <div class="jourTypeChoice">
        <!-- <a class="btn gray nav__link" href="./post_content.php?piNo=43">
							<div class="border"></div>
							<div class="border"></div>
							<div class="border"></div>
							<div class="border"></div>
            </a> -->
        <div data-target="tab1" class="jourType jourTypeTab -on">
          <div class="jourFixPhotoSize">
            <a href="#" data-target="tab1" class="jourTypePhoto"><img src="./image/journal/journal_dolphin/00.jpg"
                alt=""></a>
          </div>
          <a href="#" class="jourTypeText" id="dolphin">DOLPHIN</a>
        </div>

        <div data-target="tab2" class="jourType jourTypeTab">
          <div class="jourFixPhotoSize">
            <a href="#" data-target="tab2" class="jourTypePhoto"><img src="./image/journal/journal_whale/00.jpg"
                alt=""></a>
          </div>
          <a href="#" class="jourTypeText">WHALE</a>
        </div>

        <div data-target="tab3" class="jourType jourTypeTab">
          <div class="jourFixPhotoSize">
            <a href="#" data-target="tab3" class="jourTypePhoto"><img src="./image/journal/journal_seal/00.jpg"
                alt=""></a>
          </div>
          <a href="#" class="jourTypeText">SEAL</a>
        </div>

        <div data-target="tab4" class="jourType jourTypeTab">
          <div class="jourFixPhotoSize">
            <a href="#" data-target="tab4" class="jourTypePhoto"><img src="./image/journal/journal_turtle/00.jpg"
                alt=""></a>
          </div>
          <a href="#" class="jourTypeText">TURTLE</a>
        </div>
      </div>
    </div>
    <!-- 最上本書 -->
    <div class="jourOpenBookSection">
      <div class="demobook" id="demobook">
        <!-- cover -->
        <div class="hard jourCover">
          <div class="jourOpenBook">

            <div class="jourOpenBookRight">
              <div class="jourBookPhoto">
                <img src="./image/journal/journal_dolphin/00.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- page 1 -->
        <div class="hard jourPage1 jourPage">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9 kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <!-- page 2 -->
        <div class="jourPage jourPage2">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9 kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <!-- page 3 -->
        <div class="jourPage jourPage3">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9 kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <!-- page 4 -->
        <div class="jourPage jourPage4">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9 kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <div class="hard jourLastPage">
          <h4>Welcome to visit Olivia at <br> Aqua Wonderland!</h4>
        </div>
      </div>
    </div>


    <!-- 4本書 Dolphin-->
    <div class="jourBookContainer jourDolphinSection tab1 -on animate__animated animate__fadeIn">
      <div class="jourBookSection">
        <a href="#">

          <div class="jourBook jourBookOpenBtn" id="jourBookOpenBtn">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_dolphin/00.jpg" alt="">
              </div>
              <div class="jourBookName">abby</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>

      <div class="jourBookSection">
        <a href="#">
          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_dolphin/02.jpg" alt="">
              </div>
              <div class="jourBookName">bob</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>

      <div class="jourBookSection">
        <a href="#">

          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_dolphin/03.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>

      <div class="jourBookSection">
        <a href="#">

          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_dolphin/06.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>
    </div>

    <!-- 2 本書 Whale -->
    <div class="jourBookContainer jourWhaleSection tab2 animate__animated animate__fadeIn">
      <div class="jourBookSection ">
        <a href="">
          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_whale/06.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>

      <div class="jourBookSection">
        <a href="#">

          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_whale/07.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>
    </div>

    <!-- 3 本書 Seal -->
    <div class="jourBookContainer jourSealSection tab3 animate__animated animate__fadeIn">
      <div class="jourBookSection ">
        <a href="">
          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_seal/09.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>

      <div class="jourBookSection">
        <a href="#">

          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_seal/10.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>

      <div class="jourBookSection">
        <a href="#">

          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_seal/11.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>
    </div>

    <!-- 2本書 Turtle -->
    <div class="jourBookContainer jourSealSection tab4 animate__animated animate__fadeIn">
      <div class="jourBookSection ">
        <a href="">
          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_turtle/11.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>

      <div class="jourBookSection">
        <a href="#">
          <div class="jourBook">
            <div class="jourBookLeft">

            </div>
            <div class="jourBookRight">
              <div class="jourBookPhoto">
                <img src="././image/journal/journal_turtle/10.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </a>
        <!-- 陰影 -->
        <div class="jourBookShadow"></div>
        <!-- 石頭 -->
        <div class="jourStone">
          <img src="./image/journal/journal_element/stone.png" alt="">
        </div>
      </div>
    </div>
  </div>


  <footer>
    Copyright 2020 ED103-G1 Aqua Wonderland All Rights Reserved
  </footer>

  <div class="jour_bk"></div>



  <!-- Lightbox -->
  <div class="jourLightBox animate__animated animate__fadeIn">
    <!-- close lightbox -->
    <div class="closeLightbox jourBookOpenBtn_close">
      <div></div>
      <div></div>
    </div>

    <!-- turn js -->
    <div class="jourOpenBookSection">
      <div id="flipbook2">
        <!-- cover -->
        <div class="hard jourCover">
          <div class="jourOpenBook">
            <div class="jourOpenBookRight jourPage0">
              <div class="jourBookPhoto">
                <img src="./image/journal/journal_dolphin/00.jpg" alt="">
              </div>
              <div class="jourBookName">Olivia</div>
              <div class="jourBookText">
                <table>
                  <tr>
                    <th>Aqua No.</th>
                    <td>No. 1</td>
                  </tr>
                  <tr>
                    <th>Aqua Name</th>
                    <td>Olivia</td>
                  </tr>
                  <tr>
                    <th>Found Location</th>
                    <td>North Bay</td>
                  </tr>
                  <tr>
                    <th>Arrival Date</th>
                    <td>August 8th, 2020</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- page 1 -->
        <div class="hard jourPage1">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9
                kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <!-- page 2 -->
        <div class="jourPage jourPage2">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9
                kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <!-- page 3 -->
        <div class="jourPage jourPage3">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9
                kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <!-- page 4 -->
        <div class="jourPage jourPage4">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9
                kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <!-- page 5 -->
        <div class="jourPage jourPage5">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9kg) and has transitioned to a diet of solid food. The next big step for him will be the introduction to
                one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>

        <!-- page 6 -->
        <div class="hard jourPage6">
          <div class="jourPageContent">
            <h4>Sep 15 2020</h4>
            <div class="jourPagePhotoArea">
              <div class="jourPagePhotoLeft">
                <img src="./image/journal/journal_dolphin/24.jpg" alt="">
              </div>
              <div class="jourPagePhotoRight">
                <img src="./image/journal/journal_dolphin/25.jpg" alt="">
                <img src="./image/journal/journal_dolphin/26.jpg" alt="">
              </div>
            </div>
            <div class="jourPageText">
              <h4>Story Updates</h4>
              <p>Olivia is now over 3 months old. He's made great progress, gained a lot of weight (now weighing over
                9
                kg) and
                has transitioned to a diet of solid food. The next big step for him will be the introduction to one of
                the other sea otters at the Aqua Wonderland.</p>
            </div>
          </div>
        </div>
        <div class="hard jourLastPage">
          <h4>Welcome to visit Olivia at <br> Aqua Wonderland!</h4>
        </div>


      </div>
    </div>

    <!-- adopt -->
    <div class="jourAdoptSection">
      <div class="jourAdoptContent">
        <div class="jourAdoptMainTitle">
          <h4 class="jourAdoptTitle">ADOPT</h4>
          <p class="jourAdoptText">Every year, we rescue, rehabilitate and release more than 100 aquas.
            You can support our mission and help us save lives by symbolically adopting XXX today with a small donation.
          </p>
        </div>

      </div>
      <div class="jourToAdopt">
          <form action="./adopt.php" method="GET">
              <button class=" jourLightboxBtn" name="name">ADOPT</button></a>
          </form>
      </div>
      <p class="jourAdopterSection">Current Adopter</p>
      <div class="jourAdopterPhoto">
        <ul class="jourAdopterlist">
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
          <li><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></li>
        </ul>
      </div>
    </div>

    <!-- comments -->
    <div class="jourCommentSection">
      <!-- comment title -->
      <div class="jourCommentContent">
        <h4 class="jourCommentTitle">COMMENT</h4>
        <p class="jourCommentText">Any comment? Please leave your comment with everyone in Aqua Wonderland</p>

        <!-- comment area -->
        <div class="jourCommentArea">
          <div class="jourCommentBox">
            <!-- <textarea name="comment" id="jourCommentTextarea" cols="70" rows="6" placeholder="comment.."></textarea> -->
            <textarea id="myInput" type="text" cols="70" rows="6" placeholder="comment.."></textarea>
            <!--留言區-->
            <button class=" jourLightboxBtn" id="doPost">SUBMIT</button>
            <!--送出按鈕-->
            <!-- <a href="#" class="jourLightboxBtn">SUBMIT</a> -->
          </div>
        </div>
      </div>
      <!-- comments -->
      <div class="jourCommentList">
        <div class="message_box" id="messageBox"></div>
        <!--留言產生區塊-->
        <ul>
          <li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png"
                  alt=""></a></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName">Elizabeth Debicki</p>
                <p class="jourCommentTime">2020-10-18 14:25</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">What an impressice journal. Olivia is cute, and I hope she will recover
                  soon.</h5>
                <!-- <a href="#" class="jourCommentLike"><img src="./image/journal/journal_element/like.png" alt=""></a> -->
                <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
              </div>
            </div>
          </li>
          <li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png"
                  alt=""></a></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName">Elizabeth Debicki</p>
                <p class="jourCommentTime">2020-10-18 14:25</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">What an impressice journal. Olivia is cute, and I hope she will recover
                  soon.</h5>
                <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
              </div>
            </div>
          </li>
          <li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png"
                  alt=""></a></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName">Elizabeth Debicki</p>
                <p class="jourCommentTime">2020-10-18 14:25</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">What an impressice journal. Olivia is cute, and I hope she will recover
                  soon.</h5>
                <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
              </div>
            </div>
          </li>
          <li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png"
                  alt=""></a></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName">Elizabeth Debicki</p>
                <p class="jourCommentTime">2020-10-18 14:25</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">What an impressice journal. Olivia is cute, and I hope she will recover
                  soon.</h5>
                <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
              </div>
            </div>
          </li>
          <li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png"
                  alt=""></a></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName">Elizabeth Debicki</p>
                <p class="jourCommentTime">2020-10-18 14:25</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">What an impressice journal. Olivia is cute, and I hope she will recover
                  soon.</h5>
                <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
              </div>
            </div>
          </li>
          <li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png"
                  alt=""></a></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName">Elizabeth Debicki</p>
                <p class="jourCommentTime">2020-10-18 14:25</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">What an impressice journal. Olivia is cute, and I hope she will recover
                  soon.</h5>
                <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <script>
    $("div.hamburger_box").on("click", function () {
      $("span.hamburger_line").toggleClass("is-active");
      $("span.hamburger_cross").toggleClass("is-active");
      $("ul.main_menu_ul").toggleClass("is-active");
      // $("ul.main_menu_ul").slideToggle();
      // $("header.main_menu").toggleClass("removeShadow");
    });
  </script>

  <!-- <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script> -->
  <!-- <script type="text/javascript" src="turn.min.js"></script> -->
  <script type="text/javascript" src="./js/turn.js"></script>
  <script>
    $("#demobook").turn({
      width: 600,
      height: 420,
      autoCenter: true
    });
  </script>
  <script>
    var dbook = $("#demobook");
    $(document).ready(function () {
      dbook.turn("page", 2);
    });
  </script>
  <script>
    $(function () {
      $(".jourTypeTab").on("click", function (e) {
        e.preventDefault();

        /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
        $(this).closest("div.jourTypeChoice").find(".jourTypeTab").removeClass("-on");
        $(this).addClass("-on");

        /* 找到對應的頁籤內容，加上 -on 來顯示 */
        $("div.jourBookContainer").removeClass("-on");
        $("div.jourBookContainer." + $(this).attr("data-target")).addClass("-on");
      });
    });
  </script>

  <script>
    $("#flipbook2").turn({
      width: 800,
      height: 600,
      autoCenter: true
    });
  </script>

  <!-- lightbox open journal-->
  <!-- <script>
    $(function () {

      // 開啟 Modal 彈跳視窗
      $(".jourBookOpenBtn").on("click", function () {
        $(".jourLightBox").css("display", "block");
        $(".jourLightBox").addClass("-on");
      });

      // 關閉 Modal
      $(".jourBookOpenBtn_close").on("click", function () {
        $(".jourLightBox").addClass("-opacity-zero");
        $(".jourLightBox").css("display", "none");


        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
          $(".jourLightBox").removeClass("-on -opacity-zero");
        }, 1000);
      });

    });
  </script> -->


  <script>
    document.getElementById('jourBookOpenBtn').onclick = function () {
      document.getElementsByClassName("jourBookOpenBtn")[0].style.display = "block";
      document.getElementsByClassName("jourLightBox")[0].style.display = "block";
      document.getElementsByClassName('jourBookOpenBtn_close')[0].onclick = function () {
        document.getElementsByClassName("jourLightBox")[0].style.display = "none";
      }
    };
  </script>

<script>
  $('.jour_bk').css({'display':'none'});
</script>


  <!-- lightbox adopt-->


  //
  <!-- adopt-->
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


      $(".adoptTab").on("click", function (e) {
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
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script>
    document.getElementById("demo1").addEventListener("click", function () {
      swal("Adopt Succeed!", "Thank you for your adoption!", "success");
    });
  </script>

  <!-- Message -->
  <script>
    window.onload = function () {

      //turn.js

      // var oMessageBox = document.getElementById("messageBox");
      // var oInput = document.getElementById("myInput");
      // var oPostBtn = document.getElementById("doPost");

      //寫入發表留言的時間
      // var oTime = document.createElement("div");
      // oTime.className = "time";
      // var myDate = new Date();
      // oTime.innerHTML = myDate.toLocaleString();
      // oMessageBox.appendChild(oTime);

      let today = new Date();
      let x =
        `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`;
      // function getTextarea(){
      //  let y = document.getElementById("myInput").value;
      // }

      $('#doPost').on('click', function () {
        console.log(x);
        // getTextarea();
        let y = $('#myInput').val();
        console.log(y);
        $('.jourCommentList ul').prepend(
          `<li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png" alt=""></a></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName">Elizabeth Debicki</p>
                <p class="jourCommentTime">${x}</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">${y}</h5>
                <!-- <a href="#" class="jourCommentLike"><img src="./image/journal/journal_element/like.png" alt=""></a> -->
                <a href="#" class="jourCommentReport"><img src="./image/journal/journal_element/report.png" alt=""></a>
              </div>
            </div>
          </li>`
        );
        $('#myInput').val('');
      });



      // oPostBtn.onclick = function () {
      // if (oInput.value) {

      // //寫入留言內容
      // var oMessageContent = document.createElement("div");
      // oMessageContent.className = "message_content";
      // oMessageContent.innerHTML = oInput.value;
      // oInput.value = "";
      // oMessageBox.appendChild(oMessageContent);

      // }
      // }
    }
  </script>

  <script>
    // Login彈窗
    $(function () {
      // 開啟 Modal 彈跳視窗
      $("a.LoginModal").on("click", function () {
        $("div.overlay").addClass("-on");
      });
      // 關閉 Modal
      $("button.btn_modal_close").on("click", function () {
        $("div.overlay").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
          $("div.overlay").removeClass("-on -opacity-zero");
        }, 1000);
      });
    });
  </script>

  <script>
      $('#jourBookOpenBtn').on('click',function(){
        let jourBookName = $(this).find('.jourBookName').text();
        let jourBookSrc = $(this).find('.jourBookPhoto img').attr('src');
        $('form button').val(`${jourBookName},${jourBookSrc}`);
      });


  </script>


</body>

</html>