function chooseAquaType(){
    //=====使用Ajax 回server端,取回aquatype, 放到頁面上 

// Dolphin
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        let aquas = JSON.parse(xhr.responseText);
        let bookCoverHTML='';
        for(i=0; i<aquas.length; i++){
            bookCoverHTML += `

            <div class="jourBookSection">
                <a href="#">

                <div class="jourBook jourBookOpenBtn">
                    <div class="jourBookLeft">

                    </div>
                    <div class="jourBookRight">
                        <div class="jourBookPhoto">
                            <img src="././img/aqua/${aquas[i].aquaNo}" alt="">
                        </div>
                    <div class="jourBookName">${aquas[i].aquaName}</div>
                        <div class="jourBookText">
                            <table>
                            <tr>
                                <th>Aqua No.</th>
                                <td>${aquas[i].aquaNo}</td>
                            </tr>
                            <tr>
                                <th>Aqua Name</th>
                                <td>${aquas[i].aquaName}</td>
                            </tr>
                            <tr>
                                <th>Found Location</th>
                                <td>${aquas[i].rescueLoc}</td>
                            </tr>
                            <tr>
                                <th>Arrival Date</th>
                                <td>${aquas[i].arriveDate}</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
                </a>
                <!-- 陰影 -->
                <div class="jourBookShadow"></div>
                <!-- 石頭 -->
                <div class="jourStone">
                <img src="./image/journal/journal_element/stone.png" alt="">
                </div>
            </div>
        `;
        }
        let jourBooks = document.getElementById('jourBooksDolphin');
        jourBooks.innerHTML = bookCoverHTML;
        openBookDolphin();

        
    }
    xhr.open("Get", "journalTypeDolphin.php", true);
    xhr.send(null); 


// Whale
    let xhrWhale = new XMLHttpRequest();

    xhrWhale.onload = function(){
        let aquas = JSON.parse(xhrWhale.responseText);
        let bookCoverHTML='';
        for(i=0; i<aquas.length; i++){
            bookCoverHTML += `

            <div class="jourBookSection">
                <a href="#">

                <div class="jourBook jourBookOpenBtn">
                    <div class="jourBookLeft">

                    </div>
                    <div class="jourBookRight">
                        <div class="jourBookPhoto">
                            <img src="././img/aqua/${aquas[i].aquaNo}" alt="">
                        </div>
                    <div class="jourBookName">${aquas[i].aquaName}</div>
                        <div class="jourBookText">
                            <table>
                            <tr>
                                <th>Aqua No.</th>
                                <td>${aquas[i].aquaNo}</td>
                            </tr>
                            <tr>
                                <th>Aqua Name</th>
                                <td>${aquas[i].aquaName}</td>
                            </tr>
                            <tr>
                                <th>Found Location</th>
                                <td>${aquas[i].rescueLoc}</td>
                            </tr>
                            <tr>
                                <th>Arrival Date</th>
                                <td>${aquas[i].arriveDate}</td>
                            </tr>
                            </table>
                        </div>
                    </div>
                </div>
                </a>
                <!-- 陰影 -->
                <div class="jourBookShadow"></div>
                <!-- 石頭 -->
                <div class="jourStone">
                <img src="./image/journal/journal_element/stone.png" alt="">
                </div>
            </div>
        `;
        }
        
        let jourBooks = document.getElementById('jourBooksWhale');
        jourBooks.innerHTML = bookCoverHTML;
        // openBook();

        
    }
    xhrWhale.open("Get", "journalTypeWhale.php", true);
    xhrWhale.send(null); 

// Seal
let xhrSeal = new XMLHttpRequest();

