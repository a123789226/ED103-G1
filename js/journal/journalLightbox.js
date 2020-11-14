function journalLightboxAquaType(){
    //=====使用Ajax 回server端,取回aquaNo, 放到頁面上 

    let xhrAquaNo = new XMLHttpRequest();

    xhrAquaNo.onload = function(){
        let AquaNo = JSON.parse(xhrAquaNo.responseText);
        let LightboxHTML='';
        for(i=0; i<AquaNo.length; i++){
            LightboxHTML += `

           
        `;
        }
        let jourLightbox = document.getElementById('jourLightBox');
        jourLightbox.innerHTML = LightboxHTML;
        openLightbox();

        
    }
    xhrAquaNo.open("Get", "journalLightbox.php", true);
    xhrAquaNo.send(null); 



}