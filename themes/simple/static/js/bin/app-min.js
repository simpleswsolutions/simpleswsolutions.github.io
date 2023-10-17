$(window).scroll(function () {
    $(this).scrollTop() > 1 ? $("header").addClass("sticky") : $("header").removeClass("sticky")
}), $(".button-collapse").sideNav({menuWidth: 300, edge: "right", closeOnClick: !0}), $(document).ready(function () {
    $(".slider").slider()
}), $("nav li").click(function (e) {
    e.preventDefault(), $("nav li a.active").removeClass("active"), $("a", this).addClass("active")
}), $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var i = this.hash, t = $(i);
    var offset = t.offset();
    var top = offset ? offset.top - 20 : -20;
    $("html, body").stop().animate({scrollTop: top}, 2e3, "swing", function () {
        window.location.hash = i
    })
});