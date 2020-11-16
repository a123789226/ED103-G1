
  $('#doPost').on('click',function(){
      $.ajax({
        url:'journalComment1.php',
        type:'GET',
        dataType:'json',
        data:{
          aquano:$('#openAquaNo').text(),
          word:$('#myInput').val(),
        },
        complete(e){
          console.log(typeof(e.responseText));
          let word = $('#myInput').val();
          if(e.responseText == 'OhOh'){
            alert('123');
          }else{
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
                  <!-- <a href="#" class="jourCommentLike"><img src="./image/journal/journal_element/like.png" alt=""></a> -->
                  <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
                </div>
              </div>
            </li>
            `);
          }

        },
      });

  });

