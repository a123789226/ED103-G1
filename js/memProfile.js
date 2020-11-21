function $id(id) {
    return document.getElementById(id);
}
let member;

function doSignOut() {
    //登出後燈箱可正常開啟但會先藏到後面去(移除-on);
    $id('memLightBox').style.display = 'block';
    $id('memLightBox').classList.remove('-on');

    // 頭像移除控制會員小窗的功能的事件聆聽、小窗關閉
    $id('btn_modal').removeEventListener('click', showMemberProfileBox);
    $id('memProfileBlock').style.display = 'none';

    // 小窗的會員名字清空
    // 執行logout.php清空session所有會員資料
    // 圖片跟動畫也返還樣式
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        $id('memNameInProfileBlock').innerHTML = '';
        $id('btn_modal').style.backgroundColor = '#333333';
        $id('memberPic').src = `./image/header/header_member_fish.png`;
        $id('memberPic').classList.remove('memberImg');
        $id('memberPic').title = 'Log In';
        $id('memberPic').style.transition = '0.5s cubic-bezier(.44,-1.25,1,.31)';
        member = {};
        window.location.href = 'homepage.html';
    }
    xhr.open("get", "logout.php", true);
    xhr.send(null);
    // alert('登出成功');


}//showLoginForm

//按下登入執行
function sendForm() {
    //=====使用Ajax 回server端,取回登入者姓名, 放到頁面上 
    let memId = $id("memId").value;
    let memPsw = $id("memPsw").value;
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.memId) {
            if (member.memStatus == 0) {  //沒停權
                //將登入表單上的資料清空
                $id('memId').value = '';
                $id('memPsw').value = '';
                // 會員名稱顯示、變成會員頭像(沒有就用預設)、跳窗關掉、點頭像可控制會員中心小視窗
                afterLogin();
            } else { //停權
                swal("Sorry!", "Your account has been suspended", "error", { button: "OK" });
                //將登入表單上的資料清空
                $id('memId').value = '';
                $id('memPsw').value = '';
                // 執行登出的動作(清理session等等動作)
                doSignOut();
            }

        } else {
            $id('memId').value = '';
            $id('memPsw').value = '';
            swal("Sorry!", "Your account or password is wrong!", "error", { button: "Try Again!" });
            // window.alert("Sorry, your password was incorrect. Please double-check your password.");
        }
    }

    xhr.open("Post", "memLogin.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = `memId=${memId}&memPsw=${memPsw}`;
    xhr.send(data_info);
}

