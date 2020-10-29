//Hamburger Btn
$("div.hamburger_box").on("click", function () {
    $("span.hamburger_line").toggleClass("is-active");
    $("span.hamburger_cross").toggleClass("is-active");
    $("ul.main_menu_ul").toggleClass("is-active");
});