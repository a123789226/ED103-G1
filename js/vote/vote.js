




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


function voteDoFirst(){
  // 取投票的值
  getVoteName();

  // 長條圖最大值加上屬性
  addClassToMaxBar();
}

window.addEventListener('load', voteDoFirst);