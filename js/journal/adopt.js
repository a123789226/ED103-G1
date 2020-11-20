function doFirst(){
    let adoptAmount = document.getElementById('adoptAmount');
    let amountResult = document.getElementById('adoptAmountResult');
    adoptAmount.addEventListener('blur', function(){
        amountResult.innerText = adoptAmount.value;
    });

    //CardNumber
    let adoptCardInput = document.getElementsByClassName('adoptCardInput');
    let adoptCardInfo = document.getElementsByClassName('adoptCardInfo');
    for(let i = 0; i < adoptCardInput.length; i++){
        adoptCardInput[i].addEventListener('blur', function(){
            adoptCardInfo[i].innerText = adoptCardInput[i].value
        })
    }

    //所有欄位都只能輸入數字
    let input = document.querySelectorAll('input');
    for(let i = 0; i < input.length; i++){
        input[i].addEventListener('keyup', function(e){
            if(isNaN(e.value)){
                this.value=this.value.replace(/[^\d]/,'');
            }
        })
    }

    let adoptPayment = document.querySelectorAll('div.adoptPayment');

    // 第一列輸入的字元不能超過4個
    let inputLimit4 = adoptPayment[0].querySelectorAll('input');
    for(let i=0; i<inputLimit4.length; i++){
        inputLimit4[i].addEventListener('keyup', function(){
            if(this.value.length > 4){
                this.value = this.value.substring(0, 4);
                swal("Warning!", "No more than 4 characters", "warning");
            }
        })
    }
    // 第二列輸入的字元不能超過2個
    let inputLimit2 = adoptPayment[1].querySelectorAll('input');
    for(let i=0; i<inputLimit2.length; i++){
        inputLimit2[i].addEventListener('keyup', function(){
            if(this.value.length > 2){
                this.value = this.value.substring(0, 2);
                swal("Warning!", "No more than 2 characters", "warning");
            }
        })
    }
    // 第三列輸入的字元不能超過3個
    let inputLimit3 = adoptPayment[2].querySelectorAll('input');
    for(let i=0; i<inputLimit3.length; i++){
        inputLimit3[i].addEventListener('keyup', function(){
            if(this.value.length > 3){
                this.value = this.value.substring(0, 3);
                swal("Warning!", "No more than 3 characters", "warning");
            }
        })
    }


    //進行adopt的確認按鈕
    let adoptSubmit = document.getElementById('adoptSubmit');
    adoptSubmit.addEventListener('click', function(){
        let adoptAmountResult = document.getElementById('adoptAmountResult').innerText;
        let aquaNo = document.getElementById('aquaNo').innerText;

        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            // alert(xhr.responseText);
            swal({
                title: "Thank you for adopting!",
                text: "Do you want to make a customized thanks card?",
                icon: "success",
                buttons:{
                    A: {
                        text: "No!",
                        value: "No"
                      },
                    B: {
                      text: "Yes! Go to make a card!",
                      value: "Yes"
                    }
                }
            }).then((value) => {
                if(value == 'Yes'){
                    window.location.href= './thanksCard.html';
                }else{
                    window.location.href= './journal.html';
                }
            });
        }
    
        xhr.open("Post", "InsertAdopt.php", true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        let data_info = `aquaNo=${aquaNo}&adoptDollar=${adoptAmountResult}`;
        xhr.send(data_info);
    })
}

window.addEventListener('load', doFirst);