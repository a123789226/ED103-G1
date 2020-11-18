let home_blog_img1 = document.getElementById('home_blog_img1');
let home_blog_img2 = document.getElementById('home_blog_img2');
let home_blog_img3 = document.getElementById('home_blog_img3');
let home_blog_title1 = document.getElementById('home_blog_title1');
let home_blog_title2 = document.getElementById('home_blog_title2');
let home_blog_title3 = document.getElementById('home_blog_title3');
let home_blog_author1 = document.getElementById('home_blog_author1');
let home_blog_author2 = document.getElementById('home_blog_author2');
let home_blog_author3 = document.getElementById('home_blog_author3');
let home_blog_time1 = document.getElementById('home_blog_time1');
let home_blog_time2 = document.getElementById('home_blog_time2');
let home_blog_time3 = document.getElementById('home_blog_time3');
let home_blog_content1 = document.getElementById('home_blog_content1');
let home_blog_content2 = document.getElementById('home_blog_content2');
let home_blog_content3 = document.getElementById('home_blog_content3');
let home_blog_big1 = document.getElementById('home_blog_big1');
let home_blog_big2 = document.getElementById('home_blog_big2');
let home_blog_big3 = document.getElementById('home_blog_big3');







let now = new Date();
let time = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
console.log(time);

