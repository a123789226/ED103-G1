// function blogReport(){
  // 點擊跳窗
  let jourReportBtn = document.getElementsByClassName("jourCommentReport");
  for(let i =0; i <jourReportBtn.length; i++){
    jourReportBtn[i].addEventListener("click", function(e){
      if(member.memId){
        console.log(this.dataset.blogreport);
        let msgReportNo = this.dataset.blogreport;
        // 跳窗
        swal({
          title: "Please type the reason for reporting",
          icon: "warning",
          content: "input",
          buttons:{
            btn: false,
            cancel:{
              text: "Cancel",
              visible: true
            },
            confirm:{
              text: "Confirm",
              visible: true
            },
          }
        })
        .then((value) => {
          if (value !== "" && value !== null){
           
            let reportXHR = new XMLHttpRequest();
            reportXHR.onload = function(e) {
                if (reportXHR.status == 200) { //有刪除成功
                    // alert(reportXHR.responseText);
                    swal({
                  // title:` ${value}`,
                  title:"Thank you!",
                  text: "We will review the post.",
                  visible: true,
                  icon: "success"
                  })
                } else {
                    alert(reportXHR.status);
                }
            }
            var url = "./jourReport.php";
            reportXHR.open("post", url, true);
            reportXHR.setRequestHeader("content-type", "application/x-www-form-urlencoded")
            let data = `msgNo=${msgReportNo}&msgReportReason=${value}`;
            reportXHR.send(data);
          }else{
          //   swal({
          //     title: "You did not input anything",
          //     icon: "warning",
          // })
          }
        })
        // 跳窗END
      }else{
        alert('Please Login.');
      }

    })
  }