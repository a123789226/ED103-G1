var storage = localStorage;

function doFirst(){
  // 判斷沒有addTicketList storage或有該storage但裡面是空的(逛過ticket頁面但沒加單)
  if(storage['addTicketList'] == null | storage['addTicketList'] == ''){
    noTicket();
  }else{
    let ticketString = storage.getItem('addTicketList');
    let tickets = ticketString.substr(0, ticketString.length-2).split(', ');
  
    tableInnerHTML = '';
    total = 0;
    // 取storage有存的票的資訊
    for(let key in tickets){
      let ticketInfo = storage.getItem(tickets[key]);
      
      // 將storage內有的票都變成購物車清單(html架構字串)並加總storage內票的價格(total)
      createCartList(ticketInfo, tickets[key]);
    }
    //架構塞到tbody內
    let tableContent = document.querySelector('tbody');
    tableContent.innerHTML = tableInnerHTML;
    
    let ticketCartTotal = document.querySelectorAll('p.ticketCartTotal span')[1];
    ticketCartTotal.innerText = total;
  
    //替垃圾桶建立事件聆聽
    for(i = 0; i< tickets.length; i++){
      let trashCan = document.querySelectorAll('.trashCan');
      trashCan[i].addEventListener('click', function(){
        let ticketId = this.parentNode.parentNode.id;
        //更改總金額
        let subTotal = this.parentNode.previousElementSibling.children[1].innerText;
        total -= parseInt(subTotal);
        ticketCartTotal.innerText = total;
  
        //清除storage
        storage.removeItem(ticketId);
        storage['addTicketList'] = storage['addTicketList'].replace(`${ticketId}, `, '');
  
        //刪除該筆<tr>
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

        //跟進來頁面一樣重新判斷storage狀態
        if(storage['addTicketList'] == null | storage['addTicketList'] == ''){
          noTicket();
        }
      })
    }
  
    // 替++--按鈕建立事件聆聽
    for(i = 0; i < tickets.length; i++){
      let ticketButtons = document.querySelectorAll('.ticketButtons');
      let minusButton = ticketButtons[i].querySelectorAll('button.ticketButton')[0];
      let addButton = ticketButtons[i].querySelectorAll('button.ticketButton')[1];
      let subTotal = document.querySelectorAll('span.subTotal')[i];
      let ticketAmount = document.querySelectorAll('p.ticketTicketAmount')[i];
      let ticketId = document.querySelectorAll('tr')[i+1].id;
      let ticketInfo = storage.getItem(ticketId);
      let ticketName = ticketInfo.split('|')[0];
      let ticketPrice = ticketInfo.split('|')[1];
      let ticketNewInfo = ''
      
      //--按鈕
      minusButton.addEventListener('click', function(){
        if(ticketAmount.innerText > 1){
          //更改subtotal
          ticketAmount.innerText--;
          //更改總金額
          total -= parseInt(ticketPrice);
          subTotal.innerText = parseInt(subTotal.innerText) - parseInt(ticketPrice);
          ticketCartTotal.innerText = total;
          //修改storage數量
          ticketNewInfo = `${ticketName}|${ticketPrice}|${ticketAmount.innerText}`;
          storage[ticketId] = ticketNewInfo;
        }
      })
      //++按鈕
      addButton.addEventListener('click', function(){
        //更改subtotal
        ticketAmount.innerText++;
        //更改總金額
        total += parseInt(ticketPrice);
        subTotal.innerText = parseInt(subTotal.innerText) + parseInt(ticketPrice);
        ticketCartTotal.innerText = total;
        //修改storage數量
        ticketNewInfo = `${ticketName}|${ticketPrice}|${ticketAmount.innerText}`;
        storage[ticketId] = ticketNewInfo;
      })
    }
  }

}

function createCartList(ticketValue, ticketId){
  let ticketName = ticketValue.split('|')[0];
  let ticketPrice = ticketValue.split('|')[1];
  let ticketAmount = ticketValue.split('|')[2];
  
  let ticketList = `<tr id="${ticketId}">
    <td>${ticketName}</td>
    <td>
      <div class="ticketButtons">
        <button class="ticketButton"><span>－</span></button>
        <p class="ticketTicketAmount">${ticketAmount}</p>
        <button class="ticketButton"><span>＋</span></button>
      </div>
    </td>
    <td><span>$</span><span class="subTotal">${ticketPrice * ticketAmount}</span></td>
    <td><img src="./image/ticket/ticketDelete.svg" alt="" class="trashCan" id="${ticketId}Delete"></td>
  </tr>`

  // 將每筆票的list組成字串
  tableInnerHTML += ticketList;
  total += ticketPrice * ticketAmount;
}


//沒有任何產品在購物車
function noTicket(){
  let cartTable = document.querySelector('div.cartTable');
  cartTable.style.display = 'none';
  let ticketCartTotal = document.querySelector('p.ticketCartTotal');
  ticketCartTotal.style.display = 'none';
  let ticketToMoneyButton = document.querySelector('a.ticketToMoneyButton');
  ticketToMoneyButton.innerText = "GO BUY TICKET";
  ticketToMoneyButton.href = './ticket.html';

}



window.addEventListener('load', doFirst);

