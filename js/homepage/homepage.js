

// document.ready = function () {
  
  //Boat move
  TweenMax.to('.home_boat', 10, {
    xPercent: -800,
    yPercent: 900,
    repeat: -1,
    yoyo: false,
    ease: Power0.easeNone,
  });

  //Book
  var flipbook = $('#flipbook');
  flipbook.turn({
    width: window.innerWidth * 0.5,
    height: window.innerHeight * 0.7,
    autoCenter: true
  });

  flipbook.turn("page", 2);
  var win = $(this); //this = window
  var home_message = document.getElementsByClassName("home_message_box")[0];

  if (win.width() <= 974) {
    flipbook.css("left", "7%");
    flipbook.turn("size", window.innerWidth * 0.7, window.innerHeight * 0.6);
    home_message.style.margin = '50px auto 0 auto';
    home_message.style.width = '50%';
    $("#flipbook").turn("display", "single");
  }else {
    flipbook.turn("size", window.innerWidth * 0.5, window.innerHeight * 0.7);
    flipbook.css("left", "30%");
    // flipbook.css("trnasfoem","translateX(-50%)");
    home_message.style.margin = '';
    home_message.style.width = '';
    $("#flipbook").turn("display", "double");
  }

  //calendar
  $(".BoXiang_calendar").datepicker({
    //開始日期為今日
    startDate: " new date()",
    //特別標註今天
    todayHighlight: true,
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
  document.getElementById("home_jbtn").addEventListener("click", function () {
    swal("Submit successful", "", "success");
  });
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

// }

$(window).resize(function () {
  var win = $(this); //this = window
  var home_message = document.getElementsByClassName("home_message_box")[0];
  if (win.width() <= 974) {

    flipbook.css("left", "7%");
    flipbook.turn("size", flipbook.clientWidth, flipbook.clientHeight);
    home_message.style.margin = '50px auto 0 auto';
    home_message.style.width = '50%';
    // $("#flipbook").turn("display", "single");

  }
  else {
    flipbook.turn("size", window.innerWidth * 0.5, window.innerHeight * 0.68);
    flipbook.css("left", "25%");
    // flipbook.css("trnasfoem","translateX(-50%)");
    home_message.style.margin = '';
    home_message.style.width = '';
    $("#flipbook").turn("display", "double");
  }

});