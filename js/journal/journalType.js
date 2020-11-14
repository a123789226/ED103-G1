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
                <a>

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
            <a>

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
            <a>

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


}



function openBookDolphin(){
    let jourBookOpenBtn = document.getElementsByClassName('jourBookOpenBtn');
    for(let i=0; i< jourBookOpenBtn.length; i++){
        jourBookOpenBtn[i].addEventListener('click', function(){
            let aquaNo = this.querySelector('tr').querySelector('td').innerText;
            document.getElementsByClassName("jourBookOpenBtn")[0].style.display = "block";
            document.getElementsByClassName("jour_bk")[0].style.display = "block";
            document.getElementsByClassName("jourLightBox")[0].style.display = "block";
            document.getElementsByClassName('jourBookOpenBtn_close')[0].onclick = function () {
                document.getElementsByClassName("jourLightBox")[0].style.display = "none";
                document.getElementsByClassName("jour_bk")[0].style.display = "none";
            }

            // 渲染留言的function
            doPost(aquaNo);
        })
    }
}

// 渲染留言的function
function doPost(aquaNo){
    console.log(aquaNo);
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {

    }

    xhr.open("Post", "??????.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = `dog=${aquaNo}`;
    xhr.send(data_info);
}






window.addEventListener('load', chooseAquaType);

