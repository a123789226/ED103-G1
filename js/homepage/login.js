$(function () {
    // 開啟 Modal 彈跳視窗
    $("a.btn_modal").on("click", function () {
        $("div.overlay").addClass("-on");
    });
    // 關閉 Modal
    $("div.btn_modal_close").on("click", function () {
        $("div.overlay").addClass("-opacity-zero");
        // 設定隔一秒後，移除相關 class
        setTimeout(function () {
            $("div.overlay").removeClass("-on -opacity-zero");
        }, 1000);
    });
});