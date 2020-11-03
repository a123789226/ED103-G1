var storage = localStorage;

function doFirst(){

  let ticketList = '';
  let total = 0;
  let tableBody = document.querySelector('tbody');
  let priceTr = document.querySelector('tr.priceTr');

  // 將storage的商品資訊增加在table內
  for(let i=1; i<5; i++){
    if(storage[`ticket${i}`] != null){
      let ticketInfo = storage.getItem(`ticket${i}`);
      let ticketName = ticketInfo.split('|')[0];
      let ticketPrice = ticketInfo.split('|')[1];
      let ticketAmount = ticketInfo.split('|')[2];
      let tableTr = document.createElement('tr');
      ticketList = `<td>Item</td>
                    <td>${ticketName} * ${ticketAmount}</td>`;
      tableBody.insertBefore(tableTr, priceTr);
      tableTr.innerHTML = ticketList;
      total += parseInt(ticketPrice) * parseInt(ticketAmount)
    }
  }
  
  // 算出來的價格放在totalPrice裡面
  let totalPrice = priceTr.querySelectorAll('span')[1];
  if(totalPrice.innerText == ''){
    totalPrice.innerText = 0;
  }else{
    totalPrice.innerText = total;
  }

  let point = document.getElementById('point');
  console.log(point.innerText)
  
  
}




window.addEventListener('load', doFirst);