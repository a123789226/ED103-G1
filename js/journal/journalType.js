function chooseAquaType(){
    //=====使用Ajax 回server端,取回aquatype, 放到頁面上 
  demoDolphin();
  demoWhale();
  demoWhale();
  demoTurtle();
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
                            <img src="./img/aqua/${aquas[i].aquaNo}.jpg" alt="">
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
                                <th>Found Place</th>
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
                            <img src="./img/aqua/${aquas[i].aquaNo}.jpg" alt="">
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
                                <th>Found Place</th>
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
        openBookDolphin();


        
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
                        <img src="./img/aqua/${aquas[i].aquaNo}.jpg" alt="">
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
                            <th>Found Place</th>
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
    openBookDolphin();

    
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
                        <img src="./img/aqua/${aquas[i].aquaNo}.jpg" alt="">
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
                            <th>Found Place</th>
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
    openBookDolphin();

    
}
xhrTurtle.open("Get", "journalTypeTurtle.php", true);
xhrTurtle.send(null); 

$.ajax({
  url: 'journalPageUp.php',
  type: 'get',
  success: function (data) {
    data1 = JSON.parse(data);
    // console.log(data1.aquaNo);
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


var check = 1;

function openBookDolphin(){
  let jourBookOpenBtn = document.getElementsByClassName('jourBookOpenBtn');
    let openAquaNo = document.getElementById('openAquaNo');
    let openAquaName = document.getElementById('openAquaName');
    let openFoundLoc = document.getElementById('openFoundLoc');
    let openArriveDate = document.getElementById('openArriveDate');
    let openAquaStory = document.getElementById('openAquaStory');
    let openAquaPic = document.getElementById('openAquaPic');
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
                check = 1;
                for(let i= 1 ; i<10; i++){
                    $("#flipbook2").turn("removePage", i+1);
                }
            }

               //帶入journal內頁
               $.ajax({
                url: 'journalPage.php',
                type: 'post',
                dataType: 'json',
                data:{
                    aquaNo: aquaNo,
                },  
                success: function (data) {
                    // console.log($("#flipbook2").turn("pages"));

                    // console.log(data);
                    openAquaNo.innerText = data[0].aquaNo;
                    openAquaName.innerText = data[0].aquaName;
                    openFoundLoc.innerText = data[0].rescueLoc;
                    openArriveDate.innerText = data[0].arriveDate;
                    openAquaStory.innerText = data[0].jourStory;
                    openAquaPic.src = `./img/aqua/${data[0].aquaPic}`;
                    // console.log(data);
                  for(let i=0; i<data.length; i++){
                      if( i == 0){
                        element = $(`<div />`).html(`
                        <div class="hard jourPage${i+1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                          <div class="jourPagePhotoArea1">
                            <div class="jourPagePhotoLeft1">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight1">
                              <div class="jourPagePhotoRightInner1">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner1">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
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
                                  <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                                </div>
                                <div class="jourPagePhotoRight1">
                                  <div class="jourPagePhotoRightInner1">
                                    <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                                  </div>
                                  <div class="jourPagePhotoRightInner1">
                                    <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
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
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight1">
                              <div class="jourPagePhotoRightInner1">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner1">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
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
                  $('#flipbook2 .jourLastPage').css('width','400px');
                  $('#flipbook2 .jourLastPage').css('height','600px');
                  $('#flipbook2 .jourLastPage h4').css('padding-top','200px');
                  $('#flipbook2 .jourLastPage h4').css('margin','0 auto');

                },
                error: function (data) {
                  console.log(JSON.stringify(data));
                },
              })
              //傳aquaNo, aquaPic到adopt.php  
              doAquano(aquaNo);
              
              if(check == 1 ){
                check += 1;
                rwdLightBox(aquaNo);
              }
              //帶入認養人頭像
              doMemPic(aquaNo);
              
              // 渲染留言的function
              doPost(aquaNo);
              
            })
    }
}

//--------------------------------------------------------------------------
//傳aquaNo, aquaPic到adopt.php
function doAquano(aquaNo){
  // console.log(aquaNo);
  let xhradopt = new XMLHttpRequest();
  
  xhradopt.onload = function(){

      let adoptAqua = JSON.parse(xhradopt.responseText);
      // console.log(adoptAqua);

      let adoptAquaHTML = `
        <input type="hidden" value="${adoptAqua.aquaNo}">
        <input type="hidden" value="${adoptAqua.aquaPic}">
          `;


let sendAquaNo = document.getElementById('sendAquaNo');
sendAquaNo.innerHTML += adoptAquaHTML;

}    

xhradopt.open("POST", "adoptAquano.php", true);
xhradopt.setRequestHeader("content-type", "application/x-www-form-urlencoded");
let data_info = `aquaNo=${aquaNo}`;
xhradopt.send(data_info);
}


//--------------------------------------------------------------------------
// 找認養人頭像(doMemPic)
function doMemPic(aquaNo){
    // console.log(aquaNo);
    let xhradopter = new XMLHttpRequest();
    
    xhradopter.onload = function(){
        let adopter = JSON.parse(xhradopter.responseText);
        // console.log(adopter);
        // console.log(adopter[0].memPic);
        let adopterHTML='';
        for(i=0; i<adopter.length; i++){
            adopterHTML += `
            <li><img src="${adopter[i].memPic}"></li>
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
      let aquaNo = JSON.parse(xhr.responseText); //取得aquaNo字串？
      // console.log(aquaNo);
        let journalCommentHTML='';
        for(i=0; i<aquaNo.length; i++){
            journalCommentHTML +=`
            <li>
            <div class="jourCommentPersonPic"><img src="./${aquaNo[i].memPic}"
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
    }

    xhr.open("Post", "journalComment.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = `aquaNo=${aquaNo}`;
    xhr.send(data_info);
}



$('#doPost').on('click', function () {
  let aquaNo = $('#openAquaNo').text();
  $.ajax({
    url: 'journalComment1.php',
    type: 'POST',
    dataType: 'json',
    data: {
      aquano: $('#openAquaNo').text(),
      word: $('#myInput').val(),
    },
    complete(e) {
      let word = $('#myInput').val();
      if (e.responseText == 'OhOh') {
      } else {
        doPost(aquaNo);
      }
      
    },
  });
  $('#myInput').val('');
});




function demoDolphin(){
  //帶入journal內頁
  $.ajax({
    url: 'journalDemoDolphin.php',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      // console.log($("#demobook").turn("pages"));

      // console.log(data);
      openAquaNo.innerText = data[0].aquaNo;
      openAquaName.innerText = data[0].aquaName;
      openFoundLoc.innerText = data[0].rescueLoc;
      openArriveDate.innerText = data[0].arriveDate;
      openAquaStory.innerText = data[0].jourStory;
      openAquaPic.src = `./img/aqua/${data[0].aquaPic}`;
      for (let i = 0; i < data.length; i++) {
        if (i == 0) {
          element = $(`<div />`).html(`
                        <div class="hard jourPage${i + 1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                          <div class="jourPagePhotoArea">
                            <div class="jourPagePhotoLeft">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight">
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
          $("#demobook").turn("addPage", element, i + 2);
        } else if (i == data.length - 1) {
          element = $(`<div />`).html(`<div class="hard jourPage${i + 1}">
                            <div class="jourPageContent">
                              <h4>${data[i].jourDate}</h4>
                                <div class="jourPagePhotoArea">
                                <div class="jourPagePhotoLeft">
                                  <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                                </div>
                                <div class="jourPagePhotoRight">
                                  <div class="jourPagePhotoRightInner">
                                    <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                                  </div>
                                  <div class="jourPagePhotoRightInner">
                                    <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                                  </div>
                                </div>
                              </div>
                              <div class="jourPageText">
                                <h4>Story Updates</h4>
                                <p>${data[i].jourContent}</p>
                              </div>
                            </div>
                          </div>`);
          $("#demobook").turn("addPage", element, i + 2);
          element = $(`<div />`).html(`<div class="hard jourLastPage">
                            <h4>Welcome to visit Olivia at <br> Aqua Wonderland!</h4>
                          </div>`);
          $("#demobook").turn("addPage", element, i + 3);
        } else {
          element = $(`<div />`).html(`<div class="jourPage jourPage${i + 1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                            <div class="jourPagePhotoArea">
                            <div class="jourPagePhotoLeft">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight">
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
          $("#demobook").turn("addPage", element, i + 2);
        }


        // $(`.jourPage${(i + 1)} .jourPageContent > h4`).text(data[i].jourDate);
        // $(`.jourPage${(i+1)} .jourPageText1 > p`).text(data[i].jourContent);
        $(`#demobook .page-wrapper .jourPage${i + 1}`).css('width', '300px');
        $(`#demobook .page-wrapper .jourPage${i + 1}`).css('box-shadow', 'none');
        $(`#demobook .page`).css('box-shadow', 'none');
        $(`#demobook .page-wrapper .jourPage${i + 1}`).css('background', 'linear-gradient(to left, #333 0.1%, lightgray .5%, #fff 55%, lightgray 99%)');
      }
      $('.jourLastPage').css('width', '300px');
      $('.jourLastPage').css('height', '420px');
      $('.jourLastPage h4').css('padding-top', '200px');
      $('.jourLastPage h4').css('margin', '0 auto');

    },
    error: function (data) {
      console.log(JSON.stringify(data));
    },
  })
}


function demoWhale() {
  //帶入journal內頁
  $.ajax({
    url: 'journalDemoWhale.php',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      // console.log($("#demobook1").turn("pages"));

      // console.log(data);
      openAquaNo.innerText = data[0].aquaNo;
      openAquaName.innerText = data[0].aquaName;
      openFoundLoc.innerText = data[0].rescueLoc;
      openArriveDate.innerText = data[0].arriveDate;
      openAquaStory.innerText = data[0].jourStory;
      openAquaPic.src = `./img/aqua/${data[0].aquaPic}`;
      for (let i = 0; i < data.length; i++) {
        if (i == 0) {
          element = $(`<div />`).html(`
                        <div class="hard jourPage${i + 1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                          <div class="jourPagePhotoArea">
                            <div class="jourPagePhotoLeft">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight">
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
          $("#demobook1").turn("addPage", element, i + 2);
        } else if (i == data.length - 1) {
          element = $(`<div />`).html(`<div class="hard jourPage${i + 1}">
                            <div class="jourPageContent">
                              <h4>${data[i].jourDate}</h4>
                                <div class="jourPagePhotoArea">
                                <div class="jourPagePhotoLeft">
                                  <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                                </div>
                                <div class="jourPagePhotoRight">
                                  <div class="jourPagePhotoRightInner">
                                    <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                                  </div>
                                  <div class="jourPagePhotoRightInner">
                                    <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                                  </div>
                                </div>
                              </div>
                              <div class="jourPageText">
                                <h4>Story Updates</h4>
                                <p>${data[i].jourContent}</p>
                              </div>
                            </div>
                          </div>`);
          $("#demobook1").turn("addPage", element, i + 2);
          element = $(`<div />`).html(`<div class="hard jourLastPage">
                            <h4>Welcome to visit Olivia at <br> Aqua Wonderland!</h4>
                          </div>`);
          $("#demobook1").turn("addPage", element, i + 3);
        } else {
          element = $(`<div />`).html(`<div class="jourPage jourPage${i + 1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                            <div class="jourPagePhotoArea">
                            <div class="jourPagePhotoLeft">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight">
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
          $("#demobook1").turn("addPage", element, i + 2);
        }


        // $(`.jourPage${(i + 1)} .jourPageContent > h4`).text(data[i].jourDate);
        // $(`.jourPage${(i+1)} .jourPageText1 > p`).text(data[i].jourContent);
        $(`#demobook1 .page-wrapper .jourPage${i + 1}`).css('width', '300px');
        $(`#demobook1 .page-wrapper .jourPage${i + 1}`).css('box-shadow', 'none');
        $(`#demobook1 .page`).css('box-shadow', 'none');
        $(`#demobook1 .page-wrapper .jourPage${i + 1}`).css('background', 'linear-gradient(to left, #333 0.1%, lightgray .5%, #fff 55%, lightgray 99%)');
      }
      $('#demobook1 .jourLastPage').css('width', '300px');
      $('#demobook1 .jourLastPage').css('height', '420px');
      $('#demobook1 .jourLastPage h4').css('padding-top', '200px');
      $('#demobook1 .jourLastPage h4').css('margin', '0 auto');

    },
    error: function (data) {
      console.log(JSON.stringify(data));
    },
  })
}


function demoWhale() {
  //帶入journal內頁
  $.ajax({
    url: 'journalDemoSeal.php',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      // console.log($("#demobook1").turn("pages"));

      // console.log(data);
      openAquaNo.innerText = data[0].aquaNo;
      openAquaName.innerText = data[0].aquaName;
      openFoundLoc.innerText = data[0].rescueLoc;
      openArriveDate.innerText = data[0].arriveDate;
      openAquaStory.innerText = data[0].jourStory;
      openAquaPic.src = `./img/aqua/${data[0].aquaPic}`;
      for (let i = 0; i < data.length; i++) {
        if (i == 0) {
          element = $(`<div />`).html(`
                        <div class="hard jourPage${i + 1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                          <div class="jourPagePhotoArea">
                            <div class="jourPagePhotoLeft">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight">
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
          $("#demobook2").turn("addPage", element, i + 2);
        } else if (i == data.length - 1) {
          element = $(`<div />`).html(`<div class="hard jourPage${i + 1}">
                            <div class="jourPageContent">
                              <h4>${data[i].jourDate}</h4>
                                <div class="jourPagePhotoArea">
                                <div class="jourPagePhotoLeft">
                                  <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                                </div>
                                <div class="jourPagePhotoRight">
                                  <div class="jourPagePhotoRightInner">
                                    <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                                  </div>
                                  <div class="jourPagePhotoRightInner">
                                    <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                                  </div>
                                </div>
                              </div>
                              <div class="jourPageText">
                                <h4>Story Updates</h4>
                                <p>${data[i].jourContent}</p>
                              </div>
                            </div>
                          </div>`);
          $("#demobook2").turn("addPage", element, i + 2);
          element = $(`<div />`).html(`<div class="hard jourLastPage">
                            <h4>Welcome to visit Olivia at <br> Aqua Wonderland!</h4>
                          </div>`);
          $("#demobook2").turn("addPage", element, i + 3);
        } else {
          element = $(`<div />`).html(`<div class="jourPage jourPage${i + 1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                            <div class="jourPagePhotoArea">
                            <div class="jourPagePhotoLeft">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight">
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
          $("#demobook2").turn("addPage", element, i + 2);
        }


        // $(`.jourPage${(i + 1)} .jourPageContent > h4`).text(data[i].jourDate);
        // $(`.jourPage${(i+1)} .jourPageText1 > p`).text(data[i].jourContent);
        $(`#demobook2 .page-wrapper .jourPage${i + 1}`).css('width', '300px');
        $(`#demobook2 .page-wrapper .jourPage${i + 1}`).css('box-shadow', 'none');
        $(`#demobook2 .page`).css('box-shadow', 'none');
        $(`#demobook2 .page-wrapper .jourPage${i + 1}`).css('background', 'linear-gradient(to left, #333 0.1%, lightgray .5%, #fff 55%, lightgray 99%)');
      }
      $('.jourLastPage').css('width', '300px');
      $('.jourLastPage').css('height', '420px');
      $('.jourLastPage h4').css('padding-top', '200px');
      $('.jourLastPage h4').css('margin', '0 auto');

    },
    error: function (data) {
      console.log(JSON.stringify(data));
    },
  })
}


function demoTurtle() {
  //帶入journal內頁
  $.ajax({
    url: 'journalDemoTurtle.php',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      // console.log($("#demobook1").turn("pages"));

      // console.log(data);
      openAquaNo.innerText = data[0].aquaNo;
      openAquaName.innerText = data[0].aquaName;
      openFoundLoc.innerText = data[0].rescueLoc;
      openArriveDate.innerText = data[0].arriveDate;
      openAquaStory.innerText = data[0].jourStory;
      openAquaPic.src = `./img/aqua/${data[0].aquaPic}`;
      for (let i = 0; i < data.length; i++) {
        if (i == 0) {
          element = $(`<div />`).html(`
                        <div class="hard jourPage${i + 1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                          <div class="jourPagePhotoArea">
                            <div class="jourPagePhotoLeft">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight">
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
          $("#demobook3").turn("addPage", element, i + 2);
        } else if (i == data.length - 1) {
          element = $(`<div />`).html(`<div class="hard jourPage${i + 1}">
                            <div class="jourPageContent">
                              <h4>${data[i].jourDate}</h4>
                                <div class="jourPagePhotoArea">
                                <div class="jourPagePhotoLeft">
                                  <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                                </div>
                                <div class="jourPagePhotoRight">
                                  <div class="jourPagePhotoRightInner">
                                    <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                                  </div>
                                  <div class="jourPagePhotoRightInner">
                                    <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                                  </div>
                                </div>
                              </div>
                              <div class="jourPageText">
                                <h4>Story Updates</h4>
                                <p>${data[i].jourContent}</p>
                              </div>
                            </div>
                          </div>`);
          $("#demobook3").turn("addPage", element, i + 2);
          element = $(`<div />`).html(`<div class="hard jourLastPage">
                            <h4>Welcome to visit Olivia at <br> Aqua Wonderland!</h4>
                          </div>`);
          $("#demobook3").turn("addPage", element, i + 3);
        } else {
          element = $(`<div />`).html(`<div class="jourPage jourPage${i + 1}">
                        <div class="jourPageContent">
                          <h4>${data[i].jourDate}</h4>
                            <div class="jourPagePhotoArea">
                            <div class="jourPagePhotoLeft">
                              <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                            </div>
                            <div class="jourPagePhotoRight">
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                              </div>
                              <div class="jourPagePhotoRightInner">
                                <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                              </div>
                            </div>
                          </div>
                          <div class="jourPageText">
                            <h4>Story Updates</h4>
                            <p>${data[i].jourContent}</p>
                          </div>
                        </div>
                      </div>`);
          $("#demobook3").turn("addPage", element, i + 2);
        }


        // $(`.jourPage${(i + 1)} .jourPageContent > h4`).text(data[i].jourDate);
        // $(`.jourPage${(i+1)} .jourPageText1 > p`).text(data[i].jourContent);
        $(`#demobook3 .page-wrapper .jourPage${i + 1}`).css('width', '300px');
        $(`#demobook3 .page-wrapper .jourPage${i + 1}`).css('box-shadow', 'none');
        $(`#demobook3 .page`).css('box-shadow', 'none');
        $(`#demobook3 .page-wrapper .jourPage${i + 1}`).css('background', 'linear-gradient(to left, #333 0.1%, lightgray .5%, #fff 55%, lightgray 99%)');
      }
      $('.jourLastPage').css('width', '300px');
      $('.jourLastPage').css('height', '420px');
      $('.jourLastPage h4').css('padding-top', '200px');
      $('.jourLastPage h4').css('margin', '0 auto');

    },
    error: function (data) {
      console.log(JSON.stringify(data));
    },
  })
}

function rwdLightBox(aquaNo){
  let jourContentRwd = document.getElementById('jourContentRwd');
  jourContentRwd.innerHTML = '';

    $.ajax({
      url: 'journalPage.php',
      type: 'post',
      dataType: 'json',
      data: {
        aquaNo: aquaNo,
      },
      success: function (data) {

        console.log(data);
        // rwdAquaNo.innerText = data[0].aquaNo;
        // rwdAquaName.innerText = data[0].aquaName;
        // rwdAquaLoc.innerText = data[0].rescueLoc;
        // rwdAquaDate.innerText = data[0].arriveDate;
        // rwdPic.src = `./img/aqua/${data[0].aquaPic}`;
        let rwdHtml = '';
        // console.log(data);
        rwdHtml += `            
        <li>
              <div class="hard jourCoverRwd">
                <div class="jourOpenBookRwd">
                  <div class="jourOpenBookRightRwd jourPage0">
                    <div class="jourBookPhotoRwd">
                      <img src="./img/aqua/${data[0].aquaPic}" id="rwdPic">
                    </div>
                    <a href="./vote.html" class="jourBookNameRwd">NAMING</a>
                    <div class="jourBookTextRwd">
                      <table>
                        <tr>
                          <th>Aqua No.</th>
                          <td id="rwdAquaNo">${data[0].aquaNo}</td>
                        </tr>
                        <tr>
                          <th>Aqua Name</th>
                          <td id="rwdAquaName">${data[0].aquaName}</td>
                        </tr>
                        <tr>
                          <th>Found Place</th>
                          <td id="rwdAquaLoc">${data[0].rescueLoc}</td>
                        </tr>
                        <tr>
                          <th>Arrival Date</th>
                          <td id="rwdAquaDate">${data[0].arriveDate}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </li>`;
        for (let i = 0; i < data.length; i++) {

          rwdHtml += `
            <li>
              <div class="jourPageRwd jourPage1">
                <div class="jourPageContentRwd">
                  <h4>${data[i].jourDate}</h4>
                  <div class="jourPagePhotoArea1Rwd">
                    <div class="jourPagePhotoLeft1Rwd">
                      <img src="./img/journal/a${data[i].jourNo}.jpg" alt="">
                    </div>
                    <div class="jourPagePhotoRight1Rwd">
                      <div class="jourPagePhotoRightInner1Rwd">
                        <img src="./img/journal/b${data[i].jourNo}.jpg" alt="">
                      </div>
                      <div class="jourPagePhotoRightInner1Rwd">
                        <img src="./img/journal/c${data[i].jourNo}.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="jourPageText1Rwd">
                    <h4>Story Updates</h4>
                    <p>${data[i].jourContent}</p>
                  </div>
                </div>
              </div>
            </li>
          `


        }
        rwdHtml += `
      <li>
              <div class="jourLastPageRwd">
                <p class="jourLastPageText">Welcome to visit the aquas <br>at Aqua Wonderland!</p>
              </div>
            </li> 
      `
        jourContentRwd.innerHTML += rwdHtml;


        $(document).ready(function () {
          let divWidth = $('#jourSliderBoard').width();
          let imgCount = $('#jourContentRwd li').length;
          $('#jourContentButton').html('');
          for (let i = 0; i < imgCount; i++) {
            $('#jourContentButton').append('<li></li>');
          }
          $('#jourContentButton li:nth-child(1)').addClass('clickMe');

          $('#jourContentRwd').width(divWidth * imgCount);       //ul的寬度
          $('#jourContentRwd li').width(divWidth);               //li的寬度
          $('#jourContentRwd').css('left', '0');               

          let index;
          $('#jourContentButton li').click(function () {
            index = $(this).index();

            $('#jourContentRwd').animate({
              left: divWidth * index * -1,
            });

            $(this).addClass('clickMe');
            $('#jourContentButton li').not(this).removeClass('clickMe');
          });
        });



      },
      error: function (data) {
        console.log(JSON.stringify(data));
      },
    })
  }









































































window.addEventListener('load', chooseAquaType);