// // 每次到頁面都會透過session檢查是否有登入
// function getMemberInfo() {
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (xhr.status == 200) { //success
//             member = JSON.parse(xhr.responseText);
//             if (member.memId) {
//                 // alert('已登入');
//                 // 會員名稱顯示、變成會員頭像(沒有就用預設)、跳窗關掉、點頭像可控制會員中心小視窗
                // afterLogin();
                // $id('memberPic').style.transition = '0s';
//             }
//         } else { //error
//             alert(xhr.status);
//         }
//     }

//     xhr.open("get", "getMemberInfo.php", true);
//     xhr.send(null);
// }

// 登入後會做的一些事情，透過getMemberInfo()及SendForm登入成功後觸發
function afterLogin() {
    // 會員名稱出現
    // alert('123');
    $id("memNameInProfileBlock").innerText = member.memName;
    // 頭像背景變白
    $id('btn_modal').style.backgroundColor = '#ffffff';
    // 更換圖片
    $id('memberPic').src = `./image/memPic/${member.memPic}`;
    $id('memberPic').classList.add('memberImg');
    $id('memberPic').title = 'Member Profile';
    // 關閉登入燈箱
    $id('memLightBox').style.display = 'none';

    // $id('btn_modal').classList.add('controlProfile');
    // let controlProfile = document.getElementsByClassName('controlProfile');
    // controlProfile[0].addEventListener('click', function(){
    //     $id('memProfileBlock').style.display = $id('memProfileBlock').style.display === 'none'? 'block' : 'none';
    // })
    $id('btn_modal').addEventListener('click', showMemberProfileBox);
}

// 點擊頭像控制小窗打開
function showMemberProfileBox() {
    $id('memProfileBlock').style.display = $id('memProfileBlock').style.display === 'none' ? 'block' : 'none';
}



function init() {
    // alert('123');
    //-----------------------檢查是否已登入
    // getMemberInfo();
    // abc();

    //===設定SignOutLink.onclick 事件處理程序是 doSignOut

    $id('SignOutLink').onclick = doSignOut;

    //===設定btnLogin.onclick 事件處理程序是 sendForm
    $id('btnLogin').onclick = sendForm;


}; //window.onload



window.addEventListener("load", init, false);



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



// console.log(member.memName);
// window.setTimeout('member_sham()', 500);

    let vue_member = new Vue({
        el: '#vue_member',
        data: {
            name: null,
            id: null,
            password: null,
            point: null,
            sex: null,
            email: null,
            phone: null,
            birth: null,
            pic: null,

        },
        mounted() {
            //基本資料
            axios.post('getMemberInfo.php')
                .then(function (res) {
                    // console.log(res.data);
                    vue_member.name = res.data.memName;
                    vue_member.id = res.data.memId;
                    let str = res.data.memPsw;
                    let flower = str.replace(/\w/g, '*');
                    vue_member.password = flower;
                    vue_member.point = res.data.point;
                    vue_member.sex = res.data.memSex;
                    vue_member.email = res.data.memEmail;
                    vue_member.phone = res.data.memPhone;
                    vue_member.birth = res.data.memBirth;
                    vue_member.pic = res.data.memPic;
                    let re = '[a-zA-Z0-9]';

                    if (res.data.memId) {
                        $id("memNameInProfileBlock").innerText = res.data.memName;
                        // 頭像背景變白
                        $id('btn_modal').style.backgroundColor = '#ffffff';
                        // 更換圖片
                        $id('memberPic').src = `./${res.data.memPic}`;
                        $id('memberPic').classList.add('memberImg');
                        $id('memberPic').title = 'Member Profile';
                        // 關閉登入燈箱
                        $id('memLightBox').style.display = 'none';

                        // $id('btn_modal').classList.add('controlProfile');
                        // let controlProfile = document.getElementsByClassName('controlProfile');
                        // controlProfile[0].addEventListener('click', function(){
                        //     $id('memProfileBlock').style.display = $id('memProfileBlock').style.display === 'none'? 'block' : 'none';
                        // })
                        $id('btn_modal').addEventListener('click', showMemberProfileBox);
                        $id('memberPic').style.transition = '0s';
                        $id('memBigImg').src = `./${res.data.memPic}`;
                        vue_member.blogPreview();
                        vue_member.blogSaved();
                        vue_member.thanksCard();
                        vue_member.adopt();
                        vue_member.order();
                        vue_member.night();
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });









        },
        methods:{
            edit_confirm : function(){
                // console.log(this.name);
                let params = new URLSearchParams();
                params.append('id', this.id);
                params.append('password', this.password);
                params.append('email', this.email);
                params.append('phone', this.phone);
                params.append('birth', this.birth);
                axios.post('mem_editProfile.php', params)
                .then(function (res) {
                    document.getElementById('showMem').style.display = 'block';
                    document.getElementById('editMem').style.display = 'none';
            })
            .catch(function (err) {
                console.log(err);
            });
        },

            //blogPreview
            blogPreview : function (){
                // console.log(this.id);
                let params = new URLSearchParams();
                params.append('id', this.id);
                axios.post('mem_blogPreview.php', params)
                    .then(function (res) {
                        // console.log(res.data);
                        let blogContainer = document.getElementsByClassName('memBlogTab1')[0];
                        let blogHtml = '';
                        for(let i = 0 ; i < res.data.length ; i++){
                            blogHtml += `
                            <div class="memBlogContent memBlogCard row">
                                <div class="memFormBlogTitle col-4 col-sm-4"><img src="${res.data[i].blogPic}" alt=""></div>
                                <div class="memFormBlogTitle col-4 col-sm-4">${res.data[i].blogTitle}</div>
                                <div class="memFormBlogTitle col-4 col-sm-4">${res.data[i].blogTags}</div>
                            </div>
                            
                            `
                        }
                        // console.log(blogHtml);
                        blogContainer.innerHTML += blogHtml;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },

            //blogSaved
            blogSaved: function () {
                // console.log(this.id);
                let params = new URLSearchParams();
                params.append('id', this.id);
                axios.post('mem_blogSaved.php', params)
                    .then(function (res) {
                        // console.log(res.data);
                        let blogContainer = document.getElementsByClassName('memBlogTab2')[0];
                        let blogHtml = '';
                        for (let i = 0; i < res.data.length; i++) {
                            blogHtml += `
                                <div class="memBlogContent memBlogCard row">
                                    <div class="mem_ana col-sm-2"><img src="${res.data[i].blogPic}" alt=""></div>
                                    <div class="mem_ana col-4 col-sm-5">${res.data[i].blogTitle}</div>
                                    <div class="mem_ana col-4 col-sm-3">${res.data[i].blogTags}</div>
                                    <div class="mem_ana col-4 col-sm-2">
                                    <div class="memBlogClick">
                                        <i class="fas fa-trash-alt blogTrash" data-blogno="${res.data[i].blogNo}"></i>
                                    </div>
                                    </div>
                                </div>
                            
                            `
                        }
                        blogContainer.innerHTML += blogHtml;
                        doMemberFirst();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            
            //thanksCard
            thanksCard: function () {
                // console.log(this.id);
                let params = new URLSearchParams();
                params.append('id', this.id);
                axios.post('mem_thankscard.php', params)
                    .then(function (res) {
                        console.log(res.data);
                        let cardContainer = document.getElementsByClassName('memThanksTable')[0];
                        let cardHtml = '';
                        for (let i = 0; i < res.data.length; i++) {
                            cardHtml += `
                            <div class="memBlogContent memCard row">
                                <div class="mem_ana col-3 col-sm-3 col-lg-3">${res.data[i].cardDate}</div>
                                <div class="mem_ana col-6 col-sm-6 col-lg-6"><img src="${res.data[i].cardFile}"></div>
                            </div>
                            
                            `
                        }
                        cardContainer.innerHTML += cardHtml;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },

            //adoption
            adopt: function () {
                // console.log(this.id);
                let params = new URLSearchParams();
                params.append('id', this.id);
                axios.post('mem_adopt.php', params)
                    .then(function (res) {
                        // console.log(res.data);
                        let adoptContainer = document.getElementsByClassName('memAdoptTable')[0];
                        let adoptHtml = '';
                        for (let i = 0; i < res.data.length; i++) {
                            adoptHtml += `
                                <div class="row memBlogContent memAdoptCard">
                                    <div class="col-5 col-sm-5 mem_ana">${res.data[i].adoptDate}</div>
                                    <div class="col-4 col-sm-4 mem_ana">${res.data[i].aquaType}</div>
                                    <div class="col-3 col-sm-3 mem_ana">${res.data[i].adoptDollar}</div>
                                </div>
                            
                            `
                        }
                        adoptContainer.innerHTML += adoptHtml;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            },
            //order
            order: function () {
                // console.log(this.id);
                let params = new URLSearchParams();
                params.append('id', this.id);
                axios.post('mem_order.php', params)
                    .then(function (res) {
                        console.log(res.data);
                        let orderContainer = document.getElementsByClassName('memOrderTab1')[0];
                        let orderHtml = '';                        
                        for (let i = 0; i < res.data.length; i++) {
                            if(i == 0 ){
                                orderHtml += `
                                    <div class="memBlogContent memOrderCard row">
                                        <div class="col-2 col-sm-2 mem_ana">${res.data[i].ticketOrderNo}</div>
                                        <div class="col-3 col-sm-3 mem_ana">$<span>${res.data[i].ticketTotalPrice}</span></div>
                                        <div class="col-5 col-sm-5 mem_ana">${res.data[i].ticketOrderDate}</div>
                                        <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                                            <i class="fa fa-angle-down fa-lg"></i>
                                        </div>

                                        <div class="col-11 col-sm-11 memOrderDetail memStepContent container">
                                            <div class="row memBlogForm memOrderCardDetail">
                                                <div class="col-3 col-sm-3 memFormTitle">ProdNo.</div>
                                                <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                                                <div class="col-3 col-sm-3 memFormTitle">Price</div>
                                                <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                                            </div>
                                            <div class="row memBlogContent memOrderCardDetail">
                                                <div class="col-3 col-sm-3 memTick">${res.data[i].ticketType}</div>
                                                <div class="col-3 col-sm-3 memTick">${res.data[i].ticketPerson}</div>
                                                <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].ticketPrice}</span></div>
                                                <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].ticketListPrice}</span></div>
                                            </div>
                                `
                            }else if(res.data[i-1].ticketOrderNo == res.data[i].ticketOrderNo){
                                orderHtml += `
                                            <div class="row memBlogContent memOrderCardDetail">
                                                <div class="col-3 col-sm-3 memTick">${res.data[i].ticketType}</div>
                                                <div class="col-3 col-sm-3 memTick">${res.data[i].ticketPerson}</div>
                                                <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].ticketPrice}</span></div>
                                                <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].ticketListPrice}</span></div>
                                            </div>
                                `
                            }else{
                                orderHtml += `
                                        </div>
                                    </div>
                                    <div class="memBlogContent memOrderCard row">
                                        <div class="col-2 col-sm-2 mem_ana">${res.data[i].ticketOrderNo}</div>
                                        <div class="col-3 col-sm-3 mem_ana">$<span>${res.data[i].ticketTotalPrice}</span></div>
                                        <div class="col-5 col-sm-5 mem_ana">${res.data[i].ticketOrderDate}</div>
                                        <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                                        <i class="fa fa-angle-down fa-lg"></i>
                                        </div>

                                        <div class="col-11 col-sm-11 memOrderDetail memStepContent container">
                                            <div class="row memBlogForm memOrderCardDetail">
                                                <div class="col-3 col-sm-3 memFormTitle">ProdNo.</div>
                                                <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                                                <div class="col-3 col-sm-3 memFormTitle">Price</div>
                                                <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                                            </div>
                                            <div class="row memBlogContent memOrderCardDetail">
                                                <div class="col-3 col-sm-3 memTick">${res.data[i].ticketType}</div>
                                                <div class="col-3 col-sm-3 memTick">${res.data[i].ticketPerson}</div>
                                                <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].ticketPrice}</span></div>
                                                <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].ticketListPrice}</span></div>
                                            </div>
                                `
                            }

                            
                        }
                        orderHtml +=`   
                                        </div>
                                    </div>`
                                    
                        orderContainer.innerHTML += orderHtml;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

                    
            },


            night: function () {
                // console.log(this.id);
                let params = new URLSearchParams();
                params.append('id', this.id);
                axios.post('mem_night_order.php', params)
                    .then(function (res) {
                        console.log(res.data);
                        let orderContainer = document.getElementsByClassName('memOrderTab2')[0];
                        let orderHtml = '';
                        for (let i = 0; i < res.data.length; i++) {
                            if (i == 0) {
                                orderHtml += `
                                    <div class="memBlogContent memOrderCard row">
                                        <div class="col-2 col-sm-2 mem_ana">${res.data[i].nightOrderNo}</div>
                                        <div class="col-3 col-sm-3 mem_ana">${res.data[i].nightDate}</div>
                                        <div class="col-2 col-sm-2 mem_ana">$<span>${res.data[i].nightTotalPrice}</span></div>
                                        <div class="col-3 col-sm-3 mem_ana">${res.data[i].nightOrderDate}</div>
                                        <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                                        <i class="fa fa-angle-down fa-lg"></i>
                                        </div>

                                        <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                                        <div class="row memBlogForm memOrderCardDetail">
                                            <div class="col-3 col-sm-3 memFormTitle">AreaNo.</div>
                                            <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                                            <div class="col-3 col-sm-3 memFormTitle">Price</div>
                                            <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                                        </div>
                                        <div class="row memBlogContent memOrderCardDetail">
                                            <div class="col-3 col-sm-3 memTick">${res.data[i].areaType}</div>
                                            <div class="col-3 col-sm-3 memTick">${res.data[i].nightPerson}</div>
                                            <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].areaPrice}</span></div>
                                            <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].nightListPrice}</span></div>
                                        </div>
                                `
                            } else if (res.data[i - 1].nightOrderNo == res.data[i].nightOrderNo) {
                                orderHtml += `
                                        <div class="row memBlogContent memOrderCardDetail">
                                            <div class="col-3 col-sm-3 memTick">${res.data[i].areaType}</div>
                                            <div class="col-3 col-sm-3 memTick">${res.data[i].nightPerson}</div>
                                            <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].areaPrice}</span></div>
                                            <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].nightListPrice}</span></div>
                                        </div>
                                `
                            } else {
                                orderHtml += `
                                </div>
                                </div>
                                    <div class="memBlogContent memOrderCard row">
                                        <div class="col-2 col-sm-2 mem_ana">${res.data[i].nightOrderNo}</div>
                                        <div class="col-3 col-sm-3 mem_ana">${res.data[i].nightDate}</div>
                                        <div class="col-2 col-sm-2 mem_ana">$<span>${res.data[i].nightTotalPrice}</span></div>
                                        <div class="col-3 col-sm-3 mem_ana">${res.data[i].nightOrderDate}</div>
                                        <div class="col-2 col-sm-2 mem_ana memStep" aria-expanded="false">view 
                                        <i class="fa fa-angle-down fa-lg"></i>
                                        </div>

                                        <div class="col-11 col-sm-11 memBlogDetail memStepContent container">
                                        <div class="row memBlogForm memOrderCardDetail">
                                            <div class="col-3 col-sm-3 memFormTitle">AreaNo.</div>
                                            <div class="col-3 col-sm-3 memFormTitle">Amount</div>
                                            <div class="col-3 col-sm-3 memFormTitle">Price</div>
                                            <div class="col-3 col-sm-3 memFormTitle">Subtotal</div>
                                        </div>
                                        <div class="row memBlogContent memOrderCardDetail">
                                            <div class="col-3 col-sm-3 memTick">${res.data[i].areaType}</div>
                                            <div class="col-3 col-sm-3 memTick">${res.data[i].nightPerson}</div>
                                            <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].areaPrice}</span></div>
                                            <div class="col-3 col-sm-3 memTick">$<span>${res.data[i].nightListPrice}</span></div>
                                        </div>
                                `
                            }


                        }
                        orderHtml += `</div>
                        </div>`
                        orderContainer.innerHTML += orderHtml;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });


            },

    }
})
function doMemberFirst(){
    let blogTrash = document.querySelectorAll("i.blogTrash");
    console.log(blogTrash);
    for (let i = 0; i<blogTrash.length; i++){
        blogTrash[i].addEventListener('click', function(){
            let deleteBlogNo = this.dataset.blogno;
            let xhrDeleteBlog = new XMLHttpRequest();
            xhrDeleteBlog.onload = function () {
                // BlogEdit = xhrDeleteBlog.responseText;
                // alert('刪除成功');
                
                let thisBlogRow = blogTrash[i].parentNode.parentNode.parentNode;
                document.getElementsByClassName('memBlogTab2')[0].removeChild(thisBlogRow);
                swal("Delete Succeed!", "", "success");
            }

            xhrDeleteBlog.open("Post", "./php/removeCollect.php", true);
            xhrDeleteBlog.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let data_info = `likework=${deleteBlogNo}`;
            xhrDeleteBlog.send(data_info);
        })
    }
}
 


    $(function () {
        $("a.memTab").on("click", function (e) {
            e.preventDefault();

            /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
            $(this).closest("ul").find("a.memTab").removeClass("-on");
            $(this).addClass("-on");

            /* 找到對應的頁籤內容，加上 -on 來顯示 */
            $("div.memTab").removeClass("-on");
            $("div.memTab." + $(this).attr("data-target")).addClass("-on");
        });
    });

    // member次頁籤
    $(function () {
        $("a.memBlogTab").on("click", function (e) {
            e.preventDefault();

            /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
            $(this).closest("ul").find("a.memBlogTab").removeClass("-on");
            $(this).addClass("-on");

            /* 找到對應的頁籤內容，加上 -on 來顯示 */
            $("div.memBlogTab").removeClass("-on");
            $("div.memBlogTab." + $(this).attr("data-target")).addClass("-on");
        });
    });


// let orderContainer = document.getElementsByClassName('memBlogTab1')[1];
// orderContainer.addEventListener()

    
    // OrderDetail收合
$(".memOrderTab1").on("click",'div.memStep',function () {
        console.log(this);
        $(this).next().slideToggle();
        $(this).find('i').toggleClass('rotate');
    });

$(".memOrderTab2").on("click", 'div.memStep', function () {
    console.log(this);
    $(this).next().slideToggle();
    $(this).find('i').toggleClass('rotate');
});



    let edit_profile = document.getElementById('edit_profile');
    let showMem = document.getElementById('showMem');
    let editMem = document.getElementById('editMem');
    let editConfirm = document.getElementById('edit_confirm');
    let editCancel = document.getElementById('edit_cancel');

    edit_profile.addEventListener('click',function(){
        // console.log(document.getElementById('showMem').style.display());
        if (editMem.style.display === 'none'){
            showMem.style.display = 'none';
            editMem.style.display = 'block';
        }
    });
    

    editCancel.addEventListener('click', function () {
        showMem.style.display = 'block';
        editMem.style.display = 'none';
    });




const fileUploader = document.querySelector('#memPhoto');
let memBigPhoto = document.getElementById('memBigImg');
let memSmallPhoto = document.getElementById('memberPic');

// let bigFile ='';
fileUploader.addEventListener('change', (e) => {
    console.log(e.target.files);       // FileList object
    console.log(e.target.files[0]);    // File Object (Special Blob)
     
    let form = new FormData();
    form.append('bigPhoto', e.target.files[0]);
    $.ajax({
      url: 'memBigPhoto.php',
      cache: false,
      contentType: false,
      processData: false,
      data: form,
      type: 'post',
      success: function (data) {
        console.log(data);
        memBigPhoto.src = `${data}`;
        memSmallPhoto.src = `${data}`;
      },
      error: function (data) {
        console.log(JSON.stringify(data));
      },
    })
});







memBigPhoto.addEventListener('click', function () {

});
