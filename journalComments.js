$.ajax({
    url:`singleRenderRES.php${location.search}`,
    type:'GET',
    dataType:'json',
    success(data){
        console.log(data);
        $('.single_content').append(`

        `);
    }

});
//./image/member/${data[i].img}<-大頭貼
$.ajax({
    url:`singleRenderRLM.php${location.search}`,
    type:'GET',
    dataType:'json',
    success(data){
        let items = data.length;
        for(let i=0;i<=items-1;i+=1){

            let item = data[i].word.split('');
            let content = '';

            for(let i=0;i<=item.length-1;i+=1){
                if(item[i].charCodeAt()==10){
                    item[i]='<br>';
                }
                content = item.join('');
            }
            $('#leavemessage').append(`
            <div id="${data[i].id}" class="single_L">
                <img src="http://fakeimg.pl/60x60" alt="">
                <p>${content}</p>
                <p class="time">${data[i].time}</p>
                <i class="fas fa-exclamation-triangle">檢舉</i>
            </div>              
            `);
        }

        $('.single_messaging').append(`
        <img src="http://fakeimg.pl/60x60" alt="">
        <form id="send" action="singleInsertRLM.php" method="POST">
            <textarea name="RES_MESSAGE_WORD" cols="30" rows="10"></textarea>
            <button class="btn_6 btn_js" name="RES_MEM" value="${location.search.split('=')[1]},1">送出
                <span></span>
            </button>
        </form>
        `);

        $('.single_report').append(`
        <div class="single_reportback">
            <i class="fas fa-times single_cancel"></i>
            <h2>檢舉餐廳留言</h2>
            <form id="report" action="singleInsertRP.php" method="POST">
                <!-- <label for="report">
                        選擇檢舉類型:
                        <select name="report">
                            <option value="1">惡意謾罵</option>
                            <option value="2">淫穢色情</option>
                            <option value="3">無關主題</option>
                            <option value="0">其他</option>
                        </select>
                    </label> -->
                <h4 style="font-weight: bold;">檢舉原因：</h4>
                <textarea name="RES_MES_REPORT_REASON" id=""></textarea>
                <button type="submit" name="test" value="">送出檢舉</button>
            </form>
            <div class="single_thank">
                <p>感謝你的檢舉</p>
            </div>
        </div>
        `);

        itemfunction(); 

    }
});




$('.single_reportback button').on('click',function(){

    if($('.single_reportback form textarea').val().length==0){
        $('.single_reportback').append(`
            <p class="reporterror" style="color:red">請輸入內容</p>
        `);
    }else{
        $('.single_reportback form').css({'display':'none'});
        $('.single_thank').css({'display':'inline-block'});
        $('.single_reportback .reporterror').remove();
        $('.single_reportback button').css({'display':'none'});

    }

});

});