let vue_remaining = new Vue({
  el: '#vue_remaining',
  data: {
    date: time,
    remain_1: 0,
    remain_2: 0,
    remain_3: 0,
    remain_4: 0,
  },
  mounted() {
    $("#startDate").datepicker({
      //開始日期為今日
      startDate: " new date()",
      format: "yyyy-mm-dd",
      //特別標註今天
      todayHighlight: true,
    }).on(
      "changeDate", (e) => { this.date = e.format()}
    );

    var params = new URLSearchParams();
    params.append('nightDate', this.$data.date);

    // let bbb = 0;
    axios.post('aqua_rem.php', params)
      .then(function (res) {
        console.log(res.data.area1Capacity);
        vue_remaining.remain_1 = res.data.area1Capacity - res.data.area1Order;
        vue_remaining.remain_2 = res.data.area2Capacity - res.data.area2Order;
        vue_remaining.remain_3 = res.data.area3Capacity - res.data.area3Order;
        vue_remaining.remain_4 = res.data.area4Capacity - res.data.area4Order;
      })
      .catch(function (err) {
        console.log(err);
      });

      
  },
  
  watch: {
    date(newValue){
    var params = new URLSearchParams();
    params.append('nightDate', newValue);

    // let bbb = 0;
    axios.post('aqua_rem.php', params)
      .then(function (res) {
        console.log(vue_remaining.remain_1);
        vue_remaining.remain_1 = res.data.area1Capacity - res.data.area1Order;
        vue_remaining.remain_2 = res.data.area2Capacity - res.data.area2Order;
        vue_remaining.remain_3 = res.data.area3Capacity - res.data.area3Order;
        vue_remaining.remain_4 = res.data.area4Capacity - res.data.area4Order;
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  }




})

















  //Boat move
  TweenMax.to('.home_boat', 10, {
    xPercent: -800,
    yPercent: 900,
    repeat: -1,
    yoyo: false,
    ease: Power0.easeNone,
  });




  //Vote Button
  $(".home_vote_btn").click(function () {
    activeButton = $(this).data('no');
    $(".home_vote_btn").css("background-color", "#ffffff");
    $(this).css("background-color", "#FBE108");
    console.log(this);
  });

  //Owl Carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 10,
    // autoWidth: true,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
    }
  });

  $('.arrow_right').click(function () {
    owl.trigger('next.owl.carousel');
  })

  $('.arrow_left').click(function () {
    owl.trigger('prev.owl.carousel');
  })

  //Alert style
  // document.getElementById("home_jbtn").addEventListener("click", function () {
  //   swal("Submit successful", "", "success");
  // });

  //Parallax
  parallaxInstance = new Parallax(document.getElementById("move_move"));


  //role Carousel
  let divWidth = $('#role_pick').width();
  let imgCount = $('#content li').length;


  $('#content').width(divWidth * imgCount);       //ul的寬度
  $('#content li').width(divWidth);                //li的寬度

  var imgContainer = $id("content");
  var imgs = imgContainer.querySelectorAll(".role_content");
  $(imgs[0]).css("display", "block");
  $(imgs[1]).css("display", "none");
  $(imgs[2]).css("display", "none");


  function $id(id) {
    return document.getElementById(id);
  }

  function move() {
    var imgContainer = document.querySelector(".content");
    var imgs = imgContainer.getElementsByTagName("li");
    var first = imgs[0];
    imgContainer.appendChild(first);
  }
  //==========window.onload
  window.onload = function () {


    //==========toLeft.onClick
    $id("left").onclick = function () {
      var imgContainer = $id("content");
      var imgs = imgContainer.querySelectorAll(".role_content");
      var last = imgs[imgs.length - 1];
      var first = imgs[0];
      imgContainer.insertBefore(last, first);
      $(imgs[0]).css("display", "none");
      $(imgs[1]).css("display", "none");
      $(imgs[2]).css("display", "block");
      role_pick2 = $("#content").find("li img").first().attr("id");

      $.ajax({
        url: 'home_blog.php',
        type: 'get',
        dataType: 'json',
        success: function (data) {
          console.log(data);
          home_blog_img1.src = data[0].blogPic;
          home_blog_img2.src = data[1].blogPic;
          home_blog_img3.src = data[2].blogPic;
          home_blog_big1.src = data[0].memPic;
          home_blog_big2.src = data[1].memPic;
          home_blog_big3.src = data[2].memPic;
          home_blog_title1.innerText = data[0].blogTitle;
          home_blog_title2.innerText = data[1].blogTitle;
          home_blog_title3.innerText = data[2].blogTitle;
          home_blog_author1.innerText = data[0].memName;
          home_blog_author2.innerText = data[1].memName;
          home_blog_author3.innerText = data[2].memName;
          home_blog_time1.innerText = data[0].blogTime;
          home_blog_time2.innerText = data[1].blogTime;
          home_blog_time3.innerText = data[2].blogTime;
          home_blog_content1.innerText = data[0].blogContent1;
          home_blog_content2.innerText = data[1].blogContent1;
          home_blog_content3.innerText = data[2].blogContent1;
        },
        error: function (data) {
          console.log(JSON.stringify(data));
        },
      })
    }
    //==========toRight.onclick
    $id("right").onclick = function () {
      var imgContainer = $id("content");
      var imgs = imgContainer.querySelectorAll(".role_content");
      var first = imgs[0];
      imgContainer.appendChild(first);
      $(imgs[0]).css("display", "none");
      $(imgs[1]).css("display", "block");
      $(imgs[2]).css("display", "none");
      role_pick2 = $("#content").find("li img").first().attr("id");
      console.log(role_pick2);


      $.ajax({
        url: 'home_blog.php',
        type: 'get',
        dataType: 'json',
        success: function (data) {
          console.log(data);
          home_blog_img1.src = data[0].blogPic;
          home_blog_img2.src = data[1].blogPic;
          home_blog_img3.src = data[2].blogPic;
          home_blog_big1.src = data[0].memPic;
          home_blog_big2.src = data[1].memPic;
          home_blog_big3.src = data[2].memPic;
          home_blog_title1.innerText = data[0].blogTitle;
          home_blog_title2.innerText = data[1].blogTitle;
          home_blog_title3.innerText = data[2].blogTitle;
          home_blog_author1.innerText = data[0].memName;
          home_blog_author2.innerText = data[1].memName;
          home_blog_author3.innerText = data[2].memName;
          home_blog_time1.innerText = data[0].blogTime;
          home_blog_time2.innerText = data[1].blogTime;
          home_blog_time3.innerText = data[2].blogTime;
          home_blog_content1.innerText = data[0].blogContent1;
          home_blog_content2.innerText = data[1].blogContent1;
          home_blog_content3.innerText = data[2].blogContent1;
        },
        error: function (data) {
          console.log(JSON.stringify(data));
        },
      })
    }
    // ................................

    showVotingAqua();
  }    

  //role down
  var ticket_move = new TimelineMax();
  ticket_move.add(
    TweenMax.to(".role_content", 2, {
      x: 220,
      ease: Power0.easeNone
    })
  );
  const controller = new ScrollMagic.Controller();
  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger_ticket",

  })
    .setTween(ticket_move)
    // .addIndicators()
    .addTo(controller);


  var journal_move = new TimelineMax();
  journal_move.add(
    TweenMax.to(".role_content", 2, {
      x: 20,
      ease: Power0.easeNone
    })
  );

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger_journal",
  })
    .setTween(journal_move)
    // .addIndicators()
    .addTo(controller);

  var adopt_move = new TimelineMax();
  adopt_move.add(
    TweenMax.to(".role_content", 2, {
      x: 220,
      ease: Power0.easeNone
    })
  );

  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger_adopt",
  })
    .setTween(adopt_move)
    // .addIndicators()
    .addTo(controller);

  var vote_move = new TimelineMax();
  vote_move.add(
    TweenMax.to(".role_content", 2, {
      x: 50,
      ease: Power0.easeNone
    })
  );

  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#trigger_vote",
  })
    .setTween(vote_move)
    // .addIndicators()
    .addTo(controller);

  var blog_move = new TimelineMax();
  blog_move.add(
    TweenMax.to(".role_content", 2, {
      x: 150,
      ease: Power0.easeNone
    })
  );

  const scene5 = new ScrollMagic.Scene({
    triggerElement: "#trigger_blog",
  })
    .setTween(blog_move)
    // .addIndicators()
    .addTo(controller);

  var game_move = new TimelineMax();
  game_move.add(
    TweenMax.to(".role_content", 2, {
      x: 30,
      ease: Power0.easeNone
    })
  );

  const scene6 = new ScrollMagic.Scene({
    triggerElement: "#trigger_game",
  })
    .setTween(game_move)
    // .addIndicators()
    .addTo(controller);







