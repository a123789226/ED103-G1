function backendDoFirst(){
  // backChatbot
  let backChatbotxhr = new XMLHttpRequest();
  backChatbotxhr.onload = function () {
    backChatbotRow = JSON.parse(backChatbotxhr.responseText);
    console.log(backChatbotRow);
  }
  backChatbotxhr.open("get", "./backChatbot.php", false);
  backChatbotxhr.send(null);

  let chatbothtml = "";
  for (let i = 0; i < backChatbotRow.length; i++) {
    chatbothtml += `
    <tr>
      <td>${backChatbotRow[i].keywordsNo}</td>
      <td>${backChatbotRow[i].keywordsQuestion}</td>
      <td>${backChatbotRow[i].keywordsReply}</td>
      <td>${backChatbotRow[i].keywords}</td>
      <td>
        <i class="fas fa-pen"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backChatbotTable').innerHTML = chatbothtml;


  // backMember
  let backMemberxhr = new XMLHttpRequest();
  backMemberxhr.onload = function () {
    backMemberRow = JSON.parse(backMemberxhr.responseText);
    console.log(backMemberRow);
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
      <td>${backMemberRow[i].point}</td>
      <td>
        <select>
          <option value="1">正常</option>
          <option value="2">停權</option>
        </select>
      </td>
      <td>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-times-circle"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backMemberTable').innerHTML = memhtml;


  // backAqua
  let backAquaxhr = new XMLHttpRequest();
  backAquaxhr.onload = function () {
    backAquaRow = JSON.parse(backAquaxhr.responseText);
    console.log(backAquaRow);
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
        console.log(AquaEdit);
        swal("Edit Succeed!", "", "success");
        // alert('異動成功');
      }

      xhrEditAqua.open("Post", "EditbackAqua.php", true);
      xhrEditAqua.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      let data_info = `aquaNo=${aquaNo}&aquaType=${aquaType}&aquaName=${aquaName}&aquaAge=${aquaAge}&aquaSex=${aquaSex}&arriveDate=${arriveDate}&rescueLoc=${rescueLoc}&jourStory=${jourStory}&recoverStatus=${recoverStatus}&releaseDate=${releaseDate}&releaseLoc=${releaseLoc}&aquaPic=${aquaPic}&adoptTotalNum=${adoptTotalNum}&adoptTotalAmt=${adoptTotalAmt}&nameStatus=${nameStatus}&nameStart=${nameStart}&nameEnd=${nameEnd}&voteStart=${voteStart}&voteEnd=${voteEnd}`;
      xhrEditAqua.send(data_info);
    })
  }


  // backTicketOrder
  let backTicketOrderxhr = new XMLHttpRequest();
  backTicketOrderxhr.onload = function () {
    backTicketOrderRow = JSON.parse(backTicketOrderxhr.responseText);
    console.log(backTicketOrderRow);
  }
  backTicketOrderxhr.open("get", "./backTicketOrder.php", false);
  backTicketOrderxhr.send(null);

  let ticketOrderhtml = "";
  for (let i = 0; i < backTicketOrderRow.length; i++) {
    ticketOrderhtml += `
    <tr>
      <td>${backTicketOrderRow[i].ticketOrderNo}</td>
      <td>${backTicketOrderRow[i].memNo}</td>
      <td>${backTicketOrderRow[i].ticketOrderDate}</td>
      <td>${backTicketOrderRow[i].ticketTotalPrice}</td>
      <td class="mgrTitle mgrStep">View
        <i class="fa fa-angle-down fa-lg"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backTicketOrderTable').innerHTML = ticketOrderhtml;


  // backTicketOrderList
  // let backTicketOrderListxhr = new XMLHttpRequest();
  // backTicketOrderListxhr.onload = function () {
  //   backTicketOrderListRow = JSON.parse(backTicketOrderListxhr.responseText);
  //   console.log(backTicketOrderListRow);
  // }
  // backTicketOrderListxhr.open("get", "./backTicketOrderList.php", false);
  // backTicketOrderListxhr.send(null);

  // let ticketOrderListhtml = "";
  // for (let i = 0; i < backTicketOrderListRow.length; i++) {
  //   ticketOrderListhtml += `
  //   <tr>
  //     <td>${backTicketOrderListRow[i].ticketItemNo}</td>
  //     <td>${backTicketOrderListRow[i].ticketOrderNo}</td>
  //     <td>${backTicketOrderListRow[i].ticketNo}</td>
  //     <td>${backTicketOrderListRow[i].ticketPerson}</td>
  //     <td>${backTicketOrderListRow[i].ticketListPrice}</td>
  //   </tr>
  //   `
  // }

  // document.getElementById('backTicketOrderListTable').innerHTML = ticketOrderListhtml;


  // backNightOrder
  let backNightOrderxhr = new XMLHttpRequest();
  backNightOrderxhr.onload = function () {
    backNightOrderRow = JSON.parse(backNightOrderxhr.responseText);
    console.log(backNightOrderRow);
  }
  backNightOrderxhr.open("get", "./backNightOrder.php", false);
  backNightOrderxhr.send(null);

  let nightOrderhtml = "";
  for (let i = 0; i < backNightOrderRow.length; i++) {
    nightOrderhtml += `
    <tr>
      <td>${backNightOrderRow[i].nightOrderNo}</td>
      <td>${backNightOrderRow[i].memNo}</td>
      <td>${backNightOrderRow[i].nightOrderDate}</td>
      <td>${backNightOrderRow[i].nightTotalPrice}</td>
      <td class="mgrTitle mgrStep">View
        <i class="fa fa-angle-down fa-lg"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backNightOrderTable').innerHTML = nightOrderhtml;







  // backTicketInfo
  let backTicketInfoxhr = new XMLHttpRequest();
  backTicketInfoxhr.onload = function () {
    backTicketInfoRow = JSON.parse(backTicketInfoxhr.responseText);
    console.log(backTicketInfoRow);
  }
  backTicketInfoxhr.open("get", "./backTicketInfo.php", false);
  backTicketInfoxhr.send(null);

  let ticketInfohtml = "";
  for (let i = 0; i < backTicketInfoRow.length; i++) {
    ticketInfohtml += `
    <tr>
      <td>${backTicketInfoRow[i].ticketNo}</td>
      <td><input type="text" value="${backTicketInfoRow[i].ticketType}"></td>
      <td><input type="text" value="${backTicketInfoRow[i].ticketPrice}"></td>
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
        console.log(ticketInfoEdit);
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
    console.log(backNightInfoRow);
  }
  backNightInfoxhr.open("get", "./backNightInfo.php", false);
  backNightInfoxhr.send(null);

  let nightInfohtml = "";
  for (let i = 0; i < backNightInfoRow.length; i++) {
    nightInfohtml += `
    <tr>
      <td>${backNightInfoRow[i].areaNo}</td>
      <td>${backNightInfoRow[i].areaCapacity}</td>
      <td>${backNightInfoRow[i].areaPrice}</td>
      <td>        
        <i class="fas fa-pen"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backNightInfoTable').innerHTML = nightInfohtml;


  // backAdopt
  let backAdoptxhr = new XMLHttpRequest();
  backAdoptxhr.onload = function () {
    backAdoptRow = JSON.parse(backAdoptxhr.responseText);
    console.log(backAdoptRow);
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
    console.log(backJournalRow);
  }
  backJournalxhr.open("get", "./backJournal.php", false);
  backJournalxhr.send(null);

  let journalhtml = "";
  for (let i = 0; i < backJournalRow.length; i++) {
    journalhtml += `
    <tr>
      <td>${backJournalRow[i].jourNo}</td>
      <td>${backJournalRow[i].aquaNo}</td>
      <td>${backJournalRow[i].jourStory}</td>
      <td>${backJournalRow[i].jourContent}</td>
      <td>${backJournalRow[i].jourPic1}</td>
      <td>${backJournalRow[i].jourPic2}</td>
      <td>${backJournalRow[i].jourPic3}</td>
      <td>${backJournalRow[i].jourDate}</td>
      <td>
        <i class="fas fa-pen"></i>
      </td>
</tr>
    `
  }

  document.getElementById('backJournalTable').innerHTML = journalhtml;


  // backJournalMsg
  let backJournalMsgxhr = new XMLHttpRequest();
  backJournalMsgxhr.onload = function () {
    backJournalMsgRow = JSON.parse(backJournalMsgxhr.responseText);
    console.log(backJournalMsgRow);
  }
  backJournalMsgxhr.open("get", "./backJournalMsg.php", false);
  backJournalMsgxhr.send(null);

  let journalMsghtml = "";
  for (let i = 0; i < backJournalMsgRow.length; i++) {
    journalMsghtml += `
    <tr>
      <td>${backJournalMsgRow[i].msgNo}</td>
      <td>${backJournalMsgRow[i].memNo}</td>
      <td>${backJournalMsgRow[i].jourNo}</td>
      <td>${backJournalMsgRow[i].msgContent}</td>
      <td>${backJournalMsgRow[i].msgTime}</td>
      <td>${backJournalMsgRow[i].msgStatus}</td>
      <td>
        <i class="fas fa-pen"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backJournalMsgTable').innerHTML = journalMsghtml;


  // backJournalMsgRep
  let backJournalMsgRepxhr = new XMLHttpRequest();
  backJournalMsgRepxhr.onload = function () {
    backJournalMsgRepRow = JSON.parse(backJournalMsgRepxhr.responseText);
    console.log(backJournalMsgRepRow);
  }
  backJournalMsgRepxhr.open("get", "./backJournalMsgRep.php", false);
  backJournalMsgRepxhr.send(null);

  let journalMsgRephtml = "";
  for (let i = 0; i < backJournalMsgRepRow.length; i++) {
    journalMsgRephtml += `
    <tr>
      <td>${backJournalMsgRepRow[i].msgReprtNo}</td>
      <td>${backJournalMsgRepRow[i].memNo}</td>
      <td>${backJournalMsgRepRow[i].jourNo}</td>
      <td>${backJournalMsgRepRow[i].msgNo}</td>
      <td>${backJournalMsgRepRow[i].msgReportStatus}</td>
      <td>${backJournalMsgRepRow[i].msgReportReason}</td>
      <td>${backJournalMsgRepRow[i].msgReportDate}</td>
      <td>
        <i class="fas fa-pen"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backJournalMsgRepTable').innerHTML = journalMsgRephtml;


  // backThankscard
  let backThankscardxhr = new XMLHttpRequest();
  backThankscardxhr.onload = function () {
    backThankscardRow = JSON.parse(backThankscardxhr.responseText);
    console.log(backThankscardRow);
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
      <td>${backThankscardRow[i].cardStatus}</td>
      <td>        
        <a href="#">Resend</a>
      </td>
    </tr>
    `
  }

  document.getElementById('backThankscardTable').innerHTML = thankscardhtml;


  // backBlog
  let backBlogxhr = new XMLHttpRequest();
  backBlogxhr.onload = function () {
    backBlogRow = JSON.parse(backBlogxhr.responseText);
    console.log(backBlogRow);
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
      <td>${backBlogRow[i].blogStatus}</td>
      <td>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-times-circle"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backBlogTable').innerHTML = bloghtml;


  // backBlogReport
  let backBlogRepxhr = new XMLHttpRequest();
  backBlogRepxhr.onload = function () {
    backBlogRepRow = JSON.parse(backBlogRepxhr.responseText);
    console.log(backBlogRepRow);
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
      <td>${backBlogRepRow[i].blogReportStatus}</td>
      <td>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-times-circle"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backBlogRepTable').innerHTML = blogRephtml;


  // backBlogMark
  let backBlogMarkxhr = new XMLHttpRequest();
  backBlogMarkxhr.onload = function () {
    backBlogMarkRow = JSON.parse(backBlogMarkxhr.responseText);
    console.log(backBlogMarkRow);
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
    console.log(backNominateRow);
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
      <td>
        <select>
          <option value="1">Succeeded</option>
          <option value="2">Reject</option>
        </select>
      </td>
      <td>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-times-circle"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backNominateTable').innerHTML = nomhtml;


  // backManager
  let backManagerxhr = new XMLHttpRequest();
  backManagerxhr.onload = function () {
    backManagerRow = JSON.parse(backManagerxhr.responseText);
    console.log(backManagerRow);
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
      <td>
        <select>
          <option value="1">正常</option>
          <option value="2">停權</option>
        </select>
      </td>
      <td>
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-times-circle"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backManagerTable').innerHTML = mgrhtml;
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
$("div.mgrSecTab1").on("click",'.mgrStep', function(){
  $(this).next().slideToggle();
  $(this).find('i').toggleClass('rotate');
});

// Hamburger
$("div.hamburger_box").on("click", function(){
  $("span.hamburger_line").toggleClass("is-active");
  $("span.hamburger_cross").toggleClass("is-active");
  $("ul.main_menu_ul").toggleClass("is-active");
});

