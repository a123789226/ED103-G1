function $id(id) {
  return document.getElementById(id);
}

// 長條圖最大值加上屬性
function addClassToMaxBar(){
  let vote_bar_block = document.getElementsByClassName('vote_bar_block');
  for(let i = 0; i < vote_bar_block.length; i++){
    let voteBarNum= vote_bar_block[i].querySelectorAll('.voteBar-percent');
    let voteBarNumArr = [];
    for(let j = 0; j < voteBarNum.length; j++){
      voteBarNumArr[j] = voteBarNum[j].innerText;
    }
    for(let j = 0; j < voteBarNum.length; j++){
      if(voteBarNum[j].innerText == Math.max(...voteBarNumArr)){
        voteBarNum[j].classList.add('changeBG');
        voteBarNum[j].previousElementSibling.classList.add('changeBG');
      }
    }
  }
}

// 秀出要被提名的動物
function showNominateAqua(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) { //success
      let nominateAqua = JSON.parse(xhr.responseText);
      // console.log(nominateAqua);
      let nominateContent = '';
      for(let i = 0; i < nominateAqua.length; i++){
        nominateContent +=`<div class="nominate">
                            <h4>Creature:&nbsp;</h4><h4 class="nominate_aquaType">${nominateAqua[i].aquaType}</h4>
                            <div class="nominate_img">
                              <img src="./img/aqua/${nominateAqua[i].aquaPic}">
                              <a href="journal.html" class="journal">Journal</a>
                            </div>            
                            <p><span>Nominating deadline:&nbsp;</span><span class="nominate_deadline">${nominateAqua[i].nameEnd}</span></p>
                            <p><span>Current nominated number:&nbsp;</span><span class="nominateCount">${nominateAqua[i].nominateNum}</span></p>
                            <div class="nominateInputBox">
                              <h4>Create A Name</h4>
                              <input type="test" name="nominateName">
                              <button class="nominateSubmit">SUBMIT</button>
                            </div> 
                          </div>`;
      }                      
      $id('nominateCreatureBlock').innerHTML = nominateContent;
      

      //替提名按鈕建立事件聆聽
      nominateClick(nominateAqua);
    }
  }

  xhr.open("get", "voteShowNominate.php", true);
  xhr.send(null);
}

//替提名按鈕建立事件聆聽
function nominateClick(nominateAqua){
  let nominateSubmit = document.getElementsByClassName('nominateSubmit');
  for(let i = 0; i < nominateSubmit.length; i++){
    nominateSubmit[i].addEventListener('click', function(){
      let nominateName = this.previousElementSibling;
      if(nominateName.value ==''){ //輸入框為空
        swal("Oops!", "Please enter a name in the field!", "warning");
      }else{
        // alert(nominateAqua[i].aquaNo);
        // alert(nominateName);
        let nominateCount = this.parentNode.previousElementSibling.querySelector('span.nominateCount');
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
          let nominateResult = JSON.parse(xhr.responseText);
          // console.log(nominateResult);
          if(nominateResult.status == 'succeed'){ //新增提名成功
            swal("Great!", "You have successfully nominated this animal!", "success");
            nominateName.value ='';
            //提名人數也要做修改
            nominateCount.innerText = parseInt(nominateCount.innerText) + 1;
          }else if(nominateResult.status == 'repeated'){
            swal(`The name ${nominateResult.name} has already been nominated!`, "Please enter another name!", "warning");
            nominateName.value ='';

          }else if(nominateResult.status == 'hasNamed'){
            swal("Sorry!", "You have already nominated this animal!", "warning");
            nominateName.value ='';

          }else{ //非會員  
            let overlay = document.getElementsByClassName('overlay');
            overlay[0].classList.add('-on');
          }
            
        }
      
        xhr.open("Post", "voteInsertName.php", true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        let data_info = `aquaNo=${nominateAqua[i].aquaNo}&nomName=${nominateName.value}`;
        xhr.send(data_info);
      }
    })
  }

}

