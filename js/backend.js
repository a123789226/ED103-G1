function backendDoFirst(){


  // backChatbot
  let backChatbotxhr = new XMLHttpRequest();
  backChatbotxhr.onload = function () {
    backChatbotRow = JSON.parse(backChatbotxhr.responseText);
    // console.log(backChatbotRow);
  }
  backChatbotxhr.open("get", "./backChatbot.php", false);
  backChatbotxhr.send(null);

  let chatbothtml = "";
  for (let i = 0; i < backChatbotRow.length; i++) {
    chatbothtml += `
    <tr>
      <td>${backChatbotRow[i].keywordsNo}</td>
      <td><input type="text" value="${backChatbotRow[i].keywordsQuestion}"size="40"></td>
      <td><textarea rows="2" cols="40">${backChatbotRow[i].keywordsReply} </textarea></td>
      <td><input type="text" value="${backChatbotRow[i].keywords}" size="10"></td>
      <td>
        <i class="fas fa-pen editChatbot"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backChatbotTable').innerHTML = chatbothtml;


  // backChatbot 修改
  let editChatbot = document.querySelectorAll("i.editChatbot");
  for (let i = 0; i < editChatbot.length; i++) {
    editChatbot[i].addEventListener("click", function () {
      let keywordsNo = editChatbot[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let keywordsQuestion = editChatbot[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let keywordsReply = editChatbot[i].parentNode.previousElementSibling.previousElementSibling.children[0].value;
      let keywords = editChatbot[i].parentNode.previousElementSibling.children[0].value;
      // alert(keywordsNo);

      let xhrEditChatbot = new XMLHttpRequest();
      xhrEditChatbot.onload = function () {
        chatbotEdit = xhrEditChatbot.responseText;
        console.log(chatbotEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditChatbot.open("Post", "EditbackChatbot.php", true);
      xhrEditChatbot.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `keywordsNo=${keywordsNo}&keywordsQuestion=${keywordsQuestion}&keywordsReply=${keywordsReply}&keywords=${keywords}`;
      xhrEditChatbot.send(data_info);
    })
  }




  // backMember
  let backMemberxhr = new XMLHttpRequest();
  backMemberxhr.onload = function () {
    backMemberRow = JSON.parse(backMemberxhr.responseText);
    // console.log(backMemberRow);
  }
  backMemberxhr.open("get", "./backMember.php", false);
  backMemberxhr.send(null);

  let memhtml = "";
  for (let i = 0; i < backMemberRow.length; i++){
    memhtml += `
    <tr>
      <td>${backMemberRow[i].memNo}</td>
      <td>${backMemberRow[i].memName}</td>
      <td>${backMemberRow[i].memId}</td>
      <td>${backMemberRow[i].memPsw}</td>
      <td>${backMemberRow[i].memEmail}</td>
      <td>${backMemberRow[i].memSex}</td>
      <td>${backMemberRow[i].memPhone}</td>
      <td>${backMemberRow[i].memBirth}</td>
      <td>${backMemberRow[i].memPic}</td>
      <td><input type="text" value="${backMemberRow[i].point}" size="5"></td>
      <td><input type="text" value="${backMemberRow[i].memStatus}" size="3"></td>
      <td>        
        <i class="fas fa-pen editMember"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backMemberTable').innerHTML = memhtml;


  // backMember 修改
  let editMember = document.querySelectorAll("i.editMember");
  for (let i = 0; i < editMember.length; i++) {
    editMember[i].addEventListener("click", function () {
      let memNo = editMember[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let point = editMember[i].parentNode.previousElementSibling.previousElementSibling.children[0].value;
      let memStatus = editMember[i].parentNode.previousElementSibling.children[0].value;
      // alert(memStatus);

      let xhrEditMember = new XMLHttpRequest();
      xhrEditMember.onload = function () {
        memberEdit = xhrEditMember.responseText;
        console.log(memberEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditMember.open("Post", "EditbackMember.php", true);
      xhrEditMember.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `memNo=${memNo}&point=${point}&memStatus=${memStatus}`;
      xhrEditMember.send(data_info);
    })
  }




  // backAqua
  let backAquaxhr = new XMLHttpRequest();
  backAquaxhr.onload = function () {
    backAquaRow = JSON.parse(backAquaxhr.responseText);
    // console.log(backAquaRow);
  }
  backAquaxhr.open("get", "./backAqua.php", false);
  backAquaxhr.send(null);

  let aquahtml = "";
  for (let i = 0; i < backAquaRow.length; i++) {
    aquahtml += `
    <tr>
      <td>${backAquaRow[i].aquaNo}</td>
      <td><input type="text" value="${backAquaRow[i].aquaType}" size="10"></td>
      <td><input type="text" value="${backAquaRow[i].aquaName}" size="10"></td>
      <td><input type="text" value="${backAquaRow[i].aquaAge}" size="3"></td>
      <td><input type="text" value="${backAquaRow[i].aquaSex}" size="3"></td>
      <td><input type="date" value="${backAquaRow[i].arriveDate}" size="15"></td>
      <td><input type="text" value="${backAquaRow[i].rescueLoc}" size="10"></td>
      <td><textarea rows="2" cols="20">${backAquaRow[i].jourStory}</textarea></td>
      <td><input type="text" value="${backAquaRow[i].recoverStatus}" size="3"></td>
      <td><input type="date" value="${backAquaRow[i].releaseDate}" size="15"></td>
      <td><input type="text" value="${backAquaRow[i].releaseLoc}" size="10"></td>
      <td><input type="text" value="${backAquaRow[i].aquaPic}" size="10"></td>
      <td><input type="text" value="${backAquaRow[i].adoptTotalNum}" size="3"></td>
      <td><input type="text" value="${backAquaRow[i].adoptTotalAmt}" size="5"></td>
      <td><input type="text" value="${backAquaRow[i].nameStatus}" size="3"></td>
      <td><input type="date" value="${backAquaRow[i].nameStart}" size="15"></td>
      <td><input type="date" value="${backAquaRow[i].nameEnd}" size="15"</td>
      <td><input type="date" value="${backAquaRow[i].voteStart}" size="15"</td>
      <td><input type="date" value="${backAquaRow[i].voteEnd}" size="15"</td>
      <td>
        <i class="fas fa-pen editAqua"></i>
      </td>
    </tr> 
    `
  }

  document.getElementById('backAquaTable').innerHTML = aquahtml;


  // backAqua 修改
  let editAqua = document.querySelectorAll("i.editAqua");
  for (let i = 0; i < editAqua.length; i++) {
    editAqua[i].addEventListener("click", function () {
      let aquaNo = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let aquaType = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let aquaName = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let aquaAge = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let aquaSex = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let arriveDate = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let rescueLoc = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let jourStory = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let recoverStatus = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let releaseDate = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let releaseLoc = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let aquaPic = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let adoptTotalNum = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let adoptTotalAmt = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let nameStatus = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let nameStart = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let nameEnd = editAqua[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
      let voteStart = editAqua[i].parentNode.previousElementSibling.previousElementSibling.children[0].value;
      let voteEnd = editAqua[i].parentNode.previousElementSibling.children[0].value;
      // alert(adoptTotalNum);

      let xhrEditAqua = new XMLHttpRequest();
      xhrEditAqua.onload = function () {
        AquaEdit = xhrEditAqua.responseText;
        // console.log(AquaEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditAqua.open("Post", "EditbackAqua.php", true);
      xhrEditAqua.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `
        aquaNo=${aquaNo}&
        aquaType=${aquaType}&
        aquaName=${aquaName}&
        aquaAge=${aquaAge}&
        aquaSex=${aquaSex}&
        arriveDate=${arriveDate}&
        rescueLoc=${rescueLoc}&
        jourStory=${jourStory}&
        recoverStatus=${recoverStatus}&
        releaseDate=${releaseDate}&
        releaseLoc=${releaseLoc}&
        aquaPic=${aquaPic}&
        adoptTotalNum=${adoptTotalNum}&
        adoptTotalAmt=${adoptTotalAmt}&
        nameStatus=${nameStatus}&
        nameStart=${nameStart}&
        nameEnd=${nameEnd}&
        voteStart=${voteStart}&
        voteEnd=${voteEnd}`;
      xhrEditAqua.send(data_info);
    })
  }




  // backTicketOrder
  let backTicketOrderxhr = new XMLHttpRequest();
  backTicketOrderxhr.onload = function () {
    backTicketOrderRow = JSON.parse(backTicketOrderxhr.responseText);
    // console.log(backTicketOrderRow.length);
    let backTicketOrderHtml = '';
    for (let i = 0; i < backTicketOrderRow.length; i++) {
      if (i == 0) {
        backTicketOrderHtml += `
          <div class="mgrTicketOrder mgrOrderCard row">
            <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].ticketOrderNo}</div>
            <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].memNo}</div>
            <div class="col-md-4 mgrTitle">${backTicketOrderRow[i].ticketOrderDate}</div>
            <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].ticketTotalPrice}</div>
            <div class="col-md-2 mgrTitle mgrStep">View
              <i class="fa fa-angle-down fa-lg"></i>
            </div>
            <div class="mgrOrderDetail mgrStepContent container" style="text-align:center;">
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrDetailTitle"></div>
                <div class="col-md-2 mgrDetailTitle">Item No</div>
                <div class="col-md-2 mgrDetailTitle">Ticket No</div>
                <div class="col-md-2 mgrDetailTitle">Ticket Person</div>
                <div class="col-md-2 mgrDetailTitle">Total</div>
                <div class="col-md-2 mgrDetailTitle"></div>
              </div>
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrTick"></div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketItemNo}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketNo}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketPerson}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketListPrice}</div>
                <div class="col-md-2 mgrTick"></div>
              </div> `
      } else if (backTicketOrderRow[i-1].ticketOrderNo == backTicketOrderRow[i].ticketOrderNo) {
        backTicketOrderHtml += `
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrTick"></div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketItemNo}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketNo}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketPerson}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketListPrice}</div>
                <div class="col-md-2 mgrTick"></div>
              </div> `
      } else {
        backTicketOrderHtml += `
            </div>
          </div>
          <div class="mgrTicketOrder mgrOrderCard row">
            <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].ticketOrderNo}</div>
            <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].memNo}</div>
            <div class="col-md-4 mgrTitle">${backTicketOrderRow[i].ticketOrderDate}</div>
            <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].ticketTotalPrice}</div>
            <div class="col-md-2 mgrTitle mgrStep">View
              <i class="fa fa-angle-down fa-lg"></i>
            </div>
            <div class="mgrOrderDetail mgrStepContent container" style="text-align:center;">
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrDetailTitle"></div>
                <div class="col-md-2 mgrDetailTitle">Item No</div>
                <div class="col-md-2 mgrDetailTitle">Ticket No</div>
                <div class="col-md-2 mgrDetailTitle">Ticket Person</div>
                <div class="col-md-2 mgrDetailTitle">Total</div>
                <div class="col-md-2 mgrDetailTitle"></div>
              </div>
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrTick"></div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketItemNo}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketNo}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketPerson}</div>
                <div class="col-md-2 mgrTick">${backTicketOrderRow[i].ticketListPrice}</div>
                <div class="col-md-2 mgrTick"></div>
              </div> `
      }
    }
    backTicketOrderHtml += `
        </div>
      </div>`
    document.getElementById('backTicketOrderTable').innerHTML += backTicketOrderHtml;
  }

  backTicketOrderxhr.open("get", "./backTicketOrder.php", false);
  backTicketOrderxhr.send(null);




  // backNightOrder
  let backNightOrderxhr = new XMLHttpRequest();
  backNightOrderxhr.onload = function () {
    backNightOrderRow = JSON.parse(backNightOrderxhr.responseText);
    // console.log(backNightOrderRow.length);
    let backNightOrderHtml = '';
    for (let i = 0; i < backNightOrderRow.length; i++) {
      if (i == 0) {
        backNightOrderHtml += `
          <div class="row mgrOrderTitle mgrOrderCard">
            <div class="col-md-2 mgrTitle">Order No</div>
            <div class="col-md-2 mgrTitle">Member No</div>
            <div class="col-md-4 mgrTitle">Order Date</div>
            <div class="col-md-2 mgrTitle">Total</div>
            <div class="col-md-2 mgrTitle">Detail</div>
          </div>
          <div class="mgrTicketOrder mgrOrderCard row">
            <div class="col-md-2 mgrTitle">${backNightOrderRow[i].nightOrderNo}</div>
            <div class="col-md-2 mgrTitle">${backNightOrderRow[i].memNo}</div>
            <div class="col-md-4 mgrTitle">${backNightOrderRow[i].nightOrderDate}</div>
            <div class="col-md-2 mgrTitle">${backNightOrderRow[i].nightTotalPrice}</div>
            <div class="col-md-2 mgrTitle mgrStep">View
              <i class="fa fa-angle-down fa-lg"></i>
            </div>
            <div class="mgrOrderDetail mgrStepContent container">
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrDetailTitle">Item No</div>
                <div class="col-md-2 mgrDetailTitle">Order No</div>
                <div class="col-md-2 mgrDetailTitle">Area No</div>
                <div class="col-md-2 mgrDetailTitle">Night Person</div>
                <div class="col-md-2 mgrDetailTitle">Total</div>
                <div class="col-md-2 mgrDetailTitle">Night Date</div>
              </div>
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightItemNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightOrderNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].areaNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightPerson}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightListPrice}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightDate}</div>
              </div>  `
      } else if (backNightOrderRow[i - 1].nightOrderNo == backNightOrderRow[i].nightOrderNo) {
        backNightOrderHtml += `
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightItemNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightOrderNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].areaNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightPerson}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightListPrice}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightDate}</div>
              </div>  `
      } else {
        backNightOrderHtml += `
            </div>
          </div>
          <div class="mgrTicketOrder mgrOrderCard row">
            <div class="col-md-2 mgrTitle">${backNightOrderRow[i].nightOrderNo}</div>
            <div class="col-md-2 mgrTitle">${backNightOrderRow[i].memNo}</div>
            <div class="col-md-4 mgrTitle">${backNightOrderRow[i].nightOrderDate}</div>
            <div class="col-md-2 mgrTitle">${backNightOrderRow[i].nightTotalPrice}</div>
            <div class="col-md-2 mgrTitle mgrStep">View
              <i class="fa fa-angle-down fa-lg"></i>
            </div>
            <div class="mgrOrderDetail mgrStepContent container">
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrDetailTitle">Item No</div>
                <div class="col-md-2 mgrDetailTitle">Order No</div>
                <div class="col-md-2 mgrDetailTitle">Area No</div>
                <div class="col-md-2 mgrDetailTitle">Night Person</div>
                <div class="col-md-2 mgrDetailTitle">Total</div>
                <div class="col-md-2 mgrDetailTitle">Night Date</div>
              </div>
              <div class="row mgrOrderCardDetail">
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightItemNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightOrderNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].areaNo}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightPerson}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightListPrice}</div>
                <div class="col-md-2 mgrTick">${backNightOrderRow[i].nightDate}</div>
              </div> `
      }
    }
    backNightOrderHtml += `
          </div>
        </div> `
    document.getElementById('backNightOrderTable').innerHTML = backNightOrderHtml;
  }

  backNightOrderxhr.open("get", "./backNightOrder.php", false);
  backNightOrderxhr.send(null);




  // backTicketInfo
  let backTicketInfoxhr = new XMLHttpRequest();
  backTicketInfoxhr.onload = function () {
    backTicketInfoRow = JSON.parse(backTicketInfoxhr.responseText);
    // console.log(backTicketInfoRow);
  }
  backTicketInfoxhr.open("get", "./backTicketInfo.php", false);
  backTicketInfoxhr.send(null);

  let ticketInfohtml = "";
  for (let i = 0; i < backTicketInfoRow.length; i++) {
    ticketInfohtml += `
    <tr>
      <td>${backTicketInfoRow[i].ticketNo}</td>
      <td><input type="text" value="${backTicketInfoRow[i].ticketType}" size="10"></td>
      <td><input type="text" value="${backTicketInfoRow[i].ticketPrice}" size="5"></td>
      <td>        
        <i class="fas fa-pen editTicketInfo"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backTicketInfoTable').innerHTML = ticketInfohtml;


  // backTicketInfo 修改
  let editTicketInfo = document.querySelectorAll("i.editTicketInfo");
  for (let i = 0; i < editTicketInfo.length; i++){
    editTicketInfo[i].addEventListener("click", function(){
      let ticketNo = editTicketInfo[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let ticketType = editTicketInfo[i].parentNode.previousElementSibling.previousElementSibling.children[0].value;
      let ticketPrice = editTicketInfo[i].parentNode.previousElementSibling.children[0].value;
      // alert(ticketPrice);

      let xhrEditTicket = new XMLHttpRequest();
      xhrEditTicket.onload = function () {
        ticketInfoEdit = xhrEditTicket.responseText;
        // console.log(ticketInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }
    
      xhrEditTicket.open("Post", "EditbackTicketInfo.php", true);
      xhrEditTicket.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `ticketNo=${ticketNo}&ticketType=${ticketType}&ticketPrice=${ticketPrice}`;
      xhrEditTicket.send(data_info);
    })
  }




  // backNightInfo
  let backNightInfoxhr = new XMLHttpRequest();
  backNightInfoxhr.onload = function () {
    backNightInfoRow = JSON.parse(backNightInfoxhr.responseText);
    // console.log(backNightInfoRow);
  }
  backNightInfoxhr.open("get", "./backNightInfo.php", false);
  backNightInfoxhr.send(null);

  let nightInfohtml = "";
  for (let i = 0; i < backNightInfoRow.length; i++) {
    nightInfohtml += `
    <tr>
      <td>${backNightInfoRow[i].areaNo}</td>
      <td><input type="text" value="${backNightInfoRow[i].areaCapacity}" size="10"></td>
      <td><input type="text" value="${backNightInfoRow[i].areaPrice}" size="5"></td>
      <td>        
        <i class="fas fa-pen editNightInfo"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backNightInfoTable').innerHTML = nightInfohtml;


  // backNightInfo 修改
  let editNightInfo = document.querySelectorAll("i.editNightInfo");
  for (let i = 0; i < editNightInfo.length; i++) {
    editNightInfo[i].addEventListener("click", function () {
      let areaNo = editNightInfo[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let areaCapacity = editNightInfo[i].parentNode.previousElementSibling.previousElementSibling.children[0].value;
      let areaPrice = editNightInfo[i].parentNode.previousElementSibling.children[0].value;
      // alert(nightPrice);

      let xhrEditNight = new XMLHttpRequest();
      xhrEditNight.onload = function () {
        NightInfoEdit = xhrEditNight.responseText;
        // console.log(NightInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditNight.open("Post", "EditbackNightInfo.php", true);
      xhrEditNight.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `areaNo=${areaNo}&areaCapacity=${areaCapacity}&areaPrice=${areaPrice}`;
      xhrEditNight.send(data_info);
    })
  }




  // backAdopt
  let backAdoptxhr = new XMLHttpRequest();
  backAdoptxhr.onload = function () {
    backAdoptRow = JSON.parse(backAdoptxhr.responseText);
    // console.log(backAdoptRow);
  }
  backAdoptxhr.open("get", "./backAdopt.php", false);
  backAdoptxhr.send(null);

  let adopthtml = "";
  for (let i = 0; i < backAdoptRow.length; i++) {
    adopthtml += `
    <tr>
      <td>${backAdoptRow[i].adoptNo}</td>
      <td>${backAdoptRow[i].memNo}</td>
      <td>${backAdoptRow[i].aquaNo}</td>
      <td>${backAdoptRow[i].adoptDate}</td>
      <td>${backAdoptRow[i].adoptDollar}</td>
    </tr>
    `
  }

  document.getElementById('backAdoptTable').innerHTML = adopthtml;




  // backJournal
  let backJournalxhr = new XMLHttpRequest();
  backJournalxhr.onload = function () {
    backJournalRow = JSON.parse(backJournalxhr.responseText);
    // console.log(backJournalRow);
  }
  backJournalxhr.open("get", "./backJournal.php", false);
  backJournalxhr.send(null);

  let journalhtml = "";
  for (let i = 0; i < backJournalRow.length; i++) {
    journalhtml += `
    <tr>
      <td>${backJournalRow[i].jourNo}</td>
      <td><input type="text" value="${backJournalRow[i].aquaNo}" size="3"></td>
      <td><textarea>${backJournalRow[i].jourStory}</textarea></td>
      <td><textarea>${backJournalRow[i].jourContent}</textarea></td>
      <td><input type="text" value="${backJournalRow[i].jourPic1}"></td>
      <td><input type="text" value="${backJournalRow[i].jourPic2}"></td>
      <td><input type="text" value="${backJournalRow[i].jourPic3}"></td>
      <td><input type="date" value="${backJournalRow[i].jourDate}"></td>
      <td>
        <i class="fas fa-pen editJournal"></i>
      </td>
</tr>
    `
  }

  document.getElementById('backJournalTable').innerHTML = journalhtml;


  // backJournal 修改
  // let editJournal = document.querySelectorAll("i.editJournal");
  // for (let i = 0; i < editJournal.length; i++) {
  //   editJournal[i].addEventListener("click", function () {
  //     let jourNo = editJournal[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
  //     let aquaNo = editJournal[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
  //     let jourStory = editJournal[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
  //     let jourContent = editJournal[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
  //     let jourPic1 = editJournal[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
  //     let jourPic2 = editJournal[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.children[0].value;
  //     let jourPic3 = editJournal[i].parentNode.previousElementSibling.previousElementSibling.children[0].value;
  //     let jourDate = editJournal[i].parentNode.previousElementSibling.children[0].value;
  //     // alert(jourDate);

  //     let xhrEditJournal = new XMLHttpRequest();
  //     xhrEditJournal.onload = function () {
  //       jourEdit = xhrEditJournal.responseText;
  //       // console.log(jourEdit);
  //       swal("Edit Succeed!", "", "success");
  //       alert('異動成功');
  //     }

  //     xhrEditJournal.open("Post", "EditbackJournal.php", true);
  //     xhrEditJournal.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  //     let data_info = `
  //       jourNo=${jourNo}&
  //       aquaNo=${aquaNo}&
  //       jourStory=${jourStory}&
  //       jourContent=${jourContent}&
  //       jourPic1=${jourPic1}&
  //       jourPic2=${jourPic2}&
  //       jourPic3=${jourPic3}&
  //       jourDate=${jourDate}`;
  //     xhrEditJournal.send(data_info);
  //   })
  // }




  // backJournalMsg
  let backJournalMsgxhr = new XMLHttpRequest();
  backJournalMsgxhr.onload = function () {
    backJournalMsgRow = JSON.parse(backJournalMsgxhr.responseText);
    // console.log(backJournalMsgRow);
  }
  backJournalMsgxhr.open("get", "./backJournalMsg.php", false);
  backJournalMsgxhr.send(null);

  let journalMsghtml = "";
  for (let i = 0; i < backJournalMsgRow.length; i++) {
    journalMsghtml += `
    <tr>
      <td>${backJournalMsgRow[i].msgNo}</td>
      <td>${backJournalMsgRow[i].memNo}</td>
      <td>${backJournalMsgRow[i].aquaNo}</td>
      <td>${backJournalMsgRow[i].msgContent}</td>
      <td>${backJournalMsgRow[i].msgTime}</td>
      <td><input type="text" value="${backJournalMsgRow[i].msgStatus}" size="5"></td>
      <td>
        <i class="fas fa-pen editJourMsg"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backJournalMsgTable').innerHTML = journalMsghtml;


  // backJourMsg 修改
  let editJourMsg = document.querySelectorAll("i.editJourMsg");
  for (let i = 0; i < editJourMsg.length; i++) {
    editJourMsg[i].addEventListener("click", function () {
      let msgNo = editJourMsg[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let msgStatus = editJourMsg[i].parentNode.previousElementSibling.children[0].value;
      // alert(nightPrice);

      let xhrEditJourMsg = new XMLHttpRequest();
      xhrEditJourMsg.onload = function () {
        JourMsgEdit = xhrEditJourMsg.responseText;
        // console.log(NightInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditJourMsg.open("Post", "EditbackJourMsg.php", true);
      xhrEditJourMsg.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `msgNo=${msgNo}&msgStatus=${msgStatus}`;
      xhrEditJourMsg.send(data_info);
    })
  }



  
  // backJournalMsgRep
  let backJournalMsgRepxhr = new XMLHttpRequest();
  backJournalMsgRepxhr.onload = function () {
    backJournalMsgRepRow = JSON.parse(backJournalMsgRepxhr.responseText);
    // console.log(backJournalMsgRepRow);
  }
  backJournalMsgRepxhr.open("get", "./backJournalMsgRep.php", false);
  backJournalMsgRepxhr.send(null);

  let journalMsgRephtml = "";
  for (let i = 0; i < backJournalMsgRepRow.length; i++) {
    journalMsgRephtml += `
    <tr>
      <td>${backJournalMsgRepRow[i].msgReportNo}</td>
      <td>${backJournalMsgRepRow[i].msgNo}</td>
      <td>${backJournalMsgRepRow[i].memNo}</td>
      <td>${backJournalMsgRepRow[i].aquaNo}</td>
      <td>${backJournalMsgRepRow[i].msgReportDate}</td>
      <td>${backJournalMsgRepRow[i].msgReportReason}</td>
      <td><input type="text" value="${backJournalMsgRepRow[i].msgReportStatus}" size="5"></td>
      <td>
        <i class="fas fa-pen editJourMsgRep"></i>
      </td>
    </tr>
    `
  }


  document.getElementById('backJournalMsgRepTable').innerHTML = journalMsgRephtml;


  // backJourMsgRep 修改
  let editJourMsgRep = document.querySelectorAll("i.editJourMsgRep");
  for (let i = 0; i < editJourMsgRep.length; i++) {
    editJourMsgRep[i].addEventListener("click", function () {
      let msgReportNo = editJourMsgRep[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let msgReportStatus = editJourMsgRep[i].parentNode.previousElementSibling.children[0].value;
      // alert(msgReportNo);

      let xhrEditJourMsgRep = new XMLHttpRequest();
      xhrEditJourMsgRep.onload = function () {
        JourMsgRepEdit = xhrEditJourMsgRep.responseText;
        // console.log(NightInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditJourMsgRep.open("Post", "EditbackJourMsgRep.php", true);
      xhrEditJourMsgRep.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `msgReportNo=${msgReportNo}&msgReportStatus=${msgReportStatus}`;
      xhrEditJourMsgRep.send(data_info);
    })
  }





  // backThankscard
  let backThankscardxhr = new XMLHttpRequest();
  backThankscardxhr.onload = function () {
    backThankscardRow = JSON.parse(backThankscardxhr.responseText);
    // console.log(backThankscardRow);
  }
  backThankscardxhr.open("get", "./backThankscard.php", false);
  backThankscardxhr.send(null);

  let thankscardhtml = "";
  for (let i = 0; i < backThankscardRow.length; i++) {
    thankscardhtml += `
    <tr>
      <td>${backThankscardRow[i].cardNo}</td>
      <td>${backThankscardRow[i].memNo}</td>
      <td>${backThankscardRow[i].memName}</td>
      <td>${backThankscardRow[i].memEmail}</td>
      <td>${backThankscardRow[i].cardFile}</td>
      <td><input type="text" value="${backThankscardRow[i].cardStatus}" size="5"></td>
      <td>        
        <i class="fas fa-pen editThanks"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backThankscardTable').innerHTML = thankscardhtml;


  // backThankscard 修改
  let editThanks = document.querySelectorAll("i.editThanks");
  for (let i = 0; i < editThanks.length; i++) {
    editThanks[i].addEventListener("click", function () {
      let cardNo = editThanks[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let cardStatus = editThanks[i].parentNode.previousElementSibling.children[0].value;
      // alert(cardNo);

      let xhrEditThanks = new XMLHttpRequest();
      xhrEditThanks.onload = function () {
        ThanksEdit = xhrEditThanks.responseText;
        // console.log(NightInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditThanks.open("Post", "EditbackThanks.php", true);
      xhrEditThanks.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `cardNo=${cardNo}&cardStatus=${cardStatus}`;
      xhrEditThanks.send(data_info);
    })
  }


  

  // backBlog
  let backBlogxhr = new XMLHttpRequest();
  backBlogxhr.onload = function () {
    backBlogRow = JSON.parse(backBlogxhr.responseText);
    // console.log(backBlogRow);
  }
  backBlogxhr.open("get", "./backBlog.php", false);
  backBlogxhr.send(null);

  let bloghtml = "";
  for (let i = 0; i < backBlogRow.length; i++) {
    bloghtml += `
    <tr>
      <td>${backBlogRow[i].blogNo}</td>
      <td>${backBlogRow[i].memNo}</td>
      <td>${backBlogRow[i].blogTitle}</td>
      <td>${backBlogRow[i].blogPic}</td>
      <td>${backBlogRow[i].blogContent1}</td>
      <td>${backBlogRow[i].blogPic1}</td>
      <td>${backBlogRow[i].blogContent2}</td>
      <td>${backBlogRow[i].blogPic2}</td>
      <td>${backBlogRow[i].blogTime}</td>
      <td>${backBlogRow[i].blogMark}</td>
      <td>${backBlogRow[i].blogTags}</td>
      <td><input type="text" value="${backBlogRow[i].blogStatus}" size="5"></td>
      <td>
        <i class="fas fa-pen editBlog"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backBlogTable').innerHTML = bloghtml;


  // backBlog 修改
  let editBlog = document.querySelectorAll("i.editBlog");
  for (let i = 0; i < editBlog.length; i++) {
    editBlog[i].addEventListener("click", function () {
      let blogNo = editBlog[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let blogStatus = editBlog[i].parentNode.previousElementSibling.children[0].value;
      // alert(cardNo);

      let xhrEditBlog = new XMLHttpRequest();
      xhrEditBlog.onload = function () {
        BlogEdit = xhrEditBlog.responseText;
        // console.log(NightInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditBlog.open("Post", "EditbackBlog.php", true);
      xhrEditBlog.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `blogNo=${blogNo}&blogStatus=${blogStatus}`;
      xhrEditBlog.send(data_info);
    })
  }




  // backBlogReport
  let backBlogRepxhr = new XMLHttpRequest();
  backBlogRepxhr.onload = function () {
    backBlogRepRow = JSON.parse(backBlogRepxhr.responseText);
    // console.log(backBlogRepRow);
  }
  backBlogRepxhr.open("get", "./backBlogReport.php", false);
  backBlogRepxhr.send(null);

  let blogRephtml = "";
  for (let i = 0; i < backBlogRepRow.length; i++) {
    blogRephtml += `
    <tr>
      <td>${backBlogRepRow[i].blogReportNo}</td>
      <td>${backBlogRepRow[i].blogNo}</td>
      <td>${backBlogRepRow[i].memNo}</td>
      <td>${backBlogRepRow[i].blogReportReason}</td>
      <td><input type="text" value="${backBlogRepRow[i].blogReportStatus}" size="5"></td>
      <td>
        <i class="fas fa-pen editBlogRep"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backBlogRepTable').innerHTML = blogRephtml;


  // backBlogRep 修改
  let editBlogRep = document.querySelectorAll("i.editBlogRep");
  for (let i = 0; i < editBlogRep.length; i++) {
    editBlogRep[i].addEventListener("click", function () {
      let blogReportNo = editBlogRep[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let blogReportStatus = editBlogRep[i].parentNode.previousElementSibling.children[0].value;
      // alert(cardNo);

      let xhrEditBlogRep = new XMLHttpRequest();
      xhrEditBlogRep.onload = function () {
        BlogRepEdit = xhrEditBlogRep.responseText;
        // console.log(NightInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditBlogRep.open("Post", "EditbackBlogRep.php", true);
      xhrEditBlogRep.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `blogReportNo=${blogReportNo}&blogReportStatus=${blogReportStatus}`;
      xhrEditBlogRep.send(data_info);
    })
  }




  // backBlogMark
  let backBlogMarkxhr = new XMLHttpRequest();
  backBlogMarkxhr.onload = function () {
    backBlogMarkRow = JSON.parse(backBlogMarkxhr.responseText);
    // console.log(backBlogMarkRow);
  }
  backBlogMarkxhr.open("get", "./backBlogMark.php", false);
  backBlogMarkxhr.send(null);

  let blogMarkhtml = "";
  for (let i = 0; i < backBlogMarkRow.length; i++) {
    blogMarkhtml += `
    <tr>
      <td>${backBlogMarkRow[i].blogMarkNo}</td>
      <td>${backBlogMarkRow[i].memNo}</td>
      <td>${backBlogMarkRow[i].blogNo}</td>
    </tr>
    `
  }

  document.getElementById('backBlogMarkTable').innerHTML = blogMarkhtml;


  // backNominate
  let backNominatexhr = new XMLHttpRequest();
  backNominatexhr.onload = function () {
    backNominateRow = JSON.parse(backNominatexhr.responseText);
    // console.log(backNominateRow);
  }
  backNominatexhr.open("get", "./backNominate.php", false);
  backNominatexhr.send(null);

  let nomhtml = "";
  for (let i = 0; i < backNominateRow.length; i++) {
    nomhtml += `
    <tr>
      <td>${backNominateRow[i].nameNo}</td>
      <td>${backNominateRow[i].memNo}</td>
      <td>${backNominateRow[i].aquaNo}</td>
      <td>${backNominateRow[i].nomName}</td>
      <td>${backNominateRow[i].votedNum}</td>
      <td><input type="text" value="${backNominateRow[i].nomStatus}" size="5"></td>
      <td>       
        <i class="fas fa-pen editNominate"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backNominateTable').innerHTML = nomhtml;


  // backNominate 修改
  let editNominate = document.querySelectorAll("i.editNominate");
  for (let i = 0; i < editNominate.length; i++) {
    editNominate[i].addEventListener("click", function () {
      let nameNo = editNominate[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let nomStatus = editNominate[i].parentNode.previousElementSibling.children[0].value;
      // alert(cardNo);

      let xhrEditNominate = new XMLHttpRequest();
      xhrEditNominate.onload = function () {
        NominateEdit = xhrEditNominate.responseText;
        // console.log(NightInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditNominate.open("Post", "EditbackNominate.php", true);
      xhrEditNominate.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `nameNo=${nameNo}&nomStatus=${nomStatus}`;
      xhrEditNominate.send(data_info);
    })
  }




  // backManager
  let backManagerxhr = new XMLHttpRequest();
  backManagerxhr.onload = function () {
    backManagerRow = JSON.parse(backManagerxhr.responseText);
    // console.log(backManagerRow);
  }
  backManagerxhr.open("get", "./backManager.php", false);
  backManagerxhr.send(null);

  let mgrhtml = "";
  for (let i = 0; i < backManagerRow.length; i++) {
    mgrhtml += `
    <tr>
      <td>${backManagerRow[i].mgrNo}</td>
      <td>${backManagerRow[i].mgrName}</td>
      <td>${backManagerRow[i].mgrId}</td>
      <td>${backManagerRow[i].mgrPsw}</td>
      <td><input type="text" value="${backManagerRow[i].mgrStatus}" size="5"></td>
      <td>
        <i class="fas fa-pen editManager"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backManagerTable').innerHTML = mgrhtml;
  
  
  // backManager 修改
  let editManager = document.querySelectorAll("i.editManager");
  for (let i = 0; i < editManager.length; i++) {
    editManager[i].addEventListener("click", function () {
      let mgrNo = editManager[i].parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let mgrStatus = editManager[i].parentNode.previousElementSibling.children[0].value;
      // alert(cardNo);
  
      let xhrEditManager = new XMLHttpRequest();
      xhrEditManager.onload = function () {
        ManagerEdit = xhrEditManager.responseText;
        // console.log(NightInfoEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }
  
      xhrEditManager.open("Post", "EditbackManager.php", true);
      xhrEditManager.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `mgrNo=${mgrNo}&mgrStatus=${mgrStatus}`;
      xhrEditManager.send(data_info);
    })
  }
}




// journal Add
function btnJourAdd(){
  var xhrbtnJourAdd = new XMLHttpRequest;
  xhrbtnJourAdd.onload = function(){
    if (xhrbtnJourAdd.status == 200){
      document.getElementById("ngrbtnJourAdd").innerText.xhrbtnJourAdd.responseText;
    }else{
      swal("Inserted Successfully!", "", "success");
    }
  }
  
  //連接的php
  xhrbtnJourAdd.open("post", "InsertbackJournal.php", true);
  xhrbtnJourAdd.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  
  //送出資料
  let btnJourAddData = `aquaNo=${aquaNo}&jourStory=${jourStory}&jourContent=${jourContent}&jourPic1=${jourPic1}&jourPic2=${jourPic2}&jourPic3=${jourPic3}&jourDate=${jourDate}`;
  xhrjournal.send(btnJourAddData);
}


window.addEventListener('load',backendDoFirst);



// backend主頁籤
$(function(){
  $("a.mgrTab").on("click", function (e) {
    e.preventDefault();

    /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
    $(this).closest("ul").find("a.mgrTab").removeClass("-on");
    $(this).addClass("-on");

    /* 找到對應的頁籤內容，加上 -on 來顯示 */
    $("div.mgrTab").removeClass("-on");
    $("div.mgrTab." + $(this).attr("data-target")).addClass("-on");
  });
});

// backend內容頁籤
$(function(){
  $("a.mgrSecTab").on("click", function (e) {
    e.preventDefault();

    /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
    $(this).closest("ul").find("a.mgrSecTab").removeClass("-on");
    $(this).addClass("-on");

    /* 找到對應的頁籤內容，加上 -on 來顯示 */
    $("div.mgrSecTab").removeClass("-on");
    $("div.mgrSecTab." + $(this).attr("data-target")).addClass("-on");
  });
});

// OrderDetail收合
$("div.mgrSecTab").on("click",'div.mgrStep', function(){
  $(this).next().slideToggle();
  $(this).find('i').toggleClass('rotate');
});

$("div.mgrStep").on("click", function () {
  $(this).next().slideToggle();
  $(this).find('i').toggleClass('rotate');
});

// Hamburger
$("div.hamburger_box").on("click", function(){
  $("span.hamburger_line").toggleClass("is-active");
  $("span.hamburger_cross").toggleClass("is-active");
  $("ul.main_menu_ul").toggleClass("is-active");
});


// Login彈窗
$(function () {
  // 開啟 Modal 彈跳視窗
  $(".btn_modal").on("click", function () {
    $("div.overlay").addClass("-on");
  });
  // 關閉 Modal
  $("div.btn_modal_close").on("click", function () {
    $("div.overlay").addClass("-opacity-zero");
    $('#memId').val('');
    $('#memPsw').val('');
  // 設定隔0.5秒後，移除相關 class
    setTimeout(function () {
      $("div.overlay").removeClass("-on -opacity-zero");
    }, 500);
  });
});
