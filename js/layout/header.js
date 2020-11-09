var storage = localStorage;

function doFirst(){
  
  // 購物車判別localStorage內的東西跳出票種數字
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
      cart_amount[0].style.backgroundColor = 'rgb(228, 37, 37)'
      cart_amount[0].innerHTML = tickets.length;
    }
  }


  // 漢堡包
  let hamburger_box = document.getElementById("hamburger_box");
  let hamburger_line = document.getElementById("hamburger_line");
  let hamburger_cross = document.getElementById("hamburger_cross");
  let main_menu_ul = document.getElementById("main_menu_ul");
  hamburger_box.addEventListener('click', function(){
    hamburger_line.classList.toggle("is-active");
    hamburger_cross.classList.toggle("is-active");
    main_menu_ul.classList.toggle("is-active");
  })



}

window.addEventListener('load', doFirst);




