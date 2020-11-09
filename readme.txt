1. 網頁的結構
<body>

  <div><div> 背景div

  !!!!!!11/6修改!!!!!!
  <div></div>登入燈箱這是燈箱，放你打的內容區塊下面比較保險。
  
  <header><header>
    
  <div>

      以下是大標區域，沒有大標的頁面不用這段，class名稱要設相同，就會吃到layout裡面的_commonTitle.scss設定
      唯一可以更動的就是給他新增一個class名稱，然後用你自訂的class改變大標的顏色(用共通的class，其他人的顏色也會改變)
      <div class="commonTitleBox">
        <h2 class="commonTitle">最大標題</h2>
        <h4 class="commonSubTitle">最大標題下的小文字</h4>
      </div>
      以上是大標區域。

      ---以下是你打code的地方---
      ---以下是你打code的地方---
      ---以下是你打code的地方---
      
        width: 80%;
        max-width: 1200px;
        置中
        這時候你的整個內容區域要有上下左右50px的padding。
        意思是若你打code區塊的寬度是1200px，實際上只有1100的寬度放內文，兩邊跟最上面和最下面都有50px的空白。
        !!!所以這時候內容插入h2，那塊黃色的長方形並不會貼到邊邊。

        
        676以下
        @media screen and (max-width: 676px){
          width: 90%;
          置中
        }
        這時候你的寬度要從80%變更為90%。
        你的內容區域上下左右的padding從50px改為20px。
        意思是若你打code區塊的寬度若是500px，實際上只有460px的寬度放內文，兩邊跟最上面和最下面都有20px的空白。
        !!!所以這時候內容插入h2，那塊黃色的長方形會剛好貼到邊邊。

      ---以上是你打code的地方---
      ---以上是你打code的地方---
      ---以上是你打code的地方---
  
  </div>



  <footer><footer>

</body>



2. 新的規範使用

可以從雲端pull下來新的sass包，按鈕、字體、文字等都有新增規範並且有RWD
有範例可以看
請打開example.html，可以看到四種背景下要出現的按鈕規範
（打開前要先確認）你的style.scss也有 @import "./_example.scss"; 即可

!!!!該物件下面也都有附上他的sass程式碼，直接複製貼上就好，除了該物件的寬度等，其他樣式都不用自己打
!!!!該物件下面也都有附上他的sass程式碼，直接複製貼上就好，除了該物件的寬度等，其他樣式都不用自己打
!!!!該物件下面也都有附上他的sass程式碼，直接複製貼上就好，除了該物件的寬度等，其他樣式都不用自己打

麻煩大家再次修改之前自己做的網頁，若是上面有出現的物件，請務必刪掉之前打的scss並直接複製貼上我的樣式
麻煩大家再次修改之前自己做的網頁，若是上面有出現的物件，請務必刪掉之前打的scss並直接複製貼上我的樣式
麻煩大家再次修改之前自己做的網頁，若是上面有出現的物件，請務必刪掉之前打的scss並直接複製貼上我的樣式

若是規範上面沒有的物件，就按照舊版的格式禮拜一再進行討論或是Line群組討論。



3. git-hub

有三個分流
master(網頁上線用，現在不用理會他)
dev(大家的東西都在這邊進行整合)
A(自己的工作區，以下用A簡稱，在此不要進行pull或push的動作)

以sourceTree來說明
在sourceTree的A支流妳的（branch）點兩下就會切到A支流
此時在VS Code的左下角也會看到顯示A支流而不是dev
您可以開始放心編輯(盡量別在dev編輯)

要從雲端上把東西拿下來
(1).點面板左邊切換到dev支流，點pull，你的dev就會有雲端的最新版本。
(2).點A兩下回到A支流，此時你會看到你的A仍在舊版本，但dev已經在最上面是最新版本。
(3).點merge選擇最新的版本然後按下確認。
(4).你的專案資料夾就跟雲端同步惹。

要把自己修改的東西推上去
(1).在A支流編輯完，在A支流commit並附上註解（說明你修改甚麼）
(2).點兩下切換到dev支流，先進行pull。
    (這個步驟很重要，因為你要確保你dev的東西是跟雲端同步，再把你剛剛修改commit的版本merge進來)。