// 秀出在投票狀態的動物
function showVotingAqua(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) { //success
      let voteAqua = JSON.parse(xhr.responseText);
      // console.log(voteAqua);
      
      let voteContent = '';
      for(let i = 0; i < voteAqua.length; i++){
        if((i+1) % 6 == 1){  //產生區塊的頭還有第1個名字
          voteContent += `<div class="vote_nav">
                            <h4>Voting deadline:&nbsp;</h4><h4>${voteAqua[i].voteEnd}</h4>
                            <div class="vote_img">
                            <img src="./img/aqua/${voteAqua[i].aquaPic}">
                              <a href="journal.html" class="journal">Journal</a>
                            </div>  
                            <p><span>Creature:&nbsp;</span><span>${voteAqua[i].aquaType}</span></p>           
                            <div class="vote_Box">
                              <h4>Select Your Favorite Name</h4>
                              <input type="radio" name="voteNameForAquaNo${voteAqua[i].aquaNo}" id="aquaNo${voteAqua[i].aquaNo}_Name1" value="${voteAqua[i].nomName}">
                              <label for="aquaNo${voteAqua[i].aquaNo}_Name1">${voteAqua[i].nomName}</label>`;
        }else if((i+1) % 6 == 0){ //產生第6個名字還有區塊的結尾
          voteContent += `<input type="radio" name="voteNameForAquaNo${voteAqua[i].aquaNo}" id="aquaNo${voteAqua[i].aquaNo}_Name6" value="${voteAqua[i].nomName}">
                          <label for="aquaNo${voteAqua[i].aquaNo}_Name6">${voteAqua[i].nomName}</label>
                          <button class="voteSubmit" data-aquano="${voteAqua[i].aquaNo}">SUBMIT</button>
                        </div> 
                      </div>`;
        }else{  //產生第2~5個名字
          voteContent += `<input type="radio" name="voteNameForAquaNo${voteAqua[i].aquaNo}" id="aquaNo${voteAqua[i].aquaNo}_Name${i+1}" value="${voteAqua[i].nomName}">
                          <label for="aquaNo${voteAqua[i].aquaNo}_Name${i+1}">${voteAqua[i].nomName}</label>`;
        }
      }
      $id('voteCreatureBlock').innerHTML = voteContent;
      
      //替投票按鈕建立事件聆聽
      voteClick();
    }
  }
  xhr.open("get", "voteShowVote.php", true);
  xhr.send(null);
}