//Book
var flipbook = $('#flipbook');
flipbook.turn({
  width: window.innerWidth * 0.5,
  height: window.innerHeight * 0.7,
  autoCenter: true
});

flipbook.turn("page", 2);
var win = $(this); //this = window
// var home_message = document.getElementsByClassName("home_message_box")[0];

if (win.width() <= 576) {
  flipbook.css("left", "7%");
  flipbook.turn("size", window.innerWidth * 0.8, window.innerHeight * 0.5);

} else if (win.width() <= 974){
  flipbook.css("left", "15%");
  flipbook.turn("size", window.innerWidth * 0.7, window.innerHeight * 0.75);
}else{
  flipbook.turn("size", window.innerWidth * 0.5, window.innerHeight * 0.75);
  flipbook.css("left", "45%");
  // flipbook.css("trnasfoem","translateX(-50%)");
  // $("#flipbook").turn("display", "double");。。
}



$(window).resize(function () {
  let win = $(this); //this = window
  if (win.width() <= 576) {
    flipbook.css("left", "7%");
    flipbook.turn("size", window.innerWidth * 0.8, window.innerHeight * 0.5);

  } else if (win.width() <= 974) {

    flipbook.css("left", "15%");
    flipbook.turn("size", window.innerWidth * 0.7, window.innerHeight * 0.75);
  } else {
    flipbook.turn("size", window.innerWidth * 0.5, window.innerHeight * 0.7);
    flipbook.css("left", "45%");
    // flipbook.css("trnasfoem","translateX(-50%)");
    $("#flipbook").turn("display", "double");
  }

});




// let vue_journal = new Vue({
//   el: '#vue_journal',
//   data: {
//     no: null,
//     content: [],

//   },
//   mounted() {


//     // var params = new URLSearchParams();
//     // params.append('nightDate', this.$data.date);

//     // let bbb = 0;
//     axios.post('home_journal.php')
//       .then(function (res) {
//         vue_journal.no = res.data[0].aquaNo;
//         for(let i =0; i<res.data.length ; i++){
//           vue_journal.content[i] = res.data[i];
//           console.log(typeof(res.data[0].aquaNo));
//         }
//       })
//       .catch(function (err) {
//         console.log(err);
//       });


//   },
// document.getElementsByClassName('jourPage6')[0];


// })

let home_adopt_no = document.getElementById('home_adopt_no');
let home_adopt_name = document.getElementById('home_adopt_name');
let home_adopt_loc = document.getElementById('home_adopt_loc');
let home_adopt_date = document.getElementById('home_adopt_date');


$.ajax({
  url: 'home_journal.php',
  type: 'get',
  dataType: 'json',
  success: function (data) {
    home_adopt_no.innerText = data[0].aquaNo;
    home_adopt_name.innerText = data[0].aquaName;
    home_adopt_loc.innerText = data[0].rescueLoc;
    home_adopt_date.innerText = data[0].arriveDate;
    console.log(data);
    for(let i=0; i<data.length; i++){
      $(`.jourPage${(i + 1)} .jourPageContent > h4`).text(data[i].jourDate);
      $(`.jourPage${(i + 1)} .jourPageText > h4`).text(`Story Update${i+1}`);
      $(`.jourPage${(i+1)} .jourPageText > p`).text(data[i].jourContent);
    }

  },
  error: function (data) {
    console.log(JSON.stringify(data));
  },
})