(3).在dev進行pull完，再點merge，把剛剛在A支流commit上去的版本也merge近來合併。
    (因為剛剛pull最新版本下來，你再把你的東西加進來，有可能發生衝突，發生衝突，請聯絡大家)。
(4).在dev按下push。
(5).完成，此時去雲端git-hub看，你修改的東西應該也會在上面惹。








--------------------  11/6更新 ------------------------

4. 更新自己負責頁面的header(會員、購物車)

(1).刪除舊的<header></header>
(2).刪除舊的Log In燈箱<div></div>

    他應該長下面這個樣子

    <!--Sign In--> 或是 <!--Log In-->
      <div class="memLogin overlay">
        <form class="LogInForm" id="LogInForm" method="post">
          ...
          ...
          ...
        </form>
      </div>

    -------!!!把它整個刪除!!!-------


(3).刪除舊的登入燈箱還有漢堡jquery

    到body前的<script></script>
    刪除//漢堡  還有 //Login彈窗  的所有東西

    漢堡長這樣

        //漢堡
        $("div.hamburger_box").on("click", function(){
          $("span.hamburger_line").toggleClass("is-active");
          $("span.hamburger_cross").toggleClass("is-active");
          $("ul.main_menu_ul").toggleClass("is-active");
        });

    Login彈窗長這樣

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

    -------!!!把它們兩個整個刪除!!!-------

(4).打開 headerExample.html

    複製 第22行到第118行

    <!-- Log In開始 -->
    ...
    ...
    ...
    <!-- header結束 -->

    這整段是新的燈箱跟header
    把它貼到 背景那塊div下面

    所以你的HTML結構應該是

    <body>

      <背景div></背景div>

      <燈箱div><燈箱div>

      <header><header>

      <div>
        <大標div></大標div>
        <你的工作區域div></你的工作區域div>
      </div>

      <footer><footer>

      <script></script>
      
    <body>


(5).引入sweetAlert還有Jquery的cdn,還有引入兩隻js檔，共四行

    可以複製headerExample.html內的或下面
    
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./js/memLogin.js"></script>
    <script src="./js/layout/header.js"></script>

    如果原本就有引入jquery或sweetAlert的cdn，那就不用另外複製
    注意自己手打的js或jquery放上面那四行下面比較安全


(6).測試

    測試前注意以下
  (a).更新css
    測試前記得先watch然後隨便點開一隻sass檔儲存，刷新css樣式

  (b).打開瀏覽器先清除storage(之前可能有舊的留存)
    網頁F12 然後選擇Application 
    選擇local Storage 點開裡面應該還有一個http://localhost 按很像禁止那個按鈕(clear All)清乾淨
    另外也選擇Cookies 點開裡面也有http://localhost 一樣按很像禁止那個按鈕(clear All)清乾淨

  (c).注意現在php跟資料庫連接那隻都用connectAqua.php  (mac跟windows都可以使用)
    電腦本機端的資料庫名稱為 ed103g1 (跟線上那個相同)
    帳號密碼都為root
    PS.要修改密碼可以連到phpmyadmin=>使用者帳號=>點使用者名稱為root那個編輯權限=>上面有更改密碼

    測試項目
  (a).登入燈窗可正常開啟，帳號錯誤會顯示錯誤，帳號被停權會顯示被停權，帳號正確成功登入。
  (b).成功登入後頭像會改變(沒圖片就是預設圖片)，目前編號1~6會員都有照片，我放在image/memPic內
  (c).按下會員頭像，不會跳出登入燈箱，但會跳出小窗可以登出也可以去會員中心。
  (d).重新整理或連續其他頁面，仍然保持登入狀態。
  (e).按下登出按鈕，頭像改變，並且按下頭像，會變成跳出登入燈箱。
  (f).登出後重新整理或跳到其他頁面仍會保持在登出狀態。
  (g).前往ticket頁面選票加到購物車，購物車數量會更新，到其他頁面或是重新整理仍然不變。
  (h).前往cart頁面把票刪除，購物車數量會更新，到其他頁面或是重新整理仍然不變。