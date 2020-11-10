// ---------有關日曆及抓區域人數Vue------------------

let now = new Date();
let time = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
// console.log(time);

let vue_remaining = new Vue({
  el: '#app',
  data: {
    date: time,
    remain_1: 0,
    remain_2: 0,
    remain_3: 0,
    remain_4: 0,
  },
  mounted() {
    $(".ticketCalendarBlock").datepicker({
      //開始日期為今日
      startDate: " new date()",
      format: "yyyy-mm-dd",
      //特別標註今天
      todayHighlight: true,
    }).on(
      "changeDate", (e) => { this.date = e.format()}
    );

    var params = new URLSearchParams();
    params.append('nightDate', this.$data.date);

    // let bbb = 0;
    axios.post('aqua_rem.php', params)
      .then(function (res) {
        // console.log(res.data.area1Capacity);
        vue_remaining.remain_1 = res.data.area1Capacity - res.data.area1Order;
        vue_remaining.remain_2 = res.data.area2Capacity - res.data.area2Order;
        vue_remaining.remain_3 = res.data.area3Capacity - res.data.area3Order;
        vue_remaining.remain_4 = res.data.area4Capacity - res.data.area4Order;
      })
      .catch(function (err) {
        console.log(err);
      });

  },
  
  watch: {
    date(newValue){
    var params = new URLSearchParams();
    params.append('nightDate', newValue);

    // let bbb = 0;
    axios.post('aqua_rem.php', params)
      .then(function (res) {
        // console.log(vue_remaining.remain_1);
        vue_remaining.remain_1 = res.data.area1Capacity - res.data.area1Order;
        vue_remaining.remain_2 = res.data.area2Capacity - res.data.area2Order;
        vue_remaining.remain_3 = res.data.area3Capacity - res.data.area3Order;
        vue_remaining.remain_4 = res.data.area4Capacity - res.data.area4Order;
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  }

})


// ------------------JS----------------------
var storage = localStorage;


function ticketFirst(){
  //設置一storage來放商品清單
  if(storage['addTicketList'] == null){
    storage['addTicketList'] = '';
  }

  // 非同步抓取資料庫票資訊塞入隱藏input的value值
  // 先抓門票的資料
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    ticketsRow = JSON.parse(xhr.responseText);
    // console.log(ticketsRow);
    
    // 再抓夜宿
    getNightInfo(ticketsRow);
  }
  xhr.open("get", "./ticketInfo.php", true);
  xhr.send(null);

  // 夜宿
  function getNightInfo(ticketsRow){
    let xhr2 = new XMLHttpRequest();
    xhr2.onload = function(){
      nightRow = JSON.parse(xhr2.responseText);
      // console.log(nightRow);
      // 再把ticketInfo跟nightInfo的資料丟去隱藏的input的value
      showTickets(ticketsRow, nightRow);
    }
    xhr2.open("get", "./nightInfo.php", true);
    xhr2.send(null);
  }

  //++--按鈕的功能
  let ticketButtons =document.querySelectorAll('.ticketButtons');
  let ticketTicketTotal = document.querySelectorAll('p.ticketTicketTotal span')[1];
  let ticketONTotal = document.querySelectorAll('p.ticketONTotal span')[1];
  let ticketTotal = 0;
  let overnightTotal = 0;
  for(let i = 0; i < ticketButtons.length; i++){
    
    let minusButton = ticketButtons[i].querySelectorAll('button.ticketButton')[0];
    let addButton = ticketButtons[i].querySelectorAll('button.ticketButton')[1];
    let ticketAmount = ticketButtons[i].querySelector('p.ticketTicketAmount');
    let ticketPrice = ticketButtons[i].previousElementSibling.querySelectorAll('span')[1];

    minusButton.addEventListener('click', function(){
      if(parseInt(ticketAmount.innerText) != 0){
        //針對夜宿的--按鈕
        if(i >= (ticketButtons.length-4)){
          ticketAmount.innerText--;
          overnightTotal -= parseInt(ticketPrice.innerText);
          ticketONTotal.innerText = overnightTotal;
        }else{
          // 門票的--按鈕
          ticketAmount.innerText--;
          ticketTotal -= parseInt(ticketPrice.innerText);
          ticketTicketTotal.innerText = ticketTotal;
        }        
      }
    })

    addButton.addEventListener('click', function(){
      //針對夜宿的++按鈕，++不能>區域的剩餘人數
      if(i >= (ticketButtons.length-4)){
        let remainNumber = ticketButtons[i].parentNode.previousElementSibling.querySelectorAll('span')[1];
        if(parseInt(ticketAmount.innerText) < parseInt(remainNumber.innerText)){
          ticketAmount.innerText++;
          overnightTotal += parseInt(ticketPrice.innerText);
          ticketONTotal.innerText = overnightTotal;
        }else{
          swal("Limit Reached!", "The quantity has reached the upper limit, and the quantity cannot be increased!", "warning");
        }
      }else{
        // 沒票的++按鈕
        ticketAmount.innerText++;
        ticketTotal += parseInt(ticketPrice.innerText);
        ticketTicketTotal.innerText = ticketTotal;
      }
    })
  }

  // 建立按下購物車按鈕建立事件聆聽
  let ticketAddToCart = document.getElementById('ticketAddToCart');
  ticketAddToCart.addEventListener('click', ticketAddToCartDo);

   // 建立按下前往預定按鈕建立事件聆聽
  let ticketBookingButton = document.getElementById('ticketBookingButton');
  ticketBookingButton.addEventListener('click', goBookingDo);
}


function showTickets(item, item2){
  let ticketProduct = document.querySelectorAll('div.ticketProduct input');
  for(let i=0; i<ticketProduct.length; i++){
    ticketProduct[i].value = `${item[i].ticketType}|${item[i].ticketPrice}|0`
  }

  let ticketAreaRemainBox = document.querySelectorAll('div.ticketAreaRemainBox input');
  for(let i=0; i<ticketAreaRemainBox.length; i++){
    ticketAreaRemainBox[i].value = `${item2[i].areaType}|${item2[i].areaPrice}|0`
  }

  //每張票的box(三張門票+四張夜宿票)票名跟票價來自票的value
  ticketInfoByValue();
}

// 渲染票名跟票價(三張門票+四張夜宿票)
function ticketInfoByValue(){
  let ticketButtonBox = document.querySelectorAll('div.ticketButtonBox');
  for(let i = 0; i < ticketButtonBox.length; i++){
    let ticketValue = ticketButtonBox[i].querySelector('input').value;
    let ticketNameBox = ticketButtonBox[i].querySelector('p.ticketTicketName');
    let ticketPriceBox = ticketButtonBox[i].querySelector('p.ticketTicketPrice').querySelectorAll('span')[1];
    let ticketName = ticketValue.split('|')[0];
    let ticketPrice = ticketValue.split('|')[1];
    
    ticketNameBox.innerText = ticketName;
    ticketPriceBox.innerText = ticketPrice;
  }
}

// 按下加入購物車觸發
function ticketAddToCartDo(){
  let ticketProduct = document.querySelectorAll('.ticketProduct')
  let ticketAmount = document.querySelectorAll('.ticketProduct p.ticketTicketAmount');

  let amountSum = 0;
  for(let i = 0; i < ticketProduct.length; i++){
    amountSum += parseInt(ticketAmount[i].innerText);
  }

  // 如果有票數不是為0，將票加入購物車
  if(amountSum != 0){
    swal("Great!", "The tickets has successfully added to shopping cart!", "success");
    //針對每一張票去作判別    
    for(let i = 0; i < ticketProduct.length; i++){      
      //如果票的數量不為0則執行加入Info進入storage
      if(ticketAmount[i].innerText != 0){
        let ticketInfo = document.querySelectorAll('div.ticketProduct')[i].querySelector('input').value;
        let ticketName = ticketInfo.split('|')[0];
        let ticketPrice = ticketInfo.split('|')[1];
        let ticketNewInfo = `${ticketName}|${ticketPrice}|${ticketAmount[i].innerText}`;
        
        // 判斷storage裡面已經有那張票，那存入storage的Info他後面的數字會變成累加
        if(storage[`ticket${i+1}`]){
          let ticketStorageAmount = storage.getItem(`ticket${i+1}`).split('|')[2];
          let ticketNewAmount = parseInt(ticketStorageAmount) + parseInt(ticketAmount[i].innerText);
          ticketNewInfo = `${ticketName}|${ticketPrice}|${ticketNewAmount}`
        }else{
          storage['addTicketList'] += `ticket${i+1}` + ', ';
        }
        // 將判別後的Info塞入storage，key值為那張票的id
        storage[`ticket${i+1}`] = ticketNewInfo;
        
      }
    }

    // header購物車的數量變動
    changeCartNumber();

    //每張票的數量也都歸0
    for(let i = 0; i < ticketProduct.length; i++){
      ticketAmount[i].innerText = 0;
    }
    
    //總金額也變回0
    let ticketTicketTotal = document.querySelectorAll('p.ticketTicketTotal span')[1];
    ticketTicketTotal.innerText = 0;
    // 頁面沒跳轉又繼續增加票的數量，總金額變數須歸0，才不會以上次金額繼續累加
    ticketTotal = 0;
  }else{
    // 全都為0，請選擇票的數量提示
    swal("Oops!", "Please select amount of tickets", "warning");
  }
}

// 按下前往預訂觸發
function goBookingDo(){
  let ticketAreaRemainBox = document.querySelectorAll('.ticketAreaRemainBox');
  let ticketAmount = document.querySelectorAll('.ticketAreaRemainBox p.ticketTicketAmount');
  let amountSum = 0;
  for(let i = 0; i < ticketAmount.length; i++){
    amountSum += parseInt(ticketAmount[i].innerText);
  }
  
  // 如果有夜宿票數不是為0，判斷是不是會員
  if(amountSum != 0){
    // 判別是會員
    if(member.memId){
      for(let i = 0; i < ticketAreaRemainBox.length; i++){
        let nightInfo = document.querySelectorAll('div.ticketAreaRemainBox')[i].querySelector('input').value;
        let nightName = nightInfo.split('|')[0];
        let nightPrice = nightInfo.split('|')[1];
        let nightDate = document.querySelectorAll('.ticketShowDate span')[1].innerText;
        
        let nightNewInfo = `${nightName}|${nightPrice}|${ticketAmount[i].innerText}|${nightDate}`;
        console.log(nightNewInfo);
        //如果票的數量不為0則執行加入Info進入storage
        if(ticketAmount[i].innerText != 0){
          // 將新的Info塞入storage，key值為'night1'到'night4'
          storage[`night${i+1}`] = nightNewInfo;
        }else{ //票數為0，要刪除其對應的storage(避免第二次操作讀取上次存取的)
          if(storage[`night${i+1}`]){
            storage.removeItem(`night${i+1}`);
          }
        }

        // 跳轉去結帳
        window.location.href = 'overnightBooking.html';
      }




    }else{  //非會員跳燈箱
      let overlay = document.getElementsByClassName('overlay');
      overlay[0].classList.add('-on');
    }
  }else{
    // 全都為0，請選擇票的數量提示
    swal("Oops!", "Please select amount of overnight tickets", "warning");
  }
}


// header購物車的數量變動
function changeCartNumber(){
  let ticketString = storage.getItem('addTicketList');
  let cart_amount = document.getElementsByClassName('cart_amount');
  if(ticketString.length == 0){
    cart_amount[0].style.display = 'none';
  }else{
    let tickets = ticketString.substr(0, ticketString.length-2).split(', ');
    cart_amount[0].style.display = 'block';
    cart_amount[0].style.backgroundColor = 'rgb(228, 37, 37)'
    cart_amount[0].innerHTML = tickets.length;
  }
}


window.addEventListener('load', ticketFirst);



// ---------------jQuery------------------------
// 選擇區域區底圖消失出現
$('.ticketAreaSelect').hover(function(){
  $('.ticketONBigImg').css("opacity","0");
},function(){
  $('.ticketONBigImg').css("opacity","1");
});

//手機板避免連結沒hover效果禁止跳轉功能
$('.ticketToTour').on('click', function(e){
  e.preventDefault();
})

//月曆
// $('.ticketCalendarBlock').datepicker({
//   startDate: " new date()",
//   todayHighlight: true,
// });

//防止加減按鈕提交表單
$('.ticketButton').on('click', function(){
  return false;
})