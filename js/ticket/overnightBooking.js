var storage = localStorage;

function doFirst(){
  tableInnerHTML = '';
  total = 0;

  for(let i = 0; i < 4; i++){
    if(storage[`night${i+1}`]){
      let nightInfo = storage.getItem(`night${i+1}`);
      // console.log(nightInfo);

      createList(nightInfo, i);
    
    }
  }

  // 架構塞到tbody內
  let tableContent = document.querySelector('tbody');
  tableContent.innerHTML = tableInnerHTML;

  // 總價改變
  let ticketCartTotal = document.querySelectorAll('p.ticketCartTotal span')[1];
  ticketCartTotal.innerText = total;

  //替垃圾桶建立事件聆聽

  for(let i = 0; i < 4; i++){
    if(storage[`night${i+1}`]){
      let trashDelete = document.getElementById(`trash${i+1}`);
      trashDelete.addEventListener('click', function(){
        let nightInfo = storage.getItem(`night${i+1}`);
        let nightPrice = nightInfo.split('|')[1];
        let nightAmount = nightInfo.split('|')[2];

        //更改總金額
        total -= parseInt(nightPrice) * parseInt(nightAmount);
        ticketCartTotal.innerText = total;

        //清除storage
        storage.removeItem(`night${i+1}`);

        // 刪除該筆<tr>
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

        // 檢查storage是否為空
        checkStorageEmpty();

      })
    }
  }

}

function createList(nightValue, index){
  let nightName = nightValue.split('|')[0];
  let nightPrice = nightValue.split('|')[1];
  let nightAmount = nightValue.split('|')[2];
  let nightDate = nightValue.split('|')[3];

  let nightList = `<tr id="night${index+1}">
                    <td><img src="./image/ticket/nightTicket${index+1}.png" alt=""></td>
                    <td>${nightName}</td>
                    <td>${nightDate}</td>
                    <td>${nightAmount}</td>
                    <td>${parseInt(nightPrice) * parseInt(nightAmount)}</td>
                    <td><img src="./image/ticket/ticketDelete.svg" alt="" class="trashCan" id="trash${index+1}"></td>
                  </tr>`;

  // 將每筆夜宿票html結構累加
  tableInnerHTML += nightList;
  total += nightPrice * nightAmount;
}

// 檢查storage是否為空，空的話跳出提示，並且五秒後跳回購票頁面
function checkStorageEmpty(){
  if(storage['night1'] || storage['night2'] || storage['night3'] || storage['night4']){
  }else{
    swal("Oops", "You have canceled all overnight tickets. You can click the button turn to ticket page, or the page will change in 5 seconds!", "warning", {button: "Go To Ticket Page"}).then((value) => {
      if(value){
        window.location = "ticket.html";
      }
    });
    setTimeout("location.href='ticket.html';", 5000); 
  }
}


//沒有任何產品在購物車
function noTicket(){
  // let cartTable = document.querySelector('div.cartTable');
  // cartTable.style.display = 'none';
  // let ticketCartTotal = document.querySelector('p.ticketCartTotal');
  // ticketCartTotal.style.display = 'none';
  // let ticketToMoneyButton = document.querySelector('a.ticketToMoneyButton');
  // ticketToMoneyButton.innerText = "GO BUY TICKET";
  // ticketToMoneyButton.href = './ticket.html';
  // let ticketEmpty = document.querySelector('div.ticketEmpty');
  // ticketEmpty.style.display = 'block';
}



window.addEventListener('load', doFirst);

