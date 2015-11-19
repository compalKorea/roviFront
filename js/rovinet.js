/**
 * Created by mayaj on 2015-11-13.
 */
$(document).ready(function() {
    changeMainHeight();
    $(window).resize(function() {
        changeMainHeight();
    })
});

function changeMainHeight() {
    $("#main, #crowd, #crowdContent, #rovi, #roviContent, #end").css('height', $(window).height());
}