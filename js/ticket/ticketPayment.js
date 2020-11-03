var storage = localStorage;

function doFirst(){
  //所有欄位都只能輸入數字
  let input = document.querySelectorAll('input');
  for(let i = 0; i < input.length; i++){
    input[i].addEventListener('keyup', function(e){
      if(isNaN(e.value)){
        this.value=this.value.replace(/[^\d]/,'');
        // swal("Sorry!", "Please key in numbers", "warning");
      }
      // if(this.value.length>5){ 
      // }
    })
  }
  let inputBox = document.querySelectorAll('div.inputBox');

  // 第一列輸入的字元不能超過4個
  let inputLimit4 = inputBox[0].querySelectorAll('input');
  for(let i=0; i<inputLimit4.length; i++){
    inputLimit4[i].addEventListener('keyup', function(){
      if(this.value.length > 4){
        this.value = this.value.substring(0, 4);
        swal("Warning!", "No more than 4 characters", "warning");
      }
    })
  }
  // 第二列輸入的字元不能超過2個
  let inputLimit2 = inputBox[1].querySelectorAll('input');
  for(let i=0; i<inputLimit2.length; i++){
    inputLimit2[i].addEventListener('keyup', function(){
      if(this.value.length > 2){
        this.value = this.value.substring(0, 2);
        swal("Warning!", "No more than 2 characters", "warning");
      }
    })
  }
  // 第三列輸入的字元不能超過3個
  let inputLimit3 = inputBox[2].querySelectorAll('input');
  for(let i=0; i<inputLimit3.length; i++){
    inputLimit3[i].addEventListener('keyup', function(){
      if(this.value.length > 3){
        this.value = this.value.substring(0, 3);
        swal("Warning!", "No more than 3 characters", "warning");
      }
    })
  }

  //算storage內票的總價填進去總金額
  total = 0;
  for(let i=1; i<5; i++){
    if(storage[`ticket${i}`] != null){
      let ticketInfo = storage.getItem(`ticket${i}`);
      let ticketPrice = ticketInfo.split('|')[1];
      let ticketAmount = ticketInfo.split('|')[2];
      total += parseInt(ticketPrice) * parseInt(ticketAmount);
    }
  }
  
  let ticketTotal = document.getElementById('ticketTotal');
  ticketTotal.innerText = total;
  let points = document.getElementById('points');
  let typePoints = document.getElementById('typePoints');
  let newTotalPrice = document.getElementById('newTotalPrice');
  //點數輸入不能超過自己擁有的點數，輸入成功總金額也會扣除
  let fixedTotalPrice = total;
  typePoints.addEventListener('blur', function(){
    if(parseInt(this.value) > parseInt(points.innerText)){
      this.value = '';
      swal("Warning!", "The number of points entered cannot exceed the number of points you own!", "warning");
    }else if(parseInt(this.value) > fixedTotalPrice){
      this.value = '';
      swal("Warning!", "The number of points you entered has exceeded the discount range of the amount!", "warning");
    }else if(this.value == ''){
      //輸入空值的情況
      this.value = '';
    }else{
      //input重新輸入值時，total需校正回來
      total = fixedTotalPrice;
      total -= parseInt(this.value);
      newTotalPrice.innerText = total;
    }
    

  })  
  newTotalPrice.innerText = total;


}




window.addEventListener('load', doFirst);