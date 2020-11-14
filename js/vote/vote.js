function $id(id) {
  return document.getElementById(id);
}



  // 取投票的值
function getVoteName(){
  let voteSubmit =document.getElementsByClassName('voteSubmit');
  for(let i = 0 ; i < voteSubmit.length; i++){
    voteSubmit[i].addEventListener('click', function(){
      let voteNameForAquaNo = document.getElementsByName(`voteNameForAquaNo${i+1}`);
      for(let j =0; j < voteNameForAquaNo.length; j++){
        if(voteNameForAquaNo[j].checked){
          console.log(voteNameForAquaNo[j].value);
          break;
        }
      }
    })
  }
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

// 秀出要被提名的動畫
function showNominateAqua(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) { //success
      nominateAqua = JSON.parse(xhr.responseText);
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
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
          nominateResult = JSON.parse(xhr.responseText);
          // console.log(nominateResult);
          if(nominateResult.status == 'succeed'){
            swal("Great!", "You have successfully nominated this animal!", "success");
            nominateName.value ='';

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


function voteDoFirst(){
  // 取投票的值
  getVoteName();

  // 長條圖最大值加上屬性
  addClassToMaxBar();

  // 秀出要被提名的動畫
  showNominateAqua();
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
  });
});


// 長條圖動畫
$('.voteBar').each(function () {
  $(this).find('.voteBar-bar').animate({
    width: $(this).attr('data-percent')
  }, 2000);
});
