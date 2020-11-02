var storage = localStorage;

function doFirst(){
  let cart_amount = document.getElementsByClassName('cart_amount');

  if(storage['addTicketList'] == null | storage['addTicketList'] == ''){
    cart_amount[0].style.display = 'none';
  }else{
    let ticketString = storage.getItem('addTicketList');
    if(ticketString.length == 0){
      cart_amount[0].style.display = 'none';
    }else{
      tickets = ticketString.substr(0, ticketString.length-2).split(', ');
      cart_amount[0].style.display = 'block';
      cart_amount[0].innerHTML = tickets.length;
    }
  }

}



window.addEventListener('load', doFirst);

