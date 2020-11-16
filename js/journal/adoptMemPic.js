function doMemPic(){
    let xhradopter = new XMLHttpRequest();
    
    xhradopter.onload = function(){
        let adopter = JSON.parse(xhradopter.responseText);
        let adopterHTML='';
        for(i=0; i<adopter.length; i++){
            adopterHTML += `
            <li><img src="./img/member/${adopter[i].memPic}.jpg" alt=""></li>
            `;
}

let jourAdopterPhoto = document.getElementsByTagName('ul');
jourAdopterPhoto.innerHTML = adopterHTML;

}    

xhradopter.open("Get", "adoptMemPic.php", true);
xhradopter.send(null); 
}