
  $('#doPost').on('click',function(){
      $.ajax({
        url:'journalComment1.php',
        type:'POST',
        dataType:'json',
        data:{
          aquano:$('#openAquaNo').text(),
          word:$('#myInput').val(),
        },
        complete(e){
          let word = $('#myInput').val();
          if(e.responseText == 'OhOh'){
          }else{
            console.log(e);
            $('.jourCommentList ul').prepend(`
            <li>
              <div class="jourCommentPersonPic"><img src="./image/journal/journal_element/adopter.png"
                    alt=""></div>
              <div class="jourCommentOrder">
                <div class="jourCommentInfo">
                  <p class="jourCommentPersonName"></p>
                  <p class="jourCommentTime">2020-10-18 14:25</p>
                </div>
                <div class="jourCommentBox">
                  <h5 class="jourCommentWords">${word}</h5>
                  <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
                </div>
              </div>
            </li>
            `);
          }

        },
      });

  });

