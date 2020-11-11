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
      <td>${backAquaRow[i].aquaType}</td>
      <td>${backAquaRow[i].aquaName}</td>
      <td>${backAquaRow[i].aquaAge}</td>
      <td>${backAquaRow[i].aquaSex}</td>
      <td>${backAquaRow[i].arriveDate}</td>
      <td>${backAquaRow[i].rescueLoc}</td>
      <td>${backAquaRow[i].jourStory}</td>
      <td>${backAquaRow[i].recoverStatus}</td>
      <td>${backAquaRow[i].releaseDate}</td>
      <td>${backAquaRow[i].releaseLoc}</td>
      <td>${backAquaRow[i].aquaPic}</td>
      <td>${backAquaRow[i].adoptTotalNum}</td>
      <td>${backAquaRow[i].adoptTotalAmt}</td>
      <td>${backAquaRow[i].nameStatus}</td>
      <td>${backAquaRow[i].nameStart}</td>
      <td>${backAquaRow[i].nameEnd}</td>
      <td>${backAquaRow[i].voteStart}</td>
      <td>${backAquaRow[i].voteEnd}</td>
      <td>
        <i class="fas fa-pen"></i>
      </td>
    </tr> 
    `
  }

  document.getElementById('backAquaTable').innerHTML = aquahtml;


  // backTicketOrder
  // let backTicketOrderxhr = new XMLHttpRequest();
  // backTicketOrderxhr.onload = function () {
  //   backTicketOrderRow = JSON.parse(backTicketOrderxhr.responseText);
  //   console.log(backTicketOrderRow);
  // }
  // backTicketOrderxhr.open("get", "./backTicketOrder.php", false);
  // backTicketOrderxhr.send(null);

  // let ticketOrderhtml = "";
  // for (let i = 0; i < backTicketOrderRow.length; i++) {
  //   ticketOrderhtml += `
  //   <div class="mgrTicketOrder word1">
  //     <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].ticketOrderNo}</div>
  //     <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].memNo}</div>
  //     <div class="col-md-4 mgrTitle">${backTicketOrderRow[i].ticketOrderDate}</div>
  //     <div class="col-md-2 mgrTitle">${backTicketOrderRow[i].ticketTotalPrice}</div>
  //     <div class="col-md-2 mgrTitle mgrStep">View
  //       <i class="fa fa-angle-down fa-lg"></i>
  //     </div>
  //   </div>
  //   `
  // }

  // document.getElementById('backTicketOrderTable').innerHTML = ticketOrderhtml;


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
      <td>${backTicketInfoRow[i].ticketType}</td>
      <td>${backTicketInfoRow[i].ticketPrice}</td>
      <td>        
        <i class="fas fa-pen"></i>
      </td>
    </tr>
    `
  }

  document.getElementById('backTicketInfoTable').innerHTML = ticketInfohtml;


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
      <td>
        <select>
          <option value="1">已分享</option>
          <option value="2">未分享</option>
        </select>
      </td>
      <td>        
        <a href="#">Resend</a>
      </td>
    </tr>
    `
  }

  document.getElementById('backThankscardTable').innerHTML = thankscardhtml;


  // backBlog
  // let bacBlogxhr = new XMLHttpRequest();
  // bacBlogxhr.onload = function () {
  //   backBlogRow = JSON.parse(bacBlogxhr.responseText);
  //   console.log(backBlogRow);
  // }
  // bacBlogxhr.open("get", "./backBlog.php", false);
  // bacBlogxhr.send(null);

  // let bloghtml = "";
  // for (let i = 0; i < backBlogRow.length; i++) {
  //   bloghtml += `
  //   <tr>
  //     <td>${backBlogRow[i].nameNo}</td>
  //     <td>${backBlogRow[i].memNo}</td>
  //     <td>${backBlogRow[i].aquaNo}</td>
  //     <td>${backBlogRow[i].nomName}</td>
  //     <td>${backBlogRow[i].votedNum}</td>
  //     <td>
  //       <select>
  //         <option value="1">Succeeded</option>
  //         <option value="2">Reject</option>
  //       </select>
  //     </td>
  //     <td>
  //       <i class="fas fa-check-circle"></i>
  //       <i class="fas fa-times-circle"></i>
  //     </td>
  //   </tr>
  //   `
  // }

  // document.getElementById('backBlogTable').innerHTML = bloghtml;


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
$("div.mgrStep").on("click", function(){
  $(this).next().slideToggle();
  $(this).find('i').toggleClass('rotate');
});

// Hamburger
$("div.hamburger_box").on("click", function(){
  $("span.hamburger_line").toggleClass("is-active");
  $("span.hamburger_cross").toggleClass("is-active");
  $("ul.main_menu_ul").toggleClass("is-active");
});

