var storage = localStorage;

function doFirst(){
  
  let ticketString = storage.getItem('addTicketList');
  // console.log(ticketString);  
  let cart_amount = document.getElementsByClassName('cart_amount');
  if(ticketString.length == 0){
    // cart_box[0].removeChild(cart_amount[0]);
    cart_amount[0].style.display = 'none';
  }else{
    let tickets = ticketString.substr(0, ticketString.length-2).split(', ');
    cart_amount[0].style.display = 'block';
    cart_amount[0].innerHTML = tickets.length;
  }
  

  // 待補當storage改變時也會觸發更改購物車票種數量的數字
  // 目前新增東西到storage不會觸發該事件聆聽(待解)

  // window.addEventListener("storage", function(){
  // });


}



window.addEventListener('load', doFirst);

