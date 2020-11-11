function chooseAquaType(){
    //=====使用Ajax 回server端,取回aquatype, 放到頁面上 
    let xhr = new XMLHttpRequest();

    xhr.onload = function(){
        aquas = JSON.parse(xhr.responseText);
        var bookCoverHTML='';
        for(i=0; i<aquas.length; i++){
            bookCoverHTML += `

            <div class="jourBookSection" id="jourBookSection">
                <a href="#">

                <div class="jourBook jourBookOpenBtn" id="jourBookOpenBtn">
                    <div class="jourBookLeft">

                    </div>
                    <div class="jourBookRight">
                        <div class="jourBookPhoto">
                            <img src="././image/journal/journal_dolphin/23.jpg" alt="">
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
        let jourBooks = document.getElementById('jourBooks');
        jourBooks.innerHTML = bookCoverHTML;
        
    }
    xhr.open("Get", "journalType.php", true);
    xhr.send(null); 
}


// }


window.addEventListener('load', chooseAquaType);