xhrSeal.onload = function(){
    let aquas = JSON.parse(xhrSeal.responseText);
    let bookCoverHTML='';
    for(i=0; i<aquas.length; i++){
        bookCoverHTML += `

        <div class="jourBookSection">
            <a href="#">

            <div class="jourBook jourBookOpenBtn">
                <div class="jourBookLeft">

                </div>
                <div class="jourBookRight">
                    <div class="jourBookPhoto">
                        <img src="././img/aqua/${aquas[i].aquaNo}" alt="">
                    </div>
                <div class="jourBookName">${aquas[i].aquaName}</div>
                    <div class="jourBookText">
                        <table>
                        <tr>
                            <th>Aqua No.</th>
                            <td>${aquas[i].aquaNo}</td>
                        </tr>
                        <tr>
                            <th>Aqua Name</th>
                            <td>${aquas[i].aquaName}</td>
                        </tr>
                        <tr>
                            <th>Found Location</th>
                            <td>${aquas[i].rescueLoc}</td>
                        </tr>
                        <tr>
                            <th>Arrival Date</th>
                            <td>${aquas[i].arriveDate}</td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
            </a>
            <!-- 陰影 -->
            <div class="jourBookShadow"></div>
            <!-- 石頭 -->
            <div class="jourStone">
            <img src="./image/journal/journal_element/stone.png" alt="">
            </div>
        </div>
    `;
    }
    
    let jourBooks = document.getElementById('jourBooksSeal');
    jourBooks.innerHTML = bookCoverHTML;
    // openBook();

    
}
xhrSeal.open("Get", "journalTypeSeal.php", true);
xhrSeal.send(null); 


// Turtle
let xhrTurtle = new XMLHttpRequest();

xhrTurtle.onload = function(){
    let aquas = JSON.parse(xhrTurtle.responseText);
    let bookCoverHTML='';
    for(i=0; i<aquas.length; i++){
        bookCoverHTML += `

        <div class="jourBookSection">
            <a href="#">

            <div class="jourBook jourBookOpenBtn">
                <div class="jourBookLeft">

                </div>
                <div class="jourBookRight">
                    <div class="jourBookPhoto">
                        <img src="././img/aqua/${aquas[i].aquaNo}" alt="">
                    </div>
                <div class="jourBookName">${aquas[i].aquaName}</div>
                    <div class="jourBookText">
                        <table>
                        <tr>
                            <th>Aqua No.</th>
                            <td>${aquas[i].aquaNo}</td>
                        </tr>
                        <tr>
                            <th>Aqua Name</th>
                            <td>${aquas[i].aquaName}</td>
                        </tr>
                        <tr>
                            <th>Found Location</th>
                            <td>${aquas[i].rescueLoc}</td>
                        </tr>
                        <tr>
                            <th>Arrival Date</th>
                            <td>${aquas[i].arriveDate}</td>
                        </tr>
                        </table>
                    </div>
                </div>
            </div>
            </a>
            <!-- 陰影 -->
            <div class="jourBookShadow"></div>
            <!-- 石頭 -->
            <div class="jourStone">
            <img src="./image/journal/journal_element/stone.png" alt="">
            </div>
        </div>
    `;
    }
    
    let jourBooks = document.getElementById('jourBooksTurtle');
    jourBooks.innerHTML = bookCoverHTML;
    // openBook();

    
}
xhrTurtle.open("Get", "journalTypeTurtle.php", true);
xhrTurtle.send(null); 

$.ajax({
  url: 'journalPageUp.php',
  type: 'get',
  success: function (data) {
    data1 = JSON.parse(data);
    console.log(data1.aquaNo);
    let demoDolphinId = document.getElementById('demoDolphinId');
    let demoDolphinName = document.getElementById('demoDolphinName');
    let demoDolphinLoc = document.getElementById('demoDolphinLoc');
    let demoDolphinDate = document.getElementById('demoDolphinDate');
    demoDolphinId.innerText = data1.aquaNo;
    demoDolphinName.innerText = data1.aquaName;
    demoDolphinLoc.innerText = data1.rescueLoc;
    demoDolphinDate.innerText = data1.arriveDate;
  },
  error: function (data) {
    console.log(JSON.stringify(data));
  },
})




}



