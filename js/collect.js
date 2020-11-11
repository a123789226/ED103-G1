        //收藏
        
            let memNo = (new URL(document.location)).searchParams;
            memNo = urlSearchParams.get('memNo');
            let xhr2 = new XMLHttpRequest();
            xhr2.onload = function() {
                member = JSON.parse(xhr2.responseText);
                if (member.memId) {
                    //已經登入了，可以開始做事了
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function(e) {
                        if (xhr.status == 200) { //連線成功
                            // console.log(xhr.responseText);
                            // swal(xhr.responseText);
                        } else {
                            swal(xhr.status);
                        }
                    }
                    var url = "../php/collect.php";
                    xhr.open("post", url, true);
                    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
                    let data = `memNo=${memNo}`;
                    xhr.send(data);

                    if ($(".blogPostIconBefore").attr('src') === "../image/blog/icons/icon_heart.svg") {
                        $(".blogPostIconAfter").attr("src", "../image/blog/icons/icon_heart_active.svg");
                    } else {
                        $(".blogPostIconBefore").attr("src", "../image/blog/icons/icon_heart.svg");
                    }
                } else {
                    //沒有登入，請先登入
                    swal("請先登入哦")
                }
            }
            xhr2.open("get", "./memLogin.js", true);
            xhr2.send(null);
        