//替投票按鈕建立事件聆聽
function voteClick(){
  let voteSubmit = document.getElementsByClassName('voteSubmit');
  for(let i = 0; i < voteSubmit.length; i++){
    voteSubmit[i].addEventListener('click', function(){
      // 透過按鈕的data取aquaNo
      let aquaNo = this.dataset.aquano;
      let voteNameForAquaNo = document.getElementsByName(`voteNameForAquaNo${aquaNo}`);
      for(let j =0; j < 6; j++){
        if(voteNameForAquaNo[j].checked){ //有任一radio被選中觸發
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
function UpdateVotedNum(aquaNo, nomName){
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // console.log(xhr.responseText);
    let voteResult = JSON.parse(xhr.responseText);
    console.log(voteResult);
    if(voteResult.length == 6){ //投票成功，有回傳nomName回來
      // swal("Great!", "You have successfully voted!", "success");

      //先計算六個名字的總票數
      let totalCount = 0;
      let countArr = [];
      for(let i = 0; i < voteResult.length; i++){
        totalCount += parseInt(voteResult[i].votedNum);
        countArr[i] = parseInt(voteResult[i].votedNum);
      }

      // 票數的最大值
      let maxCount = Math.max(...countArr);

      // 產生HTML架構，要讓最高票的data-percent為100%
      let voteBarHTML = '';
      for(let i = 0; i < voteResult.length; i++){
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

    }else if(voteResult.status == 'voted'){ //投過票惹
      swal('Sorry!', "You can only vote for one animal once a day!", "warning");

    }else{ //非會員  
      let overlay = document.getElementsByClassName('overlay');
      overlay[0].classList.add('-on');
    }
  }

  xhr.open("Post", "voteUpdateVotedNum.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_info = `aquaNo=${aquaNo}&nomName=${nomName}`;
  xhr.send(data_info);
};



// 秀出已完成投票的動物
function showFinishedAqua(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) { //success
      let finishedAqua = JSON.parse(xhr.responseText);
      // console.log(finishedAqua);

      // 先渲染基礎資料，裡面其他要計算最大值等資訊等渲染完再抓取一次
      let finishedContent = '';
      for(let i = 0; i < finishedAqua.length; i++){
        if((i+1) % 6 == 1){ //每隻動物第一筆資料
          finishedContent += `<div class="voteFinished">             
                                <div class="voteFinishedNameBox">
                                  <h4>Name:&nbsp;</h4>
                                  <h4 class="FinishedName"></h4>
                                </div>                              
                                <div class="voteFinishedInfo">
                                  <div class="voteFinishedImg">
                                    <img src="./img/aqua/${finishedAqua[i].aquaPic}">
                                    <a href="journal.html" class="journal">Journal</a>
                                  </div>
                                  <p><span>Creature:&nbsp;</span><span>${finishedAqua[i].aquaType}</span></p>
                                  <p><span>Voting deadline:&nbsp;</span><span>${finishedAqua[i].voteEnd}</span></p>
                                </div>
                                <div class="vote_bar_block">
                                  <div class="voteBar">
                                    <div class="voteBar-title"><span>${finishedAqua[i].nomName}</span></div>
                                    <div class="voteBar-bar"></div>
                                    <div class="voteBar-percent">${finishedAqua[i].votedNum}</div>
                                  </div>`;

        }else if((i+1) % 6 == 0){ //每隻動物第六筆資料
          finishedContent += `<div class="voteBar">
                                <div class="voteBar-title"><span>${finishedAqua[i].nomName}</span></div>
                                <div class="voteBar-bar"></div>
                                <div class="voteBar-percent">${finishedAqua[i].votedNum}</div>
                              </div>
                            </div> 
                          </div>`;

        }else{ //每隻動物第二到五比資料
          finishedContent += `<div class="voteBar">
                                <div class="voteBar-title"><span>${finishedAqua[i].nomName}</span></div>
                                <div class="voteBar-bar"></div>
                                <div class="voteBar-percent">${finishedAqua[i].votedNum}</div>
                              </div>`;
        }
      }

      $id('voteFinishedBlock').innerHTML = finishedContent;

      // 針對每一隻動物去找最大票數的姓名，並給長條圖%數
      let voteFinished = document.getElementsByClassName('voteFinished');
      for(let i = 0; i < voteFinished.length; i++){
        let voteNum = voteFinished[i].querySelectorAll('.voteBar-percent');
        let voteNumArr = [];
        for(let j = 0; j < voteNum.length; j++){
          voteNumArr[j] = voteNum[j].innerText;
        }
        let maxCount = Math.max(...voteNumArr);
        // console.log(maxCount);

        let aquaName;
        // 給長條圖%數
        let voteBar = voteFinished[i].querySelectorAll('.voteBar');
        for(let j = 0; j < voteBar.length; j++){
          let thisNum = voteBar[j].querySelector('.voteBar-percent');
          let dataDecimal = (parseInt(thisNum.innerText) / maxCount);
          // 要轉成百分比他才會正常
          let dataPercent = `${Math.round(dataDecimal * 100)}%`;
          voteBar[j].dataset.percent = dataPercent;

          // 找最高票數的名字是誰
          if(parseInt(thisNum.innerText) == maxCount){
            aquaName = thisNum.previousElementSibling.previousElementSibling.children[0].innerText;
          }
        }

        // 把名字塞到標題
        voteFinished[i].querySelector('.FinishedName').innerText = aquaName;
      }

      // 執行長條圖兩個動畫
      addClassToMaxBar();
      doBarAnimate();

    }
  }
  xhr.open("get", "voteShowFinished.php", true);
  xhr.send(null);
};





function voteDoFirst(){
  // 秀出要被提名的動物
  showNominateAqua();

  // 秀出在投票狀態的動物
  showVotingAqua();

  // 秀出已完成投票的動物
  showFinishedAqua();
}

window.addEventListener('load', voteDoFirst);



// ----------jqury--------------

// 頁籤切換
$(function(){
  $("a.vote").on("click", function(e){
    e.preventDefault();

    /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
    $(this).closest("ul").find("a.vote").removeClass("-on");
    $(this).addClass("-on");

    /* 找到對應的頁籤內容，加上 -on 來顯示 */
    $("div.vote").removeClass("-on");
    $("div.vote." + $(this).attr("data-target")).addClass("-on");
    
    // 執行長條圖兩個動畫
    addClassToMaxBar();
    doBarAnimate();

  });
});


// 長條圖動畫
// $('.voteBar').each(function(){
//   $(this).find('.voteBar-bar').animate({
//     width: $(this).attr('data-percent')
//   }, 2000);
// });

function doBarAnimate(){

  $('.voteBar').each(function(){
    // 每次要先讓寬度變0才會都有動態的效果
    $(this).find('.voteBar-bar').width(0);

    // 長條圖寬度變成對應%數的寬度
    $(this).find('.voteBar-bar').animate({
      width: $(this).attr('data-percent')
    }, 2000);
  });
}

// 關閉投完票的長條圖彈窗
$(function(){
  // 關閉
  $(".voteBarClose2").on("click", function(){
    $("div.voteOverlay").removeClass("-on");
  });
});
