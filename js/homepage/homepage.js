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
  document.getElementById("home_vbtn").addEventListener("click", function () {
    swal("Vote successful", "", "success");
  });

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
    }
    // ................................
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
    .addIndicators()
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
    .addIndicators()
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
    .addIndicators()
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
    .addIndicators()
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
    .addIndicators()
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
    .addIndicators()
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
    home_adopt_name.innerText = data[0].aquaNo;
    home_adopt_loc.innerText = data[0].aquaNo;
    home_adopt_date.innerText = data[0].aquaNo;
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