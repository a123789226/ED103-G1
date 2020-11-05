var storage = localStorage;


function ticketFirst(){
  //設置一storage來放商品清單
  if(storage['addTicketList'] == null){
    storage['addTicketList'] = '';
  }

  // 每張票的box(三張門票+四張夜宿票)票名跟票價來自票的value
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

  let ticketAddToCart = document.getElementById('ticketAddToCart');

  
  // 建立按下購物車按鈕建立事件聆聽
  ticketAddToCart.addEventListener('click', function(){
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
  });
}

function changeCartNumber(){
  let ticketString = storage.getItem('addTicketList');
  let cart_amount = document.getElementsByClassName('cart_amount');
  if(ticketString.length == 0){
    cart_amount[0].style.display = 'none';
  }else{
    let tickets = ticketString.substr(0, ticketString.length-2).split(', ');
    cart_amount[0].style.display = 'block';
    cart_amount[0].innerHTML = tickets.length;
  }
}



window.addEventListener('load', ticketFirst);