function openBookDolphin(){
    let jourBookOpenBtn = document.getElementsByClassName('jourBookOpenBtn');
    let openAquaNo = document.getElementById('openAquaNo');
    let openAquaName = document.getElementById('openAquaName');
    let openFoundLoc = document.getElementById('openFoundLoc');
    let openArriveDate = document.getElementById('openArriveDate');
    let openAquaStory = document.getElementById('openAquaStory');
    let aquaNo;
    for(let i=0; i< jourBookOpenBtn.length; i++){
        jourBookOpenBtn[i].addEventListener('click', function(){
            aquaNo = this.querySelector('tr').querySelector('td').innerText;
            document.getElementsByClassName("jourBookOpenBtn")[0].style.display = "block";
            document.getElementsByClassName("jour_bk")[0].style.display = "block";
            document.getElementsByClassName("jourLightBox")[0].style.display = "block";
            document.getElementsByClassName('jourBookOpenBtn_close')[0].onclick = function () {
                document.getElementsByClassName("jourLightBox")[0].style.display = "none";
                document.getElementsByClassName("jour_bk")[0].style.display = "none";
                totalP = $("#flipbook2").turn("pages");
                for(let i= 1 ; i<10; i++){
                    $("#flipbook2").turn("removePage", i+1);
                }
            }

<<<<<<< HEAD
=======
            //帶入journal內頁
            $.ajax({
                url: 'journalPage.php',
                type: 'post',
                dataType: 'json',
                data:{
                    aquaNo: aquaNo,
                },
                success: function (data) {
                    console.log($("#flipbook2").turn("pages"));

                    


                    console.log(data.length);
                    openAquaNo.innerText = data[0].aquaNo;
                    openAquaName.innerText = data[0].aquaName;
                    openFoundLoc.innerText = data[0].rescueLoc;
                    openArriveDate.innerText = data[0].arriveDate;
                    openAquaStory.innerText = data[0].jourStory;

                  for(let i=0; i<data.length; i++){
                      if( i == 0){
                        element = $(`<div />`).html(`
                        <div class="hard jourPage${i+1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                          <div class="jourPagePhotoArea1">
                            <div class="jourPagePhotoLeft1">
                              <img src="./image/journal/journal_dolphin/23.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight1">
                              <div class="jourPagePhotoRightInner1">
                                <img src="./image/journal/journal_dolphin/15.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner1">
                                <img src="./image/journal/journal_dolphin/14.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText1">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
                        $("#flipbook2").turn("addPage", element, i+2);
                      }else if(i == data.length-1 ){
                            element = $(`<div />`).html(`<div class="hard jourPage${i+1}">
                            <div class="jourPageContent">
                              <h4>${data[i].jourDate}</h4>
                              <div class="jourPagePhotoArea1">
                                <div class="jourPagePhotoLeft1">
                                  <img src="./image/journal/journal_dolphin/23.jpg" alt="">
                                </div>
                                <div class="jourPagePhotoRight1">
                                  <div class="jourPagePhotoRightInner1">
                                    <img src="./image/journal/journal_dolphin/15.jpg" alt="">
                                  </div>
                                  <div class="jourPagePhotoRightInner1">
                                    <img src="./image/journal/journal_dolphin/14.jpg" alt="">
                                  </div>
                                </div>
                              </div>
                              <div class="jourPageText1">
                                <h4>Story Updates</h4>
                                <p>${data[i].jourContent}</p>
                              </div>
                            </div>
                          </div>`);
                            $("#flipbook2").turn("addPage", element, i+2);
                            element = $(`<div />`).html(`<div class="hard jourLastPage">
                            <h4>Welcome to visit Olivia at <br> Aqua Wonderland!</h4>
                          </div>`);
                            $("#flipbook2").turn("addPage", element, i+3);
                      }else{
                        element = $(`<div />`).html(`<div class="jourPage jourPage${i+1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                          <div class="jourPagePhotoArea1">
                            <div class="jourPagePhotoLeft1">
                              <img src="./image/journal/journal_dolphin/23.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight1">
                              <div class="jourPagePhotoRightInner1">
                                <img src="./image/journal/journal_dolphin/15.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner1">
                                <img src="./image/journal/journal_dolphin/14.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText1">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
                        $("#flipbook2").turn("addPage", element, i+2);
                      }


                    // $(`.jourPage${(i + 1)} .jourPageContent > h4`).text(data[i].jourDate);
                    // $(`.jourPage${(i+1)} .jourPageText1 > p`).text(data[i].jourContent);
                    $(`#flipbook2 .page-wrapper .jourPage${i+1}`).css('width','400px');
                    $(`#flipbook2 .page-wrapper .jourPage${i+1}`).css('box-shadow','none');
                    $(`#flipbook2 .page`).css('box-shadow','none');
                    $(`#flipbook2 .page`).css('background','linear-gradient(to left, #333 0.1%, lightgray .5%, #fff 55%, lightgray 99%)');
                    $(`#flipbook2 .page-wrapper .jourPage${i+1}`).css('background','linear-gradient(to left, #333 0.1%, lightgray .5%, #fff 55%, lightgray 99%)');
                  }
                  $('.jourLastPage').css('width','400px');
                  $('.jourLastPage').css('height','600px');
                  $('.jourLastPage h4').css('padding-top','200px');
                  $('.jourLastPage h4').css('margin','0 auto');

                },
                error: function (data) {
                  console.log(JSON.stringify(data));
                },
              })


            //帶入認養人頭像
            doMemPic(aquaNo);
           

>>>>>>> 69866c32f557cbad86340e1d7528aea14dacd962
            // 渲染留言的function
            doPost(aquaNo);
        })
    }
}

//--------------------------------------------------------------------------
// 找認養人頭像(doMemPic)
function doMemPic(aquaNo){
    // console.log(aquaNo);
    let xhradopter = new XMLHttpRequest();
    
    xhradopter.onload = function(){
        let adopter = JSON.parse(xhradopter.responseText);
        // console.log(adopter[0].memPic);
        let adopterHTML='';
        for(i=0; i<adopter.length; i++){
            adopterHTML += `
            <li><img src="./img/member/${adopter[i].memPic}"></li>
            `;
}

let jourAdopterPhoto = document.getElementsByClassName('jourAdopterlist')[0];
jourAdopterPhoto.innerHTML = adopterHTML;

}    

xhradopter.open("POST", "adoptMemPic.php", true);
xhradopter.setRequestHeader("content-type", "application/x-www-form-urlencoded");
let data_info = `aquaNo=${aquaNo}`;
xhradopter.send(data_info);
}

//--------------------------------------------------------------------------



// 渲染留言的function
function doPost(aquaNo){
    // console.log(aquaNo);
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
<<<<<<< HEAD

=======
        let aquaNo = JSON.parse(xhr.responseText); //取得aquaNo字串？
        let journalCommentHTML='';
        for(i=0; i<aquaNo.length; i++){
            journalCommentHTML +=`
            <li>
            <div class="jourCommentPersonPic"><img src="./img/member/${aquaNo[i].memPic}"
                  alt=""></div>
            <div class="jourCommentOrder">
              <div class="jourCommentInfo">
                <p class="jourCommentPersonName">${aquaNo[i].memName}</p>
                <p class="jourCommentTime">${aquaNo[i].msgTime}</p>
              </div>
              <div class="jourCommentBox">
                <h5 class="jourCommentWords">${aquaNo[i].msgContent}</h5>
                <div class="jourCommentReport" id="jourIconReportBtn"><i class="fas fa-exclamation-circle"></i></div>
              </div>
            </div>
          </li>
            
            `;
        }

        let message_box = document.getElementById('messageBox');
        message_box.innerHTML = journalCommentHTML;
>>>>>>> 69866c32f557cbad86340e1d7528aea14dacd962
    }

    xhr.open("Post", "??????.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = `aquaNo=${aquaNo}`;
    xhr.send(data_info);
}






window.addEventListener('load', chooseAquaType);

