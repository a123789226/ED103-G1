var storage = localStorage;

function doFirst(){

  let nightList = '';
  let total = 0;
  let tableBody = document.querySelector('tbody');
  let priceTr = document.querySelector('tr.priceTr');

  // 將storage的商品資訊增加在table內
  for(let i=1; i<5; i++){
    if(storage[`night${i}`] != null){
      let nightInfo = storage.getItem(`night${i}`);
      let nightName = nightInfo.split('|')[0];
      let nightPrice = nightInfo.split('|')[1];
      let nightAmount = nightInfo.split('|')[2];
      let nightDate = nightInfo.split('|')[3];
      let tableTr = document.createElement('tr');
      let nightDateBox = document.getElementById('nightDate');
      nightDateBox.innerText = nightDate;
      nightList = `<td>Area</td>
                    <td>${nightName} * ${nightAmount}</td>`;
      tableBody.insertBefore(tableTr, priceTr);
      tableTr.innerHTML = nightList;
      total += parseInt(nightPrice) * parseInt(nightAmount)
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
  let newTotalPrice = document.getElementById('newTotalPrice');
  total -= parseInt(point.innerText);
  newTotalPrice.innerText = total;
  
}




window.addEventListener('load', doFirst);