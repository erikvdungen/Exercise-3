$("#Happy").on("click", function () {
    $("#Happy").append("<h2>Happy</h2>");
    $("#Happy").css("background-color", "yellow");
    $("#Happy").css("color", "white");
    $("#Happy").css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");
    $("#Happy").css("font-family", "Happy Monkey");
    $(this).unbind("click");
    $("#Happy .opener").show();
})

$("#Sad").on("click", function () {
    $("#Sad").append("<h2>Sad</h2>");
    $("#Sad").css("background-color", "blue");
    $("#Sad").css("color", "white");
    $("#Sad").css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");
    $("#Sad").css("font-family", "Roboto Condensed"); // Add this line to change the font
    $(this).unbind("click");
    $("#Sad .opener").show();
})

$("#Mad").on("click", function () {
    $("#Mad").append("<h2>MAD</h2>");
    $("#Mad").css("background-color", "red");
    $("#Mad").css("color", "white");
    $("#Mad").css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");
    $("#Mad").css("font-family", "Bebas Neue"); // Add this line to change the font
    $(this).unbind("click");
    $("#Mad .opener").show();
})

$("#Shy").on("click", function () {
    $("#Shy").append("<h2>shy</h2>");
    $("#Shy").css("background-color", "lightblue");
    $("#Shy").css("color", "white");
    $("#Shy").css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");
    $("#Shy").css("font-family", "Saira Extra Condensed");
    $(this).unbind("click");
    $("#Shy .opener").show();
})

$("#Confused").on("click", function () {
    $("#Confused").append("<h2>Confused</h2>");
    $("#Confused").css("background-color", "magenta");
    $("#Confused").css("color", "white");
    $("#Confused").css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");
    $("#Confused").css("font-family", "Shadows Into Light");
    $(this).unbind("click");
    $("#Confused .opener").show();
})

$(".box").prepend('<span class="material-symbols-outlined opener">expand_content</span>')
$(".opener").hide();
