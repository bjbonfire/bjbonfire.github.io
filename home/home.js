var pagedown0;
var pagedownshow = true;

$(function(){
    year();
    pagedown0 = $("#pagedown0");
    $(window).scroll(function(){
        let scroll = $(document).scrollTop();
        if (scroll > 10) {
            if (pagedownshow) {
                pagedown0.hide();
                pagedownshow = false;
            }
        } else {
            if (!pagedownshow) {
                pagedown0.show();
                pagedownshow = true;
            }
        }
    });
});

function year() {
    let ndate = new Date();
    let nyear = ndate.getFullYear();
    $("#year").text(nyear);
}
function totop() {
    $('html , body').animate({scrollTop: 0},'slow');
}
function topage1() {
    $('html , body').animate({scrollTop: $(window).height()},'slow');
}