// $.ajax({
//   url: 'home_blog.php',
//   type: 'get',
//   dataType: 'json',
//   success: function (data) {
//     console.log(data);
//     home_blog_img1.src = data[0].blogPic;
//     home_blog_img2.src = data[1].blogPic;
//     home_blog_img3.src = data[2].blogPic;
//     home_blog_big1.src = data[0].memPic;
//     home_blog_big2.src = data[1].memPic;
//     home_blog_big3.src = data[2].memPic;
//     home_blog_title1.innerText = data[0].blogTitle;
//     home_blog_title2.innerText = data[1].blogTitle;
//     home_blog_title3.innerText = data[2].blogTitle;
//     home_blog_author1.innerText = data[0].memName;
//     home_blog_author2.innerText = data[1].memName;
//     home_blog_author3.innerText = data[2].memName;
//     home_blog_time1.innerText = data[0].blogTime;
//     home_blog_time2.innerText = data[1].blogTime;
//     home_blog_time3.innerText = data[2].blogTime;
//     home_blog_content1.innerText = data[0].blogContent1;
//     home_blog_content2.innerText = data[1].blogContent1;
//     home_blog_content3.innerText = data[2].blogContent1;
//   },
//   error: function (data) {
//     console.log(JSON.stringify(data));
//   },
// })

let right_animal = document.getElementsByClassName('adopt_right_animal01')[0];
let animal01 = document.getElementsByClassName('adopt_animal01')[0];
let animal02 = document.getElementsByClassName('adopt_animal02')[0];
let animal03 = document.getElementsByClassName('adopt_animal03')[0];

animal01.addEventListener('click', function () {
  right_animal.src = animal01.src;
});

animal02.addEventListener('click',function(){
  right_animal.src = animal02.src;
});

animal03.addEventListener('click', function () {
  right_animal.src = animal03.src;
});


//Vote


// 長條圖最大值加上屬性
function addClassToMaxBar() {
  let vote_bar_block = document.getElementsByClassName('vote_bar_block');
  for (let i = 0; i < vote_bar_block.length; i++) {
    let voteBarNum = vote_bar_block[i].querySelectorAll('.voteBar-percent');
    let voteBarNumArr = [];
    for (let j = 0; j < voteBarNum.length; j++) {
      voteBarNumArr[j] = voteBarNum[j].innerText;
    }
    for (let j = 0; j < voteBarNum.length; j++) {
      if (voteBarNum[j].innerText == Math.max(...voteBarNumArr)) {
        voteBarNum[j].classList.add('changeBG');
        voteBarNum[j].previousElementSibling.classList.add('changeBG');
      }
    }
  }
}


function showVotingAqua() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) { //success
      let voteAqua = JSON.parse(xhr.responseText);
      // console.log(voteAqua);

      let voteContent = '';
      for (let i = 0; i < 6; i++) {
        if ((i + 1) % 6 == 1) {  //產生區塊的頭還有第1個名字
          voteContent += `
                          <input type="radio" name="voteNameForAquaNo${voteAqua[i].aquaNo}" id="aquaNo${voteAqua[i].aquaNo}_Name1" value="${voteAqua[i].nomName}">
                          <label for="aquaNo${voteAqua[i].aquaNo}_Name1">${voteAqua[i].nomName}</label>`;
        } else if ((i + 1) % 6 == 0) { //產生第6個名字還有區塊的結尾
          voteContent += `<input type="radio" name="voteNameForAquaNo${voteAqua[i].aquaNo}" id="aquaNo${voteAqua[i].aquaNo}_Name6" value="${voteAqua[i].nomName}">
                          <label for="aquaNo${voteAqua[i].aquaNo}_Name6">${voteAqua[i].nomName}</label>
                          <button class="voteSubmit" data-aquano="${voteAqua[i].aquaNo}">SUBMIT</button> 
                      `;
        } else {  //產生第2~5個名字
          voteContent += `<input type="radio" name="voteNameForAquaNo${voteAqua[i].aquaNo}" id="aquaNo${voteAqua[i].aquaNo}_Name${i + 1}" value="${voteAqua[i].nomName}">
                          <label for="aquaNo${voteAqua[i].aquaNo}_Name${i + 1}">${voteAqua[i].nomName}</label>`;
        }
      }
      $id('page5_vote_middle').innerHTML = voteContent;

      //替投票按鈕建立事件聆聽
      voteClick();

      //ajax
      $.ajax({
        url: 'homeAquaShow.php',
        type: 'post',
        data: {
          aquaNo: voteAqua[0].aquaNo,
        },
        dataType: 'json',
        success: function (data) {
          console.log(data);
          $id('page5_big').src = `./img/aqua/${data.aquaPic}`;
          $id('page5_para').innerText = data.jourStory;
        }

      })
    }
  }
  xhr.open("get", "voteShowVote.php", true);
  xhr.send(null);
}








