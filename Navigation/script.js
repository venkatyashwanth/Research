$(document).ready(function () {
    let navigationEl = $(".nav-list .nav-item")
    $(navigationEl).click(function (event) {
        $(navigationEl).removeClass("active");
        $(this).addClass("active");
    });
});