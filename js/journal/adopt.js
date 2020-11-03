function doFirst(){
    let adoptAmount = document.getElementById('adoptAmount');
    let amountResult = document.getElementById('adoptAmountResult');

    adoptAmount.addEventListener('blur', function(){
        amountResult.innerText = adoptAmount.value;
    });


    // let aquaName = document.getElementById('adoptAquaName');
    // let aquaNameResult =  document.getElementById('adoptAquaNameResult');
    
    // aquaName.addEventListener('blur', function(){
    //     aquaNameResult.innerText = aquaName.value;
    // });


    //First Name
    let adoptFirstname = document.getElementById('adoptFirstname');
    let adoptFirstnameResult = document.getElementById('adoptFirstnameResult');

    adoptFirstname.addEventListener('blur', function(){
        adoptFirstnameResult.innerText = adoptFirstname.value;
    });


    //Last Name
    let adoptLastname = document.getElementById('adoptLastname');
    let adoptLastnameResult = document.getElementById('adoptLastnameResult');

    adoptLastname.addEventListener('blur', function(){
        adoptLastnameResult.innerText = adoptLastname.value;
    });

     //Email
     let adoptEmail = document.getElementById('adoptEmail');
     let adoptEmailResult = document.getElementById('adoptEmailResult');
 
     adoptEmail.addEventListener('blur', function(){
        adoptEmailResult.innerText = adoptEmail.value;
     });

    //Phone
     let adoptPhone = document.getElementById('adoptPhone');
     let adoptPhoneResult = document.getElementById('adoptPhoneResult');
 
     adoptPhone.addEventListener('blur', function(){
        adoptPhoneResult.innerText = adoptPhone.value;
     });

     //Message
     let adoptMessage = document.getElementById('adoptMessage');
     let adoptMessageResult = document.getElementById('adoptMessageResult');
 
     adoptMessage.addEventListener('blur', function(){
        adoptMessageResult.innerText = adoptMessage.value;
     });



}

window.addEventListener('load', doFirst);