//替投票按鈕建立事件聆聽
function voteClick() {
  let voteSubmit = document.getElementsByClassName('voteSubmit');
  for (let i = 0; i < voteSubmit.length; i++) {
    voteSubmit[i].addEventListener('click', function () {
      // 透過按鈕的data取aquaNo
      let aquaNo = this.dataset.aquano;
      let voteNameForAquaNo = document.getElementsByName(`voteNameForAquaNo${aquaNo}`);
      for (let j = 0; j < 6; j++) {
        if (voteNameForAquaNo[j].checked) { //有任一radio被選中觸發
          // console.log(voteNameForAquaNo[j].value);
          let nomName = voteNameForAquaNo[j].value;
          // 執行增加該姓名的票數
          UpdateVotedNum(aquaNo, nomName);
        }
      }
    })
  }
}

// 執行增加該姓名的票數
function UpdateVotedNum(aquaNo, nomName) {


  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // console.log(xhr.responseText);
    let voteResult = JSON.parse(xhr.responseText);
    console.log(voteResult);
    if (voteResult.length == 6) { //投票成功，有回傳nomName回來
      // swal("Great!", "You have successfully voted!", "success");

      //先計算六個名字的總票數
      let totalCount = 0;
      let countArr = [];
      for (let i = 0; i < voteResult.length; i++) {
        totalCount += parseInt(voteResult[i].votedNum);
        countArr[i] = parseInt(voteResult[i].votedNum);
      }

      // 票數的最大值
      let maxCount = Math.max(...countArr);

      // 產生HTML架構，要讓最高票的data-percent為100%
      let voteBarHTML = '';
      for (let i = 0; i < voteResult.length; i++) {
        let dataDecimal = (parseInt(voteResult[i].votedNum) / maxCount);
        // 要轉成百分比他才會正常
        let dataPercent = `${Math.round(dataDecimal * 100)}%`;
        voteBarHTML += `<div class="voteBar" data-percent="${dataPercent}">
                          <div class="voteBar-title"><span>${voteResult[i].nomName}</span></div>
                          <div class="voteBar-bar"></div>
                          <div class="voteBar-percent">${voteResult[i].votedNum}</div>
                        </div>`;
      }
      $id('voteBarBlock').innerHTML = voteBarHTML;

      // 燈箱打開
      $id('voteOverlay').classList.add('-on');
      // 執行長條圖動畫
      doBarAnimate();
      addClassToMaxBar();

    } else if (voteResult.status == 'voted') { //投過票惹
      swal('Sorry!', "You can only vote for one animal once a day!", "warning");

    } else { //非會員  
      let overlay = document.getElementsByClassName('overlay');
      overlay[0].classList.add('-on');
    }
  }

  xhr.open("Post", "voteUpdateVotedNum.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_info = `aquaNo=${aquaNo}&nomName=${nomName}`;
  xhr.send(data_info);
};

function doBarAnimate() {

  $('.voteBar').each(function () {
    $(this).find('.voteBar-bar').animate({
      width: $(this).attr('data-percent')
    }, 2000);
  });
}





// 關閉投完票的長條圖彈窗
$(function () {
  // 關閉
  $(".voteBarClose2").on("click", function () {
    $("div.voteOverlay").removeClass("-on");
  });
});


$(function () {
  // 關閉
  $(".complete1").on("click", function () {
    $("div.adoptOverlay").addClass("-on");
    $("#adopt_complete").attr('src','./image/index/object/complete1.png');
  });
  $(".complete2").on("click", function () {
    $("div.adoptOverlay").addClass("-on");
    $("#adopt_complete").attr('src', './image/index/object/complete2.png');
  });
  $(".complete3").on("click", function () {
    $("div.adoptOverlay").addClass("-on");
    $("#adopt_complete").attr('src', './image/index/object/complete3.png');
  });
});



// 關閉投完票的長條圖彈窗
$(function () {
  // 關閉
  $(".adoptClose2").on("click", function () {
    $("div.adoptOverlay").removeClass("-on");
  });
});



