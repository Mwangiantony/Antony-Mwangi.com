
$(document).ready(function(){
    $("#light").click(function(){
        $("body").css("background-color", "rgb(228, 228, 228)");
        $("body").css("color", "inherit");
        $(".profile-row").css("background-color", "#FFF");
        $(".content-row").css("background-color", "#FFF");
        $(".list-group").css("color", "inherit");
        $(".table").css("color", "inherit");

    });
    $("#dark").click(function(){
        $("body").css("background-color", "rgb(20, 20, 20)");
        $("body").css("color", "rgb(238, 238, 238)");
        $(".profile-row").css("background-color", "rgb(29, 29, 29)");
        $(".content-row").css("background-color", "rgb(29, 29, 29)");
        $(".list-group").css("color", "#000");
        $(".table").css("color", "#FFF");
    });
    $("#blue").click(function(){
        $("body").css("background-color", "#18334d");
        $("body").css("color", "#FFF");
        $(".profile-row").css("background-color", "#0a1b2b");
        $(".content-row").css("background-color", "#0a1b2b");
        $(".list-group").css("color", "#18334d");
        $(".table").css("color", "#FFF");
    });
    $("#teal").click(function(){
        $("body").css("background-color", "#008080");
        $("body").css("color", "#FFF");
        $(".profile-row").css("background-color", "#005353");
        $(".content-row").css("background-color", "#005353");
        $(".list-group").css("color", "#008080");
        $(".table").css("color", "#FFF");
    });
});