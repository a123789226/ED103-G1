
  $('#doPost').on('click',function(){
    // if('尚未登入'){

    // }else{
      $.ajax({
        url:'journalCommentWord.php',
        type:'GET',
        dataType:'json',
        data:{
          member:1,
          journo:1,
          word:$('#myInput').val(),
        },
        complete(e){
          console.log(e);
          let word = $('#myInput').val();
          $('.jourCommentList ul').append(`
          <li>
            <div class="jourCommentPersonPic"><a href="#"><img src="./image/journal/journal_element/adopter.png"
                  alt=""></a></div>
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
        },
      });
    // }

  });

