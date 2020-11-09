// console.log(member.memName);
window.setTimeout('member_sham()', 500);

function member_sham(){
    let vue_member = new Vue({
        el: '#vue_member',
        data: {
            name: member.memName,
            id: member.memId,
            password: member.memPsw,
            point: member.point,
            sex: member.memSex,
            email: member.memEmail,
            phone: member.memPhone,
            birth: member.memBirth,

        },
        // mounted() {

        //     var params = new URLSearchParams();
        //     params.append('nightDate', this.$data.date);

        //     // let bbb = 0;
        //     axios.post('aqua_rem.php', params)
        //         .then(function (res) {
        //             console.log(res.data.area1Capacity);
        //             vue_remaining.remain_1 = res.data.area1Capacity - res.data.area1Order;
        //             vue_remaining.remain_2 = res.data.area2Capacity - res.data.area2Order;
        //             vue_remaining.remain_3 = res.data.area3Capacity - res.data.area3Order;
        //             vue_remaining.remain_4 = res.data.area4Capacity - res.data.area4Order;
        //         })
        //         .catch(function (err) {
        //             console.log(err);
        //         });


        // },

        // watch: {
        //     date(newValue) {
        //         var params = new URLSearchParams();
        //         params.append('nightDate', newValue);

        //         // let bbb = 0;
        //         axios.post('aqua_rem.php', params)
        //             .then(function (res) {
        //                 console.log(vue_remaining.remain_1);
        //                 vue_remaining.remain_1 = res.data.area1Capacity - res.data.area1Order;
        //                 vue_remaining.remain_2 = res.data.area2Capacity - res.data.area2Order;
        //                 vue_remaining.remain_3 = res.data.area3Capacity - res.data.area3Order;
        //                 vue_remaining.remain_4 = res.data.area4Capacity - res.data.area4Order;
        //             })
        //             .catch(function (err) {
        //                 console.log(err);
        //             });
        //     }
        // }




    })




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

    // OrderDetail收合
    $("div.memStep").on("click", function () {
        $(this).next().slideToggle();
        $(this).find('i').toggleClass('rotate');
    });


    // let edit_profile = document.getElementById('edit_profile');
    // edit_profile.addEventListener('click',function(){
        
    // });



}

