//--------點擊第一棟房子:dolphine館, 出現介紹圖文------------
$(function(){  
    // 開啟 Modal 彈跳視窗
    $("img.tour_house1_hover").on("click", function(){
      $("div.tour_overlay1").addClass("-on");
    }); 
    // 關閉 Modal
    $("button.tour_btn_modal_close1").on("click", function(){
      $("div.tour_overlay1").addClass("-opacity-zero");
      // 設定隔一秒後，移除相關 class
      setTimeout(function(){
        $("div.tour_overlay1").removeClass("-on -opacity-zero");
      }, 0);
    }); 
  });
  
  //---------第一棟房子:dolphin館,出現介紹圖文後, 按關閉收合----------
  $(function(){  
    // 關閉 Modal
    $("button.tour_btn_modal_close2").on("click", function(){
      $("div.tour_overlay1").addClass("-opacity-zero");
      // 設定隔一秒後，移除相關 class
      setTimeout(function(){
        $("div.tour_overlay1").removeClass("-on -opacity-zero");
      }, 0);
    }); 
  });
  
  //---------點擊第二棟房子:whale館, 出現介紹圖文----------------
  $(function(){  
    $("img.tour_house2_hover").on("click", function(){
      $("div.tour_overlay2").addClass("-on");
    });
    $("button.tour_btn_modal_close1").on("click", function(){
      $("div.tour_overlay2").addClass("-opacity-zero");
      setTimeout(function(){
        $("div.tour_overlay2").removeClass("-on -opacity-zero");
      }, 0);
    });  
  });
  
  //----------第二棟房子:whale館,出現介紹圖文後, 關閉收合------------
  $(function(){  
    // 關閉 Modal
    $("button.tour_btn_modal_close2").on("click", function(){
      $("div.tour_overlay2").addClass("-opacity-zero");
      // 設定隔一秒後，移除相關 class
      setTimeout(function(){
        $("div.tour_overlay2").removeClass("-on -opacity-zero");
      }, 0);
    }); 
  });
  
  //-----------點擊第三棟房子:whale館, 出現介紹圖文----------------
  $(function(){  
    $("img.tour_house3_hover").on("click", function(){
      $("div.tour_overlay3").addClass("-on");
    });
    $("button.tour_btn_modal_close1").on("click", function(){
      $("div.tour_overlay3").addClass("-opacity-zero");
      setTimeout(function(){
        $("div.tour_overlay3").removeClass("-on -opacity-zero");
      }, 0);
    });  
  });
  
  //----------第三棟房子:seal館,出現介紹圖文後, 關閉收合---------
  $(function(){  
    // 關閉 Modal
    $("button.tour_btn_modal_close2").on("click", function(){
      $("div.tour_overlay3").addClass("-opacity-zero");
      // 設定隔一秒後，移除相關 class
      setTimeout(function(){
        $("div.tour_overlay3").removeClass("-on -opacity-zero");
      }, 0);
    }); 
  });
  
  //-----------點擊第四棟房子:sea turtle館, 出現介紹圖文--------
  $(function(){  
    $("img.tour_house4_hover").on("click", function(){
      $("div.tour_overlay4").addClass("-on");
    });
    $("button.tour_btn_modal_close1").on("click", function(){
      $("div.tour_overlay4").addClass("-opacity-zero");
      setTimeout(function(){
        $("div.tour_overlay4").removeClass("-on -opacity-zero");
      }, 0);
    });  
  });
  
  //第-------四棟房子:sea turtle 館,出現介紹圖文後, 關閉收合---------
  $(function(){  
    // 關閉 Modal
    $("button.tour_btn_modal_close2").on("click", function(){
      $("div.tour_overlay4").addClass("-opacity-zero");
      // 設定隔一秒後，移除相關 class
      setTimeout(function(){
        $("div.tour_overlay4").removeClass("-on -opacity-zero");
      }, 0);
    }); 
  });
  
  //---------點擊地圖的圖文介紹按鈕,會往下移動---------
  $(document).ready(function() {
         $("#btn1").click(function() {
           $("html, body").animate({
             scrollTop: $("#no1").offset().top }, {duration: 500,easing: "swing"});
           return false;
         });
         $("#btn2").click(function() {
           $("html, body").animate({
             scrollTop: $("#no1").offset().top }, {duration: 500,easing: "swing"});
           return false;
         });
         $("#btn3").click(function() {
           $("html, body").animate({
             scrollTop: $("#no3").offset().top }, {duration: 500,easing: "swing"});
           return false;
         });
         $("#btn4").click(function() {
           $("html, body").animate({
             scrollTop: $("#no3").offset().top }, {duration: 500,easing: "swing"});
           return false;
         });
       });
  
  //------------當滑鼠移入房子, 出現hover效果-------------
  $('.tour_houseA').hover(function(){
    $(this).toggleClass('tour_house_show');
    $(this).next().toggleClass('tour_house_show');
  },function(){
  })
  
  //------------當滑鼠移出房子, 移除hover效果-------------
  $('.tour_houseB').hover(function(){
  },function(){
    $(this).toggleClass('tour_house_show');
    $(this).prev().toggleClass('tour_house_show');
  })
  
  //----當滑鼠移入dolphin紅色圈圈, 其底下房子出現hover效果------
  $('.tour_dolphin_wave').hover(function(){
    $('.tour_house1').toggleClass('tour_house_show');
    $('.tour_house1_hover').toggleClass('tour_house_show');
  },function(){
  })
  
  //-----當滑鼠移出dolphin紅色圈圈, 其底下房子移除hover效果----
  $('.tour_dolphin_wave').hover(function(){
  },function(){
    $('.tour_house1_hover').toggleClass('tour_house_show');
    $('.tour_house1').toggleClass('tour_house_show');
  })
  
  //-----當滑鼠移入whale紅色圈圈, 其底下房子出現hover效果-----
  $('.tour_whale_wave').hover(function(){
    $('.tour_house2').toggleClass('tour_house_show');
    $('.tour_house2_hover').toggleClass('tour_house_show');
  },function(){
  })
  
  //-----當滑鼠移出whale紅色圈圈, 其底下房子移除hover效果-----
  $('.tour_whale_wave').hover(function(){
  },function(){
    $('.tour_house2_hover').toggleClass('tour_house_show');
    $('.tour_house2').toggleClass('tour_house_show');
  })
  
  //-----當滑鼠移入seal紅色圈圈, 其底下房子出現hover效果-----
  $('.tour_seal_wave').hover(function(){
    $('.tour_house3').toggleClass('tour_house_show');
    $('.tour_house3_hover').toggleClass('tour_house_show');
  },function(){
  })
  
  //-----當滑鼠移出seal紅色圈圈, 其底下房子移除hover效果-----
  $('.tour_seal_wave').hover(function(){
  },function(){
    $('.tour_house3_hover').toggleClass('tour_house_show');
    $('.tour_house3').toggleClass('tour_house_show');
  })
  
  //-----當滑鼠移入sea turtle紅色圈圈, 其底下房子出現hover效果-----
  $('.tour_seaturtle_wave').hover(function(){
    $('.tour_house4').toggleClass('tour_house_show');
    $('.tour_house4_hover').toggleClass('tour_house_show');
  },function(){
  })
  
  //-----當滑鼠移出sea turtle紅色圈圈, 其底下房子移除hover效果-----
  $('.tour_seaturtle_wave').hover(function(){
  },function(){
    $('.tour_house4_hover').toggleClass('tour_house_show');
    $('.tour_house4').toggleClass('tour_house_show');
  })
  
  
  //-----點擊dolphin紅色圈圈, 出現介紹圖文-----
  $(function(){  
    $("img.tour_dolphin_wave").on("click", function(){
      $("div.tour_overlay1").addClass("-on");
    });
    $("button.btn_modal_close1").on("click", function(){
      $("div.tour_overlay1").addClass("-opacity-zero");
      setTimeout(function(){
        $("div.tour_overlay1").removeClass("-on -opacity-zero");
      }, 0);
    });  
  });
  
  //-----點擊whale紅色圈圈, 出現介紹圖文-----
  $(function(){  
    $("img.tour_whale_wave").on("click", function(){
      $("div.tour_overlay2").addClass("-on");
    });
    $("button.btn_modal_close1").on("click", function(){
      $("div.tour_overlay2").addClass("-opacity-zero");
      setTimeout(function(){
        $("div.tour_overlay2").removeClass("-on -opacity-zero");
      }, 0);
    });  
  });
  
  //-----點擊seal紅色圈圈, 出現介紹圖文-----
  $(function(){  
    $("img.tour_seal_wave").on("click", function(){
      $("div.tour_overlay3").addClass("-on");
    });
    $("button.btn_modal_close1").on("click", function(){
      $("div.tour_overlay3").addClass("-opacity-zero");
      setTimeout(function(){
        $("div.tour_overlay3").removeClass("-on -opacity-zero");
      }, 0);
    });  
  });
  
  //-----點擊sea turtle紅色圈圈, 出現介紹圖文-----
  $(function(){  
    $("img.tour_seaturtle_wave").on("click", function(){
      $("div.tour_overlay4").addClass("-on");
    });
    $("button.btn_modal_close1").on("click", function(){
      $("div.tour_overlay4").addClass("-opacity-zero");
      setTimeout(function(){
        $("div.tour_overlay4").removeClass("-on -opacity-zero");
      }, 0);
    });  
  });
  
  
  // ---------四大動物介紹: 按圖片出現介紹文, 按close 恢復原狀---------------
  $('.tour_slide').click(function(){
    $(this).children().addClass('tour_content_show');
    $(this).addClass('tour_slide_show');
    // $('.tour_content').toggleClass('tour_content_show');
  })
  
  $('.tour_row_button2').click(function(e){
    // $('.tour_content').toggleClass('tour_content_show');
    $(this).closest('.tour_content').removeClass('tour_content_show');
    $(this).closest('.tour_slide').removeClass('tour_slide_show');
    e.stopPropagation();
  })