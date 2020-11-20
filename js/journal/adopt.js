function doFirst(){
    let adoptAmount = document.getElementById('adoptAmount');
    let amountResult = document.getElementById('adoptAmountResult');

    adoptAmount.addEventListener('blur', function(){
        amountResult.innerText = adoptAmount.value;
    });

    // //First Name
    // let adoptFirstname = document.getElementById('adoptFirstname');
    // let adoptFirstnameResult = document.getElementById('adoptFirstnameResult');

    // adoptFirstname.addEventListener('blur', function(){
    //     adoptFirstnameResult.innerText = adoptFirstname.value;
    // });


    // //Last Name
    // let adoptLastname = document.getElementById('adoptLastname');
    // let adoptLastnameResult = document.getElementById('adoptLastnameResult');

    // adoptLastname.addEventListener('blur', function(){
    //     adoptLastnameResult.innerText = adoptLastname.value;
    // });

    //  //Email
    //  let adoptEmail = document.getElementById('adoptEmail');
    //  let adoptEmailResult = document.getElementById('adoptEmailResult');
 
    //  adoptEmail.addEventListener('blur', function(){
    //     adoptEmailResult.innerText = adoptEmail.value;
    //  });

    // //Phone
    //  let adoptPhone = document.getElementById('adoptPhone');
    //  let adoptPhoneResult = document.getElementById('adoptPhoneResult');
 
    //  adoptPhone.addEventListener('blur', function(){
    //     adoptPhoneResult.innerText = adoptPhone.value;
    //  });

    //   //CardName
    //   let adoptCardname = document.getElementById('adoptCardname');
    //   let adoptCardnameResult = document.getElementById('adoptCardnameResult');
  
    //   adoptCardname.addEventListener('blur', function(){
    //     adoptCardnameResult.innerText = adoptCardname.value;
    //   });

       //CardNumber
       let adoptCardnumber = document.getElementById('adoptCardnumber');
       let adoptCardnumberResult = document.getElementById('adoptCardnumberResult');
   
       adoptCardnumber.addEventListener('blur', function(){
        adoptCardnumberResult.innerText = adoptCardnumber.value;
       });

       //Carddate
       let adoptCarddate = document.getElementById('adoptCarddate');
       let adoptCarddateResult = document.getElementById('adoptCarddateResult');
   
       adoptCarddate.addEventListener('blur', function(){
        adoptCarddateResult.innerText = adoptCarddate.value;
       });

       //Cardcode
       let adoptCardcode = document.getElementById('adoptCardcode');
       let adoptCardcodeResult = document.getElementById('adoptCardcodeResult');
   
       adoptCardcode.addEventListener('blur', function(){
        adoptCardcodeResult.innerText = adoptCardcode.value;
       });



}

window.addEventListener('load', doFirst);