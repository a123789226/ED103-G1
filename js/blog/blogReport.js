$(document).on('click', '#blogIconReportBtn', function(){//使用$(document).on()的原因是如果id為submit的按鈕是一開始沒有載入、透過ajax互動後才產生的DOM，那用$().click會抓不到，需以$(document).on()才行
  var name = $('#blogReportReason').val();
  $.ajax({
     url:'../../php/blogReport.php',
     method:'POST',
     data:{
        name:name
     },
     success:function(res){

     }
  })
})